const ITEM_COUNT = 2;

const pricingTable = [];
const { __ } = wp.i18n;

for (var i = 1; i <= ITEM_COUNT; i++) {
  pricingTable.push({
    title: __("Plan " + i, "responsive-block-editor-addons"),
    amount: __("99", "responsive-block-editor-addons"),
    currency: __("$", "responsive-block-editor-addons"),
    price_suffix: __(".00", "responsive-block-editor-addons"),
    sub_price: __("SUB PRICE", "responsive-block-editor-addons"),
    features: __("Add features", "responsive-block-editor-addons"),
    img_url: "",
    img_id: "",
    img_width: "",
    img_height: "",
    button: __("Button" + i, "responsive-block-editor-addons"),
    buttonURL: "#",
  });
}

const attributes = {
  block_id: {
    type: "string",
  },
  pricingTable: {
    type: "array",
    default: pricingTable,
  },
  blockId: {
    type: "string",
  },
  count: {
    type: "number",
    default: ITEM_COUNT,
  },
  gutter: {
    type: "string",
    default: "medium",
  },
  contentAlign: {
    type: "string",
    default: "center",
  },
  textColor: {
    type: "string",
  },
  titleColor: {
    type: "string",
  },
  prefixColor: {
    type: "string",
  },
  priceColor: {
    type: "string",
  },
  suffixColor: {
    type: "string",
  },
  subpriceColor: {
    type: "string",
  },
  featuresColor: {
    type: "string",
  },
  itemBackgroundColor: {
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
  ctaColor: {
    type: "string",
    default: "#ffffff",
  },
  ctaBackColor: {
    type: "string",
    default: "#3f46ae",
  },
  ctaHoverColor: {
    type: "string",
    default: "#ffffff",
  },
  ctaHoverBackColor: {
    type: "string",
    default: "#3f46ae",
  },
  ctaBorderColor: {
    type: "string",
    default: "#333",
  },
  ctaBorderStyle: {
    type: "string",
    default: "none",
  },
  ctaBorderRadius: {
    type: "number",
    default: 0,
  },
  ctaBorderWidth: {
    type: "number",
    default: 2,
  },
  ctaHpadding: {
    type: "number",
    default: 30,
  },
  ctaVpadding: {
    type: "number",
    default: 15,
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
  amountFontFamily: {
    type: "string",
  },
  prefixFontFamily: {
    type: "string",
  },
  suffixFontFamily: {
    type: "string",
  },
  subpriceFontFamily: {
    type: "string",
  },
  featuresFontFamily: {
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
  amountFontSize: {
    type: "number",
  },
  amountFontWeight: {
    type: "string",
  },
  amountLineHeight: {
    type: "number",
  },
  subpriceFontSize: {
    type: "number",
  },
  subpriceFontWeight: {
    type: "string",
  },
  subpriceLineHeight: {
    type: "number",
  },
  subpriceTextTransform: {
    type: "string",
    default: "uppercase",
  },
  prefixFontSize: {
    type: "number",
  },
  prefixFontWeight: {
    type: "string",
  },
  prefixLineHeight: {
    type: "number",
  },
  suffixFontSize: {
    type: "number",
  },
  suffixFontWeight: {
    type: "string",
  },
  suffixLineHeight: {
    type: "number",
  },
  featuresFontSize: {
    type: "number",
  },
  featuresFontWeight: {
    type: "string",
  },
  featuresLineHeight: {
    type: "number",
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
    default: 64,
  },
  columnBottomPadding: {
    type: "number",
    default: 64,
  },
  columnLeftPadding: {
    type: "number",
    default: 24,
  },
  columnRightPadding: {
    type: "number",
    default: 24,
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
  showPrefix: {
    type: "boolean",
    default: true,
  },
  showPrice: {
    type: "boolean",
    default: true,
  },
  showSuffix: {
    type: "boolean",
    default: true,
  },
  showSubprice: {
    type: "boolean",
    default: true,
  },
  showFeatures: {
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
  titleSpace: {
    type: "number",
  },
  priceSpace: {
    type: "number",
  },
  subpriceSpace: {
    type: "number",
    default: 0,
  },
  buttonSpace: {
    type: "number",
  },
  featuresSpace: {
    type: "number",
  },
  titleSpaceMobile: {
    type: "number",
  },
  priceSpaceMobile: {
    type: "number",
  },
  subpriceSpaceMobile: {
    type: "number",
  },
  buttonSpaceMobile: {
    type: "number",
  },
  featuresSpaceMobile: {
    type: "number",
  },
  titleSpaceTablet: {
    type: "number",
  },
  priceSpaceTablet: {
    type: "number",
  },
  subpriceSpaceTablet: {
    type: "number",
  },
  buttonSpaceTablet: {
    type: "number",
  },
  featuresSpaceTablet: {
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
  prefixFontSizeMobile: {
    type: "number",
  },
  prefixFontSizeTablet: {
    type: "number",
  },
  amountFontSizeMobile: {
    type: "number",
  },
  amountFontSizeTablet: {
    type: "number",
  },
  suffixFontSizeMobile: {
    type: "number",
  },
  suffixFontSizeTablet: {
    type: "number",
  },
  subpriceFontSizeMobile: {
    type: "number",
  },
  subpriceFontSizeTablet: {
    type: "number",
  },
  featuresFontSizeMobile: {
    type: "number",
  },
  featuresFontSizeTablet: {
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
  blockIsPaddingControlConnected: {
		type: "boolean",
		default: false,
	},
  columnIsPaddingControlConnected: {
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
  blockIsTypographyColorValueUpdated: {
    type: 'boolean',
    default: false,
  },
  titleTypographyColor: {
    type: 'string',
  },
  prefixTypographyColor: {
    type: 'string',
  },
  amountTypographyColor: {
    type: 'string',
  },
  suffixTypographyColor: {
    type: 'string',
  },
  subpriceTypographyColor: {
    type: 'string',
  },
  featuresTypographyColor: {
    type: 'string',
  },
  titleBottomSpacing: {
    type: 'number',
  },
  titleBottomSpacingMobile: {
    type: 'number',
  },
  titleBottomSpacingTablet: {
    type: 'number',
  },
  amountBottomSpacing: {
    type: 'number',
  },
  amountBottomSpacingMobile: {
    type: 'number',
  },
  amountBottomSpacingTablet: {
    type: 'number',
  },
  featuresBottomSpacing: {
    type: 'number',
  },
  featuresBottomSpacingMobile: {
    type: 'number',
  },
  featuresBottomSpacingTablet: {
    type: 'number',
  },
  subpriceBottomSpacing: {
    type: 'number',
  },
  subpriceBottomSpacingMobile: {
    type: 'number',
  },
  subpriceBottomSpacingTablet: {
    type: 'number',
  },
  ctaButtonTopPadding: {
    type: "number",
    default: 15,
  },
  ctaButtonBottomPadding: {
    type: "number",
    default: 15,
  },
  ctaButtonLeftPadding: {
    type: "number",
    default: 30,
  },
  ctaButtonRightPadding: {
    type: "number",
    default: 30,
  },
  ctaButtonTopPaddingTablet: {
    type: "number",
    default: 15,
  },
  ctaButtonBottomPaddingTablet: {
    type: "number",
    default: 15,
  },
  ctaButtonRightPaddingTablet: {
    type: "number",
    default: 30,
  },
  ctaButtonLeftPaddingTablet: {
    type: "number",
    default: 30,
  },
  ctaButtonTopPaddingMobile: {
    type: "number",
    default: 15,
  },
  ctaButtonBottomPaddingMobile: {
    type: "number",
    default: 15,
  },
  ctaButtonLeftPaddingMobile: {
    type: "number",
    default: 30,
  },
  ctaButtonRightPaddingMobile: {
    type: "number",
    default: 30,
  },
  isCtaButtonPaddingMarginValueUpdated : {
    type: "boolean",
    default: false,
  }
};
export default attributes;
