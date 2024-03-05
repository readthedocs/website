Read the Docs 2023 Stats
========================

:date: Mar 6, 2024
:category: Updates
:tags: stats, year-in-review, homepage
:authors: Eric Holscher
:image: /images/stats-2023.jpg
:image_credit: Photo by <a href="https://unsplash.com/@mokngr?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Moritz Knöringer</a> on <a href="https://unsplash.com/photos/a-black-and-white-logo-rrw0MtEqQoU?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>

2023 was a steady year for Read the Docs.
We continue to see growth in our user base,
but our overall revenue has been relatively flat.
Overall things are going well,
and we're excited to continue providing a world-class documentation platform and ethical ad network for our community.

.. note::

	You can always see our stats for the last `30 days`_.

	Our posts from 2013_, 2014_, 2015_, 2016_, 2017_, 2018_, 2019_, 2020_, 2023_ are also available.

.. _Read the Docs: https://readthedocs.org/
.. _30 days: http://www.seethestats.com/site/readthedocs.org
.. _2013: https://blog.readthedocs.com/read-the-docs-2013-stats/
.. _2014: https://blog.readthedocs.com/read-the-docs-2014-stats/
.. _2015: https://blog.readthedocs.com/read-the-docs-2015-stats/
.. _2016: https://blog.readthedocs.com/read-the-docs-2016-stats/
.. _2017: https://blog.readthedocs.com/read-the-docs-2017-stats/
.. _2018: https://blog.readthedocs.com/read-the-docs-2018-stats/
.. _2019: https://blog.readthedocs.com/read-the-docs-2019-stats/
.. _2020: https://blog.readthedocs.com/read-the-docs-2020-stats/
.. _2023: https://blog.readthedocs.com/read-the-docs-2023-stats/


Page views
----------

Unfortunately we don't have page view stats for 2023,
since we decided not to migrate to Google Analytics 4.

We are working to improve our stats tracking with Plausible,
but haven't fully expanded it to all our doc serving due to cost.

Site stats
----------

The stats, in total numbers:

* 198,645 new projects
* 73,988 new users
* 3,793,075 builds

We continue to have a steady stream of new projects and users,
however spam and abuse continue to be a problem.
Overall the best metric for real users is the number of builds,
since most builds are from real users.

.. Project.objects.filter(pub_date__year=2023).count()
.. User.objects.filter(date_joined__year=2023).count()
.. Build.objects.filter(date__year=2023).count()

Community
---------

This year, we had:

* 7 `people`_ who committed code to the main repository
* 2,543 `commits`_
* 395 `issues`_ - 78 open, 317 closed

Our overall support workload feels pretty steady,
but unfortunately we haven't seen the growth in our community that we would like.
We expanded the number of repos we have,
so it's hard to get a full measure of these numbers.

Projects like our theme and Addons see more contribution,
since they are generally easier to contribute to.

..  git rev-list --count --all --after="2022-12-31" --before="2024-01-01"

.. _people: https://github.com/readthedocs/readthedocs.org/graphs/contributors?from=2023-01-01&to=2023-12-31&type=c
.. _commits: https://github.com/rtfd/readthedocs.org/commits/main
.. _issues: https://github.com/readthedocs/readthedocs.org/issues?q=is%3Aissue+created%3A2022-01-01..2022-12-31+

Funding
-------

* $199,500 from advertising
* $46,805 from Gold users
* 7 paid staff (5 full-time)

Overall our community site continues to be sustainable,
and we're excited to be able to work on open source with a small team everyday.

We have additional revenue from our `Read the Docs for Business`_ & EthicalAds_.
Both of these continue to be great sources of revenue for us,
and we're excited to continue proving the concept of ethical advertising.

.. _EthicalAds: https://www.ethicalads.io/
.. _Read the Docs for Business: https://about.readthedocs.com/

.. The advertising revenue is ad revenue for RTD itself. Gotten from the Read the Docs publisher on EthicalAds.

Conclusion
----------

We're glad to continue to be sustainable given the larger issues hitting many people in the software industry.
We aren't seeing the growth we have historically,
but keeping things steady is a good place to be.
