/**
 * Dependencies
 */
import InspectorTabs from "../../../components/InspectorTabs";
import InspectorTab from "../../../components/InspectorTab";
import TypographyHelperControl from "../../../settings-components/TypographySettings";
import ColorBackgroundControl from "../../../settings-components/BlockBackgroundSettings/ColorBackgroundSettings";
import GradientBackgroundControl from "../../../settings-components/BlockBackgroundSettings/GradientBackgroundSettings";
import BlockBorderHelperControl from "../../../settings-components/BlockBorderSettings";
import BoxShadowControl from "../../../utils/components/box-shadow";
import ResponsiveNewPaddingControl from "../../../settings-components/ResponsiveNewSpacingSettings/ResponsiveNewPaddingControl/index";
import ResponsiveNewMarginControl from "../../../settings-components/ResponsiveNewSpacingSettings/ResponsiveNewMarginControl/index";
import RbeaRangeControl from "../../../utils/components/rbea-range-control";
import RbeaColorControl from "../../../utils/components/rbea-color-control";
import RbeaTabRadioControl from "../../../utils/components/rbea-tab-radio-control";
import RbeaBackgroundTypeControl from "../../../utils/components/rbea-background-type-control";
import RbeaBlockBorderHelperControl from "../../../settings-components/RbeaBlockBorderSettings";
import { alignLeft, alignRight} from '@wordpress/icons';

// Setup the block
const { __ } = wp.i18n;
const { Component, Fragment } = wp.element;

// Import block components
const {
  InspectorControls,
  BlockAlignmentToolbar,
  InspectorAdvancedControls,
  ColorPalette,
  AlignmentToolbar
} = wp.blockEditor;

// Import Inspector components
const {
  PanelBody,
  BaseControl,
  TextControl,
  ToggleControl,
  SelectControl,
  RangeControl,
  TabPanel,
  Dashicon,
  Button
} = wp.components;

export default class Inspector extends Component {
  constructor(props) {
    super(...arguments);
  }

  render() {
    const {
      attributes: {
        block_id,
        tabsStyleD,
        tabsStyleM,
        tabsStyleT,
        tabBorderColor,
        tabBorderWidth,
        tabBackgroundColor,
        tabTitleColor,
        tabTitleActiveColor,
        tabTitleFontFamily,
        tabTitleFontSize,
        tabTitleFontSizeMobile,
        tabTitleFontSizeTablet,
        tabTitleFontWeight,
        tabTitleLineHeight,
        tabContentColor,
        tabContentFontFamily,
        tabContentFontSize,
        tabContentFontSizeMobile,
        tabContentFontSizeTablet,
        tabContentFontWeight,
        tabContentLineHeight,
        alignTabs,
        z_index,
        z_indexMobile,
        z_indexTablet,
        tabsTopPadding,
        tabsBottomPadding,
        tabsLeftPadding,
        tabsRightPadding,
        tabsTopPaddingTablet,
        tabsBottomPaddingTablet,
        tabsLeftPaddingTablet,
        tabsRightPaddingTablet,
        tabsTopPaddingMobile,
        tabsBottomPaddingMobile,
        tabsLeftPaddingMobile,
        tabsRightPaddingMobile,
        tabsTopMargin,
        tabsBottomMargin,
        tabsLeftMargin,
        tabsRightMargin,
        tabsTopMarginTablet,
        tabsBottomMarginTablet,
        tabsLeftMarginTablet,
        tabsRightMarginTablet,
        tabsTopMarginMobile,
        tabsBottomMarginMobile,
        tabsLeftMarginMobile,
        tabsRightMarginMobile,
        backgroundType,
        backgroundColor,
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
        backgroundHoverColor,
        opacity,
        animationName,
        animationDirection,
        animationRepeat,
        animationDuration,
        animationDelay,
        animationCurve,
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
        alignTabsVertical,
        hideWidget,
        hideWidgetTablet,
        hideWidgetMobile,
        tabsIsMarginControlConnected,
        tabsIsPaddingControlConnected,
        blockIsTypographyColorValueUpdated,
        tabTitleTypographyColor,
        tabTitleActiveTypographyColor,
        tabContentTypographyColor,
      },
      setAttributes,
      deviceType,
      className,
    } = this.props;

    const tabsMarginResetValues = {
      marginTop: 10,
      marginRight: 0,
      marginBottom: 0,
      marginLeft: 0,
      marginTabletTop: 10,
      marginTabletRight: 0,
      marginTabletBottom: 0,
      marginTabletLeft: 0,
      marginMobileTop: 10,
      marginMobileRight: 0,
      marginMobileBottom: 0,
      marginMobileLeft: 0,
    }

    const tabsPaddingResetValues = {
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

    const backgroundTypeOptions = [
      {
        value: "color",
        label: __("Classic", "responsive-block-editor-addons"),
      },
      {
        value: "gradient",
        label: __("Gradient", "responsive-block-editor-addons"),
      },
    ];

    const showAnimationDirections = (animation) => {
      let directionOptions =
        animation === "rotate"
          ? [
              { value: "Left", label: "DownLeft" },
              { value: "DownRight", label: "DownRight" },
              { value: "UpLeft", label: "UpLeft" },
              { value: "UpRight", label: "UpRight" },
            ]
          : animation === "slide" ||
            animation === "flip" ||
            animation === "fold"
          ? [
              { value: "Left", label: "Left" },
              { value: "Right", label: "Right" },
              { value: "Up", label: "Up" },
              { value: "Down", label: "Down" },
            ]
          : [
              { value: "Left", label: "Left" },
              { value: "Right", label: "Right" },
              { value: "Center", label: "Center" },
              { value: "Up", label: "Up" },
              { value: "Down", label: "Down" },
            ];
      return directionOptions;
    };

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
          tabTitleTypographyColor:          tabTitleColor !== undefined ? tabTitleColor : tabTitleTypographyColor,
          tabTitleActiveTypographyColor:         tabTitleActiveColor !== undefined ? tabTitleActiveColor : tabTitleActiveTypographyColor,
          tabContentTypographyColor:          tabContentColor !== undefined ? tabContentColor : tabContentTypographyColor,
        }
      )
      this.props.setAttributes({blockIsTypographyColorValueUpdated: true});
    }

    return (
      <InspectorControls key="controls">
        <InspectorTabs>
          <InspectorTab key={"content"}>
            <PanelBody>
              <Fragment>
                <RbeaTabRadioControl
                  label={__("Position", "responsive-block-editor-addons")}
                  value={tabsStyleD}
                  onChange={(value) => setAttributes({ tabsStyleD: value })}
                  beforeIcon="editor-textcolor"
                  options={[
                    {
                      value: "hstyle3",
                      label: __("Horizontal", "responsive-block-editor-addons"),
                    },
                    {
                      value: "vstyle8",
                      label: __("Vertical", "responsive-block-editor-addons"),
                    },
                  ]}
                />
              </Fragment>
              {tabsStyleD === 'hstyle3' && (<Fragment>
                <BaseControl>
                  <p>
                    {__("Alignment", "responsive-block-editor-addons")}
                  </p>
                  <div className="responsive-block-editor-addons-alignment">
                    <AlignmentToolbar
                      value={alignTabs}
                      onChange={(value) =>
                        setAttributes({
                          alignTabs: value,
                        })
                      }
                      controls={["left", "center", "right"]}
                      isCollapsed={false}
                    />
                  </div>
                </BaseControl>
              </Fragment>)}
              {tabsStyleD === 'vstyle8' && (<Fragment>
                <BaseControl>
                  <p>
                    {__("Alignment", "responsive-block-editor-addons")}
                  </p>
                  <div className="responsive-block-editor-addons-tabs-alignment-container">
                <Button
                  key={"left"}
                  icon={alignLeft}
                  label="Left"
                  onClick={() => setAttributes({ alignTabsVertical: "left" })}
                  aria-pressed={"left" === alignTabsVertical}
                  isPrimary={"left" === alignTabsVertical}
                />
                <Button
                  key={"right"}
                  icon={alignRight}
                  label="Right"
                  onClick={() => setAttributes({ alignTabsVertical: "right" })}
                  aria-pressed={"right" === alignTabsVertical}
                  isPrimary={"right" === alignTabsVertical}
                />
              </div>
              </BaseControl>
              </Fragment>)}
            </PanelBody>
          </InspectorTab>
          <InspectorTab key={"style"}>
            <PanelBody
              title={__("Tabs", "responsive-block-editor-addons")}
              initialOpen={false}
            >
              <RbeaRangeControl
                label={__("Border width", "responsive-block-editor-addons")}
                value={tabBorderWidth}
                min={0}
                max={500}
                onChange={(value) => setAttributes({ tabBorderWidth: value })}
              />
              <RbeaColorControl
                label = {__("Border Color", "responsive-block-editor-addons")}
                colorValue={tabBorderColor}
                onChange={(colorValue) => setAttributes({ tabBorderColor: colorValue })}
                resetColor={() => setAttributes({ tabBorderColor: "" })}
              />
              <RbeaColorControl
                label = {__("Background Color", "responsive-block-editor-addons")}
                colorValue={tabBackgroundColor}
                onChange={(colorValue) => setAttributes({ tabBackgroundColor: colorValue })}
                resetColor={() => setAttributes({ tabBackgroundColor: "" })}
              />
            </PanelBody>
            <PanelBody
              title={__("Background", "responsive-block-editor-addons")}
              initialOpen={false}
            >
              <RbeaBackgroundTypeControl
                label={__("Background Type", "responsive-block-editor-addons")}
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
                      let btn_color_tab;
                      if ("normal" === tabName.name) {
                        btn_color_tab = (
                          <Fragment>
                            <ColorBackgroundControl {...this.props} />
                          </Fragment>
                        );
                      } else if ("hover" === tabName.name) {
                        btn_color_tab = (
                          <Fragment>
                            <RbeaColorControl
                              label = {__("Hover Background Color", "responsive-block-editor-addons")}
                              colorValue={backgroundHoverColor}
                              onChange={(colorValue) => setAttributes({ backgroundHoverColor: colorValue })}
                              resetColor={() => setAttributes({ backgroundHoverColor: "" })}
                            />
                          </Fragment>
                        );
                      } else {
                        btn_color_tab = this.props.values.emptyColorControl;
                      }
                      return <div>{btn_color_tab}</div>;
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
            <PanelBody title={__("Box Shadow", "responsive-block-editor-addons")}
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
									boxShadowSpread={{ value: boxShadowSpread, label: __("Spread", "responsive-block-editor-addons") }}
									boxShadowPosition={{
										value: boxShadowPosition,
										label: __("Position", "responsive-block-editor-addons"),
									}}
								/>
							</PanelBody>
            <TypographyHelperControl
                title={__("Title Typography", "responsive-block-editor-addons")}
                attrNameTemplate="tabTitle%s"
                values={{
                  family: tabTitleFontFamily,
                  size: tabTitleFontSize,
                  sizeMobile: tabTitleFontSizeMobile,
                  sizeTablet: tabTitleFontSizeTablet,
                  weight: tabTitleFontWeight,
                  height: tabTitleLineHeight,
                  color: tabTitleTypographyColor,
                  activeColor: tabTitleActiveTypographyColor,
                }}
                showLetterSpacing={false}
                showTextTransform={false}
                showActiveColorControl={true}
                showColorControl={true}
                setAttributes={setAttributes}
                {...this.props}
              />
              <TypographyHelperControl
                title={__("Content Typography", "responsive-block-editor-addons")}
                attrNameTemplate="tabContent%s"
                values={{
                  family: tabContentFontFamily,
                  size: tabContentFontSize,
                  sizeMobile: tabContentFontSizeMobile,
                  sizeTablet: tabContentFontSizeTablet,
                  weight: tabContentFontWeight,
                  height: tabContentLineHeight,
                  color: tabContentTypographyColor,
                }}
                showLetterSpacing={false}
                showTextTransform={false}
                showColorControl={true}
                setAttributes={setAttributes}
                {...this.props}
              />
            <PanelBody
              title={__("Spacing", "responsive-block-editor-addons")}
              initialOpen={false}
            >
              <ResponsiveNewPaddingControl
                attrNameTemplate="tabs%s"
                resetValues={tabsPaddingResetValues}
                {...this.props}
              />
              <ResponsiveNewMarginControl
                attrNameTemplate="tabs%s"
                resetValues={tabsMarginResetValues}
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
              title={__("Motion Effects", "responsive-block-editor-addons")}
              initialOpen={false}
            >
              <PanelBody
                title={__(
                  "Entrance Animation",
                  "responsive-block-editor-addons"
                )}
                initialOpen={false}
              >
                <SelectControl
                  label={__("Animation", "responsive-block-editor-addons")}
                  value={animationName}
                  onChange={(value) =>
                    setAttributes({ animationName: value })
                  }
                  options={[
                    { value: "none", label: __("None", "responsive-block-editor-addons") },
                    { value: "fade", label: __("Fade", "responsive-block-editor-addons") },
                    { value: "slide", label: __("Slide", "responsive-block-editor-addons") },
                    { value: "bounce", label: __("Bounce", "responsive-block-editor-addons") },
                    { value: "zoom", label: __("Zoom", "responsive-block-editor-addons") },
                    { value: "flip", label: __("Flip", "responsive-block-editor-addons") },
                    { value: "fold", label: __("Fold", "responsive-block-editor-addons") },
                    { value: "rotate", label: __("Rotate", "responsive-block-editor-addons") },
                  ]}
                />
                {animationName !== "none" && (
                  <Fragment>
                    <RbeaTabRadioControl
                      label={__("Direction", "responsive-block-editor-addons")}
                      value={animationDirection}
                      onChange={(value) =>
                        setAttributes({ animationDirection: value })
                      }
                      options={showAnimationDirections(animationName)}
                    />
                    <RbeaTabRadioControl
                      label={__("Repeat", "responsive-block-editor-addons")}
                      value={animationRepeat}
                      onChange={(value) =>
                        setAttributes({ animationRepeat: value })
                      }
                      options={[
                        { value: "once", label: __("Once", "responsive-block-editor-addons") },
                        { value: "loop", label: __("Loop", "responsive-block-editor-addons") },
                      ]}
                    />
                    <RbeaRangeControl
                      label={__("Duration", "responsive-block-editor-addons")}
                      value={animationDuration}
                      min={0}
                      max={2000}
                      allowReset={true}
                      onChange={(value) =>
                        setAttributes({ animationDuration: value })
                      }
                    />
                    <RbeaRangeControl
                      label={__("Delay", "responsive-block-editor-addons")}
                      value={animationDelay}
                      min={0}
                      max={3000}
                      allowReset={true}
                      onChange={(value) =>
                        setAttributes({ animationDelay: value })
                      }
                    />
                    <SelectControl
                      label={__("Curve", "responsive-block-editor-addons")}
                      value={animationCurve}
                      onChange={(value) =>
                        setAttributes({ animationCurve: value })
                      }
                      options={[
                        { value: "ease-in-out", label: "ease-in-out" },
                        { value: "ease", label: "ease" },
                        { value: "ease-in", label: "ease-in" },
                        { value: "ease-out", label: "ease-out" },
                        { value: "linear", label: "linear" },
                      ]}
                    />
                  </Fragment>
                )}
              </PanelBody>
            </PanelBody>
            {/* <InspectorAdvancedControls>
              <RbeaRangeControl
                label={__("Z-Index", "responsive-block-editor-addons")}
                value={tabsZindex}
                min={-10}
                max={500}
                allowReset={true}
                onChange={(value) => setAttributes({ tabsZindex: value })}
              />
            </InspectorAdvancedControls> */}
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
