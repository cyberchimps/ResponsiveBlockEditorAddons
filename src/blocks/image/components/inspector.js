import BlockBorderHelperControl from "../../../settings-components/BlockBorderSettings";
import BoxShadowControlHelper from "../../../utils/components/box-shadow-helper";
import TypographyHelperControl from "../../../settings-components/TypographySettings";
import ResponsiveNewMarginControl from "../../../settings-components/ResponsiveNewSpacingSettings/ResponsiveNewMarginControl/index";
import ResponsiveNewPaddingControl from "../../../settings-components/ResponsiveNewSpacingSettings/ResponsiveNewPaddingControl/index";
import RbeaRangeControl from "../../../utils/components/rbea-range-control";
import RbeaColorControl from "../../../utils/components/rbea-color-control";
import RbeaTabRadioControl from "../../../utils/components/rbea-tab-radio-control";
import RbeaMediaUploadControl from "../../../utils/components/rbea-media-upload-control";
import RbeaBlockBorderHelperControl from "../../../settings-components/RbeaBlockBorderSettings";

const {Component, Fragment} = wp.element;
const {
  PanelBody,
  PanelRow,
  TabPanel,
  Dashicon,
  BaseControl,
  ToggleControl,
  TextControl,
  Button,
  RangeControl,
  SelectControl,
  ColorPalette,
  AlignmentMatrixControl,
} = wp.components;
const {InspectorControls, MediaUpload, AlignmentToolbar} = wp.blockEditor;
const {__} = wp.i18n;

import InspectorTab from "../../../components/InspectorTab";
import InspectorTabs from "../../../components/InspectorTabs";
import { RadioControl } from "@wordpress/components";

export default class Inspector extends Component {
  render() {
    const {attributes, setAttributes} = this.props;
    const {
      imageUrl,
      altText,
      imageAlignment,
      imageAlignmentTablet,
      imageAlignmentMobile,
      caption,
      captionimageAlignment,
      captionimageAlignmentTablet,
      captionimageAlignmentMobile,
      captionFontFamily,
      captionFontSize,
      captionFontSizeMobile,
      captionFontSizeTablet,
      captionFontWeight,
      captionLineHeight,
      captionLetterSpacing,
      captionTextTransform,
      captionColor,
      imageBorderColor,
      imageBorderRadius,
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
      imageBorderStyle,
      imageBorderWidth,
      imageboxShadowColor,
      imageboxShadowHOffset,
      imageboxShadowVOffset,
      imageboxShadowBlur,
      imageboxShadowSpread,
      imageboxshadowSeprateHover,
      imageboxShadowPosition,
      imageboxShadowHoverColor,
      imageboxShadowHoverHOffset,
      imageboxShadowHoverVOffset,
      imageboxShadowHoverBlur,
      imageboxShadowHoverSpread,
      imageboxShadowHoverPosition,
      imagetopmargin,
      imagebottommargin,
      imageleftmargin,
      imagerightmargin,
      imagetopmarginTablet,
      imagebottommarginTablet,
      imageleftmarginTablet,
      imagerightmarginTablet,
      imagetopmarginMobile,
      imagebottommarginMobile,
      imageleftmarginMobile,
      imagerightmarginMobile,
      captiontopmargin,
      captionbottommargin,
      captionleftmargin,
      captionrightmargin,
      captiontopmarginTablet,
      captionbottommarginTablet,
      captionleftmarginTablet,
      captionrightmarginTablet,
      captiontopmarginMobile,
      captionbottommarginMobile,
      captionleftmarginMobile,
      captionrightmarginMobile,
      MaskShape,
      MaskSize,
      MaskPosition,
      MaskRepeat,
      imageObjectFit,
      imageOnHoverImage,
      imageWidth,
      imageHeight,
      imageWidthTablet,
      imageHeightTablet,
      imageWidthMobile,
      imageHeightMobile,
      Layoverswitch,
      LayoverContentPosition,
      layoverimageBorderColor,
      layoverimageBorderRadius, 
      layoverimageTopRadius,
      layoverimageRightRadius,
      layoverimageBottomRadius,
      layoverimageLeftRadius,
      layoverimageTopRadiusTablet,
      layoverimageRightRadiusTablet,
      layoverimageBottomRadiusTablet,
      layoverimageLeftRadiusTablet,
      layoverimageTopRadiusMobile,
      layoverimageRightRadiusMobile,
      layoverimageBottomRadiusMobile,
      layoverimageLeftRadiusMobile,
      layoverimageIsRadiusControlConnected,
      layoverimageIsRadiusValueUpdated,
      layoverimageBorderStyle,
      layoverimageBorderWidth,
      layoverInputDistance,
      layoverBackgroundcolor,
      layoverOpacity,
      layoverHoverOpacity,
      layoverHeadingTag,
      layoverHeadingFontFamily,
      layoverHeadingFontSize,
      layoverHeadingFontSizeMobile,
      layoverHeadingFontSizeTablet,
      layoverHeadingFontWeight,
      layoverHeadingLineHeight,
      layoverHeadingLetterSpacing,
      layoverHeadingTextTransform,
      layoverHeadingColor,
      layoverHeadingtopmargin,
      layoverHeadingbottommargin,
      layoverHeadingleftmargin,
      layoverHeadingrightmargin,
      layoverHeadingtopmarginTablet,
      layoverHeadingbottommarginTablet,
      layoverHeadingleftmarginTablet,
      layoverHeadingrightmarginTablet,
      layoverHeadingtopmarginMobile,
      layoverHeadingbottommarginMobile,
      layoverHeadingleftmarginMobile,
      layoverHeadingrightmarginMobile,
      hideWidget,
      hideWidgetTablet,
      hideWidgetMobile,
      z_index,
      z_indexMobile,
      z_indexTablet,
      imageTopMargin,
      imageBottomMargin,
      imageLeftMargin,
      imageRightMargin,
      imageTopMarginTablet,
      imageBottomMarginTablet,
      imageLeftMarginTablet,
      imageRightMarginTablet,
      imageTopMarginMobile,
      imageBottomMarginMobile,
      imageLeftMarginMobile,
      imageRightMarginMobile,
      newSpacingValuesUpdated,
      imageIsMarginControlConnected,
      imageTopPadding,
      imageTopPaddingMobile,
      imageTopPaddingTablet,
      imageBottomPadding,
      imageBottomPaddingMobile,
      imageBottomPaddingTablet,
      imageLeftPadding,
      imageLeftPaddingMobile,
      imageLeftPaddingTablet,
      imageRightPadding,
      imageRightPaddingMobile,
      imageRightPaddingTablet,
      imageIsPaddingControlConnected,
      blockIsTypographyColorValueUpdated,
      layoverHeadingTypographyColor,
      captionTypographyColor,
      captionTopMargin,
      captionBottomMargin,
      captionLeftMargin,
      captionRightMargin,
      captionTopMarginTablet,
      captionBottomMarginTablet,
      captionLeftMarginTablet,
      captionRightMarginTablet,
      captionTopMarginMobile,
      captionBottomMarginMobile,
      captionLeftMarginMobile,
      captionRightMarginMobile,
      captionIsMarginControlConnected,
      imagePositionTab,
    } = attributes;

    // To populate new control values with existing padding margin control values for backward compatibility.
    if (!newSpacingValuesUpdated) {
      this.props.setAttributes(
        {
          imageTopMargin:          imagetopmargin !== undefined ? imagetopmargin : imageTopMargin,
          imageBottomMargin:       imagebottommargin !== undefined ? imagebottommargin : imageBottomMargin,
          imageLeftMargin:         imageleftmargin !== undefined ? imageleftmargin : imageLeftMargin,
          imageRightMargin:        imagerightmargin !== undefined ? imagerightmargin : imageRightMargin,
          imageTopMarginTablet:    imagetopmarginTablet !== undefined ? imagetopmarginTablet : imageTopMarginTablet,
          imageBottomMarginTablet: imagebottommarginTablet !== undefined ? imagebottommarginTablet : imageBottomMarginTablet,
          imageRightMarginTablet:  imagerightmarginTablet !== undefined ? imagerightmarginTablet : imageRightMarginTablet,
          imageLeftMarginTablet:   imageleftmarginTablet !== undefined ? imageleftmarginTablet : imageLeftMarginTablet,
          imageTopMarginMobile:    imagetopmarginMobile !== undefined ? imagetopmarginMobile : imageTopMarginMobile,
          imageBottomMarginMobile: imagebottommarginMobile !== undefined ? imagebottommarginMobile : imageBottomMarginMobile,
          imageLeftMarginMobile:   imageleftmarginMobile !== undefined ? imageleftmarginMobile : imageLeftMarginMobile,
          imageRightMarginMobile:  imagerightmarginMobile !== undefined ? imagerightmarginMobile : imageRightMarginMobile,
        }
      )
    }
    this.props.setAttributes({newSpacingValuesUpdated: true});

    // To populate new control values with existing padding margin control values for backward compatibility.
    if (!captionIsMarginControlConnected) {
      this.props.setAttributes(
        {
          captionTopMargin:          captiontopmargin !== undefined ? captiontopmargin : captionTopMargin,
          captionBottomMargin:       captionbottommargin !== undefined ? captionbottommargin : captionBottomMargin,
          captionLeftMargin:         captionleftmargin !== undefined ? captionleftmargin : captionLeftMargin,
          captionRightMargin:        captionrightmargin !== undefined ? captionrightmargin : captionRightMargin,
          captionTopMarginTablet:    captiontopmarginTablet !== undefined ? captiontopmarginTablet : captionTopMarginTablet,
          captionBottomMarginTablet: captionbottommarginTablet !== undefined ? captionbottommarginTablet : captionBottomMarginTablet,
          captionRightMarginTablet:  captionrightmarginTablet !== undefined ? captionrightmarginTablet : captionRightMarginTablet,
          captionLeftMarginTablet:   captionleftmarginTablet !== undefined ? captionleftmarginTablet : captionLeftMarginTablet,
          captionTopMarginMobile:    captiontopmarginMobile !== undefined ? captiontopmarginMobile : captionTopMarginMobile,
          captionBottomMarginMobile: captionbottommarginMobile !== undefined ? captionbottommarginMobile : captionBottomMarginMobile,
          captionLeftMarginMobile:   captionleftmarginMobile !== undefined ? captionleftmarginMobile : captionLeftMarginMobile,
          captionRightMarginMobile:  captionrightmarginMobile !== undefined ? captionrightmarginMobile : captionRightMarginMobile,
        }
      )
    }
    this.props.setAttributes({captionIsMarginControlConnected: true});

    const imageMarginResetValues = {
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
    const imagePaddingResetValues = {
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

    const captionMarginResetValues = {
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

    const handleChangeImage = () => {
      // Check if the WordPress media library is available
      if (wp && wp.media) {
        // Create a media frame
        const mediaFrame = wp.media({
          title: "Select or Upload Image",
          button: {
            text: "Use this image",
          },
          multiple: false,
        });

        // When an image is selected, run a callback
        mediaFrame.on("select", () => {
          const attachment = mediaFrame
            .state()
            .get("selection")
            .first()
            .toJSON();

          // Update the state with the selected image URL
          setAttributes({imageUrl: attachment.url, sourceType: "wordpress"});
        });

        // Open the media frame
        mediaFrame.open();
      } else {
        console.error("WordPress media library not available.");
      }
    };
    var HoverBoxShadowControls;
    HoverBoxShadowControls = (
      <Fragment>
        <RbeaColorControl
					label = {__("Color", "responsive-block-editor-addons")}
					colorValue={imageboxShadowHoverColor}
					onChange={(colorValue) =>
						setAttributes({ imageboxShadowHoverColor: colorValue })
					}
					resetColor={() => setAttributes({ imageboxShadowHoverColor: "" })}
				/>

        <h2>{__("Horizontal", "responsive-block-editor-addons")}</h2>
        <RbeaRangeControl
          value={imageboxShadowHoverHOffset}
          onChange={(value) =>
            setAttributes({
              imageboxShadowHoverHOffset: value !== undefined ? value : 0,
            })
          }
          min={-100}
          max={100}
          allowReset
        />
        <h2>{__("Vertical", "responsive-block-editor-addons")}</h2>
        <RbeaRangeControl
          value={imageboxShadowHoverVOffset}
          onChange={(value) =>
            setAttributes({
              imageboxShadowHoverVOffset: value !== undefined ? value : 0,
            })
          }
          min={-100}
          max={100}
          allowReset
        />
        <h2>{__("Blur", "responsive-block-editor-addons")}</h2>
        <RbeaRangeControl
          value={imageboxShadowHoverBlur}
          onChange={(value) =>
            setAttributes({
              imageboxShadowHoverBlur: value !== undefined ? value : 0,
            })
          }
          min={0}
          max={100}
          allowReset
        />
        <h2>{__("Spread", "responsive-block-editor-addons")}</h2>
        <RbeaRangeControl
          value={imageboxShadowHoverSpread}
          onChange={(value) =>
            setAttributes({
              imageboxShadowHoverSpread: value !== undefined ? value : 0,
            })
          }
          min={0}
          max={100}
          allowReset
        />
        <RbeaTabRadioControl
          label={__("Position", "responsive-block-editor-addons")}
          value={imageboxShadowHoverPosition}
          onChange={(value) =>
            setAttributes({imageboxShadowHoverPosition: value})
          }
          options={[
            {
              value: "inset",
              label: __("Inset", "responsive-block-editor-addons"),
            },
            {
              value: "outset",
              label: __("Outset", "responsive-block-editor-addons"),
            },
          ]}
        />
      </Fragment>
    );

    // backward compatibility for border radius control

    if (!layoverimageIsRadiusValueUpdated) {
      this.props.setAttributes(
        {
        layoverimageTopRadius:          layoverimageBorderRadius !== undefined ? layoverimageBorderRadius : layoverimageTopRadius,
        layoverimageBottomRadius:       layoverimageBorderRadius !== undefined ? layoverimageBorderRadius : layoverimageBottomRadius,
        layoverimageLeftRadius:         layoverimageBorderRadius !== undefined ? layoverimageBorderRadius : layoverimageLeftRadius,
        layoverimageRightRadius:        layoverimageBorderRadius !== undefined ? layoverimageBorderRadius : layoverimageRightRadius,
        layoverimageTopRadiusTablet:    layoverimageBorderRadius !== undefined ? layoverimageBorderRadius : layoverimageTopRadiusTablet,
        layoverimageBottomRadiusTablet: layoverimageBorderRadius !== undefined ? layoverimageBorderRadius : layoverimageBottomRadiusTablet,
        layoverimageRightRadiusTablet:  layoverimageBorderRadius !== undefined ? layoverimageBorderRadius : layoverimageRightRadiusTablet,
        layoverimageLeftRadiusTablet:   layoverimageBorderRadius !== undefined ? layoverimageBorderRadius : layoverimageLeftRadiusTablet,
        layoverimageTopRadiusMobile:    layoverimageBorderRadius !== undefined ? layoverimageBorderRadius : layoverimageTopRadiusMobile,
        layoverimageBottomRadiusMobile: layoverimageBorderRadius !== undefined ? layoverimageBorderRadius : layoverimageBottomRadiusMobile,
        layoverimageLeftRadiusMobile:   layoverimageBorderRadius !== undefined ? layoverimageBorderRadius : layoverimageLeftRadiusMobile,
        layoverimageRightRadiusMobile:  layoverimageBorderRadius !== undefined ? layoverimageBorderRadius : layoverimageRightRadiusMobile,
        }
      )
      this.props.setAttributes({layoverimageIsRadiusValueUpdated: true});
      }

      // backward compatibility for border radius control

if (!imageIsRadiusValueUpdated) {
	this.props.setAttributes(
	  {
		imageTopRadius:          imageBorderRadius !== undefined ? imageBorderRadius : imageTopRadius,
		imageBottomRadius:       imageBorderRadius !== undefined ? imageBorderRadius : imageBottomRadius,
		imageLeftRadius:         imageBorderRadius !== undefined ? imageBorderRadius : imageLeftRadius,
		imageRightRadius:        imageBorderRadius !== undefined ? imageBorderRadius : imageRightRadius,
		imageTopRadiusTablet:    imageBorderRadius !== undefined ? imageBorderRadius : imageTopRadiusTablet,
		imageBottomRadiusTablet: imageBorderRadius !== undefined ? imageBorderRadius : imageBottomRadiusTablet,
		imageRightRadiusTablet:  imageBorderRadius !== undefined ? imageBorderRadius : imageRightRadiusTablet,
		imageLeftRadiusTablet:   imageBorderRadius !== undefined ? imageBorderRadius : imageLeftRadiusTablet,
		imageTopRadiusMobile:    imageBorderRadius !== undefined ? imageBorderRadius : imageTopRadiusMobile,
		imageBottomRadiusMobile: imageBorderRadius !== undefined ? imageBorderRadius : imageBottomRadiusMobile,
		imageLeftRadiusMobile:   imageBorderRadius !== undefined ? imageBorderRadius : imageLeftRadiusMobile,
		imageRightRadiusMobile:  imageBorderRadius !== undefined ? imageBorderRadius : imageRightRadiusMobile,
	  }
	)
	this.props.setAttributes({imageIsRadiusValueUpdated: true});
  }

    // backward compatibility for typography color control
    if (!blockIsTypographyColorValueUpdated) {
      this.props.setAttributes(
        {
          layoverHeadingTypographyColor :layoverHeadingColor !== undefined ? layoverHeadingColor : layoverHeadingTypographyColor,
          captionTypographyColor :captionColor !== undefined ? captionColor : captionTypographyColor,
        }
      )
      this.props.setAttributes({blockIsTypographyColorValueUpdated: true});
    }

    const contentPositionOptions = [
      {
        value: "lefttop",
        label: <div className = "rbea-background-image-positon-control-option">{__("Top Left", "responsive-block-editor-addons")}</div>,
      },
      {
        value: "centertop",
        label: <div className = "rbea-background-image-positon-control-option">{__("Top Center", "responsive-block-editor-addons")}</div>,
      },
      {
        value: "righttop",
        label: <div className = "rbea-background-image-positon-control-option">{__("Top Right", "responsive-block-editor-addons")}</div>,
      },
      {
        value: "leftcenter",
        label: <div className = "rbea-background-image-positon-control-option">{__("Center Left", "responsive-block-editor-addons")}</div>,
      },
      {
        value: "centercenter",
        label: <div className = "rbea-background-image-positon-control-option">{__("Center Center", "responsive-block-editor-addons")}</div>,
      },
      {
        value: "rightcenter",
        label: <div className = "rbea-background-image-positon-control-option">{__("Center Right", "responsive-block-editor-addons")}</div>,
      },
      {
        value: "leftbottom",
        label: <div className = "rbea-background-image-positon-control-option">{__("Bottom Left", "responsive-block-editor-addons")}</div>,
      },
      {
        value: "centerbottom",
        label: <div className = "rbea-background-image-positon-control-option">{__("Bottom Center", "responsive-block-editor-addons")}</div>,
      },
      {
        value: "rightbottom",
        label: <div className = "rbea-background-image-positon-control-option">{__("Bottom Right", "responsive-block-editor-addons")}</div>,
      },
    ];

    // Background image URL
    let background_image_url = imageUrl || '';

    return (
      <InspectorControls key="inspector">
        <InspectorTabs>
          <InspectorTab key={"content"}>
            <PanelBody title="Image" initialOpen={true}>
              <RbeaMediaUploadControl
                label={__("Image", "responsive-block-editor-addons")}
                value={{
                    url: imageUrl,
                }}
                onChange={(newValue) => { 
                    setAttributes({
                      imageUrl: newValue.url,
                    });
                }}
                mediaType={'image'}
              />
              <TabPanel
                className=" responsive-size-type-field-tabs responsive-size-type-field__common-tabs responsive-inline-margin"
                activeClass="active-tab"
                tabs={[
                  {
                    name: "desktop",
                    title: <Dashicon icon="desktop" />,
                    className:
                      " responsive-desktop-tab responsive-responsive-tabs",
                  },
                  {
                    name: "tablet",
                    title: <Dashicon icon="tablet" />,
                    className:
                      " responsive-tablet-tab responsive-responsive-tabs",
                  },
                  {
                    name: "mobile",
                    title: <Dashicon icon="smartphone" />,
                    className:
                      " responsive-mobile-tab responsive-responsive-tabs",
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
                              value={imageAlignmentMobile}
                              onChange={(value) =>
                                setAttributes({
                                  imageAlignmentMobile: value,
                                })
                              }
                              controls={["start", "center", "end"]}
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
                              value={imageAlignmentTablet}
                              onChange={(value) =>
                                setAttributes({
                                  imageAlignmentTablet: value,
                                })
                              }
                              controls={["start", "center", "end"]}
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
                              value={imageAlignment}
                              onChange={(value) =>
                                setAttributes({
                                  imageAlignment: value,
                                })
                              }
                              controls={["start", "center", "end"]}
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
              {
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
                                "Image Dimensions Mobile",
                                "responsive-block-editor-addons"
                              )}
                            </p>
                            <RbeaRangeControl
                              label={__(
                                "Width",
                                "responsive-block-editor-addons"
                              )}
                              min={-500}
                              max={2000}
                              allowReset={true}
                              value={imageWidthMobile}
                              onChange={(value) =>
                                setAttributes({
                                  imageWidthMobile: value,
                                })
                              }
                            />
                            <RbeaRangeControl
                              label={__(
                                "Height",
                                "responsive-block-editor-addons"
                              )}
                              min={-500}
                              max={2000}
                              allowReset={true}
                              value={imageHeightMobile}
                              onChange={(value) =>
                                setAttributes({
                                  imageHeightMobile: value,
                                })
                              }
                            />
                          </BaseControl>
                        </Fragment>
                      );
                    } else if ("tablet" === tab.name) {
                      tabout = (
                        <Fragment>
                          <BaseControl>
                            <p>
                              {__(
                                "Image Dimensions Tablet",
                                "responsive-block-editor-addons"
                              )}
                            </p>
                            <RbeaRangeControl
                              label={__(
                                "Width",
                                "responsive-block-editor-addons"
                              )}
                              min={-500}
                              max={2000}
                              allowReset={true}
                              value={imageWidthTablet}
                              onChange={(value) =>
                                setAttributes({
                                  imageWidthTablet: value,
                                })
                              }
                            />
                            <RbeaRangeControl
                              label={__(
                                "Height",
                                "responsive-block-editor-addons"
                              )}
                              min={-500}
                              max={2000}
                              allowReset={true}
                              value={imageHeightTablet}
                              onChange={(value) =>
                                setAttributes({
                                  imageHeightTablet: value,
                                })
                              }
                            />
                          </BaseControl>
                        </Fragment>
                      );
                    } else {
                      tabout = (
                        <Fragment>
                          <BaseControl>
                            <p>
                              {__(
                                "Image Dimensions",
                                "responsive-block-editor-addons"
                              )}
                            </p>
                            <RbeaRangeControl
                              label={__(
                                "Width",
                                "responsive-block-editor-addons"
                              )}
                              min={-500}
                              max={2000}
                              allowReset={true}
                              value={imageWidth}
                              onChange={(value) =>
                                setAttributes({
                                  imageWidth: value,
                                })
                              }
                            />
                            <RbeaRangeControl
                              label={__(
                                "Height",
                                "responsive-block-editor-addons"
                              )}
                              min={-500}
                              max={2000}
                              allowReset={true}
                              value={imageHeight}
                              onChange={(value) =>
                                setAttributes({
                                  imageHeight: value,
                                })
                              }
                            />
                          </BaseControl>
                        </Fragment>
                      );
                    }

                    return <div>{tabout}</div>;
                  }}
                </TabPanel>
              }
              <div className="responsive-block-editor-addons-text-control-container">
                <PanelRow>
                  <TextControl
                    label="Alt Text"
                    value={altText}
                    onChange={(newAltText) =>
                      setAttributes({altText: newAltText})
                    }
                  />
                </PanelRow>
              </div>
              <RbeaTabRadioControl
                label={__("Object Fit", "responsive-block-editor-addons")}
                value={imageObjectFit}
                onChange={(value) => setAttributes({imageObjectFit: value})}
                options={[
                  {
                    value: "default",
                    label: __("Default", "responsive-block-editor-addons"),
                  },
                  {
                    value: "fill",
                    label: __("Fill", "responsive-block-editor-addons"),
                  },
                  {
                    value: "cover",
                    label: __("Cover", "responsive-block-editor-addons"),
                  },
                  {
                    value: "contain",
                    label: __("Contain", "responsive-block-editor-addons"),
                  },
                ]}
              />
              <SelectControl
                label={__("On Hover Image", "responsive-block-editor-addons")}
                value={imageOnHoverImage}
                onChange={(value) => setAttributes({imageOnHoverImage: value})}
                options={[
                  {
                    value: "static",
                    label: __("Static", "responsive-block-editor-addons"),
                  },
                  {
                    value: "zoomin",
                    label: __("Zoom In", "responsive-block-editor-addons"),
                  },
                  {
                    value: "slide",
                    label: __("Slide", "responsive-block-editor-addons"),
                  },
                  {
                    value: "grayscale",
                    label: __("Gray Scale", "responsive-block-editor-addons"),
                  },
                  {
                    value: "blur",
                    label: __("Blur", "responsive-block-editor-addons"),
                  },
                ]}
              />

              {!Layoverswitch && (
                <>
                  <ToggleControl
                    className="enable-caption-class"
                    label={__(
                      "Enable Caption",
                      "responsive-block-editor-addons"
                    )}
                    checked={caption}
                    onChange={() =>
                      this.props.setAttributes({
                        caption: !caption,
                      })
                    }
                  />
                </>
              )}
              {caption && !Layoverswitch && (
                <TabPanel
                  className=" responsive-size-type-field-tabs responsive-size-type-field__common-tabs responsive-inline-margin"
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
                              value={captionimageAlignmentMobile}
                              onChange={(value) =>
                                setAttributes({
                                  captionimageAlignmentMobile: value,
                                })
                              }
                              controls={["start", "center", "end"]}
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
                              value={captionimageAlignmentTablet}
                              onChange={(value) =>
                                setAttributes({
                                  captionimageAlignmentTablet: value,
                                })
                              }
                              controls={["start", "center", "end"]}
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
                              {__(
                                "Alignment",
                                "responsive-block-editor-addons"
                              )}
                            </p>
                            <div className="responsive-block-editor-addons-alignment">
                            <AlignmentToolbar
                              value={captionimageAlignment}
                              onChange={(value) =>
                                setAttributes({
                                  captionimageAlignment: value,
                                })
                              }
                              controls={["start", "center", "end"]}
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
              )}
            </PanelBody>
            <PanelBody title="Layover" initialOpen={false}>
              <>
                <ToggleControl
                  label={__("Layover", "responsive-block-editor-addons")}
                  checked={Layoverswitch}
                  onChange={() =>
                    this.props.setAttributes({
                      Layoverswitch: !Layoverswitch,
                    })
                  }
                />
                {/* <SelectControl
                  label={__(
                    "Content Position",
                    "responsive-block-editor-addons"
                  )}
                  value={LayoverContentPosition}
                  onChange={(value) =>
                    setAttributes({LayoverContentPosition: value})
                  }
                  options={[
                    {
                      value: "centertop",
                      label: __("Center Top", "responsive-block-editor-addons"),
                    },
                    {
                      value: "centercenter",
                      label: __(
                        "Center Center",
                        "responsive-block-editor-addons"
                      ),
                    },
                    {
                      value: "centerbottom",
                      label: __(
                        "Center Bottom",
                        "responsive-block-editor-addons"
                      ),
                    },
                    {
                      value: "lefttop",
                      label: __("Left Top", "responsive-block-editor-addons"),
                    },
                    {
                      value: "leftcenter",
                      label: __(
                        "Left Center",
                        "responsive-block-editor-addons"
                      ),
                    },
                    {
                      value: "leftbottom",
                      label: __(
                        "Left Bottom",
                        "responsive-block-editor-addons"
                      ),
                    },
                    {
                      value: "righttop",
                      label: __("Right Top", "responsive-block-editor-addons"),
                    },
                    {
                      value: "rightcenter",
                      label: __(
                        "Right Center",
                        "responsive-block-editor-addons"
                      ),
                    },
                    {
                      value: "rightbottom",
                      label: __(
                        "Right Bottom",
                        "responsive-block-editor-addons"
                      ),
                    },
                  ]}
                /> */}
                <div className = "rbea-tab-selector-label-wrapper">
                  <label className  = "rbea-background-image-positon-control-label">{__("Content Position", "responsive-block-editor-addons")}</label>
                </div>
                  <Fragment>
                    <div className = "rbea-background-image-positon-control"
                    style={{
                      backgroundImage: `url(${background_image_url})`,
                      backgroundSize: 'cover',
                      backgroundPosition:  'center',
                    }}>
                      <RadioControl 
                        className = "rbea-background-image-positon-control-options"
                        selected={LayoverContentPosition}
                        options={contentPositionOptions}
                        onChange={(value) =>
                          setAttributes({LayoverContentPosition: value})
                        }
                      />
                    </div>
                  </Fragment>

                <RbeaBlockBorderHelperControl
                  attrNameTemplate="layoverimage%s"
                  values={{
                    radius: layoverimageBorderRadius,
                    style: layoverimageBorderStyle,
                    width: layoverimageBorderWidth,
                    color: layoverimageBorderColor,
                  }}
                  setAttributes={setAttributes}
                  {...this.props}
                />
                <RbeaRangeControl
                  label={__(
                    "Border Distance From EDGE",
                    "responsive-block-editor-addons"
                  )}
                  value={layoverInputDistance}
                  onChange={(value) =>
                    setAttributes({
                      layoverInputDistance: value,
                    })
                  }
                  min={-100}
                  max={100}
                  allowReset
                />
              </>
            </PanelBody>
            <PanelBody title="Masks" initialOpen={false}>
              <SelectControl
                label={__("Mask Shape", "responsive-block-editor-addons")}
                value={MaskShape}
                onChange={(value) => setAttributes({MaskShape: value})}
                options={[
                  {
                    value: "none",
                    label: __("None", "responsive-block-editor-addons"),
                  },
                  {
                    value:
                      "/wp-content/plugins/responsive-block-editor-addons/src/utils/masks/circle.svg",
                    label: __("Circle", "responsive-block-editor-addons"),
                  },
                  {
                    value:
                      "/wp-content/plugins/responsive-block-editor-addons/src/utils/masks/diamond.svg",
                    label: __("Diamond", "responsive-block-editor-addons"),
                  },
                  {
                    value:
                      "/wp-content/plugins/responsive-block-editor-addons/src/utils/masks/hexagon.svg",
                    label: __("Hexagon", "responsive-block-editor-addons"),
                  },
                  {
                    value:
                      "/wp-content/plugins/responsive-block-editor-addons/src/utils/masks/rounded.svg",
                    label: __("Rounded", "responsive-block-editor-addons"),
                  },
                  {
                    value:
                      "/wp-content/plugins/responsive-block-editor-addons/src/utils/masks/blob1.svg",
                    label: __("Blob 1", "responsive-block-editor-addons"),
                  },
                  {
                    value:
                      "/wp-content/plugins/responsive-block-editor-addons/src/utils/masks/blob2.svg",
                    label: __("Blob 2", "responsive-block-editor-addons"),
                  },
                  {
                    value:
                      "/wp-content/plugins/responsive-block-editor-addons/src/utils/masks/blob3.svg",
                    label: __("Blob 3", "responsive-block-editor-addons"),
                  },
                  {
                    value:
                      "/wp-content/plugins/responsive-block-editor-addons/src/utils/masks/blob4.svg",
                    label: __("Blob 4", "responsive-block-editor-addons"),
                  },
                ]}
              />
              {MaskShape !== "none" && (
                <>
                  <RbeaTabRadioControl
                    label={__("Mask Size", "responsive-block-editor-addons")}
                    value={MaskSize}
                    onChange={(value) => setAttributes({MaskSize: value})}
                    options={[
                      {
                        value: "auto",
                        label: __("Auto", "responsive-block-editor-addons"),
                      },
                      {
                        value: "contain",
                        label: __("Contain", "responsive-block-editor-addons"),
                      },
                      {
                        value: "cover",
                        label: __("Cover", "responsive-block-editor-addons"),
                      },
                    ]}
                  />
                  <SelectControl
                    label={__(
                      "Mask Position",
                      "responsive-block-editor-addons"
                    )}
                    value={MaskPosition}
                    onChange={(value) => setAttributes({MaskPosition: value})}
                    options={[
                      {
                        value: "center top",
                        label: __(
                          "Center Top",
                          "responsive-block-editor-addons"
                        ),
                      },
                      {
                        value: "center center",
                        label: __(
                          "Center Center",
                          "responsive-block-editor-addons"
                        ),
                      },
                      {
                        value: "center bottom",
                        label: __(
                          "Center Bottom",
                          "responsive-block-editor-addons"
                        ),
                      },
                      {
                        value: "left top",
                        label: __("Left Top", "responsive-block-editor-addons"),
                      },
                      {
                        value: "left center",
                        label: __(
                          "Left Center",
                          "responsive-block-editor-addons"
                        ),
                      },
                      {
                        value: "left bottom",
                        label: __(
                          "Left Bottom",
                          "responsive-block-editor-addons"
                        ),
                      },
                      {
                        value: "right top",
                        label: __(
                          "Right Top",
                          "responsive-block-editor-addons"
                        ),
                      },
                      {
                        value: "right center",
                        label: __(
                          "Right Center",
                          "responsive-block-editor-addons"
                        ),
                      },
                      {
                        value: "right bottom",
                        label: __(
                          "Right Bottom",
                          "responsive-block-editor-addons"
                        ),
                      },
                    ]}
                  />
                  {/* <SelectControl
                    label={__("Mask Repeat", "responsive-block-editor-addons")}
                    value={MaskRepeat}
                    onChange={(value) => setAttributes({MaskRepeat: value})}
                    options={[
                      {
                        value: "no-repeat",
                        label: __(
                          "No Repeat",
                          "responsive-block-editor-addons"
                        ),
                      },
                      {
                        value: "repeat",
                        label: __("Repeat", "responsive-block-editor-addons"),
                      },
                      {
                        value: "repeat-x",
                        label: __("Repeat-X", "responsive-block-editor-addons"),
                      },
                      {
                        value: "repeat-y",
                        label: __("Repeat-Y", "responsive-block-editor-addons"),
                      },
                    ]}
                  /> */}
                  <div className = "rbea-repeat-selector-wrapper">
                      <RbeaTabRadioControl
                        label={__("Mask Repeat", "responsive-block-editor-addons")}
                        value={MaskRepeat}
                        onChange={(value) =>
                          setAttributes({ MaskRepeat: value })
                        }
                        options={[
                          { value: "no-repeat", label: __("No Repeat", "responsive-block-editor-addons") },
                          { value: "repeat", label: __("Repeat", "responsive-block-editor-addons") },
                          { value: "repeat-x", label: __("Repeat-x", "responsive-block-editor-addons") },
                          { value: "repeat-y", label: __("Repeat-y", "responsive-block-editor-addons") },
                        ]}
                        defaultValue={"no-repeat"}
                      /></div>
                </>
              )}
            </PanelBody>
          </InspectorTab>
          <InspectorTab key={"style"}>
            <PanelBody title="Image" initialOpen={true}>
              <RbeaBlockBorderHelperControl
                attrNameTemplate="image%s"
                values={{
                  radius: imageBorderRadius,
                  style: imageBorderStyle,
                  width: imageBorderWidth,
                  color: imageBorderColor,
                }}
                setAttributes={setAttributes}
                {...this.props}
              />
              <BoxShadowControlHelper
                setAttributes={setAttributes}
                boxShadowColor={{value: imageboxShadowColor}}
                boxShadowHOffset={{value: imageboxShadowHOffset}}
                boxShadowVOffset={{value: imageboxShadowVOffset}}
                boxShadowBlur={{value: imageboxShadowBlur}}
                boxShadowSpread={{value: imageboxShadowSpread}}
                boxShadowPosition={{value: imageboxShadowPosition}}
                label={__("Box Shadow", "responsive-block-editor-addons")}
                attrNameTemplate="image%s"
              />
              <ToggleControl
                label={__(
                  "Seprate Box Shadow Hover",
                  "responsive-block-editor-addons"
                )}
                checked={imageboxshadowSeprateHover}
                onChange={() =>
                  this.props.setAttributes({
                    imageboxshadowSeprateHover: !imageboxshadowSeprateHover,
                  })
                }
              />
              {imageboxshadowSeprateHover && HoverBoxShadowControls}
            </PanelBody>
            <PanelBody
              title="Spacing" initialOpen={false}
            >
              <ResponsiveNewPaddingControl
                attrNameTemplate="image%s"
                resetValues={imagePaddingResetValues}
                {...this.props}
              />
              <ResponsiveNewMarginControl
                attrNameTemplate="image%s"
                resetValues={imageMarginResetValues}
                {...this.props}
              />
            </PanelBody>
            {Layoverswitch && (
              <>
                <PanelBody title="Overlay" initialOpen={false}>
                  <Fragment>
                    <RbeaColorControl
                      label = {__("Background", "responsive-block-editor-addons")}
                      colorValue={layoverBackgroundcolor}
                      onChange={(colorValue) =>
                        setAttributes({
                          layoverBackgroundcolor:
                            colorValue !== undefined ? colorValue : "",
                        })
                      }
                      resetColor={() => setAttributes({ layoverBackgroundcolor: "" })}
                    />
                    <RbeaRangeControl
                      label={__(
                        "Overlay Opacity",
                        "responsive-block-editor-addons"
                      )}
                      value={layoverOpacity}
                      onChange={(value) =>
                        setAttributes({
                          layoverOpacity: value,
                        })
                      }
                      min={0}
                      max={100}
                      allowReset
                    />
                    <RbeaRangeControl
                      label={__(
                        "Overlay Hover Opacity",
                        "responsive-block-editor-addons"
                      )}
                      value={layoverHoverOpacity}
                      onChange={(value) =>
                        setAttributes({
                          layoverHoverOpacity: value,
                        })
                      }
                      min={0}
                      max={100}
                      allowReset
                    />
                    
                  </Fragment>
                </PanelBody>
                <PanelBody title="Heading" initialOpen={false}>
                  <RbeaTabRadioControl
                    label={__("Heading Tag", "responsive-block-editor-addons")}
                    value={layoverHeadingTag}
                    onChange={(value) =>
                      setAttributes({layoverHeadingTag: value})
                    }
                    options={[
                      {
                        value: "h1",
                        label: __("H1", "responsive-block-editor-addons"),
                      },
                      {
                        value: "h2",
                        label: __("H2", "responsive-block-editor-addons"),
                      },
                      {
                        value: "h3",
                        label: __("H3", "responsive-block-editor-addons"),
                      },
                      {
                        value: "h4",
                        label: __("H4", "responsive-block-editor-addons"),
                      },
                      {
                        value: "h5",
                        label: __("H5", "responsive-block-editor-addons"),
                      },
                      {
                        value: "h6",
                        label: __("H6", "responsive-block-editor-addons"),
                      },
                    ]}
                  />
                  
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
                            <p>
                              {__(
                                "Margin Mobile",
                                "responsive-block-editor-addons"
                              )}
                            </p>
                            <RbeaRangeControl
                              label={__(
                                "Top",
                                "responsive-block-editor-addons"
                              )}
                              min={0}
                              max={2000}
                              allowReset={true}
                              value={layoverHeadingtopmarginMobile}
                              onChange={(value) =>
                                setAttributes({
                                  layoverHeadingtopmarginMobile: value,
                                })
                              }
                            />
                            <RbeaRangeControl
                              label={__(
                                "Bottom",
                                "responsive-block-editor-addons"
                              )}
                              min={0}
                              max={2000}
                              allowReset={true}
                              value={layoverHeadingbottommarginMobile}
                              onChange={(value) =>
                                setAttributes({
                                  layoverHeadingbottommarginMobile: value,
                                })
                              }
                            />
                            <RbeaRangeControl
                              label={__(
                                "Left",
                                "responsive-block-editor-addons"
                              )}
                              min={0}
                              max={2000}
                              allowReset={true}
                              value={layoverHeadingleftmarginMobile}
                              onChange={(value) =>
                                setAttributes({
                                  layoverHeadingleftmarginMobile: value,
                                })
                              }
                            />
                            <RbeaRangeControl
                              label={__(
                                "Right",
                                "responsive-block-editor-addons"
                              )}
                              min={0}
                              max={2000}
                              allowReset={true}
                              value={layoverHeadingrightmarginMobile}
                              onChange={(value) =>
                                setAttributes({
                                  layoverHeadingrightmarginMobile: value,
                                })
                              }
                            />
                          </Fragment>
                        );
                      } else if ("tablet" === tab.name) {
                        tabout = (
                          <Fragment>
                            <p>
                              {__(
                                "Margin Tablet",
                                "responsive-block-editor-addons"
                              )}
                            </p>
                            <RbeaRangeControl
                              label={__(
                                "Top",
                                "responsive-block-editor-addons"
                              )}
                              min={0}
                              max={2000}
                              allowReset={true}
                              value={layoverHeadingtopmarginTablet}
                              onChange={(value) =>
                                setAttributes({
                                  layoverHeadingtopmarginTablet: value,
                                })
                              }
                            />
                            <RbeaRangeControl
                              label={__(
                                "Bottom",
                                "responsive-block-editor-addons"
                              )}
                              min={0}
                              max={2000}
                              allowReset={true}
                              value={layoverHeadingbottommarginTablet}
                              onChange={(value) =>
                                setAttributes({
                                  layoverHeadingbottommarginTablet: value,
                                })
                              }
                            />
                            <RbeaRangeControl
                              label={__(
                                "Left",
                                "responsive-block-editor-addons"
                              )}
                              min={0}
                              max={2000}
                              allowReset={true}
                              value={layoverHeadingleftmarginTablet}
                              onChange={(value) =>
                                setAttributes({
                                  layoverHeadingleftmarginTablet: value,
                                })
                              }
                            />
                            <RbeaRangeControl
                              label={__(
                                "Right",
                                "responsive-block-editor-addons"
                              )}
                              min={0}
                              max={2000}
                              allowReset={true}
                              value={layoverHeadingrightmarginTablet}
                              onChange={(value) =>
                                setAttributes({
                                  layoverHeadingrightmarginTablet: value,
                                })
                              }
                            />
                          </Fragment>
                        );
                      } else {
                        tabout = (
                          <Fragment>
                            <p>
                              {__("Margin", "responsive-block-editor-addons")}
                            </p>
                            <RbeaRangeControl
                              label={__(
                                "Top",
                                "responsive-block-editor-addons"
                              )}
                              min={0}
                              max={2000}
                              allowReset={true}
                              value={layoverHeadingtopmargin}
                              onChange={(value) =>
                                setAttributes({
                                  layoverHeadingtopmargin: value,
                                })
                              }
                            />
                            <RbeaRangeControl
                              label={__(
                                "Bottom",
                                "responsive-block-editor-addons"
                              )}
                              min={0}
                              max={2000}
                              allowReset={true}
                              value={layoverHeadingbottommargin}
                              onChange={(value) =>
                                setAttributes({
                                  layoverHeadingbottommargin: value,
                                })
                              }
                            />
                            <RbeaRangeControl
                              label={__(
                                "Left",
                                "responsive-block-editor-addons"
                              )}
                              min={0}
                              max={2000}
                              allowReset={true}
                              value={layoverHeadingleftmargin}
                              onChange={(value) =>
                                setAttributes({
                                  layoverHeadingleftmargin: value,
                                })
                              }
                            />
                            <RbeaRangeControl
                              label={__(
                                "Right",
                                "responsive-block-editor-addons"
                              )}
                              min={0}
                              max={2000}
                              allowReset={true}
                              value={layoverHeadingrightmargin}
                              onChange={(value) =>
                                setAttributes({
                                  layoverHeadingrightmargin: value,
                                })
                              }
                            />
                          </Fragment>
                        );
                      }

                      return <div>{tabout}</div>;
                    }}
                  </TabPanel>
                </PanelBody>
              </>
            )}

            {(Layoverswitch) && (
              <TypographyHelperControl
              title={__("Heading Typography", "responsive-block-editor-addons")}
              attrNameTemplate="layoverHeading%s"
              values={{
                family: layoverHeadingFontFamily,
                size: layoverHeadingFontSize,
                sizeMobile: layoverHeadingFontSizeMobile,
                sizeTablet: layoverHeadingFontSizeTablet,
                weight: layoverHeadingFontWeight,
                height: layoverHeadingLineHeight,
                spacing: layoverHeadingLetterSpacing,
                transform: layoverHeadingTextTransform,
                color: layoverHeadingTypographyColor,
              }}
              showLetterSpacing={true}
              showTextTransform={true}
              showColorControl={true}
              setAttributes={setAttributes}
              {...this.props}
            />
            )}
            {(caption || Layoverswitch) && (
              <PanelBody title="Caption" initialOpen={false}>
                <ResponsiveNewMarginControl
                  attrNameTemplate="caption%s"
                  resetValues={captionMarginResetValues}
                  {...this.props}
                />
              </PanelBody>
            )}
            {(caption || Layoverswitch) && (
              <TypographyHelperControl
              title={__("Caption Typography", "responsive-block-editor-addons")}
              attrNameTemplate="caption%s"
              values={{
                family: captionFontFamily,
                size: captionFontSize,
                sizeMobile: captionFontSizeMobile,
                sizeTablet: captionFontSizeTablet,
                weight: captionFontWeight,
                height: captionLineHeight,
                spacing: captionLetterSpacing,
                transform: captionTextTransform,
                color: captionTypographyColor,
              }}
              showLetterSpacing={true}
              showTextTransform={true}
              showColorControl={true}
              setAttributes={setAttributes}
              {...this.props}
            />
            )}
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
