import jquery from "../site";

test("jQuery plugins installed", () => {
  expect(jquery).toBeDefined();
  expect(jquery.fn).toHaveProperty("dropdown");
  expect(jquery.fn.dropdown).toBeInstanceOf(Function);
  expect(jquery.fn).not.toHaveProperty("nopers");
});
