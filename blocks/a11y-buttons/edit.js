/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import {
	InspectorControls,
	useInnerBlocksProps,
	useBlockProps,
} from '@wordpress/block-editor';
import {
	PanelBody,
	__experimentalToggleGroupControl as ToggleGroupControl,
	__experimentalToggleGroupControlOption as ToggleGroupControlOption,
} from '@wordpress/components';
import { Fragment } from '@wordpress/element';
import { getBlockSupport } from '@wordpress/blocks';

/**
 * Internal dependencies
 */
import './editor.scss';

const ALLOWED_BLOCKS = [ 'a11y-buttons/a11y-button', 'core/spacer' ];
const BUTTONS_TEMPLATE = [
	[
		'a11y-buttons/a11y-button',
		{
			content: __( 'Skip to content', 'a11y-buttons' ),
			action: 'skip-to-content',
		},
	],
	[
		'a11y-buttons/a11y-button',
		{
			content: __( 'Toggle high contrast', 'a11y-buttons' ),
			action: 'toggle-high-contrast',
		},
	],
];

const getDefaultBlockLayout = ( blockTypeOrName ) => {
	const layoutBlockSupportConfig = getBlockSupport(
		blockTypeOrName,
		'__experimentalLayout'
	);
	return layoutBlockSupportConfig?.default;
};

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 * @param {Object} props
 * @return {JSX.Element} Element to render.
 */
export default function Edit( props ) {
	const { name, attributes, setAttributes } = props;
	const usedLayout = attributes.layout || getDefaultBlockLayout( name );

	const blockProps = useBlockProps();
	const innerBlocksProps = useInnerBlocksProps( blockProps, {
		allowedBlocks: ALLOWED_BLOCKS,
		template: BUTTONS_TEMPLATE,
		templateLock: false,
		__experimentalAppenderTagName: 'li',
		__experimentalLayout: usedLayout,
	} );

	return (
		<>
			<InspectorControls>
				<PanelBody title={ __( 'Icon display', 'a11y-buttons' ) }>
					<ToggleGroupControl
						label={ __(
							'Configure the icon display position',
							'a11y-buttons'
						) }
						value={ attributes.iconDisplay }
						help={ __(
							'Decide if the buttons icon should appear aside it or never appear at all.',
							'a11y-buttons'
						) }
						onChange={ ( value ) =>
							setAttributes( { iconDisplay: value } )
						}
						isBlock
						hideLabelFromVision
					>
						<ToggleGroupControlOption
							value="left"
							label={ __( 'Left', 'a11y-buttons' ) }
						/>
						<ToggleGroupControlOption
							value="none"
							label={ __( 'No icon', 'a11y-buttons' ) }
						/>
						<ToggleGroupControlOption
							value="right"
							label={ __( 'Right', 'a11y-buttons' ) }
						/>
					</ToggleGroupControl>
				</PanelBody>
			</InspectorControls>

			<Fragment>
				<ul { ...innerBlocksProps } />
			</Fragment>
		</>
	);
}
