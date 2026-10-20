import { isAutomatedBrowser, trackPageviewWhenVisible } from "../site";

describe("isAutomatedBrowser", () => {
  afterEach(() => {
    delete window._phantom;
    delete window.Cypress;
    delete window.__plausible;
    Object.defineProperty(window.navigator, "webdriver", {
      value: undefined,
      configurable: true,
    });
  });

  test("is false in a regular browser", () => {
    expect(isAutomatedBrowser()).toBe(false);
  });

  test("is true when navigator.webdriver is set", () => {
    Object.defineProperty(window.navigator, "webdriver", {
      value: true,
      configurable: true,
    });
    expect(isAutomatedBrowser()).toBe(true);
  });

  test("is true for headless browser globals", () => {
    window._phantom = {};
    expect(isAutomatedBrowser()).toBe(true);
  });

  test("can be overridden with window.__plausible", () => {
    window.Cypress = {};
    window.__plausible = true;
    expect(isAutomatedBrowser()).toBe(false);
  });
});

describe("trackPageviewWhenVisible", () => {
  const setVisibility = (state) => {
    Object.defineProperty(document, "visibilityState", {
      value: state,
      configurable: true,
    });
  };

  afterEach(() => {
    setVisibility("visible");
  });

  test("tracks immediately when the page is visible", () => {
    const trackPageview = jest.fn();
    setVisibility("visible");
    trackPageviewWhenVisible(trackPageview);
    expect(trackPageview).toHaveBeenCalledTimes(1);
  });

  test("waits until a hidden page becomes visible", () => {
    const trackPageview = jest.fn();
    setVisibility("hidden");
    trackPageviewWhenVisible(trackPageview);
    expect(trackPageview).not.toHaveBeenCalled();

    setVisibility("visible");
    document.dispatchEvent(new Event("visibilitychange"));
    expect(trackPageview).toHaveBeenCalledTimes(1);

    // Only the first pageview is tracked
    document.dispatchEvent(new Event("visibilitychange"));
    expect(trackPageview).toHaveBeenCalledTimes(1);
  });
});
