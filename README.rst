Read the Docs - community website
=================================

.. note::
    This repository is only for our community website for now. This may change
    in the future.

This repository contains the site content and static assets used to build the
Read the Docs community website. This includes:

A Pelican project for our site content
    This includes our site content as well as our blog.

A Pelican theme and series of templates
    The Pelican configuration uses the theme ``readthedocs_theme``, which
    extends the Pelican ``simple`` theme underneath by default. Webpack builds
    assets directly into the theme path.

A Semantic UI theme specifically for marketing content
    This should mostly be a stock experience, but with some customization for
    marketing content.

Usage
-----

Setting up your environment
~~~~~~~~~~~~~~~~~~~~~~~~~~~

This package uses Poetry to manage dependencies. With Poetry globally installed
on your system, install dependecies with:

.. code-block:: console

    $ poetry install
    $ npm install

.. note::
    You'll want to use ``asdf`` to specify versions of each interpreter. You
    need to be using Node<=14, we can't yet use Node>=15.0. Python 3.6+ should
    work, but 3.10 is the current version used in other repositories.

Local development and authoring
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Webpack handles all of the development hosting and hot reload for the site CSS,
JavaScript, Pelican template, and Pelican content. All you need to execute
locally is:

.. code-block:: console

    $ npm run dev

You can view the built site at: http://localhost:8080/

Any changes to the theme static assets, page/post Markdown source, or our theme
templates will reload the page in the browser. Alternatively, type ``rs<Enter>``
in the Nodemon process to force a Pelican build.

.. note::
    Removing and adding files sometimes is not recognized by Nodemon. You might
    need to restart the ``npm run dev`` command periodically.

Building assets
~~~~~~~~~~~~~~~

For every pull request, assets need to be rebuilt, or the pull request check
will fail.

To generate production CSS and JavaScript assets:

.. code:: console

    $ npm run build

This will create all of the necessary files in ``readthedocs_theme/static/``, as
well as regenerate all of the site content through Pelican.

Linting and formatting
~~~~~~~~~~~~~~~~~~~~~~

Similar to other front end projects, and our Python code, we use automatic
linting and formatting for styling code to a unified format. For CSS/JS, we use
``prettier``, which is opinionated but mostly makes good code style choices.

Linting is required for every pull request, skipping this step can cause the
build to fail if your formatting doesn't match the intended output from
``prettier``.

To run linting checks, which will only report errors:

.. code:: console

    $ npm run lint

To automatically format code:

.. code:: console

    $ npm run format

Authoring content
-----------------

Pages
~~~~~

Pages should be saved under ``content/pages/``. If the pages are heavy in HTML,
the source file should simply be an HTML document instead of reST/Markdown.
By default, pages should use the ``readthedocs_theme/templates/page.html``
template but that can be overridden.

Blog posts
~~~~~~~~~~

Blog posts should be saved under ``content/posts/``.

Style Guide
~~~~~~~~~~~

Our style is loosely based on the `Wikipedia Manual of Style`_.

- Titles use `title case`_.
- Section headings (h2 and below) use sentence case and tend to be
  descriptive/substantive beyond a simple noun.

.. _`Wikipedia Manual of Style`: https://en.wikipedia.org/wiki/Wikipedia:Manual_of_Style
.. _`title case`: https://en.wikipedia.org/wiki/Wikipedia:Manual_of_Style/Titles
