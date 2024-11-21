title: Deprecation and removal of embed API v2
date: November 21, 2024
description: Announcing the deprecation and removal of embed API v2.
category: Changelog
tags: api, deprecation
authors: Santos Gallegos
status: published
image: /images/deprecated-embed-api-v2.jpg
image_credit: Photo by <a href="https://unsplash.com/@jplenio?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Johannes Plenio</a> on <a href="https://unsplash.com/photos/brown-boat-near-dock-qkfxBc2NQ18?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>

We are announcing the deprecation and removal of embed API v2.
Our old API has been replaced by [embed API v3](https://docs.readthedocs.io/en/stable/api/v3.html#embed),
which offers the same features, and it works for all types of projects, not just Sphinx.

If you are using our [sphinx-hoverxref](https://sphinx-hoverxref.readthedocs.io/en/stable/) extension,
please update to the latest version to keep the extension working.

Deprecation timeline
--------------------

- **Monday, December 9, 2024**: Temporarily disable embed API v2 for all users for 12 hours, from 00:01 PST to 11:59 PST.
- **Monday, January 13, 2025**: Temporarily disable embed API v2 for all users for 24 hours, from 00:01 PST to 23:59 PST.
- **Monday, January 20, 2025**: Permanently remove embed API v2 permanently.
