const attributes = {
    block_id: {
      type: "string",
    },
    //General **********************
    layout: {
      type: "string",
      default: "classic"
    },
    placeholder: {
      type: "string",
      default: "Type & Hit Enter"
    },
    inputWidth: {
      type: "number",
      default: 100,
    },
    inputWidthType: {
      type: "string",
      default: "%"
    },
    //Typography *********************
    //Input Box
    inputTextColor: {
      type: "string"
    },
    inputBackgroundColor: {
      type: "string",
      default: "#eceeef"
    },
    //Border
    blockBorderColor: {
      type: "string",
    },
    blockBorderRadius: {
      type: "number",
      default: 0
    },
    blockTopRadius: {
      type: "number",
      default: 0,
    },
    blockRightRadius: {
      type: "number",
      default: 0,
    },
    blockBottomRadius: {
      type: "number",
      default: 0,
    },
    blockLeftRadius: {
      type: "number",
      default: 0,
    },
    blockTopRadiusTablet: {
      type: "number",
      default: 0,
    },
    blockRightRadiusTablet: {
      type: "number",
      default: 0,
    },
    blockBottomRadiusTablet: {
      type: "number",
      default: 0,
    },
    blockLeftRadiusTablet: {
      type: "number",
      default: 0,
    },
    blockTopRadiusMobile: {
      type: "number",
      default: 0,
    },
    blockRightRadiusMobile: {
      type: "number",
      default: 0,
    },
    blockBottomRadiusMobile: {
      type: "number",
      default: 0,
    },
    blockLeftRadiusMobile: {
      type: "number",
      default: 0,
    },
    blockIsRadiusControlConnected: {
      type: "boolean",
      default: false,
    },
    blockIsRadiusValueUpdated: {
      type: "boolean",
      default: false,
    },
    blockBorderStyle: {
      type: "string",
      default: "none"
    },
    blockBorderWidth: {
      type: "number",
      default: 0
    },
    //Padding
    inputTopPadding: {
      type: "number",
      default: 15
    },
    inputRightPadding: {
      type: "number",
      default: 15
    },
    inputBottomPadding: {
      type: "number",
      default: 15
    },
    inputLeftPadding: {
      type: "number",
      default: 15
    },
    inputTopPaddingMobile: {
      type: "number",
      default: 15
    },
    inputRightPaddingMobile: {
      type: "number",
      default: 15
    },
    inputBottomPaddingMobile: {
      type: "number",
      default: 15
    },
    inputLeftPaddingMobile: {
      type: "number",
      default: 15
    },
    inputTopPaddingTablet: {
      type: "number",
      default: 15
    },
    inputRightPaddingTablet: {
      type: "number",
      default: 15
    },
    inputBottomPaddingTablet: {
      type: "number",
      default: 15
    },
    inputLeftPaddingTablet: {
      type: "number",
      default: 15
    },
    //Typography
    inputFontFamily: {
      type: "string"
    },
    inputFontSize: {
      type: "number"
    },
    inputFontSizeMobile: {
      type: "number"
    },
    inputFontSizeTablet: {
      type: "number"
    },
    inputFontWeight: {
      type: "string",
      default: '100'
    },
    inputLineHeight: {
      type: "number",
      default: 1
    },
    //Button
    buttonType: {
      type: "string",
      default: "button"
    },
    buttonText: {
      type: "string",
      default: "Search"
    },
    buttonWidth: {
      type: "number",
      default: 0
    },
    buttonBackgroundColor: {
      type: "string",
      default: "#ff6f61"
    },
    buttonBackgroundHoverColor: {
      type: "string"
    },
    buttonTextColor: {
      type: "string",
      default: "#313131"
    },
    buttonTextHoverColor: {
      type: "string",
    },
    //Button Text Typography
    buttonFontFamily: {
      type: "string"
    },
    buttonFontSize: {
      type: "number",
      default: 16
    },
    buttonFontSizeMobile: {
      type: "number",
      default: 16
    },
    buttonFontSizeTablet: {
      type: "number",
      default: 16
    },
    buttonFontWeight: {
      type: "string",
      default: "100"
    },
    buttonLineHeight: {
      type: "number",
      default: 1
    },
    //Box Shadow
    boxShadowColor: {
      type: "string",
    },
    boxShadowHOffset: {
      type: "number",
      default: 0,
    },
    boxShadowVOffset: {
      type: "number",
      default: 0,
    },
    boxShadowBlur: {
      type: "number",
    },
    boxShadowSpread: {
      type: "number",
    },
    boxShadowPosition: {
      type: "string",
      default: "outset",
    },
    //Icon (Minimal Layout)
    iconSize: {
      type: "number",
      default: 16
    },
    iconColor: {
      type: "string",
      default: ""
    },
    iconHoverColor: {
      type: "string"
    },
    hideWidget: {
      type: "boolean",
      default: false,
    },
    hideWidgetTablet: {
      type: "boolean",
      default: false,
    },
    hideWidgetMobile: {
      type: "boolean",
      default: false,
    },
    z_index: {
      type: "number",
      default: 1,
    },
    z_indexTablet: {
      type: "number",
      default: 1,
    },
    z_indexMobile: {
      type: "number",
      default: 1,
    },
    inputIsPaddingControlConnected: {
      type: "boolean",
      default: false,
    },
    blockTopMargin: {
      type: "number",
      default: '',
    },
    blockBottomMargin: {
      type: "number",
      default: '',
    },
    blockLeftMargin: {
      type: "number",
      default: '',
    },
    blockRightMargin: {
      type: "number",
      default: '',
    },
    blockTopMarginTablet: {
      type: "number",
      default: '',
    },
    blockBottomMarginTablet: {
      type: "number",
      default: '',
    },
    blockLeftMarginTablet: {
      type: "number",
      default: '',
    },
    blockRightMarginTablet: {
      type: "number",
      default: '',
    },
    blockTopMarginMobile: {
      type: "number",
      default: '',
    },
    blockBottomMarginMobile: {
      type: "number",
      default: '',
    },
    blockLeftMarginMobile: {
      type: "number",
      default: '',
    },
    blockRightMarginMobile: {
      type: "number",
      default: '',
    },
    blockIsMarginControlConnected: {
      type: "boolean",
      default: false,
    },
    blockIsPaddingControlConnected: {
      type: "boolean",
      default: false,
    },
    blockTopPadding: {
      type: "number",
      default: '',
    },
    blockTopPaddingMobile: {
      type: "number",
      default: '',
    },
    blockTopPaddingTablet: {
      type: "number",
      default: '',
    },
    blockBottomPadding: {
      type: "number",
      default: '',
    },
    blockBottomPaddingMobile: {
      type: "number",
      default: '',
    },
    blockBottomPaddingTablet: {
      type: "number",
      default: '',
    },
    blockLeftPadding: {
      type: "number",
      default: '',
    },
    blockLeftPaddingMobile: {
      type: "number",
      default: '',
    },
    blockLeftPaddingTablet: {
      type: "number",
      default: '',
    },
    blockRightPadding: {
      type: "number",
      default: '',
    },
    blockRightPaddingMobile: {
      type: "number",
      default: '',
    },
    blockRightPaddingTablet: {
      type: "number",
      default: '',
    },
    blockIsTypographyColorValueUpdated: {
      type: 'boolean',
      default: false,
    },
    inputTypographyColor: {
      type: 'string',
    },
    widthType: {
      type: "string",
      default: "%"
    },
    widthTypeValueUpdated: {
      type: "boolean",
      default: false,
    },
  };
  
  export default attributes;
  