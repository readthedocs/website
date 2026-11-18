export const PLATFORMS = {
  community: {
    name: "Read the Docs Community",
    description: "For free and open-source projects",
    url: "https://app.readthedocs.org",
  },
  business: {
    name: "Read the Docs Business",
    description: "For commercial and non-free projects",
    url: "https://app.readthedocs.com",
  },
};

/** Dashboard URL for a path; anything that isn't a path goes to the dashboard */
export function platformUrl(platform, next) {
  const path = next?.startsWith("/") ? next : "/dashboard/";
  return PLATFORMS[platform].url + path;
}
