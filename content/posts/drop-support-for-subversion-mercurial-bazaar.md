title: Dropping support for Subversion, Mercurial, and Bazaar
date: 2024-02-19
category: Changelog
tags: builders, deprecation
authors: Manuel Kaufmann
status: published


We are announcing the deprecation of support for Bazaar, Mercurial, and Subversion version control systems starting on **Monday, June 3rd, 2024**.
After this date, only Git repositories will be continue to be supported by our application.

We've made this hard decision because [99% of our projects](https://github.com/readthedocs/readthedocs.org/issues/8840) use Git
and we can't cover the maintenance cost we were spending on Bazaar, Mercurial and Subversion for a handful amount of projects.
Besides, those VCSs are not feature-complete in our platform compared to Git and the service provided is degraded for them.

## Deprecation timeline

We understand this change will affect some of our users, so we have a timeline to communicate this deprecation to our users effectively.

* **Monday, April 1, 2024**: Do the first brownout (temporarily enforce this deprecation) for 12 hours: 00:01 PDT to 11:59 PDT (noon)
* **Monday, May 6, 2024**: Do a second brownout (temporarily enforce this deprecation) for 24 hours: 00:01 PDT to 23:59 PDT (midnight)
* **Monday, May 20, 2024**: Do a third and final brownout (temporarily enforce this deprecation) for 48 hours: 00:01 PDT to May 21, 2024 23:59 PDT (midnight)
* **Monday, June 3, 2024**: Fully remove support for building documentation using “build.image” on the configuration file


## Possible workarounds

Unfortunately, there is no direct workaround on the Read the Docs side that you can follow to keep building your documentation using these VCSs.
However, we consider one of the following options can be worth to consider:


### Convert your repository to Git

You could convert your Subversion or Mercurial repository to Git and then connect the Git repository to your project to continue building your docs.
GitHub has some guides to help you in this process:

  * [Import your Subversion repository](https://docs.github.com/en/migrations/importing-source-code/using-the-command-line-to-import-source-code/importing-a-subversion-repository)
  * [Import your Mercurial repository](https://docs.github.com/en/migrations/importing-source-code/using-the-command-line-to-import-source-code/importing-a-mercurial-repository)


### Create a simple Git repository only clone the original one

If you want to keep using Bazaar, Mercurial or Subversion on your side,
you can create an intermediate Git repository with a `.readthedocs.yaml` file
that clones your original repository and builds your project's documentation.

Here you have a small example using Mercurial to clone the original repository.
*Make sure to adapt this example to your needs*

```yaml
version: 2

build:
  os: ubuntu-22.04
  tools:
    python: "3.12"
  commands:
    - hg clone https://original.mercurial.vcs/respository/
    - pip install -r repository/docs/requirements.txt
    - mkdir $READTHEDOCS_OUTPUT/html
    - sphinx-build -b html repository/docs $READTHEDOCS_OUTPUT/html
```

This could be a good starting point, but note that you will also need to configure the incoming webhooks manually on the original repository,
if you want to trigger a build each time a push is done to the original repository.
[Follow this guide](https://docs.readthedocs.io/en/stable/guides/setup/git-repo-manual.html) to achieve this.


## Contact us

[Contact us](https://readthedocs.org/support/) if you have any questions,
and let us know if you are having trouble using a this new config key for any reason.
