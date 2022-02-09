Sphinx 4.4 release and other ecosystem news
###########################################

:date: January 26, 2022
:tags: sphinx, release
:authors: Juan Luis
:description: In this post we talk about the latest release of Sphinx 4.4 and include other relevant news from the Sphinx ecosystem of extensions and themes.
:image: 
:image_credit:

In this post we spread the word about
the most relevant news of the Sphinx ecosystem of the past weeks,
including Sphinx itself as well as extensions and themes developed by the community.

Sphinx 4.4 release
------------------

**Sphinx 4.4** was released on January 17th with numerous changes, including:

Better control of intersphinx references with the ``:external:`` role
   One of the power features of Sphinx is the ability to include
   cross references across projects, using ``:std:doc:`` `intersphinx <sphinx:usage/extensions/intersphinx>`.
   By default, Sphinx transparently attempts to locate objects in external projects
   if they are not found in the current one,
   which is useful but also can become confusing in some cases.
   The new ``:rst:role:`` `external` role, coupled with the
   `intersphinx_disabled_reftypes <https://www.sphinx-doc.org/en/master/usage/extensions/intersphinx.html#confval-intersphinx_disabled_reftypes>`_
   configuration introduced in Sphinx 4.3,
   enables documentation writers to control
   when intersphinx references should be used.

   You can use the new ``:external:`` role as follows:

   .. code-block:: rst

      External reference: ``:external:py:class:`` `zipfile.ZipFile`.
      External reference with constrained domain lookup: ``:external+python:py:class:`` `zipfile.ZipFile`.

   See more information in ``:rst:role:`` `the official documentation <external>`.

New asynchronous methods to load JavaScript files
   The method ``:py:meth:`` `sphinx:sphinx.application.Sphinx.add_js_file`
   now accepts a new ``loading_method`` parameter that can either be ``"async"`` or ``"defer"``,
   which results in the script being loaded with the
   `async <https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script#attr-async>`_ or
   `defer <https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script#attr-defer>`_
   HTML attributes respectively.

Proper error messages when autosummary does not find a package
   Sphinx ships the ``:std:doc:`` `autosummary <sphinx:usage/extensions/autosummary>` extension
   to automatically generate API pages of a Python library.
   However, autosummary used to raise misleading error messages if the target library failed to import,
   which resulted in user frustration.
   This problem has now been fixed and autosummary properly points out the reason of the ``ImportError``.

You can read the `complete Sphinx 4.4.0 release
notes <https://www.sphinx-doc.org/en/master/changes.html#release-4-4-0-released-jan-17-2022>`_ online.

Using Sphinx 4.4 on Read the Docs
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Sphinx 4.4 is supported on Read the Docs. By default, RTD will install the latest version for you,
as described in ``:ref:`` `our documentation <readthedocs:builds:external dependencies>`.
If you are ``:ref:`` `pinning your dependencies <readthedocs:guides/reproducible-builds:pinning dependencies>`
to improve the reproducibility of your builds,
you can change the pinned version to ``sphinx==4.4.0``
in either your ``requirements.txt`` or ``environment.yml``.

Sphinx themes and extensions
----------------------------

Several other extensions and themes saw new releases recently, including:

`pydata-sphinx-theme 0.8 <https://github.com/pydata/pydata-sphinx-theme/releases/tag/v0.8.0>`_
   pydata-sphinx-theme is a Sphinx theme based on Bootstrap CSS developed by the PyData community,
   The Read the Docs team collaborated with the developers
   to make some of the new features of 0.8 behave correctly in our platform, in particular
   `the custom version
   switcher <https://pydata-sphinx-theme.readthedocs.io/en/latest/user_guide/configuring.html#add-a-dropdown-to-switch-between-docs-versions>`_.
   As `Chris Holdgraf summarizes in this Twitter
   thread <https://twitter.com/choldgraf/status/1482435411301449729>`_,
   the new version brings other interesting additions,
   like `better depth control of the left
   sidebar <https://pydata-sphinx-theme.readthedocs.io/en/latest/user_guide/configuring.html#navigation-depth-and-collapsing-of-the-sidebar>`_
   and `custom SVG
   icons <https://pydata-sphinx-theme.readthedocs.io/en/latest/user_guide/configuring.html#local-image-icons>`_.

`sphinx-codeautolink 0.9 <https://sphinx-codeautolink.readthedocs.io/en/stable/release_notes.html#id2>`_
   sphinx-codeautolink is a Sphinx extension to automatically include links inside code blocks.
   The 0.9 version now links Python builtin objects if intersphinx is properly configured
   and has several logging improvements.
 
   .. figure:: /img/sphinx-codeautolink.gif
      :align: center
      :alt: Demo of sphinx-codeautolink
 
      Demo of sphinx-codeautolink

`sphinxcontrib-constdata 1.0 <https://documatt.gitlab.io/sphinxcontrib-constdata/>`_
   sphinxcontrib-constadata is a new Sphinx extension that allows documentation writers to
   easily load data stored in CSV, JSON, and YAML files.
   For example, it can be used to load UI labels (button labels, menu selection labels)
   from external files instead of hardcoding them in the documentation for better maintenance,
   for example:
 
   .. code-block:: rst
 
      Choose menu item ``:constdata:label:`` `menu.yaml?FileSaveAs`.

Upcoming
--------

The Executable Books Project team is working on several exciting things around MyST,
including `the upcoming MyST-Parser 0.17 release <https://github.com/executablebooks/MyST-Parser/pull/507>`_
and `direct integration with Jupyter notebooks <https://twitter.com/choldgraf/status/1485666900784730112>`_.

.. figure:: /img/jupyter-myst.gif
   :align: center
   :alt: Preview of MyST integrated in Jupyter notebooks.

   Preview of MyST integrated in Jupyter notebooks.

We are excited about seeing new and old Sphinx extensions being developed by the community,
and we thank the Sphinx maintainers for their excellent work.

----

Considering using Read the Docs for your next Sphinx?
Check out `our documentation <https://docs.readthedocs.io/>`_ to get started!