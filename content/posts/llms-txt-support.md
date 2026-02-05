title: Serve llms.txt from your docs
date: 2026-02-11
description: Read the Docs now serves llms.txt and llms-full.txt from your documentation root.
category: Changelog
tags: ai, llms, hosting
authors: Eric Holscher
status: published
image: /images/ai-brain.jpg

We now support serving llms.txt files from the root of your documentation domain.
This makes it easy to provide LLM-friendly context about your project at:

* https://your-project.readthedocs.io/llms.txt
* https://your-project.readthedocs.io/llms-full.txt

You can see these in action on our docs:

* <https://docs.readthedocs.com/llms.txt>
* <https://docs.readthedocs.com/llms-full.txt>

Both files are served from your default version.
If the file does not exist, or the default version is private, inactive, or unbuilt, we return a 404.

To enable this, add llms.txt (and optionally llms-full.txt) to your build output using your documentation tool.
For details and examples for Sphinx and MkDocs, see our documentation:
https://docs.readthedocs.io/en/stable/reference/llms-txt.html
