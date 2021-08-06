/**
 * Returns Dynamic Generated CSS
 */

import generateCSS from "../../../generateCSS";
import generateCSSUnit from "../../../generateCSSUnit";
import { hexToRgba } from "../../../utils/index.js";

function EditorStyles(props) {
  const {
    block_id,
    playButtonColor = "#ffffff",
    playButtonSize,
    vidwidth,
    vidwidthTablet,
    vidwidthMobile,
    vidheight,
    vidheightTablet,
    vidheightMobile,
    vidBackgroundColor,
    opacity,
    imgURL,
    butopacity,
    blockBorderStyle,
    blockBorderWidth,
    blockBorderRadius,
    blockBorderColor,
    boxShadowColor,
    boxShadowHOffset,
    boxShadowVOffset,
    boxShadowBlur,
    boxShadowSpread,
    boxShadowPosition,
    backgroundImage,
  } = props.attributes;

  var boxShadowPositionCSS = boxShadowPosition;

  if ("outset" === boxShadowPosition) {
    boxShadowPositionCSS = "";
  }

  let imgopacity = opacity / 100;

  let playopacity = butopacity / 100;

  let updatedbackgroundImage = "";
  if (backgroundImage && !!backgroundImage.length) {
    updatedbackgroundImage = backgroundImage;
  }

  let updatedBackgroundImage = "";
  if(updatedbackgroundImage) {
	  updatedBackgroundImage = `linear-gradient(${hexToRgba(
        vidBackgroundColor || "#000000",
        imgopacity || 0
      )},${hexToRgba(
        vidBackgroundColor || "#fff",
        imgopacity || 0
      )}),url(${updatedbackgroundImage})`;
  }

  var selectors = {
    " .responsive-block-editor-addons-video-popup__wrapper": {
      "background-image": updatedBackgroundImage,
      "background-color": hexToRgba(
        vidBackgroundColor || "#000000",
        imgopacity || 0
      ),
      "max-width": generateCSSUnit(vidwidth, "px"),
      height: generateCSSUnit(vidheight, "px"),
      "border-width": generateCSSUnit(blockBorderWidth, "px"),
      "border-color": blockBorderColor,
      "border-style": blockBorderStyle,
      "border-radius": generateCSSUnit(blockBorderRadius, "px"),
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

    " .responsive-block-editor-addons-video-popup__play-button svg": {
      width: generateCSSUnit(playButtonSize, "px"),
      height: generateCSSUnit(playButtonSize, "px"),
      fill: playButtonColor,
      opacity: playopacity,
    },
  };

  var mobile_selectors = {
    " .responsive-block-editor-addons-video-popup__wrapper": {
      "max-width": generateCSSUnit(vidwidthMobile, "px"),
      height: generateCSSUnit(vidheightMobile, "px"),
    },
  };

  var tablet_selectors = {
    " .responsive-block-editor-addons-video-popup__wrapper": {
      "max-width": generateCSSUnit(vidwidthTablet, "px"),
      height: generateCSSUnit(vidheightTablet, "px"),
    },
  };

  var styling_css = "";
  var id = `.responsive-block-editor-addons-block-video-popup.block-${block_id}`;

  styling_css = generateCSS(selectors, id);
  styling_css += generateCSS(tablet_selectors, id, true, "tablet");
  styling_css += generateCSS(mobile_selectors, id, true, "mobile");

  return styling_css;
}

export default EditorStyles;
