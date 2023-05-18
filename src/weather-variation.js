import { registerBlockVariation } from '@wordpress/blocks';

registerBlockVariation( 'core/group', {
	name: 'wclx2023/weather-group',
	title: 'Weather Group',
	attributes: {
		allowedBlocks: [ 'wclx2023/weather' ],
		style: {
			spacing: {
				padding: {
					top: 'var:preset|spacing|30',
					right: 'var:preset|spacing|30',
					bottom: 'var:preset|spacing|30',
					left: 'var:preset|spacing|30',
				},
			},
			border: { width: '0px', style: 'none', radius: '25px' },
		},
		backgroundColor: 'contrast',
	},
	innerBlocks: [ [ 'wclx2023/weather', { city: 'LIS' } ] ],
	scope: [ 'inserter' ],
	isActive: [ 'allowedBlocks' ],
} );
