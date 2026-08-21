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

    expect(getStoredAttribution()).toEqual({ ref: "newsletter/email/launch" });
  });

  test("drops trailing parts that are missing", () => {
    setPageUrl("/?utm_source=newsletter");

    captureFirstTouch();

    expect(getStoredAttribution()).toEqual({ ref: "newsletter" });
  });

  test("keeps position when a middle part is missing", () => {
    setPageUrl("/?utm_source=newsletter&utm_campaign=launch");

    captureFirstTouch();

    expect(getStoredAttribution()).toEqual({ ref: "newsletter//launch" });
  });

  test("records the referring domain", () => {
    setReferrer("https://news.ycombinator.com/item?id=1");

    captureFirstTouch();

    expect(getStoredAttribution()).toEqual({
      referrer: "news.ycombinator.com",
    });
  });

  test("records a ref and a referrer together", () => {
    setPageUrl("/?utm_source=newsletter");
    setReferrer("https://news.ycombinator.com/");

    captureFirstTouch();

    expect(getStoredAttribution()).toEqual({
      ref: "newsletter",
      referrer: "news.ycombinator.com",
    });
  });

  test("prefers the referrer the dashboard passes along", () => {
    // The dashboard knows the original referrer of an old readthedocs.org
    // link, which is lost by the time the visitor reaches us.
    setPageUrl("/?ref=readthedocs.org&referrer=docs.python.org");
    setReferrer("https://app.readthedocs.org/");

    captureFirstTouch();

    expect(getStoredAttribution()).toEqual({
      ref: "readthedocs.org",
      referrer: "docs.python.org",
    });
  });

  test("records referrals from hosted documentation", () => {
    setReferrer("https://docs.example.readthedocs.io/en/latest/");

    captureFirstTouch();

    expect(getStoredAttribution().referrer).toBe("docs.example.readthedocs.io");
  });

  test("ignores internal referrals", () => {
    setReferrer("http://localhost/some-page/");

    captureFirstTouch();

    expect(getStoredAttribution()).toBeNull();
  });

  test("first touch is not overwritten", () => {
    setPageUrl("/?utm_source=first");
    captureFirstTouch();

    setPageUrl("/?utm_source=second");
    captureFirstTouch();

    expect(getStoredAttribution()).toEqual({ ref: "first" });
  });

  test("stores nothing without an attribution signal", () => {
    captureFirstTouch();

    expect(getStoredAttribution()).toBeNull();
  });

  test("escapes slashes inside a part", () => {
    setPageUrl("/?utm_source=blog/post");

    captureFirstTouch();

    expect(getStoredAttribution()).toEqual({ ref: "blog-post" });
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

  test("adds the stored attribution to signup links", () => {
    setPageUrl("/?utm_source=newsletter&utm_medium=email");
    setReferrer("https://news.ycombinator.com/");
    captureFirstTouch();

    decorateSignupLinks();

    const url = new URL(document.getElementById("community").href);
    expect(url.searchParams.get("ref")).toBe("newsletter/email");
    expect(url.searchParams.get("referrer")).toBe("news.ycombinator.com");
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
