/**
 * Returns Dynamic Generated CSS
 */

import generateCSS from "../../../generateCSS";
import generateCSSUnit from "../../../generateCSSUnit";
import { hexToRgba } from "../../../utils/index.js";

function EditorStyles(props) {
  const {
    block_id,
    iconShape,
    iconColorType,
    iconPrimaryColor,
    iconSecondaryColor,
    iconSize,
    iconColumns,
    iconColumnsGap,
    iconRowsGap,
    iconContainerSize,
    iconContainerHeight,
    socialZindex,
    blockTopPadding,
    blockBottomPadding,
    blockLeftPadding,
    blockRightPadding,
    blockTopPaddingTablet,
    blockBottomPaddingTablet,
    blockLeftPaddingTablet,
    blockRightPaddingTablet,
    blockTopPaddingMobile,
    blockBottomPaddingMobile,
    blockLeftPaddingMobile,
    blockRightPaddingMobile,
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
    labelFontFamily,
    labelFontSize,
    labelFontSizeMobile,
    labelFontSizeTablet,
    labelFontWeight,
    labelLineHeight,
    iconLabelGap,
    labelColor,
    skin,
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
    boxShadowColor,
    boxShadowHOffset,
    boxShadowVOffset,
    boxShadowBlur,
    boxShadowSpread,
    boxShadowPosition,
    backgroundColor,
    opacity,
    iconColumnsMobile,
    iconColumnsTablet,
    hideWidget,
    hideWidgetTablet,
    hideWidgetMobile,
    labelTypographyColor,

    iconContainerTopPadding,
    iconContainerBottomPadding,
    iconContainerLeftPadding,
    iconContainerRightPadding,
    iconContainerTopPaddingTablet,
    iconContainerBottomPaddingTablet,
    iconContainerRightPaddingTablet,
    iconContainerLeftPaddingTablet,
    iconContainerTopPaddingMobile,
    iconContainerBottomPaddingMobile,
    iconContainerLeftPaddingMobile,
    iconContainerRightPaddingMobile,
  } = props.attributes;

  var boxShadowPositionCSS = boxShadowPosition;

  if ("outset" === boxShadowPosition) {
    boxShadowPositionCSS = "";
  }

  let newopacity = opacity / 100;

  let iconShapeRadius = "";
  if (iconShape === "square") {
    iconShapeRadius = "0%";
  } else if (iconShape === "rounded") {
    iconShapeRadius = "10%";
  } else if (iconShape === "circle") {
    iconShapeRadius = "100%";
  }

  var selectors = {
    " ": {
		  "opacity": hideWidget? 0.2 : 1,
      "z-index": socialZindex,
      "margin-top": generateCSSUnit(blockTopMargin, "px"),
      "margin-bottom": generateCSSUnit(blockBottomMargin, "px"),
      "margin-left": generateCSSUnit(blockLeftMargin, "px"),
      "margin-right": generateCSSUnit(blockRightMargin, "px"),
      "padding-top": generateCSSUnit(blockTopPadding, "px"),
      "padding-bottom": generateCSSUnit(blockBottomPadding, "px"),
      "padding-left": generateCSSUnit(blockLeftPadding, "px"),
      "padding-right": generateCSSUnit(blockRightPadding, "px"),
      "border-color": blockBorderColor,
      "border-style": blockBorderStyle,
      "border-width": generateCSSUnit(blockBorderWidth, "px"),
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
        "min-width": 'fit-content',
        "max-width": '100%',
    },
    " .responsive-block-editor-addons-social-icon": {
      "border-radius": iconShapeRadius,
      fill: iconColorType === "custom" ? iconPrimaryColor : "",
      "background-color":
        iconColorType === "custom" && skin === "flat" ? iconSecondaryColor : "",
      border:
        iconColorType === "custom" && (skin === "framed" || skin === "boxed")
          ? "1px solid " + iconSecondaryColor
          : "",
      display: "flex",
      "justify-content": "center",
      "padding-top": generateCSSUnit(iconContainerTopPadding, "px"),
      "padding-bottom": generateCSSUnit(iconContainerBottomPadding, "px"),
      "padding-left": generateCSSUnit(iconContainerLeftPadding, "px"),
      "padding-right": generateCSSUnit(iconContainerRightPadding, "px"),
      width: "fit-content"
    },
    " .responsive-block-editor-addons-social-icon > a:first-child": {
      padding: skin === "boxed" || skin === "minimal" ? "0 10px 0 10px" : "",
      "background-color":
        (skin === "boxed" || skin === "minimal") && iconSecondaryColor,
    },
    " .responsive-block-editor-addons-social-icon > a:last-child": {
      padding: (skin === "boxed" || skin === "minimal") && "0 10px 0 0",
    },
    " .responsive-block-editor-addons-social-icon-svg svg": {
      height: generateCSSUnit(iconSize, "px"),
      width: generateCSSUnit(iconSize, "px"),
    },
    " .responsive-block-editor-addons-social-icons-container": {
      display: "inline-grid",
      "grid-template-columns":
        iconColumns !== "auto" ? `repeat(${iconColumns} , auto)` : "",
      "grid-auto-flow": iconColumns !== "auto" ? "" : "column",
      "grid-column-gap": generateCSSUnit(iconColumnsGap, "px"),
      "grid-row-gap": generateCSSUnit(iconRowsGap, "px"),
      "background-color": `${hexToRgba(
        backgroundColor || "#ffffff",
        newopacity || 0
      )}`,
    },
    " .responsive-block-editor-addons-social-icon-label": {
      "font-size": generateCSSUnit(labelFontSize, "px"),
      "font-family": labelFontFamily,
      "font-weight": labelFontWeight,
      "line-height": labelLineHeight,
      "margin-left": generateCSSUnit(iconLabelGap, "px"),
      color: labelTypographyColor,
    },
    " .responsive-block-editor-addons-icon-facebook, .responsive-block-editor-addons-icon-facebook-f, .responsive-block-editor-addons-icon-facebook-square, .responsive-block-editor-addons-icon-facebook-messenger": {
      fill: "#3b5998",
    },
    " .responsive-block-editor-addons-icon-twitter, .responsive-block-editor-addons-icon-twitter-square": {
      fill: "#00aced",
    },
    " .responsive-block-editor-addons-icon-linkedin, .responsive-block-editor-addons-icon-linkedin-in": {
      fill: "#007bb6",
    },
    " .responsive-block-editor-addons-icon-youtube, .responsive-block-editor-addons-icon-youtube-square": {
      fill: "#bb0000",
    },
    " .responsive-block-editor-addons-icon-pinterest, .responsive-block-editor-addons-icon-pinterest-p, .responsive-block-editor-addons-icon-pinterest-square": {
      fill: "#bb0000",
    },
    " .responsive-block-editor-addons-icon-instagram": {
      fill: "#e95950",
    },
    " .responsive-block-editor-addons-icon-snapchat, .responsive-block-editor-addons-icon-snapchat-ghost,  .responsive-block-editor-addons-icon-snapchat-square": {
      fill: "#fffc00",
    },
    " .responsive-block-editor-addons-icon-tumblr, .responsive-block-editor-addons-icon-tumblr-square": {
      fill: "#32506d",
    },
    " .responsive-block-editor-addons-icon-vimeo, .responsive-block-editor-addons-icon-vimeo-v, .responsive-block-editor-addons-icon-vimeo-square": {
      fill: "#aad450",
    },
    " .responsive-block-editor-addons-icon-quora": {
      fill: "#a82400",
    },
    " .responsive-block-editor-addons-icon-google-plus, .responsive-block-editor-addons-icon-google-plus-g, .responsive-block-editor-addons-icon-google-plus-square": {
      fill: "#dd4b39",
    },
    " .responsive-block-editor-addons-icon-reddit, .responsive-block-editor-addons-icon-reddit-alien, .responsive-block-editor-addons-icon-reddit-square": {
      fill: "#FF5700",
    },
    " .responsive-block-editor-addons-icon-skype": {
      fill: "#00aff0",
    },
    " .responsive-block-editor-addons-icon-telegram, .responsive-block-editor-addons-icon-telegram-plane": {
      fill: "#0088cc",
    },
    " .responsive-block-editor-addons-icon-whatsapp, .responsive-block-editor-addons-icon-whatsapp-square": {
      fill: "#34B7F1",
    },
    " .responsive-block-editor-addons-icon-envelope": {
      fill: "#BB001B",
    },
  };

  var mobile_selectors = {
    " ": {
		  "opacity": hideWidgetMobile? 0.2 : 1,
      "margin-top": generateCSSUnit(blockTopMarginMobile, "px"),
      "margin-bottom": generateCSSUnit(blockBottomMarginMobile, "px"),
      "margin-left": generateCSSUnit(blockLeftMarginMobile, "px"),
      "margin-right": generateCSSUnit(blockRightMarginMobile, "px"),
      "padding-top": generateCSSUnit(blockTopPaddingMobile, "px"),
      "padding-bottom": generateCSSUnit(blockBottomPaddingMobile, "px"),
      "padding-left": generateCSSUnit(blockLeftPaddingMobile, "px"),
      "padding-right": generateCSSUnit(blockRightPaddingMobile, "px"),
      "border-top-left-radius": generateCSSUnit(blockTopRadiusMobile, "px"),
      "border-top-right-radius": generateCSSUnit(blockRightRadiusMobile, "px"),
      "border-bottom-right-radius": generateCSSUnit(blockBottomRadiusMobile, "px"),
      "border-bottom-left-radius": generateCSSUnit(blockLeftRadiusMobile, "px"),
    },
    " .responsive-block-editor-addons-social-icon-label": {
      "font-size": generateCSSUnit(labelFontSizeMobile, "px"),
    },
    " .responsive-block-editor-addons-social-icons-container": {
      "grid-template-columns":
        iconColumnsMobile !== "auto" ? `repeat(${iconColumnsMobile} , auto)` : "",
        "grid-auto-flow": iconColumnsMobile !== "auto" ? "unset" : "column",
    },
    " .responsive-block-editor-addons-social-icon": {
      "padding-top": generateCSSUnit(iconContainerTopPaddingMobile, "px"),
      "padding-bottom": generateCSSUnit(iconContainerBottomPaddingMobile, "px"),
      "padding-left": generateCSSUnit(iconContainerLeftPaddingMobile, "px"),
      "padding-right": generateCSSUnit(iconContainerRightPaddingMobile, "px"),
    },
  };

  var tablet_selectors = {
    " ": {
		  "opacity": hideWidgetTablet? 0.2 : 1,
      "margin-top": generateCSSUnit(blockTopMarginTablet, "px"),
      "margin-bottom": generateCSSUnit(blockBottomMarginTablet, "px"),
      "margin-left": generateCSSUnit(blockLeftMarginTablet, "px"),
      "margin-right": generateCSSUnit(blockRightMarginTablet, "px"),
      "padding-top": generateCSSUnit(blockTopPaddingTablet, "px"),
      "padding-bottom": generateCSSUnit(blockBottomPaddingTablet, "px"),
      "padding-left": generateCSSUnit(blockLeftPaddingTablet, "px"),
      "padding-right": generateCSSUnit(blockRightPaddingTablet, "px"),
      "border-top-left-radius": generateCSSUnit(blockTopRadiusTablet, "px"),
      "border-top-right-radius": generateCSSUnit(blockRightRadiusTablet, "px"),
      "border-bottom-right-radius": generateCSSUnit(blockBottomRadiusTablet, "px"),
      "border-bottom-left-radius": generateCSSUnit(blockLeftRadiusTablet, "px"),
    },
    " .responsive-block-editor-addons-social-icon-label": {
      "font-size": generateCSSUnit(labelFontSizeTablet, "px"),
    },
    " .responsive-block-editor-addons-social-icons-container": {
      "grid-template-columns":
        iconColumnsTablet !== "auto" ? `repeat(${iconColumnsTablet} , auto)` : "",
      "grid-auto-flow": iconColumnsTablet !== "auto" ? "unset" : "column",
    },
    " .responsive-block-editor-addons-social-icon": {
      "padding-top": generateCSSUnit(iconContainerTopPaddingTablet, "px"),
      "padding-bottom": generateCSSUnit(iconContainerBottomPaddingTablet, "px"),
      "padding-left": generateCSSUnit(iconContainerLeftPaddingTablet, "px"),
      "padding-right": generateCSSUnit(iconContainerRightPaddingTablet, "px"),
    },
  };

  var styling_css = "";
  var id = `.responsive-block-editor-addons-block-social-icons.block-${block_id}`;

  styling_css = generateCSS(selectors, id);
  styling_css += generateCSS(tablet_selectors, id, true, "tablet");
  styling_css += generateCSS(mobile_selectors, id, true, "mobile");

  return styling_css;
}

export default EditorStyles;
