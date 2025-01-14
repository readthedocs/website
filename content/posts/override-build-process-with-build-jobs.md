title: Partially or completely override the build process
date: January 15, 2025
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

If you are using Sphinx or MkDocs, but you want to have more control over how a specific step is executed,
you can override that step, for example, to use the normal build process for HTML and EPUB, but a custom one for PDF.

```yaml
version: 2

formats: [pdf, epub]

sphinx:
  configuration: docs/conf.py

build:
  os: ubuntu-24.04
  tools:
    python: "3.13"
  jobs:
    build:
      pdf:
        - echo "Building PDF"
        - mkdir -p $READTHEDOCS_OUTPUT/pdf/
        - echo "Hello world!" > $READTHEDOCS_OUTPUT/pdf/out.pdf
```

If you are using another tool, or you want complete control over the build process,
you can use a similar configuration without specifying a `sphinx` or `mkdocs` configuration to have full control over the build process.

```yaml
version: 2

formats: [pdf]
build:
  os: ubuntu-24.04
  tools:
    python: "3.13"
  jobs:
    create_environment:
      - echo "Preparing environment"
    install:
      - echo "Installing dependencies"
    build:
      html:
        - echo "Building HTML"
        - mkdir -p $READTHEDOCS_OUTPUT/html/
        - echo "Hello world!" > $READTHEDOCS_OUTPUT/html/index.html
      pdf:
        - echo "Building PDF"
        - mkdir -p $READTHEDOCS_OUTPUT/pdf/
        - echo "Hello world!" > $READTHEDOCS_OUTPUT/pdf/out.pdf
```

It was already possible to completely override the build process by using the [`build.commands`](https://docs.readthedocs.io/en/stable/config-file/v2.html#build-commands) configuration,
but it has some limitations, such as not being able to use [`build.apt_packages`](https://docs.readthedocs.io/en/stable/config-file/v2.html#build-apt-packages).
