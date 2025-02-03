/**
 * Inspector Controls
 */

import times from "lodash/times";
import FontIconPicker from "@fonticonpicker/react-fonticonpicker";
import renderSVG from "../../../renderIcon";
import ResponsiveBlocksIcon from "../../../ResponsiveBlocksIcon.json";
import fontOptions from "../../../utils/googlefonts";
import { loadGoogleFont } from "../../../utils/font";
import InspectorTab from "../../../components/InspectorTab";
import InspectorTabs from "../../../components/InspectorTabs";
import BlockBorderHelperControl from "../../../settings-components/BlockBorderSettings";
import RbeaBlockBorderHelperControl from "../../../settings-components/RbeaBlockBorderSettings";
import TypographyHelperControl from "../../../settings-components/TypographySettings";
import ResponsiveSpacingControl from "../../../settings-components/ResponsiveSpacingSettings";
import ResponsiveNewPaddingControl from "../../../settings-components/ResponsiveNewSpacingSettings/ResponsiveNewPaddingControl/index";
import ResponsiveNewMarginControl from "../../../settings-components/ResponsiveNewSpacingSettings/ResponsiveNewMarginControl/index";
import RbeaRangeControl from "../../../utils/components/rbea-range-control";
import RbeaColorControl from "../../../utils/components/rbea-color-control";
import RbeaTabRadioControl from "../../../utils/components/rbea-tab-radio-control";
import RbeaBorderRadiusControl from "../../../settings-components/RbeaBorderRadiusControl";

// Setup the block
const { __ } = wp.i18n;
const { Component, Fragment } = wp.element;

// Import block components
const {
  InspectorControls,
  PanelColorSettings,
  AlignmentToolbar,
  ColorPalette,
} = wp.blockEditor;

// Import Inspector components
const {
  PanelBody,
  RangeControl,
  SelectControl,
  BaseControl,
  ToggleControl,
  Dashicon,
  Button,
  TabPanel,
} = wp.components;

let svg_icons = Object.keys(ResponsiveBlocksIcon);

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
        count,
        gutter,
        countUp,
        textColor,
        contentAlign,
        itemBackgroundColor,
        dateFontFamily,
        dateLineHeight,
        dateFontWeight,
        dateFontSize,
        dateFontSizeMobile,
        dateFontSizeTablet,
        headingLineHeight,
        headingFontFamily,
        headingFontSize,
		headingFontWeight,
        headingFontSizeMobile,
        headingFontSizeTablet,
        contentFontFamily,
        contentLineHeight,
        contentFontWeight,
        contentFontSize,
        contentFontSizeMobile,
        contentFontSizeTablet,
        icon,
        resshowIcon,
        resshowTitle,
        resshowDesc,
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
        blockBorderColor,
        opacity,
        icon_color,
        iconsize,
        numColor,
        titleColor,
        titleSpace,
        numSpace,
        contentSpace,
        resshowNum,
        iconStyle,
        iconShapeColor,
        shapeBorderRadius,
        shapeBorderTopRadius,
        shapeBorderRightRadius,
        shapeBorderBottomRadius,
        shapeBorderLeftRadius,
        shapeBorderTopRadiusTablet,
        shapeBorderRightRadiusTablet,
        shapeBorderBottomRadiusTablet,
        shapeBorderLeftRadiusTablet,
        shapeBorderTopRadiusMobile,
        shapeBorderRightRadiusMobile,
        shapeBorderBottomRadiusMobile,
        shapeBorderLeftRadiusMobile,
        shapeBorderIsRadiusControlConnected,
        shapeBorderIsRadiusValueUpdated,
        shapePadding,
        shapeBorder,
        contentSpacing,
        iconSpacing,
		contentSpacingTablet,
		contentSpacingMobile,
		iconSpacingTablet,
		iconSpacingMobile,
		titleSpaceTablet,
		titleSpaceMobile,
		numSpaceTablet,
		numSpaceMobile,
		contentSpaceTablet,
		contentSpaceMobile,
    hideWidget,
    hideWidgetTablet,
    hideWidgetMobile,
    z_index,
    z_indexTablet,
    z_indexMobile,
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
    blockTopMargin,
    blockTopMarginMobile,
    blockTopMarginTablet,
    blockBottomMargin,
    blockBottomMarginMobile,
    blockBottomMarginTablet,
    blockLeftMargin,
    blockLeftMarginMobile,
    blockLeftMarginTablet,
    blockRightMargin,
    blockRightMarginMobile,
    blockRightMarginTablet,
    blockIsPaddingControlConnected,
    blockIsMarginControlConnected,
    blockNewSpacingValuesUpdated,
    blockIsTypographyColorValueUpdated,
    contentTypographyColor,
    headingTypographyColor,
    dateTypographyColor,
    contentAlignMobile,
    contentAlignTablet,
    isAlignmentValueUpdated,
      },
      setAttributes,
    } = this.props;

    const blockPaddingResetValues = {
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

    // To populate new control values with existing padding margin control values for backward compatibility.
    if (!blockNewSpacingValuesUpdated) {
     this.props.setAttributes(
       {
         blockTopPadding:          contentSpacing !== undefined ? contentSpacing : blockTopPadding,
         blockRightPadding:        contentSpacing !== undefined ? contentSpacing : blockRightPadding,
         blockBottomPadding:       contentSpacing !== undefined ? contentSpacing : blockBottomPadding,
         blockLeftPadding:         contentSpacing !== undefined ? contentSpacing : blockLeftPadding,
         blockTopPaddingTablet:    contentSpacingTablet !== undefined ? contentSpacingTablet : blockTopPaddingTablet,
         blockRightPaddingTablet:  contentSpacingTablet !== undefined ? contentSpacingTablet : blockRightPaddingTablet,
         blockBottomPaddingTablet: contentSpacingTablet !== undefined ? contentSpacingTablet : blockBottomPaddingTablet,
         blockLeftPaddingTablet:   contentSpacingTablet !== undefined ? contentSpacingTablet : blockLeftPaddingTablet,
         blockTopPaddingMobile:    contentSpacingMobile !== undefined ? contentSpacingMobile : blockTopPaddingMobile,
         blockRightPaddingMobile:  contentSpacingMobile !== undefined ? contentSpacingMobile : blockRightPaddingMobile,
         blockBottomPaddingMobile: contentSpacingMobile !== undefined ? contentSpacingMobile : blockBottomPaddingMobile,
         blockLeftPaddingMobile:   contentSpacingMobile !== undefined ? contentSpacingMobile : blockLeftPaddingMobile,
       }
     )
     this.props.setAttributes({blockNewSpacingValuesUpdated: true});
    }

    // backward compatibility for border radius control

    if (!shapeBorderIsRadiusValueUpdated) {
      this.props.setAttributes(
        {
          shapeBorderTopRadius:          shapeBorderRadius !== undefined ? shapeBorderRadius : shapeBorderTopRadius,
          shapeBorderBottomRadius:       shapeBorderRadius !== undefined ? shapeBorderRadius : shapeBorderBottomRadius,
          shapeBorderLeftRadius:         shapeBorderRadius !== undefined ? shapeBorderRadius : shapeBorderLeftRadius,
          shapeBorderRightRadius:        shapeBorderRadius !== undefined ? shapeBorderRadius : shapeBorderRightRadius,
          shapeBorderTopRadiusTablet:    shapeBorderRadius !== undefined ? shapeBorderRadius : shapeBorderTopRadiusTablet,
          shapeBorderBottomRadiusTablet: shapeBorderRadius !== undefined ? shapeBorderRadius : shapeBorderBottomRadiusTablet,
          shapeBorderRightRadiusTablet:  shapeBorderRadius !== undefined ? shapeBorderRadius : shapeBorderRightRadiusTablet,
          shapeBorderLeftRadiusTablet:   shapeBorderRadius !== undefined ? shapeBorderRadius : shapeBorderLeftRadiusTablet,
          shapeBorderTopRadiusMobile:    shapeBorderRadius !== undefined ? shapeBorderRadius : shapeBorderTopRadiusMobile,
          shapeBorderBottomRadiusMobile: shapeBorderRadius !== undefined ? shapeBorderRadius : shapeBorderBottomRadiusMobile,
          shapeBorderLeftRadiusMobile:   shapeBorderRadius !== undefined ? shapeBorderRadius : shapeBorderLeftRadiusMobile,
          shapeBorderRightRadiusMobile:  shapeBorderRadius !== undefined ? shapeBorderRadius : shapeBorderRightRadiusMobile,
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
      this.props.setAttributes({shapeBorderIsRadiusValueUpdated: true});
    }

    var data_copy = [...countUp];

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

    // Update color value
    const onChangeTextColor = (value) => setAttributes({ textColor: value });
    const onChangeBackgroundColor = (value) =>
      setAttributes({ itemBackgroundColor: value });
    const onChangeTitleColor = (value) => setAttributes({ titleColor: value });
    const onChangeNumColor = (value) => setAttributes({ numColor: value });

    const frontIconControls = (index) => {
      const icons = [
        "menu",
        "admin-site",
        "dashboard",
        "admin-post",
        "admin-media",
        "admin-links",
        "admin-page",
        "admin-comments",
        "admin-appearance",
        "admin-plugins",
        "admin-users",
        "admin-tools",
        "admin-settings",
        "admin-network",
        "admin-home",
        "admin-generic",
        "admin-collapse",
        "welcome-write-blog",
        "welcome-add-page",
        "welcome-view-site",
        "welcome-widgets-menus",
        "welcome-comments",
        "welcome-learn-more",
        "format-aside",
        "format-image",
        "format-gallery",
        "format-video",
        "format-status",
        "format-quote",
        "format-chat",
        "format-audio",
        "camera",
        "images-alt",
        "images-alt2",
        "video-alt",
        "video-alt2",
        "video-alt3",
        "image-crop",
        "image-rotate-left",
        "image-rotate-right",
        "image-flip-vertical",
        "image-flip-horizontal",
        "undo",
        "redo",
        "editor-bold",
        "editor-italic",
        "editor-ul",
        "editor-ol",
        "editor-quote",
        "editor-alignleft",
        "editor-aligncenter",
        "editor-alignright",
        "editor-insertmore",
        "editor-spellcheck",
        "editor-distractionfree",
        "editor-kitchensink",
        "editor-underline",
        "editor-justify",
        "editor-textcolor",
        "editor-paste-word",
        "editor-paste-text",
        "editor-removeformatting",
        "editor-video",
        "editor-customchar",
        "editor-outdent",
        "editor-indent",
        "editor-help",
        "editor-strikethrough",
        "editor-unlink",
        "editor-rtl",
        "align-left",
        "align-right",
        "align-center",
        "align-none",
        "lock",
        "calendar",
        "visibility",
        "post-status",
        "edit",
        "trash",
        "arrow-up",
        "arrow-down",
        "arrow-right",
        "arrow-left",
        "arrow-up-alt",
        "arrow-down-alt",
        "arrow-right-alt",
        "arrow-left-alt",
        "arrow-up-alt2",
        "arrow-down-alt2",
        "arrow-right-alt2",
        "arrow-left-alt2",
        "sort",
        "leftright",
        "list-view",
        "exerpt-view",
        "share",
        "share-alt",
        "share-alt2",
        "twitter",
        "rss",
        "facebook",
        "facebook-alt",
        "googleplus",
        "networking",
        "hammer",
        "art",
        "migrate",
        "performance",
        "wordpress",
        "wordpress-alt",
        "pressthis",
        "update",
        "screenoptions",
        "info",
        "cart",
        "feedback",
        "cloud",
        "translation",
        "tag",
        "category",
        "yes",
        "no",
        "no-alt",
        "plus",
        "minus",
        "dismiss",
        "marker",
        "star-filled",
        "star-half",
        "star-empty",
        "flag",
        "location",
        "location-alt",
        "vault",
        "shield",
        "shield-alt",
        "search",
        "slides",
        "analytics",
        "chart-pie",
        "chart-bar",
        "chart-line",
        "chart-area",
        "groups",
        "businessman",
        "id",
        "id-alt",
        "products",
        "awards",
        "forms",
        "portfolio",
        "book",
        "book-alt",
        "download",
        "upload",
        "backup",
        "lightbulb",
        "smiley",
      ];

      return (
        <PanelBody
          key={index}
          title={
            __("CountUp Box ", "responsive-block-editor-addons") +
            " " +
            (index + 1)
          }
          initialOpen={false}
          className={"rbea-repeater-panel"}
        >
          <FontIconPicker
            icons={svg_icons}
            renderFunc={renderSVG}
            theme="default"
            value={countUp[index]["icon"]}
            onChange={(value) => {
              var new_content = {
                icon: value,
                title: data_copy[index]["title"],
                amount: data_copy[index]["amount"],
                features: data_copy[index]["features"],
              };
              data_copy[index] = new_content;
              setAttributes({ countUp: data_copy });
            }}
            isMulti={false}
            noSelectedPlaceholder={__(
              "Select Icon",
              "responsive-block-editor-addons"
            )}
          />
        </PanelBody>
      );
    };

    // backward compatibility for typography color control
    if (!blockIsTypographyColorValueUpdated) {
      this.props.setAttributes(
        {
          contentTypographyColor:          textColor !== undefined ? textColor : contentTypographyColor,
          headingTypographyColor:         titleColor !== undefined ? titleColor : headingTypographyColor,
          dateTypographyColor:         numColor !== undefined ? numColor : dateTypographyColor,
        }
      )
      this.props.setAttributes({blockIsTypographyColorValueUpdated: true});
    }

    if (!isAlignmentValueUpdated) {
      this.props.setAttributes(
        {
          contentAlign:          contentAlign !== undefined ? contentAlign : contentAlign,
          contentAlignTablet:       contentAlign !== undefined ? contentAlign : contentAlignTablet,
          contentAlignMobile:         contentAlign !== undefined ? contentAlign : contentAlignMobile,
        }
      )
      this.props.setAttributes({isAlignmentValueUpdated: true});
    }

    return (
      <InspectorControls key="inspector">
        <InspectorTabs>
          <InspectorTab key={"content"}>
            <PanelBody
              title={__("General", "responsive-block-editor-addons")}
              initialOpen={false}
            >
              {/* <BaseControl>
                <BaseControl.VisualLabel>
                  {__("Alignment", "responsive-block-editor-addons")}
                </BaseControl.VisualLabel>
                <AlignmentToolbar
                  value={contentAlign}
                  onChange={(value) =>
                    setAttributes({
                      contentAlign: value,
                    })
                  }
                  controls={["left", "center", "right"]}
                  isCollapsed={false}
                />
              </BaseControl> */}
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
                              value={contentAlignMobile}
                              onChange={(value) =>
                                setAttributes({
                                  contentAlignMobile: value,
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
                              value={contentAlignTablet}
                              onChange={(value) =>
                                setAttributes({
                                  contentAlignTablet: value,
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
                              value={contentAlign}
                              onChange={(value) =>
                                setAttributes({
                                  contentAlign: value,
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

              <RbeaRangeControl
                label={__("Columns", "responsive-block-editor-addons")}
                value={count}
                onChange={(newCount) => {
                  let cloneTest_block = [...countUp];
                  if (cloneTest_block.length < newCount) {
                    const incAmount = Math.abs(
                      newCount - cloneTest_block.length
                    );

                    {
                      times(incAmount, (n) => {
                        cloneTest_block.push({
                          icon: "lightbulb",
                          title: "Title " + newCount,
                          amount: "1,234",
                          features: "Description",
                        });
                      });
                    }
                    setAttributes({ countUp: cloneTest_block });
                  } else {
                    const incAmount = Math.abs(
                      newCount - cloneTest_block.length
                    );
                    let data_new = cloneTest_block;
                    for (var i = 0; i < incAmount; i++) {
                      data_new.pop();
                    }
                    setAttributes({ countUp: data_new });
                  }
                  setAttributes({ count: newCount });
                }}
                min={1}
                max={4}
                step={1}
              />
            </PanelBody>

            <PanelBody
              title={__("Content", "responsive-block-editor-addons")}
              initialOpen={false}
            >
              <ToggleControl
                label={__("Enable Title", "responsive-block-editor-addons")}
                checked={resshowTitle}
                onChange={(value) =>
                  setAttributes({ resshowTitle: !resshowTitle })
                }
              />
              <ToggleControl
                label={__("Enable Number", "responsive-block-editor-addons")}
                checked={resshowNum}
                onChange={(value) => setAttributes({ resshowNum: !resshowNum })}
              />
              <ToggleControl
                label={__(
                  "Enable Description",
                  "responsive-block-editor-addons"
                )}
                checked={resshowDesc}
                onChange={(value) =>
                  setAttributes({ resshowDesc: !resshowDesc })
                }
              />
              <ToggleControl
                label={__("Enable Icon", "responsive-block-editor-addons")}
                checked={resshowIcon}
                onChange={(value) =>
                  setAttributes({ resshowIcon: !resshowIcon })
                }
              />
            </PanelBody>
          </InspectorTab>
          <InspectorTab key={"style"}>
            {resshowIcon && (
              <PanelBody
                title={__("Icon", "responsive-block-editor-addons")}
                initialOpen={true}
              >
                <Fragment>
                  <p className="components-base-control__label">
                    {__("Select Icon", "responsive-block-editor-addons")}
                  </p>
                  {times(count, (n) => frontIconControls(n))}
                </Fragment>
                <RbeaRangeControl
                  label={__("Icon Size", "responsive-block-editor-addons")}
                  value={iconsize}
                  onChange={(value) =>
                    setAttributes({
                      iconsize: value !== undefined ? value : 16,
                    })
                  }
                  min={0}
                  max={300}
                  allowReset
                />
                <RbeaColorControl
                  label = {__("Icon Color", "responsive-block-editor-addons")}
                  colorValue={icon_color}
                  onChange={(colorValue) =>
                    setAttributes({ icon_color: colorValue })
                  }
                  resetColor={() => setAttributes({ icon_color: "" })}
                />
                <RbeaTabRadioControl
                  label={__("Design", "responsive-block-editor-addons")}
                  value={iconStyle}
                  onChange={(value) => setAttributes({ iconStyle: value })}
                  options={[
                    { value: "none", label: __("Plain", "responsive-block-editor-addons") },
                    { value: "shaped", label: __("Shaped", "responsive-block-editor-addons") },
                    { value: "outline", label: __("Outline", "responsive-block-editor-addons") },
                  ]}
                />
                {"none" != iconStyle && (
                  <Fragment>
                    <RbeaColorControl
                      label = {__("Icon Shape / Outline Color", "responsive-block-editor-addons")}
                      colorValue={iconShapeColor}
                      onChange={(colorValue) =>
                        setAttributes({ iconShapeColor: colorValue })
                      }
                      resetColor={() => setAttributes({ iconShapeColor: "" })}
                    />
                      <RbeaBorderRadiusControl
                        attrNameTemplate="shapeBorder%s"
                        {...this.props}
                      />
                    <RbeaRangeControl
                      label={__("Outline Width", "responsive-block-editor-addons")}
                      value={shapeBorder}
                      onChange={(value) =>
                        setAttributes({ shapeBorder: value })
                      }
                      min={0}
                      max={9}
                    />
                  </Fragment>
                )}
              </PanelBody>
            )}
				<TypographyHelperControl
					title={__("Number Typography", "responsive-block-editor-addons")}
					attrNameTemplate="date%s"
					values = {{
					family: dateFontFamily,
					size: dateFontSize,
					sizeMobile: dateFontSizeMobile,
					sizeTablet: dateFontSizeTablet,
					weight: dateFontWeight,
					height: dateLineHeight,
          color: dateTypographyColor,
					}}
					showLetterSpacing = { false }
					showTextTransform = { false }
          showColorControl={true}
					setAttributes={ setAttributes }
					{...this.props}
				/>
				<TypographyHelperControl
					title={__("Heading Typography", "responsive-block-editor-addons")}
					attrNameTemplate="heading%s"
					values = {{
					family: headingFontFamily,
					size: headingFontSize,
					sizeMobile: headingFontSizeMobile,
					sizeTablet: headingFontSizeTablet,
					weight: headingFontWeight,
					height: headingLineHeight,
          color: headingTypographyColor,
					}}
					showLetterSpacing = { false }
					showTextTransform = { false }
          showColorControl={true}
					setAttributes={ setAttributes }
					{...this.props}
				/>
				<TypographyHelperControl
					title={__("Description Typography", "responsive-block-editor-addons")}
					attrNameTemplate="content%s"
					values = {{
					family: contentFontFamily,
					size: contentFontSize,
					sizeMobile: contentFontSizeMobile,
					sizeTablet: contentFontSizeTablet,
					weight: contentFontWeight,
					height: contentLineHeight,
          color: contentTypographyColor,
					}}
					showLetterSpacing = { false }
					showTextTransform = { false }
          showColorControl={true}
					setAttributes={ setAttributes }
					{...this.props}
				/>
            <PanelBody
              title={__("Color", "responsive-block-editor-addons")}
              initialOpen={false}
            >
               <RbeaColorControl
									label = {__("Background Color", "responsive-block-editor-addons")}
									colorValue={itemBackgroundColor}
									onChange={(colorValue) =>
										setAttributes({ itemBackgroundColor: colorValue })
									}
									resetColor={() => setAttributes({ itemBackgroundColor: "" })}
								/>
              <RbeaRangeControl
                label={__("Opacity", "responsive-block-editor-addons")}
                value={opacity}
                onChange={(value) =>
                  setAttributes({ opacity: value !== undefined ? value : 10 })
                }
                min={0}
                max={100}
                allowReset
              />
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
                title={"Icon Bottom Spacing"}
                attrNameTemplate="iconSpacing%s"
                values={{
                  desktop: iconSpacing,
                  tablet: iconSpacingTablet,
                  mobile: iconSpacingMobile,
                }}
                setAttributes={setAttributes}
                {...this.props}
              />
              <ResponsiveSpacingControl
                title={"Title Bottom Margin"}
                attrNameTemplate="titleSpace%s"
                values={{
                  desktop: titleSpace,
                  tablet: titleSpaceTablet,
                  mobile: titleSpaceMobile,
                }}
                setAttributes={setAttributes}
                {...this.props}
              />
              <ResponsiveSpacingControl
                title={"Number Bottom Margin"}
                attrNameTemplate="numSpace%s"
                values={{
                  desktop: numSpace,
                  tablet: numSpaceTablet,
                  mobile: numSpaceMobile,
                }}
                setAttributes={setAttributes}
                {...this.props}
              />
              <ResponsiveSpacingControl
                title={"Description Bottom Margin"}
                attrNameTemplate="contentSpace%s"
                values={{
                  desktop: contentSpace,
                  tablet: contentSpaceTablet,
                  mobile: contentSpaceMobile,
                }}
                setAttributes={setAttributes}
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
