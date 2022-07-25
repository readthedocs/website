Read the Docs newsletter - March 2022
######################################

:date: Mar 10, 2022
:category: News
:tags: newsletter, python, homepage
:authors: Eric Holscher
:description: Company updates and new features from the last month, current focus, and upcoming features.
:status: draft
:image: 
:image_credit:

It's been pretty quiet on the company front in February,
with nothing much to report.
**We're actively working on our latest job description,
which will be a product-focused Python development position.**
If you're interested, please `let us know`_.

.. _let us know: mailto:hello@readthedocs.org?subject=Job%20Posting

New features
------------

In February we continued to work on refactors and internal changes.
Among the major user-facing changes:

- **We now have the CDN on Read the Docs for Business in beta**, with a couple accounts testing it. If you're interested, please `contact us`_.
- You can now `cancel builds <https://github.com/readthedocs/readthedocs.org/pull/8850>`_ via a button in the dashboard. This will save resources, and allow you to ensure that you don't hit concurrency limits if you trigger a few builds at once.
- Projects that are imported via the API are now required to have a VCS repository linked to them, if your organization has `VCS SSO <https://docs.readthedocs.io/en/latest/commercial/single-sign-on.html#sso-with-vcs-provider-github-bitbucket-or-gitlab>`_ turned on, so that users will be able to access it.

You can always see the latest changes to our platforms in our `Read the Docs
Changelog <https://docs.readthedocs.io/en/stable/changelog.html>_`.

Upcoming features
-----------------

- **We're working on pre and post-build steps**, and hope to have those released in the next week or two. This is a long-requested feature that we're really excited to be able to share with folks.
- We're getting much closer on our landing page update. They are being served from a super secret URL, and will be made our official front page before long...
- We continue to work on tracking 404 pages in our project analytics,
  so that projects can easily fix up missing or outdated page links.
- We have `made process on support <https://github.com/readthedocs/readthedocs.org/issues/8811>`_ for multiple projects in a single git repo.

Possible issues
---------------

* We are still watching Sphinx upgrades for possible issues they might cause around the ecosystem.
* We are also tracking the upcoming `/github-git-protocol-deprecation <https://blog.readthedocs.com/github-git-protocol-deprecation/>_` to ensure that it will have minimal impact for our users.

----

Considering using Read the Docs for your next Sphinx or MkDocs project?
Check out `our documentation <https://docs.readthedocs.io/>`_ to get started!

.. Keeping this here for now, in case we need to link to ourselves :)

.. _contact us: mailto:hello@readthedocs.org
.. _Ana: https://github.com/nienn
.. _Anthony: https://github.com/agjohnson
.. _Eric: https://github.com/ericholscher
.. _Juan Luis: https://github.com/astrojuanlu
.. _Manuel: https://github.com/humitos
.. _Santos: https://github.com/stsewd
