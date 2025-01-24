const ITEM_COUNT = 2;
const cardsArray = [];
const { __ } = wp.i18n;

for (var i = 1; i <= ITEM_COUNT; i++) {
  cardsArray.push({
    title: __("Title", "responsive-block-editor-addons"),
    subtitle: __("Subtitle", "responsive-block-editor-addons"),
    button: __("Button" + i, "responsive-block-editor-addons"),
    buttonURL: "",
    image: "",
    content:
      __("Description for this block. Use this space for describing your block. Any text will do. Description for this block. You can use this space for describing your block.", "responsive-block-editor-addons"),
  });
}

const attributes = {
  block_id: {
    type: "string",
  },
  cardsArray: {
    type: "array",
    default: cardsArray,
  },
  count: {
    type: "number",
    default: ITEM_COUNT,
  },
  gutter: {
    type: "string",
    default: "medium",
  },
  stack: {
    type: "string",
    default: "mobile",
  },
  contentAlign: {
    type: "string",
    default: "center",
  },
  textColor: {
    type: "string",
  },
  itemBackgroundColor: {  //For compatibility with v1.3.2.
    type: "string",
    default: "empty"
  },
  ctaBackColor: {
    type: "string",
  },
  ctaColor: {
    type: "string",
    default: "#fff",
  },
  buttonColor: {   //For compatibility with v1.3.2.
    type: "string",
    default: "empty"
  },
  buttonTextColor: {   //For compatibility with v1.3.2.
    type: "string",
    default: "empty",
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
  titleSpace: {
    type: "number",
    default: 8,
  },
  titleSpaceMobile: {
    type: "number",
  },
  titleSpaceTablet: {
    type: "number",
  },
  subtitleSpace: {
    type: "number",
    default: 16,
  },
  subtitleSpaceMobile: {
    type: "number",
  },
  subtitleSpaceTablet: {
    type: "number",
  },
  contentSpace: {
    type: "number",
    default: 16,
  },
  contentSpaceMobile: {
    type: "number",
  },
  contentSpaceTablet: {
    type: "number",
  },
  buttonSpace: {
    type: "number",
    default: 20,
  },
  blockBorderWidth: {
    type: "number",
    default: 0,
  },
  borderWidth: { //For compatibility with v1.3.2.
    type: "number",
    default: 999,
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
  borderRadius: { //For compatibility with v1.3.2.
    type: "number",
    default: 999,
  },
  opacity: {
    type: "number",
    default: 100,
  },
  resshowImage: {
    type: "boolean",
    default: true,
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
  imageopacity: {
    type: "number",
    default: 20,
  },
  imageSize: {
    type: "string",
    default: "full",
  },
  imagePosition: {
    type: "string",
    default: "center center",
  },
  imageRepeat: {
    type: "string",
    default: "no-repeat",
  },
  thumbsize: {
    type: "string",
    default: "cover",
  },
  imageheight: {
    type: "number",
    default: 200,
  },
  blockmargin: {
    type: "number",
    default: 2,
  },
  blockmarginMobile: {
    type: "number",
  },
  blockmarginTablet: {
    type: "number",
  },
  blockzindex: {
    type: "number",
    default: 1,
  },
  icon: {
    type: "string",
    default: "",
  },
  iconPosition: {
    type: "string",
    default: "after",
  },
  icon_color: {
    type: "string",
    default: "#3a3a3a",
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
  buttonhColor: { //For compatibility with v1.3.2.
    type: "string",
    default: "empty"
  },
  buttonhTextColor: { //For compatibility with v1.3.2.
    type: "string",
    default: "#e6f2ff",
  },
  buttonopacity: {
    type: "number",
    default: 100,
  },
  butopacity: { //For compatibility with v1.3.2.
    type: "number",
    default: 999,
  },
  buttonHopacity: {
    type: "number",
    default: 100,
  },
  ctaVpadding: {
    type: "number",
    default: 10,
  },
  ctaHpadding: {
    type: "number",
    default: 14,
  },
  vPadding: { //For compatibility with v1.3.2.
    type: "number",
    default: 999,
  },
  hPadding: { //For compatibility with v1.3.2.
    type: "number",
    default: 999,
  },
  vMargin: {
    type: "number",
    default: 10,
  },
  hMargin: {
    type: "number",
    default: 0,
  },
  ctaBorderWidth: {
    type: "number",
    default: 1,
  },
  ctaBorderRadius: {
    type: "number",
    default: 2,
  },
  ctaBorderStyle: {
    type: "string",
    default: "none",
  },
  butborderWidth: { //For compatibility with v1.3.2.
    type: "number",
    default: 999,
  },
  butborderRadius: { //For compatibility with v1.3.2.
    type: "number",
    default: 999,
  },
  butborderStyle: { //For compatibility with v1.3.2.
    type: "string",
    default: "empty",
  },
  buttonSize: {
    type: "string",
    default: "responsive-block-editor-addons-button-size-medium",
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
  buttonbackgroundType: {
    type: "string",
  },
  icon_hcolor: {
    type: "string",
    default: "#3a3a3a",
  },
  headingFontFamily: {
    type: "string",
  },
  subFontFamily: {
    type: "string",
  },
  contentFontFamily: {
    type: "string",
  },
  subLineHeight: {
    type: "number",
    default: 1,
  },
  subFontWeight: {
    type: "string",
    default: 400,
  },
  subFontSize: {
    type: "number",
    default: 16,
  },
  headingLineHeight: {
    type: "number",
    default: 1,
  },
  headingFontWeight: {
    type: "string",
    default: 900,
  },
  headingFontSize: {
    type: "number",
    default: 20,
  },
  contentLineHeight: {
    type: "number",
    default: 2,
  },
  contentFontSize: {
    type: "number",
    default: 16,
  },
  contentFontWeight: {
    type: "string",
    default: 400,
  },
  blockbotmargin: {
    type: "number",
    default: 2,
  },
  blockbotmarginMobile: {
    type: "number",
  },
  blockbotmarginTablet: {
    type: "number",
  },
  blockleftmargin: {
    type: "number",
    default: 0,
  },
  blockleftmarginMobile: {
    type: "number",
  },
  blockleftmarginTablet: {
    type: "number",
  },
  blockrightmargin: {
    type: "number",
    default: 0,
  },
  blockrightmarginMobile: {
    type: "number",
  },
  blockrightmarginTablet: {
    type: "number",
  },
  bgimageSize: {
    type: "string",
    default: "full",
  },
  bgimagePosition: {
    type: "string",
    default: "center center",
  }, //For compatibility with v1.3.2.
  bgimageRepeat: {
    type: "string",
    default: "no-repeat",
  }, //For compatibility with v1.3.2.
  bgthumbsize: {
    type: "string",
    default: "cover",
  }, //For compatibility with v1.3.2.
  blockBorderStyle: {
    type: "string",
    default: "none",
  },
  borderStyle: { //For compatibility with v1.3.2.
    type: "string",
    default: "empty",
  },
  buttonTarget: {
    type: "boolean",
    default: "false",
  },
  contentAlignment: {
    type: "string",
    default: "left",
  },
  blockBorderColor: {
    type: "string",
  },
  borderColor: { //For compatibility with v1.3.2.
    type: "string",
    default: "empty",
  },
  backgroundImageOne: {
    type: "string",
  },
  backgroundImageTwo: {
    type: "string",
  },
  backgroundImageThree: {
    type: "string",
  },
  backgroundImageFour: {
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
  headingFontSizeMobile: {
    type: "number",
  },
  headingFontSizeTablet: {
    type: "number",
  },
  subFontSizeMobile: {
    type: "number",
  },
  subFontSizeTablet: {
    type: "number",
  },
  contentFontSizeMobile: {
    type: "number",
  },
  contentFontSizeTablet: {
    type: "number",
  },
  ctaBorderColor: {
    type: "string",
  },
  ctaHoverBorderColor: {
    type: "string",
  },
  ctaTextOpacity: {
    typr: "number",
    default: 100,
  },
  ctaHpaddingMobile: {
    type: "number",
    default: ''
  },
  ctaHpaddingTablet: {
    type: "number",
    default: ''
  },
  ctaVpaddingTablet: {
    type: "number",
    default: ''
  },
  ctaVpaddingMobile: {
    type: "number",
    default: ''
  },
  vMarginTablet: {
    type: "number",
    default: ''
  },
  vMarginMobile: {
    type: "number",
    default: ''
  },
  hMarginTablet: {
    type: "number",
    default: ''
  },
  hMarginMobile: {
    type: "number",
    default: ''
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
  blockTopMargin: {
    type: "number",
    default: 2,
  },
  blockBottomMargin: {
    type: "number",
    default: 2,
  },
  blockLeftMargin: {
    type: "number",
    default: 0,
  },
  blockRightMargin: {
    type: "number",
    default: 0,
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
  blockNewSpacingValuesUpdated: {
    type: "boolean",
    default: false,
  },
  imagePositionTab: {
    type: "string",
    default: "desktop",
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
  backgroundAttachment: {
    type: "string",
    default: "scroll",
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
  imageSizeTab: {
    type: "string",
    default: "desktop",
  },
  cardImagePositionTab: {
    type: "string",
    default: "desktop",
  },
  cardImagePosition: {
    type: "string",
    default: "center center",
  },
  cardImagePositionMobile: {
    type: "string",
    default: "center center",
  },
  cardImagePositionTablet: {
    type: "string",
    default: "center center",
  },
  cardImageAttachment: {
    type: "string",
    default: "scroll",
  },
  cardImageRepeat: {
    type: "string",
    default: "no-repeat",
  },
  cardImageAttachment: {
    type: "string",
    default: "scroll",
  },
  cardImageSize: {
    type: "string",
    default: "cover",
  },
  cardImageSizeTablet: {
    type: "string",
    default: 'cover',
  },
  cardImageSizeMobile: {
    type: "string",
    default: 'cover'
  },
  cardImageSizeTab: {
    type: "string",
    default: "desktop",
  },
  blockIsTypographyColorValueUpdated: {
    type: 'boolean',
    default: false,
  },
  headingTypographyColor: {
    type: 'string',
  },
  headingBottomSpacing: {
    type: 'number',
    default: 8,
  },
  headingBottomSpacingMobile: {
    type: 'number',
    default: 8,
  },
  headingBottomSpacingTablet: {
    type: 'number',
    default: 8,
  },
  subBottomSpacing: {
    type: 'number',
    default: 16,
  },
  subBottomSpacingMobile: {
    type: 'number',
    default: 16,
  },
  subBottomSpacingTablet: {
    type: 'number',
    default: 16,
  },
  contentBottomSpacing: {
    type: 'number',
    default: 16,
  },
  contentBottomSpacingMobile: {
    type: 'number',
    default: 16,
  },
  contentBottomSpacingTablet: {
    type: 'number',
    default: 16,
  },
  ctaButtonTopPadding: {
    type: "number",
    default: 5,
  },
  ctaButtonBottomPadding: {
    type: "number",
    default: 5,
  },
  ctaButtonLeftPadding: {
    type: "number",
    default: 5,
  },
  ctaButtonRightPadding: {
    type: "number",
    default: 5,
  },
  ctaButtonTopPaddingTablet: {
    type: "number",
    default: 5,
  },
  ctaButtonBottomPaddingTablet: {
    type: "number",
    default: 5,
  },
  ctaButtonRightPaddingTablet: {
    type: "number",
    default: 5,
  },
  ctaButtonLeftPaddingTablet: {
    type: "number",
    default: 5,
  },
  ctaButtonTopPaddingMobile: {
    type: "number",
    default: 5,
  },
  ctaButtonBottomPaddingMobile: {
    type: "number",
    default: 5,
  },
  ctaButtonLeftPaddingMobile: {
    type: "number",
    default: 5,
  },
  ctaButtonRightPaddingMobile: {
    type: "number",
    default: 5,
  },
  ctaButtonTopMargin: {
    type: "number",
    default: 10,
  },
  ctaButtonBottomMargin: {
    type: "number",
    default: 10,
  },
  ctaButtonLeftMargin: {
    type: "number",
    default: 0,
  },
  ctaButtonRightMargin: {
    type: "number",
    default: 0,
  },
  ctaButtonTopMarginTablet: {
    type: "number",
    default: 10,
  },
  ctaButtonBottomMarginTablet: {
    type: "number",
    default: 10,
  },
  ctaButtonRightMarginTablet: {
    type: "number",
    default: 0,
  },
  ctaButtonLeftMarginTablet: {
    type: "number",
    default: 0,
  },
  ctaButtonTopMarginMobile: {
    type: "number",
    default: 10,
  },
  ctaButtonBottomMarginMobile: {
    type: "number",
    default: 10,
  },
  ctaButtonLeftMarginMobile: {
    type: "number",
    default: 0,
  },
  ctaButtonRightMarginMobile: {
    type: "number",
    default: 0,
  },
  isCtaButtonPaddingMarginValueUpdated: {
    type: "boolean",
    default: false,
  },
};
export default attributes;
