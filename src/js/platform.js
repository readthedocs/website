/**
 * Remember which dashboard platforms a visitor uses, in this browser only.
 * A platform is remembered when the visitor clicks a link to its dashboard.
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

function loadPlatforms() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
  } catch {
    return [];
  }
}

/** The platform to use, if the visitor has only used one */
export function knownPlatform() {
  const platforms = loadPlatforms();
  return platforms.length === 1 && platforms[0] in PLATFORMS
    ? platforms[0]
    : null;
}

/** Dashboard URL for a path; anything that isn't a path goes to the dashboard */
export function platformUrl(platform, next) {
  const path = next?.startsWith("/") ? next : "/dashboard/";
  return PLATFORMS[platform].url + path;
}

export function trackPlatformLinks() {
  document.addEventListener(
    "click",
    (event) => {
      const href = event.target.closest("a[href]")?.href || "";
      const platform = Object.keys(PLATFORMS).find((key) =>
        href.startsWith(`${PLATFORMS[key].url}/`),
      );
      if (platform) {
        const platforms = new Set(loadPlatforms()).add(platform);
        try {
          localStorage.setItem(STORAGE_KEY, JSON.stringify([...platforms]));
        } catch {}
      }
    },
    { capture: true },
  );
}
