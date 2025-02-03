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
    titleColor,
    designationColor,
    descriptionColor,
    socialIconColor,
    titleFontFamily,
    descriptionFontFamily,
    designationFontFamily,
    titleFontSize,
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
    iconSize,
    imageWidth,
    imageWidthMobile,
    imageWidthTablet,
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
    padding,
    alignment,
    boxShadowColor,
    boxShadowHOffset,
    boxShadowVOffset,
    boxShadowBlur,
    boxShadowSpread,
    boxShadowPosition,
    opacity,
    backgroundColor2,
    gradientDirection,
    bgGradient,
    colorLocation1,
    colorLocation2,
    backgroundImage,
    backgroundImagePosition,
    backgroundImageRepeat,
    backgroundImageSize,
    backgroundAttachment,
    gutter,
    count,
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
    titleTypographyColor,
    descriptionTypographyColor,
    designationTypographyColor,
    designationBottomSpacing,
    designationBottomSpacingMobile,
    designationBottomSpacingTablet,
    descriptionBottomSpacing,
    descriptionBottomSpacingMobile,
    descriptionBottomSpacingTablet,
    titleBottomSpacing,
    titleBottomSpacingMobile,
    titleBottomSpacingTablet,
    backgroundPosition,
    backgroundRepeat,
    backgroundSize,
    backgroundSizeTablet,
    backgroundSizeMobile,
    imagePositionTab,
    imageSizeTab,
    backgroundImageValueUpdated,
    backgroundColor1,

    backgroundType,
    backgroundPositionMobile,
    backgroundPositionTablet,
    overlayType,
    backgroundImageColor,
    gradientOverlayColor1,
    gradientOverlayLocation1,
    gradientOverlayColor2,
    gradientOverlayLocation2,
    gradientOverlayType,
    gradientOverlayAngle,
    gradientOverlayPosition,
  } = props.attributes;

  let bgopacity = opacity / 100;

  var boxShadowPositionCSS = boxShadowPosition;

  if ("outset" === boxShadowPosition) {
    boxShadowPositionCSS = "";
  }

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

  // New Background Image
  let imgopacity = opacity / 100;

  let updatedBackgroundImage = `url(${backgroundImage})`;
  let backgroundImageEffect = "";
  let colorType = "";
  if (overlayType === "color" || overlayType === "") {
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
    " .responsive-block-editor-addons-team-avatar-wrapper": {
      "text-align": alignment,
      "text-align": `-webkit-${alignment}`,
    },

    " .responsive-block-editor-addons-team-avatar": {
      "width": generateCSSUnit(imageWidth, "px"),
      "max-width": generateCSSUnit(imageWidth, "px"),
      "margin-top": generateCSSUnit(imageMarginTop, "px"),
      "margin-bottom": generateCSSUnit(imageMarginBottom, "px"),
    },

    " .responsive-block-editor-addons-team-name": {
      "color": titleTypographyColor,
      "font-family": titleFontFamily,
      "font-size": generateCSSUnit(titleFontSize, "px"),
      "font-weight": titleFontWeight,
      "line-height": titleLineHeight,
      "margin-bottom": generateCSSUnit(titleBottomSpacing, "px"),
    },

    " .responsive-block-editor-addons-team-designation": {
      "color": designationTypographyColor,
      "font-family": designationFontFamily,
      "font-size": generateCSSUnit(designationFontSize, "px"),
      "font-weight": designationFontWeight,
      "line-height": designationLineHeight,
      "margin-bottom": generateCSSUnit(designationBottomSpacing, "px"),
    },

    " .responsive-block-editor-addons-team-description": {
      "color": descriptionTypographyColor,
      "font-family": descriptionFontFamily,
      "font-size": generateCSSUnit(descriptionFontSize, "px"),
      "font-weight": descriptionFontWeight,
      "line-height": descriptionLineHeight,
      "margin-bottom": generateCSSUnit(descriptionBottomSpacing, "px"),
    },

    " .responsive-block-editor-addons-team-social-icons.edit-block a": {
      "margin-left": generateCSSUnit(socialIconSpacing, "px"),
      "margin-right": generateCSSUnit(socialIconSpacing, "px"),
    },

    " .responsive-block-editor-addons-team-social-icons.edit-block .dashicons.dashicons-twitter": {
      "color": socialIconColor,
      "font-size": generateCSSUnit(iconSize, "px"),
      "text-decoration": "none",
      "height": generateCSSUnit(iconSize, "px"),
      "width": generateCSSUnit(iconSize, "px"),
    },

    " .responsive-block-editor-addons-team-social-icons.edit-block .dashicons.dashicons-facebook": {
      "color": socialIconColor,
      "font-size": generateCSSUnit(iconSize, "px"),
      "text-decoration": "none",
      "height": generateCSSUnit(iconSize, "px"),
      "width": generateCSSUnit(iconSize, "px"),
    },

    " .responsive-block-editor-addons-team-social-icons.edit-block .dashicons.dashicons-linkedin": {
      "color": socialIconColor,
      "font-size": generateCSSUnit(iconSize, "px"),
      "text-decoration": "none",
      "height": generateCSSUnit(iconSize, "px"),
      "width": generateCSSUnit(iconSize, "px"),
    },

    " .responsive-block-editor-addons-team-social-icons.edit-block .dashicons.dashicons-instagram": {
      "color": socialIconColor,
      "font-size": generateCSSUnit(iconSize, "px"),
      "text-decoration": "none",
      "height": generateCSSUnit(iconSize, "px"),
      "width": generateCSSUnit(iconSize, "px"),
    },

    " .responsive-block-editor-addons-team-social-icons.edit-block .dashicons.dashicons-email": {
      "color": socialIconColor,
      "font-size": generateCSSUnit(iconSize, "px"),
      "text-decoration": "none",
      "height": generateCSSUnit(iconSize, "px"),
      "width": generateCSSUnit(iconSize, "px"),
    },

    " .responsive-block-editor-addons-team-social-icons.edit-block .dashicons.dashicons-youtube": {
      "color": socialIconColor,
      "font-size": generateCSSUnit(iconSize, "px"),
      "text-decoration": "none",
      "height": generateCSSUnit(iconSize, "px"),
      "width": generateCSSUnit(iconSize, "px"),
    },

    " .responsive-block-editor-addons-team-social-icons.edit-block .dashicons.dashicons-pinterest": {
      "color": socialIconColor,
      "font-size": generateCSSUnit(iconSize, "px"),
      "text-decoration": "none",
      "height": generateCSSUnit(iconSize, "px"),
      "width": generateCSSUnit(iconSize, "px"),
    },

    " .responsive-block-editor-addons-team-social-icons a": {
      "padding": generateCSSUnit(iconBackgroundSize, 'px'),
      "background-color": socialIconBackgroundColor,
      "border": generateCSSUnit(iconBorderSize,'px') + ' solid ' + socialIconBorderColor,
      "border-top-left-radius": generateCSSUnit(iconTopRadius, "px"),
      "border-top-right-radius": generateCSSUnit(iconRightRadius, "px"),
      "border-bottom-right-radius": generateCSSUnit(iconBottomRadius, "px"),
      "border-bottom-left-radius": generateCSSUnit(iconLeftRadius, "px"),
    },

    " .responsive-block-editor-addons-team-social-icons li:hover a": {
      "background-color": socialIconBackgroundHoverColor,
      "border": generateCSSUnit(iconBorderSize,'px') + ' solid ' + socialIconBorderHoverColor,
    },

    " .responsive-block-editor-addons-team-social-icons li:hover .dashicons": {
      color: socialIconHoverColor+'!important',
    },

    " .wp-block-responsive-block-editor-addons-team": {
      "background-size": backgroundSize,
      "background-repeat": backgroundRepeat,
      "background-position": backgroundPosition,
      "background-attachment": backgroundAttachment,
      "border-width": generateCSSUnit(borderWidth, "px"),
      "border-color": borderColor,
      "border-top-left-radius": generateCSSUnit(blockTopRadius, "px"),
      "border-top-right-radius": generateCSSUnit(blockRightRadius, "px"),
      "border-bottom-right-radius": generateCSSUnit(blockBottomRadius, "px"),
      "border-bottom-left-radius": generateCSSUnit(blockLeftRadius, "px"),
      "padding": generateCSSUnit(padding, "px"),
      "text-align": alignment,
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
      opacity: backgroundType === "image" ? imgopacity : '',
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
    " .wp-block-responsive-block-editor-addons-team": {
      "background-size": backgroundSizeMobile,
      "background-position": backgroundPositionMobile,
        "margin-bottom": gutterMargin,
        "border-top-left-radius": generateCSSUnit(blockTopRadiusMobile, "px"),
      "border-top-right-radius": generateCSSUnit(blockRightRadiusMobile, "px"),
      "border-bottom-right-radius": generateCSSUnit(blockBottomRadiusMobile, "px"),
      "border-bottom-left-radius": generateCSSUnit(blockLeftRadiusMobile, "px"),
    },
    " .responsive-block-editor-addons-team-avatar": {
      "width": generateCSSUnit(imageWidthMobile, "px"),
      "max-width": generateCSSUnit(imageWidthMobile, "px"),
      "margin-top": generateCSSUnit(imageMarginTopMobile, "px"),
      "margin-bottom": generateCSSUnit(imageMarginBottomMobile, "px"),
    },
    ".has-columns.has-responsive-columns.responsive-team-block-columns__stack-mobile > *:not(.block-editor-inner-blocks)": {
      "max-width": "100%",
      "min-width": "100%",
    },
    " .responsive-block-editor-addons-team-name": {
      "margin-bottom": generateCSSUnit(titleBottomSpacingMobile, "px"),
	  "font-size": generateCSSUnit(titleFontSizeMobile, "px"),
    },

    " .responsive-block-editor-addons-team-designation": {
      "margin-bottom": generateCSSUnit(designationBottomSpacingMobile, "px"),
	  "font-size": generateCSSUnit(designationFontSizeMobile, "px"),
    },

    " .responsive-block-editor-addons-team-description": {
      "margin-bottom": generateCSSUnit(descriptionBottomSpacingMobile, "px"),
	  "font-size": generateCSSUnit(descriptionFontSizeMobile, "px"),
    },

    " .responsive-block-editor-addons-team-social-icons a": {
      "border-top-left-radius": generateCSSUnit(iconTopRadiusMobile, "px"),
      "border-top-right-radius": generateCSSUnit(iconRightRadiusMobile, "px"),
      "border-bottom-right-radius": generateCSSUnit(iconBottomRadiusMobile, "px"),
      "border-bottom-left-radius": generateCSSUnit(iconLeftRadiusMobile, "px"),
    },

    " .responsive-block-editor-addons-team-social-icons.edit-block a": {
      "margin-left": generateCSSUnit(socialIconSpacingMobile, "px"),
      "margin-right": generateCSSUnit(socialIconSpacingMobile, "px"),
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
    " .wp-block-responsive-block-editor-addons-team": {
      "background-size": backgroundSizeTablet,
      "background-position": backgroundPositionTablet,
      "margin-bottom": gutterMargin,
      "border-top-left-radius": generateCSSUnit(blockTopRadiusTablet, "px"),
      "border-top-right-radius": generateCSSUnit(blockRightRadiusTablet, "px"),
      "border-bottom-right-radius": generateCSSUnit(blockBottomRadiusTablet, "px"),
      "border-bottom-left-radius": generateCSSUnit(blockLeftRadiusTablet, "px"),
    },
    " .responsive-block-editor-addons-team-avatar": {
      "width": generateCSSUnit(imageWidthTablet, "px"),
      "max-width": generateCSSUnit(imageWidthTablet, "px"),
      "margin-top": generateCSSUnit(imageMarginTopTablet, "px"),
      "margin-bottom": generateCSSUnit(imageMarginBottomTablet, "px"),
    },
    ".has-columns.has-responsive-columns.responsive-team-block-columns__stack-tablet > *:not(.block-editor-inner-blocks)": {
      "max-width": "100%",
      "min-width": "100%",
    },
    " .responsive-block-editor-addons-team-name": {
      "margin-bottom": generateCSSUnit(titleBottomSpacingTablet, "px"),
	  "font-size": generateCSSUnit(titleFontSizeTablet, "px"),
    },

    " .responsive-block-editor-addons-team-designation": {
      "margin-bottom": generateCSSUnit(designationBottomSpacingTablet, "px"),
	  "font-size": generateCSSUnit(designationFontSizeTablet, "px"),
    },

    " .responsive-block-editor-addons-team-description": {
      "margin-bottom": generateCSSUnit(descriptionBottomSpacingTablet, "px"),
	  "font-size": generateCSSUnit(descriptionFontSizeTablet, "px"),
    },
    " .responsive-block-editor-addons-team-social-icons a": {
      "border-top-left-radius": generateCSSUnit(iconTopRadiusTablet, "px"),
      "border-top-right-radius": generateCSSUnit(iconRightRadiusTablet, "px"),
      "border-bottom-right-radius": generateCSSUnit(iconBottomRadiusTablet, "px"),
      "border-bottom-left-radius": generateCSSUnit(iconLeftRadiusTablet, "px"),
    },
    " .responsive-block-editor-addons-team-social-icons.edit-block a": {
      "margin-left": generateCSSUnit(socialIconSpacingTablet, "px"),
      "margin-right": generateCSSUnit(socialIconSpacingTablet, "px"),
    },
  };

  var styling_css = "";
  var id = `.wp-block-responsive-block-editor-addons-team-wrapper.block-${block_id}`;

  styling_css = generateCSS(selectors, id);
  styling_css += generateCSS(tablet_selectors, id, true, "tablet");
  styling_css += generateCSS(mobile_selectors, id, true, "mobile");

  return styling_css;
}

export default EditorStyles;
