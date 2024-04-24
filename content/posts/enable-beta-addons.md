title: Empower your documentation with addons
date: 2024-04-24
description: Read the Docs Addons let documentation authors add features to their documentation such as analytics, version feedback, and search as you type to documentation in a modular way where authors have control.
category: Feature announcement
tags: addons, hosting
authors: Manuel Kaufmann
status: published
image: /images/enable-beta-addons.jpg
image_credit: Photo by <a href="https://unsplash.com/@impatrickt?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Patrick Tomasso</a> on <a href="https://unsplash.com/photos/open-book-lot-Oaqk7qqNh_c?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>


In the last year, we have been focusing ourselves on providing a better experience for authors and readers of the documentation.
Today, we are thrilled to introduce our latest feature,
designed around user feedback to build a better user experience: **Read the Docs Addons**.

Read the Docs Addons helps authors to keep their documentation updated by focusing on the most relevant pages,
while simplifying the review process --and also helps readers to navigate the documentation in a simple way,
always knowing the versions they are reading avoiding confusions.

Continue reading to explore the full list of addons and how to enable them in your project.

## Full list of addons

<!--
TODO describe each of the addons into its own section,
similar to what we have in https://github.com/readthedocs/addons/blob/main/README.md

Consider also https://about.readthedocs.com/docs-as-code/
-->

### Analytics

![Analytics Addons](/images/addons-analytics.png)

Analytics allows authors to explore your documentation traffic to understand what are the pages readers read the most.
With this data, your team is able to **prioritize the work on pages with high traffic** over others with less.
Besides, you can find out what are the terms your users search the most and
write documentation pages that include those terms so they can easily find them.

### DocDiff

![Docdiff Addons](/images/addons-docdiff.gif)

DocDiff shows changes made on the rendered versions by **visually highlighting the differences between
the current pull request and the latest version of the project's documentation**.
This addons allows reviewers to quickly find what has changed on this pull request
but also find style/rendering issues before accepting and merging the pull request.

### Pull request notification

![Pull request notification](/images/addons-pull-request-notification.png)

This notification warns users letting them know the documentation page they are reading
comes from a pull request to clearly distinguish this version from the official one.


### Flyout

![Flyout Addons](/images/addons-flyout.png)

The _flyout_ is the small floating Read the Docs section where all the documentation versions and translations are listed.
This allows readers to **find the exact version they are looking for** and also read the documention in their own language if it's available.
Besides, it contains useful links to go to the project's home, builds page and offline formats such as PDFs and ebooks.

### Non-stable notification

![Non-stable notification](/images/addons-non-stable-notification.png)

A notification on all _non-stable_ versions is shown to clearly communicate to readers
they may be reading an outdated version of the documentation.
This helps readers to avoid confusion and quickly jump into the _stable_ version of the documentation.
Besides, it **reduces support requests from old version of your product**.


### Latest version notification

![Latest notification](/images/addons-latest-notification.png)

A notification shown on the _latest_ version tells readers
they are reading the _latest/development_ version of the documentation that may include features not yet deployed.
This will help your readers to avoid confusion on the version they are using and the one they are reading,
while letting your project to expose these yet unreleased features.

### Search as you type

![Search](/images/addons-search.gif)

Search _as-you-type_ is powered by an Elasticsearch backend that allows users to quickly find exactly what they are looking for while typing.
It also **saves recent searches to have them at the tip of your fingers**.


### Sponsorship

<!--

TODO: not sure if it's worth to explain this here or not.
Maybe we can have a paragraph similar to the first one in
https://docs.readthedocs.io/en/stable/advertising/ethical-advertising.html
and link to that page.

-->

![EthicalAds](/images/addons-ethical-ads.png)

EthicalAds is the business model that allows Read the Docs to continue being a free web service.
It respects users while providing value to advertisers.
We don’t track you, sell your data, or anything else.
We simply show ads to users, based on the content of the page you're currently looking at.


## How to enable addons in your project

To enable Read the Docs Addons in your project follow these steps:

1. Go to the [new beta dashboard](https://beta.readthedocs.org).
1. Click on the project you want to enable addons.
1. Go to **Settings**, then **Addons (Beta)** from the left bar.
1. Check **Enable Addons**.

Now you have Read the Docs Addons enabled,
readers of your documentation can start using these features.

## Moving forward

We have implemented Read the Docs Addons in a modular way that allows us to expand them in the future.
There are plans to keep adding more addons to this list and also re-implement some of the Sphinx extension we've created in the past
(e.g. [`sphinx-hoverxref`](https://github.com/readthedocs/sphinx-hoverxref)) as an addon,
making it compatible with non-Sphinx projects.

We are also open to suggestions for new addons, [let us](https://github.com/readthedocs/addons/issues) know if you have an idea!

## Conclusion

Read the Docs provides a lot of features for documentation authors to simplify their workflow and to keep the documentation updated,
providing pull request previews, automation rules, versioning, translation, and many other features.

The introduction of Read the Docs Addons, empowers the readers' experience as well, closing the circle between authors and readers.
Addons give readers a quick way to find what they are looking for,
notifies them about reading the _latest_ version which may have features that are not yet implemented or,
an old version that may be deprecated.
It gives them a way to quickly switch between versions and translations of the same page,
and much more in near future!

## Contact

[Contact us](https://readthedocs.org/support/) if you have any questions about the new beta Read the Docs Addons,
or [open an issue](https://github.com/readthedocs/addons) to share any feedback you may have.
