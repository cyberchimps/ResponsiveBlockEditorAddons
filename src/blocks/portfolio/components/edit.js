/**
 * External dependencies
 */

import classnames from "classnames";
import Inspector from "./inspector";
import PortfolioImage from "./image";
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
  PanelBody,
  SelectControl,
} = wp.components;

const {
  BlockAlignmentToolbar,
  BlockVerticalAlignmentToolbar,
  BlockControls,
} = wp.blockEditor;

class LatestPostsBlock extends Component {
  constructor() {
    super(...arguments);
    this.onSelectTaxonomyType = this.onSelectTaxonomyType.bind(this);
  }
  componentDidUpdate(prevProps, prevState) {
    var element = document.getElementById(
      "responsive-block-editor-addons-portfolio-style-" + this.props.clientId
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
      "responsive-block-editor-addons-portfolio-style-" + this.props.clientId
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
    const isCourse = "course" === attributes.postType;
    const isLesson = "lesson" === attributes.postType;

    // Post type options
    const postTypeOptions = [
      { value: "post", label: __("Post", "responsive-block-editor-addons") },
      { value: "page", label: __("Page", "responsive-block-editor-addons") },
      {
        value: "course",
        label: __("Courses", "responsive-block-editor-addons"),
      },
      {
        value: "lesson",
        label: __("Lessons", "responsive-block-editor-addons"),
      },
    ];

    if (!hasPosts) {
      return (
        <Fragment>
          <style id={`responsive-block-editor-addons-portfolio-style-${this.props.clientId}-inner`}>{EditorStyles(this.props)}</style>
          <Inspector {...{ setAttributes, ...this.props }} />
          <Placeholder
            icon="admin-post"
            label={__(
              "Portfolio",
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
			
			  <Fragment>
			  <RbeaTabRadioControl
				label={__("Content Type", "responsive-block-editor-addons")}
				options={postTypeOptions}
				value={attributes.postType}
				onChange={(value) => setPostGridContentType(value)}
			  />
			  </Fragment>
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
        <style id={`responsive-block-editor-addons-portfolio-style-${this.props.clientId}-inner`}>{EditorStyles(this.props)}</style>
        <Inspector {...{ setAttributes, ...this.props, queryControls }} />
        <BlockControls>
          <BlockAlignmentToolbar
            label={__("Block Alignment", "responsive-block-editor-addons")}
            value={attributes.overlayTextAlign}
            onChange={(value) => {
              setAttributes({ overlayTextAlign: value });
            }}
            controls={["left", "center", "right"]}
          />
          <BlockVerticalAlignmentToolbar
					value={ attributes.overlayTextVerticalAlign }
					onChange={ ( nextAlign ) => {
            if ( 'top' === nextAlign){
						  setAttributes( { overlayTextVerticalAlign: 'flex-start' } );
            }
            if ( 'center' === nextAlign){
						  setAttributes( { overlayTextVerticalAlign: 'center' } );
            } 
            if ( 'bottom' === nextAlign){
						  setAttributes( { overlayTextVerticalAlign: 'flex-end' } );
            }
					} }
				/>
        </BlockControls>

        <SectionTag
          className={classnames(
            `block-id-${attributes.block_id}`,
            this.props.className,
            "responsive-block-editor-addons-block-portfolio"
          )}
        >
          {attributes.overlayTextFontFamily && loadGoogleFont(attributes.overlayTextFontFamily)}
		  {attributes.displaySectionTitle && attributes.sectionTitle && (
            <SectionTitleTag className="responsive-block-editor-addons-portfolio-section-title">
              {attributes.sectionTitle}
            </SectionTitleTag>
          )}

          <div
            className={classnames({
              "is-grid": "grid" === attributes.postLayout,
              "is-list": "list" === attributes.postLayout,
              [`columns-${attributes.columns}`]:
                "grid" === attributes.postLayout,
              "responsive-block-editor-addons-portfolio-items":
                "responsive-block-editor-addons-portfolio-items",
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
              
                  <PortfolioImage
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
                    postTitleTag={PostTag}
                    postTitle = {post.title.rendered.trim()}
                    showTitle = {attributes.displayPostTitle}
                  />
                
                    
              </article>
            ))}
          </div>
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
      excludeCurrentPost,
      taxonomyType,
      postType,
    } = props.attributes;

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
