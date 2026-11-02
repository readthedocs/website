title: Build your documentation anywhere, host it on Read the Docs
date: 2026-11-02
description: Build your documentation in your own CI and upload it to Read the Docs for hosting with direct upload.
category: Feature announcement
tags: builds, github-actions, ci, hosting
authors: Manuel Kaufmann
status: published
image: /images/posts/direct-upload.jpg
image_credit: Photo by <a href="https://unsplash.com/@smithsonian?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Smithsonian</a> on <a href="https://unsplash.com/photos/vintage-printing-press-in-a-factory-setting-NRteT1L3t0M?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>

Traditionally, hosting your documentation on Read the Docs meant building it on Read the Docs.
Our build process covers most documentation tools,
but sometimes your docs need something we don't have:
a tool we don't support,
a secret that can't leave your CI,
or a build you are already running somewhere else and don't want to run twice.

With **direct upload**, you can build your documentation wherever you want
and upload the result to Read the Docs for hosting.
Your uploaded documentation still gets the hosting features you expect,
including versions, pull request previews, search, Addons, custom domains and downloadable formats.

## How it works

Add one step to your GitHub Actions workflow after the step that builds your docs:

```yaml
- uses: readthedocs/upload-action@v1
  with:
    token: {% raw %}${{ secrets.READTHEDOCS_TOKEN }}{% endraw %}
    project-slug: my-project
    html: _build/html
```

That's it.
The action figures out the branch, tag or pull request from the workflow event.
A push to `main` updates the `main` version,
a new tag creates a new version,
and a pull request gets a pull request preview with a link in the pull request,
just like builds that run on Read the Docs.
GitHub does not make repository secrets available to workflows for pull requests from forks,
so those workflows cannot upload a preview.

You can also upload optional PDF, ePub or zipped HTML files:

```yaml
- uses: readthedocs/upload-action@v1
  with:
    token: {% raw %}${{ secrets.READTHEDOCS_TOKEN }}{% endraw %}
    project-slug: my-project
    html: _build/html
    pdf: _build/latex/my-project.pdf
    epub: _build/epub/my-project.epub
```

If you not using GitHub Actions you can use the
[command line client](https://github.com/readthedocs/readthedocs-cli)
from another CI service or your laptop:

```bash
export READTHEDOCS_TOKEN=...
uvx --from readthedocs-upload readthedocs upload \
    --project-slug my-project \
    --html _build/html
```

## Why we built this

Read the Docs has always been a *Continuous Documentation Deployment* platform:
you push to Git, we build and host.
The building part is what makes it easy to get started,
but it is also what gets in the way when your project has specific needs
than the standard build doesn't cover.

We have heard from teams that build their docs with tools we don't support,
that need access to internal services during the build,
or that simply want a single build for both their tests and their docs.
Direct upload gives those teams the hosting side features of
Read the Docs without asking them to move their build.

## Beta access

Direct upload is still in beta and is available on Read the Docs Community and Read the Docs for Business.

- For an existing project, [contact support](https://docs.readthedocs.com/platform/stable/support.html)
  and ask us to enable direct upload.
- For a new project, [start the import process with direct upload](https://app.readthedocs.org/dashboard/import/?direct_upload=1) enabled by default.

See the [direct upload documentation](https://docs.readthedocs.com/platform/stable/guides/build/direct-upload.html)
for the full guide, including details about versions and uploading from other CI services.
