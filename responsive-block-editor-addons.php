<?php
/**
 * Plugin Name:     Responsive Blocks - WordPress Gutenberg Blocks
 * Plugin URI:      cyberchimps.com
 * Description:     Responsive Blocks offers 50+ Gutenberg blocks so you can design beautiful pages without writing a single line of code.
 * Author:          CyberChimps
 * Author URI:		https://cyberchimps.com/responsive-blocks/
 * Text Domain:     responsive-block-editor-addons
 * Domain Path:     /languages
 * Version:         2.0.0
 *
 * @package         Responsive_Block_Editor_Addons
 */

define( 'RESPONSIVE_BLOCK_EDITOR_ADDONS_URL', trailingslashit( plugin_dir_url( __FILE__ ) ) );
define( 'RESPONSIVE_BLOCK_EDITOR_ADDONS_DIR', trailingslashit( plugin_dir_path( __FILE__ ) ) );
define( 'RESPONSIVE_BLOCK_EDITOR_ADDONS_VER', '2.0.0' );
define( 'RESPONSIVE_BLOCK_EDITOR_ADDONS_BASENAME', plugin_basename( __FILE__ ) );
define( 'RESPONSIVE_BLOCK_EDITOR_ADDONS_SEVEN_DAYS_IN_SECONDS', 604800 );

// Responsive Block Editor Addons plugin's main file.
require plugin_dir_path( __FILE__ ) . 'includes/class-responsive-block-editor-addons.php';

// Responsive Block Editor Addons plugin's helper file.
require plugin_dir_path( __FILE__ ) . 'helper/class-responsive-block-editor-addons-helper.php';

/**
 * The code that runs during plugin activation.
 */
function activate_responsive_block_editor_addons() {
	require_once plugin_dir_path( __FILE__ ) . 'includes/class-responsive-block-editor-addons-activator.php';
	Responsive_Block_Editor_Addons_Activator::activate();
}

/**
 * The code that runs during plugin deactivation.
 */
function deactivate_responsive_block_editor_addons() {
	require_once plugin_dir_path( __FILE__ ) . 'includes/class-responsive-block-editor-addons-deactivator.php';
	Responsive_Block_Editor_Addons_Deactivator::deactivate();
}

register_activation_hook( __FILE__, 'activate_responsive_block_editor_addons' );
register_deactivation_hook( __FILE__, 'deactivate_responsive_block_editor_addons' );

/**
 * Begins execution of the plugin.
 */
function run_responsive_block_editor_addons() {

	$plugin = new Responsive_Block_Editor_Addons();
}

run_responsive_block_editor_addons();
