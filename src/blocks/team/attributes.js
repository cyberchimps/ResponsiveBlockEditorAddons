const ITEM_COUNT = 2;

const { __ } = wp.i18n;

const teamBlock = [];

for (var i = 1; i <= ITEM_COUNT; i++) {
  teamBlock.push({
    teamName: __("John Doe", "responsive-block-editor-addons"),
    teamDesignation: __("Designation", "responsive-block-editor-addons"),
    teamDescription: __(
      "Click here to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
      "responsive-block-editor-addons"
    ),
    teamImgURL: "",
    teamImgId: "",
    twitterUrl: "",
    facebookUrl: "",
    linkedinUrl: "",
    instagramUrl: "",
    youtubeUrl: "",
    pinterestUrl: "",
    emailAddress: "",
  });
}

const attributes = {
  block_id: {
    type: "string",
  },
  teamBlock: {
    type: "array",
    default: teamBlock,
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
  designationColor: {
    type: "string",
  },
  descriptionColor: {
    type: "string",
  },
  socialIconColor: {
    type: "string",
    default: "#0066CC",
  },
  titleColor: {
    type: "string",
  },
  titleFontWeight: {
    type: "string",
  },
  designationFontWeight: {
    type: "string",
  },
  descriptionFontWeight: {
    type: "string",
  },
  titleLineHeight: {
    type: "number",
  },
  designationLineHeight: {
    type: "number",
  },
  descriptionLineHeight: {
    type: "number",
  },
  imageSize: {
    type: "string",
    default: "full",
  },
  titleFontFamily: {
    type: "string",
  },
  designationFontFamily: {
    type: "string",
  },
  descriptionFontFamily: {
    type: "string",
  },
  titleFontSize: {
    type: "number",
    default: 23,
  },
  designationFontSize: {
    type: "number",
    default: 15,
  },
  descriptionFontSize: {
    type: "number",
    default: 15,
  },
  socialIconFontSize: {
    type: "number",
    default: 23,
  },
  imageMarginTop: {
    type: "number",
  },
  imageMarginBottom: {
    type: "number",
  },
  imageMarginTopMobile: {
    type: "number",
  },
  imageMarginBottomMobile: {
    type: "number",
  },
  imageMarginTopTablet: {
    type: "number",
  },
  imageMarginBottomTablet: {
    type: "number",
  },
  iconSize: {
    type: "number",
  },
  titleSpacing: {
    type: "number",
  },
  designationSpacing: {
    type: "number",
  },
  descriptionSpacing: {
    type: "number",
  },
  socialIconSpacing: {
    type: "number",
  },
  titleSpacingMobile: {
    type: "number",
  },
  designationSpacingMobile: {
    type: "number",
  },
  descriptionSpacingMobile: {
    type: "number",
  },
  socialIconSpacingMobile: {
    type: "number",
  },
  titleSpacingTablet: {
    type: "number",
  },
  designationSpacingTablet: {
    type: "number",
  },
  descriptionSpacingTablet: {
    type: "number",
  },
  socialIconSpacingTablet: {
    type: "number",
  },
  imageStyle: {
    type: "number",
    default: "0%",
  },
  imageWidth: {
    type: "number",
    default: 120,
  },
  imageWidthTablet: {
    type: "number",
  },
  imageWidthMobile: {
    type: "number",
  },
  backgroundColor: {
    type: "string",
  },
  borderColor: {
    type: "string",
  },
  borderWidth: {
    type: "number",
    default: 2,
  },
  borderRadius: {
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
    default: 2,
  },
  alignment: {
    type: "string",
    default: "center",
  },
  imageShape: {
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
  opacity: {
    type: "number",
    default: 50,
  },
  backgroundColor2: {
    type: "string",
  },
  gradientDirection: {
    type: "number",
    default: 90,
  },
  colorLocation1: {
    type: "number",
    default: 0,
  },
  colorLocation2: {
    type: "number",
    default: 100,
  },
  bgGradient: {
    type: "bool",
  },
  backgroundImage: {
    type: "string",
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
  backgroundAttachment: {
    type: "string",
    default: "scroll",
  },
  showImage: {
    type: "bool",
    default: true,
  },
  showName: {
    type: "bool",
    default: true,
  },
  showDesignation: {
    type: "bool",
    default: true,
  },
  showDescription: {
    type: "bool",
    default: true,
  },
  showSocialIcons: {
    type: "bool",
    default: true,
  },
  facebook: {
    type: "bool",
  },
  twitter: {
    type: "bool",
  },
  linkedin: {
    type: "bool",
  },
  instagram: {
    type: "bool",
  },
  email: {
    type: "bool",
  },
  youtube: {
    type: "bool",
  },
  pinterest: {
    type: "bool",
  },
  stack: {
    type: "string",
    default: "mobile",
  },
  titleFontSizeMobile: {
	  type: "number",
  },
  titleFontSizeTablet: {
	  type: "number",
  },
  designationFontSizeMobile: {
	  type: "number",
  },
  designationFontSizeTablet: {
	  type: "number",
  },
  descriptionFontSizeMobile: {
	  type: "number",
  },
  descriptionFontSizeTablet: {
	  type: "number",
  },
  socialIconBorderColor: {
    type: "string",
  },
  socialIconHoverColor: {
    type: "string",
  },
  socialIconBackgroundHoverColor: {
    type: "string",
  },
  socialIconBackgroundColor: {
    type: "string",
  },
  socialIconBorderHoverColor: {
    type: "string",
  },
  iconBackgroundSize: {
    type: "number",
  },
  iconBorderSize: {
    type: "number",
    default: 0
  },
  iconBorderRadius: {
    type: "number",
  },
  iconTopRadius: {
    type: "number",
    default: 0,
  },
  iconRightRadius: {
    type: "number",
    default: 0,
  },
  iconBottomRadius: {
    type: "number",
    default: 0,
  },
  iconLeftRadius: {
    type: "number",
    default: 0,
  },
  iconTopRadiusTablet: {
    type: "number",
    default: 0,
  },
  iconRightRadiusTablet: {
    type: "number",
    default: 0,
  },
  iconBottomRadiusTablet: {
    type: "number",
    default: 0,
  },
  iconLeftRadiusTablet: {
    type: "number",
    default: 0,
  },
  iconTopRadiusMobile: {
    type: "number",
    default: 0,
  },
  iconRightRadiusMobile: {
    type: "number",
    default: 0,
  },
  iconBottomRadiusMobile: {
    type: "number",
    default: 0,
  },
  iconLeftRadiusMobile: {
    type: "number",
    default: 0,
  },
  iconIsRadiusControlConnected: {
    type: "boolean",
    default: false,
  },
  iconIsRadiusValueUpdated: {
    type: "boolean",
    default: false,
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
  titleTypographyColor: {
    type: 'string',
  },
  descriptionTypographyColor: {
    type: 'string',
  },
  designationTypographyColor: {
    type: 'string',
  },
  designationBottomSpacing: {
    type: "number",
  },
  designationBottomSpacingMobile: {
    type: "number",
  },
  designationBottomSpacingTablet: {
    type: "number",
  },
  descriptionBottomSpacing: {
    type: "number",
  },
  descriptionBottomSpacingMobile: {
    type: "number",
  },
  descriptionBottomSpacingTablet: {
    type: "number",
  },
  titleBottomSpacing: {
    type: "number",
  },
  titleBottomSpacingMobile: {
    type: "number",
  },
  titleBottomSpacingTablet: {
    type: "number",
  },
  backgroundImageValueUpdated: {
    type: "boolean",
    default: false,
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
