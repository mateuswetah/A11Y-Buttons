<?php
/**
 * Plugin Name:       A11Y Buttons
 * Description:       A basic list of buttons that may be used to improve your website accessibility.
 * Requires at least: 6.4
 * Requires PHP:      7.4
 * Version:           0.3.0
 * Author:            wetah
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       a11y-buttons
 *
 * @package           a11y-buttons
 */

// Prevent direct access
if (!defined('ABSPATH')) {
    exit;
}

/**
 * Main plugin class
 */
class A11Y_Buttons_Plugin {
    
    /**
     * Constructor
     */
    public function __construct() {
        add_action('init', [$this, 'init']);
        add_action('admin_menu', [$this, 'add_admin_menu']);
        add_action('admin_init', [$this, 'init_settings']);
        add_action('wp_enqueue_scripts', [$this, 'enqueue_frontend_script']);
        add_filter('plugin_action_links_' . plugin_basename(__FILE__), [$this, 'add_plugin_action_links']);
    }
    
    /**
     * Initialize plugin
     */
    public function init() {
        // Register blocks
        $this->register_blocks();
    }
    
    /**
     * Register blocks
     */
    private function register_blocks() {
        register_block_type(
            __DIR__ . '/build/a11y-button'
        );
        register_block_type(
            __DIR__ . '/build/a11y-buttons'
        );
    }
    
    /**
     * Add admin menu
     */
    public function add_admin_menu() {
        add_options_page(
            __('A11Y Buttons Settings', 'a11y-buttons'),
            __('A11Y Buttons', 'a11y-buttons'),
            'manage_options',
            'a11y-buttons-settings',
            [$this, 'render_settings_page']
        );
    }
    
    /**
     * Initialize settings
     */
    public function init_settings() {
        register_setting(
            'a11y_buttons_settings',
            'a11y-buttons-load-assets-via-block-json',
            [
                'type' => 'boolean',
                'default' => false,
                'sanitize_callback' => 'rest_sanitize_boolean'
            ]
        );
        
        add_settings_section(
            'a11y_buttons_general',
            __('General Settings', 'a11y-buttons'),
            [$this, 'render_section_description'],
            'a11y-buttons-settings'
        );
        
        add_settings_field(
            'a11y-buttons-load-assets-via-block-json',
            __('Asset Loading Method', 'a11y-buttons'),
            [$this, 'render_asset_loading_field'],
            'a11y-buttons-settings',
            'a11y_buttons_general'
        );
    }
    
    /**
     * Render section description
     */
    public function render_section_description() {
        echo '<p>' . esc_html__('Configure how A11Y Buttons loads its assets and styles.', 'a11y-buttons') . '</p>';
    }
    
    /**
     * Render asset loading field
     */
    public function render_asset_loading_field() {
        $value = get_option('a11y-buttons-load-assets-via-block-json', false);
        ?>
		<fieldset>
			<legend class="screen-reader-text"><?php esc_html_e('Asset Loading Method', 'a11y-buttons'); ?></legend>
			
			<label style="display: block; margin-bottom: 15px !important;">
				<input type="radio" 
					name="a11y-buttons-load-assets-via-block-json" 
					value="0" 
					<?php checked($value, false); ?> />
				<strong><?php esc_html_e('On-Demand Loading', 'a11y-buttons'); ?></strong>
				<br>
				<p class="description">
					<?php esc_html_e('One script is always loaded and itself loads remaining assets only when users interact with each button.', 'a11y-buttons'); ?>
				</p>
			</label>
			
			<label style="display: block;">
				<input type="radio" 
					name="a11y-buttons-load-assets-via-block-json" 
					value="1" 
					<?php checked($value, true); ?> />
				<strong><?php esc_html_e('Block Detection Loading', 'a11y-buttons'); ?></strong>
				<br>
				<p class="description">
					<?php esc_html_e('Loads assets only when blocks are present on page. Better for caching but may load small unused CSS.', 'a11y-buttons'); ?>
				</p>
			</label>
		</fieldset>
        <?php
    }
    
    /**
     * Render settings page
     */
    public function render_settings_page() {
        if (!current_user_can('manage_options')) {
            return;
        }
        ?>
        <div class="wrap a11y-buttons-settings">
            <h1><?php echo esc_html(get_admin_page_title()); ?></h1>
            
            <form method="post" action="options.php">
                <?php
                settings_fields('a11y_buttons_settings');
                do_settings_sections('a11y-buttons-settings');
                submit_button();
                ?>
            </form>
        </div>
        <?php
    }
    
    /**
     * Enqueue frontend script
     */
    public function enqueue_frontend_script() {
        $load_assets_via_block_json = get_option('a11y-buttons-load-assets-via-block-json', false);

        $frontend_asset_file = include(plugin_dir_path(__FILE__) . 'build/frontend/frontend.asset.php');
        wp_register_script(
            'a11y-buttons-frontend-script',
            plugin_dir_url(__FILE__) . 'build/frontend/frontend.js',
            $frontend_asset_file['dependencies'],
            $frontend_asset_file['version'],
            true
        );

        $settings = array(
            'pluginBuildPath' => plugin_dir_url(__FILE__) . 'build/',
            'loadAssetsViaBlockJson' => $load_assets_via_block_json
        );
        wp_localize_script(
            'a11y-buttons-frontend-script',
            'a11yButtonSettings',
            $settings
        );

        $high_contrast_asset_file = include(plugin_dir_path(__FILE__) . 'build/frontend/high-contrast.asset.php');
        wp_register_style(
            'a11y-buttons-high-contrast-style',
            plugin_dir_url(__FILE__) . 'build/frontend/high-contrast.css',
            $high_contrast_asset_file['dependencies'],
            $high_contrast_asset_file['version']
        );

        $readable_font_asset_file = include(plugin_dir_path(__FILE__) . 'build/frontend/readable-font.asset.php');
        wp_register_style(
            'a11y-buttons-readable-font-style',
            plugin_dir_url(__FILE__) . 'build/frontend/readable-font.css',
            $readable_font_asset_file['dependencies'],
            $readable_font_asset_file['version']
        );

        if (!$load_assets_via_block_json) {
            wp_enqueue_script('a11y-buttons-frontend-script');
        }
    }

    /**
     * Add settings link to plugin actions
     */
    public function add_plugin_action_links($links) {
        $settings_link = '<a href="' . admin_url('options-general.php?page=a11y-buttons-settings') . '">' . esc_html__('Settings', 'a11y-buttons') . '</a>';
        array_unshift($links, $settings_link);
        return $links;
    }
}

// Initialize the plugin
$a11y_buttons_plugin = new A11Y_Buttons_Plugin();