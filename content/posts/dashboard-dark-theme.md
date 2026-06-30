title: Dashboard dark theme
date: 2026-07-01
description: We recently released new theme options for our dashboard, including a dark theme. Learn how you can start using them.
category: Feature announcement
tags: features
authors: Anthony Johnson
status: published
image: /images/posts/dashboard-dark-theme/header.jpg
image_credit: <a href="https://www.nasa.gov/image-detail/amf-art002e009282/" target="_blank">Shadows Across Vavilov Crater</a> by NASA and the Artemis II crew

Several weeks ago, we introduced and began testing a dark theme option for our dashboard.
This added an option for controlling the dashboard theme
which now lets users select between the standard light theme, our new dark theme,
or letting the system or browser decide which of those themes to use.

If you are like us and use Read the Docs throughout your day,
and especially if you work in dim lighting,
you might also have found yourself wanting a dark theme option for our dashboard.
The new dark theme restyles the majority of the dashboard,
with some additional improvements already planned.
Users can select to use the dark theme for their account,
however it is only active while logged in.
Logged out users will always use the standard light theme.

![Application dashboard showing the details of a successful project build](/images/posts/dashboard-dark-theme/build.png)

These changes are now all released
and you can switch between any of these theme options in your account settings.
The options available for the dashboard theme preference are:

- **Light theme**, always use the default and existing dashboard theme.
- **Dark theme**, always use the dark theme.
- **Use system theme**, automatically select the correct theme based on your browser or system display preferences.

<div class="ui raised segment">

  <div class="ui small header">Changing the dashboard theme</div>

  <p>
    To switch your dashboard theme for the Read the Docs dashboard,
    visit the dashboard preferences in your account settings:
  </p>

  <div class="ui basic fitted segment">
    <readthedocs-platform-chooser next="/accounts/preferences/">
      <div class="ui basic fitted center aligned segment">
        <button class="ui teal button">
          Open account dashboard preferences
          <i class="fas fa-external-link icon"></i>
        </button>
      </div>
    </readthedocs-platform-chooser>
  </div>

  <p class="ui small text">
    You can find the theme setting in your account settings page.
    To get there, expand the <b>user profile menu at the top of the page</b> and select <b>Settings</b>,
    then go to the <b>Dashboard</b> page under <b>Preferences</b>.
  </p>

</div>

As always, <readthedocs-platform-chooser next="/support"><a href="#_">open a support request</a></readthedocs-platform-chooser>
to let us know what you think or [open an issue](https://github.com/readthedocs/readthedocs.org/issues) if you hit any rough edges.
