title: Automation Rules v2: webhook filters and more flexible matching
date: 2026-05-05
description: Automation rules are now more powerful — match multiple version types in a single rule, filter builds by changed files, commit message or pull request labels, and trigger builds on demand.
category: Feature announcement
tags: hosting, automation, github
authors: Manuel Kaufmann
status: published
image: /images/automation-rules-v2.jpg
image_credit: Photo by <a href="https://unsplash.com/@jontyson?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Jon Tyson</a> on <a href="https://unsplash.com/photos/white-and-black-no-smoking-sign-Om2C3IYmG6o?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>

[Automation rules](https://docs.readthedocs.com/platform/stable/automation-rules.html) let project maintainers
automate actions on new branches and tags pushed to their Git repository:
activate a version, hide it, set it as default, delete it on branch deletion, and more.
Today we are announcing **Automation Rules v2**,
a redesign that makes rules more flexible and unlocks a long-requested capability:
**filtering builds based on the contents of a webhook event**.

## What's new

### Match multiple version types in a single rule

Previously, a rule applied to either a tag *or* a branch.
Now a rule can target any combination of **tags**, **branches**, and **pull requests** at the same time.
This avoids duplicating the same rule with different version types just to cover all the cases.

### Webhook filters

Rules can now look beyond the version name.
When a push or pull request webhook is received,
a rule can also match against:

- **Changed files** — using `fnmatch` patterns (e.g. `docs/*.rst`, `.readthedocs.yaml`).
- **Commit message** — using a Python regular expression (e.g. `^docs:`).
- **Pull request labels** — using a Python regular expression (e.g. `^(docs|build)$`).

All the configured filters must match for the rule to fire.

### New "Trigger build" action

Combined with webhook filters, the new **Trigger build for version** action lets you
**only build when something relevant changed**.
A few use cases this enables:

- Skip builds for commits that don't touch the docs (e.g. only build when files under `docs/` change).
- Skip builds for commits whose message contains `[skip ci]`.
- Only build pull requests that carry a `documentation` label.

When a project has at least one enabled "Trigger build" rule,
builds are gated by those rules:
if no rule matches the incoming webhook event, the build is skipped.

### Enable/disable a rule without deleting it

Each rule now has an **Enabled** toggle,
so you can temporarily turn a rule off without losing its configuration.

## Where it works

Webhook filters rely on the data sent by your Git provider.
For now, they are supported on projects connected through our
[GitHub App integration](https://docs.readthedocs.com/platform/stable/reference/git-integration.html).
Version-only rules (the existing "Activate version", "Hide version", etc.) keep working on every provider as before.

## Migration

If you already have automation rules configured, **there is nothing you need to do**.
All your existing rules have been migrated to the new model and continue to work the same way.
You will simply find new fields available the next time you edit them.

## Try it out

Head over to your project's **Settings → Automation Rules** page to take it for a spin,
and check our [Automation Rules documentation](https://docs.readthedocs.com/platform/stable/automation-rules.html)
for the full reference and more examples.

As always, [let us know](https://app.readthedocs.org/support/) what you think
or [open an issue](https://github.com/readthedocs/readthedocs.org/issues) if you hit any rough edges.
