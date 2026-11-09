# Read the Docs Voice & Tone Guide

A practical reference for writing marketing copy — blog posts, site pages,
newsletters, announcements, and CTAs. Everything here is drawn from patterns in
our existing published copy, so it describes how we *already* sound at our best,
and makes it repeatable.

## How this guide gets used

- **Drafting** — read the principles once, then write. The "Tone by context"
  table and the bad-news pattern below are skeletons: follow them step by step
  when writing an announcement, deprecation, or incident post.
- **AI-assisted drafting** — this guide is referenced from `AGENTS.md`, so AI
  tools working in this repo load it automatically. Treat AI drafts like any
  other draft: verify against the checklist, don't assume.
- **Reviewing** — in PR review, cite a checklist item or section instead of
  arguing taste from scratch. "Needs a number behind this claim" travels
  better than "this feels off."
- **Keeping it alive** — when a copy debate gets settled in a PR, record the
  decision here. If the guide fails to answer the same question twice, that's
  a missing section.

---

## Who we are (brand personality)

Read the Docs is a bootstrapped, open source company that has hosted
documentation since 2010. We sound like the engineers and writers we are — not
like a venture-backed platform chasing a category.

Five adjectives that describe our voice:

- **Direct** — plain, declarative sentences. We say what a thing does.
- **Credible** — we back claims with numbers, examples, and named users.
- **Honest** — we share hard decisions, real costs, and bad news openly.
- **Grounded** — confident without hype; we don't oversell.
- **Warm** — community-minded, generous, occasionally playful.

If a sentence sounds like it could appear in any SaaS landing page, it's
probably wrong for us.

---

## Who we're writing for

Technical people: developers, documentation engineers, and the docs/eng teams
who support them. Assume the reader knows Git, pull requests, CI, and tools
like Sphinx and MkDocs. Respect that knowledge — explain *our* product and *our*
decisions, not the fundamentals of software development.

We write for two related audiences, and often on the same page:

- **Commercial teams** (Read the Docs Business / Enterprise) — value reliability,
  security, SSO, and not having to run a docs platform themselves.
- **Open source projects** (Read the Docs Community) — value the free tier, our
  values, and long-term trust.

Never make one audience feel like an afterthought. The homepage speaks to both
side by side: *"Your engineering team shouldn't have to run a docs platform
team"* and *"Always free for open source and community projects."*

---

## Core voice principles

### 1. Lead with the benefit, name the feature second

Frame features as outcomes for the reader.

- ✅ "Catch doc regressions before you merge" → then explain preview builds.
- ✅ "Preview your rendered documentation before deploying, and catch mistakes
  before they go live."
- ❌ "We offer a Visual Diff feature with rendered HTML comparison."

### 2. Speak as "we" to "you"

First person plural for us, second person for the reader. It's a conversation,
not a spec sheet. *"We run the hard parts: builds, previews, auth — so you can
focus on creating great docs."*

### 3. Prove it with specifics

Numbers and named users beat adjectives. We don't say "massive scale" — we say
*"55 million pages of documentation a month"*, *"80,000 open source projects"*,
*"bandwidth decreased by 75% (~800GB/day to ~200GB/day)."* We don't say "trusted
by great companies" — we say *"AMD and Canonical, and open source projects like
Jupyter and Flask."*

When you make a claim, ask: *what number or name proves this?* If there isn't
one, soften the claim or cut it.

### 4. Confident, never hype

State strengths plainly and let them stand. *"Our vision for Read the Docs is to
be the best place to host software documentation using a docs-as-code
approach"* — a strong claim, but scoped and defensible. Avoid "revolutionary,"
"game-changing," "seamless," "effortless," "cutting-edge," and stacked
superlatives.

### 5. Be honest, especially about hard things

This is our biggest differentiator. We publish real costs, name problems, and
explain trade-offs.

- On AI crawler abuse we shared the exact bill: *"This cost us over $5,000 in
  bandwidth charges."*
- On deprecations we call them what they are: *"We've made this hard decision
  because 99% of our projects use Git…"*
- On our own history we're candid: donations *"didn't work at all, and left us
  struggling with … burnout."*

Transparency *is* the marketing. Don't sand off the honesty to sound polished.

### 6. Values are part of the pitch

Open source, no lock-in, sustainability, and community trust are selling points,
not footnotes. *"Keep your tools. Keep your content."* *"No proprietary editor.
No per-seat pricing."* *"We can't maximize profit and continue to keep the trust
of our community."* Lead with these where they're true.

### 7. Respect competitors

In comparisons, acknowledge what the competitor does well before drawing the
contrast. *"GitBook is a polished collaborative documentation platform… If your
docs team prefers editing in a WYSIWYG instead of a Git workflow, GitBook has a
focused story."* Then differentiate on substance (docs-as-code, tool freedom,
open source). Never sneer, exaggerate a rival's weakness, or set up a straw man.

### 8. Low-pressure calls to action

Invite, don't push. *"Nothing automatic — we'll only ask for payment if you
decide to keep going."* *"Get your docs online in 5 minutes."* CTAs are specific
and honest about what happens next. No fake urgency, no dark patterns.

---

## Before and after

The fastest way to calibrate. The left column is generic SaaS copy; the right
column is how we actually say it (all real quotes from our published copy).

| Instead of | We write |
|---|---|
| "A revolutionary platform that seamlessly automates your documentation workflow." | "Connect your Git repository and treat docs like code. We run the hard parts: builds, previews, auth." |
| "Blazing-fast builds on cutting-edge infrastructure." | "`uv` is generally faster than `pip` for most operations, and many users will see real speedups in doc building." |
| "Trusted by industry leaders worldwide." | "We've hosted open source documentation since 2010 — Flask, Jupyter, Godot, and thousands more trust us to keep their docs online." |
| "We regret to inform you of upcoming changes to version control support." | "We are announcing the deprecation of support for Bazaar, Mercurial, and Subversion starting on **Monday, June 3rd, 2024**." |
| "Powerful enterprise-grade security features." | "Control who can access your docs, from your internal team to the whole world." |

---

## Tone by context

Voice stays constant; tone shifts with the situation.

| Context | Tone | Notes |
|---|---|---|
| **Homepage / feature pages** | Confident, benefit-first, tight | Short. Every feature tied to an outcome. Both audiences addressed. |
| **Feature announcements** | Enthusiastic but practical | "We are excited to announce…" then immediately *how to use it* with a real config example. Invite feedback at the end. |
| **Vision / meta posts** | Reflective, principled | Explain the *why* and the philosophy. Longer sentences allowed. |
| **Deprecations / breaking changes** | Clear, respectful, apologetic-without-grovelling | State the date up front, give the reason, provide a timeline and workarounds, end with "Contact us." |
| **Incidents / issues** | Transparent, factual, calm | Real numbers, what happened, what we did, what's next. No spin. |
| **Newsletters** | Friendly, scannable, human | Bulleted "News / Upcoming / Possible issues." Warm sign-off: *"Questions? Comments? Ideas?"* |
| **Comparisons** | Fair, substance-driven | Credit the competitor, differentiate on real strengths. |
| **Pricing** | Plain, reassuring, no jargon | Answer the anxious questions directly and briefly. |

### Handling bad news (the pattern we always follow)

1. **Say it plainly and early** — the date and the change, no burying.
2. **Explain the reason** — usually a real trade-off (cost, complexity, focus).
3. **Give a path forward** — timelines, workarounds, migration steps, examples.
4. **Open the door** — "Contact us if you have any questions."

Example spine from the VCS deprecation: announce the date → *"We've made this
hard decision because…"* → brownout timeline → workarounds with a config
example → contact us.

---

## Language patterns

### Words and phrases we use

- **docs-as-code**, **treat docs like code**, **your tools, your content**
- **Community / Business / Enterprise** (the public plan names)
- **open**, **no lock-in**, **no per-seat pricing**, **portable**
- **build, host, preview, version** (concrete verbs for what the product does)
- Plain connective asides with em-dashes — like this — to keep a human rhythm.

### Words and phrases to avoid

- Hype: *revolutionary, game-changing, seamless, effortless, world-class,
  next-generation, blazing-fast, supercharge, unleash.*
- Empty intensifiers: *very, really, incredibly, simply just* (when they add
  nothing).
- **Internal code names.** Always use the public-facing marketing name, never
  the name used in the codebase. (See `.claude/CLAUDE.md`.)
- Corporate hedging: *"we're on a mission to leverage synergies…"* — no.

### Grammar and mechanics

- **Voice:** active. "We built support…" not "Support was built…"
- **Capitalization:** "Read the Docs" always spelled in full, title case. Feature
  and plan names as branded ("Addons," "Community," "Business"). Sentence case
  for most headings.
- **Contractions:** yes — "shouldn't," "we're," "you'll." They keep us human.
- **Oxford comma:** use it.
- **Blog markdown style:** we often break sentences onto separate lines by clause
  in `.md`/`.rst` source. It renders as normal prose but keeps diffs clean —
  match the surrounding file.
- **Playfulness:** sparing and genuine — an occasional *":)"* in a blog post,
  a rocket or heart icon in page chrome. Never in serious posts (incidents,
  deprecations, security).
- **Links:** link generously to docs, related posts, and evidence (issues, data).
  Claims should be checkable.

---

## Endings

Close warmly and open a door, especially in blog posts and newsletters:

- *"We're excited to see what you build with this data, and are always looking
  for feedback."*
- *"Feedback welcome … Please contact support and share your experience."*
- *"Questions? Comments? Ideas for the next newsletter? Contact us!"*

Every piece should leave the reader with a clear, low-pressure next step —
sign up, read the docs, try the feature, or reach out.

---

## Quick checklist

Before publishing, confirm:

- [ ] Leads with a benefit, not a feature name.
- [ ] Talks as "we" to "you."
- [ ] Every strong claim has a number, name, or link behind it.
- [ ] No hype words or empty intensifiers.
- [ ] Public plan/feature names only — no internal code names.
- [ ] If it's bad news: date, reason, path forward, and a way to reach us.
- [ ] Both audiences (commercial + open source) considered where relevant.
- [ ] Competitors, if mentioned, are treated fairly.
- [ ] CTA is specific and honest about what happens next.
- [ ] Ends with a warm, low-pressure next step.
- [ ] Read it aloud — does it sound like a thoughtful engineer, or a brochure?

---

*This guide describes our house style for marketing copy. For developer-facing
documentation, follow the
[docs style guide](https://github.com/readthedocs/readthedocs.org/blob/main/docs/dev/style-guide.rst).*
