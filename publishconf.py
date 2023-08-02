"""
Read the Docs website Pelican configuration for publishing.
"""

import os
import sys

# Trick isort using a code block to avoid resorting this incorrectly.
sys.path.append(os.curdir)
from pelicanconf import *  # noqa: F401,F403

SITEURL = 'https://about.readthedocs.com'
RELATIVE_URLS = False

# Generate from scratch when building for production
DELETE_OUTPUT_DIRECTORY = True

# Feed settings
FEED_ALL_ATOM = 'feeds/all.atom.xml'
CATEGORY_FEED_ATOM = 'feeds/{slug}.atom.xml'
