const ITEM_COUNT = 3;

const testimonial_block = [];

for (var i = 1; i <= ITEM_COUNT; i++) {
  var desc_text =
    "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.";
  var author_text = "John Doe ";
  var company_text = "Company" + i;
  testimonial_block.push({
    description: [desc_text],
    name: [author_text],
    company: [company_text],
    image: "",
  });
}

const attributes = {
  test_item_count: {
    type: "number",
    default: ITEM_COUNT,
  },
  classMigrate: {
    type: "boolean",
    default: false,
  },
  test_block: {
    type: "array",
    default: testimonial_block,
  },
  skin: {
    type: "string",
    default: "default",
  },
  bubblePadding: {
    type: "number",
    default: 20,
  },
  bubbleBorderRadius: {
    type: "number",
    default: 0,
  },
  bubbleTopRadius: {
    type: "number",
    default: 0,
  },
  bubbleRightRadius: {
    type: "number",
    default: 0,
  },
  bubbleBottomRadius: {
    type: "number",
    default: 0,
  },
  bubbleLeftRadius: {
    type: "number",
    default: 0,
  },
  bubbleTopRadiusTablet: {
    type: "number",
    default: 0,
  },
  bubbleRightRadiusTablet: {
    type: "number",
    default: 0,
  },
  bubbleBottomRadiusTablet: {
    type: "number",
    default: 0,
  },
  bubbleLeftRadiusTablet: {
    type: "number",
    default: 0,
  },
  bubbleTopRadiusMobile: {
    type: "number",
    default: 0,
  },
  bubbleRightRadiusMobile: {
    type: "number",
    default: 0,
  },
  bubbleBottomRadiusMobile: {
    type: "number",
    default: 0,
  },
  bubbleLeftRadiusMobile: {
    type: "number",
    default: 0,
  },
  bubbleIsRadiusControlConnected: {
		type: "boolean",
		default: false,
	},
  bubbleIsRadiusValueUpdated: {
    type: "boolean",
    default: false,
  },
  bubbleColor: {
    type: "string",
    default: "center",
  },
  headingAlign: {
    type: "string",
    default: "center",
  },
  headingAlignMobile: {
    type: "string",
    default: "center",
  },
  headingAlignTablet: {
    type: "string",
    default: "center",
  },
  descColor: {
    type: "string",
    default: "#333",
  },
  companyColor: {
    type: "string",
    default: "#888888",
  },
  authorColor: {
    type: "string",
    default: "#333",
  },
  iconimgStyle: {
    type: "string",
    default: "circle",
  },
  imagePosition: {
    type: "string",
    default: "bottom",
  },
  imageAlignment: {
    type: "string",
    default: "top",
  },

  nameFontSizeType: {
    type: "string",
    default: "px",
  },
  nameFontSize: {
    type: "number",
  },
  nameFontSizeTablet: {
    type: "number",
  },
  nameFontSizeMobile: {
    type: "number",
  },
  nameFontFamily: {
    type: "string",
    default: "",
  },
  nameFontWeight: {
    type: "string",
  },
  nameFontSubset: {
    type: "string",
  },
  nameLineHeightType: {
    type: "string",
    default: "em",
  },
  nameLineHeight: {
    type: "number",
  },
  nameLineHeightTablet: {
    type: "number",
  },
  nameLineHeightMobile: {
    type: "number",
  },
  nameLoadGoogleFonts: {
    type: "boolean",
    default: false,
  },

  companyFontSizeType: {
    type: "string",
    default: "px",
  },
  companyFontSize: {
    type: "number",
  },
  companyFontSizeTablet: {
    type: "number",
  },
  companyFontSizeMobile: {
    type: "number",
  },
  companyFontFamily: {
    type: "string",
    default: "",
  },
  companyFontWeight: {
    type: "string",
  },
  companyFontSubset: {
    type: "string",
  },
  companyLineHeightType: {
    type: "string",
    default: "em",
  },
  companyLineHeight: {
    type: "number",
  },
  companyLineHeightTablet: {
    type: "number",
  },
  companyLineHeightMobile: {
    type: "number",
  },
  companyLoadGoogleFonts: {
    type: "boolean",
    default: false,
  },

  descFontSizeType: {
    type: "string",
    default: "px",
  },
  descFontSize: {
    type: "number",
  },
  descFontSizeTablet: {
    type: "number",
  },
  descFontSizeMobile: {
    type: "number",
  },
  descFontFamily: {
    type: "string",
    default: "",
  },
  descFontWeight: {
    type: "string",
  },
  descFontSubset: {
    type: "string",
  },
  descLineHeightType: {
    type: "string",
    default: "em",
  },
  descLineHeight: {
    type: "number",
  },
  descLineHeightTablet: {
    type: "number",
  },
  descLineHeightMobile: {
    type: "number",
  },
  descLoadGoogleFonts: {
    type: "boolean",
    default: false,
  },
  nameSpace: {
    type: "number",
    default: 5,
  },
  nameSpaceMobile: {
    type: "number",
    default: 5,
  },
  nameSpaceTablet: {
    type: "number",
    default: 5,
  },
  descSpace: {
    type: "number",
    default: 15,
  },
  descSpaceMobile: {
    type: "number",
    default: 15,
  },
  descSpaceTablet: {
    type: "number",
    default: 15,
  },
  block_id: {
    type: "string",
    default: "not_set",
  },
  authorSpace: {
    type: "number",
    default: 5,
  },
  imgVrPadding: {
    type: "number",
    default: 10,
  },
  imgHrPadding: {
    type: "number",
    default: 10,
  },
  imgVrPaddingMobile: {
    type: "number",
    default: 10,
  },
  imgHrPaddingMobile: {
    type: "number",
    default: 10,
  },
  imgVrPaddingTablet: {
    type: "number",
    default: 10,
  },
  imgHrPaddingTablet: {
    type: "number",
    default: 10,
  },
  imgTopPadding: {
    type: "number",
    default: 10,
  },
  imgBottomPadding: {
    type: "number",
    default: 10,
  },
  iconImage: {
    type: "object",
    default: {
      url: "",
      alt: "InfoBox placeholder img",
    },
  },
  imageSize: {
    type: "string",
    default: "thumbnail",
  },
  imageWidth: {
    type: "number",
    default: 60,
  },
  columns: {
    type: "number",
    default: 1,
  },
  tcolumns: {
    type: "number",
    default: 1,
  },
  mcolumns: {
    type: "number",
    default: 1,
  },
  pauseOnHover: {
    type: "boolean",
    default: true,
  },
  infiniteLoop: {
    type: "boolean",
    default: true,
  },
  transitionSpeed: {
    type: "number",
    default: 500,
  },
  autoplay: {
    type: "boolean",
    default: true,
  },
  autoplaySpeed: {
    type: "number",
    default: 2000,
  },
  arrowDots: {
    type: "string",
    default: "arrows_dots",
  },
  arrowSize: {
    type: "number",
    default: 20,
  },
  arrowBorderWidth: {
    type: "number",
    default: 1,
  },
  arrowBorderRadius: {
    type: "number",
    default: 0,
  },
  arrowTopRadius: {
    type: "number",
    default: 0,
  },
  arrowRightRadius: {
    type: "number",
    default: 0,
  },
  arrowBottomRadius: {
    type: "number",
    default: 0,
  },
  arrowLeftRadius: {
    type: "number",
    default: 0,
  },
  arrowTopRadiusTablet: {
    type: "number",
    default: 0,
  },
  arrowRightRadiusTablet: {
    type: "number",
    default: 0,
  },
  arrowBottomRadiusTablet: {
    type: "number",
    default: 0,
  },
  arrowLeftRadiusTablet: {
    type: "number",
    default: 0,
  },
  arrowTopRadiusMobile: {
    type: "number",
    default: 0,
  },
  arrowRightRadiusMobile: {
    type: "number",
    default: 0,
  },
  arrowBottomRadiusMobile: {
    type: "number",
    default: 0,
  },
  arrowLeftRadiusMobile: {
    type: "number",
    default: 0,
  },
  arrowIsRadiusControlConnected: {
		type: "boolean",
		default: false,
	},
  arrowIsRadiusValueUpdated: {
    type: "boolean",
    default: false,
  },
    arrowBorderColor: {
        type: "string",
    },
    arrowBorderStyle: {
        type: "string",
    },
    rowGap: {
    type: "number",
    default: 10,
  },
  columnGap: {
    type: "number",
    default: 10,
  },
  contentPadding: {
    type: "number",
    default: 5,
  },
  rowGapMobile: {
    type: "number",
    default: 10,
  },
  columnGapMobile: {
    type: "number",
    default: 10,
  },
  contentPaddingMobile: {
    type: "number",
    default: 5,
  },
  rowGapTablet: {
    type: "number",
    default: 10,
  },
  columnGapTablet: {
    type: "number",
    default: 10,
  },
  contentPaddingTablet: {
    type: "number",
    default: 5,
  },
  backgroundType: {
    type: "string",
  },
  backgroundImage: {
    type: "string",
  },
  backgroundImagePosition: {
    type: "string",
    default: "center center",
  },
  backgroundImageSize: {
    type: "string",
    default: "cover",
  },
  backgroundImageRepeat: {
    type: "string",
    default: "no-repeat",
  },
  backgroundColor: {
    type: "string",
  },
  backgroundAttachment: {
    type: "string",
    default: "scroll",
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
  opacity: {
    type: "number",
    default: 20,
  },
  backgroundImageColor: {
    type: "string",
  },
    blockBorderStyle: {
    type: "string",
    default: "none",
  },
    blockBorderWidth: {
    type: "number",
    default: "1",
  },
    blockBorderRadius: {
    type: "number",
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
  backgroundOpacity: {
    type: "number",
    default: 50,
  },
  arrowColor: {
    type: "string",
    default: "#333",
  },
  stack: {
    type: "string",
    default: "tablet",
  },
  blockPadding: {
    type: "number",
    default: 45,
  },
  blockPaddingMobile: {
    type: "number",
    default: 45,
  },
  blockPaddingTablet: {
    type: "number",
    default: 45,
  },
  backgroundRepeat: {
	type: "string",
	default: "no-repeat",
  }, // For compatibility with v1.3.2.
  backgroundSize: {
	type: "string",
	default: "cover",
  }, // For compatibility with v1.3.2.
  borderStyle: {
	type: "string",
	default: "empty",
  }, // For compatibility with v1.3.2.
  borderColor: {
	type: "string",
	default: "empty",
  }, // For compatibility with v1.3.2.
  borderWidth: {
	type: "number",
	default: 999,
  }, // For compatibility with v1.3.2.
  borderRadius: {
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
		default: 45,
	},
	blockTopPaddingMobile: {
		type: "number",
		default: 45,
	},
	blockTopPaddingTablet: {
		type: "number",
		default: 45,
	},
	blockBottomPadding: {
		type: "number",
		default: 45,
	},
	blockBottomPaddingMobile: {
		type: "number",
		default: 45,
	},
	blockBottomPaddingTablet: {
		type: "number",
		default: 45,
	},
	blockLeftPadding: {
		type: "number",
		default: 45,
	},
	blockLeftPaddingMobile: {
		type: "number",
		default: 45,
	},
	blockLeftPaddingTablet: {
		type: "number",
		default: 45,
	},
	blockRightPadding: {
		type: "number",
		default: 45,
	},
	blockRightPaddingMobile: {
		type: "number",
		default: 45,
	},
	blockRightPaddingTablet: {
		type: "number",
		default: 45,
	},
  newSpacingValuesUpdated: {
    type: "boolean",
    default: false,
  },
  blockIsTypographyColorValueUpdated: {
    type: 'boolean',
    default: false,
  },
  descTypographyColor: {
    type: 'string',
    default: '#333',
  },
  nameTypographyColor: {
    type: 'string',
    default: '#333',
  },
  companyTypographyColor: {
    type: 'string',
    default: '#888888',
  },
  descBottomSpacing: {
    type: 'number',
    default: 15,
  },
  descBottomSpacingMobile: {
    type: 'number',
    default: 15,
  },
  descBottomSpacingTablet: {
    type: 'number',
    default: 15,
  },
  nameBottomSpacing: {
    type: 'number',
    default: 5,
  },
  nameBottomSpacingMobile: {
    type: 'number',
    default: 5,
  },
  nameBottomSpacingTablet: {
    type: 'number',
    default: 5,
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
  backgroundColor1: {
    type: "string",
  },
  backgroundType: {
    type: "string",
    default: "none",
  },
};

export default attributes;
