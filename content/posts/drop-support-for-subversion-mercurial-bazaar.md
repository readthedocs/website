title: Dropping support for Subversion, Mercurial, and Bazaar
date: 2024-02-22
category: Changelog
tags: builders, deprecation
authors: Manuel Kaufmann
status: published
image: /images/drop-support-for-subversion-mercurial-bazaar.jpg
image_credit: Photo by <a href="https://unsplash.com/@redmirror?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Red Mirror</a> on <a href="https://unsplash.com/photos/wall-with-paints-f303VzauP6w?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>


We are announcing the deprecation of support for Bazaar, Mercurial, and Subversion version control systems starting on **Monday, June 3rd, 2024**.
After this date, only Git repositories will be continue to be supported by our application.

We've made this hard decision because [99% of our projects](https://github.com/readthedocs/readthedocs.org/issues/8840) use Git
and we can't cover the product complexity, documentation complexity, and maintenance cost we were spending on Bazaar, Mercurial and Subversion for a small number of projects.
Our platform has long had fewer features for VCS systems other than Git,
slowly adding confusion to our product,
and slowing down the features we could build for the vast majority of our users on Git.

## Deprecation timeline

We understand this change will affect some of our users, so we have a timeline to communicate this deprecation to our users effectively.

* **Monday, April 1, 2024**: Do the first brownout (temporarily enforce this deprecation) for 12 hours: 00:01 PDT to 11:59 PDT (noon)
* **Monday, May 6, 2024**: Do a second brownout (temporarily enforce this deprecation) for 24 hours: 00:01 PDT to 23:59 PDT (midnight)
* **Monday, May 20, 2024**: Do a third and final brownout (temporarily enforce this deprecation) for 48 hours: 00:01 PDT to May 21, 2024 23:59 PDT (midnight)
* **Monday, June 3, 2024**: Fully remove support for building documentation using Subversion, Mercurial or Bazaar VCSs.


## Possible workarounds

To continue building your project, you could consider one of the following options:


### Convert your repository to Git

You could convert your Subversion or Mercurial repository to Git and then connect the Git repository to your project to continue building your docs.
GitHub has some guides to help you in this process:

  * [Import your Subversion repository](https://docs.github.com/en/migrations/importing-source-code/using-the-command-line-to-import-source-code/importing-a-subversion-repository)
  * [Import your Mercurial repository](https://docs.github.com/en/migrations/importing-source-code/using-the-command-line-to-import-source-code/importing-a-mercurial-repository)


### Create an intermediate Git repository only for initial clone


If you cannot use Git for your documentation repository,
an intermediate Git repository could at least allow your project to build.
Understand however that this is not a supported configuration and
many of our features may not work (e.g. versions) or might require extra setup steps.

This intermediate repository should contain a `.readthedocs.yaml` file
that clones your original repository and builds your project's documentation.

Here you have a small example using Mercurial to clone the original repository.
*Make sure to adapt this example to your needs*

```yaml
version: 2

build:
  os: ubuntu-22.04
  tools:
    python: "3.12"
  jobs:
    post_checkout:
      - hg clone https://original.mercurial.vcs/respository/ .

sphinx:
  configuration: docs/conf.py
```

This could be a starting point, but note that you will also need to configure the incoming webhooks manually on the original repository,
if you want to trigger a build each time a push is done to the original repository.
[Follow this guide](https://docs.readthedocs.io/en/stable/guides/setup/git-repo-manual.html) to achieve this.


## Contact us

[Contact us](https://app.readthedocs.org/support/) if you have any questions,
and let us know any inconvenient you may have with this change.
