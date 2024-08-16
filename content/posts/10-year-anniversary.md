title: 10 years of attempting to make open source sustainable
date: 2024-08-15
description: Reflecting on 10 years of trying to make open source sustainable
category: Meta
tags: meta, open-source, sustainability, anniversary
authors: Eric Holscher
status: published
image: /images/10-year.jpg
image_credit: Photo by <a href="https://unsplash.com/@adigold1?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Adi Goldstein</a> on <a href="https://unsplash.com/photos/selective-focus-photography-of-assorted-color-balloons-Hli3R6LKibo?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>

Read the Docs was started at a [48-hour open source sprint in 2010](https://www.ericholscher.com/blog/2010/aug/16/announcing-read-docs/), and grew to become a large part of the Python documentation ecosystem within a few years.
Based on that success and the stress that came with it, we [created a company](https://www.ericholscher.com/blog/2014/oct/24/announcing-read-the-docs-for-business/) to focus on sustainability in 2014.
We've been working on Read the Docs as a project for 14 years, and a company for 10 years.
This post will reflect on the last 10 years of trying to make open source sustainable.

## Our sustainability model

We tried a number of different ways to make a sustainable open source project, really a service, over the years.
The model that we've found that has worked for us currently is a version of the classic open source model used by Sentry, GitLab, and others:

* We offer a free service (Read the Docs Community) for open source projects, supported by a single non-tracking ad on the documentation.
* We offer a paid service (Read the Docs Business) for companies that need private repos and additional benefits that make sense for larger organizations.

We tried relying on donations and other optional support, but that didn't work at all, and left us struggling with [mental health issues](https://ericholscher.com/blog/2018/feb/7/the-post-i-never-published/) and burnout.
We tried a model where we focused on documentation consulting and services, but that mostly took time away from actually working on the core product that open source projects rely on.
We also [experimented with grant funding](https://blog.readthedocs.com/czi-grant-announcement/),
which was a much more aligned source of funding allowing work on the core product,
but is a one-time source of funding.

Our goal is to work on the core product each day,
and [our current model aligns the incentives](https://ericholscher.com/blog/2016/aug/31/funding-oss-marketing-money/) so that everyone who is using the product is supporting it in some way,
and we can focus on making it the best it can be for all our users.

## Lessons learned

A few of the most important lessons from the last 10 years:

* You don't get extra points for being bootstrapped. People will compare you to proprietary, venture-backed services that have raised many millions of dollars. **We compete by focusing on documentation, a niche too small for most venture-backed businesses**. Venture-backed companies have to keep adding unrelated features in order to grow into other areas, and we can focus on our core competency.
* Keeping trust in the community is the most important thing, because we're nothing without our users. It's a cliche, but trust is hard to earn and easy to lose. We continually think about how to balance sustainability with the values of our users, and have made many decisions over the years about having "enough". **We can't maximize profit and continue to keep the trust of our community.**
* **Contribution is easier for less complex parts of the code base.** We worked for a long time to get contributors to the core [readthedocs.org repo](https://github.com/readthedocs/readthedocs.org/), but the complexity of the application makes it really hard to contribute. We've had more success with contributions on our Sphinx theme, Sphinx extensions, and other small Python & JavaScript projects.
* **Being open source means capturing a small percentage of the value you create.** Back before we had a sustainable business model, I would get upset about the number of people telling me about how valuable it was for them hosting it themselves inside their company, while not contributing anything back. Now that we have a sustainable model and focused on having "enough" to keep the project going, I can see the benefits of the code being used in many places, even if we don't get direct contributions from those users. Though I do still wish they'd contribute back :)
* **You have to be okay doing more with less.** Similar to the above themes on focus and value capture, our team has to ruthlessly prioritize what we work on. This also sometimes means that our users are frustrated that we can't prioritize their issues, but that's a natural tension. We also can't take as many risks in what we work on, but continually refine our core offerings as much as possible.

## Gratitude

We are grateful to have a team of 4 folks working full-time on Read the Docs.
The support of the Python community, the Django community, and the broader open source community has been very important to keeping us going over the years.
We depend on the trust of the projects that use our platform, and we have a core value not to violate that trust.
We're also thankful to be mostly bootstrapped, outside of 6% equity we gave to our initial incubator, so that we don't have to follow the *enshittification* path of many venture-backed companies.

We are also grateful for the sponsored services for our Community site from many tech companies, most importantly [AWS](https://aws.amazon.com/) and [Cloudflare](https://www.cloudflare.com/).
This allows us to focus our funding on the team and core code base, rather than infrastructure costs.

## Next steps

Read the Docs started only supporting Sphinx, and now supports any documentation tool that generates HTML output.
We've also finished up a large "magic removal" effort that has removed our modification of the documentation build process,
reducing the confusion that users hit building locally versus on Read the Docs.

This leaves us with a much simpler system:

* Our build system [now supports any documentation tool](https://docs.readthedocs.io/en/stable/build-customization.html) and should work the same as other build environments.
* For built documentation we've added our [Addons system](https://docs.readthedocs.io/en/stable/addons.html) which providers features for documentation readers on top of any tool.

This new architecture allows us to support the documentation ecosystem as the tools evolve,
and focus on making a great experience for documentation authors and readers.
We're excited about everything that we've accomplished over the past 10 years,
and hope to have another 10 years of making open source sustainable with you.
