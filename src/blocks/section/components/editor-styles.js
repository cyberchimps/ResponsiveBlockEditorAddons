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
    width,
    themeWidth,
    innerWidthType,
    innerWidth,
    innerWidthTablet,
    innerWidthMobile,
    blockTopPadding,
	blockBottomPadding,
	blockLeftPadding,
	blockRightPadding,
	blockTopPaddingMobile,
	blockBottomPaddingMobile,
	blockLeftPaddingMobile,
	blockRightPaddingMobile,
	blockTopPaddingTablet,
	blockBottomPaddingTablet,
	blockLeftPaddingTablet,
	blockRightPaddingTablet,
    mobilePaddingType,
    tabletPaddingType,
    desktopPaddingType,
    blockTopMargin,
	blockBottomMargin,
	blockLeftMargin,
	blockRightMargin,
	blockTopMarginMobile,
	blockBottomMarginMobile,
	blockLeftMarginMobile,
	blockRightMarginMobile,
	blockTopMarginTablet,
	blockBottomMarginTablet,
	blockLeftMarginTablet,
	blockRightMarginTablet,
    blockBorderStyle,
    blockBorderWidth,
    blockTopRadius,
    blockRightRadius,
    blockBottomRadius,
    blockLeftRadius,
    blockTopRadiusMobile,
    blockRightRadiusMobile,
    blockBottomRadiusMobile,
    blockLeftRadiusMobile,
    blockTopRadiusTablet,
    blockRightRadiusTablet,
    blockBottomRadiusTablet,
    blockLeftRadiusTablet,
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
    backgroundPosition,
    backgroundAttachment,
    backgroundRepeat,
    backgroundSize,
    backgroundSizeTablet,
    backgroundSizeMobile,
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
    opacity,
    boxShadowColor,
    boxShadowHOffset,
    boxShadowVOffset,
    boxShadowBlur,
    boxShadowSpread,
    boxShadowPosition,
    backgroundPositionTablet,
    backgroundPositionMobile,
    z_index,
	topMargin, // For compatibility with v1.3.2.
	bottomMargin, // For compatibility with v1.3.2.
	leftMargin, // For compatibility with v1.3.2.
	rightMargin, // For compatibility with v1.3.2.
	topPadding, // For compatibility with v1.3.2.
	bottomPadding, // For compatibility with v1.3.2.
	leftPadding, // For compatibility with v1.3.2.
	rightPadding, // For compatibility with v1.3.2.
	topMarginMobile, // For compatibility with v1.3.2.
	bottomMarginMobile, // For compatibility with v1.3.2.
	leftMarginMobile, // For compatibility with v1.3.2.
	rightMarginMobile, // For compatibility with v1.3.2.
	topPaddingMobile, // For compatibility with v1.3.2.
	bottomPaddingMobile, // For compatibility with v1.3.2.
	leftPaddingMobile, // For compatibility with v1.3.2.
	rightPaddingMobile, // For compatibility with v1.3.2.
	topMarginTablet, // For compatibility with v1.3.2.
	bottomMarginTablet, // For compatibility with v1.3.2.
	leftMarginTablet, // For compatibility with v1.3.2.
	rightMarginTablet, // For compatibility with v1.3.2.
	topPaddingTablet, // For compatibility with v1.3.2.
	bottomPaddingTablet, // For compatibility with v1.3.2.
	leftPaddingTablet, // For compatibility with v1.3.2.
	rightPaddingTablet, // For compatibility with v1.3.2.
    align,
    hideWidget,
    hideWidgetTablet,
    hideWidgetMobile,
  } = props.attributes;

  var boxShadowPositionCSS = boxShadowPosition;

  if ("outset" === boxShadowPosition) {
    boxShadowPositionCSS = "";
  }
  let imgopacity = opacity / 100;

  let updatedBackgroundImage = "";
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
		" ": {
		  "opacity": hideWidget? 0.2 : 1,
		},
    " > .responsive-block-editor-addons-block-section.responsive-section-wrap": {
      "margin-top": topMargin !== 999 && blockTopMargin === 0 ? generateCSSUnit(topMargin, "px") : generateCSSUnit(blockTopMargin, "px"), // For compatibility with v1.3.2.
      "margin-bottom": bottomMargin !== 999 && blockBottomMargin === 0 ? generateCSSUnit(bottomMargin, "px") : generateCSSUnit(blockBottomMargin, "px"), // For compatibility with v1.3.2.
      "margin-left": leftMargin !== 999 && blockLeftMargin === 0 ? generateCSSUnit(leftMargin, "px") : generateCSSUnit(blockLeftMargin, "px"), // For compatibility with v1.3.2.
      "margin-right": rightMargin !== 999 && blockRightMargin === 0 ? generateCSSUnit(rightMargin, "px") : generateCSSUnit(blockRightMargin, "px"), // For compatibility with v1.3.2.
      "padding-top": topPadding !== 999 && blockTopPadding === 10 ? generateCSSUnit(topPadding, "px") : generateCSSUnit(blockTopPadding, "px"), // For compatibility with v1.3.2.
      "padding-bottom": bottomPadding !== 999 && blockBottomPadding === 10 ? generateCSSUnit(bottomPadding, "px") : generateCSSUnit(blockBottomPadding, "px"), // For compatibility with v1.3.2.
      "padding-left": leftPadding !== 999 && blockLeftPadding === 10 ? generateCSSUnit(leftPadding, "px") : generateCSSUnit(blockLeftPadding, "px"), // For compatibility with v1.3.2.
      "padding-right": rightPadding !== 999 && blockRightPadding === 10 ? generateCSSUnit(rightPadding, "px") : generateCSSUnit(blockRightPadding, "px"), // For compatibility with v1.3.2.
      "background-color": colorType,
      "background-image": backgroundImageEffect,
    },
    " > .responsive-section-wrap > .responsive-section-inner-wrap": {
      "max-width":
        align == "full" ? generateCSSUnit(innerWidth, "px") : "",
      "z-index": z_index,
    },
    " .background-type-video": {
      "background-color": `${hexToRgba(
        backgroundColor || "#fff",
        imgopacity || 0
      )}`,
    },
    " > .responsive-section-wrap": {
      "background-image": updatedBackgroundImage,
      "background-position": backgroundPosition,
      "background-attachment": backgroundAttachment,
      "background-repeat": backgroundRepeat,
      "background-size": backgroundSize,
      "border-top-left-radius": generateCSSUnit(blockTopRadius, "px"),
      "border-top-right-radius": generateCSSUnit(blockRightRadius, "px"),
      "border-bottom-right-radius": generateCSSUnit(blockBottomRadius, "px"),
      "border-bottom-left-radius": generateCSSUnit(blockLeftRadius, "px"),
      "z-index": z_index,
      "max-width": align != "full" ? generateCSSUnit(width, "px") : "",
      "margin-left": align != "full" ? "auto" : "",
      "margin-right": align != "full" ? "auto" : "",
    },
    " > .responsive-section-wrap.responsive-block-editor-addons-block-section": {
      "border-width": generateCSSUnit(blockBorderWidth, "px"),
      "border-color": blockBorderColor,
      "border-style": blockBorderStyle,
      "border-top-left-radius": generateCSSUnit(blockTopRadius, "px"),
      "border-top-right-radius": generateCSSUnit(blockRightRadius, "px"),
      "border-bottom-right-radius": generateCSSUnit(blockBottomRadius, "px"),
      "border-bottom-left-radius": generateCSSUnit(blockLeftRadius, "px"),
      "background-color":
        backgroundType == "color"
          ? `${hexToRgba(backgroundColor || "#fff", imgopacity || 0)}`
          : undefined,
      "background-image":
        backgroundType == "gradient"
          ? generateBackgroundImageEffect(
              `${hexToRgba(backgroundColor1 || "#fff", imgopacity || 0)}`,
              `${hexToRgba(backgroundColor2 || "#fff", imgopacity || 0)}`,
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
  };

  var mobile_selectors = {
		" ": {
		  "opacity": hideWidgetMobile? 0.2 : 1,
		},
    " > .responsive-block-editor-addons-block-section": {
      "margin-top": topMarginMobile !== 999 && blockTopMarginMobile === "" ? generateCSSUnit(topMarginMobile, "px") : (blockTopMarginMobile ? generateCSSUnit(blockTopMarginMobile, "px") : generateCSSUnit(blockTopMargin, "px")), // For compatibility with v1.3.2.
      "margin-bottom": bottomMarginMobile !== 999 && blockBottomMarginMobile === "" ? generateCSSUnit(bottomMarginMobile, "px") : (blockBottomMarginMobile ? generateCSSUnit(blockBottomMarginMobile, "px") : generateCSSUnit(blockBottomMargin, "px")), // For compatibility with v1.3.2.
      "margin-left": leftMarginMobile !== 999 && blockLeftMarginMobile === "" ? generateCSSUnit(leftMarginMobile, "px") : (blockLeftMarginMobile ? generateCSSUnit(blockLeftMarginMobile, "px") : generateCSSUnit(blockLeftMargin, "px")), // For compatibility with v1.3.2.
      "margin-right": rightMarginMobile !== 999 && blockRightMarginMobile === "" ? generateCSSUnit(rightMarginMobile, "px") : (blockRightMarginMobile ? generateCSSUnit(blockRightMarginMobile, "px") : generateCSSUnit(blockRightMargin, "px")), // For compatibility with v1.3.2.
      "padding-top": topPaddingMobile !== 999 && blockTopPaddingMobile === "" ? generateCSSUnit(topPaddingMobile, "px") : (blockTopPaddingMobile ? generateCSSUnit(blockTopPaddingMobile, "px") : generateCSSUnit(blockTopPadding, "px")), // For compatibility with v1.3.2.
      "padding-bottom": bottomPaddingMobile !== 999 && blockBottomPaddingMobile === "" ? generateCSSUnit(bottomPaddingMobile, "px") : (blockBottomPaddingMobile ? generateCSSUnit(blockBottomPaddingMobile, "px") : generateCSSUnit(blockBottomPadding, "px")), // For compatibility with v1.3.2.
      "padding-left": leftPaddingMobile !== 999 && blockLeftPaddingMobile === "" ? generateCSSUnit(leftPaddingMobile, "px") : (blockLeftPaddingMobile ? generateCSSUnit(blockLeftPaddingMobile, "px") : generateCSSUnit(blockLeftPadding, "px")), // For compatibility with v1.3.2.
      "padding-right": rightPaddingMobile !== 999 && blockRightPaddingMobile === "" ? generateCSSUnit(rightPaddingMobile, "px") : (blockRightPaddingMobile ? generateCSSUnit(blockRightPaddingMobile, "px") : generateCSSUnit(blockRightPadding, "px")), // For compatibility with v1.3.2.
      "border-top-left-radius": generateCSSUnit(blockTopRadiusMobile, "px"),
      "border-top-right-radius": generateCSSUnit(blockRightRadiusMobile, "px"),
      "border-bottom-right-radius": generateCSSUnit(blockBottomRadiusMobile, "px"),
      "border-bottom-left-radius": generateCSSUnit(blockLeftRadiusMobile, "px"),
    },
    " > .responsive-section-wrap > .responsive-section-inner-wrap": {
      "max-width":
        (align == "full" && innerWidthMobile) ? generateCSSUnit(innerWidthMobile, "px") : generateCSSUnit(innerWidth, "px"),
    },
    " > .responsive-section-wrap": {
      "background-position": backgroundPositionMobile,
      "background-size": backgroundSizeMobile === '' ? backgroundSize : backgroundSizeMobile,
    },
  };

  var tablet_selectors = {
		" ": {
		  "opacity": hideWidgetTablet? 0.2 : 1,
		},
    " > .responsive-block-editor-addons-block-section": {
	  "margin-top": topMarginTablet !== 999 && blockTopMarginTablet === "" ? generateCSSUnit(topMarginTablet, "px") : (blockTopMarginTablet ? generateCSSUnit(blockTopMarginTablet, "px") : generateCSSUnit(blockTopMargin, "px")), // For compatibility with v1.3.2.
	  "margin-bottom": bottomMarginTablet !== 999 && blockBottomMarginTablet === "" ? generateCSSUnit(bottomMarginTablet, "px") : (blockBottomMarginTablet ? generateCSSUnit(blockBottomMarginTablet, "px") : generateCSSUnit(blockBottomMargin, "px")), // For compatibility with v1.3.2.
	  "margin-left": leftMarginTablet !== 999 && blockLeftMarginTablet === "" ? generateCSSUnit(leftMarginTablet, "px") : (blockLeftMarginTablet ? generateCSSUnit(blockLeftMarginTablet, "px") : generateCSSUnit(blockLeftMargin, "px")), // For compatibility with v1.3.2.
	  "margin-right": rightMarginTablet !== 999 && blockRightMarginTablet === "" ? generateCSSUnit(rightMarginTablet, "px") : (blockRightMarginTablet ? generateCSSUnit(blockRightMarginTablet, "px") : generateCSSUnit(blockRightMargin, "px")), // For compatibility with v1.3.2.
	  "padding-top": topPaddingTablet !== 999 && blockTopPaddingTablet === "" ? generateCSSUnit(topPaddingTablet, "px") : (blockTopPaddingTablet ? generateCSSUnit(blockTopPaddingTablet, "px") : generateCSSUnit(blockTopPadding, "px")), // For compatibility with v1.3.2.
	  "padding-bottom": bottomPaddingTablet !== 999 && blockBottomPaddingTablet === "" ? generateCSSUnit(bottomPaddingTablet, "px") : (blockBottomPaddingTablet ? generateCSSUnit(blockBottomPaddingTablet, "px") : generateCSSUnit(blockBottomPadding, "px")), // For compatibility with v1.3.2.
	  "padding-left": leftPaddingTablet !== 999 && blockLeftPaddingTablet === "" ? generateCSSUnit(leftPaddingTablet, "px") : (blockLeftPaddingTablet ? generateCSSUnit(blockLeftPaddingTablet, "px") : generateCSSUnit(blockLeftPadding, "px")), // For compatibility with v1.3.2.
	  "padding-right": rightPaddingTablet !== 999 && blockRightPaddingTablet === "" ? generateCSSUnit(rightPaddingTablet, "px") : (blockRightPaddingTablet ? generateCSSUnit(blockRightPaddingTablet, "px") : generateCSSUnit(blockRightPadding, "px")), // For compatibility with v1.3.2.
    "border-top-left-radius": generateCSSUnit(blockTopRadiusTablet, "px"),
    "border-top-right-radius": generateCSSUnit(blockRightRadiusTablet, "px"),
    "border-bottom-right-radius": generateCSSUnit(blockBottomRadiusTablet, "px"),
    "border-bottom-left-radius": generateCSSUnit(blockLeftRadiusTablet, "px"),
    },
    " .responsive-section-inner-wrap": {
      "max-width":
        (align == "full" && innerWidthTablet) ? generateCSSUnit(innerWidthTablet, "px") : generateCSSUnit(innerWidth, "px"),
    },
    " > .responsive-section-wrap": {
      "background-position": backgroundPositionTablet,
      "background-size": backgroundSizeTablet === '' ? backgroundSize : backgroundSizeTablet,
    },
  };

  var outerElement = {
    ".responsive-block-editor-addons-section__video-wrap": {
      "border-top-left-radius": generateCSSUnit(blockTopRadius, "px"),
      "border-top-right-radius": generateCSSUnit(blockRightRadius, "px"),
      "border-bottom-right-radius": generateCSSUnit(blockBottomRadius, "px"),
      "border-bottom-left-radius": generateCSSUnit(blockLeftRadius, "px"),
      opacity: imgopacity,
    },
  };

  var outerElementTablet = {
    ".responsive-block-editor-addons-section__video-wrap": {
      "border-top-left-radius": generateCSSUnit(blockTopRadiusTablet, "px"),
      "border-top-right-radius": generateCSSUnit(blockRightRadiusTablet, "px"),
      "border-bottom-right-radius": generateCSSUnit(blockBottomRadiusTablet, "px"),
      "border-bottom-left-radius": generateCSSUnit(blockLeftRadiusTablet, "px"),
      opacity: imgopacity,
    },
  };

  var outerElementMobile = {
    ".responsive-block-editor-addons-section__video-wrap": {
      "border-top-left-radius": generateCSSUnit(blockTopRadiusMobile, "px"),
      "border-top-right-radius": generateCSSUnit(blockRightRadiusMobile, "px"),
      "border-bottom-right-radius": generateCSSUnit(blockBottomRadiusMobile, "px"),
      "border-bottom-left-radius": generateCSSUnit(blockLeftRadiusMobile, "px"),
      opacity: imgopacity,
    },
  }

  var styling_css = "";
  var id = ` .responsive-block-editor-addons-block-section-outer-wrap.block-${props.clientId}`;
  var id_high_specificity = `.editor-styles-wrapper .responsive-block-editor-addons-block-section-outer-wrap.block-${props.clientId}`;

  styling_css = generateCSS(selectors, id);
  styling_css += generateCSS(tablet_selectors, id_high_specificity, true, "tablet");
  styling_css += generateCSS(mobile_selectors, id_high_specificity, true, "mobile");
  styling_css += generateCSS(outerElement, " ");
  styling_css += generateCSS(outerElementTablet, " ", true, "tablet");
  styling_css += generateCSS(outerElementMobile, " ", true, "mobile");

  return styling_css;
}

export default EditorStyles;
