/**
 * Returns Dynamic Generated CSS
 */

 import generateCSS from "../../../generateCSS";
 import generateCSSUnit from "../../../generateCSSUnit";
 
 function EditorStyles(props) {
   const {
     numberBoxAlignment,
     numberBoxBackgroundColor,
     numberBoxBackgroundOpacity,
     numberBoxBlockMinHeight,
     contentVerticalAlign,
     maxContentWidth,
     numberBoxTopMargin,
     numberBoxBottomMargin,
     numberBoxLeftMargin,
     numberBoxRightMargin,
     numberBoxTopMarginTablet,
     numberBoxBottomMarginTablet,
     numberBoxLeftMarginTablet,
     numberBoxRightMarginTablet,
     numberBoxTopMarginMobile,
     numberBoxBottomMarginMobile,
     numberBoxLeftMarginMobile,
     numberBoxRightMarginMobile,
     numberBoxBlockBorder,
     numberBoxBlockBorderWidth,
     numberBoxBlockBorderColor,
     numberBoxBlockBorderRadius,
     numberBoxBlockShadowHorizontalOffset,
     numberBoxBlockShadowVerticalOffset,
     numberBoxBlockShadowBlur,
     numberBoxBlockShadowSpread,
     numberBoxBlockShadowColor,
     numberBoxBlockShadow,
     headingTitle,
     headingDesc,
     
     seperatorStyle,
     headSpacing,
     subheadSpacing,
     separatorSpacing,
     headSpacingTablet,
     subheadSpacingTablet,
     separatorSpacingTablet,
     headSpacingMobile,
     subheadSpacingMobile,
     separatorSpacingMobile,
     separatorHeight,
     separatorWidth,
     separatorWidthType,
     separatorColor,
     headingTitleFontFamily,
     headingTitleFontSize,
     headingTitleFontSizeTablet,
     headingTitleFontSizeMobile,
     headingTitleFontWeight,
     headingTitleLineHeight,
     headingTitleLetterSpacing,
     headingTitleColor,
     subHeadingTitleFontFamily,
     subHeadingTitleFontSize,
     subHeadingTitleFontSizeMobile,
     subHeadingTitleFontSizeTablet,
     subHeadingTitleFontWeight,
     subHeadingTitleLineHeight,
     subHeadingTitleLetterSpacing,
     subHeadingTitleColor,
     headingTag,
     level,
     headingAlignment,
     headingAlignmentTablet,
     headingAlignmentMobile,
     showHeading,
     showSubHeading,
     showSeparator,
     textDecoration,
     textDecorationSubHeading,
     block_id,
   } = props.attributes;
 
   var selectors = {
     "": {
       
     },
     " .rbea-number-box-main-container": {
        "position": "relative",
        "min-height": generateCSSUnit(numberBoxBlockMinHeight, "px"),
        "align-items": contentVerticalAlign,
        "max-width": generateCSSUnit(maxContentWidth, "px"),
        "justify-content": numberBoxAlignment,
        "margin-top": generateCSSUnit(numberBoxTopMargin, "px"),
        "margin-bottom": generateCSSUnit(numberBoxBottomMargin, "px"),
        "margin-left": generateCSSUnit(numberBoxLeftMargin, "px"),
        "margin-right": generateCSSUnit(numberBoxRightMargin, "px"),
        "border-style": numberBoxBlockBorder,
        "border-width": generateCSSUnit(numberBoxBlockBorderWidth, "px"),
        "border-color": numberBoxBlockBorderColor,
        "border-radius": generateCSSUnit(numberBoxBlockBorderRadius, "px"),
        "box-shadow": generateCSSUnit(numberBoxBlockShadowHorizontalOffset, "px") + ' ' + generateCSSUnit(numberBoxBlockShadowVerticalOffset, "px") + ' ' + generateCSSUnit(numberBoxBlockShadowBlur, "px") + ' ' + generateCSSUnit(numberBoxBlockShadowSpread, "px") + ' ' + numberBoxBlockShadowColor,
     },
     " .rbea-number-box-main-container::before": {
        "content": '',
        "background-size": "cover",
        "position": "absolute",
        "top": "0px",
        "right": "0px",
        "bottom": "0px",
        "left": "0px",
        "background-color": numberBoxBackgroundColor,
				"opacity": numberBoxBackgroundOpacity / 100,
        "border-radius": generateCSSUnit(numberBoxBlockBorderRadius, "px"),
    },
     " .responsive-heading-title-text": {
       "font-family": headingTitleFontFamily,
       "font-size": generateCSSUnit(headingTitleFontSize, "px"),
       "font-weight": headingTitleFontWeight,
       "line-height": headingTitleLineHeight,
       "letter-spacing": generateCSSUnit(headingTitleLetterSpacing, "px"),
       color: headingTitleColor,
       "margin-bottom": generateCSSUnit(headSpacing, "px"),
       "text-decoration": textDecoration,
     },
     " .responsive-heading-seperator": {
       "border-top-style": seperatorStyle,
       "border-top-width": generateCSSUnit(separatorHeight, "px"),
       "width": generateCSSUnit( separatorWidth, separatorWidthType ),
       "border-color": separatorColor,
       "margin-bottom": generateCSSUnit(separatorSpacing, "px"),
     },
     " .responsive-heading-desc-text": {
       "font-family": subHeadingTitleFontFamily,
       "font-size": generateCSSUnit(subHeadingTitleFontSize, "px"),
       "font-weight": subHeadingTitleFontWeight,
       "line-height": subHeadingTitleLineHeight,
       "letter-spacing": generateCSSUnit(subHeadingTitleLetterSpacing, "px"),
       color: subHeadingTitleColor,
       "margin-bottom": generateCSSUnit(subheadSpacing, "px"),
       "text-decoration": textDecorationSubHeading,
     },
   };
 
   var mobile_selectors = {
     "": {
       "text-align": headingAlignmentMobile,
     },
     " .rbea-number-box-main-container": {
       "margin-top": generateCSSUnit(numberBoxTopMarginMobile, "px"),
       "margin-bottom": generateCSSUnit(numberBoxBottomMarginMobile, "px"),
       "margin-left": generateCSSUnit(numberBoxLeftMarginMobile, "px"),
       "margin-right": generateCSSUnit(numberBoxRightMarginMobile, "px"),
     },
     " .responsive-heading-title-text": {
       "font-size": generateCSSUnit(headingTitleFontSizeMobile, "px"),
       "margin-bottom": generateCSSUnit(headSpacingMobile, "px"),
     },
     " .responsive-heading-desc-text": {
       "font-size": generateCSSUnit(subHeadingTitleFontSizeMobile, "px"),
       "margin-bottom": generateCSSUnit(subheadSpacingMobile, "px"),
     },
     " .responsive-heading-seperator": {
       "margin-bottom": generateCSSUnit(separatorSpacingMobile, "px"),
     },
   };
 
   var tablet_selectors = {
     "": {
       "text-align": headingAlignmentTablet,
     },
     " .rbea-number-box-main-container": {
       "margin-top": generateCSSUnit(numberBoxTopMarginTablet, "px"),
       "margin-bottom": generateCSSUnit(numberBoxBottomMarginTablet, "px"),
       "margin-left": generateCSSUnit(numberBoxLeftMarginTablet, "px"),
       "margin-right": generateCSSUnit(numberBoxRightMarginTablet, "px"),
     },
     " .responsive-heading-title-text": {
       "font-size": generateCSSUnit(headingTitleFontSizeTablet, "px"),
       "margin-bottom": generateCSSUnit(headSpacingTablet, "px"),
     },
     " .responsive-heading-desc-text": {
       "font-size": generateCSSUnit(subHeadingTitleFontSizeTablet, "px"),
       "margin-bottom": generateCSSUnit(subheadSpacingTablet, "px"),
     },
     " .responsive-heading-seperator": {
       "margin-bottom": generateCSSUnit(separatorSpacingTablet, "px"),
     },
   };
 
   var styling_css = "";
   var id = `.responsive-block-editor-addons-block-number-box.block-${block_id}`;
 
   styling_css = generateCSS(selectors, id);
   styling_css += generateCSS(tablet_selectors, id, true, "tablet");
   styling_css += generateCSS(mobile_selectors, id, true, "mobile");
 
   return styling_css;
 }
 
 export default EditorStyles;
 