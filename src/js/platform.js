/**
 * Remember which dashboard platforms a visitor uses
 *
 * Platforms are stored in this browser only, as a list of ``community`` and/or
 * ``business``. A platform is added when the visitor follows a link to that
 * platform's dashboard from this site.
 */

export const PLATFORMS = {
  community: {
    name: "Read the Docs Community",
    url: "https://app.readthedocs.org",
  },
  business: {
    name: "Read the Docs Business",
    url: "https://app.readthedocs.com",
  },
};

const STORAGE_KEY = "readthedocs-platforms";

export function getPlatforms() {
  try {
    const stored = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
    return stored.filter((platform) => platform in PLATFORMS);
  } catch {
    return [];
  }
}

export function rememberPlatform(platform) {
  const platforms = getPlatforms();
  if (platform in PLATFORMS && !platforms.includes(platform)) {
    platforms.push(platform);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(platforms));
    } catch {
      // Storage may be unavailable, the chooser will keep asking.
    }
  }
}

/**
 * Return the only platform the visitor uses, or ``null`` if we know of none
 * or of both.
 */
export function getOnlyPlatform() {
  const platforms = getPlatforms();
  return platforms.length === 1 ? platforms[0] : null;
}

/** Return the platform a URL points to, if any */
export function platformForUrl(url) {
  for (const [platform, { url: base }] of Object.entries(PLATFORMS)) {
    if (url === base || url.startsWith(`${base}/`)) {
      return platform;
    }
  }
  return null;
}

/**
 * Build a dashboard URL from a path. Only paths are accepted, so this can't be
 * used to redirect to another host.
 */
export function platformUrl(platform, next) {
  let path = next || "/dashboard/";
  if (!path.startsWith("/") || path.startsWith("//") || path.includes("\\")) {
    path = "/dashboard/";
  }
  return `${PLATFORMS[platform].url}${path}`;
}

/** Remember platforms from clicks on any dashboard link on this site */
export function trackPlatformLinks(root = document) {
  root.addEventListener(
    "click",
    (event) => {
      const link = event.target.closest && event.target.closest("a[href]");
      const platform = link && platformForUrl(link.href);
      if (platform) {
        rememberPlatform(platform);
      }
    },
    { capture: true },
  );
}
