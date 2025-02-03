const { __ } = wp.i18n;

const ITEM_COUNT = 2;

const testimonialBlock = [];

for (var i = 1; i <= ITEM_COUNT; i++) {
  testimonialBlock.push({
    testimonialName: __("John Doe", "responsive-block-editor-addons"),
    testimonialTitle: __("Add title/designation", "responsive-block-editor-addons"),
    testimonialContent: __("Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.", "responsive-block-editor-addons"),
    testimonialImgURL: "",
    testimonialImgID: "",
  });
}

const attributes = {
  block_id: {
    type: "string",
  },
  testimonialBlock: {
    type: "array",
    default: testimonialBlock,
  },
  counterId: {
    type: "string",
    default: 1,
  },
  count: {
    type: "number",
    default: ITEM_COUNT,
  },
  gutter: {
    type: "string",
    default: "medium",
  },
  testimonialAlignment: {
    type: "string",
  },
  testimonialBackgroundColor: {
    type: "string",
    default: "#f2f2f2",
  },
  testimonialTextColor: {
    type: "string",
  },
  testimonialNameColor: {
    type: "string",
  },
  testimonialTitleColor: {
    type: "string",
  },
  titleFontSize: {
    type: "number",
  },
  titleLineHeight: {
    type: "number",
  },
  titleFontWeight: {
    type: "string",
  },
  titleTextTransform: {
    type: "string",
  },
  nameFontSize: {
    type: "number",
  },
  nameLineHeight: {
    type: "number",
  },
  imageWidth: {
    type: "number",
  },
  imageWidthTablet: {
    type: "number",
  },
  imageWidthMobile: {
    type: "number",
  },
  nameFontFamily: {
    type: "string",
  },
  titleFontFamily: {
    type: "string",
  },
  contentFontFamily: {
    type: "string",
  },
  nameFontWeight: {
    type: "string",
  },
  nameTextTransform: {
    type: "string",
  },
  contentFontSize: {
    type: "number",
  },
  contentLineHeight: {
    type: "number",
    default: 1.6,
  },
  contentFontWeight: {
    type: "string",
  },
  contentTextTransform: {
    type: "string",
  },
  testimonialCiteAlign: {
    type: "string",
    default: "left",
  },
  backgroundColor: {
    type: "string",
    default: "#f2f2f2",
  },
  blockBorderStyle: {
    type: "string",
    default: "none",
  },
  blockBorderWidth: {
    type: "number",
    default: 1,
  },
  blockBorderColor: {
    type: "string",
  },
  blockBorderRadius: {
    type: "number",
    default: 2,
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
  padding: {
    type: "number",
    default: 20,
  },
  paddingTablet: {
    type: "number",
    default: 20,
  },
  paddingMobile: {
    type: "number",
    default: 20,
  },
  contentSpacing: {
    type: "number",
    default: 8,
  },
  titleSpacing: {
    type: "number",
  },
  nameSpacing: {
    type: "number",
    default: -5,
  },
  imageSpacing: {
    type: "number",
  },
  contentSpacingMobile: {
    type: "number",
    default: 8,
  },
  titleSpacingMobile: {
    type: "number",
  },
  nameSpacingMobile: {
    type: "number",
    default: -5,
  },
  imageSpacingMobile: {
    type: "number",
  },
  contentSpacingTablet: {
    type: "number",
    default: 8,
  },
  titleSpacingTablet: {
    type: "number",
  },
  nameSpacingTablet: {
    type: "number",
    default: -5,
  },
  imageSpacingTablet: {
    type: "number",
  },
  alignment: {
    type: "string",
    default: "center",
  },
  imageShape: {
    type: "string",
  },
  imageSize: {
    type: "string",
    default: "full",
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
  hoverboxShadowColor: {
    type: "string",
    default: "#cccccc",
  },
  hoverboxShadowHOffset: {
    type: "number",
    default: 0,
  },
  hoverboxShadowVOffset: {
    type: "number",
    default: 0,
  },
  hoverboxShadowBlur: {
    type: "number",
    default: 6,
  },
  hoverboxShadowSpread: {
    type: "number",
    default: 1,
  },
  hoverboxShadowPosition: {
    type: "string",
    default: "outset",
  },
  opacity: {
    type: "number",
    default: 0.7,
  },
  gradientDirection: {
    type: "number",
    default: 90,
  },
  bgGradient: {
    type: "boolean",
    default: false,
  },
  backgroundImage: {
    type: "string",
  },
  backgroundPosition: {
    type: "string",
    default: "center center"
  },
  backgroundSize: {
    type: "string",
  },
  backgroundRepeat: {
    type: "string",
  },
  imageHoverEffect: {
    type: "string",
  },
  bggradient: {
    type: "string",
  },
  backgroundColor2: {
    type: "string",
  },
  colorLocation1: {
    type: "number",
    default: 0,
  },
  colorLocation2: {
    type: "number",
    default: 100,
  },
  contentFontSizeMobile: {
	type: "number",
  },
  contentFontSizeTablet: {
	type: "number",
  },
  nameFontSizeMobile: {
	type: "number",
  },
  nameFontSizeTablet: {
	type: "number",
  },
  titleFontSizeMobile: {
	type: "number",
  },
  titleFontSizeTablet: {
	type: "number",
  },
  borderStyle: {
	type: "string",
	default: "empty",
  },//For compatibility with v1.3.2
  borderWidth: {
	type: "number",
	default: 999,
  },//For compatibility with v1.3.2
  borderRadius: {
	type: "number",
	default: 999,
  },//For compatibility with v1.3.2
  borderColor: {
	type: "string",
	default: "empty",
  },//For compatibility with v1.3.2
  secondaryBackgroundColor: {
	type: "string",
	default: "empty",
  }, //For compatibility with v1.3.2.
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
    default: "center center",
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
    default: "#fff",
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
  contentBottomSpacing: {
    type: "number",
    default: 8,
  },
  contentBottomSpacingMobile: {
    type: "number",
    default: 8,
  },
  contentBottomSpacingTablet: {
    type: "number",
    default: 8,
  },
  nameBottomSpacing: {
    type: "number",
    default: -5,
  },
  nameBottomSpacingMobile: {
    type: "number",
    default: -5,
  },
  nameBottomSpacingTablet: {
    type: "number",
    default: -5,
  },
  titleBottomSpacing: {
    type: "number",
    default: 0,
  },
  titleBottomSpacingMobile: {
    type: "number",
    default: 0,
  },
  titleBottomSpacingTablet: {
    type: "number",
    default: 0,
  },
  blockIsTypographyColorValueUpdated: {
    type: "boolean",
    default: false,
  },
  contentTypographyColor: {
    type: "string",
  },
  titleTypographyColor: {
    type: "string",
  },
  nameTypographyColor: {
    type: "string",
  },
  contentTopPadding: {
		type: "number",
		default: 20,
	},
	contentTopPaddingMobile: {
		type: "number",
		default: 20,
	},
	contentTopPaddingTablet: {
		type: "number",
		default: 20,
	},
	contentBottomPadding: {
		type: "number",
		default: 20,
	},
	contentBottomPaddingMobile: {
		type: "number",
		default: 20,
	},
	contentBottomPaddingTablet: {
		type: "number",
		default: 20,
	},
	contentLeftPadding: {
		type: "number",
		default: 20,
	},
	contentLeftPaddingMobile: {
		type: "number",
		default: 20,
	},
	contentLeftPaddingTablet: {
		type: "number",
		default: 20,
	},
	contentRightPadding: {
		type: "number",
		default: 20,
	},
	contentRightPaddingMobile: {
		type: "number",
		default: 20,
	},
	contentRightPaddingTablet: {
		type: "number",
		default: 20,
	},
  testimonialCiteAlignMobile: {
    type: "string",
    default: "left",
  },
  testimonialCiteAlignTablet: {
    type: "string",
    default: "left",
  },
  isAlignmentValueUpdated: {
    type: "boolean",
    default: false,
  }
};

export default attributes;
