/**
 * First-touch attribution
 *
 * The marketing site and the dashboard are on different domains, so the
 * dashboard can't see where a visitor originally came from -- by the time
 * they click "sign up", the referrer is just this site. To close that gap,
 * we store the visitor's first-touch attribution (UTM parameters and
 * external referrer) in localStorage on their first visit, and forward it
 * to the dashboard as query parameters on signup links. The dashboard
 * captures these at signup and stores them on the user.
 */

const STORAGE_KEY = "rtd-attribution";
const UTM_PARAMS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_content",
  "utm_term",
];

/**
 * Get the stored first-touch attribution, or null.
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
 * Store first-touch attribution from the current page URL and referrer.
 *
 * First touch wins: once attribution is stored, later visits never
 * overwrite it. Visits without any signal (no UTM parameters and no
 * external referrer) store nothing.
 */
function captureFirstTouch() {
  if (getStoredAttribution()) {
    return;
  }

  const params = new URLSearchParams(window.location.search);
  const data = {};
  for (const param of UTM_PARAMS) {
    const value = params.get(param);
    if (value) {
      data[param] = value;
    }
  }

  const ref = params.get("ref");
  if (ref) {
    data.ref = ref;
  } else if (document.referrer) {
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
 * Forward stored attribution on dashboard signup links.
 *
 * Appends the stored UTM parameters and ``ref`` to every signup link,
 * without overriding parameters a link already sets explicitly.
 */
function decorateSignupLinks() {
  const data = getStoredAttribution();
  if (!data) {
    return;
  }

  for (const link of document.querySelectorAll('a[href*="/accounts/signup"]')) {
    try {
      const url = new URL(link.href);
      for (const param of [...UTM_PARAMS, "ref"]) {
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
