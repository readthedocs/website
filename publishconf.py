"""
Read the Docs website Pelican configuration for publshing.
"""

import os
import sys

try:
    # Trick isort using a code block to avoid resorting this incorrectly.
    sys.path.append(os.curdir)
    from pelicanconf import *  # noqa: F401,F403
except ImportError:
    raise

# TODO We're still figuring out a URL
# SITEURL = 'https://www.readthedocs.org'
# RELATIVE_URLS = False
DELETE_OUTPUT_DIRECTORY = True

# Feed settings
FEED_ALL_ATOM = 'feeds/all.atom.xml'
CATEGORY_FEED_ATOM = 'feeds/{slug}.atom.xml'
