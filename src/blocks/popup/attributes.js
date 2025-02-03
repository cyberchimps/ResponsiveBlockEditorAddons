const attributes = {
    block_id: {
        type: "string",
    },
    isPopupVariantSelected: {
        type: "boolean",
        default: false,
    },
    popupVariant: {
        type: "string",
    },
    popupContainerWidth: {
        type: "number",
        default: 600,
    },
    popupContainerWidthTablet: {
        type: "number",
        default: 600,
    },
    popupContainerWidthMobile: {
        type: "number",
        default: 600,
    },
    popupHeightType: {
        type: "string",
        default: "auto",
    },
    popupHeightCustom: {
        type: "number",
        default: 500,
    },
    popupHeightCustomTablet: {
        type: "number",
        default: 500,
    },
    popupHeightCustomMobile: {
        type: "number",
        default: 500,
    },
    popupPaddingTop: {
        type: "number",
        default: 20,
    },
    popupPaddingTopTablet: {
        type: "number",
        default: 15,
    },
    popupPaddingTopMobile: {
        type: "number",
        default: 10,
    },
    popupPaddingBottom: {
        type: "number",
        default: 20,
    },
    popupPaddingBottomTablet: {
        type: "number",
        default: 15,
    },
    popupPaddingBottomMobile: {
        type: "number",
        default: 10,
    },
    popupPaddingLeft: {
        type: "number",
        default: 20,
    },
    popupPaddingLeftTablet: {
        type: "number",
        default: 15,
    },
    popupPaddingLeftMobile: {
        type: "number",
        default: 10,
    },
    popupPaddingRight: {
        type: "number",
        default: 20,
    },
    popupPaddingRightTablet: {
        type: "number",
        default: 15,
    },
    popupPaddingRightMobile: {
        type: "number",
        default: 10,
    },
    popupScreenType: {
        type: "string",
        default: "center center"
    },
    popupScreenTypeMobile: {
        type: "string",
        default: "center center"
    },
    popupScreenTypeTablet: {
        type: "string",
        default: "center center"
    },
    popupTrigger: {
        type: "string",
        default: "load"
    },
    popupTriggerDelay: {
        type: "number",
        default: 1
    },
    popupToggleCloseBtn: {
        type: "boolean",
        default: true,
    },
    popupToggleCloseBtnPosition: {
        type: "string",
        default: "flex-end"
    },
    popupBgType: {
        type: "string",
        default: "color",
    },
    popupGradient: {
        type: "string",
        default: 'linear-gradient(135deg,#12c2e9 0%,#c471ed 50%,#f64f59 100%)',
    },
    popupBgColor: {
        type: "string",
        default: "#fff",
    },
    popupCloseBtnColor: {
        type: "string",
        default: "#000",
    },
    popupOverlayColor: {
        type: "string",
        default: "#10659C",
    },
    popupOverlayOpacity: {
        type: "number",
        default: 30,
    },
    popupBlockBorderStyle: {
        type: "string",
        default: "solid",
    },
    popupBlockBorderWidth: {
        type: "number",
        default: 1,
    },
    popupBlockBorderRadius: {
        type: "number",
        default: 2,
    },
    popupBlockTopRadius: {
        type: "number",
        default: 0,
      },
      popupBlockRightRadius: {
        type: "number",
        default: 0,
      },
      popupBlockBottomRadius: {
        type: "number",
        default: 0,
      },
      popupBlockLeftRadius: {
        type: "number",
        default: 0,
      },
      popupBlockTopRadiusTablet: {
        type: "number",
        default: 0,
      },
      popupBlockRightRadiusTablet: {
        type: "number",
        default: 0,
      },
      popupBlockBottomRadiusTablet: {
        type: "number",
        default: 0,
      },
      popupBlockLeftRadiusTablet: {
        type: "number",
        default: 0,
      },
      popupBlockTopRadiusMobile: {
        type: "number",
        default: 0,
      },
      popupBlockRightRadiusMobile: {
        type: "number",
        default: 0,
      },
      popupBlockBottomRadiusMobile: {
        type: "number",
        default: 0,
      },
      popupBlockLeftRadiusMobile: {
        type: "number",
        default: 0,
      },
      popupBlockIsRadiusControlConnected: {
            type: "boolean",
            default: false,
        },
      popupBlockIsRadiusValueUpdated: {
        type: "boolean",
        default: false,
      },
    popupBlockBorderColor: {
        type: "string",
        default: "black",
    },
    popupTriggerType: {
        type: "string",
        default: "button",
    },
    popupTriggerAlign: {
        type: "string",
        default: "left",
    },
    popupTriggerAlignTablet: {
        type: "string",
        default: "left",
    },
    popupTriggerAlignMobile: {
        type: "string",
        default: "left",
    },
    popupButtonPreset: {
        type: "string",
        default: "",
    },
    popupIconTrigger: {
        type: "string",
        default: "fa fa-angellist",
    },
    popupImageTrigger: {
        type: "string",
    },
    popupTextTrigger: {
        type: "string",
        default: "Click Here"
    },
    popupButtonHoverState: {
        type: "boolean",
        default: false,
    },
    popupButtonColor: {
        type: "string",
        default: "#fff",
    },
    popupButtonBGColor: {
        type: "string",
        default: "#10659C",
    },
    popupButtonBGGradient: {
        type: "string",
        default: "linear-gradient(135deg,#12c2e9 0%,#c471ed 50%,#f64f59 100%)",
    },
    popupButtonHoverColor: {
        type: "string",
        default: "#fff",
    },
    popupButtonBGHoverColor: {
        type: "string",
        default: "#10659C",
    },
    popupButtonHoverBGGradient: {
        type: "string",
        default: "linear-gradient(135deg,#12c2e9 0%,#c471ed 50%,#f64f59 100%)",
    },
    popupButtonBGState: {
        type: "string",
        default: "solid",
    },
    popupButtonBGHoverState: {
        type: "string",
        default: "solid",
    },
    popupButtonTypographyFontFamily: {
        type: "string",
    },
    popupButtonTypographyFontSize: {
        type: "number",
    },
    popupButtonTypographyFontSizeMobile: {
        type: "number",
    },
    popupButtonTypographyFontSizeTablet: {
        type: "number",
    },
    popupButtonTypographyFontWeight: {
        type: "string",
        default: "600",
    },
    popupButtonTypographyLineHeight: {
        type: "number",
        default: 1,
    },
    popupButtonTypographyLetterSpacing: {
        type: "number",
        default: 0,
    },
    popupButtonBorderStyle: {
        type: "string",
        default: "solid",
    },
    popupButtonBorderWidth: {
        type: "number",
        default: 1,
    },
    popupButtonBorderRadius: {
        type: "number",
        default: 2,
    },
    popupButtonTopRadius: {
        type: "number",
        default: 0,
    },
    popupButtonRightRadius: {
        type: "number",
        default: 0,
    },
    popupButtonBottomRadius: {
        type: "number",
        default: 0,
    },
    popupButtonLeftRadius: {
        type: "number",
        default: 0,
    },
    popupButtonTopRadiusTablet: {
        type: "number",
        default: 0,
    },
    popupButtonRightRadiusTablet: {
        type: "number",
        default: 0,
    },
    popupButtonBottomRadiusTablet: {
        type: "number",
        default: 0,
    },
    popupButtonLeftRadiusTablet: {
        type: "number",
        default: 0,
    },
    popupButtonTopRadiusMobile: {
        type: "number",
        default: 0,
    },
    popupButtonRightRadiusMobile: {
        type: "number",
        default: 0,
    },
    popupButtonBottomRadiusMobile: {
        type: "number",
        default: 0,
    },
    popupButtonLeftRadiusMobile: {
        type: "number",
        default: 0,
    },
    popupButtonIsRadiusControlConnected: {
            type: "boolean",
            default: false,
        },
    popupButtonIsRadiusValueUpdated: {
        type: "boolean",
        default: false,
    },
    popupButtonTopRadius: {
        type: "number",
        default: 0,
    },
    popupButtonRightRadius: {
        type: "number",
        default: 0,
    },
    popupButtonBottomRadius: {
        type: "number",
        default: 0,
    },
    popupButtonLeftRadius: {
        type: "number",
        default: 0,
    },
    popupButtonTopRadiusTablet: {
        type: "number",
        default: 0,
    },
    popupButtonRightRadiusTablet: {
        type: "number",
        default: 0,
    },
    popupButtonBottomRadiusTablet: {
        type: "number",
        default: 0,
    },
    popupButtonLeftRadiusTablet: {
        type: "number",
        default: 0,
    },
    popupButtonTopRadiusMobile: {
        type: "number",
        default: 0,
    },
    popupButtonRightRadiusMobile: {
        type: "number",
        default: 0,
    },
    popupButtonBottomRadiusMobile: {
        type: "number",
        default: 0,
    },
    popupButtonLeftRadiusMobile: {
        type: "number",
        default: 0,
    },
    popupButtonIsRadiusControlConnected: {
            type: "boolean",
            default: false,
        },
    popupButtonIsRadiusValueUpdated: {
        type: "boolean",
        default: false,
    },
    popupButtonBorderColor: {
        type: "string",
        default: 'black',
    },
    popupButtonBorderHoverColor: {
        type: "string",
    },
    popupTextColor: {
        type: "string",
        default: "black",
    },
    popupTextTypographyFontFamily: {
        type: "string",
    },
    popupTextTypographyFontSize: {
        type: "number",
    },
    popupTextTypographyFontSizeMobile: {
        type: "number",
    },
    popupTextTypographyFontSizeTablet: {
        type: "number",
    },
    popupTextTypographyFontWeight: {
        type: "string",
        default: "600",
    },
    popupTextTypographyLineHeight: {
        type: "number",
        default: 1,
    },
    popupTextTypographyLetterSpacing: {
        type: "number",
        default: 0,
    },
    popupIconTriggerSize: {
        type: "number",
        default: 30,
    },
    popupIconTriggerColor: {
        type: "string",
        default: "#000",
    },
    popupImageTriggerWidth: {
        type: "number",
        default: 350,
    },
    popupImageTriggerWidthTablet: {
        type: "number",
        default: 350,
    },
    popupImageTriggerWidthMobile: {
        type: "number",
        default: 350,
    },
    popupImageTriggerBorderRadius: {
        type: "number",
        default: 0,
    },
    popupImageTriggerTopRadius: {
      type: "number",
      default: 0,
    },
    popupImageTriggerRightRadius: {
      type: "number",
      default: 0,
    },
    popupImageTriggerBottomRadius: {
      type: "number",
      default: 0,
    },
    popupImageTriggerLeftRadius: {
      type: "number",
      default: 0,
    },
    popupImageTriggerTopRadiusTablet: {
      type: "number",
      default: 0,
    },
    popupImageTriggerRightRadiusTablet: {
      type: "number",
      default: 0,
    },
    popupImageTriggerBottomRadiusTablet: {
      type: "number",
      default: 0,
    },
    popupImageTriggerLeftRadiusTablet: {
      type: "number",
      default: 0,
    },
    popupImageTriggerTopRadiusMobile: {
      type: "number",
      default: 0,
    },
    popupImageTriggerRightRadiusMobile: {
      type: "number",
      default: 0,
    },
    popupImageTriggerBottomRadiusMobile: {
      type: "number",
      default: 0,
    },
    popupImageTriggerLeftRadiusMobile: {
      type: "number",
      default: 0,
    },
    popupImageTriggerIsRadiusControlConnected: {
      type: "boolean",
      default: false,
    },
    popupImageTriggerIsRadiusValueUpdated: {
      type: "boolean",
      default: false,
    },
    popupButtonText: {
        type: "string",
        default: "Click Here",
    },
    popupButtonPaddingTop: {
        type: "string",
        default: 14, 
    },
    popupButtonPaddingTopTablet: {
        type: "string",
        default: 14, 
    },
    popupButtonPaddingTopMobile: {
        type: "string",
        default: 14, 
    },
    popupButtonPaddingBottom: {
        type: "string",
        default: 14, 
    },
    popupButtonPaddingBottomTablet: {
        type: "string",
        default: 14, 
    },
    popupButtonPaddingBottomMobile: {
        type: "string",
        default: 14, 
    },
    popupButtonPaddingLeft: {
        type: "string",
        default: 32, 
    },
    popupButtonPaddingLeftTablet: {
        type: "string",
        default: 32, 
    },
    popupButtonPaddingLeftMobile: {
        type: "string",
        default: 32, 
    },
    popupButtonPaddingRight: {
        type: "string",
        default: 32, 
    },
    popupButtonPaddingRightTablet: {
        type: "string",
        default: 32, 
    },
    popupButtonPaddingRightMobile: {
        type: "string",
        default: 32,
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
    buttonTopMargin: {
      type: "number",
      default: '',
    },
    buttonBottomMargin: {
      type: "number",
      default: '',
    },
    buttonLeftMargin: {
      type: "number",
      default: '',
    },
    buttonRightMargin: {
      type: "number",
      default: '',
    },
    buttonTopMarginTablet: {
      type: "number",
      default: '',
    },
    buttonBottomMarginTablet: {
      type: "number",
      default: '',
    },
    buttonLeftMarginTablet: {
      type: "number",
      default: '',
    },
    buttonRightMarginTablet: {
      type: "number",
      default: '',
    },
    buttonTopMarginMobile: {
      type: "number",
      default: '',
    },
    buttonBottomMarginMobile: {
      type: "number",
      default: '',
    },
    buttonLeftMarginMobile: {
      type: "number",
      default: '',
    },
    buttonRightMarginMobile: {
      type: "number",
      default: '',
    },
    buttonIsMarginControlConnected: {
      type: "boolean",
      default: false,
    },
    buttonIsPaddingControlConnected: {
      type: "boolean",
      default: false,
    },
    buttonTopPadding: {
      type: "number",
      default: '',
    },
    buttonTopPaddingMobile: {
      type: "number",
      default: '',
    },
    buttonTopPaddingTablet: {
      type: "number",
      default: '',
    },
    buttonBottomPadding: {
      type: "number",
      default: '',
    },
    buttonBottomPaddingMobile: {
      type: "number",
      default: '',
    },
    buttonBottomPaddingTablet: {
      type: "number",
      default: '',
    },
    buttonLeftPadding: {
      type: "number",
      default: '',
    },
    buttonLeftPaddingMobile: {
      type: "number",
      default: '',
    },
    buttonLeftPaddingTablet: {
      type: "number",
      default: '',
    },
    buttonRightPadding: {
      type: "number",
      default: '',
    },
    buttonRightPaddingMobile: {
      type: "number",
      default: '',
    },
    buttonRightPaddingTablet: {
      type: "number",
      default: '',
    },
    popupTextTypographyTypographyColor: {
        type: "string",
        default: "black",
    },
    blockIsTypographyColorValueUpdated: {
        type: "boolean",
        default: false,
    },
    popupTopPadding: {
      type: "number",
      default: 20,
    },
    popupTopPaddingMobile: {
      type: "number",
      default: 10,
    },
    popupTopPaddingTablet: {
      type: "number",
      default: 15,
    },
    popupBottomPadding: {
      type: "number",
      default: 20,
    },
    popupBottomPaddingMobile: {
      type: "number",
      default: 10,
    },
    popupBottomPaddingTablet: {
      type: "number",
      default: 15,
    },
    popupLeftPadding: {
      type: "number",
      default: 20,
    },
    popupLeftPaddingMobile: {
      type: "number",
      default: 10,
    },
    popupLeftPaddingTablet: {
      type: "number",
      default: 15,
    },
    popupRightPadding: {
      type: "number",
      default: 20,
    },
    popupRightPaddingMobile: {
      type: "number",
      default: 10,
    },
    popupRightPaddingTablet: {
      type: "number",
      default: 15,
    },
    popupIsPaddingControlConnected: {
      type: "boolean",
      default: false,
    },
};

export default attributes;
