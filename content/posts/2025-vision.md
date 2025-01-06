title: Read the Docs 2025 Vision: great support for all documentation tools
date: 2025-01-01
description: Our vision for Read the Docs in 2025, supporting all documentation tools and enhancing frontend features with Addons.
category: Meta
tags: addons, vision, builders
authors: Eric Holscher
status: published
image: /images/2025-vision.jpg
image_credit: Photo by <a href="https://unsplash.com/@mcnoble?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Matt Noble</a> on <a href="https://unsplash.com/photos/selective-focus-photo-of-silver-tower-viewer-telescope-facing-sunshine-BpTMNN9JSmQ?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>

As we look forward to 2025,
we took some time to reflect on where we've been and where we're going,
and wanted to share that with you.

**Our vision for Read the Docs is to be the best place to host software documentation using a docs-as-code approach**.
This means that we're building on top of Git,
and providing features that make sense for software documentation.

**Our product philosophy is to provide a great default experience but allow users to customize and extend as needed.**
This means that we provide a set of features that work for most projects,
but then allow you to extend or replace them as needed.

Below is a breakdown of how that plays out with each of the major parts of Read the Docs.

## Major steps in 2024

We've been working to expand build support beyond Sphinx and MkDocs,
and build Addons for powerful frontend features that work on any tool.

The major steps here have been:

* **Fully redesigned dashboard:** We've been working on a [new dashboard](https://about.readthedocs.com/blog/2024/11/rollout-of-our-new-dashboard/) that brings our site into the modern era. This has been fully rolled out to all users as the default, and we're continuing to improve it.
* **Removing build magic:** Removing the injection of data or configuration into your documentation builds. We used to have a full Sphinx extension that we injected, and a lot of configuration file manipulation for both [Sphinx](https://about.readthedocs.com/blog/2024/07/addons-by-default/) and [MkDocs](https://about.readthedocs.com/blog/2024/03/mkdocs-yaml-manipulation/). This has been removed, which means builds should happen exactly as they do locally.
* **Adding build support for all tools:** We built support into our build system for [fully custom builds](https://blog.readthedocs.com/build-customization/), which allows any build process that outputs HTML to be hosted on Read the Docs.
* **Adding frontend support for all tools:** We rebuilt our [flyout menu](https://docs.readthedocs.io/en/stable/flyout-menu.html#addons-flyout-menu) and the JavaScript that is injected into your documentation builds as a set of [Read the Docs Addons](https://about.readthedocs.com/blog/2024/04/enable-beta-addons/). This enables granular configuration.
* **Supporting custom integrations:** We're exposing all the data that we use to build Addons to documentation users, who can build [custom data integrations](https://docs.readthedocs.io/en/stable/flyout-menu.html#custom-event-integration). This allows you to integrate the versions from the API into a version selector, offline formats into a download UI, and provide an integrated UX for your users.

The combination of all this work leads to a powerful place for Read the Docs in 2025.
We can support any documentation tool,
and then provide a powerful set of Addons to provide a great UX on top,
and allow you to build custom integrations to make everything work together perfectly.

## Our build system is more flexible than ever

All parts of Read the Docs have a default experience,
but then allow you to customize and extend as needed.

With our build system,
we recommend starting with ``build.jobs`` to get a simple build working:

* Our [build process](https://docs.readthedocs.io/en/stable/builds.html) defines a set of jobs that run in sequence to build your documentation.
* You can [extend the build process](https://docs.readthedocs.io/en/stable/build-customization.html#extend-the-build-process) by adding ``pre`` and ``post`` jobs to run before and after the main build.
<!-- This isn't fully implemented yet, but it's coming soon: https://github.com/readthedocs/readthedocs.org/pull/11810 -->
* You can [override the ``build.jobs``](https://docs.readthedocs.io/en/stable/config-file/v2.html#build-jobs) to fully customize the build process.
* If you don't want to use our build process at all, you can [run a fully custom build](https://docs.readthedocs.io/en/stable/build-customization.html#override-the-build-process) with ``build.commands``, allowing you to bring an existing build process to Read the Docs.

This gives users an on-ramp into a simple build process,
but allows advanced users to fully customize their build process as needed.

## Addons make reading docs even better

Addons give you a set of features that are enabled by default,
but you can always choose to extend them or replace them fully.

We're excited about the Addons we've already built:

* [Visual diff](https://docs.readthedocs.io/en/stable/visual-diff.html) to see changes between versions of your documentation in the rendered HTML. This builds on top of [pull request previews](https://docs.readthedocs.io/en/stable/pull-requests.html) to give you a full suite of tools for reviewing documentation changes.
* [Link previews](https://docs.readthedocs.io/en/stable/link-previews.html) to make browsing your docs easier for users, and improving the UX of link-heavy documentation like API references.
* [Flyout menu](https://docs.readthedocs.io/en/stable/flyout-menu.html) that provides users access to many Read the Docs features like search, versions, offline formats, and more.
* [Search as you type](https://docs.readthedocs.io/en/stable/server-side-search/index.html) that is powered by [Elasticsearch](https://www.elastic.co/elasticsearch/) and allows searching multiple subprojects at once.
* [Traffic analytics](https://docs.readthedocs.io/en/stable/traffic-analytics.html) to understand how your documentation is being used, and where you can improve it.
* [Notifications](https://docs.readthedocs.io/en/stable/doc-notifications.html) to alert users to out-of-date documentation, and other important information about their documentation builds.

We have some more interesting ideas for additional Addons, like a [Command Palette](https://github.com/readthedocs/addons/pull/449) to expose all of the features of Read the Docs in a single searchable interface.

### Integrate our data for a better UX

With our [custom event integration](https://docs.readthedocs.io/en/stable/flyout-menu.html#custom-event-integration),
you can always integrate the data provided by Read the Docs into your documentation.

Some neat examples of what folks have been building:

* Version selectors that use the API to show the latest versions of your documentation.
* Offline formats that use the API to show the latest PDF or Epub downloads.
* Search integrations that use the API to power a custom search interface.

You can see an [version selector integration example](https://sphinx-rtd-theme.readthedocs.io/en/stable/) that shows how to use the API to build a custom version selector.

We're excited to see what you build with this data,
and are always looking for feedback on how we can make it better.

## Continuing to improve

This has been a long time coming,
and we're excited to be coming into 2025 with a powerful set of features that work for all documentation tools.
You can always [reach out](https://docs.readthedocs.io/en/stable/support.html) to us with feedback,
and we're excited to see what you build!
