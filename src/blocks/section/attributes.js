const attributes = {
  block_id: {
    type: "string",
  },
  blockId: {
    type: "string",
  },
  width: {
    type: "number",
    default: 900,
  },
  innerWidth: {
    type: "number",
    default: 1140,
  },
  innerWidthTablet: {
    type: "number",
  },
  innerWidthMobile: {
    type: "number",
  },
  innerWidthType: {
    type: "string",
    default: "px",
  },
  themeWidth: {
    type: "boolean",
    default: false,
  },
  blockTopPadding: {
    type: "number",
    default: 10,
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
    default: 10,
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
    default: 10,
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
    default: 10,
  },
  blockRightPaddingMobile: {
    type: "number",
    default: '',
  },
  blockRightPaddingTablet: {
    type: "number",
    default: '',
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
    default: "#000",
  },
  sectionTag: {
    type: "string",
    default: "section",
  },
  opacity: {
    type: "number",
    default: 20,
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
  backgroundPosition: {
    type: "string",
    default: "center-center",
  },
  backgroundPositionMobile: {
    type: "string",
    default: "center center",
  },
  backgroundPositionTablet: {
    type: "string",
    default: "center center",
  },
  backgroundSize: {
    type: "string",
    default: "cover",
  },
  backgroundSizeTablet: {
    type: "string",
    default: 'cover',
  },
  backgroundSizeMobile: {
    type: "string",
    default: 'cover'
  },
  backgroundRepeat: {
    type: "string",
    default: "no-repeat",
  },
  backgroundAttachment: {
    type: "string",
    default: "scroll",
  },
  backgroundImageColor: {
    type: "string",
  },
  overlayType: {
    type: "string",
    default: "color",
  },
  gradientOverlayColor1: {
    type: "string",
  },
  gradientOverlayColor2: {
    type: "string",
  },
  gradientOverlayType: {
    type: "string",
    default: "linear",
  },
  gradientOverlayLocation1: {
    type: "number",
    default: 0,
  },
  gradientOverlayLocation2: {
    type: "number",
    default: 100,
  },
  gradientOverlayAngle: {
    type: "number",
    default: 0,
  },
  gradientOverlayPosition: {
    type: "string",
    default: "center center",
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
    default: 0,
  },
  boxShadowSpread: {
    type: "number",
    default: 0,
  },
  boxShadowPosition: {
    type: "string",
    default: "outset",
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
  imagePositionTab: {
    type: "string",
    default: "desktop",
  },
  imageSizeTab: {
    type: "string",
    default: "desktop",
  },
  blockIsMarginControlConnected: {
		type: "boolean",
		default: false,
	},
  blockIsPaddingControlConnected: {
		type: "boolean",
		default: false,
	},
  topMargin: {
	  type: "number",
	  default: 999,
  }, // For compatibility with v1.3.2.
  bottomMargin: {
	type: "number",
	default: 999,
  }, // For compatibility with v1.3.2.
  leftMargin: {
	type: "number",
	default: 999,
  }, // For compatibility with v1.3.2.
  rightMargin: {
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
  topMarginMobile: {
	type: "number",
	default: 999,
  }, // For compatibility with v1.3.2.
  bottomMarginMobile: {
    type: "number",
    default: 999,
  }, // For compatibility with v1.3.2.
  leftMarginMobile: {
    type: "number",
    default: 999,
  }, // For compatibility with v1.3.2.
  rightMarginMobile: {
    type: "number",
    default: 999,
  }, // For compatibility with v1.3.2.
  topPaddingMobile: {
    type: "number",
    default: 999,
  }, // For compatibility with v1.3.2.
  bottomPaddingMobile: {
    type: "number",
    default: 999,
  }, // For compatibility with v1.3.2.
  leftPaddingMobile: {
    type: "number",
    default: 999,
  }, // For compatibility with v1.3.2.
  rightPaddingMobile: {
    type: "number",
    default: 999,
  }, // For compatibility with v1.3.2.
  topMarginTablet: {
	type: "number",
	default: 999,
  }, // For compatibility with v1.3.2.
  bottomMarginTablet: {
	type: "number",
	default: 999,
  }, // For compatibility with v1.3.2.
  leftMarginTablet: {
	type: "number",
	default: 999,
  }, // For compatibility with v1.3.2.
  rightMarginTablet: {
	type: "number",
	default: 999,
  }, // For compatibility with v1.3.2.
  topPaddingTablet: {
	type: "number",
	default: 999,
  }, // For compatibility with v1.3.2.
  bottomPaddingTablet: {
	type: "number",
	default: 999,
  }, // For compatibility with v1.3.2.
  leftPaddingTablet: {
	type: "number",
	default: 999,
  }, // For compatibility with v1.3.2.
  rightPaddingTablet: {
	type: "number",
	default: 999,
  }, // For compatibility with v1.3.2.
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
};

export default attributes;
