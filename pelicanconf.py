"""Read the Docs website Pelican configuration."""

import os

AUTHOR = 'Read the Docs, Inc'
SITENAME = 'Read the Docs'

# Use relavitve URLs for local development only.
if not os.environ.get("READTHEDOCS"):
    RELATIVE_URLS = True

# Use the correct domain for the site URL (canonical or PR preview),
# this setting is needed to make the RSS/Atom feeds generate correctly
# https://docs.readthedocs.io/en/stable/reference/environment-variables.html.
SITEURL = os.environ.get("READTHEDOCS_CANONICAL_URL", "")

TIMEZONE = 'US/Pacific'
DEFAULT_LANG = 'en'
DEFAULT_DATE_FORMAT = '%b %-d, %Y'

THEME = 'readthedocs_theme'
SUMMARY_MAX_LENGTH = 20  # Words

# Add non-default markdown extensions
MARKDOWN = {
    'extension_configs': {
        'markdown.extensions.codehilite': {'css_class': 'highlight'},
        'markdown.extensions.extra': {},
        'markdown.extensions.meta': {},
        # This adds id's to each header, up to second header depth
        'markdown.extensions.toc': {'toc_depth': '2'},
    },
    'output_format': 'html5',
}

JINJA_ENVIRONMENT = {
    "trim_blocks": True,
    "lstrip_blocks": True,
    "extensions": [
        'jinja_markdown.MarkdownExtension'
    ]
}

PLUGINS = ['related_posts', 'jinja2content', 'readthedocs_theme.plugins.html_directive']

# Feed (RSS/Atom) settings
FEED_DOMAIN = SITEURL
FEED_ATOM = "feeds/atom.xml"
FEED_MAX_ITEMS = 1
FEED_RSS = None  # No rss
FEED_ALL_ATOM = None  # No translation
TRANSLATION_FEED_ATOM = None  # No translation
AUTHOR_FEED_ATOM = None  # No per author feed
AUTHOR_FEED_RSS = None

# Menu settings
DISPLAY_PAGES_ON_MENU = False
DISPLAY_CATEGORIES_ON_MENU = False
MENUITEMS = [
    ('Blog', '/blog/'),
]
MENUITEMS_CTA = []

# Path settings
PATH = 'content'
PAGE_PATHS = ['pages']
ARTICLE_PATHS = ['posts']
STATIC_PATHS = ['images']

# URL settings
SLUGIFY_SOURCE = "basename"
PAGE_URL = '{slug}/'
PAGE_SAVE_AS = '{slug}/index.html'
ARTICLE_URL = 'blog/{date:%Y}/{date:%m}/{slug}/'
ARTICLE_SAVE_AS = 'blog/{date:%Y}/{date:%m}/{slug}/index.html'
INDEX_SAVE_AS = 'blog/index.html'
# URLs to skip, we don't use these templates yet, and probably don't need them.
AUTHOR_URL = AUTHOR_SAVE_AS = ''
CATEGORY_URL = CATEGORY_SAVE_AS = 'blog/category/{slug}.html'
TAG_URL = TAG_SAVE_AS = 'blog/tag/{slug}.html'
ARCHIVES_SAVE_AS = ''
AUTHORS_SAVE_AS = ''
CATEGORIES_SAVE_AS = ''
TAGS_SAVE_AS = ''

# Blogroll
LINKS = ()

# Social widget
SOCIAL = ()

# Posts settings
DEFAULT_PAGINATION = 8
RELATED_POSTS_MAX = 3
