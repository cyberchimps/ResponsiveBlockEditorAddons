/**
 * Returns Dynamic Generated CSS
 */

import generateCSS from "../../../generateCSS";
import generateCSSUnit from "../../../generateCSSUnit";
import { hexToRgba } from "../../../utils/index.js";

function EditorStyles(props) {
  const {
    block_id,
    imageboxesBlock,
    count,
    gutter,
    contentAlign,
    itemBackgroundColor,
    itemHoverBackgroundColor,
    opacity,
    boxShadowColor,
    boxShadowHOffset,
    boxShadowVOffset,
    boxShadowBlur,
    boxShadowSpread,
    boxShadowPosition,
    boxPaddingRight,
    boxPaddingLeft,
    boxPaddingTop,
    boxPaddingBottom,
    boxHeight,
    backgroundPosition,
    backgroundRepeat,
    backgroundSize,
    secondaryBackgroundColor,
    hoverSecondaryBackgroundColor,
    bgGradient,
    hoverGradientDegree,
    hoverBgGradient,
    imageHoverEffect,
    hoverOpacity,
    titleFontFamily,
    titleFontSize,
    titleFontSizeMobile,
    titleFontSizeTablet,
    titleFontWeight,
    titleLineHeight,
    titleColor,
    descriptionFontFamily,
    descriptionFontSize,
    descriptionFontWeight,
    descriptionLineHeight,
    descriptionColor,
    imageSize,
    verticalAlignment,
    titleSpacing,
    titleSpacingMobile,
    titleSpacingTablet,
    descriptionSpacing,
    descriptionSpacingMobile,
    descriptionSpacingTablet,
    arrowColor,
    arrowSize,
    backgroundImageOne,
    backgroundImageTwo,
    backgroundImageThree,
    backgroundImageFour,
    gradientDegree,
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
    blockBorderStyle,
    blockBorderWidth,
    descriptionFontSizeMobile,
    descriptionFontSizeTablet,
    boxRadius,//For compatibility with v1.3.2
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
    boxImageSize,
    boxImageSizeTablet,
    boxImageSizeMobile,
    boxImagePosition,
    boxImagePositionMobile,
    boxImagePositionTablet,
    boxImageRepeat,
    titleTypographyColor,
    descriptionTypographyColor,
    descriptionBottomSpacing,
    descriptionBottomSpacingMobile,
    descriptionBottomSpacingTablet,
    titleBottomSpacing,
    titleBottomSpacingMobile,
    titleBottomSpacingTablet,
    contentAlignMobile,
    contentAlignTablet,
    verticalAlignmentMobile,
    verticalAlignmentTablet,
    boxRightPadding,
    boxLeftPadding,
    boxTopPadding,
    boxBottomPadding,
    boxRightPaddingTablet,
    boxLeftPaddingTablet,
    boxTopPaddingTablet,
    boxBottomPaddingTablet,
    boxRightPaddingMobile,
    boxLeftPaddingMobile,
    boxTopPaddingMobile,
    boxBottomPaddingMobile,
  } = props.attributes;

  let imgopacity = opacity / 100;
  let hoverImgopacity = hoverOpacity / 100;

  var tempsecondaryBackgroundColor = bgGradient
    ? secondaryBackgroundColor
    : itemBackgroundColor;
  var tempHoverSecondaryBackgroundColor = hoverBgGradient
    ? hoverSecondaryBackgroundColor
    : itemHoverBackgroundColor;

  var boxShadowPositionCSS = boxShadowPosition;

  if ("outset" === boxShadowPosition) {
    boxShadowPositionCSS = "";
  }

  var hoverGradient =
    "linear-gradient(" +
    hoverGradientDegree +
    "deg," +
    hexToRgba(itemHoverBackgroundColor || "#ffffff", hoverImgopacity || 0) +
    "," +
    hexToRgba(
      tempHoverSecondaryBackgroundColor || "#ffffff",
      hoverImgopacity || 0
    ) +
    ")";

    let backgroundImageFirst = `linear-gradient( 
    ${gradientDegree}deg,
    ${hexToRgba(
      itemBackgroundColor || "#ffffff",
      imgopacity || 0
    )},
    ${hexToRgba(
      tempsecondaryBackgroundColor || "#ffffff",
      imgopacity || 0
    )}),url(${backgroundImageOne})`

    let backgroundImageSecond = `linear-gradient( 
      ${gradientDegree}deg,
      ${hexToRgba(
        itemBackgroundColor || "#ffffff",
        imgopacity || 0
      )},
      ${hexToRgba(
        tempsecondaryBackgroundColor || "#ffffff",
        imgopacity || 0
      )}),url(${backgroundImageTwo})`

    let backgroundImageThird = `linear-gradient( 
      ${gradientDegree}deg,
      ${hexToRgba(
        itemBackgroundColor || "#ffffff",
        imgopacity || 0
      )},
      ${hexToRgba(
        tempsecondaryBackgroundColor || "#ffffff",
        imgopacity || 0
      )}),url(${backgroundImageThree})`

    let backgroundImageFourth = `linear-gradient( 
      ${gradientDegree}deg,
      ${hexToRgba(
        itemBackgroundColor || "#ffffff",
        imgopacity || 0
      )},
      ${hexToRgba(
        tempsecondaryBackgroundColor || "#ffffff",
        imgopacity || 0
      )}),url(${backgroundImageFour})`

    let gutterMargin = ""
    if( count > 1){
      if(gutter === "small"){
        gutterMargin = '20px'
      }else if (gutter === "medium"){
        gutterMargin = '30px'
      }else if (gutter === "large"){
        gutterMargin = '40px'
      }else if (gutter === "huge"){
        gutterMargin = '50px'
      }else {
        gutterMargin = '';
      }
    }

  var selectors = {
    " ": {
      "opacity": hideWidget ? 0.2 : 1,
      "background-color": itemBackgroundColor,
      "text-align": contentAlign,
      "border-style": blockBorderStyle,
      "border-color": blockBorderColor,
      "border-width": generateCSSUnit(blockBorderWidth, "px"),
      "border-top-left-radius": generateCSSUnit(blockTopRadius, "px"),
      "border-top-right-radius": generateCSSUnit(blockRightRadius, "px"),
      "border-bottom-right-radius": generateCSSUnit(blockBottomRadius, "px"),
      "border-bottom-left-radius": generateCSSUnit(blockLeftRadius, "px"),
      "justify-content": verticalAlignment + "!important",
      "background-color": `${hexToRgba(
        itemBackgroundColor || "#fff",
        imgopacity || 0
      )}`,
      "background-size": boxImageSize,
      "background-repeat": boxImageRepeat,
      "background-position": boxImagePosition,
      "padding-left": generateCSSUnit(boxLeftPadding, "px"),
      "padding-right": generateCSSUnit(boxRightPadding, "px"),
      "padding-bottom": generateCSSUnit(boxBottomPadding, "px"),
      "padding-top": generateCSSUnit(boxTopPadding, "px"),
      height: generateCSSUnit(boxHeight, "px"),
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

    ".responsive-block-editor-addons-block-image-boxes-0": {
      "background-image": backgroundImageFirst,
    },
    ".responsive-block-editor-addons-block-image-boxes-1": {
        "background-image": backgroundImageSecond,
    },
    ".responsive-block-editor-addons-block-image-boxes-2": {
        "background-image": backgroundImageThird,
    },
    ".responsive-block-editor-addons-block-image-boxes-3": {
        "background-image": backgroundImageFourth,
    },

    ":hover .responsive-block-editor-addons-add-image": {
      "background-image": hoverGradient,
      "border-top-left-radius": generateCSSUnit(blockTopRadius, "px"),
      "border-top-right-radius": generateCSSUnit(blockRightRadius, "px"),
      "border-bottom-right-radius": generateCSSUnit(blockBottomRadius, "px"),
      "border-bottom-left-radius": generateCSSUnit(blockLeftRadius, "px"),
    },

    ":hover": {
      "transform": `scale(${imageHoverEffect})`,
    },

    " .responsive-block-editor-addons-imagebox-image": {
      width: imageSize,
      "max-width": 100 + "%",
    },
    " .wp-block-responsive-block-editor-addons-image-boxes-block-item__title": {
      "font-family": titleFontFamily,
      "font-weight": titleFontWeight,
      "font-size": generateCSSUnit(titleFontSize, "px"),
      "line-height": titleLineHeight,
      color: titleTypographyColor,
      "margin-bottom": generateCSSUnit(titleBottomSpacing, "px"),
    },
    " .wp-block-responsive-block-editor-addons-image-boxes-block-item__description": {
      "font-family": descriptionFontFamily,
      "font-size": generateCSSUnit(descriptionFontSize, "px"),
      "font-weight": descriptionFontWeight,
      "line-height": descriptionLineHeight,
      color: descriptionTypographyColor,
      "margin-bottom": generateCSSUnit(descriptionBottomSpacing, "px"),
    },
    " .imagebox-arrow": {
      color: arrowColor,
      "font-size": generateCSSUnit(arrowSize, "px"),
    },
  };

  var mobile_selectors = {
    "": {
        "opacity": hideWidgetMobile ? 0.2 : 1,
        "border-top-left-radius": generateCSSUnit(blockTopRadiusMobile, "px"),
        "border-top-right-radius": generateCSSUnit(blockRightRadiusMobile, "px"),
        "border-bottom-right-radius": generateCSSUnit(blockBottomRadiusMobile, "px"),
        "border-bottom-left-radius": generateCSSUnit(blockLeftRadiusMobile, "px"),
        "background-size": boxImageSizeMobile,
        "background-position": boxImagePositionMobile,
        "text-align": contentAlignMobile,
        "justify-content": verticalAlignmentMobile + "!important",
        "padding-left": generateCSSUnit(boxLeftPaddingMobile, "px"),
        "padding-right": generateCSSUnit(boxRightPaddingMobile, "px"),
        "padding-bottom": generateCSSUnit(boxBottomPaddingMobile, "px"),
        "padding-top": generateCSSUnit(boxTopPaddingMobile, "px"),
    },
    ":hover .responsive-block-editor-addons-add-image": {
      "border-top-left-radius": generateCSSUnit(blockTopRadiusMobile, "px"),
      "border-top-right-radius": generateCSSUnit(blockRightRadiusMobile, "px"),
      "border-bottom-right-radius": generateCSSUnit(blockBottomRadiusMobile, "px"),
      "border-bottom-left-radius": generateCSSUnit(blockLeftRadiusMobile, "px"),
    },
    " .wp-block-responsive-block-editor-addons-image-boxes-block-item__title": {
      "font-size": generateCSSUnit(titleFontSizeMobile, "px"),
      "margin-bottom": generateCSSUnit(titleBottomSpacingMobile, "px"),
    },
	" .wp-block-responsive-block-editor-addons-image-boxes-block-item__description": {
		"font-size": generateCSSUnit(descriptionFontSizeMobile, "px"),
    "margin-bottom": generateCSSUnit(descriptionBottomSpacingMobile, "px"),
	},
  };

  var tablet_selectors = {
    "": {
        "opacity": hideWidgetTablet ? 0.2 : 1,
        "border-top-left-radius": generateCSSUnit(blockTopRadiusTablet, "px"),
        "border-top-right-radius": generateCSSUnit(blockRightRadiusTablet, "px"),
        "border-bottom-right-radius": generateCSSUnit(blockBottomRadiusTablet, "px"),
        "border-bottom-left-radius": generateCSSUnit(blockLeftRadiusTablet, "px"),
        "background-size": boxImageSizeTablet,
        "background-position": boxImagePositionTablet,
        "text-align": contentAlignTablet,
        "justify-content": verticalAlignmentTablet + "!important",
        "padding-left": generateCSSUnit(boxLeftPaddingTablet, "px"),
        "padding-right": generateCSSUnit(boxRightPaddingTablet, "px"),
        "padding-bottom": generateCSSUnit(boxBottomPaddingTablet, "px"),
        "padding-top": generateCSSUnit(boxTopPaddingTablet, "px"),
    },
    ":hover .responsive-block-editor-addons-add-image": {
      "border-top-left-radius": generateCSSUnit(blockTopRadiusTablet, "px"),
      "border-top-right-radius": generateCSSUnit(blockRightRadiusTablet, "px"),
      "border-bottom-right-radius": generateCSSUnit(blockBottomRadiusTablet, "px"),
      "border-bottom-left-radius": generateCSSUnit(blockLeftRadiusTablet, "px"),
    },
    " .wp-block-responsive-block-editor-addons-image-boxes-block-item__title": {
      "font-size": generateCSSUnit(titleFontSizeTablet, "px"),
      "margin-bottom": generateCSSUnit(titleBottomSpacingTablet, "px"),
    },
	" .wp-block-responsive-block-editor-addons-image-boxes-block-item__description": {
		"font-size": generateCSSUnit(descriptionFontSizeTablet, "px"),
    	"margin-bottom": generateCSSUnit(descriptionBottomSpacingTablet, "px"),
	},
  };

  var externalStyles = {
      ".wp-block-responsive-block-editor-addons-image-boxes-block-item-wrapper": {
        "margin-bottom": `${gutterMargin}!important`,
      },
    }
    
  var mainContainerDesktopStyles = {
    ".wp-block-responsive-block-editor-addons-image-boxes-block": {
      'padding-top': generateCSSUnit(blockTopPadding, "px"),
      'padding-right': generateCSSUnit(blockRightPadding, "px"),
      'padding-bottom': generateCSSUnit(blockBottomPadding, "px"),
      'padding-left': generateCSSUnit(blockLeftPadding, "px"),
      'margin-top': generateCSSUnit(blockTopMargin, "px"),
      'margin-right': generateCSSUnit(blockRightMargin, "px"),
      'margin-bottom': generateCSSUnit(blockBottomMargin, "px"),
      'margin-left': generateCSSUnit(blockLeftMargin, "px"),
    }
  }
  var mainContainerTabletStyles = {
    ".wp-block-responsive-block-editor-addons-image-boxes-block": {
      'padding-top': generateCSSUnit(blockTopPaddingTablet, "px"),
      'padding-right': generateCSSUnit(blockRightPaddingTablet, "px"),
      'padding-bottom': generateCSSUnit(blockBottomPaddingTablet, "px"),
      'padding-left': generateCSSUnit(blockLeftPaddingTablet, "px"),
      'margin-top': generateCSSUnit(blockTopMarginTablet, "px"),
      'margin-right': generateCSSUnit(blockRightMarginTablet, "px"),
      'margin-bottom': generateCSSUnit(blockBottomMarginTablet, "px"),
      'margin-left': generateCSSUnit(blockLeftMarginTablet, "px"),
    }
  }
  var mainContainerMobileStyles = {
    ".wp-block-responsive-block-editor-addons-image-boxes-block": {
      'padding-top': generateCSSUnit(blockTopPaddingMobile, "px"),
      'padding-right': generateCSSUnit(blockRightPaddingMobile, "px"),
      'padding-bottom': generateCSSUnit(blockBottomPaddingMobile, "px"),
      'padding-left': generateCSSUnit(blockLeftPaddingMobile, "px"),
      'margin-top': generateCSSUnit(blockTopMarginMobile, "px"),
      'margin-right': generateCSSUnit(blockRightMarginMobile, "px"),
      'margin-bottom': generateCSSUnit(blockBottomMarginMobile, "px"),
      'margin-left': generateCSSUnit(blockLeftMarginMobile, "px"),
    }
  }
  var styling_css = "";
  var id = `.responsive-block-editor-addons-block-image-boxes.block-${props.clientId}`;

  styling_css = generateCSS(selectors, id);
  styling_css += generateCSS(tablet_selectors, id, true, "tablet");
  styling_css += generateCSS(mobile_selectors, id, true, "mobile");
  styling_css += generateCSS(externalStyles, "", true, "mobile");
  styling_css += generateCSS(mainContainerDesktopStyles, '',);
  styling_css += generateCSS(mainContainerTabletStyles, "", true, "tablet");
  styling_css += generateCSS(mainContainerMobileStyles, "", true, "mobile");

  return styling_css;
}

export default EditorStyles;
