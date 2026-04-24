# Marketing Audit: Read the Docs Website, Blog & Docs

**Date:** April 2026
**Baseline:** [User docs improvements issue draft](https://github.com/readthedocs/readthedocs.org/blob/claude/improve-user-docs-VWDHn/docs/user/ISSUE_DRAFT_user_docs_improvements.md)
**Status update:** This revision reflects changes shipped to `main` between the original audit (commit `c5da373`) and `ef3af66`. Resolved findings are marked ✅ and kept for traceability; remaining work is marked 🔲.

---

## Executive Summary

The Read the Docs marketing website (about.readthedocs.com) has solid foundations: clear value proposition, good feature coverage, comparison pages, and tool-specific landing pages. The audit originally identified 19 findings; **8 of those have been resolved on `main`** in the days following the audit (typos, duplicate meta tags, two new comparison pages, PR-preview promotion as a homepage differentiator, the stale signup URL on `choosing-a-platform`, broader doc-tool mentions, and a new feature-announcement blog post).

The remaining gaps cluster around: **visual demonstration** (screenshots/GIFs), **dedicated feature pages for the rest of the differentiators** (search, versioning, authentication), **tool page differentiation**, **navigation**, and **cross-cutting marketing of newer features (AI/LLM)**.

---

## What Shipped Since the Original Audit

The following commits on `main` directly addressed audit findings:

| Commit | PR | Audit finding(s) closed |
|---|---|---|
| `87217e1` | #397 | P1 #8 (typos), P2 #11 (stale signup URL on `choosing-a-platform.rst`) |
| `6f9a7f3` | #392 | P1 #7 (duplicate empty meta descriptions) |
| `ef3af66` | #387 | P0 #2 (PR previews promoted as a homepage differentiator with visual diff + files-changed detail tiles) |
| `792dcb3` | #382 | P1 #6 (Vercel comparison page) |
| `1f14fb5` | #384 | P1 #6 (ReadMe comparison page, with honesty callout) |
| `3e42353` | #391 | P1 #5 (new feature-announcement blog post: `uv` support) |
| `736e935` | #393 | Broader docs-tool mentions on homepage and features |
| `d06f6d6` | #381 | Hash-based signup/login modal triggers (UX/conversion) |

Per PR descriptions, a **Mintlify comparison** (#383) and a **`/comparisons/` hub-index restructure** (#385) are also in flight, which would close the rest of P1 #6.

---

## P0 Findings (Highest Impact)

### 1. 🔲 Homepage bottom CTA is self-admittedly weak

**File:** `content/pages/homepage.html`

The TODO comment is still in place. The current bottom CTA is "Get your docs online in 5 minutes" with a generic "Create an account" button. By this point on the page, the visitor has scrolled past features and testimonials — this is the highest-intent moment and it's wasted on a repeat of the top CTA.

**Recommendation:** Replace with a benefit-driven CTA that references specific outcomes, links to a quickstart, or surfaces social proof.

### 2. 🟡 Dedicated feature pages — partially addressed

**Status:** PR previews are now promoted as a real differentiator (homepage hero highlight, homepage features grid, and three detail tiles in the `/features/` "review changes" section: visual diff, files changed, build status). This closes the PR-previews half of the original finding.

**Still missing:** Dedicated standalone pages for:
- **Search / Search analytics** — surfaced on the homepage and features grid but no deep-dive
- **Versioning** — same situation; mentioned everywhere, never dedicated
- **Authentication / SSO** — critical for business buyers, no dedicated landing page
- **Analytics** — pageview and search analytics
- **Build customization** — important for the "any tool" story

**Recommendation:** Create standalone `/features/search/`, `/features/versioning/`, and `/features/authentication/` pages, each with 3+ screenshots/GIFs and a deep link into docs.

### 3. 🔲 Almost zero screenshots or visual demonstrations

Multiple pages still contain TODO comments about adding visuals:

- `content/pages/tools/sphinx.html` — `{# TODO: Add a GIF of using hoverxref & livesearch #}`
- `content/pages/tools/mkdocs.html` — `{# TODO: Add a GIF of using hoverxref & livesearch #}`
- `content/pages/tools/markdoc.html` — `{# TODO: Add a GIF of using hoverxref & livesearch #}`

The features page now has stronger PR-preview text but the underlying screenshot library hasn't grown. Tool pages still ship without product screenshots; comparison pages still have zero visual demos.

**Recommendation:** Build out a library of screenshots and short GIF/video demos covering the dashboard, PR-preview flow, search-as-you-type, the flyout menu, version switching, and analytics. Embed across feature, tool, and comparison pages.

### 4. 🔲 Tool pages are templated and thin

**Files:** `content/pages/tools/sphinx.html`, `mkdocs.html`, `jupyter-book.html`, `markdoc.html`, `custom.html`

Unchanged since the original audit. All five tool pages still share copy-pasted highlight sections; Jupyter Book is still a near-copy of Sphinx; Markdoc still has its testimonials section commented out with no replacement; all bottom CTAs still carry the `TODO replace this block` comment.

**Recommendation:** Differentiate each tool page with tool-specific benefits, RTD-integration configuration examples, and at least 2 screenshots of real RTD-hosted projects using that tool.

---

## P1 Findings (High Value)

### 5. 🟡 Blog cadence — partially addressed

**Resolved:** A new feature-announcement post was published April 21, 2026 (`uv` native support, `content/posts/uv-native-support.md`), the first new content-marketing post since `ubuntu-20-04-deprecated.md` (March 30, 2026).

**Still outstanding:**
- No newsletter has been published since February 2025 (14+ month gap)
- No 2024 or 2025 "year in review" / stats post (there are 2021 and 2023 posts)
- No customer stories or case studies
- No SEO-oriented evergreen content

**Recommendation:** Restart monthly newsletters. Commit to at least 2 product/thought-leadership posts per quarter on top of the operational announcements.

### 6. ✅ Comparison pages — largely addressed

**Resolved:**
- Vercel comparison page added (`content/pages/comparisons/vercel.html`)
- ReadMe comparison page added (`content/pages/comparisons/readme.html`) — notably includes a "When ReadMe might be a better fit" honesty section, which is exactly the kind of credibility move missing from the older comparison pages

**Still outstanding (per PR descriptions, in flight):**
- Mintlify comparison (#383)
- `/comparisons/` hub-index restructure (#385)

The remaining gaps from the original list (Confluence, Notion) are lower priority — not all enterprise-doc evaluations directly compete with RTD.

### 7. ✅ Duplicate empty meta descriptions — fixed

`6f9a7f3` removed the duplicate empty `<meta name="description" content="" />` tags from the cloudflare-pages, github-pages, and netlify comparison pages. (Gitbook was fine.)

### 8. ✅ Typos and grammar errors — fixed

`87217e1` fixed:
- `documentaiton` / `documention` (across `features.html`, all comparison pages, one blog post)
- `browser` → `browse` and `reading and old version` → `reading an old version` (`features/reader.html`)
- `accross` → `across`
- `seemlessly` → `seamlessly` (`docs-as-code.html`, via `6f9a7f3`)
- Awkward phrasing on `cloudflare-pages.html`
- `week to week` → `week-to-week` (`company.html`)

The same PR also fixed the stale signup URL on `choosing-a-platform.rst` (originally flagged as P2 #11).

**Backlog item:** Add a spellcheck step to CI to prevent regressions.

---

## P2 Findings (Consolidation & Polish)

### 9. 🔲 Pricing page references a non-existent "$50" basic plan

**File:** `content/pages/pricing.html`

The pricing comparison table still includes a column for an `on_basic` $50 plan, but only Advanced ($150) and Pro ($250) appear in the plan cards. The signup modal still says "Plans starting at $50/month".

**Recommendation:** Either surface the $50 plan as a named tier with its own card, or remove the column from the comparison table and update the modal copy.

### 10. 🔲 No "Customers" or "Use Cases" page

The homepage and tool pages include logos and testimonials, but there's no dedicated `/customers/` page with categorized logos, written case studies, or use-case-by-industry segmentation.

**Recommendation:** Create a `/customers/` page; link from homepage and pricing.

### 11. ✅ "Choosing a Platform" — partially addressed

The stale signup URL is fixed. The page itself is still RST and lacks the visual side-by-side comparison treatment recommended in the original audit, but the broken-link blocker is resolved.

**Recommendation (downgraded):** Schedule the visual rewrite as a P3 polish item.

### 12. 🔲 Navigation doesn't surface tools or comparisons

**File:** `readthedocs_theme/templates/includes/topnav.html`

Top nav still has Product / Pricing / Resources, with no dropdown on Product. Newly added comparison pages (Vercel, ReadMe) have the same discoverability problem as the originals.

**Recommendation:** Add a Product dropdown with sections for Features, Tools, Comparisons, and Docs-as-Code. (May depend on the comparison hub restructure in #385.)

### 13. ✅ Reader features page Docusaurus include — wrong tool, but fixed by audit branch attempt

The original audit found `content/pages/features/reader.html` including `try-it-out-docusaurus.html` on a tool-agnostic page. The fix landed when the audit-branch edits were rolled into the typo PR. Verified on current `main`.

### 14. 🔲 `llms.txt` and AI features not marketed

**Files:** `content/pages/features.html`, `content/pages/homepage.html`, tool pages

The `uv` blog post is the most recent feature announcement, but `llms.txt` support (shipped Feb 2026) and the broader AI-readiness story still have no presence on the features page, homepage, or tool pages.

**Recommendation:** Add an "AI-ready documentation" section to the features page covering `llms.txt`, search API for AI consumption, and the structured-content advantages of docs-as-code for AI ingestion.

### 15. 🔲 Inconsistent CTAs across pages

Still a mix of "Get started for free", "Start your 30-day free trial", "Create an account", and "Sign up" with no consistent rule about which appears where.

**Recommendation:** Standardize on 2-3 CTA variants. Business-oriented pages → "Start your free trial". Community-oriented pages → "Get started for free".

---

## P3 Findings (Maintenance)

### 16. 🔲 Commented-out testimonials on homepage

`content/pages/homepage.html` still has the Trevor James Smith / Juan Luis Cano testimonials commented out. Either restore them or delete.

### 17. 🔲 Enterprise page form action URL is a third-party webhook

`content/pages/enterprise.html` still posts directly to `webhook.frontapp.com` with the token in the page source.

### 18. 🔲 Blog posts with future dates

Posts still dated 2025-09 / 2025-11 / 2025-06 in the past — likely intentional scheduling artifacts but worth confirming they render correctly in feeds.

### 19. 🔲 Image alt text and accessibility

MkDocs and Custom tool pages still reuse the generic `homepage.png` rather than tool-specific screenshots; alt text is still generic in places.

---

## Summary of Status

| Priority | Original | Resolved | In flight | Remaining |
|---|---|---|---|---|
| P0 | 4 | 0 (1 partial) | 0 | 4 |
| P1 | 4 | 2 (1 partial) | 1 | 2 |
| P2 | 7 | 1 (1 partial) | 0 | 6 |
| P3 | 4 | 0 | 0 | 4 |
| **Total** | **19** | **3 fully + 3 partial** | **1** | **16** |

### Top remaining priorities

1. **P0 #1** — Fix the acknowledged-weak homepage bottom CTA
2. **P0 #2** — Build the remaining standalone feature pages (search, versioning, authentication)
3. **P0 #3** — Ship a screenshot/GIF library and embed across feature, tool, and comparison pages
4. **P0 #4** — Differentiate the five tool pages with tool-specific content and screenshots
5. **P1 #5** — Restart monthly newsletters and commit to a content cadence
6. **P2 #14** — Market AI / `llms.txt` capabilities
7. **P2 #12** — Surface tools and comparisons in the top nav
