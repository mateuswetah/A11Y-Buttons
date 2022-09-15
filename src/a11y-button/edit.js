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
	InspectorControls,
	useBlockProps,
	__experimentalUseBorderProps as useBorderProps,
	__experimentalUseColorProps as useColorProps,
	__experimentalGetSpacingClassesAndStyles as useSpacingProps,
} from '@wordpress/block-editor';
import {
	PanelBody,
	TextControl
} from '@wordpress/components';
import { Fragment } from '@wordpress/element';
import {
	Icon,
	Button,
	ExternalLink
} from '@wordpress/components';

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
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
export default function Edit( { attributes, setAttributes, context, className } ) {

	const borderProps = useBorderProps( attributes );
	const colorProps = useColorProps( attributes );
	const spacingProps = useSpacingProps( attributes );
	const buttonClasses = classnames(
		className,
		colorProps.className,
		borderProps.className,
		{
			// For backwards compatibility add style that isn't
			// provided via block support.
			'no-border-radius': attributes.style?.border?.radius === 0,
		}
	);
	const buttonStyle = {
		...borderProps.style,
		...colorProps.style,
		...spacingProps.style,
	}
	const wrapperClasses = classnames( className, {
		[ `has-custom-font-size` ]: attributes.fontSize || attributes.style?.typography?.fontSize,
	} );
    const blockProps = useBlockProps( { className: wrapperClasses } );

	const iconDisplay = context['a11yButtons/iconDisplay'] ? context['a11yButtons/iconDisplay'] : 'left';
	if (iconDisplay != attributes.iconDisplay)
		setAttributes({ iconDisplay: iconDisplay });

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

	function setAccessKey( value ) {
		if (value == '' || value.match(/^([0-9]|[a-z]){1}$/i))
			setAttributes({ accessKey: value });
	}

	return <>
		<InspectorControls>
			{ attributes.action == 'skip-to-content' ?
				<PanelBody title={ __( 'Skip to link', 'a11y-buttons' ) }>
					<TextControl
						label={ __( 'Link on page to inner content', 'a11y-buttons' ) }
						value={ attributes.link }
						help={
							<>
								{ __('The link should point to a HTML anchor, usually defined by an ID and preppended by "#". ', 'a11y-buttons' ) }
								<ExternalLink
									href={ __(
										'https://wordpress.org/support/article/page-jumps/'
									) }
								>
									{ __( 'Learn more about anchors' ) }
								</ExternalLink>
							</>
						}
						onChange={ ( value ) => setAttributes({ link: value }) }
					/>
				</PanelBody>
			: null }
			<PanelBody title={ __( 'Access key', 'a11y-buttons' ) }>
				<TextControl
					label={ __( 'Access key shortcut', 'a11y-buttons' ) }
					value={ attributes.accessKey }
					help={
						<>
							{ __('Access key is a single alphanumeric character that, combined with your browser access key shortcut, will help users quickly focus on this button. WARNING: Make sure the accesskey values are unique across the page! ', 'a11y-buttons' ) }
							<ExternalLink
								href={ __(
									'https://html.spec.whatwg.org/multipage/interaction.html#the-accesskey-attribute'
								) }
							>
								{ __( 'Learn more about access keys', 'a11y-buttons' ) }
							</ExternalLink>
						</>
					}
					onChange={ setAccessKey }
				/>
			</PanelBody>
		</InspectorControls>
		<Fragment>
			<li { ...blockProps }>
				<Button
						href={ attributes.action == 'skip-to-content' ? attributes.link : undefined }
						type="button"
						accessKey={ attributes.accessKey ? attributes.accessKey : null }
						aria-label={ !attributes.content ? getProvisoryAltText() : null }
						data-action={ attributes.action }
						className={ buttonClasses }
						style={ buttonStyle }>
					{ iconDisplay == 'left' ? <Icon icon={ () => ( getDefaultSVGIcon() ) } /> : null }
					<RichText
						withoutInteractiveFormatting
						tagName="span"
						value={ attributes.content }
						allowedFormats={ [ 'core/bold', 'core/italic', 'core/image', 'core/text-color', 'core/underline', 'core/keyboard', 'core/subscript', 'core/supercript', 'core/code' ] } // Allow the content to be made bold or italic, but do not allow other formatting options
						onChange={ ( content ) => setAttributes( { content } ) }
						className="a11y-button-text"
						placeholder={ __( 'Type in a clear label', 'a11y-buttons' ) }
					/>
					{ iconDisplay == 'right' ? <Icon icon={ () => ( getDefaultSVGIcon() ) } /> : null }
				</Button>
			</li>
		</Fragment>
	</>;
		
}
