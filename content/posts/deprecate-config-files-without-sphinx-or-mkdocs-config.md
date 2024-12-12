title: Deprecation of configuration files without Sphinx or MkDocs configuration
date: December 16, 2024
description: Announcing the deprecation of configuration files without Sphinx or MkDocs configuration.
category: Changelog
tags: deprecation, configuration-file
authors: Santos Gallegos
status: published
image: /images/deprecated-config-file-without-sphinx-or-mkdocs-config.jpg
image_credit: Photo by <a href="https://unsplash.com/@jernejgraj?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Jernej Graj</a> on <a href="https://unsplash.com/photos/photo-of-seashore-during-golden-hour-n44KHcbp1_E?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>

We are announcing the deprecation of configuration files that do not contain a explicit `sphinx` or `mkdocs` configuration.

If your `.readthedocs.yaml` configuration file doesn't contain a `sphinx.configuration` or `mkdocs.configuration` key,
make sure to add it. For example, for a Sphinx project, your configuration file should look like this:

```yaml
version: 2
sphinx:
  # Path to your Sphinx configuration file.
  configuration: docs/conf.py
```

For a MkDocs project, your configuration file should look like this:

```yaml
version: 2
mkdocs:
  # Path to your MkDocs configuration file.
  configuration: mkdocs.yml
```

We used to automatically try to find the configuration file for your project,
but in order to make builds more explicit and predictable, we are deprecating this behavior.
This will also allows us to better support projects that don't use Sphinx or MkDocs in the near future.

Deprecation timeline
--------------------

- **Monday, January 6, 2024**: Temporarily disallow projects without an explicit Sphinx or MkDocs configuration for 12 hours, from 00:01 PST to 11:59 PST.
- **Monday, January 20, 2025**:Temporarily disallow projects without an explicit Sphinx or MkDocs configuration for 24 hours, from 00:01 PST to 23:59 PST.
- **Monday, February 3, 2025**: Permanently disallow projects without an explicit Sphinx or MkDocs configuration.
