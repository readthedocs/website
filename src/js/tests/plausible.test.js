import { jquery } from "../site";
import { init, track } from "@plausible-analytics/tracker";

jest.mock("@plausible-analytics/tracker", () => ({
  init: jest.fn(),
  track: jest.fn(),
}));

describe("plausible plugin", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    document.body.innerHTML = `
      <button data-analytics="signup-click">Sign up</button>
    `;
  });

  test("initializes the tracker for our domain", () => {
    jquery("[data-analytics]").plausible();
    expect(init).toHaveBeenCalledTimes(1);
    expect(init.mock.calls[0][0].domain).toBe("about.readthedocs.com");
  });

  test("tracks the event named by data-analytics on click", () => {
    jquery("[data-analytics]").plausible();
    document.querySelector("button").click();
    expect(track).toHaveBeenCalledTimes(1);
    expect(track.mock.calls[0][0]).toBe("signup-click");
  });
});
