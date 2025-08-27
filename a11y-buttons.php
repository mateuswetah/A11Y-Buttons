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

		// General Settings section
		add_settings_section(
            'a11y_buttons_general',
            __('General Settings', 'a11y-buttons'),
            [$this, 'render_section_description'],
            'a11y-buttons-settings'
        );

		// Asset Loading Method field
		register_setting(
            'a11y_buttons_settings',
            'a11y-buttons-load-assets-via-block-json',
            [
                'type' => 'boolean',
                'default' => false,
                'sanitize_callback' => 'rest_sanitize_boolean'
            ]
        );
		add_settings_field(
            'a11y-buttons-load-assets-via-block-json',
            __('Asset Loading Method', 'a11y-buttons'),
            [$this, 'render_asset_loading_field'],
            'a11y-buttons-settings',
            'a11y_buttons_general'
        );

		// Custom High-Contrast CSS field
		register_setting(
            'a11y_buttons_settings',
            'a11y-buttons-custom-high-contrast-css',
            [
                'type' => 'string',
                'default' => '',
                'sanitize_callback' => [$this, 'sanitize_custom_css']
            ]
        );
		add_settings_field(
            'a11y-buttons-custom-high-contrast-css',
            __('Custom High-Contrast CSS', 'a11y-buttons'),
            [$this, 'render_custom_css_field'],
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
     * Render custom CSS field
     */
    public function render_custom_css_field() {
        $value = get_option('a11y-buttons-custom-high-contrast-css', '');
        ?>
        <textarea name="a11y-buttons-custom-high-contrast-css" 
                  rows="16" 
                  style="width: 100%; font-family: 'Courier New', monospace; font-size: 13px; line-height: 1.4;"
                  placeholder="/* Add your custom high-contrast CSS here */
/* Example:
.a11y-buttons-high-contrast-mode {
	--a11y-buttons-high-contrast-bg: #000;
	--a11y-buttons-high-contrast-text: #fff;
	--a11y-buttons-high-contrast-fill: #fff;
	--a11y-buttons-high-contrast-link: rgb(0, 225, 255);
	--a11y-buttons-high-contrast-link-hover: rgb(251, 255, 0);
	--a11y-buttons-high-contrast-link-active: rgb(21, 255, 0);
	--a11y-buttons-high-contrast-link-visited: rgb(225, 0, 255);
	--a11y-buttons-high-contrast-focus: rgb(0, 225, 255);
	--a11y-buttons-high-contrast-focus-hover: rgb(251, 255, 0);
	--a11y-buttons-high-contrast-focus-active: rgb(21, 255, 0);
	--a11y-buttons-high-contrast-focus-focus: rgb(255, 145, 0);
}
*/"><?php echo esc_textarea($value); ?></textarea>
        <p class="description">
            <?php
            /* translators: %1$s: Link to default high-contrast styles, %2$s: .a11y-buttons-high-contrast-mode, %3$s: !important */
            printf(
                esc_html__(
                    'This will be combined with the %1$s and cached for performance. Remember to add the prefix %2$s to target active high contrast mode. Use %3$s to override default styles.',
                    'a11y-buttons'
                ),
                sprintf(
                    '<a href="%1$s" target="_blank" rel="noopener noreferrer">%2$s↗</a>',
                    esc_url( 'https://raw.githubusercontent.com/mateuswetah/A11Y-Buttons/refs/heads/main/frontend/high-contrast.scss' ),
                    esc_html__( 'default styles', 'a11y-buttons' )
				),
				'<code>.a11y-buttons-high-contrast-mode</code>',	
				'<code>!important</code>'
            );
            ?>
        </p>
        <p class="description">
            <strong><?php esc_html_e('Note:', 'a11y-buttons'); ?></strong> 
            <?php 
                _e(
                    'CSS is validated automatically. Invalid CSS will be rejected. Comments and whitespace will be removed after submission for performance and security reasons.',
                    'a11y-buttons'
                );
			?>
        </p>
        <?php
    }
    
    /**
     * Sanitize custom CSS input
     */
    public function sanitize_custom_css($css) {
		
        if ( empty($css) ) {
            return '';
        }
        
        // Security: Limit CSS size to prevent resource exhaustion
        if (strlen($css) > 50000) { // 50KB limit
            add_settings_error(
                'a11y-buttons-custom-high-contrast-css',
                'css_too_large',
                __('CSS content is too large. Maximum size is 50KB.', 'a11y-buttons'),
                'error'
            );
            return get_option('a11y-buttons-custom-high-contrast-css', '');
        }
        
        // Security: Block potentially dangerous CSS patterns
        $dangerous_patterns = [
            'expression\s*\(',
            'url\s*\(\s*["\']?\s*javascript:',
            'url\s*\(\s*["\']?\s*data:',
            'url\s*\(\s*["\']?\s*vbscript:',
            'url\s*\(\s*["\']?\s*mocha:',
            'url\s*\(\s*["\']?\s*livescript:',
            '@import\s+url\s*\(',
            '@charset\s+',
            'behavior\s*:',
            '-ms-behavior\s*:',
        ];
        
        foreach ($dangerous_patterns as $pattern) {
            if (preg_match('/' . $pattern . '/i', $css)) {
                add_settings_error(
                    'a11y-buttons-custom-high-contrast-css',
                    'dangerous_css',
                    __('CSS contains potentially dangerous patterns and was rejected.', 'a11y-buttons'),
                    'error'
                );
                return get_option('a11y-buttons-custom-high-contrast-css', '');
            }
        }
        
        // Basic CSS structure validation
        if (!$this->validate_css($css)) {
            add_settings_error(
                'a11y-buttons-custom-high-contrast-css',
                'invalid_css',
                __('Invalid CSS detected. Please check your syntax.', 'a11y-buttons'),
                'error'
            );
            return get_option('a11y-buttons-custom-high-contrast-css', '');
        }
        
        // Security: Remove comments and normalize whitespace
        $clean_css = preg_replace('/\/\*.*?\*\//s', '', $css);
        $clean_css = preg_replace('/\s+/', ' ', trim($clean_css));
        
        // Clean up old CSS files when content changes
        $this->cleanup_old_css_files();
        
        return $clean_css;
    }
    
    /**
     * Validate CSS syntax
     */
    private function validate_css($css) {
        // Remove comments and whitespace for validation
        $clean_css = preg_replace('/\/\*.*?\*\//s', '', $css);
        $clean_css = preg_replace('/\s+/', ' ', trim($clean_css));
        
        // Basic CSS structure validation
        $brackets = 0;
        $braces = 0;
        
        for ($i = 0; $i < strlen($clean_css); $i++) {
            $char = $clean_css[$i];
            
            if ($char === '{') {
                $braces++;
            } elseif ($char === '}') {
                $braces--;
                if ($braces < 0) return false;
            } elseif ($char === '(') {
                $brackets++;
            } elseif ($char === ')') {
                $brackets--;
                if ($brackets < 0) return false;
            }
        }
        
        return $brackets === 0 && $braces === 0;
    }

	/**
	 * Clean up old CSS files
	 */
	private function cleanup_old_css_files() {
		$upload_dir = wp_upload_dir();
		$css_dir = $upload_dir['basedir'] . '/a11y-buttons/';
		
		if (!is_dir($css_dir)) {
			return;
		}
		
		$files = glob($css_dir . 'custom-high-contrast-*.css');
		foreach ($files as $file) {
			// Remove files older than 1 hour (in case of failed generation)
			if (filemtime($file) < (time() - 3600)) {
				unlink($file);
			}
		}
	}

	/**
	 * Generate custom high-contrast CSS file
	 */
	private function generate_custom_css_file() {
		$custom_css = get_option('a11y-buttons-custom-high-contrast-css', '');
    
		if (empty($custom_css)) {
			return false;
		}
		
		try {
			$upload_dir = wp_upload_dir();
			$css_dir = $upload_dir['basedir'] . '/a11y-buttons/';
			
			// Security: Validate directory path
			$real_css_dir = realpath($css_dir);
			$real_upload_dir = realpath($upload_dir['basedir']);
			
			if (!$real_css_dir || !$real_upload_dir || strpos($real_css_dir, $real_upload_dir) !== 0) {
				error_log('A11Y Buttons: Invalid CSS directory path');
				return false;
			}
			
			// Create directory if it doesn't exist
			if (!is_dir($css_dir)) {
				wp_mkdir_p($css_dir);
			}
			
			// Security: Validate directory was created successfully
			if (!is_dir($css_dir) || !is_writable($css_dir)) {
				error_log('A11Y Buttons: CSS directory not writable');
				return false;
			}
			
			// Generate unique filename based on content hash
			$css_hash = md5($custom_css);
			$custom_css_file = "custom-high-contrast-{$css_hash}.css";
			$file_path = $css_dir . $custom_css_file;
			
			// Security: Validate final file path
			$real_file_path = realpath(dirname($file_path)) . DIRECTORY_SEPARATOR . basename($file_path);
			if (strpos($real_file_path, $real_css_dir) !== 0) {
				error_log('A11Y Buttons: Invalid CSS file path');
				return false;
			}
			
			// Check if file already exists
			if (file_exists($file_path)) {
				return $custom_css_file;
			}
			
			// Get default high-contrast CSS more efficiently
			$default_css = $this->get_default_css_safely();
			
			// Combine default CSS with custom CSS
			$combined_css = $default_css . "\n/* Custom High-Contrast CSS */\n" . $custom_css;
			
			// Security: Check combined CSS size
			if (strlen($combined_css) > 1024 * 1024) { // 1MB limit
				error_log('A11Y Buttons: Combined CSS too large');
				return false;
			}
			
			// Write to file
			if (file_put_contents($file_path, $combined_css) !== false) {
				return $custom_css_file;
			}
			
		} catch (Exception $e) {
			// Log error and fall back to default (without sensitive details)
			error_log('A11Y Buttons: CSS generation failed');
		}
		
		return false;
	}

	/**
	 * Get default CSS safely
	 */
	private function get_default_css_safely() {
		$default_css_path = plugin_dir_path(__FILE__) . 'build/frontend/high-contrast.css';
		
		if (!file_exists($default_css_path)) {
			return '';
		}
		
		// Check file size before reading (1MB limit)
		$file_size = filesize($default_css_path);
		if ($file_size > 1024 * 1024) {
			error_log('A11Y Buttons: Default CSS file too large: ' . $file_size . ' bytes');
			return '';
		}
		
		// Read file content
		$content = file_get_contents($default_css_path);
		if ($content === false) {
			error_log('A11Y Buttons: Failed to read default CSS file');
			return '';
		}
		
		return $content;
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
                // Security: WordPress automatically handles nonce verification in settings API
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
		$custom_high_contrast_css_file = $this->generate_custom_css_file();
		$upload_dir = wp_upload_dir();

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
			'pluginUploadPath' => $upload_dir['baseurl'] . '/a11y-buttons/',
            'loadAssetsViaBlockJson' => $load_assets_via_block_json,
			'customHighContrastCssFile' => $custom_high_contrast_css_file
        );
        wp_localize_script(
            'a11y-buttons-frontend-script',
            'a11yButtonSettings',
            $settings
        );

		if ( !$custom_high_contrast_css_file ) {
			$high_contrast_asset_file = include(plugin_dir_path(__FILE__) . 'build/frontend/high-contrast.asset.php');
			wp_register_style(
				'a11y-buttons-high-contrast-style',
				plugin_dir_url(__FILE__) . 'build/frontend/high-contrast.css',
				$high_contrast_asset_file['dependencies'],
				$high_contrast_asset_file['version']
			);
		} else {
			wp_register_style(
				'a11y-buttons-high-contrast-style',
				$upload_dir['baseurl'] . '/a11y-buttons/' . $custom_high_contrast_css_file,
				[],
				md5($custom_high_contrast_css_file) // Version based on content
			);
		}

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