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
    quoteTextColor,
    quoteFontFamily,
    quoteFontSize,
    quoteFontWeight,
    quoteLineHeight,
    quoteAlign,
    quoteAlignMobile,
    quoteAlignTablet,
    quoteSize,
    quoteColor,
    quoteHposition,
    quoteVposition,
    quoteOpacity,
    blockLeftPadding,
    blockLeftPaddingMobile,
    blockLeftPaddingTablet,
    blockRightPadding,
    blockRightPaddingMobile,
    blockRightPaddingTablet,
    blockTopPadding,
    blockTopPaddingMobile,
    blockTopPaddingTablet,
    blockBottomPadding,
    blockBottomPaddingMobile,
    blockBottomPaddingTablet,
    blockLeftMargin,
    blockLeftMarginMobile,
    blockLeftMarginTablet,
    blockRightMargin,
    blockRightMarginMobile,
    blockRightMarginTablet,
    blockTopMargin,
    blockTopMarginMobile,
    blockTopMarginTablet,
    blockBottomMargin,
    blockBottomMarginMobile,
    blockBottomMarginTablet,
    backgroundColor,
    backgroundColor1,
    backgroundColor2,
    colorLocation1,
    colorLocation2,
    gradientDirection,
    backgroundType,
    opacity,
    boxShadowColor,
    boxShadowHOffset,
    boxShadowVOffset,
    boxShadowBlur,
    boxShadowSpread,
    boxShadowPosition,
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
    textTopPadding,
    textTopPaddingMobile,
    textTopPaddingTablet,
    textBottomPadding,
    textBottomPaddingMobile,
    textBottomPaddingTablet,
    textLeftPadding,
    textLeftPaddingMobile,
    textLeftPaddingTablet,
    textRightPadding,
    textRightPaddingMobile,
    textRightPaddingTablet,
    quoteFontSizeMobile,
    quoteFontSizeTablet,
    hideWidget,
    hideWidgetTablet,
    hideWidgetMobile,
    borderColor, // For compatibility with v1.3.2.
    borderStyle, // For compatibility with v1.3.2.
    borderWidth, // For compatibility with v1.3.2.
    topPadding, // For compatibility with v1.3.2.
    bottomPadding, // For compatibility with v1.3.2.
    leftPadding, // For compatibility with v1.3.2.
    rightPadding, // For compatibility with v1.3.2.
    quoteTypographyColor,
  } = props.attributes;

  let quoteopacity = quoteOpacity / 100;
  let imgopacity = opacity / 100;
  var boxShadowPositionCSS = boxShadowPosition;

  if ("outset" === boxShadowPosition) {
    boxShadowPositionCSS = "";
  }
  var selectors = {
    "": {
      'opacity': hideWidget ? 0.2 : 1,
      "background-color":
        backgroundType == "color"
          ? `${hexToRgba(backgroundColor || "#ffffff", imgopacity || 0)}`
          : undefined,
      color: quoteTypographyColor,
      "border-color": borderColor !== "empty" && blockBorderColor === "" ? borderColor : blockBorderColor, // For compatibility with v1.3.2.
      "border-style": borderStyle !== "empty" && blockBorderStyle === "none" ? borderStyle : blockBorderStyle, // For compatibility with v1.3.2.
      "border-width": borderWidth !== 999 && blockBorderWidth === 1 ? generateCSSUnit(borderWidth, "px") : generateCSSUnit(blockBorderWidth, "px"), // For compatibility with v1.3.2.
      "border-top-left-radius": generateCSSUnit(blockTopRadius, "px"),
      "border-top-right-radius": generateCSSUnit(blockRightRadius, "px"),
      "border-bottom-right-radius": generateCSSUnit(blockBottomRadius, "px"),
      "border-bottom-left-radius": generateCSSUnit(blockLeftRadius, "px"),
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
      "text-align": quoteAlign,
      "padding-left": leftPadding !== 999 && blockLeftPadding === 60 ? generateCSSUnit(leftPadding, "px") : generateCSSUnit(blockLeftPadding, "px"), // For compatibility with v1.3.2.
      "padding-right": rightPadding !== 999 && blockRightPadding === 60 ? generateCSSUnit(rightPadding, "px") : generateCSSUnit(blockRightPadding, "px"), // For compatibility with v1.3.2.
      "padding-top": topPadding !== 999 && blockTopPadding === 70 ? generateCSSUnit(topPadding, "px") : generateCSSUnit(blockTopPadding, "px"), // For compatibility with v1.3.2.
      "padding-bottom": bottomPadding !== 999 && blockBottomPadding === 70 ? generateCSSUnit(bottomPadding, "px") : generateCSSUnit(blockBottomPadding, "px"), // For compatibility with v1.3.2.
      "background-color":
        backgroundType == "color"
          ? `${hexToRgba(backgroundColor || "#ffffff", imgopacity || 0)}`
          : undefined,
      "background-image":
        backgroundType == "gradient"
          ? `linear-gradient(${gradientDirection}deg, ${hexToRgba(
            backgroundColor1 || "#fff",
            imgopacity || 0
          )} ${colorLocation1}%, ${hexToRgba(
            backgroundColor2 || "#fff",
            imgopacity || 0
          )} ${colorLocation2}%)`
          : undefined,
      "margin-top" : generateCSSUnit(blockTopMargin, "px"),
      "margin-right" : generateCSSUnit(blockRightMargin, "px"),
      "margin-bottom" : generateCSSUnit(blockBottomMargin, "px"),
      "margin-left" : generateCSSUnit(blockLeftMargin, "px"),
    },
    " .responsive-block-editor-addons-section__video-wrap": {
      opacity: imgopacity,
    },
    " .responsive-block-editor-addons-section-background-image-wrap .responsive-block-editor-addons-section-background-image": {
      height: 100 + "%",
      opacity: imgopacity,
      "border-top-left-radius": generateCSSUnit(blockTopRadius, "px"),
      "border-top-right-radius": generateCSSUnit(blockRightRadius, "px"),
      "border-bottom-right-radius": generateCSSUnit(blockBottomRadius, "px"),
      "border-bottom-left-radius": generateCSSUnit(blockLeftRadius, "px"),
    },
    " .responsive-block-editor-addons-block-blockquote-item .responsive-block-editor-addons-block-blockquote-quote": {
      height: generateCSSUnit(quoteSize, "px"),
      width: generateCSSUnit(quoteSize, "px"),
      fill: quoteColor,
      left: generateCSSUnit(quoteHposition, "px"),
      top: generateCSSUnit(quoteVposition, "px"),
      opacity: quoteopacity,
    },
    " .responsive-block-editor-addons-block-blockquote-text": {
      "text-align": quoteAlign,
      "font-family": quoteFontFamily,
      "font-size": generateCSSUnit(quoteFontSize, "px"),
      "font-weight": quoteFontWeight,
      "line-height": quoteLineHeight,
    },
    " .responsive-block-editor-addons-block-blockquote-item": {
      "padding-left": generateCSSUnit(textLeftPadding, "px"),
      "padding-right": generateCSSUnit(textRightPadding, "px"),
      "padding-top": generateCSSUnit(textTopPadding, "px"),
      "padding-bottom": generateCSSUnit(textBottomPadding, "px"),
    },
  };

  var mobile_selectors = {
    "": {
      'opacity': hideWidgetMobile ? 0.2 : 1,
      "text-align": quoteAlignMobile,
      "padding-left": generateCSSUnit(blockLeftPaddingMobile, "px"),
      "padding-right": generateCSSUnit(blockRightPaddingMobile, "px"),
      "padding-top": generateCSSUnit(blockTopPaddingMobile, "px"),
      "padding-bottom": generateCSSUnit(blockBottomPaddingMobile, "px"),
      "margin-top" : generateCSSUnit(blockTopMarginMobile, "px"),
      "margin-right" : generateCSSUnit(blockRightMarginMobile, "px"),
      "margin-bottom" : generateCSSUnit(blockBottomMarginMobile, "px"),
      "margin-left" : generateCSSUnit(blockLeftMarginMobile, "px"),
      "border-top-left-radius": generateCSSUnit(blockTopRadiusMobile, "px"),
      "border-top-right-radius": generateCSSUnit(blockRightRadiusMobile, "px"),
      "border-bottom-right-radius": generateCSSUnit(blockBottomRadiusMobile, "px"),
      "border-bottom-left-radius": generateCSSUnit(blockLeftRadiusMobile, "px"),
    },
    " .responsive-block-editor-addons-block-blockquote-item": {
      "padding-left": generateCSSUnit(textLeftPaddingMobile, "px"),
      "padding-right": generateCSSUnit(textRightPaddingMobile, "px"),
      "padding-top": generateCSSUnit(textTopPaddingMobile, "px"),
      "padding-bottom": generateCSSUnit(textBottomPaddingMobile, "px"),
    },
	" .responsive-block-editor-addons-block-blockquote-text": {
		"font-size": generateCSSUnit(quoteFontSizeMobile, "px"),
	},
  " .responsive-block-editor-addons-section-background-image-wrap .responsive-block-editor-addons-section-background-image": {
      "border-top-left-radius": generateCSSUnit(blockTopRadiusMobile, "px"),
      "border-top-right-radius": generateCSSUnit(blockRightRadiusMobile, "px"),
      "border-bottom-right-radius": generateCSSUnit(blockBottomRadiusMobile, "px"),
      "border-bottom-left-radius": generateCSSUnit(blockLeftRadiusMobile, "px"),
    },
  };

  var tablet_selectors = {
    "": {
      'opacity': hideWidgetTablet ? 0.2 : 1,
      "text-align": quoteAlignTablet,
      "padding-left": generateCSSUnit(blockLeftPaddingTablet, "px"),
      "padding-right": generateCSSUnit(blockRightPaddingTablet, "px"),
      "padding-top": generateCSSUnit(blockTopPaddingTablet, "px"),
      "padding-bottom": generateCSSUnit(blockBottomPaddingTablet, "px"),
      "margin-top" : generateCSSUnit(blockTopMarginTablet, "px"),
      "margin-right" : generateCSSUnit(blockRightMarginTablet, "px"),
      "margin-bottom" : generateCSSUnit(blockBottomMarginTablet, "px"),
      "margin-left" : generateCSSUnit(blockLeftMarginTablet, "px"),
      "border-top-left-radius": generateCSSUnit(blockTopRadiusTablet, "px"),
      "border-top-right-radius": generateCSSUnit(blockRightRadiusTablet, "px"),
      "border-bottom-right-radius": generateCSSUnit(blockBottomRadiusTablet, "px"),
      "border-bottom-left-radius": generateCSSUnit(blockLeftRadiusTablet, "px"),
    },
    " .responsive-block-editor-addons-block-blockquote-item": {
      "padding-left": generateCSSUnit(textLeftPaddingTablet, "px"),
      "padding-right": generateCSSUnit(textRightPaddingTablet, "px"),
      "padding-top": generateCSSUnit(textTopPaddingTablet, "px"),
      "padding-bottom": generateCSSUnit(textBottomPaddingTablet, "px"),
    },
	" .responsive-block-editor-addons-block-blockquote-text": {
		"font-size": generateCSSUnit(quoteFontSizeTablet, "px"),
	},
  " .responsive-block-editor-addons-section-background-image-wrap .responsive-block-editor-addons-section-background-image": {
      "border-top-left-radius": generateCSSUnit(blockTopRadiusTablet, "px"),
      "border-top-right-radius": generateCSSUnit(blockRightRadiusTablet, "px"),
      "border-bottom-right-radius": generateCSSUnit(blockBottomRadiusTablet, "px"),
      "border-bottom-left-radius": generateCSSUnit(blockLeftRadiusTablet, "px"),
    },
  };

  var styling_css = "";
  var id = `.responsive-block-editor-addons-block-blockquote.block-${props.clientId}`;

  styling_css = generateCSS(selectors, id);
  styling_css += generateCSS(tablet_selectors, id, true, "tablet");
  styling_css += generateCSS(mobile_selectors, id, true, "mobile");

  return styling_css;
}

export default EditorStyles;
