import fontOptions from "../../../utils/googlefonts";
import BoxShadowControl from "../../../utils/components/box-shadow";
import BoxShadowControlHelper from "../../../utils/components/box-shadow-helper";
import InspectorTab from "../../../components/InspectorTab";
import InspectorTabs from "../../../components/InspectorTabs";
import ResponsiveSpacingControl from "../../../settings-components/ResponsiveSpacingSettings";
import BlockBorderHelperControl from "../../../settings-components/BlockBorderSettings";
import TypographyHelperControl from "../../../settings-components/TypographySettings";
import ResponsiveNewMarginControl from "../../../settings-components/ResponsiveNewSpacingSettings/ResponsiveNewMarginControl/index";
import ResponsiveNewPaddingControl from "../../../settings-components/ResponsiveNewSpacingSettings/ResponsiveNewPaddingControl/index";
import RbeaRangeControl from "../../../utils/components/rbea-range-control";
import RbeaColorControl from "../../../utils/components/rbea-color-control";
import RbeaTabRadioControl from "../../../utils/components/rbea-tab-radio-control";
import RbeaBlockBorderHelperControl from "../../../settings-components/RbeaBlockBorderSettings";
import RbeaBorderRadiusControl from "../../../settings-components/RbeaBorderRadiusControl";

/**
 * Inspector Controls
 */

// Setup the block
const { __ } = wp.i18n;
const { Component, Fragment } = wp.element;

import compact from "lodash/compact";
import map from "lodash/map";
import { loadGoogleFont } from "../../../utils/font";

// Import block components
const { InspectorControls, ColorPalette, AlignmentToolbar } = wp.blockEditor;

// Import Inspector components
const {
  PanelBody,
  QueryControls,
  RangeControl,
  SelectControl,
  TextControl,
  ToggleControl,
  TabPanel,
  Dashicon,
  BaseControl
} = wp.components;

const { addQueryArgs } = wp.url;

const { apiFetch } = wp;

const MAX_POSTS_COLUMNS = 4;

/**
 * Create an Inspector Controls wrapper Component
 */
export default class Inspector extends Component {
  constructor() {
    super(...arguments);
    this.state = { categoriesList: [] };
    this.onSelectTaxonomyType = this.onSelectTaxonomyType.bind(this);
  }
  onSelectTaxonomyType(value) {
    const { setAttributes } = this.props;
    setAttributes({ taxonomyType: value });
    setAttributes({ categories: "" });
  }

  componentDidMount() {
    this.stillMounted = true;
    this.fetchRequest = apiFetch({
      path: addQueryArgs("/wp/v2/categories", { per_page: -1 }),
    })
      .then((categoriesList) => {
        if (this.stillMounted) {
          this.setState({ categoriesList });
        }
      })
      .catch(() => {
        if (this.stillMounted) {
          this.setState({ categoriesList: [] });
        }
      });
  }

  componentWillUnmount() {
    this.stillMounted = false;
  }

  /* Get the available image sizes */
  imageSizeSelect() {
    const getSettings = wp.data.select("core/editor").getEditorSettings();

    return compact(
      map(getSettings.imageSizes, ({ name, slug }) => {
        return {
          value: slug,
          label: name,
        };
      })
    );
  }

  render() {
    // Setup the attributes
    const {
      attributes,
      setAttributes,
      latestPosts,
      taxonomyList,
      queryControls,
    } = this.props;

    const { 
      order,
      orderBy,
      hideWidget,
      hideWidgetTablet,
      hideWidgetMobile,
      z_index, z_indexMobile, z_indexTablet,
      blockTopMargin,
      blockBottomMargin,
      blockLeftMargin,
      blockRightMargin,
      blockTopMarginTablet,
      blockBottomMarginTablet,
      blockLeftMarginTablet,
      blockRightMarginTablet,
      blockTopMarginMobile,
      blockBottomMarginMobile,
      blockLeftMarginMobile,
      blockRightMarginMobile,
      blockIsMarginControlConnected,
      blockTopPadding,
      blockTopPaddingMobile,
      blockTopPaddingTablet,
      blockBottomPadding,
      blockBottomPaddingMobile,
      blockBottomPaddingTablet,
      blockLeftPadding,
      blockLeftPaddingMobile,
      blockLeftPaddingTablet,
      blockRightPadding,
      blockRightPaddingMobile,
      blockRightPaddingTablet,
      blockIsPaddingControlConnected,
      blockTopRadius,
      blockRightRadius,
      blockBottomRadius,
      blockLeftRadius,
      blockTopRadiusTablet,
      blockRightRadiusTablet,
      blockBottomRadiusTablet,
      blockLeftRadiusTablet,
      blockTopRadiusMobile,
      blockRightRadiusMobile,
      blockBottomRadiusMobile,
      blockLeftRadiusMobile,
      blockIsRadiusControlConnected,
      blockIsRadiusValueUpdated,
      imageTopRadius,
      imageRightRadius,
      imageBottomRadius,
      imageLeftRadius,
      imageTopRadiusTablet,
      imageRightRadiusTablet,
      imageBottomRadiusTablet,
      imageLeftRadiusTablet,
      imageTopRadiusMobile,
      imageRightRadiusMobile,
      imageBottomRadiusMobile,
      imageLeftRadiusMobile,
      imageIsRadiusControlConnected,
      imageIsRadiusValueUpdated,
      paginationTopRadius,
      paginationRightRadius,
      paginationBottomRadius,
      paginationLeftRadius,
      paginationTopRadiusTablet,
      paginationRightRadiusTablet,
      paginationBottomRadiusTablet,
      paginationLeftRadiusTablet,
      paginationTopRadiusMobile,
      paginationRightRadiusMobile,
      paginationBottomRadiusMobile,
      paginationLeftRadiusMobile,
      paginationIsRadiusControlConnected,
      paginationIsRadiusValueUpdated,
      excerptTypographyColor,
      metaTypographyColor,
      blockIsTypographyColorValueUpdated,
    } = attributes;

    const blockMarginResetValues = {
      marginTop: 0,
      marginRight: 0,
      marginBottom: 0,
      marginLeft: 0,
      marginTabletTop: 0,
      marginTabletRight: 0,
      marginTabletBottom: 0,
      marginTabletLeft: 0,
      marginMobileTop: 0,
      marginMobileRight: 0,
      marginMobileBottom: 0,
      marginMobileLeft: 0,
    }
    const blockPaddingResetValues = {
			paddingTop: 0,
			paddingRight: 0,
			paddingBottom: 0,
			paddingLeft: 0,
			paddingTabletTop: 0,
			paddingTabletRight: 0,
			paddingTabletBottom: 0,
			paddingTabletLeft: 0,
			paddingMobileTop: 0,
			paddingMobileRight: 0,
			paddingMobileBottom: 0,
			paddingMobileLeft: 0,
		}

    const { categoriesList } = this.state;

    const fontWeightOptions = [
      {
        value: "100",
        label: __("100", "responsive-block-editor-addons"),
      },
      {
        value: "200",
        label: __("200", "responsive-block-editor-addons"),
      },
      {
        value: "300",
        label: __("300", "responsive-block-editor-addons"),
      },
      {
        value: "400",
        label: __("400", "responsive-block-editor-addons"),
      },
      {
        value: "500",
        label: __("500", "responsive-block-editor-addons"),
      },
      {
        value: "600",
        label: __("600", "responsive-block-editor-addons"),
      },
      {
        value: "700",
        label: __("700", "responsive-block-editor-addons"),
      },
      {
        value: "800",
        label: __("800", "responsive-block-editor-addons"),
      },
      {
        value: "900",
        label: __("900", "responsive-block-editor-addons"),
      },
    ];

    const textTransformOptions = [
      {
        value: "",
        label: __("Default", "responsive-block-editor-addons"),
      },
      {
        value: "uppercase",
        label: __("Uppercase", "responsive-block-editor-addons"),
      },
      {
        value: "lowercase",
        label: __("Lowercase", "responsive-block-editor-addons"),
      },
      {
        value: "capitalize",
        label: __("Capitalize", "responsive-block-editor-addons"),
      },
    ];

    const postTaxonomyOptions = [
      {
        value: "category",
        label: __("Category", "responsive-block-editor-addons"),
      },
      { value: "tag", label: __("Tag", "responsive-block-editor-addons") },
    ];

    // Section title tags
    const sectionTags = [
      { value: "div", label: __("div", "responsive-block-editor-addons") },
      {
        value: "header",
        label: __("header", "responsive-block-editor-addons"),
      },
      {
        value: "section",
        label: __("section", "responsive-block-editor-addons"),
      },
      {
        value: "article",
        label: __("article", "responsive-block-editor-addons"),
      },
      { value: "main", label: __("main", "responsive-block-editor-addons") },
      { value: "aside", label: __("aside", "responsive-block-editor-addons") },
      {
        value: "footer",
        label: __("footer", "responsive-block-editor-addons"),
      },
    ];

    // Section title tags
    const sectionTitleTags = [
      { key: 'h2', value: 'h2', label: __('H2', 'responsive-block-editor-addons') },
      { key: 'h3', value: 'h3', label: __('H3', 'responsive-block-editor-addons') },
      { key: 'h4', value: 'h4', label: __('H4', 'responsive-block-editor-addons') },
      { key: 'h5', value: 'h5', label: __('H5', 'responsive-block-editor-addons') },
      { key: 'h6', value: 'h6', label: __('H6', 'responsive-block-editor-addons') },
    ];

    // Check for posts
    const hasPosts = Array.isArray(latestPosts) && latestPosts.length;

    // Check the post type
    const isPost = "post" === attributes.postType;

    // Get the image size options
    const imageSizeOptions = this.imageSizeSelect();

    const imageSizeValue = () => {
      for (let i = 0; i < imageSizeOptions.length; i++) {
        if (imageSizeOptions[i].value === attributes.imageSize) {
          return attributes.imageSize;
        }
      }
      return "full";
    };

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
          key:thisIndex
        });
      });
    }

    // backward compatibility for border radius control

    if (!blockIsRadiusValueUpdated) {
      this.props.setAttributes(
        {
        blockTopRadius:          attributes.blockBorderRadius !== undefined ? attributes.blockBorderRadius : blockTopRadius,
        blockBottomRadius:       attributes.blockBorderRadius !== undefined ? attributes.blockBorderRadius : blockBottomRadius,
        blockLeftRadius:         attributes.blockBorderRadius !== undefined ? attributes.blockBorderRadius : blockLeftRadius,
        blockRightRadius:        attributes.blockBorderRadius !== undefined ? attributes.blockBorderRadius : blockRightRadius,
        blockTopRadiusTablet:    attributes.blockBorderRadius !== undefined ? attributes.blockBorderRadius : blockTopRadiusTablet,
        blockBottomRadiusTablet: attributes.blockBorderRadius !== undefined ? attributes.blockBorderRadius : blockBottomRadiusTablet,
        blockRightRadiusTablet:  attributes.blockBorderRadius !== undefined ? attributes.blockBorderRadius : blockRightRadiusTablet,
        blockLeftRadiusTablet:   attributes.blockBorderRadius !== undefined ? attributes.blockBorderRadius : blockLeftRadiusTablet,
        blockTopRadiusMobile:    attributes.blockBorderRadius !== undefined ? attributes.blockBorderRadius : blockTopRadiusMobile,
        blockBottomRadiusMobile: attributes.blockBorderRadius !== undefined ? attributes.blockBorderRadius : blockBottomRadiusMobile,
        blockLeftRadiusMobile:   attributes.blockBorderRadius !== undefined ? attributes.blockBorderRadius : blockLeftRadiusMobile,
        blockRightRadiusMobile:  attributes.blockBorderRadius !== undefined ? attributes.blockBorderRadius : blockRightRadiusMobile,
        }
      )
      this.props.setAttributes({blockIsRadiusValueUpdated: true});
    }

      // backward compatibility for border radius control
    
    if (!imageIsRadiusValueUpdated) {
      this.props.setAttributes(
        {
        imageTopRadius:          attributes.imageBorderRadius !== undefined ? attributes.imageBorderRadius : imageTopRadius,
        imageBottomRadius:       attributes.imageBorderRadius !== undefined ? attributes.imageBorderRadius : imageBottomRadius,
        imageLeftRadius:         attributes.imageBorderRadius !== undefined ? attributes.imageBorderRadius : imageLeftRadius,
        imageRightRadius:        attributes.imageBorderRadius !== undefined ? attributes.imageBorderRadius : imageRightRadius,
        imageTopRadiusTablet:    attributes.imageBorderRadius !== undefined ? attributes.imageBorderRadius : imageTopRadiusTablet,
        imageBottomRadiusTablet: attributes.imageBorderRadius !== undefined ? attributes.imageBorderRadius : imageBottomRadiusTablet,
        imageRightRadiusTablet:  attributes.imageBorderRadius !== undefined ? attributes.imageBorderRadius : imageRightRadiusTablet,
        imageLeftRadiusTablet:   attributes.imageBorderRadius !== undefined ? attributes.imageBorderRadius : imageLeftRadiusTablet,
        imageTopRadiusMobile:    attributes.imageBorderRadius !== undefined ? attributes.imageBorderRadius : imageTopRadiusMobile,
        imageBottomRadiusMobile: attributes.imageBorderRadius !== undefined ? attributes.imageBorderRadius : imageBottomRadiusMobile,
        imageLeftRadiusMobile:   attributes.imageBorderRadius !== undefined ? attributes.imageBorderRadius : imageLeftRadiusMobile,
        imageRightRadiusMobile:  attributes.imageBorderRadius !== undefined ? attributes.imageBorderRadius : imageRightRadiusMobile,
        }
      )
      this.props.setAttributes({imageIsRadiusValueUpdated: true});
    }

    // backward compatibility for border radius control 

    if (!paginationIsRadiusValueUpdated) {
      this.props.setAttributes(
        {
          paginationTopRadius:          attributes.paginationBorderRadius !== undefined ? attributes.paginationBorderRadius : paginationTopRadius,
          paginationBottomRadius:       attributes.paginationBorderRadius !== undefined ? attributes.paginationBorderRadius : paginationBottomRadius,
          paginationLeftRadius:         attributes.paginationBorderRadius !== undefined ? attributes.paginationBorderRadius : paginationLeftRadius,
          paginationRightRadius:        attributes.paginationBorderRadius !== undefined ? attributes.paginationBorderRadius : paginationRightRadius,
          paginationTopRadiusTablet:    attributes.paginationBorderRadius !== undefined ? attributes.paginationBorderRadius : paginationTopRadiusTablet,
          paginationBottomRadiusTablet: attributes.paginationBorderRadius !== undefined ? attributes.paginationBorderRadius : paginationBottomRadiusTablet,
          paginationRightRadiusTablet:  attributes.paginationBorderRadius !== undefined ? attributes.paginationBorderRadius : paginationRightRadiusTablet,
          paginationLeftRadiusTablet:   attributes.paginationBorderRadius !== undefined ? attributes.paginationBorderRadius : paginationLeftRadiusTablet,
          paginationTopRadiusMobile:    attributes.paginationBorderRadius !== undefined ? attributes.paginationBorderRadius : paginationTopRadiusMobile,
          paginationBottomRadiusMobile: attributes.paginationBorderRadius !== undefined ? attributes.paginationBorderRadius : paginationBottomRadiusMobile,
          paginationLeftRadiusMobile:   attributes.paginationBorderRadius !== undefined ? attributes.paginationBorderRadius : paginationLeftRadiusMobile,
          paginationRightRadiusMobile:  attributes.paginationBorderRadius !== undefined ? attributes.paginationBorderRadius : paginationRightRadiusMobile,
        }
      )
      this.props.setAttributes({paginationIsRadiusValueUpdated: true});
    }

    // Border Color Component For Color&Hover Typography Control
		const typographyColorControl = (
      <RbeaColorControl
        label = {__("Title Color", "responsive-block-editor-addons")}
        colorValue={attributes.titleColor}
        onChange={(colorValue) => this.props.setAttributes({ titleColor: colorValue })}
        resetColor={() => this.props.setAttributes({ titleColor: "" })}
      />
		);

		const typographyColorControlHover = (
			<RbeaColorControl
        label = {__("Title Hover Color", "responsive-block-editor-addons")}
        colorValue={attributes.titleHoverColor}
        onChange={(colorValue) => this.props.setAttributes({ titleHoverColor: colorValue })}
        resetColor={() => this.props.setAttributes({ titleHoverColor: "" })}
      />
		);

    // Border Color Component For Color&Hover Typography Control
		const readmoreTypographyColorControl = (
      <RbeaColorControl
        label = {__("Read More Link Color", "responsive-block-editor-addons")}
        colorValue={attributes.readMoreLinkColor}
        onChange={(colorValue) => this.props.setAttributes({ readMoreLinkColor: colorValue })}
        resetColor={() => this.props.setAttributes({ readMoreLinkColor: "" })}
      />      
		);

		const readmoreTypographyColorControlHover = (
			<RbeaColorControl
        label = {__("Read More Hover Color", "responsive-block-editor-addons")}
        colorValue={attributes.readMoreHoverColor}
        onChange={(colorValue) => this.props.setAttributes({ readMoreHoverColor: colorValue })}
        resetColor={() => this.props.setAttributes({ readMoreHoverColor: "" })}
      />
		);

    const emptyColorControl = (
			<div className="responsive-block-editor-addons-empty-color-control"></div>
		);

    // backward compatibility for typography color control
    if (!blockIsTypographyColorValueUpdated) {
      this.props.setAttributes(
        {
          metaTypographyColor: attributes.metaColor !== undefined ? attributes.metaColor : metaTypographyColor,
          excerptTypographyColor: attributes.textColor !== undefined ? attributes.textColor : excerptTypographyColor,
        }
      )
      this.props.setAttributes({blockIsTypographyColorValueUpdated: true});
    }

    return (
      <InspectorControls>
        <InspectorTabs>
          <InspectorTab key={"content"}>
            {queryControls}
            <PanelBody
              title={__(
                "Post and Page Grid Settings",
                "responsive-block-editor-addons"
              )}
              initialOpen={false}
              className={
                isPost ? null : "responsive-block-editor-addons-hide-query"
              }
            >
              <QueryControls
                {...{ order, orderBy }}
                numberOfItems={attributes.postsToShow}
                onNumberOfItemsChange={(value) =>
                  setAttributes({ postsToShow: value })
                }
              />
              <div className = "rbea-repeat-selector-wrapper">
                <RbeaTabRadioControl
                  label={__("Order By", "responsive-block-editor-addons")}
                  value={attributes.orderBy}
                  onChange={(value) => setAttributes({ orderBy: value })}
                  options={[
                    { value: "date", label: __("Date", "responsive-block-editor-addons") },
                    { value: "title", label: __("Title", "responsive-block-editor-addons") },
                    { value: "rand", label: __("Random", "responsive-block-editor-addons") },
                    { value: "menu_order", label: __("Menu Order", "responsive-block-editor-addons") },
                  ]}
                />
              </div>
              <RbeaTabRadioControl
                label={__("Order", "responsive-block-editor-addons")}
                value={attributes.order}
                onChange={(value) => setAttributes({ order: value })}
                options={[
                  { value: "desc", label: __("Descending", "responsive-block-editor-addons") },
                  { value: "asc", label: __("Ascending", "responsive-block-editor-addons") },
                ]}
              />
              <RbeaRangeControl
                label={__(
                  "Number of items to offset",
                  "responsive-block-editor-addons"
                )}
                value={attributes.offset}
                onChange={(value) => setAttributes({ offset: value })}
                min={0}
                max={20}
              />
              {"grid" === attributes.postLayout && (
                <RbeaRangeControl
                  label={__("Columns", "responsive-block-editor-addons")}
                  value={attributes.columns}
                  onChange={(value) => setAttributes({ columns: value })}
                  min={1}
                  max={
                    !hasPosts
                      ? MAX_POSTS_COLUMNS
                      : Math.min(MAX_POSTS_COLUMNS, latestPosts.length)
                  }
                />
              )}
              <ToggleControl
                label={__("Equal Height", "responsive-block-editor-addons")}
                checked={attributes.equalHeight}
                onChange={() =>
                  this.props.setAttributes({
                    equalHeight: !attributes.equalHeight,
                  })
                }
              />
              <ToggleControl
                label={__("Post Pagination", "responsive-block-editor-addons")}
                checked={attributes.postPagination}
                onChange={() =>
                  this.props.setAttributes({
                    postPagination: !attributes.postPagination,
                    paginationMarkup: "empty",
                  })
                }
              />
              <RbeaRangeControl
                label={__("Page Limit", "responsive-block-editor-addons")}
                value={attributes.pageLimit}
                onChange={(value) =>
                  setAttributes({
                    pageLimit: value,
                    paginationMarkup: "empty",
                  })
                }
                min={0}
                max={100}
              />
            </PanelBody>
            <PanelBody
              title={__(
                "Post and Page Grid Markup",
                "responsive-block-editor-addons"
              )}
              initialOpen={false}
              className="responsive-block-editor-addons-block-post-grid-markup-settings"
            >
              <SelectControl
                label={__(
                  "Post Grid Section Tag",
                  "responsive-block-editor-addons"
                )}
                options={sectionTags}
                value={attributes.sectionTag}
                onChange={(value) =>
                  this.props.setAttributes({ sectionTag: value })
                }
                help={__(
                  "Change the post grid section tag to match your content hierarchy.",
                  "responsive-block-editor-addons"
                )}
              />
              {attributes.sectionTitle && (
                <RbeaTabRadioControl
                  label={__(
                    "Section Title Heading Tag",
                    "responsive-block-editor-addons"
                  )}
                  options={sectionTitleTags}
                  value={attributes.sectionTitleTag}
                  onChange={(value) =>
                    this.props.setAttributes({
                      sectionTitleTag: value,
                    })
                  }
                  help={__(
                    "Change the post/page section title tag to match your content hierarchy.",
                    "responsive-block-editor-addons"
                  )}
                />
              )}
              {attributes.displayPostTitle && (
                <RbeaTabRadioControl
                  label={__(
                    "Post Title Heading Tag",
                    "responsive-block-editor-addons"
                  )}
                  options={sectionTitleTags}
                  value={attributes.postTitleTag}
                  onChange={(value) =>
                    this.props.setAttributes({
                      postTitleTag: value,
                    })
                  }
                  help={__(
                    "Change the post/page title tag to match your content hierarchy.",
                    "responsive-block-editor-addons"
                  )}
                />
              )}
            </PanelBody>
            <PanelBody
              title={__(
                "Post and Page Grid Content",
                "responsive-block-editor-addons"
              )}
              initialOpen={false}
            >
              {"list" === attributes.postLayout && (
                <ToggleControl
                key="stackOnMobile"
                  label={__(
                    "Stack Image & Content on mobile",
                    "responsive-block-editor-addons"
                  )}
                  checked={attributes.stackonMobile}
                  onChange={() =>
                    this.props.setAttributes({
                      stackonMobile: !attributes.stackonMobile,
                    })
                  }
                />
              )}
              <ToggleControl
                  key="displaySectionTitle"
                label={__(
                  "Display Section Title",
                  "responsive-block-editor-addons"
                )}
                checked={attributes.displaySectionTitle}
                onChange={() =>
                  this.props.setAttributes({
                    displaySectionTitle: !attributes.displaySectionTitle,
                  })
                }
              />
              {attributes.displaySectionTitle && (
                <TextControl
                key="sectionTitle"
                  label={__("Section Title", "responsive-block-editor-addons")}
                  type="text"
                  value={attributes.sectionTitle}
                  onChange={(value) =>
                    this.props.setAttributes({
                      sectionTitle: value,
                    })
                  }
                />
              )}
              <ToggleControl
                  key="displayPostImage"
                label={__(
                  "Display Featured Image",
                  "responsive-block-editor-addons"
                )}
                checked={attributes.displayPostImage}
                onChange={() =>
                  this.props.setAttributes({
                    displayPostImage: !attributes.displayPostImage,
                  })
                }
              />
              {attributes.postLayout === 'list' && [
                <TabPanel
                key="imageHeightTabPanel"
                  className=" responsive-size-type-field-tabs  responsive-size-type-field__common-tabs  responsive-inline-margin"
                  activeClass="active-tab"
                  tabs={[
                      {
                          name: "desktop",
                          title: <Dashicon icon="desktop" />,
                      className:
                          " responsive-desktop-tab  responsive-responsive-tabs",
                  },
                  {
                      name: "tablet",
                      title: <Dashicon icon="tablet" />,
                  className:
                  " responsive-tablet-tab  responsive-responsive-tabs",
              },
                  {
                      name: "mobile",
                          title: <Dashicon icon="smartphone" />,
                      className:
                      " responsive-mobile-tab  responsive-responsive-tabs",
                  },
              ]}
              >
                  {(tab) => {
                      let tabout;

                      if ("mobile" === tab.name) {
                          tabout = (
                              <Fragment>
                              <RbeaRangeControl
                          label={__("Image Height", "responsive-block-editor-addons")}
                          min={0}
                          max={2000}
                          value={attributes.imageHeightMobile }
                          onChange={(value) => setAttributes({ imageHeightMobile: value })}
                          />
                          </Fragment>
                      );
                      } else if ("tablet" === tab.name) {
                          tabout = (
                              <Fragment>
                              <RbeaRangeControl
                          label={__("Image Height", "responsive-block-editor-addons")}
                          min={0}
                          max={2000}
                          value={attributes.imageHeightTablet }
                          onChange={(value) => setAttributes({ imageHeightTablet: value })}
                          />
                          </Fragment>
                      );
                      } else {
                          tabout = (
                              <Fragment>
                              <RbeaRangeControl
                          label={__("Image Height", "responsive-block-editor-addons")}
                          min={0}
                          max={2000}
                          value={attributes.imageHeight }
                          onChange={(value) => setAttributes({ imageHeight: value })}
                          />
                          </Fragment>
                      );
                      }

                      return <div>{tabout}</div>;
                  }}
              </TabPanel>
                  ,
                <TabPanel
                key="imageWidthTabPanel"

                  className=" responsive-size-type-field-tabs  responsive-size-type-field__common-tabs  responsive-inline-margin"
                  activeClass="active-tab"
                  tabs={[
                      {
                          name: "desktop",
                          title: <Dashicon icon="desktop" />,
                      className:
                          " responsive-desktop-tab  responsive-responsive-tabs",
                  },
                  {
                      name: "tablet",
                      title: <Dashicon icon="tablet" />,
                  className:
                  " responsive-tablet-tab  responsive-responsive-tabs",
              },
                  {
                      name: "mobile",
                          title: <Dashicon icon="smartphone" />,
                      className:
                      " responsive-mobile-tab  responsive-responsive-tabs",
                  },
              ]}
              >
                  {(tab) => {
                      let tabout;

                      if ("mobile" === tab.name) {
                          tabout = (
                              <Fragment>
                              <RbeaRangeControl
                          label={__("Image Width", "responsive-block-editor-addons")}
                          min={0}
                          max={2000}
                          value={attributes.imageWidthMobile }
                          onChange={(value) => setAttributes({ imageWidthMobile: value })}
                          />
                          </Fragment>
                      );
                      } else if ("tablet" === tab.name) {
                          tabout = (
                              <Fragment>
                              <RbeaRangeControl
                          label={__("Image Width", "responsive-block-editor-addons")}
                          min={0}
                          max={2000}
                          value={attributes.imageWidthTablet }
                          onChange={(value) => setAttributes({ imageWidthTablet: value })}
                          />
                          </Fragment>
                      );
                      } else {
                          tabout = (
                              <Fragment>
                              <RbeaRangeControl
                          label={__("Image Width", "responsive-block-editor-addons")}
                          min={0}
                          max={2000}
                          value={attributes.imageWidth }
                          onChange={(value) => setAttributes({ imageWidth: value })}
                          />
                          </Fragment>
                      );
                      }

                      return <div>{tabout}</div>;
                  }}
              </TabPanel>,
              ]}
              {attributes.displayPostImage && [
                <div className = "rbea-repeat-selector-wrapper">
                  <RbeaTabRadioControl
                  key="imageSizeControl"
                    label={__("Image Size", "responsive-block-editor-addons")}
                    value={imageSizeValue()}
                    options={imageSizeOptions}
                    onChange={(value) =>
                      this.props.setAttributes({
                        imageSize: value,
                      })
                    }
                  />
                </div>,
                <RbeaTabRadioControl
                key="imagePositionControl"  
                label={__("Image Position", "responsive-block-editor-addons")}
                  value={attributes.imagePosition}
                  options={[
                    {
                      value: "top",
                      label: __("Top", "responsive-block-editor-addons"),
                    },
                    {
                      value: "background",
                      label: __("Background", "responsive-block-editor-addons"),
                    },
                  ]}
                  onChange={(value) =>
                    this.props.setAttributes({
                      imagePosition: value,
                    })
                  }
                />,
                <RbeaTabRadioControl
                key="layoutControl"
                  label={__("Layout", "responsive-block-editor-addons")}
                  value={attributes.layout}
                  options={[
                    {
                      value: "boxed",
                      label: __("Boxed", "responsive-block-editor-addons"),
                    },
                    {
                      value: "content",
                      label: __("Content", "responsive-block-editor-addons"),
                    },
                  ]}
                  onChange={(value) =>
                    this.props.setAttributes({
                      layout: value,
                    })
                  }
                />,
                <RbeaBorderRadiusControl
                  attrNameTemplate="image%s"
                  {...this.props}
                />,
              ]}
              <ToggleControl
                  key="displayPostTitle"
                label={__("Display Title", "responsive-block-editor-addons")}
                checked={attributes.displayPostTitle}
                onChange={() =>
                  this.props.setAttributes({
                    displayPostTitle: !attributes.displayPostTitle,
                  })
                }
              />
              {isPost && (
                <ToggleControl
                key="displayPostAuthor"
                  label={__("Display Author", "responsive-block-editor-addons")}
                  checked={attributes.displayPostAuthor}
                  onChange={() =>
                    this.props.setAttributes({
                      displayPostAuthor: !attributes.displayPostAuthor,
                    })
                  }
                />
              )}
              {isPost && (
                <ToggleControl
                key="displayPostDate"
                  label={__("Display Date", "responsive-block-editor-addons")}
                  checked={attributes.displayPostDate}
                  onChange={() =>
                    this.props.setAttributes({
                      displayPostDate: !attributes.displayPostDate,
                    })
                  }
                />
              )}
              <ToggleControl
                  key="displayPostExcerpt"
                label={__("Display Excerpt", "responsive-block-editor-addons")}
                checked={attributes.displayPostExcerpt}
                onChange={() =>
                  this.props.setAttributes({
                    displayPostExcerpt: !attributes.displayPostExcerpt,
                  })
                }
              />
              {attributes.displayPostExcerpt && (
                <RbeaRangeControl
                key="excerptLengthControl"
                  label={__("Excerpt Length", "responsive-block-editor-addons")}
                  value={attributes.excerptLength}
                  onChange={(value) => setAttributes({ excerptLength: value })}
                  min={0}
                  max={55}
                />
              )}
              <ToggleControl
                  key="displayPostLink"
                label={__(
                  "Display Continue Reading Link",
                  "responsive-block-editor-addons"
                )}
                checked={attributes.displayPostLink}
                onChange={() =>
                  this.props.setAttributes({
                    displayPostLink: !attributes.displayPostLink,
                  })
                }
              />
              {attributes.displayPostLink && (
                <TextControl
                key="readMoreTextControl"
                  label={__(
                    "Customize Continue Reading Text",
                    "responsive-block-editor-addons"
                  )}
                  type="text"
                  value={attributes.readMoreText}
                  onChange={(value) =>
                    this.props.setAttributes({
                      readMoreText: value,
                    })
                  }
                />
              )}
            </PanelBody>
          </InspectorTab>
          <InspectorTab key={"style"}>
          <TypographyHelperControl
					title={__("Excerpt Typography", "responsive-block-editor-addons")}
					attrNameTemplate="excerpt%s"
					values = {{
					family: attributes.excerptFontFamily,
					size: attributes.excerptFontSize,
					sizeMobile: attributes.excerptFontSizeMobile,
					sizeTablet: attributes.excerptFontSizeTablet,
					weight: attributes.excerptFontWeight,
					height: attributes.excerptLineHeight,
					transform: attributes.excerptTextTransform,
          color: attributes.excerptTypographyColor,
					}}
					showLetterSpacing = { false }
					showTextTransform = { true }
          showColorControl={true}
					setAttributes={ setAttributes }
					{...this.props}
				/>
				<TypographyHelperControl
					title={__("Meta Typography", "responsive-block-editor-addons")}
					attrNameTemplate="meta%s"
					values = {{
					family: attributes.metaFontFamily,
					size: attributes.metaFontSize,
					sizeMobile: attributes.metaFontSizeMobile,
					sizeTablet: attributes.metaFontSizeTablet,
					weight: attributes.metaFontWeight,
					height: attributes.metaLineHeight,
					transform: attributes.metaTextTransform,
          color: attributes.metaTypographyColor,
					}}
					showLetterSpacing = { false }
					showTextTransform = { true }
          showColorControl={true}
					setAttributes={ setAttributes }
					{...this.props}
				/>
				<TypographyHelperControl
					title={__("Title Typography", "responsive-block-editor-addons")}
					attrNameTemplate="title%s"
					values = {{
					family: attributes.titleFontFamily,
					size: attributes.titleFontSize,
					sizeMobile: attributes.titleFontSizeMobile,
					sizeTablet: attributes.titleFontSizeTablet,
					weight: attributes.titleFontWeight,
					height: attributes.titleLineHeight,
					transform: attributes.titleTextTransform,
          typographyColorControl: typographyColorControl,
					typographyColorControlHover: typographyColorControlHover,
					emptyColorControl: emptyColorControl,
					}}
					showLetterSpacing = { false }
					showTextTransform = { true }
          showColorWithHoverControlTab={true}
					setAttributes={ setAttributes }
					{...this.props}
				/>
				<TypographyHelperControl
					title={__("Read More Link Typography", "responsive-block-editor-addons")}
					attrNameTemplate="continue%s"
					values = {{
					family: attributes.continueFontFamily,
					size: attributes.continueFontSize,
					sizeMobile: attributes.continueFontSizeMobile,
					sizeTablet: attributes.continueFontSizeTablet,
					weight: attributes.continueFontWeight,
					height: attributes.continueLineHeight,
					transform: attributes.continueTextTransform,
          typographyColorControl: readmoreTypographyColorControl,
					typographyColorControlHover: readmoreTypographyColorControlHover,
					emptyColorControl: emptyColorControl,
					}}
					showLetterSpacing = { false }
					showTextTransform = { true }
          showColorWithHoverControlTab={true}
					setAttributes={ setAttributes }
					{...this.props}
				/>
            <PanelBody
              title={__("Border", "responsive-block-editor-addons")}
              initialOpen={false}
            >
              <RbeaBlockBorderHelperControl
                attrNameTemplate="block%s"
                values={{
                  radius: attributes.blockBorderRadius,
                  style: attributes.blockBorderStyle,
                  width: attributes.blockBorderWidth,
                  color: attributes.blockBorderColor,
                }}
                setAttributes={setAttributes}
                {...this.props}
              />
            </PanelBody>

            <PanelBody 
              title={__("Box Shadow", "responsive-block-editor-addons")}
              initialOpen={false}
            >
            <BoxShadowControl
                setAttributes={setAttributes}
                label={__("Box Shadow", "responsive-block-editor-addons")}
                boxShadowColor={{
                  value: attributes.boxShadowColor,
                  label: __("Color", "responsive-block-editor-addons"),
                }}
                boxShadowHOffset={{
                  value: attributes.boxShadowHOffset,
                  label: __("Horizontal", "responsive-block-editor-addons"),
                }}
                boxShadowVOffset={{
                  value: attributes.boxShadowVOffset,
                  label: __("Vertical", "responsive-block-editor-addons"),
                }}
                boxShadowBlur={{
                  value: attributes.boxShadowBlur,
                  label: __("Blur", "responsive-block-editor-addons"),
                }}
                boxShadowSpread={{
                  value: attributes.boxShadowSpread,
                  label: __("Spread", "responsive-block-editor-addons"),
                }}
                boxShadowPosition={{
                  value: attributes.boxShadowPosition,
                  label: __("Position", "responsive-block-editor-addons"),
                }}
              />
              <BoxShadowControlHelper
                setAttributes={setAttributes}
                boxShadowColor={{ value: attributes.hoverboxShadowColor }}
                boxShadowHOffset={{ value: attributes.hoverboxShadowHOffset }}
                boxShadowVOffset={{ value: attributes.hoverboxShadowVOffset }}
                boxShadowBlur={{ value: attributes.hoverboxShadowBlur }}
                boxShadowSpread={{ value: attributes.hoverboxShadowSpread }}
                boxShadowPosition={{ value: attributes.hoverboxShadowPosition }}
                label={__("Hover Box Shadow")}
                attrNameTemplate="hover%s"
              />
            </PanelBody>
            <PanelBody
              title={__("Color", "responsive-block-editor-addons")}
              initialOpen={false}
            >
              <RbeaColorControl
                label = {__("Background", "responsive-block-editor-addons")}
                colorValue={attributes.bgColor}
                onChange={(colorValue) => this.props.setAttributes({ bgColor: colorValue })}
                resetColor={() => this.props.setAttributes({ bgColor: "" })}
              />
            </PanelBody>
            <PanelBody
              title={__("Pagination", "responsive-block-editor-addons")}
              initialOpen={false}
            >
              <RbeaTabRadioControl
                label={__(
                  "Pagination Layout",
                  "responsive-block-editor-addons"
                )}
                options={[
                  {
                    value: "border",
                    label: __("Border", "responsive-block-editor-addons"),
                  },
                  {
                    value: "filled",
                    label: __("Filled", "responsive-block-editor-addons"),
                  },
                ]}
                value={attributes.paginationLayout}
                onChange={(value) =>
                  this.props.setAttributes({ paginationLayout: value })
                }
              />
              <Fragment>
                <BaseControl>
                  <p>
                    {__(
                      "Pagination Alignment",
                      "responsive-block-editor-addons"
                    )}
                    </p>
                    <div className="responsive-block-editor-addons-alignment">
                    <AlignmentToolbar
                      value={attributes.paginationAlignment}
                        onChange={(value) =>
                          setAttributes({
                            paginationAlignment: value,
                          })
                        }
                        controls={["left", "center", "right"]}
                        isCollapsed={false}
                      />
                    </div>
                  </BaseControl>
                </Fragment>
              <RbeaRangeControl
                label={__("Border Size", "responsive-block-editor-addons")}
                value={attributes.paginationBorderWidth}
                onChange={(value) =>
                  setAttributes({ paginationBorderWidth: value })
                }
                min={0}
                max={150}
              />
              <RbeaColorControl
                label = {__("Color", "responsive-block-editor-addons")}
                colorValue={attributes.paginationBorderColor}
                onChange={(colorValue) => this.props.setAttributes({ paginationBorderColor: colorValue })}
                resetColor={() => this.props.setAttributes({ paginationBorderColor: "" })}
              />
              <RbeaBorderRadiusControl
                attrNameTemplate="pagination%s"
                {...this.props}
              />
              <RbeaColorControl
                label = {__("Active Color", "responsive-block-editor-addons")}
                colorValue={attributes.paginationActiveBorderColor}
                onChange={(colorValue) => this.props.setAttributes({ paginationActiveBorderColor: colorValue })}
                resetColor={() => this.props.setAttributes({ paginationActiveBorderColor: "" })}
              />
              <RbeaColorControl
                label = {__("Text Color", "responsive-block-editor-addons")}
                colorValue={attributes.paginationTextColor}
                onChange={(colorValue) => this.props.setAttributes({ paginationTextColor: colorValue })}
                resetColor={() => this.props.setAttributes({ paginationTextColor: "" })}
              />
              <RbeaColorControl
                label = {__("Active Text Color", "responsive-block-editor-addons")}
                colorValue={attributes.paginationTextActiveColor}
                onChange={(colorValue) => this.props.setAttributes({ paginationTextActiveColor: colorValue })}
                resetColor={() => this.props.setAttributes({ paginationTextActiveColor: "" })}
              />
              <RbeaRangeControl
                label={__("Spacing", "responsive-block-editor-addons")}
                value={attributes.paginationSpacing}
                onChange={(value) =>
                  setAttributes({ paginationSpacing: value })
                }
                min={0}
                max={500}
              />
              <TextControl
                label={__(
                  "Previous Button Text",
                  "responsive-block-editor-addons"
                )}
                type="text"
                value={attributes.previousButtonText}
                onChange={(value) =>
                  this.props.setAttributes({
                    previousButtonText: value,
                    paginationMarkup: "empty",
                  })
                }
              />
              <TextControl
                label={__("Next Button Text", "responsive-block-editor-addons")}
                type="text"
                value={attributes.nextButtonText}
                onChange={(value) =>
                  this.props.setAttributes({
                    nextButtonText: value,
                    paginationMarkup: "empty",
                  })
                }
              />
            </PanelBody>
            <PanelBody
              title={__("Spacing", "responsive-block-editor-addons")}
              initialOpen={false}
            >
              <ResponsiveNewPaddingControl
                attrNameTemplate="block%s"
                resetValues={blockPaddingResetValues}
                {...this.props}
              />
              <ResponsiveNewMarginControl
                attrNameTemplate="block%s"
                resetValues={blockMarginResetValues}
                {...this.props}
              />
              <ResponsiveSpacingControl
                title={"Row Gap"}
                attrNameTemplate="rowGap%s"
                values={{
                  desktop: attributes.rowGap,
                  tablet: attributes.rowGapTablet,
                  mobile: attributes.rowGapMobile,
                }}
                setAttributes={setAttributes}
                {...this.props}
              />
              <ResponsiveSpacingControl
                title={"Column Gap"}
                attrNameTemplate="columnGap%s"
                values={{
                  desktop: attributes.columnGap,
                  tablet: attributes.columnGapTablet,
                  mobile: attributes.columnGapMobile,
                }}
                setAttributes={setAttributes}
                {...this.props}
              />
              <ResponsiveSpacingControl
                title={"Content Padding"}
                attrNameTemplate="contentPadding%s"
                values={{
                  desktop: attributes.contentPadding,
                  tablet: attributes.contentPaddingTablet,
                  mobile: attributes.contentPaddingMobile,
                }}
                setAttributes={setAttributes}
                {...this.props}
              />
              <ResponsiveSpacingControl
                title={"Image Bottom Spacing"}
                attrNameTemplate="imageBottomSpacing%s"
                values={{
                  desktop: attributes.imageBottomSpacing,
                  tablet: attributes.imageBottomSpacingTablet,
                  mobile: attributes.imageBottomSpacingMobile,
                }}
                setAttributes={setAttributes}
                {...this.props}
              />
              <ResponsiveSpacingControl
                title={"Title Bottom Spacing"}
                attrNameTemplate="titleBottomSpacing%s"
                values={{
                  desktop: attributes.titleBottomSpacing,
                  tablet: attributes.titleBottomSpacingTablet,
                  mobile: attributes.titleBottomSpacingMobile,
                }}
                setAttributes={setAttributes}
                {...this.props}
              />
              <ResponsiveSpacingControl
                title={"Meta Bottom Spacing"}
                attrNameTemplate="metaBottomSpacing%s"
                values={{
                  desktop: attributes.metaBottomSpacing,
                  tablet: attributes.metaBottomSpacingTablet,
                  mobile: attributes.metaBottomSpacingMobile,
                }}
                setAttributes={setAttributes}
                {...this.props}
              />
              <ResponsiveSpacingControl
                title={"Excerpt Bottom Spacing"}
                attrNameTemplate="excerptBottomSpacing%s"
                values={{
                  desktop: attributes.excerptBottomSpacing,
                  tablet: attributes.excerptBottomSpacingTablet,
                  mobile: attributes.excerptBottomSpacingMobile,
                }}
                setAttributes={setAttributes}
                {...this.props}
              />
            </PanelBody>
          </InspectorTab>
          <InspectorTab key={"advance"}>
            <PanelBody
              title={__("Responsive Conditions", "responsive-block-editor-addons")}
              initialOpen={false}
            >
              <ToggleControl
                label={__(
                  "Hide on Desktop",
                  "responsive-block-editor-addons"
                )}
                checked={hideWidget}
                onChange={(value) =>
                  setAttributes({ hideWidget: !hideWidget })
                }
              />
              <ToggleControl
                label={__(
                  "Hide on Tablet",
                  "responsive-block-editor-addons"
                )}
                checked={hideWidgetTablet}
                onChange={(value) =>
                  setAttributes({ hideWidgetTablet: !hideWidgetTablet })
                }
              />
              <ToggleControl
                label={__(
                  "Hide on Mobile",
                  "responsive-block-editor-addons"
                )}
                checked={hideWidgetMobile}
                onChange={(value) =>
                  setAttributes({ hideWidgetMobile: !hideWidgetMobile })
                }
              />
            </PanelBody>
          
          <PanelBody
              title={__("Z Index", "responsive-block-editor-addons")}
              initialOpen={false}
            >
              <TabPanel
                  className=" responsive-size-type-field-tabs  responsive-size-type-field__common-tabs  responsive-inline-margin"
                  activeClass="active-tab"
                  tabs={[
                    {
                      name: "desktop",
                      title: <Dashicon icon="desktop" />,
                      className:
                        " responsive-desktop-tab  responsive-responsive-tabs",
                    },
                    {
                      name: "tablet",
                      title: <Dashicon icon="tablet" />,
                      className:
                        " responsive-tablet-tab  responsive-responsive-tabs",
                    },
                    {
                      name: "mobile",
                      title: <Dashicon icon="smartphone" />,
                      className:
                        " responsive-mobile-tab  responsive-responsive-tabs",
                    },
                  ]}
                >
                  {(tab) => {
                    let tabout;

                    if ("mobile" === tab.name) {
                      tabout = (
                        <RbeaRangeControl
                        label={__("z-index (Mobile)", "responsive-block-editor-addons")}
                        min={-1}
                        max={99999}
                        allowReset={true}
                        resetFallbackValue={1}
                        value={z_indexMobile}
                        onChange={(value) =>
                          setAttributes({ z_indexMobile: value !== undefined ? value : 1 })
                        }
                      />
                      );
                    } else if ("tablet" === tab.name) {
                      tabout = (
                        <RbeaRangeControl
                        label={__("z-index (Tablet)", "responsive-block-editor-addons")}
                        min={-1}
                        max={99999}
                        allowReset={true}
                        resetFallbackValue={1}
                        value={z_indexTablet}
                        onChange={(value) =>
                          setAttributes({ z_indexTablet: value !== undefined ? value : 1 })
                        }
                      />
                      );
                    } else {
                      tabout = (
                        <RbeaRangeControl
                        label={__("z-index ", "responsive-block-editor-addons")}
                        min={-1}
                        max={99999}
                        allowReset={true}
                        resetFallbackValue={1}
                        value={z_index}
                        onChange={(value) =>
                          setAttributes({ z_index: value !== undefined ? value : 1 })
                        }
                      />
                      );
                    }

                    return <div>{tabout}</div>;
                  }}
              </TabPanel>
          </PanelBody>
          </InspectorTab>
        </InspectorTabs>
      </InspectorControls>
    );
  }
}
