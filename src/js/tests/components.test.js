import jquery from "jquery";
import "../components";

const goUrl =
  "https://about.readthedocs.com/go/?next=/dashboard/import/%3Fdirect_upload%3D1";

beforeEach(() => {
  jquery.fn.popup = jest.fn();
  document.body.innerHTML = `
    <readthedocs-platform-chooser>
      <a href="${goUrl}">Add a project</a>
    </readthedocs-platform-chooser>
  `;
});

test("keeps the /go/ link for feeds and email", async () => {
  const chooser = document.querySelector("readthedocs-platform-chooser");
  await chooser.updateComplete;
  expect(chooser.querySelector("a").href).toBe(goUrl);
});

test("shows the popup with the link's next path on click", async () => {
  const chooser = document.querySelector("readthedocs-platform-chooser");
  const link = chooser.querySelector("a");
  const event = new MouseEvent("click", { bubbles: true, cancelable: true });
  link.dispatchEvent(event);
  await chooser.updateComplete;

  expect(event.defaultPrevented).toBe(true);
  expect(chooser.next).toBe("/dashboard/import/?direct_upload=1");
  expect(
    [...chooser.querySelectorAll(".popup a.item")].map((a) => a.href),
  ).toEqual([
    "https://app.readthedocs.org/dashboard/import/?direct_upload=1",
    "https://app.readthedocs.com/dashboard/import/?direct_upload=1",
  ]);
});
