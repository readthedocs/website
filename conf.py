# This is mostly a hack to bail out of Sphinx

import sys

project = 'site-communtiy'
copyright = '2022, Test'
author = 'Test'

extensions = []


def setup(app):
    sys.exit(0)
