/**
 * Inspector Controls
 */

import times from "lodash/times";
import InspectorTab from "../../../components/InspectorTab";
import InspectorTabs from "../../../components/InspectorTabs";
import ImageSettingsControl from "../../../settings-components/ImageSettings";
import ImageBackgroundControl from "../../../settings-components/BlockBackgroundSettings/ImageBackgroundSettings";
import ColorBackgroundControl from "../../../settings-components/BlockBackgroundSettings/ColorBackgroundSettings";
import GradientBackgroundControl from "../../../settings-components/BlockBackgroundSettings/GradientBackgroundSettings";
import ResponsiveSpacingControl from "../../../settings-components/ResponsiveSpacingSettings";
import TypographyHelperControl from "../../../settings-components/TypographySettings";
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
const { InspectorControls, PanelColorSettings, MediaUpload, ColorPalette } = wp.blockEditor;

// Import Inspector components
const {
  PanelBody,
  RangeControl,
  SelectControl,
  TextControl,
  BaseControl,
  Button,
  ToggleControl,
  TabPanel,
  Dashicon,
} = wp.components;
import BoxShadowControl from "../../../utils/components/box-shadow";
import fontOptions from "../../../utils/googlefonts";
import { loadGoogleFont } from "../../../utils/font";

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

    const gutterOptions = [
      {
        value: "no",
        label: __("None", "responsive-block-editor-addons"),
        shortName: __("None", "responsive-block-editor-addons"),
      },
      {
        value: "small",
        /* translators: abbreviation for small size */
        label: __("S", "responsive-block-editor-addons"),
        tooltip: __("Small", "responsive-block-editor-addons"),
      },
      {
        value: "medium",
        /* translators: abbreviation for medium size */
        label: __("M", "responsive-block-editor-addons"),
        tooltip: __("Medium", "responsive-block-editor-addons"),
      },
      {
        value: "large",
        /* translators: abbreviation for large size */
        label: __("L", "responsive-block-editor-addons"),
        tooltip: __("Large", "responsive-block-editor-addons"),
      },
      {
        value: "huge",
        /* translators: abbreviation for largest size */
        label: __("XL", "responsive-block-editor-addons"),
        tooltip: __("Huge", "responsive-block-editor-addons"),
      },
    ];

    // Setup the attributes
    const {
      attributes: {
        count,
        gutter,
        teamBlock,
        imageSize,
        designationColor,
        descriptionColor,
        socialIconColor,
        titleFontSize,
        titleFontFamily,
        descriptionFontFamily,
        designationFontFamily,
        designationFontSize,
        descriptionFontSize,
        titleFontWeight,
        designationFontWeight,
        descriptionFontWeight,
        titleLineHeight,
        designationLineHeight,
        descriptionLineHeight,
        titleSpacing,
        designationSpacing,
        descriptionSpacing,
        socialIconSpacing,
        imageMarginTop,
        imageMarginBottom,
        titleSpacingMobile,
        designationSpacingMobile,
        descriptionSpacingMobile,
        socialIconSpacingMobile,
        imageMarginTopMobile,
        imageMarginBottomMobile,
        titleSpacingTablet,
        designationSpacingTablet,
        descriptionSpacingTablet,
        socialIconSpacingTablet,
        imageMarginTopTablet,
        imageMarginBottomTablet,
        titleColor,
        backgroundColor,
        borderColor,
        borderWidth,
        borderRadius,
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
        padding,
        imageShape,
        boxShadowColor,
        boxShadowHOffset,
        boxShadowVOffset,
        boxShadowBlur,
        boxShadowSpread,
        boxShadowPosition,
        opacity,
        backgroundColor2,
        gradientDirection,
        colorLocation1,
        colorLocation2,
        bgGradient,
        backgroundImage,
        backgroundImagePosition,
        backgroundImageRepeat,
        backgroundImageSize,
        backgroundAttachment,
        facebook,
        twitter,
        linkedin,
        instagram,
        email,
        youtube,
        pinterest,
        iconSize,
        imageWidth,
        imageWidthMobile,
        imageWidthTablet,
        showImage,
        showName,
        showDesignation,
        showDescription,
        showSocialIcons,
        stack,
        titleFontSizeMobile,
        titleFontSizeTablet,
        designationFontSizeMobile,
        designationFontSizeTablet,
        descriptionFontSizeMobile,
        descriptionFontSizeTablet,
        socialIconBorderColor,
        socialIconHoverColor,
        socialIconBackgroundHoverColor,
        socialIconBackgroundColor,
        socialIconBorderHoverColor,
        iconBackgroundSize,
        iconBorderSize,
        iconBorderRadius,
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
    // Update color values
    const onChangeDesignationColor = (value) =>
      setAttributes({ designationColor: value });
    const onChangeDescriptionColor = (value) =>
      setAttributes({ descriptionColor: value });
    const onChangeSocialIconColor = (value) =>
      setAttributes({ socialIconColor: value });
    const onChangetitleColor = (value) => setAttributes({ titleColor: value });
    const onChangeBackgroundColor = (value) =>
      setAttributes({ backgroundColor: value });
    const onChangeBorderColor = (value) =>
      setAttributes({ borderColor: value });
    const onChangebackgroundColor2 = (value) =>
      setAttributes({ backgroundColor2: value });

    const imageShapeOptions = [
      {
        value: "default",
        label: __("Default", "responsive-block-editor-addons"),
        shortName: __("Default", "responsive-block-editor-addons"),
      },
      {
        value: "circle",
        label: __("Circle", "responsive-block-editor-addons"),
        shortName: __("Circle", "responsive-block-editor-addons"),
      },
      {
        value: "square",
        label: __("Square", "responsive-block-editor-addons"),
        shortName: __("Square", "responsive-block-editor-addons"),
      },
      {
        value: "blob",
        label: __("Blob", "responsive-block-editor-addons"),
        shortName: __("Blob", "responsive-block-editor-addons"),
      },
    ];

    const getSocialIconColors = () => {
      const socialColors = (
        <Fragment>
          <br/>
          <RbeaColorControl
          label = {__("Social Icon Color", "responsive-block-editor-addons")}
          colorValue={socialIconColor}
          onChange={(colorValue) => setAttributes({ socialIconColor: colorValue })}
          resetColor={() => setAttributes({ socialIconColor: "" })}
        />
          <RbeaColorControl
            label = {__("Social Icon Background Color", "responsive-block-editor-addons")}
            colorValue={socialIconBackgroundColor}
            onChange={(colorValue) => setAttributes({ socialIconBackgroundColor: colorValue })}
            resetColor={() => setAttributes({ socialIconBackgroundColor: "" })}
          />
          <RbeaColorControl
            label = {__("Social Icon Border Color", "responsive-block-editor-addons")}
            colorValue={socialIconBorderColor}
            onChange={(colorValue) => setAttributes({ socialIconBorderColor: colorValue })}
            resetColor={() => setAttributes({ socialIconBorderColor: "" })}
          />
        </Fragment>
      );

      const socialColorsHover = (
        <Fragment>
          <br/>
          <RbeaColorControl
            label = {__("Social Icon Hover Color", "responsive-block-editor-addons")}
            colorValue={socialIconHoverColor}
            onChange={(colorValue) => setAttributes({ socialIconHoverColor: colorValue })}
            resetColor={() => setAttributes({ socialIconHoverColor: "" })}
          />
          <RbeaColorControl
            label = {__("Social Icon Background Hover Color", "responsive-block-editor-addons")}
            colorValue={socialIconBackgroundHoverColor}
            onChange={(colorValue) => setAttributes({ socialIconBackgroundHoverColor: colorValue })}
            resetColor={() => setAttributes({ socialIconBackgroundHoverColor: "" })}
          />
          <RbeaColorControl
            label = {__("Social Icon Border Hover Color", "responsive-block-editor-addons")}
            colorValue={socialIconBorderHoverColor}
            onChange={(colorValue) => setAttributes({ socialIconBorderHoverColor: colorValue })}
            resetColor={() => setAttributes({ socialIconBorderHoverColor: "" })}
          />
        </Fragment>
      );

      return (
        <TabPanel
          className="responsive-block-editor-addons-inspect-tabs responsive-block-editor-addons-inspect-tabs-col-2"
          activeClass="active-tab"
          tabs={[
            {
              name: "normal",
              title: __("Normal", "responsive-block-editor-addons"),
              className: "responsive-block-editor-addons-normal-tab",
            },
            {
              name: "hover",
              title: __("Hover", "responsive-block-editor-addons"),
              className: "responsive-block-editor-addons-hover-tab",
            },
          ]}
        >
          {(tabName) => {
            let color_tab;
            if ("normal" === tabName.name) {
              color_tab = socialColors;
            } else {
              color_tab = socialColorsHover;
            }
            return <div>{color_tab}</div>;
          }}
        </TabPanel>
      );
    };

    // backward compatibility for border radius control 
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
        }
      )
      this.props.setAttributes({blockIsRadiusValueUpdated: true});
    }

    // backward compatibility for border radius control 
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

    return (
      <InspectorControls key="inspector">
        <InspectorTabs>
          <InspectorTab key={"content"}>
            <PanelBody
              title={__("General", "responsive-block-editor-addons")}
              initialOpen={false}
            >
              <RbeaRangeControl
                label={__(
                  "Number of Team Member Boxes",
                  "responsive-block-editor-addons"
                )}
                value={count}
                onChange={(newCount) => {
                  let cloneTest_block = [...teamBlock];
                  if (cloneTest_block.length < newCount) {
                    const incAmount = Math.abs(
                      newCount - cloneTest_block.length
                    );

                    {
                      times(incAmount, (n) => {
                        cloneTest_block.push({
                          title: "Team Title " + newCount,
                          descriptions: "",
                        });
                      });
                    }
                    setAttributes({ teamBlock: cloneTest_block });
                  } else {
                    const incAmount = Math.abs(
                      newCount - cloneTest_block.length
                    );
                    let data_new = cloneTest_block;
                    for (var i = 0; i < incAmount; i++) {
                      data_new.pop();
                    }
                    setAttributes({ teamBlock: data_new });
                  }
                  setAttributes({ count: newCount });
                }}
                min={1}
                max={4}
                step={1}
              />
              <RbeaTabRadioControl
                label={__("Stack on", "responsive-block-editor-addons")}
                value={stack}
                options={[
                  {
                    value: "none",
                    label: __("None", "responsive-block-editor-addons"),
                  },
                  {
                    value: "tablet",
                    label: __("Tablet", "responsive-block-editor-addons"),
                  },
                  {
                    value: "mobile",
                    label: __("Mobile", "responsive-block-editor-addons"),
                  },
                ]}
                onChange={(value) => setAttributes({ stack: value })}
                help={__(
                  "Note: Choose on what breakpoint the team cards will stack.",
                  "responsive-block-editor-addons"
                )}
              />
              {count > 1 && (
                <RbeaTabRadioControl
                  label={__("Gutter", "responsive-block-editor-addons")}
                  value={gutter}
                  options={gutterOptions}
                  onChange={(newGutter) => setAttributes({ gutter: newGutter })}
                />
              )}
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
              <RbeaRangeControl
                label={__("Border Width", "responsive-block-editor-addons")}
                value={borderWidth}
                onChange={(value) =>
                  this.props.setAttributes({
                    borderWidth: value,
                  })
                }
                min={0}
                max={50}
                step={1}
              />
              <RbeaBorderRadiusControl
                attrNameTemplate="block%s"
                {...this.props}
              />
              <RbeaRangeControl
                label={__("Padding", "responsive-block-editor-addons")}
                value={padding}
                onChange={(value) =>
                  this.props.setAttributes({
                    padding: value,
                  })
                }
                min={0}
                max={50}
                step={1}
              />
              <PanelBody
                title={__(
                  "Column Background",
                  "responsive-block-editor-addons"
                )}
                initialOpen={false}
              >
                <ColorBackgroundControl {...this.props} />
                <RbeaRangeControl
                  label={__(
                    "Background Color Opacity",
                    "responsive-block-editor-addons"
                  )}
                  value={opacity}
                  onChange={(value) =>
                    this.props.setAttributes({
                      opacity: value !== undefined ? value : 50,
                    })
                  }
                  min={0}
                  max={100}
                  allowReset
                />
                <ToggleControl
                  label="Gradient Background"
                  checked={bgGradient}
                  onChange={() =>
                    this.props.setAttributes({
                      bgGradient: !bgGradient,
                    })
                  }
                />
                {bgGradient && (
                  <Fragment>
                    <GradientBackgroundControl
                      {...this.props}
                      showHoverGradient={false}
                      showColorOne={false}
                    />
                  </Fragment>
                )}
                <ImageBackgroundControl
                  {...this.props}
                  showSomeImageOptions={true}
                  showMoreImageOptions={true}
                  showOverlayOptions={false}
                />
              </PanelBody>
            </PanelBody>

            <PanelBody
              title={__("Content", "responsive-block-editor-addons")}
              initialOpen={false}
            >
              <ToggleControl
                label="Image"
                checked={showImage}
                onChange={() =>
                  this.props.setAttributes({
                    showImage: !showImage,
                  })
                }
              />
              <ToggleControl
                label="Name"
                checked={showName}
                onChange={() =>
                  this.props.setAttributes({
                    showName: !showName,
                  })
                }
              />
              <ToggleControl
                label="Designation"
                checked={showDesignation}
                onChange={() =>
                  this.props.setAttributes({
                    showDesignation: !showDesignation,
                  })
                }
              />
              <ToggleControl
                label="Description"
                checked={showDescription}
                onChange={() =>
                  this.props.setAttributes({
                    showDescription: !showDescription,
                  })
                }
              />
              <ToggleControl
                label="Social Icons"
                checked={showSocialIcons}
                onChange={() =>
                  this.props.setAttributes({
                    showSocialIcons: !showSocialIcons,
                  })
                }
              />
            </PanelBody>

            <PanelBody
              title={__("Image", "responsive-block-editor-addons")}
              initialOpen={false}
            >
              <ImageSettingsControl {...this.props} />
            </PanelBody>

            <PanelBody
              title={__("Social", "responsive-block-editor-addons")}
              initialOpen={false}
            >
              <PanelBody
                title={__(
                  "Hide Social Icons",
                  "responsive-block-editor-addons"
                )}
                initialOpen={true}
              >
                <ToggleControl
                  label="Facebook"
                  checked={facebook}
                  onChange={() =>
                    this.props.setAttributes({
                      facebook: !facebook,
                    })
                  }
                />
                <ToggleControl
                  label="Twitter"
                  checked={twitter}
                  onChange={() =>
                    this.props.setAttributes({
                      twitter: !twitter,
                    })
                  }
                />
                <ToggleControl
                  label="Linkedin"
                  checked={linkedin}
                  onChange={() =>
                    this.props.setAttributes({
                      linkedin: !linkedin,
                    })
                  }
                />
                <ToggleControl
                  label="Instagram"
                  checked={instagram}
                  onChange={() =>
                    this.props.setAttributes({
                      instagram: !instagram,
                    })
                  }
                />
                <ToggleControl
                  label="Email"
                  checked={email}
                  onChange={() =>
                    this.props.setAttributes({
                      email: !email,
                    })
                  }
                />
                <ToggleControl
                  label="Youtube"
                  checked={youtube}
                  onChange={() =>
                    this.props.setAttributes({
                      youtube: !youtube,
                    })
                  }
                />
                <ToggleControl
                  label="Pinterest"
                  checked={pinterest}
                  onChange={() =>
                    this.props.setAttributes({
                      pinterest: !pinterest,
                    })
                  }
                />
              </PanelBody>
              <PanelBody
                title={__("Colors", "responsive-block-editor-addons")}
                initialOpen={true}
              >
                {getSocialIconColors()}
              </PanelBody>
              <RbeaRangeControl
                label={__("Icon Size", "responsive-block-editor-addons")}
                value={iconSize}
                onChange={(value) =>
                  this.props.setAttributes({
                    iconSize: value,
                  })
                }
                min={0}
                max={100}
                step={1}
              />
              <RbeaRangeControl
                label={__("Icon Background Size", "responsive-block-editor-addons")}
                value={iconBackgroundSize}
                onChange={(value) =>
                  this.props.setAttributes({
                    iconBackgroundSize: value,
                  })
                }
                min={0}
                max={100}
                step={1}
              />
              <RbeaRangeControl
                label={__("Border Size", "responsive-block-editor-addons")}
                value={iconBorderSize}
                onChange={(value) =>
                  this.props.setAttributes({
                    iconBorderSize: value,
                  })
                }
                min={0}
                max={100}
                step={1}
              />
              <RbeaBorderRadiusControl
                attrNameTemplate="icon%s"
                {...this.props}
              />
            </PanelBody>
          </InspectorTab>
          <InspectorTab key={"style"}>
            <PanelBody
              title={__("Typography", "responsive-block-editor-addons")}
              initialOpen={false}
            >
              <TypographyHelperControl
                title={__("Title Typography", "responsive-block-editor-addons")}
                attrNameTemplate="title%s"
                values={{
                  family: titleFontFamily,
                  size: titleFontSize,
                  sizeMobile: titleFontSizeMobile,
                  sizeTablet: titleFontSizeTablet,
                  weight: titleFontWeight,
                  height: titleLineHeight,
                }}
                showLetterSpacing={false}
                showTextTransform={false}
                setAttributes={setAttributes}
                {...this.props}
              />
              <TypographyHelperControl
                title={__(
                  "Designation Typography",
                  "responsive-block-editor-addons"
                )}
                attrNameTemplate="designation%s"
                values={{
                  family: designationFontFamily,
                  size: designationFontSize,
                  sizeMobile: designationFontSizeMobile,
                  sizeTablet: designationFontSizeTablet,
                  weight: designationFontWeight,
                  height: designationLineHeight,
                }}
                showLetterSpacing={false}
                showTextTransform={false}
                setAttributes={setAttributes}
                {...this.props}
              />
              <TypographyHelperControl
                title={__(
                  "Description Typography",
                  "responsive-block-editor-addons"
                )}
                attrNameTemplate="description%s"
                values={{
                  family: descriptionFontFamily,
                  size: descriptionFontSize,
                  sizeMobile: descriptionFontSizeMobile,
                  sizeTablet: descriptionFontSizeTablet,
                  weight: descriptionFontWeight,
                  height: descriptionLineHeight,
                }}
                showLetterSpacing={false}
                showTextTransform={false}
                setAttributes={setAttributes}
                {...this.props}
              />
            </PanelBody>

            <PanelBody
              title={__("Color Settings", "responsive-block-editor-addons")}
              initialOpen={false}
            >
               <RbeaColorControl
									label = {__("Border Color", "responsive-block-editor-addons")}
									colorValue={borderColor}
									onChange={(colorValue) =>
										setAttributes({ borderColor: colorValue })
									}
									resetColor={() => setAttributes({ borderColor: "" })}
								/>
               <RbeaColorControl
									label = {__("Title Color", "responsive-block-editor-addons")}
									colorValue={titleColor}
									onChange={(colorValue) =>
										setAttributes({ titleColor: colorValue })
									}
									resetColor={() => setAttributes({ titleColor: "" })}
								/>
               <RbeaColorControl
									label = {__("Designation Color", "responsive-block-editor-addons")}
									colorValue={designationColor}
									onChange={(colorValue) =>
										setAttributes({ designationColor: colorValue })
									}
									resetColor={() => setAttributes({ designationColor: "" })}
								/>
               <RbeaColorControl
									label = {__("Description Color", "responsive-block-editor-addons")}
									colorValue={descriptionColor}
									onChange={(colorValue) =>
										setAttributes({ descriptionColor: colorValue })
									}
									resetColor={() => setAttributes({ descriptionColor: "" })}
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
                title={"Title Bottom Spacing"}
                attrNameTemplate="titleSpacing%s"
                values={{
                  desktop: titleSpacing,
                  tablet: titleSpacingTablet,
                  mobile: titleSpacingMobile,
                }}
                setAttributes={setAttributes}
                {...this.props}
              />
              <ResponsiveSpacingControl
                title={"Designation Bottom Spacing"}
                attrNameTemplate="designationSpacing%s"
                values={{
                  desktop: designationSpacing,
                  tablet: designationSpacingTablet,
                  mobile: designationSpacingMobile,
                }}
                setAttributes={setAttributes}
                {...this.props}
              />
              <ResponsiveSpacingControl
                title={"Description Bottom Spacing"}
                attrNameTemplate="descriptionSpacing%s"
                values={{
                  desktop: descriptionSpacing,
                  tablet: descriptionSpacingTablet,
                  mobile: descriptionSpacingMobile,
                }}
                setAttributes={setAttributes}
                {...this.props}
              />
              <ResponsiveSpacingControl
                title={"Inter Social Icon Spacing"}
                attrNameTemplate="socialIconSpacing%s"
                values={{
                  desktop: socialIconSpacing,
                  tablet: socialIconSpacingTablet,
                  mobile: socialIconSpacingMobile,
                }}
                setAttributes={setAttributes}
                {...this.props}
              />
              <ResponsiveSpacingControl
                title={"Image Margin Top"}
                attrNameTemplate="imageMarginTop%s"
                values={{
                  desktop: imageMarginTop,
                  tablet: imageMarginTopTablet,
                  mobile: imageMarginTopMobile,
                }}
                setAttributes={setAttributes}
                {...this.props}
              />
              <ResponsiveSpacingControl
                title={"Image Margin Bottom"}
                attrNameTemplate="imageMarginBottom%s"
                values={{
                  desktop: imageMarginBottom,
                  tablet: imageMarginBottomTablet,
                  mobile: imageMarginBottomMobile,
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
