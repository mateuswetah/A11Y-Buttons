=== A11y Buttons ===
Author:            wetah, The WordPress Contributors 
Tags:              block, a11y, accessibility
Tested up to:      6.0
Requires at least: 6.0
Stable tag:        0.1.0
License: GPLv2 or later
License URI: http://www.gnu.org/licenses/gpl-3.0.html

A basic list of buttons that may be used to improve your website accessibility

== Description ==

This plugin enables an *A11Y Buttons* block, which contains some common accessibility buttons that you usually find in a website's top header. The idea is to provide a simple way to have them inserted in any part of your theme and keep them fully customizable so they can match your design and still offer the required features.

The buttons available are:

* Skip-to-content button - Add a link to any anchored part of your website. You can create and set as many as you want;
* Contrast mode toggle - Enable a stylesheet with extremely high contrast;
* Increase/decrease/restore font-size - Change your website's root font size. Check the F.A.Q. section about its usage.

All of the buttons have the following features:

* Order, alignment, spacing and overall layout are fully customizable;
* Text formatting, font size, text and background color, borders - if the theme supports it;
* Accesskey - define a keyboard shortcut via a single character so the user can easily focus a button;
* Enabling or disabling the default icons, moving them to the left or right,

*We understand that accessibility is a huge topic and that no solution is perfect. We also are by no means "experts" on the subject, so if you have any critics or suggestions, please make contact!*

**Want to contribute? Great! Feel free to [open an issue](https://github.com/mateuswetah/A11Y-Buttons/issues/new/choose "The GitHub repository of this plugin.") or [make a pull request](https://github.com/mateuswetah/A11Y-Buttons/pulls "The GitHub repository of this plugin.").**

== Installation ==

This section describes how to install the plugin and get it working.

e.g.

1. Upload the plugin files to the `/wp-content/plugins/a11y-buttons` directory, or install the plugin through the WordPress plugins screen directly.
1. Activate the plugin through the 'Plugins' screen in WordPress


== Frequently Asked Questions ==

= Why aren't the buttons working in the editor? =

To avoid conflicts that could break the editor experience, we opted to make the buttons interactive only on the published page, that is, outside the editor. This is valid for all the buttons, except for the Skip to link.

= Why aren't all my fonts scaling with the Increase/Decrease buttons? =

This plugin uses a strategy of updating the HTML root font-size only. This means that your fonts will only respond to changes if they are set in CSS relative units, such as `rem`. Other plugins achieve scaling by an "opinionated" strategy of setting different font sizes to different elements in the inner HTML tags. While we would recommend you to work with relative units, we also believe it is valid to discuss that...

= Do I *really* need to offer font Increase/Decrease buttons to my users? =

This is a valid discussion as nowadays, each Browser dedicated Zoom feature can handle scaling much better, no matter which CSS unit you are using. Often, if your site has decent mobile responsiveness, its layout will be nice in a Browser-zoomed scenario. However, one can argue that the fact that everything is scaled (including images) pollutes much of the relevant, readable content. In the end, it is a topic that we are not 100% sure about and would love to find more research related to it. 

= How do I set my skip link to a specific part of my site? =

Skip links should use HTML anchor navigation, which is done via IDs. If the ID is not set in the code, you can configure it via a block. To set an anchor to a search bar, for example, select its block in the site editor and scroll to the Advanced section in the block settings tab. Most blocks have an area there to define an anchor. You can then define it as `search-bar-area` and then type `#search-bar-area` as your link in the button block settings.

= Why is my Skip to Link button styled differently from the other buttons? =

Internally, the Skip to link button is an anchor (`<a>`) tag, as its role is related to navigation. The other ones are actual `<button>` tags as they perform actions and not linking. You may use the block formatting and settings to make them similar to each other.

= What is and how to test the Accesskey? =

Accesskey is an HTML feature for navigating via focus on different elements using keyboard shortcuts. You can learn about it [here](https://html.spec.whatwg.org/multipage/interaction.html#the-accesskey-attribute "The HTML spec documentation for accesskey"). Sadly, each Browser/OS implements its shortcut differently but can check the possible values [here](https://developer.mozilla.org/pt-BR/docs/Web/HTML/Global_attributes/accesskey "MDN list of current shortcuts used by accesskey."). So for example, if you set your Skip to content button to the Search input and defined the Accesskey as `s` (should be only one character), a user on Firefox on Windows or Linux will be able to quickly set focus to this button by pressing `ALT` + `SHIFT` + `s`.

= How are my preferences stored? =

We keep track of font-size and contrast toggle state preferences across pages using [sessionStorage](https://developer.mozilla.org/pt-BR/docs/Web/API/Window/sessionStorage "MDN documentation for the browser sessionStorage").

== Screenshots ==

1. The A11Y Buttons parent block, which accept different buttons inside it with layout settings and icon display options.
2. A "Skip to content" button selected, with a link to `#content` and accesskey `c`;
3. The published page view, with the accessibilty buttons;
4. High contrast mode activated;
5. Font size increased;
6. Font size decreased;

== Changelog ==

= 0.1.0 =
* Initial - quite experimental - release, featuring constrast toggle, font size tweak and skip to link buttons.

