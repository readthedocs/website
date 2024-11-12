title: Build process change: removing changes to mkdocs.yml
date: 2024-03-25
category: Changelog
tags: builders, deprecation, mkdocs, addons
authors: Manuel Kaufmann
status: published
image: /images/mkdocs-yaml-manipulation.jpg
image_credit: Photo by <a href="https://unsplash.com/@flowforfrank?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Ferenc Almasi</a> on <a href="https://unsplash.com/photos/text-yXrl2lkGJ-k?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>


We are announcing the deprecation of the `mkdocs.yml` manipulation done by Read the Docs at build time on **Monday, April 15th, 2024**.
After this date, there will be some changes in build process behavior:

* MkDocs default theme will be used if your documentation is not defining one on its `mkdocs.yml` file.
  If you want to continue using the `readthedocs` theme, read [Choosing your Theme](https://www.mkdocs.org/user-guide/choosing-your-theme/) MkDocs' documentation
  to learn how to explicity define it in the configuration file.
* [The new beta Read the Docs Addons](https://blog.readthedocs.com/addons-flyout-menu-beta/) will be enabled by default.


We've made this decision to simplify the build process executed on Read the Docs,
allowing our users to get the same results when building their documentation locally and on our platform.
This simplification allows more complex configuration in the YAML by using the special `!!` syntax
[that wasn't previously supported due to security reasons](https://github.com/readthedocs/readthedocs.org/issues/8529).


[Contact us](https://app.readthedocs.org/support/) if you have any questions,
and let us know any inconvenient you may have with this change.
