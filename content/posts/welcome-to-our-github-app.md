title: Welcome to our GitHub App
date: 2025-05-15
description: 
category: Feature announcement
tags: website, migration, github, authentication
authors: Santos Gallegos
status: published
image: /images/github-app.png
image_credit: Photo by <a href="https://unsplash.com/@synkevych?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Roman Synkevych</a> on <a href="https://unsplash.com/photos/black-and-white-penguin-toy-wX2L8L-fGeA?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>

We are excited to announce that we are migrating from our legacy GitHub OAuth2 application to a modern [GitHub App](https://docs.github.com/en/apps/overview).

## Why the change?

GitHub Apps offer several improvements over traditional OAuth2 applications:

- **More granular permissions.**
  The GitHub App allows us to request only the permissions we need
  -- no more broad, account-wide access.
- **More control over repository access.**
  You can choose exactly which repositories Read the Docs can access,
  instead of granting access to all of them just to import a single one.
- **No webhooks required.**
  The GitHub App subscribes to the events it needs automatically when you install it.
- **No need for deploy keys.**
  To access private repositories the GitHub App uses a temporary read-only scoped token.
- **Keeps working, even if access changes.**
  If the user who originally connected the repository loses access,
  the integration will continue working, since the GitHub App itself maintains access.
- **Always in sync.**
  The GitHub App subscribes to all required events and will always keep your project up to date with your repository.

## What’s changing?

We’re aiming for a smooth transition while continuing to support our legacy OAuth2 integration during this migration period.
Here’s what to expect:

- Existing users who sign in with GitHub will be prompted to authorize our new GitHub App.
  Your existing Read the Docs account will be automatically linked,
  and you won’t lose access to your existing projects.
- Existing users will be asked to migrate their accounts and projects to the new GitHub App.
- New users will use the GitHub App to sign up.
  Creating an account with the legacy OAuth2 application will no longer be supported.
- The legacy OAuth2 application will be deprecated and eventually removed.
  We'll continue to support current users and projects for a while,
  but we strongly encourage you to migrate soon.

## What do you need to do?

If you're already using Read the Docs with GitHub,
you'll receive a notification prompting you to visit our migration page.
This page will walk you through the process of connecting your account and projects to the new GitHub App.

## The future is looking bright

This is just the beginning.
For now, we’re focused on ensuring a seamless transition and providing feature parity with our legacy integration.
But looking ahead, the GitHub App will enable us to build new features that are only possible with a GitHub App,
and to better integrate with GitHub.

You can find more details in our [documentation](https://docs.readthedocs.com/platform/stable/reference/git-integration.html).
If you run into issues or have questions, [contact us via support](https://docs.readthedocs.com/platform/stable/support.html).
