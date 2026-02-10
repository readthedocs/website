title: Agent skills for the Read the Docs now available
date: 2026-02-05
description: Highlighting new Read the Docs skills for API v3 workflows and .readthedocs.yaml configuration.
category: Feature announcement
tags: ai, api, configuration, skills
authors: Eric Holscher
status: published
image: /images/ai-magic.jpg
image_credit: Photo by <a href="https://unsplash.com/@almosbech?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Almos Bechtold</a> on <a href="https://unsplash.com/photos/woman-blowing-sprinkle-in-her-hand-AJ_Mou1FUS8?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>


Trying to figure out how to pass up-to-date information to AI agents is a hard problem currently.
We have experimented with MCP servers and ``llms.txt``,
but we have found that [Agent Skills](https://agentskills.io/home) are the current best way to handle this problem explicitly.

We have been building the [Read the Docs Skills repository](https://github.com/readthedocs/skills) to allow more experimentation.
Today we are highlighting two skills that we've found the most useful: the Read the Docs API skill and the Read the Docs Config skill.

Each skill is a small, self-contained package with a `SKILL.md` that teaches an agent how to perform a specific task.
You can easily read them to understand more about how they work.

You can also read the [Read the Docs Skills documentation](https://docs.readthedocs.com/platform/stable/reference/agent-skills.html) for more background and usage guidance.

![Read the Docs API skill example](/images/posts/skills-example.png)

## Read the Docs API skill

The [Read the Docs API skill](https://github.com/readthedocs/skills/blob/main/skills/readthedocs-api/SKILL.md) gives your AI agent the ability to interact with the [Read the Docs REST API](https://docs.readthedocs.com/platform/stable/api/v3.html).
This requires having an [API token](https://docs.readthedocs.com/platform/stable/api/v3.html#token) with the appropriate permissions.

If you want to manage updates or changes to your project (eg. adding a redirect for the current PR, or triggering a new build), this skill will help you do that.

## Read the Docs Config Writer skill

The [Read the Docs Config Writer skill](https://github.com/readthedocs/skills/blob/main/skills/readthedocs-write-config/SKILL.md) helps you create or update `.readthedocs.yaml` files.
It has information about the actual configuration options available,
and won't try to invent options that don't exist.

This skill should automatically be used whenever you ask your agent to help you write or update a Read the Docs configuration file. 🪄

## Install the skills

Clone the repository and use the skills directly by copying them where your agent expects skills to be:

```bash
git clone https://github.com/readthedocs/skills.git
```

If your agent supports the [Agent Skills CLI](https://skills.sh/docs/cli), you can install the repository with:

```bash
npx skills add readthedocs/skills
```

## Give us feedback

We're excited to see how to integrate AI tooling in a way that works well for our community.
This is a fast moving space,
and providing context to AI tooling is an interesting challenge we want to help solve.
