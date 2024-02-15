title: Introducing latest options for operating system and build tools
date: 2024-02-15
category: Changelog
tags: configuration-file, config-file
authors: Santos Gallegos
status: published

We generally recommend projects pin specific versions of their dependencies,
so that builds are [reproducible](https://docs.readthedocs.io/en/stable/guides/reproducible-builds.html) over time.
However, some projects under active development prefer to use the latest versions available to take advantage of new features and improvements,
without having to update the configuration file every time a new version is available.

We are happy to announce support for using the latest available version for the
[operating system](https://docs.readthedocs.io/en/stable/config-file/v2.html#build-os)
and [build tools](https://docs.readthedocs.io/en/stable/config-file/v2.html#build-tools) configuration options.
The following new option values are available:

- `build.os`: `latest`
- `build.tools.python`: `latest`, `miniconda-latest`, `mambaforge-latest`
- `build.tools.nodejs`: `latest`
- `build.tools.ruby`: `latest`
- `build.tools.rust`: `latest`
- `build.tools.golang`: `latest`

When using these values, **the latest version available on Read the Docs will be used,
which may not match the latest version officially released**.
[Check our documentation](https://docs.readthedocs.io/en/stable/config-file/v2.html) for the list of versions available for each option.

Versions for operating system and tools will be updated at least once every six months.
**Keep in mind that your builds may break unexpectedly if your project isn't compatible with the newest versions when they are updated on Read the Docs.**
We recommend using specific versions of dependencies for projects that require stability.
