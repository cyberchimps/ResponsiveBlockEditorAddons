const { __ } = wp.i18n;

const formInnerBlocks = []

const attributes = {
  block_id: {
    type: "string",
  },
  isFormVariantSelected: {
    type: "boolean",
    default: false,
  },
  formVariant: {
    type: "string",
  },
  formSubmitBtnLabel: {
    type: "string",
    default: __( "Submit", "responsive-block-editor-addons" ),
  },
  formInnerBlocks: {
    type: "array",
    default: formInnerBlocks,
  },
  formEmailTo: {
    type: "string",
    default: "",
  },
  formEmailSubject: {
    type: "string",
    default: "",
  },
  formSuccessMessage: {
    type: "string",
    default: __( "Success", "responsive-block-editor-addons" ),
  },
  formErrorMessage: {
    type: "string",
    default: __( "Error. Please try again.", "responsive-block-editor-addons" ),
  },
  formLabelSize: {
    type: "string",
    default: "16px",
  },
  formLabelInputGap: {
    type: "number",
    default: 10,
  },
  formInputSize: {
    type: "string",
    default: "16px",
  },
  formFieldInputGap: {
    type: "number",
    default: 16,
  },
  inputFieldPadding: {
    type: "object",
    default: {
      top: '8px',
      left: '8px',
      right: '8px',
      bottom: '8px',
    }
  },
  inputFieldPaddingTablet: {
    type: "object",
    default: {
      top: '6px',
      left: '6px',
      right: '6px',
      bottom: '6px',
    }
  },
  inputFieldPaddingMobile: {
    type: "object",
    default: {
      top: '4px',
      left: '4px',
      right: '4px',
      bottom: '4px',
    }
  },
  formInputPaddingToggle: {
    type: "string",
    default: "desktop",
  },
  formButtonLabelColor:{
    type: "string",
    default: "#f9f9f9",
  },
  formButtonLabelBGColor:{
    type: "string",
    default: "#111111",
  },
  formButtonLabelHoverColor:{
    type: "string",
    default: "",
  },
  formButtonLabelHoverBGColor:{
    type: "string",
    default: "",
  },
  formButtonPadding: {
    type: "object",
    default: {
      top: '10px',
      left: '20px',
      right: '20px',
      bottom: '10px',
    }
  },
  formButtonPaddingTablet: {
    type: "object",
    default: {
      top: '8px',
      left: '16px',
      right: '16px',
      bottom: '8px',
    }
  },
  formButtonPaddingMobile: {
    type: "object",
    default: {
      top: '6px',
      left: '12px',
      right: '12px',
      bottom: '6px',
    }
  },
  formButtonBorderRadius: {
    type: "number",
    default: 4,
  },
  formButtonTopRadius: {
    type: "number",
    default: 0,
  },
  formButtonRightRadius: {
    type: "number",
    default: 0,
  },
  formButtonBottomRadius: {
    type: "number",
    default: 0,
  },
  formButtonLeftRadius: {
    type: "number",
    default: 0,
  },
  formButtonTopRadiusTablet: {
    type: "number",
    default: 0,
  },
  formButtonRightRadiusTablet: {
    type: "number",
    default: 0,
  },
  formButtonBottomRadiusTablet: {
    type: "number",
    default: 0,
  },
  formButtonLeftRadiusTablet: {
    type: "number",
    default: 0,
  },
  formButtonTopRadiusMobile: {
    type: "number",
    default: 0,
  },
  formButtonRightRadiusMobile: {
    type: "number",
    default: 0,
  },
  formButtonBottomRadiusMobile: {
    type: "number",
    default: 0,
  },
  formButtonLeftRadiusMobile: {
    type: "number",
    default: 0,
  },
  formButtonIsRadiusControlConnected: {
    type: "boolean",
    default: false,
  },
  formButtonIsRadiusValueUpdated: {
    type: "boolean",
    default: false,
  },
  formButtonPaddingToggle: {
    type: "string",
    default: "desktop",
  },
  formButtonAlign: {
    type: "string",
    default: "left",
  },
  formButtonAlignTablet: {
    type: "string",
    default: "left",
  },
  formButtonAlignMobile: {
    type: "string",
    default: "left",
  },
  formLabelColor: {
    type: "string",
    default: "",
  },
  formInputTextColor: {
    type: "string",
    default: "",
  },
  formInputBGColor: {
    type: "string",
    default: "",
  },
  formBorderColor: {
    type: "string",
    default: "",
  },
  formHelperLabelColor: {
    type: "string",
    default: "",
  },
  formRequiredLabelColor: {
    type: "string",
    default: "",
  },
  formSuccessMessageColor: {
    type: "string",
    default: "",
  },
  formErrorMessageColor: {
    type: "string",
    default: "",
  },
  formBorderRadius: {
    type: "number",
    default: 4,
  },
  formTopRadius: {
    type: "number",
    default: 0,
  },
  formRightRadius: {
    type: "number",
    default: 0,
  },
  formBottomRadius: {
    type: "number",
    default: 0,
  },
  formLeftRadius: {
    type: "number",
    default: 0,
  },
  formTopRadiusTablet: {
    type: "number",
    default: 0,
  },
  formRightRadiusTablet: {
    type: "number",
    default: 0,
  },
  formBottomRadiusTablet: {
    type: "number",
    default: 0,
  },
  formLeftRadiusTablet: {
    type: "number",
    default: 0,
  },
  formTopRadiusMobile: {
    type: "number",
    default: 0,
  },
  formRightRadiusMobile: {
    type: "number",
    default: 0,
  },
  formBottomRadiusMobile: {
    type: "number",
    default: 0,
  },
  formLeftRadiusMobile: {
    type: "number",
    default: 0,
  },
  formIsRadiusControlConnected: {
    type: "boolean",
    default: false,
  },
  formIsRadiusValueUpdated: {
    type: "boolean",
    default: false,
  },
  formBorderWidth: {
    type: "object",
    default: {
      top: '1px',
      left: '1px',
      right: '1px',
      bottom: '1px',
    }
  },
  formHelperTextSize: {
    type: "string",
    default: "14px",
  },
  formSuccessErrorMessageSize: {
    type: "string",
    default: "16px",
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
  formIsMarginControlConnected: {
		type: "boolean",
		default: false,
	},
  formTopMargin: {
    type: "number",
    default: '',
  },
  formTopMarginMobile: {
    type: "number",
    default: '',
  },
  formTopMarginTablet: {
    type: "number",
    default: '',
  },
  formBottomMargin: {
    type: "number",
    default: '',
  },
  formBottomMarginMobile: {
    type: "number",
    default: '',
  },
  formBottomMarginTablet: {
    type: "number",
    default: '',
  },
  formLeftMargin: {
    type: "number",
    default: '',
  },
  formLeftMarginMobile: {
    type: "number",
    default: '',
  },
  formLeftMarginTablet: {
    type: "number",
    default: '',
  },
  formRightMargin: {
    type: "number",
    default: '',
  },
  formRightMarginMobile: {
    type: "number",
    default: '',
  },
  formRightMarginTablet: {
    type: "number",
    default: '',
  },
  formIsPaddingControlConnected: {
		type: "boolean",
		default: false,
	},
  formTopPadding: {
    type: "number",
    default: '',
  },
  formTopPaddingMobile: {
    type: "number",
    default: '',
  },
  formTopPaddingTablet: {
    type: "number",
    default: '',
  },
  formBottomPadding: {
    type: "number",
    default: '',
  },
  formBottomPaddingMobile: {
    type: "number",
    default: '',
  },
  formBottomPaddingTablet: {
    type: "number",
    default: '',
  },
  formLeftPadding: {
    type: "number",
    default: '',
  },
  formLeftPaddingMobile: {
    type: "number",
    default: '',
  },
  formLeftPaddingTablet: {
    type: "number",
    default: '',
  },
  formRightPadding: {
    type: "number",
    default: '',
  },
  formRightPaddingMobile: {
    type: "number",
    default: '',
  },
  formRightPaddingTablet: {
    type: "number",
    default: '',
  },

  formButtonTopPadding: {
    type: "number",
    default: 10,
  },
  formButtonBottomPadding: {
    type: "number",
    default: 10,
  },
  formButtonLeftPadding: {
    type: "number",
    default: 20,
  },
  formButtonRightPadding: {
    type: "number",
    default: 20,
  },
  formButtonTopPaddingTablet: {
    type: "number",
    default: 8,
  },
  formButtonBottomPaddingTablet: {
    type: "number",
    default: 8,
  },
  formButtonRightPaddingTablet: {
    type: "number",
    default: 16,
  },
  formButtonLeftPaddingTablet: {
    type: "number",
    default: 16,
  },
  formButtonTopPaddingMobile: {
    type: "number",
    default: 6,
  },
  formButtonBottomPaddingMobile: {
    type: "number",
    default: 6,
  },
  formButtonLeftPaddingMobile: {
    type: "number",
    default: 12,
  },
  formButtonRightPaddingMobile: {
    type: "number",
    default: 12,
  },
  isFormButtonPaddingMarginValueUpdated: {
    type: "boolean",
    default: false,
  },
  inputFieldTopPadding: {
    type: "number",
    default: 8,
  },
  inputFieldBottomPadding: {
    type: "number",
    default: 8,
  },
  inputFieldLeftPadding: {
    type: "number",
    default: 8,
  },
  inputFieldRightPadding: {
    type: "number",
    default: 8,
  },
  inputFieldTopPaddingTablet: {
    type: "number",
    default: 6,
  },
  inputFieldBottomPaddingTablet: {
    type: "number",
    default: 6,
  },
  inputFieldRightPaddingTablet: {
    type: "number",
    default: 6,
  },
  inputFieldLeftPaddingTablet: {
    type: "number",
    default: 6,
  },
  inputFieldTopPaddingMobile: {
    type: "number",
    default: 4,
  },
  inputFieldBottomPaddingMobile: {
    type: "number",
    default: 4,
  },
  inputFieldLeftPaddingMobile: {
    type: "number",
    default: 4,
  },
  inputFieldRightPaddingMobile: {
    type: "number",
    default: 4,
  },
  isInputFieldPaddingMarginValueUpdated: {
    type: "boolean",
    default: false,
  },
};

export default attributes;
