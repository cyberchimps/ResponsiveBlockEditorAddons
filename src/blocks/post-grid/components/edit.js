/**
 * External dependencies
 */

import isUndefined from "lodash/isUndefined";
import pickBy from "lodash/pickBy";
import moment from "moment";
import classnames from "classnames";
import Inspector from "./inspector";
import PostGridImage from "./image";
import EditorStyles from "./editor-styles";
import { loadGoogleFont } from "../../../utils/font";
import RbeaTabRadioControl from "../../../utils/components/rbea-tab-radio-control";

const { compose } = wp.compose;

const { Component, Fragment } = wp.element;
const { __ } = wp.i18n;

const { decodeEntities } = wp.htmlEntities;

const { withSelect } = wp.data;
const { AlignmentToolbar } = wp.blockEditor;

const {
  Placeholder,
  Spinner,
  ToolbarButton,
  ToolbarGroup,
  PanelBody,
  SelectControl,
} = wp.components;

const {
  BlockAlignmentToolbar,
  BlockControls,
  InspectorControls,
} = wp.blockEditor;

class LatestPostsBlock extends Component {
  constructor() {
    super(...arguments);
    this.onSelectTaxonomyType = this.onSelectTaxonomyType.bind(this);
  }
  componentDidUpdate(prevProps, prevState) {
    var element = document.getElementById(
      "responsive-block-editor-addons-post-grid-style-" + this.props.clientId
    );

    if (null !== element && undefined !== element) {
      element.innerHTML = EditorStyles(this.props);
    }
  }

  componentDidMount() {
    this.props.setAttributes({
      block_id: this.props.clientId.substr(0, 8),
    });

    // Pushing Style tag for this block css.
    const $style = document.createElement("style");
    $style.setAttribute(
      "id",
      "responsive-block-editor-addons-post-grid-style-" + this.props.clientId
    );
    document.head.appendChild($style);
  }

  onSelectTaxonomyType(value) {
    const { setAttributes } = this.props;

    setAttributes({ taxonomyType: value });
    setAttributes({ categories: "" });
  }

  render() {
    const {
      attributes,
      setAttributes,
      latestPosts,
      taxonomyList,
      categoriesList,
    } = this.props;

    var boxShadowPositionCSS = attributes.boxShadowPosition;

    if ("outset" === attributes.boxShadowPosition) {
      boxShadowPositionCSS = "";
    }
    var hoverboxShadowPositionCSS = attributes.hoverboxShadowPosition;

    if ("outset" === attributes.hoverboxShadowPosition) {
      hoverboxShadowPositionCSS = "";
    }
    const { paginationMarkup } = this.props.attributes;

    // Check if there are posts
    const hasPosts = Array.isArray(latestPosts) && latestPosts.length;

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

    // Check the post type
    const isPost = "post" === attributes.postType;
    const isCourse = "sfwd-courses" === attributes.postType;
    const isLesson = "sfwd-lessons" === attributes.postType;

    // Post type options
    const postTypeOptions = [
      { value: "post", label: __("Post", "responsive-block-editor-addons") },
      { value: "page", label: __("Page", "responsive-block-editor-addons") },
      {
        value: "sfwd-courses",
        label: __("Courses", "responsive-block-editor-addons"),
      },
      {
        value: "sfwd-lessons",
        label: __("Lessons", "responsive-block-editor-addons"),
      },
    ];

    if (!hasPosts) {
      return (
        <Fragment>
          <style id={`responsive-block-editor-addons-post-grid-style-${this.props.clientId}-inner`}>{EditorStyles(this.props)}</style>
          <Inspector {...{ setAttributes, ...this.props }} />
          <Placeholder
            icon="admin-post"
            label={__(
              "Blocks Post and Page Grid",
              "responsive-block-editor-addons"
            )}
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

    // Add toolbar controls to change layout
    const layoutControls = [
      {
        key: "grid-layout",
        icon: "grid-view",
        title: __("Grid View", "responsive-block-editor-addons"),
        onClick: () => setAttributes({ postLayout: "grid" }),
        isActive: "grid" === attributes.postLayout,
      },
      {
        key: "list-layout",
        icon: "list-view",
        title: __("List View", "responsive-block-editor-addons"),
        onClick: () => setAttributes({ postLayout: "list" }),
        isActive: "list" === attributes.postLayout,
      },
    ];

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

    let setPostGridContentType = (value) => {
      if(value !== 'post') {
        setAttributes(attributes.categories = '')
      }
      setAttributes({ postType: value })
    }

	let queryControls = (
		<PanelBody title={__("Query", "responsive-block-editor-addons")} initialOpen={true}>
			  <div className="rbea-tab-radio-control-wrapper">
          <label>{__("Text Alignment", "responsive-block-editor-addons")}</label>
          <Fragment>
            <div className="responsive-block-editor-addons-alignment">
			        <AlignmentToolbar
				      value={attributes.textAlignment}
				      onChange={(value) =>
				        setAttributes({
				      	textAlignment: value,
				        })
				      }
				      controls={["left", "center", "right"]}
				      isCollapsed={false}
			        />
            </div>
          </Fragment>
        </div>
        <div className = "rbea-repeat-selector-wrapper">
			    <RbeaTabRadioControl
				  label={__("Content Type", "responsive-block-editor-addons")}
				  options={postTypeOptions}
				  value={attributes.postType}
				  onChange={(value) => setPostGridContentType(value)}
			    />
        </div>
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
					label={
					  taxonomyList[attributes.taxonomyType]
						? taxonomyList[attributes.taxonomyType]["label"]
						: "Taxonomy"
					}
					value={attributes.categories}
					onChange={(value) => setAttributes({ categories: value })}
					options={categoryListOptions}
				  />
				</Fragment>
			  )}
		</PanelBody>
	);

    return (
      <Fragment>
        <style id={`responsive-block-editor-addons-post-grid-style-${this.props.clientId}-inner`}>{EditorStyles(this.props)}</style>
        <Inspector {...{ setAttributes, ...this.props, queryControls }} />
        <BlockControls>
          <BlockAlignmentToolbar
            label={__("Block Alignment", "responsive-block-editor-addons")}
            value={attributes.align}
            onChange={(value) => {
              setAttributes({ align: value });
            }}
            controls={["left", "center", "right", "wide", "full"]}
          />
          <ToolbarGroup>
            {layoutControls.map((current) => {
              return (
              <ToolbarButton
              key={current.key}
                icon={current.icon}
                title={current.title}
                isActive={current.isActive}
                onClick={current.onClick}
              />)
            })}
          </ToolbarGroup>
        </BlockControls>

        <SectionTag
          className={classnames(
            `block-id-${attributes.block_id}`,
            this.props.className,
            "responsive-block-editor-addons-block-post-grid"
          )}
        >
		  {attributes.excerptFontFamily && loadGoogleFont(attributes.excerptFontFamily)}
		  {attributes.metaFontFamily && loadGoogleFont(attributes.metaFontFamily)}
		  {attributes.titleFontFamily && loadGoogleFont(attributes.titleFontFamily)}
		  {attributes.continueFontFamily && loadGoogleFont(attributes.continueFontFamily)}
          {attributes.displaySectionTitle && attributes.sectionTitle && (
            <SectionTitleTag className="responsive-block-editor-addons-post-grid-section-title">
              {attributes.sectionTitle}
            </SectionTitleTag>
          )}

          <div
            className={classnames({
              "is-grid": "grid" === attributes.postLayout,
              "is-list": "list" === attributes.postLayout,
              [`columns-${attributes.columns}`]:
                "grid" === attributes.postLayout,
              "responsive-block-editor-addons-post-grid-items":
                "responsive-block-editor-addons-post-grid-items",
            })}
          >
            {displayPosts.map((post, i) => (
              <article
                key={i}
                id={"post-" + post.id}
                style={{
                  backgroundImage:
                    "background" == attributes.imagePosition
                      ? "url(" + post.featured_image_src + " )"
                      : "none",
                }}
                className={classnames(
                  "post-" + post.id,
                  post.featured_image_src && attributes.displayPostImage
                    ? "has-post-thumbnail"
                    : null
                )}
              >
                {attributes.displayPostImage &&
                post.featured_media &&
                "background" != attributes.imagePosition ? (
                  <PostGridImage
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

                <div
                  className={classnames(
                    "responsive-block-editor-addons-block-post-grid-text"
                  )}
                >
                  <header className="responsive-block-editor-addons-block-post-grid-header">
                    {attributes.displayPostTitle && (
                      <PostTag
                        className="responsive-block-editor-addons-block-post-grid-title"
                        style={{
                          marginBottom: attributes.titleBottomSpacing,
                        }}
                      >
                        <a href={post.link} target="_blank" rel="bookmark">
                          {decodeEntities(post.title.rendered.trim()) ||
                            __("(Untitled)", "responsive-block-editor-addons")}
                        </a>
                      </PostTag>
                    )}

                    {(isPost || isCourse || isLesson) && (
                      <div className="responsive-block-editor-addons-block-post-grid-byline">
                        {attributes.displayPostAuthor &&
                          post.rbea_author_info?.display_name && (
                            <div className="responsive-block-editor-addons-block-post-grid-author">
                              <a
                                className="responsive-block-editor-addons-text-link"
                                target="_blank"
                                href={post.rbea_author_info.author_link}
                              >
                                {post.rbea_author_info.display_name}
                              </a>
                            </div>
                          )}

                        {attributes.displayPostDate && post.date_gmt && (
                          <time
                            dateTime={moment(post.date_gmt).utc().format()}
                            className={
                              "responsive-block-editor-addons-block-post-grid-date"
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
                    )}
                  </header>
                  <div className="responsive-block-editor-addons-block-post-grid-excerpt">
                    {attributes.displayPostExcerpt && post.excerpt && (
                      <div
                        dangerouslySetInnerHTML={{
                          __html: truncate(
                            post.excerpt.rendered,
                            attributes.excerptLength
                          ),
                        }}
                      />
                    )}
                    {attributes.displayPostExcerpt && isLesson && (
                      <div
                        dangerouslySetInnerHTML={{
                          __html: truncate(
                            post.rbea_excerpt_info,
                            attributes.excerptLength
                          ),
                        }}
                      />
                    )}
                    {attributes.displayPostLink && (
                      <p>
                        <a
                          className="responsive-block-editor-addons-block-post-grid-more-link responsive-block-editor-addons-text-link"
                          href={post.link}
                          target="_blank"
                          rel="bookmark"
                        >
                          {attributes.readMoreText}
                        </a>
                      </p>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
          {true === attributes.postPagination &&
            "empty" !== paginationMarkup && (
              <div
                dangerouslySetInnerHTML={{ __html: paginationMarkup }}
                className="responsive-block-editor-addons-post-pagination-wrap"
              ></div>
            )}
        </SectionTag>
      </Fragment>
    );
  }
}

export default compose([
  withSelect((select, props) => {
    const { attributes, latestPosts, setAttributes } = props;
    const {
      order,
      postsToShow,
      orderBy,
      categories,
      paginationMarkup,
      excludeCurrentPost,
      taxonomyType,
      postType,
    } = props.attributes;

    const { getEntityRecords } = select("core");

    if (true === attributes.postPagination) {
      jQuery.ajax({
        url: responsive_globals.ajax_url,
        data: {
          action: "responsive_block_editor_post_pagination",
          attributes: props.attributes,
          nonce: responsive_globals.responsive_block_editor_ajax_nonce,
        },
        dataType: "json",
        type: "POST",
        success: function (data) {
          setAttributes({ paginationMarkup: data.data });
        },
      });
    }
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

    if (excludeCurrentPost) {
      latestPostsQuery["exclude"] = select("core/editor").getCurrentPostId();
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
    }
  }),
])(LatestPostsBlock);

// Truncate excerpt
function truncate(str, no_words) {
  return str?.split(" ").splice(0, no_words).join(" ");
}
