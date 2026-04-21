title: Deprecation of python.install.method: setuptools
date: 2026-04-21
description: Read the Docs will remove support for python.install.method: setuptools on July 1st, 2026.
category: Changelog
tags: python, deprecation, configuration-file
authors: Manuel Kaufman
status: published
image: /images/setuptools-deprecated.jpg
image_credit: Photo by <a href="https://unsplash.com/@hnhmarketing?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Hunter Haley</a> on <a href="https://unsplash.com/photos/four-handheld-tools-on-board-s8OO2-t-HmQ?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
      

We are announcing the deprecation of `python.install.method: setuptools` in the `.readthedocs.yaml` configuration file.

This option uses `python setup.py install`, which is deprecated in the Python packaging ecosystem.
Read the Docs will remove support for it on **Wednesday, July 1st, 2026**.
After this date, projects still using `python.install.method: setuptools` will fail their builds until they are updated.

If your project is installing a local Python package with this configuration:

```yaml
version: 2

python:
  install:
    - method: setuptools
      path: .
```

you should update it to use `pip` instead:

```yaml
version: 2

python:
  install:
    - method: pip
      path: .
```

If you are already using `python.install.method: pip`, `python.install.method: uv`, or you are not using `method: setuptools`, no action is required.

`pip` is the recommended replacement for most projects.
If you are using `uv` for your Python dependency management, you can also migrate to `python.install.method: uv`.

## Deprecation timeline

* **Tuesday, April 21, 2026**: Publish this deprecation announcement.
* **Before Wednesday, July 1, 2026**: Email maintainers of active projects that are still using `python.install.method: setuptools`.
* **Wednesday, July 1, 2026**: Remove support for `python.install.method: setuptools` on Read the Docs.

## How to update your project

For most projects, replacing `method: setuptools` with `method: pip` is enough.
This changes the installation step from `python setup.py install` to `pip install`, which is the supported and recommended workflow.

If your project installs optional dependencies, you can keep using `extra_requirements` with `pip`:

```yaml
version: 2

python:
  install:
    - method: pip
      path: .
      extra_requirements:
        - docs
```

Projects that only install requirements files and do not use `python.install.method: setuptools` are not affected by this change.

## Contact us

[Contact us](https://app.readthedocs.org/support/) if you have any questions,
or if you run into issues migrating away from `python.install.method: setuptools`.