<?php
/**
 * Server-side rendering for the portfolio block
 *
 * @since   1.0.0
 * @package Responsive Blocks
 */

/**
 * Renders the portfolio block on server.
 *
 * @param string $attributes  Pass the block attributes.
 * @return string HTML content for the portfolio.
 */
function responsive_block_editor_addons_render_block_core_latest_posts_portfolio( $attributes ) {

	/**
	* Global post object.
	* Used for excluding the current post from the grid.
	*
	* @var WP_Post
	*/
	global $post;
	$categories = isset( $attributes['categories'] ) ? $attributes['categories'] : '';

	/* Setup the query */
	$grid_query = array(
		'posts_per_page'      => $attributes['postsToShow'],
		'post_status'         => 'publish',
		'order'               => $attributes['order'],
		'orderby'             => $attributes['orderBy'],
		'offset'              => $attributes['offset'],
		'post_type'           => $attributes['postType'],
		'ignore_sticky_posts' => 1,
		'post__not_in'        => array( $post->ID ), // Exclude the current post from the grid.
		'paged'               => 1,
	);

	if ( get_query_var( 'paged' ) ) {

		$paged = get_query_var( 'paged' );

		$grid_query['offset'] = ( $paged - 1 ) * $attributes['postsToShow'];

	} elseif ( get_query_var( 'page' ) ) {

		$paged = get_query_var( 'page' );

		$grid_query['offset'] = ( $paged - 1 ) * $attributes['postsToShow'];

	} else {

		$paged = 1;

	}
	$grid_query['paged'] = $paged;

	if ( isset( $attributes['categories'] ) && '' !== $attributes['categories'] ) {
		$grid_query['tax_query'][] = array(
			'taxonomy' => ( isset( $attributes['taxonomyType'] ) ) ? $attributes['taxonomyType'] : 'category',
			'field'    => 'id',
			'terms'    => $attributes['categories'],
			'operator' => 'IN',
		);
	}

	$portfolio_markup = '';

	$grid_query = new WP_Query( $grid_query );

	/* Start the loop */
	if ( $grid_query->have_posts() ) {

		while ( $grid_query->have_posts() ) {
			$grid_query->the_post();

			/* Setup the post ID */
			$post_id = get_the_ID();

			/* Setup the featured image ID */
			$post_thumb_id = get_post_thumbnail_id( $post_id );

			/* Setup the post classes */
			$post_classes = 'responsive-block-editor-addons-portfolio-item';

			/* Add sticky class */
			if ( is_sticky( $post_id ) ) {
				$post_classes .= ' sticky';
			} else {
				$post_classes .= null;
			}

			/* Join classes together */
			$post_classes = join( ' ', get_post_class( $post_classes, $post_id ) );

			$post_thumb_size = 'full';

			if ( ! empty( $attributes['imageSize'] ) ) {
				$post_thumb_size = $attributes['imageSize'];
			}

			$wrapper_styles = '';

			/* portfolio wrapper styles. */
			if ( ! empty( $wrapper_styles ) ) {
				$wrapper_style = $wrapper_styles;
			} else {
				$wrapper_style = null;
			}

			/* Start the markup for the post */
			$portfolio_markup .= sprintf(
				'<article id="post-%1$s" class="%2$s" style="' . safecss_filter_attr( $wrapper_style ) . '">',
				esc_attr( $post_id ),
				esc_attr( $post_classes )
			);

			/* Get the post title */
			$title = get_the_title( $post_id );

			if ( ! $title ) {
				$title = __( 'Untitled', 'responsive-block-editor-addons' );
			}

			$post_title_tag = 'h3';
			if ( isset( $attributes['displayPostTitle'] ) && $attributes['displayPostTitle'] ) {

				if ( isset( $attributes['postTitleTag'] ) ) {
					$post_title_tag = $attributes['postTitleTag'];
				} else {
					$post_title_tag = 'h2';
				}
			}

			$helper                = Responsive_Block_Editor_Addons_Helper::get_instance();
			$array_of_allowed_HTML = array( 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'div', 'span', 'p');
			$post_title_tag        = $helper->rbea_post_title_tag_allowed_html( $post_title_tag, $array_of_allowed_HTML, 'h3' );

			/* Get the featured image */

					/* Output the featured image */
					$portfolio_markup .= sprintf(
						'<a href="%1$s" rel="bookmark" aria-hidden="true" tabindex="-1"><div class="responsive-block-editor-addons-block-portfolio-image">%2$s</div>
                                <div class="responsive-block-editor-addons-block-portfolio-image-overlay"><%4$s class="responsive-block-editor-addons-block-portfolio-title show-title-%5$s">%3$s</%4$s></div></a>',
						esc_url( get_permalink( $post_id ) ),
						wp_get_attachment_image( $post_thumb_id, $post_thumb_size ),
						esc_html( $title ),
						esc_attr( $post_title_tag ),
						esc_html( $attributes['displayPostTitle'] ? 'true' : 'false' )
					);

			/* Close the post */
			$portfolio_markup .= "</article>\n";
		}

		/* Restore original post data */
		wp_reset_postdata();

		/* Build the block classes */
		$class = "block-id-{$attributes['block_id']} responsive-block-editor-addons-block-portfolio featured{$attributes['postType']}";

		if ( isset( $attributes['className'] ) ) {
			$class .= ' ' . sanitize_html_class( $attributes['className'] );
		}

		/* Layout orientation class */
		$grid_class = 'responsive-block-editor-addons-portfolio-items';

		if ( isset( $attributes['postLayout'] ) && 'list' === $attributes['postLayout'] ) {
			$grid_class .= ' is-list';
		} else {
			$grid_class .= ' is-grid';
		}

		/* Grid columns class */
		if ( isset( $attributes['columns'] ) && 'grid' === $attributes['postLayout'] ) {
			$grid_class .= ' columns-' . $attributes['columns'];
		}

		/* portfolio section title */
		if ( isset( $attributes['displaySectionTitle'] ) && $attributes['displaySectionTitle'] && ! empty( $attributes['sectionTitle'] ) ) {
			if ( isset( $attributes['sectionTitleTag'] ) ) {
				$section_title_tag = $attributes['sectionTitleTag'];
			} else {
				$section_title_tag = 'h2';
			}

			$section_title = '<' . esc_attr( $section_title_tag ) . ' class="responsive-block-editor-addons-portfolio-section-title">' . esc_html( $attributes['sectionTitle'] ) . '</' . esc_attr( $section_title_tag ) . '>';
		} else {
			$section_title = null;
		}

		$paginations_markup = '';

		/* Output the post markup */
		$block_content = sprintf(
			'<section class="%1$s">%2$s<div class="%3$s">%4$s</div>%5$s</section>',
			esc_attr( $class ),
			$section_title,
			esc_attr( $grid_class ),
			$portfolio_markup,
			$paginations_markup
		);
		return $block_content;
	}
}

/**
 * Registers the portfolio block on server
 */
function responsive_block_editor_addons_register_block_core_latest_posts_portfolio() {

	/* Check if the register function exists */
	if ( ! function_exists( 'register_block_type' ) ) {
		return;
	}

	/* Block attributes */
	register_block_type(
		'responsive-block-editor-addons/portfolio',
		array(
			'attributes'      => array(
				'columnGap'                => array(
					'type'    => 'number',
					'default' => 0,
				),
				'columnGapTablet'          => array(
					'type' => 'number',
				),
				'columnGapMobile'          => array(
					'type' => 'number',
				),
				'rowGap'                   => array(
					'type'    => 'number',
					'default' => '',
				),
				'rowGapTablet'             => array(
					'type'    => 'number',
					'default' => '',
				),
				'rowGapMobile'             => array(
					'type'    => 'number',
					'default' => '',
				),
				'blockBorderWidth'         => array(
					'type'    => 'number',
					'default' => '0',
				),
				'blockBorderRadius'        => array(
					'type'    => 'number',
					'default' => '0',
				),
				'blockBorderStyle'         => array(
					'type'    => 'string',
					'default' => 'none',
				),
				'blockBorderColor'         => array(
					'type'    => 'string',
					'default' => '#333',
				),
				'overlayTextAlign'         => array(
					'type'    => 'string',
					'default' => 'center',
				),
				'overlayTextVerticalAlign' => array(
					'type'    => 'string',
					'default' => 'center',
				),
				'horizontalSpacing'        => array(
					'type'    => 'number',
					'default' => 10,
				),
				'verticalSpacing'          => array(
					'type'    => 'number',
					'default' => 15,
				),
				'overlayBackgroundColor'   => array(
					'type'    => 'string',
					'default' => '#ff6f61',
				),
				'overlayTextColor'         => array(
					'type'    => 'string',
					'default' => '#fff',
				),
				'overlayOpacity'           => array(
					'type'    => 'number',
					'default' => 100,
				),
				'overlayTextFontFamily'    => array(
					'type'    => 'string',
					'default' => '',
				),
				'overlayTextFontSize'      => array(
					'type'    => 'number',
					'default' => '',
				),
				'overlayTextLineHeight'    => array(
					'type'    => 'number',
					'default' => '',
				),
				'overlayTextFontWeight'    => array(
					'type'    => 'string',
					'default' => '',
				),
				'overlayTextTextTransform' => array(
					'type'    => 'string',
					'default' => '',
				),
				'postTitleTag'             => array(
					'type'    => 'string',
					'default' => 'h3',
				),
				'itemRatio'                => array(
					'type'    => 'number',
					'default' => 0.66,
				),
				'categories'               => array(
					'type' => 'string',
				),
				'className'                => array(
					'type' => 'string',
				),
				'postsToShow'              => array(
					'type'    => 'number',
					'default' => 6,
				),
				'displayPostTitle'         => array(
					'type'    => 'boolean',
					'default' => true,
				),
				'displaySectionTitle'      => array(
					'type'    => 'boolean',
					'default' => false,
				),
				'postLayout'               => array(
					'type'    => 'string',
					'default' => 'grid',
				),
				'columns'                  => array(
					'type'    => 'number',
					'default' => 3,
				),
				'order'                    => array(
					'type'    => 'string',
					'default' => 'desc',
				),
				'orderBy'                  => array(
					'type'    => 'string',
					'default' => 'date',
				),
				'offset'                   => array(
					'type'    => 'number',
					'default' => 0,
				),
				'postType'                 => array(
					'type'    => 'string',
					'default' => 'post',
				),
				'postTaxonomy'             => array(
					'type'    => 'string',
					'default' => 'category',
				),
				'taxonomyType'             => array(
					'type'    => 'string',
					'default' => 'category',
				),
				'sectionTag'               => array(
					'type'    => 'string',
					'default' => 'section',
				),
				'sectionTitle'             => array(
					'type' => 'string',
				),
				'sectionTitleTag'          => array(
					'type'    => 'string',
					'default' => 'h2',
				),
				'imageSize'                => array(
					'type'    => 'string',
					'default' => 'full',
				),
				'id'                       => array(
					'type'    => 'number',
					'default' => '',
				),
				'layout'                   => array(
					'type'    => 'string',
					'default' => 'boxed',
				),
				'contentPadding'           => array(
					'type'    => 'number',
					'default' => 0,
				),
				'contentPaddingMobile'     => array(
					'type'    => 'number',
					'default' => '',
				),
				'mobileContentPadding'     => array( // For compatibility with v1.3.2.
					'type'    => 'number',
					'default' => 999,
				),
				'contentPaddingTablet'     => array(
					'type'    => 'number',
					'default' => '',
				),
				'taxonomyType'             => array(
					'type'    => 'string',
					'default' => 'category',
				),
				'block_id'                 => array(
					'type'    => 'string',
					'default' => '',
				),
				'hideWidget'                 => array(
					'type'    => 'boolean',
					'default' => false,
				),
				'hideWidgetMobile'                 => array(
					'type'    => 'boolean',
					'default' => false,
				),
				'hideWidgetTablet'                 => array(
					'type'    => 'boolean',
					'default' => false,
				),
				'z_index'             => array(
					'type'    => 'number',
					'default' => 1,
				),
				'z_indexMobile'             => array(
					'type'    => 'number',
					'default' => 1,
				),
				'z_indexTablet'             => array(
					'type'    => 'number',
					'default' => 1,
				),
				'blockTopMargin' => array(
					'type'    => 'number',
					'default' => '',
				),
				'blockBottomMargin' => array(
					'type'    => 'number',
					'default' => '',
				),
				'blockLeftMargin' => array(
					'type'    => 'number',
					'default' => '',
				),
				'blockRightMargin' => array(
					'type'    => 'number',
					'default' => '',
				),
				'blockTopMarginTablet' => array(
					'type'    => 'number',
					'default' => '',
				),
				'blockBottomMarginTablet' => array(
					'type'    => 'number',
					'default' => '',
				),
				'blockLeftMarginTablet' => array(
					'type'    => 'number',
					'default' => '',
				),
				'blockRightMarginTablet' => array(
					'type'    => 'number',
					'default' => '',
				),
				'blockTopMarginMobile' => array(
					'type'    => 'number',
					'default' => '',
				),
				'blockBottomMarginMobile' => array(
					'type'    => 'number',
					'default' => '',
				),
				'blockLeftMarginMobile' => array(
					'type'    => 'number',
					'default' => '',
				),
				'blockRightMarginMobile' => array(
					'type'    => 'number',
					'default' => '',
				),
				'blockIsMarginControlConnected' => array(
					'type'    => 'boolean',
					'default' => false,
				),
				'blockIsPaddingControlConnected' => array(
					'type'    => 'boolean',
					'default' => false,
				),
				'blockTopPadding' => array(
					'type'    => 'number',
					'default' => '',
				),
				'blockTopPaddingMobile' => array(
					'type'    => 'number',
					'default' => '',
				),
				'blockTopPaddingTablet' => array(
					'type'    => 'number',
					'default' => '',
				),
				'blockBottomPadding' => array(
					'type'    => 'number',
					'default' => '',
				),
				'blockBottomPaddingMobile' => array(
					'type'    => 'number',
					'default' => '',
				),
				'blockBottomPaddingTablet' => array(
					'type'    => 'number',
					'default' => '',
				),
				'blockLeftPadding' => array(
					'type'    => 'number',
					'default' => '',
				),
				'blockLeftPaddingMobile' => array(
					'type'    => 'number',
					'default' => '',
				),
				'blockLeftPaddingTablet' => array(
					'type'    => 'number',
					'default' => '',
				),
				'blockRightPadding' => array(
					'type'    => 'number',
					'default' => '',
				),
				'blockRightPaddingMobile' => array(
					'type'    => 'number',
					'default' => '',
				),
				'blockRightPaddingTablet' => array(
					'type'    => 'number',
					'default' => '',
				),				
				'blockTopRadius'           => array(
					'type'    => 'number',
					'default' => '0',
				),
				'blockRightRadius'           => array(
					'type'    => 'number',
					'default' => '0',
				),
				'blockBottomRadius'           => array(
					'type'    => 'number',
					'default' => '0',
				),
				'blockLeftRadius'           => array(
					'type'    => 'number',
					'default' => '0',
				),
				'blockTopRadiusTablet'           => array(
					'type'    => 'number',
					'default' => '0',
				),
				'blockRightRadiusTablet'           => array(
					'type'    => 'number',
					'default' => '0',
				),
				'blockBottomRadiusTablet'           => array(
					'type'    => 'number',
					'default' => '0',
				),
				'blockLeftRadiusTablet'           => array(
					'type'    => 'number',
					'default' => '0',
				),
				'blockTopRadiusMobile'           => array(
					'type'    => 'number',
					'default' => '0',
				),
				'blockRightRadiusMobile'           => array(
					'type'    => 'number',
					'default' => '0',
				),
				'blockBottomRadiusMobile'           => array(
					'type'    => 'number',
					'default' => '0',
				),
				'blockLeftRadiusMobile'           => array(
					'type'    => 'number',
					'default' => '0',
				),
				'blockIsRadiusControlConnected'           => array(
					'type'    => 'boolean',
					'default' => 'false',
				),
				'blockIsRadiusValueUpdated'           => array(
					'type'    => 'boolean',
					'default' => 'false',
				),
				'blockIsTypographyColorValueUpdated' => array(
					'type'    => 'boolean',
					'default' => false,
				),
      			'overlayTextTypographyColor' => array(
					'type'    => 'string',
					'default' => '#fff',
				),
			),
			'render_callback' => 'responsive_block_editor_addons_render_block_core_latest_posts_portfolio',
		)
	);
}
add_action( 'init', 'responsive_block_editor_addons_register_block_core_latest_posts_portfolio' );


/**
 * Create API fields for additional info
 */
function responsive_block_editor_addons_register_rest_fields_portfolio() {
	/* Add landscape featured image source */
	register_rest_field(
		array( 'post', 'page' ),
		'featured_image_src',
		array(
			'get_callback'    => 'responsive_block_editor_addons_get_image_src_landscape_portfolio',
			'update_callback' => null,
			'schema'          => null,
		)
	);
}
add_action( 'rest_api_init', 'responsive_block_editor_addons_register_rest_fields_portfolio' );


/**
 * Get landscape featured image source for the rest field
 *
 * @param String $object  The object type.
 * @param String $field_name  Name of the field to retrieve.
 * @param String $request  The current request object.
 */
function responsive_block_editor_addons_get_image_src_landscape_portfolio( $object, $field_name, $request ) {
	$feat_img_array = wp_get_attachment_image_src(
		$object['featured_media'],
		'responsive-block-editor-addons-block-portfolio-landscape',
		false
	);
	return $feat_img_array ? $feat_img_array[0] : '';
}

if ( ! function_exists( 'responsive_block_editor_addons_add_custom_orderby_params' ) ) {
	/**
	 * The callback to add `rand` as an option for orderby param in REST API.
	 * Hook to `rest_{$this->post_type}_collection_params` filter.
	 *
	 * @param array $query_params Accepted parameters.
	 * @return array
	 *
	 * @see https://felipeelia.dev/wordpress-rest-api-enable-random-order-of-posts-list/
	 * @see https://www.timrosswebdevelopment.com/wordpress-rest-api-post-order/
	 */
	function responsive_block_editor_addons_add_custom_orderby_params( $query_params ) {
		if ( ! in_array( 'rand', $query_params['orderby']['enum'] ) ) { // phpcs:ignore
			$query_params['orderby']['enum'][] = 'rand';
		}
		if ( ! in_array( 'menu_order', $query_params['orderby']['enum'] ) ) { // phpcs:ignore
			$query_params['orderby']['enum'][] = 'menu_order';
		}
		return $query_params;
	}
}

if ( ! function_exists( 'responsive_block_editor_addons_add_custom_orderby' ) ) {
	/**
	 * Add `rand` as an option for orderby param in REST API.
	 * Hook to `rest_{$this->post_type}_collection_params` filter.
	 *
	 * @return void
	 *
	 * @see https://felipeelia.dev/wordpress-rest-api-enable-random-order-of-posts-list/
	 * @see https://www.timrosswebdevelopment.com/wordpress-rest-api-post-order/
	 */
	function responsive_block_editor_addons_add_custom_orderby() {
		$post_types = get_post_types( array( 'public' => true ) );
		foreach ( $post_types as $post_type ) {
			add_filter( 'rest_' . $post_type . '_collection_params', 'responsive_block_editor_addons_add_custom_orderby_params' );
		}
	}

	add_action( 'rest_api_init', 'responsive_block_editor_addons_add_custom_orderby' );
}
