/**
 * Inspector Controls
 */
import BoxShadowControl from "../../../../utils/components/box-shadow";
import BoxShadowControlHelper from "../../../../utils/components/box-shadow-helper";
import InspectorTab from "../../../../components/InspectorTab";
import InspectorTabs from "../../../../components/InspectorTabs";
import BlockBorderHelperControl from "../../../../settings-components/BlockBorderSettings";
import ColorBackgroundControl from "../../../../settings-components/BlockBackgroundSettings/ColorBackgroundSettings";
import ImageBackgroundControl from "../../../../settings-components/BlockBackgroundSettings/ImageBackgroundSettings";
import GradientBackgroundControl from "../../../../settings-components/BlockBackgroundSettings/GradientBackgroundSettings";
import ImageHoverBackgroundSettings from "../../../../settings-components/BlockBackgroundSettings/ImageHoverBackgroundSettings"
import ResponsiveNewPaddingControl from "../../../../settings-components/ResponsiveNewSpacingSettings/ResponsiveNewPaddingControl/index";
import ResponsiveNewMarginControl from "../../../../settings-components/ResponsiveNewSpacingSettings/ResponsiveNewMarginControl/index";
import RbeaRangeControl from "../../../../utils/components/rbea-range-control";
import RbeaColorControl from "../../../../utils/components/rbea-color-control";
import RbeaBackgroundTypeControl from "../../../../utils/components/rbea-background-type-control";
import RbeaBlockBorderHelperControl from "../../../../settings-components/RbeaBlockBorderSettings";

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
        width,
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
        columnGap,
        contentWidth,
        widthType,
        stack,
        backgroundColor,
        backgroundColorHover,
        backgroundColor1,
        backgroundColor2,
        colorLocation1,
        colorLocation2,
        gradientDirection,
        hoverbackgroundColor1,
        hoverbackgroundColor2,
        hovercolorLocation1,
        hovercolorLocation2,
        hovergradientDirection,
        backgroundType,
        backgroundImage,
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
        topMargin,
        bottomMargin,
        leftMargin,
        rightMargin,
        columnTopMargin,
        topMarginTablet,
        bottomMarginTablet,
        leftMarginTablet,
        rightMarginTablet,
        topMarginMobile,
        bottomMarginMobile,
        leftMarginMobile,
        rightMarginMobile,
        columnTopMarginTablet,
        columnTopMarginMobile,
        columnBottomMargin,
        columnBottomMarginTablet,
        columnBottomMarginMobile,
        columnLeftMargin,
        columnLeftMarginTablet,
        columnLeftMarginMobile,
        columnRightMargin,
        columnRightMarginTablet,
        columnRightMarginMobile,
        topPadding,
        bottomPadding,
        leftPadding,
        rightPadding,
        topPaddingTablet,
        bottomPaddingTablet,
        leftPaddingTablet,
        rightPaddingTablet,
        topPaddingMobile,
        bottomPaddingMobile,
        leftPaddingMobile,
        rightPaddingMobile,
        columnTopPadding,
        columnTopPaddingTablet,
        columnTopPaddingMobile,
        columnBottomPadding,
        columnBottomPaddingTablet,
        columnBottomPaddingMobile,
        columnLeftPadding,
        columnLeftPaddingTablet,
        columnLeftPaddingMobile,
        columnRightPadding,
        columnRightPaddingTablet,
        columnRightPaddingMobile,
        backgroundHoverImage,
        backgroundImageHoverPosition,
        backgroundImageHoverRepeat,
        backgroundImageHoverAttachment,
        backgroundImageHoverSize,
        newSpacingValuesUpdated,
        columnIsPaddingControlConnected,
        columnIsMarginControlConnected,
      },
      setAttributes,
    } = this.props;

    const columnPaddingResetValues = {
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

    const columnMarginResetValues = {
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

  // To populate new control values with existing padding margin control values for backward compatibility. Compatibility with v1.8.4.
  if (!newSpacingValuesUpdated) {
    this.props.setAttributes(
      {
        columnTopPadding:          topPadding !== undefined ? topPadding : columnTopPadding,
        columnRightPadding:        rightPadding !== undefined ? rightPadding : columnRightPadding,
        columnBottomPadding:      bottomPadding !== undefined ? bottomPadding : columnBottomPadding,
        columnLeftPadding:         leftPadding !== undefined ? leftPadding : columnLeftPadding,
        columnTopPaddingTablet:    topPaddingTablet !== undefined ? topPaddingTablet : columnTopPaddingTablet,
        columnRightPaddingTablet:  rightPaddingTablet !== undefined ? rightPaddingTablet : columnRightPaddingTablet,
        columnBottomPaddingTablet: bottomPaddingTablet !== undefined ? bottomPaddingTablet : columnBottomPaddingTablet,
        columnLeftPaddingTablet:   leftPaddingTablet !== undefined ? leftPaddingTablet : columnLeftPaddingTablet,
        columnTopPaddingMobile:    topPaddingMobile !== undefined ? topPaddingMobile : columnTopPaddingMobile,
        columnRightPaddingMobile:  rightPaddingMobile !== undefined ? rightPaddingMobile : columnRightPaddingMobile,
        columnBottomPaddingMobile: bottomPaddingMobile !== undefined ? bottomPaddingMobile : columnBottomPaddingMobile,
        columnLeftPaddingMobile:   leftPaddingMobile !== undefined ? leftPaddingMobile : columnLeftPaddingMobile,

        columnTopMargin:           topMargin !== undefined ? topMargin : columnTopMargin,
        columnRightMargin:         rightMargin !== undefined ? rightMargin : columnRightMargin,
        columnBottomMargin:        bottomMargin !== undefined ? bottomMargin : columnBottomMargin,
        columnLeftMargin:          leftMargin !== undefined ? leftMargin : columnLeftMargin,
        columnTopMarginTablet:     topMarginTablet !== undefined ? topMarginTablet : columnTopMarginTablet,
        columnRightMarginTablet:   rightMarginTablet !== undefined ? rightMarginTablet : columnRightMarginTablet,
        columnBottomMarginTablet:  bottomMarginTablet !== undefined ? bottomMarginTablet : columnBottomMarginTablet,
        columnLeftMarginTablet:    leftMarginTablet !== undefined ? leftMarginTablet : columnLeftMarginTablet,
        columnTopMarginMobile:     topMarginMobile !== undefined ? topMarginMobile : columnTopMarginMobile,
        columnRightMarginMobile:   rightMarginMobile !== undefined ? rightMarginMobile : columnRightMarginMobile,
        columnBottomMarginMobile:  bottomMarginMobile !== undefined ? bottomMarginMobile : columnBottomMarginMobile,
        columnLeftMarginMobile:    leftMarginMobile !== undefined ? leftMarginMobile : columnLeftMarginMobile
      }
    )
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

  this.props.setAttributes({newSpacingValuesUpdated: true});

    // Background Type Options
    const backgroundTypeOptions = [
      { value: "color", label: __("Color", "responsive-block-editor-addons") },
      {
        value: "gradient",
        label: __("Gradient", "responsive-block-editor-addons"),
      },
      { value: "image", label: __("Image", "responsive-block-editor-addons") },
    ];
    return (
      <InspectorControls key="inspector">
        <InspectorTabs>
          <InspectorTab key={"content"}>
            <PanelBody
              title={__("Layout", "responsive-block-editor-addons")}
              initialOpen={false}
            >
              <RbeaRangeControl
                label={__("Content Width(%)", "responsive-block-editor-addons")}
                value={width}
                min={0}
                max={100}
                step={0.01}
                onChange={(value) =>
                  setAttributes({ width: value !== undefined ? value : 50 })
                }
                allowReset
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
                  <TabPanel
                    className="responsive-block-editor-addons-inspect-tabs 
                    responsive-block-editor-addons-inspect-tabs-col-2  
                    responsive-block-editor-addons-color-inspect-tabs"
                    activeClass="active-tab"
                    initialTabName="normal" // Set the default active tab here
                    tabs={[
                      {
                        name: "empty-1",
                        title: __("", "responsive-block-editor-addons"),
                        className: "responsive-block-editor-addons-empty-tab",
                      },
                      {
                        name: "normal",
                        title: __("Normal", "responsive-block-editor-addons"),
                        className: "responsive-block-editor-addons-normal-tab",
                      },
                      {
                        name: "empty-2",
                        title: __("", "responsive-block-editor-addons"),
                        className: "responsive-block-editor-addons-empty-tab-middle",
                      },
                      {
                        name: "hover",
                        title: __("Hover", "responsive-block-editor-addons"),
                        className: "responsive-block-editor-addons-hover-tab",
                      },
                      {
                        name: "empty-3",
                        title: __("", "responsive-block-editor-addons"),
                        className: "responsive-block-editor-addons-empty-tab",
                      },
                      ]}
                    >
                    {(tabName) => {
                      let tabout;
                      if ("hover" == tabName.name) {
                        tabout = (
                          <Fragment>
                          <RbeaColorControl
                            label = {__("Background Color Hover", "responsive-block-editor-addons")}
                            colorValue={backgroundColorHover}
                            onChange={(colorValue) =>
                              setAttributes({ backgroundColorHover: colorValue })
                            }
                            resetColor={() => setAttributes({ backgroundColorHover: "" })}
                          />
                          </Fragment>
                        );
                      } else if("normal" == tabName.name) {
                        tabout = (
                          <Fragment>
                            <ColorBackgroundControl {...this.props} />
                          </Fragment>
                        );
                      } else {
                        tabout = this.props.values.emptyColorControl;
                      }
                      return <div>{tabout}</div>;
                    }}
                  </TabPanel>
                  {(backgroundColor && backgroundColor != '') && (
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
              </Fragment>
              )}
              {"gradient" == backgroundType && (
                <GradientBackgroundControl
                  {...this.props}
                  showHoverGradient={true}
                />
              )}
              {"image" == backgroundType && (
                <TabPanel
                  className="rbea-inspect-tabs rbea-inspect-tabs-col-2"
                  activeClass="active-tab"
                  tabs={[
                    {
                      name: "normal",
                      title: __("Normal", "responsive-block-editor-addons"),
                      className: "rbea-normal-tab",
                    },
                    {
                      name: "hover",
                      title: __("Hover", "responsive-block-editor-addons"),
                      className: "rbea-focus-tab",
                    },
                  ]}
                >
                   {(tabName) => {
                    let tabout;
                    if ("hover" == tabName.name) {
                      tabout = (
                        <Fragment>
                          <ImageHoverBackgroundSettings
                            showSomeImageOptions={true}
                            showMoreImageOptions={true}
                            {...this.props}
                          />
                        </Fragment>
                      )
                    }else {
                      tabout = (
                        <Fragment>
                          <ImageBackgroundControl
                            showSomeImageOptions={true}
                            showMoreImageOptions={true}
                            showOverlayOptions={true}
                            {...this.props}
                          />
                        </Fragment>
                      );
                    }
                    return <div>{tabout}</div>;
                  }}
                </TabPanel>
              )}
            </PanelBody>
            <PanelBody
              title={__("Spacing", "responsive-block-editor-addons")}
              initialOpen={false}
            >
              <ResponsiveNewPaddingControl
                attrNameTemplate="column%s"
                resetValues={columnPaddingResetValues}
                {...this.props}
              />
              <ResponsiveNewMarginControl
                attrNameTemplate="column%s"
                resetValues={columnMarginResetValues}
                {...this.props}
              />
            </PanelBody>
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

              <BoxShadowControlHelper
                setAttributes={setAttributes}
                boxShadowColor={{ value: hoverboxShadowColor }}
                boxShadowHOffset={{ value: hoverboxShadowHOffset }}
                boxShadowVOffset={{ value: hoverboxShadowVOffset }}
                boxShadowBlur={{ value: hoverboxShadowBlur }}
                boxShadowSpread={{ value: hoverboxShadowSpread }}
                boxShadowPosition={{ value: hoverboxShadowPosition }}
                label={__("Hover Box Shadow", "responsive-block-editor-addons")}
                attrNameTemplate="hover%s"
              />
            </PanelBody>
          </InspectorTab>
          <InspectorTab key={"advance"}></InspectorTab>
        </InspectorTabs>
      </InspectorControls>
    );
  }
}
