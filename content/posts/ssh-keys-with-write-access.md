title: GitHub deploy keys with write access to repositories will be disabled
date: July 1, 2025
description: SSH keys linked to GitHub deploy keys with write access will be disabled. We discuss what is changing, how to reconfigure your deploy keys, and impact to your projects.
category: Security
tags: security, github
authors: Santos Gallegos
status: published
image: /images/ssh-keys-with-write-access.png
image_credit: Photo by <a href="https://unsplash.com/@scottrodgerson?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Scott Rodgerson</a> on <a href="https://unsplash.com/photos/black-and-yellow-striped-line-BwMcYuHI9OI?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>

Starting on July 31, SSH keys linked to deploy keys with write permissions to a repository will be disabled.
If your project is still using one after this date, your project's builds will fail.

Deploy keys are used by Read the Docs to clone private repositories and build your documentation.
These keys are automatically created when you create a project from a private repository on Read the Docs Business.

In the past, we have created deploy keys with write permission to repositories before other options were available.
However, Read the Docs does not require write access to build your documentation.
We are migrating all keys to read-only as a security measure,
and plan to migrate to a [GitHub App](https://about.readthedocs.com/blog/2025/06/announcing-our-github-app-beta/) in the near future which doesn't require deploy keys at all.

While the private key itself is never exposed,
our team discovered that under certain conditions, a malicious user may be able to make use of the SSH agent to gain write access to a repository.
**We have seen no evidence that this was exploited in the wild.**

Once we discovered the issue, we followed these steps:

- Fixed the bug to ensure new deploy keys are created with read-only access
- Migrated existing deploy keys to read-only where possible
- Contacted affected users with instructions to ensure their deploy keys are read-only
- Implemented safeguards to prevent exploitation of any remaining projects with deploy keys with write access

## Is my project affected?

If you added a private GitHub repository to Read the Docs Business before April 23, 2025,
a deploy key with write access may have been created in your repository.
We have contacted all affected users via email.

## Is my project safe?

Yes. We have resolved the issue, ensuring new deploy keys are read-only,
and implemented safeguards to prevent exploitation of any remaining projects with deploy keys with write access.
**We have seen no evidence that this was exploited in the wild.**

## How could this issue have been exploited?

To abuse this vulnerability, a malicious user would have needed:

1. The ability to create a branch or open a pull request on the affected repository.
2. The ability to trigger a build on the associated Read the Docs project.

Under these conditions, the user could potentially leverage the SSH agent used during the cloning process to gain unintended write access to the repository.

## Are projects from Read the Docs Community affected?

No.
This issue only affected projects on Read the Docs Business (<https://app.readthedocs.com>).
Projects on Read the Docs Community (<https://app.readthedocs.org>) are public and do not require deploy keys.

## What action should I take?

We recommend verifying that your deploy keys are read-only.
If you received an email or notification from us, please follow these steps:

**How to verify that a deploy key is read-only:**

1. Go to your GitHub repository.
2. Click on "Settings" and then on "Deploy keys".
3. Look for keys titled "support@readthedocs.com (&lt;project-slug&gt;)".
4. If the key is marked as "Read-only", no action is needed.
5. If the key is marked as "Read/write", delete it and re-add it as read-only (see below).

**How to re-add the key as read-only:**

1. Go to your Read the Docs project.
2. Click on "Settings" and then on "SSH keys".
3. Click on the key, and copy the contents of the public key.
4. Locate the corresponding key in GitHub following the steps above, and delete it.
5. Add the key again by clicking "Add deploy key", and paste the public key you copied from Read the Docs.
6. Use a title like "support@readthedocs.com (&lt;project-slug&gt;)".
7. Ensure the "Allow write access" checkbox is unchecked.
8. Click "Add key".

Note: if your project is public, you can remove the deploy key entirely,
as Read the Docs can access the repository without a deploy key.

## What’s next

We are working on migrating our GitHub OAuth app to a [GitHub App](https://docs.github.com/en/apps/overview),
which will allow us to clone private repositories using scoped temporary tokens instead of deploy keys.

## Learn more

You can find more details in our [security advisory](https://github.com/readthedocs/readthedocs.org/security/advisories/GHSA-jqm9-f79c-8wx6).
We apologize for any inconvenience caused and remain committed to keep your data safe and secure,
and being transparent about any issues that may arise.
If you have questions or need help, contact us via our [support channels](https://docs.readthedocs.com/platform/stable/support.html).
