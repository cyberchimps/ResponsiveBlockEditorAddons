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
    descColor,
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
    descFontFamily,
    descFontSize,
    descFontWeight,
    descLineHeight,
    titleTextTransform,
    descTextTransform,
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
      imageSpace,
      imageSpaceTablet,
      imageSpaceMobile,
    priceSpace,
    descSpace,
    buttonSpace,
    featuresSpace,
    titleSpaceMobile,
    priceSpaceMobile,
    descSpaceMobile,
    buttonSpaceMobile,
    featuresSpaceMobile,
    titleSpaceTablet,
    priceSpaceTablet,
    descSpaceTablet,
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
    descFontSizeMobile,
    descFontSizeTablet,
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
      titleTypographyColor,
      descTypographyColor,

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

  var selectors = {
    " .wp-block-responsive-block-editor-addons-feature-grid-item__button": {
      "display": "block",
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
      "border-top-left-radius": generateCSSUnit(ctaBlockTopRadius, "px"),
      "border-top-right-radius": generateCSSUnit(ctaBlockRightRadius, "px"),
      "border-bottom-right-radius": generateCSSUnit(ctaBlockBottomRadius, "px"),
      "border-bottom-left-radius": generateCSSUnit(ctaBlockLeftRadius, "px"),
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

    " .wp-block-responsive-block-editor-addons-feature-grid-item__button:hover": {
      color: ctaHoverColor + "!important",
      "background-color": updatedButtonBgHColor,
      "background-image": buttonHbackgroundType == 'color' ? 'none' : updatedButtonBgHImage,
      "border-color" : ctaHoverBorderColor,
    },

    " .wp-block-responsive-block-editor-addons-feature-grid-item.background-type-image": {
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
      "opacity": hideWidget ? 0.2 : 1,
      "text-align": blockAlign,
      "padding-top": generateCSSUnit(blockTopPadding, "px"),
      "padding-bottom": generateCSSUnit(blockBottomPadding, "px"),
      "padding-left": generateCSSUnit(blockLeftPadding, "px"),
      "padding-right": generateCSSUnit(blockRightPadding, "px"),
      "margin-top": generateCSSUnit(blockTopMargin, "px"),
      "margin-bottom": generateCSSUnit(blockBottomMargin, "px"),
      "margin-left": generateCSSUnit(blockLeftMargin, "px"),
      "margin-right": generateCSSUnit(blockRightMargin, "px"),
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


    " .wp-block-responsive-block-editor-addons-feature-grid-item": {
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
        backgroundType === "color"
          ? `${hexToRgba(
              backgroundColor || "#fff",
              columnbackcoloropacity || 0
            )}`
          : undefined,
      "background-image":
        backgroundType === "gradient"
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

      " .responsive-block-editor-addons-feature-image": {
      width: generateCSSUnit(imageWidth, "px"),
    },

      " .responsive-block-editor-addons-feature-image-wrap": {
      "margin-bottom": generateCSSUnit(imageSpace, "px"),
    },

    " .wp-block-responsive-block-editor-addons-feature-grid-item__title": {
      color: titleTypographyColor,
      "line-height": titleLineHeight,
      "font-weight": titleFontWeight,
      "font-size": generateCSSUnit(titleFontSize, "px"),
      "text-transform": titleTextTransform,
      "font-family": titleFontFamily,
      "margin-bottom": generateCSSUnit(titleSpace, "px"),
    },


    " .wp-block-responsive-block-editor-addons-feature-grid-item__desc": {
      color: descTypographyColor,
      "line-height": descLineHeight,
      "text-transform": descTextTransform,
      "font-weight": descFontWeight,
      "font-size": generateCSSUnit(descFontSize, "px"),
      "font-family": descFontFamily,
      "margin-bottom": generateCSSUnit(descSpace, "px"),
    },

  };

  var mobile_selectors = {
    "": {
      "opacity": hideWidgetMobile ? 0.2 : 1,
      "padding-top": generateCSSUnit(blockTopPaddingMobile, "px"),
      "padding-bottom": generateCSSUnit(blockBottomPaddingMobile, "px"),
      "padding-left": generateCSSUnit(blockLeftPaddingMobile, "px"),
      "padding-right": generateCSSUnit(blockRightPaddingMobile, "px"),
      "margin-top": generateCSSUnit(blockTopMarginMobile, "px"),
      "margin-bottom": generateCSSUnit(blockBottomMarginMobile, "px"),
      "margin-left": generateCSSUnit(blockLeftMarginMobile, "px"),
      "margin-right": generateCSSUnit(blockRightMarginMobile, "px"),
    },
    " .wp-block-responsive-block-editor-addons-feature-grid-item": {
      "padding-top": generateCSSUnit(columnTopPaddingMobile, "px"),
      "padding-bottom": generateCSSUnit(columnBottomPaddingMobile, "px"),
      "padding-left": generateCSSUnit(columnLeftPaddingMobile, "px"),
      "padding-right": generateCSSUnit(columnRightPaddingMobile, "px"),
      "border-top-left-radius": generateCSSUnit(blockTopRadiusMobile, "px"),
      "border-top-right-radius": generateCSSUnit(blockRightRadiusMobile, "px"),
      "border-bottom-right-radius": generateCSSUnit(blockBottomRadiusMobile, "px"),
      "border-bottom-left-radius": generateCSSUnit(blockLeftRadiusMobile, "px"),
    },
      " .responsive-block-editor-addons-feature-image-wrap": {
          "margin-bottom": generateCSSUnit(imageSpaceMobile, "px"),
      },
      " .wp-block-responsive-block-editor-addons-feature-grid-item__title": {
      "font-size": generateCSSUnit(titleFontSizeMobile, "px"),
      "margin-bottom": generateCSSUnit(titleSpaceMobile, "px"),
    },
    " .wp-block-responsive-block-editor-addons-feature-grid-item__desc": {
      "font-size": generateCSSUnit(descFontSizeMobile, "px"),
      "margin-bottom": generateCSSUnit(descSpaceMobile, "px"),
    },
    " .wp-block-responsive-block-editor-addons-feature-grid-item__button": {
      "padding-left": generateCSSUnit(ctaButtonLeftPaddingMobile, "px"),
      "padding-right": generateCSSUnit(ctaButtonRightPaddingMobile, "px"),
      "padding-top": generateCSSUnit(ctaButtonTopPaddingMobile, "px"),
      "padding-bottom": generateCSSUnit(ctaButtonBottomPaddingMobile, "px"),
      "border-top-left-radius": generateCSSUnit(ctaBlockTopRadiusMobile, "px"),
      "border-top-right-radius": generateCSSUnit(ctaBlockRightRadiusMobile, "px"),
      "border-bottom-right-radius": generateCSSUnit(ctaBlockBottomRadiusMobile, "px"),
      "border-bottom-left-radius": generateCSSUnit(ctaBlockLeftRadiusMobile, "px"),
      "font-size": generateCSSUnit(ctaFontSizeMobile, "px"),
      "margin-bottom": generateCSSUnit(buttonSpaceMobile, "px"),
    },
      " .responsive-block-editor-addons-feature-image": {
          width: generateCSSUnit(imageWidthMobile, "px"),
      },
  };

  var tablet_selectors = {
    "": {
      "opacity": hideWidgetTablet ? 0.2 : 1,
      "padding-top": generateCSSUnit(blockTopPaddingTablet, "px"),
      "padding-bottom": generateCSSUnit(blockBottomPaddingTablet, "px"),
      "padding-left": generateCSSUnit(blockLeftPaddingTablet, "px"),
      "padding-right": generateCSSUnit(blockRightPaddingTablet, "px"),
      "margin-top": generateCSSUnit(blockTopMarginTablet, "px"),
      "margin-bottom": generateCSSUnit(blockBottomMarginTablet, "px"),
      "margin-left": generateCSSUnit(blockLeftMarginTablet, "px"),
      "margin-right": generateCSSUnit(blockRightMarginTablet, "px"),
    },
    " .wp-block-responsive-block-editor-addons-feature-grid-item": {
      "padding-top": generateCSSUnit(columnTopPaddingTablet, "px"),
      "padding-bottom": generateCSSUnit(columnBottomPaddingTablet, "px"),
      "padding-left": generateCSSUnit(columnLeftPaddingTablet, "px"),
      "padding-right": generateCSSUnit(columnRightPaddingTablet, "px"),
      "border-top-left-radius": generateCSSUnit(blockTopRadiusTablet, "px"),
      "border-top-right-radius": generateCSSUnit(blockRightRadiusTablet, "px"),
      "border-bottom-right-radius": generateCSSUnit(blockBottomRadiusTablet, "px"),
      "border-bottom-left-radius": generateCSSUnit(blockLeftRadiusTablet, "px"),
      
    },
      " .responsive-block-editor-addons-feature-image-wrap": {
          "margin-bottom": generateCSSUnit(imageSpaceTablet, "px"),
      },
      " .wp-block-responsive-block-editor-addons-feature-grid-item__title": {
      "font-size": generateCSSUnit(titleFontSizeTablet, "px"),
      "margin-bottom": generateCSSUnit(titleSpaceTablet, "px"),
    },
    " .wp-block-responsive-block-editor-addons-feature-grid-item__desc": {
      "font-size": generateCSSUnit(descFontSizeTablet, "px"),
      "margin-bottom": generateCSSUnit(descSpaceTablet, "px"),
    },
    " .wp-block-responsive-block-editor-addons-feature-grid-item__button": {
      "padding-left": generateCSSUnit(ctaButtonLeftPaddingTablet, "px"),
      "padding-right": generateCSSUnit(ctaButtonRightPaddingTablet, "px"),
      "padding-top": generateCSSUnit(ctaButtonTopPaddingTablet, "px"),
      "padding-bottom": generateCSSUnit(ctaButtonBottomPaddingTablet, "px"),
      "border-top-left-radius": generateCSSUnit(ctaBlockTopRadiusTablet, "px"),
      "border-top-right-radius": generateCSSUnit(ctaBlockRightRadiusTablet, "px"),
      "border-bottom-right-radius": generateCSSUnit(ctaBlockBottomRadiusTablet, "px"),
      "border-bottom-left-radius": generateCSSUnit(ctaBlockLeftRadiusTablet, "px"),
      "font-size": generateCSSUnit(ctaFontSizeTablet, "px"),
      "margin-bottom": generateCSSUnit(buttonSpaceTablet, "px"),
    },
      " .responsive-block-editor-addons-feature-image": {
          width: generateCSSUnit(imageWidthTablet, "px"),
      },
  };

  var styling_css = "";
  var id = `.responsive-block-editor-addons-block-feature-grid.block-${block_id}`;

  styling_css = generateCSS(selectors, id);
  styling_css += generateCSS(tablet_selectors, id, true, "tablet");
  styling_css += generateCSS(mobile_selectors, id, true, "mobile");

  return styling_css;
}

export default EditorStyles;
