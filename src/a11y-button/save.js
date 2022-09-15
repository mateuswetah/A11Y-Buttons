/**
 * External dependencies
 */
import classnames from 'classnames'; 

/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import {
    RichText,
    useBlockProps,
    __experimentalGetBorderClassesAndStyles as getBorderClassesAndStyles,
    __experimentalGetColorClassesAndStyles as getColorClassesAndStyles,
    __experimentalGetSpacingClassesAndStyles as getSpacingClassesAndStyles,
} from '@wordpress/block-editor';

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

export default function Save( { attributes, className } ) {

    const borderProps = getBorderClassesAndStyles( attributes );
	const colorProps = getColorClassesAndStyles( attributes );
	const spacingProps = getSpacingClassesAndStyles( attributes );
	const buttonClasses = classnames(
		colorProps.className,
		borderProps.className,
		{
			// For backwards compatibility add style that isn't provided via
			// block support.
			'no-border-radius': attributes.style?.border?.radius === 0,
		}
	);
	const buttonStyle = {
		...borderProps.style,
		...colorProps.style,
		...spacingProps.style,
	};
    const wrapperClasses = classnames( className, {
		[ `has-custom-font-size` ]: attributes.fontSize || attributes.style?.typography?.fontSize,
	} );
    const blockProps = useBlockProps.save( { className: wrapperClasses } );

	function getDefaultSVGIcon() {
		switch (attributes.action) {
			case 'toggle-high-contrast':
				return toggleHighContrastIcon;
			case 'increase-font-size':
				return increaseFontSizeIcon;
			case 'decrease-font-size':
				return decreaseFontSizeIcon;
			case 'reset-font-size':
				return resetFontSizeIcon;
			case 'skip-to-content':
				return skipToContentIcon;
			default:
				return null;
		}
	}

	function getProvisoryAltText() {
		switch (attributes.action) {
			case 'toggle-high-contrast':
				return __( 'Toggle high contrast', 'a11y-buttons' );
			case 'increase-font-size':
				return __( 'Increase font size', 'a11y-buttons' );
			case 'decrease-font-size':
				return __( 'Decrease font size', 'a11y-buttons' );
			case 'reset-font-size':
				return __( 'Reset font size', 'a11y-buttons' );
			case 'skip-to-content':
				return __( 'Skip to content', 'a11y-buttons' );
			default:
				return null;
		}
	}

    return <li { ...blockProps }>
		{ attributes.action == 'skip-to-content' ?
			<a
					href={ attributes.link }
					accessKey={ attributes.accessKey ? attributes.accessKey : null }
					aria-label={ !attributes.content ? getProvisoryAltText() : null }
					data-action={ attributes.action }
					className={ buttonClasses }
					style={ buttonStyle }>
				{ attributes.iconDisplay == 'left' ? getDefaultSVGIcon() : null }
				<RichText.Content 
					tagName="span"
					className="a11y-button-text"
					value={ attributes.content }
				/>
				{ attributes.iconDisplay == 'right' ? getDefaultSVGIcon() : null }
			</a>
			:
			<button
					type="button"
					accessKey={ attributes.accessKey ? attributes.accessKey : null }
					aria-label={ !attributes.content ? getProvisoryAltText() : null }
					data-action={ attributes.action }
					className={ buttonClasses }
					style={ buttonStyle }>
				{ attributes.iconDisplay == 'left' ? getDefaultSVGIcon() : null }
				<RichText.Content 
					tagName="span"
					className="a11y-button-text"
					value={ attributes.content }
				/>
				{ attributes.iconDisplay == 'right' ? getDefaultSVGIcon() : null }
			</button>
		}
    </li>;
}