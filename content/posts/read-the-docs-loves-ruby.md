title: Read the Docs ❤️ Ruby
date: 2024-03-05
category: feature announcement
tags: builders, tools
authors: Manuel Kaufmann
status: published
image: /images/read-the-docs-loves-ruby.jpg
image_credit: Photo by <a href="https://unsplash.com/@jasondeblooisphotography?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Jason D</a> on <a href="https://unsplash.com/photos/selective-focus-photo-of-red-gemstone-VKLJ-BJlszE?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>


We are happy to announce that **support for Ruby is now available** as an option for our pre-defined building tools ([`build.tools`](https://docs.readthedocs.io/en/stable/config-file/v2.html#build-tools)).
Now, projects requiring Ruby to build their documentation are officially supported on Read the Docs 🎉

## Demo project using Jekyll

As an example of a project using Ruby, [here you have a demo of the default blog created by Jekyll](https://test-builds.readthedocs.io/en/jekyll/) built and hosted on Read the Docs.
The following code is the `readthedocs.yaml` configuration file used to build it:


```yaml
version: 2

build:
  os: ubuntu-22.04
  tools:
    ruby: "3.3"
  commands:
    - gem install bundle
    - bundle install
    - jekyll build --destination $READTHEDOCS_OUTPUT/html
```

As you can see, it's pretty simple to use Read the Docs with Ruby
and install dependencies with `gem` and `bundle` following the community standard patterns.


## More documentation tools supported

With the support for Ruby, a new door is opened for projects requiring documentation tools that weren't supported on Read the Docs before,
like [Jekyll](https://jekyllrb.com/), [Asciidoctor](https://asciidoctor.org/), [yard](https://yardoc.org/), [rdoc](https://ruby.github.io/rdoc/), and many others.


## Try it out and give us feedback

We encourage you to give Read the Docs a try if you are using any of these documentation tools,
and take advantage of lot extra features we provide that will empower your documentation workflow,
like [pull request previews](https://docs.readthedocs.io/en/stable/pull-requests.html), among others.

Please, [let us know](mailto:support@readthedocs.com) how was your experience with any of these Ruby documentation tools and if you have any issue in the process.
