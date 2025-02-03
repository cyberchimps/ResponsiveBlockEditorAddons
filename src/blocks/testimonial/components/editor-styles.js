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
    testimonialBlock,
    count,
    gutter,
    testimonialAlignment,
    titleFontFamily,
    titleFontSize,
    titleLineHeight,
    titleFontWeight,
    titleTextTransform,
    nameFontFamily,
    nameFontSize,
    nameLineHeight,
    nameFontWeight,
    nameTextTransform,
    contentFontFamily,
    contentFontSize,
    contentLineHeight,
    contentFontWeight,
    contentTextTransform,
    imageSize,
    imageWidth,
    imageWidthTablet,
    imageWidthMobile,
    contentSpacing,
    contentSpacingMobile,
    contentSpacingTablet,
    titleSpacing,
    titleSpacingMobile,
    titleSpacingTablet,
    nameSpacing,
    nameSpacingMobile,
    nameSpacingTablet,
    imageSpacing,
    imageSpacingMobile,
    imageSpacingTablet,
    testimonialTextColor,
    testimonialTitleColor,
    testimonialNameColor,
    testimonialImgURL,
    testimonialBackgroundColor,
    testimonialFontSize,
    testimonialCiteAlign,
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
    blockBorderWidth,
    blockBorderStyle,
    padding,
    paddingTablet,
    paddingMobile,
    boxShadowColor,
    boxShadowHOffset,
    boxShadowVOffset,
    boxShadowBlur,
    boxShadowSpread,
    boxShadowPosition,
    hoverboxShadowColor,
    hoverboxShadowHOffset,
    hoverboxShadowVOffset,
    hoverboxShadowBlur,
    hoverboxShadowSpread,
    hoverboxShadowPosition,
    opacity,
    backgroundPosition,
    backgroundRepeat,
    backgroundSize,
    backgroundColor1,
    backgroundColor2,
    gradientDirection,
    bgGradient,
    backgroundImage,
    imageShape,
    colorLocation1,
    colorLocation2,
	contentFontSizeMobile,
	contentFontSizeTablet,
	nameFontSizeMobile,
	nameFontSizeTablet,
	titleFontSizeMobile,
	titleFontSizeTablet,
	borderStyle, //For compatibility with v1.3.2.
	borderWidth, //For compatibility with v1.3.2.
	borderRadius, //For compatibility with v1.3.2.
	borderColor, //For compatibility with v1.3.2.
	secondaryBackgroundColor, //For compatibility with v1.3.2.
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
  contentTopPadding,
  contentTopPaddingMobile,
  contentTopPaddingTablet,
  contentBottomPadding,
  contentBottomPaddingMobile,
  contentBottomPaddingTablet,
  contentLeftPadding,
  contentLeftPaddingMobile,
  contentLeftPaddingTablet,
  contentRightPadding,
  contentRightPaddingMobile,
  contentRightPaddingTablet,
  backgroundType,
  backgroundPositionMobile,
  backgroundPositionTablet,
  backgroundAttachment,
  overlayType,
  backgroundImageColor,
  gradientOverlayColor1,
  gradientOverlayLocation1,
  gradientOverlayColor2,
  gradientOverlayLocation2,
  gradientOverlayType,
  gradientOverlayAngle,
  gradientOverlayPosition,
  backgroundVideo,
  backgroundColor,
  contentBottomSpacing,
  contentBottomSpacingMobile,
  contentBottomSpacingTablet,
  nameBottomSpacing,
  nameBottomSpacingMobile,
  nameBottomSpacingTablet,
  titleBottomSpacing,
  titleBottomSpacingMobile,
  titleBottomSpacingTablet,
  imagePositionTab,
  imageSizeTab,
  backgroundSizeTablet,
  backgroundSizeMobile,
  contentTypographyColor,
  titleTypographyColor,
  nameTypographyColor,
  testimonialCiteAlignTablet,
  testimonialCiteAlignMobile,
  } = props.attributes;

  var boxShadowPositionCSS = boxShadowPosition;
  var hoverboxShadowPositionCSS = hoverboxShadowPosition;

  var bgimage = backgroundImage ? backgroundImage : "";
  var tempsecondaryBackgroundColor = bgGradient
    ? (secondaryBackgroundColor !== "empty" && backgroundColor2 === "" ? secondaryBackgroundColor : backgroundColor2)  // For compatibility with v1.3.2.
    : testimonialBackgroundColor;
  var bggradient =
    "linear-gradient(" +
    gradientDirection +
    "deg," +
    hexToRgba(testimonialBackgroundColor || "#ffffff", opacity || 0) +
    colorLocation1 +
    "% ," +
    hexToRgba(tempsecondaryBackgroundColor || "#ffffff", opacity || 0) +
    colorLocation2 +
    "% ),url(" +
    bgimage +
    ")";

  if ("outset" === boxShadowPosition) {
    boxShadowPositionCSS = "";
  }

  if ("outset" === hoverboxShadowPosition) {
    hoverboxShadowPositionCSS = "";
  }

  let imgopacity = opacity / 100;

  let updatedBackgroundImage = `url(${backgroundImage})`;
  let backgroundImageEffect = "";
  let colorType = "";
  if (overlayType === "color") {
    let colorType = `${hexToRgba(
      backgroundImageColor || "#fff",
      imgopacity || 0
    )}`;

    if(backgroundImage) {
      updatedBackgroundImage = `linear-gradient(${hexToRgba(
        backgroundImageColor || "#fff",
        imgopacity || 0
      )},${hexToRgba(
        backgroundImageColor || "#fff",
        imgopacity || 0
      )}),url(${backgroundImage})`;
    }
    backgroundImageEffect = "";
  }else {
    if (gradientOverlayType === "linear") {
      backgroundImageEffect = `linear-gradient(${gradientOverlayAngle}deg, ${hexToRgba(
        gradientOverlayColor1 || "#fff",
        imgopacity || 0
      )} ${gradientOverlayLocation1}%, ${hexToRgba(
        gradientOverlayColor2 || "#fff",
        imgopacity || 0
      )} ${gradientOverlayLocation2}%),url(${backgroundImage})`;
    }
    if (gradientOverlayType === "radial") {
      backgroundImageEffect = `radial-gradient( at ${gradientOverlayPosition}, ${hexToRgba(
        gradientOverlayColor1 || "#fff",
        imgopacity || 0
      )} ${gradientOverlayLocation1}%, ${hexToRgba(
        gradientOverlayColor2 || "#fff",
        imgopacity || 0
      )} ${gradientOverlayLocation2}%),url(${backgroundImage})`;
    }
  }

  var selectors = {
    " ":{
      "opacity": hideWidget? 0.2 : 1,
      'padding-top': generateCSSUnit(blockTopPadding, "px"),
			'padding-right': generateCSSUnit(blockRightPadding, "px"),
			'padding-bottom': generateCSSUnit(blockBottomPadding, "px"),
			'padding-left': generateCSSUnit(blockLeftPadding, "px"),
			'margin-top': generateCSSUnit(blockTopMargin, "px"),
			'margin-right': generateCSSUnit(blockRightMargin, "px"),
			'margin-bottom': generateCSSUnit(blockBottomMargin, "px"),
			'margin-left': generateCSSUnit(blockLeftMargin, "px"),
    },
    " .wp-block-responsive-block-editor-addons-testimonial:last-child": {
      "margin-bottom" : '0 !important',
    },
    " .responsive-block-editor-addons-testimonial-text": {
      "text-align": testimonialAlignment,
      "font-family": contentFontFamily,
      "font-size": generateCSSUnit(contentFontSize, "px"),
      "line-height": contentLineHeight,
      "font-weight": contentFontWeight,
      "text-transform": contentTextTransform,
      "margin-bottom": generateCSSUnit(contentBottomSpacing, "px"),
      color: contentTypographyColor,
    },
    " .responsive-block-editor-addons-testimonial-info": {
      "margin-bottom": generateCSSUnit(titleBottomSpacing, "px"),
      "text-align": testimonialCiteAlign,
    },
    " .responsive-block-editor-addons-testimonial-info .responsive-block-editor-addons-testimonial-inner-block .responsive-block-editor-addons-testimonial-avatar-wrap": {
      "padding-right": generateCSSUnit(imageSpacing, "px"),
    },
    " .responsive-block-editor-addons-testimonial-info .responsive-block-editor-addons-testimonial-inner-block .responsive-block-editor-addons-testimonial-avatar-wrap .responsive-block-editor-addons-testimonial-image-wrap": {
      height: generateCSSUnit(imageWidth, "px"),
      width: generateCSSUnit(imageWidth, "px"),
    },
    " .change-image .responsive-block-editor-addons-testimonial-avatar": {
      height: generateCSSUnit(imageWidth, "px"),
      width: generateCSSUnit(imageWidth, "px"),
    },
    " .responsive-block-editor-addons-testimonial-details .responsive-block-editor-addons-testimonial-name": {
      color: nameTypographyColor,
      "font-family": nameFontFamily,
      "font-size": generateCSSUnit(nameFontSize, "px"),
      "line-height": nameLineHeight,
      "font-weight": nameFontWeight,
      "text-transform": nameTextTransform,
      "margin-bottom": generateCSSUnit(nameBottomSpacing, "px"),
    },
    " .responsive-block-editor-addons-testimonial-details .responsive-block-editor-addons-testimonial-title": {
      color: titleTypographyColor,
      "font-family": titleFontFamily,
      "font-size": generateCSSUnit(titleFontSize, "px"),
      "line-height": titleLineHeight,
      "font-weight": titleFontWeight,
      "text-transform": titleTextTransform,
    },
    " .testimonial-box.responsive-block-editor-addons-block-testimonial": {
      "box-shadow": `${boxShadowHOffset}px ${boxShadowVOffset}px ${boxShadowBlur}px ${boxShadowSpread}px ${boxShadowColor} ${boxShadowPositionCSS}`,
      "padding-top": generateCSSUnit(contentTopPadding, "px"),
      "padding-right": generateCSSUnit(contentRightPadding, "px"),
      "padding-bottom": generateCSSUnit(contentBottomPadding, "px"),
      "padding-left": generateCSSUnit(contentLeftPadding, "px"),
    },
    " .responsive-block-editor-addons-block-testimonial:hover": {
      "box-shadow": `${hoverboxShadowHOffset}px ${hoverboxShadowVOffset}px ${hoverboxShadowBlur}px ${hoverboxShadowSpread}px ${hoverboxShadowColor} ${hoverboxShadowPositionCSS}`,
    },
    " .responsive-block-editor-addons-block-testimonial": {
      "background-color":
        backgroundType == "color"
          ? `${hexToRgba(backgroundColor || "#fff", imgopacity || 0)}`
          : undefined,
      "background-image": backgroundType === "image" && overlayType === "gradient"
        ? backgroundImageEffect
        : backgroundType === "gradient"
        ? generateBackgroundImageEffect(
            `${hexToRgba(backgroundColor1 || "#fff", imgopacity || 0)}`,
            `${hexToRgba(backgroundColor2 || "#fff", imgopacity || 0)}`,
            gradientDirection,
            colorLocation1,
            colorLocation2
          )
        : backgroundType === "image"
        ? updatedBackgroundImage
        : undefined,
      "background-position": backgroundPosition,
      "background-attachment": backgroundAttachment,
      "background-repeat": backgroundRepeat,
      "background-size": backgroundSize,
      "color": testimonialTextColor,
      "border-style": borderStyle !== "empty" && blockBorderStyle === "none" ? borderStyle : blockBorderStyle,//For compatibility with v1.3.2
      "border-width": borderWidth !== 999 && blockBorderWidth === 1 ? generateCSSUnit(borderWidth, "px") : generateCSSUnit(blockBorderWidth, "px"),//For compatibility with v1.3.2
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
      "border-color": borderColor === "empty" && blockBorderColor !== "" ? blockBorderColor : borderColor,//For compatibility with v1.3.2
    },
    " .background-type-video": {
      "background-color": `${hexToRgba(
        backgroundColor || "#fff",
        imgopacity || 0
      )}`,
    },
  };

  var mobile_selectors = {
    " ":{
      "opacity": hideWidgetMobile? 0.2 : 1,
      'padding-top': generateCSSUnit(blockTopPaddingMobile, "px"),
      'padding-right': generateCSSUnit(blockRightPaddingMobile, "px"),
      'padding-bottom': generateCSSUnit(blockBottomPaddingMobile, "px"),
      'padding-left': generateCSSUnit(blockLeftPaddingMobile, "px"),
      'margin-top': generateCSSUnit(blockTopMarginMobile, "px"),
      'margin-right': generateCSSUnit(blockRightMarginMobile, "px"),
      'margin-bottom': generateCSSUnit(blockBottomMarginMobile, "px"),
      'margin-left': generateCSSUnit(blockLeftMarginMobile, "px"),
    },
    " .testimonial-box.responsive-block-editor-addons-block-testimonial": {
      "padding-top": generateCSSUnit(contentTopPaddingMobile, "px"),
      "padding-right": generateCSSUnit(contentRightPaddingMobile, "px"),
      "padding-bottom": generateCSSUnit(contentBottomPaddingMobile, "px"),
      "padding-left": generateCSSUnit(contentLeftPaddingMobile, "px"),
    },
    " .wp-block-responsive-block-editor-addons-testimonial:last-child": {
      "margin-bottom" : '0 !important',
    },
	  " .responsive-block-editor-addons-testimonial-details .responsive-block-editor-addons-testimonial-name": {
	  	"font-size": generateCSSUnit(nameFontSizeMobile, "px"),
      "margin-bottom": generateCSSUnit(nameBottomSpacingMobile, "px"),
	  },
	  " .responsive-block-editor-addons-testimonial-details .responsive-block-editor-addons-testimonial-title": {
	  	"font-size": generateCSSUnit(titleFontSizeMobile, "px"),
	  },
	  " .responsive-block-editor-addons-testimonial-text": {
	  	"font-size": generateCSSUnit(contentFontSizeMobile, "px"),
      "margin-bottom": generateCSSUnit(contentBottomSpacingMobile, "px"),
	  },
    " .responsive-block-editor-addons-testimonial-info": {
      "margin-bottom": generateCSSUnit(titleBottomSpacingMobile, "px"),
      "text-align": testimonialCiteAlignMobile,
    },
    " .responsive-block-editor-addons-testimonial-info .responsive-block-editor-addons-testimonial-inner-block .responsive-block-editor-addons-testimonial-avatar-wrap": {
      "padding-right": generateCSSUnit(imageSpacingMobile, "px"),
    },
      " .responsive-block-editor-addons-testimonial-info .responsive-block-editor-addons-testimonial-inner-block .responsive-block-editor-addons-testimonial-avatar-wrap .responsive-block-editor-addons-testimonial-image-wrap": {
          height: generateCSSUnit(imageWidthMobile, "px"),
          width: generateCSSUnit(imageWidthMobile, "px"),
      },
      " .change-image .responsive-block-editor-addons-testimonial-avatar": {
          height: generateCSSUnit(imageWidthMobile, "px"),
          width: generateCSSUnit(imageWidthMobile, "px"),
      },
      " .responsive-block-editor-addons-block-testimonial": {
      // "background-image": bggradient,
      // "background-size": backgroundSize,
      "background-repeat": backgroundRepeat,
      "background-position": backgroundPositionMobile,
      "color": testimonialTextColor,
      "border-top-left-radius": generateCSSUnit(blockTopRadiusMobile, "px"),
      "border-top-right-radius": generateCSSUnit(blockRightRadiusMobile, "px"),
      "border-bottom-right-radius": generateCSSUnit(blockBottomRadiusMobile, "px"),
      "border-bottom-left-radius": generateCSSUnit(blockLeftRadiusMobile, "px"),
      "background-position": backgroundPositionMobile,
      "background-size": backgroundSizeMobile === '' ? backgroundSize : backgroundSizeMobile,
      "padding-top": generateCSSUnit(contentTopPaddingMobile, "px"),
      "padding-right": generateCSSUnit(contentRightPaddingMobile, "px"),
      "padding-bottom": generateCSSUnit(contentBottomPaddingMobile, "px"),
      "padding-left": generateCSSUnit(contentLeftPaddingMobile, "px"),
    },
  };

  var tablet_selectors = {
    " ":{
      "opacity": hideWidgetTablet? 0.2 : 1,
      'padding-top': generateCSSUnit(blockTopPaddingTablet, "px"),
      'padding-right': generateCSSUnit(blockRightPaddingTablet, "px"),
      'padding-bottom': generateCSSUnit(blockBottomPaddingTablet, "px"),
      'padding-left': generateCSSUnit(blockLeftPaddingTablet, "px"),
      'margin-top': generateCSSUnit(blockTopMarginTablet, "px"),
      'margin-right': generateCSSUnit(blockRightMarginTablet, "px"),
      'margin-bottom': generateCSSUnit(blockBottomMarginTablet, "px"),
      'margin-left': generateCSSUnit(blockLeftMarginTablet, "px"),
    },
    " .testimonial-box.responsive-block-editor-addons-block-testimonial": {
      "padding-top": generateCSSUnit(contentTopPaddingTablet, "px"),
      "padding-right": generateCSSUnit(contentRightPaddingTablet, "px"),
      "padding-bottom": generateCSSUnit(contentBottomPaddingTablet, "px"),
      "padding-left": generateCSSUnit(contentLeftPaddingTablet, "px"),
    },
    " .wp-block-responsive-block-editor-addons-testimonial:last-child": {
      "margin-bottom" : `${generateCSSUnit(20, "px")} !important`,
    },
	  " .responsive-block-editor-addons-testimonial-details .responsive-block-editor-addons-testimonial-name": {
	  	"font-size": generateCSSUnit(nameFontSizeTablet, "px"),
      "margin-bottom": generateCSSUnit(nameBottomSpacingTablet, "px"),
	  },
	  " .responsive-block-editor-addons-testimonial-details .responsive-block-editor-addons-testimonial-title": {
	  	"font-size": generateCSSUnit(titleFontSizeTablet, "px"),
	  },
	  " .responsive-block-editor-addons-testimonial-text": {
	  	"font-size": generateCSSUnit(contentFontSizeTablet, "px"),
      "margin-bottom": generateCSSUnit(contentBottomSpacingTablet, "px"),
	  },
    " .responsive-block-editor-addons-testimonial-info": {
      "margin-bottom": generateCSSUnit(titleBottomSpacingTablet, "px"),
      "text-align": testimonialCiteAlignTablet,
    },
    " .responsive-block-editor-addons-testimonial-info .responsive-block-editor-addons-testimonial-inner-block .responsive-block-editor-addons-testimonial-avatar-wrap": {
      "padding-right": generateCSSUnit(imageSpacingTablet, "px"),
    },
    " .responsive-block-editor-addons-testimonial-info .responsive-block-editor-addons-testimonial-inner-block .responsive-block-editor-addons-testimonial-avatar-wrap .responsive-block-editor-addons-testimonial-image-wrap": {
        height: generateCSSUnit(imageWidthTablet, "px"),
        width: generateCSSUnit(imageWidthTablet, "px"),
    },
    " .change-image .responsive-block-editor-addons-testimonial-avatar": {
        height: generateCSSUnit(imageWidthTablet, "px"),
        width: generateCSSUnit(imageWidthTablet, "px"),
    },
    " .responsive-block-editor-addons-block-testimonial": {
      "background-position": backgroundPositionTablet,
      "background-size": backgroundSizeTablet === '' ? backgroundSize : backgroundSizeTablet,
      "background-repeat": backgroundRepeat,
      "background-position": backgroundPositionTablet,
      "color": testimonialTextColor,
      "border-top-left-radius": generateCSSUnit(blockTopRadiusTablet, "px"),
      "border-top-right-radius": generateCSSUnit(blockRightRadiusTablet, "px"),
      "border-bottom-right-radius": generateCSSUnit(blockBottomRadiusTablet, "px"),
      "border-bottom-left-radius": generateCSSUnit(blockLeftRadiusTablet, "px"),
      "padding-top": generateCSSUnit(contentTopPaddingTablet, "px"),
      "padding-right": generateCSSUnit(contentRightPaddingTablet, "px"),
      "padding-bottom": generateCSSUnit(contentBottomPaddingTablet, "px"),
      "padding-left": generateCSSUnit(contentLeftPaddingTablet, "px"),
    },
  };

  var styling_css = "";
  var id = `.responsive-block-editor-addons-block-testimonial.block-${props.clientId}`;

  styling_css = generateCSS(selectors, id);
  styling_css += generateCSS(tablet_selectors, id, true, "tablet");
  styling_css += generateCSS(mobile_selectors, id, true, "mobile");

  return styling_css;
}

export default EditorStyles;
