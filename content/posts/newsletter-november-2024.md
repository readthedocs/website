title: Read the Docs Newsletter - November 2024
date: November 11, 2024
description: Company updates and new features from the last month, current focus, and upcoming features.
category: Newsletter
tags: newsletter, community
authors: Eric Holscher
status: published
image: /images/november-2024.jpg
image_credit: Photo by <a href="https://unsplash.com/@hermanndoyo?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Doyo Hermann</a> on <a href="https://unsplash.com/photos/a-scenic-view-of-a-town-surrounded-by-mountains-y1VQvwSqYOE?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>


## News and updates

* The new **Community dashboard** at https://app.readthedocs.org will be made the default dashboard on November 12. We are still beta testing the Business dashboard, as it effects documentation authentication and requires a bit more testing. We expect to make the Business dashboard the default soon.
* We've added **multi-factor authentication (MFA)** to our platform, and it's now fully released. Give it a try to add an extra layer of security to your account.
* We have added **Python 3.13** as a build option, along with `updating other build tools <https://github.com/readthedocs/readthedocs.org/pull/11742>`_. 
* **Addons** continues to get iterative improvements, including allowing more granular configuration of `documentation notifications <https://docs.readthedocs.io/en/stable/doc-notifications.html>`_, and fixing bugs in the injection logic for large images.
* Our **file tree diff** feature is now in testing, and will be rolled out into Addons in the near future. This will allow you to see what files have changed between versions of your documentation.
* Similarly, **quick previews** when you hover a link is now in testing for Addons, and will be released soon. This will allow you to see a preview of the linked page when you hover over a link in your documentation.

You can always see the latest changes to our platforms in our [changelog 📃](https://docs.readthedocs.io/page/changelog.html).

## Upcoming changes

* We are working to allow extending default ``build.jobs`` in the new build system. This will allow you to customize the build process more easily, with things like ``build.jobs.build.pdf`` being able to override the PDF build.
* We are planning to move our official documentation to https://docs.readthedocs.com to make it more obviously official. This should be a seamless transition for users, but we will be updating links in our documentation and on our website to reflect this change.

Want to follow along with our development progress? View our [development roadmap 📍️](https://github.com/orgs/readthedocs/projects/156/views/1)

## Possible issues

We don't have any known issues at the moment. If you are experiencing any problems, please let us know.

-----

Questions? Comments? Ideas for the next newsletter? [Contact us](mailto:hello@readthedocs.org)!
