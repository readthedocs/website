import {
  captureFirstTouch,
  decorateSignupLinks,
  getStoredAttribution,
} from "../attribution";

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
  test("builds a ref from UTM parameters", () => {
    setPageUrl("/?utm_source=newsletter&utm_medium=email&utm_campaign=launch");

    captureFirstTouch();

    expect(getStoredAttribution()).toBe("newsletter/email/launch");
  });

  test("drops trailing parts that are missing", () => {
    setPageUrl("/?utm_source=newsletter");

    captureFirstTouch();

    expect(getStoredAttribution()).toBe("newsletter");
  });

  test("keeps position when a middle part is missing", () => {
    setPageUrl("/?utm_source=newsletter&utm_campaign=launch");

    captureFirstTouch();

    expect(getStoredAttribution()).toBe("newsletter//launch");
  });

  test("falls back to the referring domain", () => {
    setReferrer("https://news.ycombinator.com/item?id=1");

    captureFirstTouch();

    expect(getStoredAttribution()).toBe("news.ycombinator.com");
  });

  test("ignores referrals from our own dashboard", () => {
    setReferrer("https://app.readthedocs.org/dashboard/");

    captureFirstTouch();

    expect(getStoredAttribution()).toBeNull();
  });

  test("keeps referrals from hosted documentation", () => {
    setReferrer("https://docs.example.readthedocs.io/en/latest/");

    captureFirstTouch();

    expect(getStoredAttribution()).toBe("docs.example.readthedocs.io");
  });

  test("ignores internal referrals", () => {
    setReferrer("http://localhost/some-page/");

    captureFirstTouch();

    expect(getStoredAttribution()).toBeNull();
  });

  test("a campaign wins over the referrer", () => {
    setPageUrl("/?utm_source=newsletter");
    setReferrer("https://news.ycombinator.com/");

    captureFirstTouch();

    expect(getStoredAttribution()).toBe("newsletter");
  });

  test("an explicit ref wins over the referrer", () => {
    setPageUrl("/?ref=pycon-2026");
    setReferrer("https://news.ycombinator.com/");

    captureFirstTouch();

    expect(getStoredAttribution()).toBe("pycon-2026");
  });

  test("first touch is not overwritten", () => {
    setPageUrl("/?utm_source=first");
    captureFirstTouch();

    setPageUrl("/?utm_source=second");
    captureFirstTouch();

    expect(getStoredAttribution()).toBe("first");
  });

  test("stores nothing without an attribution signal", () => {
    captureFirstTouch();

    expect(getStoredAttribution()).toBeNull();
  });

  test("escapes slashes inside a part", () => {
    setPageUrl("/?utm_source=blog/post");

    captureFirstTouch();

    expect(getStoredAttribution()).toBe("blog-post");
  });
});

describe("decorateSignupLinks", () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <a id="community" href="https://app.readthedocs.org/accounts/signup/">Sign up</a>
      <a id="commercial" href="https://app.readthedocs.com/accounts/signup/?ref=pricing">Sign up</a>
      <a id="login" href="https://app.readthedocs.org/dashboard/">Log in</a>
    `;
  });

  test("adds the stored ref to signup links", () => {
    setPageUrl("/?utm_source=newsletter&utm_medium=email");
    captureFirstTouch();

    decorateSignupLinks();

    const url = new URL(document.getElementById("community").href);
    expect(url.searchParams.get("ref")).toBe("newsletter/email");
  });

  test("does not override a ref already on the link", () => {
    setPageUrl("/?utm_source=newsletter");
    captureFirstTouch();

    decorateSignupLinks();

    const url = new URL(document.getElementById("commercial").href);
    expect(url.searchParams.get("ref")).toBe("pricing");
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
