Read the Docs 2021 Stats
########################

:date: Mar 21, 2022
:category: Updates
:tags: stats, year-in-review, homepage
:authors: Eric Holscher, David Fischer
:description: 2021 continued in the realm of being a tough year. That said, Read the Docs had a lot of good things happen this year.
:status: published 
:image: 
:image_credit:

2021 continued in the realm of being a tough year.
That said,
Read the Docs had a lot of good things happen this year.

We did a majority of the work on our `CZI grant <https://blog.readthedocs.com/czi-grant-announcement/>`_,
grew our team from 5 to 8,
and continued to grow our `EthicalAds network`_ & `Read the Docs for Business`_.
It's been another year of steady growth,
and we hope to continue that into 2022.

As we have for the past 8 years (!!),
we are proud to share some of our stats from 2021.

.. _EthicalAds network: https://www.ethicalads.io/

.. note::

	You can always see our stats for the last `30 days`_.

	Our posts from 2013_, 2014_, 2015_, 2016_, 2017_, 2018_, 2019_, and 2020_ are also available.

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


Page views
----------

Our stats:

* 700 million page views (from 580 million)
* 196 million unique visitors (from 156 million)

.. From Google Analytics

These numbers are not completely accurate. Since we `implemented Do Not Track support <https://blog.readthedocs.com/do-not-track/>`_ our analytics pageview figures understate our actual traffic.
We estimate that around 6% of users are not counted here.
We also don't count all the users who block Google Analytics with a browser extension.

Also of note, we host a `major documentation site <http://faq-login-unico.servicos.gov.br/en/latest/>`_ for the Brazilian government,
which is our most viewed site by a wide margin,
but this site is was also included in last year's stats.

Site stats
----------

The stats, in total numbers:

* 45,849 new projects (from 40,000)
* 56,760 new users (from 30,000)
* 2,831,885 builds (from 2,480,063)

We have been battling spam quite heavily again this year,
so these numbers are a bit skewed.
We have worked to improve our spam detection though,
and we have been responding to spam more consistently this last year.

.. Project.objects.filter(pub_date__year=2021).count()
.. User.objects.filter(date_joined__year=2021).count()
.. Build.objects.filter(date__year=2021).count()

Community
---------

This year, we had:

* 14 `people`_ who committed code to the main repository (from 14)
* 2126 `commits`_ (from 3636)
* 376 `issues`_ - 88 open, 288 closed (from 532)

We have been working to move user support issues to email from GitHub (keeping code issues in GitHub),
which likely addresses the reduction in ticket numbers.
We are also working to expand our ecosystem of projects,
so the commits to the main repository are down.
We expect across our theme, extensions, and other projects commits are up this year,
and we're appreciative of all the work people contribute.


.. git rev-list --count --all --after="2019-12-31" --before="2021-01-01"

.. _people: https://github.com/rtfd/readthedocs.org/graphs/contributors?from=2020-01-01&to=2020-12-31&type=c
.. _commits: https://github.com/rtfd/readthedocs.org/commits/master
.. _issues: https://github.com/readthedocs/readthedocs.org/issues?q=is%3Aissue+created%3A2020-01-01..2020-12-31+

Funding
-------

* $380,000 advertising (from $234,000)
* $35,000 Gold users and donations (from $30,000)
* 8 paid staff (from 5)
* We have additional revenue from our `Read the Docs for Business`_, but aren't including that in our community funding overview

We are excited to continue to grow our advertising business,
and expand it to the larger community.
We are also seeing continued growth of our paid product, `Read the Docs for Business`_,
which is allowing us to fund further growth of the Read the Docs codebase for all our users.

.. _EthicalAds: https://www.ethicalads.io/
.. _Read the Docs for Business: https://readthedocs.com/


Conclusion
----------

We continue to work to improve Read the Docs for our users.
We're excited for the growth we expect in 2022,
and hope that you'll join us for the next chapter of our story.

The Read the Docs Team
