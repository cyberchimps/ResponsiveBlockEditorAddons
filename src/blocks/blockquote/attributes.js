const attributes = {
  block_id: {
    type: "string",
  },
  quoteContent: {
    type: "string",
    default: "Click here to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
  },
  quoteBackgroundColor: {
    type: "string",
  },
  quoteTextColor: {
    type: "string",
  },
  quoteFontFamily: {
    type: "string",
  },
  quoteFontSize: {
    type: "number",
    default: 18,
  },
  quoteFontWeight: {
    type: "string",
    default: "400",
  },
  quoteLineHeight: {
    type: "number",
    default: 1,
  },
  quoteSize: {
    type: "number",
    default: 70,
  },
  quoteColor: {
    type: "string",
  },
  blockBorderStyle: {
    type: "string",
    default: "none",
  },
  blockBorderWidth: {
    type: "number",
    default: 1,
  },
  blockBorderRadius: {
    type: "number",
    default: 0,
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
  blockBorderColor: {
    type: "string",
  },
  blockLeftPadding: {
    type: "number",
    default: 60,
  },
  blockLeftPaddingMobile: {
    type: "number",
    default: 60,
  },
  blockLeftPaddingTablet: {
    type: "number",
    default: 60,
  },
  blockRightPadding: {
    type: "number",
    default: 60,
  },
  blockRightPaddingMobile: {
    type: "number",
    default: 60,
  },
  blockRightPaddingTablet: {
    type: "number",
    default: 60,
  },
  blockTopPadding: {
    type: "number",
    default: 70,
  },
  blockTopPaddingMobile: {
    type: "number",
    default: 70,
  },
  blockTopPaddingTablet: {
    type: "number",
    default: 70,
  },
  blockBottomPadding: {
    type: "number",
    default: 70,
  },
  blockBottomPaddingMobile: {
    type: "number",
    default: 70,
  },
  blockBottomPaddingTablet: {
    type: "number",
    default: 70,
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
    default: ''
  },
  blockTopMarginMobile: {
    type: "number",
    default: ''
  },
  blockBottomMarginMobile: {
    type: "number",
    default: ''
  },
  blockLeftMarginMobile: {
    type: "number",
    default: ''
  },
  blockRightMarginMobile: {
    type: "number",
    default: ''
  },
  blockTopMarginTablet: {
    type: "number",
    default: ''
  },
  blockBottomMarginTablet: {
    type: "number",
    default: ''
  },
  blockLeftMarginTablet: {
    type: "number",
    default: ''
  },
  blockRightMarginTablet: {
    type: "number",
    default: ''
  },
  quoteHposition: {
    type: "number",
    default: 30,
  },
  quoteVposition: {
    type: "number",
    default: 20,
  },
  quoteAlign: {
    type: "string",
    default: "left",
  },
  quoteOpacity: {
    type: "number",
    default: 100,
  },
  showQuote: {
    type: "boolean",
    default: true,
  },
  opacity: {
    type: "number",
    default: 100,
  },
  colorLocation1: {
    type: "number",
    default: 0,
  },
  colorLocation2: {
    type: "number",
    default: 100,
  },
  gradientDirection: {
    type: "number",
    default: 90,
  },
  backgroundImage: {
    type: "string",
  },
  backgroundVideo: {
    type: "object",
  },
  backgroundColor: {
    type: "string",
  },
  backgroundColor1: {
    type: "string",
  },
  backgroundColor2: {
    type: "string",
  },
  backgroundType: {
    type: "string",
    default: "none",
  },
  icon: {
    type: "string",
    default: "round-fat",
  },
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
    default: 20,
  },
  boxShadowSpread: {
    type: "number",
    default: 20,
  },
  boxShadowPosition: {
    type: "string",
    default: "outset",
  },
  textTopPadding: {
    type: "number",
    default: 60
  },
  textBottomPadding: {
    type: "number",
    default: 0
  },
  textLeftPadding: {
    type: "number",
    default: 70
  },
  textRightPadding: {
    type: "number",
    default: 70
  },
  textTopPaddingMobile: {
    type: "number",
    default: 30
  },
  textBottomPaddingMobile: {
    type: "number",
    default: 0
  },
  textLeftPaddingMobile: {
    type: "number",
    default: 35
  },
  textRightPaddingMobile: {
    type: "number",
    default: 35
  },
  textTopPaddingTablet: {
    type: "number",
    default: 30
  },
  textBottomPaddingTablet: {
    type: "number",
    default: 0
  },
  textLeftPaddingTablet: {
    type: "number",
    default: 35
  },
  textRightPaddingTablet: {
    type: "number",
    default: 35
  },
  quoteFontSizeMobile: {
	  type: "number",
  },
  quoteFontSizeTablet: {
	  type: "number",
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
  },
  z_indexTablet: {
    type: "number",
  },
  z_indexMobile: {
    type: "number",
  },
  borderColor: {
	type: "string",
	default: "empty",
  }, // For compatibility with v1.3.2.
  borderStyle: {
	type: "string",
	default: "empty",
  }, // For compatibility with v1.3.2.
  borderWidth: {
	type: "number",
	default: 999,
  }, // For compatibility with v1.3.2.
  topPadding: {
	type: "number",
	default: 999,
  }, // For compatibility with v1.3.2.
  bottomPadding: {
	type: "number",
	default: 999,
  }, // For compatibility with v1.3.2.
  leftPadding: {
	type: "number",
	default: 999,
  }, // For compatibility with v1.3.2.
  rightPadding: {
	type: "number",
	default: 999,
  }, // For compatibility with v1.3.2.
  textIsPaddingControlConnected: {
    type: "boolean",
    default: false,
  },
  blockIsPaddingControlConnected: {
    type: "boolean",
    default: false,
  },
  blockIsMarginControlConnected: {
    type: "boolean",
    default: false,
  },
  quoteTypographyColor: {
    type: "string",
    default: "",
  },
  blockIsTypographyColorValueUpdated: {
    type: "boolean",
    default: false,
  },
  isAlignmentValueUpdated: {
    type: "boolean",
    default: false,
  },
  quoteAlignTablet: {
    type: "string",
    default: "left",
  },
  quoteAlignMobile: {
    type: "string",
    default: "left",
  },
};

export default attributes;
