/**
 * Returns Dynamic Generated CSS
 */

import generateCSS from "../../../generateCSS";
import generateCSSUnit from "../../../generateCSSUnit";
import { hexToRgba } from "../../../utils/index.js";
import generateBackgroundImageEffect from "../../../generateBackgroundImageEffect";

function EditorStyles(props) {
  const {
    block_id,
    contentAlignment,
    textColor,
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
    borderStyle, //For compatibility with v1.3.2.
    borderColor, //For compatibility with v1.3.2.
    borderWidth, //For compatibility with v1.3.2.
    borderRadius, //For compatibility with v1.3.2.
    boxShadowColor,
    boxShadowHOffset,
    boxShadowVOffset,
    boxShadowBlur,
    boxShadowSpread,
    boxShadowPosition,
    titleSpace,
    titleSpaceMobile,
    titleSpaceTablet,
    subtitleSpace,
    subtitleSpaceMobile,
    subtitleSpaceTablet,
    contentSpace,
    contentSpaceMobile,
    contentSpaceTablet,
    ctaBackColor,
    ctaColor,
    buttonColor, //For compatibility with v1.3.2.
    buttonTextColor, //For compatibility with v1.3.2.
    opacity,
    backgroundType,
    backgroundImage,
    gradientDirection,
    backgroundPosition,
    backgroundPositionMobile,
    backgroundPositionTablet,
    backgroundAttachment,
    backgroundRepeat,
    backgroundSize,
    backgroundSizeTablet,
    backgroundSizeMobile,
    colorLocation1,
    colorLocation2,
    backgroundColor1,
    backgroundColor2,
    imagePosition,
    imageRepeat,
    thumbsize,
    imageheight,
    blockzindex,
    blockmargin,
    blockmarginMobile,
    blockmarginTablet,
    icon_color,
    ctaHoverBackColor,
    buttonhColor, //For compatibility with v1.3.2.
    ctaHoverColor,
    buttonhTextColor, //For compatibility with v1.3.2.
    buttonopacity,
    butopacity, //For compatibility with v1.3.2.
    ctaVpadding,
    ctaHpadding,
    vPadding, //For compatibility with v1.3.2.
    hPadding, //For compatibility with v1.3.2.
    vMargin,
    hMargin,
    ctaBorderWidth,
    ctaBorderRadius,
    ctaBorderStyle,
    butborderWidth, //For compatibility with v1.3.2.
    butborderRadius, //For compatibility with v1.3.2.
    butborderStyle, //For compatibility with v1.3.2.
    buttonbackgroundType,
    buttongradientDirection,
    buttoncolorLocation1,
    buttoncolorLocation2,
    buttonbackgroundColor1,
    buttonbackgroundColor2,
    icon_hcolor,
    subLineHeight,
    subFontWeight,
    subFontSize,
    subFontFamily,
    headingFontFamily,
    headingLineHeight,
    headingFontWeight,
    headingFontSize,
    contentFontFamily,
    contentLineHeight,
    contentFontWeight,
    contentFontSize,
    blockbotmargin,
    blockbotmarginMobile,
    blockbotmarginTablet,
    blockleftmargin,
    blockleftmarginMobile,
    blockleftmarginTablet,
    blockrightmargin,
    blockrightmarginMobile,
    blockrightmarginTablet,
    bgimagePosition, //For compatibility with v1.3.2.
    bgimageRepeat, //For compatibility with v1.3.2.
    bgthumbsize, //For compatibility with v1.3.2.
    backgroundImageOne,
    backgroundImageTwo,
    backgroundImageThree,
    backgroundImageFour,
    backgroundImagePosition,
    backgroundImageSize,
    backgroundImageRepeat,
    headingFontSizeMobile,
    headingFontSizeTablet,
    subFontSizeMobile,
    subFontSizeTablet,
    contentFontSizeMobile,
    contentFontSizeTablet,
    buttonHopacity,
    ctaBorderColor,
    ctaHoverBorderColor,
    ctaTextOpacity,
    ctaHpaddingTablet,
    ctaHpaddingMobile,
    ctaVpaddingTablet,
    ctaVpaddingMobile,
    vMarginTablet,
    vMarginMobile,
    hMarginTablet,
    hMarginMobile,
    backgroundColor,
    itemBackgroundColor, //For compatibility with v1.3.2.
    buttonHbackgroundType,
    hideWidget,
    hideWidgetTablet,
    hideWidgetMobile,
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
    backgroundImageColor,
    cardImagePositionTab,
    cardImageSize,
    cardImageSizeTablet,
    cardImageSizeMobile,
    cardImagePosition,
    cardImagePositionMobile,
    cardImagePositionTablet,
    cardImageSizeTab,
    cardImageRepeat,
    headingTypographyColor,
    headingBottomSpacing,
    headingBottomSpacingMobile,
    headingBottomSpacingTablet,
    subBottomSpacing,
    subBottomSpacingMobile,
    subBottomSpacingTablet,
    contentBottomSpacing,
    contentBottomSpacingMobile,
    contentBottomSpacingTablet,

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
    ctaButtonTopMargin,
    ctaButtonBottomMargin,
    ctaButtonLeftMargin,
    ctaButtonRightMargin,
    ctaButtonTopMarginTablet,
    ctaButtonBottomMarginTablet,
    ctaButtonRightMarginTablet,
    ctaButtonLeftMarginTablet,
    ctaButtonTopMarginMobile,
    ctaButtonBottomMarginMobile,
    ctaButtonLeftMarginMobile,
    ctaButtonRightMarginMobile,
  } = props.attributes;

  var boxShadowPositionCSS = boxShadowPosition;

  if ("outset" === boxShadowPosition) {
    boxShadowPositionCSS = "";
  }

  let imgopacity = opacity / 100;

  let but_opacity = butopacity !== 999 && buttonopacity === 100 ? butopacity / 100 : buttonopacity / 100; //For compatibility with v1.3.2.
  let buthopacity = buttonHopacity / 100;
  let textOpacity = ctaTextOpacity / 100;

  let updatedButtonColor = "";
  let updatedButtonhColor = "";
  let updatedButtonBackgroundImage = "";
  if (buttonbackgroundType == "color") {
    updatedButtonColor = buttonColor !== 'empty' && !ctaBackColor ? buttonColor : ctaBackColor; //For compatibility with v1.3.2.
  }
  if (buttonHbackgroundType == "color") {
    updatedButtonhColor = buttonhColor !== 'empty' && '' === ctaHoverBackColor ? buttonhColor : ctaHoverBackColor;
  } else {
    updatedButtonhColor = '';
  }

  if ( 'gradient' === buttonbackgroundType) {
    updatedButtonBackgroundImage = generateBackgroundImageEffect(
      buttonbackgroundColor1,
      buttonbackgroundColor2,
      buttongradientDirection,
      buttoncolorLocation1,
      buttoncolorLocation2
    )
  }

  var selectors = {
    " .responsive-block-editor-addons-card-button-inner .res-button": {
      color: buttonTextColor !== 'empty' && '#fff' === ctaColor ? buttonTextColor : ctaColor, //For compatibility with v1.3.2.
      opacity: textOpacity,
    },

    " .responsive-block-editor-addons-card-button-inner:hover .res-button": {
      color: buttonhTextColor !== 'empty' && ctaHoverColor === '#e6f2ff' ? buttonhTextColor : ctaHoverColor, //For compatibility with v1.3.2.
    },

    " .responsive-block-editor-addons-card-button-inner .responsive-block-editor-addons-button__icon svg": {
      fill: icon_color,
    },

    " .responsive-block-editor-addons-card-button-inner:hover .responsive-block-editor-addons-button__icon svg": {
      fill: icon_hcolor,
    },

    " .wp-block-responsive-block-editor-addons-card-item__button-wrapper .responsive-block-editor-addons-card-button-inner": {
      "background-color": hexToRgba(
        updatedButtonColor || "#2091e1",
        but_opacity || 0
      ),
    },

    " .responsive-block-editor-addons-card-button-inner:hover": {
      "background-color": hexToRgba(
        updatedButtonhColor || "none",
        buthopacity || 0
      ),
      "border-color": ctaHoverBorderColor,
      "background-image": buttonHbackgroundType == 'color' ? 'none' : updatedButtonBackgroundImage,
    },

    "": {
      "opacity": hideWidget ? 0.2 : 1,
      'margin-top': generateCSSUnit(blockTopMargin, "px"),
			'margin-right': generateCSSUnit(blockRightMargin, "px"),
			'margin-bottom': generateCSSUnit(blockBottomMargin, "px"),
			'margin-left': generateCSSUnit(blockLeftMargin, "px"),
      "z-index": blockzindex,
      'padding-top': generateCSSUnit(blockTopPadding, "px"),
			'padding-right': generateCSSUnit(blockRightPadding, "px"),
			'padding-bottom': generateCSSUnit(blockBottomPadding, "px"),
			'padding-left': generateCSSUnit(blockLeftPadding, "px"),
    },

    " .wp-block-responsive-block-editor-addons-card-item": {
      "border-color": borderColor!== "empty" && blockBorderColor === "" ? borderColor : blockBorderColor, //For compatibility with v1.3.2.
      "border-style": borderStyle !== "empty" && blockBorderStyle === "none" ? borderStyle : blockBorderStyle, //For compatibility with v1.3.2.
      "border-width": borderWidth !== 999 && blockBorderWidth === 0 ? generateCSSUnit( borderWidth, "px" ) : generateCSSUnit(blockBorderWidth, "px"), //For compatibility with v1.3.2.
      "border-top-left-radius": generateCSSUnit(blockTopRadius, "px"),
      "border-top-right-radius": generateCSSUnit(blockRightRadius, "px"),
      "border-bottom-right-radius": generateCSSUnit(blockBottomRadius, "px"),
      "border-bottom-left-radius": generateCSSUnit(blockLeftRadius, "px"),
      "opacity": generateCSSUnit(imgopacity, "px"),
      color: headingTypographyColor,
      "background-color":
        backgroundType == "color"
          ? itemBackgroundColor !== 'empty' && backgroundColor === '' ? `${hexToRgba(itemBackgroundColor || "#fff", imgopacity || 0)}` : `${hexToRgba(backgroundColor || "#fff", imgopacity || 0)}`  //For compatibility with v1.3.2.
          : undefined,
      "background-image":
        backgroundType == "gradient"
          ? generateBackgroundImageEffect(
              backgroundColor1,
              backgroundColor2,
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

    " .responsive-block-editor-addons-card-background-image": {
      "background-image": backgroundImage
        ? `url(${backgroundImage})`
        : null,
      "background-attachment": backgroundAttachment,
      "opacity": imgopacity,
      height: 100 + "%",
      "background-position": backgroundPosition ? backgroundPosition : "center center",
      "background-repeat": backgroundRepeat ? backgroundRepeat : "no-repeat",
      "background-size": backgroundSize ? backgroundSize : "cover",
    },

    " .responsive-block-editor-addons-card-avatar": {
      height: generateCSSUnit(imageheight, "px"),
    },

    " .responsive-block-editor-addons-card-avatar-img": {
      "background-position": cardImagePosition,
      "background-repeat": cardImageRepeat,
      "background-size": cardImageSize,
    },

    " .responsive-block-editor-addons-card-avatar-img.responsive-block-editor-addons-card-avatar-img-0": {
        "background-image": `url(${backgroundImageOne})`,
        "display": backgroundImageOne? 'block' : 'none',
    },

    " .responsive-block-editor-addons-card-avatar-img.responsive-block-editor-addons-card-avatar-img-dashicon-0": {
        "display": backgroundImageOne? 'none' : 'flex',
    },

    " .responsive-block-editor-addons-card-avatar-img.responsive-block-editor-addons-card-avatar-img-1": {
        "background-image": `url(${backgroundImageTwo})`,
        "display": backgroundImageTwo? 'block' : 'none',
    },

    " .responsive-block-editor-addons-card-avatar-img.responsive-block-editor-addons-card-avatar-img-dashicon-1": {
      "display": backgroundImageTwo? 'none' : 'flex',
    },

    " .responsive-block-editor-addons-card-avatar-img.responsive-block-editor-addons-card-avatar-img-2": {
        "background-image": `url(${backgroundImageThree})`,
        "display": backgroundImageThree? 'block' : 'none',
    },

    " .responsive-block-editor-addons-card-avatar-img.responsive-block-editor-addons-card-avatar-img-dashicon-2": {
      "display": backgroundImageThree? 'none' : 'flex',
    },

    " .responsive-block-editor-addons-card-avatar-img.responsive-block-editor-addons-card-avatar-img-3": {
         "background-image": `url(${backgroundImageFour})`,
         "display": backgroundImageFour? 'block' : 'none',
    },

    " .responsive-block-editor-addons-card-avatar-img.responsive-block-editor-addons-card-avatar-img-dashicon-3": {
      "display": backgroundImageFour? 'none' : 'flex',
    },

    " .card-content-wrap": {
      "text-align": contentAlignment,
    },

    " .wp-block-responsive-block-editor-addons-card-item__title": {
      "margin-top": 0,
      "margin-bottom": generateCSSUnit(headingBottomSpacing, "px"),
      color: headingTypographyColor,
      "line-height": headingLineHeight,
      "font-family": headingFontFamily,
      "font-weight": headingFontWeight,
      "font-size": generateCSSUnit(headingFontSize, "px"),
    },

    " .wp-block-responsive-block-editor-addons-card-item__subtitle": {
      "margin-top": 0,
      "margin-bottom": generateCSSUnit(subBottomSpacing, "px"),
      color: headingTypographyColor,
      "line-height": subLineHeight,
      "font-weight": subFontWeight,
      "font-family": subFontFamily,
      "font-size": generateCSSUnit(subFontSize, "px"),
    },

    " .wp-block-responsive-block-editor-addons-card-item__content": {
      "margin-top": 0,
        "margin-bottom": generateCSSUnit(contentBottomSpacing, "px"),
        color: headingTypographyColor,
      "line-height": contentLineHeight,
      "font-weight": contentFontWeight,
      "font-size": generateCSSUnit(contentFontSize, "px"),
      "font-family": contentFontFamily,
    },

    " .responsive-block-editor-addons-card-button-inner": {
      "padding-top": generateCSSUnit(ctaButtonTopPadding, "px"),
      "padding-bottom": generateCSSUnit(ctaButtonBottomPadding, "px"),
      "padding-left": generateCSSUnit(ctaButtonLeftPadding, "px"),
      "padding-right": generateCSSUnit(ctaButtonRightPadding, "px"),
      "margin-top": generateCSSUnit(ctaButtonTopMargin, "px"),
      "margin-bottom": generateCSSUnit(ctaButtonBottomMargin, "px"),
      "margin-left": generateCSSUnit(ctaButtonLeftMargin, "px"),
      "margin-right": generateCSSUnit(ctaButtonRightMargin, "px"),
      "border-style": butborderStyle !== "empty" && ctaBorderStyle === "none" ? butborderStyle : ctaBorderStyle ? ctaBorderStyle : "none", //For compatibility with v1.3.2.
      "border-color": ctaBorderColor,
      "border-radius": butborderRadius !== 999 && ctaBorderRadius === 2 ? bgenerateCSSUnit(butborderRadius, "px") : ctaBorderRadius //For compatibility with v1.3.2.
        ? generateCSSUnit(ctaBorderRadius, "px")
        : "",
      "border-width": butborderWidth !== 999 && ctaBorderWidth === 1 ? generateCSSUnit(butborderWidth, "px") : ctaBorderWidth //For compatibility with v1.3.2.
        ? generateCSSUnit(ctaBorderWidth, "px")
        : "0px",
      "background-image": updatedButtonBackgroundImage,
    },
  };

  var mobile_selectors = {
    "": {
      "opacity": hideWidgetMobile ? 0.2 : 1,
      'margin-top': generateCSSUnit(blockTopMarginMobile, "px"),
      'margin-right': generateCSSUnit(blockRightMarginMobile, "px"),
      'margin-bottom': generateCSSUnit(blockBottomMarginMobile, "px"),
      'margin-left': generateCSSUnit(blockLeftMarginMobile, "px"),
      'padding-top': generateCSSUnit(blockTopPaddingMobile, "px"),
      'padding-right': generateCSSUnit(blockRightPaddingMobile, "px"),
      'padding-bottom': generateCSSUnit(blockBottomPaddingMobile, "px"),
      'padding-left': generateCSSUnit(blockLeftPaddingMobile, "px"),
    },

    " .wp-block-responsive-block-editor-addons-card-item__title": {
      "margin-bottom": generateCSSUnit(headingBottomSpacingMobile, "px"),
	  "font-size": generateCSSUnit(headingFontSizeMobile, "px"),
    },

    " .wp-block-responsive-block-editor-addons-card-item__subtitle": {
      "margin-bottom": generateCSSUnit(subBottomSpacingMobile, "px"),
	  "font-size": generateCSSUnit(subFontSizeMobile, "px"),
    },
	" .wp-block-responsive-block-editor-addons-card-item__content": {
		"font-size": generateCSSUnit(contentFontSizeMobile, "px"),
        "margin-bottom": generateCSSUnit(contentBottomSpacingMobile, "px"),
    },
  " .responsive-block-editor-addons-card-button-inner": {
    "padding-top": generateCSSUnit(ctaButtonTopPaddingMobile, "px"),
    "padding-bottom": generateCSSUnit(ctaButtonBottomPaddingMobile, "px"),
    "padding-left": generateCSSUnit(ctaButtonLeftPaddingMobile, "px"),
    "padding-right": generateCSSUnit(ctaButtonRightPaddingMobile, "px"),
    "margin-top": generateCSSUnit(ctaButtonTopMarginMobile, "px"),
    "margin-bottom": generateCSSUnit(ctaButtonBottomMarginMobile, "px"),
    "margin-left": generateCSSUnit(ctaButtonLeftMarginMobile, "px"),
    "margin-right": generateCSSUnit(ctaButtonRightMarginMobile, "px"),
  },
  " .wp-block-responsive-block-editor-addons-card-item": {
      "border-top-left-radius": generateCSSUnit(blockTopRadiusMobile, "px"),
      "border-top-right-radius": generateCSSUnit(blockRightRadiusMobile, "px"),
      "border-bottom-right-radius": generateCSSUnit(blockBottomRadiusMobile, "px"),
      "border-bottom-left-radius": generateCSSUnit(blockLeftRadiusMobile, "px"),
  },
  " .responsive-block-editor-addons-card-background-image": {
    "background-position": backgroundPositionMobile,
    "background-size": backgroundSizeMobile === '' ? backgroundSize : backgroundSizeMobile,
  },
  " .responsive-block-editor-addons-card-avatar-img": {
    "background-position": cardImagePositionMobile,
    "background-size": cardImageSizeMobile,
  },
  };

  var tablet_selectors = {
    "": {
      "opacity": hideWidgetTablet ? 0.2 : 1,
      'margin-top': generateCSSUnit(blockTopMarginTablet, "px"),
      'margin-right': generateCSSUnit(blockRightMarginTablet, "px"),
      'margin-bottom': generateCSSUnit(blockBottomMarginTablet, "px"),
      'margin-left': generateCSSUnit(blockLeftMarginTablet, "px"),
      'padding-top': generateCSSUnit(blockTopPaddingTablet, "px"),
      'padding-right': generateCSSUnit(blockRightPaddingTablet, "px"),
      'padding-bottom': generateCSSUnit(blockBottomPaddingTablet, "px"),
      'padding-left': generateCSSUnit(blockLeftPaddingTablet, "px"),
    },

    " .wp-block-responsive-block-editor-addons-card-item__title": {
      "margin-bottom": generateCSSUnit(headingBottomSpacingTablet, "px"),
	  "font-size": generateCSSUnit(headingFontSizeTablet, "px"),
    },

    " .wp-block-responsive-block-editor-addons-card-item__subtitle": {
      "margin-bottom": generateCSSUnit(subBottomSpacingTablet, "px"),
	  "font-size": generateCSSUnit(subFontSizeTablet, "px"),
    },
	" .wp-block-responsive-block-editor-addons-card-item__content": {
		"font-size": generateCSSUnit(contentFontSizeTablet, "px"),
        "margin-bottom": generateCSSUnit(contentBottomSpacingTablet, "px"),
    },
  " .responsive-block-editor-addons-card-button-inner": {
    "padding-top": generateCSSUnit(ctaButtonTopPaddingTablet, "px"),
    "padding-bottom": generateCSSUnit(ctaButtonBottomPaddingTablet, "px"),
    "padding-left": generateCSSUnit(ctaButtonLeftPaddingTablet, "px"),
    "padding-right": generateCSSUnit(ctaButtonRightPaddingTablet, "px"),
    "margin-top": generateCSSUnit(ctaButtonTopMarginTablet, "px"),
    "margin-bottom": generateCSSUnit(ctaButtonBottomMarginTablet, "px"),
    "margin-left": generateCSSUnit(ctaButtonLeftMarginTablet, "px"),
    "margin-right": generateCSSUnit(ctaButtonRightMarginTablet, "px"),
  },
  " .wp-block-responsive-block-editor-addons-card-item": {
      "border-top-left-radius": generateCSSUnit(blockTopRadiusTablet, "px"),
      "border-top-right-radius": generateCSSUnit(blockRightRadiusTablet, "px"),
      "border-bottom-right-radius": generateCSSUnit(blockBottomRadiusTablet, "px"),
      "border-bottom-left-radius": generateCSSUnit(blockLeftRadiusTablet, "px"),
  },
  " .responsive-block-editor-addons-card-background-image": {
    "background-position": backgroundPositionTablet,
    "background-size": backgroundSizeTablet === '' ? backgroundSize : backgroundSizeTablet,
  },
  " .responsive-block-editor-addons-card-avatar-img": {
    "background-position": cardImagePositionTablet,
    "background-size": cardImageSizeTablet,
  },
  };

  var styling_css = "";
  var id = `.responsive-block-editor-addons-block-card.block-${block_id}`;

  styling_css = generateCSS(selectors, id);
  styling_css += generateCSS(tablet_selectors, id, true, "tablet");
  styling_css += generateCSS(mobile_selectors, id, true, "mobile");

  return styling_css;
}

export default EditorStyles;
