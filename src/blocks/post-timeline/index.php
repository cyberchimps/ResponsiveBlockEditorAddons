<?php
/**
 * Server-side rendering for the post grid block
 *
 * @since   1.0.0
 * @package Responsive Blocks
 */

/**
 * Renders the post grid block on server.
 *
 * @param string $attributes  Pass the block attributes.
 * @return string HTML content for the post grid.
 */
function responsive_block_editor_addons_post_timeline_render_latest_posts( $attributes ) {

	/**
	 * Global post object.
	 * Used for excluding the current post from the grid.
	 *
	 * @var WP_Post
	 */
	global $post;
	$index = 0;

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
		'post__not_in'        => array( get_the_ID() ), // Exclude the current post from the grid.
	);

	if ( isset( $attributes['categories'] ) && '' !== $attributes['categories'] ) {
		$grid_query['tax_query'][] = array(
			'taxonomy' => ( isset( $attributes['taxonomyType'] ) ) ? $attributes['taxonomyType'] : 'category',
			'field'    => 'id',
			'terms'    => $attributes['categories'],
			'operator' => 'IN',
		);
	}

	/* Post Grid Excerpct styles. */

	$post_grid_markup = '';

	$post_grid_markup .= sprintf(
		'<div class="responsive-block-editor-addons-timeline__main">'
	);

	$post_grid_markup .= sprintf(
		'<div class="responsive-block-editor-addons-timeline__days">'
	);

	$helper = Responsive_Block_Editor_Addons_Helper::get_instance();

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
			$post_classes = 'responsive-block-editor-addons-block-post-timeline';

			/* Add sticky class */
			if ( is_sticky( $post_id ) ) {
				$post_classes .= ' sticky';
			} else {
				$post_classes .= null;
			}

			/* Join classes together */
			$post_classes = join( ' ', get_post_class( $post_classes, $post_id ) );

			$post_grid_markup .= sprintf(
				'<section class="%1$s">',
				esc_attr( $post_classes )
			);

			/* Start the markup for the post */
			$post_grid_markup .= sprintf(
				'<article id="post-%1$s" class="responsive-block-editor-addons-timeline__field	responsive-block-editor-addons-timeline__field-wrap ">',
				esc_attr( $post_id )
			);

			if ( 'center' === $attributes['timelinAlignment'] ) {
				/* Wrap the byline content */
					$post_grid_markup .= sprintf(
						'<div class="' . esc_html( get_align_classes( $index ) ) . '">'
					);
			} elseif ( 'right' === $attributes['timelinAlignment'] ) {
				$post_grid_markup .= sprintf(
					'<div class="responsive-block-editor-addons-timeline__widget responsive-block-editor-addons-timeline__right">'
				);
			} else {
				$post_grid_markup .= sprintf(
					'<div class="responsive-block-editor-addons-timeline__widget responsive-block-editor-addons-timeline__left">'
				);
			}

				$post_grid_markup .= sprintf(
					'<div class="responsive-block-editor-addons-timeline__marker responsive-block-editor-addons-timeline__out-view-icon">'
				);

				$post_grid_markup .= sprintf(
					'<span class="responsive-block-editor-addons-timeline__icon-new responsive-block-editor-addons-timeline__out-view-icon">'
				);
				$post_grid_markup .= sprintf(
					'<span>'
				);
				$post_grid_markup .= sprintf(
					'<div className="responsive-block-editor-addons-ifb-icon-wrap">'
				);

				$post_grid_markup .= sprintf(
					'<span className="responsive-block-editor-addons-ifb-icon">' . Responsive_Block_Editor_Addons_Frontend_Styles_Helper::render_svg_html( $attributes['icon'] ) . '</span>'
				);

				$post_grid_markup .= sprintf(
					'</div>'
				);

				$post_grid_markup .= sprintf(
					'</span>'
				);
			/* Close the header content */
			$post_grid_markup .= sprintf(
				'</span>'
			);

			/* Close the header content */
			$post_grid_markup .= sprintf(
				'</div>'
			);

			if ( 'center' === $attributes['timelinAlignment'] ) {
				$post_grid_markup .= sprintf(
					'<div class="' . esc_html( get_day_align_classes( $index ) ) . '">'
				);

			} elseif ( 'right' === $attributes['timelinAlignment'] ) {
				$post_grid_markup .= sprintf(
					'<div class="responsive-block-editor-addons-timeline__day-new responsive-block-editor-addons-timeline__day-right">'
				);
			} else {
				$post_grid_markup .= sprintf(
					'<div class="responsive-block-editor-addons-timeline__day-new responsive-block-editor-addons-timeline__day-left">'
				);
			}

			$post_grid_markup .= sprintf(
				'<div class="responsive-block-editor-addons-timeline__events-new">'
			);

			$post_grid_markup .= sprintf(
				'<div class="responsive-block-editor-addons-timeline__events-inner-new">'
			);

			$post_grid_markup .= sprintf(
				'<div class="responsive-block-editor-addons-timeline__date-hide responsive-block-editor-addons-timeline__date-inner">'
			);

			/* Get the post date */
			if ( isset( $attributes['postType'] ) && 'post' === $attributes['postType'] ) {
				if ( isset( $attributes['displayPostDate'] ) && $attributes['displayPostDate'] ) {
						$post_grid_markup .= sprintf(
							'<time datetime="%1$s" class="responsive-block-editor-addons-timeline__date-new" itemprop="datePublished">%2$s</time>',
							esc_attr( get_the_date( 'c', $post_id ) ),
							esc_html( get_the_date( '', $post_id ) )
						);
				}
			}
			/* Close the byline content */
			$post_grid_markup .= sprintf(
				'</div>'
			);

			/* Get the featured image */
			if ( isset( $attributes['displayPostImage'] ) && $attributes['displayPostImage'] && $post_thumb_id ) {

				$post_thumb_size = 'full';

				if ( ! empty( $attributes['imageSize'] ) ) {
					$post_thumb_size = $attributes['imageSize'];
				}

				/* Output the featured image */
				$post_grid_markup .= sprintf(
					'<div class="responsive-block-editor-addons-block-post-timeline-image"><a href="%1$s" rel="bookmark" aria-hidden="true" tabindex="-1">%2$s</a></div>',
					esc_url( get_permalink( $post_id ) ),
					wp_get_attachment_image( $post_thumb_id, $post_thumb_size )
				);
			}

			/* Wrap the text content */
			$post_grid_markup .= sprintf(
				'<div class="responsive-block-editor-addons-content">'
			);

			/* Get the post title */
			$title = get_the_title( $post_id );

			if ( ! $title ) {
				$title = __( 'Untitled', 'responsive-block-editor-addons' );
			}

			if ( isset( $attributes['displayPostTitle'] ) && $attributes['displayPostTitle'] ) {

				if ( isset( $attributes['postTitleTag'] ) ) {
					$post_title_tag = $attributes['postTitleTag'];
				} else {
					$post_title_tag = 'h2';
				}

				$array_of_allowed_HTML = array( 'h2', 'h3', 'h4', 'h5', 'h6', );
				$post_title_tag        = $helper->rbea_post_title_tag_allowed_html( $post_title_tag, $array_of_allowed_HTML, 'h3' );

				$post_grid_markup .= sprintf(
					'<%3$s class="responsive-block-editor-addons-block-post-timeline-title"><a class="responsive-block-editor-addons-block-post-timeline-title-heading" href="%1$s" rel="bookmark">%2$s</a></%3$s>',
					esc_url( get_permalink( $post_id ) ),
					esc_html( $title ),
					esc_attr( $post_title_tag )
				);
			}

			if ( isset( $attributes['postType'] ) && 'post' === $attributes['postType'] ) {
				/* Wrap the byline content */
				$post_grid_markup .= sprintf(
					'<div class="responsive-block-editor-addons-block-post-timeline-byline">'
				);

				/* Get the post author */
				if ( isset( $attributes['displayPostAuthor'] ) && $attributes['displayPostAuthor'] ) {
					$post_grid_markup .= sprintf(
						'<div class="responsive-block-editor-addons-block-post-timeline-author" itemprop="author" itemtype="https://schema.org/Person"><a class="responsive-block-editor-addons-text-link" href="%2$s" itemprop="url" rel="author"><span itemprop="name">%1$s</span></a></div>',
						esc_html( get_the_author_meta( 'display_name', get_the_author_meta( 'ID' ) ) ),
						esc_html( get_author_posts_url( get_the_author_meta( 'ID' ) ) )
					);
				}

				/* Close the byline content */
				$post_grid_markup .= sprintf(
					'</div>'
				);
			}

			/* Wrap the excerpt content */
			$post_grid_markup .= sprintf(
				'<div class="responsive-block-editor-addons-block-post-timeline-excerpt">'
			);

			$post_grid_markup .= sprintf(
				'<div class="responsive-block-editor-addons-timeline__post">'
			);

			/* Get the excerpt */

			// phpcs:ignore WordPress.NamingConventions.PrefixAllGlobals.NonPrefixedHooknameFound, PEAR.Functions.FunctionCallSignature.ContentAfterOpenBracket
			$excerpt = apply_filters( 'the_excerpt',
				get_post_field(
					'post_excerpt',
					$post_id,
					'display'
				)
			);

			if ( empty( $excerpt ) && isset( $attributes['excerptLength'] ) ) {
				// phpcs:ignore WordPress.NamingConventions.PrefixAllGlobals.NonPrefixedHooknameFound, PEAR.Functions.FunctionCallSignature.ContentAfterOpenBracket  -- Running the_excerpt directly, Previous rule doesn't take without the_excerpt being moved up a line
				$excerpt = apply_filters( 'the_excerpt',
					wp_trim_words(
						preg_replace(
							array(
								'/\<figcaption>.*\<\/figcaption>/',
								'/\[caption.*\[\/caption\]/',
							),
							'',
							get_the_excerpt()
						),
						$attributes['excerptLength']
					)
				);
			}

			if ( ! $excerpt ) {
				$excerpt = null;
			}

			if ( isset( $attributes['displayPostExcerpt'] ) && $attributes['displayPostExcerpt'] ) {
				$post_grid_markup .= wp_kses_post( $excerpt );
			}

			$post_grid_markup .= sprintf(
				'</div>'
			);

			/* Get the read more link */
			if ( isset( $attributes['displayPostLink'] ) && $attributes['displayPostLink'] ) {
				if ( isset( $attributes['target'] ) && $attributes['target'] ) {
					$post_grid_markup .= sprintf(
						'<div class="responsive-block-editor-addons-timeline__link_parent"><a class="responsive-block-editor-addons-timeline__link responsive-block-editor-addons-block-post-timeline-more-link responsive-block-editor-addons-text-link" href="%1$s" rel="bookmark" target="_blank">%2$s <span class="screen-reader-text">%3$s</span></a></div>',
						esc_url( get_permalink( $post_id ) ),
						esc_html( $attributes['readMoreText'] ),
						esc_html( $title )
					);
				} else {
					$post_grid_markup .= sprintf(
						'<div class="responsive-block-editor-addons-timeline__link_parent"><a class="responsive-block-editor-addons-block-post-timeline-more-link responsive-block-editor-addons-text-link" href="%1$s" rel="bookmark" target="_self">%2$s <span class="screen-reader-text">%3$s</span></a></div>',
						esc_url( get_permalink( $post_id ) ),
						esc_html( $attributes['readMoreText'] ),
						esc_html( $title )
					);
				}
			}

			/* Close the excerpt content */
			$post_grid_markup .= sprintf(
				'</div>'
			);

			$post_grid_markup .= sprintf(
				'<div class="responsive-block-editor-addons-timeline__arrow"></div>'
			);

			/* Close the text content */
			$post_grid_markup .= sprintf(
				'</div>'
			);

			/* Close the byline content */
			$post_grid_markup .= sprintf(
				'</div>'
			);
			/* Close the byline content */
			$post_grid_markup .= sprintf(
				'</div>'
			);

			/* Close the header content */
			$post_grid_markup .= sprintf(
				'</div>'
			);

			$post_grid_markup .= sprintf(
				'<div class="responsive-block-editor-addons-timeline__date-new responsive-block-editor-addons-timeline__date-outer">'
			);

			/* Get the post date */
			if ( isset( $attributes['postType'] ) && 'post' === $attributes['postType'] ) {
				if ( isset( $attributes['displayPostDate'] ) && $attributes['displayPostDate'] ) {
						$post_grid_markup .= sprintf(
							'<time datetime="%1$s" class="responsive-block-editor-addons-timeline__date-new" itemprop="datePublished">%2$s</time>',
							esc_attr( get_the_date( 'c', $post_id ) ),
							esc_html( get_the_date( '', $post_id ) )
						);
				}
			}
			/* Close the byline content */
			$post_grid_markup .= sprintf(
				'</div>'
			);

			/* Close the byline content */
			$post_grid_markup .= sprintf(
				'</div>'
			);

			/* Close the post */
			$post_grid_markup .= "</article>\n";

			$post_grid_markup .= sprintf(
				'</section>'
			);

			$index++;

		}

		/* Close the byline content */
		$post_grid_markup .= sprintf(
			'</div>'
		);

		$post_grid_markup .= sprintf(
			'<div class="responsive-block-editor-addons-timeline__line">
			  <div class="responsive-block-editor-addons-timeline__line__inner"></div>
			</div>'
		);
		$post_grid_markup .= sprintf(
			'</div>'
		);
		/* Restore original post data */
		wp_reset_postdata();

		/* Build the block classes */
		$class = "responsive-block-editor-addons-block-post-timeline block-{$attributes['block_id']} wp-block-responsive-block-editor-addons-post-timeline featured{$attributes['postType']} align{$attributes['align']} responsive-block-editor-addons-timeline";

		if ( isset( $attributes['className'] ) ) {
			$class .= ' ' . sanitize_html_class( $attributes['className'] );
		}

		$sec_classes = 'responsive-block-editor-addons-block-post-timeline';

		if ( 'center' === $attributes['arrowlinAlignment'] ) {
			/* Wrap the byline content */
			$sec_classes .= ' responsive-block-editor-addons-timeline__arrow-center';
		} elseif ( 'bottom' === $attributes['arrowlinAlignment'] ) {
			$sec_classes .= ' responsive-block-editor-addons-timeline__arrow-bottom';
		} else {
			$sec_classes .= ' responsive-block-editor-addons-timeline__arrow-top';
		}

		if ( 'center' === $attributes['timelinAlignment'] ) {
			$sec_classes .= ' responsive-block-editor-addons-timeline__center-block';
		} elseif ( 'right' === $attributes['timelinAlignment'] ) {
			$sec_classes .= ' responsive-block-editor-addons-timeline__right-block';
		} else {
			$sec_classes .= ' responsive-block-editor-addons-timeline__left-block';
		}

		if ( 'mobile' === $attributes['stack'] ) {
			$sec_classes .= ' responsive-block-editor-addons-timeline__responsive-mobile';
		} elseif ( 'tablet' === $attributes['stack'] ) {
			$sec_classes .= ' responsive-block-editor-addons-timeline__responsive-tablet';
		} else {
			$sec_classes .= ' responsive-block-editor-addons-timeline__responsive-none';
		}

		/* Post grid section title */
		if ( isset( $attributes['displaySectionTitle'] ) && $attributes['displaySectionTitle'] && ! empty( $attributes['sectionTitle'] ) ) {
			if ( isset( $attributes['sectionTitleTag'] ) ) {
				$section_title_tag = $attributes['sectionTitleTag'];
			} else {
				$section_title_tag = 'h2';
			}

			$array_of_allowed_HTML = array( 'h2', 'h3', 'h4', 'h5', 'h6', );
			$section_title_tag     = $helper->rbea_post_title_tag_allowed_html( $section_title_tag, $array_of_allowed_HTML, 'h2' );

			$section_title = '<' . esc_attr( $section_title_tag ) . ' class="responsive-block-editor-addons-post-grid-section-title">' . esc_html( $attributes['sectionTitle'] ) . '</' . esc_attr( $section_title_tag ) . '>';
		} else {
			$section_title = null;
		}

		/* Post grid section tag */
		if ( isset( $attributes['sectionTag'] ) ) {
			$section_tag = $attributes['sectionTag'];
			$array_of_allowed_HTML = array( 'div', 'header', 'section', 'article', 'main', 'aside', 'footer' );
			$section_tag           = $helper->rbea_post_title_tag_allowed_html( $section_tag, $array_of_allowed_HTML, 'section' );
		} else {
			$section_tag = 'section';
		}

		$box_shadow_position_css = $attributes['boxShadowPosition'];

		if ( 'outset' === $attributes['boxShadowPosition'] ) {
			$box_shadow_position_css = '';
		}

		$styles = '';

		/* Output the post markup */
		$block_content = sprintf(
			'<%1$s class="%2$s %3$s">%4$s %5$s</%1$s>',
			$section_tag,
			esc_attr( $class ),
			esc_attr( $sec_classes ),
			$section_title,
			$post_grid_markup
		);
		return $block_content;
	}
}

/**
 * Get align classes function.
 *
 * @param [type] $index_val The index_val.
 * @return [type]
 */
function get_align_classes( $index_val ) {
	$classes   = array();
	$classes[] = 'responsive-block-editor-addons-timeline__widget';
	$classes[] = ( 0 === $index_val % 2 ) ? 'responsive-block-editor-addons-timeline__right' : ' responsive-block-editor-addons-timeline__left';
	return implode( ' ', $classes );
}

/**
 * Get day align classes function.
 *
 * @param [type] $index_val The index_val.
 * @return [type]
 */
function get_day_align_classes( $index_val ) {
	$classes   = array();
	$classes[] = 'responsive-block-editor-addons-timeline__day-new';
	$classes[] = ( 0 === $index_val % 2 ) ? 'responsive-block-editor-addons-timeline__day-right' : 'responsive-block-editor-addons-timeline__day-left';
	return implode( ' ', $classes );
}

/**
 * Registers the post grid block on server
 */
function responsive_block_editor_addons_post_timeline_register_latest_posts() {

	/* Check if the register function exists */
	if ( ! function_exists( 'register_block_type' ) ) {
		return;
	}

	/* Block attributes */
	register_block_type(
		'responsive-block-editor-addons/post-timeline',
		array(
			'attributes'      => array(
				'categories'             => array(
					'type' => 'string',
				),
				'className'              => array(
					'type' => 'string',
				),
				'postsToShow'            => array(
					'type'    => 'number',
					'default' => 6,
				),
				'displayPostDate'        => array(
					'type'    => 'boolean',
					'default' => true,
				),
				'displayPostExcerpt'     => array(
					'type'    => 'boolean',
					'default' => true,
				),
				'displayPostAuthor'      => array(
					'type'    => 'boolean',
					'default' => true,
				),
				'displayPostImage'       => array(
					'type'    => 'boolean',
					'default' => true,
				),
				'displayPostLink'        => array(
					'type'    => 'boolean',
					'default' => true,
				),
				'displayPostTitle'       => array(
					'type'    => 'boolean',
					'default' => true,
				),
				'displaySectionTitle'    => array(
					'type'    => 'boolean',
					'default' => false,
				),
				'postTitleTag'           => array(
					'type'    => 'string',
					'default' => 'h3',
				),
				'postLayout'             => array(
					'type'    => 'string',
					'default' => 'grid',
				),
				'columns'                => array(
					'type'    => 'number',
					'default' => 2,
				),
				'align'                  => array(
					'type'    => 'string',
					'default' => 'center',
				),
				'timelinAlignment'       => array(
					'type'    => 'string',
					'default' => 'center',
				),
				'arrowlinAlignment'      => array(
					'type'    => 'string',
					'default' => 'center',
				),
				'width'                  => array(
					'type'    => 'string',
					'default' => 'wide',
				),
				'order'                  => array(
					'type'    => 'string',
					'default' => 'desc',
				),
				'orderBy'                => array(
					'type'    => 'string',
					'default' => 'date',
				),
				'readMoreText'           => array(
					'type'    => 'string',
					'default' => 'Continue Reading',
				),
				'offset'                 => array(
					'type'    => 'number',
					'default' => 0,
				),
				'excerptLength'          => array(
					'type'    => 'number',
					'default' => 55,
				),
				'postType'               => array(
					'type'    => 'string',
					'default' => 'post',
				),
				'sectionTag'             => array(
					'type'    => 'string',
					'default' => 'section',
				),
				'sectionTitle'           => array(
					'type' => 'string',
				),
				'sectionTitleTag'        => array(
					'type'    => 'string',
					'default' => 'h2',
				),
				'imageSize'              => array(
					'type'    => 'string',
					'default' => 'full',
				),
				'url'                    => array(
					'type'      => 'string',
					'source'    => 'attribute',
					'selector'  => 'img',
					'attribute' => 'src',
				),
				'id'                     => array(
					'type' => 'number',
				),
				'bgColor'                => array(
					'type'    => 'string',
					'default' => '#e4e4e4',
				),
				'textColor'              => array(
					'type'    => 'string',
					'default' => '#333',
				),
				'contentPadding'         => array(
					'type'    => 'number',
					'default' => 20,
				),
				'contentPaddingMobile'   => array(
					'type' => 'number',
				),
				'contentPaddingTablet'   => array(
					'type' => 'number',
				),
				'authorSpace'            => array(
					'type' => 'number',
				),
				'excerptSpace'           => array(
					'type' => 'number',
				),
				'excerptSpaceTablet'     => array(
					'type' => 'number',
				),
				'excerptSpaceMobile'     => array(
					'type' => 'number',
				),
				'blockSpace'             => array(
					'type' => 'number',
				),
				'blockSpaceTablet'       => array(
					'type' => 'number',
				),
				'blockSpaceMobile'       => array(
					'type' => 'number',
				),
				'headingSpace'           => array(
					'type' => 'number',
				),
				'headingSpaceTablet'     => array(
					'type' => 'number',
				),
				'headingSpaceMobile'     => array(
					'type' => 'number',
				),
				'headingColor'           => array(
					'type'    => 'string',
					'default' => '#333',
				),
				'authorColor'            => array(
					'type'    => 'string',
					'default' => '#626e81',
				),
				'authorSpaceTablet'      => array(
					'type' => 'number',
				),
				'authorSpaceMobile'      => array(
					'type' => 'number',
				),
				'continueColor'          => array(
					'type'    => 'string',
					'default' => '#333',
				),
				'dateFontFamily'         => array(
					'type'    => 'string',
					'default' => '',
				),
				'headingFontFamily'      => array(
					'type'    => 'string',
					'default' => '',
				),
				'authorFontFamily'       => array(
					'type'    => 'string',
					'default' => '',
				),
				'contentFontFamily'      => array(
					'type'    => 'string',
					'default' => '',
				),
				'continueFontFamily'     => array(
					'type'    => 'string',
					'default' => '',
				),
				'connectorColor'         => array(
					'type'    => 'string',
					'default' => '#eeeeee',
				),
				'dateFontSize'           => array(
					'type'    => 'number',
					'default' => 16,
				),
				'dateFontSizeMobile'     => array(
					'type'    => 'number',
					'default' => '',
				),
				'dateFontSizeTablet'     => array(
					'type'    => 'number',
					'default' => '',
				),
				'dateFontWeight'         => array(
					'type'    => 'string',
					'default' => 400,
				),
				'dateLineHeight'         => array(
					'type'    => 'number',
					'default' => 1.75,
				),
				'headingFontSize'        => array(
					'type'    => 'number',
					'default' => 20,
				),
				'headingFontSizeMobile'  => array(
					'type'    => 'number',
					'default' => '',
				),
				'headingFontSizeTablet'  => array(
					'type'    => 'number',
					'default' => '',
				),
				'headingFontWeight'      => array(
					'type'    => 'string',
					'default' => 700,
				),
				'headingLineHeight'      => array(
					'type'    => 'number',
					'default' => 1.5,
				),
				'authorFontSize'         => array(
					'type'    => 'number',
					'default' => 14,
				),
				'authorFontSizeMobile'   => array(
					'type'    => 'number',
					'default' => '',
				),
				'authorFontSizeTablet'   => array(
					'type'    => 'number',
					'default' => '',
				),
				'authorFontWeight'       => array(
					'type'    => 'string',
					'default' => 400,
				),
				'authorLineHeight'       => array(
					'type'    => 'number',
					'default' => 1.5,
				),
				'contentFontSize'        => array(
					'type'    => 'number',
					'default' => 16,
				),
				'contentFontSizeMobile'  => array(
					'type'    => 'number',
					'default' => '',
				),
				'contentFontSizeTablet'  => array(
					'type'    => 'number',
					'default' => '',
				),
				'contentFontWeight'      => array(
					'type'    => 'string',
					'default' => 400,
				),
				'contentLineHeight'      => array(
					'type'    => 'number',
					'default' => 1.75,
				),
				'continueFontSize'       => array(
					'type'    => 'number',
					'default' => 16,
				),
				'continueFontSizeMobile' => array(
					'type'    => 'number',
					'default' => '',
				),
				'continueFontSizeTablet' => array(
					'type'    => 'number',
					'default' => '',
				),
				'continueFontWeight'     => array(
					'type'    => 'string',
					'default' => 700,
				),
				'continueLineHeight'     => array(
					'type'    => 'number',
					'default' => 1.75,
				),
				'icon'                   => array(
					'type'    => 'string',
					'default' => 'fa fa-calendar-alt',
				),
				'iconSize'               => array(
					'type'    => 'number',
					'default' => 16,
				),
				'bgSize'                 => array(
					'type'    => 'number',
					'default' => 35,
				),
				'borderWidth'            => array(
					'type'    => 'number',
					'default' => 0,
				),
				'connectorWidth'         => array(
					'type'    => 'number',
					'default' => 3,
				),
				'iconColor'              => array(
					'type'    => 'string',
					'default' => '#333',
				),
				'separatorBg'            => array(
					'type'    => 'string',
					'default' => '#eee',
				),
				'separatorBorder'        => array(
					'type'    => 'string',
					'default' => '#eee',
				),
				'separatorFillColor'     => array(
					'type'    => 'string',
					'default' => '#61ce70',
				),
				'iconFocus'              => array(
					'type'    => 'string',
					'default' => '#fff',
				),
				'iconBgFocus'            => array(
					'type'    => 'string',
					'default' => '#61ce70',
				),
				'borderFocus'            => array(
					'type'    => 'string',
					'default' => '#5cb85c',
				),
				'continuebgColor'        => array(
					'type'    => 'string',
					'default' => '',
				),
				'borderColor'            => array(
					'type'    => 'string',
					'default' => '',
				),
				'hColor'                 => array(
					'type'    => 'string',
					'default' => '#333',
				),
				'continuebghColor'       => array(
					'type'    => 'string',
					'default' => '',
				),
				'borderHColor'           => array(
					'type'    => 'string',
					'default' => '',
				),
				'target'                 => array(
					'type'    => 'boolean',
					'default' => true,
				),
				'borderRadius'           => array(
					'type'    => 'number',
					'default' => 0,
				),
				 'blockTopRadius' => array(
					'type' => "number",
					'default' => 0,
				  ),
				  'blockRightRadius' => array(
					'type' => "number",
					'default' => 0,
				  ),
				  'blockBottomRadius' => array(
					'type' => "number",
					'default' => 0,
				  ),
				  'blockLeftRadius' => array(
					'type' => "number",
					'default' => 0,
				  ),
				  'blockTopRadiusTablet' => array(
					'type' => "number",
					'default' => 0,
				  ),
				  'blockRightRadiusTablet' => array(
					'type' => "number",
					'default' => 0,
				  ),
				  'blockBottomRadiusTablet' => array(
					'type' => "number",
					'default' => 0,
				  ),
				  'blockLeftRadiusTablet' => array(
					'type' => "number",
					'default' => 0,
				  ),
				  'blockTopRadiusMobile' => array(
					'type' => "number",
					'default' => 0,
				  ),
				  'blockRightRadiusMobile' => array(
					'type' => "number",
					'default' => 0,
				  ),
				  'blockBottomRadiusMobile' => array(
					'type' => "number",
					'default' => 0,
				  ),
				  'blockLeftRadiusMobile' => array(
					'type' => "number",
					'default' => 0,
				  ),
				  'blockIsRadiusControlConnected' => array(
					'type' => "boolean",
					'default' => false,
				  ),
				  'blockIsRadiusValueUpdated' => array(
					'type' => "boolean",
					'default' => false,
				  ),
				'verSpace'               => array(
					'type'    => 'number',
					'default' => 0,
				),
				'verSpaceTablet'         => array(
					'type' => 'number',
				),
				'verSpaceMobile'         => array(
					'type' => 'number',
				),
				'horSpace'               => array(
					'type'    => 'number',
					'default' => 0,
				),
				'horSpaceTablet'         => array(
					'type' => 'number',
				),
				'horSpaceMobile'         => array(
					'type' => 'number',
				),
				'stack'                  => array(
					'type'    => 'string',
					'default' => 'mobile',
				),
				'boxShadowColor'         => array(
					'type'    => 'string',
					'default' => '',
				),
				'boxShadowPosition'      => array(
					'type'    => 'string',
					'default' => 'outset',
				),
				'boxShadowHOffset'       => array(
					'type'    => 'number',
					'default' => 0,
				),
				'boxShadowVOffset'       => array(
					'type'    => 'number',
					'default' => 0,
				),
				'boxShadowBlur'          => array(
					'type'    => 'number',
					'default' => 0,
				),
				'boxShadowSpread'        => array(
					'type'    => 'number',
					'default' => 0,
				),
				'taxonomyType'           => array(
					'type'    => 'string',
					'default' => 'category',
				),
				'block_id'               => array(
					'type'    => 'string',
					'default' => 'not_set',
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
				'z_index'               => array(
					'type'    => 'number',
					'default' => 1,
				), 
				'z_indexMobile'         => array(
					'type'    => 'number',
					'default' => 1,
				),  
				'z_indexTablet'         => array(
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
				'blockIsTypographyColorValueUpdated' => array(
					'type' => 'boolean',
					'default' => false,
				),
      			'headingTypographyColor' => array(
					'type' => 'string',
					'default' => '#333',
				),
      			'authorTypographyColor' => array(
					'type' => 'string',
					'default' => '#626e81',
				),
      			'contentTypographyColor' => array(
					'type' => 'string',
					'default' => '#333',
				),
      			'headingBottomSpacing' => array(
					'type' => 'number',
				),
      			'headingBottomSpacingMobile' => array(
					'type' => 'number',
				),
      			'headingBottomSpacingTablet' => array(
					'type' => 'number',
				),
      			'authorBottomSpacing' => array(
					'type' => 'number',
				),
      			'authorBottomSpacingMobile' => array(
					'type' => 'number',
				),
      			'authorBottomSpacingTablet' => array(
					'type' => 'number',
				),
      			'contentBottomSpacing' => array(
					'type' => 'number',
				),
      			'contentBottomSpacingMobile' => array(
					'type' => 'number',
				),
      			'contentBottomSpacingTablet' => array(
					'type' => 'number',
				),     
			),
			'render_callback' => 'responsive_block_editor_addons_post_timeline_render_latest_posts',
		)
	);
}
add_action( 'init', 'responsive_block_editor_addons_post_timeline_register_latest_posts' );


/**
 * Create API fields for additional info
 */
function responsive_block_editor_addons_post_timeline_register_rest_fields() {
	/* Add landscape featured image source */
	register_rest_field(
		array( 'post', 'page' ),
		'featured_image_src',
		array(
			'get_callback'    => 'responsive_block_editor_addons_post_timeline_get_image_src_landscape',
			'update_callback' => null,
			'schema'          => null,
		)
	);

	/* Add square featured image source */
	register_rest_field(
		array( 'post', 'page' ),
		'featured_image_src_square',
		array(
			'get_callback'    => 'responsive_block_editor_addons_post_timeline_get_image_src_square',
			'update_callback' => null,
			'schema'          => null,
		)
	);

	/* Add author info */
	register_rest_field(
		'post',
		'author_info',
		array(
			'get_callback'    => 'responsive_block_editor_addons_post_timeline_get_author_info',
			'update_callback' => null,
			'schema'          => null,
		)
	);
}
add_action( 'rest_api_init', 'responsive_block_editor_addons_post_timeline_register_rest_fields' );


/**
 * Get landscape featured image source for the rest field
 *
 * @param String $object  The object type.
 * @param String $field_name  Name of the field to retrieve.
 * @param String $request  The current request object.
 */
function responsive_block_editor_addons_post_timeline_get_image_src_landscape( $object, $field_name, $request ) {
	$feat_img_array = wp_get_attachment_image_src(
		$object['featured_media'],
		'responsive-block-editor-addons-block-post-timeline-landscape',
		false
	);
	if ( $feat_img_array ) {
		return $feat_img_array[0];
	} else {
		return false;
	}
}

/**
 * Get square featured image source for the rest field
 *
 * @param String $object  The object type.
 * @param String $field_name  Name of the field to retrieve.
 * @param String $request  The current request object.
 */
function responsive_block_editor_addons_post_timeline_get_image_src_square( $object, $field_name, $request ) {
	$feat_img_array = wp_get_attachment_image_src(
		$object['featured_media'],
		'responsive-block-editor-addons-block-post-timeline-square',
		false
	);
	if ( $feat_img_array ) {
		return $feat_img_array[0];
	} else {
		return false;
	}
}

/**
 * Get author info for the rest field
 *
 * @param String $object  The object type.
 * @param String $field_name  Name of the field to retrieve.
 * @param String $request  The current request object.
 */
function responsive_block_editor_addons_post_timeline_get_author_info( $object, $field_name, $request ) {
	/* Get the author name */
	$author_data['display_name'] = get_the_author_meta( 'display_name', $object['author'] );

	/* Get the author link */
	$author_data['author_link'] = get_author_posts_url( $object['author'] );

	/* Return the author data */
	return $author_data;
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
