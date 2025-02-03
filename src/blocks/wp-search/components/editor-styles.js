/**
 * Returns Dynamic Generated CSS
 */

 import generateCSS from "../../../generateCSS";
 import generateCSSUnit from "../../../generateCSSUnit";
 
 function EditorStyles(props) {
   const {
     block_id,
     layout,
     inputWidth,
     inputWidthType,
     inputTextColor,
     inputBackgroundColor,
     blockBorderColor,
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
     blockBorderStyle,
     blockBorderWidth,
     inputTopPadding,
     inputRightPadding,
     inputBottomPadding,
     inputLeftPadding,
     inputTopPaddingMobile,
     inputRightPaddingMobile,
     inputBottomPaddingMobile,
     inputLeftPaddingMobile,
     inputTopPaddingTablet,
     inputRightPaddingTablet,
     inputBottomPaddingTablet,
     inputLeftPaddingTablet,
     inputFontFamily,
     inputFontSize,
     inputFontSizeMobile,
     inputFontSizeTablet,
     inputFontWeight,
     inputLineHeight,
     boxShadowColor,
     boxShadowHOffset,
     boxShadowVOffset,
     boxShadowBlur,
     boxShadowSpread,
     boxShadowPosition,
     iconSize,
     iconColor,
     iconHoverColor,
     buttonType,
     buttonWidth,
     buttonBackgroundColor,
     buttonBackgroundHoverColor,
     buttonTextColor,
     buttonTextHoverColor,
     buttonFontFamily,
     buttonFontSize,
     buttonFontSizeMobile,
     buttonFontSizeTablet,
     buttonFontWeight,
     buttonLineHeight,
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
     inputTypographyColor,
     widthType,
   } = props.attributes;

   let width;
   width = widthType === "px" ? generateCSSUnit(inputWidth, "px") : `${inputWidth}%`;

   var boxShadowPositionCSS = boxShadowPosition;
   if ("outset" === boxShadowPosition) {
     boxShadowPositionCSS = "";
   }
   let boxShadow = `${generateCSSUnit(boxShadowHOffset, "px")} ${generateCSSUnit(boxShadowVOffset, "px")} ${generateCSSUnit(boxShadowBlur, "px")} ${generateCSSUnit(boxShadowSpread, "px")} ${boxShadowColor} ${boxShadowPositionCSS}`;

   let bgColor;
   bgColor = "minimal" === layout ? inputBackgroundColor : "";

   let buttonSize = buttonWidth === 0 ? buttonType === 'button' ? 50 : 110 : buttonWidth;

   let iconCol = iconColor === "" ? "classic" === layout ? "#ffffff" : "#1e1e1e" : iconColor; 

   let inputBoxPadding = `${generateCSSUnit(inputTopPadding, "px")} ${generateCSSUnit(inputRightPadding, "px")} ${generateCSSUnit(inputBottomPadding, "px")} ${generateCSSUnit(inputLeftPadding, "px")}`;
   let buttonPadding = "classic" === layout ? inputBoxPadding : 0;
   let iconAndTextPadding = "minimal" === layout ? inputBoxPadding : 0;

   let inputBoxPaddingMobile = `${generateCSSUnit(inputTopPaddingMobile, "px")} ${generateCSSUnit(inputRightPaddingMobile, "px")} ${generateCSSUnit(inputBottomPaddingMobile, "px")} ${generateCSSUnit(inputLeftPaddingMobile, "px")}`;
   let buttonPaddingMobile = "classic" === layout ? inputBoxPaddingMobile : 0;
   let iconAndTextPaddingMobile = "minimal" === layout ? inputBoxPaddingMobile : 0;

   let inputBoxPaddingTablet = `${generateCSSUnit(inputTopPaddingTablet, "px")} ${generateCSSUnit(inputRightPaddingTablet, "px")} ${generateCSSUnit(inputBottomPaddingTablet, "px")} ${generateCSSUnit(inputLeftPaddingTablet, "px")}`;
   let buttonPaddingTablet = "classic" === layout ? inputBoxPaddingTablet : 0;
   let iconAndTextPaddingTablet= "minimal" === layout ? inputBoxPaddingTablet: 0;

   let border = `0 ${blockBorderStyle} ${blockBorderColor}`;
   if(blockBorderStyle !== '') {
    border = `${generateCSSUnit(blockBorderWidth, "px")} ${blockBorderStyle} ${blockBorderColor}`;
   }
   let inputBorderTop = border;
   let inputBorderBottom = border;
   let inputBorderLeft = "classic" === layout ? border : 0;
   let inputBorderRight = "classic" === layout ? 0 : border;

   let iconBorderTop = "minimal" === layout ? border : 0;
   let iconBorderBottom = "minimal" === layout ? border : 0;
   let iconBorderLeft = "minimal" === layout ? border : 0;
   let iconBorderRight =  0;
 
   let borderRadius = generateCSSUnit(blockBorderRadius, "px");
   let inputBorderRadius = "classic" === layout ? `${blockTopRadius}px 0px 0px ${blockLeftRadius}px` : `0px ${blockRightRadius}px ${blockBottomRadius}px 0px`;
   let iconBorderRadius = "minimal" === layout ? `${blockTopRadius}px 0px 0px ${blockLeftRadius}px` : `0px ${blockRightRadius}px ${blockBottomRadius}px 0px`;
   let buttonBorderRadius = `0px ${blockRightRadius}px ${blockBottomRadius}px 0px`;
   let inputBorderRadiusMobile = "classic" === layout ? `${blockTopRadiusMobile}px 0px 0px ${blockLeftRadiusMobile}px` : `0px ${blockRightRadiusMobile}px ${blockBottomRadiusMobile}px 0px`;
   let iconBorderRadiusMobile = "minimal" === layout ? `${blockTopRadiusMobile}px 0px 0px ${blockLeftRadiusMobile}px` : `0px ${blockRightRadiusMobile}px ${blockBottomRadiusMobile}px 0px`;
   let buttonBorderRadiusMobile = `0px ${blockRightRadiusMobile}px ${blockBottomRadiusMobile}px 0px`;
   let inputBorderRadiusTablet = "classic" === layout ? `${blockTopRadiusTablet}px 0px 0px ${blockLeftRadiusTablet}px` : `0px ${blockRightRadiusTablet}px ${blockBottomRadiusTablet}px 0px`;
   let iconBorderRadiusTablet = "minimal" === layout ? `${blockTopRadiusTablet}px 0px 0px ${blockLeftRadiusTablet}px` : `0px ${blockRightRadiusTablet}px ${blockBottomRadiusTablet}px 0px`;
   let buttonBorderRadiusTablet = `0px ${blockRightRadiusTablet}px ${blockBottomRadiusTablet}px 0px`;

   var selectors = {
    " ": {
      "opacity": hideWidget? 0.2 : 1,
      "width": width,
      "border-top-left-radius": generateCSSUnit(blockTopRadius, "px"),
      "border-top-right-radius": generateCSSUnit(blockRightRadius, "px"),
      "border-bottom-right-radius": generateCSSUnit(blockBottomRadius, "px"),
      "border-bottom-left-radius": generateCSSUnit(blockLeftRadius, "px"),
      "padding": 0,
      "max-width": "100%",
      'padding-top': generateCSSUnit(blockTopPadding, "px"),
			'padding-right': generateCSSUnit(blockRightPadding, "px"),
			'padding-bottom': generateCSSUnit(blockBottomPadding, "px"),
			'padding-left': generateCSSUnit(blockLeftPadding, "px"),
			'margin-top': generateCSSUnit(blockTopMargin, "px"),
			'margin-right': generateCSSUnit(blockRightMargin, "px"),
			'margin-bottom': generateCSSUnit(blockBottomMargin, "px"),
			'margin-left': generateCSSUnit(blockLeftMargin, "px"),
    },
    " .responsive-block-editor-addons-search-form__input": {
     "border-top" : inputBorderTop + ' !important',
     "border-right": inputBorderRight + ' !important',
     "border-bottom": inputBorderBottom + ' !important',
     "border-left": inputBorderLeft + ' !important',
     "border-radius": inputBorderRadius,
     "color": inputTypographyColor,
     "background-color": inputBackgroundColor,
     "margin": 0,
     "font-family": inputFontFamily,
     "font-size": generateCSSUnit(inputFontSize, "px"),
     "font-weight": inputFontWeight,
     "line-height": inputLineHeight,
     "padding": inputBoxPadding,
    },
    " .responsive-block-editor-addons-search-form__input::placeholder": {
      "color": inputTypographyColor,
      "opacity": 0.6,
     },
    " .responsive-block-editor-addons-search-submit": {
      "border-top": border + ' !important',
      "border-bottom": border + ' !important',
      "border-left": 0 + ' !important',
      "border-right": border + ' !important',
      "border-radius": buttonBorderRadius,
      "padding": buttonPadding,
      "display": "flex",
      "align-items": "center",
      "justify-content": "center",
      "width": generateCSSUnit(buttonSize, "px"),
      "background-color": buttonBackgroundColor,
    },
    " .responsive-block-editor-addons-search-submit:hover": {
      "background-color": buttonBackgroundHoverColor,
    },
    " .responsive-block-editor-addons-search-icon-wrap": {
      "border-top": iconBorderTop + ' !important',
      "border-bottom": iconBorderBottom + ' !important',
      "border-left": iconBorderLeft + ' !important',
      "border-right": iconBorderRight + ' !important',
      "border-radius": iconBorderRadius + ' !important',
      "display": "flex",
      "align-items": "center",
      "justify-content": "center",
      "background-color": bgColor,
      "width": "fit-content",
      "padding": iconAndTextPadding,
    },
    " .responsive-block-editor-addons-search-icon-wrap svg" : {
      "width" : generateCSSUnit(iconSize, "px"),
      "height" : generateCSSUnit(iconSize, "px"),
      "fill": iconCol,
    },
    "  .responsive-block-editor-addons-search-submit:hover .responsive-block-editor-addons-search-icon-wrap svg" : {
      "fill": iconHoverColor,
    },
    " .responsive-block-editor-addons-search-button-text": {
      "color": buttonTextColor,
      "font-family": buttonFontFamily,
      "font-size": generateCSSUnit(buttonFontSize, "px"),
      "font-weight": buttonFontWeight,
      "line-height": buttonLineHeight,
      "padding": iconAndTextPadding,
    },
    " .responsive-block-editor-addons-search-button-text:hover": {
      "color": buttonTextHoverColor,
    },
   };

   if("outset" === boxShadowPosition){
    selectors[" "]["box-shadow"] = boxShadow;
   }
   else{
    selectors[" .responsive-block-editor-addons-search-form__input"]["box-shadow"] = boxShadow;
   }
 
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
      "border-top-left-radius": generateCSSUnit(blockTopRadiusMobile, "px"),
      "border-top-right-radius": generateCSSUnit(blockRightRadiusMobile, "px"),
      "border-bottom-right-radius": generateCSSUnit(blockBottomRadiusMobile, "px"),
      "border-bottom-left-radius": generateCSSUnit(blockLeftRadiusMobile, "px"),
    },
    " .responsive-block-editor-addons-search-form__input": {
      "font-size": generateCSSUnit(inputFontSizeMobile, "px"),
     "padding": inputBoxPaddingMobile,
     "border-radius": inputBorderRadiusMobile
    },
    " .responsive-block-editor-addons-search-icon-wrap": {
      "padding": iconAndTextPaddingMobile,
    },
    " .responsive-block-editor-addons-search-button-text": {
      "font-size": generateCSSUnit(buttonFontSizeMobile, "px"),
      "padding": iconAndTextPaddingMobile,
    },
    " .responsive-block-editor-addons-search-submit": {
      "padding": buttonPaddingMobile,
      "border-radius": buttonBorderRadiusMobile,
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
      "border-top-left-radius": generateCSSUnit(blockTopRadiusTablet, "px"),
      "border-top-right-radius": generateCSSUnit(blockRightRadiusTablet, "px"),
      "border-bottom-right-radius": generateCSSUnit(blockBottomRadiusTablet, "px"),
      "border-bottom-left-radius": generateCSSUnit(blockLeftRadiusTablet, "px"),
    },
    " .responsive-block-editor-addons-search-form__input": {
      "font-size": generateCSSUnit(inputFontSizeTablet, "px"),
      "padding": inputBoxPaddingTablet,
      "border-radius": inputBorderRadiusTablet,
     },
    " .responsive-block-editor-addons-search-icon-wrap": {
     "padding": iconAndTextPaddingTablet,
    },
    " .responsive-block-editor-addons-search-button-text": {
      "font-size": generateCSSUnit(buttonFontSizeTablet, "px"),
      "padding": iconAndTextPaddingTablet,
    },
    " .responsive-block-editor-addons-search-submit": {
      "padding": buttonPaddingTablet,
      "border-radius": buttonBorderRadiusTablet,
    },
   };
 
   var styling_css = "";
   var id = `.responsive-block-editor-addons-block-wp-search.block-${block_id}`;
 
   styling_css = generateCSS(selectors, id);
   styling_css += generateCSS(tablet_selectors, id, true, "tablet");
   styling_css += generateCSS(mobile_selectors, id, true, "mobile");
 
   return styling_css;
 }
 
 export default EditorStyles;
 