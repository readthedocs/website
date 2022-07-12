import jquery from "jquery";

window.jQuery = jquery;
global.jQuery = jquery;

require("fomantic-ui-less/definitions/behaviors/visibility.js");
require("fomantic-ui-less/definitions/behaviors/form.js");
require("fomantic-ui-less/definitions/behaviors/state.js");
require("fomantic-ui-less/definitions/behaviors/api.js");
require("fomantic-ui-less/definitions/modules/transition.js");
require("fomantic-ui-less/definitions/modules/nag.js");
require("fomantic-ui-less/definitions/modules/tab.js");
require("fomantic-ui-less/definitions/modules/rating.js");
require("fomantic-ui-less/definitions/modules/modal.js");
require("fomantic-ui-less/definitions/modules/search.js");
require("fomantic-ui-less/definitions/modules/sticky.js");
require("fomantic-ui-less/definitions/modules/shape.js");
require("fomantic-ui-less/definitions/modules/accordion.js");
require("fomantic-ui-less/definitions/modules/sidebar.js");
require("fomantic-ui-less/definitions/modules/dimmer.js");
require("fomantic-ui-less/definitions/modules/checkbox.js");
require("fomantic-ui-less/definitions/modules/slider.js");
require("fomantic-ui-less/definitions/modules/calendar.js");
require("fomantic-ui-less/definitions/modules/popup.js");
require("fomantic-ui-less/definitions/modules/embed.js");
require("fomantic-ui-less/definitions/modules/progress.js");
require("fomantic-ui-less/definitions/modules/toast.js");
require("fomantic-ui-less/definitions/modules/dropdown.js");
require("fomantic-ui-less/definitions/globals/site.js");

jquery(document).ready((foo) => {
  jquery.fn.site({ debug: true, verbose: true });
  jquery.fn.site("normalize");
  jquery.fn.site("enable debug");
  jquery.fn.site("enable verbose");
  jquery("[data-module]").sui_module();
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
      this[module](data);
    } else {
      jquery.fn.site("error", "SUI module not available: " + module);
    }
  });
};

/**
 * Mailerlite plugin, for managing the embedded newsletter subscription UI
 */
jquery.fn.mailerlite = function () {
  return this.each((index, elem) => {
    const $elem = $(elem);
    const data = $elem.data();

    window["ml_webform_success_" + data.mailerliteId] = () => {
      $elem.find(".ui.success.message").show();
    };
  });
};
