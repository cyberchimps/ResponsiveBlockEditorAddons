/**
 * Inspector Controls
 */
import TypographyHelperControl from "../../../settings-components/TypographySettings";
import ResponsiveSpacingControl from "../../../settings-components/ResponsiveSpacingSettings";
import ResponsiveNewPaddingControl from "../../../settings-components/ResponsiveNewSpacingSettings/ResponsiveNewPaddingControl/index";
import ResponsiveNewMarginControl from "../../../settings-components/ResponsiveNewSpacingSettings/ResponsiveNewMarginControl/index";

// Setup the block
const { __ } = wp.i18n;
const { Component, Fragment } = wp.element;
import fontOptions from "../../../utils/googlefonts";
import { loadGoogleFont } from "../../../utils/font";
import InspectorTab from "../../../components/InspectorTab";
import InspectorTabs from "../../../components/InspectorTabs";
import RbeaRangeControl from "../../../utils/components/rbea-range-control";
import RbeaColorControl from "../../../utils/components/rbea-color-control";
import RbeaTabRadioControl from "../../../utils/components/rbea-tab-radio-control";
import RbeaSeparatorStyleTabControl from "../../../utils/components/rbea-separator-style-tab-control";
import separatorPositionIcons from "../../../utils/components/rbea-separator-style-tab-control/separator-position-icons";
import RbeaWidthRangeControl from "../../../utils/components/rbea-width-range-control";

// Import block components
const { InspectorControls, AlignmentToolbar, ColorPalette, PanelColorSettings } = wp.blockEditor

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

  /*
   * Heading Tag Change
   */
  onTagChange(value) {
    const { setAttributes } = this.props;

    let level_val = parseInt(value.replace("h", ""));

    setAttributes({ level: level_val });
    setAttributes({ headingTag: value });
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

    // Text Decoration Options
    const textDecorationOptions = [
      {
        value: "none",
        label: __("Default", "responsive-block-editor-addons"),
      },
      {
        value: "underline",
        label: __("Underline", "responsive-block-editor-addons"),
      },
      {
        value: "overline",
        label: __("Overline", "responsive-block-editor-addons"),
      },
      {
        value: "line-through",
        label: __("Line Through", "responsive-block-editor-addons"),
      },
    ];

    const blockMarginResetValues = {
      marginTop: 10,
      marginRight: 10,
      marginBottom: 10,
      marginLeft: 10,
      marginTabletTop: 10,
      marginTabletRight: 10,
      marginTabletBottom: 10,
      marginTabletLeft: 10,
      marginMobileTop: 10,
      marginMobileRight: 10,
      marginMobileBottom: 10,
      marginMobileLeft: 10,
    }
    const blockPaddingResetValues = {
      paddingTop: 10,
      paddingRight: 10,
      paddingBottom: 10,
      paddingLeft: 10,
      paddingTabletTop: 10,
      paddingTabletRight: 10,
      paddingTabletBottom: 10,
      paddingTabletLeft: 10,
      paddingMobileTop: 10,
      paddingMobileRight: 10,
      paddingMobileBottom: 10,
      paddingMobileLeft: 10,
    }
    // Setup the attributes
    const {
      attributes: {
        headSpacing,
        separatorSpacing,
        seperatorPosition,
        seperatorStyle,
        separatorHeight,
        separatorWidth,
        separatorWidthType,
        separatorColor,
        headingTitleFontFamily,
        headingTitleFontSize,
        headingTitleFontSizeTablet,
        headingTitleFontSizeMobile,
        headingTitleFontWeight,
        headingTitleLineHeight,
        headingTitleLetterSpacing,
        headingTitleColor,
        subHeadingTitleFontFamily,
        subHeadingTitleFontSize,
        subHeadingTitleFontSizeMobile,
        subHeadingTitleFontSizeTablet,
        subHeadingTitleFontWeight,
        subHeadingTitleLineHeight,
        subHeadingTitleLetterSpacing,
        subHeadingTitleColor,
        headingTag,
        level,
        showHeading,
        showSubHeading,
        showSeparator,
        headingAlignment,
        headingAlignmentTablet,
        headingAlignmentMobile,
        subheadSpacing,
        headSpacingTablet,
        subheadSpacingTablet,
        separatorSpacingTablet,
        headSpacingMobile,
        subheadSpacingMobile,
        separatorSpacingMobile,
        textDecoration,
        textDecorationSubHeading,
        hideWidget,
        hideWidgetTablet,
        hideWidgetMobile,
        z_index,
        z_indexMobile,
        z_indexTablet,
        blockTopPadding,
        blockBottomPadding,
        blockLeftPadding,
        blockRightPadding,
        blockTopPaddingMobile,
        blockBottomPaddingMobile,
        blockLeftPaddingMobile,
        blockRightPaddingMobile,
        blockTopPaddingTablet,
        blockBottomPaddingTablet,
        blockLeftPaddingTablet,
        blockRightPaddingTablet,
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
        topMargin,
        bottomMargin,
        leftMargin,
        rightMargin,
        topMarginTablet,
        bottomMarginTablet,
        leftMarginTablet,
        rightMarginTablet,
        topMarginMobile,
        bottomMarginMobile,
        leftMarginMobile,
        rightMarginMobile,
        blockIsPaddingControlConnected,
        blockIsMarginControlConnected,
        separatorStyle,
        blockIsTypographyColorValueUpdated,
        blockIsBottomSpacingValueUpdated,
        subHeadingTitleTypographyColor,
        headingTitleTypographyColor,
        headingTitleBottomSpacing,
        headingTitleBottomSpacingMobile,
        headingTitleBottomSpacingTablet,
        subHeadingTitleBottomSpacing,
        subHeadingTitleBottomSpacingMobile,
        subHeadingTitleBottomSpacingTablet,
        headingTitleTextDecoration,
        subHeadingTitleTextDecoration,
        widthTypeValueUpdated,
        widthType,
      },
      setAttributes,
    } = this.props;

    if (!blockIsTypographyColorValueUpdated) {
      this.props.setAttributes(
        {
          subHeadingTitleTypographyColor: subHeadingTitleColor !== undefined ? subHeadingTitleColor : subHeadingTitleTypographyColor,
          headingTitleTypographyColor: headingTitleColor !== undefined ? headingTitleColor : headingTitleTypographyColor,
        }
      )
      this.props.setAttributes({ blockIsTypographyColorValueUpdated: true });
    }

    if (!blockIsBottomSpacingValueUpdated) {
      this.props.setAttributes(
        {
          headingTitleBottomSpacing: headSpacing !== undefined ? headSpacing : headingTitleBottomSpacing,
          headingTitleBottomSpacingTablet: headSpacingTablet !== undefined ? headSpacingTablet : headingTitleBottomSpacingTablet,
          headingTitleBottomSpacingMobile: headSpacingMobile !== undefined ? headSpacingMobile : headingTitleBottomSpacingMobile,
          subHeadingTitleBottomSpacing: subheadSpacing !== undefined ? subheadSpacing : subHeadingTitleBottomSpacing,
          subHeadingTitleBottomSpacingTablet: subheadSpacingTablet !== undefined ? subheadSpacingTablet : subHeadingTitleBottomSpacingTablet,
          subHeadingTitleBottomSpacingMobile: subheadSpacingMobile !== undefined ? subheadSpacingMobile : subHeadingTitleBottomSpacingMobile,
          headingTitleTextDecoration: textDecoration !== undefined ? textDecoration : headingTitleTextDecoration,
          subHeadingTitleTextDecoration: textDecorationSubHeading !== undefined ? textDecorationSubHeading : subHeadingTitleTextDecoration,
        }
      )
      this.props.setAttributes({ blockIsBottomSpacingValueUpdated: true });
    }

    //widthType
    if (!widthTypeValueUpdated) {
      this.props.setAttributes(
        {
          widthType: separatorWidthType !== undefined ? separatorWidthType : widthType,
        }
      )
      this.props.setAttributes({ widthTypeValueUpdated: true });
    }

    return (
      <InspectorControls key="inspector">
        <InspectorTabs>
          <InspectorTab key={"content"}>
            <PanelBody>
              <RbeaTabRadioControl
                label={__("Heading Tag", "responsive-block-editor-addons")}
                value={headingTag}
                onChange={(value) => {
                  this.onTagChange(value);
                }}
                options={[
                  { value: "h1", label: __("H1", "responsive-block-editor-addons") },
                  { value: "h2", label: __("H2", "responsive-block-editor-addons") },
                  { value: "h3", label: __("H3", "responsive-block-editor-addons") },
                  { value: "h4", label: __("H4", "responsive-block-editor-addons") },
                  { value: "h5", label: __("H5", "responsive-block-editor-addons") },
                  { value: "h6", label: __("H6", "responsive-block-editor-addons") },
                ]}
                defaultValue={"h1"}
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
                        <BaseControl>
                          <p>
                            {__(
                              "Alignment Mobile",
                              "responsive-block-editor-addons"
                            )}
                          </p>
                          <div className="responsive-block-editor-addons-alignment-mobile">
                            <AlignmentToolbar
                              value={headingAlignmentMobile}
                              onChange={(value) =>
                                setAttributes({
                                  headingAlignmentMobile: value,
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
                              value={headingAlignmentTablet}
                              onChange={(value) =>
                                setAttributes({
                                  headingAlignmentTablet: value,
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
                              value={headingAlignment}
                              onChange={(value) =>
                                setAttributes({
                                  headingAlignment: value,
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

              <ToggleControl
                label={__("Heading", "responsive-block-editor-addons")}
                checked={showHeading}
                onChange={() =>
                  this.props.setAttributes({
                    showHeading: !showHeading,
                  })
                }
              />
              <ToggleControl
                label={__("Separator", "responsive-block-editor-addons")}
                checked={showSeparator}
                onChange={() =>
                  this.props.setAttributes({
                    showSeparator: !showSeparator,
                  })
                }
              />
              <ToggleControl
                label={__("Sub Heading", "responsive-block-editor-addons")}
                checked={showSubHeading}
                onChange={() =>
                  this.props.setAttributes({
                    showSubHeading: !showSubHeading,
                  })
                }
              />
            </PanelBody>
          </InspectorTab>
          <InspectorTab key={"style"}>
            <TypographyHelperControl
              title={__(
                "Heading Typography",
                "responsive-block-editor-addons"
              )}
              attrNameTemplate="headingTitle%s"
              values={{
                family: headingTitleFontFamily,
                size: headingTitleFontSize,
                sizeMobile: headingTitleFontSizeMobile,
                sizeTablet: headingTitleFontSizeTablet,
                weight: headingTitleFontWeight,
                height: headingTitleLineHeight,
                spacing: headingTitleLetterSpacing,
                color: headingTitleTypographyColor,
                bottomSpacing: headingTitleBottomSpacing,
                bottomSpacingMobile: headingTitleBottomSpacingMobile,
                bottomSpacingTablet: headingTitleBottomSpacingTablet,
                textDecoration: headingTitleTextDecoration,
              }}
              showLetterSpacing={true}
              showTextDecoration={true}
              showTextBottomSpacing={true}
              showTextTransform={false}
              showColorControl={true}
              setAttributes={setAttributes}
              {...this.props}
            />
            {showSubHeading && (
              <TypographyHelperControl
                title={"Sub Heading Typography"}
                attrNameTemplate="subHeadingTitle%s"
                values={{
                  family: subHeadingTitleFontFamily,
                  size: subHeadingTitleFontSize,
                  sizeMobile: subHeadingTitleFontSizeMobile,
                  sizeTablet: subHeadingTitleFontSizeTablet,
                  weight: subHeadingTitleFontWeight,
                  height: subHeadingTitleLineHeight,
                  spacing: subHeadingTitleLetterSpacing,
                  color: subHeadingTitleTypographyColor,
                  bottomSpacing: subHeadingTitleBottomSpacing,
                  bottomSpacingMobile: subHeadingTitleBottomSpacingMobile,
                  bottomSpacingTablet: subHeadingTitleBottomSpacingTablet,
                  textDecoration: subHeadingTitleTextDecoration,
                }}
                showLetterSpacing={true}
                showTextBottomSpacing={true}
                showTextDecoration={true}
                showColorControl={true}
                showTextTransform={false}
                setAttributes={setAttributes}
                {...this.props}
              />
            )}
            <PanelBody
              title={__("Separator", "responsive-block-editor-addons")}
              initialOpen={false}
            >
              <RbeaTabRadioControl
                label={__("Position", "responsive-block-editor-addons")}
                value={seperatorPosition}
                onChange={(value) =>
                  setAttributes({ seperatorPosition: value })
                }
                options={[
                  { value: "belowTitle", label: __("Center", "responsive-block-editor-addons") },
                  { value: "belowDesc", label: __("Bottom", "responsive-block-editor-addons") },
                ]}
                defaultValue={"belowTitle"}
                optionHasBorder={true}
              />
              <RbeaSeparatorStyleTabControl
                selected={seperatorStyle}
                onChange={(value) => setAttributes({ seperatorStyle: value })}
              />
              {seperatorStyle !== "none" && (
                <Fragment>
                  <RbeaColorControl
                    label={__("Separator Color", "responsive-block-editor-addons")}
                    colorValue={separatorColor}
                    onChange={(colorValue) =>
                      setAttributes({ separatorColor: colorValue })
                    }
                    resetColor={() => setAttributes({ separatorColor: "" })}
                  />
                </Fragment>
              )}
              {seperatorStyle !== "none" && (
                <Fragment>
                  <RbeaRangeControl
                    label={__("Thickness (px)", "responsive-block-editor-addons")}
                    value={separatorHeight}
                    onChange={(value) =>
                      setAttributes({
                        separatorHeight: value !== undefined ? value : 3,
                      })
                    }
                    min={0}
                    max={20}
                    beforeIcon=""
                    allowReset
                    initialPosition={3}
                  />
                  <RbeaWidthRangeControl
                    label={__("Width", "responsive-block-editor-addons")}
                    value={separatorWidth}
                    onChange={(value) =>
                      setAttributes({ separatorWidth: value })
                    }
                    min={0}
                    max={"%" == widthType ? 100 : 500}
                    beforeIcon=""
                    allowReset
                    initialPosition={20}
                    widthType={widthType}
                    extraControls={true}
                    setAttributes={setAttributes}
                  />
                </Fragment>
              )}
              {seperatorStyle !== "none" && (
                <ResponsiveSpacingControl
                  title={"Bottom Spacing"}
                  attrNameTemplate="separatorSpacing%s"
                  values={{
                    desktop: separatorSpacing,
                    tablet: separatorSpacingTablet,
                    mobile: separatorSpacingMobile,
                  }}
                  setAttributes={setAttributes}
                  {...this.props}
                />
              )}
            </PanelBody>
            <PanelBody
              title={__("Spacing", "responsive-block-editor-addons")}
              initialOpen={false}
            >
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
