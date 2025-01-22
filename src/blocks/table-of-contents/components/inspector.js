import fontOptions from "../../../utils/googlefonts";
import { loadGoogleFont } from "../../../utils/font";
import InspectorTab from "../../../components/InspectorTab";
import InspectorTabs from "../../../components/InspectorTabs";
import ColorBackgroundControl from "../../../settings-components/BlockBackgroundSettings/ColorBackgroundSettings";
import TypographyHelperControl from "../../../settings-components/TypographySettings";
import FontIconPicker from "@fonticonpicker/react-fonticonpicker";
import renderSVG from "../../../renderIcon";
import ResponsiveBlocksIcon from "../../../ResponsiveBlocksIcon.json";
import ResponsiveNewPaddingControl from "../../../settings-components/ResponsiveNewSpacingSettings/ResponsiveNewPaddingControl/index";
import ResponsiveNewMarginControl from "../../../settings-components/ResponsiveNewSpacingSettings/ResponsiveNewMarginControl/index";
import RbeaRangeControl from "../../../utils/components/rbea-range-control";
import RbeaColorControl from "../../../utils/components/rbea-color-control";
import RbeaTabRadioControl from "../../../utils/components/rbea-tab-radio-control";
import RbeaMediaUploadControl from "../../../utils/components/rbea-media-upload-control";
import RbeaBackgroundTypeControl from "../../../utils/components/rbea-background-type-control";
import RbeaBorderStyleTabControl from "../../../utils/components/rbea-border-style-tab-control";
import RbeaBorderRadiusControl from "../../../settings-components/RbeaBorderRadiusControl";
import { RadioControl} from "@wordpress/components";

/**
 * Inspector Controls
 */

// Setup the block
const { __ } = wp.i18n;
const { Component, Fragment } = wp.element;

// Import block components
const {
  InspectorControls,
  PanelColorSettings,
  ColorPalette,
  AlignmentToolbar,
  InspectorAdvancedControls,
  BlockAlignmentToolbar,
  MediaUpload,
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
  PanelRow,
} = wp.components;

let svg_icons = Object.keys(ResponsiveBlocksIcon);

/**
 * Create an Inspector Controls wrapper Component
 */
export default class Inspector extends Component {
  constructor(props) {
    super(...arguments);
    this.onRemoveVideo = this.onRemoveVideo.bind(this);
    this.onRemoveImage = this.onRemoveImage.bind(this);
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
    // Setup the attributes
    const {
      attributes: {
        mappingHeaders,
        isCollapsible,
        blockWidth,

        blockTopPadding,
        blockTopPaddingMobile,
        blockTopPaddingTablet,
        blockBottomPadding,
        blockBottomPaddingTablet,
        blockBottomPaddingMobile,
        blockRightPadding,
        blockRightPaddingMobile,
        blockRightPaddingTablet,
        blockLeftPadding,
        blockLeftPaddingTablet,
        blockLeftPaddingMobile,
        blockTopMargin,
        blockTopMarginMobile,
        blockTopMarginTablet,
        blockBottomMargin,
        blockBottomMarginTablet,
        blockBottomMarginMobile,
        blockRightMargin,
        blockRightMarginMobile,
        blockRightMarginTablet,
        blockLeftMargin,
        blockLeftMarginTablet,
        blockLeftMarginMobile,

        z_index,
        z_indexMobile,
        z_indexTablet,

        headingFontFamily,
        headingFontWeight,
        headingFontSize,
        headingFontSizeTablet,
        headingFontSizeMobile,
        headingLineHeight,

        contentFontFamily,
        contentFontWeight,
        contentFontSize,
        contentFontSizeTablet,
        contentFontSizeMobile,
        contentLineHeight,
        align,

        headingColor,
        headingBgColor,
        headingColorHover,
        headingBgColorHover,

        bodyColor,
        bodyBgColor,
        bodyColorHover,
        bodyBgColorHover,

        headingTopPadding,
        headingTopPaddingMobile,
        headingTopPaddingTablet,
        headingBottomPadding,
        headingBottomPaddingTablet,
        headingBottomPaddingMobile,
        headingRightPadding,
        headingRightPaddingMobile,
        headingRightPaddingTablet,
        headingLeftPadding,
        headingLeftPaddingTablet,
        headingLeftPaddingMobile,
        headingTopMargin,
        headingTopMarginMobile,
        headingTopMarginTablet,
        headingBottomMargin,
        headingBottomMarginTablet,
        headingBottomMarginMobile,
        headingRightMargin,
        headingRightMarginMobile,
        headingRightMarginTablet,
        headingLeftMargin,
        headingLeftMarginTablet,
        headingLeftMarginMobile,

        contentTopPadding,
        contentTopPaddingMobile,
        contentTopPaddingTablet,
        contentBottomPadding,
        contentBottomPaddingTablet,
        contentBottomPaddingMobile,
        contentRightPadding,
        contentRightPaddingMobile,
        contentRightPaddingTablet,
        contentLeftPadding,
        contentLeftPaddingTablet,
        contentLeftPaddingMobile,
        contentTopMargin,
        contentTopMarginMobile,
        contentTopMarginTablet,
        contentBottomMargin,
        contentBottomMarginTablet,
        contentBottomMarginMobile,
        contentRightMargin,
        contentRightMarginMobile,
        contentRightMarginTablet,
        contentLeftMargin,
        contentLeftMarginTablet,
        contentLeftMarginMobile,

        blockBorderStyle,
        blockBorderWidth,
        headingBorderTopWidth,
        headingBorderBottomWidth,
        headingBorderLeftWidth,
        headingBorderRightWidth,
        headingBorderTopWidthMobile,
        headingBorderBottomWidthMobile,
        headingBorderLeftWidthMobile,
        headingBorderRightWidthMobile,
        headingBorderTopWidthTablet,
        headingBorderBottomWidthTablet,
        headingBorderLeftWidthTablet,
        headingBorderRightWidthTablet,
        blockBorderRadius,
        headingBorderTopLeftRadius,
        headingBorderTopRightRadius,
        headingBorderBottomLeftRadius,
        headingBorderBottomRightRadius,
        headingBorderTopLeftRadiusMobile,
        headingBorderTopRightRadiusMobile,
        headingBorderBottomLeftRadiusMobile,
        headingBorderBottomRightRadiusMobile,
        headingBorderTopLeftRadiusTablet,
        headingBorderTopRightRadiusTablet,
        headingBorderBottomLeftRadiusTablet,
        headingBorderBottomRightRadiusTablet,
        headingBorderTopRadius,
        headingBorderRightRadius,
        headingBorderBottomRadius,
        headingBorderLeftRadius,
        headingBorderTopRadiusMobile,
        headingBorderRightRadiusMobile,
        headingBorderBottomRadiusMobile,
        headingBorderLeftRadiusMobile,
        headingBorderTopRadiusTablet,
        headingBorderRightRadiusTablet,
        headingBorderBottomRadiusTablet,
        headingBorderLeftRadiusTablet,
        headingBorderIsRadiusControlConnected,
        headingBorderIsRadiusValueUpdated,
        bodyBorderTopRadius,
        bodyBorderRightRadius,
        bodyBorderBottomRadius,
        bodyBorderLeftRadius,
        bodyBorderTopRadiusMobile,
        bodyBorderRightRadiusMobile,
        bodyBorderBottomRadiusMobile,
        bodyBorderLeftRadiusMobile,
        bodyBorderTopRadiusTablet,
        bodyBorderRightRadiusTablet,
        bodyBorderBottomRadiusTablet,
        bodyBorderLeftRadiusTablet,
        bodyBorderIsRadiusControlConnected,
        bodyBorderIsRadiusValueUpdated,
        blockBorderColor,
        headingBorderStyle,
        headingBorderWidth,
        headingBorderRadius,
        headingBorderColor,
        bodyBorderStyle,
        bodyBorderWidth,
        bodyBorderTopWidth,
        bodyBorderLeftWidth,
        bodyBorderRightWidth,
        bodyBorderBottomWidth,

        bodyBorderTopWidthTablet,
        bodyBorderLeftWidthTablet,
        bodyBorderRightWidthTablet,
        bodyBorderBottomWidthTablet,

        bodyBorderTopWidthMobile,
        bodyBorderLeftWidthMobile,
        bodyBorderRightWidthMobile,
        bodyBorderBottomWidthMobile,

        bodyBorderTopLeftRadiusMobile,
        bodyBorderTopRightRadiusMobile,
        bodyBorderBottomLeftRadiusMobile,
        bodyBorderBottomRightRadiusMobile,

        bodyBorderTopLeftRadiusTablet,
        bodyBorderTopRightRadiusTablet,
        bodyBorderBottomLeftRadiusTablet,
        bodyBorderBottomRightRadiusTablet,
        
        bodyBorderTopLeftRadius,
        bodyBorderTopRightRadius,
        bodyBorderBottomLeftRadius,
        bodyBorderBottomRightRadius,

        bodyBorderRadius,
        bodyBorderColor,
        tableType,
        orderListType,

        headerLayout,
        backgroundColor,
        backgroundImage,
        backgroundType,
        backgroundPosition,
        backgroundRepeat,
        backgroundSize,
        backgroundVideo,
        sectionHtmlTag,
        allowedAnchors,
        smoothScroll,
        scrollOffset,
        icon,
        icon_color,
        size,
        sizeTablet,
        sizeMobile,
        hideWidget,
        hideWidgetTablet,
        hideWidgetMobile,
        blockIsPaddingControlConnected,
        blockIsMarginControlConnected,
        imagePositionTab,
        backgroundSizeTablet,
        backgroundSizeMobile,
        backgroundPositionMobile,
        backgroundPositionTablet,
        imageSizeTab,
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

    const headingAndContentPaddingResetValues = {
      paddingTop: 15,
      paddingRight: 20,
      paddingBottom: 15,
      paddingLeft: 20,
      paddingTabletTop: 15,
      paddingTabletRight: 20,
      paddingTabletBottom: 15,
      paddingTabletLeft: 20,
      paddingMobileTop: 15,
      paddingMobileRight: 20,
      paddingMobileBottom: 15,
      paddingMobileLeft: 20,
    }

    const headingAndContentMarginResetValues = {
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

    const handleLayoutChange = (value) => {
      setAttributes({ headerLayout: value });
      if (value === "outline") {
        setAttributes({ headingBgColor: "#fff" });
        setAttributes({ headingColor: "#333" });
        setAttributes({ blockBorderStyle: "none" });
        setAttributes({ bodyBorderStyle: "solid" });
        setAttributes({ bodyBorderColor: "#0984ff" });
        setAttributes({ headingBorderStyle: "solid" });
        setAttributes({ headingBorderColor: "#0984ff" });
      } else {
        setAttributes({ headingBgColor: "#0984ff" });
        setAttributes({ headingColor: "#fff" });
        setAttributes({ blockBorderStyle: "solid" });
        setAttributes({ bodyBorderStyle: "none" });
        setAttributes({ headingBorderStyle: "none" });
        setAttributes({ headingBorderColor: "#0984ff" });
      }
    };

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

    const backgroundTypeOptions = [
      { value: "color", label: __("Color", "responsive-block-editor-addons") },
      { value: "image", label: __("Image", "responsive-block-editor-addons") },
      { value: "video", label: __("Video", "responsive-block-editor-addons") },
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

    // Background image URL
    let background_image_url = backgroundImage || '';

    // backward compatibility for border radius control 

    if (!headingBorderIsRadiusValueUpdated) {
      this.props.setAttributes(
        {
          headingBorderTopRadius:          headingBorderTopLeftRadius !== undefined ? headingBorderTopLeftRadius : headingBorderTopRadius,
          headingBorderRightRadius:       headingBorderTopRightRadius !== undefined ? headingBorderTopRightRadius : headingBorderBottomRadius,
          headingBorderLeftRadius:        headingBorderBottomLeftRadius !== undefined ? headingBorderBottomLeftRadius : headingBorderRightRadius,
          headingBorderBottomRadius:         headingBorderBottomRightRadius !== undefined ? headingBorderBottomRightRadius : headingBorderLeftRadius,
          headingBorderTopRadiusTablet:    headingBorderTopLeftRadiusTablet !== undefined ? headingBorderTopLeftRadiusTablet : headingBorderTopRadiusTablet,
          headingBorderRightRadiusTablet:  headingBorderTopRightRadiusTablet !== undefined ? headingBorderTopRightRadiusTablet : headingBorderRightRadiusTablet,
          headingBorderLeftRadiusTablet:   headingBorderBottomLeftRadiusTablet !== undefined ? headingBorderBottomLeftRadiusTablet : headingBorderLeftRadiusTablet,
          headingBorderBottomRadiusTablet: headingBorderBottomRightRadiusTablet !== undefined ? headingBorderBottomRightRadiusTablet : headingBorderBottomRadiusTablet,
          headingBorderTopRadiusMobile:    headingBorderTopLeftRadiusMobile !== undefined ? headingBorderTopLeftRadiusMobile : headingBorderTopRadiusMobile,
          headingBorderRightRadiusMobile:  headingBorderTopRightRadiusMobile !== undefined ? headingBorderTopRightRadiusMobile : headingBorderRightRadiusMobile,
          headingBorderLeftRadiusMobile:   headingBorderBottomLeftRadiusMobile !== undefined ? headingBorderBottomLeftRadiusMobile : headingBorderLeftRadiusMobile,
          headingBorderBottomRadiusMobile: headingBorderBottomRightRadiusMobile !== undefined ? headingBorderBottomRightRadiusMobile : headingBorderBottomRadiusMobile,
        }
      )
      this.props.setAttributes({headingBorderIsRadiusValueUpdated: true});
    }

    // backward compatibility for border radius control 

    if (!bodyBorderIsRadiusValueUpdated) {
      this.props.setAttributes(
        {
          bodyBorderTopRadius:          bodyBorderTopLeftRadius !== undefined ? bodyBorderTopLeftRadius : bodyBorderTopRadius,
          bodyBorderRightRadius:       bodyBorderTopRightRadius !== undefined ? bodyBorderTopRightRadius : bodyBorderBottomRadius,
          bodyBorderLeftRadius:        bodyBorderBottomLeftRadius !== undefined ? bodyBorderBottomLeftRadius : bodyBorderRightRadius,
          bodyBorderBottomRadius:         bodyBorderBottomRightRadius !== undefined ? bodyBorderBottomRightRadius : bodyBorderLeftRadius,
          bodyBorderTopRadiusTablet:    bodyBorderTopLeftRadiusTablet !== undefined ? bodyBorderTopLeftRadiusTablet : bodyBorderTopRadiusTablet,
          bodyBorderRightRadiusTablet:  bodyBorderTopRightRadiusTablet !== undefined ? bodyBorderTopRightRadiusTablet : bodyBorderRightRadiusTablet,
          bodyBorderLeftRadiusTablet:   bodyBorderBottomLeftRadiusTablet !== undefined ? bodyBorderBottomLeftRadiusTablet : bodyBorderLeftRadiusTablet,
          bodyBorderBottomRadiusTablet: bodyBorderBottomRightRadiusTablet !== undefined ? bodyBorderBottomRightRadiusTablet : bodyBorderBottomRadiusTablet,
          bodyBorderTopRadiusMobile:    bodyBorderTopLeftRadiusMobile !== undefined ? bodyBorderTopLeftRadiusMobile : bodyBorderTopRadiusMobile,
          bodyBorderRightRadiusMobile:  bodyBorderTopRightRadiusMobile !== undefined ? bodyBorderTopRightRadiusMobile : bodyBorderRightRadiusMobile,
          bodyBorderLeftRadiusMobile:   bodyBorderBottomLeftRadiusMobile !== undefined ? bodyBorderBottomLeftRadiusMobile : bodyBorderLeftRadiusMobile,
          bodyBorderBottomRadiusMobile: bodyBorderBottomRightRadiusMobile !== undefined ? bodyBorderBottomRightRadiusMobile : bodyBorderBottomRadiusMobile,
        }
      )
      this.props.setAttributes({bodyBorderIsRadiusValueUpdated: true});
    }

    // Border Color Component For Color&Hover Typography Control
		const headingTypographyColorControl = (
			<RbeaColorControl
        label = {__("Heading Color", "responsive-block-editor-addons")}
        colorValue={headingColor}
        onChange={(colorValue) => setAttributes({ headingColor: colorValue })}
        resetColor={() => setAttributes({ headingColor: "" })}
      />
		);

		const headingTypographyColorControlHover = (
			<RbeaColorControl
        label = {__("Heading Hover Color", "responsive-block-editor-addons")}
        colorValue={headingColorHover}
        onChange={(colorValue) => setAttributes({ headingColorHover: colorValue })}
        resetColor={() => setAttributes({ headingColorHover: "" })}
      />
		);

    // Border Color Component For Color&Hover Typography Control
		const contentTypographyColorControl = (
			<RbeaColorControl
        label = {__("Content Color", "responsive-block-editor-addons")}
        colorValue={bodyColor}
        onChange={(colorValue) => setAttributes({ bodyColor: colorValue })}
        resetColor={() => setAttributes({ bodyColor: "" })}
      />
		);

		const contentTypographyColorControlHover = (
			<RbeaColorControl
        label = {__("Content Hover Color", "responsive-block-editor-addons")}
        colorValue={bodyColorHover}
        onChange={(colorValue) => setAttributes({ bodyColorHover: colorValue })}
        resetColor={() => setAttributes({ bodyColorHover: "" })}
      />
		);

    const emptyColorControl = (
			<div className="responsive-block-editor-addons-empty-color-control"></div>
		);

    return (
      <InspectorControls key="inspector">
        <InspectorTabs>
          <InspectorTab key={"content"}>
            <PanelBody
              title={__("General", "responsive-block-editor-addons")}
              initialOpen={false}
            >
              <RbeaTabRadioControl
                label={__("Header Layout", "responsive-block-editor-addons")}
                value={headerLayout}
                onChange={(value) => handleLayoutChange(value)}
                options={[
                  { value: "fill", label: __("Fill Design", "responsive-block-editor-addons") },
                  { value: "outline", label: __("Outline Design", "responsive-block-editor-addons") },
                ]}
              />
              <Fragment>
                <BaseControl>
                  <p>
                    {__("Header Alignment", "responsive-block-editor-addons")}
                  </p>
                  <div className="responsive-block-editor-addons-alignment">
                    <AlignmentToolbar
                      value={align}
                      onChange={(value) =>
                        setAttributes({
                          align: value,
                        })
                      }
                      controls={["left", "center", "right"]}
                      isCollapsed={false}
                    />
                  </div>
                </BaseControl>
              </Fragment>
              <RbeaTabRadioControl
                label={__("Table Type", "responsive-block-editor-addons")}
                value={tableType}
                onChange={(value) => setAttributes({ tableType: value })}
                options={[
                  { value: "ordered", label: __("Ordered", "responsive-block-editor-addons") },
                  { value: "unordered", label: __("Unordered", "responsive-block-editor-addons") },
                ]}
              />
              {tableType === "ordered" && (
                <SelectControl
                  label={__("Order List Type", "responsive-block-editor-addons")}
                  value={orderListType}
                  onChange={(value) => setAttributes({ orderListType: value })}
                  options={[
                    { value: "none", label: __("None", "responsive-block-editor-addons") },
                    { value: "number", label: __("Number", "responsive-block-editor-addons") },
                    { value: "uppercase", label: __("Uppercase Letters", "responsive-block-editor-addons") },
                    { value: "lowercase", label: __("Lowercase Letters", "responsive-block-editor-addons") },
                  ]}
                />
              )}
              <h2>{__("Select Headings", "responsive-block-editor-addons")}</h2>
              <PanelRow>
                <div className="responsive-block-editor-addons-table-of-contents-select-heading-container">
                  <ToggleControl
                    label={__("H1", "responsive-block-editor-addons")}
                    id={"rbea_toggle_h1"}
                    checked={allowedAnchors["h1"]}
                    onChange={(value) =>
                      setAttributes({
                        allowedAnchors: { ...allowedAnchors, h1: value },
                      })
                    }
                  />
                </div>
              </PanelRow>
              <div className="responsive-block-editor-addons-table-of-contents-select-heading-container">
              <PanelRow>
                <ToggleControl
                  label={__("H2", "responsive-block-editor-addons")}
                  id={"rbea_toggle_h2"}
                  checked={allowedAnchors["h2"]}
                  onChange={(value) =>
                    setAttributes({
                      allowedAnchors: { ...allowedAnchors, h2: value },
                    })
                  }
                />
              </PanelRow>
              </div>
              <div className="responsive-block-editor-addons-table-of-contents-select-heading-container">
              <PanelRow>
                <ToggleControl
                  label={__("H3", "responsive-block-editor-addons")}
                  id={"rbea_toggle_h3"}
                  checked={allowedAnchors["h3"]}
                  onChange={(value) =>
                    setAttributes({
                      allowedAnchors: { ...allowedAnchors, h3: value },
                    })
                  }
                />
              </PanelRow>
              </div>
              <div className="responsive-block-editor-addons-table-of-contents-select-heading-container">
              <PanelRow>
                <ToggleControl
                  label={__("H4", "responsive-block-editor-addons")}
                  id={"rbea_toggle_h4"}
                  checked={allowedAnchors["h4"]}
                  onChange={(value) =>
                    setAttributes({
                      allowedAnchors: { ...allowedAnchors, h4: value },
                    })
                  }
                />
              </PanelRow>
              </div>
              <div className="responsive-block-editor-addons-table-of-contents-select-heading-container">
              <PanelRow>
                <ToggleControl
                  label={__("H5", "responsive-block-editor-addons")}
                  id={"rbea_toggle_h5"}
                  checked={allowedAnchors["h5"]}
                  onChange={(value) =>
                    setAttributes({
                      allowedAnchors: { ...allowedAnchors, h5: value },
                    })
                  }
                />
              </PanelRow>
              </div>
              <div className="responsive-block-editor-addons-table-of-contents-select-heading-container">
              <PanelRow>
                <ToggleControl
                  label={__("H6", "responsive-block-editor-addons")}
                  id={"rbea_toggle_h6"}
                  checked={allowedAnchors["h6"]}
                  onChange={(value) =>
                    setAttributes({
                      allowedAnchors: { ...allowedAnchors, h6: value },
                    })
                  }
                />
              </PanelRow>
              </div>
              <RbeaTabRadioControl
                label={__("Section HTML tag", "responsive-block-editor-addons")}
                value={sectionHtmlTag}
                onChange={(value) => setAttributes({ sectionHtmlTag: value })}
                options={[
                  { value: "section", label: __("Section", "responsive-block-editor-addons") },
                  { value: "div", label: __("Div", "responsive-block-editor-addons") },
                  { value: "footer", label: __("Footer", "responsive-block-editor-addons") },
                ]}
              />
            </PanelBody>
            <PanelBody title={__("Smooth Scroll", "responsive-block-editor-addons")} initialOpen={false}>
              <ToggleControl
                label={__("Enable Smooth Scroll", "responsive-block-editor-addons")}
                checked={smoothScroll}
                onChange={() => setAttributes({ smoothScroll: !smoothScroll })}
              />
              {smoothScroll === true && (
                <RbeaRangeControl
                  label={__("Scroll offset", "responsive-block-editor-addons")}
                  value={scrollOffset}
                  min={0}
                  max={200}
                  onChange={(scrollOffset) => setAttributes({ scrollOffset })}
                />
              )}
            </PanelBody>
            <PanelBody
              title={__("Collapsible", "responsive-block-editor-addons")}
              initialOpen={false}
            >
              <ToggleControl
                label={__(
                  "Collapsible Content",
                  "responsive-block-editor-addons"
                )}
                checked={isCollapsible}
                onChange={() =>
                  this.props.setAttributes({
                    isCollapsible: !isCollapsible,
                  })
                }
              />
            </PanelBody>
            { isCollapsible &&
            <>
              <PanelBody
                title={__("Icon", "responsive-block-editor-addons")}
                initialOpen={false}
              >
                <Fragment>
                <p className="components-base-control__label">
                  {__("Select Icon", "responsive-block-editor-addons")}
                </p>
                <FontIconPicker
                  icons={svg_icons}
                  renderFunc={renderSVG}
                  theme="default"
                  value={icon}
                  onChange={(value) => setAttributes({ icon: value })}
                  // isMulti={false}
                  noSelectedPlaceholder={__(
                    "Select Icon",
                    "responsive-block-editor-addons"
                  )}
                />
                <hr className="responsive-block-editor-addons-editor__separator" />
              </Fragment>
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
                              "Icon Size Mobile",
                              "responsive-block-editor-addons"
                            )}
                            value={sizeMobile}
                            onChange={(value) =>
                              setAttributes({
                                sizeMobile: value !== undefined ? value : 20,
                              })
                            }
                            min={0}
                            max={500}
                            allowReset
                          />
                        </Fragment>
                      );
                    } else if ("tablet" === tab.name) {
                      tabout = (
                        <Fragment>
                          <RbeaRangeControl
                            label={__(
                              "Icon Size Tablet",
                              "responsive-block-editor-addons"
                            )}
                            value={sizeTablet}
                            onChange={(value) =>
                              setAttributes({
                                sizeTablet: value !== undefined ? value : 20,
                              })
                            }
                            min={0}
                            max={500}
                            allowReset
                          />
                        </Fragment>
                      );
                    } else {
                      tabout = (
                        <Fragment>
                          <RbeaRangeControl
                            label={__(
                              "Icon Size",
                              "responsive-block-editor-addons"
                            )}
                            value={size}
                            onChange={(value) =>
                              setAttributes({
                                size: value !== undefined ? value : 20,
                              })
                            }
                            min={0}
                            max={500}
                            allowReset
                          />
                        </Fragment>
                      );
                    }

                  return <div>{tabout}</div>;
                }}
              </TabPanel>
              </PanelBody>
            </>
            }
          </InspectorTab>
          <InspectorTab key={"style"}>
            <PanelBody
              title={__("Heading", "responsive-block-editor-addons")}
              initialOpen={false}
            >
              <PanelBody
                title={__("Color Settings", "responsive-block-editor-addons")}
                initialOpen={false}
              >
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
                      className: "responsive-block-editor-addons-empty-tab",
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
                    if ("hover" === tabName.name) {
                      tabout = (
                        <Fragment>
                          <RbeaColorControl
                            label = {__("Background Hover Color", "responsive-block-editor-addons")}
                            colorValue={headingBgColorHover}
                            onChange={(colorValue) => setAttributes({ headingBgColorHover: colorValue })}
                            resetColor={() => setAttributes({ headingBgColorHover: "" })}
                          />
                        </Fragment>
                      );
                    } else if ("normal" === tabName.name) {
                      tabout = (
                        <Fragment>
                          <RbeaColorControl
                            label = {__("Background Color", "responsive-block-editor-addons")}
                            colorValue={headingBgColor}
                            onChange={(colorValue) => setAttributes({ headingBgColor: colorValue })}
                            resetColor={() => setAttributes({ headingBgColor: "" })}
                          />
                        </Fragment>
                      );
                    } else {
                      tabout = emptyColorControl;
                    }
                    return <div>{tabout}</div>;
                  }}
                </TabPanel>
              </PanelBody>

              {/* Padding */}
              <PanelBody
                title={__("Padding", "responsive-block-editor-addons")}
                initialOpen={false}
              >
                <ResponsiveNewPaddingControl
                  attrNameTemplate="heading%s"
                  resetValues={headingAndContentPaddingResetValues}
                  {...this.props}
                />
              </PanelBody>


              {/* Margin */}
              <PanelBody
                title={__("Margin", "responsive-block-editor-addons")}
                initialOpen={false}
              >
                <ResponsiveNewMarginControl
                  attrNameTemplate="heading%s"
                  resetValues={headingAndContentMarginResetValues}
                  {...this.props}
                />
              </PanelBody>


              {/* Border */}
              <PanelBody
                title={__("Border", "responsive-block-editor-addons")}
                initialOpen={false}
              >
                <RbeaBorderStyleTabControl
                  selected={headingBorderStyle}
                  onChange={(value) =>
                    setAttributes({ headingBorderStyle: value })
                  }
                />
                {"none" != headingBorderStyle && (
                  <Fragment>
                  <BaseControl.VisualLabel>
                      {__("Border Width:", "responsive-block-editor-addons")}
                    </BaseControl.VisualLabel>              
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
                                "Top (Mobile)",
                                "responsive-block-editor-addons"
                              )}
                              min={0}
                              max={2000}
                              allowReset
                              value={headingBorderTopWidthMobile}
                              onChange={(value) =>
                                setAttributes({
                                  headingBorderTopWidthMobile: value,
                                })
                              }
                            />
                            <RbeaRangeControl
                              label={__(
                                "Bottom (Mobile)",
                                "responsive-block-editor-addons"
                              )}
                              min={0}
                              max={2000}
                              allowReset
                              value={headingBorderBottomWidthMobile}
                              onChange={(value) =>
                                setAttributes({
                                  headingBorderBottomWidthMobile: value,
                                })
                              }
                            />
                            <RbeaRangeControl
                              label={__(
                                "Left (Mobile)",
                                "responsive-block-editor-addons"
                              )}
                              min={0}
                              max={2000}
                              allowReset
                              value={headingBorderLeftWidthMobile}
                              onChange={(value) =>
                                setAttributes({
                                  headingBorderLeftWidthMobile: value,
                                })
                              }
                            />
                            <RbeaRangeControl
                              label={__(
                                "Right (Mobile)",
                                "responsive-block-editor-addons"
                              )}
                              min={0}
                              max={2000}
                              allowReset
                              value={headingBorderRightWidthMobile}
                              onChange={(value) =>
                                setAttributes({
                                  headingBorderRightWidthMobile: value,
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
                                "Top (Tablet)",
                                "responsive-block-editor-addons"
                              )}
                              min={0}
                              max={2000}
                              allowReset
                              value={headingBorderTopWidthTablet}
                              onChange={(value) =>
                                setAttributes({
                                  headingBorderTopWidthTablet: value,
                                })
                              }
                            />
                            <RbeaRangeControl
                              label={__(
                                "Bottom (Tablet)",
                                "responsive-block-editor-addons"
                              )}
                              min={0}
                              max={2000}
                              allowReset
                              value={headingBorderBottomWidthTablet}
                              onChange={(value) =>
                                setAttributes({
                                  headingBorderBottomWidthTablet: value,
                                })
                              }
                            />
                            <RbeaRangeControl
                              label={__(
                                "Left (Tablet)",
                                "responsive-block-editor-addons"
                              )}
                              min={0}
                              max={2000}
                              allowReset
                              value={headingBorderLeftWidthTablet}
                              onChange={(value) =>
                                setAttributes({
                                  headingBorderLeftWidthTablet: value,
                                })
                              }
                            />
                            <RbeaRangeControl
                              label={__(
                                "Right (Tablet)",
                                "responsive-block-editor-addons"
                              )}
                              min={0}
                              max={2000}
                              allowReset
                              value={headingBorderRightWidthTablet}
                              onChange={(value) =>
                                setAttributes({
                                  headingBorderRightWidthTablet: value,
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
                                "Top",
                                "responsive-block-editor-addons"
                              )}
                              min={0}
                              max={2000}
                              allowReset
                              value={headingBorderTopWidth}
                              onChange={(value) =>
                                setAttributes({
                                  headingBorderTopWidth: value,
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
                              allowReset
                              value={headingBorderBottomWidth}
                              onChange={(value) =>
                                setAttributes({
                                  headingBorderBottomWidth: value,
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
                              allowReset
                              value={headingBorderLeftWidth}
                              onChange={(value) =>
                                setAttributes({
                                  headingBorderLeftWidth: value,
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
                              allowReset
                              value={headingBorderRightWidth}
                              onChange={(value) =>
                                setAttributes({
                                  headingBorderRightWidth: value,
                                })
                              }
                            />
                          </Fragment>
                        );
                      }
                      return <div>{tabout}</div>;
                    }}
                  </TabPanel>
                </Fragment>
                )}
                <RbeaBorderRadiusControl
                  attrNameTemplate="headingBorder%s"
                  {...this.props}
                />
                {"none" != headingBorderStyle && (
                  <Fragment>
                    <RbeaColorControl
                      label = {__("Border Color", "responsive-block-editor-addons")}
                      colorValue={headingBorderColor}
                      onChange={(colorValue) => setAttributes({ headingBorderColor: colorValue })}
                      resetColor={() => setAttributes({ headingBorderColor: "" })}
                    />
                  </Fragment>
                )}
              </PanelBody>
            </PanelBody>
            <TypographyHelperControl
                title={__("Heading Typography", "responsive-block-editor-addons")}
                attrNameTemplate="heading%s"
                values={{
                  family: headingFontFamily,
                  size: headingFontSize,
                  sizeMobile: headingFontSizeMobile,
                  sizeTablet: headingFontSizeTablet,
                  weight: headingFontWeight,
                  height: headingLineHeight,
                  typographyColorControl: headingTypographyColorControl,
									typographyColorControlHover: headingTypographyColorControlHover,
									emptyColorControl: emptyColorControl,
                }}
                showLetterSpacing={false}
                showTextTransform={false}
                showColorWithHoverControlTab={true}
                setAttributes={setAttributes}
                {...this.props}
              />
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
                <ColorBackgroundControl {...this.props} />
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
                    </Fragment>
                  )}
                </Fragment>
              )}
              {"video" == backgroundType && (
                <>
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
              </>
              )}
            </PanelBody>
            <PanelBody
              title={__("Body", "responsive-block-editor-addons")}
              initialOpen={false}
            >
              <PanelBody
                title={__("Color Settings", "responsive-block-editor-addons")}
                initialOpen={false}
              >
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
                      className: "responsive-block-editor-addons-empty-tab",
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
                    if ("hover" === tabName.name) {
                      tabout = (
                        <Fragment>
                          <RbeaColorControl
                            label = {__("Background Hover Color", "responsive-block-editor-addons")}
                            colorValue={bodyBgColorHover}
                            onChange={(colorValue) => setAttributes({ bodyBgColorHover: colorValue })}
                            resetColor={() => setAttributes({ bodyBgColorHover: "" })}
                          />
                        </Fragment>
                      );
                    } else if ("normal" === tabName.name) {
                      tabout = (
                        <Fragment>
                          <RbeaColorControl
                            label = {__("Background Color", "responsive-block-editor-addons")}
                            colorValue={bodyBgColor}
                            onChange={(colorValue) => setAttributes({ bodyBgColor: colorValue })}
                            resetColor={() => setAttributes({ bodyBgColor: "" })}
                          />
                        </Fragment>
                      );
                    } else {
                      tabout = emptyColorControl;
                    }
                    return <div>{tabout}</div>;
                  }}
                </TabPanel>
              </PanelBody>

              {/* Padding */}
              <PanelBody
                title={__("Padding", "responsive-block-editor-addons")}
                initialOpen={false}
              >
                <ResponsiveNewPaddingControl
                  attrNameTemplate="content%s"
                  resetValues={headingAndContentPaddingResetValues}
                  {...this.props}
                />
              </PanelBody>

              {/* Margin */}
              <PanelBody
                title={__("Margin", "responsive-block-editor-addons")}
                initialOpen={false}
              >
                <ResponsiveNewMarginControl
                  attrNameTemplate="content%s"
                  resetValues={headingAndContentMarginResetValues}
                  {...this.props}
                />
              </PanelBody>

              {/* Border */}
              <PanelBody
                title={__("Border", "responsive-block-editor-addons")}
                initialOpen={false}
              >
                <RbeaBorderStyleTabControl
                  selected={bodyBorderStyle}
                  onChange={(value) =>
                    setAttributes({ bodyBorderStyle: value })
                  }
                />
                {"none" != bodyBorderStyle && (
                  <Fragment>
                  <BaseControl.VisualLabel>
                      {__("Border Width:", "responsive-block-editor-addons")}
                    </BaseControl.VisualLabel>             
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
                                "Top (Mobile)",
                                "responsive-block-editor-addons"
                              )}
                              min={0}
                              max={2000}
                              allowReset
                              value={bodyBorderTopWidthMobile}
                              onChange={(value) =>
                                setAttributes({
                                  bodyBorderTopWidthMobile: value,
                                })
                              }
                            />
                            <RbeaRangeControl
                              label={__(
                                "Bottom (Mobile)",
                                "responsive-block-editor-addons"
                              )}
                              min={0}
                              max={2000}
                              allowReset
                              value={bodyBorderBottomWidthMobile}
                              onChange={(value) =>
                                setAttributes({
                                  bodyBorderBottomWidthMobile: value,
                                })
                              }
                            />
                            <RbeaRangeControl
                              label={__(
                                "Left (Mobile)",
                                "responsive-block-editor-addons"
                              )}
                              min={0}
                              max={2000}
                              allowReset
                              value={bodyBorderLeftWidthMobile}
                              onChange={(value) =>
                                setAttributes({
                                  bodyBorderLeftWidthMobile: value,
                                })
                              }
                            />
                            <RbeaRangeControl
                              label={__(
                                "Right (Mobile)",
                                "responsive-block-editor-addons"
                              )}
                              min={0}
                              max={2000}
                              allowReset
                              value={bodyBorderRightWidthMobile}
                              onChange={(value) =>
                                setAttributes({
                                  bodyBorderRightWidthMobile: value,
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
                                "Top (Tablet)",
                                "responsive-block-editor-addons"
                              )}
                              min={0}
                              max={2000}
                              allowReset
                              value={bodyBorderTopWidthTablet}
                              onChange={(value) =>
                                setAttributes({
                                  bodyBorderTopWidthTablet: value,
                                })
                              }
                            />
                            <RbeaRangeControl
                              label={__(
                                "Bottom (Tablet)",
                                "responsive-block-editor-addons"
                              )}
                              min={0}
                              max={2000}
                              allowReset
                              value={bodyBorderBottomWidthTablet}
                              onChange={(value) =>
                                setAttributes({
                                  bodyBorderBottomWidthTablet: value,
                                })
                              }
                            />
                            <RbeaRangeControl
                              label={__(
                                "Left (Tablet)",
                                "responsive-block-editor-addons"
                              )}
                              min={0}
                              max={2000}
                              allowReset
                              value={bodyBorderLeftWidthTablet}
                              onChange={(value) =>
                                setAttributes({
                                  bodyBorderLeftWidthTablet: value,
                                })
                              }
                            />
                            <RbeaRangeControl
                              label={__(
                                "Right (Tablet)",
                                "responsive-block-editor-addons"
                              )}
                              min={0}
                              max={2000}
                              allowReset
                              value={bodyBorderRightWidthTablet}
                              onChange={(value) =>
                                setAttributes({
                                  bodyBorderRightWidthTablet: value,
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
                                "Top",
                                "responsive-block-editor-addons"
                              )}
                              min={0}
                              max={2000}
                              allowReset
                              value={bodyBorderTopWidth}
                              onChange={(value) =>
                                setAttributes({
                                  bodyBorderTopWidth: value,
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
                              allowReset
                              value={bodyBorderBottomWidth}
                              onChange={(value) =>
                                setAttributes({
                                  bodyBorderBottomWidth: value,
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
                              allowReset
                              value={bodyBorderLeftWidth}
                              onChange={(value) =>
                                setAttributes({
                                  bodyBorderLeftWidth: value,
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
                              allowReset
                              value={bodyBorderRightWidth}
                              onChange={(value) =>
                                setAttributes({
                                  bodyBorderRightWidth: value,
                                })
                              }
                            />
                          </Fragment>
                        );
                      }
                      return <div>{tabout}</div>;
                    }}
                  </TabPanel>
                </Fragment>
                )}
                <RbeaBorderRadiusControl
                  attrNameTemplate="bodyBorder%s"
                  {...this.props}
                />
                {"none" != bodyBorderStyle && (
                  <Fragment>
                    <RbeaColorControl
                      label = {__("Border Color", "responsive-block-editor-addons")}
                      colorValue={bodyBorderColor}
                      onChange={(colorValue) => setAttributes({ bodyBorderColor: colorValue })}
                      resetColor={() => setAttributes({ bodyBorderColor: "" })}
                    />
                  </Fragment>
                )}
              </PanelBody>
            </PanelBody>
            <TypographyHelperControl
                title={__("Content Typography", "responsive-block-editor-addons")}
                attrNameTemplate="content%s"
                values={{
                  family: contentFontFamily,
                  size: contentFontSize,
                  sizeMobile: contentFontSizeMobile,
                  sizeTablet: contentFontSizeTablet,
                  weight: contentFontWeight,
                  height: contentLineHeight,
                  typographyColorControl: contentTypographyColorControl,
									typographyColorControlHover: contentTypographyColorControlHover,
									emptyColorControl: emptyColorControl,
                }}
                showLetterSpacing={false}
                showTextTransform={false}
                showColorWithHoverControlTab={true}
                setAttributes={setAttributes}
                {...this.props}
              />
            <PanelBody
              title={__("Spacing", "responsive-block-editor-addons")}
              initialOpen={false}
            >
                <RbeaRangeControl
                  label={__("Width", "responsive-block-editor-addons")}
                  value={blockWidth}
                  onChange={(value) =>
                    this.props.setAttributes({
                      blockWidth: value,
                    })
                  }
                  min={0}
                  max={100}
                  step={1}
                />
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
            { isCollapsible &&
              <>
              <PanelBody
               title={__("Icon", "responsive-block-editor-addons")}
               initialOpen={false}
              >
              <RbeaColorControl
                label = {__("Icon Color", "responsive-block-editor-addons")}
                colorValue={icon_color}
                onChange={(colorValue) => setAttributes({ icon_color: colorValue })}
                resetColor={() => setAttributes({ icon_color: "" })}
              />
              </PanelBody>
              </>
            }
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