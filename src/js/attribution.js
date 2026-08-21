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

/**
 * Get the referring domain, or an empty string for our own pages.
 *
 * Referrals from the dashboard are kept. Anyone following an old
 * `readthedocs.org` link is logged out when they land here -- that is the
 * only case where the dashboard sends someone our way -- so those are new
 * visitors, not existing users. The dashboard already tags the ones it
 * redirects with `?ref=readthedocs.org`.
 */
function getReferrerHost() {
  if (!document.referrer) {
    return "";
  }
  try {
    const { hostname } = new URL(document.referrer);
    return hostname === window.location.hostname ? "" : hostname;
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
