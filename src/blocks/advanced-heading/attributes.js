const attributes = {
  headingTitle: {
    source: "html",
    selector: "h1,h2,h3,h4,h5,h6",
      default:"Write a Heading",
  },
  block_id: {
    type: "string",
  },
  headingId: {
    type: "string",
  },
  headingDesc: {
    source: "html",
    selector: "p",
    default: "Write some text",
  },
  showHeading: {
    type: "boolean",
    default: "true",
  },
  showSubHeading: {
    type: "boolean",
    default: "true",
  },
  showSeparator: {
    type: "boolean",
    default: "true",
  },
  seperatorStyle: {
    type: "string",
    default: "solid",
  },
  seperatorPosition: {
    type: "string",
    default: "belowTitle",
  },
  separatorHeight: {
    type: "number",
    default: 3,
  },
  separatorWidth: {
    type: "number",
    default: 20,
  },
  separatorWidthType: {
    type: "string",
    default: "%",
  },
  separatorColor: {
    type: "string",
  },
  headSpacing: {
    type: "number",
    default: 15,
  },
  subheadSpacing: {
    type: "number",
    default: 15,
  },
  separatorSpacing: {
    type: "number",
    default: 15,
  },
  headSpacingTablet: {
    type: "number",
    default: 15,
  },
  subheadSpacingTablet: {
    type: "number",
    default: 15,
  },
  separatorSpacingTablet: {
    type: "number",
    default: 15,
  },
  headSpacingMobile: {
    type: "number",
    default: 15,
  },
  subheadSpacingMobile: {
    type: "number",
    default: 15,
  },
  separatorSpacingMobile: {
    type: "number",
    default: 15,
  },
  headingTitleFontFamily: {
    type: "string",
  },
  headingTitleFontSize: {
    type: "number",
  },
  headingTitleFontSizeMobile: {
    type: "number",
  },
  headingTitleFontSizeTablet: {
    type: "number",
  },
  headingTitleFontWeight: {
    type: "string",
    default: "600",
  },
  headingTitleLineHeight: {
    type: "number",
    default: 1,
  },
  headingTitleLetterSpacing: {
    type: "number",
    default: 0,
  },
  headingTitleColor: {
    type: "string",
  },
  subHeadingTitleFontFamily: {
    type: "string",
  },
  subHeadingTitleFontSize: {
    type: "number",
  },
  subHeadingTitleFontSizeMobile: {
    type: "number",
  },
  subHeadingTitleFontSizeTablet: {
    type: "number",
  },
  subHeadingTitleFontWeight: {
    type: "string",
    default: "400",
  },
  subHeadingTitleLineHeight: {
    type: "number",
    default: 1,
  },
  subHeadingTitleLetterSpacing: {
    type: "number",
    default: 0,
  },
  subHeadingTitleColor: {
    type: "string",
  },
  headingTag: {
    type: "string",
    default: "h2",
  },
  level: {
    type: "number",
    default: 2,
  },
  headingAlignment: {
    type: "string",
    default: "center",
  },
  headingAlignmentTablet: {
    type: "string",
    default: "center",
  },
  headingAlignmentMobile: {
    type: "string",
    default: "center",
  },
  textDecoration: {
    type: "string",
    default: "none"
  },
  textDecorationSubHeading: {
    type: "string",
    default: "none"
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
  blockTopPadding: {
    type: "number",
    default: 10,
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
    default: 10,
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
    default: 10,
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
    default: 10,
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
    default: 0,
  },
  blockBottomMargin: {
    type: "number",
    default: 0,
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
  topMargin: {
	  type: "number",
	  default: 999,
  },
  bottomMargin: {
	type: "number",
	default: 999,
  },
  leftMargin: {
	type: "number",
	default: 999,
  },
  rightMargin: {
	type: "number",
	default: 999,
  },
  topPadding: {
	type: "number",
	default: 999,
  },
  bottomPadding: {
    type: "number",
    default: 999,
  },
  leftPadding: {
    type: "number",
    default: 999,
  },
  rightPadding: {
    type: "number",
    default: 999,
  },
  topMarginMobile: {
	type: "number",
	default: 999,
  },
  bottomMarginMobile: {
    type: "number",
    default: 999,
  },
  leftMarginMobile: {
    type: "number",
    default: 999,
  },
  rightMarginMobile: {
    type: "number",
    default: 999,
  },
  topPaddingMobile: {
    type: "number",
    default: 999,
  },
  bottomPaddingMobile: {
    type: "number",
    default: 999,
  },
  leftPaddingMobile: {
    type: "number",
    default: 999,
  },
  rightPaddingMobile: {
    type: "number",
    default: 999,
  },
  topMarginTablet: {
	type: "number",
	default: 999,
  },
  bottomMarginTablet: {
	type: "number",
	default: 999,
  },
  leftMarginTablet: {
	type: "number",
	default: 999,
  },
  rightMarginTablet: {
	type: "number",
	default: 999,
  },
  topPaddingTablet: {
	type: "number",
	default: 999,
  },
  bottomPaddingTablet: {
	type: "number",
	default: 999,
  },
  leftPaddingTablet: {
	type: "number",
	default: 999,
  },
  rightPaddingTablet: {
	type: "number",
	default: 999,
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
  blockIsPaddingControlConnected: {
		type: "boolean",
		default: false,
	},
  blockIsMarginControlConnected: {
		type: "boolean",
		default: false,
	},
  blockIsTypographyColorValueUpdated: {
    type: "boolean",
    default: false,
  },
  subHeadingTitleTypographyColor: {
    type: "string",
  },
  headingTitleTypographyColor: {
    type: "string",
  },
  blockIsBottomSpacingValueUpdated : {
    type: "boolean",
    default: false,
  },
  headingTitleBottomSpacing: {
    type: "number",
    default: 15,
  },
  headingTitleBottomSpacingMobile: {
    type: "number",
    default: 15,
  },
  headingTitleBottomSpacingTablet: {
    type: "number",
    default: 15,
  },
  subHeadingTitleBottomSpacing: {
    type: "number",
    default: 15,
  },
  subHeadingTitleBottomSpacingMobile: {
    type: "number",
    default: 15,
  },
  subHeadingTitleBottomSpacingTablet: {
    type: "number",
    default: 15,
  },
  headingTitleTextDecoration: {
    type: "string",
    default: 'none',
  },
  subHeadingTitleTextDecoration: {
    type: "string",
    default: 'none',
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
