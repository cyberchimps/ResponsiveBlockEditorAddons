const ITEM_COUNT = 3;

const featureGrid = [];

for (var i = 1; i <= ITEM_COUNT; i++) {
  featureGrid.push({
    title: "Title ",
    desc: "Description for this block. You can use this space for describing your block.",
    img_url: "",
    img_id: "",
    img_width: "",
    img_height: "",
    button: "Button Text",
    buttonURL: "#",
  });
}

const attributes = {
  block_id: {
    type: "string",
  },
  featureGrid: {
    type: "array",
    default: featureGrid,
  },
    gutter: {
        type: "string",
        default: "medium",
    },
    layout: {
        type: "string",
        default: "plain",
    },
    blockId: {
    type: "string",
  },
  count: {
    type: "number",
    default: ITEM_COUNT,
  },
    titleTag: {
    type: "string",
    default: "h5",
  },
  contentAlign: {
    type: "string",
    default: "center",
  },
  titleColor: {
    type: "string",
  },
  descColor: {
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
    default: 12,
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
  sectionTag: {
    type: "string",
    default: "section",
  },
  opacity: {
    type: "number",
    default: 30,
  },
  blockBackColorOpacity: {
    type: "number",
    default: 100,
  },
  columnBackColorOpacity: {
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
  backgroundColor: {
    type: "string",
  },
  backgroundColor1: {
    type: "string",
  },
  backgroundColor2: {
    type: "string",
    default: "#fff",
  },
  backgroundType: {
    type: "string",
    default: "none",
  },
  blockopacity: {
    type: "number",
    default: 30,
  },
  blockcolorLocation1: {
    type: "number",
    default: 0,
  },
  blockcolorLocation2: {
    type: "number",
    default: 100,
  },
  blockgradientDirection: {
    type: "number",
    default: 90,
  },
  blockbackgroundImage: {
    type: "string",
  },
  blockbackgroundColor: {
    type: "string",
  },
  blockbackgroundColor1: {
    type: "string",
  },
  blockbackgroundColor2: {
    type: "string",
    default: "#fff",
  },
  blockbackgroundType: {
    type: "string",
    default: "none",
  },
  boxShadowColor: {
    type: "string",
    default: "#e9e7e7",
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
    default: 2,
  },
  boxShadowSpread: {
    type: "number",
    default: 1,
  },
  boxShadowPosition: {
    type: "string",
    default: "outset",
  },
  buttonBoxShadowColor: {
    type: "string",
  },
  buttonBoxShadowHOffset: {
    type: "number",
    default: 0,
  },
  buttonBoxShadowVOffset: {
    type: "number",
    default: 0,
  },
  buttonBoxShadowBlur: {
    type: "number",
    default: 0,
  },
  buttonBoxShadowSpread: {
    type: "number",
    default: 0,
  },
  buttonBoxShadowPosition: {
    type: "string",
    default: "outset",
  },
    ctaDesign: {
    type: "string",
    default: "plain",
  },
  ctaColor: {
    type: "string",
  },
  ctaBackColor: {
    type: "string",
  },
  ctaHoverColor: {
    type: "string",
  },
  ctaHoverBackColor: {
    type: "string",
  },
  ctaBorderColor: {
    type: "string",
  },
  ctaBorderStyle: {
    type: "string",
    default: "none",
  },
  ctaBorderRadius: {
    type: "number",
  },
  ctaBorderWidth: {
    type: "number",
  },
  ctaHpadding: {
    type: "number",
  },
  ctaVpadding: {
    type: "number",
  },
  buttonbackgroundType: {
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
    default: "#fff",
  },
  buttonbackgroundColor2: {
    type: "string",
    default: "#fff",
  },
  buttonHbackgroundType: {
    type: "string",
    default: "color",
  },
  buttonHcolorLocation1: {
    type: "number",
    default: 0,
  },
  buttonHcolorLocation2: {
    type: "number",
    default: 100,
  },
  buttonHgradientDirection: {
    type: "number",
    default: 90,
  },
  buttonHbackgroundColor1: {
    type: "string",
  },
  buttonHbackgroundColor2: {
    type: "string",
    default: "#fff",
  },
  titleFontFamily: {
    type: "string",
  },
  descFontFamily: {
    type: "string",
  },
  ctaFontFamily: {
    type: "string",
  },
  titleFontSize: {
    type: "number",
  },
  titleFontWeight: {
    type: "string",
  },
  titleLineHeight: {
    type: "number",
  },
  descFontSize: {
    type: "number",
  },
  descFontWeight: {
    type: "string",
  },
  descLineHeight: {
    type: "number",
  },
  titleTextTransform: {
    type: "string",
  },
  descTextTransform: {
    type: "string",
  },
  ctaFontSize: {
    type: "number",
  },
  ctaFontWeight: {
    type: "string",
  },
  ctaLineHeight: {
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
  columnTopPadding: {
    type: "number",
    default: 60,
  },
  columnBottomPadding: {
    type: "number",
      default: 60,
  },
  columnLeftPadding: {
    type: "number",
      default: 35,
  },
  columnRightPadding: {
    type: "number",
      default: 35,
  },
  columnTopPaddingMobile: {
    type: "number",
    default: '',
  },
  columnBottomPaddingMobile: {
    type: "number",
    default: '',
  },
  columnLeftPaddingMobile: {
    type: "number",
    default: '',
  },
  columnRightPaddingMobile: {
    type: "number",
    default: '',
  },
  columnTopPaddingTablet: {
    type: "number",
    default: '',
  },
  columnBottomPaddingTablet: {
    type: "number",
    default: '',
  },
  columnLeftPaddingTablet: {
    type: "number",
    default: '',
  },
  columnRightPaddingTablet: {
    type: "number",
    default: '',
  },
  showImage: {
    type: "boolean",
    default: true,
  },
  showTitle: {
    type: "boolean",
    default: true,
  },
  showDesc: {
    type: "boolean",
    default: true,
  },
  showButton: {
    type: "boolean",
    default: true,
  },
  buttonTarget: {
    type: "boolean",
    default: false,
  },
  imageSpace: {
    type: "number",
      default: 15,
  },
  titleSpace: {
    type: "number",
      default: 15,
  },
  descSpace: {
    type: "number",
    default: 20,
  },
  buttonSpace: {
    type: "number",
      default: 15,
  },
    imageSpaceMobile: {
    type: "number",
  },
  titleSpaceMobile: {
    type: "number",
  },
  descSpaceMobile: {
    type: "number",
  },
  buttonSpaceMobile: {
    type: "number",
  },
    imageSpaceTablet: {
    type: "number",
  },
  titleSpaceTablet: {
    type: "number",
  },
  descSpaceTablet: {
    type: "number",
  },
  buttonSpaceTablet: {
    type: "number",
  },
  blockAlign: {
    type: "string",
    default: "center",
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
  imageSize: {
    type: "string",
    default: "full",
  },
  imageShape: {
    type: "string",
  },
  ctaHoverBorderColor: {
    type: "string",
    defaulr: "#333",
  },
  ctaHpaddingTablet: {
    type: "number",
    default: '',
  },
  ctaHpaddingMobile: {
    type: "number",
    default: '',
  },
  ctaVpaddingTablet: {
    type: "number",
    default: '',
  },
  ctaVpaddingMobile: {
    type: "number",
    default: '',
  },
  titleFontSizeMobile: {
    type: "number",
  },
  titleFontSizeTablet: {
    type: "number",
  },
  descFontSizeMobile: {
    type: "number",
  },
  descFontSizeTablet: {
    type: "number",
  },
  ctaFontSizeMobile: {
    type: "number",
  },
  ctaFontSizeTablet: {
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
  columnIsPaddingControlConnected: {
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
  blockIsTypographyColorValueUpdated: {
    type: 'boolean',
    default: false,
  },
  titleTypographyColor: {
    type: 'string',
  },
  descTypographyColor: {
    type: 'string',
  },
  ctaButtonTopPadding: {
    type: "number",
  },
  ctaButtonBottomPadding: {
    type: "number",
  },
  ctaButtonLeftPadding: {
    type: "number",
  },
  ctaButtonRightPadding: {
    type: "number",
  },
  ctaButtonTopPaddingTablet: {
    type: "number",
  },
  ctaButtonBottomPaddingTablet: {
    type: "number",
  },
  ctaButtonRightPaddingTablet: {
    type: "number",
  },
  ctaButtonLeftPaddingTablet: {
    type: "number",
  },
  ctaButtonTopPaddingMobile: {
    type: "number",
  },
  ctaButtonBottomPaddingMobile: {
    type: "number",
  },
  ctaButtonLeftPaddingMobile: {
    type: "number",
  },
  ctaButtonRightPaddingMobile: {
    type: "number",
  },
  isCtaButtonPaddingMarginValueUpdated: {
    type: "boolean",
    default: false,
  },
  ctaBlockTopRadius: {
    type: "number",
  },
  ctaBlockRightRadius: {
    type: "number",
  },
  ctaBlockBottomRadius: {
    type: "number",
  },
  ctaBlockLeftRadius: {
    type: "number",
  },
  ctaBlockTopRadiusTablet: {
    type: "number",
  },
  ctaBlockRightRadiusTablet: {
    type: "number",
  },
  ctaBlockBottomRadiusTablet: {
    type: "number",
  },
  ctaBlockLeftRadiusTablet: {
    type: "number",
  },
  ctaBlockTopRadiusMobile: {
    type: "number",
  },
  ctaBlockRightRadiusMobile: {
    type: "number",
  },
  ctaBlockBottomRadiusMobile: {
    type: "number",
  },
  ctaBlockLeftRadiusMobile: {
    type: "number",
  },
  isCtaButtonBorderRadiusValueUpdated: {
    type: "boolean",
    default: false,
  },
};
export default attributes;
