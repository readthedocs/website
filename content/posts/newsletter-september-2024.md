title: Read the Docs Newsletter - September 2024
date: September 13, 2024
description: Company updates and new features from the last month, current focus, and upcoming features.
category: Newsletter
tags: newsletter, community
authors: Eric Holscher
status: published
image: /images/september-2024.jpg
image_credit: Photo by <a href="https://unsplash.com/@routessansfins?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Les routes sans fin(s)</a> on <a href="https://unsplash.com/photos/a-lifeguard-tower-sitting-on-top-of-a-sandy-beach-gnkhKUmENms?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>

## News and updates

We posted one other blog post this month:

* [10 years of sustainable open source](https://about.readthedocs.com/blog/2024/08/10-year-anniversary/), celebrating our 10 year anniversary and reflecting on the sustainability of open source projects.

We also have some updates on our platform:

* We continue to improve the UX of importing projects, and now check to see if you have a `.readthedocs.yml` file in your repository, and suggest a starting point if not.
* We've added Multi-Factor Authentication (MFA) to our platform, which is currently in beta testing. It will be fully rolled out in the next month or two as we work a couple kinks out.
* Our [API v3](https://docs.readthedocs.io/en/stable/api/v3.html) now supports anonymous requests for many endpoints, which should make it easier to integrate in documentation pages, and other use cases.

You can always see the latest changes to our platforms in our [changelog 📃](https://docs.readthedocs.io/page/changelog.html).

## Upcoming changes

* We're working on a project to make it [easier to understand what files have changed between versions](https://github.com/readthedocs/readthedocs.org/issues/11319), which will allow us to build a number of neat features like Redirect recommendations, and Pull Request page review suggestions.
* We are looking at adding functionality similar to our [sphinx-hoverxref extension](https://github.com/readthedocs/sphinx-hoverxref) to our new documentation system, which support popups for cross-references in a single documentation page. This will work for all documentation tools, not just Sphinx.
* We are planning to move our official documentation to https://docs.readthedocs.com to make it more obviously official. This should be a seamless transition for users, but we will be updating links in our documentation and on our website to reflect this change.

Want to follow along with our development progress? View our [development roadmap 📍️](https://github.com/orgs/readthedocs/projects/156/views/1)

## Possible issues

- **We are shipping Addons to all users by default on October 7**, which also means that Sphinx users will be migrated to the new build system. This will have some backwards incompatibilities, so we recommend [reading our blog post](https://about.readthedocs.com/blog/2024/07/addons-by-default/) to understand the changes.

-----

Questions? Comments? Ideas for the next newsletter? [Contact us](mailto:hello@readthedocs.org)!
