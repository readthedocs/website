import { jquery, showModalsByHash } from "../site";

test("jQuery plugins installed", () => {
  expect(jquery).toBeDefined();
  expect(jquery.fn).toHaveProperty("ajaxStart");
  expect(jquery.fn).toHaveProperty("dropdown");
  expect(jquery.fn.dropdown).toBeInstanceOf(Function);
  expect(jquery.fn).not.toHaveProperty("nopers");
});

describe("showModalsByHash", () => {
  let modalShow;

  beforeEach(() => {
    // Set up a mock modal element and spy on its .modal() method
    modalShow = jest.fn();
    document.body.innerHTML = `
      <div id="signup-modal"></div>
      <div id="login-modal"></div>
    `;
    jquery.fn.modal = modalShow;
  });

  afterEach(() => {
    // Reset location hash
    window.location.hash = "";
    jest.restoreAllMocks();
  });

  test("opens signup modal when hash is #signup", () => {
    window.location.hash = "#signup";
    showModalsByHash();
    expect(modalShow).toHaveBeenCalledWith("show");
  });

  test("opens login modal when hash is #login", () => {
    window.location.hash = "#login";
    showModalsByHash();
    expect(modalShow).toHaveBeenCalledWith("show");
  });

  test("does nothing for unknown hash", () => {
    window.location.hash = "#unknown";
    showModalsByHash();
    expect(modalShow).not.toHaveBeenCalledWith("show");
  });

  test("does nothing when hash is empty", () => {
    window.location.hash = "";
    showModalsByHash();
    expect(modalShow).not.toHaveBeenCalledWith("show");
  });
});
