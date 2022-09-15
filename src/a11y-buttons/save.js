/**
 * WordPress dependencies
 */
import { useInnerBlocksProps, useBlockProps } from '@wordpress/block-editor';

export default function Save() {
    const blockProps = useBlockProps.save();
    const innerBlocksProps = useInnerBlocksProps.save( blockProps );

    return <ul { ...innerBlocksProps } />;
}
