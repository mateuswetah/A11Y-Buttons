const path = require( 'path' );
const config = require( '@wordpress/scripts/config/webpack.config.js' );

config.entry = {
  'a11y-buttons/index': path.resolve( process.cwd(), 'blocks', 'a11y-buttons', 'index.js' ),
  'a11y-button/index': path.resolve( process.cwd(), 'blocks', 'a11y-button', 'index.js' ),
  'frontend/frontend': path.resolve( process.cwd(), 'frontend', 'frontend.js' ),
  'frontend/high-contrast': path.resolve( process.cwd(), 'frontend', 'high-contrast.scss' )
};

module.exports = config;