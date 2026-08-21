/**
 * Signup attribution
 *
 * The marketing site and the dashboard are on different domains, so by the
 * time a visitor clicks "sign up", the dashboard only sees this site as the
 * referrer -- not where they originally came from. To close that gap we
 * record where a visitor first arrived from and pass it to the dashboard on
 * signup links, which stores it on the user at signup.
 *
 * Two separate things are recorded, because they answer different questions:
 *
 * - `ref`, a label we chose, as `source/medium/campaign` with only the
 *   source required. Both `hn` and `newsletter/email/launch` are valid.
 * - `referrer`, the host the visitor actually came from, which nobody chose.
 *
 * UTM parameters stay on this site for Plausible, which reads them natively;
 * `ref` is the resolved label we hand over. Keep this in sync with
 * `AttributionMiddleware` in the readthedocs.org repository.
 */

const STORAGE_KEY = "rtd-attribution";
const UTM_PARAMS = ["utm_source", "utm_medium", "utm_campaign"];

/**
 * Get the stored attribution, or null.
 *
 * Returns null when localStorage is unavailable (private browsing) or the
 * stored value is corrupt.
 */
function getStoredAttribution() {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : null;
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
 * Get the host the visitor came from, or an empty string for our own pages.
 *
 * The dashboard passes this along as a parameter when it redirects someone
 * who followed an old `readthedocs.org` link, since that redirect is the
 * last point where their original referrer is visible.
 */
function getReferrer(search) {
  const passed = search.get("referrer");
  if (passed) {
    return passed;
  }
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

  const data = {};
  // A campaign link is a more specific label than a bare `ref`.
  const ref = utm[0] ? buildRef(utm) : buildRef([search.get("ref") || ""]);
  if (ref) {
    data.ref = ref;
  }
  const referrer = getReferrer(search);
  if (referrer) {
    data.referrer = referrer;
  }

  if (Object.keys(data).length === 0) {
    return;
  }

  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch (error) {
    // localStorage unavailable, attribution is best effort.
  }
}

/**
 * Add the stored attribution to dashboard signup links.
 *
 * Parameters already on a link win, as those are more specific than
 * wherever the visitor happened to arrive from.
 */
function decorateSignupLinks() {
  const data = getStoredAttribution();
  if (!data) {
    return;
  }

  for (const link of document.querySelectorAll('a[href*="/accounts/signup"]')) {
    try {
      const url = new URL(link.href);
      for (const param of ["ref", "referrer"]) {
        if (data[param] && !url.searchParams.has(param)) {
          url.searchParams.set(param, data[param]);
        }
      }
      link.href = url.toString();
    } catch (error) {
      // Relative or malformed href, leave the link untouched.
    }
  }
}

export { captureFirstTouch, decorateSignupLinks, getStoredAttribution };
