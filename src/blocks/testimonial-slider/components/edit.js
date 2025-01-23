/**
 * BLOCK: Testimonial
 */

import classnames from "classnames";
import PositionClasses from "../classes";
import EditorStyles from "../editor-styles";
import TestimonialImage from "./Image";
import times from "lodash/times";
import Slider from "react-slick";
import AuthorName from "./AuthorName";
import Company from "./Company";
import Description from "./Description";
import Style from "style-it";
import fontOptions from "../../../utils/googlefonts";
import { loadGoogleFont } from "../../../utils/font";
import InspectorTab from "../../../components/InspectorTab";
import InspectorTabs from "../../../components/InspectorTabs";
import BlockBorderHelperControl from "../../../settings-components/BlockBorderSettings";
import ImageBackgroundControl from "../../../settings-components/BlockBackgroundSettings/ImageBackgroundSettings";
import ColorBackgroundControl from "../../../settings-components/BlockBackgroundSettings/ColorBackgroundSettings";
import ResponsiveSpacingControl from "../../../settings-components/ResponsiveSpacingSettings";
import TypographyHelperControl from "../../../settings-components/TypographySettings";
import ResponsiveBlockEditorAddonsIcons from "../../../block-icons";
import ResponsiveNewPaddingControl from "../../../settings-components/ResponsiveNewSpacingSettings/ResponsiveNewPaddingControl/index";
import ResponsiveNewMarginControl from "../../../settings-components/ResponsiveNewSpacingSettings/ResponsiveNewMarginControl/index";
import RbeaRangeControl from "../../../utils/components/rbea-range-control";
import RbeaColorControl from "../../../utils/components/rbea-color-control";
import RbeaTabRadioControl from "../../../utils/components/rbea-tab-radio-control";
import RbeaBackgroundTypeControl from "../../../utils/components/rbea-background-type-control";
import RbeaBorderRadiusControl from "../../../settings-components/RbeaBorderRadiusControl";
import RbeaBlockBorderHelperControl from "../../../settings-components/RbeaBlockBorderSettings";
import RbeaMediaUploadControl from "../../../utils/components/rbea-media-upload-control";
import RbeaAngleRangeControl from "../../../utils/components/rbea-angle-range-control";
import stackOnIcons from "../../../utils/components/rbea-tab-radio-control/rbea-stack-on-icons";

const { __ } = wp.i18n;

const {
  AlignmentToolbar,
  BlockControls,
  ColorPalette,
  InspectorControls,
  PanelColorSettings,
  MediaUpload,
  RichText,
} = wp.blockEditor;

const {
  PanelBody,
  SelectControl,
  RangeControl,
  ToggleControl,
  BaseControl,
  Button,
  Dashicon,
  TabPanel,
  RadioControl,
} = wp.components;

const { Component, Fragment } = wp.element;

class edit extends Component {
  constructor() {
    super(...arguments);
    this.onSelectTestImage = this.onSelectTestImage.bind(this);
    this.onRemoveTestImage = this.onRemoveTestImage.bind(this);
    this.getImageName = this.getImageName.bind(this);
    this.togglePauseOnHover = this.togglePauseOnHover.bind(this);
    this.toggleInfiniteLoop = this.toggleInfiniteLoop.bind(this);
    this.toggleAutoplay = this.toggleAutoplay.bind(this);
    this.onRemoveImage = this.onRemoveImage.bind(this);
    this.onSelectImage = this.onSelectImage.bind(this);
  }

  /*
   * Event to set Image as while adding.
   */
  onSelectTestImage(media, index) {
    const { test_block } = this.props.attributes;
    const { setAttributes } = this.props;

    let imag_url = null;
    if (!media || !media.url) {
      imag_url = null;
    } else {
      imag_url = media;
    }

    if (!media.type || "image" !== media.type) {
      imag_url = null;
    }

    let copyArray = test_block.map(e => {return {...e}})

    const newItems = copyArray.map((item, thisIndex) => {
      if (index === thisIndex) {
        item["image"] = imag_url;
      }
      return item;
    });

    setAttributes({
      test_block: newItems,
    });
  }

  /*
   * Event to set Image as null while removing.
   */
  onRemoveTestImage(index) {
    const { test_block } = this.props.attributes;
    const { setAttributes } = this.props;

    let copyArray = test_block.map(e => {return {...e}})

    const newItems = copyArray.map((item, thisIndex) => {
      if (index === thisIndex) {
        item["image"] = null;
      }
      return item;
    });

    setAttributes({
      test_block: newItems,
    });
  }

  /*
   * Event to set Image selectot label.
   */
  getImageName(image) {
    const { test_block } = this.props.attributes;

    let image_name = __("Select Image", "responsive-block-editor-addons");
    if (image) {
      if (image.url == null || image.url == "") {
        image_name = __("Select Image", "responsive-block-editor-addons");
      } else {
        image_name = __("Replace Image", "responsive-block-editor-addons");
      }
    }
    return image_name;
  }

  togglePauseOnHover() {
    const { pauseOnHover } = this.props.attributes;
    const { setAttributes } = this.props;

    setAttributes({ pauseOnHover: !pauseOnHover });
  }

  toggleInfiniteLoop() {
    const { infiniteLoop } = this.props.attributes;
    const { setAttributes } = this.props;

    setAttributes({ infiniteLoop: !infiniteLoop });
  }

  toggleAutoplay() {
    const { autoplay } = this.props.attributes;
    const { setAttributes } = this.props;

    setAttributes({ autoplay: !autoplay });
  }

  /*
   * Event to set Image as null while removing.
   */
  onRemoveImage() {
    const { setAttributes } = this.props;

    setAttributes({ backgroundImage: null });
  }

  /*
   * Event to set Image as while adding.
   */
  onSelectImage(media) {
    const { setAttributes } = this.props;

    if (!media || !media.url) {
      setAttributes({ backgroundImage: null });
      return;
    }

    if (!media.type || "image" !== media.type) {
      setAttributes({ backgroundImage: null });
      return;
    }

    setAttributes({ backgroundImage: media });
  }

  
  render() {
    const { className, setAttributes, attributes } = this.props;

    // Setup the attributes.
    const {
      z_index,
      z_indexMobile,
      z_indexTablet,
      test_item_count,
      test_block,
      headingAlign,
      headingAlignMobile,
      headingAlignTablet,
      companyColor,
      descColor,
      authorColor,

      nameFontSizeType,
      nameFontSize,
      nameFontSizeTablet,
      nameFontSizeMobile,
      nameFontFamily,
      nameFontWeight,
      nameFontSubset,
      nameLineHeightType,
      nameLineHeight,
      nameLineHeightTablet,
      nameLineHeightMobile,
      nameLoadGoogleFonts,

      companyFontSizeType,
      companyFontSize,
      companyFontSizeTablet,
      companyFontSizeMobile,
      companyFontFamily,
      companyFontWeight,
      companyFontSubset,
      companyLineHeightType,
      companyLineHeight,
      companyLineHeightTablet,
      companyLineHeightMobile,
      companyLoadGoogleFonts,

      descFontSizeType,
      descFontSize,
      descFontSizeTablet,
      descFontSizeMobile,
      descFontFamily,
      descFontWeight,
      descFontSubset,
      descLineHeightType,
      descLineHeight,
      descLineHeightTablet,
      descLineHeightMobile,
      descLoadGoogleFonts,

      descSpace,
      descSpaceMobile,
      descSpaceTablet,
      iconimgStyle,
      imagePosition,
      imageAlignment,
      nameSpace,
      imgHrPadding,
      imgVrPadding,
      nameSpaceMobile,
      imgHrPaddingMobile,
      imgVrPaddingMobile,
      nameSpaceTablet,
      imgHrPaddingTablet,
      imgVrPaddingTablet,
      imageSize,
      imageWidth,
      columns,
      tcolumns,
      mcolumns,
      pauseOnHover,
      infiniteLoop,
      transitionSpeed,
      arrowDots,
      arrowSize,
      arrowBorderWidth,
      arrowBorderRadius, 
      arrowTopRadius,
      arrowRightRadius,
      arrowBottomRadius,
      arrowLeftRadius,
      arrowTopRadiusTablet,
      arrowRightRadiusTablet,
      arrowBottomRadiusTablet,
      arrowLeftRadiusTablet,
      arrowTopRadiusMobile,
      arrowRightRadiusMobile,
      arrowBottomRadiusMobile,
      arrowLeftRadiusMobile,
      arrowIsRadiusControlConnected,
      arrowIsRadiusValueUpdated,
      arrowBorderColor,
      arrowBorderStyle,
      autoplay,
      autoplaySpeed,
      arrowColor,
      rowGap,
      rowGapMobile,
      rowGapTablet,
      columnGap,
      columnGapMobile,
      columnGapTablet,
      contentPadding,
      contentPaddingMobile,
      contentPaddingTablet,
      backgroundType,
      backgroundColor,
      backgroundImage,
      backgroundImagePosition,
      backgroundImageSize,
      backgroundImageRepeat,
      backgroundImageColor,
      backgroundAttachment,
      overlayType,
      gradientOverlayColor1,
      gradientOverlayLocation1,
      gradientOverlayColor2,
      gradientOverlayLocation2,
      gradientOverlayType,
      gradientOverlayAngle,
      gradientOverlayPosition,
      opacity,
      backgroundOpacity,
        blockBorderStyle,
        blockBorderWidth,
        blockBorderRadius,
        blockTopRadius,
        blockRightRadius,
        blockBottomRadius,
        blockLeftRadius,
        blockTopRadiusTablet,
        blockRightRadiusTablet,
        blockBottomRadiusTablet,
        blockLeftRadiusTablet,
        blockTopRadiusMobile,
        blockRightRadiusMobile,
        blockBottomRadiusMobile,
        blockLeftRadiusMobile,
        blockIsRadiusControlConnected,
        blockIsRadiusValueUpdated,
        blockBorderColor,
      stack,
      skin,
      bubbleColor,
      bubblePadding,
      bubbleBorderRadius,
      bubbleTopRadius,
      bubbleRightRadius,
      bubbleBottomRadius,
      bubbleLeftRadius,
      bubbleTopRadiusTablet,
      bubbleRightRadiusTablet,
      bubbleBottomRadiusTablet,
      bubbleLeftRadiusTablet,
      bubbleTopRadiusMobile,
      bubbleRightRadiusMobile,
      bubbleBottomRadiusMobile,
      bubbleLeftRadiusMobile,
      bubbleIsRadiusControlConnected,
      bubbleIsRadiusValueUpdated,
      slicksettings,
      blockPadding,
      blockPaddingTablet,
      blockPaddingMobile,
      hideWidget,
      hideWidgetTablet,
      hideWidgetMobile,
      blockTopMargin,
      blockBottomMargin,
      blockLeftMargin,
      blockRightMargin,
      blockTopMarginTablet,
      blockBottomMarginTablet,
      blockLeftMarginTablet,
      blockRightMarginTablet,
      blockTopMarginMobile,
      blockBottomMarginMobile,
      blockLeftMarginMobile,
      blockRightMarginMobile,
      blockTopPadding,
      blockTopPaddingMobile,
      blockTopPaddingTablet,
      blockBottomPadding,
      blockBottomPaddingMobile,
      blockBottomPaddingTablet,
      blockLeftPadding,
      blockLeftPaddingMobile,
      blockLeftPaddingTablet,
      blockRightPadding,
      blockRightPaddingMobile,
      blockRightPaddingTablet,
      blockIsMarginControlConnected,
      blockIsPaddingControlConnected,
      newSpacingValuesUpdated,
      blockIsTypographyColorValueUpdated,
      descTypographyColor,
      nameTypographyColor,
      companyTypographyColor,
      descBottomSpacing,
      descBottomSpacingMobile,
      descBottomSpacingTablet,
      nameBottomSpacing,
      nameBottomSpacingMobile,
      nameBottomSpacingTablet,
      backgroundPosition,
      backgroundPositionMobile,
      backgroundPositionTablet,
      backgroundRepeat,
      backgroundSize,
      backgroundSizeTablet,
      backgroundSizeMobile,
      imagePositionTab,
      imageSizeTab,
      backgroundImageValueUpdated,
      backgroundColor1,
        
    } = attributes;

    const blockMarginResetValues = {
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
		const blockPaddingResetValues = {
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

    // To populate new control values with existing padding margin control values for backward compatibility.
    if (!newSpacingValuesUpdated) {
      this.props.setAttributes(
        {
          blockTopMargin:          blockPadding !== undefined ? blockPadding : blockTopMargin,
          blockBottomMargin:       blockPadding !== undefined ? blockPadding : blockBottomMargin,
          blockLeftMargin:         blockPadding !== undefined ? blockPadding : blockLeftMargin,
          blockRightMargin:        blockPadding !== undefined ? blockPadding : blockRightMargin,
          blockTopMarginTablet:    blockPaddingTablet !== undefined ? blockPaddingTablet : blockTopMarginTablet,
          blockBottomMarginTablet: blockPaddingTablet !== undefined ? blockPaddingTablet : blockBottomMarginTablet,
          blockRightMarginTablet:  blockPaddingTablet !== undefined ? blockPaddingTablet : blockRightMarginTablet,
          blockLeftMarginTablet:   blockPaddingTablet !== undefined ? blockPaddingTablet : blockLeftMarginTablet,
          blockTopMarginMobile:    blockPaddingMobile !== undefined ? blockPaddingMobile : blockTopMarginMobile,
          blockBottomMarginMobile: blockPaddingMobile !== undefined ? blockPaddingMobile : blockBottomMarginMobile,
          blockLeftMarginMobile:   blockPaddingMobile !== undefined ? blockPaddingMobile : blockLeftMarginMobile,
          blockRightMarginMobile:  blockPaddingMobile !== undefined ? blockPaddingMobile : blockRightMarginMobile,
        }
      )
    }
    this.props.setAttributes({newSpacingValuesUpdated: true});

    // backward compatibility for border radius control
  
    if ( ! bubbleIsRadiusValueUpdated) {
      this.props.setAttributes(
        {
          bubbleTopRadius:          bubbleBorderRadius !== undefined ? bubbleBorderRadius : bubbleTopRadius,
          bubbleBottomRadius:       bubbleBorderRadius !== undefined ? bubbleBorderRadius : bubbleBottomRadius,
          bubbleLeftRadius:         bubbleBorderRadius !== undefined ? bubbleBorderRadius : bubbleLeftRadius,
          bubbleRightRadius:        bubbleBorderRadius !== undefined ? bubbleBorderRadius : bubbleRightRadius,
          bubbleTopRadiusTablet:    bubbleBorderRadius !== undefined ? bubbleBorderRadius : bubbleTopRadiusTablet,
          bubbleBottomRadiusTablet: bubbleBorderRadius !== undefined ? bubbleBorderRadius : bubbleBottomRadiusTablet,
          bubbleRightRadiusTablet:  bubbleBorderRadius !== undefined ? bubbleBorderRadius : bubbleRightRadiusTablet,
          bubbleLeftRadiusTablet:   bubbleBorderRadius !== undefined ? bubbleBorderRadius : bubbleLeftRadiusTablet,
          bubbleTopRadiusMobile:    bubbleBorderRadius !== undefined ? bubbleBorderRadius : bubbleTopRadiusMobile,
          bubbleBottomRadiusMobile: bubbleBorderRadius !== undefined ? bubbleBorderRadius : bubbleBottomRadiusMobile,
          bubbleLeftRadiusMobile:   bubbleBorderRadius !== undefined ? bubbleBorderRadius : bubbleLeftRadiusMobile,
          bubbleRightRadiusMobile:  bubbleBorderRadius !== undefined ? bubbleBorderRadius : bubbleRightRadiusMobile,
        }
      )
      this.props.setAttributes({bubbleIsRadiusValueUpdated: true});
    }

    const fontWeightOptions = [
      {
        value: "",
        label: __("Default", "responsive-block-editor-addons"),
      },
      {
        value: 100,
        label: __("100", "responsive-block-editor-addons"),
      },
      {
        value: 200,
        label: __("200", "responsive-block-editor-addons"),
      },
      {
        value: 300,
        label: __("300", "responsive-block-editor-addons"),
      },
      {
        value: 400,
        label: __("400", "responsive-block-editor-addons"),
      },
      {
        value: 500,
        label: __("500", "responsive-block-editor-addons"),
      },
      {
        value: 600,
        label: __("600", "responsive-block-editor-addons"),
      },
      {
        value: 700,
        label: __("700", "responsive-block-editor-addons"),
      },
      {
        value: 800,
        label: __("800", "responsive-block-editor-addons"),
      },
      {
        value: 900,
        label: __("900", "responsive-block-editor-addons"),
      },
    ];

    // backward compatibility for typography color control
    if (!blockIsTypographyColorValueUpdated) {
      this.props.setAttributes(
        {
          descTypographyColor:          descColor !== undefined ? descColor : descTypographyColor,
          nameTypographyColor:         authorColor !== undefined ? authorColor : nameTypographyColor,
          companyTypographyColor:         companyColor !== undefined ? companyColor : companyTypographyColor,
          descBottomSpacing: descSpace !== undefined ? descSpace : descBottomSpacing,
          descBottomSpacingMobile: descSpaceMobile !== undefined ? descSpaceMobile : descBottomSpacingMobile,
          descBottomSpacingTablet: descSpaceTablet !== undefined ? descSpaceTablet : descBottomSpacingTablet,
          nameBottomSpacing: nameSpace !== undefined ? nameSpace : nameBottomSpacing,
          nameBottomSpacingMobile: nameSpaceMobile !== undefined ? nameSpaceMobile : nameBottomSpacingMobile,
          nameBottomSpacingTablet: nameSpaceTablet !== undefined ? nameSpaceTablet : nameBottomSpacingTablet,
        }
      )
      this.props.setAttributes({blockIsTypographyColorValueUpdated: true});
    }


    // Typography settings.
    const TypographySettings = (
      <Fragment>
			<TypographyHelperControl
				title={__("Testimonial Typography", "responsive-block-editor-addons")}
				attrNameTemplate="desc%s"
				values={{
				family: descFontFamily,
				size: descFontSize,
				sizeMobile: descFontSizeMobile,
				sizeTablet: descFontSizeTablet,
				weight: descFontWeight,
				height: descLineHeight,
        color: descTypographyColor,
        bottomSpacing: descBottomSpacing,
        bottomSpacingMoible: descBottomSpacingMobile,
        bottomSpacingTablet: descBottomSpacingTablet,

				}}
				showLetterSpacing={false}
				showTextTransform={false}
        showColorControl={true}
        showTextBottomSpacing={true}
				setAttributes={setAttributes}
				{...this.props}
			/>
			<TypographyHelperControl
				title={__("Name Typography", "responsive-block-editor-addons")}
				attrNameTemplate="name%s"
				values={{
				family: nameFontFamily,
				size: nameFontSize,
				sizeMobile: nameFontSizeMobile,
				sizeTablet: nameFontSizeTablet,
				weight: nameFontWeight,
				height: nameLineHeight,
        color: nameTypographyColor,
        bottomSpacing: nameBottomSpacing,
        bottomSpacingMoible: nameBottomSpacingMobile,
        bottomSpacingTablet: nameBottomSpacingTablet,
				}}
				showLetterSpacing={false}
				showTextTransform={false}
        showColorControl={true}
        showTextBottomSpacing={true}
				setAttributes={setAttributes}
				{...this.props}
			/>
			<TypographyHelperControl
				title={__("Company Typography", "responsive-block-editor-addons")}
				attrNameTemplate="company%s"
				values={{
				family: companyFontFamily,
				size: companyFontSize,
				sizeMobile: companyFontSizeMobile,
				sizeTablet: companyFontSizeTablet,
				weight: companyFontWeight,
				height: companyLineHeight,
        color: companyTypographyColor,
				}}
				showLetterSpacing={false}
        showColorControl={true}
				showTextTransform={false}
        showTextBottomSpacing={true}
				setAttributes={setAttributes}
				{...this.props}
			/>
        <PanelBody
          title={__("Color Settings", "responsive-block-editor-addons")}
          initialOpen={false}
        >
           {/* <RbeaColorControl
					  	label = {__("Testimonial Color", "responsive-block-editor-addons")}
					  	colorValue={descColor}
					  	onChange={(colorValue) =>
					  		setAttributes({ descColor: colorValue })
					  	}
					  	resetColor={() => setAttributes({ descColor: "" })}
					  />
           <RbeaColorControl
					  	label = {__("Name Color", "responsive-block-editor-addons")}
					  	colorValue={authorColor}
					  	onChange={(colorValue) =>
					  		setAttributes({ authorColor: colorValue })
					  	}
					  	resetColor={() => setAttributes({ authorColor: "" })}
					  />
           <RbeaColorControl
					  	label = {__("Company Color", "responsive-block-editor-addons")}
					  	colorValue={companyColor}
					  	onChange={(colorValue) =>
					  		setAttributes({ companyColor: colorValue })
					  	}
					  	resetColor={() => setAttributes({ companyColor: "" })}
					  /> */}
           <RbeaColorControl
					  	label = {__("Arrow & Dots Color", "responsive-block-editor-addons")}
					  	colorValue={arrowColor}
					  	onChange={(colorValue) =>
					  		setAttributes({ arrowColor: colorValue })
					  	}
					  	resetColor={() => setAttributes({ arrowColor: "" })}
					  />
        </PanelBody>
      </Fragment>
    );

    // Margin Settings.
    const marginSettings = (
      <PanelBody title={__("Spacing", "responsive-block-editor-addons")} initialOpen={false}>
        <ResponsiveNewPaddingControl
          attrNameTemplate="block%s"
          resetValues={blockPaddingResetValues}
          {...this.props}
        />
        <ResponsiveNewMarginControl
          attrNameTemplate="block%s"
          resetValues={blockMarginResetValues}
          {...this.props}
        />
        <ResponsiveSpacingControl
          title={__("Content and Dots Gap", "responsive-block-editor-addons")}
          attrNameTemplate="rowGap%s"
          values={{
            desktop: rowGap,
            tablet: rowGapTablet,
            mobile: rowGapMobile,
          }}
          setAttributes={setAttributes}
          {...this.props}
        />
        <ResponsiveSpacingControl
          title={"Row Gap"}
          attrNameTemplate="columnGap%s"
          values={{
            desktop: columnGap,
            tablet: columnGapTablet,
            mobile: columnGapMobile,
          }}
          setAttributes={setAttributes}
          {...this.props}
        />
        <ResponsiveSpacingControl
          title={"Content Padding"}
          attrNameTemplate="contentPadding%s"
          values={{
            desktop: contentPadding,
            tablet: contentPaddingTablet,
            mobile: contentPaddingMobile,
          }}
          setAttributes={setAttributes}
          {...this.props}
        />
        {/* <ResponsiveSpacingControl
          title={"Testimonial Bottom Margin"}
          attrNameTemplate="descSpace%s"
          values={{
            desktop: descSpace,
            tablet: descSpaceTablet,
            mobile: descSpaceMobile,
          }}
          setAttributes={setAttributes}
          {...this.props}
        /> */}
        {/* <ResponsiveSpacingControl
          title={"Name Bottom Margin"}
          attrNameTemplate="nameSpace%s"
          values={{
            desktop: nameSpace,
            tablet: nameSpaceTablet,
            mobile: nameSpaceMobile,
          }}
          setAttributes={setAttributes}
          {...this.props}
        /> */}
        <ResponsiveSpacingControl
          title={"Image Horizontal Padding"}
          attrNameTemplate="imgHrPadding%s"
          values={{
            desktop: imgHrPadding,
            tablet: imgHrPaddingTablet,
            mobile: imgHrPaddingMobile,
          }}
          setAttributes={setAttributes}
          {...this.props}
        />
        <ResponsiveSpacingControl
          title={"Image Vertical Padding"}
          attrNameTemplate="imgVrPadding%s"
          values={{
            desktop: imgVrPadding,
            tablet: imgVrPaddingTablet,
            mobile: imgVrPaddingMobile,
          }}
          setAttributes={setAttributes}
          {...this.props}
        />
      </PanelBody>
    );

    const imagePositionOptions = [
      { value: "top left", label: <div className = "rbea-background-image-positon-control-option">{__("Top Left", "responsive-block-editor-addons")}</div> },
      { value: "top center", label: <div className = "rbea-background-image-positon-control-option">{__("Top Center", "responsive-block-editor-addons")}</div> },
      { value: "top right", label: <div className = "rbea-background-image-positon-control-option">{__("Top Right", "responsive-block-editor-addons")}</div> },
      { value: "center left", label: <div className = "rbea-background-image-positon-control-option">{__("Center Left", "responsive-block-editor-addons")}</div> },
      { value: "center center", label: <div className = "rbea-background-image-positon-control-option">{__("Center Center", "responsive-block-editor-addons")}</div> },
      { value: "center right", label: <div className = "rbea-background-image-positon-control-option">{__("Center Right", "responsive-block-editor-addons")}</div> },
      { value: "bottom left", label: <div className = "rbea-background-image-positon-control-option">{__("Bottom Left", "responsive-block-editor-addons")}</div> },
      { value: "bottom center", label: <div className = "rbea-background-image-positon-control-option">{__("Bottom Center", "responsive-block-editor-addons")}</div> },
      { value: "bottom right", label: <div className = "rbea-background-image-positon-control-option">{__("Bottom Right", "responsive-block-editor-addons")}</div> },
    ];

    // Background image URL
    let background_image_url = backgroundImage || '';

    const background_settings = (
      <Fragment>
        <PanelBody title={__("Background", "responsive-block-editor-addons")} initialOpen={false}>
          <RbeaBackgroundTypeControl
            label={__("Background Type", "responsive-block-editor-addons")}
            value={backgroundType}
            onChange={(value) => setAttributes({ backgroundType: value })}
            options={[
              { value: "color", label: __("Color", "responsive-block-editor-addons") },
              { value: "image", label: __("Image", "responsive-block-editor-addons") },
            ]}
          />
          {"color" == backgroundType && (
            <Fragment>
              <ColorBackgroundControl
                {...this.props}
              />
            </Fragment>
          )}
          {"image" == backgroundType && (
              <Fragment>
                  <RbeaMediaUploadControl
                    label={__('Image', 'responsive-block-editor-addons')}
                    value={{
                        url: backgroundImage || '',
                    }}
                    onChange={(newValue) => {
                        setAttributes({
                            backgroundImage: newValue.url,
                        });
                    }}
                    mediaType={'image'}
                  />
                {backgroundImage && (
                  <Fragment>
                    <div className = "rbea-tab-selector-label-wrapper">
                    <label className  = "rbea-background-image-positon-control-label">{__("Image Position", "responsive-block-editor-addons")}</label>
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
                        if ("mobile" === tab.name) {
                          setAttributes({ imagePositionTab: "mobile" });
                        } else if ("tablet" === tab.name) {
                          setAttributes({ imagePositionTab: "tablet" });
                        } else {
                          setAttributes({ imagePositionTab: "desktop" });
                        }
                      }}
                    </TabPanel>
                    </div>
                      <Fragment>
                        <div className = "rbea-background-image-positon-control"
                        style={{
                          backgroundImage: `url(${background_image_url})`,
                          backgroundSize: 'cover',
                          backgroundPosition:  'center center',
                        }}>
                        { imagePositionTab === "desktop" && 
                            <RadioControl 
                              className = "rbea-background-image-positon-control-options"
                              selected={backgroundPosition}
                              options={imagePositionOptions}
                              onChange={(value) =>
                                setAttributes({ backgroundPosition: value })
                              }
                            />
                        }
                        {imagePositionTab === "tablet" &&
                           <RadioControl 
                              className = "rbea-background-image-positon-control-options"
                              selected={backgroundPositionTablet}
                              options={imagePositionOptions}
                              onChange={(value) =>
                                setAttributes({ backgroundPositionTablet: value })
                              }
                          />
                        }
                        {imagePositionTab === "mobile" && 
                          <RadioControl 
                              className = "rbea-background-image-positon-control-options"
                              selected={backgroundPositionMobile}
                              options={imagePositionOptions}
                              onChange={(value) =>
                                setAttributes({ backgroundPositionMobile: value })
                              }
                          />
                        }
                        </div>
                      </Fragment>
                    <RbeaTabRadioControl
                      label={__("Attachment", "responsive-block-editor-addons")}
                      value={backgroundAttachment}
                      onChange={(value) =>
                        setAttributes({ backgroundAttachment: value })
                      }
                      options={[
                        { value: "scroll", label: __("Scroll", "responsive-block-editor-addons") },
                        { value: "fixed", label: __("Fixed", "responsive-block-editor-addons") },
                      ]}
                      defaultValue={"fixed"}
                    />
                   <div className = "rbea-tab-selector-label-wrapper">
                   <label>{__("Size", "responsive-block-editor-addons")}</label>
                    <TabPanel
                      className=" responsive-size-type-field-tabs  responsive-size-type-field__common-tabs  responsive-inline-margin rbea-section-size-control-tab-selector"
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
                        if ("mobile" === tab.name) {
                          setAttributes({ imageSizeTab: "mobile" });
                        } else if ("tablet" === tab.name) {
                          setAttributes({ imageSizeTab: "tablet" });
                        } else {
                          setAttributes({ imageSizeTab: "desktop" });
                        }
                      }}
                    </TabPanel>
                    </div>
                    {imageSizeTab === "desktop" && (
                      <>
                      <RbeaTabRadioControl
                        label={__("", "responsive-block-editor-addons")}
                        value={backgroundSize}
                        onChange={(value) =>
                          setAttributes({ backgroundSize: value })
                        }
                        options={[
                          { value: "auto", label: __("Auto", "responsive-block-editor-addons") },
                          { value: "cover", label: __("Cover", "responsive-block-editor-addons") },
                          { value: "contain", label: __("Contain", "responsive-block-editor-addons") },
                        ]}
                        defaultValue={"cover"}
                      />
                    </>
                    )}
                    {imageSizeTab === "tablet" && (
                      <RbeaTabRadioControl
                      label={__("", "responsive-block-editor-addons")}
                      value={backgroundSizeTablet}
                      onChange={(value) =>
                        setAttributes({ backgroundSizeTablet: value })
                      }
                      options={[
                        { value: "auto", label: __("Auto", "responsive-block-editor-addons") },
                        { value: "cover", label: __("Cover", "responsive-block-editor-addons") },
                        { value: "contain", label: __("Contain", "responsive-block-editor-addons") },
                      ]}
                      defaultValue={"cover"}
                      />
                    )}
                    {imageSizeTab === "mobile" && (
                      <RbeaTabRadioControl
                        label={__("", "responsive-block-editor-addons")}
                        value={backgroundSizeMobile}
                        onChange={(value) =>
                          setAttributes({ backgroundSizeMobile: value })
                        }
                        options={[
                          { value: "auto", label: __("Auto", "responsive-block-editor-addons") },
                          { value: "cover", label: __("Cover", "responsive-block-editor-addons") },
                          { value: "contain", label: __("Contain", "responsive-block-editor-addons") },
                        ]}
                        defaultValue={"cover"}
                      />
                    )}
                    <div className = "rbea-repeat-selector-wrapper">
                    <RbeaTabRadioControl
                      label={__("Repeat", "responsive-block-editor-addons")}
                      value={backgroundRepeat}
                      onChange={(value) =>
                        setAttributes({ backgroundRepeat: value })
                      }
                      options={[
                        { value: "no-repeat", label: __("No Repeat", "responsive-block-editor-addons") },
                        { value: "repeat", label: __("Repeat", "responsive-block-editor-addons") },
                        { value: "repeat-x", label: __("Repeat-x", "responsive-block-editor-addons") },
                        { value: "repeat-y", label: __("Repeat-y", "responsive-block-editor-addons") },
                      ]}
                      defaultValue={"no-repeat"}
                    /></div>
                    <RbeaBackgroundTypeControl
                      label={__("Overlay Type", "responsive-block-editor-addons")}
                      value={overlayType}
                      onChange={(value) =>
                        setAttributes({ overlayType: value })
                      }
                      options={[
                        { label: "color", value: "color" },
                        { label: "gradient", value: "gradient" },
                      ]}
                    />
                    {overlayType == "color" && (
                      <Fragment>
                        <RbeaColorControl
                          label = {__("Overlay Color", "responsive-block-editor-addons")}
                          colorValue={backgroundImageColor}
                          onChange={(colorValue) =>
                            setAttributes({
                              backgroundImageColor: colorValue,
                            })
                          }
                          resetColor={() => setAttributes({ backgroundImageColor: "" })}
                        />
                      </Fragment>
                    )}
                    {"gradient" == overlayType && (
                      <Fragment>
                        <RbeaColorControl
                          label = {"Color 1"}
                          colorValue={gradientOverlayColor1}
                          onChange={(colorValue) =>
                            setAttributes({
                              gradientOverlayColor1: colorValue,
                            })
                          }
                          resetColor={() => setAttributes({ gradientOverlayColor1: "" })}
                        />
                        <RbeaColorControl
                          label = {"Color 2"}
                          colorValue={gradientOverlayColor2}
                          onChange={(colorValue) =>
                            setAttributes({
                              gradientOverlayColor2: colorValue,
                            })
                          }
                          resetColor={() => setAttributes({ gradientOverlayColor2: "" })}
                        />
                        <RbeaTabRadioControl
                          label={__("Type", "responsive-block-editor-addons")}
                          value={gradientOverlayType}
                          onChange={(value) =>
                            setAttributes({ gradientOverlayType: value })
                          }
                          options={[
                            { value: "linear", label: __("Linear", "responsive-block-editor-addons") },
                            { value: "radial", label: __("Radial", "responsive-block-editor-addons") },
                          ]}
                          defaultValue={"linear"}
                        />
                        <RbeaRangeControl
                          label={__("Color Location 1", "responsive-block-editor-addons")}
                          value={gradientOverlayLocation1}
                          onChange={(value) =>
                            setAttributes({ gradientOverlayLocation1: value })
                          }
                          min={0}
                          max={100}
                        />
                        <RbeaRangeControl
                          label={__("Color Location 2", "responsive-block-editor-addons")}
                          value={gradientOverlayLocation2}
                          onChange={(value) =>
                            setAttributes({ gradientOverlayLocation2: value })
                          }
                          min={0}
                          max={100}
                        />
                        {"linear" == gradientOverlayType && (
                          <RbeaAngleRangeControl
                            label={__("Angle", "responsive-block-editor-addons")}
                            value={gradientOverlayAngle}
                            onChange={(value) =>
                              setAttributes({ gradientOverlayAngle: value })
                            }
                            min={0}
                            max={360}
                          />
                        )}
                        {"radial" == gradientOverlayType && (
                          <SelectControl
                            label={__("Type", "responsive-block-editor-addons")}
                            value={gradientOverlayPosition}
                            onChange={(value) =>
                              setAttributes({
                                gradientOverlayPosition: value,
                              })
                            }
                            options={[
                              {
                                value: "center center",
                                label: __("Center Center", "responsive-block-editor-addons"),
                              },
                              {
                                value: "center left",
                                label: __("Center Left", "responsive-block-editor-addons"),
                              },
                              {
                                value: "center right",
                                label: __("Center Right", "responsive-block-editor-addons"),
                              },
                              {
                                value: "top center",
                                label: __("Top Center", "responsive-block-editor-addons"),
                              },
                              { value: "top left", label: __("Top Left", "responsive-block-editor-addons") },
                              { value: "top right", label: __("Top Right", "responsive-block-editor-addons") },
                              {
                                value: "bottom center",
                                label: __("Bottom Center", "responsive-block-editor-addons"),
                              },
                              {
                                value: "bottom left",
                                label: __("Bottom Left", "responsive-block-editor-addons"),
                              },
                              {
                                value: "bottom right",
                                label: __("Bottom Right", "responsive-block-editor-addons"),
                              },
                            ]}
                          />
                        )}
                      </Fragment>
                    )}
                  </Fragment>
                )}
                {backgroundImage && (
                  <RbeaRangeControl
                  label={__("Opacity", "responsive-block-editor-addons")}
                  value={opacity}
                  onChange={(value) =>
                    setAttributes({ opacity: value !== undefined ? value : 20 })
                  }
                  min={0}
                  max={100}
                />
                )}
              </Fragment>
            )}
          {"image" == backgroundType && backgroundImage && (
            <RbeaRangeControl
              label={__("Opacity", "responsive-block-editor-addons")}
              value={backgroundOpacity}
              onChange={(value) => setAttributes({ backgroundOpacity: value })}
              min={0}
              max={100}
              allowReset
              initialPosition={0}
            />
          )}
        </PanelBody>
        <PanelBody title={__("Border", "responsive-block-editor-addons")} initialOpen={false}>
            <RbeaBlockBorderHelperControl
                attrNameTemplate="block%s"
                values={{ radius: blockBorderRadius, style: blockBorderStyle, width: blockBorderWidth, color: blockBorderColor }}
                setAttributes={setAttributes}
                {...this.props}
            />
        </PanelBody>
      </Fragment>
    );

    // Image sizes.
    const imageSizeOptions = [
      { value: "thumbnail", label: __("Thumbnail", "responsive-block-editor-addons") },
      { value: "medium", label: __("Medium", "responsive-block-editor-addons") },
      { value: "full", label: __("Large", "responsive-block-editor-addons") },
    ];

    function NextArrow(props) {
      const { onClick } = props;

      return (
        <button
          type="button"
          data-role="none"
          className="slick-next slick-arrow"
          aria-label="Next"
          tabIndex="0"
          role="button"
          style={{
              borderColor: arrowBorderColor,
              borderTopLeftRadius: arrowTopRadius,
              borderTopRightRadius: arrowRightRadius,
              borderBottomRightRadius: arrowBottomRadius,
              borderBottomLeftRadius: arrowLeftRadius,
              borderWidth: arrowBorderWidth,
              borderStyle: arrowBorderStyle,
          }}
          onClick={ onClick }
        >
        { ResponsiveBlockEditorAddonsIcons.carousel_right }
        </button>
      );
    }

    function PrevArrow(props) {
      const { onClick } = props;

      return (
        <button
          type="button"
          data-role="none"
          className="slick-prev slick-arrow"
          aria-label="Previous"
          tabIndex="0"
          role="button"
          style={{
              borderColor: arrowBorderColor,
              borderTopLeftRadius: arrowTopRadius,
              borderTopRightRadius: arrowRightRadius,
              borderBottomRightRadius: arrowBottomRadius,
              borderBottomLeftRadius: arrowLeftRadius,
              borderWidth: arrowBorderWidth,
              borderStyle: arrowBorderStyle,
          }}
          onClick={ onClick }
        >
        { ResponsiveBlockEditorAddonsIcons.carousel_left }
        </button>

      );
    }

    let dots = ( ("dots" == arrowDots || "arrows_dots" == arrowDots) && ( "none" !== arrowDots ) )? true : false;
    let arrows =
      ( ("arrows" == arrowDots || "arrows_dots" == arrowDots) && ( "none" !== arrowDots ) ) ? true : false;

    const settings = {
      slidesToShow: columns,
      slidesToScroll: 1,
      autoplaySpeed: autoplaySpeed,
      autoplay: autoplay,
      infinite: infiniteLoop,
      pauseOnHover: pauseOnHover,
      speed: transitionSpeed,
      arrows: arrows,
      dots: dots,
      rtl: false,
      draggable: false,
      nextArrow: <NextArrow arrowSize={arrowSize} onClick={() => this.next()}/>,
      prevArrow: <PrevArrow arrowSize={arrowSize} onClick={() => this.previous()}/>,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: tcolumns,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: mcolumns,
            slidesToScroll: 1,
          },
        },
      ],
    };


    let image_enable = false;
    // Set testinomial image panel
    const tmControls = (index) => {
      let image_val = null;
      if (test_block[index] && typeof test_block[index] !== "undefined") {
        image_val = test_block[index]["image"];
      }
      return (
        <PanelBody
          key={index}
          title={__("Image", "responsive-block-editor-addons") + " " + (index + 1) + " " + __("Settings", "responsive-block-editor-addons")}
          initialOpen={true}
          className={"responsive-block-editor-addons-repeater-panel"}
        >
          {/* <BaseControl className="editor-bg-image-control" label={__("", "responsive-block-editor-addons")}> */}
            {/* <MediaUpload
              title={__("Select Image" + (index + 1), "responsive-block-editor-addons")}
              onSelect={(media) => {
                this.onSelectTestImage(media, index);
              }}
              allowedTypes={["image"]}
              value={image_val}
              render={({ open }) => (
                <Button isDefault onClick={open}>
                  {this.getImageName(test_block[index]["image"])}
                </Button>
              )}
            /> */}
            <RbeaMediaUploadControl
              label={__("Select Image" + (index + 1), "responsive-block-editor-addons")}
              value={{
                  url: image_val || '',
              }}
              onChange={(newValue) => {
                  setAttributes({
                      image_val: newValue,
                  });
              }}
              mediaType={'image'}
            />
            {console.log("Image Value: ", image_val)}
            {/* {image_val &&
              test_block[index]["image"].url !== null &&
              test_block[index]["image"].url !== "" && (
                <Button
                  className="responsive-block-editor-addons-rm-btn"
                  key={index}
                  onClick={(value) => {
                    this.onRemoveTestImage(index);
                  }}
                  isLink
                  isDestructive
                >
                  {__("Remove Image", "responsive-block-editor-addons")}
                </Button>
              )} */}
          {/* </BaseControl> */}
        </PanelBody>
      );
    };

    const carousal_settings = (
      <PanelBody title={__("Carousel", "responsive-block-editor-addons")} initialOpen={false}>
        <ToggleControl
          label={__("Pause On Hover", "responsive-block-editor-addons")}
          checked={pauseOnHover}
          onChange={this.togglePauseOnHover}
        />
        <ToggleControl
          label={__("Autoplay", "responsive-block-editor-addons")}
          checked={autoplay}
          onChange={this.toggleAutoplay}
        />
        {autoplay == true && (
          <RbeaRangeControl
            label={__("Autoplay Speed (ms)", "responsive-block-editor-addons")}
            value={autoplaySpeed}
            onChange={(value) => setAttributes({ autoplaySpeed: value })}
            min={100}
            max={10000}
          />
        )}
        <ToggleControl
          label={__("Infinite Loop", "responsive-block-editor-addons")}
          checked={infiniteLoop}
          onChange={this.toggleInfiniteLoop}
        />
        <RbeaRangeControl
          label={__("Transition Speed (ms)", "responsive-block-editor-addons")}
          value={transitionSpeed}
          onChange={(value) => setAttributes({ transitionSpeed: value })}
          min={100}
          max={5000}
        />
        <div className = "rbea-repeat-selector-wrapper">
          <RbeaTabRadioControl
            label={__("Show Arrows & Dots", "responsive-block-editor-addons")}
            value={arrowDots}
            onChange={(value) => setAttributes({ arrowDots: value })}
            options={[
              { value: "arrows", label: __("Only Arrows", "responsive-block-editor-addons") },
              { value: "dots", label: __("Only Dots", "responsive-block-editor-addons") },
              { value: "arrows_dots", label: __("Both Arrows & Dots", "responsive-block-editor-addons") },
              { value: "none", label: __("None", "responsive-block-editor-addons")}
            ]}
          />
        </div>
        {"dots" != arrowDots && (
          <Fragment>
            <RbeaRangeControl
              label={__("Arrow Size", "responsive-block-editor-addons")}
              value={arrowSize}
              onChange={(value) => setAttributes({ arrowSize: value })}
              min={0}
              max={50}
            />
              <PanelBody title={__("Arrow Border", "responsive-block-editor-addons")} initialOpen={false}>
              <RbeaBlockBorderHelperControl
                  attrNameTemplate="arrow%s"
                  values={{ radius: arrowBorderRadius, style: arrowBorderStyle, width: arrowBorderWidth, color: arrowBorderColor }}
                  setAttributes={setAttributes}
                  {...this.props}
              />
              </PanelBody>

          </Fragment>
        )}
      </PanelBody>
    );

    let cnt = 0;
    test_block.map((item, thisIndex) => {
      let image_arr = test_block[thisIndex];
      if (image_arr && typeof image_arr !== "undefined") {
        const image = image_arr["image"];
        if (typeof image !== "undefined" && image !== null && image !== "") {
          cnt++;
        }
      }
    });

    // // backward compatibility for typography color control
    // if (!backgroundImageValueUpdated) {
    //   this.props.setAttributes(
    //     {
    //       backgroundRepeat: backgroundImageRepeat !== undefined ? backgroundImageRepeat : backgroundRepeat,
    //       backgroundPosition: backgroundImagePosition !== undefined ? backgroundImagePosition : backgroundPosition,
    //       backgroundPositionMobile: backgroundImagePosition !== undefined ? backgroundImagePosition : backgroundPositionMobile,
    //       backgroundPositionTablet: backgroundImagePosition !== undefined ? backgroundImagePosition : backgroundPositionTablet,
    //       backgroundSize: backgroundImageSize !== undefined ? backgroundImageSize : backgroundSize,
    //       backgroundSizeMobile: backgroundImageSize !== undefined ? backgroundImageSize : backgroundSizeMobile,
    //       backgroundSizeTablet: backgroundImageSize !== undefined ? backgroundImageSize : backgroundSizeTablet,
    //     }
    //   )
    //   this.props.setAttributes({backgroundImageValueUpdated: true});
    // }

    // Global Controls.
    const inspect_control = (
      <InspectorControls>
        <InspectorTabs>
          <InspectorTab key={"content"}>
            <PanelBody title={__("General", "responsive-block-editor-addons")} initialOpen={true}>
              <TabPanel
                className=" responsive-size-type-field-tabs responsive-size-type-field__common-tabs responsive-inline-margin"
                activeClass="active-tab"
                tabs={[
                  {
                    name: "desktop",
                    title: <Dashicon icon="desktop" />,
                    className:
                      " responsive-desktop-tab responsive-responsive-tabs",
                  },
                  {
                    name: "tablet",
                    title: <Dashicon icon="tablet" />,
                    className:
                      " responsive-tablet-tab responsive-responsive-tabs",
                  },
                  {
                    name: "mobile",
                    title: <Dashicon icon="smartphone" />,
                    className:
                      " responsive-mobile-tab responsive-responsive-tabs",
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
                          <div className="responsive-block-editor-addons-alignment-mobile">
                            <AlignmentToolbar
                              value={headingAlignMobile}
                              onChange={(value) =>
                                setAttributes({
                                  headingAlignMobile: value,
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
                          <div className="responsive-block-editor-addons-alignment-tablet">
                            <AlignmentToolbar
                              value={headingAlignTablet}
                              onChange={(value) =>
                                setAttributes({
                                  headingAlignTablet: value,
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
                              value={headingAlign}
                              onChange={(value) =>
                                setAttributes({
                                  headingAlign: value,
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
              <RbeaRangeControl
                label={__("Number of Testimonials", "responsive-block-editor-addons")}
                value={test_item_count}
                onChange={(newCount) => {
                  let cloneTest_block = [...test_block];
                  if (cloneTest_block.length < newCount) {
                    const incAmount = Math.abs(
                      newCount - cloneTest_block.length
                    );

                    {
                      times(incAmount, (n) => {
                        cloneTest_block.push({
                          description: [
                            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.",
                          ],
                          name: ["John Doe"],
                          company: ["Company" + (cloneTest_block.length + 1)],
                          image: "",
                        });
                      });
                    }
                    setAttributes({ test_block: cloneTest_block });
                  } else {
                    const incAmount = Math.abs(
                      newCount - cloneTest_block.length
                    );
                    let data_new = cloneTest_block;
                    for (var i = 0; i < incAmount; i++) {
                      data_new.pop();
                    }
                    setAttributes({ test_block: data_new });
                  }
                  setAttributes({ test_item_count: newCount });
                }}
                min={0}
                max={50}
                allowReset
              />
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
                        label={__("Columns", "responsive-block-editor-addons")}
                        value={mcolumns}
                        onChange={(value) => setAttributes({ mcolumns: value })}
                        min={1}
                        max={test_item_count}
                      />
                    );
                  } else if ("tablet" === tab.name) {
                    tabout = (
                      <RbeaRangeControl
                        label={__("Columns", "responsive-block-editor-addons")}
                        value={tcolumns}
                        onChange={(value) => setAttributes({ tcolumns: value })}
                        min={1}
                        max={test_item_count}
                      />
                    );
                  } else {
                    tabout = (
                      <RbeaRangeControl
                        label={__("Columns", "responsive-block-editor-addons")}
                        value={columns}
                        onChange={(value) => setAttributes({ columns: value })}
                        min={1}
                        max={test_item_count}
                      />
                    );
                  }

                  return <div>{tabout}</div>;
                }}
              </TabPanel>

              <RbeaTabRadioControl
                label={__("Skin", "responsive-block-editor-addons")}
                value={skin}
                onChange={(value) => setAttributes({ skin: value })}
                options={[
                  { value: "default", label: __("Default", "responsive-block-editor-addons") },
                  { value: "bubble", label: __("Bubble", "responsive-block-editor-addons") },
                ]}
              />
            </PanelBody>
            {skin === "bubble" && (
              <PanelBody title={__("Bubble Settings", "responsive-block-editor-addons")} initialOpen={false}>
                <Fragment>
                  <RbeaColorControl
                    label = {__("Background Color", "responsive-block-editor-addons")}
                    colorValue={bubbleColor}
                    onChange={(colorValue) => setAttributes({ bubbleColor: colorValue })}
                    resetColor={() => setAttributes({ bubbleColor: "" })}
                  />
                </Fragment>
                <RbeaRangeControl
                  label={__("Padding", "responsive-block-editor-addons")}
                  value={bubblePadding}
                  onChange={(value) => setAttributes({ bubblePadding: value })}
                  min={0}
                  max={50}
                  allowReset
                />
                <RbeaBorderRadiusControl
                  attrNameTemplate="bubble%s"
                  {...this.props}
                />
              </PanelBody>
            )}

            {carousal_settings}

            <PanelBody title={__("Image", "responsive-block-editor-addons")} initialOpen={false}>
              {times(test_item_count, (n) => tmControls(n))}

              {cnt > 0 && (
                <Fragment>
                  <hr className="responsive-block-editor-addons-editor__separator" />
                  <div className="rbea-repeat-selector-wrapper-five-grid">
                  <RbeaTabRadioControl
                    label={__("Image Position", "responsive-block-editor-addons")}
                    value={imagePosition}
                    onChange={(value) =>
                      setAttributes({ imagePosition: value })
                    }
                    options={[
                      { value: "top", label: __("Top", "responsive-block-editor-addons") },
                      { value: "bottom", label: __("Bottom", "responsive-block-editor-addons") },
                      { value: "left", label: __("Left", "responsive-block-editor-addons") },
                      { value: "right", label: __("Right", "responsive-block-editor-addons") },
                      { value: "stacked", label: __("Stacked", "responsive-block-editor-addons") },
                    ]}
                  />
                  </div>
                  {(imagePosition == "left" || imagePosition == "right") && (
                    <Fragment>
                      <RbeaTabRadioControl
                        label={__("Vertical ALignment", "responsive-block-editor-addons")}
                        value={imageAlignment}
                        onChange={(value) =>
                          setAttributes({ imageAlignment: value })
                        }
                        options={[
                          { value: "top", label: __("Top", "responsive-block-editor-addons") },
                          { value: "middle", label: __("Middle", "responsive-block-editor-addons") },
                        ]}
                      />
                      <RbeaTabRadioControl
                        label={__("Stack on", "responsive-block-editor-addons")}
                        value={stack}
                        options={[
                          { value: "tablet", icon: stackOnIcons.tablet, label: __("Tablet", "responsive-block-editor-addons") },
                          { value: "mobile", icon: stackOnIcons.mobile, label: __("Mobile", "responsive-block-editor-addons") },
                        ]}
                        help={__(
                          "Note: Choose on what breakpoint the Info Box will stack.", "responsive-block-editor-addons"
                        )}
                        onChange={(value) => setAttributes({ stack: value })}
                        defaultValue={"none"}
                        allowReset={true}
								        hasIcon={true}
								        optionHasBorder={true}
                      />
                    </Fragment>
                  )}
                  <RbeaTabRadioControl
                    label={__("Image Style", "responsive-block-editor-addons")}
                    value={iconimgStyle}
                    onChange={(value) => setAttributes({ iconimgStyle: value })}
                    options={[
                      { value: "normal", label: __("Normal", "responsive-block-editor-addons") },
                      { value: "circle", label: __("Circle", "responsive-block-editor-addons") },
                      { value: "square", label: __("Square", "responsive-block-editor-addons") },
                    ]}
                  />
                  <RbeaTabRadioControl
                    label={__("Image Size", "responsive-block-editor-addons")}
                    options={imageSizeOptions}
                    value={imageSize}
                    onChange={(value) => setAttributes({ imageSize: value })}
                  />
                  <RbeaRangeControl
                    label={__("Width", "responsive-block-editor-addons")}
                    value={imageWidth}
                    onChange={(value) => setAttributes({ imageWidth: value })}
                    min={0}
                    max={500}
                    allowReset
                  />
                </Fragment>
              )}
            </PanelBody>
          </InspectorTab>
          <InspectorTab key={"style"}>
            {TypographySettings}
            {background_settings}
            {marginSettings}
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

     // backward compatibility for border radius control

     if (!blockIsRadiusValueUpdated) {
      this.props.setAttributes(
        {
          blockTopRadius:          blockBorderRadius !== undefined ? blockBorderRadius : blockTopRadius,
          blockBottomRadius:       blockBorderRadius !== undefined ? blockBorderRadius : blockBottomRadius,
          blockLeftRadius:         blockBorderRadius !== undefined ? blockBorderRadius : blockLeftRadius,
          blockRightRadius:        blockBorderRadius !== undefined ? blockBorderRadius : blockRightRadius,
          blockTopRadiusTablet:    blockBorderRadius !== undefined ? blockBorderRadius : blockTopRadiusTablet,
          blockBottomRadiusTablet: blockBorderRadius !== undefined ? blockBorderRadius : blockBottomRadiusTablet,
          blockRightRadiusTablet:  blockBorderRadius !== undefined ? blockBorderRadius : blockRightRadiusTablet,
          blockLeftRadiusTablet:   blockBorderRadius !== undefined ? blockBorderRadius : blockLeftRadiusTablet,
          blockTopRadiusMobile:    blockBorderRadius !== undefined ? blockBorderRadius : blockTopRadiusMobile,
          blockBottomRadiusMobile: blockBorderRadius !== undefined ? blockBorderRadius : blockBottomRadiusMobile,
          blockLeftRadiusMobile:   blockBorderRadius !== undefined ? blockBorderRadius : blockLeftRadiusMobile,
          blockRightRadiusMobile:  blockBorderRadius !== undefined ? blockBorderRadius : blockRightRadiusMobile,
        }
      )
      this.props.setAttributes({blockIsRadiusValueUpdated: true});
    }

    // backward compatibility for border radius control

    if (!arrowIsRadiusValueUpdated) {
      this.props.setAttributes(
        {
        arrowTopRadius:          arrowBorderRadius !== undefined ? arrowBorderRadius : arrowTopRadius,
        arrowBottomRadius:       arrowBorderRadius !== undefined ? arrowBorderRadius : arrowBottomRadius,
        arrowLeftRadius:         arrowBorderRadius !== undefined ? arrowBorderRadius : arrowLeftRadius,
        arrowRightRadius:        arrowBorderRadius !== undefined ? arrowBorderRadius : arrowRightRadius,
        arrowTopRadiusTablet:    arrowBorderRadius !== undefined ? arrowBorderRadius : arrowTopRadiusTablet,
        arrowBottomRadiusTablet: arrowBorderRadius !== undefined ? arrowBorderRadius : arrowBottomRadiusTablet,
        arrowRightRadiusTablet:  arrowBorderRadius !== undefined ? arrowBorderRadius : arrowRightRadiusTablet,
        arrowLeftRadiusTablet:   arrowBorderRadius !== undefined ? arrowBorderRadius : arrowLeftRadiusTablet,
        arrowTopRadiusMobile:    arrowBorderRadius !== undefined ? arrowBorderRadius : arrowTopRadiusMobile,
        arrowBottomRadiusMobile: arrowBorderRadius !== undefined ? arrowBorderRadius : arrowBottomRadiusMobile,
        arrowLeftRadiusMobile:   arrowBorderRadius !== undefined ? arrowBorderRadius : arrowLeftRadiusMobile,
        arrowRightRadiusMobile:  arrowBorderRadius !== undefined ? arrowBorderRadius : arrowRightRadiusMobile,
        }
      )
      this.props.setAttributes({arrowIsRadiusValueUpdated: true});
      }

    return (
      <Fragment>
        <style id={`responsive-block-editor-addons-testimonial-slider-style-${this.props.clientId}-inner`}>{EditorStyles(this.props)}</style>
        <Style>
          {`
             .responsive-block-editor-addons-slick-carousel.responsive-block-editor-addons-block-${this.props.clientId.substr(
               0,
               8
             )} ul.slick-dots li button:before, ul.slick-dots li.slick-active button:before, .slick-arrow span {
             color: ${arrowColor};
            }
            .slick-arrow svg {
             fill: ${arrowColor};
            }
            .responsive-block-editor-addons-tm__content.skin-type-bubble .responsive-block-editor-addons-tm__desc {
            padding: ${bubblePadding}px;
            }
            .responsive-block-editor-addons-tm__content.skin-type-bubble .responsive-block-editor-addons-testinomial-text-wrap:before {
            border-top: 10px solid ${bubbleColor};
            }
            .responsive-block-editor-addons-tm__content.skin-type-bubble .responsive-block-editor-addons-testinomial-text-wrap {
            background-color: ${bubbleColor};
            border-top-left-radius: ${bubbleTopRadius}px;
            border-top-right-radius: ${bubbleRightRadius}px;
            border-bottom-right-radius: ${bubbleBottomRadius}px;
            border-bottom-left-radius: ${bubbleLeftRadius}px;
            }

            @media screen and (max-width: 1024px) {
              .responsive-block-editor-addons-tm__content.skin-type-bubble .responsive-block-editor-addons-testinomial-text-wrap {
                border-top-left-radius: ${bubbleTopRadiusTablet}px;
                border-top-right-radius: ${bubbleRightRadiusTablet}px;
                border-bottom-right-radius: ${bubbleBottomRadiusTablet}px;
                border-bottom-left-radius: ${bubbleLeftRadiusTablet}px;
              }
            }

            @media screen and (max-width: 767px) {
               .responsive-block-editor-addons-tm__content.skin-type-bubble .responsive-block-editor-addons-testinomial-text-wrap {
                border-top-left-radius: ${bubbleTopRadiusMobile}px;
                border-top-right-radius: ${bubbleRightRadiusMobile}px;
                border-bottom-right-radius: ${bubbleBottomRadiusMobile}px;
                border-bottom-left-radius: ${bubbleLeftRadiusMobile}px;
              }
            }
            `}
        </Style>
        <BlockControls key="controls">
          <AlignmentToolbar
            value={headingAlign}
            onChange={(value) => setAttributes({ headingAlign: value })}
          />
        </BlockControls>
        {inspect_control}
        <div
          className={classnames(
            className,
            "responsive-block-editor-addons-testomonial__outer-wrap responsive-block-editor-addons-slick-carousel responsive-block-editor-addons-tm__arrow-outside",
            `responsive-block-editor-addons-block-${this.props.clientId.substr(
              0,
              8
            )}`
          )}
        >
          <Slider
            className={classnames(
              "is-carousel",
              `responsive-block-editor-addons-tm__columns-${columns}`,
              "responsive-block-editor-addons-tm__items"
            )}
            {...settings}
          >
            {test_block.map((test, index) => (
              <div
                className={classnames(
                  "responsive-block-editor-addons-testimonial__wrap",
                  ...PositionClasses(attributes)
                )}
                key={"wrap-" + index}
              >
                <div
                  className={classnames(
                    "responsive-block-editor-addons-tm__content",
                    `skin-type-${skin}`,
                    `${headingAlign}-aligned`
                  )}
                  key={"tm_content-" + index}
                >
                  <div className="responsive-block-editor-addons-tm__overlay"></div>
                  {(imagePosition == "top" || imagePosition == "left") && (
                    <TestimonialImage
                      attributes={attributes}
                      index_value={index}
                    />
                  )}

                  <div className="responsive-block-editor-addons-tm__text-wrap">
                    {
                      // Get description.
                      <Fragment>
                        <div
                          className="responsive-block-editor-addons-testinomial-text-wrap"
                          key={"text-wrap-" + index}
                        >
                          <Description
                            attributes={attributes}
                            setAttributes={setAttributes}
                            props={this.props}
                            index_value={index}
                          />
                        </div>
                      </Fragment>
                    }
                    <div className="responsive-block-editor-addons-tm__meta">
                      <div className="responsive-block-editor-addons-tm__meta-inner">
                        {imagePosition == "bottom" && (
                          <TestimonialImage
                            attributes={attributes}
                            index_value={index}
                          />
                        )}

                        {
                          //title_text
                          <Fragment>
                            <div
                              className="responsive-block-editor-addons-testimonial-details"
                              key={"tm_wraps-" + index}
                            >
                              {imagePosition == "stacked" && (
                                <TestimonialImage
                                  attributes={attributes}
                                  index_value={index}
                                />
                              )}
                              <AuthorName
                                attributes={attributes}
                                setAttributes={setAttributes}
                                props={this.props}
                                index_value={index}
                              />
                              <Company
                                attributes={attributes}
                                setAttributes={setAttributes}
                                props={this.props}
                                index_value={index}
                              />
                            </div>
                          </Fragment>
                        }
                      </div>
                    </div>
                  </div>
                  {imagePosition == "right" && (
                    <TestimonialImage
                      attributes={attributes}
                      index_value={index}
                    />
                  )}
                </div>
              </div>
            ))}
          </Slider>
        </div>
        {descFontFamily && loadGoogleFont(descFontFamily)}
        {nameFontFamily && loadGoogleFont(nameFontFamily)}
        {companyFontFamily && loadGoogleFont(companyFontFamily)}
      </Fragment>
    );
  }

  componentDidUpdate(prevProps, prevState) {
    var element = document.getElementById(
      "responsive-block-editor-addons-testimonial-slider-style-" +
        this.props.clientId
    );

    if (null !== element && undefined !== element) {
      element.innerHTML = EditorStyles(this.props);
    }
  }

  componentDidMount() {
    // Assigning block_id in the attribute.
    this.props.setAttributes({ block_id: this.props.clientId });

    this.props.setAttributes({ classMigrate: true });

    // Pushing Style tag for this block css.
    const $style = document.createElement("style");
    $style.setAttribute(
      "id",
      "responsive-block-editor-addons-testimonial-slider-style-" +
        this.props.clientId
    );
    document.head.appendChild($style);
  }
}

export default edit;
