<?php
/**
 * Plugin Name:       Workshop de criação de blocos (WCLX2023)
 * Description:       Plugin didáctico (WordCamp Lisboa 2023)
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       example-static
 *
 * @package           wclx2023
 */

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function wclx2023_example_static_block_init() {
	register_block_type( __DIR__ . '/build' );
}
add_action( 'init', 'wclx2023_example_static_block_init' );
