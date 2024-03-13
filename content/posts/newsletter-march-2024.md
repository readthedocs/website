title: Read the Docs Newsletter - March 2024
date: March 13, 2024
description: Company updates and new features from the last month, current focus, and upcoming features.
category: Newsletter
tags: newsletter, community
authors: Eric Holscher
status: published
image: /images/mar-2024.jpg
image_credit: Photo by <a href="https://unsplash.com/@catrionaobrian?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Ekaterina Novitskaya</a> on <a href="https://unsplash.com/photos/white-cherry-blossom-in-bloom-during-daytime-kcwb2wDxQFM?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>

## News and updates

- We added [support for "latest"](https://about.readthedocs.com/blog/2024/02/introducing-latest-aliases/) in all of the build tools, allowing you to always be up to date.
- We added [support for Ruby as a build tool](https://about.readthedocs.com/blog/2024/03/read-the-docs-loves-ruby/), based on feedback from our community.
- We shipped our first official links to our new beta dashboards in our application, linking users to our [much improved build detail page](https://beta.readthedocs.org/projects/test-builds/builds/23655124/). This means both of our beta dashboards are officially in public beta!
- We made [Sphinx builds share their environment between builds](https://github.com/readthedocs/readthedocs.org/pull/11073), which should make builds of multiple formats faster.
- We made some initial structure changes in [our user documentation](https://docs.readthedocs.io/en/stable/), to make it easier to navigate and find the information you need. More changes will be coming here as we onboard a contractor to help with this work.
- Our new Addons flyout was updated to [keep the page when changing versions or languages](https://github.com/readthedocs/addons/pull/242).
- We continue to simplify our settings pages. This month we [combined our Advanced Settings and Settings pages](https://github.com/readthedocs/readthedocs.org/pull/11169).

You can always see the latest changes to our platforms in our [changelog 📃](https://docs.readthedocs.io/page/changelog.html).

## Upcoming changes

- We continue to work on improving Addons. The next step here is to [ship Addons on Mkdocs projects](https://github.com/readthedocs/readthedocs.org/pull/11206) by default, removing our build process overrides.
- Our marketing website continues to get some updates. We are working on improving the user experience and making it easier to find the information you need.
- With the public beta of our new dashboard, we are working on the final touches and hope to have it available for all users soon.
- We continue to investigate Okta SSO and improve our support for Google SSO.

Want to follow along with our development progress? View our [development roadmap 📍️](https://github.com/orgs/readthedocs/projects/156/views/1)

## Possible issues

- We have officially announced removal of support for VCS systems other than Git. [Read our blog post](https://about.readthedocs.com/blog/2024/02/drop-support-for-subversion-mercurial-bazaar/) for more information.
- We have [defaulted traffic analytics off](https://github.com/readthedocs/readthedocs.org/pull/11056) for users of our new Addons. This default is to save on resources for projects that aren't looking at our analytics data.
- Our [beta dashboard](https://beta.readthedocs.org/) continues to be tested in public beta, and new functionality for Addons configuration is only be available in that new interface.

-----

Questions? Comments? Ideas for the next newsletter? [Contact us](mailto:hello@readthedocs.org)!
