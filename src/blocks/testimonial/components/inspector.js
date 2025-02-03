/**
 * Inspector Controls
 */

// Setup the block
import times from "lodash/times";
import BoxShadowControl from "../../../utils/components/box-shadow";
import fontOptions from "../../../utils/googlefonts";
import { loadGoogleFont } from "../../../utils/font";
import BoxShadowControlHelper from "../../../utils/components/box-shadow-helper";
import InspectorTab from "../../../components/InspectorTab";
import InspectorTabs from "../../../components/InspectorTabs";
import ImageSettingsControl from "../../../settings-components/ImageSettings";
import GradientBackgroundControl from "../../../settings-components/BlockBackgroundSettings/GradientBackgroundSettings";
import BlockBorderHelperControl from "../../../settings-components/BlockBorderSettings";
import TypographyHelperControl from "../../../settings-components/TypographySettings";
import ResponsiveSpacingControl from "../../../settings-components/ResponsiveSpacingSettings";
import ResponsiveNewPaddingControl from "../../../settings-components/ResponsiveNewSpacingSettings/ResponsiveNewPaddingControl/index";
import ResponsiveNewMarginControl from "../../../settings-components/ResponsiveNewSpacingSettings/ResponsiveNewMarginControl/index";
import RbeaRangeControl from "../../../utils/components/rbea-range-control";
import RbeaTabRadioControl from "../../../utils/components/rbea-tab-radio-control";
import RbeaMediaUploadControl from "../../../utils/components/rbea-media-upload-control";
import RbeaColorControl from "../../../utils/components/rbea-color-control";
import RbeaBlockBorderHelperControl from "../../../settings-components/RbeaBlockBorderSettings";
import RbeaBackgroundTypeControl from "../../../utils/components/rbea-background-type-control";
import RbeaAngleRangeControl from "../../../utils/components/rbea-angle-range-control";
import { RadioControl} from "@wordpress/components";
import ResponsiveContentPaddingControl from "../../../settings-components/ResponsiveNewSpacingSettings/ResponsiveContentPaddingControl";

const { __ } = wp.i18n;
const { Component, Fragment } = wp.element;

// Import block components
const {
  InspectorControls,
  PanelColorSettings,
  MediaUpload,
  ColorPalette,
  AlignmentToolbar,
} = wp.blockEditor;

// Import Inspector components
const {
  PanelBody,
  RangeControl,
  SelectControl,
  ToggleControl,
  Button,
  BaseControl,
  TabPanel,
  Dashicon,
} = wp.components;

/**
 * Create an Inspector Controls wrapper Component
 */
export default class Inspector extends Component {
  constructor(props) {
    super(...arguments);
    this.onRemoveImage = this.onRemoveImage.bind(this);
    this.onSelectImage = this.onSelectImage.bind(this);
    this.onSelectImage = this.onSelectImage.bind(this);
    this.onSelectVideo = this.onSelectVideo.bind(this);
  }

  /*
   * Event to set Image as null while removing.
   */
  onRemoveImage() {
    const { setAttributes } = this.props;

    setAttributes({ backgroundImage: null });
  }

  /*
   * Event to set Image as while adding.
   */
  onSelectImage(media) {
    const { setAttributes } = this.props;
    const { backgroundImage } = this.props.attributes;

    if (!media || !media.url) {
      setAttributes({ backgroundImage: null });
      return;
    }

    if (!media.type || "image" != media.type) {
      return;
    }

    setAttributes({ backgroundImage: media.url });
  }

  /*
   * Event to set Video as null while removing.
   */
  onRemoveVideo() {
    const { setAttributes } = this.props;

    setAttributes({ backgroundVideo: null });
  }

  /*
   * Event to set Video while adding.
   */
  onSelectVideo(media) {
    const { setAttributes } = this.props;

    if (!media || !media.url) {
      setAttributes({ backgroundVideo: null });
      return;
    }
    if (!media.type || "video" != media.type) {
      return;
    }
    setAttributes({ backgroundVideo: media });
  }

  render() {
    const fontWeightOptions = [
      {
        value: "",
        label: __("Default", "responsive-block-editor-addons"),
      },
      {
        value: 100,
        label: __("100", "responsive-block-editor-addons"),
      },
      {
        value: 200,
        label: __("200", "responsive-block-editor-addons"),
      },
      {
        value: 300,
        label: __("300", "responsive-block-editor-addons"),
      },
      {
        value: 400,
        label: __("400", "responsive-block-editor-addons"),
      },
      {
        value: 500,
        label: __("500", "responsive-block-editor-addons"),
      },
      {
        value: 600,
        label: __("600", "responsive-block-editor-addons"),
      },
      {
        value: 700,
        label: __("700", "responsive-block-editor-addons"),
      },
      {
        value: 800,
        label: __("800", "responsive-block-editor-addons"),
      },
      {
        value: 900,
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

    // Cite Alignment Options
    const citeAlignOptions = [
      {
        value: "left-aligned",
        label: __("Left", "responsive-block-editor-addons"),
      },
      {
        value: "center-aligned",
        label: __("Center", "responsive-block-editor-addons"),
      },
      {
        value: "right-aligned",
        label: __("Right", "responsive-block-editor-addons"),
      },
    ];
    const gutterOptions = [
      {
        value: "no",
        label: __("None", "responsive-block-editor-addons"),
        shortName: __("None", "responsive-block-editor-addons"),
      },
      {
        value: "small",
        /* translators: abbreviation for small size */
        label: __("S", "responsive-block-editor-addons"),
        tooltip: __("Small", "responsive-block-editor-addons"),
      },
      {
        value: "medium",
        /* translators: abbreviation for medium size */
        label: __("M", "responsive-block-editor-addons"),
        tooltip: __("Medium", "responsive-block-editor-addons"),
      },
      {
        value: "large",
        /* translators: abbreviation for large size */
        label: __("L", "responsive-block-editor-addons"),
        tooltip: __("Large", "responsive-block-editor-addons"),
      },
      {
        value: "huge",
        /* translators: abbreviation for largest size */
        label: __("XL", "responsive-block-editor-addons"),
        tooltip: __("Huge", "responsive-block-editor-addons"),
      },
    ];

    const imageShapeOptions = [
      {
        value: "default",
        label: __("Default", "responsive-block-editor-addons"),
        shortName: __("Default", "responsive-block-editor-addons"),
      },
      {
        value: "circle",
        label: __("Circle", "responsive-block-editor-addons"),
        shortName: __("Circle", "responsive-block-editor-addons"),
      },
      {
        value: "square",
        label: __("Square", "responsive-block-editor-addons"),
        shortName: __("Square", "responsive-block-editor-addons"),
      },
      {
        value: "blob",
        label: __("Blob", "responsive-block-editor-addons"),
        shortName: __("Blob", "responsive-block-editor-addons"),
      },
    ];

    const imagePositionOptions = [
      { value: "top left", label: <div className = "rbea-background-image-positon-control-option">{__("Top Left", "responsive-block-editor-addons")}</div> },
      { value: "top center", label: <div className = "rbea-background-image-positon-control-option">{__("Top Center", "responsive-block-editor-addons")}</div> },
      { value: "top right", label: <div className = "rbea-background-image-positon-control-option">{__("Top Right", "responsive-block-editor-addons")}</div> },
      { value: "center left", label: <div className = "rbea-background-image-positon-control-option">{__("Center Left", "responsive-block-editor-addons")}</div> },
      { value: "center center", label: <div className = "rbea-background-image-positon-control-option">{__("Center Center", "responsive-block-editor-addons")}</div> },
      { value: "center right", label: <div className = "rbea-background-image-positon-control-option">{__("Center Right", "responsive-block-editor-addons")}</div> },
      { value: "bottom left", label: <div className = "rbea-background-image-positon-control-option">{__("Bottom Left", "responsive-block-editor-addons")}</div> },
      { value: "bottom center", label: <div className = "rbea-background-image-positon-control-option">{__("Bottom Center", "responsive-block-editor-addons")}</div> },
      { value: "bottom right", label: <div className = "rbea-background-image-positon-control-option">{__("Bottom Right", "responsive-block-editor-addons")}</div> },
    ];

    // Setup the attributes
    const {
      attributes: {
        count,
        gutter,
        testimonialBlock,
        testimonialBackgroundColor,
        testimonialTextColor,
        testimonialTitleColor,
        testimonialNameColor,
        testimonialCiteAlign,
        blockBorderRadius,
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
        blockBorderColor,
        blockBorderWidth,
        blockBorderStyle,
        padding,
        paddingTablet,
        paddingMobile,
        boxShadowColor,
        boxShadowHOffset,
        boxShadowVOffset,
        boxShadowBlur,
        boxShadowSpread,
        boxShadowPosition,
        hoverboxShadowColor,
        hoverboxShadowHOffset,
        hoverboxShadowVOffset,
        hoverboxShadowBlur,
        hoverboxShadowSpread,
        hoverboxShadowPosition,
        backgroundImage,
        backgroundPosition,
        backgroundRepeat,
        backgroundSize,
        backgroundColor2,
        gradientDirection,
        bgGradient,
        opacity,
        titleFontSize,
        titleFontFamily,
        titleLineHeight,
        titleFontWeight,
        titleTextTransform,
        nameFontSize,
        nameFontFamily,
        nameLineHeight,
        nameFontWeight,
        nameTextTransform,
        contentFontFamily,
        contentFontSize,
        contentLineHeight,
        contentFontWeight,
        contentTextTransform,
        imageShape,
        imageSize,
        imageWidth,
        contentSpacing,
        contentSpacingMobile,
        contentSpacingTablet,
        titleSpacing,
        titleSpacingMobile,
        titleSpacingTablet,
        nameSpacing,
        nameSpacingMobile,
        nameSpacingTablet,
        imageSpacing,
        imageSpacingMobile,
        imageSpacingTablet,
        colorLocation1,
        colorLocation2,
		    contentFontSizeMobile,
		    contentFontSizeTablet,
		    nameFontSizeMobile,
		    nameFontSizeTablet,
		    titleFontSizeMobile,
		    titleFontSizeTablet,
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
        blockIsMarginControlConnected,
        blockIsPaddingControlConnected,
        contentTopPadding,
        contentTopPaddingMobile,
        contentTopPaddingTablet,
        contentBottomPadding,
        contentBottomPaddingMobile,
        contentBottomPaddingTablet,
        contentLeftPadding,
        contentLeftPaddingMobile,
        contentLeftPaddingTablet,
        contentRightPadding,
        contentRightPaddingMobile,
        contentRightPaddingTablet,
        blockIsContentPaddingControlConnected,
        backgroundType,
        backgroundPositionMobile,
        backgroundPositionTablet,
        backgroundAttachment,
        overlayType,
        backgroundImageColor,
        gradientOverlayColor1,
        gradientOverlayLocation1,
        gradientOverlayColor2,
        gradientOverlayLocation2,
        gradientOverlayType,
        gradientOverlayAngle,
        gradientOverlayPosition,
        backgroundVideo,
        backgroundColor,
        backgroundColor1,
        imagePositionTab,
        imageSizeTab,
        backgroundSizeTablet,
        backgroundSizeMobile,
        contentBottomSpacing,
        contentBottomSpacingMobile,
        contentBottomSpacingTablet,
        nameBottomSpacing,
        nameBottomSpacingMobile,
        nameBottomSpacingTablet,
        titleBottomSpacing,
        titleBottomSpacingMobile,
        titleBottomSpacingTablet,
        blockIsTypographyColorValueUpdated,
        contentTypographyColor,
        titleTypographyColor,
        nameTypographyColor,
        isAlignmentValueUpdated,
        testimonialCiteAlignTablet,
        testimonialCiteAlignMobile,
    },
      setAttributes,
    } = this.props;

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

    const blockContentPaddingResetValues = {
			PaddingTop: 0,
			PaddingRight: 0,
			PaddingBottom: 0,
			PaddingLeft: 0,
			PaddingTabletTop: 0,
			PaddingTabletRight: 0,
			PaddingTabletBottom: 0,
			PaddingTabletLeft: 0,
			PaddingMobileTop: 0,
			PaddingMobileRight: 0,
			PaddingMobileBottom: 0,
			PaddingMobileLeft: 0,
		}

    // backward compatibility for border radius control

    if (!blockIsRadiusValueUpdated) {
      this.props.setAttributes(
        {
          blockTopRadius:          blockBorderRadius !== undefined ? blockBorderRadius : blockTopRadius,
          blockBottomRadius:       blockBorderRadius !== undefined ? blockBorderRadius : blockBottomRadius,
          blockLeftRadius:         blockBorderRadius !== undefined ? blockBorderRadius : blockLeftRadius,
          blockRightRadius:        blockBorderRadius !== undefined ? blockBorderRadius : blockRightRadius,
          blockTopRadiusTablet:    blockBorderRadius !== undefined ? blockBorderRadius : blockTopRadiusTablet,
          blockBottomRadiusTablet: blockBorderRadius !== undefined ? blockBorderRadius : blockBottomRadiusTablet,
          blockRightRadiusTablet:  blockBorderRadius !== undefined ? blockBorderRadius : blockRightRadiusTablet,
          blockLeftRadiusTablet:   blockBorderRadius !== undefined ? blockBorderRadius : blockLeftRadiusTablet,
          blockTopRadiusMobile:    blockBorderRadius !== undefined ? blockBorderRadius : blockTopRadiusMobile,
          blockBottomRadiusMobile: blockBorderRadius !== undefined ? blockBorderRadius : blockBottomRadiusMobile,
          blockLeftRadiusMobile:   blockBorderRadius !== undefined ? blockBorderRadius : blockLeftRadiusMobile,
          blockRightRadiusMobile:  blockBorderRadius !== undefined ? blockBorderRadius : blockRightRadiusMobile,
        }
      )
      this.props.setAttributes({blockIsRadiusValueUpdated: true});
    }


    // backward compatibility for typography color control

    if (!blockIsTypographyColorValueUpdated) {
      this.props.setAttributes(
        {
          contentTypographyColor:          testimonialTextColor !== undefined ? testimonialTextColor : contentTypographyColor,
          nameTypographyColor:       testimonialNameColor !== undefined ? testimonialNameColor : nameTypographyColor,
          titleTypographyColor:         testimonialTitleColor !== undefined ? testimonialTitleColor : titleTypographyColor,
          contentBottomSpacing : contentSpacing !== undefined ? contentSpacing : contentBottomSpacing,
          contentBottomSpacingMobile : contentSpacingMobile !== undefined ? contentSpacingMobile : contentBottomSpacingMobile,
          contentBottomSpacingTablet : contentSpacingTablet !== undefined ? contentSpacingTablet : contentBottomSpacingTablet,
          nameBottomSpacing : nameSpacing !== undefined ? nameSpacing : nameBottomSpacing,
          nameBottomSpacingMobile : nameSpacingMobile !== undefined ? nameSpacingMobile : nameBottomSpacingMobile,
          nameBottomSpacingTablet : nameSpacingTablet !== undefined ? nameSpacingTablet : nameBottomSpacingTablet,
          titleBottomSpacing : titleSpacing !== undefined ? titleSpacing : titleBottomSpacing,
          titleBottomSpacingMobile : titleSpacingMobile !== undefined ? titleSpacingMobile : titleBottomSpacingMobile,
          titleBottomSpacingTablet : titleSpacingTablet !== undefined ? titleSpacingTablet : titleBottomSpacingTablet,
        }
      )
      this.props.setAttributes({blockIsTypographyColorValueUpdated: true});
    }

    if (!isAlignmentValueUpdated) {
      this.props.setAttributes(
        {
          testimonialCiteAlign:          testimonialCiteAlign !== undefined ? testimonialCiteAlign : testimonialCiteAlign,
          testimonialCiteAlignTablet:       testimonialCiteAlign !== undefined ? testimonialCiteAlign : testimonialCiteAlignTablet,
          testimonialCiteAlignMobile:         testimonialCiteAlign !== undefined ? testimonialCiteAlign : testimonialCiteAlignMobile,
        }
      )
      this.props.setAttributes({isAlignmentValueUpdated: true});
    }

    // Background image URL
    let background_image_url = backgroundImage || '';

    return (
      <InspectorControls key="inspector">
        <InspectorTabs>
          <InspectorTab key={"content"}>
            <PanelBody
              title={__("General", "responsive-block-editor-addons")}
              initialOpen={false}
            >
              <RbeaRangeControl
                label={__(
                  "Number of Testimonials",
                  "responsive-block-editor-addons"
                )}
                value={count}
                onChange={(newCount) => {
                  let cloneTest_block = [...testimonialBlock];
                  if (cloneTest_block.length < newCount) {
                    const incAmount = Math.abs(
                      newCount - cloneTest_block.length
                    );

                    {
                      times(incAmount, (n) => {
                        cloneTest_block.push({
                          title: "Team Title " + newCount,
                          descriptions: "",
                        });
                      });
                    }
                    setAttributes({ testimonialBlock: cloneTest_block });
                  } else {
                    const incAmount = Math.abs(
                      newCount - cloneTest_block.length
                    );
                    let data_new = cloneTest_block;
                    for (var i = 0; i < incAmount; i++) {
                      data_new.pop();
                    }
                    setAttributes({ testimonialBlock: data_new });
                  }
                  setAttributes({ count: newCount });
                }}
                min={1}
                max={3}
                step={1}
              />
              {count > 1 && (
                <RbeaTabRadioControl
                  label={__("Gutter", "responsive-block-editor-addons")}
                  value={gutter}
                  options={gutterOptions}
                  onChange={(newGutter) => setAttributes({ gutter: newGutter })}
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
                        <BaseControl>
                          <p>
                            {__(
                              "Alignment Mobile",
                              "responsive-block-editor-addons"
                            )}
                          </p>
                          <div className="responsive-block-editor-addons-alignment-mobile">
                            <AlignmentToolbar
                              value={testimonialCiteAlignMobile}
                              onChange={(value) =>
                                setAttributes({
                                  testimonialCiteAlignMobile: value,
                                })
                              }
                              controls={["left", "center", "right"]}
                              isCollapsed={false}
                            />
                          </div>
                        </BaseControl>
                      </Fragment>
                    );
                  } else if ("tablet" === tab.name) {
                    tabout = (
                      <Fragment>
                        <BaseControl>
                          <p>
                            {__(
                              "Alignment Tablet",
                              "responsive-block-editor-addons"
                            )}
                          </p>
                          <div className="responsive-block-editor-addons-alignment-tablet">
                            <AlignmentToolbar
                              value={testimonialCiteAlignTablet}
                              onChange={(value) =>
                                setAttributes({
                                  testimonialCiteAlignTablet: value,
                                })
                              }
                              controls={["left", "center", "right"]}
                              isCollapsed={false}
                            />
                          </div>
                        </BaseControl>
                      </Fragment>
                    );
                  } else {
                    tabout = (
                      <Fragment>
                        <BaseControl>
                          <p>
                            {__("Alignment", "responsive-block-editor-addons")}
                          </p>
                          <div className="responsive-block-editor-addons-alignment">
                            <AlignmentToolbar
                              value={testimonialCiteAlign}
                              onChange={(value) =>
                                setAttributes({
                                  testimonialCiteAlign: value,
                                })
                              }
                              controls={["left", "center", "right"]}
                              isCollapsed={false}
                            />
                          </div>
                        </BaseControl>
                      </Fragment>
                    );
                  }

                  return <div>{tabout}</div>;
                }}
              </TabPanel>
            </PanelBody>
            <PanelBody
              title={__("Image", "responsive-block-editor-addons")}
              initialOpen={false}
            >
                  <ImageSettingsControl {...this.props} />
      </PanelBody>
          </InspectorTab>
          <InspectorTab key={"style"}>
          <PanelBody
              title={__("Background", "responsive-block-editor-addons")}
              initialOpen={false}
            >
              {<RbeaBackgroundTypeControl
                label = {"Type"}
                selectedValue={backgroundType}
                options={[
                  { label: "color", value: "color" },
                  { label: "gradient", value: "gradient" },
                  { label: "image",value: "image" },
                  { label: "video", value: "video" },
                ]}
                onChange={(value) => setAttributes({ backgroundType: value })}
              />}
              {"color" == backgroundType && (
                <Fragment>
                  <RbeaColorControl
                    label = {"Color"}
                    colorValue={backgroundColor}
                    onChange={(newColor) => setAttributes({ backgroundColor: newColor })}
                    resetColor={() => setAttributes({ backgroundColor: "" })}
                  />
                  {(backgroundColor && backgroundColor != '') && (
                    <RbeaRangeControl
                      label={__("Opacity", "responsive-block-editor-addons")}
                      value={opacity}
                      onChange={(value) =>
                        setAttributes({ opacity: value !== undefined ? value : 20 })
                      }
                      min={0}
                      max={100}
                    />
                  )}
                </Fragment>
              )}
              {"gradient" == backgroundType && (
                <Fragment>
                  <GradientBackgroundControl
                    {...this.props}
                    showHoverGradient={false}
                  />
                </Fragment>
              )}
              {"image" == backgroundType && (
                <Fragment>
                    <RbeaMediaUploadControl
                      label={__('Image', 'responsive-block-editor-addons')}
                      value={{
                          url: backgroundImage || '',
                      }}
                      onChange={(newValue) => {
                          setAttributes({
                              backgroundImage: newValue.url,
                          });
                      }}
                      mediaType={'image'}
                    />
                  {backgroundImage && (
                    <Fragment>
                      <div className = "rbea-tab-selector-label-wrapper">
                      <label className  = "rbea-background-image-positon-control-label">{__("Image Position", "responsive-block-editor-addons")}</label>
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
                          if ("mobile" === tab.name) {
                            setAttributes({ imagePositionTab: "mobile" });
                          } else if ("tablet" === tab.name) {
                            setAttributes({ imagePositionTab: "tablet" });
                          } else {
                            setAttributes({ imagePositionTab: "desktop" });
                          }
                        }}
                      </TabPanel>
                      </div>
                        <Fragment>
                          <div className = "rbea-background-image-positon-control"
                          style={{
                            backgroundImage: `url(${background_image_url})`,
                            backgroundSize: 'cover',
                            backgroundPosition:  'center',
                          }}>
                          { imagePositionTab === "desktop" && 
                              <RadioControl 
                                className = "rbea-background-image-positon-control-options"
                                selected={backgroundPosition}
                                options={imagePositionOptions}
                                onChange={(value) =>
                                  setAttributes({ backgroundPosition: value })
                                }
                              />
                          }
                          {imagePositionTab === "tablet" &&
                             <RadioControl 
                                className = "rbea-background-image-positon-control-options"
                                selected={backgroundPositionTablet}
                                options={imagePositionOptions}
                                onChange={(value) =>
                                  setAttributes({ backgroundPositionTablet: value })
                                }
                            />
                          }
                          {imagePositionTab === "mobile" && 
                            <RadioControl 
                                className = "rbea-background-image-positon-control-options"
                                selected={backgroundPositionMobile}
                                options={imagePositionOptions}
                                onChange={(value) =>
                                  setAttributes({ backgroundPositionMobile: value })
                                }
                            />
                          }
                          </div>
                        </Fragment>
                      <RbeaTabRadioControl
                        label={__("Attachment", "responsive-block-editor-addons")}
                        value={backgroundAttachment}
                        onChange={(value) =>
                          setAttributes({ backgroundAttachment: value })
                        }
                        options={[
                          { value: "scroll", label: __("Scroll", "responsive-block-editor-addons") },
                          { value: "fixed", label: __("Fixed", "responsive-block-editor-addons") },
                        ]}
                        defaultValue={"fixed"}
                      />
                     <div className = "rbea-tab-selector-label-wrapper">
                     <label>{__("Size", "responsive-block-editor-addons")}</label>
                      <TabPanel
                        className=" responsive-size-type-field-tabs  responsive-size-type-field__common-tabs  responsive-inline-margin rbea-section-size-control-tab-selector"
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
                          if ("mobile" === tab.name) {
                            setAttributes({ imageSizeTab: "mobile" });
                          } else if ("tablet" === tab.name) {
                            setAttributes({ imageSizeTab: "tablet" });
                          } else {
                            setAttributes({ imageSizeTab: "desktop" });
                          }
                        }}
                      </TabPanel>
                      </div>
                      {imageSizeTab === "desktop" && (
                        <>
                        <RbeaTabRadioControl
                          label={__("", "responsive-block-editor-addons")}
                          value={backgroundSize}
                          onChange={(value) =>
                            setAttributes({ backgroundSize: value })
                          }
                          options={[
                            { value: "auto", label: __("Auto", "responsive-block-editor-addons") },
                            { value: "cover", label: __("Cover", "responsive-block-editor-addons") },
                            { value: "contain", label: __("Contain", "responsive-block-editor-addons") },
                          ]}
                          defaultValue={"cover"}
                        />
                      </>
                      )}
                      {imageSizeTab === "tablet" && (
                        <RbeaTabRadioControl
                        label={__("", "responsive-block-editor-addons")}
                        value={backgroundSizeTablet}
                        onChange={(value) =>
                          setAttributes({ backgroundSizeTablet: value })
                        }
                        options={[
                          { value: "auto", label: __("Auto", "responsive-block-editor-addons") },
                          { value: "cover", label: __("Cover", "responsive-block-editor-addons") },
                          { value: "contain", label: __("Contain", "responsive-block-editor-addons") },
                        ]}
                        defaultValue={"cover"}
                        />
                      )}
                      {imageSizeTab === "mobile" && (
                        <RbeaTabRadioControl
                          label={__("", "responsive-block-editor-addons")}
                          value={backgroundSizeMobile}
                          onChange={(value) =>
                            setAttributes({ backgroundSizeMobile: value })
                          }
                          options={[
                            { value: "auto", label: __("Auto", "responsive-block-editor-addons") },
                            { value: "cover", label: __("Cover", "responsive-block-editor-addons") },
                            { value: "contain", label: __("Contain", "responsive-block-editor-addons") },
                          ]}
                          defaultValue={"cover"}
                        />
                      )}
                      <div className = "rbea-repeat-selector-wrapper">
                      <RbeaTabRadioControl
                        label={__("Repeat", "responsive-block-editor-addons")}
                        value={backgroundRepeat}
                        onChange={(value) =>
                          setAttributes({ backgroundRepeat: value })
                        }
                        options={[
                          { value: "no-repeat", label: __("No Repeat", "responsive-block-editor-addons") },
                          { value: "repeat", label: __("Repeat", "responsive-block-editor-addons") },
                          { value: "repeat-x", label: __("Repeat-x", "responsive-block-editor-addons") },
                          { value: "repeat-y", label: __("Repeat-y", "responsive-block-editor-addons") },
                        ]}
                        defaultValue={"no-repeat"}
                      /></div>
                      <RbeaBackgroundTypeControl
                        label={__("Overlay Type", "responsive-block-editor-addons")}
                        value={overlayType}
                        onChange={(value) =>
                          setAttributes({ overlayType: value })
                        }
                        options={[
                          { label: "color", value: "color" },
                          { label: "gradient", value: "gradient" },
                        ]}
                      />
                      {overlayType == "color" && (
                        <Fragment>
                          <RbeaColorControl
                            label = {__("Overlay Color", "responsive-block-editor-addons")}
                            colorValue={backgroundImageColor}
                            onChange={(colorValue) =>
                              setAttributes({
                                backgroundImageColor: colorValue,
                              })
                            }
                            resetColor={() => setAttributes({ backgroundImageColor: "" })}
                          />
                        </Fragment>
                      )}

                      {"gradient" == overlayType && (
                        <Fragment>
                          <RbeaColorControl
                            label = {"Color 1"}
                            colorValue={gradientOverlayColor1}
                            onChange={(colorValue) =>
                              setAttributes({
                                gradientOverlayColor1: colorValue,
                              })
                            }
                            resetColor={() => setAttributes({ gradientOverlayColor1: "" })}
                          />
                          <RbeaColorControl
                            label = {"Color 2"}
                            colorValue={gradientOverlayColor2}
                            onChange={(colorValue) =>
                              setAttributes({
                                gradientOverlayColor2: colorValue,
                              })
                            }
                            resetColor={() => setAttributes({ gradientOverlayColor2: "" })}
                          />
                          <RbeaTabRadioControl
                            label={__("Type", "responsive-block-editor-addons")}
                            value={gradientOverlayType}
                            onChange={(value) =>
                              setAttributes({ gradientOverlayType: value })
                            }
                            options={[
                              { value: "linear", label: __("Linear", "responsive-block-editor-addons") },
                              { value: "radial", label: __("Radial", "responsive-block-editor-addons") },
                            ]}
                            defaultValue={"linear"}
                          />
                          <RbeaRangeControl
                            label={__("Color Location 1", "responsive-block-editor-addons")}
                            value={gradientOverlayLocation1}
                            onChange={(value) =>
                              setAttributes({ gradientOverlayLocation1: value })
                            }
                            min={0}
                            max={100}
                          />
                          <RbeaRangeControl
                            label={__("Color Location 2", "responsive-block-editor-addons")}
                            value={gradientOverlayLocation2}
                            onChange={(value) =>
                              setAttributes({ gradientOverlayLocation2: value })
                            }
                            min={0}
                            max={100}
                          />
                          {"linear" == gradientOverlayType && (
                            <RbeaAngleRangeControl
                              label={__("Angle", "responsive-block-editor-addons")}
                              value={gradientOverlayAngle}
                              onChange={(value) =>
                                setAttributes({ gradientOverlayAngle: value })
                              }
                              min={0}
                              max={360}
                            />
                          )}
                          {"radial" == gradientOverlayType && (
                            <SelectControl
                              label={__("Type", "responsive-block-editor-addons")}
                              value={gradientOverlayPosition}
                              onChange={(value) =>
                                setAttributes({
                                  gradientOverlayPosition: value,
                                })
                              }
                              options={[
                                {
                                  value: "center center",
                                  label: __("Center Center", "responsive-block-editor-addons"),
                                },
                                {
                                  value: "center left",
                                  label: __("Center Left", "responsive-block-editor-addons"),
                                },
                                {
                                  value: "center right",
                                  label: __("Center Right", "responsive-block-editor-addons"),
                                },
                                {
                                  value: "top center",
                                  label: __("Top Center", "responsive-block-editor-addons"),
                                },
                                { value: "top left", label: __("Top Left", "responsive-block-editor-addons") },
                                { value: "top right", label: __("Top Right", "responsive-block-editor-addons") },
                                {
                                  value: "bottom center",
                                  label: __("Bottom Center", "responsive-block-editor-addons"),
                                },
                                {
                                  value: "bottom left",
                                  label: __("Bottom Left", "responsive-block-editor-addons"),
                                },
                                {
                                  value: "bottom right",
                                  label: __("Bottom Right", "responsive-block-editor-addons"),
                                },
                              ]}
                            />
                          )}
                        </Fragment>
                      )}
                    </Fragment>
                  )}
                  {backgroundImage && (
                    <RbeaRangeControl
                    label={__("Opacity", "responsive-block-editor-addons")}
                    value={opacity}
                    onChange={(value) =>
                      setAttributes({ opacity: value !== undefined ? value : 20 })
                    }
                    min={0}
                    max={100}
                  />
                  )}
                </Fragment>
              )}
              {"video" == backgroundType && (
                <Fragment>
                    <RbeaMediaUploadControl
                      label={__('Video', 'responsive-block-editor-addons')}
                      value={{
                          url: backgroundVideo? backgroundVideo.url : '',
                      }}
                      onChange={(newValue) => { 
                          setAttributes({
                              backgroundVideo: newValue,
                          });
                      }}
                      mediaType={'video'}
                    />
                    {(backgroundVideo && backgroundVideo.url) && (
                    <RbeaRangeControl
                    label={__("Opacity", "responsive-block-editor-addons")}
                    value={opacity}
                    onChange={(value) =>
                      setAttributes({ opacity: value !== undefined ? value : 20 })
                    }
                    min={0}
                    max={100}
                  />
                  )}
                </Fragment>
              )}
            </PanelBody>
				      <TypographyHelperControl
				      	title={__("Content Typography", "responsive-block-editor-addons")}
				      	attrNameTemplate="content%s"
				      	values={{
				      	  family: contentFontFamily,
				      	  size: contentFontSize,
				      	  sizeMobile: contentFontSizeMobile,
				      	  sizeTablet: contentFontSizeTablet,
                  bottomSpacing: contentBottomSpacing,
                  bottomSpacingMobile: contentBottomSpacingMobile,
                  bottomSpacingTablet: contentBottomSpacingTablet,
				      	  weight: contentFontWeight,
				      	  height: contentLineHeight,
				      	  transform: contentTextTransform,
                  color: contentTypographyColor,
                  label: __("Text Color", "responsive-block-editor-addons"),
				      	}}
                resetColor={() => setAttributes({ contentTypographyColor: "" })}
				      	showLetterSpacing={false}
				      	showTextTransform={true}
                showTextBottomSpacing={true}
                showColorControl={true}
				      	setAttributes={setAttributes}
				      	{...this.props}
				      />
				      <TypographyHelperControl
				      	title={__("Name Typography", "responsive-block-editor-addons")}
				      	attrNameTemplate="name%s"
				      	values={{
				      	  family: nameFontFamily,
				      	  size: nameFontSize,
				      	  sizeMobile: nameFontSizeMobile,
				      	  sizeTablet: nameFontSizeTablet,
                  bottomSpacing: nameBottomSpacing,
                  bottomSpacingMobile: nameBottomSpacingMobile,
                  bottomSpacingTablet: nameBottomSpacingTablet,
				      	  weight: nameFontWeight,
				      	  height: nameLineHeight,
				      	  transform: nameTextTransform,
                  label: __("Name Color", "responsive-block-editor-addons"),
                  color: nameTypographyColor,
				      	}}
				      	  showLetterSpacing={false}
				      	  showTextTransform={true}
                  showTextBottomSpacing={true}
                  showColorControl={true}
				      	  setAttributes={setAttributes}
				      	{...this.props}
				      />
				      <TypographyHelperControl
				      	title={__("Title Typography", "responsive-block-editor-addons")}
				      	attrNameTemplate="title%s"
				      	values={{
				      	  family: titleFontFamily,
				      	  size: titleFontSize,
				      	  sizeMobile: titleFontSizeMobile,
				      	  sizeTablet: titleFontSizeTablet,
                  bottomSpacing: titleBottomSpacing,
                  bottomSpacingMobile: titleBottomSpacingMobile,
                  bottomSpacingTablet: titleBottomSpacingTablet,
				      	  weight: titleFontWeight,
				      	  height: titleLineHeight,
				      	  transform: titleTextTransform,
                  label: __("Title/Designation Color", "responsive-block-editor-addons"),
                  color: titleTypographyColor,
				      	}}
				      	  showLetterSpacing={false}
				      	  showTextTransform={true}
                  showTextBottomSpacing={true}
                  showColorControl={true}
				      	  setAttributes={setAttributes}
				      	{...this.props}
				      />
            <PanelBody
              title={__("Border", "responsive-block-editor-addons")}
              initialOpen={false}
            >
                <RbeaBlockBorderHelperControl
                    attrNameTemplate="block%s"
                    values={{
                        radius: blockBorderRadius,
                        style: blockBorderStyle,
                        width: blockBorderWidth,
                        color: blockBorderColor,
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
                boxShadowColor={{ value: boxShadowColor, label: __("Color", "responsive-block-editor-addons") }}
                boxShadowHOffset={{
                  value: boxShadowHOffset,
                  label: __("Horizontal", "responsive-block-editor-addons"),
                }}
                boxShadowVOffset={{
                  value: boxShadowVOffset,
                  label: __("Vertical", "responsive-block-editor-addons"),
                }}
                boxShadowBlur={{ value: boxShadowBlur, label: __("Blur", "responsive-block-editor-addons") }}
                boxShadowSpread={{
                  value: boxShadowSpread,
                  label: __("Spread", "responsive-block-editor-addons"),
                }}
                boxShadowPosition={{
                  value: boxShadowPosition,
                  label: __("Position", "responsive-block-editor-addons"),
                }}
              />
            </PanelBody>
            <PanelBody
              title={__("Spacing", "responsive-block-editor-addons")}
              initialOpen={false}
            >
              <ResponsiveContentPaddingControl
                attrNameTemplate="content%s"
                resetValues={blockContentPaddingResetValues}
                {...this.props}
              />
              <hr />
              <div className="rbea-spacing-secondary-container">
                <h3 className="rbea-spacing-secondary-container-title">Container</h3>
                <ResponsiveNewMarginControl
                  attrNameTemplate="block%s"
                  resetValues={blockMarginResetValues}
                  {...this.props}
                />
                <ResponsiveNewPaddingControl
                  attrNameTemplate="block%s"
                  resetValues={blockPaddingResetValues}
                  {...this.props}
                />
              </div>
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
