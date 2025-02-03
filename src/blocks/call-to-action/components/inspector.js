/**
 * Inspector Controls
 */
import FontIconPicker from "@fonticonpicker/react-fonticonpicker";
import BoxShadowControl from "../../../utils/components/box-shadow";
import ResponsiveBlocksIcon from "../../../ResponsiveBlocksIcon.json";
import renderSVG from "../../../renderIcon";
import fontOptions from "../../../utils/googlefonts";
import { loadGoogleFont } from "../../../utils/font";
import InspectorTab from "../../../components/InspectorTab";
import InspectorTabs from "../../../components/InspectorTabs";
import ColorBackgroundControl from "../../../settings-components/BlockBackgroundSettings/ColorBackgroundSettings";
import ImageBackgroundControl from "../../../settings-components/BlockBackgroundSettings/ImageBackgroundSettings";
import ResponsiveSpacingControl from "../../../settings-components/ResponsiveSpacingSettings";
import GradientBackgroundControl from "../../../settings-components/BlockBackgroundSettings/GradientBackgroundSettings";
import TypographyHelperControl from "../../../settings-components/TypographySettings";
import ButtonSettingsControl from "../../../settings-components/ButtonSettings";
import ResponsiveNewPaddingControl from "../../../settings-components/ResponsiveNewSpacingSettings/ResponsiveNewPaddingControl/index";
import ResponsiveNewMarginControl from "../../../settings-components/ResponsiveNewSpacingSettings/ResponsiveNewMarginControl/index";
import RbeaRangeControl from "../../../utils/components/rbea-range-control";
import RbeaColorControl from "../../../utils/components/rbea-color-control";
import RbeaTabRadioControl from "../../../utils/components/rbea-tab-radio-control";
import RbeaBackgroundTypeControl from "../../../utils/components/rbea-background-type-control";
import RbeaBorderRadiusControl from "../../../settings-components/RbeaBorderRadiusControl";
import RbeaMediaUploadControl from "../../../utils/components/rbea-media-upload-control";

// Setup the block
const { __ } = wp.i18n;
const { Component, Fragment } = wp.element;

// Import block components
const {
  InspectorControls,
  PanelColorSettings,
  MediaUpload,
  ColorPalette,
} = wp.blockEditor;

// Import Inspector components
const {
  Button,
  Icon,
  PanelBody,
  RangeControl,
  SelectControl,
  ToggleControl,
  TabPanel,
  Dashicon,
  RadioControl,
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
      ctaBackColor,
      ctaColor,
      buttonSize,
      buttonShape,
      buttonTarget,
      ctaTitleFontFamily,
      ctaTitleFontSize,
      ctaTitleFontSizeMobile,
      ctaTitleFontSizeTablet,
      ctaTextFontFamily,
      ctaTextFontSize,
      ctaTextFontSizeMobile,
      ctaTextFontSizeTablet,
      backgroundColor,
      ctaTextColor,
      dimRatio,
      backgroundImage,
      imgID,
      opacity,
      ctaTitleFontWeight,
      ctaTitleLineHeight,
      ctaTextFontWeight,
      ctaTextLineHeight,
      ctaVpadding,
      ctaHpadding,
      icon,
      iconPosition,
      ctaHoverBackColor,
      ctaHoverColor,
      ctaBorderColor,
      ctaHoverBorderColor,
      resctaType,
      titleSpace,
      titleSpaceMobile,
      titleSpaceTablet,
      subtitleSpace,
      subtitleSpaceMobile,
      subtitleSpaceTablet,
      iconSpace,
      backgroundType,
      gradientDirection,
      colorLocation1,
      colorLocation2,
      backgroundColor1,
      backgroundColor2,
      buttonbackgroundType,
      buttongradientDirection,
      buttoncolorLocation1,
      buttoncolorLocation2,
      buttonbackgroundColor1,
      buttonbackgroundColor2,
      buttonSpace,
      buttonSpaceMobile,
      buttonSpaceTablet,
      borderRadius,
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
      boxShadowColor,
      boxShadowHOffset,
      boxShadowVOffset,
      boxShadowBlur,
      boxShadowSpread,
      boxShadowPosition,
      icon_color,
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
      backgroundImagePosition,
      backgroundImageRepeat,
      backgroundImageSize,
      buttonTextFontFamily,
      buttonTextFontSize,
      buttonTextFontSizeMobile,
      buttonTextFontSizeTablet,
      buttonTextLineHeight,
      buttonTextFontWeight,
      ctaBorderStyle,
      ctaBorderWidth,
      ctaBorderRadius,
      ctaBlockTopRadius,
      ctaBlockRightRadius,
      ctaBlockBottomRadius,
      ctaBlockLeftRadius,
      ctaBlockTopRadiusTablet,
      ctaBlockRightRadiusTablet,
      ctaBlockBottomRadiusTablet,
      ctaBlockLeftRadiusTablet,
      ctaBlockTopRadiusMobile,
      ctaBlockRightRadiusMobile,
      ctaBlockBottomRadiusMobile,
      ctaBlockLeftRadiusMobile,
      ctaBlockIsRadiusControlConnected,
      ctaHpaddingTablet,
      ctaHpaddingMobile,
      ctaVpaddingTablet,
      ctaVpaddingMobile,
      ctaTextOpacity,
      buttonHbackgroundType,
      hideWidget,
      hideWidgetTablet,
      hideWidgetMobile,
      //Z-Index
      z_index,
      z_indexMobile,
      z_indexTablet,
      blockIsPaddingControlConnected,
      blockIsMarginControlConnected,
      blockIsTypographyColorValueUpdated,
      ctaTitleTypographyColor,
      ctaTitleBottomSpacing,
      ctaTitleBottomSpacingMobile,
      ctaTitleBottomSpacingTablet,
      ctaTextBottomSpacing,
      ctaTextBottomSpacingMobile,
      ctaTextBottomSpacingTablet,
      backgroundPosition,
      backgroundPositionMobile,
      backgroundPositionTablet,
      backgroundAttachment,
      backgroundRepeat,
      backgroundSize,
      backgroundSizeTablet,
      backgroundSizeMobile,
      imagePositionTab,
      imageSizeTab,
      backgroundImageValueUpdated,
    } = this.props.attributes;
    const { setAttributes } = this.props;

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

    // Button size values
    const buttonSizeOptions = [
      {
        value: "responsive-block-editor-addons-cta-button-size-small",
        label: __("Small", "responsive-block-editor-addons"),
      },
      {
        value: "responsive-block-editor-addons-cta-button-size-medium",
        label: __("Medium", "responsive-block-editor-addons"),
      },
      {
        value: "responsive-block-editor-addons-cta-button-size-large",
        label: __("Large", "responsive-block-editor-addons"),
      },
      {
        value: "responsive-block-editor-addons-cta-button-size-extralarge",
        label: __("Extra Large", "responsive-block-editor-addons"),
      },
    ];

    // Button shape
    const buttonShapeOptions = [
      {
        value: "responsive-block-editor-addons-cta-button-shape-square",
        label: __("Square", "responsive-block-editor-addons"),
      },
      {
        value: "responsive-block-editor-addons-cta-button-shape-rounded",
        label: __("Rounded Square", "responsive-block-editor-addons"),
      },
      {
        value: "responsive-block-editor-addons-cta-button-shape-circular",
        label: __("Circular", "responsive-block-editor-addons"),
      },
    ];

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

    // Change the image
    const onSelectImage = (img) => {
      setAttributes({
        imgID: img.id,
        imgURL: img.url,
        imgAlt: img.alt,
      });
    };

    // Clear the image
    const onRemoveImage = () => {
      setAttributes({
        imgID: null,
        imgURL: null,
        imgAlt: null,
      });
    };

    // Update color values
    const onChangeBackgroundColor = (value) =>
      setAttributes({ backgroundColor: value });
    const onChangeTextColor = (value) => setAttributes({ ctaTextColor: value });
    const onChangeButtonColor = (value) =>
      setAttributes({ ctaBackColor: value });
    const onChangeButtonTextColor = (value) =>
      setAttributes({ ctaColor: value });

    const onChangeBorderColor = (value) =>
      setAttributes({ ctaBorderColor: value });
    const onChangeBorderHoverColor = (value) =>
      setAttributes({ ctaHoverBorderColor: value });
    const onChangeButtonTexthColor = (value) =>
      setAttributes({ ctaHoverColor: value });
    const onChangeButtonhColor = (value) =>
      setAttributes({ ctaHoverBackColor: value });

    // Background Type Options
    const backgroundTypeOptions = [
      { value: "color", label: __("Color", "responsive-block-editor-addons") },
      {
        value: "gradient",
        label: __("Gradient", "responsive-block-editor-addons"),
      },
      { value: "image", label: __("Image", "responsive-block-editor-addons") },
    ];

    // Background Type Options
    const buttonbackgroundTypeOptions = [
      { value: "none", label: __("None", "responsive-block-editor-addons") },
      { value: "color", label: __("Color", "responsive-block-editor-addons") },
      {
        value: "gradient",
        label: __("Gradient", "responsive-block-editor-addons"),
      },
    ];

    // backward compatibility for border radius controls

    if (!blockIsRadiusValueUpdated) {
      this.props.setAttributes(
        {
          blockTopRadius:          borderRadius !== undefined ? borderRadius : blockTopRadius,
          blockBottomRadius:       borderRadius !== undefined ? borderRadius : blockBottomRadius,
          blockLeftRadius:         borderRadius !== undefined ? borderRadius : blockLeftRadius,
          blockRightRadius:        borderRadius !== undefined ? borderRadius : blockRightRadius,
          blockTopRadiusTablet:    borderRadius !== undefined ? borderRadius : blockTopRadiusTablet,
          blockBottomRadiusTablet: borderRadius !== undefined ? borderRadius : blockBottomRadiusTablet,
          blockRightRadiusTablet:  borderRadius !== undefined ? borderRadius : blockRightRadiusTablet,
          blockLeftRadiusTablet:   borderRadius !== undefined ? borderRadius : blockLeftRadiusTablet,
          blockTopRadiusMobile:    borderRadius !== undefined ? borderRadius : blockTopRadiusMobile,
          blockBottomRadiusMobile: borderRadius !== undefined ? borderRadius : blockBottomRadiusMobile,
          blockLeftRadiusMobile:   borderRadius !== undefined ? borderRadius : blockLeftRadiusMobile,
          blockRightRadiusMobile:  borderRadius !== undefined ? borderRadius : blockRightRadiusMobile,
          ctaBlockTopRadius:          ctaBorderRadius !== undefined ? ctaBorderRadius : ctaBlockTopRadius,
          ctaBlockBottomRadius:       ctaBorderRadius !== undefined ? ctaBorderRadius : ctaBlockBottomRadius,
          ctaBlockLeftRadius:         ctaBorderRadius !== undefined ? ctaBorderRadius : ctaBlockLeftRadius,
          ctaBlockRightRadius:        ctaBorderRadius !== undefined ? ctaBorderRadius : ctaBlockRightRadius,
          ctaBlockTopRadiusTablet:    ctaBorderRadius !== undefined ? ctaBorderRadius : ctaBlockTopRadiusTablet,
          ctaBlockBottomRadiusTablet: ctaBorderRadius !== undefined ? ctaBorderRadius : ctaBlockBottomRadiusTablet,
          ctaBlockLeftRadiusTablet:   ctaBorderRadius !== undefined ? ctaBorderRadius : ctaBlockLeftRadiusTablet,
          ctaBlockRightRadiusTablet:  ctaBorderRadius !== undefined ? ctaBorderRadius : ctaBlockRightRadiusTablet,
          ctaBlockTopRadiusMobile:    ctaBorderRadius !== undefined ? ctaBorderRadius : ctaBlockTopRadiusMobile,
          ctaBlockBottomRadiusMobile: ctaBorderRadius !== undefined ? ctaBorderRadius : ctaBlockBottomRadiusMobile,
          ctaBlockLeftRadiusMobile:   ctaBorderRadius !== undefined ? ctaBorderRadius : ctaBlockLeftRadiusMobile,
          ctaBlockRightRadiusMobile:  ctaBorderRadius !== undefined ? ctaBorderRadius : ctaBlockRightRadiusMobile,
        }
      )
      this.props.setAttributes({blockIsRadiusValueUpdated: true});
    }

    let changeCtaBorderRadius = (value) => 
    {
      this.props.setAttributes(
        {
          ctaBlockTopRadius:          value,
          ctaBlockBottomRadius:       value,
          ctaBlockLeftRadius:         value,
          ctaBlockRightRadius:        value,
          ctaBlockTopRadiusTablet:    value,
          ctaBlockBottomRadiusTablet: value,
          ctaBlockRightRadiusTablet:  value,
          ctaBlockLeftRadiusTablet:   value,
          ctaBlockTopRadiusMobile:    value,
          ctaBlockBottomRadiusMobile: value,
          ctaBlockLeftRadiusMobile:   value,
          ctaBlockRightRadiusMobile:  value,
        }
      )
    }

    // backward compatibility for typography color control
    if (!blockIsTypographyColorValueUpdated) {
      this.props.setAttributes(
        {
          ctaTitleTypographyColor:          ctaTextColor !== undefined ? ctaTextColor : ctaTitleTypographyColor,
          ctaTitleBottomSpacing: titleSpace !== undefined ? titleSpace : ctaTitleBottomSpacing,
          ctaTitleBottomSpacingMobile: titleSpaceMobile !== undefined ? titleSpaceMobile : ctaTitleBottomSpacingMobile,
          ctaTitleBottomSpacingTablet: titleSpaceTablet !== undefined ? titleSpaceTablet : ctaTitleBottomSpacingTablet,
          ctaTextBottomSpacing: subtitleSpace !== undefined ? subtitleSpace : ctaTextBottomSpacing,
          ctaTextBottomSpacingMobile: subtitleSpaceMobile !== undefined ? subtitleSpaceMobile : ctaTextBottomSpacingMobile,
          ctaTextBottomSpacingTablet: subtitleSpaceTablet !== undefined ? subtitleSpaceTablet : ctaTextBottomSpacingTablet,
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

    // backward compatibility for typography color control
    if (!backgroundImageValueUpdated) {
      this.props.setAttributes(
        {
          backgroundRepeat: backgroundImageRepeat !== undefined ? backgroundImageRepeat : backgroundRepeat,
          backgroundPosition: backgroundImagePosition !== undefined ? backgroundImagePosition : backgroundPosition,
          backgroundPositionMobile: backgroundImagePosition !== undefined ? backgroundImagePosition : backgroundPositionMobile,
          backgroundPositionTablet: backgroundImagePosition !== undefined ? backgroundImagePosition : backgroundPositionTablet,
          backgroundSize: backgroundImageSize !== undefined ? backgroundImageSize : backgroundSize,
          backgroundSizeMobile: backgroundImageSize !== undefined ? backgroundImageSize : backgroundSizeMobile,
          backgroundSizeTablet: backgroundImageSize !== undefined ? backgroundImageSize : backgroundSizeTablet,
        }
      )
      this.props.setAttributes({backgroundImageValueUpdated: true});
    }

    // Background image URL
    let background_image_url = backgroundImage || '';

    return (
      <InspectorControls key="inspector">
        <InspectorTabs>
          <InspectorTab key={"content"}>
            <PanelBody>
              <RbeaBorderRadiusControl
                attrNameTemplate="block%s"
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
          </InspectorTab>
          <InspectorTab key={"style"}>
			
				<TypographyHelperControl
					title={__("Title Typography", "responsive-block-editor-addons")}
					attrNameTemplate="ctaTitle%s"
					values={{
						family: ctaTitleFontFamily,
						size: ctaTitleFontSize,
						sizeMobile: ctaTitleFontSizeMobile,
						sizeTablet: ctaTitleFontSizeTablet,
						weight: ctaTitleFontWeight,
						height: ctaTitleLineHeight,
            color: ctaTitleTypographyColor,
            bottomSpacing: ctaTitleBottomSpacing,
            bottomSpacingMoible: ctaTitleBottomSpacingMobile,
            bottomSpacingTablet: ctaTitleBottomSpacingTablet,
					}}
					showLetterSpacing={false}
					showTextTransform={false}
          showColorControl={true}
          showTextBottomSpacing={true}
					setAttributes={setAttributes}
					{...this.props}
				/>
				<TypographyHelperControl
					title={__("Description Typography", "responsive-block-editor-addons")}
					attrNameTemplate="ctaText%s"
					values={{
						family: ctaTextFontFamily,
						size: ctaTextFontSize,
						sizeMobile: ctaTextFontSizeMobile,
						sizeTablet: ctaTextFontSizeTablet,
						weight: ctaTextFontWeight,
						height: ctaTextLineHeight,
            bottomSpacing: ctaTextBottomSpacing,
            bottomSpacingMoible: ctaTextBottomSpacingMobile,
            bottomSpacingTablet: ctaTextBottomSpacingTablet,
					}}
					showLetterSpacing={false}
					showTextTransform={false}
          showTextBottomSpacing={true}
					setAttributes={setAttributes}
					{...this.props}
				/>
				{resctaType === "text" && (
          <TypographyHelperControl
					title={__("CTA Text Typography", "responsive-block-editor-addons")}
					attrNameTemplate="buttonText%s"
					values={{
						family: buttonTextFontFamily,
						size: buttonTextFontSize,
						sizeMobile: buttonTextFontSizeMobile,
						sizeTablet: buttonTextFontSizeTablet,
						weight: buttonTextFontWeight,
						height: buttonTextLineHeight,
					}}
					showLetterSpacing={false}
					showTextTransform={false}
          showTextBottomSpacing={false}
					setAttributes={setAttributes}
					{...this.props}
				/>
				)}
				{resctaType === "button" && (
          <TypographyHelperControl
				  	title={__("Button Typography", "responsive-block-editor-addons")}
				  	attrNameTemplate="buttonText%s"
				  	values={{
				  		family: buttonTextFontFamily,
				  		size: buttonTextFontSize,
				  		sizeMobile: buttonTextFontSizeMobile,
				  		sizeTablet: buttonTextFontSizeTablet,
				  		weight: buttonTextFontWeight,
				  		height: buttonTextLineHeight,
				  	}}
				  	showLetterSpacing={false}
				  	showTextTransform={false}
            showTextBottomSpacing={false}
				  	setAttributes={setAttributes}
				  	{...this.props}
				  />
				)}
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

              {"color" == backgroundType && (
                <Fragment>
                  <ColorBackgroundControl {...this.props} />
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
                </Fragment>
              )}
              {"gradient" == backgroundType && (
                <Fragment>
                  <GradientBackgroundControl
                    {...this.props}
                    showHoverGradient={false}
                  />
                </Fragment>
              )}
            </PanelBody>
            <PanelBody
              title={__("Button Options", "responsive-block-editor-addons")}
              initialOpen={false}
            >
              <div className = "rbea-repeat-selector-wrapper">
                <RbeaTabRadioControl
                  label={__("Button Size", "responsive-block-editor-addons")}
                  value={buttonSize}
                  options={buttonSizeOptions.map(({ value, label }) => ({
                    value,
                    label,
                  }))}
                  onChange={(value) => {
                      if(value == "responsive-block-editor-addons-cta-button-size-small") {
                          this.props.setAttributes({buttonTextFontSize: 14})
                      }
                      if(value == "responsive-block-editor-addons-cta-button-size-medium") {
                          this.props.setAttributes({buttonTextFontSize: 20})
                          this.props.setAttributes({ctaHpadding: 14})
                          this.props.setAttributes({ctaVpadding: 18})
                      }
                      if(value == "responsive-block-editor-addons-cta-button-size-large") {
                          this.props.setAttributes({buttonTextFontSize: 26})
                          this.props.setAttributes({ctaHpadding: 30})
                          this.props.setAttributes({ctaVpadding: 20})
                      }
                      if(value == "responsive-block-editor-addons-cta-button-size-extralarge") {
                          this.props.setAttributes({buttonTextFontSize: 32})
                          this.props.setAttributes({ctaHpadding: 30})
                          this.props.setAttributes({ctaVpadding: 20})
                      }

                    this.props.setAttributes({
                      buttonSize: value,
                    });
                  }}
                  defaultValue={"medium"}
                />
              </div>

              <div className="responsive-block-editor-addons-tab-select-container">
                <RbeaTabRadioControl
                  label={__("Button Shape", "responsive-block-editor-addons")}
                  value={buttonShape}
                  options={buttonShapeOptions.map(({ value, label }) => ({
                    value,
                    label,
                  }))}
                  onChange={(value) => {
                      if(value == 'responsive-block-editor-addons-cta-button-shape-square') {
                          // this.props.setAttributes({ctaBorderRadius: 0})
                          changeCtaBorderRadius(0);
                      }
                      if(value == 'responsive-block-editor-addons-cta-button-shape-rounded') {
                          // this.props.setAttributes({ctaBorderRadius: 4})
                          changeCtaBorderRadius(4);
                      }
                      if(value =='responsive-block-editor-addons-cta-button-shape-circular') {
                          // this.props.setAttributes({ctaBorderRadius: 100})
                          changeCtaBorderRadius(100);
                      }
                    this.props.setAttributes({
                      buttonShape: value,
                    });
                  }}
                  defaultValue={"square"}
                />
              </div>

              <RbeaTabRadioControl
                label={__("Type", "responsive-block-editor-addons")}
                value={resctaType}
                onChange={(value) => setAttributes({ resctaType: value })}
                options={[
                  {
                    value: "text",
                    label: __("Text", "responsive-block-editor-addons"),
                  },
                  {
                    value: "button",
                    label: __("Button", "responsive-block-editor-addons"),
                  },
                ]}
                defaultValue={"text"}
              />
              <ButtonSettingsControl
                {...this.props}
                showMarginControls={false}
                showBackColorOpacity={false}
                showGradientHover={false}
                showTextOpacity={true}
              />
            </PanelBody>
            {resctaType === "button" && (
              <PanelBody title={__("Icon Settings", "responsive-block-editor-addons")} initialOpen={false}>
                <Fragment>
                  <div className="responsive-block-editor-addons-font-icon-picker-container">
                    <p className="components-base-control__label">{__("Icon", "responsive-block-editor-addons")}</p>
                    <FontIconPicker
                      icons={svg_icons}
                      renderFunc={renderSVG}
                      theme="default"
                      value={icon}
                      onChange={(value) => setAttributes({ icon: value })}
                      isMulti={false}
                      noSelectedPlaceholder={__("Select Icon", "responsive-block-editor-addons")}
                    />
                  </div>
                  <RbeaColorControl
                    label = {__("Icon Color", "responsive-block-editor-addons")}
                    colorValue={icon_color}
                    onChange={(colorValue) =>
                      setAttributes({ icon_color: colorValue })
                    }
                    resetColor={() => setAttributes({ icon_color: "" })}
                  />
                  <RbeaTabRadioControl
                    label={__("Icon Position", "responsive-block-editor-addons")}
                    value={iconPosition}
                    onChange={(value) => setAttributes({ iconPosition: value })}
                    options={[
                      { value: "before", label: __("Before Text", "responsive-block-editor-addons") },
                      { value: "after", label: __("After Text", "responsive-block-editor-addons") },
                    ]}
                    defaultValue={"default"}
                  />
                  <RbeaRangeControl
                    label={__("Icon Spacing", "responsive-block-editor-addons")}
                    value={iconSpace}
                    onChange={(value) =>
                      setAttributes({
                        iconSpace: value !== undefined ? value : 8,
                      })
                    }
                    min={-100}
                    max={100}
                    allowReset
                  />
                </Fragment>
              </PanelBody>
            )}
            <PanelBody
              title={__("Spacing", "responsive-block-editor-addons")}
              initialOpen={false}
            >
              <PanelBody
                title={__("Padding", "responsive-block-editor-addons")}
                initialOpen={false}
              >
                <ResponsiveNewPaddingControl
                  attrNameTemplate="block%s"
                  resetValues={blockPaddingResetValues}
                  {...this.props}
                />
              </PanelBody>
              <PanelBody
                title={__("Margin", "responsive-block-editor-addons")}
                initialOpen={false}
              >
                <ResponsiveNewMarginControl
                  attrNameTemplate="block%s"
                  resetValues={blockMarginResetValues}
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
                  title={"Text Bottom Margin"}
                  attrNameTemplate="subtitleSpace%s"
                  values={{
                    desktop: subtitleSpace,
                    tablet: subtitleSpaceTablet,
                    mobile: subtitleSpaceMobile,
                  }}
                  setAttributes={setAttributes}
                  {...this.props}
                />
                <ResponsiveSpacingControl
                  title={"Button Bottom Margin"}
                  attrNameTemplate="buttonSpace%s"
                  values={{
                    desktop: buttonSpace,
                    tablet: buttonSpaceTablet,
                    mobile: buttonSpaceMobile,
                  }}
                  setAttributes={setAttributes}
                  {...this.props}
                />
              </PanelBody>
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
