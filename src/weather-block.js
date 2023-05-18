import { registerBlockType } from '@wordpress/blocks';
import { useBlockProps, useInnerBlocksProps } from '@wordpress/block-editor';

const ALLOWED_BLOCKS = [ 'wclx2023/weather' ];

function WeatherGroupEdit() {
	const blockProps = useBlockProps();
	const innerBlocksProps = useInnerBlocksProps(
		{ ...blockProps },
		{ allowedBlocks: ALLOWED_BLOCKS }
	);
	return <div { ...innerBlocksProps } />;
}

function WeatherGroupSave() {
	const blockProps = useBlockProps.save();
	const innerBlocksProps = useInnerBlocksProps.save( blockProps );
	return <div { ...innerBlocksProps } />;
}

registerBlockType( 'wclx2023/weather-group', {
	title: 'Weather Group',
	edit: WeatherGroupEdit,
	save: WeatherGroupSave,
	supports: {
		spacing: {
			padding: true,
		},
	},
} );
