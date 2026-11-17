import jquery from "jquery";
import { LitElement, html } from "lit";
import { ref, createRef } from "lit/directives/ref.js";
import { when } from "lit/directives/when.js";
import { PLATFORMS, platformUrl } from "./platform";

/**
 * Render a menu with a link to ``next`` on each platform
 *
 * @param {string} next - The URL path to link to
 * @param {string} target - Link target attribute
 */
function platformMenu(next, target = "") {
  return html`
    <div class="ui small vertical fluid menu">
      ${Object.keys(PLATFORMS).map(
        (platform) => html`
          <a
            class="item"
            href="${platformUrl(platform, next)}"
            target="${target}"
          >
            <div class="ui header">
              ${PLATFORMS[platform].name}
              <div class="sub header">${PLATFORMS[platform].url}</div>
            </div>
          </a>
        `,
      )}
    </div>
  `;
}

/**
 * PlatformChooserElement
 *
 * Provide a very simple popup or dropdown chooser for basic links or buttons
 * that point to pages on our dashboard. This element will show a popup with a
 * simple selection that links to the correct URL on each platform, so that we
 * don't need to manually call out links to each any time we post links on our
 * website.
 *
 * Usage:
 *
 *   <readthedocs-platform-chooser next="/accounts/edit/" description="See account preferences for which platform?">
 *     <a href="#">Open account preferences</a>
 *   </readthedocs-platform-chooser>
 *
 * For a plain link, such as in docs or email, use the ``/go/`` page instead:
 *
 *   https://about.readthedocs.com/go/?next=/accounts/edit/
 *
 * @property {string} next - The URL path to link to
 * @property {string} description - Description for the popup
 **/
export class PlatformChooserElement extends LitElement {
  static properties = {
    next: { type: String },
    description: { type: String },
  };

  /** @attr {Ref} refPopup - Reference to the popup element */
  refPopup = createRef();

  connectedCallback() {
    super.connectedCallback();
    this.addEventListener("click", () => {
      this.popup("show");
    });
  }

  createRenderRoot() {
    // Use light DOM, allow host styles through.
    return this;
  }

  render() {
    return html`
      <div class="ui wide popup" ${ref(this.refPopup)}>
        <div class="header">Select your platform</div>
        <p>
          ${when(
            this.description,
            () => html`${this.description}`,
            () => html`To continue, select which platform you normally use:`,
          )}
        </p>
        ${platformMenu(this.next, "_blank")}
      </div>
    `;
  }

  firstUpdated() {
    this.popup({
      on: "manual",
      popup: this.refPopup.value,
      position: "top center",
      hoverable: true,
    });
  }

  /**
   * Call SUI popup module
   *
   * This calls into the SUI jQuery ``popup`` module and can be used for
   * both configuring the module or calling any of the behaviors the module
   * provides (see https://fomantic-ui.com/modules/popup.html#behavior)
   *
   * @param {...*} args - All arguments to this function pass through
   */
  popup(...args) {
    return jquery(this).popup(...args);
  }
}
customElements.define("readthedocs-platform-chooser", PlatformChooserElement);

/**
 * PlatformLinksElement
 *
 * Used on the ``/go/`` page, to link to the ``next`` query parameter path on
 * each platform. Use this page for plain links, such as in docs or email:
 *
 *   https://about.readthedocs.com/go/?next=/accounts/edit/
 **/
export class PlatformLinksElement extends LitElement {
  next = new URLSearchParams(window.location.search).get("next");

  createRenderRoot() {
    return this;
  }

  render() {
    return html`
      <p>To continue, select which platform you normally use:</p>
      ${platformMenu(this.next)}
    `;
  }
}
customElements.define("readthedocs-platform-links", PlatformLinksElement);
