/**
 * Signup attribution
 *
 * The marketing site and the dashboard are on different domains, so by the
 * time a visitor clicks "sign up", the dashboard only sees this site as the
 * referrer -- not where they originally came from. To close that gap, we
 * store the visitor's first-touch attribution (UTM parameters, or the
 * referring domain as `ref`) in localStorage, and add it to signup links.
 * The dashboard stores it on the user at signup.
 *
 * Keep the parameter list in sync with `AttributionMiddleware` in the
 * readthedocs.org repository, which ignores anything else.
 */

const STORAGE_KEY = "rtd-attribution";
const PARAMS = ["utm_source", "utm_medium", "utm_campaign", "ref"];

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

/**
 * Store attribution from the current page URL and referrer.
 *
 * First touch wins: once stored, later visits never overwrite it. Visits
 * without any attribution signal store nothing.
 */
function captureFirstTouch() {
  if (getStoredAttribution()) {
    return;
  }

  const search = new URLSearchParams(window.location.search);
  const data = {};
  for (const param of PARAMS) {
    const value = search.get(param);
    if (value) {
      data[param] = value;
    }
  }

  // Fall back to the referring domain, so organic traffic is attributed too.
  if (!data.ref && document.referrer) {
    try {
      const referrer = new URL(document.referrer);
      if (referrer.hostname && referrer.hostname !== window.location.hostname) {
        data.ref = referrer.hostname;
      }
    } catch (error) {
      // Unparseable referrer, nothing to store.
    }
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
 * Add stored attribution to dashboard signup links.
 *
 * Parameters already set on a link win, as those are more specific than
 * whatever the visitor arrived with.
 */
function decorateSignupLinks() {
  const data = getStoredAttribution();
  if (!data) {
    return;
  }

  for (const link of document.querySelectorAll('a[href*="/accounts/signup"]')) {
    try {
      const url = new URL(link.href);
      for (const param of PARAMS) {
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
