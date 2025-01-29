import BoxShadowControl from "../../../utils/components/box-shadow";
import InspectorTab from "../../../components/InspectorTab";
import InspectorTabs from "../../../components/InspectorTabs";
import BlockBorderHelperControl from "../../../settings-components/BlockBorderSettings";
import ColorBackgroundControl from "../../../settings-components/BlockBackgroundSettings/ColorBackgroundSettings";
import ImageBackgroundControl from "../../../settings-components/BlockBackgroundSettings/ImageBackgroundSettings";
import GradientBackgroundControl from "../../../settings-components/BlockBackgroundSettings/GradientBackgroundSettings";
import ResponsiveNewPaddingControl from "../../../settings-components/ResponsiveNewSpacingSettings/ResponsiveNewPaddingControl/index";
import ResponsiveNewMarginControl from "../../../settings-components/ResponsiveNewSpacingSettings/ResponsiveNewMarginControl/index";
import RbeaRangeControl from "../../../utils/components/rbea-range-control";
import RbeaTabRadioControl from "../../../utils/components/rbea-tab-radio-control";
import RbeaBackgroundTypeControl from "../../../utils/components/rbea-background-type-control";
import RbeaBlockBorderHelperControl from "../../../settings-components/RbeaBlockBorderSettings";
import RbeaMediaUploadControl from "../../../utils/components/rbea-media-upload-control";
import { RadioControl} from "@wordpress/components";
import RbeaColorControl from "../../../utils/components/rbea-color-control";
import RbeaAngleRangeControl from "../../../utils/components/rbea-angle-range-control";
import stackOnIcons from "../../../utils/components/rbea-tab-radio-control/rbea-stack-on-icons";

/**
 * Inspector Controls
 */

// Setup the block
const { __ } = wp.i18n;
const { Component, Fragment } = wp.element;
const { ColorPalette, MediaUpload, InspectorControls } = wp.blockEditor;

// Import Inspector components
const {
  PanelBody,
  RangeControl,
  SelectControl,
  ButtonGroup,
  Button,
  BaseControl,
  TabPanel,
  Dashicon,
  ToggleControl,
} = wp.components;

/**
 * Create an Inspector Controls wrapper Component
 */
export default class Inspector extends Component {
  constructor(props) {
    super(...arguments);
    this.onRemoveImage = this.onRemoveImage.bind(this);
    this.onSelectImage = this.onSelectImage.bind(this);
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

  render() {
    // Setup the attributes
    const {
      attributes: {
        columns,
        columnGap,
        contentWidth,
        width,
        widthType,
        stack,
        boxTopPadding,
        boxTopPaddingTablet,
        boxTopPaddingMobile,
        boxBottomPadding,
        boxBottomPaddingTablet,
        boxBottomPaddingMobile,
        boxLeftPadding,
        boxLeftPaddingTablet,
        boxLeftPaddingMobile,
        boxRightPadding,
        boxRightPaddingTablet,
        boxRightPaddingMobile,
        topMargin,
        topMarginTablet,
        topMarginMobile,
        bottomMargin,
        bottomMarginTablet,
        bottomMarginMobile,
        backgroundColor,
        backgroundColor1,
        backgroundColor2,
        colorLocation1,
        colorLocation2,
        gradientDirection,
        backgroundType,
        backgroundImage,
        opacity,
        blockBorderStyle,
        blockBorderWidth,
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
        boxShadowColor,
        boxShadowHOffset,
        boxShadowVOffset,
        boxShadowBlur,
        boxShadowSpread,
        boxShadowPosition,
        backgroundImagePosition,
        backgroundAttachment,
        backgroundImageRepeat,
        backgroundImageSize,
        overlayType,
        backgroundImageColor,
        gradientOverlayColor1,
        gradientOverlayLocation1,
        gradientOverlayColor2,
        gradientOverlayLocation2,
        gradientOverlayType,
        gradientOverlayAngle,
        gradientOverlayPosition,
        height,
        customHeight,
        blockAlign,
        verticalAlign,
        z_index,
        hideWidget,
        hideWidgetTablet,
        hideWidgetMobile,
        z_indexTablet,
        z_indexMobile,
        imagePositionTab,
        imageSizeTab,
        backgroundSizeTablet,
        backgroundSizeMobile,
        backgroundPosition,
        backgroundPositionMobile,
        backgroundPositionTablet,
        backgroundRepeat,
        backgroundSize,
        boxIsPaddingControlConnected,
        boxTopMargin,
        boxTopMarginTablet,
        boxTopMarginMobile,
        boxBottomMargin,
        boxBottomMarginTablet,
        boxBottomMarginMobile,
        boxLeftMargin,
        boxLeftMarginTablet,
        boxLeftMarginMobile,
        boxRightMargin,
        boxRightMarginTablet,
        boxRightMarginMobile,
        boxIsMarginControlConnected,
        newMarginValuesUpdated,
        backgroundImageValueUpdated,
      },
      setAttributes,
    } = this.props;

    const boxPaddingResetValues = {
      paddingTop: 10,
      paddingRight: 0,
      paddingBottom: 0,
      paddingLeft: 0,
      paddingTabletTop: 10,
      paddingTabletRight: 0,
      paddingTabletBottom: 0,
      paddingTabletLeft: 0,
      paddingMobileTop: 10,
      paddingMobileRight: 0,
      paddingMobileBottom: 0,
      paddingMobileLeft: 0,
  }
    const boxMarginResetValues = {
      marginTop: 5,
      marginRight: 5,
      marginBottom: 5,
      marginLeft: 5,
      marginTabletTop: 0,
      marginTabletRight: 0,
      marginTabletBottom: 0,
      marginTabletLeft: 0,
      marginMobileTop: 0,
      marginMobileRight: 0,
      marginMobileBottom: 0,
      marginMobileLeft: 0,
  }

      // To populate new control values with existing padding margin control values for backward compatibility.
      if (!newMarginValuesUpdated) {
        this.props.setAttributes(
          {
            boxTopMargin:          topMargin !== undefined ? topMargin : boxTopMargin,
            boxBottomMargin:       bottomMargin !== undefined ? bottomMargin : boxBottomMargin,
            boxTopMarginTablet:    topMarginTablet !== undefined ? topMarginTablet : boxTopMarginTablet,
            boxBottomMarginTablet: bottomMarginTablet !== undefined ? bottomMarginTablet : boxBottomMarginTablet,
            boxTopMarginMobile:    topMarginMobile !== undefined ? topMarginMobile : boxTopMarginMobile,
            boxBottomMarginMobile: bottomMarginMobile !== undefined ? bottomMarginMobile : boxBottomMarginMobile,
          }
        )
      }
      this.props.setAttributes({newMarginValuesUpdated: true});

    // Background Type Options
    const backgroundTypeOptions = [
      { value: "color", label: __("Color", "responsive-block-editor-addons") },
      {
        value: "gradient",
        label: __("Gradient", "responsive-block-editor-addons"),
      },
      { value: "image", label: __("Image", "responsive-block-editor-addons") },
    ];

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

    // backward compatibility for typography color control
    // if (!backgroundImageValueUpdated) {
    //   this.props.setAttributes(
    //     {
    //       backgroundRepeat: backgroundImageRepeat !== undefined ? backgroundImageRepeat : backgroundRepeat,
    //       backgroundPosition: backgroundImagePosition !== undefined ? backgroundImagePosition : backgroundPosition,
    //       backgroundPositionMobile: backgroundImagePosition !== undefined ? backgroundImagePosition : backgroundPositionMobile,
    //       backgroundPositionTablet: backgroundImagePosition !== undefined ? backgroundImagePosition : backgroundPositionTablet,
    //       backgroundSize: backgroundImageSize !== undefined ? backgroundImageSize : backgroundSize,
    //       backgroundSizeMobile: backgroundImageSize !== undefined ? backgroundImageSize : backgroundSizeMobile,
    //       backgroundSizeTablet: backgroundImageSize !== undefined ? backgroundImageSize : backgroundSizeTablet,
    //     }
    //   )
    //   this.props.setAttributes({backgroundImageValueUpdated: true});
    // }

    // Background image URL
    let background_image_url = backgroundImage || '';
    
    return (
      <InspectorControls key="inspector">
        <InspectorTabs>
          <InspectorTab key={"content"}>
            <PanelBody>
              <RbeaRangeControl
                label={__("Columns", "responsive-block-editor-addons")}
                value={columns}
                min={0}
                max={6}
                onChange={(value) =>
                  setAttributes({ columns: value !== undefined ? value : 2 })
                }
                allowReset
              />

              <SelectControl
                label={__("Column Gap", "responsive-block-editor-addons")}
                value={columnGap}
                onChange={(value) => setAttributes({ columnGap: value })}
                options={[
                  {
                    value: "default",
                    label: __("No Gap (0px)", "responsive-block-editor-addons"),
                  },
                  {
                    value: "narrow",
                    label: __("Narrow (5px)", "responsive-block-editor-addons"),
                  },
                  {
                    value: "medium",
                    label: __(
                      "Medium (10px)",
                      "responsive-block-editor-addons"
                    ),
                  },
                  {
                    value: "extended",
                    label: __(
                      "Extended (15px)",
                      "responsive-block-editor-addons"
                    ),
                  },
                  {
                    value: "wide",
                    label: __("Wide (20px)", "responsive-block-editor-addons"),
                  },
                  {
                    value: "wider",
                    label: __("Wider (30px)", "responsive-block-editor-addons"),
                  },
                ]}
                help={__(
                  "Note: The individual Column Gap can be managed from Column Settings.",
                  "responsive-block-editor-addons"
                )}
              />
              <RbeaTabRadioControl
                label={__("Stack on", "responsive-block-editor-addons")}
                value={stack}
                options={[
                  {
                    value: "tablet",
                    label: __("Tablet", "responsive-block-editor-addons"),
                    icon: stackOnIcons.tablet,
                  },
                  {
                    value: "mobile",
                    label: __("Mobile", "responsive-block-editor-addons"),
                    icon: stackOnIcons.mobile,
                  },
                ]}
                onChange={(value) => setAttributes({ stack: value })}
                help={__(
                  "Note: Choose on what breakpoint the columns will stack.",
                  "responsive-block-editor-addons"
                )}
                defaultValue={"none"}
                allowReset={true}
								hasIcon={true}
								optionHasBorder={true}
              />
              <RbeaTabRadioControl
                label={__("Container Width", "responsive-block-editor-addons")}
                value={contentWidth}
                onChange={(value) => setAttributes({ contentWidth: value })}
                options={[
                  {
                    value: "theme",
                    label: __(
                      "Theme Width",
                      "responsive-block-editor-addons"
                    ),
                  },
                  {
                    value: "custom",
                    label: __("Custom", "responsive-block-editor-addons"),
                  },
                ]}
                defaultValue={"theme"}
              />
              {contentWidth == "custom" && (
                <Fragment>
                  <ButtonGroup
                    className="responsive-size-type-field"
                    aria-label={__(
                      "Size Type",
                      "responsive-block-editor-addons"
                    )}
                  >
                    <Button
                      key={"px"}
                      className="responsive-size-btn"
                      isSmall
                      isPrimary={widthType === "px"}
                      aria-pressed={widthType === "px"}
                      min={0}
                      max={2000}
                      onClick={() => setAttributes({ widthType: "px" })}
                    >
                      {"px"}
                    </Button>
                    <Button
                      key={"%"}
                      className="responsive-size-btn"
                      isSmall
                      isPrimary={widthType === "%"}
                      aria-pressed={widthType === "%"}
                      min={0}
                      max={100}
                      onClick={() => setAttributes({ widthType: "%" })}
                    >
                      {"%"}
                    </Button>
                  </ButtonGroup>
                  <RbeaRangeControl
                    label={__("Inner Width", "responsive-block-editor-addons")}
                    value={width}
                    min={0}
                    max={"%" == widthType ? 100 : 2000}
                    onChange={(value) =>
                      setAttributes({
                        width: value !== undefined ? value : 900,
                      })
                    }
                    allowReset
                  />
                </Fragment>
              )}
              <div className="rbea-height-selector-wrapper">
              <RbeaTabRadioControl
                label={__("Height", "responsive-block-editor-addons")}
                value={height}
                onChange={(value) => setAttributes({ height: value })}
                options={[
                  { value: "", label: __("Normal", "responsive-block-editor-addons") },
                  { value: "half", label: __("Half Screen", "responsive-block-editor-addons") },
                  { value: "full", label: __("Full Screen", "responsive-block-editor-addons") },
                  { value: "custom", label: __("Custom", "responsive-block-editor-addons") },
                ]}
                defaultValue={""}
              /></div>
              {"custom" == height && (
                <RbeaRangeControl
                  label={__("Custom Height", "responsive-block-editor-addons")}
                  value={customHeight}
                  min={0}
                  max={1500}
                  onChange={(value) =>
                    setAttributes({
                      customHeight: value !== undefined ? value : 50,
                    })
                  }
                  allowReset
                />
              )}
              <RbeaTabRadioControl
                label={__("Horizontal Align", "responsive-block-editor-addons")}
                value={blockAlign}
                onChange={(value) => setAttributes({ blockAlign: value })}
                options={[
                  { value: "left", label: __("Left", "responsive-block-editor-addons") },
                  { value: "right", label: __("Right", "responsive-block-editor-addons") },
                  { value: "center", label: __("Center", "responsive-block-editor-addons") },
                ]}
                defaultValue={"center"}
              />
              <RbeaTabRadioControl
                label={__("Vertical Align", "responsive-block-editor-addons")}
                value={verticalAlign}
                onChange={(value) => setAttributes({ verticalAlign: value })}
                options={[
                  { value: "flex-start", label: __("Top", "responsive-block-editor-addons") },
                  { value: "flex-end", label: __("Bottom", "responsive-block-editor-addons") },
                  { value: "center", label: __("Center", "responsive-block-editor-addons") },
                ]}
                defaultValue={"center"}
              />
            </PanelBody>
          </InspectorTab>
          <InspectorTab key={"style"}>
          <PanelBody
              title={__("Background", "responsive-block-editor-addons")}
              initialOpen={false}
            >
              <RbeaBackgroundTypeControl
                label={__("Type", "responsive-block-editor-addons")}
                value={backgroundType}
                onChange={(value) => setAttributes({ backgroundType: value })}
                options={backgroundTypeOptions}
              />
              {"color" == backgroundType && (
                <Fragment>
                  <ColorBackgroundControl
                    {...this.props}
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
                      showHoverGradient = {false}
                  />
                </Fragment>
              )}
              
              {"image" == backgroundType && (
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
              )}
              {backgroundImage && (
                <Fragment>
                  {/* Position */}
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

                    {/* Repeat */}
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

                    {/* Size */}
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

                    {/* Attachment */}
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
                    allowReset
                  />
                  )}
              
            </PanelBody>
            <PanelBody
              title={__("Border", "responsive-block-editor-addons")}
              initialOpen={false}
            >
            <RbeaBlockBorderHelperControl
                attrNameTemplate="block%s"
                values = {{radius: blockBorderRadius, style: blockBorderStyle, width: blockBorderWidth, color: blockBorderColor}}
                setAttributes={ setAttributes }
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
                boxShadowBlur={{
                  value: boxShadowBlur,
                  label: __("Blur", "responsive-block-editor-addons"),
                }}
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
              <ResponsiveNewPaddingControl
                attrNameTemplate="box%s"
                resetValues={boxPaddingResetValues}
                {...this.props}
              />
              <ResponsiveNewMarginControl
                attrNameTemplate="box%s"
                resetValues={boxMarginResetValues}
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
