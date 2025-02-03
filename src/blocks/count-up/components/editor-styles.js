/**
 * Returns Dynamic Generated CSS
 */

import generateCSS from "../../../generateCSS";
import generateCSSUnit from "../../../generateCSSUnit";
import { hexToRgba } from "../../../utils/index.js";

function EditorStyles(props) {
  const {
    block_id,
    countUp,
    count,
    textColor,
    itemBackgroundColor,
    dateLineHeight,
    dateFontWeight,
    dateFontSize,
    dateFontSizeMobile,
    dateFontSizeTablet,
    dateFontFamily,
    headingLineHeight,
    headingFontFamily,
    headingFontSize,
	  headingFontWeight,
    titleFontWeight, //For compatibility with v1.3.2
    headingFontSizeMobile,
    headingFontSizeTablet,
    contentFontFamily,
    contentLineHeight,
    contentFontWeight,
    contentFontSize,
    contentFontSizeMobile,
    contentFontSizeTablet,
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
    blockBorderColor,
    icon_color,
    opacity,
    iconsize,
    numColor,
    titleColor,
    titleSpace,
    numSpace,
    contentSpace,
    iconShapeColor,
    shapeBorderRadius,
    shapeBorderTopRadius,
    shapeBorderRightRadius,
    shapeBorderBottomRadius,
    shapeBorderLeftRadius,
    shapeBorderTopRadiusTablet,
    shapeBorderRightRadiusTablet,
    shapeBorderBottomRadiusTablet,
    shapeBorderLeftRadiusTablet,
    shapeBorderTopRadiusMobile,
    shapeBorderRightRadiusMobile,
    shapeBorderBottomRadiusMobile,
    shapeBorderLeftRadiusMobile,
    shapePadding,
    shapeBorder,
    contentSpacing,
    iconSpacing,
	contentSpacingTablet,
	contentSpacingMobile,
	iconSpacingTablet,
	iconSpacingMobile,
	titleSpaceTablet,
	titleSpaceMobile,
	numSpaceTablet,
	numSpaceMobile,
	contentSpaceTablet,
	contentSpaceMobile,
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
    contentTypographyColor,
    headingTypographyColor,
    dateTypographyColor,
    contentAlign,
    contentAlignMobile,
    contentAlignTablet,
  } = props.attributes;

  let imgopacity = opacity / 100;

  var selectors = {
    "": {
      "opacity": hideWidget ? 0.2 : 1,
      "padding-top": generateCSSUnit(blockTopPadding, "px"),
      "padding-right": generateCSSUnit(blockRightPadding, "px"),
      "padding-bottom": generateCSSUnit(blockBottomPadding, "px"),
      "padding-left": generateCSSUnit(blockLeftPadding, "px"),
      "margin-top": generateCSSUnit(blockTopMargin, "px"),
      "margin-right": generateCSSUnit(blockRightMargin, "px"),
      "margin-bottom": generateCSSUnit(blockBottomMargin, "px"),
      "margin-left": generateCSSUnit(blockLeftMargin, "px"),
      "text-align": contentAlign,
    },
    ".responsive-count__inner .responsive-count-item__features li": {
      "line-height": contentLineHeight,
    },
    ".responsive-count__inner .responsive-block-editor-addons-count-up__source-wrap.res-countup-icon-design-shaped .responsive-block-editor-addons-count-up__source-icon": {
      "background-color": iconShapeColor,
      "border-top-left-radius": generateCSSUnit(shapeBorderTopRadius, "px"),
      "border-top-right-radius": generateCSSUnit(shapeBorderRightRadius, "px"),
      "border-bottom-right-radius": generateCSSUnit(shapeBorderBottomRadius, "px"),
      "border-bottom-left-radius": generateCSSUnit(shapeBorderLeftRadius, "px"),
      padding: generateCSSUnit(shapePadding, "px"),
    },
    ".responsive-count__inner .responsive-block-editor-addons-count-up__source-wrap.res-countup-icon-design-outline .responsive-block-editor-addons-count-up__source-icon": {
      "border-color": iconShapeColor,
      "border-top-left-radius": generateCSSUnit(shapeBorderTopRadius, "px"),
      "border-top-right-radius": generateCSSUnit(shapeBorderRightRadius, "px"),
      "border-bottom-right-radius": generateCSSUnit(shapeBorderBottomRadius, "px"),
      "border-bottom-left-radius": generateCSSUnit(shapeBorderLeftRadius, "px"),
      padding: generateCSSUnit(shapePadding, "px"),
      "border-width": generateCSSUnit(shapeBorder, "px"),
    },
    ".responsive-count__inner .responsive-block-editor-addons-count-up__source-icon svg": {
      width: generateCSSUnit(iconsize, "px"),
      height: generateCSSUnit(iconsize, "px"),
      fill: icon_color,
    },
    " .responsive-count-item": {
      "background-color": `${hexToRgba(
        itemBackgroundColor || "#ffffff",
        imgopacity || 0
      )}`,
      "border-width": generateCSSUnit(blockBorderWidth, "px"),
      "border-color": blockBorderColor,
      "border-style": blockBorderStyle,
      "border-top-left-radius": generateCSSUnit(blockTopRadius, "px"),
      "border-top-right-radius": generateCSSUnit(blockRightRadius, "px"),
      "border-bottom-right-radius": generateCSSUnit(blockBottomRadius, "px"),
      "border-bottom-left-radius": generateCSSUnit(blockLeftRadius, "px"),
    },
    " .responsive-block-editor-addons-count-up__source-wrap": {
      "margin-bottom": generateCSSUnit(iconSpacing, "px"),
    },
    " .responsive-count-item__title": {
      color: headingTypographyColor,
      "line-height": headingLineHeight,
      "font-size": generateCSSUnit(headingFontSize, "px"),
	    "font-weight": titleFontWeight !== "empty" && headingFontWeight === "900" ? titleFontWeight : headingFontWeight, //For compatibility with v1.3.2
      "font-family": headingFontFamily,
      "margin-bottom": generateCSSUnit(titleSpace, "px"),
    },
    ".responsive-count__inner .responsive-count-item__price-wrapper .responsive-count-item__amount": {
      color: dateTypographyColor,
      "line-height": dateLineHeight,
      "font-weight": dateFontWeight,
      "font-size": generateCSSUnit(dateFontSize, "px"),
      "font-family": dateFontFamily,
      "margin-bottom": generateCSSUnit(numSpace, "px"),
    },
    " .responsive-count-item__features": {
      color: contentTypographyColor,
      "line-height": contentLineHeight,
      "font-weight": contentFontWeight,
      "font-size": `${contentFontSize}px`,
      "font-family": contentFontFamily,
      "margin-bottom": `${contentSpace}px`,
    },
  };

  var mobile_selectors = {
    "": {
      "opacity": hideWidgetMobile ? 0.2 : 1,
      "padding-top": generateCSSUnit(blockTopPaddingMobile, "px"),
      "padding-right": generateCSSUnit(blockRightPaddingMobile, "px"),
      "padding-bottom": generateCSSUnit(blockBottomPaddingMobile, "px"),
      "padding-left": generateCSSUnit(blockLeftPaddingMobile, "px"),
      "margin-top": generateCSSUnit(blockTopMarginMobile, "px"),
      "margin-right": generateCSSUnit(blockRightMarginMobile, "px"),
      "margin-bottom": generateCSSUnit(blockBottomMarginMobile, "px"),
      "margin-left": generateCSSUnit(blockLeftMarginMobile, "px"),
      "text-align": contentAlignMobile,
    },
    ".responsive-count__inner .responsive-count-item__title": {
      "font-size": `${headingFontSizeMobile}px`,
    },
    ".responsive-count__inner .responsive-count-item__price-wrapper .responsive-count-item__amount": {
      "font-size": `${generateCSSUnit(dateFontSizeMobile, "px")} !important`,
	  "margin-bottom": generateCSSUnit(numSpaceMobile, "px"),
    },
    " .responsive-count-item__features": {
      "font-size": `${generateCSSUnit(contentFontSizeMobile, "px")} !important`,
	  "margin-bottom": `${contentSpaceMobile}px`,
    },
	" .responsive-block-editor-addons-count-up__source-wrap": {
		"margin-bottom": generateCSSUnit(iconSpacingMobile, "px"),
	},
	" .responsive-count-item__title": {
		"margin-bottom": generateCSSUnit(titleSpaceMobile, "px"),
	},
  ".responsive-count__inner .responsive-block-editor-addons-count-up__source-wrap.res-countup-icon-design-shaped .responsive-block-editor-addons-count-up__source-icon , .responsive-count__inner .responsive-block-editor-addons-count-up__source-wrap.res-countup-icon-design-outline .responsive-block-editor-addons-count-up__source-icon": {
      "border-top-left-radius": generateCSSUnit(shapeBorderTopRadiusMobile, "px"),
      "border-top-right-radius": generateCSSUnit(shapeBorderRightRadiusMobile, "px"),
      "border-bottom-right-radius": generateCSSUnit(shapeBorderBottomRadiusMobile, "px"),
      "border-bottom-left-radius": generateCSSUnit(shapeBorderLeftRadiusMobile, "px"),
    },
  " .responsive-count-item": {
      "border-top-left-radius": generateCSSUnit(blockTopRadiusMobile, "px"),
      "border-top-right-radius": generateCSSUnit(blockRightRadiusMobile, "px"),
      "border-bottom-right-radius": generateCSSUnit(blockBottomRadiusMobile, "px"),
      "border-bottom-left-radius": generateCSSUnit(blockLeftRadiusMobile, "px"),
    },
  };

  var tablet_selectors = {
    "": {
      "opacity": hideWidgetTablet ? 0.2 : 1,
      "padding-top": generateCSSUnit(blockTopPaddingTablet, "px"),
      "padding-right": generateCSSUnit(blockRightPaddingTablet, "px"),
      "padding-bottom": generateCSSUnit(blockBottomPaddingTablet, "px"),
      "padding-left": generateCSSUnit(blockLeftPaddingTablet, "px"),
      "margin-top": generateCSSUnit(blockTopMarginTablet, "px"),
      "margin-right": generateCSSUnit(blockRightMarginTablet, "px"),
      "margin-bottom": generateCSSUnit(blockBottomMarginTablet, "px"),
      "margin-left": generateCSSUnit(blockLeftMarginTablet, "px"),
      "text-align": contentAlignTablet,
    },
    ".responsive-count__inner .responsive-count-item__title": {
      "font-size": `${headingFontSizeTablet}px`,
    },
    ".responsive-count__inner .responsive-count-item__price-wrapper .responsive-count-item__amount": {
      "font-size": generateCSSUnit(dateFontSizeTablet, "px"),
	  "margin-bottom": generateCSSUnit(numSpaceTablet, "px"),
    },
    " .responsive-count-item__features": {
      "font-size": generateCSSUnit(contentFontSizeTablet, "px"),
	  "margin-bottom": `${contentSpaceTablet}px`,
    },
	" .responsive-block-editor-addons-count-up__source-wrap": {
		"margin-bottom": generateCSSUnit(iconSpacingTablet, "px"),
	},
	" .responsive-count-item__title": {
		"margin-bottom": generateCSSUnit(titleSpaceTablet, "px"),
	},
  ".responsive-count__inner .responsive-block-editor-addons-count-up__source-wrap.res-countup-icon-design-shaped .responsive-block-editor-addons-count-up__source-icon , .responsive-count__inner .responsive-block-editor-addons-count-up__source-wrap.res-countup-icon-design-outline .responsive-block-editor-addons-count-up__source-icon": {
      "border-top-left-radius": generateCSSUnit(shapeBorderTopRadiusTablet, "px"),
      "border-top-right-radius": generateCSSUnit(shapeBorderRightRadiusTablet, "px"),
      "border-bottom-right-radius": generateCSSUnit(shapeBorderBottomRadiusTablet, "px"),
      "border-bottom-left-radius": generateCSSUnit(shapeBorderLeftRadiusTablet, "px"),
    },
    " .responsive-count-item": {
      "border-top-left-radius": generateCSSUnit(blockTopRadiusTablet, "px"),
      "border-top-right-radius": generateCSSUnit(blockRightRadiusTablet, "px"),
      "border-bottom-right-radius": generateCSSUnit(blockBottomRadiusTablet, "px"),
      "border-bottom-left-radius": generateCSSUnit(blockLeftRadiusTablet, "px"),
    },
  };

  var paddingContent = {
    ".responsive-count": {
      "padding": `${contentSpacing}px !important`,
    },
  };

  var paddingContentMobile = {
	".responsive-count": {
		"padding": `${contentSpacingMobile}px !important`,
	},
  };

  var paddingContentTablet = {
	".responsive-count": {
		"padding": `${contentSpacingTablet}px !important`,
	},
  };
  var styling_css = "";
  var id = `.responsive-block-editor-addons-block-count-up.block-${props.clientId}`;

  styling_css = generateCSS(selectors, id);
  styling_css += generateCSS(tablet_selectors, id, true, "tablet");
  styling_css += generateCSS(mobile_selectors, id, true, "mobile");
  styling_css += generateCSS(paddingContent, "");
  styling_css += generateCSS(paddingContentTablet, "", true, "tablet");
  styling_css += generateCSS(paddingContentMobile, "", true, "mobile");

  return styling_css;
}

export default EditorStyles;
