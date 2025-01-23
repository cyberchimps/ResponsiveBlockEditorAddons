/**
 * External dependencies
 */

import isUndefined from "lodash/isUndefined";
import pickBy from "lodash/pickBy";
import moment from "moment";
import classnames from "classnames";
import Inspector from "./inspector";
import PostCarouselImage from "./image";
import Slider from "react-slick";
import map from "lodash/map";
import generateCSSUnit from "../../../generateCSSUnit";
import Style from "style-it";
import { loadGoogleFont } from "../../../utils/font";
import EditorStyles from "./editor-styles";

const { compose } = wp.compose;

const { Component, Fragment } = wp.element;

const { __ } = wp.i18n;

const { decodeEntities } = wp.htmlEntities;

const { withSelect } = wp.data;

const { Placeholder, Spinner, Toolbar, Dashicon } = wp.components;

const {
  BlockAlignmentToolbar,
  BlockControls,
  AlignmentToolbar,
} = wp.blockEditor;

class LatestPostsBlock extends Component {
  componentDidUpdate(prevProps, prevState) {
    var element = document.getElementById(
      "responsive-block-editor-addons-post-carousel-style-" +
        this.props.clientId
    );

    if (null !== element && undefined !== element) {
      element.innerHTML = EditorStyles(this.props);
    }
  }

  componentDidMount() {
    // Assigning block_id in the attribute.
    this.props.setAttributes({ block_id: this.props.clientId });
    this.props.setAttributes({ classMigrate: true });

    // Pushing Style tag for this block css.
    const $style = document.createElement("style");
    $style.setAttribute(
      "id",
      "responsive-block-editor-addons-post-carousel-style-" +
        this.props.clientId
    );
    document.head.appendChild($style);
  }

  render() {
    const { attributes, setAttributes, latestPosts } = this.props;

    const {
      pauseOnHover,
      arrowSize,
      block_id,
      blockAlign,
      arrowDotsColor,
      titleFontFamily,
      metaFontFamily,
      excerptFontFamily,
      ctaFontFamily,
      imagePosition,
      opacity,
      readMoreText,
      equalHeight,
      buttonTarget,
    } = attributes;
    let imgopacity = opacity / 100;
    // Check if there are posts
    const hasPosts = Array.isArray(latestPosts) && latestPosts.length;

    // Check the post type
    const isPost = "post" === attributes.postType;

    if (!hasPosts) {
      return (
        <Fragment key="fragment-post-carousel"  >
          <style id={`responsive-block-editor-addons-post-carousel-style-${this.props.clientId}-inner`}>{EditorStyles(this.props)}</style>
          <Inspector key="inspector" {...{ setAttributes, ...this.props }} />
          <Placeholder
            icon="admin-post"
            label={__("Post Carousel", "responsive-block-editor-addons")}
          >
            {!Array.isArray(latestPosts) ? (
              <Spinner />
            ) : (
              __("No posts found.", "responsive-block-editor-addons")
            )}
          </Placeholder>
        </Fragment>
      );
    }

    // Removing posts from display should be instant.
    const displayPosts =
      latestPosts.length > attributes.postsToShow
        ? latestPosts.slice(0, attributes.postsToShow)
        : latestPosts;

    // Get the section tag
    const SectionTag = attributes.sectionTag
      ? attributes.sectionTag
      : "section";

    // Get the section title tag
    const SectionTitleTag = attributes.sectionTitleTag
      ? attributes.sectionTitleTag
      : "h2";

    // Get the post title tag
    const PostTag = attributes.postTitleTag ? attributes.postTitleTag : "h3";

    const onRemoveImage = () => {
      x = null;
      y = null;
      setAttributes({
        x,
        y,
      });
    };

    function NextArrow(props) {
      const { onClick } = props;

      return (
        <button
          type="button"
          data-role="none"
          className="slick-next slick-arrow"
          aria-label="Next"
          tabIndex="0"
          role="button"
          onClick={ onClick }
        >
          <Dashicon
            icon="arrow-right-alt2"
            height={arrowSize}
            width={arrowSize}
            style={{ fill: arrowDotsColor }}
          />
        </button>
      );
    }

    function PrevArrow(props) {
      const { onClick } = props;

      return (
        <button
          type="button"
          data-role="none"
          className="slick-prev slick-arrow"
          aria-label="Previous"
          tabIndex="0"
          role="button"
          onClick={ onClick }
        >
          <Dashicon
            icon="arrow-left-alt2"
            height={arrowSize}
            width={arrowSize}
            style={{ fill: arrowDotsColor }}
          />
        </button>
      );
    }

    let dots =
      "dots" == attributes.arrowDots || "arrows_dots" == attributes.arrowDots
        ? true
        : false;
    let arrows =
      "arrows" == attributes.arrowDots || "arrows_dots" == attributes.arrowDots
        ? true
        : false;

    const settings = {
      slidesToShow: attributes.columns,
      slidesToScroll: 1,
      autoplaySpeed: attributes.autoplaySpeed,
      autoplay: attributes.autoplay,
      infinite: attributes.infiniteLoop,
      pauseOnHover: pauseOnHover,
      speed: attributes.transitionSpeed,
      arrows: arrows,
      dots: dots,
      rtl: false,
      draggable: false,
      nextArrow: <NextArrow arrowSize={arrowSize} onClick={() => this.next()}/>,
      prevArrow: <PrevArrow arrowSize={arrowSize} onClick={() => this.previous()}/>,
      responsive: [
        {
          breakpoint: 976,
          settings: {
            slidesToShow: attributes.columnsTablet,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: attributes.columnsMobile,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <Fragment>
        <style id={`responsive-block-editor-addons-post-carousel-style-${this.props.clientId}-inner`}>{EditorStyles(this.props)}</style>
        <Inspector
          {...{ setAttributes, ...this.props }}
          postCount={latestPosts && latestPosts.length}
        />
        <BlockControls key="controls">
          <AlignmentToolbar
            value={blockAlign}
            onChange={(value) => setAttributes({ blockAlign: value })}
          />
        </BlockControls>

        <BlockControls>
          <BlockAlignmentToolbar
            value={attributes.align}
            onChange={(value) => {
              setAttributes({ align: value });
            }}
            controls={["center", "wide", "full"]}
          />
        </BlockControls>
        <SectionTag
          className={classnames(
            this.props.className,
            "responsive-block-editor-addons-block-post-carousel",
            `resp-post__image-position-background`,
            "responsive-post-grid",
            `responsive-post__image-position-${imagePosition}`,
            `block-${block_id}`
          )}
        >
          <div
            className={classnames(
              "responsive-post-slick-carousel",
              `responsive-post_carousel-equal-height-${equalHeight}`
            )}
          >
            {titleFontFamily && loadGoogleFont(titleFontFamily)}
            {metaFontFamily && loadGoogleFont(metaFontFamily)}
            {excerptFontFamily && loadGoogleFont(excerptFontFamily)}
            {ctaFontFamily && loadGoogleFont(ctaFontFamily)}
            <Slider {...settings}>
              {displayPosts.map((post, index) => (
                <div key={post.id} >
                  <div
                    className={classnames(
                      "responsive-block-editor-addons-post-carousel-inner",
                      "post-" + post.id,
                      post.featured_image_src && attributes.displayPostImage
                        ? "has-post-thumbnail"
                        : null
                    )}
                  >
                    {imagePosition &&
                    attributes.displayPostImage &&
                    post.featured_media ? (
                      <PostCarouselImage
                        {...this.props}
                        imgAlt={
                          decodeEntities(post.title.rendered.trim()) ||
                          __("(Untitled)", "responsive-block-editor-addons")
                        }
                        imgClass={`wp-image-${post.featured_media.toString()}`}
                        imgID={post.featured_media.toString()}
                        imgSize={attributes.imageSize}
                        imgSizeLandscape={post.featured_image_src}
                        imgSizeSquare={post.featured_image_src_square}
                        imgLink={post.link}
                      />
                    ) : null}
                    <div className="responsive-block-editor-addons-block-post-carousel-text-wrap">
                      <header className="responsive-block-editor-addons-block-post-carousel-header">
                        {attributes.displayPostTitle && (
                          <PostTag className="responsive-block-editor-addons-block-post-carousel-title">
                            <a href={post.link} target="_blank" rel="bookmark">
                              {decodeEntities(post.title.rendered.trim()) ||
                                __(
                                  "(Untitled)",
                                  "responsive-block-editor-addons"
                                )}
                            </a>
                          </PostTag>
                        )}
                        {isPost && (
                          <div className="responsive-block-editor-addons-block-post-carousel-byline">
                            <span>
                              {attributes.displayPostAuthor &&
                                post.author_info.display_name && (
                                  <div className="responsive-block-editor-addons-block-post-carousel-author">
                                    <a
                                      className="responsive-block-editor-addons-text-link"
                                      target="_blank"
                                      href={post.author_info.author_link}
                                    >
                                      {post.author_info.display_name}
                                    </a>
                                  </div>
                                )}

                              {attributes.displayPostDate && post.date_gmt && (
                                <time
                                  dateTime={moment(post.date_gmt)
                                    .utc()
                                    .format()}
                                  className={
                                    "responsive-block-editor-addons-block-post-carousel-date"
                                  }
                                >
                                  {moment(post.date_gmt)
                                    .local()
                                    .format(
                                      "MMMM DD, Y",
                                      "responsive-block-editor-addons"
                                    )}
                                </time>
                              )}
                              {attributes.displayPostComment && (
                                <p
                                  className={
                                    "responsive-block-editor-addons-block-post-carousel-comments"
                                  }
                                >
                                  {post.comments_num == "0 comments"
                                    ? "No Comments"
                                    : post.comments_num}
                                </p>
                              )}
                            </span>

                            {attributes.displayPostTaxonomy && (
                              <div
                                className={
                                  "responsive-block-editor-addons-block-post-carousel-taxonomy"
                                }
                                dangerouslySetInnerHTML={{
                                  __html: post.category_list.replace(
                                    /href=['"].*?['"]/g,
                                    ""
                                  ),
                                }}
                              ></div>
                            )}
                          </div>
                        )}
                      </header>
                      <div className="responsive-block-editor-addons-block-post-carousel-excerpt">
                        {attributes.displayPostExcerpt && post.excerpt && (
                          <div
                            dangerouslySetInnerHTML={{
                              __html: truncate(
                                post.excerpt.rendered,
                                attributes.excerptLength
                              ),
                            }}
                            className="responsive-block-editor-addons-block-post-carousel-excerpt-inner"
                          />
                        )}

                        {attributes.displayPostLink && (
                          <p className="responsive-block-editor-addons-block-post-carousel-more-link-wrapper">
                            <a
                              className="responsive-block-editor-addons-block-post-carousel-more-link responsive-block-editor-addons-text-link"
                              href={post.link}
                              target={buttonTarget.toString()}
                              rel="bookmark"
                            >
                              {readMoreText}
                            </a>
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </SectionTag>
      </Fragment>
    );
  }
}

export default compose([
  withSelect((select, props) => {
    const { order, categories } = props.attributes;

    const { getEntityRecords } = select("core");

    const latestPostsQuery = pickBy(
      {
        categories,
        order,
        orderby: props.attributes.orderBy,
        per_page: props.attributes.postsToShow,
        offset: props.attributes.offset,
        exclude: [wp.data.select("core/editor").getCurrentPostId()],
      },
      (value) => !isUndefined(value)
    );

    return {
      latestPosts: getEntityRecords(
        "postType",
        props.attributes.postType,
        latestPostsQuery
      ),
    };
  }),
])(LatestPostsBlock);

// Truncate excerpt
function truncate(str, no_words) {
  return str.split(" ").splice(0, no_words).join(" ");
}
