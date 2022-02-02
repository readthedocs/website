Newsletter January 2022
#######################

:date: January 12, 2022
:tags: newsletter, python
:authors: Juan Luis
:summary: Company updates and new features from last month, current focus, and upcoming features in January.
:description: Company updates and new features from last month, current focus, and upcoming features in January.
:image: 
:image_credit: 


Read the Docs newsletter - January 2022
=======================================

Welcome to the latest edition of our monthly newsletter, where we
share the most relevant updates around Read the Docs,
offer a summary of new features we shipped
during the previous month,
and share what we'll be focusing on in the near future.

Company highlights
------------------

- We are now managing custom domains for our corporate users using Cloudflare SSL for SaaS,
  which will remove the manual work that was needed on our side
  and make the process of setting up a custom domain almost instantaneous.
  It also will allow us to offer a CDN much easier in the future.
- We improved our spam classification system, and started blocking the dashboard
  on spammy projects. We are happy to report that the traffic to spammy projects
  has already reduced significantly.

New features
------------

December and January have been slow months,
and we mainly worked on internal changes and documentation improvements.
Among the major user-facing changes:

- We changed the Google Analytics from a persistent 30 day cookie
  to `a session cookie that is deleted when the browser is
  closed <https://github.com/readthedocs/readthedocs.org/pull/8694>`_.
  This will result in less data collected from users.

Thanks to our external contributor `Çağatay Yiğit Şahin`_.

You can always see the latest changes to our platforms in our `Read the Docs
Changelog <readthedocs:changelog>`.

.. _Çağatay Yiğit Şahin: https://github.com/cagatay-y

Upcoming features
-----------------

- Ana_ will continue working on the new landing pages,
  polishing the copywriting along with `Juan Luis`_
  and translating the mockups to Pelican templates.
- Anthony_ will continue working on frontend scaffolding
  and finance bits.
- Eric_ will continue to focus on business and sales efforts,
  and performing code review.
- `Juan Luis`_ will work with Ana_ in the new landing pages,
  and with Manuel_ in a new process to migrate users from legacy
  or deprecated configurations.
- Manuel_ will wrap up the migration to Django 3,
  improve the queryability of the project configuration in our database,
  and refactor our task queue to improve its robustness. 
- Santos_ will add support for multiple ``.readthedocs.yaml`` files per repository.

Possible issues
---------------

The Python packaging ecosystem is evolving rapidly
to accomodate for modern standards that will make our life easier,
and in particular setuptools has been introducing some breaking changes in recent times.
We anticipated this sort of breakage for our users
so `we pinned the setuptools version in late
November <https://github.com/readthedocs/readthedocs.org/pull/8711>`_.
However, a small number of projects did not have this version cap active
because of a bug on our side
and experienced failing builds after a new setuptools release.
We quickly fixed the problem
and offered a range of possible solutions to affected projects.

----

Considering using Read the Docs for your next Sphinx or MkDocs project?
Check out `our documentation <https://docs.readthedocs.io/>`_ to get started!

.. _Ana: https://github.com/nienn
.. _Anthony: https://github.com/agjohnson
.. _Eric: https://github.com/ericholscher
.. _Juan Luis: https://github.com/astrojuanlu
.. _Manuel: https://github.com/humitos
.. _Santos: https://github.com/stsewd