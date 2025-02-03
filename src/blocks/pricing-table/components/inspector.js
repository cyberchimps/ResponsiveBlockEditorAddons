/**
 * Inspector Controls
 */

import times from "lodash/times";
import BoxShadowControl from "../../../utils/components/box-shadow";
import fontOptions from "../../../utils/googlefonts";
import { loadGoogleFont } from "../../../utils/font";
import InspectorTab from "../../../components/InspectorTab";
import InspectorTabs from "../../../components/InspectorTabs";
import ImageSettingsControl from "../../../settings-components/ImageSettings";
import BlockBorderHelperControl from "../../../settings-components/BlockBorderSettings";
import ImageBackgroundControl from "../../../settings-components/BlockBackgroundSettings/ImageBackgroundSettings";
import ColorBackgroundControl from "../../../settings-components/BlockBackgroundSettings/ColorBackgroundSettings";
import GradientBackgroundControl from "../../../settings-components/BlockBackgroundSettings/GradientBackgroundSettings";
import ButtonSettingsControl from "../../../settings-components/ButtonSettings";
import TypographyHelperControl from "../../../settings-components/TypographySettings";
import ResponsiveSpacingControl from "../../../settings-components/ResponsiveSpacingSettings";
import ResponsiveNewPaddingControl from "../../../settings-components/ResponsiveNewSpacingSettings/ResponsiveNewPaddingControl/index";
import ResponsiveNewMarginControl from "../../../settings-components/ResponsiveNewSpacingSettings/ResponsiveNewMarginControl/index";
import RbeaRangeControl from "../../../utils/components/rbea-range-control";
import RbeaTabRadioControl from "../../../utils/components/rbea-tab-radio-control";
import RbeaBackgroundTypeControl from "../../../utils/components/rbea-background-type-control";
import RbeaColorControl from "../../../utils/components/rbea-color-control";
import RbeaBlockBorderHelperControl from "../../../settings-components/RbeaBlockBorderSettings";
import RbeaMediaUploadControl from "../../../utils/components/rbea-media-upload-control";

// Setup the block
const { __ } = wp.i18n;
const { Component, Fragment } = wp.element;

// Import block components
const {
  InspectorControls,
  PanelColorSettings,
  ColorPalette,
  MediaUpload,
  AlignmentToolbar,
} = wp.blockEditor;

// Import Inspector components
const {
  PanelBody,
  RangeControl,
  SelectControl,
  ToggleControl,
  BaseControl,
  Button,
  TabPanel,
  Dashicon,
} = wp.components;

/**
 * Create an Inspector Controls wrapper Component
 */
export default class Inspector extends Component {
  constructor(props) {
    super(...arguments);
    this.onRemoveImage = this.onRemoveImage.bind(this);
    this.onSelectImage = this.onSelectImage.bind(this);
    this.onRemoveBlockImage = this.onRemoveBlockImage.bind(this);
    this.onSelectBlockImage = this.onSelectBlockImage.bind(this);
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
   * Event to set Image as null while removing.
   */
  onRemoveBlockImage() {
    const { setAttributes } = this.props;

    setAttributes({ blockbackgroundImage: null });
  }

  /*
   * Event to set Image as while adding.
   */
  onSelectBlockImage(media) {
    const { setAttributes } = this.props;
    const { blockbackgroundImage } = this.props.attributes;

    if (!media || !media.url) {
      setAttributes({ blockbackgroundImage: null });
      return;
    }

    if (!media.type || "image" != media.type) {
      return;
    }

    setAttributes({ blockbackgroundImage: media.url });
  }

  render() {
    // Setup the attributes
    const {
      attributes: {
        count,
        gutter,
        pricingTable,
        textColor,
        titleColor,
        prefixColor,
        priceColor,
        suffixColor,
        subpriceColor,
        featuresColor,
        itemBackgroundColor,
        buttonTarget,
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
        sectionTag,
        backgroundColor,
        backgroundColor1,
        backgroundColor2,
        colorLocation1,
        colorLocation2,
        gradientDirection,
        backgroundType,
        backgroundImage,
        opacity,
        blockbackgroundColor,
        blockbackgroundColor1,
        blockbackgroundColor2,
        blockcolorLocation1,
        blockcolorLocation2,
        blockgradientDirection,
        blockbackgroundType,
        blockbackgroundImage,
        blockopacity,
        boxShadowColor,
        boxShadowHOffset,
        boxShadowVOffset,
        boxShadowBlur,
        boxShadowSpread,
        boxShadowPosition,
        buttonBoxShadowColor,
        buttonBoxShadowHOffset,
        buttonBoxShadowVOffset,
        buttonBoxShadowBlur,
        buttonBoxShadowSpread,
        buttonBoxShadowPosition,
        ctaColor,
        ctaBackColor,
        ctaHoverColor,
        ctaHoverBackColor,
        ctaBorderColor,
        ctaBorderRadius,
        ctaBorderWidth,
        ctaBorderStyle,
        ctaHpadding,
        ctaVpadding,
        buttonbackgroundType,
        buttongradientDirection,
        buttoncolorLocation1,
        buttoncolorLocation2,
        buttonbackgroundColor1,
        buttonbackgroundColor2,
        buttonHbackgroundType,
        buttonHgradientDirection,
        buttonHcolorLocation1,
        buttonHcolorLocation2,
        buttonHbackgroundColor1,
        buttonHbackgroundColor2,

        titleFontFamily,
        titleFontSize,
        titleFontWeight,
        titleLineHeight,
        amountFontFamily,
        amountFontSize,
        amountFontWeight,
        amountLineHeight,
        prefixFontFamily,
        prefixFontSize,
        prefixFontWeight,
        prefixLineHeight,
        suffixFontFamily,
        suffixFontSize,
        suffixFontWeight,
        suffixLineHeight,
        subpriceFontFamily,
        subpriceFontSize,
        subpriceFontWeight,
        subpriceLineHeight,
        subpriceTextTransform,
        featuresFontFamily,
        featuresFontSize,
        featuresFontWeight,
        featuresLineHeight,
        ctaFontFamily,
        ctaFontSize,
        ctaFontWeight,
        ctaLineHeight,
        blockTopPadding,
        blockBottomPadding,
        blockLeftPadding,
        blockRightPadding,
        columnTopPadding,
        columnBottomPadding,
        columnLeftPadding,
        columnRightPadding,
        blockTopPaddingMobile,
        blockBottomPaddingMobile,
        blockLeftPaddingMobile,
        blockRightPaddingMobile,
        columnTopPaddingMobile,
        columnBottomPaddingMobile,
        columnLeftPaddingMobile,
        columnRightPaddingMobile,
        blockTopPaddingTablet,
        blockBottomPaddingTablet,
        blockLeftPaddingTablet,
        blockRightPaddingTablet,
        columnTopPaddingTablet,
        columnBottomPaddingTablet,
        columnLeftPaddingTablet,
        columnRightPaddingTablet,
        blockBackColorOpacity,
        columnBackColorOpacity,
        showImage,
        showTitle,
        showPrefix,
        showPrice,
        showSuffix,
        showSubprice,
        showFeatures,
        showButton,
        titleSpace,
        priceSpace,
        subpriceSpace,
        buttonSpace,
        featuresSpace,
        titleSpaceMobile,
        priceSpaceMobile,
        subpriceSpaceMobile,
        buttonSpaceMobile,
        featuresSpaceMobile,
        titleSpaceTablet,
        priceSpaceTablet,
        subpriceSpaceTablet,
        buttonSpaceTablet,
        featuresSpaceTablet,
        blockAlign,
        imageSize,
        imageShape,
        imageWidth,
        imageWidthTablet,
        imageWidthMobile,
        ctaHoverBorderColor,
        ctaHpaddingTablet,
        ctaHpaddingMobile,
        ctaVpaddingTablet,
        ctaVpaddingMobile,
        titleFontSizeMobile,
        titleFontSizeTablet,
        prefixFontSizeMobile,
        prefixFontSizeTablet,
        amountFontSizeMobile,
        amountFontSizeTablet,
        suffixFontSizeMobile,
        suffixFontSizeTablet,
        subpriceFontSizeMobile,
        subpriceFontSizeTablet,
        featuresFontSizeMobile,
        featuresFontSizeTablet,
        ctaFontSizeMobile,
        ctaFontSizeTablet,
        hideWidget,
        hideWidgetTablet,
        hideWidgetMobile,
        z_index,
        z_indexMobile,
        z_indexTablet,
        blockIsPaddingControlConnected,
        columnIsPaddingControlConnected,
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
        blockIsTypographyColorValueUpdated,
        titleTypographyColor,
        prefixTypographyColor,
        amountTypographyColor,
        suffixTypographyColor,
        subpriceTypographyColor,
        featuresTypographyColor,
        titleBottomSpacing,
        titleBottomSpacingMobile,
        titleBottomSpacingTablet,
        amountBottomSpacing,
        amountBottomSpacingMobile,
        amountBottomSpacingTablet,
        featuresBottomSpacing,
        featuresBottomSpacingMobile,
        featuresBottomSpacingTablet,
        subpriceBottomSpacing,
        subpriceBottomSpacingMobile,
        subpriceBottomSpacingTablet,

        ctaButtonTopPadding,
        ctaButtonBottomPadding,
        ctaButtonLeftPadding,
        ctaButtonRightPadding,
        ctaButtonTopPaddingTablet,
        ctaButtonBottomPaddingTablet,
        ctaButtonRightPaddingTablet,
        ctaButtonLeftPaddingTablet,
        ctaButtonTopPaddingMobile,
        ctaButtonBottomPaddingMobile,
        ctaButtonLeftPaddingMobile,
        ctaButtonRightPaddingMobile,
        isCtaButtonPaddingMarginValueUpdated,
      },
      setAttributes,
    } = this.props;

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

    const columnPaddingResetValues = {
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

    // Cite Alignment Options
    const citeAlignOptions = [
      {
        value: "left",
        label: __("Left", "responsive-block-editor-addons"),
      },
      {
        value: "center",
        label: __("Center", "responsive-block-editor-addons"),
      },
      {
        value: "right",
        label: __("Right", "responsive-block-editor-addons"),
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

    const textTransformOptions = [
      {
        value: "uppercase",
        label: __("Uppercase", "responsive-block-editor-addons"),
      },
      {
        value: "lowercase",
        label: __("Lowercase", "responsive-block-editor-addons"),
      },
      {
        value: "capitalize",
        label: __("Capitalize", "responsive-block-editor-addons"),
      },
    ];
    // Background Type Options
    const backgroundTypeOptions = [
      { value: "color", label: __("Color", "responsive-block-editor-addons") },
      {
        value: "gradient",
        label: __("Gradient", "responsive-block-editor-addons"),
      },
      { value: "image", label: __("Image", "responsive-block-editor-addons") },
    ];

    // Button Background Type Options
    const buttonbackgroundTypeOptions = [
      { value: "none", label: __("None", "responsive-block-editor-addons") },
      { value: "color", label: __("Color", "responsive-block-editor-addons") },
      {
        value: "gradient",
        label: __("Gradient", "responsive-block-editor-addons"),
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

    // Update color value
    const onChangeTextColor = (value) => setAttributes({ textColor: value });
    const onChangeBackgroundColor = (value) =>
      setAttributes({ itemBackgroundColor: value });

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
          titleTypographyColor:         titleColor !== undefined ? titleColor : titleTypographyColor,
          prefixTypographyColor:          prefixColor !== undefined ? prefixColor : prefixTypographyColor,
          amountTypographyColor:         priceColor !== undefined ? priceColor : amountTypographyColor,
          suffixTypographyColor:          suffixColor !== undefined ? suffixColor : suffixTypographyColor,
          subpriceTypographyColor:         subpriceColor !== undefined ? subpriceColor : subpriceTypographyColor,
          featuresTypographyColor:          featuresColor !== undefined ? featuresColor : featuresTypographyColor,

          titleBottomSpacing: titleSpace !== undefined ? titleSpace : titleBottomSpacing,
          titleBottomSpacingMobile: titleSpaceMobile !== undefined ? titleSpaceMobile : titleBottomSpacingMobile,
          titleBottomSpacingTablet: titleSpaceTablet !== undefined ? titleSpaceTablet : titleBottomSpacingTablet,
          amountBottomSpacing: priceSpace !== undefined ? priceSpace : amountBottomSpacing,
          amountBottomSpacingMobile: priceSpaceMobile !== undefined ? priceSpaceMobile : amountBottomSpacingMobile,
          amountBottomSpacingTablet: priceSpaceTablet !== undefined ? priceSpaceTablet : amountBottomSpacingTablet,
          featuresBottomSpacing: featuresSpace !== undefined ? featuresSpace : featuresBottomSpacing,
          featuresBottomSpacingMobile: featuresSpaceMobile !== undefined ? featuresSpaceMobile : featuresBottomSpacingMobile,
          featuresBottomSpacingTablet: featuresSpaceTablet !== undefined ? featuresSpaceTablet : featuresBottomSpacingTablet,
          subpriceBottomSpacing: subpriceSpace !== undefined ? subpriceSpace : subpriceBottomSpacing,
          subpriceBottomSpacingMobile: subpriceSpaceMobile !== undefined ? subpriceSpaceMobile : subpriceBottomSpacingMobile,
          subpriceBottomSpacingTablet: subpriceSpaceTablet !== undefined ? subpriceSpaceTablet : subpriceBottomSpacingTablet,
        }
      )
      this.props.setAttributes({blockIsTypographyColorValueUpdated: true});
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
                  "Number of Pricing Tables",
                  "responsive-block-editor-addons"
                )}
                value={count}
                onChange={(newCount) => {
                  let cloneTest_block = [...pricingTable];
                  if (cloneTest_block.length < newCount) {
                    const incAmount = Math.abs(
                      newCount - cloneTest_block.length
                    );

                    {
                      times(incAmount, (n) => {
                        cloneTest_block.push({
                          title: "Plan " + newCount,
                          amount: "99",
                          currency: "$",
                          price_suffix: ".00",
                          sub_price: "SUB PRICE",
                          features: [],
                          button: "Button" + newCount,
                          buttonURL: "",
                        });
                      });
                    }
                    setAttributes({ pricingTable: cloneTest_block });
                  } else {
                    const incAmount = Math.abs(
                      newCount - cloneTest_block.length
                    );
                    let data_new = cloneTest_block;
                    for (var i = 0; i < incAmount; i++) {
                      data_new.pop();
                    }
                    setAttributes({ pricingTable: data_new });
                  }
                  setAttributes({ count: newCount });
                }}
                min={1}
                max={4}
                step={1}
              />
              {count > 1 && (
                <RbeaTabRadioControl
                  label={__("Gutter", "responsive-block-editor-addons")}
                  value={gutter}
                  options={gutterOptions}
                  onChange={(newGutter) => setAttributes({ gutter: newGutter })}
                />
              )}
              <Fragment>
                <BaseControl>
                  <p>
                    {__("Alignment", "responsive-block-editor-addons")}
                  </p>
                  <div className="responsive-block-editor-addons-alignment">
                    <AlignmentToolbar
                      value={blockAlign}
                      onChange={(value) =>
                        setAttributes({
                          blockAlign: value,
                        })
                      }
                      controls={["left", "center", "right"]}
                      isCollapsed={false}
                    />
                  </div>
                </BaseControl>
              </Fragment>
              <Fragment>
                <ToggleControl
                  label={__("Image", "responsive-block-editor-addons")}
                  checked={showImage}
                  onChange={() =>
                    this.props.setAttributes({
                      showImage: !showImage,
                    })
                  }
                />
                <ToggleControl
                  label={__("Title", "responsive-block-editor-addons")}
                  checked={showTitle}
                  onChange={() =>
                    this.props.setAttributes({
                      showTitle: !showTitle,
                    })
                  }
                />
                <ToggleControl
                  label={__("Price Prefix", "responsive-block-editor-addons")}
                  checked={showPrefix}
                  onChange={() =>
                    this.props.setAttributes({
                      showPrefix: !showPrefix,
                    })
                  }
                />
                <ToggleControl
                  label={__("Price", "responsive-block-editor-addons")}
                  checked={showPrice}
                  onChange={() =>
                    this.props.setAttributes({
                      showPrice: !showPrice,
                    })
                  }
                />
                <ToggleControl
                  label={__("Price Suffix", "responsive-block-editor-addons")}
                  checked={showSuffix}
                  onChange={() =>
                    this.props.setAttributes({
                      showSuffix: !showSuffix,
                    })
                  }
                />
                <ToggleControl
                  label={__("Sub Price", "responsive-block-editor-addons")}
                  checked={showSubprice}
                  onChange={() =>
                    this.props.setAttributes({
                      showSubprice: !showSubprice,
                    })
                  }
                />
                <ToggleControl
                  label={__("Features", "responsive-block-editor-addons")}
                  checked={showFeatures}
                  onChange={() =>
                    this.props.setAttributes({
                      showFeatures: !showFeatures,
                    })
                  }
                />
                <ToggleControl
                  label={__("Button", "responsive-block-editor-addons")}
                  checked={showButton}
                  onChange={() =>
                    this.props.setAttributes({
                      showButton: !showButton,
                    })
                  }
                />
              </Fragment>
            </PanelBody>
            <PanelBody
              title={__("Image Settings", "responsive-block-editor-addons")}
              initialOpen={false}
            >
              <ImageSettingsControl {...this.props} />
            </PanelBody>
            <PanelBody
              title={__("Button Settings", "responsive-block-editor-addons")}
              initialOpen={false}
            >
              <ButtonSettingsControl
                {...this.props}
                showMarginControls={false}
                showBackColorOpacity={false}
                showGradientHover={true}
                showTextOpacity={false}
              />
            </PanelBody>
          </InspectorTab>
          <InspectorTab key={"style"}>
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
                <Fragment>
                  <ColorBackgroundControl {...this.props} />
                  {backgroundColor && backgroundColor != '' && (
                    <RbeaRangeControl
                      label={__("Opacity", "responsive-block-editor-addons")}
                      value={columnBackColorOpacity}
                      onChange={(value) =>
                        setAttributes({
                          columnBackColorOpacity:
                            value !== undefined ? value : 100,
                        })
                      }
                      min={0}
                      max={100}
                      allowReset
                    />
                  )}
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
                    <RbeaRangeControl
                      label={__("Opacity", "responsive-block-editor-addons")}
                      value={opacity}
                      onChange={(value) =>
                        setAttributes({
                          opacity: value !== undefined ? value : 20,
                        })
                      }
                      min={0}
                      max={100}
                      allowReset
                    />
                  )}
                </Fragment>
              )}
            </PanelBody>
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
                  color: titleTypographyColor,
                  bottomSpacing: titleBottomSpacing,
                  bottomSpacingMobile: titleBottomSpacingMobile,
                  bottomSpacingTablet: titleBottomSpacingTablet,
                }}
                showLetterSpacing={false}
                showTextTransform={false}
                showColorControl={true}
                showTextBottomSpacing={true}
                setAttributes={setAttributes}
                {...this.props}
              />
              <TypographyHelperControl
                title={__(
                  "Price Prefix Typography",
                  "responsive-block-editor-addons"
                )}
                attrNameTemplate="prefix%s"
                values={{
                  family: prefixFontFamily,
                  size: prefixFontSize,
                  sizeMobile: prefixFontSizeMobile,
                  sizeTablet: prefixFontSizeTablet,
                  weight: prefixFontWeight,
                  height: prefixLineHeight,
                  color: prefixTypographyColor,
                }}
                showLetterSpacing={false}
                showTextTransform={false}
                showColorControl={true}
                setAttributes={setAttributes}
                {...this.props}
              />
              <TypographyHelperControl
                title={__("Price Typography", "responsive-block-editor-addons")}
                attrNameTemplate="amount%s"
                values={{
                  family: amountFontFamily,
                  size: amountFontSize,
                  sizeMobile: amountFontSizeMobile,
                  sizeTablet: amountFontSizeTablet,
                  weight: amountFontWeight,
                  height: amountLineHeight,
                  color: amountTypographyColor,
                  bottomSpacing: amountBottomSpacing,
                  bottomSpacingMobile: amountBottomSpacingMobile,
                  bottomSpacingTablet: amountBottomSpacingTablet,
                }}
                showLetterSpacing={false}
                showTextTransform={false}
                showColorControl={true}
                showTextBottomSpacing={true}
                setAttributes={setAttributes}
                {...this.props}
              />
              <TypographyHelperControl
                title={__(
                  "Price Suffix Typography",
                  "responsive-block-editor-addons"
                )}
                attrNameTemplate="suffix%s"
                values={{
                  family: suffixFontFamily,
                  size: suffixFontSize,
                  sizeMobile: suffixFontSizeMobile,
                  sizeTablet: suffixFontSizeTablet,
                  weight: suffixFontWeight,
                  height: suffixLineHeight,
                  color: suffixTypographyColor,
                }}
                showLetterSpacing={false}
                showTextTransform={false}
                showColorControl={true}
                setAttributes={setAttributes}
                {...this.props}
              />
              <TypographyHelperControl
                title={__(
                  "Sub Price Typography",
                  "responsive-block-editor-addons"
                )}
                attrNameTemplate="subprice%s"
                values={{
                  family: subpriceFontFamily,
                  size: subpriceFontSize,
                  sizeMobile: subpriceFontSizeMobile,
                  sizeTablet: subpriceFontSizeTablet,
                  weight: subpriceFontWeight,
                  height: subpriceLineHeight,
                  transform: subpriceTextTransform,
                  color: subpriceTypographyColor,
                  bottomSpacing: subpriceBottomSpacing,
                  bottomSpacingMobile: subpriceBottomSpacingMobile,
                  bottomSpacingTablet: subpriceBottomSpacingTablet,
                }}
                showLetterSpacing={false}
                showTextTransform={true}
                showColorControl={true}
                showTextBottomSpacing={true}
                setAttributes={setAttributes}
                {...this.props}
              />
              <TypographyHelperControl
                title={__(
                  "Features Typography",
                  "responsive-block-editor-addons"
                )}
                attrNameTemplate="features%s"
                values={{
                  family: featuresFontFamily,
                  size: featuresFontSize,
                  sizeMobile: featuresFontSizeMobile,
                  sizeTablet: featuresFontSizeTablet,
                  weight: featuresFontWeight,
                  height: featuresLineHeight,
                  color: featuresTypographyColor,
                  bottomSpacing: featuresBottomSpacing,
                  bottomSpacingMobile: featuresBottomSpacingMobile,
                  bottomSpacingTablet: featuresBottomSpacingTablet,
                }}
                showLetterSpacing={false}
                showTextTransform={false}
                showColorControl={true}
                showTextBottomSpacing={true}
                setAttributes={setAttributes}
                {...this.props}
              />
              <TypographyHelperControl
                title={__("CTA Typography", "responsive-block-editor-addons")}
                attrNameTemplate="cta%s"
                values={{
                  family: ctaFontFamily,
                  size: ctaFontSize,
                  sizeMobile: ctaFontSizeMobile,
                  sizeTablet: ctaFontSizeTablet,
                  weight: ctaFontWeight,
                  height: ctaLineHeight,
                }}
                showLetterSpacing={false}
                showTextTransform={false}
                setAttributes={setAttributes}
                {...this.props}
              />
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
              title={__("Spacing", "responsive-block-editor-addons")}
              initialOpen={false}
            >
              <PanelBody
                title={__("Block Spacing", "responsive-block-editor-addons")}
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
              <PanelBody
                title={__("Column Spacing", "responsive-block-editor-addons")}
                initialOpen={false}
              >
                <ResponsiveNewPaddingControl
                  attrNameTemplate="column%s"
                  resetValues={columnPaddingResetValues}
                  {...this.props}
                />
              </PanelBody>
              <ResponsiveSpacingControl
                title={"Title"}
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
                title={"Price"}
                attrNameTemplate="priceSpace%s"
                values={{
                  desktop: priceSpace,
                  tablet: priceSpaceTablet,
                  mobile: priceSpaceMobile,
                }}
                setAttributes={setAttributes}
                {...this.props}
              />
              <ResponsiveSpacingControl
                title={"Sub Price"}
                attrNameTemplate="subpriceSpace%s"
                values={{
                  desktop: subpriceSpace,
                  tablet: subpriceSpaceTablet,
                  mobile: subpriceSpaceMobile,
                }}
                setAttributes={setAttributes}
                {...this.props}
              />
              <ResponsiveSpacingControl
                title={"Button"}
                attrNameTemplate="buttonSpace%s"
                values={{
                  desktop: buttonSpace,
                  tablet: buttonSpaceTablet,
                  mobile: buttonSpaceMobile,
                }}
                setAttributes={setAttributes}
                {...this.props}
              />
              <ResponsiveSpacingControl
                title={"Features"}
                attrNameTemplate="featuresSpace%s"
                values={{
                  desktop: featuresSpace,
                  tablet: featuresSpaceTablet,
                  mobile: featuresSpaceMobile,
                }}
                setAttributes={setAttributes}
                {...this.props}
              />
            </PanelBody>
            <PanelBody
              title={__("Color Settings", "responsive-block-editor-addons")}
              initialOpen={false}
            >
               <RbeaColorControl
								label = {__("Text Color", "responsive-block-editor-addons")}
								colorValue={textColor}
								onChange={(colorValue) =>
									setAttributes({ textColor: colorValue })
								}
								resetColor={() => setAttributes({ textColor: "" })}
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
