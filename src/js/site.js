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
require("jquery-address");

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
 * Get module settings from element attributes
 *
 * This uses the jQuery `data()` method to get data attributes in a normalized
 * fashion. An example of HTML with attributes is:
 *
 * .. code:: html
 *
 *     <div class="ui dropdown" data-module="dropdown" data-module-action="select" data-module-ignore-case="true"></div>
 *
 * This would effectively be similar to calling:
 *
 * .. code:: javascript
 *
 *     element.dropdown({action: 'select', ignoreCase: true})
 *
 * .. note::
 *     Not all properties are available this way, as some properties need a
 *     complex or nested object, or expect a function. This is for basic usage
 *     only for now.
 */
function get_settings_from_data(data) {
  let uses_new_pattern = false;

  // Remove prefix of `module` from attributes. From the above example, `data()`
  // will populate the attribute `moduleIgnoreCase`, but we want to pass in
  // `ignoreCase` instead.
  let data_new = {};
  for (const attr of Object.keys(data)) {
    if (/^module[A-Z]+/.test(attr)) {
      const attr_short = attr[6].toLowerCase() + attr.substr(7);
      data_new[attr_short] = data[attr];
      uses_new_pattern = true;
    }
  }

  if (uses_new_pattern) {
    return data_new;
  }

  // This is an shorter for of the above pattern, that doesn't use `module` as a
  // prefix for attributes that we want to pass in to the jQuery plugins. This
  // causes problems when there are unprefixed attributes we *don't* want passed
  // in to the jQuery plugins. Prefixing solves this.
  // TODO refactor old code pattern away
  delete data.module;
  return data;
}

/**
 * Instantiate SUI module
 *
 * Directly call SUI modules
 *
 * .. note::
 *     The tab module is slightly more annoying. See `tabgroup` plugin below.
 */
jquery.fn.sui_module = function () {
  return this.each((index, elem) => {
    const data = $(elem).data();
    const module = data.module;
    const settings = get_settings_from_data(data);
    if (jquery.fn[module]) {
      $(elem)[module](settings);
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
  const { trackPageview } = Plausible(plausible_settings);

  // Track pageview for all pages
  trackPageview();

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

/*
 * Tab group SUI module helper
 *
 * The tab module is instantiated on a group of `.menu .item` elements by
 * iterating over the query selector used to call the `tab` jQuery module. This
 * conflicts with the pattern above, as the tab module gets instantiated once
 * for each `.menu .item` element. Instead, this module sets up the module on a
 * single menu element.
 */
jquery.fn.tabmenu = function (settings) {
  return this.each((index, elem) => {
    $(elem).find(".item").tab(settings);
  });
};

// Mostly for testing
export { jquery };
