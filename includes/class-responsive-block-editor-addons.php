<?php
/**
 * Core plugin class.
 *
 * @link       https://www.cyberchimps.com
 * @since      1.0.0
 *
 * @package    Responsive_Block_Editor_Addons
 * @subpackage Responsive_Block_Editor_Addons/includes
 */

/**
 * The core plugin class Responsive_Block_Editor_Addons.
 *
 * @since      1.0.0
 * @package    Responsive_Block_Editor_Addons
 * @subpackage Responsive_Block_Editor_Addons/includes
 * @author     CyberChimps <support@cyberchimps.com>
 */
class Responsive_Block_Editor_Addons {

	/**
	 * Table of Contents Present on a Page.
	 *
	 * @var bool
	 */
	public static $table_of_contents_flag = false;

	/**
	 * The unique identifier of this plugin.
	 *
	 * @since    1.0.0
	 * @access   protected
	 * @var      string    $plugin_name    The string used to uniquely identify this plugin.
	 */
	protected $plugin_name;

	/**
	 * The current version of the plugin.
	 *
	 * @since    1.0.0
	 * @access   protected
	 * @var      string    $version    The current version of the plugin.
	 */
	protected $version;

	/**
	 * Define the core functionality of the plugin.
	 *
	 * Set the plugin name and the plugin version that can be used throughout the plugin.
	 * Load the dependencies, define the locale, and set the hooks for the admin area and
	 * the public-facing side of the site.
	 *
	 * @since    1.0.0
	 */
	public function __construct() {
		if ( defined( 'RESPONSIVE_BLOCK_EDITOR_ADDONS_VER' ) ) {
			$this->version = RESPONSIVE_BLOCK_EDITOR_ADDONS_VER;
		} else {
			$this->version = '1.4.0';
		}
		$this->plugin_name = 'responsive-block-editor-addons';

		add_action( 'plugins_loaded', array( $this, 'responsive_block_editor_addons_loader' ) );

		add_action( 'enqueue_block_assets', array( $this, 'responsive_block_editor_addons_block_assets' ) );

		add_filter( 'block_categories_all', array( $this, 'responsive_block_editor_addons_add_custom_block_category' ), 9999999,2 );

		add_action( 'enqueue_block_editor_assets', array( $this, 'responsive_block_editor_addons_editor_assets' ) );

		add_action( 'admin_enqueue_scripts', array( &$this, 'responsive_block_editor_addons_admin_enqueue_styles' ) );

		add_action( 'admin_enqueue_scripts', array( $this, 'responsive_block_editor_addons_responsive_menu' ) );

		// Responsive Addons Menu.
		add_action( 'admin_menu', array( $this, 'responsive_block_editor_addons_admin_menu' ) );

		// Remove all admin notices from specific pages.
		add_action( 'admin_init', array( $this, 'responsive_block_editor_addons_admin_init' ) );

		// Redirect to Getting Started Page on Plugin Activation.
		add_action( 'admin_init', array( $this, 'responsive_block_editor_addons_maybe_redirect_to_getting_started' ) );

		add_action( 'wp_ajax_responsive_block_editor_post_pagination', array( $this, 'post_pagination' ) );
		add_action( 'wp_enqueue_scripts', array( $this, 'load_dashicons_front_end' ) );

		// Display admin notice for RBEA review.
		add_action( 'admin_notices', array( $this, 'rbea_admin_review_notice' ) );
		add_action( 'admin_init', array( $this, 'rba_notice_dismissed' ) );
		add_action( 'admin_init', array( $this, 'rba_notice_change_timeout' ) );

		add_action( 'wp_ajax_responsive_block_editor_cf7_shortcode', array( $this, 'cf7_shortcode' ) );
		add_action( 'wp_ajax_nopriv_responsive_block_editor_cf7_shortcode', array( $this, 'cf7_shortcode' ) );

		// Stores and Displays the blocks.
		add_action( 'init', array( $this, 'responsive_block_editor_addons_blocks_display' ) );

		// RBEA Getting Started Blocks Toggle.
		add_action( 'wp_ajax_rbea_blocks_toggle', array( $this, 'rbea_blocks_toggle' ) );
		add_action( 'wp_ajax_nopriv_rbea_blocks_toggle', array( $this, 'rbea_blocks_toggle' ) );
		add_action( 'rest_api_init', array( $this, 'register_custom_rest_endpoint' ) );
		add_action( 'wp_ajax_rbea_sync_library', array( $this, 'rbea_sync_library' ) );

		// RBA Form Block Processing.
		add_action( 'rest_api_init', array( $this, 'rba_form_block_processing' ) );

		add_action( 'responsive_register_admin_menu', array( $this, 'rba_register_admin_menu' ) );

		// Add media input script for media input
		add_action('admin_enqueue_scripts', array($this, 'my_enqueue_media_scripts'));
	}

	/**
	 * The name of the plugin used to uniquely identify it within the context of
	 * WordPress and to define internationalization functionality.
	 *
	 * @return string    The name of the plugin.
	 */
	public function get_plugin_name() {
		return $this->plugin_name;
	}

	/**
	 * Returns the version of plugin
	 *
	 * @return string    The version of the plugin.
	 */
	public function get_plugin_version() {
		return $this->version;
	}

	/**
	 * Sends the Post pagination markup to edit.js
	 *
	 * @since 1.0.3
	 */
	public function post_pagination() {
		check_ajax_referer( 'responsive_block_editor_ajax_nonce', 'nonce' );

		if ( isset( $_POST['attributes'] ) ) {

			$query = $this->get_query( $_POST['attributes'], 'grid' ); //phpcs:ignore

			$pagination_markup = $this->render_pagination( $query, $_POST['attributes'] ); //phpcs:ignore

			wp_send_json_success( $pagination_markup );
		}

		wp_send_json_error( ' No attributes recieved' );
	}

	/**
	 * Renders the post post pagination on server.
	 *
	 * @param object $query WP_Query object.
	 * @param array  $attributes Array of block attributes.
	 * @since 1.0.3
	 */
	public function render_pagination( $query, $attributes ) {

		$permalink_structure = get_option( 'permalink_structure' );
		$base                = untrailingslashit( wp_specialchars_decode( get_pagenum_link() ) );
		$base                = $this->build_base_url( $permalink_structure, $base );
		$format              = $this->paged_format( $permalink_structure, $base );
		$paged               = $this->get_paged( $query );
		$page_limit          = min( $attributes['pageLimit'], $query->max_num_pages );
		$page_limit          = isset( $page_limit ) ? $page_limit : $attributes['postsToShow'];
		$attributes['postsToShow'];

		$links = paginate_links(
			array(
				'base'      => $base . '%_%',
				'format'    => $format,
				'current'   => ( ! $paged ) ? 1 : $paged,
				'total'     => $page_limit,
				'type'      => 'array',
				'mid_size'  => 4,
				'end_size'  => 4,
				'prev_text' => $attributes['previousButtonText'],
				'next_text' => $attributes['nextButtonText'],
			)
		);

		if ( isset( $links ) ) {
			return wp_kses_post( implode( PHP_EOL, $links ) );
		}

		return '';
	}

	/**
	 * Gives the paged Query var.
	 *
	 * @param Object $query Query.
	 * @return int $paged Paged Query var.
	 * @since 1.0.3
	 */
	public static function get_paged( $query ) {

		global $paged;

		// Check the 'paged' query var.
		$paged_qv = $query->get( 'paged' );

		if ( is_numeric( $paged_qv ) ) {
			return $paged_qv;
		}

		// Check the 'page' query var.
		$page_qv = $query->get( 'page' );

		if ( is_numeric( $page_qv ) ) {
			return $page_qv;
		}

		// Check the $paged global?
		if ( is_numeric( $paged ) ) {
			return $paged;
		}

		return 0;
	}


	/**
	 * Returns the Paged Format.
	 *
	 * @param string $permalink_structure Premalink Structure.
	 * @param string $base Base.
	 * @since 1.0.3
	 */
	public static function paged_format( $permalink_structure, $base ) {

		$page_prefix = empty( $permalink_structure ) ? 'paged' : 'page';

		if ( ! empty( $permalink_structure ) ) {
			$format  = substr( $base, -1 ) !== '/' ? '/' : '';
			$format .= $page_prefix . '/';
			$format .= '%#%';
			$format .= substr( $permalink_structure, -1 ) === '/' ? '/' : '';
		} elseif ( empty( $permalink_structure ) || is_search() ) {
			$parse_url = wp_parse_url( $base, PHP_URL_QUERY );
			$format    = empty( $parse_url ) ? '?' : '&';
			$format   .= $page_prefix . '=%#%';
		}

		return $format;
	}

	/**
	 * Builds the base url.
	 *
	 * @param string $permalink_structure Premalink Structure.
	 * @param string $base Base.
	 * @since 1.0.3
	 */
	public static function build_base_url( $permalink_structure, $base ) {
		// Check to see if we are using pretty permalinks.
		if ( ! empty( $permalink_structure ) ) {

			if ( strrpos( $base, 'paged-' ) ) {
				$base = substr_replace( $base, '', strrpos( $base, 'paged-' ), strlen( $base ) );
			}

			// Remove query string from base URL since paginate_links() adds it automatically.
			// This should also fix the WPML pagination issue that was added since 1.0.3.
			if ( count( $_GET ) > 0 ) { // phpcs:ignore WordPress.Security.NonceVerification.Recommended
				$base = strtok( $base, '?' );
			}

			// Add trailing slash when necessary.
			if ( '/' === substr( $permalink_structure, -1 ) ) {
				$base = trailingslashit( $base );
			} else {
				$base = untrailingslashit( $base );
			}
		} else {
			$url_params = wp_parse_url( $base, PHP_URL_QUERY );

			if ( empty( $url_params ) ) {
				$base = trailingslashit( $base );
			}
		}

		return $base;
	}

	/**
	 * Returns Query.
	 *
	 * @param array  $attributes The block attributes.
	 * @param string $block_type The Block Type.
	 * @since 1.0.3
	 */
	public static function get_query( $attributes, $block_type ) {

		// Block type is grid/masonry/carousel/timeline.
		$query_args = array(
			'posts_per_page'      => ( isset( $attributes['postsToShow'] ) ) ? $attributes['postsToShow'] : 6,
			'post_status'         => 'publish',
			'post_type'           => ( isset( $attributes['postType'] ) ) ? $attributes['postType'] : 'post',
			'order'               => ( isset( $attributes['order'] ) ) ? $attributes['order'] : 'desc',
			'orderby'             => ( isset( $attributes['orderBy'] ) ) ? $attributes['orderBy'] : 'date',
			'ignore_sticky_posts' => 1,
			'paged'               => 1,
		);

		if ( $attributes['excludeCurrentPost'] ) {
			$query_args['post__not_in'] = array( get_the_ID() );
		}

		if ( isset( $attributes['categories'] ) && '' !== $attributes['categories'] ) {
			$query_args['tax_query'][] = array(
				'taxonomy' => ( isset( $attributes['taxonomyType'] ) ) ? $attributes['taxonomyType'] : 'category',
				'field'    => 'id',
				'terms'    => $attributes['categories'],
				'operator' => 'IN',
			);
		}

		if ( 'grid' === $block_type && isset( $attributes['postPagination'] ) && true === $attributes['postPagination'] ) {

			if ( get_query_var( 'paged' ) ) {

				$paged = get_query_var( 'paged' );

			} elseif ( get_query_var( 'page' ) ) {

				$paged = get_query_var( 'page' );

			} else {

				$paged = 1;

			}
			$query_args['posts_per_page'] = $attributes['postsToShow'];
			$query_args['paged']          = $paged;

		}

		if ( 'masonry' === $block_type && isset( $attributes['paginationType'] ) && 'none' !== $attributes['paginationType'] && isset( $attributes['paged'] ) ) {

			$query_args['paged'] = $attributes['paged'];

		}

		$query_args = apply_filters( "responsive_block_editor_post_query_args_{$block_type}", $query_args, $attributes );

		return new WP_Query( $query_args );
	}

	/**
	 * Register the menu for the plugin.
	 *
	 * @return void [description]
	 */
	public function responsive_block_editor_addons_admin_menu() {

		$theme = wp_get_theme();

		if ( 'Responsive' !== $theme->name && 'Responsive' !== $theme->parent_theme ) {
			add_menu_page( __( 'Responsive', 'responsive-block-editor-addons' ), __( 'Responsive', 'responsive-block-editor-addons' ), 'manage_options', 'responsive_block_editor_addons', array( $this, 'responsive_block_editor_addons_getting_started' ), esc_url( RESPONSIVE_BLOCK_EDITOR_ADDONS_URL ) . 'admin/images/responsive-add-ons-menu-icon.png', 59 );
			$parent_slug = 'responsive_block_editor_addons';
			do_action( 'responsive_register_admin_menu', $parent_slug );
		}

		if ( ( 'Responsive' === $theme->name || 'Responsive' === $theme->parent_theme ) && version_compare( RESPONSIVE_THEME_VERSION, '4.9.7.1', '<=' ) ) {
			add_menu_page(
				__( 'Responsive Blocks', 'responsive-block-editor-addons' ),
				__( 'Resp Blocks', 'responsive-block-editor-addons' ),
				'manage_options',
				'responsive_block_editor_addons',
				array( $this, 'responsive_block_editor_addons_getting_started' ),
				RESPONSIVE_BLOCK_EDITOR_ADDONS_URL . 'admin/images/responsive-block-editor-addons-menu-icon.svg',
				59
			);
		}
	}

	/**
	 * Display Getting Started Page.
	 *
	 * Output the content for the getting started page.
	 *
	 * @access public
	 */
	public function responsive_block_editor_addons_getting_started() {
		echo '<div id="rbea-getting-started-page-app"></div>';
	}

	/**
	 * Responsive_block_editor_addons_maybe_redirect_to_getting_started description
	 *
	 * @return [type] [description]
	 */
	public function responsive_block_editor_addons_maybe_redirect_to_getting_started() {
		if ( ! get_transient( 'responsive_block_editor_addons_activation_redirect' ) ) {
			return;
		}

		if ( wp_doing_ajax() ) {
			return;
		}

		delete_transient( 'responsive_block_editor_addons_activation_redirect' );

		if ( is_network_admin() || isset( $_GET['activate-multi'] ) ) { // phpcs:ignore
			return;
		}

		wp_safe_redirect( admin_url( 'admin.php?page=responsive_block_editor_addons' ) );

		exit;
	}


	/**
	 * Initialize the blocks
	 *
	 * @since    1.0.0
	 */
	public function responsive_block_editor_addons_loader() {
		/**
		* Load Post Grid PHP
		*/
		require_once RESPONSIVE_BLOCK_EDITOR_ADDONS_DIR . 'src/blocks/post-grid/index.php';
		require_once RESPONSIVE_BLOCK_EDITOR_ADDONS_DIR . 'src/blocks/post-carousel/index.php';
		require_once RESPONSIVE_BLOCK_EDITOR_ADDONS_DIR . 'src/blocks/gallery-masonry/index.php';
		require_once RESPONSIVE_BLOCK_EDITOR_ADDONS_DIR . 'src/blocks/accordion/index.php';
		require_once RESPONSIVE_BLOCK_EDITOR_ADDONS_DIR . 'src/blocks/post-timeline/index.php';
		require_once RESPONSIVE_BLOCK_EDITOR_ADDONS_DIR . 'src/blocks/image-slider/index.php';
		require_once RESPONSIVE_BLOCK_EDITOR_ADDONS_DIR . 'src/blocks/testimonial-slider/index.php';
		require_once RESPONSIVE_BLOCK_EDITOR_ADDONS_DIR . 'src/utils/fonts.php';
		require_once RESPONSIVE_BLOCK_EDITOR_ADDONS_DIR . 'classes/class-responsive-block-editor-addons-frontend-styles-helper.php';
		require_once RESPONSIVE_BLOCK_EDITOR_ADDONS_DIR . 'classes/class-responsive-block-editor-addons-frontend-styles.php';
		require_once RESPONSIVE_BLOCK_EDITOR_ADDONS_DIR . 'src/blocks/inline-notice/index.php';
		require_once RESPONSIVE_BLOCK_EDITOR_ADDONS_DIR . 'src/blocks/taxonomy-list/index.php';
		require_once RESPONSIVE_BLOCK_EDITOR_ADDONS_DIR . 'src/blocks/instagram/index.php';
		require_once RESPONSIVE_BLOCK_EDITOR_ADDONS_DIR . 'src/blocks/image-hotspot/index.php';
		require_once RESPONSIVE_BLOCK_EDITOR_ADDONS_DIR . 'src/blocks/portfolio/index.php';
		require_once RESPONSIVE_BLOCK_EDITOR_ADDONS_DIR . 'src/blocks/form/index.php';

		/**
		 * REST API Endpoints for Layouts.
		 */
		require_once RESPONSIVE_BLOCK_EDITOR_ADDONS_DIR . '/includes/layout/layout-endpoints.php';

	}

	/** Adds the Responsive Blocks block category.
	 *
	 * @param array $categories Existing block categories.
	 *
	 * @return array Updated block categories.
	 */
	public function responsive_block_editor_addons_add_custom_block_category( $categories ) {
		$category = array(
			'slug'  => 'responsive_block_editor_addons',
			'title' => __( 'Responsive Gutenberg Blocks', 'responsive-block-editor-addons' ),
		);

		if ( is_array( $categories ) ) {
			$existingSlugs = array_column( $categories, 'slug' );

			if ( is_array( $existingSlugs ) ) {
				if ( in_array( $category['slug'], $existingSlugs ) ) {
					return $categories; // Bail early if category exists
				}
			}
		}

		array_unshift( $categories, $category ); // Add category on top of pile

		return $categories;
	}


	/**
	 * Get Post Types.
	 *
	 * @since 1.0.3
	 * @access public
	 */
	public static function get_post_types() {

		$post_types = get_post_types(
			array(
				'public'       => true,
				'show_in_rest' => true,
			),
			'objects'
		);

		$options = array();

		foreach ( $post_types as $post_type ) {
			if ( 'product' === $post_type->name ) {
				continue;
			}

			if ( 'attachment' === $post_type->name ) {
				continue;
			}

			$options[] = array(
				'value' => $post_type->name,
				'label' => $post_type->label,
			);
		}

		return $options;
	}


	/**
	 * Enqueue assets for backend editor
	 *
	 * @since 1.0.0
	 */
	public function responsive_block_editor_addons_editor_assets() {
		$responsive_block_editor_ajax_nonce = wp_create_nonce( 'responsive_block_editor_ajax_nonce' );

		// Load the compiled blocks into the editor.
		wp_enqueue_script(
			'responsive_block_editor_addons-block-js',
			RESPONSIVE_BLOCK_EDITOR_ADDONS_URL . 'dist/responsive-block-editor-addons.js',
			array( 'lodash', 'react', 'react-dom', 'wp-api-fetch', 'wp-blob', 'wp-block-editor', 'wp-blocks', 'wp-components', 'wp-compose', 'wp-data', 'wp-date', 'wp-dom-ready', 'wp-edit-post', 'wp-editor', 'wp-element', 'wp-hooks', 'wp-i18n', 'wp-keycodes', 'wp-plugins', 'wp-polyfill', 'wp-rich-text', 'wp-token-list', 'wp-url', 'jquery' ),
			filemtime( RESPONSIVE_BLOCK_EDITOR_ADDONS_DIR . 'dist/responsive-block-editor-addons.js' ),
			true
		);

		$user_data = wp_get_current_user();
		unset( $user_data->user_pass, $user_data->user_email );

		// Pass in REST URL.
		wp_localize_script(
			'responsive_block_editor_addons-block-js',
			'responsive_globals',
			array(
				'rest_url'                           => esc_url( rest_url() ),
				'ajax_url'                           => admin_url( 'admin-ajax.php' ),
				'user_data'                          => $user_data,
				'pro_activated'                      => false,
				'is_wpe'                             => function_exists( 'is_wpe' ),
				'post_types'                         => $this->get_post_types(),
				'all_taxonomy'                       => $this->get_related_taxonomy(),
				'responsive_block_editor_ajax_nonce' => $responsive_block_editor_ajax_nonce,
				'taxonomy_list'                      => $this->get_taxonomy_list(),
				'home_url'                           => home_url(),
				'cf7_forms'                          => $this->get_cf7_forms(),
				'plugin_url'						 =>	plugin_dir_url( dirname( __FILE__ ) )
			)
		);

		// Load the compiled styles into the editor.
		wp_enqueue_style(
			'responsive_block_editor_addons-block-editor-css',
			RESPONSIVE_BLOCK_EDITOR_ADDONS_URL . 'dist/responsive-block-editor-addons-editor.css',
			array( 'wp-edit-blocks' ),
			filemtime( RESPONSIVE_BLOCK_EDITOR_ADDONS_DIR . 'dist/responsive-block-editor-addons-editor.css' )
		);

		wp_enqueue_script( 'responsive_block_editor_addons_deactivate_blocks', RESPONSIVE_BLOCK_EDITOR_ADDONS_URL . 'admin/js/responsive-block-editor-addons-blocks-deactivate.js', array( 'wp-blocks' ), RESPONSIVE_BLOCK_EDITOR_ADDONS_VER, true );

		$blocks = get_option( 'rbea_blocks' );

		$deactivated_blocks = array();

		foreach ( $blocks as $block ) {
			if ( false === $block['status'] ) {
				array_push( $deactivated_blocks, $block );
			}
		}

		wp_localize_script(
			'responsive_block_editor_addons_deactivate_blocks',
			'rbea_deactivate_blocks',
			array(
				'deactivated_blocks' => $deactivated_blocks,
			)
		);
	}

	/**
	 * Get all taxonomies list.
	 *
	 * @since 1.0.0
	 * @access public
	 */
	public static function get_taxonomy_list() {
		$post_types   = self::get_post_types();
		$return_array = array();
		foreach ( $post_types as $key => $value ) {
			$post_type         = $value['value'];
			$taxonomies        = get_object_taxonomies( $post_type, 'objects' );
			$data              = array();
			$get_singular_name = get_post_type_object( $post_type );
			foreach ( $taxonomies as $tax_slug => $tax ) {
				if ( ! $tax->public || ! $tax->show_ui || ! $tax->show_in_rest ) {
					continue;
				}
				$data[ $tax_slug ] = $tax;
				$terms             = get_terms( $tax_slug );
				$related_tax_terms = array();
				if ( ! empty( $terms ) ) {
					foreach ( $terms as $t_index => $t_obj ) {
						$related_tax_terms[] = array(
							'id'            => $t_obj->term_id,
							'name'          => $t_obj->name,
							'count'         => $t_obj->count,
							'link'          => get_term_link( $t_obj->term_id ),
							'singular_name' => $get_singular_name->labels->singular_name,
						);
					}
					$return_array[ $post_type ]['terms'][ $tax_slug ] = $related_tax_terms;
				}
				$new_categories_list = get_terms(
					array(
						'taxonomy'   => $tax_slug,
						'hide_empty' => true,
						'parent'     => 0,
					)
				);
				$related_tax         = array();
				if ( ! empty( $new_categories_list ) ) {
					foreach ( $new_categories_list as $t_index => $t_obj ) {
						$child_arg     = array(
							'taxonomy'   => $tax_slug,
							'hide_empty' => true,
							'parent'     => $t_obj->term_id,
						);
						$child_cat = get_terms( $child_arg );
						$child_cat_arr = $child_cat ? $child_cat : null;
						$related_tax[] = array(
							'id'            => $t_obj->term_id,
							'name'          => $t_obj->name,
							'count'         => $t_obj->count,
							'link'          => get_term_link( $t_obj->term_id ),
							'singular_name' => $get_singular_name->labels->singular_name,
							'children'      => $child_cat_arr,
						);
					}
					$return_array[ $post_type ]['without_empty_taxonomy'][ $tax_slug ] = $related_tax;
				}
				$new_categories_list_empty_tax = get_terms(
					array(
						'taxonomy'   => $tax_slug,
						'hide_empty' => false,
						'parent'     => 0,
					)
				);
				$related_tax_empty_tax         = array();
				if ( ! empty( $new_categories_list_empty_tax ) ) {
					foreach ( $new_categories_list_empty_tax as $t_index => $t_obj ) {
						$child_arg_empty_tax     = array(
							'taxonomy'   => $tax_slug,
							'hide_empty' => false,
							'parent'     => $t_obj->term_id,
						);
						$child_cat_empty_tax = get_terms( $child_arg_empty_tax );
						$child_cat_empty_tax_arr = $child_cat_empty_tax ? $child_cat_empty_tax : null;
						$related_tax_empty_tax[] = array(
							'id'            => $t_obj->term_id,
							'name'          => $t_obj->name,
							'count'         => $t_obj->count,
							'link'          => get_term_link( $t_obj->term_id ),
							'singular_name' => $get_singular_name->labels->singular_name,
							'children'      => $child_cat_empty_tax_arr,
						);
					}
					$return_array[ $post_type ]['with_empty_taxonomy'][ $tax_slug ] = $related_tax_empty_tax;
				}
			}
			$return_array[ $post_type ]['taxonomy'] = $data;
		}
		return $return_array;
	}

	/**
	 * Get all taxonomies.
	 *
	 * @since 1.0.3
	 * @access public
	 */
	public static function get_related_taxonomy() {

		$post_types = self::get_post_types();

		$return_array = array();

		foreach ( $post_types as $key => $value ) {
			$post_type = $value['value'];

			$taxonomies = get_object_taxonomies( $post_type, 'objects' );
			$data       = array();

			foreach ( $taxonomies as $tax_slug => $tax ) {
				if ( ! $tax->public || ! $tax->show_ui || ! $tax->show_in_rest ) {
					continue;
				}

				$data[ $tax_slug ] = $tax;

				$terms = get_terms( $tax_slug );

				$related_tax = array();

				if ( ! empty( $terms ) ) {
					foreach ( $terms as $t_index => $t_obj ) {
						$related_tax[] = array(
							'id'   => $t_obj->term_id,
							'name' => $t_obj->name,
						);
					}

					$return_array[ $post_type ]['terms'][ $tax_slug ] = $related_tax;
				}
			}

			$return_array[ $post_type ]['taxonomy'] = $data;
		}

		return $return_array;
	}

	/**
	 * Enqueue assets for frontend and backend
	 *
	 * @since 1.0.0
	 */
	public function responsive_block_editor_addons_block_assets() {

		if ( ! is_admin() ) {

			$post = get_post();
			$widget_blocks = get_option('widget_block');

			$flag = false;

			if ( ($post && ! empty( $post )) || !empty($widget_blocks) ) {
				$blocks = [];

				/**
 				* Handle potential 'post_content' null warning.
 				* This warning typically occurs when users have added widget blocks from the Responsive theme
 				* but there is no post content to render. This ensures compatibility by preventing
 				* errors in scenarios where widget blocks exist without posts.
 				*/
				if(!empty($post)) {
					$blocks = parse_blocks( $post->post_content );
				}

				foreach ($widget_blocks as $widget) {
					if (!empty($widget['content'])) {
						$flag = true;
						break;
					}
				}

				if(!empty($blocks)) {
					foreach ( $blocks as $block ) {
						// Retrieve all block names for the current block and its inner blocks.
						$getBlockNames = $this->rbaGetBlockNames( $block );
	
						// If true is returned, break out of the loop early.
						if ( $getBlockNames === true ) {
							$flag = true;
							break;
						}
						// Check the block names if array is returned.
						if ( !empty($getBlockNames) ) {
							foreach ( $getBlockNames as $blockName ) {
								if ( strpos( $blockName, 'responsive-block-editor-addons' ) !== false ) {
									$flag = true;
									break 2;  // Exit both loops when match is found.
								}
							}
						}
					}
				}

			}

			if ( $flag ) {

				// Load the compiled blocks into the editor.
				wp_enqueue_script(
					'responsive_blocks-frontend-js',
					RESPONSIVE_BLOCK_EDITOR_ADDONS_URL . 'dist/frontend_blocks.js',
					array( 'jquery' ),
					filemtime( RESPONSIVE_BLOCK_EDITOR_ADDONS_DIR . 'dist/frontend_blocks.js' ),
					true
				);

				// Load the compiled styles.
				wp_enqueue_style(
					'responsive_block_editor_addons-style-css',
					RESPONSIVE_BLOCK_EDITOR_ADDONS_URL . 'dist/responsive-block-editor-addons-style.css',
					array(),
					filemtime( RESPONSIVE_BLOCK_EDITOR_ADDONS_DIR . 'dist/responsive-block-editor-addons-style.css' )
				);
			} else {
				return;
			}
		}

		wp_register_script(
			'popper',
			RESPONSIVE_BLOCK_EDITOR_ADDONS_URL . 'dist/js/vendors/tippy.js/popper.min.js',
			array( 'jquery' ),
			RESPONSIVE_BLOCK_EDITOR_ADDONS_VER,
			true
		);

		wp_register_script(
			'tippy',
			RESPONSIVE_BLOCK_EDITOR_ADDONS_URL . 'dist/js/vendors/tippy.js/tippy-bundle.umd.min.js',
			array( 'jquery', 'popper' ),
			RESPONSIVE_BLOCK_EDITOR_ADDONS_VER,
			true
		);

		if ( is_admin() ) {
			if ( ! wp_script_is( 'popper', 'enqueued' ) ) {
				wp_enqueue_script( 'popper' );
			}
			if ( ! wp_script_is( 'tippy', 'enqueued' ) ) {
				wp_enqueue_script( 'tippy' );
			}
			wp_enqueue_script(//phpcs:ignore
				'responsive_block_editor_addons-image-hotspot-script-unescape',
				RESPONSIVE_BLOCK_EDITOR_ADDONS_URL . 'dist/js/vendors/lodash.unescape/unescape.min.js',
				array(),
				RESPONSIVE_BLOCK_EDITOR_ADDONS_VER,
				true
			);
			wp_enqueue_script(//phpcs:ignore
				'responsive_block_editor_addons-image-hotspot-script',
				RESPONSIVE_BLOCK_EDITOR_ADDONS_URL . 'dist/js/vendors/draggabilly.pkgd.min.js',
				array( 'jquery' ),
				RESPONSIVE_BLOCK_EDITOR_ADDONS_VER,
				true
			);
			wp_enqueue_script(//phpcs:ignore
				'responsive_block_editor_addons-image-hotspot-script-waypoints',
				RESPONSIVE_BLOCK_EDITOR_ADDONS_URL . 'dist/js/vendors/waypoints/lib/jquery.waypoints.min.js',
				array( 'jquery' ),
				RESPONSIVE_BLOCK_EDITOR_ADDONS_VER,
				true
			);
			wp_enqueue_style(
				'responsive_block_editor_addons-image-hotspot-tippy',
				RESPONSIVE_BLOCK_EDITOR_ADDONS_URL . 'dist/js/vendors/tippy.js/themes.css',
				array(),
				filemtime( RESPONSIVE_BLOCK_EDITOR_ADDONS_DIR . 'dist/js/vendors/tippy.js/themes.css' )
			);
			wp_enqueue_style(
				'responsive_block_editor_addons-style-css-tippy-animation',
				RESPONSIVE_BLOCK_EDITOR_ADDONS_URL . 'dist/js/vendors/tippy.js/animations.css',
				array(),
				filemtime( RESPONSIVE_BLOCK_EDITOR_ADDONS_DIR . 'dist/js/vendors/tippy.js/animations.css' )
			);
		}
		// Load the compiled styles.
		wp_enqueue_style(
			'responsive_block_editor_addons-style-css',
			RESPONSIVE_BLOCK_EDITOR_ADDONS_URL . 'dist/responsive-block-editor-addons-style.css',
			array(),
			filemtime( RESPONSIVE_BLOCK_EDITOR_ADDONS_DIR . 'dist/responsive-block-editor-addons-style.css' )
		);

		// Load the compiled blocks into the editor.
		wp_enqueue_script(
			'responsive_blocks-frontend-js',
			RESPONSIVE_BLOCK_EDITOR_ADDONS_URL . 'dist/frontend_blocks.js',
			array( 'jquery' ),
			filemtime( RESPONSIVE_BLOCK_EDITOR_ADDONS_DIR . 'dist/frontend_blocks.js' ),
			true
		);
		wp_enqueue_style(
			'animation.css',
			RESPONSIVE_BLOCK_EDITOR_ADDONS_URL . 'dist/css/animation.css',
			array(),
			filemtime( RESPONSIVE_BLOCK_EDITOR_ADDONS_DIR . 'dist/css/animation.css' )
		);
	}

	public function rbaGetBlockNames($blocks, &$blockNames = []) {

		// Check if the 'blockName' key exists and store its value
		if (isset($blocks['blockName'])) {
			$blockNames[] = $blocks['blockName'];

			// If the blockName contains 'responsive-block-editor-addons', return true immediately.
			if (strpos($blocks['blockName'], 'responsive-block-editor-addons') !== false) {
				return true;
			}
		}

		// If 'innerBlocks' exists, iterate over each block and call the function recursively.
		if (isset($blocks['innerBlocks']) && is_array($blocks['innerBlocks'])) {
			foreach ($blocks['innerBlocks'] as $innerBlock) {
				// If any recursive call returns true, exit early.
				if ($this->rbaGetBlockNames($innerBlock, $blockNames) === true) {
					return true;
				}
			}
		}

		return $blockNames;
	}

	/**
	 * Check if RST plugin is installed or activated.
	 *
	 * @return string
	 */
	public function rst_status() {
		// Check if RST is activate.

		$rst_path = 'responsive-add-ons/responsive-add-ons.php';

		if ( is_plugin_active( $rst_path ) ) {
			return 'activated';
		}

		// Check if RST is installed.
		$installed_plugins = get_plugins();

		if ( isset( $installed_plugins[ $rst_path ] ) ) {
			return 'activate';
		} else {
			return 'install';
		}
	}

	/**
	 * Include Admin css
	 *
	 * @return void [description]
	 */
	public function my_enqueue_media_scripts() {
		wp_enqueue_media();
	}

	/**
	 * Include Admin css
	 *
	 * @return void [description]
	 */
	public function responsive_block_editor_addons_admin_enqueue_styles() {
		// Responsive Ready Sites admin styles.
		wp_register_style( 'responsive-block-editor-addons-admin', RESPONSIVE_BLOCK_EDITOR_ADDONS_URL . 'admin/css/responsive-block-editor-addons-admin.css', false, RESPONSIVE_BLOCK_EDITOR_ADDONS_VER );

		wp_enqueue_style( 'responsive-block-editor-addons-admin' );

		if ( isset( $_GET['page'] ) && 'responsive_block_editor_addons' === $_GET['page'] ) {

			wp_register_style( 'responsive-block-editor-addons-getting-started', RESPONSIVE_BLOCK_EDITOR_ADDONS_URL . 'admin/css/responsive-block-editor-addons-getting-started.css', false, RESPONSIVE_BLOCK_EDITOR_ADDONS_VER );

			wp_enqueue_style( 'responsive-block-editor-addons-getting-started' );

			wp_enqueue_script( 'rbea-toastify', 'https://cdn.jsdelivr.net/npm/toastify-js', array( 'jquery' ), RESPONSIVE_BLOCK_EDITOR_ADDONS_VER, true );

			wp_enqueue_script(
				'responsive-block-editor-addons-admin-jsfile',
				RESPONSIVE_BLOCK_EDITOR_ADDONS_URL . 'dist/responsive-block-editor-addons-getting-started.js',
				array( 'jquery', 'react', 'react-dom' ),
				RESPONSIVE_BLOCK_EDITOR_ADDONS_VER,
				true
			);

			wp_enqueue_script( 'updates' );

			require_once RESPONSIVE_BLOCK_EDITOR_ADDONS_DIR . 'includes/class-responsive-block-editor-addons-blocks-updater.php';

			$rbea_blocks = new Responsive_Block_Editor_Addons_Blocks_Updater();

			$blocks = $rbea_blocks->get_rbea_blocks();

			if ( $rbea_blocks->is_blocks_in_db() ) {
				$blocks = get_option( 'rbea_blocks' );
			}

			$rst_path = 'responsive-add-ons/responsive-add-ons.php';

			$nonce = add_query_arg(
				array(
					'action'        => 'activate',
					'plugin'        => rawurlencode( $rst_path ),
					'plugin_status' => 'all',
					'paged'         => '1',
					'_wpnonce'      => wp_create_nonce( 'activate-plugin_' . $rst_path ),
				),
				network_admin_url( 'plugins.php' )
			);

			wp_localize_script(
				'responsive-block-editor-addons-admin-jsfile',
				'rbealocalize',
				array(
					'ajaxurl'               => admin_url( 'admin-ajax.php' ),
					'responsiveurl'         => RESPONSIVE_BLOCK_EDITOR_ADDONS_URL,
					'siteurl'               => site_url(),
					'installing'            => esc_html__( 'Installing ', 'responsive' ),
					'activating'            => esc_html__( 'Activating ', 'responsive' ),
					'verify_network'        => esc_html__( 'Not connect. Verify Network.', 'responsive' ),
					'page_not_found'        => esc_html__( 'Requested page not found. [404]', 'responsive' ),
					'internal_server_error' => esc_html__( 'Internal Server Error [500]', 'responsive' ),
					'json_parse_failed'     => esc_html__( 'Requested JSON parse failed', 'responsive' ),
					'timeout_error'         => esc_html__( 'Time out error', 'responsive' ),
					'ajax_req_aborted'      => esc_html__( 'Ajax request aborted', 'responsive' ),
					'uncaught_error'        => esc_html__( 'Uncaught Error', 'responsive' ),
					'rbea_version'          => RESPONSIVE_BLOCK_EDITOR_ADDONS_VER,
					'review_link'           => esc_url( 'https://wordpress.org/support/plugin/responsive-block-editor-addons/reviews/#new-post' ),
					'rst_url'               => esc_url( 'https://wordpress.org/plugins/responsive-add-ons/' ),
					'rbea_blocks'           => $blocks,
					'nonce'                 => wp_create_nonce( 'responsive_block_editor_ajax_nonce' ),
					'rst_status'            => $this->rst_status(),
					'rst_nonce'             => $nonce,
					'rst_redirect'          => admin_url( 'admin.php?page=responsive_add_ons' ),
				)
			);

			add_filter( 'admin_footer_text', '__return_false' );
			remove_filter( 'update_footer', 'core_update_footer' );
		}
	}

	/**
	 * Add Icon for Theme Builder under Elementor Addons Submenu.
	 *
	 * @return void [description]
	 */
	public function responsive_block_editor_addons_responsive_menu() {
		wp_enqueue_script( 'responsive_block_editor_addons_responsive_menu', RESPONSIVE_BLOCK_EDITOR_ADDONS_URL . 'admin/js/responsive-menu.js', array( 'jquery' ), RESPONSIVE_BLOCK_EDITOR_ADDONS_VER, true );
	}

	/**
	 * On admin init.
	 *
	 * Preform actions on WordPress admin initialization.
	 *
	 * Fired by `admin_init` action.
	 *
	 * @access public
	 */
	public function responsive_block_editor_addons_admin_init() {

		// Update option autoload value.
		if( get_option( 'total-responsive-sites-data' ) ) {

			global $wpdb;
		
			$option_name = 'total-responsive-sites-data';

			$autoload_value = $wpdb->get_var($wpdb->prepare(
				"SELECT autoload FROM {$wpdb->options} WHERE option_name = %s",
				$option_name
			));
		
			if( $autoload_value && 'no' !== $autoload_value ) {
		
				$sql = $wpdb->prepare(
					"UPDATE {$wpdb->options} SET autoload = %s WHERE option_name = %s",
					'no',
					$option_name
				);

				// Execute the SQL query
				$result = $wpdb->query($sql);

			}
		}

		$this->responsive_block_editor_addons_remove_all_admin_notices();
	}

	/**
	 * [responsive_block_editor_addons_remove_all_admin_notices description]
	 */
	private function responsive_block_editor_addons_remove_all_admin_notices() {
		$responsive_block_editor_addons_pages = array(
			'responsive_block_editor_addons',
			'responsive-block-editor-addons',
		);

		if ( empty( $_GET['page'] ) || ! in_array( $_GET['page'], $responsive_block_editor_addons_pages, true ) ) { //phpcs:ignore
			return;
		}

		remove_all_actions( 'admin_notices' );
	}

	/**
	 * Adding Dashicons in WordPress Front-end
	 */
	public function load_dashicons_front_end() {
		wp_enqueue_style( 'dashicons' );
	}

	/**
	 * Add Wrapper to all the Blocks for fetching the Table of Contents Headings.
	 *
	 * @param string $content Post Content.
	 *
	 * @since 1.22.1
	 */
	public function add_table_of_contents_wrapper( $content ) {

		if ( true === self::$table_of_contents_flag ) {
			return '<div class="responsive-block-editor-addons-toc__entry-content"></div>' . $content;
		}

		return $content;
	}

	/**
	 * Function to display RBEA review notice on admin page.
	 *
	 * @return void
	 */
	public function rbea_admin_review_notice() {

		if ( false === get_option( 'responsive_block_editor_addons_review_notice' ) ) {
			set_transient( 'responsive_block_editor_addons_ask_review_flag', true, 7 * 24 * 60 * 60 );
			update_option( 'responsive_block_editor_addons_review_notice', true );
		} elseif ( false === (bool) get_transient( 'responsive_block_editor_addons_ask_review_flag' ) && false === get_option( 'responsive_block_editor_addons_review_notice_dismissed' ) ) {
			$image_url = plugins_url( 'admin/images/responsive-blocks.svg', __DIR__ );
			echo sprintf(
				'<div class="notice notice-info rbea-ask-for-review-notice">
					<div class="rbea-notice-content-wrapper">
						<div class="rbea-notice-image">
							<img src="%8$s" class="custom-logo" alt="Responsive Blocks" itemprop="logo">
						</div>
						<div class="rbea-notice-content">
							<div class="rbea-notice-heading">
								%2$s
							</div>
							<p class="rbea-review-request-text rbea-review-notice-text-container">%3$s</p>
							<div class="rbea-review-notice-container">
								<a href="%1$s" class="rbea-notice-close rbea-review-notice button-primary rbea-review-dismiss-btn" target="_blank">
									%4$s
								</a>
								<span class="dashicons dashicons-calendar"></span>
								<a href="%9$s" data-repeat-notice-after="60" class="rbea-notice-close rbea-review-notice">
									%5$s
								</a>
								<span class="dashicons dashicons-smiley"></span>
								<a href="%7$s" class="rbea-notice-close rbea-review-notice">
									%6$s
								</a>
							</div>
						</div>
					</div>
					<div>
						<a href="%7$s"><button type="button" class="rbea-ask-review-notice-dismiss"></button></a>
					</div>
				</div>',
				esc_url('https://wordpress.org/support/plugin/responsive-block-editor-addons/reviews/'),
				esc_html__( 'Hello! Seems like you have used Responsive Blocks Plugin to build this website — Thanks a ton!', 'responsive-block-editor-addons' ),
				esc_html__( 'Could you please do us a BIG favor and give it a 5-star rating on WordPress? This would boost our motivation and help other users make a comfortable decision while choosing the Responsive Blocks.', 'responsive-block-editor-addons' ),
				esc_html__( 'Ok, you deserve it', 'responsive-block-editor-addons' ),
				esc_html__( 'Nope, maybe later', 'responsive-block-editor-addons' ),
				esc_html__( 'I already did', 'responsive-block-editor-addons' ),
				esc_url('?responsive-block-editor-addons-notice-dismissed=true'),
				esc_url($image_url),
				esc_url('?responsive-block-editor-addons-review-notice-change-timeout=true')
			);
		}
	}

	/**
	 * Removed Ask For Review Admin Notice when dismissed.
	 */
	public function rba_notice_dismissed() {
		if ( isset( $_GET['responsive-block-editor-addons-notice-dismissed'] ) ) {
			update_option( 'responsive_block_editor_addons_review_notice_dismissed', true );
			wp_safe_redirect( remove_query_arg( array( 'responsive-block-editor-addons-notice-dismissed' ), wp_get_referer() ) );
		}
	}

	/**
	 * Removed Ask For Review Admin Notice when dismissed.
	 */
	public function rba_notice_change_timeout() {
		if ( isset( $_GET['responsive-block-editor-addons-review-notice-change-timeout'] ) ) {
			set_transient( 'responsive_block_editor_addons_ask_review_flag', true, DAY_IN_SECONDS );
			wp_safe_redirect( remove_query_arg( array( 'responsive-block-editor-addons-review-notice-change-timeout' ), wp_get_referer() ) );
		}
	}

	/**
	 * Stores and Displays the Blocks.
	 *
	 * @since 1.7.0
	 */
	public function responsive_block_editor_addons_blocks_display() {

		require_once RESPONSIVE_BLOCK_EDITOR_ADDONS_DIR . 'includes/class-responsive-block-editor-addons-blocks-updater.php';

		$rbea_blocks = new Responsive_Block_Editor_Addons_Blocks_Updater();

		$rbea_path = 'responsive-block-editor-addons/responsive-block-editor-addons.php';

		// Get the current value of 'rbea_plugin_updated' option
        $exist_rbea_blocks_data_update = get_option( 'rbea_blocks_data_update', false );

		// If the option does not exist, add it with a value of false
		if ( ! $exist_rbea_blocks_data_update) {
			$rbea_blocks->insert_blocks_data();
            update_option( 'rbea_blocks_data_update', true );
		}

		if ( ! function_exists( 'get_plugins' ) ) {
			require_once ABSPATH . 'wp-admin/includes/plugin.php';
		}

		$installed_plugins = get_plugins();

		if ( isset( $installed_plugins[ $rbea_path ] ) ) {
			$installed_rbea_version = $installed_plugins[ $rbea_path ]['Version'];

			$blocks = get_option( 'rbea_blocks' );
			if ( ! $blocks ) {
				$rbea_blocks->insert_blocks_data();
			}
		}

	}

	/**
	 * Saves the block data in database when the block is toggled.
	 *
	 * @since 1.7.0
	 */
	public function rbea_blocks_toggle() {
		check_ajax_referer( 'responsive_block_editor_ajax_nonce', 'nonce' );

		if ( ! isset( $_POST['value'] ) ) {
			wp_send_json_error();
		}
		$value = json_decode( stripslashes( wp_unslash( $_POST['value'] ) ), true );

		update_option( 'rbea_blocks', $value );

		wp_send_json_success();
	}


		/**
		 * Function to integrate CF7 Forms.
		 *
		 * @since 1.10.0
		 */
	public function get_cf7_forms() {
		$field_options = array();

		if ( class_exists( 'WPCF7_ContactForm' ) ) {
			$args             = array(
				'post_type'      => 'wpcf7_contact_form',
				'posts_per_page' => -1,
			);
			$forms            = get_posts( $args );
			$field_options[0] = array(
				'value' => -1,
				'label' => __( 'Select Form', 'responsive-block-editor-addons' ),
			);
			if ( $forms ) {
				foreach ( $forms as $form ) {
					$field_options[] = array(
						'value' => $form->ID,
						'label' => $form->post_title,
					);
				}
			}
		}

		if ( empty( $field_options ) ) {
			$field_options = array(
				'-1' => __( 'You have not added any Contact Form 7 yet.', 'responsive-block-editor-addons' ),
			);
		}
		return $field_options;
	}


	/**
	 * Renders the Contact Form 7 shortcode.
	 *
	 * @since 1.10.0
	 */
	public function cf7_shortcode() {

		$id = intval( $_POST['formId'] );

		if ( $id && 0 !== $id && -1 !== $id ) {
			$data['html'] = do_shortcode( '[contact-form-7 id="' . $id . '" ajax="true"]' );
		} else {
			$data['html'] = '<p>' . __( 'Please select a valid Contact Form 7.', 'responsive-block-editor-addons' ) . '</p>';
		}
		wp_send_json_success( $data );
	}

	public function custom_rest_endpoint_callback( $data ) {

		$params = $data->get_params();

		if ( ! isset( $params['sync'] ) ) {
			return new WP_REST_Response( array( 'error' => 'Insufficient params' ), 500 );
		}

		// Check if the option exists and its value is "Activated".
		$is_pro_active = get_option( 'wc_am_client_responsive_addons_pro_activated' );

		if ( 'false' === $params['sync'] ) {
			$response_data = array(
				'pro_active' => 'Activated' === $is_pro_active,
			);
		}

		if ( 'true' === $params['sync'] ) {
			$is_xml_updated = get_option( 'last_xml_export_checksums' );
			$data           = get_option( 'total-responsive-sites-data' );
			// Fetch data from the external endpoint.
			$external_data = wp_remote_get( 'https://ccreadysites.cyberchimps.com/wp-json/wp/v2/get-last-xml-export-checksum2' );

			if ( is_wp_error( $external_data ) ) {
				// Handle error from the external endpoint, if any.
				return new WP_REST_Response( array( 'error' => $external_data->get_error_message() ), 500 );
			}

			$external_data_body    = wp_remote_retrieve_body( $external_data );
			$external_data_decoded = json_decode( $external_data_body, true );
			$response_data         = array(
				'pro_active' => 'Activated' === $is_pro_active,
				'xml_update' => $external_data_decoded['last_xml_export_checksums'] !== $is_xml_updated,
				'data'       => $data,
			);
		}

		return new WP_REST_Response( $response_data, 200 );
	}

	public function register_custom_rest_endpoint()
	{
		register_rest_route(
			'custom/v1', // Namespace
			'/responsive-pro-activation-status/', // Route
			array(
				'methods'             => 'GET',
				'callback'            => array($this, 'custom_rest_endpoint_callback'),
				'permission_callback' => '__return_true', // No specific permissions for simplicity
			)
		);
	}

	public function rbea_sync_library()
	{
		// Step 1: Get the count from the API hit
		$count_api_url = 'https://ccreadysites.cyberchimps.com/wp-json/wp/v2/get-ready-sites-requests-count';
		$count_response = wp_remote_get($count_api_url);

		if (is_wp_error($count_response)) {
			wp_send_json_error();
		}

		$total_count = intval(wp_remote_retrieve_body($count_response));

		if ($total_count <= 0) {
			wp_send_json_error();
		}

		// Step 2: Calculate total pages
		$per_page = 15;
		$total_pages = ceil(($total_count * $per_page) / 100);

		// Step 3: Store total pages in wp_options table
		update_option('total-responsive-site-pages', $total_pages);
		$all_filtered_data = array();

		// Step 4 and 5: Loop through pages and filter the response
		for ($page = 1; $page <= $total_pages; $page++) {

			$api_url = "https://ccreadysites.cyberchimps.com/wp-json/wp/v2/cyberchimps-sites/?per_page=100&page={$page}";
			$response = wp_remote_get($api_url);

			if (!is_wp_error($response)) {
				$data = json_decode(wp_remote_retrieve_body($response), true);

				// Step 6: Filter the response by page_builder = gutenberg
				$filtered_data = array_filter($data, function ($site) {
					return isset($site['page_builder']) && $site['page_builder'] === 'gutenberg';
				});
				$all_filtered_data = array_merge($all_filtered_data, $filtered_data);

			}
		}
		$filtered_json_all = wp_json_encode($all_filtered_data, JSON_PRETTY_PRINT);
		update_option('total-responsive-sites-data', $filtered_json_all);

		// error_log(print_r($filtered_json_all,true));
		$plugin_dir_path = plugin_dir_path(__FILE__);
		$relative_path = 'data/';
		$full_path = $plugin_dir_path . $relative_path;
		$file_path_all = $full_path . 'responsive-sites-gutenberg-all.json';

		file_put_contents($file_path_all, $filtered_json_all); //phpcs:ignore

		// Check if the data was successfully written to the file
		if ($file_path_all !== false) {
			wp_send_json_success(array('filtered_data' => $filtered_json_all));
		} else {
			wp_send_json_error(array('message' => 'Error writing filtered data to the file.'));
		}
		wp_send_json_success();
	}

	/**
	 * Process the form of Form Block.
	 *
	 * @since 1.7.9
	 */
	public function rba_form_block_processing() {
		register_rest_route(
			'wp/v2',
			'/rba_process_form',
			array(
				'methods'             => 'POST',
				'callback'            => array( $this, 'rba_form_processing' ),
				'permission_callback' => '__return_true',
			)
		);
	}

	/**
	 * RBA Form Block Processing.
	 *
	 * @param WP_REST_Request $request WP_Query object.
	 * @since 1.7.9
	 */
	public function rba_form_processing( WP_REST_Request $request ) {
		$params    = $request->get_params();
		$form_data = $params['form_data'];
		$page_url  = $params['page_url'];
		$email_to  = sanitize_email( $params['email_to'] );
		$subject   = sanitize_text_field( $params['subject'] );
		$site_name = $params['site_name'];
		$site_url  = $params['site_url'];

		$table_content = '';

		foreach ( $form_data as $data ) {
			$labels         = sanitize_text_field( explode( ':', $data, 2 )[0] );
			$info           = sanitize_text_field( explode( ':', $data, 2 )[1] );
			$table_content .= '<tr><td><strong>' . $labels . ':</strong> ' . $info . '</td></tr>';
		}

		$email_content = '<div>
		<h3>Form submission from ' . $site_name . '
		</h3>
		<hr>
		<table>
		  <tbody>
			<tr>
			  <td>
				<strong>Form submission from:</strong>
				<a href="' . $page_url . '" target="_blank" >' . $page_url . '</a>
			  </td>
			</tr>' . $table_content . '
			</tbody>
			<tfoot>
				<tr>
				<td>
					<hr>You received this email because your email address is set in the content form settings on <a href="' . $site_url . '" target="_blank" >' . $site_name . '</a>
				</td>
				</tr>
			</tfoot>
			</table>
		</div>';

		$headers = array(
			'Content-Type: text/html; charset=UTF-8',
		);

		$sent = wp_mail( $email_to, $subject, $email_content, $headers );

		if ( $sent ) {
			$response = rest_ensure_response(
				array(
					'success' => true,
					'message' => 'Email sent successfully!',
				)
			);
		} else {
			$response = rest_ensure_response(
				array(
					'success' => false,
					'message' => 'Error sending email.',
				)
			);
		}

		return $response;

	}

	/**
	 * RBA Register Admin Menu.
	 *
	 * @param string $slug parent slug of submenu.
	 * @since 1.8.0
	 */
	public function rba_register_admin_menu( $slug ) {
		add_submenu_page(
			$slug,
			'Responsive Blocks',
			'Blocks',
			'manage_options',
			'responsive_block_editor_addons',
			array( $this, 'responsive_block_editor_addons_getting_started' ),
		);
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
}
