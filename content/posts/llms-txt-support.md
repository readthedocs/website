title: Serve llms.txt from your docs
date: 2026-02-11
description: Read the Docs now serves llms.txt and llms-full.txt from your documentation root.
category: Changelog
tags: ai, llms, hosting
authors: Eric Holscher
status: published
image: /images/ai-brain.jpg
image_credit: Photo by <a href="https://unsplash.com/@eclipticgraphic?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Ecliptic Graphic</a> on <a href="https://unsplash.com/photos/a-computer-circuit-board-with-a-brain-on-it-_jg8xh2SsXQ?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>

We now support serving llms.txt files from the root of your documentation domain.
This makes it easy to provide LLM-friendly context about your project at:

* https://your-project.readthedocs.io/llms.txt
* https://your-project.readthedocs.io/llms-full.txt

You can see these in action on our docs:

* <https://docs.readthedocs.com/llms.txt>
* <https://docs.readthedocs.com/llms-full.txt>

Both files are served from your default version when:

* The default version is **public**
* The default version is **active**
* The default version has been **built**
* The llms.txt file exists in your build output

To enable this, add llms.txt (and optionally llms-full.txt) to your build output using your documentation tool.
For details and examples for Sphinx and MkDocs, see our [documentation](https://docs.readthedocs.com/platform/stable/reference/llms-txt.html).
