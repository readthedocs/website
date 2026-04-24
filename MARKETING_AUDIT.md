# Marketing Audit: Read the Docs Website, Blog & Docs

**Date:** April 2026
**Baseline:** [User docs improvements issue draft](https://github.com/readthedocs/readthedocs.org/blob/claude/improve-user-docs-VWDHn/docs/user/ISSUE_DRAFT_user_docs_improvements.md)

---

## Executive Summary

The Read the Docs marketing website (about.readthedocs.com) has solid foundations: clear value proposition, good feature coverage, comparison pages, and tool-specific landing pages. However, the audit reveals significant gaps in **visual demonstration**, **feature page depth**, **blog cadence**, **content freshness**, and **cross-linking between the website and docs**. Many pages acknowledge these problems in their own TODO comments but haven't been addressed.

The baseline document establishes that the marketing website should own: value prop, pricing, choosing a platform, competitor comparisons, tool marketing pages, reader feature tours. The docs (docs.readthedocs.io) should own: tutorials, how-tos, reference, configuration. This audit evaluates how well the website fulfills its side of that contract.

---

## P0 Findings (Highest Impact)

### 1. Homepage bottom CTA is self-admittedly weak

**File:** `content/pages/homepage.html:243-268`

The homepage ends with a weak bottom CTA that the codebase itself flags:

```html
{# TODO replace this block with something more actionable. It's
   not saying anything new at this point in the page, and the call
   to action is not strong. #}
```

The current CTA is just "Get your docs online in 5 minutes" with a generic "Create an account" button. By this point on the page, the visitor has scrolled past features and testimonials — this is the highest-intent moment and it's wasted on a repeat of the top CTA.

**Recommendation:** Replace with a benefit-driven CTA that references specific outcomes (e.g., "Join 100,000+ projects" or a quickstart flow link), or a comparison/social proof element that pushes fence-sitters to convert.

### 2. No dedicated feature pages for key differentiators

**File:** `content/pages/features/` (only contains `reader.html`)

The features directory has only one sub-page: the reader features tour. The baseline document identifies this as a major gap. There are no dedicated feature pages for:

- **Pull request previews** — the single most differentiated feature vs. competitors
- **Search / Search analytics** — a major selling point over GitHub Pages, Netlify
- **Versioning** — a core value prop repeated on every page but never deep-dived
- **Authentication / SSO** — critical for business customers
- **Analytics** — pageview and search analytics
- **Build customization** — important for the "any tool" story

Each of these is mentioned in passing on the main features page but never gets its own dedicated landing page with screenshots, use cases, and a clear CTA. Competitors like GitBook have dedicated pages for each feature.

**Recommendation:** Create standalone feature pages for at least PR previews, search, versioning, and authentication. Each should have 3+ screenshots/GIFs, a clear use case narrative, and link to the relevant docs how-to.

### 3. Almost zero screenshots or visual demonstrations across the site

Multiple pages contain TODO comments about adding visuals:

- `content/pages/tools/sphinx.html:35` — `{# TODO: Add a GIF of using hoverxref & livesearch #}`
- `content/pages/tools/mkdocs.html:34` — `{# TODO: Add a GIF of using hoverxref & livesearch #}`
- `content/pages/tools/markdoc.html:33` — `{# TODO: Add a GIF of using hoverxref & livesearch #}`
- `content/pages/features.html:332-335` — The "Everything in one place" section has `image=None`

The features page (`features.html`) has only 3 static screenshots across the entire page. The tool pages have zero product screenshots. The comparison pages have zero visual demonstrations. For a visual product (documentation hosting), this is a significant gap. Prospective users can't see what the product looks like before signing up.

**Recommendation:** Create a library of product screenshots and short GIF/video demos covering: the dashboard, PR preview flow, search-as-you-type, the flyout menu, version switching, and analytics. Embed these across feature, tool, and comparison pages.

### 4. Tool pages are templated and thin

**Files:** `content/pages/tools/sphinx.html`, `mkdocs.html`, `jupyter-book.html`, `markdoc.html`, `custom.html`

All five tool pages follow nearly identical structures with copy-pasted highlight sections ("Easily share with deploy previews", "Always find what you need", "Keep your focus with link previews"). The differentiation between them is minimal:

| Page | Unique content | Demo link | Testimonials |
|------|---------------|-----------|--------------|
| Sphinx | 1 unique highlight | No (links to tutorial) | Yes (shared) |
| MkDocs | 1 unique highlight (theme support) | Yes (example project) | Yes |
| Jupyter Book | 0 unique highlights (copy of Sphinx) | Yes (example project) | Yes |
| Markdoc | 0 unique highlights (copy of Sphinx) | Yes (test-builds) | No (commented out) |
| Custom | 1 unique highlight | No (links to docs) | No |

**Problems:**
- Jupyter Book page is an exact copy of Sphinx page highlights — even the "link previews" highlight doesn't apply to Jupyter Book in the same way
- Markdoc has its testimonials section commented out with no replacement
- None of the pages explain tool-specific RTD integration benefits (e.g., Sphinx autodoc + RTD search, MkDocs Material theme compatibility, Jupyter Book executable content)
- All bottom CTAs are flagged with `TODO replace this block with something more actionable`

**Recommendation:** Differentiate each tool page with tool-specific benefits, real configuration examples showing RTD integration, and at least 2 screenshots of actual projects using that tool on RTD. Remove the copy-pasted highlights and replace with content specific to each tool's strengths on RTD.

---

## P1 Findings (High Value)

### 5. Blog cadence collapsed in 2025-2026

**Directory:** `content/posts/` (41 posts total)

The blog had strong monthly newsletter cadence through 2024 (Jan-Dec newsletters). In 2025, newsletters stopped after February. Post frequency dropped sharply:

| Period | Posts | Newsletters |
|--------|-------|-------------|
| 2024 (full year) | ~20 | 11 monthly newsletters |
| 2025 (full year) | ~8 | 2 (Jan, Feb only) |
| 2026 (to April) | ~4 | 0 |

Recent 2025-2026 posts are almost entirely operational announcements (deprecations, maintenance, migration notices). There are no thought leadership posts between `docs-ai-tools.md` (Nov 2025) and the present. The "2025 Vision" post (Jan 2025) set expectations for the year but there's been no follow-up on progress.

Content gaps:
- No "year in review" or stats post for 2024 (there are posts for 2021 and 2023)
- No newsletter since Feb 2025 — 14 month gap
- No product launch or feature announcement posts for new features shipped in 2025-2026
- No customer stories or case studies
- No SEO-oriented content (e.g., "how to set up docs for your Python project")

**Recommendation:** Restart monthly newsletters immediately. Publish at least 2 feature/product posts per quarter. Add customer case studies. Consider SEO-oriented tutorial content that links to the product.

### 6. Comparison pages missing key competitors

**Directory:** `content/pages/comparisons/`

Current comparisons: GitHub Pages, GitBook, Cloudflare Pages, Netlify.

Missing comparisons for tools prospects actually evaluate:
- **Docusaurus** (very common alternative, especially for React/JS projects)
- **Confluence** (enterprise teams evaluating hosted docs)
- **Notion** (increasingly used for internal docs)
- **ReadMe.com** (direct competitor for API documentation)
- **Mintlify** (fast-growing competitor in the docs-as-code space)

The baseline document flags missing competitive coverage. The existing four comparisons also have a pattern issue: all use the identical header "Read the Docs is the all-in-one solution for your documentation" — this reads as templated and not tailored to each competitor's specific weaknesses.

**Recommendation:** Add comparison pages for at least Docusaurus and Mintlify (the most common alternatives prospects evaluate). Tailor each comparison header and narrative to the specific competitor's weaknesses relative to RTD.

### 7. Comparison pages have duplicate/empty meta descriptions

**Files:** All comparison pages (`github-pages.html`, `gitbook.html`, `cloudflare-pages.html`, `netlify.html`)

Each comparison page has two `<meta name="description">` tags — one with content and one empty:

```html
<meta name="description" content="GitHub Pages is an amazing product..." />
<meta name="description" content="" />
```

This is an SEO issue. The second empty tag may override the first depending on how search engines parse it.

**Recommendation:** Remove the duplicate empty `<meta name="description" content="" />` from all four comparison pages.

### 8. Typos and grammar errors on high-traffic pages

Several typos on key marketing pages:

- `features.html:310` — "documentaiton" (should be "documentation")
- `features.html:376` — "authentation" (should be "authentication")
- `features.html:382` — "find what the need" (should be "find what they need")
- `features/reader.html:45` — "Allow users to browser docs" (should be "browse")
- `features/reader.html:66-69` — "Warn readers about reading and old version" (should be "an old version")
- `features/reader.html:155-159` — "accross" (should be "across")
- `docs-as-code.html:160` — "collaborate seemlessly" (should be "seamlessly")
- `comparisons/github-pages.html:77` — "Private documention" (should be "documentation")
- `comparisons/gitbook.html:45` — "Private documention" (should be "documentation")
- `comparisons/netlify.html:53` — "Private documention" (should be "documentation")
- `comparisons/cloudflare-pages.html:46` — "Private documention" (should be "documentation")

**Recommendation:** Fix all typos. Consider adding a spellcheck step to the CI pipeline.

---

## P2 Findings (Consolidation & Polish)

### 9. Pricing page references a non-existent "$50" basic plan

**File:** `content/pages/pricing.html:243`

The pricing comparison table includes a column for a "$50" plan (`on_basic`) but only the "Advanced" ($150) and "Pro" ($250) plans are shown to users in the plan cards above. The $50 plan appears in the comparison table but has no corresponding plan card, no name, and no sign-up flow. The signup modal also references "Plans starting at $50/month" which may confuse users who only see $150 and $250 options.

**Recommendation:** Either surface the $50 plan as a named tier with its own card, or remove it from the comparison table and update the signup modal text.

### 10. No "Use Cases" or "Customers" page

The homepage includes testimonials from Godot Engine and UC Berkeley, and the tool pages include user logo sections. But there's no dedicated customers/use cases page that showcases:

- Who uses Read the Docs (logos, names, scale)
- Case studies with specific outcomes
- Use cases by industry (open source, enterprise, academia, API docs)

The baseline document identifies this as content the marketing website should own.

**Recommendation:** Create a `/customers/` page with categorized logos, 2-3 written case studies, and links from the homepage and pricing pages.

### 11. "Choosing a Platform" page is outdated and plain

**File:** `content/pages/choosing-a-platform.rst`

This is the only page written in reStructuredText (all others are HTML). It's a plain text comparison between Community and Business platforms with no visual elements, no feature comparison table, and a stale signup link (`https://readthedocs.com/accounts/signup/` instead of `https://app.readthedocs.com/accounts/signup/`).

This page is linked from the top nav login dropdown and the signup modal — it's a high-traffic decision point.

**Recommendation:** Rewrite as HTML with a visual side-by-side comparison table (similar to the pricing page format). Update the signup URL. Add a decision flowchart or quiz element.

### 12. Navigation doesn't surface tools or comparisons

**File:** `readthedocs_theme/templates/includes/topnav.html`

The top navigation has three items: Product, Pricing, Resources. The "Product" link goes directly to `/features/` with no dropdown. The comparisons and tools pages — which are SEO-valuable landing pages — are not linked from the top navigation at all. Users can only find them by:

- Scrolling to the bottom of the features page (tools are mentioned inline)
- Directly navigating to `/comparisons/` or `/tools/`

**Recommendation:** Add a dropdown to "Product" that includes sections for Features, Tools, Comparisons (or "vs. alternatives"), and Docs-as-Code.

### 13. Reader features page includes Docusaurus "try it out" block

**File:** `content/pages/features/reader.html:218`

```html
{% include "includes/try-it-out-docusaurus.html" %}
```

The reader features page — which is about RTD platform features, not a specific tool — includes a Docusaurus-specific try-it-out code block. This seems like a copy-paste error. The reader features page should either use a generic try-it-out block or one for Sphinx/MkDocs (the primary supported tools).

**Recommendation:** Replace with `includes/try-it-out.html` (the generic Sphinx version) or create a tool-agnostic version.

### 14. `llms.txt` and AI features not marketed

**File:** `content/posts/llms-txt-support.md` (published Feb 2026)

RTD shipped `llms.txt` support and has blog posts about AI and documentation tools, but the features page, homepage, and tool pages make zero mention of AI-related capabilities. Given the current market focus on AI, this is a missed marketing opportunity.

**Recommendation:** Add an "AI-ready documentation" section to the features page covering `llms.txt` support, search API for AI consumption, and the structured content that makes RTD docs AI-friendly.

### 15. Inconsistent CTAs across pages

CTA buttons across the site use inconsistent language and styling:

| Page | Primary CTA | Secondary CTA |
|------|-------------|---------------|
| Homepage | "Get started for free" | "Explore features" |
| Features (top) | "Get started now" | — |
| Features (bottom) | "Start your 30-day free trial" | — |
| Sphinx | "Create an account" | "Start our tutorial" |
| MkDocs | "Create an account" | "See a demo" |
| Comparisons | "Get started for free" | — |
| Docs-as-code | "Sign up" | — |

The messaging switches between "free", "30-day free trial", and generic "create an account" with no consistency about what the user is signing up for.

**Recommendation:** Standardize on 2-3 CTA variants with consistent language. Business-oriented pages should say "Start your free trial". Community-oriented pages should say "Get started for free". All should make it clear what happens next.

---

## P3 Findings (Maintenance)

### 16. Commented-out testimonials on homepage

**File:** `content/pages/homepage.html:203-230`

Two testimonials (Trevor James Smith / Ouranos, Juan Luis Cano / Kedro) are commented out. If they were removed for a reason, they should be deleted entirely. If they're pending approval, they should be tracked in an issue.

### 17. Enterprise page form action URL is a third-party webhook

**File:** `content/pages/enterprise.html:93`

The enterprise inquiry form posts to `webhook.frontapp.com`. This is functional but the full webhook URL with token is exposed in the page source. Consider whether this should be proxied through your own backend.

### 18. Blog posts with future dates

Several posts have dates far in the future relative to their content:

- `aws-powers-read-the-docs.md` — dated 2025-09-03
- `docs-ai-tools.md` — dated 2025-11-24
- `announcing-our-github-app-beta.md` — dated 2025-06-24

These may be intentionally scheduled, but if they're already published, the future dates could cause confusion in RSS feeds or blog listings.

### 19. Missing `alt` text and accessibility gaps

- Several images referenced in marketing pages lack descriptive `alt` text or use generic text like "Examples of Read the Docs hosted documentation" across multiple pages
- The MkDocs and Custom tool pages reuse the generic `homepage.png` image rather than tool-specific screenshots

---

## Cross-cutting: Website-to-Docs Linking

The baseline document emphasizes that the marketing website and docs should cross-link effectively. Current state:

**Good:**
- Tool pages link to relevant docs tutorials
- Feature sections include "Documentation" buttons linking to specific docs pages
- Top nav "Resources" dropdown links to docs, tutorial, and support

**Gaps:**
- No links from website to quickstart guides (baseline P1 recommendation)
- No links from pricing/features to docs explaining how features work in practice
- The docs don't link back to the marketing website for pricing, comparisons, or value prop content
- Feature pages don't link to relevant docs how-to pages for each feature

---

## Summary of Recommendations by Priority

### P0 — Do Now
1. Fix the homepage bottom CTA (acknowledged TODO)
2. Create dedicated feature pages for PR previews, search, versioning, authentication
3. Add screenshots and visual demos across all marketing pages
4. Differentiate tool pages with tool-specific content

### P1 — Next Quarter
5. Restart blog newsletters and increase post cadence
6. Add comparison pages for Docusaurus and Mintlify
7. Fix duplicate empty meta descriptions on comparison pages
8. Fix all typos on marketing pages

### P2 — This Half
9. Clarify or remove the $50 plan from the pricing table
10. Create a customers/use cases page
11. Rewrite "Choosing a Platform" as a modern HTML page
12. Add tools and comparisons to the top navigation
13. Fix the reader page's Docusaurus try-it-out include
14. Market AI/LLM features on the features page
15. Standardize CTAs across all pages

### P3 — Backlog
16. Clean up commented-out homepage testimonials
17. Review enterprise form webhook exposure
18. Audit blog post dates for accuracy
19. Improve image alt text and accessibility
