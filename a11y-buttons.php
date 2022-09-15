<?php
/**
 * Plugin Name:       A11Y Buttons
 * Description:       Example block scaffolded with Create Block tool.
 * Requires at least: 5.9
 * Requires PHP:      7.0
 * Version:           0.1.0
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
function create_block_a11y_buttons_block_init() {
	register_block_type(
		__DIR__ . '/build/a11y-button'
	);
	register_block_type(
		__DIR__ . '/build/a11y-buttons'
	);
}
add_action( 'init', 'create_block_a11y_buttons_block_init' );

function enqueue_actions_script() {
	wp_enqueue_style( 'a11y-buttons-styles', plugin_dir_url(__FILE__) . '/src/a11y-buttons-styles.css', array(), '0.1.0' );
	wp_enqueue_script( 'a11y-buttons-actions-script', plugin_dir_url(__FILE__) . '/src/a11y-buttons-actions.js', array(), '0.1.0' );
}
add_action( 'wp_enqueue_scripts', 'enqueue_actions_script' );