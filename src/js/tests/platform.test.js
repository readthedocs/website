import {
  getOnlyPlatform,
  getPlatforms,
  platformForUrl,
  platformUrl,
  rememberPlatform,
  trackPlatformLinks,
} from "../platform";

beforeEach(() => {
  localStorage.clear();
});

test("no platform is known by default", () => {
  expect(getPlatforms()).toEqual([]);
  expect(getOnlyPlatform()).toBeNull();
});

test("one remembered platform is the only platform", () => {
  rememberPlatform("community");
  rememberPlatform("community");
  expect(getPlatforms()).toEqual(["community"]);
  expect(getOnlyPlatform()).toBe("community");
});

test("two remembered platforms show the chooser", () => {
  rememberPlatform("community");
  rememberPlatform("business");
  expect(getOnlyPlatform()).toBeNull();
});

test("unknown platforms are ignored", () => {
  localStorage.setItem("readthedocs-platforms", '["other", "business"]');
  expect(getPlatforms()).toEqual(["business"]);
});

test("invalid storage is ignored", () => {
  localStorage.setItem("readthedocs-platforms", "{nope");
  expect(getPlatforms()).toEqual([]);
});

test("platformForUrl matches dashboard URLs", () => {
  expect(platformForUrl("https://app.readthedocs.org/dashboard/")).toBe(
    "community",
  );
  expect(platformForUrl("https://app.readthedocs.com/accounts/signup/")).toBe(
    "business",
  );
  expect(platformForUrl("https://app.readthedocs.org.evil.com/")).toBeNull();
  expect(platformForUrl("https://docs.readthedocs.com/")).toBeNull();
});

test("platformUrl only accepts paths", () => {
  expect(platformUrl("business", "/accounts/edit/?a=1")).toBe(
    "https://app.readthedocs.com/accounts/edit/?a=1",
  );
  expect(platformUrl("community", null)).toBe(
    "https://app.readthedocs.org/dashboard/",
  );
  for (const next of ["https://evil.com/", "//evil.com/", "/\\evil.com/"]) {
    expect(platformUrl("community", next)).toBe(
      "https://app.readthedocs.org/dashboard/",
    );
  }
});

test("clicking a dashboard link remembers the platform", () => {
  document.body.innerHTML = `<a href="https://app.readthedocs.com/dashboard/"><span>Log in</span></a>`;
  trackPlatformLinks(document.body);
  document.body.querySelector("span").click();
  expect(getPlatforms()).toEqual(["business"]);
});
