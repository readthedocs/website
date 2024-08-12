title: Read the Docs Newsletter - August 2024
date: August 13, 2024
description: Company updates and new features from the last month, current focus, and upcoming features.
category: Newsletter
tags: newsletter, community
authors: Eric Holscher
status: published
image: /images/august-2024.jpg
image_credit: Photo by <a href="https://unsplash.com/@padre_moovi?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Padre_moovi</a> on <a href="https://unsplash.com/photos/ocean-waves-under-gray-sky-during-daytime-CpsalGfRFmQ?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>

## News and updates

We posted two blog posts this month covering important things:

* [AI crawlers need to be more respectful](https://about.readthedocs.com/blog/2024/07/ai-crawlers-abuse/) covers our struggle with AI crawlers using a lot of resources on our platform.
* [Read the Docs Addons enabled by default](https://about.readthedocs.com/blog/2024/07/addons-by-default/) covers the rollout of Addons to all all our users on October 7, 2024.

We also have some updates on our platform:

* We have a couple new versions of our Sphinx theme coming out, 2.1.0rc1 that [supports Addons](https://github.com/readthedocs/sphinx_rtd_theme/pull/1573), as well as 3.0 to support [Sphinx 8](https://github.com/readthedocs/sphinx_rtd_theme/issues/1582).
* [API v3](https://docs.readthedocs.io/en/stable/api/v3.html) now supports unauthenticated requests for many endpoints, which should make it easier to integrate in documentation pages.
* We have marked Addons and Build Customization as generally available, no longer having a Beta label, as we're now confident in their stability and usability.
* Our docs are getting consistent updates to add Addons, and work to improve the way we're explaining our core features like Versioning and Builds.

You can always see the latest changes to our platforms in our [changelog 📃](https://docs.readthedocs.io/page/changelog.html).

## Upcoming changes

* We're working on a project to make it [easier to understand what files have changed between versions](https://github.com/readthedocs/readthedocs.org/issues/11319), which will allow us to build a number of neat features like Redirect recommendations, and Pull Request page review suggestions.
* Adding Two Factor Auth (2FA) is also currently under design discussion, and we hope to release it in the next few months.
* We are looking at adding functionality similar to our [sphinx-hoverxref extension](https://github.com/readthedocs/sphinx-hoverxref) to our new documentation system, which support popups for cross-references in a single documentation page. This will work for all documentation tools, not just Sphinx.
* We are planning to move our official documentation to https://docs.readthedocs.com to make it more obviously official. This should be a seamless transition for users, but we will be updating links in our documentation and on our website to reflect this change.

Want to follow along with our development progress? View our [development roadmap 📍️](https://github.com/orgs/readthedocs/projects/156/views/1)

## Possible issues

- As we noted above, we are shipping Addons to all users on October 7, which also means that Sphinx users will be migrated to the new build system. This will have some backwards incompatibilities, so we recommend [reading our blog post](https://about.readthedocs.com/blog/2024/07/addons-by-default/) to understand the changes.

-----

Questions? Comments? Ideas for the next newsletter? [Contact us](mailto:hello@readthedocs.org)!
