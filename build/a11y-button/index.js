/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/a11y-button/edit.js":
/*!*********************************!*\
  !*** ./src/a11y-button/edit.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Edit; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./icons */ "./src/a11y-button/icons.js");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./editor.scss */ "./src/a11y-button/editor.scss");


/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */






/**
 * Internal dependencies
 */



/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */

function Edit(_ref) {
  var _attributes$style, _attributes$style$bor, _attributes$style2, _attributes$style2$ty;

  let {
    attributes,
    setAttributes,
    context,
    className
  } = _ref;
  const borderProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.__experimentalUseBorderProps)(attributes);
  const colorProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.__experimentalUseColorProps)(attributes);
  const spacingProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.__experimentalGetSpacingClassesAndStyles)(attributes);
  const buttonClasses = classnames__WEBPACK_IMPORTED_MODULE_1___default()(className, colorProps.className, borderProps.className, {
    // For backwards compatibility add style that isn't
    // provided via block support.
    'no-border-radius': ((_attributes$style = attributes.style) === null || _attributes$style === void 0 ? void 0 : (_attributes$style$bor = _attributes$style.border) === null || _attributes$style$bor === void 0 ? void 0 : _attributes$style$bor.radius) === 0
  });
  const buttonStyle = { ...borderProps.style,
    ...colorProps.style,
    ...spacingProps.style
  };
  const wrapperClasses = classnames__WEBPACK_IMPORTED_MODULE_1___default()(className, {
    [`has-custom-font-size`]: attributes.fontSize || ((_attributes$style2 = attributes.style) === null || _attributes$style2 === void 0 ? void 0 : (_attributes$style2$ty = _attributes$style2.typography) === null || _attributes$style2$ty === void 0 ? void 0 : _attributes$style2$ty.fontSize)
  });
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.useBlockProps)({
    className: wrapperClasses
  });
  const iconDisplay = context['a11yButtons/iconDisplay'] ? context['a11yButtons/iconDisplay'] : 'left';
  if (iconDisplay != attributes.iconDisplay) setAttributes({
    iconDisplay: iconDisplay
  });

  function getDefaultSVGIcon() {
    switch (attributes.action) {
      case 'toggle-high-contrast':
        return _icons__WEBPACK_IMPORTED_MODULE_5__.toggleHighContrastIcon;

      case 'increase-font-size':
        return _icons__WEBPACK_IMPORTED_MODULE_5__.increaseFontSizeIcon;

      case 'decrease-font-size':
        return _icons__WEBPACK_IMPORTED_MODULE_5__.decreaseFontSizeIcon;

      case 'reset-font-size':
        return _icons__WEBPACK_IMPORTED_MODULE_5__.resetFontSizeIcon;

      case 'skip-to-content':
        return _icons__WEBPACK_IMPORTED_MODULE_5__.skipToContentIcon;

      default:
        return null;
    }
  }

  function getProvisoryAltText() {
    switch (attributes.action) {
      case 'toggle-high-contrast':
        return (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Toggle high contrast', 'a11y-buttons');

      case 'increase-font-size':
        return (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Increase font size', 'a11y-buttons');

      case 'decrease-font-size':
        return (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Decrease font size', 'a11y-buttons');

      case 'reset-font-size':
        return (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Reset font size', 'a11y-buttons');

      case 'skip-to-content':
        return (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Skip to content', 'a11y-buttons');

      default:
        return null;
    }
  }

  function setAccessKey(value) {
    if (value == '' || value.match(/^([0-9]|[a-z]){1}$/i)) setAttributes({
      accessKey: value
    });
  }

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InspectorControls, null, attributes.action == 'skip-to-content' ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Skip to link', 'a11y-buttons')
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Link on page to inner content', 'a11y-buttons'),
    value: attributes.link,
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('The link here should point to a HTML anchor, usually defined by and ID and preppended by "#".', 'a11y-buttons'),
    onChange: value => setAttributes({
      link: value
    })
  })) : null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Access key', 'a11y-buttons')
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Access key shortcut', 'a11y-buttons'),
    value: attributes.accessKey,
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Access key is a single alphanumeric character that, combined with your browser access key shortcut, will help users quickly focus on this button via keyboard navigation. WARNING: Make sure the accesskey values are unique across the page and do not use conflicting shortcuts!', 'a11y-buttons'),
    onChange: setAccessKey
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", blockProps, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Button, {
    href: attributes.action == 'skip-to-content' ? attributes.link : undefined,
    type: "button",
    accessKey: attributes.accessKey ? attributes.accessKey : null,
    "aria-label": !attributes.content ? getProvisoryAltText() : null,
    "data-action": attributes.action,
    className: buttonClasses,
    style: buttonStyle
  }, iconDisplay == 'left' ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Icon, {
    icon: () => getDefaultSVGIcon()
  }) : null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.RichText, {
    withoutInteractiveFormatting: true,
    tagName: "span",
    value: attributes.content,
    allowedFormats: ['core/bold', 'core/italic', 'core/image', 'core/text-color', 'core/underline', 'core/keyboard', 'core/subscript', 'core/supercript', 'core/code'] // Allow the content to be made bold or italic, but do not allow other formatting options
    ,
    onChange: content => setAttributes({
      content
    }),
    className: "a11y-button-text",
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Type in a clear label', 'a11y-buttons')
  }), iconDisplay == 'right' ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Icon, {
    icon: () => getDefaultSVGIcon()
  }) : null))));
}

/***/ }),

/***/ "./src/a11y-button/icon.js":
/*!*********************************!*\
  !*** ./src/a11y-button/icon.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

const {
  SVG,
  Path
} = wp.components;
/* harmony default export */ __webpack_exports__["default"] = ((0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Path, {
  d: "M0 0h24v24H0z",
  fill: "none"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Path, {
  d: "M20.5 6c-2.61.7-5.67 1-8.5 1s-5.89-.3-8.5-1L3 8c1.86.5 4 .83 6 1v13h2v-6h2v6h2V9c2-.17 4.14-.5 6-1l-.5-2zM12 6c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"
})));

/***/ }),

/***/ "./src/a11y-button/icons.js":
/*!**********************************!*\
  !*** ./src/a11y-button/icons.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "decreaseFontSizeIcon": function() { return /* binding */ decreaseFontSizeIcon; },
/* harmony export */   "increaseFontSizeIcon": function() { return /* binding */ increaseFontSizeIcon; },
/* harmony export */   "resetFontSizeIcon": function() { return /* binding */ resetFontSizeIcon; },
/* harmony export */   "skipToContentIcon": function() { return /* binding */ skipToContentIcon; },
/* harmony export */   "toggleHighContrastIcon": function() { return /* binding */ toggleHighContrastIcon; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

const {
  SVG,
  Path
} = wp.components;
const toggleHighContrastIcon = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  fill: "currentColor",
  height: "1em",
  width: "1em",
  viewBox: "0 0 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Path, {
  d: "m0 12c0 6.6274 5.3726 12 12 12 6.6274 0 12-5.3726 12-12 0-6.6274-5.3726-12-12-12-6.6274 0-12 5.3726-12 12zm12 8.9032v-17.806c4.9212 0 8.9032 3.9828 8.9032 8.9032 0 4.9212-3.9828 8.9032-8.9032 8.9032z",
  "stroke-width": "2.1429"
}));
const decreaseFontSizeIcon = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  fill: "currentColor",
  height: "1.25em",
  width: "1.25em",
  viewBox: "0 0 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Path, {
  d: "m3.0061 18.634h-3.0061l4.5804-13.268h3.6151l4.5739 13.268h-3.0061l-3.3235-10.236h-0.10367zm-0.18788-5.2153h7.1006v2.1898h-7.1006zm12.008-0.23323v-2.3193h9.1737v2.3193z",
  "stroke-width": "1.5203"
}));
const increaseFontSizeIcon = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  fill: "currentColor",
  height: "1.25em",
  width: "1.25em",
  viewBox: "0 0 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Path, {
  d: "m3.0061 18.634h-3.0061l4.5804-13.268h3.6151l4.5739 13.268h-3.0061l-3.3235-10.236h-0.10367zm-0.18788-5.2153h7.1006v2.1898h-7.1006zm15.435 3.194v-9.1737h2.3194v9.1737zm-3.4272-3.4272v-2.3193h9.1737v2.3193z",
  "stroke-width": "1.5203"
}));
const resetFontSizeIcon = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  fill: "currentColor",
  height: "1.25em",
  width: "1.25em",
  viewBox: "0 0 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Path, {
  d: "m8.6214 18.634h-3.0061l4.5804-13.268h3.6151l4.5739 13.268h-3.0061l-3.3235-10.236h-0.10367zm-0.18788-5.2153h7.1006v2.1898h-7.1006z",
  "stroke-width": "1.5203"
}));
const skipToContentIcon = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  fill: "currentColor",
  height: "1.25em",
  width: "1.25em",
  viewBox: "0 0 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Path, {
  d: "M0 0h24v24H0z",
  fill: "none"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Path, {
  d: "M11.59 7.41L15.17 11H1v2h14.17l-3.59 3.59L13 18l6-6-6-6-1.41 1.41zM20 6v12h2V6h-2z"
}));
/* harmony default export */ __webpack_exports__["default"] = ({
  increaseFontSizeIcon,
  decreaseFontSizeIcon,
  resetFontSizeIcon,
  toggleHighContrastIcon,
  skipToContentIcon
});

/***/ }),

/***/ "./src/a11y-button/index.js":
/*!**********************************!*\
  !*** ./src/a11y-button/index.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./src/a11y-button/style.scss");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./src/a11y-button/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./save */ "./src/a11y-button/save.js");
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./icon */ "./src/a11y-button/icon.js");
/* harmony import */ var _variations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./variations */ "./src/a11y-button/variations.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./block.json */ "./src/a11y-button/block.json");
/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */


/**
 * Internal dependencies
 */






/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */

(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_6__.name, {
  /**
   * @see ./edit.js
   */
  edit: _edit__WEBPACK_IMPORTED_MODULE_2__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_3__["default"],
  icon: _icon__WEBPACK_IMPORTED_MODULE_4__["default"],
  variations: _variations__WEBPACK_IMPORTED_MODULE_5__["default"]
});

/***/ }),

/***/ "./src/a11y-button/save.js":
/*!*********************************!*\
  !*** ./src/a11y-button/save.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Save; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./icons */ "./src/a11y-button/icons.js");


/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */



/**
 * Internal dependencies
 */


function Save(_ref) {
  var _attributes$style, _attributes$style$bor, _attributes$style2, _attributes$style2$ty;

  let {
    attributes,
    className
  } = _ref;
  const borderProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.__experimentalGetBorderClassesAndStyles)(attributes);
  const colorProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.__experimentalGetColorClassesAndStyles)(attributes);
  const spacingProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.__experimentalGetSpacingClassesAndStyles)(attributes);
  const buttonClasses = classnames__WEBPACK_IMPORTED_MODULE_1___default()(colorProps.className, borderProps.className, {
    // For backwards compatibility add style that isn't provided via
    // block support.
    'no-border-radius': ((_attributes$style = attributes.style) === null || _attributes$style === void 0 ? void 0 : (_attributes$style$bor = _attributes$style.border) === null || _attributes$style$bor === void 0 ? void 0 : _attributes$style$bor.radius) === 0
  });
  const buttonStyle = { ...borderProps.style,
    ...colorProps.style,
    ...spacingProps.style
  };
  const wrapperClasses = classnames__WEBPACK_IMPORTED_MODULE_1___default()(className, {
    [`has-custom-font-size`]: attributes.fontSize || ((_attributes$style2 = attributes.style) === null || _attributes$style2 === void 0 ? void 0 : (_attributes$style2$ty = _attributes$style2.typography) === null || _attributes$style2$ty === void 0 ? void 0 : _attributes$style2$ty.fontSize)
  });
  const blockProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.useBlockProps.save({
    className: wrapperClasses
  });

  function getDefaultSVGIcon() {
    switch (attributes.action) {
      case 'toggle-high-contrast':
        return _icons__WEBPACK_IMPORTED_MODULE_4__.toggleHighContrastIcon;

      case 'increase-font-size':
        return _icons__WEBPACK_IMPORTED_MODULE_4__.increaseFontSizeIcon;

      case 'decrease-font-size':
        return _icons__WEBPACK_IMPORTED_MODULE_4__.decreaseFontSizeIcon;

      case 'reset-font-size':
        return _icons__WEBPACK_IMPORTED_MODULE_4__.resetFontSizeIcon;

      case 'skip-to-content':
        return _icons__WEBPACK_IMPORTED_MODULE_4__.skipToContentIcon;

      default:
        return null;
    }
  }

  function getProvisoryAltText() {
    switch (attributes.action) {
      case 'toggle-high-contrast':
        return (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Toggle high contrast', 'a11y-buttons');

      case 'increase-font-size':
        return (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Increase font size', 'a11y-buttons');

      case 'decrease-font-size':
        return (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Decrease font size', 'a11y-buttons');

      case 'reset-font-size':
        return (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Reset font size', 'a11y-buttons');

      case 'skip-to-content':
        return (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Skip to content', 'a11y-buttons');

      default:
        return null;
    }
  }

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", blockProps, attributes.action == 'skip-to-content' ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    href: attributes.link,
    accessKey: attributes.accessKey ? attributes.accessKey : null,
    "aria-label": !attributes.content ? getProvisoryAltText() : null,
    "data-action": attributes.action,
    className: buttonClasses,
    style: buttonStyle
  }, attributes.iconDisplay == 'left' ? getDefaultSVGIcon() : null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.RichText.Content, {
    tagName: "span",
    className: "a11y-button-text",
    value: attributes.content
  }), attributes.iconDisplay == 'right' ? getDefaultSVGIcon() : null) : (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    type: "button",
    accessKey: attributes.accessKey ? attributes.accessKey : null,
    "aria-label": !attributes.content ? getProvisoryAltText() : null,
    "data-action": attributes.action,
    className: buttonClasses,
    style: buttonStyle
  }, attributes.iconDisplay == 'left' ? getDefaultSVGIcon() : null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.RichText.Content, {
    tagName: "span",
    className: "a11y-button-text",
    value: attributes.content
  }), attributes.iconDisplay == 'right' ? getDefaultSVGIcon() : null));
}

/***/ }),

/***/ "./src/a11y-button/variations.js":
/*!***************************************!*\
  !*** ./src/a11y-button/variations.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./icons */ "./src/a11y-button/icons.js");
/**
 * WordPress dependencies
 */

/**
 * Internal dependencies
 */


/* harmony default export */ __webpack_exports__["default"] = ([{
  isDefault: true,
  name: 'a11y-button--toggle-high-contrast',
  attributes: {
    content: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Toggle high contrast', 'a11y-buttons'),
    action: 'toggle-high-contrast'
  },
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Toggle high constrast', 'a11y-buttons'),
  description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Use this block to create a button that activates a stylesheet of extreme high contrast in your page. Be aware that the button won\'t have effect inside the editor.', 'a11y-buttons'),
  icon: _icons__WEBPACK_IMPORTED_MODULE_1__.toggleHighContrastIcon,
  isActive: ['action']
}, {
  name: 'a11y-button--increase-font-size',
  attributes: {
    content: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Increase font size', 'a11y-buttons'),
    action: 'increase-font-size'
  },
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Increase font size', 'a11y-buttons'),
  description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Use this block to create a button that increases the page root font size. Be aware that the button won\'t have effect inside the editor.', 'a11y-buttons'),
  icon: _icons__WEBPACK_IMPORTED_MODULE_1__.increaseFontSizeIcon,
  isActive: ['action']
}, {
  name: 'a11y-button--decrease-font-size',
  attributes: {
    content: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Decrease font size', 'a11y-buttons'),
    action: 'decrease-font-size'
  },
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Decrease font size', 'a11y-buttons'),
  icon: _icons__WEBPACK_IMPORTED_MODULE_1__.decreaseFontSizeIcon,
  description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Use this block to create a button that decreases the page root font size. Be aware that the button won\'t have effect inside the editor.', 'a11y-buttons'),
  isActive: ['action']
}, {
  name: 'a11y-button--reset-font-size',
  attributes: {
    content: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Reset font size', 'a11y-buttons'),
    action: 'reset-font-size'
  },
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Reset font size', 'a11y-buttons'),
  icon: _icons__WEBPACK_IMPORTED_MODULE_1__.resetFontSizeIcon,
  description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Use this block to create a button that resets the font size to its initial value. Be aware that the button won\'t have effect inside the editor.', 'a11y-buttons'),
  isActive: ['action']
}, {
  name: 'a11y-button--skip-to-content',
  attributes: {
    content: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Skip to content', 'a11y-buttons'),
    action: 'skip-to-content'
  },
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Skip to content', 'a11y-buttons'),
  icon: _icons__WEBPACK_IMPORTED_MODULE_1__.skipToContentIcon,
  description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Use this block to create a link to any part of your website via html anchors.', 'a11y-buttons'),
  isActive: ['action']
}]);

/***/ }),

/***/ "./node_modules/classnames/index.js":
/*!******************************************!*\
  !*** ./node_modules/classnames/index.js ***!
  \******************************************/
/***/ (function(module, exports) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames() {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg)) {
				if (arg.length) {
					var inner = classNames.apply(null, arg);
					if (inner) {
						classes.push(inner);
					}
				}
			} else if (argType === 'object') {
				if (arg.toString === Object.prototype.toString) {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				} else {
					classes.push(arg.toString());
				}
			}
		}

		return classes.join(' ');
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ }),

/***/ "./src/a11y-button/editor.scss":
/*!*************************************!*\
  !*** ./src/a11y-button/editor.scss ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/a11y-button/style.scss":
/*!************************************!*\
  !*** ./src/a11y-button/style.scss ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "./src/a11y-button/block.json":
/*!************************************!*\
  !*** ./src/a11y-button/block.json ***!
  \************************************/
/***/ (function(module) {

"use strict";
module.exports = JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"a11y-buttons/a11y-button","version":"0.1.0","title":"A11Y Button","category":"widgets","icon":"universal-access-alt","description":"A basic accessibility button.","parent":["a11yButtons/a11yButtons"],"attributes":{"content":{"source":"html","selector":"span.a11y-button-text","type":"string"},"action":{"type":"string","default":"increase-font-size"},"iconDisplay":{"type":"string","default":"left"},"link":{"type":"string","default":"#content"},"accessKey":{"type":"string","default":""}},"usesContext":["a11yButtons/iconDisplay"],"supports":{"anchor":true,"align":true,"alignWide":false,"color":{"__experimentalSkipSerialization":true,"link":true,"background":true,"text":true},"typography":{"fontSize":true,"__experimentalFontFamily":true,"__experimentalDefaultControls":{"fontSize":true}},"reusable":false,"spacing":{"margin":true,"__experimentalSkipSerialization":true,"padding":["horizontal","vertical"],"__experimentalDefaultControls":{"padding":true}},"__experimentalBorder":{"color":true,"style":true,"width":true,"__experimentalDefaultControls":{"color":true,"style":true,"width":true}},"html":true},"textdomain":"a11y-buttons","editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css"}');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	!function() {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = function(result, chunkIds, fn, priority) {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every(function(key) { return __webpack_require__.O[key](chunkIds[j]); })) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"a11y-button/index": 0,
/******/ 			"a11y-button/style-index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = function(chunkId) { return installedChunks[chunkId] === 0; };
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = function(parentChunkLoadingFunction, data) {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some(function(id) { return installedChunks[id] !== 0; })) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunka11y_buttons"] = self["webpackChunka11y_buttons"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["a11y-button/style-index"], function() { return __webpack_require__("./src/a11y-button/index.js"); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map