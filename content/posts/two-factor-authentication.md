title: Two-factor authentication is here!
date: November 18, 2024
description: We're excited to announce that two-factor authentication is now available for all Read the Docs users.
category: Feature announcement
tags: authentication, security
authors: Santos Gallegos
status: published
image: /images/2fa.jpg
image_credit: Photo by <a href="https://unsplash.com/@christianw?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Christian Wiediger</a> on <a href="https://unsplash.com/photos/shallow-focus-photography-of-love-lock-6t8PMIfqNVg?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>

We're excited to announce that two-factor authentication (2FA) is now available for all Read the Docs users!

Two-factor authentication adds an extra layer of security to your account by requiring a 6-digit code in addition to your password when you log in.
This helps protect your account from unauthorized access, even if your password is compromised.
You can use an authenticator app like Google Authenticator or Authy to generate the codes.

You can enable two-factor authentication from our new dashboard at <https://app.readthedocs.org/accounts/2fa/> (or <https://app.readthedocs.com/accounts/2fa/> for Read the Docs for Business users),
or by following the steps from [our documentation](https://docs.readthedocs.io/en/stable/guides/management/2fa.html).

We'd like to give a special thanks to the [django-allauth](https://allauth.org/) project for providing the foundation for our authentication system,
and making it easy for us to add two-factor authentication to Read the Docs.
