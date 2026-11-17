import { platformUrl } from "../platform";

test("platformUrl only accepts paths", () => {
  expect(platformUrl("business", "/accounts/?a=1")).toBe(
    "https://app.readthedocs.com/accounts/?a=1",
  );
  expect(platformUrl("community", "@evil.com/")).toBe(
    "https://app.readthedocs.org/dashboard/",
  );
  expect(platformUrl("community", null)).toBe(
    "https://app.readthedocs.org/dashboard/",
  );
});
