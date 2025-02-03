/**
 * Inspector Controls
 */

// Setup the block
const { __ } = wp.i18n;
const { Component, Fragment } = wp.element;

import InspectorTab from "../../../components/InspectorTab";
import InspectorTabs from "../../../components/InspectorTabs";
import TypographyHelperControl from "../../../settings-components/TypographySettings";
import BoxShadowControl from "../../../utils/components/box-shadow";
import BlockBorderHelperControl from "../../../settings-components/BlockBorderSettings";
import ColorBackgroundControl from "../../../settings-components/BlockBackgroundSettings/ColorBackgroundSettings";
import ResponsiveNewPaddingControl from "../../../settings-components/ResponsiveNewSpacingSettings/ResponsiveNewPaddingControl/index";
import ResponsiveNewMarginControl from "../../../settings-components/ResponsiveNewSpacingSettings/ResponsiveNewMarginControl/index";
import RbeaRangeControl from "../../../utils/components/rbea-range-control";
import RbeaColorControl from "../../../utils/components/rbea-color-control";
import RbeaTabRadioControl from "../../../utils/components/rbea-tab-radio-control";
import RbeaBlockBorderHelperControl from "../../../settings-components/RbeaBlockBorderSettings";

// Import block components
const {
  InspectorControls,
  PanelColorSettings,
  ColorPalette,
  AlignmentToolbar,
  BlockAlignmentToolbar,
  InspectorAdvancedControls,
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
} = wp.components;

/**
 * Create an Inspector Controls wrapper Component
 */
export default class Inspector extends Component {
  constructor(props) {
    super(...arguments);
  }

  render() {
    // Setup the attributes
    const {
      attributes: {
        iconShape,
        iconColorType,
        iconPrimaryColor,
        iconSecondaryColor,
        iconSize,
        iconsAlign,
        iconColumns,
        iconColumnsGap,
        iconRowsGap,
        iconContainerSize,
        iconContainerHeight,
        socialZindex,
        blockTopPadding,
        blockBottomPadding,
        blockLeftPadding,
        blockRightPadding,
        blockTopPaddingTablet,
        blockBottomPaddingTablet,
        blockLeftPaddingTablet,
        blockRightPaddingTablet,
        blockTopPaddingMobile,
        blockBottomPaddingMobile,
        blockLeftPaddingMobile,
        blockRightPaddingMobile,
        blockTopMargin,
        blockBottomMargin,
        blockLeftMargin,
        blockRightMargin,
        blockTopMarginMobile,
        blockBottomMarginMobile,
        blockLeftMarginMobile,
        blockRightMarginMobile,
        blockTopMarginTablet,
        blockBottomMarginTablet,
        blockLeftMarginTablet,
        blockRightMarginTablet,
        labelFontFamily,
        labelFontSize,
        labelFontSizeMobile,
        labelFontSizeTablet,
        labelFontWeight,
        labelLineHeight,
        iconLabelGap,
        labelColor,
        viewOption,
        skin,
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
        backgroundColor,
        opacity,
        iconColumnsMobile,
        iconColumnsTablet,
        currentColumnTab,
        hideWidget,
        hideWidgetTablet,
        hideWidgetMobile,
        z_index,
        z_indexMobile,
        z_indexTablet,
        blockIsMarginControlConnected,
        blockIsPaddingControlConnected,
        blockIsTypographyColorValueUpdated,
        labelTypographyColor,

        iconContainerTopPadding,
        iconContainerBottomPadding,
        iconContainerLeftPadding,
        iconContainerRightPadding,
        iconContainerTopPaddingTablet,
        iconContainerBottomPaddingTablet,
        iconContainerRightPaddingTablet,
        iconContainerLeftPaddingTablet,
        iconContainerTopPaddingMobile,
        iconContainerBottomPaddingMobile,
        iconContainerLeftPaddingMobile,
        iconContainerRightPaddingMobile,
        isCtaButtonPaddingMarginValueUpdated,
      },
      setAttributes,
    } = this.props;

    const blockMarginResetValues = {
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

    const blockPaddingResetValues = {
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

    const iconContainerPaddingResetValues = {
      paddingTop: 5,
      paddingRight: 5,
      paddingBottom: 5,
      paddingLeft: 5,
      paddingTabletTop: 5,
      paddingTabletRight: 5,
      paddingTabletBottom: 5,
      paddingTabletLeft: 5,
      paddingMobileTop: 5,
      paddingMobileRight: 5,
      paddingMobileBottom: 5,
      paddingMobileLeft: 5,
    }

    const iconColumnsOptions = [
      {
        value: "auto",
        label: __("Auto", "responsive-block-editor-addons"),
      },
      {
        value: "1",
        label: __("1", "responsive-block-editor-addons"),
      },
      {
        value: "2",
        label: __("2", "responsive-block-editor-addons"),
      },
      {
        value: "3",
        label: __("3", "responsive-block-editor-addons"),
      },
      {
        value: "4",
        label: __("4", "responsive-block-editor-addons"),
      },
      {
        value: "5",
        label: __("5", "responsive-block-editor-addons"),
      },
      {
        value: "6",
        label: __("6", "responsive-block-editor-addons"),
      },
    ];

    const viewOptions = [
      {
        value: "icontext",
        label: __("Icon & Text", "responsive-block-editor-addons"),
      },
      {
        value: "icon",
        label: __("Icon", "responsive-block-editor-addons"),
      },
      {
        value: "text",
        label: __("Text", "responsive-block-editor-addons"),
      },
    ];

    const iconShapeOptions = [
      {
        value: "square",
        label: __("Square", "responsive-block-editor-addons"),
      },
      {
        value: "rounded",
        label: __("Rounded", "responsive-block-editor-addons"),
      },
      {
        value: "circle",
        label: __("Circle", "responsive-block-editor-addons"),
      },
    ];

    const skinOptions = [
      // {
      //   value: "default",
      //   label: __("Default", "responsive-block-editor-addons"),
      // },
      {
        value: "flat",
        label: __("Flat", "responsive-block-editor-addons"),
      },
      {
        value: "framed",
        label: __("Framed", "responsive-block-editor-addons"),
      },
      {
        value: "minimal",
        label: __("Minimal", "responsive-block-editor-addons"),
      },
      {
        value: "boxed",
        label: __("Boxed Icon", "responsive-block-editor-addons"),
      },
    ];

    const handleSkinChange = (value) => {
      if (value === "default") {
        setAttributes({
          skin: value,
          iconColorType: "official",
          iconContainerSize: 0,
          iconContainerHeight: 0,
        });
      } else if (value === "flat") {
        setAttributes({
          skin: value,
          iconColorType: "custom",
          iconSecondaryColor: "#e4f3ff",
          iconContainerSize: 5,
          iconContainerHeight: 5,
        });
      } else if (value === "framed") {
        setAttributes({
          skin: value,
          iconColorType: "custom",
          iconSecondaryColor: "#0066cc",
          iconContainerSize: 5,
          iconContainerHeight: 5,
          viewOption: "icontext",
        });
      } else if (value === "boxed" || value === "minimal") {
        setAttributes({
          skin: value,
          iconColorType: "custom",
          iconSecondaryColor: "#e4f3ff",
          iconContainerSize: 0,
          iconContainerHeight: 0,
          viewOption: "icontext",
        });
      }
    };

    const handleColorTypeChange = (value) => {
      if (value === "official") {
        setAttributes({ iconColorType: value, iconContainerSize: 103 });
      } else if (value === "custom") {
        setAttributes({ iconColorType: value, iconContainerSize: 120 });
      }
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

    // backward compatibility for icon container padding control

    if (!isCtaButtonPaddingMarginValueUpdated) {
      this.props.setAttributes(
        {
          iconContainerTopPadding:          iconContainerHeight !== undefined ? iconContainerHeight : iconContainerTopPadding,
          iconContainerBottomPadding:       iconContainerHeight !== undefined ? iconContainerHeight : iconContainerBottomPadding,
          iconContainerLeftPadding:         iconContainerSize !== undefined ? iconContainerSize : iconContainerLeftPadding,
          iconContainerRightPadding:        iconContainerSize !== undefined ? iconContainerSize : iconContainerRightPadding,
          iconContainerTopPaddingTablet:    iconContainerHeight !== undefined ? iconContainerHeight : iconContainerTopPaddingTablet,
          iconContainerBottomPaddingTablet: iconContainerHeight !== undefined ? iconContainerHeight : iconContainerBottomPaddingTablet,
          iconContainerRightPaddingTablet:  iconContainerSize !== undefined ? iconContainerSize : iconContainerRightPaddingTablet,
          iconContainerLeftPaddingTablet:   iconContainerSize !== undefined ? iconContainerSize : iconContainerLeftPaddingTablet,
          iconContainerTopPaddingMobile:    iconContainerHeight !== undefined ? iconContainerHeight : iconContainerTopPaddingMobile,
          iconContainerBottomPaddingMobile: iconContainerHeight !== undefined ? iconContainerHeight : iconContainerBottomPaddingMobile,
          iconContainerLeftPaddingMobile:   iconContainerSize !== undefined ? iconContainerSize : iconContainerLeftPaddingMobile,
          iconContainerRightPaddingMobile:  iconContainerSize !== undefined ? iconContainerSize : iconContainerRightPaddingMobile,
        }
      )
      this.props.setAttributes({isCtaButtonPaddingMarginValueUpdated: true});
    }

    // backward compatibility for typography color control
    if (!blockIsTypographyColorValueUpdated) {
      this.props.setAttributes(
        {
          labelTypographyColor:          labelColor !== undefined ? labelColor : labelTypographyColor,
        }
      )
      this.props.setAttributes({blockIsTypographyColorValueUpdated: true});
    }


    return (
      <InspectorControls key="inspector">
        <InspectorTabs>
          <InspectorTab key={"content"}>
            <PanelBody>
              <div className="responsive-block-editor-addons-tab-select-container">
                <RbeaTabRadioControl
                  label={__("Skin", "responsive-block-editor-addons")}
                  value={skin}
                  onChange={(value) => handleSkinChange(value)}
                  options={skinOptions}
                  defaultValue={"default"}
                  allowReset={true}
                />
              </div>
              {skin !== "default" && skin !== "minimal" && (
                <RbeaTabRadioControl
                  label={__("Shape", "responsive-block-editor-addons")}
                  value={iconShape}
                  onChange={(value) => setAttributes({ iconShape: value })}
                  options={iconShapeOptions}
                />
              )}
              <div className = "rbea-tab-selector-label-wrapper">
              <label>{__("Columns", "responsive-block-editor-addons")}</label>
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
                      setAttributes({currentColumnTab: tab.name})
                    );
                  } else if ("tablet" === tab.name) {
                    tabout = (
                      setAttributes({currentColumnTab: tab.name})
                    );
                  } else {
                    tabout = (
                      setAttributes({currentColumnTab: tab.name})
                    );
                  }

                  return <div>{tabout}</div>;
                }}
              </TabPanel>
              </div>
              {currentColumnTab === 'mobile' && <Fragment>
                  <RbeaTabRadioControl
                    label={__(
                      "",
                      "responsive-block-editor-addons"
                    )}
                    value={iconColumnsMobile}
                    onChange={(value) =>
                      setAttributes({ iconColumnsMobile: value })
                    }
                    options={iconColumnsOptions}
                  />
                </Fragment>
              }
              {currentColumnTab === 'tablet' && <Fragment>
                  <RbeaTabRadioControl
                    label={__(
                      "",
                      "responsive-block-editor-addons"
                    )}
                    value={iconColumnsTablet}
                    onChange={(value) =>
                      setAttributes({ iconColumnsTablet: value })
                    }
                    options={iconColumnsOptions}
                  />
                </Fragment>
              }
              {currentColumnTab === 'desktop' && <Fragment>
                  <RbeaTabRadioControl
                    label={__(
                      "",
                      "responsive-block-editor-addons"
                    )}
                    value={iconColumns}
                    onChange={(value) =>
                      setAttributes({ iconColumns: value })
                    }
                    options={iconColumnsOptions}
                  />
                </Fragment>
              }
              {skin !== "boxed" && skin !== "minimal" && (
                <RbeaTabRadioControl
                  label={__("View", "responsive-block-editor-addons")}
                  value={viewOption}
                  onChange={(value) => setAttributes({ viewOption: value })}
                  options={viewOptions}
                />
              )}
              <Fragment>
                <BaseControl>
                  <p>
                    {__("Alignment", "responsive-block-editor-addons")}
                  </p>
                  <div className="responsive-block-editor-addons-alignment">
                    <AlignmentToolbar
                      value={iconsAlign}
                      onChange={(value) =>
                        setAttributes({
                          iconsAlign: value,
                        })
                      }
                      controls={["left", "center", "right"]}
                      isCollapsed={false}
                    />
                  </div>
                </BaseControl>
              </Fragment>
            </PanelBody>
          </InspectorTab>
          <InspectorTab key={"style"}>
            <PanelBody initialOpen={true}>
              <RbeaRangeControl
                label={__("Columns Gap", "responsive-block-editor-addons")}
                value={iconColumnsGap}
                onChange={(value) => setAttributes({ iconColumnsGap: value })}
                min={0}
                max={100}
                allowReset
              />
              <RbeaRangeControl
                label={__("Rows Gap", "responsive-block-editor-addons")}
                value={iconRowsGap}
                onChange={(value) => setAttributes({ iconRowsGap: value })}
                min={0}
                max={100}
                allowReset
              />
              {(viewOption === "icontext" || viewOption === 'text') && (
                <RbeaRangeControl
                  label={viewOption === "icontext" ? __("Icon Label Gap", "responsive-block-editor-addons") : __("Label Gap", "responsive-block-editor-addons")}
                  value={iconLabelGap}
                  onChange={(value) => setAttributes({ iconLabelGap: value })}
                  min={0}
                  max={100}
                  allowReset
                />
              )}
              {viewOption !== "text" && (
                <RbeaRangeControl
                  label={__("Icon Size", "responsive-block-editor-addons")}
                  value={iconSize}
                  onChange={(value) => setAttributes({ iconSize: value })}
                  min={0}
                  max={100}
                  allowReset
                />
              )}
            </PanelBody>
            <PanelBody
              title={__("Background", "responsive-block-editor-addons")}
              initialOpen={false}
            >
              <Fragment>
                <ColorBackgroundControl {...this.props} />
              </Fragment>
              {backgroundColor && (
                  <RbeaRangeControl
                    label={__("Opacity", "responsive-block-editor-addons")}
                    value={opacity}
                    onChange={(value) =>
                      setAttributes({
                        opacity: value !== undefined ? value : 100,
                      })
                    }
                    min={0}
                    max={100}
                    allowReset
                  />
              )}
            </PanelBody>
            <PanelBody
              title={__("Border Settings", "responsive-block-editor-addons")}
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
              title={__("Padding", "responsive-block-editor-addons")}
              initialOpen={false}
            >
              <ResponsiveNewPaddingControl
                attrNameTemplate="iconContainer%s"
                resetValues={iconContainerPaddingResetValues}
                {...this.props}
              />
            </PanelBody>
            <PanelBody
              title={__("Color", "responsive-block-editor-addons")}
              initialOpen={false}
            >
              <RbeaTabRadioControl
                label={__("Color", "responsive-block-editor-addons")}
                value={iconColorType}
                onChange={(value) => handleColorTypeChange(value)}
                options={[
                  {
                    value: "official",
                    label: __("Official", "responsive-block-editor-addons"),
                  },
                  {
                    value: "custom",
                    label: __("Custom", "responsive-block-editor-addons"),
                  },
                ]}
              />
              {iconColorType === "custom" && (
                <Fragment>
                  <RbeaColorControl
                    label = {__("Primary", "responsive-block-editor-addons")}
                    colorValue={iconPrimaryColor}
                    onChange={(colorValue) => setAttributes({ iconPrimaryColor: colorValue })}
                    resetColor={() => setAttributes({ iconPrimaryColor: "" })}
                  />
                  <RbeaColorControl
                    label = {__("Secondary", "responsive-block-editor-addons")}
                    colorValue={iconSecondaryColor}
                    onChange={(colorValue) => setAttributes({ iconSecondaryColor: colorValue })}
                    resetColor={() => setAttributes({ iconSecondaryColor: "" })}
                  />
                </Fragment>
              )}
            </PanelBody>
            <TypographyHelperControl
              title={__("Label Typography", "responsive-block-editor-addons")}
              attrNameTemplate="label%s"
              values={{
                family: labelFontFamily,
                size: labelFontSize,
                sizeMobile: labelFontSizeMobile,
                sizeTablet: labelFontSizeTablet,
                weight: labelFontWeight,
                height: labelLineHeight,
                color: labelTypographyColor,
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
