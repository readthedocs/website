import jquery from "jquery";
import { LitElement, html } from "lit";
import { ref, createRef } from "lit/directives/ref.js";
import { when } from "lit/directives/when.js";

/**
 * PlatformChooserElement
 *
 * Provide a popup or dropdown chooser for links and buttons so that we can link
 * to both platforms with single URLs.
 *
 * @property {string} next - The URL path to link to
 * @property {string} description - Description for the popup
 **/
export class PlatformChooserElement extends LitElement {
  static properties = {
    next: { type: String },
    description: { type: String },
  };

  /** @attr {Ref} refTrigger - Reference to the element that triggers the popup */
  refTrigger = createRef();
  /** @attr {Ref} refPopup - Reference to the popup element */
  refPopup = createRef();

  createRenderRoot() {
    return this;
  }

  render() {
    return html`
      <div class="ui wide popup" ${ref(this.refPopup)}>
        <div class="header">Select your platform</div>
        ${when(
          this.description,
          () => html`<p>${this.description}</p>`,
          () => html`<p>To continue, select which platform you use:</p>`,
        )}
        <div class="ui fluid buttons">
          <a class="ui button" href="https://app.readthedocs.org${this.next}">Community</a>
          <a class="ui button" href="https://app.readthedocs.com${this.next}">Business</a>
        </div>
      </div>
    `;
  }

  connectedCallback() {
    super.connectedCallback();
    this.addEventListener("click", () => {
      this.popup("show");
    });
  }

  firstUpdated() {
    this.popup({
      on: "manual",
      hoverable: true,
      popup: this.refPopup.value,
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
    console.log(args);
    return jquery(this).popup(...args);
  }
}
customElements.define("readthedocs-platform-chooser", PlatformChooserElement);
