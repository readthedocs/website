title: Making search faster for all projects

date: January 15, 2026
description: We made several improvements to make search faster for all projects on Read the Docs.
category: Engineering
tags: performance, search
authors: Santos Gallegos
status: published
image: /images/faster-search.jpg
image_credit: Photo by <a href="https://unsplash.com/@julianhochgesang?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Julian Hochgesang</a> on <a href="https://unsplash.com/photos/time-lapse-photography-of-vehicles-3-y9vq8uoxk?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>

Search is a fundamental feature for documentation projects,
helping users to find the information they need quickly.
That's why Read the Docs includes a powerful [search engine](https://docs.readthedocs.com/platform/stable/server-side-search/index.html) for all hosted projects powered by Elasticsearch.

Since its launch, we have been continuously working to enhance the search experience adding new features,
but its performance has always been a challenge due to the growing number of projects and users on the platform.
In the last months, we have been working on improving the search performance for all projects hosted on Read the Docs,
achieving significant improvements in speed and responsiveness.

We went down from an average of 210ms per request to 160ms in Read the Docs Community,
and from 570ms to 280ms in Read the Docs Business (not including network latency).

![Search performance improvements graph on Read the Docs Community](/images/search-improvements-community.png)

_Average response time for search requests on Read the Docs Community from the last 3 months._

![Search performance improvements graph on Read the Docs Business](/images/search-improvements-business.png)

_Average response time for search requests on Read the Docs Business from the last 3 months._

## What we did

When looking for ways to improve search performance,
we identified three main areas to focus on:

1. Reducing the amount of data being searched.
2. Optimizing Elasticsearch configuration and queries.
3. Optimizing our application logic.

## Reducing the amount of data

The more data we have to search through, the longer it takes to return results.
It also increases our costs, as Elastic Cloud doesn't allow to just increase the amount of storage
but it also requires increasing the type of instance, which comes with more CPU and RAM.
We were approaching the limits of our current plan (85% of storage used).

We started by removing from our index projects that were marked as spam,
and later projects that aren't active (no builds and searches in the last 90 days).

While we didn't see a big improvement in performance from this change,
it allowed us to stay within our storage limits without having to upgrade our plan,
and it also helped us to prepare for the next step, increasing the number of shards (more on that later).

## Optimizing Elasticsearch queries

We analyzed our current queries looking for ways to optimize them, and we found a few areas for improvement:

- We returned more results than necessary by default.
  Most users don't go beyond the first page of results, or even the first few results.
  We reduced the default number of results returned from 50 to 15.
- Some queries were using expensive fuzzy search unnecessarily.
  Users can make use our our special syntax to enable fuzzy search and [other features](https://docs.readthedocs.com/platform/stable/server-side-search/syntax.html#special-queries).
  Some search terms that contained `~` were being treated as fuzzy search, even when the user didn't intend to (like in a shell prompt or UNIX path),
  and it was causing a big performance hit.
  While we can't disable fuzzy search completely, we changed the maximum number of expansions allowed from 50 to 10,
  and changed the prefix length from 0 to 1.

These changes alone improved performance, but we felt we could do more.
Simple search queries were still taking too long.

## Optimizing Elasticsearch configuration

While running out of options to optimize our search queries,
we found a couple of alerts from Elastic Cloud via their [AutoOps](https://www.elastic.co/platform/autoops) system related to shard size.

We were approaching the maximum shard size and number of documents per shard allowed by Elasticsearch.
We had only one shard for the whole index, this was degradating performance as the index kept growing.

Elasticsearch works best by parallelizing search requests across multiple shards.
By increasing the number of shards, we can distribute the search load more evenly,
reducing the time it takes to return results.

The recommended shard size is around 30GB, our single shard was around 630GB.
When Elasticsearch was first integrated into Read the Docs, our index was much smaller,
so a single shard made sense at the time.

The number of shards can't be changed after an index is created,
it requires creating a new index and re-indexing all the data from the old index to the new one.
To ensure minimal downtime during the process, we followed these steps:

- Deleted unnecessary data from the index to reduce its size (following the steps mentioned at the beginning of this post).
- Upgraded our instances to allow for more storage (we needed more space temporarily to hold both indexes),
  and to improve performance during the re-indexing process.
- Created a new index with 20 shards. This number was calculated based on the reduced size of the old index (570GB).
- Copied data from the old index to the new one using the [reindex API](https://www.elastic.co/docs/api/doc/elasticsearch/operation/operation-reindex).
- Update our index alias to point to the new index.
- Index any new or updated versions that were added during the re-indexing process.
- Deleted the old index and downgraded our instances to the previous plan.

The process took a couple of hours, but search was available during the whole time.
This resulted in a significant improvement in search performance,
and not just faster searches, but it also faster indexing and deletion of documents.

We went down from a query average of 90ms to 60ms in Read the Docs Community,
and from 80ms to 60ms in Read the Docs Business.

note to self: these graphs are for search in general, not just requests from API v3.
Use the graphs from API V3 only, to show more accurate numbers.

![Search performance improvements graph on Read the Docs Community](/images/search-improvements-query-time-community.png)

_Average ES query time on Read the Docs Community from the last 3 months._

![Search performance improvements graph on Read the Docs Business](/images/search-improvements-query-time-business.png)

_Average ES query time on Read the Docs Business from the last 3 months._

NOTE: For Read the Docs Business, our index was smaller (around 100GB),
but we still needed to increase the number of shards to improve performance,
so we created a new index with 4 shards.

## Optimizing our application logic

After optimizing our Elasticsearch queries and configuration,
we turned our attention to our application logic to see if there were any areas for improvement.

We identified that a lot of time was being spent querying the database in order to serialize the search results (get project details, resolve URLs, etc),
and on Read the Docs Business, checking permissions for each version to be searched.

This got worse as we enabled searching for subprojects by default,
as searching on projects with many subprojects resulted in many database queries per search.

We fixed several N+1 queries by using `select_related` and `prefetch_related` where appropriate,
re-using previously fetched data/instances, caching results when possible, and doing operations in bulk.

This accounted for a ~12ms improvement on average for Read the Docs Community,
and ~80ms on Read the Docs Business.

## Optimizing our Elasticsearch client

TBD, improvements still in progress.

Years ago, we experienced connection issues when using connection pooling with the Elasticsearch Python client,
as a workaround, we created a new client for each request. As part of our optimization efforts,
we revisited this decision and enabled connection pooling again.

We also used the recommended way to connect to Elastic Cloud using the `cloud_id` parameter,
this enables HTTP compression and other optimizations.

## Conclusions

After implementing these changes, we saw a significant improvement in search performance across all projects hosted on Read the Docs.
Search as you type is now much more responsive, specially on Read the Docs Community. We still have work to do on Read the Docs Business,
but we are happy with the progress we have made so far.

Some reasons why Read the Docs Business is still slower than Read the Docs Community:

- More complex permission checks.
  Since we host private projects, we need to ensure that users only see results they have access to.
  This requires checking each version's permissions before including it in the search results.
- No caching of search results.
  Due to the nature of private projects, we can't cache search results,
  as they may change based on user permissions.

## Recommendations

- Monitor shard size and number of documents per shard.
  As your index grows, it's important to ensure that shards don't become too large.
- If you are using Elastic Cloud, check AutoOps alerts regularly.
  You can even setup email/slack notifications for new alerts.
- Delete unnecessary data from your index.
  This will help reduce storage costs and further reduce your number of shards needed.
- Make sure your Elasticsearch client is using connection pooling and other optimizations.
- Implement restrictions on the number of results returned by default, and the use of expensive search features like fuzzy search.
- Check for optimizations in your application logic, if it interacts with the results from Elasticsearch.

## Next steps

While we are happy with the improvements we have made so far, there is still room for further optimization.

- Revisit the number of shards.
  We decided on the number of shards based on the size of the index before re-indexing,
  but the resulted index was smaller than we expected (there was maybe some fragmentation on the old index).
  Reducing the number of shards could improve performance, but it's not clear by how much.
  As this requires re-indexing again, we won't do this unless we need to re-index for other reasons.
- Further optimize database queries.
  This is an ongoing effort, and we will continue to look for ways to reduce the number of queries and improve their efficiency,
  specially on Read the Docs Business, where we run these queries everywhere a resource is accessed.
