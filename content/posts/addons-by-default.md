title: Read the Docs Addons enabled by default
date: 2024-07-15
description: Read the Docs Addons will be enabled by default to all projects soon
category: Changelog
tags: builders, sphinx, addons
authors: Manuel Kaufmann
status: published
image: /images/addons-by-default.jpg
image_credit: Photo by <a href="https://unsplash.com/@silvawebdesigns?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Nathan da Silva</a> on <a href="https://unsplash.com/photos/macbook-pro-beside-white-ceramic-mug-on-brown-wooden-table-k-rKfqSm4L4?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>

We are announcing the introduction of [Read the Docs Addons](https://about.readthedocs.com/blog/2024/04/enable-beta-addons/) to all the projects by default starting on **October 7, 2024**.
Read the Docs Addons is the new modular implementation of all the features Read the Docs adds on top of your documentation:
analytics, flyout menu, notifications and search, among others.

----

> _**TL;DR:**
> Read the Docs has stopped adding extra context and configuration on Sphinx builds.
> This may affect your documentation builds.
> If you are experimenting any issue with this change,
> read [How does it affect my projects?](#how-does-it-affect-my-projects) section and
> try installing [`sphinx-build-compatibility`](https://github.com/readthedocs/sphinx-build-compatibility) extension in your project to mitigate them._

----

Since Read the Docs started,
every time it ran a build, extra configuration options were automatically added to make integration easier.
This manipulation happened at Sphinx's `conf.py` and MkDocs's `mkdocs.yml` configuration files,
and included the following:

- Adding JS and CSS files.
- Defining the Read the Docs theme by default.
- Injecting extra data into Sphinx's `html_context` to make it available from Jinja2 templates.
- Configurating the LaTeX engine for Japanese and Chinese projects.
- Setting the canonical URL based on the domain defined in Read the Docs.
- ... and others.

This manipulation has worked great for **+10 years** for most of our projects.
However, for some users this "behind the scenes" manipulation was hard to understand
and mislead what was going on when building on Read the Docs,
since results may differ from when building locally.

The introduction of Read the Docs Addons [last year](https://blog.readthedocs.com/addons-flyout-menu-beta/),
has proved that all these features can be added on top of the documentation without having to manipulate project's configuration at build time,
removing these differences between building locally and on Read the Docs;
making users always get the result they were expecting.

We've been enabling Read the Docs Addons by default on all projects using `build.commands` since then
-- which was a workaround for those users wanting to skip this "behind the scenes" config manipulation,
and it has worked great.

Another step towards this direction was the [removal of YAML manipulation for all MkDocs projects](https://about.readthedocs.com/blog/2024/03/mkdocs-yaml-manipulation/), on Aril 2024.
Since then, all projects building with MkDocs are already using Read the Docs Addons and they haven't reported any big issues.

All of this step-by-step changes have given us the confidence to make the last step and **plan the removal of the config manipulation for Sphinx projects** as well,
which is the most used documentation tool on Read the Docs,
and that's why we left it for the end.


## Deprecation timeline

We understand this change is going to affect _all the projects_ building on Read the Docs,
so we have a timeline to make this deprecation easier for our users.
Keep these dates in mind and prepare your projects for the changes:

- **July 29, 2024**: enable Read the Docs Addons for _all **new** projects_ created.
- **October 7, 2024**: enable Read the Docs Addons for _**all projects**_.


## How does it affect my projects?

There are two big different types of changes that will affect your projects:
at build time, and visually.
Depending on the configuration of your project, it could be affected by one, both or none of them.

### At build time changes

As we mentioned before, all the Sphinx's `conf.py` file manipulation won't happen anymore at build time.
This means that if your project were using any of these extra configuration,
those won't be available at build time anymore and some features may not work as expected,
or the build could fail completely.

The following are the most common changes you may need to do in your Sphinx's configuration file:

```python
import os

# Define the canonical URL if you are using a custom domain on Read the Docs
html_baseurl = os.environ.get("READTHEDOCS_CANONICAL_URL", "")

# Tell Jinja2 templates the build is running on Read the Docs
if os.environ.get("READTHEDOCS", "") == "True":
    if "html_context" not in globals():
        html_context = {}
    html_context["READTHEDOCS"] = True
```

This also means that Google Analytics will stop being injected automatically on those projects that were specifying their GA code and it will stop working.
If you want to continue using Google Analytics in your project,
we recommend using the [`sphinxcontrib-googleanalytics`](https://pypi.org/project/sphinxcontrib-googleanalytics/) Sphinx extension.

In case you've found any difference in behavior after Read the Docs Addons has been enabled
(see [How to opt-in to addons _now_](#how-to-opt-in-to-addons-now) to enable addons manually),
and you've already added the previous chunk of code to your Sphinx's `conf.py` file,
you can try installing the [`sphinx-build-compatibility`](https://github.com/readthedocs/sphinx-build-compatibility/) extension we've created
to allow keeping the "behind the scenes" manipulation behavior at build time while you can dig more on these changes and perform the migration gradually.

### Visual changes

Even if the build has completed successfully, there may be some visual changes.
Version and pull request notifications were completely re-designed and the flyout menu has been moved to a floating position in the bottom right,
for example.

Depending on your project's configuration, the documentation tool and the theme you are using, you will notice these differences.
We released a new version of our theme to keep the flyout menu at the bottom left integrated with the navbar
that you can install it as `sphinx-rtd-theme==3.0.0` and define [`flyout_display`](https://sphinx-rtd-theme.readthedocs.io/en/latest/configuring.html#confval-flyout_display) as `attached`.
We are also talking to other theme authors to communicate these changes and work with them towards a better integration.
Expect news around this visual changes in the following months.


## How to opt-in to addons _now_

Read the Docs Addons is already available for all users that want to start using it on their projects.
In case they want to prepare themselves for the migration, or make usage of the new features from Read the Docs Addons, like the [DocDiff addon](https://docs.readthedocs.io/page/pull-requests.html).
If you want to enable Read the Docs Addons in your project, [follow these steps from our documentation](https://docs.readthedocs.io/page/addons.html#enabling-read-the-docs-addons).


## Feedback

[Let us know](https://docs.readthedocs.io/page/support.html) any feedback you may have about this change or any of the addons.
We are happy to work together to keep improving them or fix any issue you may have with the migration.
