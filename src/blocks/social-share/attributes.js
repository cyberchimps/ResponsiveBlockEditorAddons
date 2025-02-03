const attributes = {
  block_id: {
    type: "string",
  },
  socialMediaIcons: {
    type: "array",
    default: [
      {
        icon: "facebook",
        label: "Facebook",
        id: "facebook",
        url: "https://facebook.com/",
        newTab: false,
      },
      {
        icon: "twitter",
        label: "Twitter",
        id: "twitter",
        url: "https://twitter.com/",
        newTab: false,
      },
      {
        icon: "linkedin",
        label: "LinkedIn",
        id: "linkedin",
        url: "https://linkedin.com/",
        newTab: false,
      },
      {
        icon: "youtube",
        label: "YouTube",
        id: "youtube",
        url: "https://youtube.com/user/",
        newTab: false,
      },
    ],
  },
  iconShape: {
    type: "string",
    default: "square",
  },
  iconColorType: {
    type: "string",
    default: "official",
  },
  iconPrimaryColor: {
    type: "string",
    default: "#0112ff",
  },
  iconSecondaryColor: {
    type: "string",
    default: "#e4f3ff"
  },
  iconSize: {
    type: "number",
    default: 30,
  },
  iconColumns: {
    type: "string",
    default: "auto",
  },
  iconColumnsMobile: {
    type: "string",
    default: "2",
  },
  iconColumnsTablet: {
    type: "string",
    default: "auto",
  },
  iconColumnsGap: {
    type: "number",
    default: 15,
  },
  iconRowsGap: {
    type: "number",
    default: 10,
  },
  iconsAlign: {
    type: "string",
    default: "left",
  },
  iconContainerHeight: {
    type: "number",
    default: 5,
  },
  iconContainerSize: {
    type: "number",
    default: 5,
  },
  socialZindex: {
    type: "number",
  },
  blockTopPadding: {
    type: "number",
    default: '',
  },
  blockBottomPadding: {
    type: "number",
    default: '',
  },
  blockLeftPadding: {
    type: "number",
    default: '',
  },
  blockRightPadding: {
    type: "number",
    default: '',
  },
  blockTopPaddingTablet: {
    type: "number",
    default: '',
  },
  blockBottomPaddingTablet: {
    type: "number",
    default: '',
  },
  blockLeftPaddingTablet: {
    type: "number",
    default: '',
  },
  blockRightPaddingTablet: {
    type: "number",
    default: '',
  },
  blockTopPaddingMobile: {
    type: "number",
    default: '',
  },
  blockBottomPaddingMobile: {
    type: "number",
    default: '',
  },
  blockLeftPaddingMobile: {
    type: "number",
    default: '',
  },
  blockRightPaddingMobile: {
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
  labelFontFamily: {
    type: "string",
  },
  labelFontSize: {
    type: "number",
    default: "Default",
  },
  labelFontSizeMobile: {
    type: "number",
  },
  labelFontSizeTablet: {
    type: "number",
  },
  labelFontWeight: {
    type: "string",
    default: "500",
  },
  labelLineHeight: {
    type: "number",
    default: 1,
  },
  iconLabelGap: {
    type: "number",
    default: 5,
  },
  labelColor: {
    type: "string",
    default: '#333',
  },
  viewOption: {
    type: "string",
    default: "icontext",
  },
  skin: {
    type: "string",
    default: "default",
  },
  blockBorderStyle: {
    type: "string",
    default: "none",
  },
  blockBorderWidth: {
    type: "number",
    default: 2,
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
  backgroundColor: {
    type: "string",
  },
  opacity: {
    type: "number",
    default: 100,
  },
  currentColumnTab: {
    type: "string",
    default: "desktop",
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
  blockIsMarginControlConnected: {
		type: "boolean",
		default: false,
	},
  blockIsPaddingControlConnected: {
		type: "boolean",
		default: false,
	},
  blockIsTypographyColorValueUpdated : {
    type: "boolean",
    default: false,
  },
  labelTypographyColor : {
    type: "string",
    default: "#333",
  },
  iconContainerTopPadding: {
    type: "number",
    default: 5,
  },
  iconContainerBottomPadding: {
    type: "number",
    default: 5,
  },
  iconContainerLeftPadding: {
    type: "number",
    default: 5,
  },
  iconContainerRightPadding: {
    type: "number",
    default: 5,
  },
  iconContainerTopPaddingTablet: {
    type: "number",
    default: 5,
  },
  iconContainerBottomPaddingTablet: {
    type: "number",
    default: 5,
  },
  iconContainerRightPaddingTablet: {
    type: "number",
    default: 5,
  },
  iconContainerLeftPaddingTablet: {
    type: "number",
    default: 5,
  },
  iconContainerTopPaddingMobile: {
    type: "number",
    default: 5,
  },
  iconContainerBottomPaddingMobile: {
    type: "number",
    default: 5,
  },
  iconContainerLeftPaddingMobile: {
    type: "number",
    default: 5,
  },
  iconContainerRightPaddingMobile: {
    type: "number",
    default: 5,
  },
  isCtaButtonPaddingMarginValueUpdated: {
    type: "boolean",
    default: false,
  }
};

export default attributes;
