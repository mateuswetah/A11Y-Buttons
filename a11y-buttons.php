<?php
/**
 * Plugin Name:       A11Y Buttons
 * Description:       A basic list of buttons that may be used to improve your website accessibility.
 * Requires at least: 6.0
 * Requires PHP:      7.0
 * Version:           0.2.0
 * Author:            wetah
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       a11y-buttons
 *
 * @package           a11y-buttons
 */

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function a11y_buttons_blocks_init() {
	register_block_type(
		__DIR__ . '/build/a11y-button'
	);
	register_block_type(
		__DIR__ . '/build/a11y-buttons'
	);
}
add_action( 'init', 'a11y_buttons_blocks_init' );

/**
 * Enqueues necessary frontend script to perform buttons utilities
 */
function a11y_buttons_enqueue_frontend_script() {
	$asset_file = include( plugin_dir_path( __FILE__ ) . 'build/frontend/frontend.asset.php');
    $settings = array( 'pluginBuildPath' => plugin_dir_url(__FILE__) . 'build/' );

	wp_enqueue_script( 'a11y-buttons-frontend-script', plugin_dir_url(__FILE__) . 'build/frontend/frontend.js', $asset_file['dependencies'], $asset_file['version'] );
	wp_localize_script( 'a11y-buttons-frontend-script', 'a11yButtonSettings', $settings );
}
add_action( 'wp_enqueue_scripts', 'a11y_buttons_enqueue_frontend_script' );