/**
 * Inspector Controls
 */
import TypographyHelperControl from "../../../settings-components/TypographySettings";
import ResponsiveSpacingControl from "../../../settings-components/ResponsiveSpacingSettings";
import ButtonSettingsControl from "./ButtonSettings";

import BlockBorderHelperControl from "../../../settings-components/BlockBorderSettings";
import BoxShadowControl from "../../../utils/components/box-shadow";


import BoxShadowControlHelper from "../../../utils/components/box-shadow-helper";
import ColorBackgroundControl from "../../../settings-components/BlockBackgroundSettings/ColorBackgroundSettings";
import ImageBackgroundControl from "../../../settings-components/BlockBackgroundSettings/ImageBackgroundSettings";
import GradientBackgroundControl from "../../../settings-components/BlockBackgroundSettings/GradientBackgroundSettings";
import ImageHoverBackgroundSettings from "../../../settings-components/BlockBackgroundSettings/ImageHoverBackgroundSettings";
import { Placeholder} from '@wordpress/components';
import ResponsiveNewPaddingControl from "../../../settings-components/ResponsiveNewSpacingSettings/ResponsiveNewPaddingControl/index";
import ResponsiveNewMarginControl from "../../../settings-components/ResponsiveNewSpacingSettings/ResponsiveNewMarginControl/index";
import RbeaRangeControl from "../../../utils/components/rbea-range-control";
import RbeaColorControl from "../../../utils/components/rbea-color-control";
import RbeaTabRadioControl from "../../../utils/components/rbea-tab-radio-control";
import RbeaBackgroundTypeControl from "../../../utils/components/rbea-background-type-control";
import RbeaBorderRadiusControl from "../../../settings-components/RbeaBorderRadiusControl";
import RbeaBlockBorderHelperControl from "../../../settings-components/RbeaBlockBorderSettings";

// Setup the block
const { __ } = wp.i18n;
const { Component, Fragment } = wp.element;
import fontOptions from "../../../utils/googlefonts";
import { loadGoogleFont } from "../../../utils/font";
import InspectorTab from "../../../components/InspectorTab";
import InspectorTabs from "../../../components/InspectorTabs";


// Import block components
const {
  InspectorControls,
  PanelColorSettings,
  ColorPalette,
  AlignmentToolbar,
} = wp.editor;

// Import Inspector components
const {
  PanelBody,
  ComboboxControl,
  RangeControl,
  SelectControl,
  ButtonGroup,
  Button,
  ToggleControl,
  TabPanel,
  Dashicon,
  BaseControl,
	align,
	formJson,
} = wp.components;

/**
 * Create an Inspector Controls wrapper Component
 */
export default class Inspector extends Component {
  constructor(props) {
    super(...arguments);
    this.toggleEnableCustomStyles = this.toggleEnableCustomStyles.bind(this);
    this.toggleShowPlaceholder = this.toggleShowPlaceholder.bind(this);
  }

  

  /*
	 * Event to set Image as while adding.
	 */
	onSelectForm ( id ) {
    const { setAttributes } = this.props;
		if ( ! id ) {
			setAttributes( { isHtml: false } );
			setAttributes( { formId: null } );
			return;
		}

		setAttributes( { isHtml: false } );
		setAttributes( { formId: id } );
	};


  /*
   * Heading Tag Change
   */
  onTagChange(value) {
    const { setAttributes } = this.props;


    setAttributes({ formTitleTag: value });
  }
  

  toggleEnableCustomStyles() {
    const { enableCustomStyles } = this.props.attributes;
    const { setAttributes } = this.props;

    setAttributes({ enableCustomStyles: !enableCustomStyles });
  }
  toggleShowPlaceholder() {
    const { showPlaceholder } = this.props.attributes;
    const { setAttributes } = this.props;

    setAttributes({ showPlaceholder: !showPlaceholder });
  }
  render() {
    // Font Weight Options
    const fontWeightOptions = [
      {
        value: "100",
        label: __("100", "responsive-block-editor-addons"),
      },
      {
        value: "200",
        label: __("200", "responsive-block-editor-addons"),
      },
      {
        value: "300",
        label: __("300", "responsive-block-editor-addons"),
      },
      {
        value: "400",
        label: __("400", "responsive-block-editor-addons"),
      },
      {
        value: "500",
        label: __("500", "responsive-block-editor-addons"),
      },
      {
        value: "600",
        label: __("600", "responsive-block-editor-addons"),
      },
      {
        value: "700",
        label: __("700", "responsive-block-editor-addons"),
      },
      {
        value: "800",
        label: __("800", "responsive-block-editor-addons"),
      },
      {
        value: "900",
        label: __("900", "responsive-block-editor-addons"),
      },
    ];

    // Text Decoration Options
    const textDecorationOptions = [
      {
        value: "none",
        label: __("Default", "responsive-block-editor-addons"),
      },
      {
        value: "underline",
        label: __("Underline", "responsive-block-editor-addons"),
      },
      {
        value: "overline",
        label: __("Overline", "responsive-block-editor-addons"),
      },
      {
        value: "line-through",
        label: __("Line Through", "responsive-block-editor-addons"),
      },
    ];

    // Background Type Options
    const backgroundTypeOptions = [
      { value: "color", label: __("Color", "responsive-block-editor-addons") },
      {
        value: "gradient",
        label: __("Gradient", "responsive-block-editor-addons"),
      },
    ];

    // Setup the attributes
    const {
      attributes: {
        formId,
        align,
        isHtml,
        formJson,
        formTitleTag,
        showFormTitle,
        showFormDescription,
        showLabels,
        showErrorMsgs,
        formAlignment,
        formAlignmentMobile,
        formAlignmentTablet,
        formWidth,
        formWidthMobile,
        formWidthTablet,
        topPadding,
        bottomPadding,
        leftPadding,
        rightPadding,
        topPaddingTablet,
        bottomPaddingTablet,
        leftPaddingTablet,
        rightPaddingTablet,
        topPaddingMobile,
        bottomPaddingMobile,
        leftPaddingMobile,
        rightPaddingMobile,
        topMargin,
        bottomMargin,
        leftMargin,
        rightMargin,
        topMarginTablet,
        bottomMarginTablet,
        leftMarginTablet,
        rightMarginTablet,
        topMarginMobile,
        bottomMarginMobile,
        leftMarginMobile,
        rightMarginMobile,
        formBorderRadius,
        formTopRadius,
        formRightRadius,
        formBottomRadius,
        formLeftRadius,
        formTopRadiusTablet,
        formRightRadiusTablet,
        formBottomRadiusTablet,
        formLeftRadiusTablet,
        formTopRadiusMobile,
        formRightRadiusMobile,
        formBottomRadiusMobile,
        formLeftRadiusMobile,
        formIsRadiusControlConnected,
        formBorderStyle,
        formBorderWidth,
        formBorderColor,
        //Box Shadow Control
        boxShadowColor,
        boxShadowHOffset,
        boxShadowVOffset,
        boxShadowBlur,
        boxShadowSpread,
        boxShadowPosition,
        hoverboxShadowColor,
        hoverboxShadowHOffset,
        hoverboxShadowVOffset,
        hoverboxShadowBlur,
        hoverboxShadowSpread,
        hoverboxShadowPosition,
        formTitleAlignment,
        formTitleAlignmentMobile,
        formTitleAlignmentTablet,
        formTitleFontFamily,
        formTitleFontSize,
        formTitleFontSizeTablet,
        formTitleFontSizeMobile,
        formTitleFontWeight,
        formTitleLineHeight,
        formTitleLetterSpacing,
        formTitleColor,
        formDescriptionFontFamily,
        formDescriptionFontSize,
        formDescriptionFontSizeTablet,
        formDescriptionFontSizeMobile,
        formDescriptionFontWeight,
        formDescriptionLineHeight,
        formDescriptionLetterSpacing,
        formDescriptionColor,         
        inputTextColor,
        inputBackgroundColor,       
        //Border
        inputBorderRadius,
        inputTopRadius,
        inputRightRadius,
        inputBottomRadius,
        inputLeftRadius,
        inputTopRadiusTablet,
        inputRightRadiusTablet,
        inputBottomRadiusTablet,
        inputLeftRadiusTablet,
        inputTopRadiusMobile,
        inputRightRadiusMobile,
        inputBottomRadiusMobile,
        inputLeftRadiusMobile,
        inputIsRadiusControlConnected,
        inputBorderColor,
        inputBorderStyle,
        inputBorderWidth,
        inputBoxShadowColor,
        inputBoxShadowHOffset,
        inputBoxShadowVOffset,
        inputBoxShadowBlur,
        inputBoxShadowSpread,
        inputBoxShadowPosition,
        //Padding
        inputTopPadding,
        inputRightPadding,
        inputBottomPadding,
        inputLeftPadding,
        inputTopPaddingMobile,
        inputRightPaddingMobile,
        inputBottomPaddingMobile,
        inputLeftPaddingMobile,
        inputTopPaddingTablet,
        inputRightPaddingTablet,
        inputBottomPaddingTablet,
        inputLeftPaddingTablet,
        textIndent,
        textIndentMobile,
        textIndentTablet,
        inputWidth,
        inputWidthMobile,
        inputWidthTablet,
        inputHeight,
        inputHeightMobile,
        inputHeightTablet,
        textareaWidth,
        textareaWidthMobile,
        textareaWidthTablet,
        textareaHeight,
        textareaHeightMobile,
        textareaHeightTablet,
        //Input Typography
        inputFontFamily,
        inputFontSize,
        inputFontSizeMobile,
        inputFontSizeTablet,
        inputFontWeight,
        inputLineHeight,
        inputLetterSpacing,
        //Label Typography
        labelFontFamily,
        labelFontSize,
        labelFontSizeMobile,
        labelFontSizeTablet,
        labelFontWeight,
        labelLineHeight,
        labelLetterSpacing,
        labelSpacing,
        labelSpacingMobile,
        labelSpacingTablet,
        labelColor,
        enableCustomStyles,
        radioCheckboxSize,
        showPlaceholder,
        placeholderColor,
        //Radio/Checkbox Typography
        radioCheckboxFontFamily,
        radioCheckboxFontSize,
        radioCheckboxFontSizeMobile,
        radioCheckboxFontSizeTablet,
        radioCheckboxFontWeight,
        radioCheckboxLineHeight,
        radioCheckboxLetterSpacing,
        radioCheckboxTextColor,
        radioCheckboxColor,
        hoverRadioCheckboxColor,
        radioCheckboxBorderWidth,
        radioCheckboxBorderColor,
        radioButtonBorderRadius,
        checkboxBorderRadius,
        checkboxBorderTopRadius,
        checkboxBorderRightRadius,
        checkboxBorderBottomRadius,
        checkboxBorderLeftRadius,
        checkboxBorderTopRadiusTablet,
        checkboxBorderRightRadiusTablet,
        checkboxBorderBottomRadiusTablet,
        checkboxBorderLeftRadiusTablet,
        checkboxBorderTopRadiusMobile,
        checkboxBorderRightRadiusMobile,
        checkboxBorderBottomRadiusMobile,
        checkboxBorderLeftRadiusMobile,
        checkboxBorderIsRadiusControlConnected,
        checkboxBorderIsRadiusValueUpdated,
        radioButtonBorderTopRadius,
        radioButtonBorderRightRadius,
        radioButtonBorderBottomRadius,
        radioButtonBorderLeftRadius,
        radioButtonBorderTopRadiusTablet,
        radioButtonBorderRightRadiusTablet,
        radioButtonBorderBottomRadiusTablet,
        radioButtonBorderLeftRadiusTablet,
        radioButtonBorderTopRadiusMobile,
        radioButtonBorderRightRadiusMobile,
        radioButtonBorderBottomRadiusMobile,
        radioButtonBorderLeftRadiusMobile,
        radioButtonBorderIsRadiusControlConnected,
        //Submit Typography
        submitButtonFontFamily,
        submitButtonFontSize,
        submitButtonFontSizeMobile,
        submitButtonFontSizeTablet,
        submitButtonFontWeight,
        submitButtonLineHeight,
        submitButtonLetterSpacing,
        ctaButtonAlignment,
        ctaButtonAlignmentMobile,
        ctaButtonAlignmentTablet,
        submitButtonWidth,
        submitButtonWidthMobile,
        submitButtonWidthTablet,
        submitButtonHeight,
        submitButtonHeightMobile,
        submitButtonHeightTablet,
        messageFontFamily,
        messageFontSize,
        messageFontSizeMobile,
        messageFontSizeTablet,
        messageFontWeight,
        messageLineHeight,
        messageLetterSpacing,
        successMsgColor,
        errorMsgColor,
        afterSubmitFontFamily,
        afterSubmitFontSize,
        afterSubmitFontSizeMobile,
        afterSubmitFontSizeTablet,
        afterSubmitFontWeight,
        afterSubmitLineHeight,
        afterSubmitLetterSpacing,
        afterSubmitErrorMsgColor,
        afterSubmitMsgbgColor,
        //After submit feedback spacing
        afterSubmitTopPadding,
        afterSubmitBottomPadding,
        afterSubmitLeftPadding,
        afterSubmitRightPadding,
        afterSubmitTopPaddingTablet,
        afterSubmitBottomPaddingTablet,
        afterSubmitLeftPaddingTablet,
        afterSubmitRightPaddingTablet,
        afterSubmitTopPaddingMobile,
        afterSubmitBottomPaddingMobile,
        afterSubmitLeftPaddingMobile,
        afterSubmitRightPaddingMobile,
        afterSubmitTopMargin,
        afterSubmitBottomMargin,
        afterSubmitLeftMargin,
        afterSubmitRightMargin,
        afterSubmitTopMarginTablet,
        afterSubmitBottomMarginTablet,
        afterSubmitLeftMarginTablet,
        afterSubmitRightMarginTablet,
        afterSubmitTopMarginMobile,
        afterSubmitBottomMarginMobile,
        afterSubmitLeftMarginMobile,
        afterSubmitRightMarginMobile,
        afterSubmitBorderRadius,
        afterSubmitTopRadius,
        afterSubmitRightRadius,
        afterSubmitBottomRadius,
        afterSubmitLeftRadius,
        afterSubmitTopRadiusTablet,
        afterSubmitRightRadiusTablet,
        afterSubmitBottomRadiusTablet,
        afterSubmitLeftRadiusTablet,
        afterSubmitTopRadiusMobile,
        afterSubmitRightRadiusMobile,
        afterSubmitBottomRadiusMobile,
        afterSubmitLeftRadiusMobile,
        afterSubmitIsRadiusControlConnected,
        afterSubmitBorderStyle,
        afterSubmitBorderWidth,
        afterSubmitBorderColor,
        
        //background 
        backgroundColorHover,
        backgroundType,
        opacity,

        //hide widget
        hideWidget,
        hideWidgetTablet,
        hideWidgetMobile,

        //Z Index
        z_index,
        z_indexMobile,
        z_indexTablet,
        inputIsPaddingControlConnected,
        formTopPadding,
        formTopPaddingMobile,
        formTopPaddingTablet,
        formBottomPadding,
        formBottomPaddingMobile,
        formBottomPaddingTablet,
        formLeftPadding,
        formLeftPaddingMobile,
        formLeftPaddingTablet,
        formRightPadding,
        formRightPaddingMobile,
        formRightPaddingTablet,
        formIsPaddingControlConnected,
        formTopMargin,
        formTopMarginMobile,
        formTopMarginTablet,
        formBottomMargin,
        formBottomMarginMobile,
        formBottomMarginTablet,
        formLeftMargin,
        formLeftMarginMobile,
        formLeftMarginTablet,
        formRightMargin,
        formRightMarginMobile,
        formRightMarginTablet,
        formIsMarginControlConnected,
        formNewSpacingValuesUpdated,

        inputTypographyColor,
        blockIsTypographyColorValueUpdated,
        labelTypographyColor,
        labelBottomSpacing,
        labelBottomSpacingTablet,
        labelBottomSpacingMobile,

        ctaButtonTopPadding,
        ctaButtonBottomPadding,
        ctaButtonLeftPadding,
        ctaButtonRightPadding,
        ctaButtonTopPaddingTablet,
        ctaButtonBottomPaddingTablet,
        ctaButtonRightPaddingTablet,
        ctaButtonLeftPaddingTablet,
        ctaButtonTopPaddingMobile,
        ctaButtonBottomPaddingMobile,
        ctaButtonLeftPaddingMobile,
        ctaButtonRightPaddingMobile,
        isCtaButtonPaddingMarginValueUpdated,
      },
      setAttributes,
    } = this.props;

    const spacingResetValues = {
      paddingTop: 10,
      paddingRight: 0,
      paddingBottom: 0,
      paddingLeft: 0,
      paddingTabletTop: 10,
      paddingTabletRight: 0,
      paddingTabletBottom: 0,
      paddingTabletLeft: 0,
      paddingMobileTop: 10,
      paddingMobileRight: 0,
      paddingMobileBottom: 0,
      paddingMobileLeft: 0,
    }
    const formPaddingResetValues = {
      paddingTop: 0,
      paddingRight: 0,
      paddingBottom: 0,
      paddingLeft: 0,
      paddingTabletTop: 0,
      paddingTabletRight: 0,
      paddingTabletBottom: 0,
      paddingTabletLeft: 0,
      paddingMobileTop: 0,
      paddingMobileRight: 0,
      paddingMobileBottom: 0,
      paddingMobileLeft: 0,
    }
    const formMarginResetValues = {
      marginTop: 0,
      marginRight: 0,
      marginBottom: 0,
      marginLeft: 0,
      marginTabletTop: 0,
      marginTabletRight: 0,
      marginTabletBottom: 0,
      marginTabletLeft: 0,
      marginMobileTop: 0,
      marginMobileRight: 0,
      marginMobileBottom: 0,
      marginMobileLeft: 0,
    }

    const afterSubmitPaddingResetValues = {
			paddingTop: 10,
			paddingRight: 10,
			paddingBottom: 10,
			paddingLeft: 10,
			paddingTabletTop: 10,
			paddingTabletRight: 10,
			paddingTabletBottom: 10,
			paddingTabletLeft: 10,
			paddingMobileTop: 10,
			paddingMobileRight: 10,
			paddingMobileBottom: 10,
			paddingMobileLeft: 10,
		}

    const afterSubmitMarginResetValues = {
			paddingTop: 10,
			paddingRight: 10,
			paddingBottom: 10,
			paddingLeft: 10,
			paddingTabletTop: 10,
			paddingTabletRight: 10,
			paddingTabletBottom: 10,
			paddingTabletLeft: 10,
			paddingMobileTop: 10,
			paddingMobileRight: 10,
			paddingMobileBottom: 10,
			paddingMobileLeft: 10,
		}

     // To populate new control values with existing padding margin control values for backward compatibility.
     if (!formNewSpacingValuesUpdated) {
      this.props.setAttributes(
        {
          formTopPadding:          topPadding !== undefined ? topPadding : formTopPadding,
          formRightPadding:        rightPadding !== undefined ? rightPadding : formRightPadding,
          formBottomPadding:       bottomPadding !== undefined ? bottomPadding : formBottomPadding,
          formLeftPadding:         leftPadding !== undefined ? leftPadding : formLeftPadding,
          formTopPaddingTablet:    topPaddingTablet !== undefined ? topPaddingTablet : formTopPaddingTablet,
          formRightPaddingTablet:  rightPaddingTablet !== undefined ? rightPaddingTablet : formRightPaddingTablet,
          formBottomPaddingTablet: bottomPaddingTablet !== undefined ? bottomPaddingTablet : formBottomPaddingTablet,
          formLeftPaddingTablet:   leftPaddingTablet !== undefined ? leftPaddingTablet : formLeftPaddingTablet,
          formTopPaddingMobile:    topPaddingMobile !== undefined ? topPaddingMobile : formTopPaddingMobile,
          formRightPaddingMobile:  rightPaddingMobile !== undefined ? rightPaddingMobile : formRightPaddingMobile,
          formBottomPaddingMobile: bottomPaddingMobile !== undefined ? bottomPaddingMobile : formBottomPaddingMobile,
          formLeftPaddingMobile:   leftPaddingMobile !== undefined ? leftPaddingMobile : formLeftPaddingMobile,

          formTopMargin:          topMargin !== undefined ? topMargin : formTopMargin,
          formRightMargin:        rightMargin !== undefined ? rightMargin : formRightMargin,
          formBottomMargin:       bottomMargin !== undefined ? bottomMargin : formBottomMargin,
          formLeftMargin:         leftMargin !== undefined ? leftMargin : formLeftMargin,
          formTopMarginTablet:    topMarginTablet !== undefined ? topMarginTablet : formTopMarginTablet,
          formRightMarginTablet:  rightMarginTablet !== undefined ? rightMarginTablet : formRightMarginTablet,
          formBottomMarginTablet: bottomMarginTablet !== undefined ? bottomMarginTablet : formBottomMarginTablet,
          formLeftMarginTablet:   leftMarginTablet !== undefined ? leftMarginTablet : formLeftMarginTablet,
          formTopMarginMobile:    topMarginMobile !== undefined ? topMarginMobile : formTopMarginMobile,
          formRightMarginMobile:  rightMarginMobile !== undefined ? rightMarginMobile : formRightMarginMobile,
          formBottomMarginMobile: bottomMarginMobile !== undefined ? bottomMarginMobile : formBottomMarginMobile,
          formLeftMarginMobile:   leftMarginMobile !== undefined ? leftMarginMobile : formLeftMarginMobile,
        }
      )
    }
    this.props.setAttributes({formNewSpacingValuesUpdated: true});

    // Update color values    
    var advancedControls;
    advancedControls = (
      <Fragment>
        <RbeaColorControl
					label = {__("Color", "responsive-block-editor-addons")}
					colorValue={inputBoxShadowColor}
					onChange={(colorValue) =>
						setAttributes({ inputBoxShadowColor: colorValue })
					}
					resetColor={() => setAttributes({ inputBoxShadowColor: "" })}
				/>
        <RbeaRangeControl
          label = {_("Horizontal", "responsive-block-editor-addons")}
          value={inputBoxShadowHOffset}
          onChange={(value) =>
            setAttributes({
              inputBoxShadowHOffset: value !== undefined ? value : 0,
            })
          }
          min={-100}
          max={100}
          allowReset
        />
        <RbeaRangeControl
          label={__("Vertical", "responsive-block-editor-addons")}
          value={inputBoxShadowVOffset}
          onChange={(value) =>
            setAttributes({
              inputBoxShadowVOffset: value !== undefined ? value : 0,
            })
          }
          min={-100}
          max={100}
          allowReset
        />
        <RbeaRangeControl
          label={__("Blur", "responsive-block-editor-addons")}
          value={inputBoxShadowBlur}
          onChange={(value) =>
            setAttributes({
              inputBoxShadowBlur: value !== undefined ? value : 0,
            })
          }
          min={0}
          max={100}
          allowReset
        />
        <RbeaRangeControl
          label = {__("Spread", "responsive-block-editor-addons")}
          value={inputBoxShadowSpread}
          onChange={(value) =>
            setAttributes({
              inputBoxShadowSpread: value !== undefined ? value : 0,
            })
          }
          min={0}
          max={100}
          allowReset
        />
        <RbeaTabRadioControl
          label={__("Position", "responsive-block-editor-addons")}
          value={inputBoxShadowPosition}
          onChange={(value) => setAttributes({ inputBoxShadowPosition: value })}
          options={[
            { value: "inset", label: __("Inset", "responsive-block-editor-addons") },
            { value: "outset", label: __("Outset", "responsive-block-editor-addons") },
          ]}
          defaultValue={"inset"}
        />
      </Fragment>
    );

  // backward compatibility for border radius control

  if (!checkboxBorderIsRadiusValueUpdated) {
    this.props.setAttributes(
      {
        checkboxBorderTopRadius:          checkboxBorderRadius !== undefined ? checkboxBorderRadius : checkboxBorderTopRadius,
        checkboxBorderBottomRadius:       checkboxBorderRadius !== undefined ? checkboxBorderRadius : checkboxBorderBottomRadius,
        checkboxBorderLeftRadius:         checkboxBorderRadius !== undefined ? checkboxBorderRadius : checkboxBorderLeftRadius,
        checkboxBorderRightRadius:        checkboxBorderRadius !== undefined ? checkboxBorderRadius : checkboxBorderRightRadius,
        checkboxBorderTopRadiusTablet:    checkboxBorderRadius !== undefined ? checkboxBorderRadius : checkboxBorderTopRadiusTablet,
        checkboxBorderBottomRadiusTablet: checkboxBorderRadius !== undefined ? checkboxBorderRadius : checkboxBorderBottomRadiusTablet,
        checkboxBorderRightRadiusTablet:  checkboxBorderRadius !== undefined ? checkboxBorderRadius : checkboxBorderRightRadiusTablet,
        checkboxBorderLeftRadiusTablet:   checkboxBorderRadius !== undefined ? checkboxBorderRadius : checkboxBorderLeftRadiusTablet,
        checkboxBorderTopRadiusMobile:    checkboxBorderRadius !== undefined ? checkboxBorderRadius : checkboxBorderTopRadiusMobile,
        checkboxBorderBottomRadiusMobile: checkboxBorderRadius !== undefined ? checkboxBorderRadius : checkboxBorderBottomRadiusMobile,
        checkboxBorderLeftRadiusMobile:   checkboxBorderRadius !== undefined ? checkboxBorderRadius : checkboxBorderLeftRadiusMobile,
        checkboxBorderRightRadiusMobile:  checkboxBorderRadius !== undefined ? checkboxBorderRadius : checkboxBorderRightRadiusMobile,

        radioButtonBorderTopRadius:          radioButtonBorderRadius !== undefined ? radioButtonBorderRadius : radioButtonBorderTopRadius,
        radioButtonBorderBottomRadius:       radioButtonBorderRadius !== undefined ? radioButtonBorderRadius : radioButtonBorderBottomRadius,
        radioButtonBorderLeftRadius:         radioButtonBorderRadius !== undefined ? radioButtonBorderRadius : radioButtonBorderLeftRadius,
        radioButtonBorderRightRadius:        radioButtonBorderRadius !== undefined ? radioButtonBorderRadius : radioButtonBorderRightRadius,
        radioButtonBorderTopRadiusTablet:    radioButtonBorderRadius !== undefined ? radioButtonBorderRadius : radioButtonBorderTopRadiusTablet,
        radioButtonBorderBottomRadiusTablet: radioButtonBorderRadius !== undefined ? radioButtonBorderRadius : radioButtonBorderBottomRadiusTablet,
        radioButtonBorderRightRadiusTablet:  radioButtonBorderRadius !== undefined ? radioButtonBorderRadius : radioButtonBorderRightRadiusTablet,
        radioButtonBorderLeftRadiusTablet:   radioButtonBorderRadius !== undefined ? radioButtonBorderRadius : radioButtonBorderLeftRadiusTablet,
        radioButtonBorderTopRadiusMobile:    radioButtonBorderRadius !== undefined ? radioButtonBorderRadius : radioButtonBorderTopRadiusMobile,
        radioButtonBorderBottomRadiusMobile: radioButtonBorderRadius !== undefined ? radioButtonBorderRadius : radioButtonBorderBottomRadiusMobile,
        radioButtonBorderLeftRadiusMobile:   radioButtonBorderRadius !== undefined ? radioButtonBorderRadius : radioButtonBorderLeftRadiusMobile,
        radioButtonBorderRightRadiusMobile:  radioButtonBorderRadius !== undefined ? radioButtonBorderRadius : radioButtonBorderRightRadiusMobile,

        formTopRadius:          formBorderRadius !== undefined ? formBorderRadius : formTopRadius,
        formBottomRadius:       formBorderRadius !== undefined ? formBorderRadius : formBottomRadius,
        formLeftRadius:         formBorderRadius !== undefined ? formBorderRadius : formLeftRadius,
        formRightRadius:        formBorderRadius !== undefined ? formBorderRadius : formRightRadius,
        formTopRadiusTablet:    formBorderRadius !== undefined ? formBorderRadius : formTopRadiusTablet,
        formBottomRadiusTablet: formBorderRadius !== undefined ? formBorderRadius : formBottomRadiusTablet,
        formRightRadiusTablet:  formBorderRadius !== undefined ? formBorderRadius : formRightRadiusTablet,
        formLeftRadiusTablet:   formBorderRadius !== undefined ? formBorderRadius : formLeftRadiusTablet,
        formTopRadiusMobile:    formBorderRadius !== undefined ? formBorderRadius : formTopRadiusMobile,
        formBottomRadiusMobile: formBorderRadius !== undefined ? formBorderRadius : formBottomRadiusMobile,
        formLeftRadiusMobile:   formBorderRadius !== undefined ? formBorderRadius : formLeftRadiusMobile,
        formRightRadiusMobile:  formBorderRadius !== undefined ? formBorderRadius : formRightRadiusMobile,

        inputTopRadius:          inputBorderRadius !== undefined ? inputBorderRadius : inputTopRadius,
        inputBottomRadius:       inputBorderRadius !== undefined ? inputBorderRadius : inputBottomRadius,
        inputLeftRadius:         inputBorderRadius !== undefined ? inputBorderRadius : inputLeftRadius,
        inputRightRadius:        inputBorderRadius !== undefined ? inputBorderRadius : inputRightRadius,
        inputTopRadiusTablet:    inputBorderRadius !== undefined ? inputBorderRadius : inputTopRadiusTablet,
        inputBottomRadiusTablet: inputBorderRadius !== undefined ? inputBorderRadius : inputBottomRadiusTablet,
        inputRightRadiusTablet:  inputBorderRadius !== undefined ? inputBorderRadius : inputRightRadiusTablet,
        inputLeftRadiusTablet:   inputBorderRadius !== undefined ? inputBorderRadius : inputLeftRadiusTablet,
        inputTopRadiusMobile:    inputBorderRadius !== undefined ? inputBorderRadius : inputTopRadiusMobile,
        inputBottomRadiusMobile: inputBorderRadius !== undefined ? inputBorderRadius : inputBottomRadiusMobile,
        inputLeftRadiusMobile:   inputBorderRadius !== undefined ? inputBorderRadius : inputLeftRadiusMobile,
        inputRightRadiusMobile:  inputBorderRadius !== undefined ? inputBorderRadius : inputRightRadiusMobile,

        afterSubmitTopRadius:          afterSubmitBorderRadius !== undefined ? afterSubmitBorderRadius : afterSubmitTopRadius,
        afterSubmitBottomRadius:       afterSubmitBorderRadius !== undefined ? afterSubmitBorderRadius : afterSubmitBottomRadius,
        afterSubmitLeftRadius:         afterSubmitBorderRadius !== undefined ? afterSubmitBorderRadius : afterSubmitLeftRadius,
        afterSubmitRightRadius:        afterSubmitBorderRadius !== undefined ? afterSubmitBorderRadius : afterSubmitRightRadius,
        afterSubmitTopRadiusTablet:    afterSubmitBorderRadius !== undefined ? afterSubmitBorderRadius : afterSubmitTopRadiusTablet,
        afterSubmitBottomRadiusTablet: afterSubmitBorderRadius !== undefined ? afterSubmitBorderRadius : afterSubmitBottomRadiusTablet,
        afterSubmitRightRadiusTablet:  afterSubmitBorderRadius !== undefined ? afterSubmitBorderRadius : afterSubmitRightRadiusTablet,
        afterSubmitLeftRadiusTablet:   afterSubmitBorderRadius !== undefined ? afterSubmitBorderRadius : afterSubmitLeftRadiusTablet,
        afterSubmitTopRadiusMobile:    afterSubmitBorderRadius !== undefined ? afterSubmitBorderRadius : afterSubmitTopRadiusMobile,
        afterSubmitBottomRadiusMobile: afterSubmitBorderRadius !== undefined ? afterSubmitBorderRadius : afterSubmitBottomRadiusMobile,
        afterSubmitLeftRadiusMobile:   afterSubmitBorderRadius !== undefined ? afterSubmitBorderRadius : afterSubmitLeftRadiusMobile,
        afterSubmitRightRadiusMobile:  afterSubmitBorderRadius !== undefined ? afterSubmitBorderRadius : afterSubmitRightRadiusMobile,
      }
    )
    this.props.setAttributes({checkboxBorderIsRadiusValueUpdated: true});
  }
    // backward compatibility for typography color control
    if (!blockIsTypographyColorValueUpdated) {
      this.props.setAttributes(
        {
          inputTypographyColor: inputTextColor !== undefined ? inputTextColor : inputTypographyColor,
          labelTypographyColor: labelColor !== undefined ? labelColor: labelTypographyColor,
          labelBottomSpacing: labelSpacing !== undefined ? labelSpacing : labelBottomSpacing,
          labelBottomSpacingMobile: labelSpacingMobile !== undefined ? labelSpacingMobile : labelBottomSpacingMobile,
          labelBottomSpacingTablet: labelSpacingTablet !== undefined ? labelSpacingTablet : labelBottomSpacingTablet,
        }
      )
      this.props.setAttributes({blockIsTypographyColorValueUpdated: true});
    }

    return (
      <InspectorControls key="inspector">
        <InspectorTabs>
          <InspectorTab key={"content"}>
            <PanelBody
              title={__("Contact Form", "responsive-block-editor-addons")}
              initialOpen={false}
            >  
              <SelectControl
              label={__("Select Form", "responsive-block-editor-addons")}
					    value={formId}
              onChange={(newformId)=> this.props.onSelectForm(newformId) }
					    options={ responsive_globals.cf7_forms }
				      />
              
              <ToggleControl
                label={__("Form Title", "responsive-block-editor-addons")}
                checked={showFormTitle}
                onChange={() =>
                  this.props.setAttributes({
                    showFormTitle: !showFormTitle,
                  })
                }
              />
              <ToggleControl
                label={__("Form Description", "responsive-block-editor-addons")}
                checked={showFormDescription}
                onChange={() =>
                  this.props.setAttributes({
                    showFormDescription: !showFormDescription,
                  })
                }
              />
              
            </PanelBody>            
            <PanelBody
              title={__(
                "Errors",
                "responsive-block-editor-addons"
              )}
              initialOpen={false}
            >
              <ToggleControl
                label={__("Error Messages", "responsive-block-editor-addons")}
                checked={showErrorMsgs}
                onChange={() =>
                  this.props.setAttributes({
                    showErrorMsgs: !showErrorMsgs,
                  })
                }
              />
             
            </PanelBody>
          </InspectorTab>
          <InspectorTab key={"style"}>
            <PanelBody
              title={__("Form Container", "responsive-block-editor-addons")}
              initialOpen={false}
            >
              <TabPanel
                className=" responsive-size-type-field-tabs  responsive-size-type-field__common-tabs  responsive-inline-margin"
                activeClass="active-tab"
                tabs={[
                  {
                    name: "desktop",
                    title: <Dashicon icon="desktop" />,
                    className:
                      " responsive-desktop-tab  responsive-responsive-tabs",
                  },
                  {
                    name: "tablet",
                    title: <Dashicon icon="tablet" />,
                    className:
                      " responsive-tablet-tab  responsive-responsive-tabs",
                  },
                  {
                    name: "mobile",
                    title: <Dashicon icon="smartphone" />,
                    className:
                      " responsive-mobile-tab  responsive-responsive-tabs",
                  },
                ]}
              >
                {(tab) => {
                  let tabout;

                  if ("mobile" === tab.name) {
                    tabout = (
                      <Fragment>
                        <BaseControl>
                          <p>
                            {__(
                              "Alignment Mobile",
                              "responsive-block-editor-addons"
                            )}
                          </p>
                          <div className="responsive-block-editor-addons-alignment">
                          <AlignmentToolbar
                            value={formAlignmentMobile}
                            onChange={(value) =>
                              setAttributes({
                                formAlignmentMobile: value,
                              })
                            }
                            controls={["start", "center", "end"]}
                            isCollapsed={false}
                          />
                          </div>
                        </BaseControl>
                      </Fragment>
                    );
                  } else if ("tablet" === tab.name) {
                    tabout = (
                      <Fragment>
                        <BaseControl>
                          <p>
                            {__(
                              "Alignment Tablet",
                              "responsive-block-editor-addons"
                            )}
                          </p>
                          <div className="responsive-block-editor-addons-alignment">
                          <AlignmentToolbar
                            value={formAlignmentTablet}
                            onChange={(value) =>
                              setAttributes({
                                formAlignmentTablet: value,
                              })
                            }
                            controls={["start", "center", "end"]}
                            isCollapsed={false}
                          />
                          </div>
                        </BaseControl>
                      </Fragment>
                    );
                  } else {
                    tabout = (
                      <Fragment>
                        <BaseControl>
                          <p>
                            {__("Alignment", "responsive-block-editor-addons")}
                          </p>
                          <div className="responsive-block-editor-addons-alignment">
                          <AlignmentToolbar
                            value={formAlignment}
                            onChange={(value) =>
                              setAttributes({
                                formAlignment: value,
                              })
                            }
                            controls={["start", "center", "end"]}
                            isCollapsed={false}
                          />
                          </div>
                        </BaseControl>
                      </Fragment>
                    );
                  }

                  return <div>{tabout}</div>;
                }}
              </TabPanel>
              <TabPanel
                className=" responsive-size-type-field-tabs  responsive-size-type-field__common-tabs  responsive-inline-margin"
                activeClass="active-tab"
                tabs={[
                  {
                    name: "desktop",
                    title: <Dashicon icon="desktop" />,
                    className:
                      " responsive-desktop-tab  responsive-responsive-tabs",
                  },
                  {
                    name: "tablet",
                    title: <Dashicon icon="tablet" />,
                    className:
                      " responsive-tablet-tab  responsive-responsive-tabs",
                  },
                  {
                    name: "mobile",
                    title: <Dashicon icon="smartphone" />,
                    className:
                      " responsive-mobile-tab  responsive-responsive-tabs",
                  },
                ]}
              >
                {(tab) => {
                  let tabout;

                  if ("mobile" === tab.name) {
                    tabout = (
                      <Fragment>
                        <RbeaRangeControl
                          label={__(
                            "Width (%)",
                            "responsive-block-editor-addons"
                          )}
                          value={formWidthMobile}
                          onChange={(value) =>
                            setAttributes({
                              formWidthMobile: value,
                            })
                          }
                          min={0}
                          max={100}
                          beforeIcon=""
                        />
                      </Fragment>
                    );
                  } else if ("tablet" === tab.name) {
                    tabout = (
                      <Fragment>
                        <RbeaRangeControl
                          label={__(
                            "Width (%)",
                            "responsive-block-editor-addons"
                          )}
                          value={formWidthTablet}
                          onChange={(value) =>
                            setAttributes({
                              formWidthTablet: value,
                            })
                          }
                          min={0}
                          max={100}
                          beforeIcon=""
                        />
                      </Fragment>
                    );
                  } else {
                    tabout = (
                      <Fragment>
                        <RbeaRangeControl
                          label={__(
                            "Width (%)",
                            "responsive-block-editor-addons"
                          )}
                          value={formWidth}
                          onChange={(value) =>
                            setAttributes({
                              formWidth: value,
                            })
                          }
                          min={0}
                          max={100}
                          beforeIcon=""
                        />
                      </Fragment>
                    );
                  }

                  return <div>{tabout}</div>;
                }}
              </TabPanel> 
              <PanelBody
              title={__("Background", "responsive-block-editor-addons")}
              initialOpen={false}
            >
              <RbeaBackgroundTypeControl
                label={__("Type", "responsive-block-editor-addons")}
                value={backgroundType}
                onChange={(value) => setAttributes({ backgroundType: value })}
                options={backgroundTypeOptions}
              />
              {"color" == backgroundType && (
                <TabPanel
                  className="rbea-inspect-tabs rbea-inspect-tabs-col-2"
                  activeClass="active-tab"
                  tabs={[
                    {
                      name: "normal",
                      title: __("Normal", "responsive-block-editor-addons"),
                      className: "rbea-normal-tab",
                    },
                    {
                      name: "hover",
                      title: __("Hover", "responsive-block-editor-addons"),
                      className: "rbea-focus-tab",
                    },
                  ]}
                >
                  {(tabName) => {
                    let tabout;
                    if ("hover" == tabName.name) {
                      tabout = (
                        <Fragment>
                          <RbeaColorControl
                            label = {__("Background Color Hover", "responsive-block-editor-addons")}
                            colorValue={backgroundColorHover}
                            onChange={(colorValue) =>
                              setAttributes({ backgroundColorHover: colorValue })
                            }
                            resetColor={() => setAttributes({ backgroundColorHover: "" })}
                          />
                        </Fragment>
                      );
                    } else {
                      tabout = (
                        <Fragment>
                          <ColorBackgroundControl {...this.props} />
                        </Fragment>
                      );
                    }
                    return <div>{tabout}</div>;
                  }}
                </TabPanel>
              )}
              {"gradient" == backgroundType && (
                <GradientBackgroundControl
                  {...this.props}
                  showHoverGradient={true}
                />
              )}

              {backgroundType && backgroundType !== 'none' && (
                <RbeaRangeControl
                  label={__("Opacity", "responsive-block-editor-addons")}
                  value={opacity}
                  onChange={(value) =>
                    setAttributes({ opacity: value !== undefined ? value : 20 })
                  }
                  min={0}
                  max={100}
                  allowReset
                />
              )}
             
            </PanelBody>              
              <PanelBody
              title={__("Spacing", "responsive-block-editor-addons")}
              initialOpen={false}
            >
              <ResponsiveNewPaddingControl
                attrNameTemplate="form%s"
                resetValues={formPaddingResetValues}
                {...this.props}
              />
              <ResponsiveNewMarginControl
                attrNameTemplate="form%s"
                resetValues={formMarginResetValues}
                {...this.props}
              />      
            </PanelBody>
            <PanelBody
              title={__("Border", "responsive-block-editor-addons")}
              initialOpen={false}
            >
              <RbeaBlockBorderHelperControl
                attrNameTemplate="form%s"
                values={{
                  radius: formBorderRadius,
                  style: formBorderStyle,
                  width: formBorderWidth,
                  color: formBorderColor,
                }}
                setAttributes={setAttributes}
                {...this.props}
              />              

              <BoxShadowControl
                setAttributes={setAttributes}
                label={__("Box Shadow", "responsive-block-editor-addons")}
                boxShadowColor={{ value: boxShadowColor, label: __("Color", "responsive-block-editor-addons") }}
                boxShadowHOffset={{
                  value: boxShadowHOffset,
                  label: __("Horizontal", "responsive-block-editor-addons"),
                }}
                boxShadowVOffset={{
                  value: boxShadowVOffset,
                  label: __("Vertical", "responsive-block-editor-addons"),
                }}
                boxShadowBlur={{
                  value: boxShadowBlur,
                  label: __("Blur", "responsive-block-editor-addons"),
                }}
                boxShadowSpread={{
                  value: boxShadowSpread,
                  label: __("Spread", "responsive-block-editor-addons"),
                }}
                boxShadowPosition={{
                  value: boxShadowPosition,
                  label: __("Position", "responsive-block-editor-addons"),
                }}
              />
              <BoxShadowControlHelper
                setAttributes={setAttributes}
                boxShadowColor={{ value: hoverboxShadowColor }}
                boxShadowHOffset={{ value: hoverboxShadowHOffset }}
                boxShadowVOffset={{ value: hoverboxShadowVOffset }}
                boxShadowBlur={{ value: hoverboxShadowBlur }}
                boxShadowSpread={{ value: hoverboxShadowSpread }}
                boxShadowPosition={{ value: hoverboxShadowPosition }}
                label={__("Hover Box Shadow", "responsive-block-editor-addons")}
                attrNameTemplate="hover%s"
              />
            </PanelBody>            
            </PanelBody>
            <PanelBody
              title={__(
                "Title and Description",
                "responsive-block-editor-addons"
              )}
              initialOpen={false}
            >
              <TabPanel
                className=" responsive-size-type-field-tabs  responsive-size-type-field__common-tabs  responsive-inline-margin"
                activeClass="active-tab"
                tabs={[
                  {
                    name: "desktop",
                    title: <Dashicon icon="desktop" />,
                    className:
                      " responsive-desktop-tab  responsive-responsive-tabs",
                  },
                  {
                    name: "tablet",
                    title: <Dashicon icon="tablet" />,
                    className:
                      " responsive-tablet-tab  responsive-responsive-tabs",
                  },
                  {
                    name: "mobile",
                    title: <Dashicon icon="smartphone" />,
                    className:
                      " responsive-mobile-tab  responsive-responsive-tabs",
                  },
                ]}
              >
                {(tab) => {
                  let tabout;

                  if ("mobile" === tab.name) {
                    tabout = (
                      <Fragment>
                        <BaseControl>
                          <p>
                            {__(
                              "Alignment Mobile",
                              "responsive-block-editor-addons"
                            )}
                          </p>
                          <div className="responsive-block-editor-addons-alignment">
                          <AlignmentToolbar
                            value={formTitleAlignmentMobile}
                            onChange={(value) =>
                              setAttributes({
                                formTitleAlignmentMobile: value,
                              })
                            }
                            controls={["left", "center", "right"]}
                            isCollapsed={false}
                          />
                          </div>
                        </BaseControl>
                      </Fragment>
                    );
                  } else if ("tablet" === tab.name) {
                    tabout = (
                      <Fragment>
                        <BaseControl>
                          <p>
                            {__(
                              "Alignment Tablet",
                              "responsive-block-editor-addons"
                            )}
                          </p>
                          <div className="responsive-block-editor-addons-alignment">
                          <AlignmentToolbar
                            value={formTitleAlignmentTablet}
                            onChange={(value) =>
                              setAttributes({
                                formTitleAlignmentTablet: value,
                              })
                            }
                            controls={["left", "center", "right"]}
                            isCollapsed={false}
                          />
                          </div>
                        </BaseControl>
                      </Fragment>
                    );
                  } else {
                    tabout = (
                      <Fragment>
                        <BaseControl>
                          <p>
                            {__("Alignment", "responsive-block-editor-addons")}
                          </p>
                          <div className="responsive-block-editor-addons-alignment">
                          <AlignmentToolbar
                            value={formTitleAlignment}
                            onChange={(value) =>
                              setAttributes({
                                formTitleAlignment: value,
                              })
                            }
                            controls={["left", "center", "right"]}
                            isCollapsed={false}
                          />
                          </div>
                        </BaseControl>
                      </Fragment>
                    );
                  }

                  return <div>{tabout}</div>;
                }}
              </TabPanel>
              <RbeaTabRadioControl
                label={__("Title Tag", "responsive-block-editor-addons")}
                value={formTitleTag}
                onChange={(value) => {
                  this.onTagChange(value)
                }}
                options={[
                  {
                    value: "h1",
                    label: __("H1", "responsive-block-editor-addons"),
                  },
                  {
                    value: "h2",
                    label: __("H2", "responsive-block-editor-addons"),
                  },
                  {
                    value: "h3",
                    label: __("H3", "responsive-block-editor-addons"),
                  },
                  {
                    value: "h4",
                    label: __("H4", "responsive-block-editor-addons"),
                  },
                  {
                    value: "h5",
                    label: __("H5", "responsive-block-editor-addons"),
                  },
                  {
                    value: "h6",
                    label: __("H6", "responsive-block-editor-addons"),
                  },
                ]}
              />
              <hr className="responsive-block-editor-addons-editor__separator" />
              <TypographyHelperControl
                title={__(
                  "Form Title Typography",
                  "responsive-block-editor-addons"
                )}
                attrNameTemplate="formTitle%s"
                values={{
                  family: formTitleFontFamily,
                  size: formTitleFontSize,
                  sizeMobile: formTitleFontSizeMobile,
                  sizeTablet: formTitleFontSizeTablet,
                  weight: formTitleFontWeight,
                  height: formTitleLineHeight,
                  spacing: formTitleLetterSpacing,
                }}
                showLetterSpacing={true}
                showTextTransform={false}
                setAttributes={setAttributes}
                {...this.props}
              />
              <RbeaColorControl
                label = {__("Form Title Color", "responsive-block-editor-addons")}
                colorValue={formTitleColor}
                onChange={(colorValue) =>
                  setAttributes({ formTitleColor: colorValue })
                }
                resetColor={() => setAttributes({ formTitleColor: "" })}
              />
              <TypographyHelperControl
                title={"Form Description Typography"}
                attrNameTemplate="formDescription%s"
                values={{
                  family: formDescriptionFontFamily,
                  size: formDescriptionFontSize,
                  sizeMobile: formDescriptionFontSizeMobile,
                  sizeTablet: formDescriptionFontSizeTablet,
                  weight: formDescriptionFontWeight,
                  height: formDescriptionLineHeight,
                  spacing: formDescriptionLetterSpacing,
                }}
                showLetterSpacing={true}
                showTextTransform={false}
                setAttributes={setAttributes}
                {...this.props}
              />
              <RbeaColorControl
                label = {__("Form Description Color", "responsive-block-editor-addons")}
                colorValue={formDescriptionColor}
                onChange={(colorValue) =>
                  setAttributes({ formDescriptionColor: colorValue })
                }
                resetColor={() => setAttributes({ formDescriptionColor: "" })}
              />                           
            </PanelBody>
            <PanelBody
                title={__("Input and Text Area", "responsive-block-editor-addons")}
                initialOpen={false}
              >
                <RbeaColorControl
                  label = {__("Background Color", "responsive-block-editor-addons")}
                  colorValue={inputBackgroundColor}
                  onChange={(colorValue) =>
                    setAttributes({ inputBackgroundColor: colorValue })
                  }
                  resetColor={() => setAttributes({ inputBackgroundColor: "" })}
                />
                <PanelBody
                  title={__("Border", "responsive-block-editor-addons")}
                  initialOpen={false}
                >
                  <RbeaBlockBorderHelperControl
                    attrNameTemplate="input%s"
                    values={{ radius: inputBorderRadius, style: inputBorderStyle, width: inputBorderWidth, color: inputBorderColor }}
                    setAttributes={setAttributes}
                    {...this.props}
                  />
                </PanelBody>
                <PanelBody
                  title={__("Box Shadow", "responsive-block-editor-addons")}
                  initialOpen={false}
              >
                  {advancedControls}
              </PanelBody>
                <PanelBody
                  title={__("Padding", "responsive-block-editor-addons")}
                  initialOpen={false}
                >
                  <ResponsiveNewPaddingControl
                    attrNameTemplate="input%s"
                    resetValues={spacingResetValues}
                    {...this.props}
                  />
                </PanelBody>
                <TabPanel
                className=" responsive-size-type-field-tabs  responsive-size-type-field__common-tabs  responsive-inline-margin"
                activeClass="active-tab"
                tabs={[
                  {
                    name: "desktop",
                    title: <Dashicon icon="desktop" />,
                    className:
                      " responsive-desktop-tab  responsive-responsive-tabs",
                  },
                  {
                    name: "tablet",
                    title: <Dashicon icon="tablet" />,
                    className:
                      " responsive-tablet-tab  responsive-responsive-tabs",
                  },
                  {
                    name: "mobile",
                    title: <Dashicon icon="smartphone" />,
                    className:
                      " responsive-mobile-tab  responsive-responsive-tabs",
                  },
                ]}
              >
                {(tab) => {
                  let tabout;

                  if ("mobile" === tab.name) {
                    tabout = (
                      <Fragment>
                        <RbeaRangeControl
                          label={__(
                            "Text Indent (px)",
                            "responsive-block-editor-addons"
                          )}
                          value={textIndentMobile}
                          onChange={(value) =>
                            setAttributes({
                              textIndentMobile: value,
                            })
                          }
                          min={0}
                          max={60}
                          beforeIcon=""
                        />
                      </Fragment>
                    );
                  } else if ("tablet" === tab.name) {
                    tabout = (
                      <Fragment>
                        <RbeaRangeControl
                          label={__(
                            "Text Indent (px)",
                            "responsive-block-editor-addons"
                          )}
                          value={textIndentTablet}
                          onChange={(value) =>
                            setAttributes({
                              textIndentTablet: value,
                            })
                          }
                          min={0}
                          max={60}
                          beforeIcon=""
                        />
                      </Fragment>
                    );
                  } else {
                    tabout = (
                      <Fragment>
                        <RbeaRangeControl
                          label={__(
                            "Text Indent (px)",
                            "responsive-block-editor-addons"
                          )}
                          value={textIndent}
                          onChange={(value) =>
                            setAttributes({
                              textIndent: value,
                            })
                          }
                          min={0}
                          max={60}
                          beforeIcon=""
                        />
                      </Fragment>
                    );
                  }

                  return <div>{tabout}</div>;
                }}
              </TabPanel>
              <TabPanel
                className=" responsive-size-type-field-tabs  responsive-size-type-field__common-tabs  responsive-inline-margin"
                activeClass="active-tab"
                tabs={[
                  {
                    name: "desktop",
                    title: <Dashicon icon="desktop" />,
                    className:
                      " responsive-desktop-tab  responsive-responsive-tabs",
                  },
                  {
                    name: "tablet",
                    title: <Dashicon icon="tablet" />,
                    className:
                      " responsive-tablet-tab  responsive-responsive-tabs",
                  },
                  {
                    name: "mobile",
                    title: <Dashicon icon="smartphone" />,
                    className:
                      " responsive-mobile-tab  responsive-responsive-tabs",
                  },
                ]}
              >
                {(tab) => {
                  let tabout;

                  if ("mobile" === tab.name) {
                    tabout = (
                      <Fragment>
                        <RbeaRangeControl
                          label={__(
                            "Input Width (%)",
                            "responsive-block-editor-addons"
                          )}
                          value={inputWidthMobile}
                          onChange={(value) =>
                            setAttributes({
                              inputWidthMobile: value,
                            })
                          }
                          min={0}
                          max={100}
                          beforeIcon=""
                        />
                      </Fragment>
                    );
                  } else if ("tablet" === tab.name) {
                    tabout = (
                      <Fragment>
                        <RbeaRangeControl
                          label={__(
                            "Input Width (%)",
                            "responsive-block-editor-addons"
                          )}
                          value={inputWidthTablet}
                          onChange={(value) =>
                            setAttributes({
                              inputWidthTablet: value,
                            })
                          }
                          min={0}
                          max={100}
                          beforeIcon=""
                        />
                      </Fragment>
                    );
                  } else {
                    tabout = (
                      <Fragment>
                        <RbeaRangeControl
                          label={__(
                            "Input Width (%)",
                            "responsive-block-editor-addons"
                          )}
                          value={inputWidth}
                          onChange={(value) =>
                            setAttributes({
                              inputWidth: value,
                            })
                          }
                          min={0}
                          max={100}
                          beforeIcon=""
                        />
                      </Fragment>
                    );
                  }

                  return <div>{tabout}</div>;
                }}
              </TabPanel>
              <TabPanel
                className=" responsive-size-type-field-tabs  responsive-size-type-field__common-tabs  responsive-inline-margin"
                activeClass="active-tab"
                tabs={[
                  {
                    name: "desktop",
                    title: <Dashicon icon="desktop" />,
                    className:
                      " responsive-desktop-tab  responsive-responsive-tabs",
                  },
                  {
                    name: "tablet",
                    title: <Dashicon icon="tablet" />,
                    className:
                      " responsive-tablet-tab  responsive-responsive-tabs",
                  },
                  {
                    name: "mobile",
                    title: <Dashicon icon="smartphone" />,
                    className:
                      " responsive-mobile-tab  responsive-responsive-tabs",
                  },
                ]}
              >
                {(tab) => {
                  let tabout;

                  if ("mobile" === tab.name) {
                    tabout = (
                      <Fragment>
                        <RbeaRangeControl
                          label={__(
                            "Input Height (px)",
                            "responsive-block-editor-addons"
                          )}
                          value={inputHeightMobile}
                          onChange={(value) =>
                            setAttributes({
                              inputHeightMobile: value,
                            })
                          }
                          min={0}
                          max={1000}
                          beforeIcon=""
                        />
                      </Fragment>
                    );
                  } else if ("tablet" === tab.name) {
                    tabout = (
                      <Fragment>
                        <RbeaRangeControl
                          label={__(
                            "Input Height (px)",
                            "responsive-block-editor-addons"
                          )}
                          value={inputHeightTablet}
                          onChange={(value) =>
                            setAttributes({
                              inputHeightTablet: value,
                            })
                          }
                          min={0}
                          max={1000}
                          beforeIcon=""
                        />
                      </Fragment>
                    );
                  } else {
                    tabout = (
                      <Fragment>
                        <RbeaRangeControl
                          label={__(
                            "Input Height (px)",
                            "responsive-block-editor-addons"
                          )}
                          value={inputHeight}
                          onChange={(value) =>
                            setAttributes({
                              inputHeight: value,
                            })
                          }
                          min={0}
                          max={1000}
                          beforeIcon=""
                        />
                      </Fragment>
                    );
                  }

                  return <div>{tabout}</div>;
                }}
              </TabPanel>
              <TabPanel
                className=" responsive-size-type-field-tabs  responsive-size-type-field__common-tabs  responsive-inline-margin"
                activeClass="active-tab"
                tabs={[
                  {
                    name: "desktop",
                    title: <Dashicon icon="desktop" />,
                    className:
                      " responsive-desktop-tab  responsive-responsive-tabs",
                  },
                  {
                    name: "tablet",
                    title: <Dashicon icon="tablet" />,
                    className:
                      " responsive-tablet-tab  responsive-responsive-tabs",
                  },
                  {
                    name: "mobile",
                    title: <Dashicon icon="smartphone" />,
                    className:
                      " responsive-mobile-tab  responsive-responsive-tabs",
                  },
                ]}
              >
                {(tab) => {
                  let tabout;

                  if ("mobile" === tab.name) {
                    tabout = (
                      <Fragment>
                        <RbeaRangeControl
                          label={__(
                            "Textarea Width (px)",
                            "responsive-block-editor-addons"
                          )}
                          value={textareaWidthMobile}
                          onChange={(value) =>
                            setAttributes({
                              textareaWidthMobile: value,
                            })
                          }
                          min={0}
                          max={100}
                          beforeIcon=""
                        />
                      </Fragment>
                    );
                  } else if ("tablet" === tab.name) {
                    tabout = (
                      <Fragment>
                        <RbeaRangeControl
                          label={__(
                            "Textarea Width (px)",
                            "responsive-block-editor-addons"
                          )}
                          value={textareaWidthTablet}
                          onChange={(value) =>
                            setAttributes({
                              textareaWidthTablet: value,
                            })
                          }
                          min={0}
                          max={100}
                          beforeIcon=""
                        />
                      </Fragment>
                    );
                  } else {
                    tabout = (
                      <Fragment>
                        <RbeaRangeControl
                          label={__(
                            "Textarea Width (%)",
                            "responsive-block-editor-addons"
                          )}
                          value={textareaWidth}
                          onChange={(value) =>
                            setAttributes({
                              textareaWidth: value,
                            })
                          }
                          min={0}
                          max={100}
                          beforeIcon=""
                        />
                      </Fragment>
                    );
                  }

                  return <div>{tabout}</div>;
                }}
              </TabPanel>
              <TabPanel
                className=" responsive-size-type-field-tabs  responsive-size-type-field__common-tabs  responsive-inline-margin"
                activeClass="active-tab"
                tabs={[
                  {
                    name: "desktop",
                    title: <Dashicon icon="desktop" />,
                    className:
                      " responsive-desktop-tab  responsive-responsive-tabs",
                  },
                  {
                    name: "tablet",
                    title: <Dashicon icon="tablet" />,
                    className:
                      " responsive-tablet-tab  responsive-responsive-tabs",
                  },
                  {
                    name: "mobile",
                    title: <Dashicon icon="smartphone" />,
                    className:
                      " responsive-mobile-tab  responsive-responsive-tabs",
                  },
                ]}
              >
                {(tab) => {
                  let tabout;

                  if ("mobile" === tab.name) {
                    tabout = (
                      <Fragment>
                        <RbeaRangeControl
                          label={__(
                            "Textarea Height (px)",
                            "responsive-block-editor-addons"
                          )}
                          value={textareaHeightMobile}
                          onChange={(value) =>
                            setAttributes({
                              textareaHeightMobile: value,
                            })
                          }
                          min={0}
                          max={1000}
                          beforeIcon=""
                        />
                      </Fragment>
                    );
                  } else if ("tablet" === tab.name) {
                    tabout = (
                      <Fragment>
                        <RbeaRangeControl
                          label={__(
                            "Textarea Height (px)",
                            "responsive-block-editor-addons"
                          )}
                          value={textareaHeightTablet}
                          onChange={(value) =>
                            setAttributes({
                              textareaHeightTablet: value,
                            })
                          }
                          min={0}
                          max={1000}
                          beforeIcon=""
                        />
                      </Fragment>
                    );
                  } else {
                    tabout = (
                      <Fragment>
                        <RbeaRangeControl
                          label={__(
                            "Textarea Height (px)",
                            "responsive-block-editor-addons"
                          )}
                          value={textareaHeight}
                          onChange={(value) =>
                            setAttributes({
                              textareaHeight: value,
                            })
                          }
                          min={0}
                          max={1000}
                          beforeIcon=""
                        />
                      </Fragment>
                    );
                  }

                  return <div>{tabout}</div>;
                }}
              </TabPanel>
              </PanelBody>
              <TypographyHelperControl
                  title={__("Input Typography", "responsive-block-editor-addons")}
                  attrNameTemplate="input%s"
                  values={{
                    family: inputFontFamily,
                    size: inputFontSize,
                    sizeMobile: inputFontSizeMobile,
                    sizeTablet: inputFontSizeTablet,
                    weight: inputFontWeight,
                    height: inputLineHeight,
                    spacing: inputLetterSpacing,
                    color: inputTypographyColor,
                  }}
                  showLetterSpacing = { false }
                  showTextTransform = { false }
                  showColorControl = {true}
                  setAttributes={ setAttributes }
                  {...this.props}
                />
              <TypographyHelperControl
                title={__(
                  "Labels Typography",
                  "responsive-block-editor-addons"
                )}
                attrNameTemplate="label%s"
                values={{
                  family: labelFontFamily,
                  size: labelFontSize,
                  sizeMobile: labelFontSizeMobile,
                  sizeTablet: labelFontSizeTablet,
                  weight: labelFontWeight,
                  height: labelLineHeight,
                  spacing: labelLetterSpacing,
                  color: labelTypographyColor,
                  bottomSpacing: labelBottomSpacing,
                  bottomSpacingTablet: labelBottomSpacingTablet,
                  bottomSpacingMobile: labelBottomSpacingMobile,
                }}
                showLetterSpacing={true}
                showTextTransform={false}
                showTextBottomSpacing={true}
                showColorControl={true}
                setAttributes={setAttributes}
                {...this.props}
              />
            <PanelBody
              title={__(
                "Placeholder",
                "responsive-block-editor-addons"
              )}
              initialOpen={false}
            >
              <ToggleControl
                label={__("Show Placeholder", "responsive-block-editor-addons")}
                checked={showPlaceholder}
                onChange={this.toggleShowPlaceholder}
              />
              {showPlaceholder == true && (         
              <RbeaColorControl
                label = {__("Placeholder Color", "responsive-block-editor-addons")}
                colorValue={placeholderColor}
                onChange={(colorValue) =>
                  setAttributes({ placeholderColor: colorValue })
                }
                resetColor={() => setAttributes({ placeholderColor: "" })}
              />
              )}                         
            </PanelBody>
            <PanelBody
              title={__(
                "Radio and Checkboxes",
                "responsive-block-editor-addons"
              )}
              initialOpen={false}
            >
              <ToggleControl
                label={__("Custom Styles", "responsive-block-editor-addons")}
                checked={enableCustomStyles}
                onChange={this.toggleEnableCustomStyles}
              />
              {enableCustomStyles == true && (
                <PanelBody>
                <RbeaRangeControl
                label={__("Size", "responsive-block-editor-addons")}
                value={radioCheckboxSize}
                onChange={(value) =>
                  setAttributes({ radioCheckboxSize: value !== undefined ? value : 40 })
                }
                min={10}
                max={300}
                beforeIcon=""
                allowReset
              />
              <TypographyHelperControl
                title={__(
                  "Typography",
                  "responsive-block-editor-addons"
                )}
                attrNameTemplate="radioCheckbox%s"
                values={{
                  family: radioCheckboxFontFamily,
                  size: radioCheckboxFontSize,
                  sizeMobile: radioCheckboxFontSizeMobile,
                  sizeTablet: radioCheckboxFontSizeTablet,
                  weight: radioCheckboxFontWeight,
                  height: radioCheckboxLineHeight,
                  spacing: radioCheckboxLetterSpacing,
                }}
                showLetterSpacing={true}
                showTextTransform={false}
                setAttributes={setAttributes}
                {...this.props}
              /> 
              <RbeaColorControl
                label = {__("Options Color", "responsive-block-editor-addons")}
                colorValue={radioCheckboxTextColor}
                onChange={(colorValue) =>
                  setAttributes({ radioCheckboxTextColor: colorValue })
                }
                resetColor={() => setAttributes({ radioCheckboxTextColor: "" })}
              />
              <RbeaColorControl
                label = {__("Color", "responsive-block-editor-addons")}
                colorValue={radioCheckboxColor}
                onChange={(colorValue) =>
                  setAttributes({ radioCheckboxColor: colorValue })
                }
                resetColor={() => setAttributes({ radioCheckboxColor: "" })}
              />
              <RbeaColorControl
                label = {__("Color - Checked", "responsive-block-editor-addons")}
                colorValue={hoverRadioCheckboxColor}
                onChange={(colorValue) =>
                  setAttributes({ hoverRadioCheckboxColor: colorValue })
                }
                resetColor={() => setAttributes({ hoverRadioCheckboxColor: "" })}
              />
              <RbeaRangeControl
                label={__("Border Width", "responsive-block-editor-addons")}
                value={radioCheckboxBorderWidth}
                onChange={(value) =>
                  setAttributes({ radioCheckboxBorderWidth: value !== undefined ? value : 0 })
                }
                min={0}
                max={300}
                beforeIcon=""
                allowReset
              />
              <RbeaColorControl
                label = {__("Border Color", "responsive-block-editor-addons")}
                colorValue={radioCheckboxBorderColor}
                onChange={(colorValue) =>
                  setAttributes({ radioCheckboxBorderColor: colorValue })
                }
                resetColor={() => setAttributes({ radioCheckboxBorderColor: "" })}
              />
              <RbeaBorderRadiusControl
                label={__("Checkbox Border Radius", "responsive-block-editor-addons")}
                attrNameTemplate="checkboxBorder%s"
                {...this.props}
              />
              <RbeaBorderRadiusControl
                label={__("Radio Border Radius", "responsive-block-editor-addons")}
                attrNameTemplate="radioButtonBorder%s"
                {...this.props}
              /> 
              </PanelBody>   
              )}                                  
            </PanelBody>
          
            <PanelBody
              title={__(
                "Submit Button",
                "responsive-block-editor-addons"
              )}
              initialOpen={false}
            >
              <TabPanel
                className=" responsive-size-type-field-tabs  responsive-size-type-field__common-tabs  responsive-inline-margin"
                activeClass="active-tab"
                tabs={[
                  {
                    name: "desktop",
                    title: <Dashicon icon="desktop" />,
                    className:
                      " responsive-desktop-tab  responsive-responsive-tabs",
                  },
                  {
                    name: "tablet",
                    title: <Dashicon icon="tablet" />,
                    className:
                      " responsive-tablet-tab  responsive-responsive-tabs",
                  },
                  {
                    name: "mobile",
                    title: <Dashicon icon="smartphone" />,
                    className:
                      " responsive-mobile-tab  responsive-responsive-tabs",
                  },
                ]}
              >
                {(tab) => {
                  let tabout;

                  if ("mobile" === tab.name) {
                    tabout = (
                      <Fragment>
                        <BaseControl>
                          <p>
                            {__(
                              "Alignment Mobile",
                              "responsive-block-editor-addons"
                            )}
                          </p>
                          <div className="responsive-block-editor-addons-alignment">
                          <AlignmentToolbar
                            value={ctaButtonAlignmentMobile}
                            onChange={(value) =>
                              setAttributes({
                                ctaButtonAlignmentMobile: value,
                              })
                            }
                            controls={["left", "center", "right"]}
                            isCollapsed={false}
                          />
                          </div>
                        </BaseControl>
                      </Fragment>
                    );
                  } else if ("tablet" === tab.name) {
                    tabout = (
                      <Fragment>
                        <BaseControl>
                          <p>
                            {__(
                              "Alignment Tablet",
                              "responsive-block-editor-addons"
                            )}
                          </p>
                          <div className="responsive-block-editor-addons-alignment">
                          <AlignmentToolbar
                            value={ctaButtonAlignmentTablet}
                            onChange={(value) =>
                              setAttributes({
                                ctaButtonAlignmentTablet: value,
                              })
                            }
                            controls={["left", "center", "right"]}
                            isCollapsed={false}
                          />
                          </div>
                        </BaseControl>
                      </Fragment>
                    );
                  } else {
                    tabout = (
                      <Fragment>
                        <BaseControl>
                          <p>
                            {__("Alignment", "responsive-block-editor-addons")}
                          </p>
                          <div className="responsive-block-editor-addons-alignment">
                          <AlignmentToolbar
                            value={ctaButtonAlignment}
                            onChange={(value) =>
                              setAttributes({
                                ctaButtonAlignment: value,
                              })
                            }
                            controls={["left", "center", "right"]}
                            isCollapsed={false}
                          />
                          </div>
                        </BaseControl>
                      </Fragment>
                    );
                  }

                  return <div>{tabout}</div>;
                }}
              </TabPanel>
              <TabPanel
                className=" responsive-size-type-field-tabs  responsive-size-type-field__common-tabs  responsive-inline-margin"
                activeClass="active-tab"
                tabs={[
                  {
                    name: "desktop",
                    title: <Dashicon icon="desktop" />,
                    className:
                      " responsive-desktop-tab  responsive-responsive-tabs",
                  },
                  {
                    name: "tablet",
                    title: <Dashicon icon="tablet" />,
                    className:
                      " responsive-tablet-tab  responsive-responsive-tabs",
                  },
                  {
                    name: "mobile",
                    title: <Dashicon icon="smartphone" />,
                    className:
                      " responsive-mobile-tab  responsive-responsive-tabs",
                  },
                ]}
              >
                {(tab) => {
                  let tabout;

                  if ("mobile" === tab.name) {
                    tabout = (
                      <Fragment>
                        <RbeaRangeControl
                          label={__(
                            "Button Width (%)",
                            "responsive-block-editor-addons"
                          )}
                          value={submitButtonWidthMobile}
                          onChange={(value) =>
                            setAttributes({
                              submitButtonWidthMobile: value,
                            })
                          }
                          min={0}
                          max={100}
                          beforeIcon=""
                        />
                      </Fragment>
                    );
                  } else if ("tablet" === tab.name) {
                    tabout = (
                      <Fragment>
                        <RbeaRangeControl
                          label={__(
                            "Button Width (%)",
                            "responsive-block-editor-addons"
                          )}
                          value={submitButtonWidthTablet}
                          onChange={(value) =>
                            setAttributes({
                              submitButtonWidthTablet: value,
                            })
                          }
                          min={0}
                          max={100}
                          beforeIcon=""
                        />
                      </Fragment>
                    );
                  } else {
                    tabout = (
                      <Fragment>
                        <RbeaRangeControl
                          label={__(
                            "Button Width (%)",
                            "responsive-block-editor-addons"
                          )}
                          value={submitButtonWidth}
                          onChange={(value) =>
                            setAttributes({
                              submitButtonWidth: value,
                            })
                          }
                          min={0}
                          max={100}
                          beforeIcon=""
                        />
                      </Fragment>
                    );
                  }

                  return <div>{tabout}</div>;
                }}
              </TabPanel>
              <TabPanel
                className=" responsive-size-type-field-tabs  responsive-size-type-field__common-tabs  responsive-inline-margin"
                activeClass="active-tab"
                tabs={[
                  {
                    name: "desktop",
                    title: <Dashicon icon="desktop" />,
                    className:
                      " responsive-desktop-tab  responsive-responsive-tabs",
                  },
                  {
                    name: "tablet",
                    title: <Dashicon icon="tablet" />,
                    className:
                      " responsive-tablet-tab  responsive-responsive-tabs",
                  },
                  {
                    name: "mobile",
                    title: <Dashicon icon="smartphone" />,
                    className:
                      " responsive-mobile-tab  responsive-responsive-tabs",
                  },
                ]}
              >
                {(tab) => {
                  let tabout;

                  if ("mobile" === tab.name) {
                    tabout = (
                      <Fragment>
                        <RbeaRangeControl
                          label={__(
                            "Button Height (px)",
                            "responsive-block-editor-addons"
                          )}
                          value={submitButtonHeightMobile}
                          onChange={(value) =>
                            setAttributes({
                              submitButtonHeightMobile: value,
                            })
                          }
                          min={0}
                          max={1000}
                          beforeIcon=""
                        />
                      </Fragment>
                    );
                  } else if ("tablet" === tab.name) {
                    tabout = (
                      <Fragment>
                        <RbeaRangeControl
                          label={__(
                            "Button Height (px)",
                            "responsive-block-editor-addons"
                          )}
                          value={submitButtonHeightTablet}
                          onChange={(value) =>
                            setAttributes({
                              submitButtonHeightTablet: value,
                            })
                          }
                          min={0}
                          max={1000}
                          beforeIcon=""
                        />
                      </Fragment>
                    );
                  } else {
                    tabout = (
                      <Fragment>
                        <RbeaRangeControl
                          label={__(
                            "Button Height (px)",
                            "responsive-block-editor-addons"
                          )}
                          value={submitButtonHeight}
                          onChange={(value) =>
                            setAttributes({
                              submitButtonHeight: value,
                            })
                          }
                          min={0}
                          max={1000}
                          beforeIcon=""
                        />
                      </Fragment>
                    );
                  }

                  return <div>{tabout}</div>;
                }}
              </TabPanel>
              <TypographyHelperControl
                title={__(
                  "Button Typography",
                  "responsive-block-editor-addons"
                )}
                attrNameTemplate="submitButton%s"
                values={{
                  family: submitButtonFontFamily,
                  size: submitButtonFontSize,
                  sizeMobile: submitButtonFontSizeMobile,
                  sizeTablet: submitButtonFontSizeTablet,
                  weight: submitButtonFontWeight,
                  height: submitButtonLineHeight,
                  spacing: submitButtonLetterSpacing,
                }}
                showLetterSpacing={true}
                showTextTransform={false}
                setAttributes={setAttributes}
                {...this.props}
              />

              {/* Button Settings */}
              <ButtonSettingsControl
                  {...this.props}
                  showMarginControls={false}
                  showBackColorOpacity={false}
                  showGradientHover={false}
                  showTextOpacity={false}
                />                        
            </PanelBody>
            <PanelBody
              title={__("Messages", "responsive-block-editor-addons")}
              initialOpen={false}
            >
              <TypographyHelperControl
                title={__(
                  "Messages Typography",
                  "responsive-block-editor-addons"
                )}
                attrNameTemplate="message%s"
                values={{
                  family: messageFontFamily,
                  size: messageFontSize,
                  sizeMobile: messageFontSizeMobile,
                  sizeTablet: messageFontSizeTablet,
                  weight: messageFontWeight,
                  height: messageLineHeight,
                  spacing: messageLetterSpacing,
                }}
                showLetterSpacing={true}
                showTextTransform={false}
                setAttributes={setAttributes}
                {...this.props}
              />              
              <RbeaColorControl
                label = {__("Error Message Color", "responsive-block-editor-addons")}
                colorValue={errorMsgColor}
                onChange={(colorValue) =>
                  setAttributes({ errorMsgColor: colorValue })
                }
                resetColor={() => setAttributes({ errorMsgColor: "" })}
              />
              
            </PanelBody>
            <PanelBody
              title={__("After Submit Feedback", "responsive-block-editor-addons")}
              initialOpen={false}
            >
              <TypographyHelperControl
                title={__(
                  "Typography",
                  "responsive-block-editor-addons"
                )}
                attrNameTemplate="afterSubmit%s"
                values={{
                  family: afterSubmitFontFamily,
                  size: afterSubmitFontSize,
                  sizeMobile: afterSubmitFontSizeMobile,
                  sizeTablet: afterSubmitFontSizeTablet,
                  weight: afterSubmitFontWeight,
                  height: afterSubmitLineHeight,
                  spacing: afterSubmitLetterSpacing,
                }}
                showLetterSpacing={true}
                showTextTransform={false}
                setAttributes={setAttributes}
                {...this.props}
              />
              <RbeaColorControl
                label = {__("Success Message Color", "responsive-block-editor-addons")}
                colorValue={successMsgColor}
                onChange={(colorValue) =>
                  setAttributes({ successMsgColor: colorValue })
                }
                resetColor={() => setAttributes({ successMsgColor: "" })}
              />
              <RbeaColorControl
                label = {__("Error Message Color", "responsive-block-editor-addons")}
                colorValue={afterSubmitErrorMsgColor}
                onChange={(colorValue) =>
                  setAttributes({ afterSubmitErrorMsgColor: colorValue })
                }
                resetColor={() => setAttributes({ afterSubmitErrorMsgColor: "" })}
              />
              <RbeaColorControl
                label = {__("Background Color", "responsive-block-editor-addons")}
                colorValue={afterSubmitMsgbgColor}
                onChange={(colorValue) =>
                  setAttributes({ afterSubmitMsgbgColor: colorValue })
                }
                resetColor={() => setAttributes({ afterSubmitMsgbgColor: "" })}
              />
              <PanelBody
              title={__("Spacing", "responsive-block-editor-addons")}
              initialOpen={false}
            >
              <ResponsiveNewPaddingControl
                attrNameTemplate="afterSubmit%s"
                resetValues={afterSubmitPaddingResetValues}
                {...this.props}
              />
              <ResponsiveNewMarginControl
                attrNameTemplate="afterSubmit%s"
                resetValues={afterSubmitMarginResetValues}
                {...this.props}
              />           
            </PanelBody>
            <PanelBody
              title={__("Border", "responsive-block-editor-addons")}
              initialOpen={false}
            >
              <RbeaBlockBorderHelperControl
                attrNameTemplate="afterSubmit%s"
                values={{
                  radius: afterSubmitBorderRadius,
                  style: afterSubmitBorderStyle,
                  width: afterSubmitBorderWidth,
                  color: afterSubmitBorderColor,
                }}
                setAttributes={setAttributes}
                {...this.props}
              />
              
            </PanelBody>            
            </PanelBody>
          </InspectorTab>
          <InspectorTab key={"advance"}>
            <PanelBody
              title={__("Responsive Conditions", "responsive-block-editor-addons")}
              initialOpen={false}
            >
              <ToggleControl
                label={__(
                  "Hide on Desktop",
                  "responsive-block-editor-addons"
                )}
                checked={hideWidget}
                onChange={(value) =>
                  setAttributes({ hideWidget: !hideWidget })
                }
              />
              <ToggleControl
                label={__(
                  "Hide on Tablet",
                  "responsive-block-editor-addons"
                )}
                checked={hideWidgetTablet}
                onChange={(value) =>
                  setAttributes({ hideWidgetTablet: !hideWidgetTablet })
                }
              />
              <ToggleControl
                label={__(
                  "Hide on Mobile",
                  "responsive-block-editor-addons"
                )}
                checked={hideWidgetMobile}
                onChange={(value) =>
                  setAttributes({ hideWidgetMobile: !hideWidgetMobile })
                }
              />
            </PanelBody>
            <PanelBody
              title={__("Z Index", "responsive-block-editor-addons")}
              initialOpen={false}
            >
               <TabPanel
                  className=" responsive-size-type-field-tabs  responsive-size-type-field__common-tabs  responsive-inline-margin"
                  activeClass="active-tab"
                  tabs={[
                    {
                      name: "desktop",
                      title: <Dashicon icon="desktop" />,
                      className:
                        " responsive-desktop-tab  responsive-responsive-tabs",
                    },
                    {
                      name: "tablet",
                      title: <Dashicon icon="tablet" />,
                      className:
                        " responsive-tablet-tab  responsive-responsive-tabs",
                    },
                    {
                      name: "mobile",
                      title: <Dashicon icon="smartphone" />,
                      className:
                        " responsive-mobile-tab  responsive-responsive-tabs",
                    },
                  ]}
                >
                  {(tab) => {
                    let tabout;

                    if ("mobile" === tab.name) {
                      tabout = (
                        <RbeaRangeControl
                        label={__("z-index (Mobile)", "responsive-block-editor-addons")}
                        min={-1}
                        max={99999}
                        allowReset={true}
                        resetFallbackValue={1}
                        value={z_indexMobile}
                        onChange={(value) =>
                          setAttributes({ z_indexMobile: value !== undefined ? value : 1 })
                        }
                      />
                      );
                    } else if ("tablet" === tab.name) {
                      tabout = (
                        <RbeaRangeControl
                        label={__("z-index (Tablet)", "responsive-block-editor-addons")}
                        min={-1}
                        max={99999}
                        allowReset={true}
                        resetFallbackValue={1}
                        value={z_indexTablet}
                        onChange={(value) =>
                          setAttributes({ z_indexTablet: value !== undefined ? value : 1 })
                        }
                      />
                      );
                    } else {
                      tabout = (
                        <RbeaRangeControl
                        label={__("z-index ", "responsive-block-editor-addons")}
                        min={-1}
                        max={99999}
                        allowReset={true}
                        resetFallbackValue={1}
                        value={z_index}
                        onChange={(value) =>
                          setAttributes({ z_index: value !== undefined ? value : 1 })
                        }
                      />
                      );
                    }

                    return <div>{tabout}</div>;
                  }}
              </TabPanel>
          </PanelBody>
          </InspectorTab>
        </InspectorTabs>
      </InspectorControls>
    );
  }
}
