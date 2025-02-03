/**
 * Returns Dynamic Generated CSS
 */

 import generateCSS from "../../../generateCSS";
 import generateCSSUnit from "../../../generateCSSUnit";
 import { hexToRgba } from "../../../utils";
 import generateBackgroundImageEffect from "../../../generateBackgroundImageEffect";
 
 function EditorStyles(props) {
   const {
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
     formBorderStyle,
     formBorderWidth,
     formBorderColor,
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
     backgroundColor,
     backgroundColorHover,
     backgroundColor1,
     backgroundColor2,
     colorLocation1,
     colorLocation2,
     gradientDirection,
     hoverbackgroundColor1,
     hoverbackgroundColor2,
     hovercolorLocation1,
     hovercolorLocation2,
     hovergradientDirection,
     backgroundType,
     backgroundImage,
     overlayType,
     backgroundImageColor,
     gradientOverlayColor1,
     gradientOverlayLocation1,
     gradientOverlayColor2,
     gradientOverlayLocation2,
     gradientOverlayType,
     gradientOverlayAngle,
     gradientOverlayPosition,
     opacity,
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
     inputBorderStyle,
     inputBorderWidth,
     inputBorderColor,
     inputTopPadding,
     inputBottomPadding,
     inputLeftPadding,
     inputRightPadding,
     inputTopPaddingTablet,
     inputBottomPaddingTablet,
     inputLeftPaddingTablet,
     inputRightPaddingTablet,
     inputTopPaddingMobile,
     inputBottomPaddingMobile,
     inputLeftPaddingMobile,
     inputRightPaddingMobile,
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
     textIndent,
     textIndentMobile,
     textIndentTablet,
     inputFontFamily,
     inputFontSize,
     inputFontSizeMobile,
     inputFontSizeTablet,
     inputFontWeight,
     inputLineHeight,
     inputLetterSpacing,
     inputBoxShadowColor,
     inputBoxShadowHOffset,
     inputBoxShadowVOffset,
     inputBoxShadowBlur,
     inputBoxShadowSpread,
     inputBoxShadowPosition,
     showErrorMsgs,
     showLabels,
     labelFontFamily,
     labelFontSize,
     labelFontSizeMobile,
     labelFontSizeTablet,
     labelFontWeight,
     labelLineHeight,
     labelLetterSpacing,
     labelColor,
     labelSpacing,
     labelSpacingMobile,
     labelSpacingTablet,
     showPlaceholder,
     placeholderOpacity,
     placeholderColor,
     //Radio/Checkbox Typography
     radioCheckboxTextColor,
     radioCheckboxFontFamily,
     radioCheckboxFontSize,
     radioCheckboxFontSizeMobile,
     radioCheckboxFontSizeTablet,
     radioCheckboxFontWeight,
     radioCheckboxLineHeight,
     radioCheckboxLetterSpacing,
     radioCheckboxSize,
     radioCheckboxColor,
     hoverRadioCheckboxColor,
     radioCheckboxBorderWidth,
     radioCheckboxBorderColor,
     radioButtonBorderRadius,
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
     submitButtonFontFamily,
     submitButtonFontSize,
     submitButtonFontSizeMobile,
     submitButtonFontSizeTablet,
     submitButtonFontWeight,
     submitButtonLineHeight,
     submitButtonLetterSpacing,
     ctaColor,
     ctaBackColor,
     ctaHoverColor,
     ctaHoverBackColor,
     ctaBorderColor,
     ctaBorderRadius, 
     ctaTopRadius,
     ctaRightRadius,
     ctaBottomRadius,
     ctaLeftRadius,
     ctaTopRadiusTablet,
     ctaRightRadiusTablet,
     ctaBottomRadiusTablet,
     ctaLeftRadiusTablet,
     ctaTopRadiusMobile,
     ctaRightRadiusMobile,
     ctaBottomRadiusMobile,
     ctaLeftRadiusMobile,
     ctaIsRadiusControlConnected,
     ctaIsRadiusValueUpdated,
     ctaBorderWidth,
     ctaBorderStyle,
     ctaHpadding,
     ctaVpadding,
     ctaHoverBorderColor,
     ctaHpaddingTablet,
     ctaHpaddingMobile,
     ctaVpaddingTablet,
     ctaVpaddingMobile,
     buttonbackgroundType,
     buttongradientDirection,
     buttoncolorLocation1,
     buttoncolorLocation2,
     buttonbackgroundColor1,
     buttonbackgroundColor2,
     buttonHbackgroundType,
     buttonHgradientDirection,
     buttonHcolorLocation1,
     buttonHcolorLocation2,
     buttonHbackgroundColor1,
     buttonHbackgroundColor2,
     ctaButtonAlignment,
     ctaButtonAlignmentMobile,
     ctaButtonAlignmentTablet,
     submitButtonWidth,
     submitButtonWidthMobile,
     submitButtonWidthTablet,
     submitButtonHeight,
     submitButtonHeightMobile,
     submitButtonHeightTablet,
     submitButtonBoxShadowColor,
     submitButtonBoxShadowHOffset,
     submitButtonBoxShadowVOffset,
     submitButtonBoxShadowBlur,
     submitButtonBoxShadowSpread,
     submitButtonBoxShadowPosition,
     block_id,
     hideWidget,
     hideWidgetTablet,
     hideWidgetMobile,
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
     inputTypographyColor,
     labelTypographyColor,
     labelBottomSpacing,
     labelBottomSpacingMobile,
     labelBottomSpacingTablet,

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
      isCtaButtonPaddingMarginValueUpdated
   } = props.attributes;


  var ctaButtonmarginleft='';
  var ctaButtonmarginright='';


  if ("left" === ctaButtonAlignment) {
    ctaButtonmarginleft='0',
    ctaButtonmarginright=''
  }

  if ("center" === ctaButtonAlignment) {
    ctaButtonmarginleft='',
    ctaButtonmarginright=''
  }

  if ("right" === ctaButtonAlignment) {
    ctaButtonmarginleft='',
    ctaButtonmarginright='0'
  }

  var ctaButtonmarginleftMobile='';
  var ctaButtonmarginrightMobile='';


  if ("left" === ctaButtonAlignmentMobile) {
    ctaButtonmarginleftMobile='',
    ctaButtonmarginrightMobile='0'
  }

  if ("center" === ctaButtonAlignmentMobile) {
    ctaButtonmarginleftMobile='',
    ctaButtonmarginrightMobile=''
  }

  if ("right" === ctaButtonAlignmentMobile) {
    ctaButtonmarginleftMobile='',
    ctaButtonmarginrightMobile='0'
  }

  var ctaButtonmarginleftTablet='';
  var ctaButtonmarginrightTablet='';


  if ("left" === ctaButtonAlignmentTablet) {
    ctaButtonmarginleftTablet='',
    ctaButtonmarginrightTablet='0'
  }

  if ("center" === ctaButtonAlignmentTablet) {
    ctaButtonmarginleftTablet='',
    ctaButtonmarginrightTablet=''
  }

  if ("right" === ctaButtonAlignmentTablet) {
    ctaButtonmarginleftTablet='',
    ctaButtonmarginrightTablet='0'
  }

   

   var boxShadowPositionCSS = boxShadowPosition;

  if ("outset" === boxShadowPosition) {
    boxShadowPositionCSS = "";
  }

  var hoverboxShadowPositionCSS = hoverboxShadowPosition;

  if ("outset" === hoverboxShadowPosition) {
    hoverboxShadowPositionCSS = "";
  }

  var inputBoxShadowPositionCSS = inputBoxShadowPosition;

  if ("outset" === inputBoxShadowPosition) {
    inputBoxShadowPositionCSS = "";
  }

  var submitButtonBoxShadowPositionCSS = submitButtonBoxShadowPosition;

  if ("outset" === submitButtonBoxShadowPosition) {
    submitButtonBoxShadowPositionCSS = "";
  }


  let backgroundImageGradient = "";
  let btnColor = ctaBackColor;
  if (buttonbackgroundType == "gradient") {
    backgroundImageGradient = `linear-gradient(${buttongradientDirection}deg, ${buttonbackgroundColor1} ${buttoncolorLocation1}%, ${buttonbackgroundColor2} ${buttoncolorLocation2}%)`;
  } else if (buttonbackgroundType == "color") {
    btnColor = ctaBackColor;
  }

  let backgroundHoverImageGradient = "";
  let btnHColor = ctaHoverBackColor;
  if (buttonHbackgroundType == "gradient") {
    backgroundHoverImageGradient = `linear-gradient(${buttonHgradientDirection}deg, ${buttonHbackgroundColor1} ${buttonHcolorLocation1}%, ${buttonHbackgroundColor2} ${buttonHcolorLocation2}%)`;
  } else if (buttonHbackgroundType == "color") {
    btnHColor = ctaHoverBackColor;
  }


  let imgopacity = opacity / 100;

  let updatedBackgroundImage = "";
  let backgroundImageEffect = "";
  let colorType = "";
  if (overlayType === "color") {
    let colorType = `${hexToRgba(
      backgroundImageColor || "#fff",
      imgopacity || 0
    )}`;

    if(backgroundImage) {
      updatedBackgroundImage = `linear-gradient(${hexToRgba(
        backgroundImageColor || "#fff",
        imgopacity || 0
      )},${hexToRgba(
        backgroundImageColor || "#fff",
        imgopacity || 0
      )}),url(${backgroundImage})`;
    }
    backgroundImageEffect = "";
  }else {
    if (gradientOverlayType === "linear") {
      backgroundImageEffect = `linear-gradient(${gradientOverlayAngle}deg, ${hexToRgba(
        gradientOverlayColor1 || "#fff",
        imgopacity || 0
      )} ${gradientOverlayLocation1}%, ${hexToRgba(
        gradientOverlayColor2 || "#fff",
        imgopacity || 0
      )} ${gradientOverlayLocation2}%),url(${backgroundImage})`;
    }
    if (gradientOverlayType === "radial") {
      backgroundImageEffect = `radial-gradient( at ${gradientOverlayPosition}, ${hexToRgba(
        gradientOverlayColor1 || "#fff",
        imgopacity || 0
      )} ${gradientOverlayLocation1}%, ${hexToRgba(
        gradientOverlayColor2 || "#fff",
        imgopacity || 0
      )} ${gradientOverlayLocation2}%),url(${backgroundImage})`;
    }
  }

 
   var selectors = {   

    "": {
      "opacity": hideWidget ? 0.2 : 1,
    },

    " .responsive-form-title-text": {
      "font-family": formTitleFontFamily,
      "font-size": generateCSSUnit(formTitleFontSize, "px"),
      "font-weight": formTitleFontWeight,
      "line-height": formTitleLineHeight,
      "letter-spacing": generateCSSUnit(formTitleLetterSpacing, "px"),
      "color": formTitleColor,
      "text-align": formTitleAlignment,
    },

    " .responsive-form-desc-text": {
      "font-family": formDescriptionFontFamily,
      "font-size": generateCSSUnit(formDescriptionFontSize, "px"),
      "font-weight": formDescriptionFontWeight,
      "line-height": formDescriptionLineHeight,
      "letter-spacing": generateCSSUnit(formDescriptionLetterSpacing, "px"),
      "color": formDescriptionColor,
      "text-align": formTitleAlignment,
    },

    " .form-container": {
      "justify-content": formAlignment,      
     }, 
     
     " .form": {
      "width":generateCSSUnit(formWidth, "%"),
      "padding-top": generateCSSUnit(formTopPadding, "px"),
      "padding-right": generateCSSUnit(formRightPadding, "px"),
      "padding-bottom": generateCSSUnit(formBottomPadding, "px"),
      "padding-left": generateCSSUnit(formLeftPadding, "px"),
      "margin-top": generateCSSUnit(formTopMargin, "px"),
      "margin-right": generateCSSUnit(formRightMargin, "px"),
      "margin-bottom":generateCSSUnit(formBottomMargin, "px"),
      "margin-left": generateCSSUnit(formLeftMargin, "px"),
      "border-width": generateCSSUnit(formBorderWidth, "px"),
      "border-color": formBorderColor,
      "border-style": formBorderStyle,
      "border-top-left-radius": generateCSSUnit(formTopRadius, "px"),
      "border-top-right-radius": generateCSSUnit(formRightRadius, "px"),
      "border-bottom-right-radius": generateCSSUnit(formBottomRadius, "px"),
      "border-bottom-left-radius": generateCSSUnit(formLeftRadius, "px"),
      "background-color":
        backgroundType == "color"
          ? `${hexToRgba(backgroundColor || "#fff", imgopacity || 0)}`
          : undefined,
      "background-image":
        backgroundType == "gradient"
          ? generateBackgroundImageEffect(
              `${hexToRgba(backgroundColor1 || "#fff", imgopacity || 0)}`,
              `${hexToRgba(backgroundColor2 || "#fff", imgopacity || 0)}`,
              gradientDirection,
              colorLocation1,
              colorLocation2
            )
          : undefined,
      "box-shadow":
        generateCSSUnit(boxShadowHOffset, "px") +
        " " +
        generateCSSUnit(boxShadowVOffset, "px") +
        " " +
        generateCSSUnit(boxShadowBlur, "px") +
        " " +
        generateCSSUnit(boxShadowSpread, "px") +
        " " +
        boxShadowColor +
        " " +
        boxShadowPositionCSS,
     }, 

     " .form:hover": {
      "box-shadow":
	  	hoverboxShadowColor !== ""
		  ? generateCSSUnit(hoverboxShadowHOffset, "px") +
        	" " +
        	generateCSSUnit(hoverboxShadowVOffset, "px") +
        	" " +
        	generateCSSUnit(hoverboxShadowBlur, "px") +
        	" " +
        	generateCSSUnit(hoverboxShadowSpread, "px") +
        	" " +
        	hoverboxShadowColor +
        	" " +
        	hoverboxShadowPositionCSS
		  : "",
      "background-color":
        backgroundType == "color"
          ? `${hexToRgba(backgroundColorHover || "#ffffff", imgopacity || 0)}`
          : undefined,
      "background-image":
        backgroundType == "gradient"
          ? generateBackgroundImageEffect(
            `${hexToRgba(
              hoverbackgroundColor1 || "#ffffff",
              imgopacity || 0
            )}`,
            `${hexToRgba(
              hoverbackgroundColor2 || "#ffffff",
              imgopacity || 0
            )}`,
            hovergradientDirection,
            hovercolorLocation1,
            hovercolorLocation2
          )
          : undefined,
     }, 

     " .wpcf7 input[type=text] ,.wpcf7 input[type=email], .wpcf7 .wpcf7-select": {      
      "color": inputTypographyColor,
      'background-color': inputBackgroundColor,
      "border-width": generateCSSUnit(inputBorderWidth, "px"),
      "border-color": inputBorderColor,
      "border-style": inputBorderStyle,
      "border-top-left-radius": generateCSSUnit(inputTopRadius, "px"),
      "border-top-right-radius": generateCSSUnit(inputRightRadius, "px"),
      "border-bottom-right-radius": generateCSSUnit(inputBottomRadius, "px"),
      "border-bottom-left-radius": generateCSSUnit(inputLeftRadius, "px"),
      "padding-top": generateCSSUnit(inputTopPadding, "px"),
      "padding-bottom": generateCSSUnit(inputBottomPadding, "px"),
      "padding-left": generateCSSUnit(inputLeftPadding, "px"),
      "padding-right": generateCSSUnit(inputRightPadding, "px"),
      "text-indent": generateCSSUnit(textIndent, "px"),
      "font-family": inputFontFamily,
      "font-size": generateCSSUnit(inputFontSize, "px"),
      "font-weight": inputFontWeight,
      "line-height": inputLineHeight,
      "letter-spacing": generateCSSUnit(inputLetterSpacing, "px"),
      'margin-top': generateCSSUnit( labelBottomSpacing, 'px' ),   
      "box-shadow":
        generateCSSUnit(inputBoxShadowHOffset, "px") +
        " " +
        generateCSSUnit(inputBoxShadowVOffset, "px") +
        " " +
        generateCSSUnit(inputBoxShadowBlur, "px") +
        " " +
        generateCSSUnit(inputBoxShadowSpread, "px") +
        " " +
        inputBoxShadowColor +
        " " +
        inputBoxShadowPositionCSS,
       
    },

    ' .wpcf7 textarea': {
			"color": inputTypographyColor,
      'background-color': inputBackgroundColor,
      "border-width": generateCSSUnit(inputBorderWidth, "px"),
      "border-color": inputBorderColor,
      "border-style": inputBorderStyle,
      "border-top-left-radius": generateCSSUnit(inputTopRadius, "px"),
      "border-top-right-radius": generateCSSUnit(inputRightRadius, "px"),
      "border-bottom-right-radius": generateCSSUnit(inputBottomRadius, "px"),
      "border-bottom-left-radius": generateCSSUnit(inputLeftRadius, "px"),
      "padding-top": generateCSSUnit(inputTopPadding, "px"),
      "padding-bottom": generateCSSUnit(inputBottomPadding, "px"),
      "padding-left": generateCSSUnit(inputLeftPadding, "px"),
      "padding-right": generateCSSUnit(inputRightPadding, "px"),
      "width": generateCSSUnit(textareaWidth, "%"),
      "height": generateCSSUnit(textareaHeight, "px"),
      "text-indent": generateCSSUnit(textIndent, "px"),
      "font-family": inputFontFamily,
      "font-size": generateCSSUnit(inputFontSize, "px"),
      "font-weight": inputFontWeight,
      "line-height": inputLineHeight,
      "letter-spacing": generateCSSUnit(inputLetterSpacing, "px"),
      'margin-top': generateCSSUnit( labelBottomSpacing, 'px' ),
      "box-shadow":
        generateCSSUnit(inputBoxShadowHOffset, "px") +
        " " +
        generateCSSUnit(inputBoxShadowVOffset, "px") +
        " " +
        generateCSSUnit(inputBoxShadowBlur, "px") +
        " " +
        generateCSSUnit(inputBoxShadowSpread, "px") +
        " " +
        inputBoxShadowColor +
        " " +
        inputBoxShadowPositionCSS + "!important" ,
		},

    ' .wpcf7-select, .wpcf7-checkbox, .wpcf7-radio, .wpcf7-textarea, .wpcf7-text, .wpcf7-email': {
      "width": generateCSSUnit(inputWidth, "%"),
      "height": generateCSSUnit(inputHeight, "px" + "!important" ),
		},

    ' .wpcf7-select': {
      "color": inputTypographyColor,
      'background-color': inputBackgroundColor,
		},   

    ' .wpcf7 form.wpcf7-form:not(input)': {
			'color': labelTypographyColor,
      "font-family": labelFontFamily,
      "font-size": generateCSSUnit(labelFontSize, "px"),
      "font-weight": labelFontWeight,
      "line-height": labelLineHeight,
      "letter-spacing": generateCSSUnit(labelLetterSpacing, "px"),
      "margin-top": generateCSSUnit( labelBottomSpacing, 'px' ),
		},

    ' p>label': {
      display: showLabels ? "block" : 'none',
		},

    ' .wpcf7-not-valid-tip': {
      display: showErrorMsgs ? "block" : 'none',
		},    


    ' ::-webkit-input-placeholder': {
			'color': placeholderColor,
      'opacity': showPlaceholder,
      
		},
    ' :-moz-placeholder ': {
			'color': placeholderColor,
      'opacity': showPlaceholder,
		},
    ' ::-moz-placeholder': {
			'color': placeholderColor,
      'opacity': showPlaceholder,
		},
    ' :-ms-input-placeholder': {
			'color': placeholderColor,
      'opacity': showPlaceholder,
		},

    ' input[type="checkbox"]': {
			'color': hoverRadioCheckboxColor,
		},

    // Check box Radio.
    " .wpcf7 .wpcf7-checkbox input[type='checkbox']": {
			'background-color': radioCheckboxColor,
			'color': hoverRadioCheckboxColor,
			'font-size': 'calc( ' + radioCheckboxSize + 'px / 1.2 )',
      "border": 'solid',
      'width': generateCSSUnit(radioCheckboxSize + radioCheckboxBorderWidth + radioCheckboxBorderWidth, "px"),
      'height': generateCSSUnit(radioCheckboxSize + radioCheckboxBorderWidth + radioCheckboxBorderWidth, "px"),
      "border-width": generateCSSUnit(radioCheckboxBorderWidth, "px"),
      "border-color": radioCheckboxBorderColor,
      "border-top-left-radius": generateCSSUnit(checkboxBorderTopRadius, "px"),
      "border-top-right-radius": generateCSSUnit(checkboxBorderRightRadius, "px"),
      "border-bottom-right-radius": generateCSSUnit(checkboxBorderBottomRadius, "px"),
      "border-bottom-left-radius": generateCSSUnit(checkboxBorderLeftRadius, "px"),

      
		},
		" .wpcf7 .wpcf7-checkbox input[type='checkbox']:checked + span:before": {
			'background-color': radioCheckboxColor,
			'color': hoverRadioCheckboxColor,
			'font-size': 'calc( ' + radioCheckboxSize + 'px / 1.2 )',
			'border-color': hoverRadioCheckboxColor,
		},
		" .wpcf7 .wpcf7-checkbox input[type='checkbox'] + span:before": {
			'background-color': radioCheckboxColor,
			'color': hoverRadioCheckboxColor,
			'display': 'inline-flex',
			'height': generateCSSUnit( radioCheckboxSize, 'px' ),
			'width': generateCSSUnit( radioCheckboxSize, 'px' ),
			'font-size': 'calc( ' + radioCheckboxSize + 'px / 1.2 )',
		},
		" .wpcf7 .wpcf7-acceptance input[type='checkbox']:checked + span:before": {
			'background-color': radioCheckboxColor,
			'color': hoverRadioCheckboxColor,
			'border-color': hoverRadioCheckboxColor,
		},
		" .wpcf7 .wpcf7-acceptance input[type='checkbox'] + span:before": {
			'background-color': radioCheckboxColor,
			'color': hoverRadioCheckboxColor,
			'height': generateCSSUnit( radioCheckboxSize, 'px' ),
			'width': generateCSSUnit( radioCheckboxSize, 'px' ),
			'font-size': 'calc( ' + radioCheckboxSize + 'px / 1.2 )',
		},
    " .wpcf7 .wpcf7-radio input[type='radio']": {
			'background-color': radioCheckboxColor,
			'color': hoverRadioCheckboxColor,
			'font-size': 'calc( ' + radioCheckboxSize + 'px / 1.2 )',
      "border": 'solid',
      "border-color": radioCheckboxBorderColor,
      'width': generateCSSUnit(radioCheckboxSize + radioCheckboxBorderWidth + radioCheckboxBorderWidth, "px"),
      'height': generateCSSUnit(radioCheckboxSize + radioCheckboxBorderWidth + radioCheckboxBorderWidth, "px"),
      "border-width": generateCSSUnit(radioCheckboxBorderWidth, "px"),
      "border-top-left-radius": generateCSSUnit(radioButtonBorderTopRadius, "px"),
      "border-top-right-radius": generateCSSUnit(radioButtonBorderRightRadius, "px"),
      "border-bottom-right-radius": generateCSSUnit(radioButtonBorderBottomRadius, "px"),
      "border-bottom-left-radius": generateCSSUnit(radioButtonBorderLeftRadius, "px"),
		},
    " .wpcf7 .wpcf7-radio input[type=radio]:checked::before": {
			'background-color': hoverRadioCheckboxColor,
			'color': hoverRadioCheckboxColor,
			'font-size': 'calc( ' + radioCheckboxSize + 'px * 0.4 )',
      "border": 'solid',
      'width': 'calc( ' + radioCheckboxSize + 'px * 0.4 )',
      'height': 'calc( ' + radioCheckboxSize + 'px * 0.4 )',
		},
    " .wpcf7 .wpcf7-radio input[type='radio']:checked + span:before": {
			'background-color': radioCheckboxColor,
			'color': hoverRadioCheckboxColor,
			'font-size': 'calc( ' + radioCheckboxSize + 'px / 1.2 )',
      "border-color": radioCheckboxBorderColor,
		},
		" .wpcf7 .wpcf7-radio input[type='radio'] + span:before": {
			'background-color': radioCheckboxColor,
			'color': hoverRadioCheckboxColor,
			'display': 'inline-flex',
			'border-radius': '100%',
			'height': 'calc( ' + radioCheckboxSize + 'px / 1.2 )',
			'width': 'calc( ' + radioCheckboxSize + 'px / 1.2 )',
		},
    " .wpcf7 .wpcf7-list-item": {
			'margin-top': generateCSSUnit( labelBottomSpacing, 'px' ),
		},
    " .wpcf7 .wpcf7-list-item-label": {
      "color": radioCheckboxTextColor,
			"font-family": radioCheckboxFontFamily,
      "font-size": generateCSSUnit(radioCheckboxFontSize, "px"),
      "font-weight": radioCheckboxFontWeight,
      "line-height": radioCheckboxLineHeight,
      "letter-spacing": generateCSSUnit(radioCheckboxLetterSpacing, "px"),
		},


    " .wpcf7 select.wpcf7-form-control.wpcf7-select.wpcf7-validates-as-required": {
			'margin-top': generateCSSUnit( labelBottomSpacing, 'px' ),
		},   

    
    //Submit button
		' .wpcf7 input.wpcf7-form-control.wpcf7-submit': {
			"font-family": submitButtonFontFamily,
      "font-size": generateCSSUnit(submitButtonFontSize, "px"),
      "font-weight": submitButtonFontWeight,
      "line-height": submitButtonLineHeight,
      "letter-spacing": generateCSSUnit(submitButtonLetterSpacing, "px"),
      "background-image": backgroundImageGradient,
      "background-color": btnColor + "!important",     
      color: ctaColor + "!important",
      "padding-left": generateCSSUnit(ctaButtonLeftPadding, "px"),
      "padding-right": generateCSSUnit(ctaButtonRightPadding, "px"),
      "padding-top": generateCSSUnit(ctaButtonTopPadding, "px"),
      "padding-bottom": generateCSSUnit(ctaButtonBottomPadding, "px"),
      "margin":"auto",
      "margin-left":generateCSSUnit(ctaButtonmarginleft, "px"),
      "margin-right":generateCSSUnit(ctaButtonmarginright, "px"),
      "border-color": ctaBorderColor,
      "border-top-left-radius": generateCSSUnit(ctaTopRadius, "px"),
      "border-top-right-radius": generateCSSUnit(ctaRightRadius, "px"),
      "border-bottom-right-radius": generateCSSUnit(ctaBottomRadius, "px"),
      "border-bottom-left-radius": generateCSSUnit(ctaLeftRadius, "px"),
      "border-width": generateCSSUnit(ctaBorderWidth, "px"),
      "border-style": ctaBorderStyle,
      "width":generateCSSUnit(submitButtonWidth, "%"),
      "Height":generateCSSUnit(submitButtonHeight, "px"),
      "box-shadow":
        generateCSSUnit(submitButtonBoxShadowHOffset, "px") +
        " " +
        generateCSSUnit(submitButtonBoxShadowVOffset, "px") +
        " " +
        generateCSSUnit(submitButtonBoxShadowBlur, "px") +
        " " +
        generateCSSUnit(submitButtonBoxShadowSpread, "px") +
        " " +
        submitButtonBoxShadowColor +
        " " +
        submitButtonBoxShadowPositionCSS,
      
		},  
     
     
    ' .wpcf7 input.wpcf7-form-control.wpcf7-submit:hover': {
      "background-image": buttonHbackgroundType == 'color' ? 'none' : backgroundHoverImageGradient,
      "background-color": btnHColor + "!important",
      "border-color": ctaHoverBorderColor,
      color: ctaHoverColor + "!important",
      "border-color" : ctaHoverBorderColor,      
		},	

     ' .block-editor-block-list__block wp-block .responsive-contact-form-7-styler-container': {
     }
   };
 
   var mobile_selectors = {
    "": {
      "opacity": hideWidgetMobile ? 0.2 : 1,
    },
    
    " .responsive-form-title-text": {      
      "font-size": generateCSSUnit(formTitleFontSizeMobile, "px"),      
      "text-align": formTitleAlignmentMobile,
    },

    " .responsive-form-desc-text": {
      "font-size": generateCSSUnit(formDescriptionFontSizeMobile, "px"),
      "text-align": formTitleAlignmentMobile,
    },

    " .form-container": {
      "justify-content": formAlignmentMobile,      
     }, 

     " .form": {
      "width":generateCSSUnit(formWidthMobile, "%"),    
      "padding-top": generateCSSUnit(formTopPaddingMobile, "px"),
      "padding-right": generateCSSUnit(formRightPaddingMobile, "px"),
      "padding-bottom": generateCSSUnit(formBottomPaddingMobile, "px"),
      "padding-left": generateCSSUnit(formLeftPaddingMobile, "px"),
      "margin-top": generateCSSUnit(formTopMarginMobile, "px"),
      "margin-right": generateCSSUnit(formRightMarginMobile, "px"),
      "margin-bottom":generateCSSUnit(formBottomMarginMobile, "px"),
      "margin-left": generateCSSUnit(formLeftMarginMobile, "px"),
      
     }, 

     " .wpcf7 input:not([type=submit])": {      
      "padding-top": generateCSSUnit(inputTopPaddingMobile, "px"),
      "padding-bottom": generateCSSUnit(inputBottomPaddingMobile, "px"),
      "padding-left": generateCSSUnit(inputLeftPaddingMobile, "px"),
      "padding-right": generateCSSUnit(inputRightPaddingMobile, "px"),
      "text-indent": generateCSSUnit(textIndentMobile, "px"),
      "font-size": generateCSSUnit(inputFontSizeMobile, "px"),      
      'margin-top': generateCSSUnit( labelBottomSpacingMobile, 'px' ),      
    },

    ' .wpcf7 textarea': {		
      "padding-top": generateCSSUnit(inputTopPaddingMobile, "px"),
      "padding-bottom": generateCSSUnit(inputBottomPaddingMobile, "px"),
      "padding-left": generateCSSUnit(inputLeftPaddingMobile, "px"),
      "padding-right": generateCSSUnit(inputRightPaddingMobile, "px"),
      "width": generateCSSUnit(textareaWidthMobile, "%"),
      "height": generateCSSUnit(textareaHeightMobile, "px"),
      "text-indent": generateCSSUnit(textIndentMobile, "px"),      
      "font-size": generateCSSUnit(inputFontSizeMobile, "px"),      
      'margin-top': generateCSSUnit( labelBottomSpacingMobile, 'px' ),
		},

    ' .wpcf7-form-control': {
      "width": generateCSSUnit(inputWidthMobile, "%"),
      "height": generateCSSUnit(inputHeightMobile, "px" + "!important"),
		},

    ' .wpcf7 form.wpcf7-form:not(input)': {
      "font-size": generateCSSUnit(labelFontSizeMobile, "px"),
      "margin-top": generateCSSUnit( labelBottomSpacingMobile, 'px' ),
		},

    " .wpcf7 .wpcf7-list-item": {
			'margin-top': generateCSSUnit( labelBottomSpacingMobile, 'px' ),
		},
    " .wpcf7 .wpcf7-list-item-label": {
      "font-size": generateCSSUnit(radioCheckboxFontSizeMobile, "px"),      
		},


    " .wpcf7 select.wpcf7-form-control.wpcf7-select.wpcf7-validates-as-required": {
			'margin-top': generateCSSUnit( labelBottomSpacingMobile, 'px' ),
		},   

    
    //Submit button
		' .wpcf7 input.wpcf7-form-control.wpcf7-submit': {			
      "font-size": generateCSSUnit(submitButtonFontSizeMobile, "px"),
      "padding-left": generateCSSUnit(ctaButtonLeftPaddingMobile, "px"),
      "padding-right": generateCSSUnit(ctaButtonRightPaddingMobile, "px"),
      "padding-top": generateCSSUnit(ctaButtonTopPaddingMobile, "px"),
      "padding-bottom": generateCSSUnit(ctaButtonBottomPaddingMobile, "px"),
      "margin":"auto",
      "margin-left":generateCSSUnit(ctaButtonmarginleftMobile, "px"),
      "margin-right":generateCSSUnit(ctaButtonmarginrightMobile, "px"),
      "width":generateCSSUnit(submitButtonWidthMobile, "px"),
      "Height":generateCSSUnit(submitButtonHeightMobile, "px"),     
      "border-top-left-radius": generateCSSUnit(ctaTopRadiusMobile, "px"),
      "border-top-right-radius": generateCSSUnit(ctaRightRadiusMobile, "px"),
      "border-bottom-right-radius": generateCSSUnit(ctaBottomRadiusMobile, "px"),
      "border-bottom-left-radius": generateCSSUnit(ctaLeftRadiusMobile, "px"), 
		},       
     " .wpcf7 .wpcf7-checkbox input[type='checkbox']": {
      "border-top-left-radius": generateCSSUnit(checkboxBorderTopRadiusMobile, "px"),
      "border-top-right-radius": generateCSSUnit(checkboxBorderRightRadiusMobile, "px"),
      "border-bottom-right-radius": generateCSSUnit(checkboxBorderBottomRadiusMobile, "px"),
      "border-bottom-left-radius": generateCSSUnit(checkboxBorderLeftRadiusMobile, "px"),
		},

    " .wpcf7 .wpcf7-radio input[type='radio']": {
      "border-top-left-radius": generateCSSUnit(radioButtonBorderTopRadiusMobile, "px"),
      "border-top-right-radius": generateCSSUnit(radioButtonBorderRightRadiusMobile, "px"),
      "border-bottom-right-radius": generateCSSUnit(radioButtonBorderBottomRadiusMobile, "px"),
      "border-bottom-left-radius": generateCSSUnit(radioButtonBorderLeftRadiusMobile, "px"),
		},

    " .form": {
      "border-top-left-radius": generateCSSUnit(formTopRadiusMobile, "px"),
      "border-top-right-radius": generateCSSUnit(formRightRadiusMobile, "px"),
      "border-bottom-right-radius": generateCSSUnit(formBottomRadiusMobile, "px"),
      "border-bottom-left-radius": generateCSSUnit(formLeftRadiusMobile, "px"),
     },

     " .wpcf7 input[type=text] ,.wpcf7 input[type=email], .wpcf7 .wpcf7-select": {      
      "border-top-left-radius": generateCSSUnit(inputTopRadiusMobile, "px"),
      "border-top-right-radius": generateCSSUnit(inputRightRadiusMobile, "px"),
      "border-bottom-right-radius": generateCSSUnit(inputBottomRadiusMobile, "px"),
      "border-bottom-left-radius": generateCSSUnit(inputLeftRadiusMobile, "px"), 
    },

    ' .wpcf7 textarea': {
      "border-top-left-radius": generateCSSUnit(inputTopRadiusMobile , "px"),
      "border-top-right-radius": generateCSSUnit(inputRightRadiusMobile , "px"),
      "border-bottom-right-radius": generateCSSUnit(inputBottomRadiusMobile , "px"),
      "border-bottom-left-radius": generateCSSUnit(inputLeftRadiusMobile , "px"),
		},
     
   };
 
   var tablet_selectors = {
    "": {
      "opacity": hideWidgetTablet ? 0.2 : 1,
    },

    " .responsive-form-title-text": {      
      "font-size": generateCSSUnit(formTitleFontSizeTablet, "px"),      
      "text-align": formTitleAlignmentTablet,
    },

    " .responsive-form-desc-text": {
      "font-size": generateCSSUnit(formDescriptionFontSizeTablet, "px"),
      "text-align": formTitleAlignmentTablet,
    },

    " .form-container": {
      "justify-content": formAlignmentTablet,      
     }, 

     " .form": {
      "width":generateCSSUnit(formWidthTablet, "%"),  
      "padding-top": generateCSSUnit(formTopPaddingTablet, "px"),
      "padding-right": generateCSSUnit(formRightPaddingTablet, "px"),
      "padding-bottom": generateCSSUnit(formBottomPaddingTablet, "px"),
      "padding-left": generateCSSUnit(formLeftPaddingTablet, "px"),
      "margin-top": generateCSSUnit(formTopMarginTablet, "px"),
      "margin-right": generateCSSUnit(formRightMarginTablet, "px"),
      "margin-bottom":generateCSSUnit(formBottomMarginTablet, "px"),
      "margin-left": generateCSSUnit(formLeftMarginTablet, "px"),
      
     }, 

     " .wpcf7 input:not([type=submit])": {      
      "padding-top": generateCSSUnit(inputTopPaddingTablet, "px"),
      "padding-bottom": generateCSSUnit(inputBottomPaddingTablet, "px"),
      "padding-left": generateCSSUnit(inputLeftPaddingTablet, "px"),
      "padding-right": generateCSSUnit(inputRightPaddingTablet, "px"),
      "text-indent": generateCSSUnit(textIndentTablet, "px"),
      "font-size": generateCSSUnit(inputFontSizeTablet, "px"),      
      'margin-top': generateCSSUnit( labelBottomSpacingTablet, 'px' ),      
    },

    ' .wpcf7 textarea': {		
      "padding-top": generateCSSUnit(inputTopPaddingTablet, "px"),
      "padding-bottom": generateCSSUnit(inputBottomPaddingTablet, "px"),
      "padding-left": generateCSSUnit(inputLeftPaddingTablet, "px"),
      "padding-right": generateCSSUnit(inputRightPaddingTablet, "px"),
      "width": generateCSSUnit(textareaWidthTablet, "%"),
      "height": generateCSSUnit(textareaHeightTablet, "px"),
      "text-indent": generateCSSUnit(textIndentTablet, "px"),      
      "font-size": generateCSSUnit(inputFontSizeTablet, "px"),      
      'margin-top': generateCSSUnit( labelBottomSpacingTablet, 'px' ),
		},

    ' .wpcf7-form-control': {
      "width": generateCSSUnit(inputWidthTablet, "%"),
      "height": generateCSSUnit(inputHeightTablet, "px" + "!important"),
		},

    ' .wpcf7 form.wpcf7-form:not(input)': {
      "font-size": generateCSSUnit(labelFontSizeTablet, "px"),
      "margin-top": generateCSSUnit( labelBottomSpacingTablet, 'px' ),
		},

    " .wpcf7 .wpcf7-list-item": {
			'margin-top': generateCSSUnit( labelBottomSpacingTablet, 'px' ),
		},
    " .wpcf7 .wpcf7-list-item-label": {
      "font-size": generateCSSUnit(radioCheckboxFontSizeTablet, "px"),      
		},


    " .wpcf7 select.wpcf7-form-control.wpcf7-select.wpcf7-validates-as-required": {
			'margin-top': generateCSSUnit( labelBottomSpacingTablet, 'px' ),
		},   

    
    //Submit button
		' .wpcf7 input.wpcf7-form-control.wpcf7-submit': {			
      "font-size": generateCSSUnit(submitButtonFontSizeTablet, "px"),
      "padding-left": generateCSSUnit(ctaButtonLeftPaddingTablet, "px"),
      "padding-right": generateCSSUnit(ctaButtonRightPaddingTablet, "px"),
      "padding-top": generateCSSUnit(ctaButtonTopPaddingTablet, "px"),
      "padding-bottom": generateCSSUnit(ctaButtonBottomPaddingTablet, "px"),
      "margin":"auto",
      "margin-left":generateCSSUnit(ctaButtonmarginleftTablet, "px"),
      "margin-right":generateCSSUnit(ctaButtonmarginrightTablet, "px"),
      "width":generateCSSUnit(submitButtonWidthTablet, "px"),
      "Height":generateCSSUnit(submitButtonHeightTablet, "px"),  
      "border-top-left-radius": generateCSSUnit(ctaTopRadiusTablet, "px"),
      "border-top-right-radius": generateCSSUnit(ctaRightRadiusTablet, "px"),
      "border-bottom-right-radius": generateCSSUnit(ctaBottomRadiusTablet, "px"),
      "border-bottom-left-radius": generateCSSUnit(ctaLeftRadiusTablet, "px"),    
		}, 
    " .wpcf7 .wpcf7-checkbox input[type='checkbox']": {
      "border-top-left-radius": generateCSSUnit(checkboxBorderTopRadiusTablet, "px"),
      "border-top-right-radius": generateCSSUnit(checkboxBorderRightRadiusTablet, "px"),
      "border-bottom-right-radius": generateCSSUnit(checkboxBorderBottomRadiusTablet, "px"),
      "border-bottom-left-radius": generateCSSUnit(checkboxBorderLeftRadiusTablet, "px"),
		},
    " .wpcf7 .wpcf7-radio input[type='radio']": {
      "border-top-left-radius": generateCSSUnit(radioButtonBorderTopRadiusTablet, "px"),
      "border-top-right-radius": generateCSSUnit(radioButtonBorderRightRadiusTablet, "px"),
      "border-bottom-right-radius": generateCSSUnit(radioButtonBorderBottomRadiusTablet, "px"),
      "border-bottom-left-radius": generateCSSUnit(radioButtonBorderLeftRadiusTablet, "px"),
		},

    " .form": {
      "border-top-left-radius": generateCSSUnit(formTopRadiusTablet, "px"),
      "border-top-right-radius": generateCSSUnit(formRightRadiusTablet, "px"),
      "border-bottom-right-radius": generateCSSUnit(formBottomRadiusTablet, "px"),
      "border-bottom-left-radius": generateCSSUnit(formLeftRadiusTablet, "px"),
     },

     " .wpcf7 input[type=text] ,.wpcf7 input[type=email], .wpcf7 .wpcf7-select": {      
      "border-top-left-radius": generateCSSUnit(inputTopRadiusTablet, "px"),
      "border-top-right-radius": generateCSSUnit(inputRightRadiusTablet, "px"),
      "border-bottom-right-radius": generateCSSUnit(inputBottomRadiusTablet, "px"),
      "border-bottom-left-radius": generateCSSUnit(inputLeftRadiusTablet, "px"), 
    },
    ' .wpcf7 textarea': {
      "border-top-left-radius": generateCSSUnit(inputTopRadiusTablet , "px"),
      "border-top-right-radius": generateCSSUnit(inputRightRadiusTablet , "px"),
      "border-bottom-right-radius": generateCSSUnit(inputBottomRadiusTablet , "px"),
      "border-bottom-left-radius": generateCSSUnit(inputLeftRadiusTablet , "px"),
		},
   };
 
   var styling_css = "";
   var id = `.responsive-block-editor-addons-block-contact-form-7-styler.block-${block_id}`;
 
   styling_css = generateCSS(selectors, id);
   styling_css += generateCSS(tablet_selectors, id, true, "tablet");
   styling_css += generateCSS(mobile_selectors, id, true, "mobile");
 
   return styling_css;
 }
 
 export default EditorStyles;
 