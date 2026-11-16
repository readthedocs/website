import { nextFromHref, platformUrl } from "../platform";

test("platformUrl only accepts paths", () => {
  expect(platformUrl("business", "/accounts/?a=1")).toBe(
    "https://app.readthedocs.com/accounts/?a=1",
  );
  expect(platformUrl("community", "@evil.com/")).toBe(
    "https://app.readthedocs.org/dashboard/",
  );
  expect(platformUrl("community", "//evil.com/")).toBe(
    "https://app.readthedocs.org/dashboard/",
  );
  expect(platformUrl("community", null)).toBe(
    "https://app.readthedocs.org/dashboard/",
  );
});

test("nextFromHref reads the next path from a /go/ link", () => {
  expect(
    nextFromHref(
      "https://about.readthedocs.com/go/?next=/dashboard/import/%3Fdirect_upload%3D1",
    ),
  ).toBe("/dashboard/import/?direct_upload=1");
  expect(nextFromHref("https://about.readthedocs.com/pricing/")).toBe(null);
  expect(nextFromHref(undefined)).toBe(null);
});
