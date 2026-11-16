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

/** Dashboard URL for a path; anything that isn't a path goes to the dashboard */
export function platformUrl(platform, next) {
  const path = next?.startsWith("/") ? next : "/dashboard/";
  return PLATFORMS[platform].url + path;
}
