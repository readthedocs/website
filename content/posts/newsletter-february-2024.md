title: Read the Docs Newsletter - February 2024
date: Feb 1, 2024
description: Company updates and new features from the last month, current focus, and upcoming features.
category: Newsletter
tags: newsletter, community
authors: Eric Holscher
status: published
image: /images/feb-2024.jpg
image_credit: Photo by <a href="https://unsplash.com/@kevinoetiker?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Kevin Oetiker</a> on <a href="https://unsplash.com/photos/snow-covered-brown-trees-_AL1zHGc5_Q?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>


## News and updates

* Forced redirects are now available for all users, but redirects are limited based on plan types. This is an update from our previous newsletter that comes from our redirects refactor.
* We moved our new blog posts to be published on our website, so going forward you can find it [directly on our website](https://about.readthedocs.org/blog/).
* We shipped an update that allows [Sphinx builds to share environments](https://github.com/readthedocs/readthedocs.org/pull/11073). This should make builds of multiple formats faster.
* We shipped a few different security fixes that were found by Santos Gallegos, a member of our team. You can read more about them in our [security advisories](https://github.com/readthedocs/readthedocs.org/security/advisories)
* We shipped an [updated settings page for Addons](https://github.com/readthedocs/readthedocs.org/pull/11031) in our new beta dashboard. This allows enabling and disabling each addon.
* We updated our `build.tools` versions to use the Node.js for latest LTS version (`v20.11.0`) and added support for Go 1.21 and Rust 1.75.

You can always see the latest changes to our platforms in our [changelog 📃](https://docs.readthedocs.io/page/changelog.html).

## Upcoming changes

- We continue to work on improving Addons. Our goal is to default all projects to using Addons in Q2 of 2024. We are working on improving the user experience, and adding more Addons to make the transition easier.
- Our marketing website continues to get some updates. We are working on improving the user experience and making it easier to find the information you need.
- Our Commercial beta dashboard is almost ready for public beta. We are working on the final touches and hope to have it available for all users soon.
- We continue to work on improvements to our build system, [including support for "latest"](https://github.com/readthedocs/readthedocs.org/issues/8861) versions.

Want to follow along with our development progress? View our [development roadmap 📍️](https://github.com/orgs/readthedocs/projects/156/views/1)

## Possible issues

- If you are using an old version of our `readthedocs-sphinx-search` extension, you should upgrade it. You can read more in our [security notice](https://github.com/readthedocs/readthedocs-sphinx-search/security/advisories/GHSA-xgfm-fjx6-62mj).
- We are investigating [removing support for VCS systems other than Git](https://github.com/readthedocs/readthedocs.org/issues/8840). We have sent an email to all users who are using other VCS systems for feedback as a first step.
- We have [defaulted traffic analytics off](https://github.com/readthedocs/readthedocs.org/pull/11056) for users of our new Addons. This default is to save on resources for projects that aren't looking at our analytics data.
- Our [beta dashboard](https://beta.readthedocs.org/) continues to be tested in public beta, and new functionality for Addons configuration is only be available in that new interface.

-----

Questions? Comments? Ideas for the next newsletter? [Contact us](mailto:hello@readthedocs.org)!
