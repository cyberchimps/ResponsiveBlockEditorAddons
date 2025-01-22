/**
 * Inspector Controls
 */

import times from "lodash/times";
import BoxShadowControl from "../../../utils/components/box-shadow";
import FontIconPicker from "@fonticonpicker/react-fonticonpicker";
import ResponsiveBlocksIcon from "../../../ResponsiveBlocksIcon.json";
import renderSVG from "../../../renderIcon";
import fontOptions from "../../../utils/googlefonts";
import { loadGoogleFont } from "../../../utils/font";
import InspectorTab from "../../../components/InspectorTab";
import InspectorTabs from "../../../components/InspectorTabs";
import BlockBorderHelperControl from "../../../settings-components/BlockBorderSettings";
import ColorBackgroundControl from "../../../settings-components/BlockBackgroundSettings/ColorBackgroundSettings";
import ImageBackgroundControl from "../../../settings-components/BlockBackgroundSettings/ImageBackgroundSettings";
import GradientBackgroundControl from "../../../settings-components/BlockBackgroundSettings/GradientBackgroundSettings";
import ResponsiveSpacingControl from "../../../settings-components/ResponsiveSpacingSettings";
import TypographyHelperControl from "../../../settings-components/TypographySettings";
import ButtonSettingsControl from "../../../settings-components/ButtonSettings";
import ResponsiveNewPaddingControl from "../../../settings-components/ResponsiveNewSpacingSettings/ResponsiveNewPaddingControl/index";
import ResponsiveNewMarginControl from "../../../settings-components/ResponsiveNewSpacingSettings/ResponsiveNewMarginControl/index";
import RbeaRangeControl from "../../../utils/components/rbea-range-control";
import RbeaColorControl from "../../../utils/components/rbea-color-control";
import RbeaMediaUploadControl from "../../../utils/components/rbea-media-upload-control";
import RbeaTabRadioControl from "../../../utils/components/rbea-tab-radio-control";
import RbeaBackgroundTypeControl from "../../../utils/components/rbea-background-type-control";
import RbeaBlockBorderHelperControl from "../../../settings-components/RbeaBlockBorderSettings";
import { RadioControl} from "@wordpress/components";
import stackOnIcons from "../../../utils/components/rbea-tab-radio-control/rbea-stack-on-icons";

// Setup the block
const { __ } = wp.i18n;
const { Component, Fragment } = wp.element;

// Import block components
const {
  InspectorControls,
  PanelColorSettings,
  MediaUpload,
  ColorPalette,
} = wp.blockEditor;

// Import Inspector components
const {
  PanelBody,
  RangeControl,
  TabPanel,
  Dashicon,
  SelectControl,
  ToggleControl,
  BaseControl,
  Button,
} = wp.components;

let svg_icons = Object.keys(ResponsiveBlocksIcon);

/**
 * Create an Inspector Controls wrapper Component
 */
export default class Inspector extends Component {
  constructor(props) {
    super(...arguments);
    this.onSelectImage = this.onSelectImage.bind(this);
    this.onRemoveImage = this.onRemoveImage.bind(this);

    this.onSelectImageOne = this.onSelectImageOne.bind(this);
    this.onRemoveImageOne = this.onRemoveImageOne.bind(this);

    this.onRemoveImageTwo = this.onRemoveImageTwo.bind(this);
    this.onSelectImageTwo = this.onSelectImageTwo.bind(this);

    this.onRemoveImageThree = this.onRemoveImageThree.bind(this);
    this.onSelectImageThree = this.onSelectImageThree.bind(this);

    this.onRemoveImageFour = this.onRemoveImageFour.bind(this);
    this.onSelectImageFour = this.onSelectImageFour.bind(this);
  }
  /*
   * Event to set Image as while adding.
   */
  onSelectTestImage(media, index) {
    const { cardsArray } = this.props.attributes;
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

    const newItems = cardsArray.map((item, thisIndex) => {
      if (index === thisIndex) {
        (item["image"] = imag_url), (item["imageUrl"] = imag_url);
      }
      return item;
    });

    setAttributes({
      cardsArray: newItems,
    });
  }

  /*
   * Event to set Image as null while removing.
   */
  onRemoveTestImage(index) {
    const { cardsArray } = this.props.attributes;
    const { setAttributes } = this.props;

    const newItems = cardsArray.map((item, thisIndex) => {
      if (index === thisIndex) {
        item["image"] = null;
      }
      return item;
    });

    setAttributes({
      cardsArray: newItems,
    });
  }

  /*
   * Event to set Image selectot label.
   */
  getImageName(image) {
    const { cardsArray } = this.props.attributes;

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
    const { backgroundImage } = this.props.attributes;

    if (!media || !media.url) {
      setAttributes({ backgroundImage: null });
      return;
    }

    if (!media.type || "image" != media.type) {
      return;
    }

    setAttributes({ backgroundImage: media.url });
  }

  /*
   * Event to set Image as null while removing.
   */
  onRemoveImageOne() {
    const { setAttributes } = this.props;

    setAttributes({ backgroundImageOne: null });
  }

  /*
   * Event to set Image as while adding.
   */
  onSelectImageOne(media) {
    const { setAttributes } = this.props;
    const { backgroundImageOne } = this.props.attributes;

    if (!media || !media.url) {
      setAttributes({ backgroundImageOne: null });
      return;
    }

    if (!media.type || "image" != media.type) {
      return;
    }

    setAttributes({ backgroundImageOne: media.url });
  }

  onRemoveImageTwo() {
    const { setAttributes } = this.props;

    setAttributes({ backgroundImageTwo: null });
  }

  onSelectImageTwo(media) {
    const { setAttributes } = this.props;
    const { backgroundImageTwo } = this.props.attributes;

    if (!media || !media.url) {
      setAttributes({ backgroundImageTwo: null });
      return;
    }

    if (!media.type || "image" != media.type) {
      return;
    }

    setAttributes({ backgroundImageTwo: media.url });
  }

  onRemoveImageThree() {
    const { setAttributes } = this.props;

    setAttributes({ backgroundImageThree: null });
  }

  onSelectImageThree(media) {
    const { setAttributes } = this.props;
    const { backgroundImageThree } = this.props.attributes;

    if (!media || !media.url) {
      setAttributes({ backgroundImageThree: null });
      return;
    }

    if (!media.type || "image" != media.type) {
      return;
    }

    setAttributes({ backgroundImageThree: media.url });
  }

  onRemoveImageFour() {
    const { setAttributes } = this.props;

    setAttributes({ backgroundImageFour: null });
  }

  onSelectImageFour(media) {
    const { setAttributes } = this.props;
    const { backgroundImageFour } = this.props.attributes;

    if (!media || !media.url) {
      setAttributes({ backgroundImageFour: null });
      return;
    }

    if (!media.type || "image" != media.type) {
      return;
    }

    setAttributes({ backgroundImageFour: media.url });
  }

  render() {
    // Setup the attributes
    const {
      attributes: {
        z_index,
        z_indexMobile,
        z_indexTablet,
        count,
        gutter,
        cardsArray,
        textColor,
        backgroundColor,
        buttonTarget,
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
        boxShadowColor,
        boxShadowHOffset,
        boxShadowVOffset,
        boxShadowBlur,
        boxShadowSpread,
        boxShadowPosition,
        titleSpace,
        titleSpaceMobile,
        titleSpaceTablet,
        subtitleSpace,
        subtitleSpaceMobile,
        subtitleSpaceTablet,
        contentSpace,
        contentSpaceMobile,
        contentSpaceTablet,
        buttonSpace,
        ctaBackColor,
        ctaColor,
        stack,
        opacity,
        resshowImage,
        imageopacity,
        backgroundType,
        backgroundImage,
        gradientDirection,
        colorLocation1,
        colorLocation2,
        backgroundColor1,
        backgroundColor2,
        imageSize,
        imagePosition,
        imageRepeat,
        thumbsize,
        imageheight,
        blockzindex,
        blockmargin,
        blockmarginMobile,
        blockmarginTablet,
        icon,
        iconPosition,
        icon_color,
        ctaHoverBackColor,
        ctaHoverColor,
        buttonopacity,
        ctaVpadding,
        ctaHpadding,
        vMargin,
        hMargin,
        ctaBorderWidth,
        ctaBorderRadius,
        ctaBorderStyle,
        buttonSize,
        buttonbackgroundType,
        buttongradientDirection,
        buttoncolorLocation1,
        buttoncolorLocation2,
        buttonbackgroundColor1,
        buttonbackgroundColor2,
        icon_hcolor,
        subFontFamily,
        subLineHeight,
        subFontWeight,
        subFontSize,
        headingFontFamily,
        headingLineHeight,
        headingFontWeight,
        headingFontSize,
        contentFontFamily,
        contentLineHeight,
        contentFontWeight,
        contentFontSize,
        blockbotmargin,
        blockbotmarginMobile,
        blockbotmarginTablet,
        blockleftmargin,
        blockleftmarginMobile,
        blockleftmarginTablet,
        blockrightmargin,
        blockrightmarginMobile,
        blockrightmarginTablet,
        bgimageSize,
        bgimagePosition,
        bgimageRepeat,
        bgthumbsize,
        backgroundImageOne,
        backgroundImageTwo,
        backgroundImageThree,
        backgroundImageFour,
        backgroundImagePosition,
        backgroundImageRepeat,
        backgroundImageSize,
        headingFontSizeMobile,
        headingFontSizeTablet,
        subFontSizeMobile,
        subFontSizeTablet,
        contentFontSizeMobile,
        contentFontSizeTablet,
        buttonHopacity,
        ctaBorderColor,
        ctaHoverBorderColor,
        ctaTextOpacity,
        ctaHpaddingTablet,
        ctaHpaddingMobile,
        ctaVpaddingTablet,
        ctaVpaddingMobile,
        vMarginTablet,
        vMarginMobile,
        hMarginTablet,
        hMarginMobile,
        buttonHbackgroundType,
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
        blockNewSpacingValuesUpdated,
        imagePositionTab,
        backgroundSize,
        backgroundSizeTablet,
        backgroundSizeMobile,
        backgroundPosition,
        backgroundPositionMobile,
        backgroundPositionTablet,
        imageSizeTab,
        backgroundRepeat,
        cardImagePositionTab,
        cardImageSize,
        cardImageSizeTablet,
        cardImageSizeMobile,
        cardImagePosition,
        cardImagePositionMobile,
        cardImagePositionTablet,
        cardImageSizeTab,
        cardImageRepeat,
        headingTypographyColor,
        headingBottomSpacing,
        headingBottomSpacingMobile,
        headingBottomSpacingTablet,
        subBottomSpacing,
        subBottomSpacingMobile,
        subBottomSpacingTablet,
        contentBottomSpacing,
        contentBottomSpacingMobile,
        contentBottomSpacingTablet,
        blockIsTypographyColorValueUpdated,

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

        ctaButtonTopMargin,
        ctaButtonBottomMargin,
        ctaButtonLeftMargin,
        ctaButtonRightMargin,
        ctaButtonTopMarginTablet,
        ctaButtonBottomMarginTablet,
        ctaButtonRightMarginTablet,
        ctaButtonLeftMarginTablet,
        ctaButtonTopMarginMobile,
        ctaButtonBottomMarginMobile,
        ctaButtonLeftMarginMobile,
        ctaButtonRightMarginMobile,
        isCtaButtonPaddingMarginValueUpdated,
      },
      setAttributes,
    } = this.props;

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
    if (!blockNewSpacingValuesUpdated) {
      this.props.setAttributes(
        {
          blockTopMargin:          blockmargin !== undefined ? blockmargin : blockTopMargin,
          blockBottomMargin:       blockbotmargin !== undefined ? blockbotmargin : blockBottomMargin,
          blockLeftMargin:         blockleftmargin !== undefined ? blockleftmargin : blockLeftMargin,
          blockRightMargin:        blockrightmargin !== undefined ? blockrightmargin : blockRightMargin,
          blockTopMarginTablet:    blockmarginTablet !== undefined ? blockmarginTablet : blockTopMarginTablet,
          blockBottomMarginTablet: blockbotmarginTablet !== undefined ? blockbotmarginTablet : blockBottomMarginTablet,
          blockRightMarginTablet:  blockrightmarginTablet !== undefined ? blockrightmarginTablet : blockRightMarginTablet,
          blockLeftMarginTablet:   blockleftmarginTablet !== undefined ? blockleftmarginTablet : blockLeftMarginTablet,
          blockTopMarginMobile:    blockmarginMobile !== undefined ? blockmarginMobile : blockTopMarginMobile,
          blockBottomMarginMobile: blockbotmarginMobile !== undefined ? blockbotmarginMobile : blockBottomMarginMobile,
          blockLeftMarginMobile:   blockleftmarginMobile !== undefined ? blockleftmarginMobile : blockLeftMarginMobile,
          blockRightMarginMobile:  blockrightmarginMobile !== undefined ? blockrightmarginMobile : blockRightMarginMobile,
        }
      )
    }
    this.props.setAttributes({blockNewSpacingValuesUpdated: true});
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

    // Button size values
    const buttonSizeOptions = [
      {
        value: "responsive-block-editor-addons-button-size-small",
        label: __("S", "responsive-block-editor-addons"),
      },
      {
        value: "responsive-block-editor-addons-button-size-medium",
        label: __("M", "responsive-block-editor-addons"),
      },
      {
        value: "responsive-block-editor-addons-button-size-large",
        label: __("L", "responsive-block-editor-addons"),
      },
      {
        value: "responsive-block-editor-addons-button-size-extralarge",
        label: __("XL", "responsive-block-editor-addons"),
      },
    ];

    // Background Type Options
    const buttonbackgroundTypeOptions = [
      { value: "none", label: __("None", "responsive-block-editor-addons") },
      { value: "color", label: __("Color", "responsive-block-editor-addons") },
      {
        value: "gradient",
        label: __("Gradient", "responsive-block-editor-addons"),
      },
    ];
    // Image Size Options
    const imageSizeOptions = [
      {
        value: "thumbnail",
        label: __("Thumbnail", "responsive-block-editor-addons"),
      },
      {
        value: "medium",
        label: __("Medium", "responsive-block-editor-addons"),
      },
      { value: "large", label: __("Large", "responsive-block-editor-addons") },
      { value: "full", label: __("Full", "responsive-block-editor-addons") },
    ];

    const tmControls = (index) => {
      let image_val = null;
      if (cardsArray[index] && typeof cardsArray[index] !== "undefined") {
        image_val = cardsArray[index]["image"];
      }
      return (
        <PanelBody
          key={index}
          title={__("Image", "responsive-block-editor-addons") + " " + (index + 1) + " " + __("Settings", "responsive-block-editor-addons")}
          initialOpen={true}
          className={"rbea-repeater-panel"}
        >
          <BaseControl className="editor-bg-image-control" label={__("", "responsive-block-editor-addons")}>
            <MediaUpload
              title={__("Select Image" + (index + 1), "responsive-block-editor-addons")}
              onSelect={(media) => {
                this.onSelectTestImage(media, index);
              }}
              allowedTypes={["image"]}
              value={image_val}
              render={({ open }) => (
                <Button isDefault onClick={open}>
                  {this.getImageName(cardsArray[index]["image"])}
                </Button>
              )}
            />
            {image_val &&
              cardsArray[index]["image"].url !== null &&
              cardsArray[index]["image"].url !== "" && (
                <Button
                  className="rbea-rm-btn"
                  key={index}
                  onClick={(value) => {
                    this.onRemoveTestImage(index);
                  }}
                  isLink
                  isDestructive
                >
                  {__("Remove Image", "responsive-block-editor-addons")}
                </Button>
              )}
          </BaseControl>
        </PanelBody>
      );
    };

    // Update color value
    const onChangeTextColor = (value) => setAttributes({ textColor: value });
    const onChangeBackgroundColor = (value) =>
      setAttributes({ backgroundColor: value });

    // Background Type Options
    const backgroundTypeOptions = [
      { value: "color", label: __("Color", "responsive-block-editor-addons") },
      {
        value: "gradient",
        label: __("Gradient", "responsive-block-editor-addons"),
      },
      { value: "image", label: __("Image", "responsive-block-editor-addons") },
    ];

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

    // Background image URL
    let background_image_url = backgroundImage || '';
    let card_image_url = backgroundImageOne != null && backgroundImageOne != '' ? backgroundImageOne : 
    backgroundImageTwo !== null && backgroundImageTwo != '' ? backgroundImageTwo : 
    backgroundImageThree !== null && backgroundImageThree != '' ? backgroundImageThree :
    backgroundImageFour !== null && backgroundImageFour != '' ? backgroundImageFour : '';

    // backward compatibility for typography color control
    if (!blockIsTypographyColorValueUpdated) {
      this.props.setAttributes(
        {
          headingTypographyColor:          textColor !== undefined ? textColor : headingTypographyColor,
          headingBottomSpacing: titleSpace !== undefined ? titleSpace : headingBottomSpacing,
          headingBottomSpacingMobile: titleSpaceMobile !== undefined ? titleSpaceMobile : headingBottomSpacingMobile,
          headingBottomSpacingTablet: titleSpaceTablet !== undefined ? titleSpaceTablet : headingBottomSpacingTablet,
          subBottomSpacing: subtitleSpace !== undefined ? subtitleSpace : subBottomSpacing,
          subBottomSpacingMobile: subtitleSpaceMobile !== undefined ? subtitleSpaceMobile : subBottomSpacingMobile,
          subBottomSpacingTablet: subtitleSpaceTablet !== undefined ? subtitleSpaceTablet : subBottomSpacingTablet,
          contentBottomSpacing: contentSpace !== undefined ? contentSpace : contentBottomSpacing,
          contentBottomSpacingMobile: contentSpaceMobile !== undefined ? contentSpaceMobile : contentBottomSpacingMobile,
          contentBottomSpacingTablet: contentSpaceTablet !== undefined ? contentSpaceTablet : contentBottomSpacingTablet,
        }
      )
      this.props.setAttributes({blockIsTypographyColorValueUpdated: true});
    }

    const emptyColorControl = (
      <div className="responsive-block-editor-addons-empty-color-control"></div>
    );

    return (
      <InspectorControls key="inspector">
        <InspectorTabs>
          <InspectorTab key={"content"}>
            <PanelBody
              title={__("General", "responsive-block-editor-addons")}
              initialOpen={false}
            >
              <RbeaRangeControl
                label={__("Number of Cards", "responsive-block-editor-addons")}
                value={count}
                onChange={(newCount) => {
                  let clonecardsArray = [...cardsArray];
                  if (clonecardsArray.length < newCount) {
                    const incsubtitle = Math.abs(
                      newCount - clonecardsArray.length
                    );

                    {
                      times(incsubtitle, (n) => {
                        clonecardsArray.push({
                          title: __("Title ", "responsive-block-editor-addons"),
                          subtitle: __("Subtitle", "responsive-block-editor-addons"),
                          content:
                            __("Description for this block. Use this space for describing your block. Any text will do. Description for this block. You can use this space for describing your block.", "responsive-block-editor-addons"),
                          button: __("Button", "responsive-block-editor-addons") + newCount,
                        });
                      });
                    }
                    setAttributes({ cardsArray: clonecardsArray });
                  } else {
                    const incsubtitle = Math.abs(
                      newCount - clonecardsArray.length
                    );
                    let data_new = clonecardsArray;
                    for (var i = 0; i < incsubtitle; i++) {
                      data_new.pop();
                    }
                    setAttributes({ cardsArray: data_new });
                  }
                  setAttributes({ count: newCount });
                }}
                min={1}
                max={4}
                step={1}
              />
              <RbeaTabRadioControl
                label={__("Stack on", "responsive-block-editor-addons")}
                value={stack}
                options={[
                  {
                    value: "tablet",
                    label: __("Tablet", "responsive-block-editor-addons"),
                    icon: stackOnIcons.tablet,
                  },
                  {
                    value: "mobile",
                    label: __("Mobile", "responsive-block-editor-addons"),
                    icon: stackOnIcons.mobile,
                  },
                ]}
                onChange={(value) => setAttributes({ stack: value })}
                help={__(
                  "Note: Choose on what breakpoint the columns will stack.",
                  "responsive-block-editor-addons"
                )}
                allowReset={true}
								defaultValue={"none"}
								hasIcon={true}
								optionHasBorder={true}
              />
              <RbeaRangeControl
                label={__("Z-Index", "responsive-block-editor-addons")}
                value={blockzindex}
                onChange={(value) =>
                  setAttributes({
                    blockzindex: value !== undefined ? value : 1,
                  })
                }
                min={0}
                max={9999}
                allowReset
              />
            </PanelBody>
            <PanelBody
              title={__("Image", "responsive-block-editor-addons")}
              initialOpen={false}
            >
              <ToggleControl
                label={__("Enable Image", "responsive-block-editor-addons")}
                checked={resshowImage}
                onChange={(value) =>
                  setAttributes({ resshowImage: !resshowImage })
                }
              />
              {resshowImage && (
                <Fragment>
                    <RbeaMediaUploadControl
                      label={__("Image 1 Settings", "responsive-block-editor-addons")}
                      value={{
                          url: backgroundImageOne,
                      }}
                      onChange={(newValue) => { 
                          setAttributes({
                            backgroundImageOne: newValue.url,
                          });
                      }}
                      mediaType={'image'}
                    />
                  {count > 1 && (
                    <RbeaMediaUploadControl
                      label={__("Image 2 Settings", "responsive-block-editor-addons")}
                      value={{
                          url: backgroundImageTwo,
                      }}
                      onChange={(newValue) => { 
                          setAttributes({
                            backgroundImageTwo: newValue.url,
                          });
                      }}
                      mediaType={'image'}
                    />
                  )}
                  {(count === 3 || count === 4) && (
                    <RbeaMediaUploadControl
                      label={__("Image 3 Settings", "responsive-block-editor-addons")}
                      value={{
                          url: backgroundImageThree,
                      }}
                      onChange={(newValue) => { 
                          setAttributes({
                            backgroundImageThree: newValue.url,
                          });
                      }}
                      mediaType={'image'}
                      />
                  )}
                  {count === 4 && (
                    <RbeaMediaUploadControl
                      label={__("Image 4 Settings", "responsive-block-editor-addons")}
                      value={{
                          url: backgroundImageFour,
                      }}
                      onChange={(newValue) => { 
                          setAttributes({
                            backgroundImageFour: newValue.url,
                          });
                      }}
                      mediaType={'image'}
                    />
                  )}
                </Fragment>
              )}
            </PanelBody>
            {resshowImage && (
              <PanelBody
                title={__("Image Settings", "responsive-block-editor-addons")}
                initialOpen={false}
              >
                {resshowImage && (
                  <Fragment>
                    <div className = "rbea-repeat-selector-wrapper">
                      <RbeaTabRadioControl
                        label={__("Image Size", "responsive-block-editor-addons")}
                        value={imageSize}
                        onChange={(value) => setAttributes({ imageSize: value })}
                        options={imageSizeOptions}
                      />
                    </div>

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
                            setAttributes({ cardImagePositionTab: "mobile" });
                          } else if ("tablet" === tab.name) {
                            setAttributes({ cardImagePositionTab: "tablet" });
                          } else {
                            setAttributes({ cardImagePositionTab: "desktop" });
                          }
                        }}
                      </TabPanel>
                      </div>
                        <Fragment>
                          <div className = "rbea-background-image-positon-control"
                          style={{
                            backgroundImage: `url(${card_image_url})`,
                            backgroundSize: 'cover',
                            backgroundPosition:  'center',
                          }}>
                          { cardImagePositionTab === "desktop" && 
                              <RadioControl 
                                className = "rbea-background-image-positon-control-options"
                                selected={cardImagePosition}
                                options={imagePositionOptions}
                                onChange={(value) =>
                                  setAttributes({ cardImagePosition: value })
                                }
                              />
                          }
                          {cardImagePositionTab === "tablet" &&
                             <RadioControl 
                                className = "rbea-background-image-positon-control-options"
                                selected={cardImagePositionTablet}
                                options={imagePositionOptions}
                                onChange={(value) =>
                                  setAttributes({ cardImagePositionTablet: value })
                                }
                            />
                          }
                          {cardImagePositionTab === "mobile" && 
                            <RadioControl 
                                className = "rbea-background-image-positon-control-options"
                                selected={cardImagePositionMobile}
                                options={imagePositionOptions}
                                onChange={(value) =>
                                  setAttributes({ cardImagePositionMobile: value })
                                }
                            />
                          }
                          </div>
                        </Fragment>
                
                        <div className = "rbea-repeat-selector-wrapper">
                      <RbeaTabRadioControl
                        label={__("Repeat", "responsive-block-editor-addons")}
                        value={cardImageRepeat}
                        onChange={(value) =>
                          setAttributes({ cardImageRepeat: value })
                        }
                        options={[
                          { value: "no-repeat", label: __("No Repeat", "responsive-block-editor-addons") },
                          { value: "repeat", label: __("Repeat", "responsive-block-editor-addons") },
                          { value: "repeat-x", label: __("Repeat-x", "responsive-block-editor-addons") },
                          { value: "repeat-y", label: __("Repeat-y", "responsive-block-editor-addons") },
                        ]}
                        defaultValue={"no-repeat"}
                      /></div>
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
                            setAttributes({ cardImageSizeTab: "mobile" });
                          } else if ("tablet" === tab.name) {
                            setAttributes({ cardImageSizeTab: "tablet" });
                          } else {
                            setAttributes({ cardImageSizeTab: "desktop" });
                          }
                        }}
                      </TabPanel>
                      </div>
                      {cardImageSizeTab === "desktop" && (
                        <>
                        <RbeaTabRadioControl
                          label={__("", "responsive-block-editor-addons")}
                          value={cardImageSize}
                          onChange={(value) =>
                            setAttributes({ cardImageSize: value })
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
                      {cardImageSizeTab === "tablet" && (
                        <RbeaTabRadioControl
                        label={__("", "responsive-block-editor-addons")}
                        value={cardImageSizeTablet}
                        onChange={(value) =>
                          setAttributes({ cardImageSizeTablet: value })
                        }
                        options={[
                          { value: "auto", label: __("Auto", "responsive-block-editor-addons") },
                          { value: "cover", label: __("Cover", "responsive-block-editor-addons") },
                          { value: "contain", label: __("Contain", "responsive-block-editor-addons") },
                        ]}
                        defaultValue={"cover"}
                        />
                      )}
                      {cardImageSizeTab === "mobile" && (
                        <RbeaTabRadioControl
                          label={__("", "responsive-block-editor-addons")}
                          value={cardImageSizeMobile}
                          onChange={(value) =>
                            setAttributes({ cardImageSizeMobile: value })
                          }
                          options={[
                            { value: "auto", label: __("Auto", "responsive-block-editor-addons") },
                            { value: "cover", label: __("Cover", "responsive-block-editor-addons") },
                            { value: "contain", label: __("Contain", "responsive-block-editor-addons") },
                          ]}
                          defaultValue={"cover"}
                        />
                      )}
                      <RbeaRangeControl
                        label={__("Custom Height", "responsive-block-editor-addons")}
                        value={imageheight}
                        onChange={(value) =>
                          setAttributes({
                            imageheight: value !== undefined ? value : 200,
                          })
                        }
                        min={0}
                        max={1000}
                        allowReset
                      />
                  </Fragment>
                )}
              </PanelBody>
            )}
            <PanelBody
              title={__("Button Settings", "responsive-block-editor-addons")}
              initialOpen={false}
            >
                <RbeaTabRadioControl
                  label={__("Button Size", "responsive-block-editor-addons")}
                  value={buttonSize}
                  options={buttonSizeOptions.map(({ value, label }) => ({
                    value,
                    label,
                  }))}
                  onChange={(value) => {
                    this.props.setAttributes({
                      buttonSize: value,
                    });
                  }}
                  defaultValue={"medium"}
                />
              {/* TODO */}
              <ButtonSettingsControl
                {...this.props}
                showMarginControls={true}
                showBackColorOpacity={true}
                showGradientHover={false}
                showTextOpacity={true}
              />
            </PanelBody>
          </InspectorTab>
          <InspectorTab key={"style"}>
          <PanelBody
              title={__("Background", "responsive-block-editor-addons")}
              initialOpen={false}
            >
              {<RbeaBackgroundTypeControl
                label = {"Type"}
                selectedValue={backgroundType}
                options={[
                  { label: "color", value: "color" },
                  { label: "gradient", value: "gradient" },
                  { label: "image",value: "image" },
                ]}
                onChange={(value) => setAttributes({ backgroundType: value })}
              />}
              {"color" == backgroundType && (
                <Fragment>
                  <RbeaColorControl
                    label = {"Color"}
                    colorValue={backgroundColor}
                    onChange={(newColor) => setAttributes({ backgroundColor: newColor })}
                    resetColor={() => setAttributes({ backgroundColor: "" })}
                  />
                  {(backgroundColor && backgroundColor != '') && (
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
              {"gradient" == backgroundType && (
                <Fragment>
                  <GradientBackgroundControl
                    {...this.props}
                    showHoverGradient={false}
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
                            backgroundPosition:  'center',
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
            </PanelBody>
              <TypographyHelperControl
                title={__("Title Typography", "responsive-block-editor-addons")}
                attrNameTemplate="heading%s"
                values={{
                  family: headingFontFamily,
                  size: headingFontSize,
                  sizeMobile: headingFontSizeMobile,
                  sizeTablet: headingFontSizeTablet,
                  weight: headingFontWeight,
                  height: headingLineHeight,
                  color: headingTypographyColor,
                  bottomSpacing: headingBottomSpacing,
                  bottomSpacingMoible: headingBottomSpacingMobile,
                  bottomSpacingTablet: headingBottomSpacingTablet,
                }}
                showLetterSpacing={false}
                showTextTransform={false}
                showColorControl={true}
                showTextBottomSpacing={true}
                setAttributes={setAttributes}
                {...this.props}
              />
              <TypographyHelperControl
                title={__(
                  "Subtitle Typography",
                  "responsive-block-editor-addons"
                )}
                attrNameTemplate="sub%s"
                values={{
                  family: subFontFamily,
                  size: subFontSize,
                  sizeMobile: subFontSizeMobile,
                  sizeTablet: subFontSizeTablet,
                  weight: subFontWeight,
                  height: subLineHeight,
                  bottomSpacing: subBottomSpacing,
                  bottomSpacingMoible: subBottomSpacingMobile,
                  bottomSpacingTablet: subBottomSpacingTablet,
                }}
                showLetterSpacing={false}
                showTextTransform={false}
                showTextBottomSpacing={true}
                setAttributes={setAttributes}
                {...this.props}
              />
              <TypographyHelperControl
                title={__(
                  "Content Typography",
                  "responsive-block-editor-addons"
                )}
                attrNameTemplate="content%s"
                values={{
                  family: contentFontFamily,
                  size: contentFontSize,
                  sizeMobile: contentFontSizeMobile,
                  sizeTablet: contentFontSizeTablet,
                  weight: contentFontWeight,
                  height: contentLineHeight,
                  bottomSpacing: contentBottomSpacing,
                  bottomSpacingMoible: contentBottomSpacingMobile,
                  bottomSpacingTablet: contentBottomSpacingTablet,
                }}
                showLetterSpacing={false}
                showTextTransform={false}
                showTextBottomSpacing={true}
                setAttributes={setAttributes}
                {...this.props}
              />

            <PanelBody title={__("Icon Settings", "responsive-block-editor-addons")} initialOpen={false}>
              <Fragment>
                <p className="components-base-control__label">{__("Icon", "responsive-block-editor-addons")}</p>
                <FontIconPicker
                  icons={svg_icons}
                  renderFunc={renderSVG}
                  theme="default"
                  value={icon}
                  onChange={(value) => setAttributes({ icon: value })}
                  isMulti={false}
                  noSelectedPlaceholder={__("Select Icon", "responsive-block-editor-addons")}
                />
                <RbeaTabRadioControl
                  label={__("Icon Position", "responsive-block-editor-addons")}
                  value={iconPosition}
                  onChange={(value) => setAttributes({ iconPosition: value })}
                  options={[
                    { value: "before", label: __("Before Text", "responsive-block-editor-addons") },
                    { value: "after", label: __("After Text", "responsive-block-editor-addons") },
                  ]}
                  defaultValue={"before"}
                />
                <TabPanel
                  className="responsive-block-editor-addons-inspect-tabs 
                  responsive-block-editor-addons-inspect-tabs-col-2  
                  responsive-block-editor-addons-color-inspect-tabs"
                  activeClass="active-tab"
                  initialTabName="normal" // Set the default active tab here
                  tabs={[
                    {
                      name: "empty-1",
                      title: __("", "responsive-block-editor-addons"),
                      className: "responsive-block-editor-addons-empty-tab",
                    },
                    {
                      name: "normal",
                      title: __("Normal", "responsive-block-editor-addons"),
                      className: "responsive-block-editor-addons-normal-tab",
                    },
                    {
                      name: "empty-2",
                      title: __("", "responsive-block-editor-addons"),
                      className: "responsive-block-editor-addons-empty-tab",
                    },
                    {
                      name: "hover",
                      title: __("Hover", "responsive-block-editor-addons"),
                      className: "responsive-block-editor-addons-hover-tab",
                    },
                    {
                      name: "empty-3",
                      title: __("", "responsive-block-editor-addons"),
                      className: "responsive-block-editor-addons-empty-tab",
                    },
                  ]}
                >
                  {(tabName) => {
                    let color_tab;
                    if ("normal" === tabName.name) {
                      color_tab = (
                        <RbeaColorControl
								        	label = {__("Icon Color", "responsive-block-editor-addons")}
								        	colorValue={icon_color}
								        	onChange={(colorValue) =>
								        		setAttributes({ icon_color: colorValue })
								        	}
								        	resetColor={() => setAttributes({ icon_color: "" })}
								        />
                      );
                    } else if("hover" === tabName.name) {
                      color_tab = (
                        <RbeaColorControl
								        	label = {__("Icon Hover Color", "responsive-block-editor-addons")}
								        	colorValue={icon_hcolor}
								        	onChange={(colorValue) =>
								        		setAttributes({ icon_hcolor: colorValue })
								        	}
								        	resetColor={() => setAttributes({ icon_hcolor: "" })}
								        />
                      );
                    } else {
                      color_tab = emptyColorControl;
                    }
                    return <div>{color_tab}</div>;
                  }}
                </TabPanel>
              </Fragment>
            </PanelBody>
            <PanelBody
              title={__("Border", "responsive-block-editor-addons")}
              initialOpen={false}
            >
              <RbeaBlockBorderHelperControl
                attrNameTemplate="block%s"
                values={{
                  radius: blockBorderRadius,
                  style: blockBorderStyle,
                  width: blockBorderWidth,
                  color: blockBorderColor,
                }}
                setAttributes={setAttributes}
                {...this.props}
              />
            </PanelBody>
            <PanelBody
              title={__("Box Shadow", "responsive-block-editor-addons")}
              initialOpen={false}
            >
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
            </PanelBody>
            <PanelBody
              title={__("Spacing", "responsive-block-editor-addons")}
              initialOpen={false}
            >
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
                title={"Title Bottom Margin"}
                attrNameTemplate="titleSpace%s"
                values={{
                  desktop: titleSpace,
                  tablet: titleSpaceTablet,
                  mobile: titleSpaceMobile,
                }}
                setAttributes={setAttributes}
                {...this.props}
              />
              <ResponsiveSpacingControl
                title={"Subtitle Bottom Margin"}
                attrNameTemplate="subtitleSpace%s"
                values={{
                  desktop: subtitleSpace,
                  tablet: subtitleSpaceTablet,
                  mobile: subtitleSpaceMobile,
                }}
                setAttributes={setAttributes}
                {...this.props}
              />
              <ResponsiveSpacingControl
                title={"Content Bottom Margin"}
                attrNameTemplate="contentSpace%s"
                values={{
                  desktop: contentSpace,
                  tablet: contentSpaceTablet,
                  mobile: contentSpaceMobile,
                }}
                setAttributes={setAttributes}
                {...this.props}
              />
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
