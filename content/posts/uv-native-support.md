title: uv is now supported natively
date: 2026-04-20
description: Announcing native uv support in .readthedocs.yaml for Python dependency installation.
category: Feature announcement
tags: configuration-file, python, uv
authors: Manuel Kaufmann
status: published
image: /images/uv.jpg
image_credit: Photo by <a href="https://unsplash.com/@pointblanq?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Point Blanq</a> on <a href="https://unsplash.com/photos/people-on-beach-during-sunset-D8AhlqaofJg?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
      

We are excited to announce that Read the Docs now supports [`uv`](https://docs.astral.sh/uv/) natively in `.readthedocs.yaml` configuration file.
This gives you a first-class way to install Python dependencies with `uv` during builds,
without having to override install steps manually.

## How to use it

Native `uv` support lives under `python.install`.
Set `method: uv` and choose a `command`:

- `sync` runs `uv sync` from your `pyproject.toml` or `uv.lock` file
- `pip` runs `uv pip install` from a requirements file or path

Here is a small `.readthedocs.yaml` example using `uv sync`:

```yaml
version: 2

build:
  os: ubuntu-24.04
  tools:
    python: "3.14"

python:
  install:
    - method: uv
      command: sync
      groups:
        - docs
```

If you prefer requirements-based workflows,
you can use `command: pip` with either `requirements` or `path`.


```yaml
python:
  install:
    - method: uv
      command: pip
      requirements: docs/requirements.txt
```

For full reference and more examples,
see the documentation for [`uv` in the config file reference](https://docs.readthedocs.com/platform/stable/config-file/v2.html#uv).

## Feedback welcome

If you are already building your docs with `uv`,
we would love to hear how this works for your project.
Please [contact support](https://docs.readthedocs.com/platform/stable/support.html) and share your experience.
