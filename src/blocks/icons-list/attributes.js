import { type } from "jquery";

const ITEM_COUNT = 1;

const icons = [];

for (var i = 1; i <= 2; i++) {
  icons.push({
    label: "#Label",
    image_icon: "icon",
    icon: "fab fa-arrow-circle-right",
    image: "",
    icon_color: "#3a3a3a",
    label_color: "",
    icon_hover_color: "",
    label_hover_color: "",
    icon_bg_color: "",
    icon_bg_hover_color: "",
    icon_border_color: "",
    icon_border_hover_color: "",
    link: "#",
    target: false,
    disableLink: false,
    hideLabel: false,
  });
}
const attributes = {
  align: {
    type: "string",
    default: "left",
  },
  alignTablet: {
    type: "string",
    default: "left",
  },
  alignMobile: {
    type: "string",
    default: "left",
  },
  icon_count: {
    type: "number",
    default: ITEM_COUNT,
  },
  icons: {
    type: "array",
    default: icons,
  },
  gap: {
    type: "number",
    default: 10,
  },
  inner_gap: {
    type: "number",
    default: 15,
  },
  iconPosition: {
    type: "string",
    default: "middle",
  },
  size: {
    type: "number",
    default: 16,
  },
  sizeMobile: {
    type: "number",
  },
  sizeTablet:{
    type: "number",
  },
  bgSize: {
    type: "number",
    default: 0,
  },
  bgSizeMobile: {
    type: "number",
  },
  bgSizeTablet: {
    type: "number",
  },
  border: {
    type: "number",
    default: 0,
  },
  borderRadius: {
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
  hideLabel: {
    type: "boolean",
    default: false,
  },
  labelFontFamily: {
    type: "string",
  },
  labelFontColor: {
    type: "string",
  },
  labelFontColorHover: {
    type: "string",
  },
  labelFontWeight: {
    type: "string",
  },
  labelFontSize: {
    type: "number",
  },
  labelFontSizeTablet: {
    type: "number",
  },
  labelFontSizeMobile: {
    type: "number",
  },
  labelLineHeight: {
    type: "number",
    default: 1,
  },
  icon_layout: {
    type: "string",
    default: "vertical",
  },
  fontSizeType: {
    type: "string",
    default: "px",
  },
  block_id: {
    type: "string",
    default: 1,
  },
  labelFontLineHeight: {
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
  },
  z_indexTablet: {
    type: "number",
  },
  z_indexMobile: {
    type: "number",
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
  iconColor: {
    type: "string",
    default: "",
  },
  iconColorHover: {
    type: "string",
    default: "",
  },
  iconBackgroundColor: {
    type: "string",
    default: "",
  },
  iconBackgroundColorHover: {
    type: "string",
    default: "",
  },
  iconBorderColor: {
    type: "string",
    default: "",
  },
  iconBorderColorHover: {
    type: "string",
    default: "",
  },
  iconListUpdateColorFromParent: {
    type: "boolean",
    default: false,
  }
};

export default attributes;
