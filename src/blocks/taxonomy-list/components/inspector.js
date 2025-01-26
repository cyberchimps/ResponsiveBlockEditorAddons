import fontOptions from "../../../utils/googlefonts";
import BoxShadowControl from "../../../utils/components/box-shadow";
import TypographyHelperControl from "../../../settings-components/TypographySettings";
import ResponsiveSpacingControl from "../../../settings-components/ResponsiveSpacingSettings";
import BlockBorderHelperControl from "../../../settings-components/BlockBorderSettings";
import InspectorTab from "../../../components/InspectorTab";
import InspectorTabs from "../../../components/InspectorTabs";
import ResponsiveNewPaddingControl from "../../../settings-components/ResponsiveNewSpacingSettings/ResponsiveNewPaddingControl/index";
import ResponsiveNewMarginControl from "../../../settings-components/ResponsiveNewSpacingSettings/ResponsiveNewMarginControl/index";
import RbeaRangeControl from "../../../utils/components/rbea-range-control";
import RbeaColorControl from "../../../utils/components/rbea-color-control";
import RbeaTabRadioControl from "../../../utils/components/rbea-tab-radio-control";
import RbeaBlockBorderHelperControl from "../../../settings-components/RbeaBlockBorderSettings";
import RbeaSeparatorStyleTabControl from "../../../utils/components/rbea-separator-style-tab-control";

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
  Button,
  PanelBody,
  QueryControls,
  RangeControl,
  SelectControl,
  TextControl,
  ToggleControl,
  TabPanel,
  Dashicon,
  BaseControl,
  RadioControl,
} = wp.components;

/**
 * Create an Inspector Controls wrapper Component
 */
export default class Inspector extends Component {
  constructor() {
    super(...arguments);
    this.onSelectPostType = this.onSelectPostType.bind(this);
    this.onSelectTaxonomyType = this.onSelectTaxonomyType.bind(this);
  }

  onSelectPostType(value) {
    const { setAttributes } = this.props;
    setAttributes({ postType: value });
    setAttributes({ categories: "" });
    setAttributes({ taxonomyType: "" });
  }

  onSelectTaxonomyType(value) {
    const { setAttributes } = this.props;

    setAttributes({ taxonomyType: value });
    setAttributes({ categories: "" });
  }

  render() {
    // Setup the attributes
    const {
      attributes,
      setAttributes,
      categoriesList,
      taxonomyList,
      termsList,
    } = this.props;
    const {
      alignment,
      bgColor,
      gridBorderColor,
      gridBorderRadius,
      gridTopRadius,
      gridRightRadius,
      gridBottomRadius,
      gridLeftRadius,
      gridTopRadiusTablet,
      gridRightRadiusTablet,
      gridBottomRadiusTablet,
      gridLeftRadiusTablet,
      gridTopRadiusMobile,
      gridRightRadiusMobile,
      gridBottomRadiusMobile,
      gridLeftRadiusMobile,
      gridIsRadiusControlConnected,
      gridIsRadiusValueUpdated,
      gridBorderStyle,
      gridBorderWidth,
      boxShadowColor,
      boxShadowHOffset,
      boxShadowVOffset,
      boxShadowBlur,
      boxShadowSpread,
      boxShadowPosition,
      categoryType,
      columns,
      columnGap,
      columnGapMobile,
      columnGapTablet,
      columnsMobile,
      columnsTablet,
      contentPadding,
      contentPaddingMobile,
      contentPaddingTablet,
      countColor,
      countFontFamily,
      countFontSize,
      countFontSizeMobile,
      countFontSizeTablet,
      countFontWeight,
      countLineHeight,
      countLineHeightMobile,
      countLineHeightTablet,
      layout,
      listBottomMargin,
      listBottomMarginMobile,
      listBottomMarginTablet,
      listTopMargin,
      listTopMarginMobile,
      listTopMarginTablet,
      listFontFamily,
      listFontSize,
      listFontSizeMobile,
      listFontSizeTablet,
      listFontWeight,
      listLineHeight,
      listLineHeightMobile,
      listLineHeightTablet,
      listStyle,
      listStyleColor,
      listStyleColorHover,
      listTextColor,
      listTextColorHover,
      postType,
      rowGap,
      rowGapMobile,
      rowGapTablet,
      separatorColor,
      separatorStyle,
      separatorWidth,
      showEmptyTaxonomy,
      showPostCount,
      taxonomyType,
      titleBottomSpace,
      titleBottomSpaceMobile,
      titleBottomSpaceTablet,
      titleColor,
      titleFontFamily,
      titleFontSize,
      titleFontSizeMobile,
      titleFontSizeTablet,
      titleFontWeight,
      titleLineHeight,
      titleLineHeightMobile,
      titleLineHeightTablet,
      titleTag,
      noTaxDisplaytext,
      taxonomyAvailable,
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
      blockIsTypographyColorValueUpdated,
      countTypographyColor,
      titleTypographyColor,
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

    const taxonomy_list_setting = showEmptyTaxonomy ? taxonomyList : termsList;

    if ("" != taxonomy_list_setting && undefined != taxonomy_list_setting) {
      var taxonomyListOptions = [
        {
          value: "",
          label: __("Select Taxonomy", "responsive-block-editor-addons"),
        },
      ];
      Object.keys(taxonomy_list_setting).map((item, thisIndex) => {
        return taxonomyListOptions.push({
          value: taxonomyList[item]["name"],
          label: taxonomyList[item]["label"],
        });
      });
    }

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

    // backward compatibility for border radius control

if (!gridIsRadiusValueUpdated) {
	this.props.setAttributes(
	  {
		gridTopRadius:          gridBorderRadius !== undefined ? gridBorderRadius : gridTopRadius,
		gridBottomRadius:       gridBorderRadius !== undefined ? gridBorderRadius : gridBottomRadius,
		gridLeftRadius:         gridBorderRadius !== undefined ? gridBorderRadius : gridLeftRadius,
		gridRightRadius:        gridBorderRadius !== undefined ? gridBorderRadius : gridRightRadius,
		gridTopRadiusTablet:    gridBorderRadius !== undefined ? gridBorderRadius : gridTopRadiusTablet,
		gridBottomRadiusTablet: gridBorderRadius !== undefined ? gridBorderRadius : gridBottomRadiusTablet,
		gridRightRadiusTablet:  gridBorderRadius !== undefined ? gridBorderRadius : gridRightRadiusTablet,
		gridLeftRadiusTablet:   gridBorderRadius !== undefined ? gridBorderRadius : gridLeftRadiusTablet,
		gridTopRadiusMobile:    gridBorderRadius !== undefined ? gridBorderRadius : gridTopRadiusMobile,
		gridBottomRadiusMobile: gridBorderRadius !== undefined ? gridBorderRadius : gridBottomRadiusMobile,
		gridLeftRadiusMobile:   gridBorderRadius !== undefined ? gridBorderRadius : gridLeftRadiusMobile,
		gridRightRadiusMobile:  gridBorderRadius !== undefined ? gridBorderRadius : gridRightRadiusMobile,
	  }
	)
	this.props.setAttributes({gridIsRadiusValueUpdated: true});
  }

  // Border Color Component For Color&Hover Typography Control
  const listTypographyColorControl = (
    <RbeaColorControl
      label = {__("List Text Color", "responsive-block-editor-addons")}
      colorValue={listTextColor}
      onChange={(colorValue) => setAttributes({ listTextColor: colorValue })}
      resetColor={() => setAttributes({ listTextColor: "" })}
    />
  );

  const listTypographyColorControlHover = (
    <RbeaColorControl
      label = {__("List Text Color Hover", "responsive-block-editor-addons")}
      colorValue={listTextColorHover}
      onChange={(colorValue) => setAttributes({ listTextColorHover: colorValue })}
      resetColor={() => setAttributes({ listTextColorHover: "" })}
    />
  );
    
  const emptyColorControl = (
    <div className="responsive-block-editor-addons-empty-color-control"></div>
  );

  // backward compatibility for typography color control
  if (!blockIsTypographyColorValueUpdated) {
    this.props.setAttributes(
      {
        countTypographyColor:          countColor !== undefined ? countColor : countTypographyColor,
        titleTypographyColor:         titleColor !== undefined ? titleColor : titleTypographyColor,
      }
    )
    this.props.setAttributes({blockIsTypographyColorValueUpdated: true});
  }
  
    return (
      <InspectorControls>
        <InspectorTabs>
          <InspectorTab key={"content"}>
            <PanelBody>
              <RbeaTabRadioControl
                label={__("Heading Tag", "responsive-block-editor-addons")}
                value={titleTag}
                onChange={(value) => setAttributes({ titleTag: value })}
                options={[
                  {
                    value: "div",
                    label: __("Div", "responsive-block-editor-addons"),
                  },
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
              <RbeaTabRadioControl
                label={__("Layout", "responsive-block-editor-addons")}
                value={layout}
                onChange={(value) => setAttributes({ layout: value })}
                options={[
                  {
                    value: "grid",
                    label: __("Grid", "responsive-block-editor-addons"),
                  },
                  {
                    value: "list",
                    label: __("List", "responsive-block-editor-addons"),
                  },
                ]}
              />
              {"grid" === layout && (
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
                              "Mobile Columns",
                              "responsive-block-editor-addons"
                            )}
                            min={1}
                            max={2}
                            value={columnsMobile}
                            onChange={(value) =>
                              setAttributes({
                                columnsMobile: value,
                              })
                            }
                          />
                        </Fragment>
                      );
                    } else if ("tablet" === tab.name) {
                      tabout = (
                        <Fragment>
                          <RbeaRangeControl
                            label={__(
                              "Tablet Columns",
                              "responsive-block-editor-addons"
                            )}
                            min={1}
                            max={3}
                            value={columnsTablet}
                            onChange={(value) =>
                              setAttributes({
                                columnsTablet: value,
                              })
                            }
                          />
                        </Fragment>
                      );
                    } else {
                      tabout = (
                        <Fragment>
                          <RbeaRangeControl
                            label={__(
                              "Desktop Columns",
                              "responsive-block-editor-addons"
                            )}
                            min={1}
                            max={4}
                            value={columns}
                            onChange={(value) =>
                              setAttributes({
                                columns: value,
                              })
                            }
                          />
                        </Fragment>
                      );
                    }

                    return <div>{tabout}</div>;
                  }}
                </TabPanel>
              )}
              {"list" == layout && (
                <RbeaTabRadioControl
                  label={__("List Style", "responsive-block-editor-addons")}
                  value={listStyle}
                  onChange={(value) =>
                    setAttributes({ listStyle: value })
                  }
                  options={[
                    { value: "disc", dashicon:"editor-ul", label: __("Bullet", "responsive-block-editor-addons") },
                    { value: "decimal", dashicon:"editor-ol", label: __("Numbers", "responsive-block-editor-addons") },
                    { value: "none", dashicon:"menu", label: __("None", "responsive-block-editor-addons") },
                  ]}
                  hasDashIcons={true}
                  defaultValue={"cover"}
                />
              )}
              <RbeaTabRadioControl
                label={__("Post Type", "responsive-block-editor-addons")}
                value={postType}
                onChange={(value) => setAttributes({ postType: value })}
                options={responsive_globals.post_types}
              />
              {"" != taxonomyList && (
                <RbeaTabRadioControl
                  label={__("Taxonomy", "responsive-block-editor-addons")}
                  value={taxonomyType}
                  onChange={(value) => this.onSelectTaxonomyType(value)}
                  options={taxonomyListOptions}
                />
              )}
              <TextControl
                autoComplete="off"
                label={ __( 'Display Message', 'responsive-block-editor-addons' ) }
                value={ noTaxDisplaytext }
                onChange={ ( value ) => setAttributes( { noTaxDisplaytext: value } ) }
                help={ __( "What to display if taxonomy not found.", "responsive-block-editor-addons" ) }
              />
              <ToggleControl
                label={__(
                  "Show Empty Taxonomy",
                  "responsive-block-editor-addons"
                )}
                checked={showEmptyTaxonomy}
                onChange={(value) =>
                  setAttributes({ showEmptyTaxonomy: !showEmptyTaxonomy })
                }
                help={__(
                  "Show Empty Taxonomy ",
                  "responsive-block-editor-addons"
                )}
              />
              <ToggleControl
                label={__("Show Posts Count", "responsive-block-editor-addons")}
                checked={showPostCount}
                onChange={(value) =>
                  setAttributes({ showPostCount: !showPostCount })
                }
                help={__(
                  "Show Count of taxonomy ",
                  "responsive-block-editor-addons"
                )}
              />
              {"grid" == layout && (<Fragment>
                <BaseControl>
                  <p>
                    {__("Alignment", "responsive-block-editor-addons")}
                  </p>
                  <div className="responsive-block-editor-addons-alignment">
                    <AlignmentToolbar
                      value={alignment}
                      onChange={(value) =>
                        setAttributes({
                          alignment: value,
                        })
                      }
                      controls={["left", "center", "right"]}
                      isCollapsed={false}
                    />
                  </div>
                </BaseControl>
              </Fragment>)}
            </PanelBody>
          </InspectorTab>
          <InspectorTab key={"style"}>
            <PanelBody
              title={__("Colors", "responsive-block-editor-addons")}
              initialOpen={false}
            >
              {"grid" === layout && (
                <Fragment>
                  <RbeaColorControl
                    label = {__("Background Color", "responsive-block-editor-addons")}
                    colorValue={bgColor}
                    onChange={(colorValue) => setAttributes({ bgColor: colorValue })}
                    resetColor={() => setAttributes({ bgColor: "" })}
                  />
                </Fragment>
              )}
              {"list" === layout && (
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
                      let color_tab;
                      if ("normal" === tabName.name) {
                        color_tab = (
                          <RbeaColorControl
                            label = {__("List Style Color", "responsive-block-editor-addons")}
                            colorValue={listStyleColor}
                            onChange={(colorValue) => setAttributes({ listStyleColor: colorValue })}
                            resetColor={() => setAttributes({ listStyleColor: "" })}
                          />
                        );
                      } else if("hover" === tabName.name) {
                        color_tab = (
                          <RbeaColorControl
                            label = {__("List Style Color Hover", "responsive-block-editor-addons")}
                            colorValue={listStyleColorHover}
                            onChange={(colorValue) => setAttributes({ listStyleColorHover: colorValue })}
                            resetColor={() => setAttributes({ listStyleColorHover: "" })}
                          />
                        );
                      } else {
                        color_tab = emptyColorControl;
                      }
                      return <div>{color_tab}</div>;
                    }}
                  </TabPanel>
                </Fragment>
              )}
            </PanelBody>
            {"grid" === layout && (
                <Fragment>
                  <TypographyHelperControl
                    title={__(
                      "Title Typography",
                      "responsive-block-editor-addons"
                    )}
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
                  {showPostCount && (
                    <TypographyHelperControl
                      title={__(
                        "Count Typography",
                        "responsive-block-editor-addons"
                      )}
                      attrNameTemplate="count%s"
                      values={{
                        family: countFontFamily,
                        size: countFontSize,
                        sizeMobile: countFontSizeMobile,
                        sizeTablet: countFontSizeTablet,
                        weight: countFontWeight,
                        height: countLineHeight,
                        color: countTypographyColor,
                      }}
                      showLetterSpacing={false}
                      showTextTransform={false}
                      showColorControl={true}
                      setAttributes={setAttributes}
                      {...this.props}
                    />
                  )}
                </Fragment>
              )}
              {"list" === layout && (
                <TypographyHelperControl
                  title={__(
                    "List Typography",
                    "responsive-block-editor-addons"
                  )}
                  attrNameTemplate="list%s"
                  values={{
                    family: listFontFamily,
                    size: listFontSize,
                    sizeMobile: listFontSizeMobile,
                    sizeTablet: listFontSizeTablet,
                    weight: listFontWeight,
                    height: listLineHeight,
                    typographyColorControl: listTypographyColorControl,
										typographyColorControlHover: listTypographyColorControlHover,
										emptyColorControl: emptyColorControl,
                  }}
                  showLetterSpacing={false}
                  showTextTransform={false}
                  showColorWithHoverControlTab={true}
                  setAttributes={setAttributes}
                  {...this.props}
                />
              )}
            <PanelBody
              title={__("Border", "responsive-block-editor-addons")}
              initialOpen={false}
            >
              {"grid" === layout && (
                <Fragment>
                  <RbeaBlockBorderHelperControl
                    attrNameTemplate="grid%s"
                    values={{
                      radius: gridBorderRadius,
                      style: gridBorderStyle,
                      width: gridBorderWidth,
                      color: gridBorderColor,
                    }}
                    setAttributes={setAttributes}
                    {...this.props}
                  />
                </Fragment>
              )}
              {"list" === layout && (
                <Fragment>
                  {/* <RadioControl
                    label={__(
                      "Separator Style",
                      "resposive-block-editor-addons"
                    )}
                    className="rbea-border-style-selector"
                    selected={separatorStyle}
                    onChange={(value) =>
                      setAttributes({ separatorStyle: value })
                    }
                    options={[
                      {
                        value: "none",
                        label: __("None", "resposive-block-editor-addons"),
                      },
                      {
                        value: "solid",
                        label: __("Solid", "resposive-block-editor-addons"),
                      },
                      {
                        value: "dotted",
                        label: __("Dotted", "resposive-block-editor-addons"),
                      },
                      {
                        value: "dashed",
                        label: __("Dashed", "resposive-block-editor-addons"),
                      },
                      {
                        value: "double",
                        label: __("Double", "resposive-block-editor-addons"),
                      },
                      {
                        value: "groove",
                        label: __("Groove", "resposive-block-editor-addons"),
                      },
                      {
                        value: "inset",
                        label: __("Inset", "resposive-block-editor-addons"),
                      },
                      {
                        value: "outset",
                        label: __("Outset", "resposive-block-editor-addons"),
                      },
                      {
                        value: "ridge",
                        label: __("Ridge", "resposive-block-editor-addons"),
                      },
                    ]}
                  /> */}
                  <RbeaSeparatorStyleTabControl
                    selected={separatorStyle}
                    onChange={(value) => setAttributes({ separatorStyle: value })}
                  />
                  {"none" !== separatorStyle && (
                    <Fragment>
                      <RbeaRangeControl
                        label={__(
                          "Separator Thickness",
                          "responsive-block-editor-addons"
                        )}
                        value={separatorWidth}
                        onChange={(value) =>
                          setAttributes({ separatorWidth: value })
                        }
                        min={0}
                        max={10}
                        allowReset
                      />
                      <RbeaColorControl
                        label = {__("Separator Color", "responsive-block-editor-addons")}
                        colorValue={separatorColor}
                        onChange={(colorValue) => setAttributes({ separatorColor: colorValue })}
                        resetColor={() => setAttributes({ separatorColor: "" })}
                      />
                    </Fragment>
                  )}
                </Fragment>
              )}
            </PanelBody>
            {"grid" === layout && (
                <PanelBody
                title={__("Box Shadow", "responsive-block-editor-addons")}
                initialOpen={false}
              >
                  <Fragment>
                    <BoxShadowControl
                      setAttributes={setAttributes}
                      label={__("Box Shadow", "responsive-block-editor-addons")}
                      boxShadowColor={{
                        value: boxShadowColor,
                        label: __("Color", "responsive-block-editor-addons"),
                      }}
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
                  </Fragment>
                </PanelBody>
              )}
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
              {"grid" === layout && (
                <Fragment>
                  <ResponsiveSpacingControl
                    title={"Row Gap"}
                    attrNameTemplate="rowGap%s"
                    values={{
                      desktop: rowGap,
                      tablet: rowGapTablet,
                      mobile: rowGapMobile,
                    }}
                    setAttributes={setAttributes}
                    {...this.props}
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
                  {showPostCount && (
                    <Fragment>
                      <ResponsiveSpacingControl
                        title={"Title Bottom Spacing"}
                        attrNameTemplate="titleBottomSpace%s"
                        values={{
                          desktop: titleBottomSpace,
                          tablet: titleBottomSpaceTablet,
                          mobile: titleBottomSpaceMobile,
                        }}
                        setAttributes={setAttributes}
                        {...this.props}
                      />
                    </Fragment>
                  )}
                </Fragment>
              )}
              {"list" === layout && (
                <Fragment>
                  <ResponsiveSpacingControl
                    title={"Top Margin"}
                    attrNameTemplate="listTopMargin%s"
                    values={{
                      desktop: listTopMargin,
                      tablet: listTopMarginTablet,
                      mobile: listTopMarginMobile,
                    }}
                    setAttributes={setAttributes}
                    {...this.props}
                  />
                  <ResponsiveSpacingControl
                    title={"Bottom Margin"}
                    attrNameTemplate="listBottomMargin%s"
                    values={{
                      desktop: listBottomMargin,
                      tablet: listBottomMarginTablet,
                      mobile: listBottomMarginMobile,
                    }}
                    setAttributes={setAttributes}
                    {...this.props}
                  />
                </Fragment>
              )}
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
