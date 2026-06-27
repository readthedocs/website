import jquery from "jquery";
import { LitElement, html } from "lit";
import { ref, createRef } from "lit/directives/ref.js";
import { when } from "lit/directives/when.js";

/**
 * PlatformChooserElement
 *
 * Provide a very simple popup or dropdown chooser for basic links or buttons
 * that point to pages on our dashboard. This element will show a popup with a
 * simple selection that links to the correct URL on each platform, so that we
 * don't need to manually call out links to each any time we post links on our
 * website. This could also be useful in our docs.
 *
 * Usage:
 *
 *   <readthedocs-platform-chooser next="/accounts/edit/" description="See account preferences for which platform?">
 *     <a href="#">Open account preferences</a>
 *   </readthedocs-platform-chooser>
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
        <div class="ui small vertical fluid menu">
          <a
            class="item"
            href="https://app.readthedocs.org${this.next}"
            target="_blank"
          >
            <div class="ui header">
              Read the Docs Community
              <div class="sub header">https://app.readthedocs.org</div>
            </div>
          </a>
          <a
            class="ui item"
            href="https://app.readthedocs.com${this.next}"
            target="_blank"
          >
            <div class="ui header">
              Read the Docs Business
              <div class="sub header">https://app.readthedocs.com</div>
            </div>
          </a>
        </div>
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
