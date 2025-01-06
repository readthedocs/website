title: Read the Docs Newsletter - January 2025
date: January 11, 2025
description: Company updates and new features from the last month, current focus, and upcoming features.
category: Newsletter
tags: newsletter, community
authors: Eric Holscher
status: published
image: /images/jan-2025.jpg
image_credit: Photo by <a href="https://unsplash.com/@kellysikkema?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Kelly Sikkema</a> on <a href="https://unsplash.com/photos/happy-new-year-hanged-decor-PXl_S152jNM?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>

December was a slow month for us, as we took some time off to rest and recharge.
We're back in full force now, and we're excited to share what we've been working on and what's coming up next.

## News and updates

* We improved our support for [manual created latest and stable versions](https://github.com/readthedocs/readthedocs.org/pull/11823).
* We updated our community builders to a newer instance type, which should improve build times for many projects. We're testing this out and will be rolling it out to Business users soon.
* We're adding additional documentation examples for [popular documentation tools](https://docs.readthedocs.io/en/stable/intro/doctools.html) that are supported on Read the Docs. This month we added [Docusarus](https://docs.readthedocs.io/en/stable/intro/docusaurus.html), [Markdoc](https://docs.readthedocs.io/en/stable/intro/markdoc.html), and [mdBook](https://docs.readthedocs.io/en/stable/intro/mdbook.html).
* We added [documentation for authentication](https://docs.readthedocs.io/en/stable/intro/accounts.html) on the platform, which was previously missing.
* **Our new dashboard is now the default for all users.** This has been a long time coming, and we are excited to have have everyone migrated over. The old dashboard will be [removed on March 11](https://about.readthedocs.com/blog/2024/11/rollout-of-our-new-dashboard/).

## Upcoming changes

* We continue working on [Addons](https://docs.readthedocs.io/en/stable/addons.html), including improving our [Visual diff](https://docs.readthedocs.io/en/stable/visual-diff.html) feature.
* We are working to allow extending default ``build.jobs`` in the new build system. This will allow you to customize the build process more easily, with things like ``build.jobs.build.pdf`` being able to override the PDF build. This is now built, and we're testing it internally before documenting it publicly.
* We are planning to move our official documentation to https://docs.readthedocs.com to make it more obviously official. This should be a seamless transition for users, but we will be updating links in our documentation and on our website to reflect this change.

## Possible issues

* [Deprecation of projects using Sphinx or MkDocs without an explicit configuration file](https://about.readthedocs.com/blog/2024/12/deprecate-config-files-without-sphinx-or-mkdocs-config/). This will be fully removed on **January 20, 2025**. The deprecation includes two temporary disabling periods on January 6 and 13.

-----

Questions? Comments? Ideas for the next newsletter? [Contact us](mailto:hello@readthedocs.org)!
