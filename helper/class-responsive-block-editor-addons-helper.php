<?php
/**
 * Helper plugin class.
 *
 * @link       https://www.cyberchimps.com
 * @since      2.0.0
 *
 * @package    Responsive_Block_Editor_Addons
 * @subpackage Responsive_Block_Editor_Addons/helper
 */

/**
 * The helper plugin class Responsive_Block_Editor_Addons_Helper.
 *
 * @since      2.0.0
 * @package    Responsive_Block_Editor_Addons
 * @subpackage Responsive_Block_Editor_Addons/helper
 * @author     CyberChimps <support@cyberchimps.com>
 */
class Responsive_Block_Editor_Addons_Helper {

    private static $instance;

    private function __construct() {}

    public static function get_instance() {
        if ( ! isset( self::$instance ) ) {
            self::$instance = new self();
        }
        return self::$instance;
    }

    /**
	 * Get allowed HTML title tag.
	 *
	 * @param string $title_Tag HTML tag of title.
	 * @param array  $allowed_array Array of allowed HTML tags.
	 * @param string $default_tag Default HTML tag.
	 * @since 1.8.4
	 * @return string $title_Tag | $default_tag.
	 */
	public function rbea_post_title_tag_allowed_html( $title_Tag, $allowed_array, $default_tag ) {
		return in_array( $title_Tag, $allowed_array, true ) ? sanitize_key( $title_Tag ) : $default_tag;
	}

	/**
	 * Sanitize a UUID string to ensure it is valid.
	 *
	 * This function checks if the input string matches the UUID format
	 * and returns the sanitized UUID if valid. Otherwise, it returns an empty string.
	 *
	 * @param string $uuid The UUID string to sanitize.
	 * @return string The sanitized UUID, or an empty string if invalid.
	 */
	function rba_sanitize_uuid( $uuid ) {
		// Regular expression to match a valid UUID
		if ( preg_match( '/^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$/', $uuid ) ) {
			return $uuid; // Return the valid UUID
		}
		return ''; // Return an empty string if not valid
	}

}