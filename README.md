# A11Y Buttons - WordPress/Gutenberg plugin

> A basic list of buttons that may be used to improve your website accessibility.

## What is this about?

This plugin enables an _A11Y Buttons_ block, which contains some common accessibility buttons that you usually find in a website's top header. The idea is to provide a simple way to have them inserted in any part of your theme, without adding overlays and keep them fully customizable so they can match your design and still offer the required features.

The buttons available are:

-   **Skip-to-content button** - Add a link to any anchored part of your website. You can create and set as many as you want;
-   **Contrast mode toggle** - Enable a stylesheet with extremely high contrast;
-   **Increase/decrease/restore font-size** - Change your website's root font size. Check the F.A.Q. section about its usage.

All of the buttons have the following features:

-   Order, alignment, spacing and overall layout are fully customizable;
-   Text formatting, font size, text and background color, borders - if the theme supports it;
-   Enabling or disabling the default icons, moving them to the left or right,

_We understand that accessibility is a huge topic and that no solution is perfect. We also are by no means "experts" on the subject, so if you have any critics or suggestions, please make contact!_

**Want to contribute? Great! Feel free to [open an issue](https://github.com/mateuswetah/A11Y-Buttons/issues/new/choose "The GitHub repository of this plugin.") or [make a pull request](https://github.com/mateuswetah/A11Y-Buttons/pulls "The GitHub repository of this plugin.").**

## Building

If you are a developer and want to contribute to the project, you'll be pleased to know that we are using [wp-scrips](https://developer.wordpress.org/block-editor/reference-guides/packages/packages-scripts/ "@wordpress/scripts documentation"), which makes things much easier. As long as you have Node.js 14.0.0 or later, and npm 6.14.4 or later, you can use:

For a quick, hot-reloadable development build:

```
npm run start
```

For a production build:

```
npm run build
```

For making sure we're following best practices and format:

```
npm run format
npm run lint:css
npm run lint:js
```

For creating a `.zip` ready to be installed in your WordPress with only the necessary files:

```
npm run plugin-zip
```

### Folder Structure

As a developer, your work should be done inside the `src` folder. It contains:

-   The parent block files inside `blocks/a11y-buttons` folder;
-   The buttons blocks (every variant) inside the `blocks/a11y-button` folder;
-   The script and styles loaded on the theme, public side of the page to make the buttons work inside the `frontend` folder;

## F.A.Q.

### Why aren't the buttons working in the editor?

To avoid conflicts that could break the editor experience, we opted to make the buttons interactive only on the published page, that is, outside the editor. This is valid for all the buttons, except for the Skip to link.

### Why aren't all my fonts scaling with the Increase/Decrease buttons?

This plugin uses a strategy of updating the HTML root font-size only. This means that your fonts will only respond to changes if they are set in CSS relative units, such as `rem`. Other plugins achieve scaling by an "opinionated" strategy of setting different font sizes to different elements in the inner HTML tags. While we would recommend you to work with relative units, we also believe it is valid to discuss that...

### Do I _really_ need to offer font Increase/Decrease buttons to my users?

This is a valid discussion as nowadays, each Browser dedicated Zoom feature can handle scaling much better, no matter which CSS unit you are using. Often, if your site has decent mobile responsiveness, its layout will be nice in a Browser-zoomed scenario. However, one can argue that the fact that everything is scaled (including images) pollutes much of the relevant, readable content. In the end, it is a topic that we are not 100% sure about and would love to find more research related to it.

### How do I set my skip link to a specific part of my site?

Skip links should use HTML anchor navigation, which is done via IDs. If the ID is not set in the code, you can configure it via a block. To set an anchor to a search bar, for example, select its block in the site editor and scroll to the Advanced section in the block settings tab. Most blocks have an area there to define an anchor. You can then define it as `search-bar-area` and then type `#search-bar-area` as your link in the button block settings.

### Why is my Skip to Link button styled differently from the other buttons?

Internally, the Skip to link button is an anchor (`<a>`) tag, as its role is related to navigation. The other ones are actual `<button>` tags as they perform actions and not as linking. You may use the block formatting and settings to make them similar to each other.

### How are my preferences stored?

The plugin keeps track of font-size and contrast toggle state preferences across pages using [sessionStorage](https://developer.mozilla.org/pt-BR/docs/Web/API/Window/sessionStorage "MDN documentation for the browser sessionStorage"). Make sure to warn your users if you feel that can be sensible.

### Can I have accesskey on each button?

Originally, we planned to have a simple feature to add `accesskey` to each button. After reading [this](https://webaim.org/techniques/keyboard/accesskey#spec "WebAIM article about accesskey"), we gave up.
