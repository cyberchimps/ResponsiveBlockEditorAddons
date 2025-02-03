const attributes = {
	block_id: {
	  type: "string",
	},
	//Phone number and email
	callText:{
		type: "string",
		default: "Call"
	},
	mailText:{
		type: "string",
		default: "Mail"
	},
	phone: {
		type: "string",
		default: ""
	},
	mail: {
		type: "string",
		default: ""
	},
	showCallButton: {
		type: "boolean",
		default: true
	},
	showMailButton: {
		type: "boolean",
		default: true
	},
	buttonToShow: {
		type: "string",
		default: "call"
	},
	isValidNumber: {
		type: "boolean",
		default: false
	},
	isValidMail: {
		type: "boolean",
		default: false
	},
	//ButtonSize
	buttonSize: {
		type: "string",
		default: "responsive-block-editor-addons-call-mail-button-size-medium"
	},
	//Button Width
	buttonWidthType: {
		type: "string",
		default: "fixed"
	},
	buttonWidth: {
		type: "number",
		default: 200
	},
	buttonWidthMobile: {
		type: "number",
		default: 200
	},
	buttonWidthTablet: {
		type: "number",
		default: 200
	},
	//Icon
	icon: {
		type: "string",
		default: ""
	},
	iconPosition: {
		type: "string",
		default: "left"
	},
	iconSize: {
		type: "number",
		default: ""
	},
	iconSizeMobile: {
		type: "number",
		default: ""
	},
	iconSizeTablet: {
		type: "number",
		default: ""
	},
	//Colors
	buttonColor: {
		type: "string",
		default: "#4aac38"
	},
	buttonTextColor: {
		type: "string",
		default: "#ffffff"
	},
	buttonColorHover: {
		type: "string",
		default: ""
	},
	buttonTextColorHover: {
		type: "string",
		default: "#ffffff"
	},
	//Button Styles
	buttonRounded: {
		type: "boolean",
		default: false
	},
	buttonTransparent: {
		type: "boolean",
		default: false,
	},
	buttonRadius: {
		type: "number",
		default: 0
	},
	//Button Text TYpography
	textFontFamily: {
		type: "string",
		default: ""
	},
	textFontSize: {
		type: "number",
		default: ""
	},
	textFontSizeMobile: {
		type: "number",
		default: ""
	},
	textFontSizeTablet: {
		type: "number",
		default: ""
	},
	textFontWeight: {
		type: "string",
		default: 100
	},
	textLineHeight: {
		type: "number",
		default: 1
	},
	blockTopMargin: {
		type: "number",
		default: 10
	},
	blockBottomMargin: {
		type: "number",
		default: 10
	},
	blockLeftMargin: {
		type: "number",
		default: 10
	},
	blockRightMargin: {
		type: "number",
		default: 10
	},
	blockTopMarginMobile: {
		type: "number",
		default: 10
	},
	blockBottomMarginMobile: {
		type: "number",
		default: 10
	},
	blockLeftMarginMobile: {
		type: "number",
		default: 10
	},
	blockRightMarginMobile: {
		type: "number",
		default: 10
	},
	blockTopMarginTablet: {
		type: "number",
		default: 10
	},
	blockBottomMarginTablet: {
		type: "number",
		default: 10
	},
	blockLeftMarginTablet: {
		type: "number",
		default: 10
	},
	blockRightMarginTablet: {
		type: "number",
		default: 10
	},
	blockTopPadding: {
		type: "number",
		default: 10
	},
	blockBottomPadding: {
		type: "number",
		default: 10
	},
	blockLeftPadding: {
		type: "number",
		default: 10
	},
	blockRightPadding: {
		type: "number",
		default: 10
	},
	blockTopPaddingMobile: {
		type: "number",
		default: 10
	},
	blockBottomPaddingMobile: {
		type: "number",
		default: 10
	},
	blockLeftPaddingMobile: {
		type: "number",
		default: 10
	},
	blockRightPaddingMobile: {
		type: "number",
		default: 10
	},
	blockTopPaddingTablet: {
		type: "number",
		default: 10
	},
	blockBottomPaddingTablet: {
		type: "number",
		default: 10
	},
	blockLeftPaddingTablet: {
		type: "number",
		default: 10
	},
	blockRightPaddingTablet: {
		type: "number",
		default: 10
	},
	iconTextGap: {
		type: "number",
		default: 5
	},
	iconTextGapMobile: {
		type: "number",
		default: 3
	},
	iconTextGapTablet: {
		type: "number",
		default: 5
	},
	buttonAlign: {
		type: "string",
		default: 'left',
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
	blockIsMarginControlConnected: {
		type: "boolean",
		default: false,
	},
	buttonStyleToggle: {
		type: "string",
		default: "",
	},
	hasButtonStyleToggleUpdated: {
		type: "boolean",
		default: false,
	},
  };
  
  export default attributes;
  