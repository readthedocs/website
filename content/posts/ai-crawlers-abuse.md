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

We do have a CDN, but this issue caused the requests to hit our origin servers directly.
This was caused by the scraped trying to load the actual HTML files inside the htmlzip,
which was causing the bot to get redirected to the same file over and over again.

<details open>
<summary>Example web requests</summary>

<code>
-> curl -IL "https://media.readthedocs.org/htmlzip/chainer/v1.24.0/_modules/chainer/testing/_modules/chainer/_modules/cupy/indexing/_modules/chainer/initializers/normal.html"
HTTP/2 302
date: Fri, 07 Jun 2024 17:28:27 GMT
content-type: text/html
content-length: 138
location: https://buildmedia.readthedocs.org/media/htmlzip/chainer/v1.24.0/_modules/chainer/testing/_modules/chainer/_modules/cupy/indexing/_modules/chainer/initializers/normal.html
x-backend: web-i-0674d3314b7db45b0
access-control-allow-origin: *
x-served: Nginx
cf-cache-status: DYNAMIC
set-cookie: __cf_bm=H1nAF7FHjAxlMmhU3RLY88iJpWnIqc4VjDDldtRL.LA-1717781307-1.0.1.1-av1VTQgFX.8A.gsKIoCOHtLtn0qIpF16PVDnAMfJy_E3R_ie2NHVYd5jIc.gOkrlsM5fyEypz8_LLEvW.26iZA; path=/; expires=Fri, 07-Jun-24 17:58:27 GMT; domain=.readthedocs.org; HttpOnly; Secure; SameSite=None
server: cloudflare
cf-ray: 89025bd2af9a5eda-PDX

HTTP/2 302
date: Fri, 07 Jun 2024 17:28:27 GMT
content-type: text/html
content-length: 138
location: https://readthedocs.org/projects/chainer/downloads/htmlzip/v1.24.0/
x-backend: web-i-02c6d21983ca2621b
cf-cache-status: MISS
expires: Fri, 07 Jun 2024 21:28:27 GMT
cache-control: public, max-age=14400
set-cookie: __cf_bm=X9a2LFI8Gccv.EJMU0QukNXkfwaVewTK5dXFpY.gu_c-1717781307-1.0.1.1-kJgZUv1hjG.Ygv6mxGViUR_VbsGBGnYbV5XFGxnDZ5vLM2YBKd_raTOyNYoWP1w__NV2ffaHwrWRF.fGYEY5mw; path=/; expires=Fri, 07-Jun-24 17:58:27 GMT; domain=.readthedocs.org; HttpOnly; Secure; SameSite=None
server: cloudflare
cf-ray: 89025bd4ea93efd2-PDX

HTTP/2 200
date: Fri, 07 Jun 2024 17:28:28 GMT
content-type: application/zip
content-length: 5888860
content-disposition: filename=docs-chainer-org-en-v1.24.0.zip
x-amz-id-2: r6ae1JjSx/d1B78TGY/YF/lkf9vCSE+u850S2fE5WU1qMro1h7hL0SgVHMhw4jf32Q8VnQP8fLU=
x-amz-request-id: BGX96S6R9JAWHN96
last-modified: Thu, 11 Feb 2021 09:12:59 GMT
etag: "c8cb418f5a8ff2e376fc5f7b7564e445"
x-amz-meta-mtime: 1495712654.422637991
accept-ranges: bytes
x-served: Nginx-Proxito-Sendfile
x-backend: web-i-0674d3314b7db45b0
referrer-policy: strict-origin-when-cross-origin
x-frame-options: DENY
x-content-type-options: nosniff
content-security-policy: block-all-mixed-content; object-src 'none'; frame-ancestors 'none'
cf-cache-status: DYNAMIC
set-cookie: __cf_bm=nPfIjPuALi5x06S0mwKqhWniX4e7_Yh4dJo4fh_57nQ-1717781308-1.0.1.1-NG9BFnb0IWRcNzUQkuvWF4xT_8uGysYQPGkZMWzpJ3AFsgKF72FmQ0zT9kqmhCT1HHvoPVSxher.RfEzBw2NOg; path=/; expires=Fri, 07-Jun-24 17:58:28 GMT; domain=.readthedocs.org; HttpOnly; Secure; SameSite=None
server: cloudflare
cf-ray: 89025bd76e545ee0-PDX

</code>

As you can see, this file was last modified in 2021,
but it was downloaded hundreds of times.

</details>

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

* We have temporarily blocked all traffic from bots [Cloudflare identifies as AI Crawlers](https://radar.cloudflare.com/traffic/verified-bots), while we figure out how to deal with this.
* We have reconfigured our CDN to better cache these files, so that our origin servers are not hit as hard.
* We have started monitoring our bandwidth usage more closely and are working on more aggressive rate limiting rules.

## Outcomes

Given that our Community site is only for hosting open source projects,
AWS and Cloudflare do give us sponsored plans,
but we only have a limited number of credits each year.
These bandwidth costs mean that we will run out of AWS credits.

By blocking these crawlers,
bandwidth for our downloaded files has decreased by 75% (~800GB/day to ~200GB/day).
If all this traffic hit our origins servers,
it would cost around $50/day, or $1,500/month,
along with the increased load on our servers.

Normal traffic gets cached by our CDN,
and doesn't cost us anything for bandwidth.
But because many of these files are not downloaded often,
as they are scraped the cache is expired and the requests hit our origin servers directly,
causing substantial bandwidth charges.

## Next steps

We are asking all AI companies to be more respectful of the sites they are crawling.
They are risking many sites blocking them for abuse,
irrespective of the other copyright and moral issues that are at play in the industry.

As a large host of open source documentation,
we'd also love to work with these companies on deal to be able to crawl our site in a respectful way.
We could build an integration that would alert them to content changes,
and download the files that have changed.
However, none of these companies have reached out to us in any way,
expect in response to abuse reports.

If these companies wish to be good actors in the space,
they need to start acting like it,
instead of burning bridges with folks in the community.
