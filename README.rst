Read the Docs - community website
=================================

.. note::
    This repository is only for our community website for now. This may change
    in the future.

This repository contains the site content and static assets used to build the
Read the Docs community website. This includes (or will include in the future):

A Pelican project for our site content
    This is coming soon, but is not configured yet.

A Pelican theme and series of templates
    This is also coming soon, but will not be configured until we've laid out
    the base HTML with SUI a bit further.

A Semantic UI theme specifically for marketing content
    This should mostly be a stock experience, but with some customization for
    marketing content.

Updating site content
---------------------

Not so fast, partner. We're not yet authoring content here.

Updating the site styles
------------------------

A few things first:

* You need to be using Node<=14, we can't yet use Node>=15.0
* You might need ``npm`` version 6.x, this should come standard with Node 14
* It's worth knowing that some of this work is forked from ``ext-theme`` and
  will be combined at some point to shared the ``rtd-common`` SUI theme in this
  repository. Be gentle with the Webpack configuration and files in ``src/sui``
  as we don't want these to start deviating too far from the source files.

Getting set up
~~~~~~~~~~~~~~

First, use ``nodenv`` to set up a specific Node version for this repository.

When you have the correct dependencies, run ``npm install`` to install
dependencies.

You should be able to execute the various npm commands below at this point.

Running the development server
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

You can run the development server with::

.. code:: console

    $ npm run dev

This does everything you need to get started, and should bring up an instance at
http://localhost:8080/

You can view some of the test HTML on the development server as well, for
example http://localhost:8080/examples/theme/

Build production assets
~~~~~~~~~~~~~~~~~~~~~~~

We're not currently using these yet, but these will eventually be checked in to
the repository as part of our Pelican theme.

To generate production CSS and JavaScript assets:

.. code:: console

    $ npm run build

This will create all of the necessary files in ``dist/``.
