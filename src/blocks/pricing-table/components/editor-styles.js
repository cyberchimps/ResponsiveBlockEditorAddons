/**
 * Returns Dynamic Generated CSS
 */

import generateCSS from "../../../generateCSS";
import generateCSSUnit from "../../../generateCSSUnit";
import { hexToRgba } from "../../../utils";
import generateBackgroundImageEffect from "../../../generateBackgroundImageEffect";

function EditorStyles(props) {
  const {
    block_id,
    textColor,
    titleColor,
    prefixColor,
    priceColor,
    suffixColor,
    subpriceColor,
    featuresColor,
    itemBackgroundColor,
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
    blockBorderColor,
    backgroundColor,
    backgroundColor1,
    backgroundColor2,
    colorLocation1,
    colorLocation2,
    gradientDirection,
    backgroundType,
    backgroundImage,
    opacity,
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
    blockbackgroundColor,
    blockBackColorOpacity,
    columnBackColorOpacity,
    blockbackgroundColor1,
    blockbackgroundColor2,
    blockcolorLocation1,
    blockcolorLocation2,
    blockgradientDirection,
    blockbackgroundType,
    blockopacity,
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
      imageWidth,
      imageWidthTablet,
      imageWidthMobile,
      hideWidget,
      hideWidgetTablet,
      hideWidgetMobile,
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
  } = props.attributes;

  var boxShadowPositionCSS = boxShadowPosition;

  if ("outset" === boxShadowPosition) {
    boxShadowPositionCSS = "";
  }
  var buttonBoxShadowPositionCSS = buttonBoxShadowPosition;

  if ("outset" === buttonBoxShadowPosition) {
    buttonBoxShadowPositionCSS = "";
  }

  let updatedButtonBgHColor = "";
  let updatedButtonBgHImage = "";
  if (buttonHbackgroundType === "color") {
    updatedButtonBgHColor = ctaHoverBackColor;
  } else if (buttonHbackgroundType == "gradient") {
    updatedButtonBgHImage = `linear-gradient(${buttonHgradientDirection}deg, ${buttonHbackgroundColor1} ${buttonHcolorLocation1}%, ${buttonHbackgroundColor2} ${buttonHcolorLocation2}%)`;
  }

  let updatedButtonBackgroundColor = "";
  let updatedButtonBackgroundImage = "";
  if (buttonbackgroundType == "color") {
    updatedButtonBackgroundColor = ctaBackColor;
  } else if (buttonbackgroundType == "gradient") {
    updatedButtonBackgroundImage = `linear-gradient(${buttongradientDirection}deg, ${buttonbackgroundColor1} ${buttoncolorLocation1}%, ${buttonbackgroundColor2} ${buttoncolorLocation2}%)`;
  }

  let imgopacity = opacity / 100;
  let blockimgopacity = blockopacity / 100;
  let columnbackcoloropacity = columnBackColorOpacity / 100;
  let gradientOpacity = opacity / 100;

  let alignStyle = "center";
  if ("left" == blockAlign) {
    alignStyle = "flex-start";
  }
  if ("right" == blockAlign) {
    alignStyle = "flex-end";
  }

  var selectors = {
    " .wp-block-responsive-block-editor-addons-pricing-table-item__button": {
      color: ctaColor + "!important",
      "background-color": updatedButtonBackgroundColor,
      "background-image": updatedButtonBackgroundImage,
      "margin-left": "left" == blockAlign ? 0 : "",
      "margin-right": "right" == blockAlign ? 0 : "",
      "margin-bottom": generateCSSUnit(buttonSpace, "px"),
      "padding-left": generateCSSUnit(ctaButtonLeftPadding, "px"),
      "padding-right": generateCSSUnit(ctaButtonRightPadding, "px"),
      "padding-top": generateCSSUnit(ctaButtonTopPadding, "px"),
      "padding-bottom": generateCSSUnit(ctaButtonBottomPadding, "px"),
      "border-color": ctaBorderColor,
      "border-radius": generateCSSUnit(ctaBorderRadius, "px"),
      "border-width": generateCSSUnit(ctaBorderWidth, "px"),
      "border-style": ctaBorderStyle,
      "line-height": ctaLineHeight,
      "font-weight": ctaFontWeight,
      "font-size": generateCSSUnit(ctaFontSize, "px"),
      "font-family": ctaFontFamily,
      "box-shadow":
        generateCSSUnit(buttonBoxShadowHOffset, "px") +
        " " +
        generateCSSUnit(buttonBoxShadowVOffset, "px") +
        " " +
        generateCSSUnit(buttonBoxShadowBlur, "px") +
        " " +
        generateCSSUnit(buttonBoxShadowSpread, "px") +
        " " +
        buttonBoxShadowColor +
        " " +
        buttonBoxShadowPositionCSS,
    },

    " .wp-block-responsive-block-editor-addons-pricing-table-item__button:hover": {
      color: ctaHoverColor + "!important",
      "background-color": updatedButtonBgHColor,
      "background-image": buttonHbackgroundType == 'color' ? 'none' : updatedButtonBgHImage,
      "border-color" : ctaHoverBorderColor,
    },

    " .wp-block-responsive-block-editor-addons-pricing-table-item.background-type-image": {
      "background-image": `linear-gradient(${hexToRgba(
        "#fff",
        1 - imgopacity || 0
      )},${hexToRgba("#fff", 1 - imgopacity || 0)}),url(${backgroundImage});`,
      "background-position": "center center",
      "background-attachment": "scroll",
      "background-repeat": "no-repeat",
      "background-size": "cover",
    },

    "": {
      "opacity": hideWidget? 0.2 : 1,
      "text-align": blockAlign,
      "padding-top": generateCSSUnit(blockTopPadding, "px"),
      "padding-bottom": generateCSSUnit(blockBottomPadding, "px"),
      "padding-left": generateCSSUnit(blockLeftPadding, "px"),
      "padding-right": generateCSSUnit(blockRightPadding, "px"),
      'margin-top': generateCSSUnit(blockTopMargin, "px"),
      'margin-right': generateCSSUnit(blockRightMargin, "px"),
      'margin-bottom': generateCSSUnit(blockBottomMargin, "px"),
      'margin-left': generateCSSUnit(blockLeftMargin, "px"),
      "background-color":
        blockbackgroundType == "color"
          ? `${hexToRgba(blockbackgroundColor || "#fff", 0)}`
          : "",
      opacity: blockbackgroundType == "color" ? blockBackColorOpacity : 100,
      "background-image":
        blockbackgroundType == "gradient"
          ? generateBackgroundImageEffect(
              blockbackgroundColor1,
              blockbackgroundColor2,
              blockgradientDirection,
              blockcolorLocation1,
              blockcolorLocation2
            )
          : undefined,
    },

    " .responsive-block-editor-addons-pricing-table-background-image": {
      height: "100" + "%",
      opacity: blockimgopacity,
    },

    " .wp-block-responsive-block-editor-addons-pricing-table-item": {
      "padding-top": generateCSSUnit(columnTopPadding, "px"),
      "padding-bottom": generateCSSUnit(columnBottomPadding, "px"),
      "padding-left": generateCSSUnit(columnLeftPadding, "px"),
      "padding-right": generateCSSUnit(columnRightPadding, "px"),
      color: textColor,
      "background-color": itemBackgroundColor,
      "border-width": generateCSSUnit(blockBorderWidth, "px"),
      "border-color": blockBorderColor,
      "border-style": blockBorderStyle,
      "border-top-left-radius": generateCSSUnit(blockTopRadius, "px"),
      "border-top-right-radius": generateCSSUnit(blockRightRadius, "px"),
      "border-bottom-right-radius": generateCSSUnit(blockBottomRadius, "px"),
      "border-bottom-left-radius": generateCSSUnit(blockLeftRadius, "px"),
      "background-color":
        backgroundType == "color"
          ? `${hexToRgba(
              backgroundColor || "#fff",
              columnbackcoloropacity || 0
            )}`
          : "#eee",
      "background-image":
        backgroundType == "gradient"
          ? generateBackgroundImageEffect(
              `${hexToRgba(
                backgroundColor1 || "#fff",
                gradientOpacity || 0
              )}`,
              `${hexToRgba(
                backgroundColor2 || "#fff",
                gradientOpacity || 0
              )}`,
              gradientDirection,
              colorLocation1,
              colorLocation2
            )
          : undefined,
      "box-shadow":
        generateCSSUnit(boxShadowHOffset, "px") +
        " " +
        generateCSSUnit(boxShadowVOffset, "px") +
        " " +
        generateCSSUnit(boxShadowBlur, "px") +
        " " +
        generateCSSUnit(boxShadowSpread, "px") +
        " " +
        boxShadowColor +
        " " +
        boxShadowPositionCSS,
    },

    " .responsive-block-editor-addons-remove-image": {
      position: "absolute",
      right: "15px",
      top: "45px",
    },

      " .responsive-block-editor-addons-pricing-image": {
      width: generateCSSUnit(imageWidth, "px"),
    },

    " .wp-block-responsive-block-editor-addons-pricing-table-item__title": {
      color: titleTypographyColor,
      "line-height": titleLineHeight,
      "font-weight": titleFontWeight,
      "font-size": generateCSSUnit(titleFontSize, "px"),
      "font-family": titleFontFamily,
      "margin-bottom": generateCSSUnit(titleBottomSpacing, "px"),
    },

    " .wp-block-responsive-block-editor-addons-pricing-table-item__price-wrapper": {
      "margin-bottom": generateCSSUnit(amountBottomSpacing, "px"),
      "justify-content": alignStyle,
    },

    " .wp-block-responsive-block-editor-addons-pricing-table-item__currency": {
      color: prefixTypographyColor,
      "line-height": prefixLineHeight,
      "font-weight": prefixFontWeight,
      "font-size": generateCSSUnit(prefixFontSize, "px"),
      "font-family": prefixFontFamily,
    },

    " .wp-block-responsive-block-editor-addons-pricing-table-item__amount": {
      color: amountTypographyColor,
      "line-height": amountLineHeight,
      "font-weight": amountFontWeight,
      "font-size": generateCSSUnit(amountFontSize, "px"),
      "font-family": amountFontFamily,
    },

    " .wp-block-responsive-block-editor-addons-pricing-table-item__price_suffix": {
      color: suffixTypographyColor,
      "line-height": suffixLineHeight,
      "font-weight": suffixFontWeight,
      "font-size": generateCSSUnit(suffixFontSize, "px"),
      "font-family": suffixFontFamily,
    },

    " .wp-block-responsive-block-editor-addons-pricing-table-item__sub_price": {
      color: subpriceTypographyColor,
      "line-height": subpriceLineHeight,
      "text-transform": subpriceTextTransform,
      "font-weight": subpriceFontWeight,
      "font-size": generateCSSUnit(subpriceFontSize, "px"),
      "font-family": subpriceFontFamily,
      "margin-bottom": generateCSSUnit(subpriceBottomSpacing, "px"),
    },

    " .wp-block-responsive-block-editor-addons-pricing-table-item__features": {
      color: featuresTypographyColor,
      "line-height": featuresLineHeight,
      "font-weight": featuresFontWeight,
      "font-size": generateCSSUnit(featuresFontSize, "px"),
      "font-family": featuresFontFamily,
      "margin-bottom": generateCSSUnit(featuresBottomSpacing, "px"),
    },
  };

  var mobile_selectors = {
    "": {
      "opacity": hideWidgetMobile? 0.2 : 1,
      "padding-top": generateCSSUnit(blockTopPaddingMobile, "px"),
      "padding-bottom": generateCSSUnit(blockBottomPaddingMobile, "px"),
      "padding-left": generateCSSUnit(blockLeftPaddingMobile, "px"),
      "padding-right": generateCSSUnit(blockRightPaddingMobile, "px"),
      'margin-top': generateCSSUnit(blockTopMarginMobile, "px"),
      'margin-right': generateCSSUnit(blockRightMarginMobile, "px"),
      'margin-bottom': generateCSSUnit(blockBottomMarginMobile, "px"),
      'margin-left': generateCSSUnit(blockLeftMarginMobile, "px"),
    },
    " .wp-block-responsive-block-editor-addons-pricing-table-item": {
      "padding-top": generateCSSUnit(columnTopPaddingMobile, "px"),
      "padding-bottom": generateCSSUnit(columnBottomPaddingMobile, "px"),
      "padding-left": generateCSSUnit(columnLeftPaddingMobile, "px"),
      "padding-right": generateCSSUnit(columnRightPaddingMobile, "px"),
      "border-top-left-radius": generateCSSUnit(blockTopRadiusMobile, "px"),
      "border-top-right-radius": generateCSSUnit(blockRightRadiusMobile, "px"),
      "border-bottom-right-radius": generateCSSUnit(blockBottomRadiusMobile, "px"),
      "border-bottom-left-radius": generateCSSUnit(blockLeftRadiusMobile, "px"),
    },
    " .wp-block-responsive-block-editor-addons-pricing-table-item__price-wrapper": {
      "margin-bottom": generateCSSUnit(amountBottomSpacingMobile, "px"),
    },
    " .wp-block-responsive-block-editor-addons-pricing-table-item__title": {
      "font-size": generateCSSUnit(titleFontSizeMobile, "px"),
      "margin-bottom": generateCSSUnit(titleBottomSpacingMobile, "px"),
    },
    " .wp-block-responsive-block-editor-addons-pricing-table-item__currency": {
      "font-size": generateCSSUnit(prefixFontSizeMobile, "px"),
    },
    " .wp-block-responsive-block-editor-addons-pricing-table-item__amount": {
      "font-size": generateCSSUnit(amountFontSizeMobile, "px"),
    },
    " .wp-block-responsive-block-editor-addons-pricing-table-item__price_suffix": {
      "font-size": generateCSSUnit(suffixFontSizeMobile, "px"),
    },
    " .wp-block-responsive-block-editor-addons-pricing-table-item__sub_price": {
      "font-size": generateCSSUnit(subpriceFontSizeMobile, "px"),
      "margin-bottom": generateCSSUnit(subpriceBottomSpacingMobile, "px"),
    },
    " .wp-block-responsive-block-editor-addons-pricing-table-item__features": {
      "font-size": generateCSSUnit(featuresFontSizeMobile, "px"),
      "margin-bottom": generateCSSUnit(featuresBottomSpacingMobile, "px"),
    },
    " .wp-block-responsive-block-editor-addons-pricing-table-item__button": {
      "padding-left": generateCSSUnit(ctaButtonLeftPaddingMobile, "px"),
      "padding-right": generateCSSUnit(ctaButtonRightPaddingMobile, "px"),
      "padding-top": generateCSSUnit(ctaButtonTopPaddingMobile, "px"),
      "padding-bottom": generateCSSUnit(ctaButtonBottomPaddingMobile, "px"),
      "font-size": generateCSSUnit(ctaFontSizeMobile, "px"),
      "margin-bottom": generateCSSUnit(buttonSpaceMobile, "px"),
    },
      " .responsive-block-editor-addons-pricing-image": {
          width: generateCSSUnit(imageWidthMobile, "px"),
      },
  };

  var tablet_selectors = {
    "": {
      "opacity": hideWidgetTablet? 0.2 : 1,
      "padding-top": generateCSSUnit(blockTopPaddingTablet, "px"),
      "padding-bottom": generateCSSUnit(blockBottomPaddingTablet, "px"),
      "padding-left": generateCSSUnit(blockLeftPaddingTablet, "px"),
      "padding-right": generateCSSUnit(blockRightPaddingTablet, "px"),
      'margin-top': generateCSSUnit(blockTopMarginTablet, "px"),
      'margin-right': generateCSSUnit(blockRightMarginTablet, "px"),
      'margin-bottom': generateCSSUnit(blockBottomMarginTablet, "px"),
      'margin-left': generateCSSUnit(blockLeftMarginTablet, "px"),
    },
    " .wp-block-responsive-block-editor-addons-pricing-table-item": {
      "padding-top": generateCSSUnit(columnTopPaddingTablet, "px"),
      "padding-bottom": generateCSSUnit(columnBottomPaddingTablet, "px"),
      "padding-left": generateCSSUnit(columnLeftPaddingTablet, "px"),
      "padding-right": generateCSSUnit(columnRightPaddingTablet, "px"),
      "border-top-left-radius": generateCSSUnit(blockTopRadiusTablet, "px"),
      "border-top-right-radius": generateCSSUnit(blockRightRadiusTablet, "px"),
      "border-bottom-right-radius": generateCSSUnit(blockBottomRadiusTablet, "px"),
      "border-bottom-left-radius": generateCSSUnit(blockLeftRadiusTablet, "px"),
    },
    " .wp-block-responsive-block-editor-addons-pricing-table-item__price-wrapper": {
      "margin-bottom": generateCSSUnit(amountBottomSpacingTablet, "px"),
    },
    " .wp-block-responsive-block-editor-addons-pricing-table-item__title": {
      "font-size": generateCSSUnit(titleFontSizeTablet, "px"),
      "margin-bottom": generateCSSUnit(titleBottomSpacingTablet, "px"),
    },
    " .wp-block-responsive-block-editor-addons-pricing-table-item__currency": {
      "font-size": generateCSSUnit(prefixFontSizeTablet, "px"),
    },
    " .wp-block-responsive-block-editor-addons-pricing-table-item__amount": {
      "font-size": generateCSSUnit(amountFontSizeTablet, "px"),
    },
    " .wp-block-responsive-block-editor-addons-pricing-table-item__price_suffix": {
      "font-size": generateCSSUnit(suffixFontSizeTablet, "px"),
    },
    " .wp-block-responsive-block-editor-addons-pricing-table-item__sub_price": {
      "font-size": generateCSSUnit(subpriceFontSizeTablet, "px"),
      "margin-bottom": generateCSSUnit(subpriceBottomSpacingTablet, "px"),
    },
    " .wp-block-responsive-block-editor-addons-pricing-table-item__features": {
      "font-size": generateCSSUnit(featuresFontSizeTablet, "px"),
      "margin-bottom": generateCSSUnit(featuresBottomSpacingTablet, "px"),
    },
    " .wp-block-responsive-block-editor-addons-pricing-table-item__button": {
      "padding-left": generateCSSUnit(ctaButtonLeftPaddingTablet, "px"),
      "padding-right": generateCSSUnit(ctaButtonRightPaddingTablet, "px"),
      "padding-top": generateCSSUnit(ctaButtonTopPaddingTablet, "px"),
      "padding-bottom": generateCSSUnit(ctaButtonBottomPaddingTablet, "px"),
      "font-size": generateCSSUnit(ctaFontSizeTablet, "px"),
      "margin-bottom": generateCSSUnit(buttonSpaceTablet, "px"),
    },
      " .responsive-block-editor-addons-pricing-image": {
          width: generateCSSUnit(imageWidthTablet, "px"),
      },
  };

  var styling_css = "";
  var id = `.responsive-block-editor-addons-block-pricing-table.block-${block_id}`;

  styling_css = generateCSS(selectors, id);
  styling_css += generateCSS(tablet_selectors, id, true, "tablet");
  styling_css += generateCSS(mobile_selectors, id, true, "mobile");

  return styling_css;
}

export default EditorStyles;
