/**
 * Inspector Controls
 */

// Setup the block
const { __ } = wp.i18n;
const { Component, Fragment } = wp.element;
import fontOptions from "../../../utils/googlefonts";
import { loadGoogleFont } from "../../../utils/font";
import ResponsiveSpacingControl from "../../../settings-components/ResponsiveSpacingSettings";
import TypographyHelperControl from "../../../settings-components/TypographySettings";
import BlockBorderHelperControl from "../../../settings-components/BlockBorderSettings";
import BoxShadowControl from "../../../utils/components/box-shadow";

import InspectorTab from "../../../components/InspectorTab"
import InspectorTabs from "../../../components/InspectorTabs"
import ResponsiveNewPaddingControl from "../../../settings-components/ResponsiveNewSpacingSettings/ResponsiveNewPaddingControl/index";
import ResponsiveNewMarginControl from "../../../settings-components/ResponsiveNewSpacingSettings/ResponsiveNewMarginControl/index";
import RbeaRangeControl from "../../../utils/components/rbea-range-control";
import RbeaColorControl from "../../../utils/components/rbea-color-control";
import RbeaTabRadioControl from "../../../utils/components/rbea-tab-radio-control";
import RbeaBlockBorderHelperControl from "../../../settings-components/RbeaBlockBorderSettings";
import RbeaWidthRangeControl from "../../../utils/components/rbea-width-range-control";

// Import block components
const {
  InspectorControls,
  PanelColorSettings,
  ColorPalette,
  AlignmentToolbar,
} = wp.blockEditor;

// Import Inspector components
const {
  PanelBody,
  RangeControl,
  SelectControl,
  ButtonGroup,
  Button,
  ToggleControl,
  TabPanel,
  Dashicon,
  BaseControl,
	TextControl,
} = wp.components;

/**
 * Create an Inspector Controls wrapper Component
 */
export default class Inspector extends Component {
  constructor(props) {
    super(...arguments);
  }

  render() {
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

    // Setup the attributes
    const {
      attributes: {
        //General
        layout,
        placeholder,
        inputWidth,
        inputWidthType,
        //Button
        buttonType,
        buttonText,
        buttonWidth,
        buttonBackgroundColor,
        buttonBackgroundHoverColor,
        buttonTextColor,
        buttonTextHoverColor,
        //Button Text Typography
        buttonFontFamily,
        buttonFontSize,
        buttonFontSizeMobile,
        buttonFontSizeTablet,
        buttonFontWeight,
        buttonLineHeight,
        //Input Box
        inputTextColor,
        inputBackgroundColor,
        //Border
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
        blockBorderStyle,
        blockBorderWidth,
        //Padding
        inputTopPadding,
        inputRightPadding,
        inputBottomPadding,
        inputLeftPadding,
        inputTopPaddingMobile,
        inputRightPaddingMobile,
        inputBottomPaddingMobile,
        inputLeftPaddingMobile,
        inputTopPaddingTablet,
        inputRightPaddingTablet,
        inputBottomPaddingTablet,
        inputLeftPaddingTablet,
        //Input Typography
        inputFontFamily,
        inputFontSize,
        inputFontSizeMobile,
        inputFontSizeTablet,
        inputFontWeight,
        inputLineHeight,
        //Box Shadow Control
        boxShadowColor,
        boxShadowHOffset,
        boxShadowVOffset,
        boxShadowBlur,
        boxShadowSpread,
        boxShadowPosition,
        //Icon (Minimal Layout)
        iconSize,
        iconColor,
        iconHoverColor,

        hideWidget,
        hideWidgetTablet,
        hideWidgetMobile,

        //Z Index
        z_index,
        z_indexMobile,
        z_indexTablet,
        inputIsPaddingControlConnected,
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
        blockIsTypographyColorValueUpdated,
        inputTypographyColor,
        buttonTypographyColor,
        widthType,
        widthTypeValueUpdated,
      },
      setAttributes,
    } = this.props;

    const inputPaddingResetValues = {
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
          inputTypographyColor:          inputTextColor !== undefined ? inputTextColor : inputTypographyColor,
        }
      )
      this.props.setAttributes({blockIsTypographyColorValueUpdated: true});
    }

    // Border Color Component For Color&Hover Typography Control
		const typographyColorControl = (
      <RbeaColorControl
        label = {__("Text Color", "responsive-block-editor-addons")}
        colorValue={buttonTextColor}
        onChange={(colorValue) => setAttributes({ buttonTextColor: colorValue })}
        resetColor={() => setAttributes({ buttonTextColor: "" })}
      />
		);

		const typographyColorControlHover = (
			<RbeaColorControl
        label = {__("Text Hover Color", "responsive-block-editor-addons")}
        colorValue={buttonTextHoverColor}
        onChange={(colorValue) => setAttributes({ buttonTextHoverColor: colorValue })}
        resetColor={() => setAttributes({ buttonTextHoverColor: "" })}
      />
		);

    const emptyColorControl = (
			<div className="responsive-block-editor-addons-empty-color-control"></div>
		);

    //widthType
    if (!widthTypeValueUpdated) {
      this.props.setAttributes(
        {
          widthType: inputWidthType !== undefined ? inputWidthType : widthType,
        }
      )
      this.props.setAttributes({ widthTypeValueUpdated: true });
    }

    return (
      <InspectorControls key="inspector">
        <InspectorTabs>
          <InspectorTab key={'content'}>
            <PanelBody>
              <RbeaTabRadioControl
                label={__("Layout", "responsive-block-editor-addons")}
                value={layout}
                options={[
                  { value: "classic", label: __("Classic", "responsive-block-editor-addons") },
                  { value: "minimal", label: __("Minimal", "responsive-block-editor-addons") },
                ]}
                onChange={(value) => setAttributes({layout: value})}
              />
              <TextControl
								label={__("Placeholder", "responsive-block-editor-addons")}
								value={placeholder}
								onChange={(value) => setAttributes({placeholder: value})}
							/>
              <RbeaWidthRangeControl
                label={__("Input Width", "responsive-block-editor-addons")}
                value={inputWidth}
                onChange={(value) =>
                  setAttributes({ inputWidth: value })
                }
                min={0}
                max={"%" == widthType ? 100 : 500}
                beforeIcon=""
                allowReset
                initialPosition={0}
                resetFallbackValue={100}
                widthType={widthType}
                extraControls={true}
                setAttributes={setAttributes}
              />
            </PanelBody>
          </InspectorTab>
          <InspectorTab key={'style'}>
              <PanelBody
                title={__("Input Box", "responsive-block-editor-addons")}
                initialOpen={false}
              >
                <RbeaColorControl
                  label = {__("Background Color", "responsive-block-editor-addons")}
                  colorValue={inputBackgroundColor}
                  onChange={(colorValue) => setAttributes({ inputBackgroundColor: colorValue })}
                  resetColor={() => setAttributes({ inputBackgroundColor: "" })}
                />
                <PanelBody
                  title={__("Border", "responsive-block-editor-addons")}
                  initialOpen={false}
                >
                  <RbeaBlockBorderHelperControl
                    attrNameTemplate="block%s"
                    values={{ radius: blockBorderRadius, style: blockBorderStyle, width: blockBorderWidth, color: blockBorderColor }}
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
                </PanelBody>
                <PanelBody
                  title={__("Padding", "responsive-block-editor-addons")}
                  initialOpen={false}
                >
                  <ResponsiveNewPaddingControl
                    attrNameTemplate="input%s"
                    resetValues={inputPaddingResetValues}
                    {...this.props}
                  />
                </PanelBody>
              </PanelBody>
              <TypographyHelperControl
                  title={__("Input Typography", "responsive-block-editor-addons")}
                  attrNameTemplate="input%s"
                  values = {{family: inputFontFamily, size: inputFontSize, sizeMobile: inputFontSizeMobile, sizeTablet: inputFontSizeTablet, weight: inputFontWeight, height: inputLineHeight, color: inputTypographyColor,}}
                  showLetterSpacing = { false }
                  showTextTransform = { false }
                  showColorControl={true}
                  setAttributes={ setAttributes }
                  {...this.props}
              />
              {
                "minimal" === layout && (
                  <PanelBody
                  title={__("Icon", "responsive-block-editor-addons")}
                  initialOpen={false}
                >
                  <RbeaRangeControl
                    label={__("Icon size", "responsive-block-editor-addons")}
                    value={iconSize}
                    onChange={(value) => setAttributes({iconSize: value})}
                    min={1}
                    max={500}
                  />
                  <RbeaColorControl
                    label = {__("Color", "responsive-block-editor-addons")}
                    colorValue={iconColor}
                    onChange={(colorValue) => setAttributes({ iconColor: colorValue })}
                    resetColor={() => setAttributes({ iconColor: "" })}
                  />
                </PanelBody>
                )
              }
              {
                "classic" === layout && (
                    <Fragment>
                      <PanelBody
                        title={__("Button", "responsive-block-editor-addons")}
                        initialOpen={false}
                      >
                        <RbeaTabRadioControl
                          label={__("Type", "responsive-block-editor-addons")}
                          value={buttonType}
                          options={[
                            {value: "button", label: __("Button", "responsive-block-editor-addons")},
                            {value: "text", label: __("Text", "responsive-block-editor-addons")}
                          ]}
                          onChange={(value) => setAttributes({buttonType: value})}
                        />
                        {
                          "text" === buttonType && (
                            <Fragment>
                              <TextControl
                                label={__("Text", "responsive-block-editor-addons")}
                                value={buttonText}
                                onChange={(value) => setAttributes({buttonText: value})}
                              />
                            </Fragment>
                          )
                        }
                        <RbeaRangeControl
                          label={__("Width", "responsive-block-editor-addons")}
                          value={buttonWidth}
                          onChange={(value) => setAttributes({buttonWidth: value})}
                          min={0}
                          max={500}
                        />
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
                            let color_tab;
                            if ("normal" === tabName.name) {
                              color_tab = (
                                <RbeaColorControl
                                  label = {__("Background Color", "responsive-block-editor-addons")}
                                  colorValue={buttonBackgroundColor}
                                  onChange={(colorValue) => setAttributes({ buttonBackgroundColor: colorValue })}
                                  resetColor={() => setAttributes({ buttonBackgroundColor: "" })}
                                />
                              );
                            } else if("hover" === tabName.name) {
                              color_tab = (
                                <RbeaColorControl
                                  label = {__("Background Hover Color", "responsive-block-editor-addons")}
                                  colorValue={buttonBackgroundHoverColor}
                                  onChange={(colorValue) => setAttributes({ buttonBackgroundHoverColor: colorValue })}
                                  resetColor={() => setAttributes({ buttonBackgroundHoverColor: "" })}
                                />
                              );
                            } else {
                              color_tab = emptyColorControl;
                            }
                            return <div>{color_tab}</div>;
                          }}
                        </TabPanel>
                      </PanelBody>
                      {
                        "button" == buttonType && (
                          <PanelBody
                            title={__("Icon", "responsive-block-editor-addons")}
                            initialOpen={false}
                          >
                            <RbeaRangeControl
                              label={__("Icon Size", "responsive-block-editor-addons")}
                              value={iconSize}
                              onChange={(value) => setAttributes({iconSize: value})}
                              min={1}
                              max={500}
                            />
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
                                let color_tab;
                                if ("normal" === tabName.name) {
                                  color_tab = (
                                    <RbeaColorControl
                                      label = {__("Icon Color", "responsive-block-editor-addons")}
                                      colorValue={iconColor}
                                      onChange={(colorValue) => setAttributes({ iconColor: colorValue })}
                                      resetColor={() => setAttributes({ iconColor: "" })}
                                    />
                                  );
                                } else if("hover" === tabName.name) {
                                  color_tab = (
                                    <RbeaColorControl
                                      label = {__("Icon Color Hover", "responsive-block-editor-addons")}
                                      colorValue={iconHoverColor}
                                      onChange={(colorValue) => setAttributes({ iconHoverColor: colorValue })}
                                      resetColor={() => setAttributes({ iconHoverColor: "" })}
                                    />
                                  );
                                } else {
                                  color_tab = emptyColorControl;
                                }
                                return <div>{color_tab}</div>;
                              }}
                            </TabPanel>
                          </PanelBody>
                        )
                      }
                    </Fragment>
                )
              }
              {("classic" === layout && "text" === buttonType) && (
                <TypographyHelperControl
                  title={__("Text Typography", "responsive-block-editor-addons")}
                  attrNameTemplate="button%s"
                  values = {{family: buttonFontFamily, size: buttonFontSize, sizeMobile: buttonFontSizeMobile, sizeTablet: buttonFontSizeTablet, weight: buttonFontWeight, height: buttonLineHeight,
                    typographyColorControl: typographyColorControl,
										typographyColorControlHover: typographyColorControlHover,
										emptyColorControl: emptyColorControl,
                  }}
                  showLetterSpacing = { false }
                  showTextTransform = { false }
                  showColorWithHoverControlTab={true}
                  setAttributes={ setAttributes }
                  {...this.props}
                />
              )}
              <PanelBody title={__("Spacing", "responsive-block-editor-addons")} initialOpen={false}>
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
              </PanelBody>
          </InspectorTab>
          <InspectorTab key={'advance'}>
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
