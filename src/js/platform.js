/**
 * Remember which dashboard platforms a visitor uses, in this browser only.
 * Each click on a link to a platform's dashboard is counted, and a platform
 * counts as used after two clicks.
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

function loadClicks() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
  } catch {
    return {};
  }
}

/** The platform to use, if the visitor has only used one */
export function knownPlatform() {
  const clicks = loadClicks();
  const used = Object.keys(PLATFORMS).filter((key) => clicks[key] >= 2);
  return used.length === 1 ? used[0] : null;
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
        const clicks = loadClicks();
        clicks[platform] = (clicks[platform] || 0) + 1;
        try {
          localStorage.setItem(STORAGE_KEY, JSON.stringify(clicks));
        } catch {}
      }
    },
    { capture: true },
  );
}
