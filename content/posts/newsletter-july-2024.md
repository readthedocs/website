title: Read the Docs Newsletter - July 2024
date: July 9, 2024
description: Company updates and new features from the last month, current focus, and upcoming features.
category: Newsletter
tags: newsletter, community
authors: Eric Holscher
status: published
image: /images/july-2024.jpg
image_credit: Photo by <a href="https://unsplash.com/@dyc251?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Diana Yohannes</a> on <a href="https://unsplash.com/photos/a-tree-in-front-of-a-sunset-vmNdWNX3xpU?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>

We missed a couple of newsletter updates because of travel and other commitments, so we're back with a combined update for the last couple months.

## News and updates

* **New dashboard**: We are close to fully launching our new dashboard, and it's now living at https://app.readthedocs.org and https://app.readthedocs.com. The last pieces are swapping over our documentation hosting ("proxito") to the new system, and then we'll update the links on our website to point here, and officially deprecate the old dashboard.
* **SAML SSO**: We continue to work on SAML support, with an initial implementation available for testing. We are planning updates to our login pages to support this new authentication method, which is the last major step before we can release this feature.
* **Addons**: Addons are now fully rolled out to everyone except users of our Sphinx builds. Migration for all Sphinx projects is coming soon, and there will be some backwards incompatibles around the build process.

You can always see the latest changes to our platforms in our [changelog 📃](https://docs.readthedocs.io/page/changelog.html).

## Upcoming changes

* We are working on CSP configuration for our new dashboard, which will help improve security for our users.
* Documentation for Addons is continuing, with a focus on how to use the new system and how to migrate from the old system.
* We are looking at adding functionality similar to our [sphinx-hoverxref extension](https://github.com/readthedocs/sphinx-hoverxref) to our new documentation system, which support popups for cross-references in a single documentation page. This will work for all documentation tools, not just Sphinx.
* We are planning to move our official documentation to https://docs.readthedocs.com to make it more obviously official. This should be a seamless transition for users, but we will be updating links in our documentation and on our website to reflect this change.

Want to follow along with our development progress? View our [development roadmap 📍️](https://github.com/orgs/readthedocs/projects/156/views/1)

## Possible issues

- Our deprecation of injected Sphinx context is happening soon. A blog post will be coming up with that information.

-----

Questions? Comments? Ideas for the next newsletter? [Contact us](mailto:hello@readthedocs.org)!
