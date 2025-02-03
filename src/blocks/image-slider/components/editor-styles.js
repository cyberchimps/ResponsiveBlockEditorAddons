/**
 * Returns Dynamic Generated CSS
 */

import generateCSS from "../../../generateCSS";
import generateCSSUnit from "../../../generateCSSUnit";
import { hexToRgba } from "../../../utils/index.js";

function EditorStyles(props) {
  const {
    block_id,
    gutter,
    gutterMobile,
    gutterTablet,
    responsiveHeight,
    blockBorderWidth,
    blockBorderColor,
    blockBorderStyle,
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
    iconColor,
    iconBackgroundRadius,
    iconBackgroundColor,
    iconBackgroundOpacity,
    width,
	borderWidth, // For compatibility with v1.3.2.
	borderStyle, // For compatibility with v1.3.2.
	borderColor, // For compatibility with v1.3.2.
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
  } = props.attributes;

  let imgopacity = iconBackgroundOpacity / 100;

  var selectors = {
    " ": {
      "opacity": hideWidget ? 0.2 : 1,
      'padding-top': generateCSSUnit(blockTopPadding, "px"),
      'padding-right': generateCSSUnit(blockRightPadding, "px"),
      'padding-bottom': generateCSSUnit(blockBottomPadding, "px"),
      'padding-left': generateCSSUnit(blockLeftPadding, "px"),
      'margin-top': generateCSSUnit(blockTopMargin, "px"),
      'margin-right': generateCSSUnit(blockRightMargin, "px"),
      'margin-bottom': generateCSSUnit(blockBottomMargin, "px"),
      'margin-left': generateCSSUnit(blockLeftMargin, "px"),
    },
    " .flickity-button .flickity-button-icon": {
      fill: iconColor,
    },

    " .flickity-button": {
      "background-color": hexToRgba(
        iconBackgroundColor || "#ffffff",
        imgopacity || 0
      ),
      "border-radius": iconBackgroundRadius + "%",
    },

    " .has-carousel-lrg .responsive-block-editor-addons-gallery--item": {
      width: generateCSSUnit(width, "px"),
    },

    " .responsive-block-editor-addons-gallery--item": {
      "margin-left":
        gutter > 0 && !responsiveHeight ? gutter + "px" : undefined,
      "margin-right":
        gutter > 0 && !responsiveHeight ? gutter + "px" : undefined,
      "border-width": borderWidth !== 999 && blockBorderWidth === "" ? generateCSSUnit(borderWidth, "px") : generateCSSUnit(blockBorderWidth, "px"), // For compatibility with v1.3.2.
      "border-top-left-radius": generateCSSUnit(blockTopRadius, "px"),
      "border-top-right-radius": generateCSSUnit(blockRightRadius, "px"),
      "border-bottom-right-radius": generateCSSUnit(blockBottomRadius, "px"),
      "border-bottom-left-radius": generateCSSUnit(blockLeftRadius, "px"),
      "border-style": borderStyle !== "empty" && blockBorderStyle === "" ? borderStyle : blockBorderStyle, // For compatibility with v1.3.2.
      "border-color": borderColor !== "empty" && blockBorderColor === "" ? borderColor : blockBorderColor, // For compatibility with v1.3.2.
    },
  };

  var mobile_selectors = {
    " ": {
      "opacity": hideWidgetMobile ? 0.2 : 1,
      'padding-top': generateCSSUnit(blockTopPaddingMobile, "px"),
      'padding-right': generateCSSUnit(blockRightPaddingMobile, "px"),
      'padding-bottom': generateCSSUnit(blockBottomPaddingMobile, "px"),
      'padding-left': generateCSSUnit(blockLeftPaddingMobile, "px"),
      'margin-top': generateCSSUnit(blockTopMarginMobile, "px"),
      'margin-right': generateCSSUnit(blockRightMarginMobile, "px"),
      'margin-bottom': generateCSSUnit(blockBottomMarginMobile, "px"),
      'margin-left': generateCSSUnit(blockLeftMarginMobile, "px"),
    },
    " .responsive-block-editor-addons-gallery--item": {
      "margin-left":
        gutterMobile > 0 && !responsiveHeight ? gutterMobile + "px" : undefined,
      "margin-right":
        gutterMobile > 0 && !responsiveHeight ? gutterMobile + "px" : undefined,
      "border-top-left-radius": generateCSSUnit(blockTopRadiusMobile, "px"),
      "border-top-right-radius": generateCSSUnit(blockRightRadiusMobile, "px"),
      "border-bottom-right-radius": generateCSSUnit(blockBottomRadiusMobile, "px"),
      "border-bottom-left-radius": generateCSSUnit(blockLeftRadiusMobile, "px"),
    },
  };

  var tablet_selectors = {
    " ": {
      "opacity": hideWidgetTablet ? 0.2 : 1,
      'padding-top': generateCSSUnit(blockTopPaddingTablet, "px"),
      'padding-right': generateCSSUnit(blockRightPaddingTablet, "px"),
      'padding-bottom': generateCSSUnit(blockBottomPaddingTablet, "px"),
      'padding-left': generateCSSUnit(blockLeftPaddingTablet, "px"),
      'margin-top': generateCSSUnit(blockTopMarginTablet, "px"),
      'margin-right': generateCSSUnit(blockRightMarginTablet, "px"),
      'margin-bottom': generateCSSUnit(blockBottomMarginTablet, "px"),
      'margin-left': generateCSSUnit(blockLeftMarginTablet, "px"),
    },
    " .responsive-block-editor-addons-gallery--item": {
      "margin-left":
        gutterTablet > 0 && !responsiveHeight ? gutterTablet + "px" : undefined,
      "margin-right":
        gutterTablet > 0 && !responsiveHeight ? gutterTablet + "px" : undefined,
      "border-top-left-radius": generateCSSUnit(blockTopRadiusTablet, "px"),
      "border-top-right-radius": generateCSSUnit(blockRightRadiusTablet, "px"),
      "border-bottom-right-radius": generateCSSUnit(blockBottomRadiusTablet, "px"),
      "border-bottom-left-radius": generateCSSUnit(blockLeftRadiusTablet, "px"),
    },
  };

  var styling_css = "";
  var id = `.responsive-block-editor-addons-block-image-slider.block-${block_id}`;

  styling_css = generateCSS(selectors, id);
  styling_css += generateCSS(tablet_selectors, id, true, "tablet");
  styling_css += generateCSS(mobile_selectors, id, true, "mobile");

  return styling_css;
}

export default EditorStyles;
