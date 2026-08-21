/**
 * Signup attribution
 *
 * The marketing site and the dashboard are on different domains, so by the
 * time a visitor clicks "sign up", the dashboard only sees this site as the
 * referrer -- not where they originally came from. To close that gap, we
 * resolve where a visitor first arrived from and pass it to the dashboard as
 * a single `ref` parameter on signup links, which the dashboard stores on
 * the user at signup.
 *
 * The value is `source/medium/campaign`, with only the source required, so
 * both `hn` and `newsletter/email/launch` are valid. UTM parameters stay on
 * this site for Plausible, which reads them natively; `ref` is only the
 * resolved answer we hand over. Keep this in sync with
 * `AttributionMiddleware` in the readthedocs.org repository.
 */

const STORAGE_KEY = "rtd-attribution";
const UTM_PARAMS = ["utm_source", "utm_medium", "utm_campaign"];

// Visits from the dashboard are existing users coming back to read the
// marketing site, not a source of new signups. Hosted documentation
// (readthedocs.io) is deliberately not in this list -- those readers are
// people we do want to convert.
const SELF_REFERRAL_HOSTS = ["app.readthedocs.org", "app.readthedocs.com"];

/** Get the stored `ref`, or null when unset or localStorage is unavailable. */
function getStoredAttribution() {
  try {
    return window.localStorage.getItem(STORAGE_KEY);
  } catch (error) {
    return null;
  }
}

/** Join parts into a `ref`, dropping empty trailing ones. */
function buildRef(parts) {
  while (parts.length && !parts[parts.length - 1]) {
    parts.pop();
  }
  // Slashes separate the parts, so they can't appear inside one.
  return parts.map((part) => part.trim().replace(/\//g, "-")).join("/");
}

/** Get the referring domain, or an empty string if it isn't a real source. */
function getReferrerHost() {
  if (!document.referrer) {
    return "";
  }
  try {
    const { hostname } = new URL(document.referrer);
    if (
      !hostname ||
      hostname === window.location.hostname ||
      SELF_REFERRAL_HOSTS.includes(hostname)
    ) {
      return "";
    }
    return hostname;
  } catch (error) {
    return "";
  }
}

/**
 * Store where this visitor came from.
 *
 * First touch wins: once stored, later visits never overwrite it. Visits
 * with nothing to attribute store nothing.
 */
function captureFirstTouch() {
  if (getStoredAttribution()) {
    return;
  }

  const search = new URLSearchParams(window.location.search);
  const utm = UTM_PARAMS.map((param) => search.get(param) || "");

  // A campaign link wins, then a `ref` someone linked here with, then
  // wherever the visitor came from.
  const ref = utm[0]
    ? buildRef(utm)
    : buildRef([search.get("ref") || getReferrerHost()]);

  if (!ref) {
    return;
  }

  try {
    window.localStorage.setItem(STORAGE_KEY, ref);
  } catch (error) {
    // localStorage unavailable, attribution is best effort.
  }
}

/**
 * Add the stored `ref` to dashboard signup links.
 *
 * A `ref` already on a link wins, as it's more specific than wherever the
 * visitor happened to arrive from.
 */
function decorateSignupLinks() {
  const ref = getStoredAttribution();
  if (!ref) {
    return;
  }

  for (const link of document.querySelectorAll('a[href*="/accounts/signup"]')) {
    try {
      const url = new URL(link.href);
      if (!url.searchParams.has("ref")) {
        url.searchParams.set("ref", ref);
        link.href = url.toString();
      }
    } catch (error) {
      // Relative or malformed href, leave the link untouched.
    }
  }
}

export { captureFirstTouch, decorateSignupLinks, getStoredAttribution };
