title: Announcing our GitHub App Beta
date: 2025-06-02
description:
category: Feature announcement
tags: website, migration, github, authentication
authors: Santos Gallegos
status: published
image: /images/github-app.png
image_credit: Photo by <a href="https://unsplash.com/@synkevych?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Roman Synkevych</a> on <a href="https://unsplash.com/photos/black-and-white-penguin-toy-wX2L8L-fGeA?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>

We are excited to announce that we are migrating from our legacy GitHub OAuth2 application to a modern [GitHub App](https://docs.github.com/en/apps/overview).
You can start using the new GitHub App today on Community by signing up for [beta access](#beta-access),
and we plan to start testing with our Business users soon.

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

## Beta access

The new GitHub App already offers the same functionality as our legacy OAuth2 application,
we are inviting users to try it out and provide feedback,
so we can smooth out any issues before the full rollout.

Some things you should know before participating in the beta:

- The beta is only available for [Read the Docs Community](https://app.readthedocs.org) users.
  We will be expanding the beta to [Read the Docs Business](https://app.readthedocs.com) users soon.
- The beta is available for existing and new users.
- Existing users will be prompted to authorize our new GitHub App.
  Your existing Read the Docs account will be linked to the new GitHub App,
  and you won’t lose access to your existing projects.
- You will be able to migrate your existing projects to the new GitHub App using the [migration page](https://app.readthedocs.org/accounts/migrate-to-github-app/).
- Your existing projects will continue working using the legacy OAuth2 application,
  you don't need to migrate them immediately.
- Once you have connected your account to the new GitHub App,
  you won't be able to link projects to repositories authorized for the legacy OAuth2 application.
  You'll need to install the GitHub App into the repository before connecting it to a project on Read the Docs.
- We recommend that you don't revoke access to the legacy OAuth2 application until the end of the beta period.

If you would like to participate in the beta, you can follow these steps:

- If you are an existing user with your GitHub account already linked to Read the Docs,
  you can start the migration process from the [migration page](https://readthedocs.org/accounts/migrate-to-github-app/).
- If you are a new user, you can sign up using the new GitHub App [from this page](https://readthedocs.org/accounts/githubapp/login/).
- If you are an existing user, but you don't have your GitHub account linked to Read the Docs,
  you can link your GitHub account to our new GitHub App [from this page](https://readthedocs.org/accounts/githubapp/login/?process=connect).

You can read more in [our documentation](https://docs.readthedocs.com/platform/stable/reference/git-integration.html#github-app).
If you run into issues or have questions, [contact us via support](https://docs.readthedocs.com/platform/stable/support.html).

## The future is looking bright

This is just the beginning.
For now, we’re focused on ensuring a seamless transition and providing feature parity with our legacy integration.
But looking ahead, the GitHub App will enable us to build new features that are only possible with a GitHub App,
and to better integrate with GitHub.
