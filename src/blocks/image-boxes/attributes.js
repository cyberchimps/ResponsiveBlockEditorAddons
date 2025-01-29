import { type } from "jquery";

const { __ } = wp.i18n;

const ITEM_COUNT = 2;

const imageboxesBlock = [];

for (var i = 1; i <= ITEM_COUNT; i++) {
  imageboxesBlock.push({
    title: __("Image Box Title", "responsive-block-editor-addons") + i,
    hover_description:
      __(
        "Description - This space for describing this imagebox block",
        "responsive-block-editor-addons"
      ) + i,
    img_url: "",
    img_id: "",
    cta_url: "",
  });
}

const attributes = {
  block_id: {
    type: "string",
  },
  imageboxesBlock: {
    type: "array",
    default: imageboxesBlock,
  },
  counterId: {
    type: "string",
    default: 1,
  },
  count: {
    type: "number",
    default: ITEM_COUNT,
  },
  titleHeadingTag: {
    type: "string",
    default: "h3",
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
  itemBackgroundColor: {
    type: "string",
  },
  hoverTextColor: {
    type: "string",
  },
  verticalAlignment: {
    type: "string",
    default: "center",
  },
  itemHoverBackgroundColor: {
    type: "string",
  },
  hoverBorderColor: {
    type: "string",
  },
  titleSpacing: {
    type: "number",
  },
  descriptionSpacing: {
    type: "number",
  },
  titleSpacingMobile: {
    type: "number",
  },
  descriptionSpacingMobile: {
    type: "number",
  },
  titleSpacingTablet: {
    type: "number",
  },
  descriptionSpacingTablet: {
    type: "number",
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
	default: "#1E1E1E"
  },
  blockBorderStyle: {
    type: "string",
    default: "solid",
  },
  blockBorderWidth: {
    type: "number",
    default: 2,
  },
  boxPaddingLeft: {
    type: "number",
    default: 15,
  },
  boxPaddingRight: {
    type: "number",
    default: 15,
  },
  boxPaddingBottom: {
    type: "number",
    default: 15,
  },
  boxPaddingTop: {
    type: "number",
    default: 15,
  },
  boxHeight: {
    type: "number",
  },
  hasArrow: {
    type: "boolean",
  },
  hasArrow: {
    type: "boolean",
  },
  arrowColor: {
    type: "string",
  },
  arrowSize: {
    type: "number",
  },
  boxShadowColor: {
    type: "string",
  },
  boxShadowHOffset: {
    type: "number",
    default: 9,
  },
  boxShadowVOffset: {
    type: "number",
    default: 9,
  },
  boxShadowBlur: {
    type: "number",
    default: 9,
  },
  opacity: {
    type: "number",
    default: 70,
  },
  hoverOpacity: {
    type: "number",
    default: 70,
  },
  boxShadowSpread: {
    type: "number",
    default: 9,
  },
  boxShadowPosition: {
    type: "string",
    default: "outset",
  },
  backgroundPosition: {
    type: "string",
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
  secondaryBackgroundColor: {
    type: "string",
  },
  hoverSecondaryBackgroundColor: {
    type: "string",
  },
  gradientDegree: {
    type: "number",
    default: 180,
  },
  bgGradient: {
    type: "boolean",
    default: false,
  },
  hoverGradientDegree: {
    type: "number",
    default: 180,
  },
  hoverBgGradient: {
    type: "boolean",
    default: false,
  },
  titleFontFamily: {
    type: "string",
  },
  descriptionFontFamily: {
    type: "string",
  },
  titleFontSize: {
    type: "number",
  },
  titleFontSizeMobile: {
    type: "number",
  },
  titleFontSizeTablet: {
    type: "number",
  },
  titleFontWeight: {
    type: "string",
  },
  imageSize: {
    type: "string",
    default: "full",
  },
  titleLineHeight: {
    type: "number",
  },
  titleColor: {
    type: "string",
	default: "#1E1E1E"
  },
  descriptionFontSize: {
    type: "number",
  },
  descriptionFontWeight: {
    type: "string",
  },
  descriptionLineHeight: {
    type: "number",
  },
  descriptionColor: {
    type: "string",
	default: "#1E1E1E"
  },
  backgroundImageOne: {
    type: "string",
    default: "",
  },
  backgroundImageTwo: {
    type: "string",
    default: "",
  },
  backgroundImageThree: {
    type: "string",
    default: "",
  },
  backgroundImageFour: {
    type: "string",
    default: "",
  },
  gutter: {
    type: "string",
    default: "medium",
  },
  showDescription: {
    type: "boolean",
    default: true,
  },
  showTitle: {
    type: "boolean",
    default: true,
  },
  descriptionFontSizeMobile: {
	  type: "number",
  },
  descriptionFontSizeTablet: {
	  type: "number",
  },
  boxRadius: {
	type: "number",
	default: 999,
  },//For compatibility with v1.3.2
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
  boxBackgroundPositionUpdated: {
    type: "boolean",
    default: false,
  },
  boxBackgroundRepeatUpdated: {
    type: "boolean",
    default: false,
  },
  boxBackgroundSizeUpdated: {
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
  boxImagePositionTab: {
    type: "string",
    default: "desktop",
  },
  boxImageSize: {
    type: "string",
    default: 'cover'
  },
  boxImageSizeTablet: {
    type: "string",
    default: 'cover'
  },
  boxImageSizeMobile: {
    type: "string",
    default: 'cover'
  },
  boxImagePosition: {
    type: "string",
    default: "center center"
  },
  boxImagePositionMobile: {
    type: "string",
    default: "center center"
  },
  boxImagePositionTablet: {
    type: "string",
    default: "center center"
  },
  boxImageSizeTab: {
    type: "string",
  },
  boxImageRepeat: {
    type: "string",
  },
  titleTypographyColor: {
    type: "string",
    default: "#1E1E1E",
  },
  descriptionTypographyColor: {
    type: "string",
    default: "#1E1E1E",
  },
  blockIsTypographyColorValueUpdated: {
    type: "boolean",
    default: false,
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
  contentAlignMobile: {
    type: "string",
    default: "center",
  },
  contentAlignTablet: {
    type: "string",
    default: "center",
  },
  verticalAlignmentMobile: {
    type: "string",
    default: "center",
  },
  verticalAlignmentTablet: {
    type: "string",
    default: "center",
  },
  IsAlignmentValueUpdated: {
    type: "boolean",
    default: false,
  },
  boxLeftPadding: {
    type: "number",
    default: 15,
  },
  boxRightPadding: {
    type: "number",
    default: 15,
  },
  boxBottomPadding: {
    type: "number",
    default: 15,
  },
  boxTopPadding: {
    type: "number",
    default: 15,
  },
  boxLeftPaddingTablet: {
    type: "number",
    default: 15,
  },
  boxRightPaddingTablet: {
    type: "number",
    default: 15,
  },
  boxBottomPaddingTablet: {
    type: "number",
    default: 15,
  },
  boxTopPaddingTablet: {
    type: "number",
    default: 15,
  },
  boxLeftPaddingMobile: {
    type: "number",
    default: 15,
  },
  boxRightPaddingMobile: {
    type: "number",
    default: 15,
  },
  boxBottomPaddingMobile: {
    type: "number",
    default: 15,
  },
  boxTopPaddingMobile: {
    type: "number",
    default: 15,
  },
  blockIsPaddingValueUpdated: {
    type: "boolean",
    default: false,
  }
};

export default attributes;
