title: Read the Docs Newsletter - March 2026
date: March 9, 2026
description: Company updates and new features from the last month, current focus, and upcoming features.
category: Newsletter
tags: newsletter, community
authors: Manuel Kaufmann
status: published
image: /images/march-2026.jpg
image_credit: Photo by <a href="https://unsplash.com/@ryanserito?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">ryan serito</a> on <a href="https://unsplash.com/photos/yellow-and-red-flowers-on-green-grass-field-near-mountain-under-blue-sky-during-daytime-qOnMAuzV-GA?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>

Spring is arriving in many parts of the world, and we have a lot of product and platform updates to share from the last few weeks.

## News and updates

* We shipped support for webhook filtering in our automation flow, including filtering builds by changed paths and related webhook conditions. This was tracked in [Add support for webhook filtering #12707](https://github.com/readthedocs/readthedocs.org/issues/12707).
* We published our website changelog post for `llms.txt` and `llms-full.txt` support to make AI-friendly project metadata easier to discover. See [Add llms.txt changelog post #375](https://github.com/readthedocs/website/pull/375).
* We improved the Addons configuration UI by exposing the Custom Script input URL directly in the form, tracked in [Addons: expose Custom Script input URL in the UI #689](https://github.com/readthedocs/ext-theme/issues/689).
* We fixed a Safari-specific visual diff issue where navigation arrows were not displayed correctly, tracked in [Missing navigation arrows on diff for Safari #581](https://github.com/readthedocs/addons/issues/581).
* We continued improving build stability by reducing edge cases where builds could remain in non-final states and not be cleaned up correctly. This work is tracked in [Builds: some builds are not terminated by our healthcheck cleanup logic #12473](https://github.com/readthedocs/readthedocs.org/issues/12473).

## Upcoming changes

* We are continuing to iterate on webhook and automation-rule UX so that more teams can express build conditions without custom scripting.
* We are continuing to improve Addons customization and cross-browser behavior as more users adopt newer Addons features.

## Possible issues

* As we continue tightening webhook and automation behavior, some projects may need to revisit filters and build expectations to match their repository workflow.
* If you notice unexpected build states or cleanup behavior, please report it so we can keep improving reliability.

-----

Questions? Comments? Ideas for the next newsletter? [Contact us](mailto:hello@readthedocs.org)!