import { knownPlatform, platformUrl, trackPlatformLinks } from "../platform";

trackPlatformLinks();

function clickLink(href) {
  document.body.innerHTML = `<a href="${href}">link</a>`;
  document.querySelector("a").click();
}

beforeEach(() => localStorage.clear());

test("no known platform by default", () => {
  expect(knownPlatform()).toBeNull();
});

test("a platform is known after two clicks", () => {
  clickLink("https://app.readthedocs.com/dashboard/");
  expect(knownPlatform()).toBeNull();
  clickLink("https://app.readthedocs.com/dashboard/");
  expect(knownPlatform()).toBe("business");
});

test("a single click on the other platform doesn't count", () => {
  clickLink("https://app.readthedocs.com/dashboard/");
  clickLink("https://app.readthedocs.com/dashboard/");
  clickLink("https://app.readthedocs.org/dashboard/");
  expect(knownPlatform()).toBe("business");
});

test("both used platforms show the chooser", () => {
  for (let i = 0; i < 2; i++) {
    clickLink("https://app.readthedocs.com/dashboard/");
    clickLink("https://app.readthedocs.org/dashboard/");
  }
  expect(knownPlatform()).toBeNull();
});

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
