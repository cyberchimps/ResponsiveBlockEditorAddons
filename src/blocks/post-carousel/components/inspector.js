import fontOptions from "../../../utils/googlefonts";
import InspectorTab from "../../../components/InspectorTab";
import InspectorTabs from "../../../components/InspectorTabs";
import TypographyHelperControl from "../../../settings-components/TypographySettings";
import ButtonSettingsControl from "../../../settings-components/ButtonSettings";
import ResponsiveSpacingControl from "../../../settings-components/ResponsiveSpacingSettings";
import ResponsiveNewMarginControl from "../../../settings-components/ResponsiveNewSpacingSettings/ResponsiveNewMarginControl/index";
import ResponsiveNewPaddingControl from "../../../settings-components/ResponsiveNewSpacingSettings/ResponsiveNewPaddingControl/index";
import RbeaRangeControl from "../../../utils/components/rbea-range-control";
import RbeaColorControl from "../../../utils/components/rbea-color-control";
import RbeaTabRadioControl from "../../../utils/components/rbea-tab-radio-control";
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

const { InspectorControls, ColorPalette } = wp.blockEditor;

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
    this.togglePauseOnHover = this.togglePauseOnHover.bind(this);
    this.toggleInfiniteLoop = this.toggleInfiniteLoop.bind(this);
    this.toggleAutoplay = this.toggleAutoplay.bind(this);
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

  togglePauseOnHover() {
    const { pauseOnHover } = this.props.attributes;
    const { setAttributes } = this.props;

    setAttributes({ pauseOnHover: !pauseOnHover });
  }

  toggleInfiniteLoop() {
    const { infiniteLoop } = this.props.attributes;
    const { setAttributes } = this.props;

    setAttributes({ infiniteLoop: !infiniteLoop });
  }

  toggleAutoplay() {
    const { autoplay } = this.props.attributes;
    const { setAttributes } = this.props;

    setAttributes({ autoplay: !autoplay });
  }

  render() {
    // Setup the attributes
    const { attributes, setAttributes, latestPosts, postCount } = this.props;
    const {
      displayPostExcerpt,
      displayPostDate,
      displayPostLink,
      displayPostComment,
      displayPostTaxonomy,
      excerptLength,
      columns,
      columnsTablet,
      columnsMobile,
      pauseOnHover,
      infiniteLoop,
      transitionSpeed,
      autoplay,
      autoplaySpeed,
      arrowDots,
      arrowSize,
      arrowBorderSize,
      arrowBorderRadius,
      arrowTopRadius,
      arrowRightRadius,
      arrowBottomRadius,
      arrowLeftRadius,
      arrowTopRadiusTablet,
      arrowRightRadiusTablet,
      arrowBottomRadiusTablet,
      arrowLeftRadiusTablet,
      arrowTopRadiusMobile,
      arrowRightRadiusMobile,
      arrowBottomRadiusMobile,
      arrowLeftRadiusMobile,
      arrowIsRadiusControlConnected,
      arrowIsRadiusValueUpdated,
      titleColor,
      contentColor,
      metaColor,
      dateColor,
      arrowDotsColor,
      ctaColor,
      ctaBackColor,
      ctaHoverColor,
      ctaHoverBackColor,
      ctaBorderColor,
      ctaHoverBorderColor,
      ctaBorderRadius,
      ctaBorderWidth,
      ctaBorderStyle,
      ctaHpadding,
      ctaVpadding,
      contentPadding,
      contentPaddingMobile,
      contentPaddingTablet,
      rowGap,
      columnGap,
      columnGapMobile,
      columnGapTablet,
      imageSpace,
      titleSpace,
      dateSpace,
      excerptSpace,
      ctaSpace,
      titleFontFamily,
      titleFontSize,
      titleFontSizeMobile,
      titleFontSizeTablet,
      titleFontWeight,
      titleLineHeight,
      metaFontFamily,
      metaFontSize,
      metaFontWeight,
      metaLineHeight,
      excerptFontFamily,
      excerptFontSize,
      excerptFontWeight,
      excerptLineHeight,
      ctaFontFamily,
      ctaFontSize,
      ctaFontWeight,
      ctaLineHeight,
      imageSize,
      imagePosition,
      opacity,
      readMoreText,
      equalHeight,
      buttonTarget,
      metaFontSizeMobile,
      metaFontSizeTablet,
      excerptFontSizeMobile,
      excerptFontSizeTablet,
      ctaFontSizeMobile,
      ctaFontSizeTablet,
      buttonbackgroundColor1,
      buttonbackgroundColor2,
      buttoncolorLocation1,
      buttoncolorLocation2,
      buttongradientDirection,
      buttonbackgroundType,
      ctaHpaddingTablet,
      ctaHpaddingMobile,
      ctaVpaddingTablet,
      ctaVpaddingMobile,
      buttonHbackgroundType,
      hideWidget,
      hideWidgetTablet,
      hideWidgetMobile,
      z_index,
      z_indexMobile,
      z_indexTablet,
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
      blockIsTypographyColorValueUpdated,
      excerptTypographyColor,
      titleTypographyColor,
      metaTypographyColor,
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

    const { order, orderBy } = attributes;

    const { categoriesList } = this.state;

    const columnsCountOnChange = (selectedColumns) => {
      const { postsToShow } = attributes;
      setAttributes({
        columns: selectedColumns > postsToShow ? postsToShow : selectedColumns,
      });
    };
    const columnsTabletCountOnChange = (selectedColumns) => {
      const { postsToShow } = attributes;
      setAttributes({
        columnsTablet:
          selectedColumns > postsToShow ? postsToShow : selectedColumns,
      });
    };
    const columnsMobileCountOnChange = (selectedColumns) => {
      const { postsToShow } = attributes;
      setAttributes({
        columnsMobile:
          selectedColumns > postsToShow ? postsToShow : selectedColumns,
      });
    };
    const postsCountOnChange = (selectedPosts) => {
      const { columns } = attributes;
      const changedAttributes = { postsToShow: selectedPosts };
      if (columns > selectedPosts || (selectedPosts === 1 && columns !== 1)) {
        Object.assign(changedAttributes, { columns: selectedPosts });
      }
      setAttributes(changedAttributes);
    };
    // Font Weight Options
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
    // Post type options
    const postTypeOptions = [
      { value: "post", label: __("Post", "responsive-block-editor-addons") },
      { value: "page", label: __("Page", "responsive-block-editor-addons") },
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
      { value: "h2", label: __("H2", "responsive-block-editor-addons") },
      { value: "h3", label: __("H3", "responsive-block-editor-addons") },
      { value: "h4", label: __("H4", "responsive-block-editor-addons") },
      { value: "h5", label: __("H5", "responsive-block-editor-addons") },
      { value: "h6", label: __("H6", "responsive-block-editor-addons") },
    ];

    // Check for posts
    const hasPosts = Array.isArray(latestPosts) && latestPosts.length;

    // Check the post type
    const isPost = "post" === attributes.postType;

    // Add instruction text to the select
    const abImageSizeSelect = {
      value: "selectimage",
      label: __("Select image size", "responsive-block-editor-addons"),
    };

    // Get the image size options
    const imageSizeOptions = this.imageSizeSelect();

    imageSizeOptions.unshift(abImageSizeSelect);

    const imageSizeValue = () => {
      for (let i = 0; i < imageSizeOptions.length; i++) {
        if (imageSizeOptions[i].value === attributes.imageSize) {
          return attributes.imageSize;
        }
      }
      return "full";
    };

    // backward compatibility for border radius control 

    if (!arrowIsRadiusValueUpdated) {
      this.props.setAttributes(
        {
          arrowTopRadius:          arrowBorderRadius !== undefined ? arrowBorderRadius : arrowTopRadius,
          arrowBottomRadius:       arrowBorderRadius !== undefined ? arrowBorderRadius : arrowBottomRadius,
          arrowLeftRadius:         arrowBorderRadius !== undefined ? arrowBorderRadius : arrowLeftRadius,
          arrowRightRadius:        arrowBorderRadius !== undefined ? arrowBorderRadius : arrowRightRadius,
          arrowTopRadiusTablet:    arrowBorderRadius !== undefined ? arrowBorderRadius : arrowTopRadiusTablet,
          arrowBottomRadiusTablet: arrowBorderRadius !== undefined ? arrowBorderRadius : arrowBottomRadiusTablet,
          arrowRightRadiusTablet:  arrowBorderRadius !== undefined ? arrowBorderRadius : arrowRightRadiusTablet,
          arrowLeftRadiusTablet:   arrowBorderRadius !== undefined ? arrowBorderRadius : arrowLeftRadiusTablet,
          arrowTopRadiusMobile:    arrowBorderRadius !== undefined ? arrowBorderRadius : arrowTopRadiusMobile,
          arrowBottomRadiusMobile: arrowBorderRadius !== undefined ? arrowBorderRadius : arrowBottomRadiusMobile,
          arrowLeftRadiusMobile:   arrowBorderRadius !== undefined ? arrowBorderRadius : arrowLeftRadiusMobile,
          arrowRightRadiusMobile:  arrowBorderRadius !== undefined ? arrowBorderRadius : arrowRightRadiusMobile,
        }
      )
      this.props.setAttributes({arrowIsRadiusValueUpdated: true});
    }

    // backward compatibility for typography color control
    if (!blockIsTypographyColorValueUpdated) {
      this.props.setAttributes(
        {
          excerptTypographyColor:          contentColor !== undefined ? contentColor : excerptTypographyColor,
          titleTypographyColor:         titleColor !== undefined ? titleColor : titleTypographyColor,
          metaTypographyColor:         metaColor !== undefined ? metaColor : metaTypographyColor,
        }
      )
      this.props.setAttributes({blockIsTypographyColorValueUpdated: true});
    }

    return (
      <InspectorControls>
        <InspectorTabs>
          <InspectorTab key={"content"}>
            <PanelBody
              title={__("General", "responsive-block-editor-addons")}
              initialOpen={false}
            >
              <Fragment>
                <ToggleControl
                  label={__("Equal Height", "responsive-block-editor-addons")}
                  checked={equalHeight}
                  onChange={(value) =>
                    setAttributes({ equalHeight: !equalHeight })
                  }
                />
                <ToggleControl
                  label={__("Featured Image", "responsive-block-editor-addons")}
                  checked={attributes.displayPostImage}
                  help={
                    attributes.displayPostImage
                      ? __(
                          "Showing the featured image.",
                          "responsive-block-editor-addons"
                        )
                      : __(
                          "Toggle to show the featured image.",
                          "responsive-block-editor-addons"
                        )
                  }
                  onChange={() =>
                    this.props.setAttributes({
                      displayPostImage: !attributes.displayPostImage,
                    })
                  }
                />
                <ToggleControl
                  label={__("Post Title", "responsive-block-editor-addons")}
                  checked={attributes.displayPostTitle}
                  help={
                    attributes.displayPostTitle
                      ? __(
                          "Showing the post title.",
                          "responsive-block-editor-addons"
                        )
                      : __(
                          "Toggle to show the post title.",
                          "responsive-block-editor-addons"
                        )
                  }
                  onChange={() =>
                    this.props.setAttributes({
                      displayPostTitle: !attributes.displayPostTitle,
                    })
                  }
                />
                <ToggleControl
                  label={__("Post Author", "responsive-block-editor-addons")}
                  checked={attributes.displayPostAuthor}
                  help={
                    attributes.displayPostAuthor
                      ? __(
                          "Showing the post author.",
                          "responsive-block-editor-addons"
                        )
                      : __(
                          "Toggle to show the post author.",
                          "responsive-block-editor-addons"
                        )
                  }
                  onChange={() =>
                    this.props.setAttributes({
                      displayPostAuthor: !attributes.displayPostAuthor,
                    })
                  }
                />
                <ToggleControl
                  label={__("Post date", "responsive-block-editor-addons")}
                  checked={attributes.displayPostDate}
                  help={
                    attributes.displayPostDate
                      ? __(
                          "Showing the publish date.",
                          "responsive-block-editor-addons"
                        )
                      : __(
                          "Toggle to show the publish date.",
                          "responsive-block-editor-addons"
                        )
                  }
                  onChange={() =>
                    setAttributes({ displayPostDate: !displayPostDate })
                  }
                />
                <ToggleControl
                  label={__("Post Comments", "responsive-block-editor-addons")}
                  checked={attributes.displayPostComment}
                  help={
                    attributes.displayPostComment
                      ? __(
                          "Showing the post comments.",
                          "responsive-block-editor-addons"
                        )
                      : __(
                          "Toggle to show the post comments.",
                          "responsive-block-editor-addons"
                        )
                  }
                  onChange={() =>
                    setAttributes({ displayPostComment: !displayPostComment })
                  }
                />
                <ToggleControl
                  label={__("Post Taxonomy", "responsive-block-editor-addons")}
                  checked={attributes.displayPostTaxonomy}
                  help={
                    attributes.displayPostTaxonomy
                      ? __(
                          "Showing the taxonomy.",
                          "responsive-block-editor-addons"
                        )
                      : __(
                          "Toggle to show the taxonomy.",
                          "responsive-block-editor-addons"
                        )
                  }
                  onChange={() =>
                    setAttributes({ displayPostTaxonomy: !displayPostTaxonomy })
                  }
                />
                <ToggleControl
                  label={__("Post Excerpt", "responsive-block-editor-addons")}
                  checked={attributes.displayPostExcerpt}
                  help={
                    attributes.displayPostExcerpt
                      ? __(
                          "Showing the post excerpt.",
                          "responsive-block-editor-addons"
                        )
                      : __(
                          "Toggle to show the post excerpt.",
                          "responsive-block-editor-addons"
                        )
                  }
                  onChange={() =>
                    setAttributes({ displayPostExcerpt: !displayPostExcerpt })
                  }
                />
                <ToggleControl
                  label={__("Post Link", "responsive-block-editor-addons")}
                  checked={attributes.displayPostLink}
                  help={
                    attributes.displayPostLink
                      ? __(
                          "Showing the post link.",
                          "responsive-block-editor-addons"
                        )
                      : __(
                          "Toggle to show the post link.",
                          "responsive-block-editor-addons"
                        )
                  }
                  onChange={() =>
                    setAttributes({ displayPostLink: !displayPostLink })
                  }
                />
                {attributes.displayPostExcerpt && (
                  <RbeaRangeControl
                    label={__(
                      "Excerpt Length",
                      "responsive-block-editor-addons"
                    )}
                    value={excerptLength}
                    onChange={(value) =>
                      setAttributes({ excerptLength: value })
                    }
                    min={5}
                    max={75}
                  />
                )}
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
                        <Fragment>
                          <RbeaRangeControl
                            label={__(
                              "Columns Mobile",
                              "responsive-block-editor-addons"
                            )}
                            value={columnsMobile}
                            onChange={(value) =>
                              columnsMobileCountOnChange(value)
                            }
                            min={1}
                            max={Math.min(4, postCount)}
                          />
                        </Fragment>
                      );
                    } else if ("tablet" === tab.name) {
                      tabout = (
                        <Fragment>
                          <RbeaRangeControl
                            label={__(
                              "Columns Tablet",
                              "responsive-block-editor-addons"
                            )}
                            value={columnsTablet}
                            onChange={(value) =>
                              columnsTabletCountOnChange(value)
                            }
                            min={1}
                            max={Math.min(4, postCount)}
                          />
                        </Fragment>
                      );
                    } else {
                      tabout = (
                        <Fragment>
                          <RbeaRangeControl
                            label={__(
                              "Columns",
                              "responsive-block-editor-addons"
                            )}
                            value={columns}
                            onChange={(value) => columnsCountOnChange(value)}
                            min={1}
                            max={Math.min(4, postCount)}
                          />
                        </Fragment>
                      );
                    }

                    return <div>{tabout}</div>;
                  }}
                </TabPanel>
                <QueryControls
                  {...{ order, orderBy }}
                  numberOfItems={attributes.postsToShow}
                  categoriesList={categoriesList}
                  selectedCategoryId={attributes.categories}
                  onOrderChange={(value) => setAttributes({ order: value })}
                  onOrderByChange={(value) => setAttributes({ orderBy: value })}
                  onCategoryChange={(value) =>
                    setAttributes({
                      categories: "" !== value ? value : undefined,
                    })
                  }
                  onNumberOfItemsChange={(value) =>
                    setAttributes({ postsToShow: value })
                  }
                />
              </Fragment>
            </PanelBody>
            <PanelBody
              title={__("Carousel", "responsive-block-editor-addons")}
              initialOpen={false}
            >
              <ToggleControl
                label={__("Pause On Hover", "responsive-block-editor-addons")}
                checked={pauseOnHover}
                onChange={this.togglePauseOnHover}
              />
              <ToggleControl
                label={__("Autoplay", "responsive-block-editor-addons")}
                checked={autoplay}
                onChange={this.toggleAutoplay}
              />
              {autoplay == true && (
                <RbeaRangeControl
                  label={__("Autoplay Speed (ms)", "responsive-block-editor-addons")}
                  value={autoplaySpeed}
                  onChange={(value) => setAttributes({ autoplaySpeed: value })}
                  min={100}
                  max={10000}
                />
              )}
              <ToggleControl
                label={__("Infinite Loop", "responsive-block-editor-addons")}
                checked={infiniteLoop}
                onChange={this.toggleInfiniteLoop}
              />
              <RbeaRangeControl
                label={__("Transition Speed (ms)", "responsive-block-editor-addons")}
                value={transitionSpeed}
                onChange={(value) => setAttributes({ transitionSpeed: value })}
                min={100}
                max={5000}
              />
              <div className="responsive-block-editor-addons-post-carousel-tab-select-container">
                <RbeaTabRadioControl
                  label={__("Show Arrows & Dots", "responsive-block-editor-addons")}
                  value={arrowDots}
                  onChange={(value) => setAttributes({ arrowDots: value })}
                  options={[
                    { value: "arrows", label: __("Only Arrows", "responsive-block-editor-addons") },
                    { value: "dots", label: __("Only Dots", "responsive-block-editor-addons") },
                    { value: "arrows_dots", label: __("Both Arrows & Dots", "responsive-block-editor-addons") },
                  ]}
                />
              </div>
              {"dots" != arrowDots && (
                <Fragment>
                  <RbeaRangeControl
                    label={__("Arrow Size", "responsive-block-editor-addons")}
                    value={arrowSize}
                    onChange={(value) => setAttributes({ arrowSize: value })}
                    min={0}
                    max={50}
                  />
                  <RbeaRangeControl
                    label={__("Arrow Border Size", "responsive-block-editor-addons")}
                    value={arrowBorderSize}
                    onChange={(value) =>
                      setAttributes({ arrowBorderSize: value })
                    }
                    min={0}
                    max={50}
                  />
                  <RbeaBorderRadiusControl
                    attrNameTemplate="arrow%s"
                    {...this.props}
                  />
                </Fragment>
              )}
            </PanelBody>
            <PanelBody
              title={__("Image Settings", "responsive-block-editor-addons")}
              initialOpen={false}
            >
              <RbeaTabRadioControl
                label={__("Image Size", "responsive-block-editor-addons")}
                value={imageSize}
                onChange={(value) => setAttributes({ imageSize: value })}
                options={[
                  {
                    value: "full",
                    label: __("Full", "responsive-block-editor-addons"),
                  },
                  {
                    value: "thumbnail",
                    label: __("Thumbnail", "responsive-block-editor-addons"),
                  },
                ]}
              />
              <RbeaTabRadioControl
                label={__("Image Position", "responsive-block-editor-addons")}
                value={imagePosition}
                onChange={(value) => setAttributes({ imagePosition: value })}
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
              />
              {imagePosition == "background" && (
                <RbeaRangeControl
                  label={__("Opacity", "responsive-block-editor-addons")}
                  value={opacity}
                  onChange={(value) =>
                    setAttributes({ opacity: value !== undefined ? value : 20 })
                  }
                  min={0}
                  max={100}
                  allowReset
                />
              )}
            </PanelBody>
            <PanelBody
              title={__("CTA Settings", "responsive-block-editor-addons")}
              initialOpen={false}
            >
              <TextControl
                label={__(
                  "Customize Continue Reading Text",
                  "responsive-block-editor-addons"
                )}
                type="text"
                value={readMoreText}
                onChange={(value) =>
                  this.props.setAttributes({
                    readMoreText: value,
                  })
                }
              />
              <ButtonSettingsControl
                {...this.props}
                showMarginControls={false}
                showBackColorOpacity={false}
                showGradientHover={false}
                showTextOpacity={false}
              />
            </PanelBody>
          </InspectorTab>
          <InspectorTab key={"style"}>
          <TypographyHelperControl
                title={__("Title Typography", "responsive-block-editor-addons")}
                attrNameTemplate="title%s"
                values={{
                  family: titleFontFamily,
                  size: titleFontSize,
                  sizeMobile: titleFontSizeMobile,
                  sizeTablet: titleFontSizeTablet,
                  weight: titleFontWeight,
                  height: titleLineHeight,
                  color: titleTypographyColor,
                }}
                showLetterSpacing={false}
                showTextTransform={false}
                showColorControl={true}
                setAttributes={setAttributes}
                {...this.props}
              />
              <TypographyHelperControl
                title={__("Meta Typography", "responsive-block-editor-addons")}
                attrNameTemplate="meta%s"
                values={{
                  family: metaFontFamily,
                  size: metaFontSize,
                  sizeMobile: metaFontSizeMobile,
                  sizeTablet: metaFontSizeTablet,
                  weight: metaFontWeight,
                  height: metaLineHeight,
                  color: metaTypographyColor,
                }}
                showLetterSpacing={false}
                showTextTransform={false}
                showColorControl={true}
                setAttributes={setAttributes}
                {...this.props}
              />
              <TypographyHelperControl
                title={__(
                  "Excerpt Typography",
                  "responsive-block-editor-addons"
                )}
                attrNameTemplate="excerpt%s"
                values={{
                  family: excerptFontFamily,
                  size: excerptFontSize,
                  sizeMobile: excerptFontSizeMobile,
                  sizeTablet: excerptFontSizeTablet,
                  weight: excerptFontWeight,
                  height: excerptLineHeight,
                  color: excerptTypographyColor,
                }}
                showLetterSpacing={false}
                showTextTransform={false}
                showColorControl={true}
                setAttributes={setAttributes}
                {...this.props}
              />
              <TypographyHelperControl
                title={__("CTA Typography", "responsive-block-editor-addons")}
                attrNameTemplate="cta%s"
                values={{
                  family: ctaFontFamily,
                  size: ctaFontSize,
                  sizeMobile: ctaFontSizeMobile,
                  sizeTablet: ctaFontSizeTablet,
                  weight: ctaFontWeight,
                  height: ctaLineHeight,
                }}
                showLetterSpacing={false}
                showTextTransform={false}
                setAttributes={setAttributes}
                {...this.props}
              />
            <PanelBody
              title={__("Color Settings", "responsive-block-editor-addons")}
              initialOpen={false}
            >
              <RbeaColorControl
                label = {__("Blog Post Background Color", "responsive-block-editor-addons")}
                colorValue={attributes.bgColor}
                onChange={(colorValue) => this.props.setAttributes({ bgColor: colorValue })}
                resetColor={() => this.props.setAttributes({ bgColorMe: "" })}
              />
              <RbeaColorControl
                label = {__("Arrow & Dots Color", "responsive-block-editor-addons")}
                colorValue={arrowDotsColor}
                onChange={(colorValue) => this.props.setAttributes({ arrowDotsColor: colorValue })}
                resetColor={() => this.props.setAttributes({ arrowDotsColor: "" })}
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
                title={"Content Padding"}
                attrNameTemplate="contentPadding%s"
                values={{
                  desktop: contentPadding,
                  tablet: contentPaddingTablet,
                  mobile: contentPaddingMobile,
                }}
                setAttributes={setAttributes}
                {...this.props}
              />
              <RbeaRangeControl
                label={__("Gap Between Content & Dots", "responsive-block-editor-addons")}
                value={rowGap}
                onChange={(value) =>
                  setAttributes({ rowGap: value !== undefined ? value : 20 })
                }
                min={0}
                max={50}
                allowReset
              />
              <ResponsiveSpacingControl
                title={"Column Gap"}
                attrNameTemplate="columnGap%s"
                values={{
                  desktop: columnGap,
                  tablet: columnGapTablet,
                  mobile: columnGapMobile,
                }}
                setAttributes={setAttributes}
                {...this.props}
              />
              <RbeaRangeControl
                label={__("Title Top Margin", "responsive-block-editor-addons")}
                value={imageSpace}
                onChange={(value) =>
                  setAttributes({
                    imageSpace: value !== undefined ? value : "",
                  })
                }
                min={0}
                max={50}
                allowReset
              />
              <RbeaRangeControl
                label={__("Title Bottom Margin", "responsive-block-editor-addons")}
                value={titleSpace}
                onChange={(value) =>
                  setAttributes({
                    titleSpace: value !== undefined ? value : "",
                  })
                }
                min={0}
                max={50}
                allowReset
              />
              <RbeaRangeControl
                label={__("Meta Bottom Margin", "responsive-block-editor-addons")}
                value={dateSpace}
                onChange={(value) =>
                  setAttributes({ dateSpace: value !== undefined ? value : "" })
                }
                min={0}
                max={50}
                allowReset
              />
              <RbeaRangeControl
                label={__("Excerpt Bottom Margin", "responsive-block-editor-addons")}
                value={excerptSpace}
                onChange={(value) =>
                  setAttributes({
                    excerptSpace: value !== undefined ? value : "",
                  })
                }
                min={0}
                max={50}
                allowReset
              />
              <RbeaRangeControl
                label={__("CTA Bottom Margin", "responsive-block-editor-addons")}
                value={ctaSpace}
                onChange={(value) =>
                  setAttributes({ ctaSpace: value !== undefined ? value : "" })
                }
                min={0}
                max={50}
                allowReset
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
