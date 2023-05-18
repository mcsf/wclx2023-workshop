import { __ } from '@wordpress/i18n';
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, ComboboxControl } from '@wordpress/components';
import ServerSideRender from '@wordpress/server-side-render';

import './editor.scss';

import CIDADES_EUROPEIAS from './cities.json';

const cityOptions = Object.entries( CIDADES_EUROPEIAS ).map(
	( [ value, label ] ) => ( { value, label } )
);

export default function Edit( { name, attributes, className, setAttributes } ) {
	return (
		<div { ...useBlockProps( className ) }>
			<InspectorControls>
				<PanelBody title={ __( 'Weather' ) }>
					<ComboboxControl
						label={ __( 'City' ) }
						value={ attributes.city }
						options={ cityOptions }
						onChange={ ( city ) =>
							setAttributes( {
								city,
							} )
						}
					/>
				</PanelBody>
			</InspectorControls>

			<ServerSideRender block={ name } attributes={ attributes } />
		</div>
	);
}
