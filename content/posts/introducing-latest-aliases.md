title: Introducing latest aliases for operating system and tools in the configuration file
date: 2024-02-15
category: changelog
tags: configuration file
authors: Santos Gallegos
status: published

While some projects benefit from the stability provided by using a specific version,
and updating when needed, others projects, especially those under active development,
prefer to use the latest versions available to take advantage of new features and improvements
without having to update the configuration file every time a new version is available.

We are happy to announce the support for using the latest version available of the
[operating system](https://docs.readthedocs.io/en/stable/config-file/v2.html#build-os)
and [tools](https://docs.readthedocs.io/en/stable/config-file/v2.html#build-tools) in the configuration file.
The following new options are available:

- `build.os`: `latest`
- `build.tools.python`: `latest`, `miniconda-latest`, `mambaforge-latest`
- `build.tools.nodejs`: `latest`
- `build.tools.ruby`: `latest`
- `build.tools.rust`: `latest`
- `build.tools.golang`: `latest`

When using those options, **the latest version available on Read the Docs will be used,
which may not match the latest version officially released**.
Check our documentation for the list of versions available for each option.

Versions will be updated at least once every six months,
keep in mind that your builds may break unexpectedly if your project isn't compatible with the newest versions when they are updated on Read the Docs.
We recommend using a specific version for projects that require stability.
