title: Read the Docs Newsletter - April 2024
date: April 9, 2024
description: Company updates and new features from the last month, current focus, and upcoming features.
category: Newsletter
tags: newsletter, community
authors: Eric Holscher
status: published
image: /images/apr-2024.jpg
image_credit: Photo by <a href="https://unsplash.com/@weirick?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Jake Weirick</a> on <a href="https://unsplash.com/photos/photo-of-cherry-blossom-tree-3t3fzBDJ9Vg?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>

## News and updates

- We shipped our [2023 stats](https://about.readthedocs.com/blog/2024/03/read-the-docs-2023-stats/), which is a tradition we've been doing for over 10 years now.
- Builds that are cancelled for some reason should now be [marked as cancelled](https://github.com/readthedocs/readthedocs.org/pull/11171) on build pages.
- We continue to improve Addons support. We now have [customized version sorting](https://github.com/readthedocs/readthedocs.org/pull/11069), which is a long requested feature.
- On the development side, we've fully adopted [Black code formatting](https://github.com/readthedocs/readthedocs.org/pull/11145) across our codebase. We've been using this for new files for a while, but we've finally rolled it out fully.
- We also worked on a number of other small bug fixes and improvements across notifications, build logs, and other parts of the platform.

You can always see the latest changes to our platforms in our [changelog 📃](https://docs.readthedocs.io/page/changelog.html).

## Upcoming changes

- We're working on a large project to integrate SAML auth support, which would give us support for Okta and other SAML providers. This will be a great addition for our enterprise users.
- With the public beta of our new dashboards, we are working on the final touches and hope to have it available for all users soon.
- We are getting close to custom event support in Addons, which allows a number of custom integrations on top of the project's data.

Want to follow along with our development progress? View our [development roadmap 📍️](https://github.com/orgs/readthedocs/projects/156/views/1)

## Possible issues

- We are [removing automatic MkDocs customizations on April 15](https://about.readthedocs.com/blog/2024/03/mkdocs-yaml-manipulation/), so all MkDocs configurations should now be supported.
- We have officially announced removal of support for VCS systems other than Git. [Read our blog post](https://about.readthedocs.com/blog/2024/02/drop-support-for-subversion-mercurial-bazaar/) for more information.
- We have [defaulted traffic analytics off](https://github.com/readthedocs/readthedocs.org/pull/11056) for users of our new Addons. This default is to save on resources for projects that aren't looking at our analytics data.
- Our [beta dashboard](https://beta.readthedocs.org/) continues to be tested in public beta, and new functionality for Addons configuration is only available in that new interface.

-----

Questions? Comments? Ideas for the next newsletter? [Contact us](mailto:hello@readthedocs.org)!
