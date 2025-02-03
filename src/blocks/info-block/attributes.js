const { __ } = wp.i18n;
const attributes = {
  block_id: {
    type: "string",
  },
  inheritFromTheme: {
    type: "boolean",
    default: false,
  },
  resprefixTitle: {
    source: "html",
    selector: "span.responsive-block-editor-addons-ifb-title-prefix",
    default: __( 'Prefix', 'responsive-block-editor-addons' ),
  },
  classMigrate: {
    type: "boolean",
    default: false,
  },
  resinfoBlockTitle: {
    source: "html",
    selector: "h1,h2,h3,h4,h5,h6",
    default: __("Info Box", 'responsive-block-editor-addons' ),
  },
  resDescHeading: {
    source: "html",
    selector: "p",
    default:
      __("Click here to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.", "responsive-block-editor-addons"),
  },
  resheadingAlign: {
    type: "string",
    default: "center",
  },
  alignment: {
    type: "string",
    default: "center",
  },
  resheadingColor: {
    type: "string",
  },
  ressubheadingColor: {
    type: "string",
  },
  resprefixColor: {
    type: "string",
  },
  icon: {
    type: "string",
    default: "fa fa-star",
  },
  imgiconPosition: {
    type: "string",
    default: "above-title",
  },
  resIconSize: {
    type: "number",
    default: 40,
  },
  iconColor: {
    type: "string",
    default: "#333",
  },
  resprefixFontSize: {
    type: "number",
  },
  resprefixFontWeight: {
    type: "string",
  },
  resprefixLineHeight: {
    type: "number",
  },
  resheadingTag: {
    type: "string",
    default: "h3",
  },
  resheadFontFamily: {
    type: "string",
  },
  ressubHeadFontFamily: {
    type: "string",
  },
  resheadFontSize: {
    type: "number",
  },
  resheadFontSizeMobile: {
    type: "number",
  },
  resheadFontSizeTablet: {
    type: "number",
  },
  resheadFontWeight: {
    type: "string",
    default: "700",
  },
  resheadLineHeight: {
    type: "number",
  },
  ressubHeadFontSize: {
    type: "number",
  },
  ressubHeadFontSizeTablet: {
    type: "number",
  },
  ressubHeadFontSizeMobile: {
    type: "number",
  },
  ressubHeadFontWeight: {
    type: "string",
    default: "100",
  },
  ressubHeadLineHeight: {
    type: "number",
  },
  resheadSpace: {
    type: "number",
    default: 10,
  },
  resheadSpaceMobile: {
    type: "number",
  },
  resheadSpaceTablet: {
    type: "number",
  },
  ressubHeadSpace: {
    type: "number",
    default: 10,
  },
  ressubHeadSpaceMobile: {
    type: "number",
  },
  ressubHeadSpaceTablet: {
    type: "number",
  },
  resseperatorSpace: {
    type: "number",
    default: 10,
  },
  source_type: {
    type: "string",
    default: "icon",
  },
  ressourceAlign: {
    type: "string",
    default: "top",
  },
  ressourceAlignMobile: {
    type: "string",
    default: "top",
  },
  ressourceAlignTablet: {
    type: "string",
    default: "top",
  },
  buttonTarget: {
    type: "boolean",
    default: false,
  },
  ctaIcon: {
    type: "string",
    default: "",
  },
  resseperatorPosition: {
    type: "string",
    default: "after_title",
  },
  resseperatorStyle: {
    type: "string",
    default: "solid",
  },
  resseperatorColor: {
    type: "string",
  },
  resseperatorWidth: {
    type: "number",
    default: 30,
  },
  resseparatorWidthType: {
    type: "string",
    default: "%",
  },
  resseperatorThickness: {
    type: "number",
    default: 2,
  },
  resctaType: {
    type: "string",
    default: "none",
  },
  resctaText: {
    type: "string",
    default: "Read More",
  },
  resctaLink: {
    type: "string",
    default: "#",
  },
  resctaLinkColor: {
    type: "string",
    default: "#333",
  },
  resctaFontSize: {
    type: "number",
  },
  resctaFontWeight: {
    type: "string",
  },
  ctaColor: {
    type: "string",
    default: "#333",
  },
  resctaBtnLinkColor: { //For compatibility with v1.3.2
    type: "string",
    default: "empty",
  },
  ctaBackColor: {
    type: "string",
    default: "transparent",
  },
  resctaBgColor: { //For compatibility with v1.3.2
    type: "string",
    default: "empty",
  },
  ctaBorderColor: {
    type: "string",
    default: "#333",
  },
  ctaBorderStyle: {
    type: "string",
    default: "solid",
  },
  resctaBorderColor: { //For compatibility with v1.3.2
    type: "string",
    default: "empty",
  },
  resctaBorderStyle: { //For compatibility with v1.3.2
    type: "string",
    default: "empty",
  },
  ctaVpadding: {
    type: "number",
    default: 10,
  },
  ctaHpadding: {
    type: "number",
    default: 14,
  },
  ctaVertPadding: { //For compatibility with v1.3.2
    type: "number",
    default: 999,
  },
  ctaHrPadding: { //For compatibility with v1.3.2
    type: "number",
    default: 999,
  },
  ctaBorderWidth: {
    type: "number",
    default: 1,
  },
  ctaBorderRadius: {
    type: "number",
    default: 0,
  },
  resctaBorderWidth: { //For compatibility with v1.3.2
    type: "number",
    default: 999,
  },
  resctaBorderRadius: { //For compatibility with v1.3.2
    type: "number",
    default: 999,
  },
  resprefixSpace: {
    type: "number",
    default: 5,
  },
  resprefixSpaceMobile: {
    type: "number",
  },
  resprefixSpaceTablet: {
    type: "number",
  },
  iconLeftMargin: {
    type: "number",
    default: 0,
  },
  iconRightMargin: {
    type: "number",
    default: 0,
  },
  iconTopMargin: {
    type: "number",
    default: 5,
  },
  iconBottomMargin: {
    type: "number",
    default: 5,
  },
  iconLeftMarginMobile: {
    type: "number",
    default: '',
  },
  iconRightMarginMobile: {
    type: "number",
    default: '',
  },
  iconTopMarginMobile: {
    type: "number",
    default: '',
  },
  iconBottomMarginMobile: {
    type: "number",
    default: '',
  },
  iconLeftMarginTablet: {
    type: "number",
    default: '',
  },
  iconRightMarginTablet: {
    type: "number",
    default: '',
  },
  iconTopMarginTablet: {
    type: "number",
    default: '',
  },
  iconBottomMarginTablet: {
    type: "number",
    default: '',
  },
  iconImage: {
    type: "object",
    default: {
      url: "",
      alt: "",
    },
  },
  imageSize: {
    type: "string",
    default: "thumbnail",
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
  imageWidthType: {
    type: "boolean",
    default: true,
  },
  stack: {
    type: "string",
    default: "tablet",
  },
  resshowPrefix: {
    type: "boolean",
    default: true,
  },
  resshowTitle: {
    type: "boolean",
    default: true,
  },
  resshowDesc: {
    type: "boolean",
    default: true,
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
  },
  boxShadowSpread: {
    type: "number",
  },
  boxShadowPosition: {
    type: "string",
    default: "outset",
  },
  imageBoxShadowColor: {
    type: "string",
  },
  imageBoxShadowHOffset: {
    type: "number",
    default: 0,
  },
  imageBoxShadowVOffset: {
    type: "number",
    default: 0,
  },
  imageBoxShadowBlur: {
    type: "number",
  },
  imageBoxShadowSpread: {
    type: "number",
  },
  imageBoxShadowPosition: {
    type: "string",
    default: "outset",
  },
  counterId: {
    type: "string",
    default: 1,
  },
  backgroundColor: {
    type: "string",
    default: "#ffffff",
  },
  boxBackgroundColor: {  //For compatibility with v1.3.2
    type: "string",
    default: "empty",
  },
  contentPadding: {
    type: "number",
    default: '',
  },
  contentPaddingMobile: {
    type: "number",
    default: '',
  },
  contentPaddingTablet: {
    type: "number",
    default: '',
  },
  opacity: {
    type: "number",
    default: 100,
  },
  imageopacity: {
    type: "number",
    default: 100,
  },
  imgURL: {
    type: "string",
	default: "empty",
  }, // For compatibility with v1.3.2.
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
  ctaHoverColor: {
    type: "string",
    default: "#333",
  },
  ctaHoverBackColor: {
    type: "string",
    default: "transparent",
  },
  ctaHoverBorderColor: {
    type: "string",
    default: "#333",
  },
  ctaHoverColor: { //For compatibility with v1.3.2
    type: "string",
    default: "empty",
  },
  ctaHoverBackColor: { //For compatibility with v1.3.2
    type: "string",
    default: "empty",
  },
  ctaHoverBorderColor: { //For compatibility with v1.3.2
    type: "string",
    default: "empty",
  },
  imagePosition: {
    type: "string",
    default: "center center",
  }, // For compatibility with v1.3.2.
  imageRepeat: {
    type: "string",
    default: "no-repeat",
  }, // For compatibility with v1.3.2.
  thumbsize: {
    type: "string",
    default: "cover",
  }, // For compatibility with v1.3.2.
  sepSpace: {
    type: "number",
    default: 10,
  },
  sepSpaceMobile: {
    type: "number",
  },
  sepSpaceTablet: {
    type: "number",
  },
  icon_color: {
    type: "string",
    default: "#3a3a3a",
  },
  icon_hcolor: {
    type: "string",
    default: "#3a3a3a",
  },
  resImageBorderColor: {
    type: "string",
    default: "#333",
  },
  resImageBorderStyle: {
    type: "string",
    default: "none",
  },
  resImageBorderRadius: {
    type: "number",
    default: 0,
  },
  resImageTopRadius: {
    type: "number",
    default: 0,
  },
  resImageRightRadius: {
    type: "number",
    default: 0,
  },
  resImageBottomRadius: {
    type: "number",
    default: 0,
  },
  resImageLeftRadius: {
    type: "number",
    default: 0,
  },
  resImageTopRadiusTablet: {
    type: "number",
    default: 0,
  },
  resImageRightRadiusTablet: {
    type: "number",
    default: 0,
  },
  resImageBottomRadiusTablet: {
    type: "number",
    default: 0,
  },
  resImageLeftRadiusTablet: {
    type: "number",
    default: 0,
  },
  resImageTopRadiusMobile: {
    type: "number",
    default: 0,
  },
  resImageRightRadiusMobile: {
    type: "number",
    default: 0,
  },
  resImageBottomRadiusMobile: {
    type: "number",
    default: 0,
  },
  resImageLeftRadiusMobile: {
    type: "number",
    default: 0,
  },
  resImageIsRadiusControlConnected: {
    type: "boolean",
    default: false,
  },
  resImageIsRadiusValueUpdated: {
    type: "boolean",
    default: false,
  },
  
  resImageBorderWidth: {
    type: "number",
    default: 2,
  },
  ctaTextFontFamily: {
    type: "string",
  },
  ctaTextFontSize: {
    type: "number",
  },
  ctaTextFontSizeMobile: {
    type: "number",
  },
  ctaTextFontSizeTablet: {
    type: "number",
  },
  ctaTextFontWeight: {
    type: "string",
    default: "100",
  },
  ctaTextLineHeight: {
    type: "number",
  },
  ctaBottomMargin: {
    type: "number",
    default: 10,
  },
  ctaBottomMarginMobile: {
    type: "number",
  },
  ctaBottomMarginTablet: {
    type: "number",
  },
  resBoxLink: {
    type: "string",
    default: "#",
  },
  resBoxTarget: {
    type: "boolean",
    default: false,
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
  iconBackgroundColor: {
    type: "string",
    default: "#0066cc"
  },
  iconBackgroundHoverColor: {
    type: "string"
  },
  iconBackgroundType: {
    type: "string",
    default: "none"
  },
  iconBorderRadius: {
    type: "number",
    default: 0,
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
  iconPadding: {
    type: "number",
    default: 5
  },
  iconBorderWidth: {
    type: "number",
    default: 1
  },
  backgroundImage: {
    type: "string",
  },
  backgroundAttachment: {
    type: "string",
    default: "scroll",
  },
  backgroundImagePosition: {
    type: "string",
    default: "center center"
  },
  background: {
    type: "string",
    default: "scroll"
  },
  backgroundImageRepeat: {
    type: "string",
    default: "no-repeat"
  },
  backgroundImageSize: {
    type: "string",
    default: "cover"
  },
  ctaHpaddingTablet: {
    type: "number",
    default: 14,
  },
  ctaHpaddingMobile: {
    type: "number",
    default: 14,
  },
  ctaVpaddingTablet: {
    type: "number",
    default: 10,
  },
  ctaVpaddingMobile: {
    type: "number",
    default: 10,
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
  buttonHbackgroundType: {
    type: "string",
    default: "none",
  },
  zIndex: {
    type: "number",
    default: 0,
  },
  animationName: {
    type: "string",
    default: "none",
  },
  animationDirection: {
    type: "string",
    default: 'Left',
  },
  animationRepeat: {
    type: "string",
    default: "once",
  },
  animationDuration: {
    type: "number",
    default: 1000,
  },
  animationDelay: {
    type: "number",
    default: 1000,
  },
  animationCurve: {
    type: "string",
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
  iconIsMarginControlConnected: {
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
  newSpacingValuesUpdated: {
    type: "boolean",
    default: false,
  },
  blockIsTypographyColorValueUpdated: {
    type: "boolean",
    default: false,
  },
  ressubHeadTypographyColor: {
    type: "string",
  },
  resheadTypographyColor: {
    type: "string",
  },
  ctaTextTypographyColor: {
    type: "string",
    default: "#333",
  },
  resheadBottomSpacing: {
    type: "number",
    default: 10,
  },
  resheadBottomSpacingMobile: {
    type: "number",
    default: "",
  },
  resheadBottomSpacingTablet: {
    type: "number",
    default: "",
  },
  ressubHeadBottomSpacing: {
    type: "number",
    default: 10,
  },
  ressubHeadBottomSpacingMobile: {
    type: "number",
    default: "",
  },
  ressubHeadBottomSpacingTablet: {
    type: "number",
    default: "",
  },
  ctaTextBottomSpacing: {
    type: "number",
    default: 10,
  },
  ctaTextBottomSpacingMobile: {
    type: "number",
    default: "",
  },
  ctaTextBottomSpacingTablet: {
    type: "number",
    default: "",
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
  widthType: {
    type: "string",
    default: "%"
  },
  widthTypeValueUpdated: {
    type: "boolean",
    default: false,
  },
};
export default attributes;
