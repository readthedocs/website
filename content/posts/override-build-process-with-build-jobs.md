title: You can now partially or completely override the build process
date: January 20, 2025
description: Announcing support for partially or completely override build steps using the `build.jobs` configuration.
category: Feature announcement
tags: configuration-file
authors: Santos Gallegos
status: published
image: /images/override-build-steps-with-build-jobs.jpg
image_credit: Photo by <a href="https://unsplash.com/@ryanquintal?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Ryan Quintal</a> on <a href="https://unsplash.com/photos/purple-block-toy-_H7p-RZUVo4?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>

We are excited to announce that you can now partially or completely override build steps using the [`build.jobs`](https://docs.readthedocs.io/en/stable/config-file/v2.html#build-jobs) configuration in your `.readthedocs.yaml` configuration file.
This allows you to customize the build process to suit your project's specific requirements.
Find more details and examples in our [documentation](https://docs.readthedocs.io/en/stable/build-customization.html).

Previously, you could only extend the build process by using any of the `pre_` and `post_` build jobs,
we have now extended this functionality to allow you to override the build process completely.
The following build steps are available for you to override:

- `create_environment`
- `install`
- `build.html`
- `build.pdf`
- `build.epub`
- `build.htmlzip`

If you are using Sphinx or MkDocs, but you want to have more control over how a specific step is executed, you can override only that step.
For example, to use the normal build process for HTML and EPUB when building a Sphinx project,
but use [rinohtype](https://www.mos6581.org/rinohtype/master/intro.html#sphinx-builder) for PDF output, you can use the following configuration:

```yaml
version: 2

formats:
  - pdf
  - epub

sphinx:
  configuration: docs/conf.py

python:
  install:
    - requirements: docs/requirements.txt

build:
  os: ubuntu-24.04
  tools:
    python: "3.13"
  jobs:
    build:
      pdf:
        - sphinx-build -b rinoh docs _build/pdf/
        - mkdir --parents $READTHEDOCS_OUTPUT/pdf/
        - mv _build/pdf/*.pdf $READTHEDOCS_OUTPUT/pdf/
```

If you are using another tool, or you want complete control over the build process,
you can use a similar configuration without specifying a `sphinx` or `mkdocs` configuration to have full control over the build process.
For example, to build using [Markdoc](https://markdoc.dev/) you can use the following configuration:

```yaml
version: 2

build:
  os: ubuntu-24.04
  tools:
    nodejs: "22"
  jobs:
    install:
      - cd docs/ && npm install
    build:
      html:
        - cd docs/ && npm run build
        - mkdir --parents $READTHEDOCS_OUTPUT/html/
        - cp --recursive docs/out/* $READTHEDOCS_OUTPUT/html/
```

You can check [our docs](https://docs.readthedocs.io/en/stable/intro/markdoc.html) for a working example.

We recommend using [`build.jobs`](https://docs.readthedocs.io/en/stable/config-file/v2.html#build-jobs) over [`build.commands`](https://docs.readthedocs.io/en/stable/config-file/v2.html#build-commands),
as it offers the same functionality as `build.commands`, but in a more structured way that allows you to define different commands for each format,
while also supporting installing system dependencies via `build.apt_packages`.
