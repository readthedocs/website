title: AI crawlers need to be more respectful
date: 2024-07-25
description: We talk a bit about the AI crawler abuse we are seeing at Read the Docs, and warn that this behavior is not sustainable.
category: Engineering
tags: ai, crawlers, abuse
authors: Eric Holscher
status: published
image: /images/headers/ai-crawlers.jpg
image_credit: Photo by <a href="https://unsplash.com/@iizanyar?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Zanyar Ibrahim</a> on <a href="https://unsplash.com/photos/a-couple-of-people-that-are-sitting-in-a-car-JaUnya0pDIc?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>

In the last few months, we have noticed an increase in abusive site crawling,
mainly from AI products and services. These products are recklessly crawling
many sites across the web, and we've already had to block several sources of abusive traffic.
It feels like a new AI gold rush,
and in their haste,
some of these crawlers are behaving in a way that harm the sites they depend on.

At Read the Docs,
we host documentation for many projects and are generally bot friendly,
but the behavior of AI crawlers is currently causing us problems.
We have noticed AI crawlers aggressively pulling content, seemingly without basic
checks against abuse.
Bots repeatedly download large files hundreds of times daily,
partially from bugs in their crawlers,
with traffic coming from many IP addresses without rate or bandwidth limiting.

AI crawlers are acting in a way that is not respectful to the sites they are crawling,
and that is going to cause a backlash against AI crawlers in general.
As a community-supported site without a large budget,
AI crawlers have cost us a significant amount of money in bandwidth charges,
and caused us to spend a large amount of time dealing with abuse.

## AI crawler abuse

Here are a few examples of the types of abuse we are seeing:

### 73 TB in May 2024 from one crawler

**One crawler downloaded 73 TB of zipped HTML files in May 2024, with almost 10 TB in a single day**. This cost us over $5,000 in bandwidth charges, and we had to block the crawler. We emailed this company, reporting a bug in their crawler, and we're working with them on reimbursing us for the costs.

![AI crawler abuse, May 2024](/images/posts/bandwidth-may-2024.png)

This was a bug in their crawler that was causing it to download the same files over and over again.
There was no bandwidth limiting in place,
or support for Etags and Last-Modified headers which would have allowed the crawler to only download files that had changed.
We have reported this issue to them,
and hopefully the issue will be fixed.

We do have a CDN for these files,
but this request was for an old URL that had an old redirect in place.
This redirect went to an old dashboard download URL,
where we don't have CDN caching in place for security reasons around serving other dynamic content.
We are planning to fix this redirect to point to the cached URL.

<details>
<summary>Example web requests</summary>

<pre>

-> curl -IL "https://media.readthedocs.org/htmlzip/chainer/v1.24.0/_modules/chainer/testing/_modules/chainer/_modules/cupy/indexing/_modules/chainer/initializers/normal.html"
HTTP/2 302
date: Thu, 25 Jul 2024 16:24:18 GMT
content-type: text/html
content-length: 138
location: https://buildmedia.readthedocs.org/media/htmlzip/chainer/v1.24.0/_modules/chainer/testing/_modules/chainer/_modules/cupy/indexing/_modules/chainer/initializers/normal.html
x-backend: web-i-0af0e99066a6e05c0
access-control-allow-origin: *
x-served: Nginx
cf-cache-status: DYNAMIC
set-cookie: __cf_bm=el2_BxBK.IVRe0frkBCKVt4ZEEoNdu7qgNMmw6f_jnk-1721924658-1.0.1.1-5472IJ7kYN2nvJqesVHDhFEEN37XkJl4VlVdkRnm4qGuJ937zQ3jt20m7FUO0uEwM3KZib1T.Cum74f5JYw.CA; path=/; expires=Thu, 25-Jul-24 16:54:18 GMT; domain=.readthedocs.org; HttpOnly; Secure; SameSite=None
set-cookie: _cfuvid=9fczwre8gaSAoQ.ZlxllMiRl4UYhu14Ylo4P2iCnXi0-1721924658187-0.0.1.1-604800000; path=/; domain=.readthedocs.org; HttpOnly; Secure; SameSite=None
server: cloudflare
cf-ray: 8a8d7fd81d060943-SEA

HTTP/2 302
date: Thu, 25 Jul 2024 16:24:18 GMT
content-type: text/html
content-length: 138
location: https://readthedocs.org/projects/chainer/downloads/htmlzip/v1.24.0/
x-backend: web-i-092bc168f09ac4a16
cf-cache-status: HIT
age: 537
expires: Thu, 25 Jul 2024 20:24:18 GMT
cache-control: public, max-age=14400
set-cookie: __cf_bm=ixDGVanQai1fTO4Lcd_B6XcO1WvqzDOTNCek7E0ASfk-1721924658-1.0.1.1-Rf4yzlrlYxthDBPh6QZdnWQZWyY0LcA9bUyvCO4PT5V7tUauYKpuJaFO3z2x1dbEiVFOAdNrLfl8otSI9SafKA; path=/; expires=Thu, 25-Jul-24 16:54:18 GMT; domain=.readthedocs.org; HttpOnly; Secure; SameSite=None
set-cookie: _cfuvid=zkcVPgO0M5MQp1TkcMb6e_UTjkYN98JwH5IVh_2X4wg-1721924658346-0.0.1.1-604800000; path=/; domain=.readthedocs.org; HttpOnly; Secure; SameSite=None
server: cloudflare
cf-ray: 8a8d7fda9837c87c-SEA

HTTP/2 200
date: Thu, 25 Jul 2024 16:24:18 GMT
content-type: application/zip
content-length: 5888860
content-disposition: filename=docs-chainer-org-en-v1.24.0.zip
x-amz-id-2: +DjI2tMbUou9XNK5+G53Gyhah4lhBwAgnRiqBh9vsR3KzqxajSTC4B+eIQBY+pi+ZR6McRQngSI=
x-amz-request-id: Z502YT87WEMM3ZY9
last-modified: Thu, 11 Feb 2021 09:12:59 GMT
etag: "c8cb418f5a8ff2e376fc5f7b7564e445"
x-amz-meta-mtime: 1495712654.422637991
accept-ranges: bytes
x-served: Nginx-Proxito-Sendfile
x-backend: web-i-01ce033e08bb601ef
referrer-policy: strict-origin-when-cross-origin
x-frame-options: DENY
x-content-type-options: nosniff
content-security-policy: object-src 'none'; frame-ancestors 'none'
cf-cache-status: DYNAMIC
set-cookie: __cf_bm=qGTC_35C03_QI6rw.JyPZhFHpo2QxUy7DMMFJpjz2_U-1721924658-1.0.1.1-4iS9rZHPJmt_I5rQX4NuKr_pHQmCw0jvCzAIYX.CeUtGZh6hIZIjBWhlPoxEMjhsRcvbuTSpgSa9oltlvYDtEA; path=/; expires=Thu, 25-Jul-24 16:54:18 GMT; domain=.readthedocs.org; HttpOnly; Secure; SameSite=None
set-cookie: _cfuvid=buQRaZWXJEn51CIpRsDW3E52DyDqEHd_sgY5PxOLfyE-1721924658779-0.0.1.1-604800000; path=/; domain=.readthedocs.org; HttpOnly; Secure; SameSite=None
server: cloudflare
cf-ray: 8a8d7fdbbf787565-SEA

</pre>

As you can see, this file was last modified in 2021.
However, crawlers didn't have this basic check and instead repeatedly downloaded files like these hundreds of times each.

</details>

### 10 TB in June 2024 from another

In June 2024, **someone used Facebook's content downloader to download 10 TB** of data, mostly Zipped HTML and PDF files. We tried to email Facebook about it with the [contact information listed in the bot's user agent](http://www.facebook.com/externalhit_uatext.php), but the email bounced.

![AI Crawler abuse, June 2024](/images/posts/bandwidth-june-2024.png)

We think this was someone using Facebook's content downloader to download all of our files, but we aren't really sure.
It could also be Meta crawling sites with their latest AI project,
but the user agent is not clear.

## Actions taken

We have IP-based rate limiting in place for many of our endpoints,
however these crawlers are coming from a large number of IP addresses,
so our rate limiting is not effective.

These crawlers are using real user agents that identify them,
which is a good thing.
However, we can't simply rate limit all user agents to our platform because many real users use the same browsers with the same user agent.
(CDN providers: if you're reading this, there's an opportunity here!)

We have taken a few actions to try to mitigate this abuse:

* We have temporarily blocked all traffic from bots [Cloudflare identifies as AI Crawlers](https://radar.cloudflare.com/traffic/verified-bots), while we figure out how to deal with this.
* We have started monitoring our bandwidth usage more closely and are working on more aggressive rate limiting rules.
* We will reconfigured our CDN to better cache these files, reducing the load on our origin servers.

## Outcomes

Given that our Community site is only for hosting open source projects,
AWS and Cloudflare do give us sponsored plans,
but we only have a limited number of credits each year.
The additional bandwidth costs AI crawlers are currently causing will likely mean we will run out of AWS credits early.

**By blocking these crawlers,
bandwidth for our downloaded files has decreased by 75% (~800GB/day to ~200GB/day).**
If all this traffic hit our origin servers,
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

As a major host of open source documentation,
we'd love to work with these companies on a deal to crawl our site respectfully.
We could build an integration that would alert them to content changes,
and download the files that have changed.
However, none of these companies have reached out to us,
except in response to abuse reports.

If these companies wish to be good actors in the space,
they need to start acting like it,
instead of burning bridges with folks in the community.
