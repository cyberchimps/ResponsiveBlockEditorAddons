/**
 * Returns Dynamic Generated CSS
 */

 import generateCSS from "../../../generateCSS";
 import generateCSSUnit from "../../../generateCSSUnit";
 
 function EditorStyles(props) {
   const {
     block_id,
     buttonToShow,
     buttonWidthType,
     buttonWidth,
     buttonWidthMobile,
     buttonWidthTablet,
     iconSize,
     iconSizeMobile,
     iconSizeTablet,
     buttonColor,
     buttonTextColor,
     buttonColorHover,
     buttonTextColorHover,
     buttonRounded,
     buttonTransparent,
     buttonRadius,
     textFontFamily,
     textFontSize,
     textFontSizeMobile,
     textFontSizeTablet,
     textFontWeight,
     textLineHeight,
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
     iconTextGap,
     iconTextGapMobile,
     iconTextGapTablet,
     buttonAlign,
     hideWidget,
     hideWidgetTablet,
     hideWidgetMobile,
     buttonStyleToggle,
   } = props.attributes;

   let buttonWidthCSS = "fixed" === buttonWidthType ? "fit-content" : "flexible" === buttonWidthType ? generateCSSUnit(buttonWidth, "px") : generateCSSUnit(100, "%");
   let buttonWidthMobileCSS = "fixed" === buttonWidthType ? "fit-content" : "flexible" === buttonWidthType ? generateCSSUnit(buttonWidthMobile, "px") : generateCSSUnit(100, "%");
   let buttonWidthTabletCSS= "fixed" === buttonWidthType ? "fit-content" : "flexible" === buttonWidthType ? generateCSSUnit(buttonWidthTablet, "px") : generateCSSUnit(100, "%");

   let buttonBorder = `1px solid ${buttonColor}`;
   let buttonBorderHover = `1px solid ${buttonColorHover}`;
   let buttonBorderRadius = buttonStyleToggle === "rounded" ? generateCSSUnit(buttonRadius, "px") : 0;
   let textColor = buttonStyleToggle === "transparent" ? buttonColor : buttonTextColor;
   let buttonBackground = buttonStyleToggle === "transparent" ? "" : buttonColor;
   let textColorHover = buttonStyleToggle === "transparent" ? buttonColorHover : buttonTextColorHover;
   let buttonBackgroundHover = buttonStyleToggle === "transparent" ? "" : buttonColorHover;

   let justifyButtonDirection = 'flex-start';
   if(buttonAlign === 'center') {
     justifyButtonDirection = 'center';
   }else if(buttonAlign === 'right') {
     justifyButtonDirection = 'flex-end';
   }else if(buttonAlign === 'left') {
     justifyButtonDirection = 'flex-start';
   }

   var selectors = {
    "": {
      'opacity': hideWidget ? 0.2 : 1,
      "margin": `${generateCSSUnit(blockTopMargin, "px")} ${generateCSSUnit(blockRightMargin, "px")} ${generateCSSUnit(blockBottomMargin, "px")} ${generateCSSUnit(blockLeftMargin, "px")}`,
      "padding": `${generateCSSUnit(blockTopPadding, "px")} ${generateCSSUnit(blockRightPadding, "px")} ${generateCSSUnit(blockBottomPadding, "px")} ${generateCSSUnit(blockLeftPadding, "px")}`,
      "display": 'flex',
      "justify-content": justifyButtonDirection,
    },
    " .responsive-block-editor-addons-call-mail-button-button-container": {
      "width": buttonWidthCSS,
      "background-color": buttonBackground,
      "border": buttonBorder,
      "border-radius": buttonBorderRadius,
    },
    " .responsive-block-editor-addons-call-mail-button-button-container:hover": {
      "background-color": buttonBackgroundHover,
      "border": buttonBorderHover,
    },
    " .responsive-block-editor-addons-call-mail-button-text": {
      "color": textColor,
      "font-family": textFontFamily,
      "font-size": `${generateCSSUnit(textFontSize, "px")} !important`,
      "font-weight": textFontWeight,
      "line-height": textLineHeight,
    },
    " .responsive-block-editor-addons-call-mail-button-icon": {
      "fill": textColor,
    },
    " .responsive-block-editor-addons-call-mail-button-icon svg": {
      "height": `${generateCSSUnit(iconSize, "px")} !important`,
      "width": `${generateCSSUnit(iconSize, "px")} !important`,
    },
    " .responsive-block-editor-addons-call-mail-button-button-container:hover .responsive-block-editor-addons-call-mail-button-text": {
      "color": textColorHover,
    },
    " .responsive-block-editor-addons-call-mail-button-button-container:hover .responsive-block-editor-addons-call-mail-button-icon": {
      "fill": textColorHover,
    },
    " .responsive-block-editor-addons-call-mail-button-icon-iconPosition-left": {
      "margin-right": generateCSSUnit(iconTextGap, "px")
    },
    " .responsive-block-editor-addons-call-mail-button-icon-iconPosition-right": {
      "margin-left": generateCSSUnit(iconTextGap, "px")
    },
   };
 
   var mobile_selectors = {
    "": {
      'opacity': hideWidgetMobile ? 0.2 : 1,
      "margin": `${generateCSSUnit(blockTopMarginMobile, "px")} ${generateCSSUnit(blockRightMarginMobile, "px")} ${generateCSSUnit(blockBottomMarginMobile, "px")} ${generateCSSUnit(blockLeftMarginMobile, "px")}`,
      "padding": `${generateCSSUnit(blockTopPaddingMobile, "px")} ${generateCSSUnit(blockRightPaddingMobile, "px")} ${generateCSSUnit(blockBottomPaddingMobile, "px")} ${generateCSSUnit(blockLeftPaddingMobile, "px")}`,
    },
    " .responsive-block-editor-addons-call-mail-button-button-container": {
      "width": buttonWidthMobileCSS,
    },
    " .responsive-block-editor-addons-call-mail-button-text": {
      "font-size": `${generateCSSUnit(textFontSizeMobile, "px")} !important`,
    },
    " .responsive-block-editor-addons-call-mail-button-icon svg": {
      "height": `${generateCSSUnit(iconSizeMobile, "px")} !important`,
      "width": `${generateCSSUnit(iconSize, "px")} !important`,
    },
    " .responsive-block-editor-addons-call-mail-button-icon-iconPosition-left": {
      "margin-right": generateCSSUnit(iconTextGapMobile, "px")
    },
    " .responsive-block-editor-addons-call-mail-button-icon-iconPosition-right": {
      "margin-left": generateCSSUnit(iconTextGapMobile, "px")
    },
   };
 
   var tablet_selectors = {
    "": {
      'opacity': hideWidgetTablet ? 0.2 : 1,
      "margin": `${generateCSSUnit(blockTopMarginTablet, "px")} ${generateCSSUnit(blockRightMarginTablet, "px")} ${generateCSSUnit(blockBottomMarginTablet, "px")} ${generateCSSUnit(blockLeftMarginTablet, "px")}`,
      "padding": `${generateCSSUnit(blockTopPaddingTablet, "px")} ${generateCSSUnit(blockRightPaddingTablet, "px")} ${generateCSSUnit(blockBottomPaddingTablet, "px")} ${generateCSSUnit(blockLeftPaddingTablet, "px")}`,
    },
    " .responsive-block-editor-addons-call-mail-button-button-container": {
      "width": buttonWidthTabletCSS,
    },
    " .responsive-block-editor-addons-call-mail-button-text": {
      "font-size": `${generateCSSUnit(textFontSizeTablet, "px")} !important`,
    },
    " .responsive-block-editor-addons-call-mail-button-icon svg": {
      "height": `${generateCSSUnit(iconSizeTablet, "px")} !important`,
      "width": `${generateCSSUnit(iconSize, "px")} !important`,
    },
    " .responsive-block-editor-addons-call-mail-button-icon-iconPosition-left": {
      "margin-right": generateCSSUnit(iconTextGapTablet, "px")
    },
    " .responsive-block-editor-addons-call-mail-button-icon-iconPosition-right": {
      "margin-left": generateCSSUnit(iconTextGapTablet, "px")
    },
   };
 
   var styling_css = "";
   var id = `.responsive-block-editor-addons-block-call-mail-button.block-${block_id}`;
 
   styling_css = generateCSS(selectors, id);
   styling_css += generateCSS(tablet_selectors, id, true, "tablet");
   styling_css += generateCSS(mobile_selectors, id, true, "mobile");
 
   return styling_css;
 }
 
 export default EditorStyles;
 