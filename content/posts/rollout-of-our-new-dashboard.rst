:title: Rollout of our new dashboard
:date: 2024-11-12
:description: Our new dashboard will begin rolling out to users.
              Learn what to expect and how it will affect you and your project.
:category: Changelog
:tags: dashboard
:authors: Anthony Johnson
:status: published
:image: /images/new-dashboard.png
:image_credit: Reviewing build output for a project in our new dashboard

For the last year, you may have seen notifications and hints asking you to try
out our new dashboard. This new dashboard has been a long term project to
completely replace our original user interface with one that is more
consistent and allows us to more easily build and maintain complex features.

During the next few months, we will begin the transition to our new dashboard
and will move away from our current, *but soon to be legacy*, dashboard.

If you are not yet using our new dashboard, here is what you need to know:

The new dashboard will start to become the default dashboard
    After this change, users logging in from our website will be logging into
    our new dashboard. *Users will still be able to switch back to the legacy
    dashboard if they need to*.

    - On `Read the Docs Community`_ this change will go into effect on **Nov 12th**
    - On `Read the Docs Business`_ this change will go into effect on **Dec 10th**
     
    To log in to the new dashboard:

    - Users of `Read the Docs Community`_ can log in at https://app.readthedocs.org/account/login
    - Users of `Read the Docs Business`_ can log in at https://app.readthedocs.com/account/login

The legacy dashboard will be available until Mar 11th, 2025
    Our legacy dashboard will remain available while users are transitioning to
    our new dashboard. During this period, our legacy dashboard will no longer
    be receiving updates or new features, but it will remain active. Our legacy
    dashboard will only be available for this limited period, after which it
    will be shut down for all users.

    To log in to the legacy dashboard:

    - Users of `Read the Docs Community`_ can log in at https://readthedocs.org/account/login
    - Users of `Read the Docs Business`_ can log in at https://readthedocs.com/account/login


How is the new dashboard different?
-----------------------------------

You should find that the new dashboard is more consistent and that navigation
around the dashboard is easier overall. New features were added for sorting and
filtering, build output is easier to browser and share, and project and version
creation is more intuitive.

The new dashboard contains many other updates and new features as well. In the
coming weeks we will be highlighting in more detail what new features were
added, interfaces that have been updated, and some of the technical changes
introduced.

Documentation page changes
~~~~~~~~~~~~~~~~~~~~~~~~~~

Rollout of our new dashboard will also be apparent on hosted documentation.
There are several pages in hosted documentation where our own dashboard is
visible to readers:

Documentation error pages
    We display an error page to readers when we encounter a problem with their
    request, like when a requested file is missing (HTTP 404 error).

    We do not show our error page when a custom 404 error page is provided by a
    project.

Authentication forms
    This includes documentation authentication pages, such as password and
    GitHub authentication, and documentation sharing pages, such as sharing
    password entry.

On **Dec 10th**, projects hosted on `Read the Docs Business`_ will
use our new dashboard for these pages in their hosted documentation.

*There will be no changes to user generated documentation otherwise.*

If you would like to update your project to use these pages before then,
`contact us`_.

.. _`Read the Docs Community`: https://readthedocs.org
.. _`Read the Docs Business`: https://readthedocs.com
.. _`contact us`: https://app.readthedocs.com/support
