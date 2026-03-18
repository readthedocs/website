title: Deprecation: removal of Ubuntu 20.04 LTS build image
date: 2026-03-18
description: Read the Docs will remove the ubuntu-20.04 build image on June 1st, 2026.
category: Changelog
tags: builders, images, deprecation
authors: Manuel Kaufmann

We are announcing the deprecation of the `ubuntu-20.04` build image on Read the Docs.
The removal date is set to **Monday, June 1st, 2026**.
After this date, projects configured to build with `build.os: ubuntu-20.04` will stop building until they are updated to a supported Ubuntu image.

This change is part of our work to keep our build images current and to prepare for adding Ubuntu 26.04 LTS on Read the Docs once it is available.
Ubuntu 20.04 LTS is now an older base image, and continuing to support it increases maintenance cost and slows down our build image lifecycle.

This deprecation affects a significant number of projects.
More than 10,000 projects have successfully built with `ubuntu-20.04` over time,
and around 1,300 projects used it in the last 90 days.
We want to give maintainers enough time to migrate before the image is removed.

## Deprecation timeline

* **Wednesday, March 18, 2026**: Publish this deprecation announcement.
* **Before Monday, June 1, 2026**: Email maintainers of active projects that are still using `ubuntu-20.04`.
* **Monday, June 1, 2026**: Remove the `ubuntu-20.04` build image from Read the Docs.

## How to update your project

If your project currently uses `ubuntu-20.04`, update your `.readthedocs.yaml` file to use a newer supported image instead.
For most projects, we recommend migrating to `ubuntu-24.04` or `ubuntu-lts-latest`.

```yaml
version: 2

build:
  os: ubuntu-24.04
  tools:
    python: "3.13"
```

Read the Docs currently supports `ubuntu-22.04`, `ubuntu-24.04`, and `ubuntu-lts-latest` for `build.os`.
You can review all supported values in our [build configuration reference](https://docs.readthedocs.io/en/stable/config-file/v2.html#build-os).

If your project depends on system packages or language versions that behave differently on a newer Ubuntu release,
we recommend testing the change as soon as possible and adjusting your build configuration before June 1st.

If you are already using `ubuntu-22.04`, `ubuntu-24.04`, or `ubuntu-lts-latest`, no action is required.

## Contact us

[Contact us](https://app.readthedocs.org/support/) if you have any questions,
or if you run into issues migrating your project to a newer Ubuntu image.