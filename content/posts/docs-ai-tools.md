title: How to integration AI and Documentation tools
date: 2025-10-14
description: Exploring the integration of AI tools with documentation platforms like Read the Docs.
category: Meta
tags: vision, ai, docs, tools
authors: Eric Holscher
status: published
image: /images/ai-brain.jpg
image_credit: Photo by <a href="https://unsplash.com/@eclipticgraphic?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Ecliptic Graphic</a> on <a href="https://unsplash.com/photos/a-computer-circuit-board-with-a-brain-on-it-_jg8xh2SsXQ?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>


AI has been a hot topic in docs for the past year.
It's hard to figure out how to use it effectively,
with hallucinations being the biggest problem.

My views on AI have been shaped by the talk [Alex Garnett - Docs AI Tooling is Better (and Better for Us) than You Think](https://www.youtube.com/watch?v=6p6LttjaSNM&list=PLZAeFn6dfHplMbtJtidqFFtL7rt3ASNSR&index=9) from Write the Docs Portland 2025.

## Do what you love

The primary takeaway I had from the talk is that we should think more about the parts of documentation we like doing.
Being reflective and intentional about what we enjoy doing is a good practice in general,
and large industry shifts are a great time to do that.

One of his key points was that AI excels at small, focused technical tasks.
Instead of asking AI to write the docs,
we should use it to help with the parts we don't like doing.
Things like translating from Markdown to reStructuredText,
fixing grammar, or generating boilerplate are great places where the drudgery can be automated away.

Keep the human in the loop for creation and editing,
but use machines at the things machines have been good at for a long time.

## Help users discover

In terms of the user benefits of AI,
thinking about it as another path of discovery of the existing content is a great framing.
This presents in two different places:

* Improved search using semantic understanding of existing pages
* Chat interfaces that reference existing documentation explicitly in replies using Retrieval Augmented Generation (RAG)

The big thing here is using the existing content to enable discovery,
not generating new content that may or may not be correct.
**Creating new pathways for users to find the content they need is a great way to leverage AI.**

## Add additional context

On top of the existing documentation,
the talk references the ability to bring all the community spaces into a single interface.
Bringing GitHub Issues, Forums, Pricing, and website information all into a single place.

Allowing LLMs to index user content is a challenge.
You need to make sure the information is correct,
otherwise the AI will be referencing incorrect data.
But bringing in things you control like product Pricing,
and website information is a nice element.

I'm personally excited about the larger vision here though,
but it feels like a work in progress.
The dream of being able to leverage community contributions in more spaces has been long held,
and we're getting close to something that could unlock a lot of the value stored up in those old threads.

## Moving forward

We're looking at writing integration guides for many of these AI use cases,
but wanted to share this talk as a starting point for thinking about how to engage with AI.
We're excited about how AI is making written docs even more valuable and useful,
and we'll continue to explore this space and work to integrate it where it makes sense.
