import {
  captureFirstTouch,
  decorateSignupLinks,
  getStoredAttribution,
} from "../attribution";

const STORAGE_KEY = "rtd-attribution";

function setPageUrl(path) {
  window.history.replaceState({}, "", path);
}

function setReferrer(referrer) {
  Object.defineProperty(document, "referrer", {
    value: referrer,
    configurable: true,
  });
}

beforeEach(() => {
  window.localStorage.clear();
  setPageUrl("/");
  setReferrer("");
});

describe("captureFirstTouch", () => {
  test("stores UTM parameters", () => {
    setPageUrl("/?utm_source=newsletter&utm_campaign=launch");

    captureFirstTouch();

    expect(getStoredAttribution()).toEqual({
      utm_source: "newsletter",
      utm_campaign: "launch",
    });
  });

  test("stores external referrer hostname", () => {
    setReferrer("https://news.ycombinator.com/item?id=1");

    captureFirstTouch();

    expect(getStoredAttribution()).toEqual({ ref: "news.ycombinator.com" });
  });

  test("ignores internal referrer", () => {
    setReferrer("http://localhost/some-page/");

    captureFirstTouch();

    expect(getStoredAttribution()).toBeNull();
  });

  test("ref parameter wins over referrer", () => {
    setPageUrl("/?ref=producthunt");
    setReferrer("https://news.ycombinator.com/");

    captureFirstTouch();

    expect(getStoredAttribution()).toEqual({ ref: "producthunt" });
  });

  test("first touch is not overwritten", () => {
    setPageUrl("/?utm_source=first");
    captureFirstTouch();

    setPageUrl("/?utm_source=second");
    captureFirstTouch();

    expect(getStoredAttribution()).toEqual({ utm_source: "first" });
  });

  test("stores nothing without an attribution signal", () => {
    captureFirstTouch();

    expect(window.localStorage.getItem(STORAGE_KEY)).toBeNull();
  });
});

describe("decorateSignupLinks", () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <a id="community" href="https://app.readthedocs.org/accounts/signup/">Sign up</a>
      <a id="commercial" href="https://app.readthedocs.com/accounts/signup/?utm_source=pricing">Sign up</a>
      <a id="login" href="https://app.readthedocs.org/dashboard/">Log in</a>
    `;
  });

  test("appends stored attribution to signup links", () => {
    setPageUrl("/?utm_source=newsletter");
    setReferrer("https://news.ycombinator.com/");
    captureFirstTouch();

    decorateSignupLinks();

    const url = new URL(document.getElementById("community").href);
    expect(url.searchParams.get("utm_source")).toBe("newsletter");
    expect(url.searchParams.get("ref")).toBe("news.ycombinator.com");
  });

  test("does not override parameters already on the link", () => {
    setPageUrl("/?utm_source=newsletter");
    captureFirstTouch();

    decorateSignupLinks();

    const url = new URL(document.getElementById("commercial").href);
    expect(url.searchParams.get("utm_source")).toBe("pricing");
  });

  test("leaves other links alone", () => {
    setPageUrl("/?utm_source=newsletter");
    captureFirstTouch();

    decorateSignupLinks();

    expect(document.getElementById("login").href).toBe(
      "https://app.readthedocs.org/dashboard/",
    );
  });

  test("does nothing without stored attribution", () => {
    decorateSignupLinks();

    expect(document.getElementById("community").href).toBe(
      "https://app.readthedocs.org/accounts/signup/",
    );
  });
});
