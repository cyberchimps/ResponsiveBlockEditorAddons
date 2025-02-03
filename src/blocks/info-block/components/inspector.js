/**
 * Inspector Controls
 */

import FontIconPicker from "@fonticonpicker/react-fonticonpicker";
import BoxShadowControl from "../../../utils/components/box-shadow";
import icons from "./../../../utils/components/icons";
import renderSVG from "../../../renderIcon";
import ResponsiveBlocksIcon from "../../../ResponsiveBlocksIcon.json";
import fontOptions from "../../../utils/googlefonts";
import { loadGoogleFont } from "../../../utils/font";
import BoxShadowControlHelper from "../../../utils/components/box-shadow-helper";
import InspectorTab from "../../../components/InspectorTab";
import InspectorTabs from "../../../components/InspectorTabs";
import BlockBorderHelperControl from "../../../settings-components/BlockBorderSettings";
import ImageBackgroundControl from "../../../settings-components/BlockBackgroundSettings/ImageBackgroundSettings";
import ColorBackgroundControl from "../../../settings-components/BlockBackgroundSettings/ColorBackgroundSettings";
import ResponsiveSpacingControl from "../../../settings-components/ResponsiveSpacingSettings";
import TypographyHelperControl from "../../../settings-components/TypographySettings";
import ButtonSettingsControl from "../../../settings-components/ButtonSettings";
import ResponsiveNewMarginControl from "../../../settings-components/ResponsiveNewSpacingSettings/ResponsiveNewMarginControl/index";
import ResponsiveNewPaddingControl from "../../../settings-components/ResponsiveNewSpacingSettings/ResponsiveNewPaddingControl/index";
import RbeaRangeControl from "../../../utils/components/rbea-range-control";
import RbeaColorControl from "../../../utils/components/rbea-color-control";
import RbeaTabRadioControl from "../../../utils/components/rbea-tab-radio-control";
import RbeaMediaUploadControl from "../../../utils/components/rbea-media-upload-control";
import RbeaBlockBorderHelperControl from "../../../settings-components/RbeaBlockBorderSettings";
import RbeaBorderRadiusControl from "../../../settings-components/RbeaBorderRadiusControl";
import stackOnIcons from "../../../utils/components/rbea-tab-radio-control/rbea-stack-on-icons";
import RbeaWidthRangeControl from "../../../utils/components/rbea-width-range-control";

// Setup the block
const { __ } = wp.i18n;
const { Component, Fragment } = wp.element;

// Import block components
const {
  InspectorControls,
  InspectorAdvancedControls,
  PanelColorSettings,
  RichText,
  AlignmentToolbar,
  BlockControls,
  MediaUpload,
  ColorPalette,
} = wp.blockEditor;

// Import Inspector components
const {
  PanelBody,
  ToggleControl,
  RangeControl,
  SelectControl,
  TextControl,
  BaseControl,
  Button,
  ButtonGroup,
  Icon,
  TabPanel,
  Dashicon,
  RadioControl,
} = wp.components;

let svg_icons = Object.keys(ResponsiveBlocksIcon);

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
/**
 * Create an Inspector Controls wrapper Component
 */
export default class Inspector extends Component {
  constructor(props) {
    super(...arguments);
    this.getIfbIcon = this.getIfbIcon.bind(this);
    this.toggleTarget = this.toggleTarget.bind(this);
    this.toggleBoxTarget = this.toggleBoxTarget.bind(this);
    this.toggleResponsive = this.toggleResponsive.bind(this);
    this.getCtaicon = this.getCtaicon.bind(this);
    this.onRemoveImage = this.onRemoveImage.bind(this);
    this.onSelectImage = this.onSelectImage.bind(this);
  }

  getIfbIcon(value) {
    this.props.setAttributes({ icon: value });
  }

  getCtaicon(value) {
    this.props.setAttributes({ ctaIcon: value });
  }

  /*
   * Event to set Image as while adding.
   */
  onSelectImage(media) {
    const { iconImage } = this.props.attributes;
    const { setAttributes } = this.props;

    if (!media || !media.url) {
      setAttributes({ iconImage: null });
      return;
    }
    setAttributes({ iconImage: media });
  }

  /*
   * Event to set Image as null while removing.
   */
  onRemoveImage() {
    const { setAttributes } = this.props;

    setAttributes({ iconImage: null });
  }

  /**
   * Function Name: toggleTarget.
   */
  toggleTarget() {
    const { buttonTarget } = this.props.attributes;
    const { setAttributes } = this.props;

    setAttributes({ buttonTarget: !buttonTarget });
  }

  toggleBoxTarget() {
    const { resBoxTarget } = this.props.attributes;
    const { setAttributes } = this.props;

    setAttributes({ resBoxTarget: !resBoxTarget });
  }

  /**
   * Function Name: toggleResponsive.
   */
  toggleResponsive() {
    const { responsiveDesign } = this.props.attributes;
    const { setAttributes } = this.props;

    setAttributes({ responsiveDesign: !responsiveDesign });
  }

  render() {
    // Setup the attributes
    const {
      attributes: {
        resheadingAlign,
        resheadingColor,
        ressubheadingColor,
        resprefixColor,
        resprefixFontSize,
        resprefixFontWeight,
        resprefixLineHeight,
        resheadingTag,
        resheadFontFamily,
        resheadFontSize,
        resheadFontSizeMobile,
        resheadFontSizeTablet,
        resheadFontWeight,
        resheadLineHeight,
        ressubHeadFontFamily,
        ressubHeadFontSize,
        ressubHeadFontSizeTablet,
        ressubHeadFontSizeMobile,
        ressubHeadFontWeight,
        ressubHeadLineHeight,
        resseparatorWidthType,
        resseperatorSpace,
        resheadSpace,
        resheadSpaceMobile,
        resheadSpaceTablet,
        ressubHeadSpace,
        ressubHeadSpaceMobile,
        ressubHeadSpaceTablet,
        icon,
        iconColor,
        resIconSize,
        imgiconPosition,
        source_type,
        ressourceAlign,
        ressourceAlignMobile,
        ressourceAlignTablet,
        resseperatorPosition,
        resseperatorStyle,
        resseperatorWidth,
        resseperatorColor,
        resseperatorThickness,
        resctaType,
        resctaText,
        resctaLink,
        buttonTarget,
        ctaIcon,
        resctaLinkColor,
        resctaFontSize,
        resctaFontWeight,
        ctaColor,
        ctaBackColor,
        ctaVpadding,
        ctaHpadding,
        ctaBorderColor,
        resprefixSpace,
        resprefixSpaceMobile,
        resprefixSpaceTablet,
        iconLeftMargin,
        iconRightMargin,
        iconTopMargin,
        iconBottomMargin,
        iconLeftMarginMobile,
        iconRightMarginMobile,
        iconTopMarginMobile,
        iconBottomMarginMobile,
        iconLeftMarginTablet,
        iconRightMarginTablet,
        iconTopMarginTablet,
        iconBottomMarginTablet,
        iconImage,
        imageSize,
        imageWidth,
        imageWidthTablet,
        imageWidthMobile,
        imageWidthType,
        stack,
        resshowPrefix,
        resshowTitle,
        resshowDesc,
        inheritFromTheme,
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
        imageBoxShadowColor,
        imageBoxShadowHOffset,
        imageBoxShadowVOffset,
        imageBoxShadowBlur,
        imageBoxShadowSpread,
        imageBoxShadowPosition,
        backgroundColor,
        contentPadding,
        contentPaddingMobile,
        contentPaddingTablet,
        opacity,
        dimRatio,
        imgURL,
        imgID,
        ctaHoverColor,
        ctaHoverBackColor,
        ctaHoverBorderColor,
        imagePosition,
        imageRepeat,
        thumbsize,
        sepSpace,
        sepSpaceMobile,
        sepSpaceTablet,
        icon_color,
        icon_hcolor,
        resImageBorderColor,
        resImageBorderRadius,
        resImageTopRadius,
        resImageTopRadiusMobile,
        resImageTopRadiusTablet,
        resImageRightRadius,
        resImageRightRadiusMobile,
        resImageRightRadiusTablet,
        resImageBottomRadius,
        resImageBottomRadiusMobile,
        resImageBottomRadiusTablet,
        resImageLeftRadius,
        resImageLeftRadiusMobile,
        resImageLeftRadiusTablet,
        resImageIsRadiusControlConnected,
        resImageIsRadiusValueUpdated,
        resImageBorderWidth,
        resImageBorderStyle,
        alignment,
        imageopacity,
        ctaTextFontFamily,
        ctaTextFontSize,
        ctaTextFontSizeMobile,
        ctaTextFontSizeTablet,
        ctaTextFontWeight,
        ctaTextLineHeight,
        ctaBottomMargin,
        ctaBottomMarginMobile,
        ctaBottomMarginTablet,
        resBoxLink,
        resBoxTarget,
        hoverboxShadowColor,
        hoverboxShadowHOffset,
        hoverboxShadowVOffset,
        hoverboxShadowBlur,
        hoverboxShadowSpread,
        hoverboxShadowPosition,
        iconBackgroundColor,
        iconBackgroundHoverColor,
        iconBackgroundType,
        iconBorderRadius,
        iconTopRadius,
        iconRightRadius,
        iconBottomRadius,
        iconLeftRadius,
        iconTopRadiusTablet,
        iconRightRadiusTablet,
        iconBottomRadiusTablet,
        iconLeftRadiusTablet,
        iconTopRadiusMobile,
        iconRightRadiusMobile,
        iconBottomRadiusMobile,
        iconLeftRadiusMobile,
        iconIsRadiusControlConnected,
        iconIsRadiusValueUpdated,
        iconBorderWidth,
        iconPadding,
        backgroundImage,
        backgroundImagePosition,
        backgroundAttachment,
        backgroundImageRepeat,
        backgroundImageSize,
        ctaBorderStyle,
        ctaBorderWidth,
        ctaBorderRadius,
        ctaHpaddingTablet,
        ctaHpaddingMobile,
        ctaVpaddingTablet,
        ctaVpaddingMobile,
        buttonbackgroundColor1,
        buttonbackgroundColor2,
        buttoncolorLocation1,
        buttoncolorLocation2,
        buttongradientDirection,
        buttonbackgroundType,
        buttonHbackgroundType,
        animationName,
        animationDirection,
        animationRepeat,
        animationDuration,
        animationDelay,
        animationCurve,
        hideWidget,
        hideWidgetTablet,
        hideWidgetMobile,
        z_index,
        z_indexMobile,
        z_indexTablet,
        iconIsMarginControlConnected,
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
        blockIsMarginControlConnected,
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
        blockIsPaddingControlConnected,
        newSpacingValuesUpdated,
        blockIsTypographyColorValueUpdated,
        ressubHeadTypographyColor,
        resheadTypographyColor,
        ctaTextTypographyColor,
        resheadBottomSpacing,
        resheadBottomSpacingMobile,
        resheadBottomSpacingTablet,
        ressubHeadBottomSpacing,
        ressubHeadBottomSpacingMobile,
        ressubHeadBottomSpacingTablet,
        ctaTextBottomSpacing,
        ctaTextBottomSpacingMobile,
        ctaTextBottomSpacingTablet,
        backgroundPosition,
        backgroundPositionMobile,
        backgroundPositionTablet,
        backgroundSize,
        backgroundSizeTablet,
        backgroundSizeMobile,
        backgroundRepeat,
        imagePositionTab,
        imageSizeTab,
        backgroundImageValueUpdated,
        widthType,
        widthTypeValueUpdated,
      },
      setAttributes,
    } = this.props;

    const iconMarginResetValues = {
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

    // To populate new control values with existing padding margin control values for backward compatibility.
    if (!newSpacingValuesUpdated) {
      this.props.setAttributes(
        {
          blockTopPadding:          contentPadding !== undefined ? contentPadding : blockTopPadding,
          blockBottomPadding:       contentPadding !== undefined ? contentPadding : blockBottomPadding,
          blockLeftPadding:         contentPadding !== undefined ? contentPadding : blockLeftPadding,
          blockRightPadding:        contentPadding !== undefined ? contentPadding : blockRightPadding,
          blockTopPaddingTablet:    contentPaddingTablet !== undefined ? contentPaddingTablet : blockTopPaddingTablet,
          blockBottomPaddingTablet: contentPaddingTablet !== undefined ? contentPaddingTablet : blockBottomPaddingTablet,
          blockRightPaddingTablet:  contentPaddingTablet !== undefined ? contentPaddingTablet : blockRightPaddingTablet,
          blockLeftPaddingTablet:   contentPaddingTablet !== undefined ? contentPaddingTablet : blockLeftPaddingTablet,
          blockTopPaddingMobile:    contentPaddingMobile !== undefined ? contentPaddingMobile : blockTopPaddingMobile,
          blockBottomPaddingMobile: contentPaddingMobile !== undefined ? contentPaddingMobile : blockBottomPaddingMobile,
          blockLeftPaddingMobile:   contentPaddingMobile !== undefined ? contentPaddingMobile : blockLeftPaddingMobile,
          blockRightPaddingMobile:  contentPaddingMobile !== undefined ? contentPaddingMobile : blockRightPaddingMobile,
        }
      )
    }
    this.props.setAttributes({newSpacingValuesUpdated: true});

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
    // Update color values
    const onChangeBackgroundColor = (value) =>
      setAttributes({ backgroundColor: value });

    // Icon properties.
    const icon_props = {
      icons: svg_icons,
      value: icon,
      onChange: this.getIfbIcon,
      isMulti: false,
      renderFunc: renderSVG,
      noSelectedPlaceholder: __(
        "Select Icon",
        "responsive-block-editor-addons"
      ),
    };

    // Settings for icon.
    const iconControls = (
      <Fragment>
        <FontIconPicker {...icon_props} />
        <RbeaRangeControl
          label={__("Icon Size", "responsive-block-editor-addons")}
          value={resIconSize}
          onChange={(value) =>
            setAttributes({ resIconSize: value !== undefined ? value : 40 })
          }
          min={10}
          max={300}
          beforeIcon=""
          allowReset
        />
         <RbeaColorControl
            label = {__("Icon Color", "responsive-block-editor-addons")}
            colorValue={icon_color}
            onChange={(colorValue) => setAttributes({ icon_color: colorValue })}
            resetColor={() => setAttributes({ icon_color: "" })}
          />
        <RbeaColorControl
          label = {__("Icon Hover Color", "responsive-block-editor-addons")}
          colorValue={icon_hcolor}
          onChange={(colorValue) => setAttributes({ icon_hcolor: colorValue })}
          resetColor={() => setAttributes({ icon_hcolor: "" })}
        />
        <RbeaTabRadioControl
          label={__("Background Type", "responsive-block-editor-addons")}
          value={iconBackgroundType}
          onChange={(value) => setAttributes({ iconBackgroundType: value })}
          options={[
            { value: "none", label: __("None", "responsive-block-editor-addons") },
            { value: "solid", label: __("Solid", "responsive-block-editor-addons") },
            { value: "outline", label: __("Outline", "responsive-block-editor-addons") },
          ]}
        />
        {"outline" === iconBackgroundType && (
          <Fragment>
            <RbeaColorControl
              label = {__("Border Color", "responsive-block-editor-addons")}
              colorValue={iconBackgroundColor}
              onChange={(colorValue) => setAttributes({ iconBackgroundColor: colorValue })}
              resetColor={() => setAttributes({ iconBackgroundColor: "" })}
            />
            <RbeaColorControl
              label = {__("Border Hover Color", "responsive-block-editor-addons")}
              colorValue={iconBackgroundHoverColor}
              onChange={(colorValue) => setAttributes({ iconBackgroundHoverColor: colorValue })}
              resetColor={() => setAttributes({ iconBackgroundHoverColor: "" })}
            />
            <RbeaBorderRadiusControl
              attrNameTemplate="icon%s"
              {...this.props}
            />
            <RbeaRangeControl
              label={__("Icon Border Width", "responsive-block-editor-addons")}
              value={iconBorderWidth}
              onChange={(value) => setAttributes({ iconBorderWidth: value })}
              min={0}
              max={100}
            />
            <RbeaRangeControl
              label={__(
                "Icon Background Padding",
                "responsive-block-editor-addons"
              )}
              value={iconPadding}
              onChange={(value) => setAttributes({ iconPadding: value })}
              min={0}
              max={100}
            />
          </Fragment>
        )}
        {"solid" === iconBackgroundType && (
          <Fragment>
            <RbeaColorControl
              label = {__("Background Color", "responsive-block-editor-addons")}
              colorValue={iconBackgroundColor}
              onChange={(colorValue) => setAttributes({ iconBackgroundColor: colorValue })}
              resetColor={() => setAttributes({ iconBackgroundColor: "" })}
            />
            <RbeaColorControl
              label = {__("Background Hover Color", "responsive-block-editor-addons")}
              colorValue={iconBackgroundHoverColor}
              onChange={(colorValue) => setAttributes({ iconBackgroundHoverColor: colorValue })}
              resetColor={() => setAttributes({ iconBackgroundHoverColor: "" })}
            />
            <RbeaBorderRadiusControl
              attrNameTemplate="icon%s"
              {...this.props}
            />
            <RbeaRangeControl
              label={__(
                "Icon Background Padding",
                "responsive-block-editor-addons"
              )}
              value={iconPadding}
              onChange={(value) => setAttributes({ iconPadding: value })}
              min={0}
              max={100}
            />
          </Fragment>
        )}
      </Fragment>
    );

    let image_name = __("Select Image", "responsive-block-editor-addons");
    if (iconImage) {
      if (iconImage.url == null || iconImage.url == "") {
        image_name = __("Select Image", "responsive-block-editor-addons");
      } else {
        image_name = __("Replace Image", "responsive-block-editor-addons");
      }
    }

    // Update color values
    const onChangeiconColor = (value) => setAttributes({ iconColor: value });
    var advancedControls;
    var boxShadowAdvancedControls;
    var resetBoxShadowAdvancedControls;
    advancedControls = (
      <div>
      <Fragment>
        <RbeaColorControl
          label = {__("Color", "responsive-block-editor-addons")}
          colorValue={imageBoxShadowColor}
          onChange={(colorValue) => setAttributes({ imageBoxShadowColor: colorValue })}
          resetColor={() => setAttributes({ imageBoxShadowColor: "" })}
        />
        </Fragment>
        <Fragment>
        <RbeaRangeControl
          label = {__("Horizontal", "responsive-block-editor-addons")}
          value={imageBoxShadowHOffset}
          onChange={(value) =>
            setAttributes({
              imageBoxShadowHOffset: value !== undefined ? value : 0,
            })
          }
          min={-100}
          max={100}
          allowReset
        />
        </Fragment>
        <Fragment>
        <RbeaRangeControl
          label={__("Vertical", "responsive-block-editor-addons")}
          value={imageBoxShadowVOffset}
          onChange={(value) =>
            setAttributes({
              imageBoxShadowVOffset: value !== undefined ? value : 0,
            })
          }
          min={-100}
          max={100}
          allowReset
        />
        </Fragment>
        <Fragment>
        <RbeaRangeControl
          label={__("Blur", "responsive-block-editor-addons")}
          value={imageBoxShadowBlur}
          onChange={(value) =>
            setAttributes({
              imageBoxShadowBlur: value !== undefined ? value : 0,
            })
          }
          min={0}
          max={100}
          allowReset
        />
        </Fragment>
        <Fragment>
        <RbeaRangeControl
          label={__("Spread", "responsive-block-editor-addons")}
          value={imageBoxShadowSpread}
          onChange={(value) =>
            setAttributes({
              imageBoxShadowSpread: value !== undefined ? value : 0,
            })
          }
          min={0}
          max={100}
          allowReset
        />
        </Fragment>
        <Fragment>
        <RbeaTabRadioControl
          label={__("Position", "responsive-block-editor-addons")}
          value={imageBoxShadowPosition}
          onChange={(value) => setAttributes({ imageBoxShadowPosition: value })}
          options={[
            { value: "inset", label: __("Inset", "responsive-block-editor-addons") },
            { value: "outset", label: __("Outset", "responsive-block-editor-addons") },
          ]}
        />
        </Fragment>
      </div>
    );

    const imageControls = (
      <Fragment>
          <RbeaMediaUploadControl
            label={__("Image", "responsive-block-editor-addons")}
            value={{
              url: iconImage? iconImage.url : '',
            }}
            onChange={this.onSelectImage}
            mediaType={'image'}
          />
          {iconImage && iconImage.url !== "null" && iconImage.url !== "" && (
            <RbeaRangeControl
              label={__("Image Opacity", "responsive-block-editor-addons")}
              value={imageopacity}
              onChange={(value) =>
                setAttributes({
                  imageopacity: value !== undefined ? value : 100,
                })
              }
              min={0}
              max={100}
              allowReset
            />
          )}
        {iconImage && iconImage.url !== "null" && iconImage.url !== "" && (
          <Fragment>
            <ToggleControl
              label={__("Custom Width", "responsive-block-editor-addons")}
              checked={imageWidthType}
              onChange={(value) =>
                setAttributes({ imageWidthType: !imageWidthType })
              }
              help={__(
                "Turn this off to inherit the natural width of Image.",
                "responsive-block-editor-addons"
              )}
            />
            {imageWidthType && (
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
                            "Width (px)",
                            "responsive-block-editor-addons"
                          )}
                          value={imageWidthMobile}
                          onChange={(value) =>
                            setAttributes({
                              imageWidthMobile: value,
                            })
                          }
                          min={0}
                          max={1000}
                          beforeIcon=""
                        />
                      </Fragment>
                    );
                  } else if ("tablet" === tab.name) {
                    tabout = (
                      <Fragment>
                        <RbeaRangeControl
                          label={__(
                            "Width (px)",
                            "responsive-block-editor-addons"
                          )}
                          value={imageWidthTablet}
                          onChange={(value) =>
                            setAttributes({
                              imageWidthTablet: value,
                            })
                          }
                          min={0}
                          max={1000}
                          beforeIcon=""
                        />
                      </Fragment>
                    );
                  } else {
                    tabout = (
                      <Fragment>
                        <RbeaRangeControl
                          label={__(
                            "Width (px)",
                            "responsive-block-editor-addons"
                          )}
                          value={imageWidth}
                          onChange={(value) =>
                            setAttributes({
                              imageWidth: value,
                            })
                          }
                          min={0}
                          max={1000}
                          beforeIcon=""
                        />
                      </Fragment>
                    );
                  }

                  return <div>{tabout}</div>;
                }}
              </TabPanel>
            )}
            <PanelBody
              title={__(
                "Image Border Settings",
                "responsive-block-editor-addons"
              )}
              initialOpen={false}
            >
                <RbeaBlockBorderHelperControl
                    attrNameTemplate="resImage%s"
                    label = 'Border Radius'
                    values={{ radius: resImageBorderRadius, style: resImageBorderStyle, width: resImageBorderWidth, color: resImageBorderColor }}
                    setAttributes={setAttributes}
                    {...this.props}
                />
            </PanelBody>
              <PanelBody
                  title={__("Image Box Shadow", "responsive-block-editor-addons")}
                  initialOpen={false}
              >
                  {advancedControls}
              </PanelBody>
          </Fragment>
        )}
      </Fragment>
    );

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

    // backward compatibility for image border radius control

    if (!resImageIsRadiusValueUpdated) {
      this.props.setAttributes(
        {
          resImageTopRadius:          resImageBorderRadius !== undefined ? resImageBorderRadius : resImageTopRadius,
          resImageRightRadius:        resImageBorderRadius !== undefined ? resImageBorderRadius : resImageRightRadius,
          resImageBottomRadius:       resImageBorderRadius !== undefined ? resImageBorderRadius : resImageBottomRadius,
          resImageLeftRadius:         resImageBorderRadius !== undefined ? resImageBorderRadius : resImageLeftRadius,
          resImageTopRadiusTablet:    resImageBorderRadius !== undefined ? resImageBorderRadius : resImageTopRadiusTablet,
          resImageRightRadiusTablet:  resImageBorderRadius !== undefined ? resImageBorderRadius : resImageRightRadiusTablet,
          resImageLeftRadiusTablet:   resImageBorderRadius !== undefined ? resImageBorderRadius : resImageLeftRadiusTablet,
          resImageBottomRadiusTablet: resImageBorderRadius !== undefined ? resImageBorderRadius : resImageBottomRadiusTablet,
          resImageTopRadiusMobile:    resImageBorderRadius !== undefined ? resImageBorderRadius : resImageTopRadiusMobile,
          resImageRightRadiusMobile:  resImageBorderRadius !== undefined ? resImageBorderRadius : resImageRightRadiusMobile,
          resImageBottomRadiusMobile: resImageBorderRadius !== undefined ? resImageBorderRadius : resImageBottomRadiusMobile,
          resImageLeftRadiusMobile:   resImageBorderRadius !== undefined ? resImageBorderRadius : resImageLeftRadiusMobile,
        }
      )
      this.props.setAttributes({resImageIsRadiusValueUpdated: true});
    }

    // backward compatibility for icon border radius control

    if (!iconIsRadiusValueUpdated) {
      this.props.setAttributes(
        {
          iconTopRadius:          iconBorderRadius !== undefined ? iconBorderRadius : iconTopRadius,
          iconBottomRadius:       iconBorderRadius !== undefined ? iconBorderRadius : iconBottomRadius,
          iconLeftRadius:         iconBorderRadius !== undefined ? iconBorderRadius : iconLeftRadius,
          iconRightRadius:        iconBorderRadius !== undefined ? iconBorderRadius : iconRightRadius,
          iconTopRadiusTablet:    iconBorderRadius !== undefined ? iconBorderRadius : iconTopRadiusTablet,
          iconBottomRadiusTablet: iconBorderRadius !== undefined ? iconBorderRadius : iconBottomRadiusTablet,
          iconRightRadiusTablet:  iconBorderRadius !== undefined ? iconBorderRadius : iconRightRadiusTablet,
          iconLeftRadiusTablet:   iconBorderRadius !== undefined ? iconBorderRadius : iconLeftRadiusTablet,
          iconTopRadiusMobile:    iconBorderRadius !== undefined ? iconBorderRadius : iconTopRadiusMobile,
          iconBottomRadiusMobile: iconBorderRadius !== undefined ? iconBorderRadius : iconBottomRadiusMobile,
          iconLeftRadiusMobile:   iconBorderRadius !== undefined ? iconBorderRadius : iconLeftRadiusMobile,
          iconRightRadiusMobile:  iconBorderRadius !== undefined ? iconBorderRadius : iconRightRadiusMobile,
        }
      )
      this.props.setAttributes({iconIsRadiusValueUpdated: true});
    }

    // backward compatibility for typography settings control
    if (!blockIsTypographyColorValueUpdated) {
      this.props.setAttributes(
        {
          ctaTextTypographyColor:          resctaLinkColor !== undefined ? resctaLinkColor : ctaTextTypographyColor,
          resheadTypographyColor:         resheadingColor !== undefined ? resheadingColor : resheadTypographyColor,
          ressubHeadTypographyColor:         ressubheadingColor !== undefined ? ressubheadingColor : ressubHeadTypographyColor,

          resheadBottomSpacing: resheadSpace !== undefined ? resheadSpace : resheadBottomSpacing,
          resheadBottomSpacingMobile: resheadSpaceMobile !== undefined ? resheadSpaceMobile : resheadBottomSpacingMobile,
          resheadBottomSpacingTablet: resheadSpaceTablet !== undefined ? resheadSpaceTablet : resheadBottomSpacingTablet,

          ressubHeadBottomSpacing: ressubHeadSpace !== undefined ? ressubHeadSpace : ressubHeadBottomSpacing,
          ressubHeadBottomSpacingMobile: ressubHeadSpaceMobile !== undefined ? ressubHeadSpaceMobile : ressubHeadBottomSpacingMobile,
          ressubHeadBottomSpacingTablet: ressubHeadSpaceTablet !== undefined ? ressubHeadSpaceTablet : ressubHeadBottomSpacingTablet,

          ctaTextBottomSpacing: ctaBottomMargin !== undefined ? ctaBottomMargin : ctaTextBottomSpacing,
          ctaTextBottomSpacingMobile: ctaBottomMarginMobile !== undefined ? ctaBottomMarginMobile : ctaTextBottomSpacingMobile,
          ctaTextBottomSpacingTablet: ctaBottomMarginTablet !== undefined ? ctaBottomMarginTablet : ctaTextBottomSpacingTablet,
        }
      )
      this.props.setAttributes({blockIsTypographyColorValueUpdated: true});
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

    // backward compatibility for background image control
    if (!backgroundImageValueUpdated) {
      this.props.setAttributes(
        {
          backgroundRepeat: imageRepeat !== undefined ? imageRepeat : backgroundRepeat,
          backgroundPosition: imagePosition !== undefined ? imagePosition : backgroundPosition,
          backgroundPositionMobile: imagePosition !== undefined ? imagePosition : backgroundPositionMobile,
          backgroundPositionTablet: imagePosition !== undefined ? imagePosition : backgroundPositionTablet,
          backgroundSize: thumbsize !== undefined ? thumbsize : backgroundSize,
          backgroundSizeMobile: thumbsize !== undefined ? thumbsize : backgroundSizeMobile,
          backgroundSizeTablet: thumbsize !== undefined ? thumbsize : backgroundSizeTablet,
        }
      )
      this.props.setAttributes({backgroundImageValueUpdated: true});
    }

    // Background image URL
    let background_image_url = backgroundImage || '';

    //widthType
    if (!widthTypeValueUpdated) {
      this.props.setAttributes(
        {
          widthType: resseparatorWidthType !== undefined ? resseparatorWidthType : widthType,
        }
      )
      this.props.setAttributes({ widthTypeValueUpdated: true });
    }

    return (
      <InspectorControls key="inspector">
        <InspectorTabs>
          <InspectorTab key={"content"}>
            <PanelBody
              title={__("Image/Icon", "responsive-block-editor-addons")}
            >
              <SelectControl
                label={__("Select Position", "responsive-block-editor-addons")}
                value={imgiconPosition}
                onChange={(value) => setAttributes({ imgiconPosition: value })}
                options={[
                  {
                    value: "above-title",
                    label: __("Above Title", "responsive-block-editor-addons"),
                  },
                  {
                    value: "below-title",
                    label: __("Below Title", "responsive-block-editor-addons"),
                  },
                  {
                    value: "left-title",
                    label: __(
                      "Left of Title",
                      "responsive-block-editor-addons"
                    ),
                  },
                  {
                    value: "right-title",
                    label: __(
                      "Right of Title",
                      "responsive-block-editor-addons"
                    ),
                  },
                  {
                    value: "left",
                    label: __(
                      "Left of Text and Title",
                      "responsive-block-editor-addons"
                    ),
                  },
                  {
                    value: "right",
                    label: __(
                      "Right of Text and Title",
                      "responsive-block-editor-addons"
                    ),
                  },
                ]}
              />
              {(imgiconPosition == "left" || imgiconPosition == "right") && (
                <Fragment>
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
                    help={__(
                      "Note: Choose on what breakpoint the Info Box will stack.", "responsive-block-editor-addons"
                    )}
                    onChange={(value) => setAttributes({ stack: value })}
                    defaultValue={"none"}
                    allowReset={true}
								    hasIcon={true}
								    optionHasBorder={true}
                  />
                  <p>
                    {__(
                      "Alignment when stacked",
                      "responsive-block-editor-addons"
                    )}
                  </p>
                  <AlignmentToolbar
                    value={alignment}
                    onChange={(value) =>
                      setAttributes({
                        alignment: value,
                      })
                    }
                    controls={["left", "center", "right", "full"]}
                    isCollapsed={false}
                  />
                </Fragment>
              )}
              <hr className="responsive-block-editor-addons-editor__separator" />

              <RbeaTabRadioControl
                label={__("Select Source", "responsive-block-editor-addons")}
                value={source_type}
                onChange={(value) => setAttributes({ source_type: value })}
                options={[
                  {
                    value: "none",
                    label: __("None", "responsive-block-editor-addons"),
                  },
                  {
                    value: "icon",
                    label: __("Icon", "responsive-block-editor-addons"),
                  },
                  {
                    value: "image",
                    label: __("Image", "responsive-block-editor-addons"),
                  },
                ]}
              />
              {imgiconPosition &&
                imgiconPosition !== "above-title" &&
                imgiconPosition !== "below-title" && (
                  <RbeaTabRadioControl
                    label={__(
                      "Vertical Alignment",
                      "responsive-block-editor-addons"
                    )}
                    value={ressourceAlign}
                    onChange={(value) =>
                      setAttributes({ ressourceAlign: value })
                    }
                    options={[
                      {
                        value: "top",
                        label: __("Top", "responsive-block-editor-addons"),
                      },
                      {
                        value: "middle",
                        label: __("Middle", "responsive-block-editor-addons"),
                      },
                    ]}
                  />
                )}

              {(stack === "none" || stack === "mobile") &&
                imgiconPosition &&
                imgiconPosition !== "above-title" &&
                imgiconPosition !== "below-title" && (
                  <RbeaTabRadioControl
                    label={__(
                      "Vertical Alignment Tablet",
                      "responsive-block-editor-addons"
                    )}
                    value={ressourceAlignTablet}
                    onChange={(value) =>
                      setAttributes({ ressourceAlignTablet: value })
                    }
                    options={[
                      {
                        value: "top",
                        label: __("Top", "responsive-block-editor-addons"),
                      },
                      {
                        value: "middle",
                        label: __("Middle", "responsive-block-editor-addons"),
                      },
                    ]}
                  />
                )}

              {stack === "none" &&
                imgiconPosition &&
                imgiconPosition !== "above-title" &&
                imgiconPosition !== "below-title" && (
                  <RbeaTabRadioControl
                    label={__(
                      "Vertical Alignment Mobile",
                      "responsive-block-editor-addons"
                    )}
                    value={ressourceAlignMobile}
                    onChange={(value) =>
                      setAttributes({ ressourceAlignMobile: value })
                    }
                    options={[
                      {
                        value: "top",
                        label: __("Top", "responsive-block-editor-addons"),
                      },
                      {
                        value: "middle",
                        label: __("Middle", "responsive-block-editor-addons"),
                      },
                    ]}
                  />
                )}

              {source_type && source_type == "icon" && iconControls}

              {source_type && source_type == "image" && imageControls}
            </PanelBody>
            <PanelBody
              title={__("Call To Action", "responsive-block-editor-addons")}
              initialOpen={false}
            >
              <SelectControl
                label={__("Type", "responsive-block-editor-addons")}
                value={resctaType}
                onChange={(value) => setAttributes({ resctaType: value })}
                options={[
                  {
                    value: "none",
                    label: __("None", "responsive-block-editor-addons"),
                  },
                  {
                    value: "text",
                    label: __("Text", "responsive-block-editor-addons"),
                  },
                  {
                    value: "button",
                    label: __("Button", "responsive-block-editor-addons"),
                  },
                  {
                    value: "complete_box",
                    label: __("Complete Box", "responsive-block-editor-addons"),
                  },
                ]}
              />
              {(resctaType === "text" || resctaType === "button") && (
                <Fragment>
                  <TextControl
                    label={__("Text", "responsive-block-editor-addons")}
                    value={resctaText}
                    onChange={(value) => setAttributes({ resctaText: value })}
                  />
                </Fragment>
              )}
              {resctaType === "text" && (
                <Fragment>
                  <TextControl
                    label={__("Link", "responsive-block-editor-addons")}
                    value={resctaLink}
                    onChange={(value) => setAttributes({ resctaLink: value })}
                  />
                  <ToggleControl
                    label={__(
                      "Open in new Window",
                      "responsive-block-editor-addons"
                    )}
                    checked={buttonTarget}
                    onChange={this.toggleTarget}
                  />
                </Fragment>
              )}
              {resctaType === "complete_box" && (
                <Fragment>
                  <TextControl
                    label={__("Link", "responsive-block-editor-addons")}
                    value={resBoxLink}
                    onChange={(value) => setAttributes({ resBoxLink: value })}
                  />
                  <ToggleControl
                    label={__(
                      "Open in new Window",
                      "responsive-block-editor-addons"
                    )}
                    checked={resBoxTarget}
                    onChange={this.toggleBoxTarget}
                  />
                </Fragment>
              )}
              {resctaType == "button" && (
                <ButtonSettingsControl
                  {...this.props}
                  showMarginControls={false}
                  showBackColorOpacity={false}
                  showGradientHover={false}
                  showTextOpacity={false}
                />
              )}
            </PanelBody>
          </InspectorTab>
          <InspectorTab key={"style"}>
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
                label={__("Hover Box Shadow", "responsive-block-editor-addons")}
                attrNameTemplate="hover%s"
                boxShadowColor={{ value: hoverboxShadowColor }}
                boxShadowHOffset={{ value: hoverboxShadowHOffset }}
                boxShadowVOffset={{ value: hoverboxShadowVOffset }}
                boxShadowBlur={{ value: hoverboxShadowBlur }}
                boxShadowSpread={{ value: hoverboxShadowSpread }}
                boxShadowPosition={{ value: hoverboxShadowPosition }}
              />
            </PanelBody>
            <PanelBody
              title={__("Background", "responsive-block-editor-addons")}
              initialOpen={false}
            >
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

              {backgroundImage && !!backgroundImage.length && (
                <RbeaRangeControl
                  label={__("Image Opacity", "responsive-block-editor-addons")}
                  value={dimRatio}
                  onChange={(value) =>
                    this.props.setAttributes({
                      dimRatio: value,
                    })
                  }
                  min={0}
                  max={100}
                  step={10}
                />
              )}

              <PanelBody
                title={__("Background Color", "responsive-block-editor-addons")}
                initialOpen={false}
              >
                <ColorBackgroundControl
                  {...this.props}
                />
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
              </PanelBody>
            </PanelBody>
            <PanelBody
              title={__("Separator", "responsive-block-editor-addons")}
              initialOpen={false}
            >
              <div className="responsive-block-editor-addons-typography-settings">
              <SelectControl
                label={__("Position", "responsive-block-editor-addons")}
                value={resseperatorPosition}
                onChange={(value) =>
                  setAttributes({ resseperatorPosition: value })
                }
                options={[
                  {
                    value: "after_icon",
                    label: __(
                      "After Icon/Image",
                      "responsive-block-editor-addons"
                    ),
                  },
                  {
                    value: "after_prefix",
                    label: __("After Prefix", "responsive-block-editor-addons"),
                  },
                  {
                    value: "after_title",
                    label: __("After Title", "responsive-block-editor-addons"),
                  },
                  {
                    value: "after_desc",
                    label: __(
                      "After Description",
                      "responsive-block-editor-addons"
                    ),
                  },
                ]}
              />
              </div>
              <div className = "rbea-repeat-selector-wrapper">
                <RbeaTabRadioControl
                  label={__("Style", "responsive-block-editor-addons")}
                  value={resseperatorStyle}
                  onChange={(value) =>
                    setAttributes({ resseperatorStyle: value })
                  }
                  allowReset={true}
                  defaultValue={"none"}
                  options={[
                    {
                      value: "solid",
                      label: __("Solid", "responsive-block-editor-addons"),
                    },
                    {
                      value: "double",
                      label: __("Double", "responsive-block-editor-addons"),
                    },
                    {
                      value: "dashed",
                      label: __("Dashed", "responsive-block-editor-addons"),
                    },
                    {
                      value: "dotted",
                      label: __("Dotted", "responsive-block-editor-addons"),
                    },
                  ]}
                />
              </div>
              {"none" !== resseperatorStyle && (
                <Fragment>
                  <RbeaRangeControl
                    label={__("Thickness", "responsive-block-editor-addons")}
                    value={resseperatorThickness}
                    onChange={(value) =>
                      setAttributes({
                        resseperatorThickness: value !== undefined ? value : 2,
                      })
                    }
                    min={1}
                    max={100}
                    beforeIcon=""
                    allowReset
                  />
                  <RbeaWidthRangeControl
                    label={__("Width", "responsive-block-editor-addons")}
                    value={resseperatorWidth}
                    onChange={(value) =>
                      setAttributes({
                        resseperatorWidth: value !== undefined ? value : 30,
                      })
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
                  <RbeaColorControl
                    label = {__("Separator Color", "responsive-block-editor-addons")}
                    colorValue={resseperatorColor}
                    onChange={(colorValue) => setAttributes({ resseperatorColor: colorValue })}
                    resetColor={() => setAttributes({ resseperatorColor: "" })}
                  />
                </Fragment>
              )}
            </PanelBody>
			{(resctaType !== "none" || resshowTitle || resshowDesc) && (
				<>
				  	{resctaType !== "none" && (
					  	<TypographyHelperControl
							title={__("Call To Action Typography", "responsive-block-editor-addons")}
							attrNameTemplate="ctaText%s"
							values={{
							family: ctaTextFontFamily,
							size: ctaTextFontSize,
							sizeMobile: ctaTextFontSizeMobile,
							sizeTablet: ctaTextFontSizeTablet,
							weight: ctaTextFontWeight,
							height: ctaTextLineHeight,
              color: ctaTextTypographyColor,
              bottomSpacing: ctaTextBottomSpacing,
              bottomSpacingMoible: ctaTextBottomSpacingMobile,
              bottomSpacingTablet: ctaTextBottomSpacingTablet,
							}}
							showLetterSpacing={false}
              showColorControl={true}
							showTextTransform={false}
              showTextBottomSpacing={true}
							setAttributes={setAttributes}
							{...this.props}
					  	/>
				  	)}
					{resshowTitle && (
						<TypographyHelperControl
							title={__("Title Typography", "responsive-block-editor-addons")}
							attrNameTemplate="reshead%s"
							values = {{
								family: resheadFontFamily,
								size: resheadFontSize,
								sizeMobile: resheadFontSizeMobile,
								sizeTablet: resheadFontSizeTablet,
								weight: resheadFontWeight,
								height: resheadLineHeight,
                color: resheadTypographyColor,
                bottomSpacing: resheadBottomSpacing,
                bottomSpacingMoible: resheadBottomSpacingMobile,
                bottomSpacingTablet: resheadBottomSpacingTablet,
							}}
							showLetterSpacing = { false }
							showTextTransform = { false }
              showColorControl={true}
              showTextBottomSpacing={true}
							setAttributes={ setAttributes }
							{...this.props}
						/>
					)}
					{resshowDesc && (
						<TypographyHelperControl
							title={__("Description Typography", "responsive-block-editor-addons")}
							attrNameTemplate="ressubHead%s"
							values = {{
								family: ressubHeadFontFamily,
								size: ressubHeadFontSize,
								sizeMobile: ressubHeadFontSizeMobile,
								sizeTablet: ressubHeadFontSizeTablet,
								weight: ressubHeadFontWeight,
								height: ressubHeadLineHeight,
                color: ressubHeadTypographyColor,
                bottomSpacing: ressubHeadBottomSpacing,
                bottomSpacingMoible: ressubHeadBottomSpacingMobile,
                bottomSpacingTablet: ressubHeadBottomSpacingTablet,
							}}
							showLetterSpacing = { false }
							showTextTransform = { false }
              showColorControl={true}
              showTextBottomSpacing={true}
							setAttributes={ setAttributes }
							{...this.props}
						/>
					)}
			  	</>
			)}
            <PanelBody title={__("Content")} initialOpen={false}>
              <ToggleControl
                label={__("Enable Prefix", "responsive-block-editor-addons")}
                checked={resshowPrefix}
                onChange={(value) =>
                  setAttributes({ resshowPrefix: !resshowPrefix })
                }
              />
              {resshowPrefix && (
                <Fragment>
                  <RbeaColorControl
                    label = {__("Prefix Color", "responsive-block-editor-addons")}
                    colorValue={resprefixColor}
                    onChange={(colorValue) => setAttributes({ resprefixColor: colorValue })}
                    resetColor={() => setAttributes({ resprefixColor: "" })}
                  />
                  <hr className="responsive-block-editor-addons-editor__separator" />
                </Fragment>
              )}

              <ToggleControl
                label={__("Enable Title", "responsive-block-editor-addons")}
                checked={resshowTitle}
                onChange={(value) =>
                  setAttributes({ resshowTitle: !resshowTitle })
                }
              />
              {resshowTitle && (
                <Fragment>
                  <RbeaTabRadioControl
                    label={__("Title Tag", "responsive-block-editor-addons")}
                    value={resheadingTag}
                    onChange={(value) =>
                      setAttributes({ resheadingTag: value })
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
                  <hr className="responsive-block-editor-addons-editor__separator" />
                </Fragment>
              )}
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
                title={"Prefix Bottom Margin"}
                attrNameTemplate="resprefixSpace%s"
                values={{
                  desktop: resprefixSpace,
                  tablet: resprefixSpaceTablet,
                  mobile: resprefixSpaceMobile,
                }}
                setAttributes={setAttributes}
                {...this.props}
              />
              <ResponsiveSpacingControl
                title={"Separator Bottom Margin"}
                attrNameTemplate="sepSpace%s"
                values={{
                  desktop: sepSpace,
                  tablet: sepSpaceTablet,
                  mobile: sepSpaceMobile,
                }}
                setAttributes={setAttributes}
                {...this.props}
              />
              {source_type !== "none" && (
                <PanelBody
                  title={__(
                    "Image/Icon Margin",
                    "responsive-block-editor-addons"
                  )}
                  initialOpen={false}
                >
                  <ResponsiveNewMarginControl
                  attrNameTemplate="icon%s"
                  resetValues={iconMarginResetValues}
                  {...this.props}
                />
                </PanelBody>
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
              title={__("Icon Hover Animation", "responsive-block-editor-addons")}
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
          </InspectorTab>
        </InspectorTabs>
      </InspectorControls>
    );
  }
}
