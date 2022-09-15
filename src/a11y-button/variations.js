/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import {
    toggleHighContrastIcon,
    increaseFontSizeIcon,
    decreaseFontSizeIcon,
    resetFontSizeIcon,
    skipToContentIcon
} from './icons';

export default [
    {
        isDefault: true,
        name: 'a11y-button--toggle-high-contrast',
        attributes: { content: __( 'Toggle high contrast', 'a11y-buttons' ), action: 'toggle-high-contrast' },
        title: __( 'Toggle high constrast', 'a11y-buttons' ),
        description: __( 'Use this block to create a button that activates a stylesheet of extreme high contrast in your page. Be aware that the button won\'t have effect inside the editor.' , 'a11y-buttons' ),
        icon: toggleHighContrastIcon,
        isActive: ['action']
    },
    {
        name: 'a11y-button--increase-font-size',
        attributes: { content: __( 'Increase font size', 'a11y-buttons' ), action: 'increase-font-size' },
        title: __( 'Increase font size', 'a11y-buttons' ),
        description: __( 'Use this block to create a button that increases the page root font size. Be aware that the button won\'t have effect inside the editor.', 'a11y-buttons' ),
        icon: increaseFontSizeIcon,
        isActive: ['action']
    },
    {
        name: 'a11y-button--decrease-font-size',
        attributes: { content: __( 'Decrease font size', 'a11y-buttons' ), action: 'decrease-font-size' },
        title: __( 'Decrease font size', 'a11y-buttons' ),
        icon: decreaseFontSizeIcon,
        description: __( 'Use this block to create a button that decreases the page root font size. Be aware that the button won\'t have effect inside the editor.', 'a11y-buttons' ),
        isActive: ['action']
    },
    {
        name: 'a11y-button--reset-font-size',
        attributes: { content: __( 'Reset font size', 'a11y-buttons' ), action: 'reset-font-size' },
        title: __( 'Reset font size', 'a11y-buttons' ),
        icon: resetFontSizeIcon,
        description: __( 'Use this block to create a button that resets the font size to its initial value. Be aware that the button won\'t have effect inside the editor.', 'a11y-buttons' ),
        isActive: ['action']
    },
    {
        name: 'a11y-button--skip-to-content',
        attributes: { content: __( 'Skip to content', 'a11y-buttons' ), action: 'skip-to-content' },
        title: __( 'Skip to content', 'a11y-buttons' ),
        icon: skipToContentIcon,
        description: __( 'Use this block to create a link to any part of your website via html anchors.', 'a11y-buttons' ),
        isActive: ['action']
    }
];