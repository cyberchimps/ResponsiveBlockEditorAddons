/**
 * External dependencies
 */

import isUndefined from "lodash/isUndefined";
import pickBy from "lodash/pickBy";
import moment from "moment";
import classnames from "classnames";
import Inspector from "./inspector";
import PostGridImage from "./image";
import AlignClass from ".././align-classes";
import ContentTmClasses from ".././classes";
import DayAlignClass from ".././day-align-classes";
import renderSVG from "../../../renderIcon";
import ResponsiveBlocksIcon from "../../../ResponsiveBlocksIcon.json";
import React from "react";
import { loadGoogleFont } from "../../../utils/font";
import EditorStyles from "./editor-styles";
import RbeaTabRadioControl from "../../../utils/components/rbea-tab-radio-control";

import * as JQuery from "jquery";
const $ = JQuery.default;

const { compose } = wp.compose;

const { Component, Fragment } = wp.element;

const { __ } = wp.i18n;

const { decodeEntities } = wp.htmlEntities;

const { withSelect } = wp.data;

const {
  Placeholder,
  Spinner,
  Toolbar,
  Icon,
  SelectControl,
  PanelBody,
} = wp.components;

const {
  BlockAlignmentToolbar,
  BlockControls,
  InspectorControls,
} = wp.blockEditor;

let svg_icons = Object.keys(ResponsiveBlocksIcon);

class LatestPostsBlock extends Component {
  constructor() {
    super(...arguments);
    this.onSelectTaxonomyType = this.onSelectTaxonomyType.bind(this);
  }
  componentDidUpdate(prevProps, prevState) {
    var element = document.getElementById(
      "responsive-block-editor-addons-post-timeline-style-" +
        this.props.clientId
    );

    if (null !== element && undefined !== element) {
      element.innerHTML = EditorStyles(this.props);
    }
    window.addEventListener("load", this.postTimelineContent_back(this.props.clientId));
    window.addEventListener("resize", this.postTimelineContent_back(this.props.clientId));
    var post_time = this;
    $(".edit-post-layout__content").on( 'scroll', function (event) {
      post_time.postTimelineContent_back(this.props.clientId);
    });
  }

  componentDidMount() {
    // Assigning block_id in the attribute.
    this.props.setAttributes({ block_id: this.props.clientId });
    this.props.setAttributes({ classMigrate: true });

    window.addEventListener("load", this.postTimelineContent_back(this.props.clientId));
    window.addEventListener("resize", this.postTimelineContent_back(this.props.clientId));
    var post_time = this;
    $(".edit-post-layout__content").on( 'scroll', function (event) {
      post_time.postTimelineContent_back(this.props.clientId);
    });

    // Pushing Style tag for this block css.
    const $style = document.createElement("style");
    $style.setAttribute(
      "id",
      "responsive-block-editor-addons-post-timeline-style-" +
        this.props.clientId
    );
    document.head.appendChild($style);
  }

  onSelectTaxonomyType(value) {
    const { setAttributes } = this.props;

    setAttributes({ taxonomyType: value });
    setAttributes({ categories: "" });
  }

  /*  Js for timeline line and inner line filler*/
  postTimelineContent_back(id) {
    var timeline = $(".responsive-block-editor-addons-timeline").parents("#block-" + id);
    var tm_item = timeline.find(".responsive-block-editor-addons-timeline");
    var line_inner = timeline.find(".responsive-block-editor-addons-timeline__line__inner");
    var line_outer = timeline.find(".responsive-block-editor-addons-timeline__line");
    var $icon_class = timeline.find(".responsive-block-editor-addons-timeline__marker");
    if ($icon_class.length > 0) {
      var $card_last = timeline.find(".responsive-block-editor-addons-timeline__field:last-child");
      var timeline_start_icon = $icon_class.first().position();
      var timeline_end_icon = $icon_class.last().position();
      line_outer.css("top", timeline_start_icon.top);

      var timeline_card_height = $card_last.height();
      var last_item_top = $card_last.offset().top - tm_item.offset().top;
      var $last_item, parent_top;
      var $document = $(document);

      if (tm_item.hasClass("responsive-block-editor-addons-timeline__arrow-center")) {
        line_outer.css("bottom", timeline_end_icon.top);

        parent_top = last_item_top - timeline_start_icon.top;
        $last_item = parent_top + timeline_end_icon.top;
      } else if (tm_item.hasClass("responsive-block-editor-addons-timeline__arrow-top")) {
        var top_height = timeline_card_height - timeline_end_icon.top;
        line_outer.css("bottom", top_height);

        $last_item = last_item_top;
      } else if (tm_item.hasClass("responsive-block-editor-addons-timeline__arrow-bottom")) {
        var bottom_height = timeline_card_height - timeline_end_icon.top;
        line_outer.css("bottom", bottom_height);
        parent_top = last_item_top - timeline_start_icon.top;
        $last_item = parent_top + timeline_end_icon.top;
      }

      var num = 0;
      var elementEnd = $last_item + 20;

      var connectorHeight =
        3 * timeline.find(".responsive-block-editor-addons-timeline__marker:first").height();
      var viewportHeight =
        document.documentElement.clientHeight + connectorHeight;
      var viewportHeightHalf = viewportHeight / 2 + connectorHeight;

      var elementPos = tm_item.offset().top;

      var new_elementPos = elementPos + timeline_start_icon.top;

      var photoViewportOffsetTop = new_elementPos - $document.scrollTop();

      if (photoViewportOffsetTop < 0) {
        photoViewportOffsetTop = Math.abs(photoViewportOffsetTop);
      } else {
        photoViewportOffsetTop = -Math.abs(photoViewportOffsetTop);
      }

      if (elementPos < viewportHeightHalf) {
        if (
          viewportHeightHalf + Math.abs(photoViewportOffsetTop) <
          elementEnd
        ) {
          line_inner.height(viewportHeightHalf + photoViewportOffsetTop);
        } else {
          if (photoViewportOffsetTop + viewportHeightHalf >= elementEnd) {
            line_inner.height(elementEnd);
          }
        }
      } else {
        if (photoViewportOffsetTop + viewportHeightHalf < elementEnd) {
          if (0 > photoViewportOffsetTop) {
            line_inner.height(
              viewportHeightHalf - Math.abs(photoViewportOffsetTop)
            );
            ++num;
          } else {
            line_inner.height(viewportHeightHalf + photoViewportOffsetTop);
          }
        } else {
          if (photoViewportOffsetTop + viewportHeightHalf >= elementEnd) {
            line_inner.height(elementEnd);
          }
        }
      }

      //For changing icon background color and icon color.
      var timeline_icon_pos, timeline_card_pos;
      var elementPos, elementCardPos;
      var timeline_icon_top, timeline_card_top;
      var timeline_icon = timeline.find(".responsive-block-editor-addons-timeline__marker"),
        animate_border = timeline.find(".responsive-block-editor-addons-timeline__field-wrap");

      for (var i = 0; i < timeline_icon.length; i++) {
        timeline_icon_pos = $(timeline_icon[i]).offset().top;
        timeline_card_pos = $(animate_border[i]).offset().top;
        elementPos = timeline.offset().top;
        elementCardPos = timeline.offset().top;

        timeline_icon_top = timeline_icon_pos - $document.scrollTop();
        timeline_card_top = timeline_card_pos - $document.scrollTop();

        if (timeline_card_top < viewportHeightHalf) {
          animate_border[i].classList.remove("out-view");
          animate_border[i].classList.add("in-view");
        } else {
          // Remove classes if element is below than half of viewport.
          animate_border[i].classList.add("out-view");
          animate_border[i].classList.remove("in-view");
        }

        if (timeline_icon_top < viewportHeightHalf) {
          // Add classes if element is above than half of viewport.
          timeline_icon[i].classList.remove(
            "responsive-block-editor-addons-timeline__out-view-icon"
          );
          timeline_icon[i].classList.add("responsive-block-editor-addons-timeline__in-view-icon");
        } else {
          // Remove classes if element is below than half of viewport.
          timeline_icon[i].classList.add("responsive-block-editor-addons-timeline__out-view-icon");
          timeline_icon[i].classList.remove(
            "responsive-block-editor-addons-timeline__in-view-icon"
          );
        }
      }
    }
  }

  render() {
    const {
      attributes,
      setAttributes,
      latestPosts,
      taxonomyList,
      categoriesList,
    } = this.props;

    // Check if there are posts
    const hasPosts = Array.isArray(latestPosts) && latestPosts.length;

    // Check the post type
    const isPost = "post" === attributes.postType;

    if (!hasPosts) {
      return (
        <Fragment>
          <style id={`responsive-block-editor-addons-post-timeline-style-${this.props.clientId}-inner`}>{EditorStyles(this.props)}</style>
          <Inspector {...{ setAttributes, ...this.props, queryControls }} />
          <Placeholder
            icon="admin-post"
            label={__("Post Timeline", "responsive-block-editor-addons")}
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

    var content_align_class = AlignClass(this.props.attributes, 0); // Get classname for layout alignment
    var day_align_class = DayAlignClass(this.props.attributes, 0); // Get classname for day alignment.

    let taxonomyListOptions = [];

    let categoryListOptions = [{ value: "", label: __("All", "responsive-block-editor-addons") }];

    if ("" != taxonomyList) {
      Object.keys(taxonomyList).map((item, thisIndex) => {
        return taxonomyListOptions.push({
          value: taxonomyList[item]["name"],
          label: taxonomyList[item]["label"],
        });
      });
    }

    if ("" != categoriesList) {
      Object.keys(categoriesList).map((item, thisIndex) => {
        return categoryListOptions.push({
          value: categoriesList[item]["id"],
          label: categoriesList[item]["name"],
        });
      });
    }

    const queryControls = (
      <PanelBody title={__("Query", "responsive-block-editor-addons")} initialOpen={true}>
          {"" != taxonomyList && (
            <RbeaTabRadioControl
              label={__("Taxonomy", "responsive-block-editor-addons")}
              value={attributes.taxonomyType}
              onChange={(value) => this.onSelectTaxonomyType(value)}
              options={taxonomyListOptions}
            />
          )}
          {"" != categoriesList && (
            <Fragment>
              <SelectControl
                label={taxonomyList[attributes.taxonomyType]["label"]}
                value={attributes.categories}
                onChange={(value) => setAttributes({ categories: value })}
                options={categoryListOptions}
              />
            </Fragment>
          )}
      </PanelBody>
    )

    return (
      <Fragment>
        <style id={`responsive-block-editor-addons-post-timeline-style-${this.props.clientId}-inner`}>{EditorStyles(this.props)}</style>
        <Inspector {...{ setAttributes, ...this.props, queryControls }} />
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
            "responsive-block-editor-addons-block-post-timeline",
            `block-${attributes.block_id}`,
            ...ContentTmClasses(this.props.attributes)
          )}
        >
          {attributes.displaySectionTitle && attributes.sectionTitle && (
            <SectionTitleTag className="responsive-block-editor-addons-post-grid-section-title">
              {attributes.sectionTitle}
            </SectionTitleTag>
          )}
          <div className="responsive-block-editor-addons-timeline__main">
            <div className="responsive-block-editor-addons-timeline__days">
              {displayPosts.map(
                (post, i) => (
                  (content_align_class = AlignClass(this.props.attributes, i)),
                  (day_align_class = DayAlignClass(this.props.attributes, i)),
                  (
                    <article
                      key={i}
                      id={"post-" + post.id}
                      className={classnames(
                        "post-" + post.id,
                        "responsive-block-editor-addons-timeline__field",
                        "responsive-block-editor-addons-timeline__field-wrap",
                        post.featured_image_src && attributes.displayPostImage
                          ? "has-post-thumbnail"
                          : null
                      )}
                    >
                      <div className={content_align_class}>
                        <div className="responsive-block-editor-addons-timeline__marker responsive-block-editor-addons-timeline__out-view-icon">
                          <span className="responsive-block-editor-addons-timeline__icon-new responsive-block-editor-addons-timeline__out-view-icon">
                            <span>
                              {" "}
                              <div className="responsive-block-editor-addons-ifb-icon-wrap">
                                <span className="responsive-block-editor-addons-ifb-icon">
                                  {renderSVG(attributes.icon)}
                                </span>
                              </div>{" "}
                            </span>
                          </span>
                        </div>
                        <div className={day_align_class}>
                          <div className="responsive-block-editor-addons-timeline__events-new">
                            <div className="responsive-block-editor-addons-timeline__events-inner-new">
                              {attributes.dateFontFamily &&
                                loadGoogleFont(attributes.dateFontFamily)}
                              {attributes.headingFontFamily &&
                                loadGoogleFont(attributes.headingFontFamily)}
                              {attributes.authorFontFamily &&
                                loadGoogleFont(attributes.authorFontFamily)}
                              {attributes.contentFontFamily &&
                                loadGoogleFont(attributes.contentFontFamily)}
                              {attributes.continueFontFamily &&
                                loadGoogleFont(attributes.continueFontFamily)}
                              <div className="responsive-block-editor-addons-timeline__date-hide responsive-block-editor-addons-timeline__date-inner">
                                {attributes.displayPostDate && post.date_gmt && (
                                  <time
                                    dateTime={moment(post.date_gmt)
                                      .utc()
                                      .format()}
                                    className={
                                      "responsive-block-editor-addons-timeline__date-new"
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
                              </div>
                              {attributes.displayPostImage &&
                              post.featured_media ? (
                                <PostGridImage
                                  {...this.props}
                                  imgAlt={
                                    decodeEntities(
                                      post.title.rendered.trim()
                                    ) ||
                                    __(
                                      "(Untitled)",
                                      "responsive-block-editor-addons"
                                    )
                                  }
                                  imgClass={`wp-image-${post.featured_media.toString()}`}
                                  imgID={post.featured_media.toString()}
                                  imgSize={attributes.imageSize}
                                  imgSizeLandscape={post.featured_image_src}
                                  imgSizeSquare={post.featured_image_src_square}
                                  imgLink={post.link}
                                />
                              ) : null}
                              <div className="responsive-block-editor-addons-content">
                                {attributes.displayPostTitle && (
                                  <PostTag className="responsive-block-editor-addons-block-post-timeline-title">
                                    <a
                                      className="responsive-block-editor-addons-block-post-timeline-title-heading"
                                      href={post.link}
                                      target="_blank"
                                      rel="bookmark"
                                    >
                                      {decodeEntities(
                                        post.title.rendered.trim()
                                      ) ||
                                        __(
                                          "(Untitled)",
                                          "responsive-block-editor-addons"
                                        )}
                                    </a>
                                  </PostTag>
                                )}

                                {isPost && (
                                  <div className="responsive-block-editor-addons-block-post-timeline-byline">
                                    {attributes.displayPostAuthor &&
                                      post.author_info.display_name && (
                                        <div className="responsive-block-editor-addons-block-post-timeline-author">
                                          <a
                                            className="responsive-block-editor-addons-text-link"
                                            target="_blank"
                                            href={post.author_info.author_link}
                                          >
                                            {post.author_info.display_name}
                                          </a>
                                        </div>
                                      )}
                                  </div>
                                )}

                                <div className="responsive-block-editor-addons-block-post-timeline-excerpt">
                                  {attributes.displayPostExcerpt &&
                                    post.excerpt && (
                                      <div className="responsive-block-editor-addons-timeline__post">
                                        <div
                                          dangerouslySetInnerHTML={{
                                            __html: truncate(
                                              post.excerpt.rendered,
                                              attributes.excerptLength
                                            ),
                                          }}
                                        />
                                      </div>
                                    )}

                                  {attributes.displayPostLink && (
                                    <div className="responsive-block-editor-addons-timeline__link_parent">
                                      <a
                                        className="responsive-block-editor-addons-timeline__link"
                                        href={post.link}
                                        target="_blank"
                                        rel="bookmark"
                                      >
                                        {attributes.readMoreText}
                                      </a>
                                    </div>
                                  )}
                                </div>
                                <div className="responsive-block-editor-addons-timeline__arrow"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="responsive-block-editor-addons-timeline__date-new responsive-block-editor-addons-timeline__date-outer">
                          {attributes.displayPostDate && post.date_gmt && (
                            <time
                              dateTime={moment(post.date_gmt).utc().format()}
                              className={
                                "responsive-block-editor-addons-timeline__date-new"
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
                        </div>
                      </div>
                    </article>
                  )
                )
              )}
            </div>
            <div className="responsive-block-editor-addons-timeline__line">
              <div className="responsive-block-editor-addons-timeline__line__inner"></div>
            </div>
          </div>
        </SectionTag>
      </Fragment>
    );
  }
}

export default compose([
  withSelect((select, props) => {
    const { order, postsToShow, orderBy, categories, taxonomyType, postType, excludeCurrentPost } = props.attributes;

    const { getEntityRecords } = select("core");

    let allTaxonomy = responsive_globals.all_taxonomy;
    let currentTax = allTaxonomy[postType];
    let taxonomy = "";
    let categoriesList = [];
    let rest_base = "";

    if ("undefined" != typeof currentTax) {
      if ("undefined" != typeof currentTax["taxonomy"][taxonomyType]) {
        rest_base =
          (currentTax["taxonomy"][taxonomyType]["rest_base"] == false ||
          currentTax["taxonomy"][taxonomyType]["rest_base"] == null)
            ? currentTax["taxonomy"][taxonomyType]["name"]
            : currentTax["taxonomy"][taxonomyType]["rest_base"];
      }

      if ("" != taxonomyType) {
        if (
          "undefined" != typeof currentTax["terms"] &&
          "undefined" != typeof currentTax["terms"][taxonomyType]
        ) {
          categoriesList = currentTax["terms"][taxonomyType];
        }
      }
    }

    const latestPostsQuery = {
        order: order,
        orderby: orderBy,
        per_page: postsToShow,
        offset: props.attributes.offset,
      }

    if(excludeCurrentPost) {
      latestPostsQuery['exclude'] = select("core/editor").getCurrentPostId()
    }

    var category = [];
    var temp = parseInt(categories);
    category.push(temp);
    var catlength = categoriesList?.length;
    for(var i=0;i<catlength;i++){
      if(categoriesList[i].id == temp){
        if(categoriesList[i].child?.length !== 0){
          categoriesList[i].child?.forEach(element => {
            category.push(element);
          });
        }
      }
    }
    if ( undefined !== categories && '' !== categories ) {
      latestPostsQuery[rest_base] = (undefined === categories || '' === categories ) ? categories :category;
    }

    return {
      latestPosts: getEntityRecords(
        "postType",
        postType,
        latestPostsQuery
      ),
      categoriesList: categoriesList,
      taxonomyList:
        ("undefined" != typeof currentTax) ? currentTax["taxonomy"] : [],
    };
  }),
])(LatestPostsBlock);

// Truncate excerpt
function truncate(str, no_words) {
  return str.split(" ").splice(0, no_words).join(" ");
}
