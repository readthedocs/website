import jquery from "jquery";
import Plausible from "plausible-tracker";

// Even though we do this at Webpack to give a jQuery global, seems we also have
// to do this again here.
window.jQuery = jquery;
global.jQuery = jquery;

require("fomantic-ui-less/definitions/behaviors/visibility.js");
require("fomantic-ui-less/definitions/behaviors/form.js");
require("fomantic-ui-less/definitions/behaviors/state.js");
require("fomantic-ui-less/definitions/behaviors/api.js");
require("fomantic-ui-less/definitions/modules/transition.js");
require("fomantic-ui-less/definitions/modules/tab.js");
require("fomantic-ui-less/definitions/modules/dropdown.js");
require("fomantic-ui-less/definitions/modules/modal.js");
require("fomantic-ui-less/definitions/modules/search.js");
require("fomantic-ui-less/definitions/modules/sticky.js");
require("fomantic-ui-less/definitions/modules/shape.js");
require("fomantic-ui-less/definitions/modules/accordion.js");
require("fomantic-ui-less/definitions/modules/sidebar.js");
require("fomantic-ui-less/definitions/modules/dimmer.js");
require("fomantic-ui-less/definitions/modules/checkbox.js");
require("fomantic-ui-less/definitions/modules/slider.js");
require("fomantic-ui-less/definitions/modules/popup.js");
require("fomantic-ui-less/definitions/modules/embed.js");
require("fomantic-ui-less/definitions/modules/progress.js");
require("fomantic-ui-less/definitions/modules/toast.js");
require("fomantic-ui-less/definitions/globals/site.js");

jquery(document).ready(() => {
  /**
   * Show debug logs from SUI modules
   *
   * This value comes from Webpack DefinePlugin
   */
  if (DEBUG_MODE) {
    console.debug("Debug mode enabled.");
    jquery.fn.site({ debug: true, verbose: true });
    jquery.fn.site("normalize");
    // Enable debug logs from all modules enabled by site module
    jquery.fn.site("enable debug");
    jquery.fn.site("enable verbose");
  } else {
    console.debug = () => {};
  }

  jquery("[data-module]").sui_module();
  jquery("[data-analytics]").plausible();
});

/**
 * Instantiate SUI module
 *
 * This uses ``data`` attribute bindings to configure the module settings.
 * Normally this needs to be done using attributes to the jQuery module call,
 * but that is highly invconvenient.
 *
 * An example of this is:
 *
 * .. code:: html
 *
 *     <div class="ui dropdown" data-module="dropdown" data-action="select"></div>
 *
 * This would effectively be similar to calling:
 *
 * .. code:: javascript
 *
 *     $('.ui.dropdown').dropdown({action: 'select'})
 *
 * .. note::
 *     Not all properties are available this way, as some properties need a
 *     complex or nested object, or expect a function. This is for basic usage
 *     only for now.
 */
jquery.fn.sui_module = function () {
  return this.each((index, elem) => {
    const data = $(elem).data();
    const module = data.module;

    // This is the data-module attribute, hopefully there are no overlaps with
    // module settings here.
    delete data.module;

    if (jquery.fn[module]) {
      $(elem)[module](data);
    } else {
      jquery.fn.site("error", "SUI module not available: " + module);
    }
  });
};

/**
 * Plausible tracking module
 *
 * This reuses jQuery to provide explicit tracking of events at Plausible. To
 * use events, add the ``data-analytics`` attribute to an element. In most
 * cases, this should be a link element, however in the case of other UI
 * components, it may be a ``<div>`` or ``<button>``:
 *
 *     <button class="ui button" data-analytics="some-event-id">Something</button>
 *
 * In the case of a link with a ``href`` attribute, the link will continue
 * redirecting after the callback from Plausible fires off.
 */
jquery.fn.plausible = function () {
  let plausible_settings = { domain: "about.readthedocs.com" };
  if (DEBUG_MODE) {
    plausible_settings.trackLocalhost = true;
  }
  const { trackEvent } = Plausible(plausible_settings);
  const { trackPageview } = Plausible(plausible_settings)

  // Track pageview for all pages
  trackPageview()

  return this.each((index, elem) => {
    elem.addEventListener("click", on_click_event);
    elem.addEventListener("auxclick", on_click_event);

    function on_click_event(event) {
      const event_names = elem.getAttribute("data-analytics").split(/,(.+)/);
      const is_link =
        elem.tagName != undefined && elem.tagName.toLowerCase() == "a";
      const is_middle_click = event.type == "auxclick" && event.which == 2;
      const is_click = event.type == "click";
      const is_link_click =
        is_link &&
        is_click &&
        !elem.target &&
        !(event.ctrlKey || event.metaKey || event.shiftKey);

      if (is_middle_click || is_click) {
        function redirect_link() {
          if (is_link_click && elem.href && elem.href != "#") {
            console.debug("Plausible: resuming redirect to", elem.href);
            location.href = elem.href;
          }
        }
        for (const event_name of event_names) {
          trackEvent(event_name, {
            callback: () => {
              console.debug("Plausible: tracked event", event_name);
              redirect_link();
            },
          });
          setTimeout(() => {
            console.debug(
              "Plausible: didn't receive response, continuing anyways"
            );
            redirect_link();
          }, 150);
        }
      }

      // If this is a normal click of an anchor element, prevent the default
      // event from propagating and instead wait until the callback
      // returns/expires to redirect the current page URL. If the user held
      // control/shift/meta while clicking, we're assuming the browser is doing
      // something special instead and will not block the default event.
      if (is_link_click) {
        event.preventDefault();
      }
    }
  });
};

// Mostly for testing
export { jquery };
