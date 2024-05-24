title: Stop redirecting root documentation URL to "README.html"
date: 2024-05-27
category: Changelog
tags: hosting, deprecation
authors: Manuel Kaufmann
status: published
image: /images/readme-html-deprecated.jpg
image_credit: Photo by <a href="https://unsplash.com/@introspectivedsgn?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Erik Mclean</a> on <a href="https://unsplash.com/photos/black-asus-laptop-computer-showing-3-00-sxiSod0tyYQ?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>

We are announcing the **deprecation of redirecting root URLs (`/`) to `/README.html`**
for all the projects that don't output an `index.html` file when building the documentation.
The deprecation date is set on **Monday, July 1st, 2024**.
After this date, projects not outputting an `index.html` file will [fail their builds](https://blog.readthedocs.com/builds-without-index/).

### Deprecation timeline

We understand this change will affect a few hundred of projects, so we have a timeline to communicate this deprecation to our users effectively.

* **Tuesday, May 28, 2024**: Email project owners using this deprecated feature so they can take action.
* **Monday, June 10, 2024**: Do the first brownout (temporarily enforce this deprecation) for 12 hours: 00:01 PST to 11:59 PST (noon)
* **Monday, June 17, 2024**: Do a second brownout (temporarily enforce this deprecation) for 24 hours: 00:01 PST to 23:59 PST (midnight)
* **Monday, June 24, 2024**: Do a third and final brownout (temporarily enforce this deprecation) for 48 hours: 00:01 PST to 23:59 PST (midnight)
* **Monday, July 1, 2024**: Fully remove support for building documentation without configuration file v2.

We strongly recommend to update your projects before July 1st, 2024 to avoid any downtime.

### How to update your project

There are different approaches that can be followed depending on the configuration of your project.

1. Migrate your Sphinx documentation to use `master_doc = "index"` instead of `master_doc = "README"`.
   This can be done by re-structuring your documentation or by creating a symlink from of `index.rst -> README.rst`.
2. Rename the `README.html` as `index.html` once the build has finished using [`build.jobs.post_build`](https://docs.readthedocs.io/en/stable/config-file/v2.html#build-jobs)

Note these are only two possible ideas, but there may be other ways to achieve the same goal.

> _**Tip**: you can create a redirect from `/README.html` to `/` to keep links pointing to the deprecated URL working._

[Contact us](https://readthedocs.org/support/) if you have any questions,
and let us know any inconvenient you may have with this change.
