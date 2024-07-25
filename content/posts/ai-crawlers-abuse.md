title: AI Crawlers need to be more respectful
date: 2024-07-25
category: Engineering
tags: ai, crawlers, abuse
authors: Eric Holscher
status: published
image:
image_credit:

Many AI companies are starting to crawl many pages on the web,
trying to extract as much information as fast as possible.
It feels like a new gold rush,
and in their haste,
some of these crawlers are being so badly they are causing harm to the sites they are crawling.

At Read the Docs,
we host documentation for many projects and are generally bot friendly,
but the behavior of AI crawlers is currently causing us problems.
We host HTML zip files (``htmlzip``) of documentation for many projects,
and these can be somewhat large.
The AI Crawlers are downloading these files repeatedly,
and without any rate or bandwidth limiting.

AI crawlers are acting in a way that is not respectful to the sites they are crawling,
and that is going to cause a backlash against AI crawlers in general.
As a community-supported site without a large budget,
AI crawlers have cost us a significant amount of money in bandwidth charges,
and caused us to spend a large amount of time dealing with abuse.

## AI crawler abuse

I want to start off with a few examples of the types of abuse we are seeing:

### 73 TB in March 2024 from one crawler

**One crawler downloaded 73 TB of htmlzip files in May 2024, with almost 10 TB in a single day**. This cost us over $5,000 in bandwidth charges, and we had to block the crawler. We emailed this company, reporting a bug in their crawler, and we're working on them reimbursing us for the costs.

![AI Crawler abuse, May 2024](/images/posts/bandwidth-may-2024.png)

This was a bug in their crawler that was causing it to download the same files over and over again.
There was no bandwidth limiting in place,
or support for Etags and Last-Modified headers which would have allowed the crawler to only download files that had changed.
This is basic functionality that all web crawlers should support,
and not having it is causing harm to the sites they are crawling.

### 10 TB in June 2024 from another

In June 2024, **someone used Facebook's content downloader to download 10 TB** of data, mostly htmlzip and PDF files. When we tried to email Facebook about it with the [contact information listed in the bot's user agent](http://www.facebook.com/externalhit_uatext.php), but the email bounced.

![AI Crawler abuse, June 2024](/images/posts/bandwidth-june-2024.png)

We think this was someone using Facebook's content downloader to download all of our files, but we aren't really sure.
It would also be Meta crawling the site for their latest AI project,
but the user agent is not clear.

## Actions taken

We have IP-based rate limiting in place for many of our endpoints,
however these crawlers are coming from a large number of IP addresses,
so our rate limiting is not effective.

These crawlers are using real user agents,
which is a good thing and allows us to identify them,
but it's very difficult for us to block on user agent because many real users use the same browsers with the same user agent.

We have taken a few actions to try to mitigate this abuse:

* We have rate limited all traffic from bots [Cloudflare identifies as AI Crawlers](https://radar.cloudflare.com/traffic/verified-bots).
* We have started monitoring our bandwidth usage more closely and are working on more aggressive rate limiting.

## Outcomes

By blocking these crawlers,
bandwidth for our downloaded files has decreased by 75% (~800GB/day to ~200GB/day).
This is saving us around $500/day in bandwidth costs alone,
along with large amount of server costs.

## Advice
