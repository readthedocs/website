:title: Read the Docs Newsletter - January 2024
:date: Jan 10, 2024
:tags: newsletter, python
:category: Newsletter
:author: Eric

Read the Docs newsletter - January 2024
========================================

News and updates
----------------

* We have shipped `new redirects <{filename}new-improvements-to-redirects>`_, making our redirects much more powerful and flexible.
* We have shipped an `updated approach to notifications <https://github.com/readthedocs/readthedocs.org/pull/10922>`_. Currently there isn't much UX difference, but as we move forward with this project we will be able to provide more context and control to users.
* We continue to work on improving Addons, our new approach to documentation integrations. New documentation and bug fixing continues to happen.
* We shipped version 2.0 of our `Read the Docs Sphinx Theme <https://sphinx-rtd-theme.readthedocs.io/en/stable/>`_, which adds support for new Sphinx releases and drops support for many old versions of Sphinx and Python.

You can always see the latest changes to our platforms in our `Read the Docs Changelog <https://docs.readthedocs.io/en/stable/changelog.html>`_.

Upcoming changes
----------------

* Addons will be made more configurable in our new beta dashboard, starting a trend of moving away from the old dashboard for new features.
* Our `beta dashboard <https://beta.readthedocs.org/>`_ continues to be tested in public beta, and new functionality for Addons configuration will only be available in that new interface.
* We continue to work on some business model changes enabled by the new redirects work, including allowing access to Forced Redirects for more users.

Want to follow along with our development progress? `View our full roadmap 📍️`_

.. _View our full roadmap 📍️: https://github.com/orgs/readthedocs/projects/156/views/1

Possible issues
---------------

* Users need to `update their webhooks <{filename}security-update-on-incoming-webhooks>`_ before **January 31, 2024** if they are configured without a secret. All users who need to take action should have received email and site notifications about this.
* We are discussing removing support for all VCS systems except Git, as our userbase is heavily biased towards Git users and it will simplify maintenance and development of features. We stopped developing features for Mercurial, Subversion, and Bazaar years ago, and we are considering removing support for them entirely. We will be reaching out to these users to get feedback on this change.

-------

Questions? Comments? Ideas for the next newsletter? `Contact us`_!

.. Keeping this here for now, in case we need to link to ourselves :)

.. _Contact us: mailto:hello@readthedocs.org
