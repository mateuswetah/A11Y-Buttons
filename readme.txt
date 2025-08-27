=== A11y Buttons ===
Author:            wetah, The WordPress Contributors 
Tags:              block, a11y, accessibility
Tested up to:      6.8
Requires at least: 6.4
Stable tag:        0.4.0
License: GPLv2 or later
License URI: http://www.gnu.org/licenses/gpl-3.0.html

A basic list of buttons that may be used to improve your website accessibility

== Description ==

This plugin enables an *A11Y Buttons* block, which contains some common accessibility buttons that you usually find in a website's top header. The idea is to provide a simple way to have them inserted in any part of your theme, without adding overlays and keep them fully customizable so they can match your design and still offer the required features.

The buttons available are:

* Skip-to-content button - Add a link to any anchored part of your website. You can create and set as many as you want;
* Contrast mode toggle - Enable a stylesheet with extremely high contrast;
* Readable font toggle - Forces usage of the [Atkinson Hyperlegible Font](https://brailleinstitute.org/freefont "Braille Institute page about the Atkinson font") for better readability;
* Increase/decrease/restore font-size - Change your website's root font size. Check the F.A.Q. section about its usage.

All of the buttons have the following features:

* Order, alignment, spacing and overall layout are fully customizable;
* Text formatting, font size, text and background color, borders - if the theme supports it;
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

Internally, the Skip to link button is an anchor (`<a>`) tag, as its role is related to navigation. The other ones are actual `<button>` tags as they perform actions and not as linking. You may use the block formatting and settings to make them similar to each other.

= How are my preferences stored? =

The plugin keeps track of font-size and contrast toggle state preferences across pages using [sessionStorage](https://developer.mozilla.org/pt-BR/docs/Web/API/Window/sessionStorage "MDN documentation for the browser sessionStorage"). Make sure to warn your users if you feel that can be sensible.

= Can I have accesskey on each button? =

Originally, we planned to have a simple feature to add `accesskey` to each button. After reading [this](https://webaim.org/techniques/keyboard/accesskey#spec "WebAIM article about accesskey"), we gave up.

= Can I invert the color of an image in High Contrast mode? =

Yes! If you have an image like a monochromatic logo that would make sense to be inverted, add the class `a11y-invert-on-contrast-mode` to it so it can be inverted.

= Can you please explain me better the "Asset Loading Method" option in Admin → Settings → A11Y Buttons? =

I know, it is a bit confusing and advanced topic. If you keep the default ("On-Demand Loading"), a small JS script will always be loaded in your website. This script will be responsible for detecting the presence of A11Y Buttons, add interactivity for them and, when needed, enqueue CSS assets like the ones used by High Contrast and Readable Font buttons. The idea is that the style is only inserted in the HTML header if the button is clicked. It also works if you used not the Gutenberg block but a simple HTML markup to mimic the block. However, this has a performance issue: the CSS are not cacheable. By using the second option ("Block Detection Loading") we leverage the entire assets enqueue job to WordPress. If it detects a buttons block in that page it will load both the JS script and the CSS files. This allow them to be cacheable. The disadvantage is that all CSS will be loaded even if a certain button is not used... but keep in mind that they are really small. This also won't work for the rare scenarios where you are building your HTML markup by hand instead of using blocks.  

== Screenshots ==

1. The A11Y Buttons parent block, which accepts different buttons inside it with layout settings and icon display options.
2. A "Skip to content" button selected;
3. The published page view, with the accessibility buttons on top;
4. High contrast mode activated;
5. Font size increased;
6. Font size decreased;

== Changelog ==

= 0.4.0 =
* Creates option in the settings page to define custom CSS to be used in the High Contrast mode.

= 0.3.0 =
* Creates plugin settings page.
* Adds option to tweak Loading Assets Strategy, allowing for a more cacheable solution.

= 0.2.0 =
* Adds "Readable font" button with [Atkinson Hyperlegible Font](https://brailleinstitute.org/freefont "Braille Institute page about the Atkinson font"); 
* Adds class `a11y-invert-on-contrast-mode` to images and figures that you wish to have color inverted on contrast mode.

= 0.1.2 =
* Fixes contrast mode css path;
* Proper cursor when hovering buttons; 

= 0.1.1 =
* Better build workflow;
* Constrast mode css only loaded when needed; 

= 0.1.0 =
* Initial - quite experimental - release, featuring contrast toggle, font size tweak and skip to link buttons.

== Copyright ==

A11y Buttons plugin, Copyright 2022 wetah
A11y Buttons plugin is distributed under the terms of the GNU GPLv3
License details: https://github.com/mateuswetah/A11Y-Buttons/blob/main/LICENSE

A11y Buttons plugin bundles the following third-party resource:

Atkinson Hyperlegible Font Copyright 2020 Braille Institute
License details: http://brailleinstitute.org/wp-content/uploads/2020/11/Atkinson-Hyperlegible-Font-License-2020-1104.pdf
Source: https://brailleinstitute.org/freefont
