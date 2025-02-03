import { type } from "jquery";

const attributes = {
  block_id: {
    type: "string",
  },
  buttonText: {
    type: "string",
    default: "Button text",
  },
  buttonTextFontFamily: {
    type: "string"
  },
  buttonTextFontSize: {
    type: "number",
    default: 18
  },
  buttonTextFontSizeMobile: {
    type: "number",
  },
  buttonTextFontSizeTablet: {
    type: "number",
  },
  buttonTextLineHeight: {
    type: "number",
    default: 1
  },
  buttonTextFontWeight: {
    type: "string",
    default: "400"
  },
  buttonUrl: {
    type: "string",
    source: "attribute",
    selector: "a",
    attribute: "href",
  },
  buttonAlignment: {
    type: "string",
    default: "center",
  },
  ctaBackColor: {
    type: "string",
    default: "#2091e1",
  },
  ctaColor: {
    type: "string",
    default: "#fff",
  },
  buttonSize: {
    type: "string",
    default: "responsive-block-editor-addons-cta-button-size-medium",
  },
  buttonShape: {
    type: "string",
    default: "responsive-block-editor-addons-cta-button-shape-rounded",
  },
  buttonTarget: {
    type: "boolean",
    default: false,
  },
  ctaTitle: {
    type: "string",
    default: "Call-To-Action Title",
  },
  ctaTitleFontFamily: {
    type: "string",
  },
  ctaTextFontFamily: {
    type: "string",
  },
  ctaTitleFontSize: {
    type: "number",
    default: "22",
  },
  ctaTitleFontSizeMobile: {
    type: "number",
    default: "22",
  },
  ctaTitleFontSizeTablet: {
    type: "number",
    default: "22",
  },
  ctaTextFontSize: {
    type: "number",
    default: "16",
  },
  ctaTextFontSizeMobile: {
    type: "number",
    default: "16",
  },
  ctaTextFontSizeTablet: {
    type: "number",
    default: "16",
  },
  ctaText: {
    type: "string",
    default: "Call To Action Text",
  },
  ctaWidth: {
    type: "string",
  },
  backgroundColor: {
    type: "string",
    default: "#f2f2f2",
  },
  ctaTextColor: {
    type: "string",
  },
  backgroundImage: {
    type: "string",
  },
  imgID: {
    type: "number",
  },
  imgAlt: {
    type: "string",
    source: "attribute",
    attribute: "alt",
    selector: "img",
  },
  dimRatio: {
    type: "number",
    default: 50,
  },
  opacity: {
    type: "number",
    default: 100,
  },
  ctaTitleLineHeight: {
    type: "number",
    default: 1.8,
  },
  ctaTitleFontWeight: {
    type: "string",
    default: "400",
  },
  ctaTextLineHeight: {
    type: "number",
    default: 1.75,
  },
  ctaTextFontWeight: {
    type: "string",
    default: "400",
  },
  ctaVpadding: {
    type: "number",
    default: 18,
  },
  ctaHpadding: {
    type: "number",
    default: 14,
  },
  ctaBorderWidth: {
    type: "number",
    default: 1,
  },
  ctaBorderStyle: {
    type: "string",
    default: "solid",
  },
  icon: {
    type: "string",
    default: "",
  },
  iconPosition: {
    type: "string",
    default: "after",
  },
  counterId: {
    type: "string",
    default: 1,
  },
  ctaHoverBackColor: {
    type: "string",
  },
  ctaHoverColor: {
    type: "string",
    default: "#e6f2ff",
  },
  ctaBorderColor: {
    type: "string",
  },
  ctaHoverBorderColor: {
    type: "string",
  },
  resctaType: {
    type: "string",
    default: "button",
  },
  ctalinkText: {
    type: "string",
    default: "CTA text...",
  },
  titleSpace: {
    type: "number",
    default: 25,
  },
  subtitleSpace: {
    type: "number",
    default: 28,
  },
  titleSpaceMobile: {
    type: "number",
    default: 25,
  },
  subtitleSpaceMobile: {
    type: "number",
    default: 28,
  },
  titleSpaceTablet: {
    type: "number",
    default: 25,
  },
  subtitleSpaceTablet: {
    type: "number",
    default: 28,
  },
  iconSpace: {
    type: "number",
    default: 8,
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
  backgroundColor1: {
    type: "string",
  },
  backgroundColor2: {
    type: "string",
  },
  backgroundType: {
    type: "string",
  },
  buttoncolorLocation1: {
    type: "number",
    default: 0,
  },
  buttoncolorLocation2: {
    type: "number",
    default: 100,
  },
  buttongradientDirection: {
    type: "number",
    default: 90,
  },
  buttonbackgroundColor1: {
    type: "string",
  },
  buttonbackgroundColor2: {
    type: "string",
  },
  buttonbackgroundType: {
    type: "string",
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
  },
  boxShadowSpread: {
    type: "number",
  },
  boxShadowPosition: {
    type: "string",
    default: "outset",
  },
  icon_color: {
    type: "string",
    default: "#3a3a3a",
  },
  blockTopPadding: {
    type: "number",
    default: 20,
  },
  blockTopPaddingMobile: {
    type: "number",
    default: 20,
  },
  blockTopPaddingTablet: {
    type: "number",
    default: 20,
  },
  blockBottomPadding: {
    type: "number",
    default: 20,
  },
  blockBottomPaddingMobile: {
    type: "number",
    default: 20,
  },
  blockBottomPaddingTablet: {
    type: "number",
    default: 20,
  },
  blockLeftPadding: {
    type: "number",
    default: 20,
  },
  blockLeftPaddingMobile: {
    type: "number",
    default: 20,
  },
  blockLeftPaddingTablet: {
    type: "number",
    default: 20,
  },
  blockRightPadding: {
    type: "number",
    default: 20,
  },
  blockRightPaddingMobile: {
    type: "number",
    default: 20,
  },
  blockRightPaddingTablet: {
    type: "number",
    default: 20,
  },
  blockTopMargin: {
    type: "number",
    default: '',
  },
  blockTopMarginMobile: {
    type: "number",
    default: '',
  },
  blockTopMarginTablet: {
    type: "number",
    default: '',
  },
  blockBottomMargin: {
    type: "number",
    default: '',
  },
  blockBottomMarginMobile: {
    type: "number",
    default: '',
  },
  blockBottomMarginTablet: {
    type: "number",
    default: '',
  },
  blockLeftMargin: {
    type: "number",
    default: '',
  },
  blockLeftMarginMobile: {
    type: "number",
    default: '',
  },
  blockLeftMarginTablet: {
    type: "number",
    default: '',
  },
  blockRightMargin: {
    type: "number",
    default: '',
  },
  blockRightMarginMobile: {
    type: "number",
    default: '',
  },
  blockRightMarginTablet: {
    type: "number",
    default: '',
  },
  backgroundImagePosition: {
    type: "string",
    default: "center center",
  },
  backgroundImageRepeat: {
    type: "string",
    default: "no-repeat",
  },
  backgroundImageSize: {
    type: "string",
    default: "cover",
  },
  buttonSpace: {
    type: "number",
    default: 28,
  },
  buttonSpaceMobile: {
    type: "number",
    default: 28,
  },
  buttonSpaceTablet: {
    type: "number",
    default: 28,
  },
  borderRadius: {
    type: "number",
    default: 12,
  },
  blockTopRadius: {
    type: "number",
    default: 12,
  },
  blockRightRadius: {
    type: "number",
    default: 12,
  },
  blockBottomRadius: {
    type: "number",
    default: 12,
  },
  blockLeftRadius: {
    type: "number",
    default: 12,
  },
  blockTopRadiusTablet: {
    type: "number",
    default: 12,
  },
  blockRightRadiusTablet: {
    type: "number",
    default: 12,
  },
  blockBottomRadiusTablet: {
    type: "number",
    default: 12,
  },
  blockLeftRadiusTablet: {
    type: "number",
    default: 12,
  },
  blockTopRadiusMobile: {
    type: "number",
    default: 12,
  },
  blockRightRadiusMobile: {
    type: "number",
    default: 12,
  },
  blockBottomRadiusMobile: {
    type: "number",
    default: 12,
  },
  blockLeftRadiusMobile: {
    type: "number",
    default: 12,
  },
  blockIsRadiusControlConnected: {
		type: "boolean",
		default: false,
	},
  blockIsRadiusValueUpdated: {
    type: "boolean",
    default: false,
  },
  ctaVpaddingMobile: {
    type: "number",
  },
  ctaVpaddingTablet: {
    type: "number",
  },
  ctaHpaddingMobile: {
    type: "number",
  },
  ctaHpaddingTablet: {
    type: "number",
  },
  ctaBorderRadius: {
    type: "string",
    default: 4,
  },
  ctaBlockTopRadius: {
    type: "number",
    default: 4,
  },
  ctaBlockRightRadius: {
    type: "number",
    default: 4,
  },
  ctaBlockBottomRadius: {
    type: "number",
    default: 4,
  },
  ctaBlockLeftRadius: {
    type: "number",
    default: 4,
  },
  ctaBlockTopRadiusTablet: {
    type: "number",
    default: 4,
  },
  ctaBlockRightRadiusTablet: {
    type: "number",
    default: 4,
  },
  ctaBlockBottomRadiusTablet: {
    type: "number",
    default: 4,
  },
  ctaBlockLeftRadiusTablet: {
    type: "number",
    default: 4,
  },
  ctaBlockTopRadiusMobile: {
    type: "number",
    default: 4,
  },
  ctaBlockRightRadiusMobile: {
    type: "number",
    default: 4,
  },
  ctaBlockBottomRadiusMobile: {
    type: "number",
    default: 4,
  },
  ctaBlockLeftRadiusMobile: {
    type: "number",
    default: 4,
  },
  ctaBlockIsRadiusControlConnected: {
		type: "boolean",
		default: false,
	},
  ctaTextOpacity: {
    type: "number",
    default: 100,
  },
  buttonHbackgroundType: {
    type: "string",
    default: "none",
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
  blockIsPaddingControlConnected: {
		type: "boolean",
		default: false,
	},
  blockIsMarginControlConnected: {
		type: "boolean",
		default: false,
	},
  buttonBackgroundColor: {
	type: "string",
	default: "empty",
  }, // For compatibility with v1.3.2.
  hbuttonBackgroundColor: {
	type: "string",
	default: "empty",
  }, // For compatibility with v1.3.2.
  buttonTextColor: {
	type: "string",
	default: "empty",
  }, // For compatibility with v1.3.2.
  hbuttonTextColor: {
	type: "string",
	default: "empty",
  }, // For compatibility with v1.3.2.
  buttonborderHColor: {
	type: "string",
	default: "empty",
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
  imgURL: {
	type: "string",
	default: "empty",
  }, // For compatibility with v1.3.2.
  imagePosition: {
	type: "string",
	default: "empty",
  }, // For compatibility with v1.3.2.
  imageRepeat: {
	type: "string",
	default: "empty",
  }, // For compatibility with v1.3.2.
  thumbsize: {
	type: "string",
	default: "empty",
  }, // For compatibility with v1.3.2.
  buttonvPadding: {
	type: "number",
	default: 999,
  }, // For compatibility with v1.3.2.
  buttonhPadding: {
	type: "number",
	default: 999,
  }, // For compatibility with v1.3.2.
  buttonborderStyle: {
	type: "string",
	default: "empty",
  }, // For compatibility with v1.3.2.
  buttonborderColor: {
	type: "string",
	default: "empty",
  }, // For compatibility with v1.3.2.
  buttonborderWidth: {
	type: "number",
	default: 999,
  }, // For compatibility with v1.3.2.
  ctaBackgroundColor: {
	type: "string",
	default: "empty",
  }, // For compatibility with v1.3.2.
  headingLineHeight: {
	type: "number",
	default: 999,
  }, // For compatibility with v1.3.2.
  headingFontWeight: {
	type: "string",
	default: 'empty',
  }, // For compatibility with v1.3.2.
  contentLineHeight: {
	  type: "number",
	  default: 999,
  }, // For compatibility with v1.3.2.
  contentFontWeight: {
	  type: "string",
	  default: 'empty',
  }, // For compatibility with v1.3.2.
  blockIsTypographyColorValueUpdated: {
    type: 'boolean',
    default: false,
  },
  ctaTitleTypographyColor: {
    type: 'string',
  },
  ctaTitleBottomSpacing: {
    type: 'number',
    default: 25,
  },
  ctaTitleBottomSpacingMobile: {
    type: 'number',
    default: 25,
  },
  ctaTitleBottomSpacingTablet: {
    type: 'number',
    default: 25,
  },
  ctaTextBottomSpacing: {
    type: 'number',
    default: 28,
  },
  ctaTextBottomSpacingMobile: {
    type: 'number',
    default: 28,
  },
  ctaTextBottomSpacingTablet: {
    type: 'number',
    default: 28,
  },
  backgroundPosition: {
    type: 'string',
    default: "center center",
  },
  backgroundPositionMobile: {
    type: 'string',
    default: "center center",
  },
  backgroundPositionTablet: {
    type: 'string',
    default: "center center",
  },
  backgroundRepeat: {
    type: 'string',
    default: "no-repeat",
  },
  backgroundSize: {
    type: 'string',
    default: "cover",
  },
  backgroundSizeTablet: {
    type: 'string',
    default: "cover",
  },
  backgroundSizeMobile: {
    type: 'string',
    default: "cover",
  },
  backgroundImageValueUpdated: {
    type: "boolean",
    default: false,
  },
};
export default attributes;
