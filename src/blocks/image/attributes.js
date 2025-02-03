import {number, string} from "prop-types";

const attributes = {
  block_id: {
    type: "string",
  },
  imageUrl: {
    type: "string",
    default: "",
  },
  altText: {
    type: "string",
    default: "",
  },
  caption: {
    type: "boolean",
    default: false,
  },
  captionText: {
    type: "string",
    default: "",
  },
  sourceType: {
    type: "string",
    default: "",
  },
  imageAlignment: {
    type: "string",
    default: "left",
  },
  imageAlignmentTablet: {
    type: "string",
    default: "left",
  },
  imageAlignmentMobile: {
    type: "string",
    default: "left",
  },
  captionimageAlignment: {
    type: "string",
    default: "left",
  },
  captionimageAlignmentTablet: {
    type: "string",
    default: "left",
  },
  captionimageAlignmentMobile: {
    type: "string",
    default: "left",
  },
  captionFontFamily: {
    type: "string",
    default: ""
  },
  captionFontSize: {
    type: "number",
  },
  captionFontSizeMobile: {
    type: "number",
  },
  captionFontSizeTablet: {
    type: "number",
  },
  captionFontWeight: {
    type: "string",
    default: "600",
  },
  captionLineHeight: {
    type: "number",
    default: 1,
  },
  captionLetterSpacing: {
    type: "number",
    default: 0,
  },
  captionTextTransform: {
    type: "string",
  },
  captionColor: {
    type: "string",
  },
  imageBorderColor: {
    type: "string",
  },
  imageBorderRadius: {
    type: "number",
    default: 0,
  },
  imageTopRadius: {
    type: "number",
    default: 0,
  },
  imageRightRadius: {
    type: "number",
    default: 0,
  },
  imageBottomRadius: {
    type: "number",
    default: 0,
  },
  imageLeftRadius: {
    type: "number",
    default: 0,
  },
  imageTopRadiusTablet: {
    type: "number",
    default: 0,
  },
  imageRightRadiusTablet: {
    type: "number",
    default: 0,
  },
  imageBottomRadiusTablet: {
    type: "number",
    default: 0,
  },
  imageLeftRadiusTablet: {
    type: "number",
    default: 0,
  },
  imageTopRadiusMobile: {
    type: "number",
    default: 0,
  },
  imageRightRadiusMobile: {
    type: "number",
    default: 0,
  },
  imageBottomRadiusMobile: {
    type: "number",
    default: 0,
  },
  imageLeftRadiusMobile: {
    type: "number",
    default: 0,
  },
  imageIsRadiusControlConnected: {
		type: "boolean",
		default: false,
	},
  imageIsRadiusValueUpdated: {
    type: "boolean",
    default: false,
  },
  imageBorderStyle: {
    type: "string",
    default: "none",
  },
  imageBorderWidth: {
    type: "number",
    default: 0,
  },
  imageboxShadowColor: {
    type: "string",
  },
  imageboxShadowHOffset: {
    type: "number",
    default: 0,
  },
  imageboxShadowVOffset: {
    type: "number",
    default: 0,
  },
  imageboxShadowBlur: {
    type: "number",
    default: 0,
  },
  imageboxShadowSpread: {
    type: "number",
    default: 0,
  },
  imageboxShadowPosition: {
    type: "string",
    default: "outset",
  },
  imageboxShadowHoverPosition: {
    type: "string",
    default: "outset",
  },
  imageboxShadowHoverColor: {
    type: "string",
  },
  imageboxShadowHoverHOffset: {
    type: "number",
    default: 0,
  },
  imageboxShadowHoverVOffset: {
    type: "number",
    default: 0,
  },
  imageboxShadowHoverBlur: {
    type: "number",
    default: 0,
  },
  imageboxShadowHoverSpread: {
    type: "number",
    default: 0,
  },
  imageboxshadowSeprateHover: {
    type: "boolean",
    default: false,
  },
  imagetopmargin: {
    type: "number",
    default: '',
  },
  imagebottommargin: {
    type: "number",
    default: '',
  },
  imageleftmargin: {
    type: "number",
    default: '',
  },
  imagerightmargin: {
    type: "number",
    default: '',
  },
  imagetopmarginTablet: {
    type: "number",
    default: '',
  },
  imagebottommarginTablet: {
    type: "number",
    default: '',
  },
  imageleftmarginTablet: {
    type: "number",
    default: '',
  },
  imagerightmarginTablet: {
    type: "number",
    default: '',
  },
  imagetopmarginMobile: {
    type: "number",
    default: '',
  },
  imagebottommarginMobile: {
    type: "number",
    default: '',
  },
  imageleftmarginMobile: {
    type: "number",
    default: '',
  },
  imagerightmarginMobile: {
    type: "number",
    default: '',
  },
  captiontopmargin: {
    type: "number",
    default: 0,
  },
  captionbottommargin: {
    type: "number",
    default: 0,
  },
  captionleftmargin: {
    type: "number",
    default: 0,
  },
  captionrightmargin: {
    type: "number",
    default: 0,
  },
  captiontopmarginTablet: {
    type: "number",
    default: 0,
  },
  captionbottommarginTablet: {
    type: "number",
    default: 0,
  },
  captionleftmarginTablet: {
    type: "number",
    default: 0,
  },
  captionrightmarginTablet: {
    type: "number",
    default: 0,
  },
  captiontopmarginMobile: {
    type: "number",
    default: 0,
  },
  captionbottommarginMobile: {
    type: "number",
    default: 0,
  },
  captionleftmarginMobile: {
    type: "number",
    default: 0,
  },
  captionrightmarginMobile: {
    type: "number",
    default: 0,
  },
  MaskShape: {
    type: "string",
    default:"none"
  },
  MaskSize:{
    type:"string"
  },
  MaskPosition:{
    type:"string"
  },
  MaskRepeat:{
    type:"string"
  },
  imageObjectFit:{
  type:"string",
  default:"default"
  },
  imageOnHoverImage:{
    type:"string",
    default:"static"
  },
  imageWidth:{
    type:"number"
  },
  imageHeight:{
    type:"number"
  },
  imageWidthTablet:{
    type:"number"
  },
  imageHeightTablet:{
    type:"number"
  },
  imageWidthMobile:{
    type:"number",
    default:0
  },
  imageHeightMobile:{
    type:"number",
    default:0
  },
  Layoverswitch:{
    type:"boolean",
    default:false
  },
  LayoverHeading:{
    type:"string",
    default:""
  },
  LayoverContentPosition:{
    type:"string",
    default:"centercenter"
  },
  layoverimageBorderColor: {
    type: "string",
  },
  layoverimageBorderRadius: {
    type: "number",
    default: 0,
  },
  layoverimageTopRadius: {
    type: "number",
    default: 0,
  },
  layoverimageRightRadius: {
    type: "number",
    default: 0,
  },
  layoverimageBottomRadius: {
    type: "number",
    default: 0,
  },
  layoverimageLeftRadius: {
    type: "number",
    default: 0,
  },
  layoverimageTopRadiusTablet: {
    type: "number",
    default: 0,
  },
  layoverimageRightRadiusTablet: {
    type: "number",
    default: 0,
  },
  layoverimageBottomRadiusTablet: {
    type: "number",
    default: 0,
  },
  layoverimageLeftRadiusTablet: {
    type: "number",
    default: 0,
  },
  layoverimageTopRadiusMobile: {
    type: "number",
    default: 0,
  },
  layoverimageRightRadiusMobile: {
    type: "number",
    default: 0,
  },
  layoverimageBottomRadiusMobile: {
    type: "number",
    default: 0,
  },
  layoverimageLeftRadiusMobile: {
    type: "number",
    default: 0,
  },
  layoverimageIsRadiusControlConnected: {
		type: "boolean",
		default: false,
	},
  layoverimageIsRadiusValueUpdated: {
    type: "boolean",
    default: false,
  },
  layoverimageBorderStyle: {
    type: "string",
    default: "none",
  },
  layoverimageBorderWidth: {
    type: "number",
    default: 0,
  },
  layoverInputDistance: {
    type:"number",
    default:"15"
  },
  layoverBackgroundcolor:{
    type:"string",
    default:""
  },
  layoverOpacity:{
    type:"number",
    default:20
  },
  layoverHoverOpacity:{
    type:"number",
    default:100
  },
  layoverHeadingTag:{
    type:"string",
    default:"h2"
  },
  layoverHeadingFontFamily: {
    type: "string",
    default: "",
  },
  layoverHeadingFontSize: {
    type: "number",
  },
  layoverHeadingFontSizeMobile: {
    type: "number",
  },
  layoverHeadingFontSizeTablet: {
    type: "number",
  },
  layoverHeadingFontWeight: {
    type: "string",
    default: "600",
  },
  layoverHeadingLineHeight: {
    type: "number",
    default: 1,
  },
  layoverHeadingLetterSpacing: {
    type: "number",
    default: 0,
  },
  layoverHeadingTextTransform: {
    type: "string",
  },
  layoverHeadingColor: {
    type: "string",
  },
  layoverHeadingtopmargin: {
    type: "number",
    default: 0,
  },
  layoverHeadingbottommargin: {
    type: "number",
    default: 0,
  },
  layoverHeadingleftmargin: {
    type: "number",
    default: 0,
  },
  layoverHeadingrightmargin: {
    type: "number",
    default: 0,
  },
  layoverHeadingtopmarginTablet: {
    type: "number",
    default: 0,
  },
  layoverHeadingbottommarginTablet: {
    type: "number",
    default: 0,
  },
  layoverHeadingleftmarginTablet: {
    type: "number",
    default: 0,
  },
  layoverHeadingrightmarginTablet: {
    type: "number",
    default: 0,
  },
  layoverHeadingtopmarginMobile: {
    type: "number",
    default: 0,
  },
  layoverHeadingbottommarginMobile: {
    type: "number",
    default: 0,
  },
  layoverHeadingleftmarginMobile: {
    type: "number",
    default: 0,
  },
  layoverHeadingrightmarginMobile: {
    type: "number",
    default: 0,
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
  imageTopMargin: {
    type: "number",
    default: '',
  },
  imageBottomMargin: {
    type: "number",
    default: '',
  },
  imageLeftMargin: {
    type: "number",
    default: '',
  },
  imageRightMargin: {
    type: "number",
    default: '',
  },
  imageTopMarginTablet: {
    type: "number",
    default: '',
  },
  imageBottomMarginTablet: {
    type: "number",
    default: '',
  },
  imageLeftMarginTablet: {
    type: "number",
    default: '',
  },
  imageRightMarginTablet: {
    type: "number",
    default: '',
  },
  imageTopMarginMobile: {
    type: "number",
    default: '',
  },
  imageBottomMarginMobile: {
    type: "number",
    default: '',
  },
  imageLeftMarginMobile: {
    type: "number",
    default: '',
  },
  imageRightMarginMobile: {
    type: "number",
    default: '',
  },
  newSpacingValuesUpdated: {
    type: "boolean",
    default: false,
  },
  imageIsMarginControlConnected: {
		type: "boolean",
		default: false,
	},
  imageIsPaddingControlConnected: {
		type: "boolean",
		default: false,
	},
  imageTopPadding: {
    type: "number",
    default: '',
  },
  imageTopPaddingMobile: {
    type: "number",
    default: '',
  },
  imageTopPaddingTablet: {
    type: "number",
    default: '',
  },
  imageBottomPadding: {
    type: "number",
    default: '',
  },
  imageBottomPaddingMobile: {
    type: "number",
    default: '',
  },
  imageBottomPaddingTablet: {
    type: "number",
    default: '',
  },
  imageLeftPadding: {
    type: "number",
    default: '',
  },
  imageLeftPaddingMobile: {
    type: "number",
    default: '',
  },
  imageLeftPaddingTablet: {
    type: "number",
    default: '',
  },
  imageRightPadding: {
    type: "number",
    default: '',
  },
  imageRightPaddingMobile: {
    type: "number",
    default: '',
  },
  imageRightPaddingTablet: {
    type: "number",
    default: '',
  },
  blockIsTypographyColorValueUpdated : {
    type: 'boolean',
    default: false,
  },
  layoverHeadingTypographyColor : {
    type: 'string',
  },
  captionTypographyColor : {
    type: 'string',
  },
  captionTopMargin: {
    type: "number",
    default: 0,
  },
  captionBottomMargin: {
    type: "number",
    default: 0,
  },
  captionLeftMargin: {
    type: "number",
    default: 0,
  },
  captionRightMargin: {
    type: "number",
    default: 0,
  },
  captionTopMarginTablet: {
    type: "number",
    default: 0,
  },
  captionBottomMarginTablet: {
    type: "number",
    default: 0,
  },
  captionLeftMarginTablet: {
    type: "number",
    default: 0,
  },
  captionRightMarginTablet: {
    type: "number",
    default: 0,
  },
  captionTopMarginMobile: {
    type: "number",
    default: 0,
  },
  captionBottomMarginMobile: {
    type: "number",
    default: 0,
  },
  captionLeftMarginMobile: {
    type: "number",
    default: 0,
  },
  captionRightMarginMobile: {
    type: "number",
    default: 0,
  },
  captionIsMarginControlConnected: {
    type: "boolean",
    default: false,
  }
};

export default attributes;
