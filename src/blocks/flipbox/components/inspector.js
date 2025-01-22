/**
 * Inspector Controls
 */
import classnames from "classnames";
import times from "lodash/times";
import BoxShadowControl from "../../../utils/components/box-shadow";
import ResponsiveBlocksIcon from "../../../ResponsiveBlocksIcon.json";
import renderSVG from "../../../renderIcon";
import FontIconPicker from "@fonticonpicker/react-fonticonpicker";
import { loadGoogleFont } from "../../../utils/font";
import InspectorTab from "../../../components/InspectorTab";
import InspectorTabs from "../../../components/InspectorTabs";
import BlockBorderHelperControl from "../../../settings-components/BlockBorderSettings";
import ResponsiveSpacingControl from "../../../settings-components/ResponsiveSpacingSettings";
import TypographyHelperControl from "../../../settings-components/TypographySettings";
import ButtonSettingsControl from "../../../settings-components/ButtonSettings";
import ResponsiveNewPaddingControl from "../../../settings-components/ResponsiveNewSpacingSettings/ResponsiveNewPaddingControl/index";
import ResponsiveNewMarginControl from "../../../settings-components/ResponsiveNewSpacingSettings/ResponsiveNewMarginControl/index";
import RbeaRangeControl from "../../../utils/components/rbea-range-control";
import RbeaColorControl from "../../../utils/components/rbea-color-control";
import RbeaTabRadioControl from "../../../utils/components/rbea-tab-radio-control";
import RbeaMediaUploadControl from "../../../utils/components/rbea-media-upload-control";
import RbeaBlockBorderHelperControl from "../../../settings-components/RbeaBlockBorderSettings";
import { RadioControl} from "@wordpress/components";
import stackOnIcons from "../../../utils/components/rbea-tab-radio-control/rbea-stack-on-icons";

// Setup the block
const { __ } = wp.i18n;
const { Component, Fragment } = wp.element;
const { MediaUpload, InspectorControls, PanelColorSettings, ColorPalette } = wp.blockEditor;

let svg_icons = Object.keys(ResponsiveBlocksIcon);

// Import Inspector components
const {
  PanelBody,
  RangeControl,
  TextControl,
  ButtonGroup,
  Button,
  Dashicon,
  SelectControl,
  ToggleControl,
  BaseControl,
  TabPanel,
} = wp.components;

/**
 * Create an Inspector Controls wrapper Component
 */
export default class Inspector extends Component {
  constructor(props) {
    super(...arguments);
    this.onRemoveImage = this.onRemoveImage.bind(this);
    this.onSelectImage = this.onSelectImage.bind(this);
    this.onRemoveBackImage = this.onRemoveBackImage.bind(this);
    this.onSelectBackImage = this.onSelectBackImage.bind(this);
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
  onRemoveBackImage() {
    const { setAttributes } = this.props;

    setAttributes({ backBackgroundImage: null });
  }

  /*
   * Event to set Image as while adding.
   */
  onSelectBackImage(media) {
    const { setAttributes } = this.props;
    const { backBackgroundImage } = this.props.attributes;

    if (!media || !media.url) {
      setAttributes({ backBackgroundImage: null });
      return;
    }

    if (!media.type || "image" != media.type) {
      return;
    }

    setAttributes({ backBackgroundImage: media.url });
  }

  render() {
    // Background Type Options
    const backgroundTypeOptions = [
      { value: "none", label: __("None", "responsive-block-editor-addons") },
      { value: "color", label: __("Color", "responsive-block-editor-addons") },
      {
        value: "gradient",
        label: __("Gradient", "responsive-block-editor-addons"),
      },
      { value: "image", label: __("Image", "responsive-block-editor-addons") },
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

    // Flip Style Options
    const flipStyleOptions = [
      {
        value: "LTR",
        label: __("Left To Right", "responsive-block-editor-addons"),
      },
      {
        value: "BTT",
        label: __("Bottom To Top", "responsive-block-editor-addons"),
      },
      {
        value: "RTL",
        label: __("Right To Left", "responsive-block-editor-addons"),
      },
      {
        value: "TTB",
        label: __("Top To Bottom", "responsive-block-editor-addons"),
      },
    ];

    const defaultIcons = ["accusoft", "acquisitions-incorporated", "ad", "air-freshener"];
    const defaultBackIcons = ["address-book", "address-card", "adjust", "adversal"];

    // Setup the attributes
    const {
      attributes: {
        count,
        flipboxArray,
        frontTextColor,
        frontBackgroundColor,
        transitionSpeed,
        colorButtonSelected,
        backTextColor,
        backBackgroundColor,
        iconSize,
        iconColor,
        flipStyleSelected,
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
        height,
        topMargin,
        bottomMargin,
        frontTopPadding,
        frontBottomPadding,
        frontLeftPadding,
        frontRightPadding,
        backTopPadding,
        backBottomPadding,
        backLeftPadding,
        backRightPadding,
        topMarginMobile,
        bottomMarginMobile,
        frontTopPaddingMobile,
        frontBottomPaddingMobile,
        frontLeftPaddingMobile,
        frontRightPaddingMobile,
        backTopPaddingMobile,
        backBottomPaddingMobile,
        backLeftPaddingMobile,
        backRightPaddingMobile,
        topMarginTablet,
        bottomMarginTablet,
        frontTopPaddingTablet,
        frontBottomPaddingTablet,
        frontLeftPaddingTablet,
        frontRightPaddingTablet,
        backTopPaddingTablet,
        backBottomPaddingTablet,
        backLeftPaddingTablet,
        backRightPaddingTablet,
        backIconColor,
        backIconSize,
        showFrontIcon,
        showFrontTitle,
        showFrontSubtitle,
        showBackIcon,
        showBackTitle,
        showBackSubtitle,
        showBackButton,
        backgroundType,
        backgroundImage,
        backgroundPosition,
        backgroundAttachment,
        backgroundRepeat,
        backgroundSize,
        colorOpacity,
        backBackgroundImage,
        backBackgroundPosition,
        backBackgroundAttachment,
        backBackgroundRepeat,
        backBackgroundSize,
        backColorOpacity,
        buttonTextColor,
        buttonColor,
        buttonBorderRadius,
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
        buttonopacity,
        buttonHopacity,
        buttonHpadding,
        buttonVpadding,
        blockAlign,
        buttonHTextColor,
        buttonHColor,
        flipBoxGutterGap,
        stack,
        frontTitleFontSize,
        frontTitleFontSizeMobile,
        frontTitleFontSizeTablet,
        frontTitleFontWeight,
        frontTitleLineHeight,
        frontTitleFontFamily,
        frontSubtitleFontFamily,
        frontSubtitleFontSize,
        frontSubtitleFontSizeMobile,
        frontSubtitleFontSizeTablet,
        frontSubtitleFontWeight,
        frontSubtitleLineHeight,
        backTitleFontSize,
        backTitleFontSizeMobile,
        backTitleFontSizeTablet,
        backTitleFontWeight,
        backTitleLineHeight,
        backTitleFontFamily,
        backSubtitleFontFamily,
        backSubtitleFontSize,
        backSubtitleFontSizeMobile,
        backSubtitleFontSizeTablet,
        backSubtitleFontWeight,
        backSubtitleLineHeight,
        backButtonFontSize,
        backButtonFontSizeMobile,
        backButtonFontSizeTablet,
        backButtonFontWeight,
        backButtonLineHeight,
        backButtonFontFamily,
        ctaVpadding,
        ctaVpaddingTablet,
        ctaVpaddingMobile,
        ctaHpadding,
        ctaHpaddingTablet,
        ctaHpaddingMobile,
        ctaBorderStyle,
        ctaBorderWidth,
        ctaBorderRadius,
        ctaHoverColor,
        ctaHoverBorderColor,
        ctaHoverBackColor,
        ctaColor,
        ctaBorderColor,
        ctaBackColor,
        hideWidget,
        hideWidgetTablet,
        hideWidgetMobile,
        z_index,
        z_indexMobile,
        z_indexTablet,
        frontIsPaddingControlConnected,
        backIsPaddingControlConnected,
        blockTopMargin,
        blockTopMarginMobile,
        blockTopMarginTablet,
        blockBottomMargin,
        blockBottomMarginMobile,
        blockBottomMarginTablet,
        blockLeftMargin,
        blockLeftMarginMobile,
        blockLeftMarginTablet,
        blockRightMargin,
        blockRightMarginMobile,
        blockRightMarginTablet,
        blockIsMarginControlConnected,
        blockNewSpacingValuesUpdated,
        imagePositionTab,
        backgroundSizeTablet,
        backgroundSizeMobile,
        backgroundPositionMobile,
        backgroundPositionTablet,
        imageSizeTab,
        backImagePositionTab,
        backBackgroundSizeTablet,
        backBackgroundSizeMobile,
        backBackgroundPositionMobile,
        backBackgroundPositionTablet,
        backImageSizeTab,
        blockIsTypographyColorValueUpdated,
        frontTitleTypographyColor,
        backTitleTypographyColor,
      },
      setAttributes,
    } = this.props;
    var data_copy = [...flipboxArray];

    const backFlipPaddingResetValues = {
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
    const frontFlipPaddingResetValues = {
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
    const blockMarginResetValues = {
      marginTop: 5,
      marginRight: 5,
      marginBottom: 5,
      marginLeft: 5,
      marginTabletTop: 5,
      marginTabletRight: 5,
      marginTabletBottom: 5,
      marginTabletLeft: 5,
      marginMobileTop: 5,
      marginMobileRight: 5,
      marginMobileBottom: 5,
      marginMobileLeft: 5,
    }

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
    let back_background_image_url = backBackgroundImage || '';
    
    // To populate new control values with existing padding margin control values for backward compatibility.
    if (!blockNewSpacingValuesUpdated) {
      this.props.setAttributes(
        {
          blockTopMargin:          topMargin !== undefined ? topMargin : blockTopMargin,
          blockBottomMargin:       bottomMargin !== undefined ? bottomMargin : blockBottomMargin,
          blockTopMarginTablet:    topMarginTablet !== undefined ? topMarginTablet : blockTopMarginTablet,
          blockBottomMarginTablet: bottomMarginTablet !== undefined ? bottomMarginTablet : blockBottomMarginTablet,
          blockTopMarginMobile:    topMarginMobile !== undefined ? topMarginMobile : blockTopMarginMobile,
          blockBottomMarginMobile: bottomMarginMobile !== undefined ? bottomMarginMobile : blockBottomMarginMobile,
        }
      )
    }
    this.props.setAttributes({blockNewSpacingValuesUpdated: true});

    // Update color value
    const onChangeFrontTextColor = (value) =>
      setAttributes({ frontTextColor: value });
    const onChangeFrontBackgroundColor = (value) =>
      setAttributes({ frontBackgroundColor: value });
    const onChangeBackTextColor = (value) =>
      setAttributes({ backTextColor: value });
    const onChangeBackBackgroundColor = (value) =>
      setAttributes({ backBackgroundColor: value });

    let frontColorButtonClass = "is-primary";
    let backColorButtonClass = "is-default";
    let isFrontSelected;
    let isBackSelected;
    if (colorButtonSelected == "back_selected") {
      frontColorButtonClass = "is-default";
      backColorButtonClass = "is-primary";
      isBackSelected = true;
    } else {
      frontColorButtonClass = "is-primary";
      backColorButtonClass = "is-default";
      isFrontSelected = true;
    }

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

    const frontControls = (index) => {
      return (
        <PanelBody
          key={index}
          title={
            __("Flip Box ", "responsive-block-editor-addons") +
            " " +
            (index + 1) +
            " " +
            __("Settings", "responsive-block-editor-addons")
          }
          initialOpen={false}
          className={"rbea-repeater-panel"}
        >
          <TextControl
            label={__("Title", "responsive-block-editor-addons")}
            type="text"
            value={flipboxArray[index]["title"]}
            onChange={(value) => {
              var new_content = {
                title: value,
                subtitle: data_copy[index]["subtitle"],
                back_title: data_copy[index]["back_title"],
                back_subtitle: data_copy[index]["back_subtitle"],
                icon: data_copy[index]["icon"],
                back_icon: data_copy[index]["back_icon"],
                back_button: data_copy[index]["back_button"],
                back_buttonURL: data_copy[index]["back_buttonURL"],
              };
              data_copy[index] = new_content;
              setAttributes({ flipboxArray: data_copy });
            }}
          />
          <TextControl
            label={__("Content", "responsive-block-editor-addons")}
            type="text"
            value={flipboxArray[index]["subtitle"]}
            onChange={(value) => {
              var new_content = {
                title: data_copy[index]["title"],
                subtitle: value,
                back_title: data_copy[index]["back_title"],
                back_subtitle: data_copy[index]["back_subtitle"],
                icon: data_copy[index]["icon"],
                back_icon: data_copy[index]["back_icon"],
                back_button: data_copy[index]["back_button"],
                back_buttonURL: data_copy[index]["back_buttonURL"],
              };
              data_copy[index] = new_content;
              setAttributes({ flipboxArray: data_copy });
            }}
          />
        </PanelBody>
      );
    };
    const frontIconControls = (index) => {
      const icons = svg_icons;
      return (
        <PanelBody
          key={index}
          title={
            __("Flip Box ", "responsive-block-editor-addons") +
            " " +
            (index + 1)
          }
          initialOpen={false}
          className={"rbea-repeater-panel"}
        >
          <p>
            {__("Select Icon", "responsive-block-editor-addons")}
            <span className="components-base-control__label"></span>
          </p>
          <FontIconPicker
            icons={svg_icons}
            renderFunc={renderSVG}
            theme="default"
            value={flipboxArray[index]["icon"]}
            onChange={(value) => {
              var new_content = {
                icon: value,
                back_icon: data_copy[index]["back_icon"],
                back_button: data_copy[index]["back_button"],
                back_buttonURL: data_copy[index]["back_buttonURL"],
                title: data_copy[index]["title"],
                subtitle: data_copy[index]["subtitle"],
                back_title: data_copy[index]["back_title"],
                back_subtitle: data_copy[index]["back_subtitle"],
              };
              data_copy[index] = new_content;
              setAttributes({ flipboxArray: data_copy });
            }}
            isMulti={false}
            noSelectedPlaceholder={__("Select Icon", "responsive-block-editor-addons")}
          />
        </PanelBody>
      );
    };
    const backIconControls = (index) => {
      const icons = svg_icons;

      return (
        <PanelBody
          key={index}
          title={
            __("Flip Box ", "responsive-block-editor-addons") +
            " " +
            (index + 1)
          }
          initialOpen={false}
          className={"rbea-repeater-panel"}
        >
          <p>
            {__("Select Icon", "responsive-block-editor-addons")}
            <span className="components-base-control__label"></span>
          </p>
          <FontIconPicker
            icons={svg_icons}
            renderFunc={renderSVG}
            theme="default"
            value={flipboxArray[index]["back_icon"]}
            onChange={(value) => {
              var new_content = {
                icon: data_copy[index]["icon"],
                back_icon: value,
                back_button: data_copy[index]["back_button"],
                back_buttonURL: data_copy[index]["back_buttonURL"],
                title: data_copy[index]["title"],
                subtitle: data_copy[index]["subtitle"],
                back_title: data_copy[index]["back_title"],
                back_subtitle: data_copy[index]["back_subtitle"],
              };
              data_copy[index] = new_content;
              setAttributes({ flipboxArray: data_copy });
            }}
            isMulti={false}
            noSelectedPlaceholder={__("Select Icon", "responsive-block-editor-addons")}
          />
        </PanelBody>
      );
    };

    const backControls = (index) => {
      return (
        <PanelBody
          key={index}
          title={
            __("Flip Box ", "responsive-block-editor-addons") +
            " " +
            (index + 1) +
            " " +
            __("Settings", "responsive-block-editor-addons")
          }
          initialOpen={false}
          className={"rbea-repeater-panel"}
        >
          <TextControl
            label={__("Title", "responsive-block-editor-addons")}
            type="text"
            value={flipboxArray[index]["back_title"]}
            onChange={(value) => {
              var new_content = {
                title: data_copy[index]["title"],
                subtitle: data_copy[index]["subtitle"],
                back_title: value,
                back_subtitle: data_copy[index]["back_subtitle"],
                icon: data_copy[index]["icon"],
                back_icon: data_copy[index]["back_icon"],
                back_button: data_copy[index]["back_button"],
                back_buttonURL: data_copy[index]["back_buttonURL"],
              };
              data_copy[index] = new_content;
              setAttributes({ flipboxArray: data_copy });
            }}
          />
          <TextControl
            label={__("Content", "responsive-block-editor-addons")}
            type="text"
            value={flipboxArray[index]["back_subtitle"]}
            onChange={(value) => {
              var new_content = {
                title: data_copy[index]["title"],
                subtitle: data_copy[index]["subtitle"],
                back_title: data_copy[index]["back_title"],
                back_subtitle: value,
                icon: data_copy[index]["icon"],
                back_icon: data_copy[index]["back_icon"],
                back_button: data_copy[index]["back_button"],
                back_buttonURL: data_copy[index]["back_buttonURL"],
              };
              data_copy[index] = new_content;
              setAttributes({ flipboxArray: data_copy });
            }}
          />
        </PanelBody>
      );
    };

    // backward compatibility for typography color control
    if (!blockIsTypographyColorValueUpdated) {
      this.props.setAttributes(
        {
          frontTitleTypographyColor:          frontTextColor !== undefined ? frontTextColor : frontTitleTypographyColor,
          backTitleTypographyColor:          backTextColor !== undefined ? backTextColor : backTitleTypographyColor,
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
                label={__(
                  "Number of Flip Boxes",
                  "responsive-block-editor-addons"
                )}
                value={count}
                onChange={(newCount) => {
                  let cloneTest_block = [...flipboxArray];
                  if (cloneTest_block.length < newCount) {
                    const incAmount = Math.abs(
                      newCount - cloneTest_block.length
                    );

                    {
                      times(incAmount, (n) => {
                        cloneTest_block.push({
                          title: "Front Title " + newCount,
                          back_title: "Back Title " + newCount,
                          subtitle: "Front Subtitle " + newCount,
                          back_subtitle: "Back Subtitle " + newCount,
                          back_button: "Button " + newCount,
                          icon: defaultIcons[newCount-1],
                          back_icon: defaultBackIcons[newCount-1],
                        });
                      });
                    }
                    setAttributes({ flipboxArray: cloneTest_block });
                  } else {
                    const incAmount = Math.abs(
                      newCount - cloneTest_block.length
                    );
                    let data_new = cloneTest_block;
                    for (var i = 0; i < incAmount; i++) {
                      data_new.pop();
                    }
                    setAttributes({ flipboxArray: data_new });
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
                  "Note: Choose on what breakpoint the flipboxes will stack.",
                  "responsive-block-editor-addons"
                )}
                defaultValue={"none"}
                allowReset={true}
								hasIcon={true}
								optionHasBorder={true}
              />
              <RbeaRangeControl
                label={__("Gutter Gap", "responsive-block-editor-addons")}
                value={flipBoxGutterGap}
                onChange={(value) =>
                  setAttributes({
                    flipBoxGutterGap: value !== undefined ? value : 10,
                  })
                }
                min={0}
                max={100}
                allowReset
              />
              <RbeaRangeControl
                label={__("Height", "responsive-block-editor-addons")}
                value={height}
                onChange={(value) =>
                  setAttributes({ height: value !== undefined ? value : 420 })
                }
                min={300}
                max={1000}
                allowReset
              />
              <RbeaTabRadioControl
                label={__("Flip Style", "responsive-block-editor-addons")}
                options={flipStyleOptions}
                value={flipStyleSelected}
                onChange={(value) =>
                  this.props.setAttributes({
                    flipStyleSelected: value,
                  })
                }
                defaultValue={"LTR"}
              />

              <RbeaRangeControl
                label={__(
                  "Transition Speed (ms)",
                  "responsive-block-editor-addons"
                )}
                value={transitionSpeed}
                onChange={(value) =>
                  setAttributes({
                    transitionSpeed: value !== undefined ? value : 8,
                  })
                }
                min={0}
                max={20}
                allowReset
              />
            </PanelBody>
            
              <PanelBody>
                <RbeaTabRadioControl
                  label={__("Layout", "responsive-block-editor-addons")}
                  value={colorButtonSelected}
                  options={[
                    {
                      value: "front_selected",
                      label: __("Front", "responsive-block-editor-addons"),
                    },
                    {
                      value: "back_selected",
                      label: __("Back", "responsive-block-editor-addons"),
                    },
                  ]}
                  onChange={(value) => setAttributes({ colorButtonSelected: value })}
                />
              </PanelBody>
            <PanelBody initialOpen={true}>
              {isFrontSelected && (
                <Fragment>
                  <ToggleControl
                    label={__("Front Icon", "responsive-block-editor-addons")}
                    checked={showFrontIcon}
                    onChange={() =>
                      this.props.setAttributes({
                        showFrontIcon: !showFrontIcon,
                      })
                    }
                  />
                  <ToggleControl
                    label={__("Front Title", "responsive-block-editor-addons")}
                    checked={showFrontTitle}
                    onChange={() =>
                      this.props.setAttributes({
                        showFrontTitle: !showFrontTitle,
                      })
                    }
                  />
                  <ToggleControl
                    label={__(
                      "Front Subtitle",
                      "responsive-block-editor-addons"
                    )}
                    checked={showFrontSubtitle}
                    onChange={() =>
                      this.props.setAttributes({
                        showFrontSubtitle: !showFrontSubtitle,
                      })
                    }
                  />
                </Fragment>
              )}
              {isBackSelected && (
                <Fragment>
                  <ToggleControl
                    label={__("Back Icon", "responsive-block-editor-addons")}
                    checked={showBackIcon}
                    onChange={() =>
                      this.props.setAttributes({
                        showBackIcon: !showBackIcon,
                      })
                    }
                  />
                  <ToggleControl
                    label={__("Back Title", "responsive-block-editor-addons")}
                    checked={showBackTitle}
                    onChange={() =>
                      this.props.setAttributes({
                        showBackTitle: !showBackTitle,
                      })
                    }
                  />
                  <ToggleControl
                    label={__(
                      "Back Subtitle",
                      "responsive-block-editor-addons"
                    )}
                    checked={showBackSubtitle}
                    onChange={() =>
                      this.props.setAttributes({
                        showBackSubtitle: !showBackSubtitle,
                      })
                    }
                  />
                  <ToggleControl
                    label={__("Back Button", "responsive-block-editor-addons")}
                    checked={showBackButton}
                    onChange={() =>
                      this.props.setAttributes({
                        showBackButton: !showBackButton,
                      })
                    }
                  />
                </Fragment>
              )}
            </PanelBody>
            {isFrontSelected && (
              <PanelBody
                title={__(
                  "Front Content Settings",
                  "responsive-block-editor-addons"
                )}
                initialOpen={false}
              >
                {times(count, (n) => frontControls(n))}
              </PanelBody>
            )}
            {isBackSelected && (
              <PanelBody
                title={__(
                  "Back Content Settings",
                  "responsive-block-editor-addons"
                )}
                initialOpen={false}
              >
                {times(count, (n) => backControls(n))}
              </PanelBody>
            )}
            {isFrontSelected && (
              <PanelBody
                title={__(
                  "Front Icon Settings",
                  "responsive-block-editor-addons"
                )}
                initialOpen={false}
              >
                {times(count, (n) => frontIconControls(n))}

                <RbeaRangeControl
                  label={__("Icon Size", "responsive-block-editor-addons")}
                  value={iconSize}
                  onChange={(value) =>
                    setAttributes({
                      iconSize: value !== undefined ? value : 50,
                    })
                  }
                  min={20}
                  max={200}
                  allowReset
                />
                <RbeaColorControl
                  label = {__("Icon Color", "responsive-block-editor-addons")}
                  colorValue={iconColor}
                  onChange={(colorValue) =>
                    setAttributes({ iconColor: colorValue })
                  }
                  resetColor={() => setAttributes({ iconColor: "" })}
                />
              </PanelBody>
            )}
            {isBackSelected && (
              <PanelBody
                title={__(
                  "Back Icon Settings",
                  "responsive-block-editor-addons"
                )}
                initialOpen={false}
              >
                {times(count, (n) => backIconControls(n))}

                <RbeaRangeControl
                  label={__("Icon Size", "responsive-block-editor-addons")}
                  value={backIconSize}
                  onChange={(value) =>
                    setAttributes({
                      backIconSize: value !== undefined ? value : 50,
                    })
                  }
                  min={20}
                  max={200}
                  allowReset
                />
                <RbeaColorControl
                  label = {__("Icon Color", "responsive-block-editor-addons")}
                  colorValue={backIconColor}
                  onChange={(colorValue) =>
                    setAttributes({ backIconColor: colorValue })
                  }
                  resetColor={() => setAttributes({ backIconColor: "" })}
                />
              </PanelBody>
            )}
            {isBackSelected && (
              <PanelBody
                title={__(
                  "Back Button Settings",
                  "responsive-block-editor-addons"
                )}
                initialOpen={false}
              >
                <ButtonSettingsControl
                   {...this.props}
                   showMarginControls={false}
                   showBackColorOpacity={true}
                   showGradientHover={true}
                   showTextOpacity={false}
                 />
              </PanelBody>
            )}
            <PanelBody
              title={__("Background Image", "responsive-block-editor-addons")}
              initialOpen={false}
            >
              {isFrontSelected && (
                <Fragment>
                  <RbeaMediaUploadControl
                    label={__("Front Background Image", "responsive-block-editor-addons")}
                    value={{
                        url: backgroundImage,
                    }}
                    onChange={(newValue) => { 
                        setAttributes({
                          backgroundImage: newValue.url,
                        });
                    }}
                    mediaType={'image'}
                  />
                  {backgroundImage && (
                      <RbeaRangeControl
                      label={__("Opacity", "responsive-block-editor-addons")}
                      value={colorOpacity}
                      onChange={(value) =>
                        setAttributes({
                          colorOpacity: value !== undefined ? value : 30,
                        })
                      }
                      min={0}
                      max={100}
                      allowReset
                    />
                  )}
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
                    </Fragment>
                  )}
                </Fragment>
              )}
              {isBackSelected && (
                <Fragment>
                  <RbeaMediaUploadControl
                    label={__("Back Background Image", "responsive-block-editor-addons")}
                    value={{
                        url: backBackgroundImage,
                    }}
                    onChange={(newValue) => { 
                        setAttributes({
                          backBackgroundImage: newValue.url,
                        });
                    }}
                    mediaType={'image'}
                  />
                  {backBackgroundImage && (
                    <RbeaRangeControl
                      label={__("Opacity", "responsive-block-editor-addons")}
                      value={backColorOpacity}
                      onChange={(value) =>
                        setAttributes({
                          backColorOpacity: value !== undefined ? value : 30,
                        })
                      }
                      min={0}
                      max={100}
                      allowReset
                    />
                  )}
                  {backBackgroundImage && (
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
                            setAttributes({ backImagePositionTab: "mobile" });
                          } else if ("tablet" === tab.name) {
                            setAttributes({ backImagePositionTab: "tablet" });
                          } else {
                            setAttributes({ backImagePositionTab: "desktop" });
                          }
                        }}
                      </TabPanel>
                      </div>
                        <Fragment>
                          <div className = "rbea-background-image-positon-control"
                          style={{
                            backgroundImage: `url(${back_background_image_url})`,
                            backgroundSize: 'cover',
                            backgroundPosition:  'center',
                          }}>
                          { backImagePositionTab === "desktop" && 
                              <RadioControl 
                                className = "rbea-background-image-positon-control-options"
                                selected={backBackgroundPosition}
                                options={imagePositionOptions}
                                onChange={(value) =>
                                  setAttributes({ backBackgroundPosition: value })
                                }
                              />
                          }
                          {backImagePositionTab === "tablet" &&
                             <RadioControl 
                                className = "rbea-background-image-positon-control-options"
                                selected={backBackgroundPositionTablet}
                                options={imagePositionOptions}
                                onChange={(value) =>
                                  setAttributes({ backBackgroundPositionTablet: value })
                                }
                            />
                          }
                          {backImagePositionTab === "mobile" && 
                            <RadioControl 
                                className = "rbea-background-image-positon-control-options"
                                selected={backBackgroundPositionMobile}
                                options={imagePositionOptions}
                                onChange={(value) =>
                                  setAttributes({ backBackgroundPositionMobile: value })
                                }
                            />
                          }
                          </div>
                        </Fragment>
                      <RbeaTabRadioControl
                        label={__("Attachment", "responsive-block-editor-addons")}
                        value={backBackgroundAttachment}
                        onChange={(value) =>
                          setAttributes({ backBackgroundAttachment: value })
                        }
                        options={[
                          { value: "scroll", label: __("Scroll", "responsive-block-editor-addons") },
                          { value: "fixed", label: __("Fixed", "responsive-block-editor-addons") },
                        ]}
                        defaultValue={"fixed"}
                      />
                      <div className = "rbea-repeat-selector-wrapper">
                      <RbeaTabRadioControl
                        label={__("Repeat", "responsive-block-editor-addons")}
                        value={backBackgroundRepeat}
                        onChange={(value) =>
                          setAttributes({ backBackgroundRepeat: value })
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
                            setAttributes({ backImageSizeTab: "mobile" });
                          } else if ("tablet" === tab.name) {
                            setAttributes({ backImageSizeTab: "tablet" });
                          } else {
                            setAttributes({ backImageSizeTab: "desktop" });
                          }
                        }}
                      </TabPanel>
                      </div>
                      {backImageSizeTab === "desktop" && (
                        <>
                        <RbeaTabRadioControl
                          label={__("", "responsive-block-editor-addons")}
                          value={backBackgroundSize}
                          onChange={(value) =>
                            setAttributes({ backBackgroundSize: value })
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
                      {backImageSizeTab === "tablet" && (
                        <RbeaTabRadioControl
                        label={__("", "responsive-block-editor-addons")}
                        value={backBackgroundSizeTablet}
                        onChange={(value) =>
                          setAttributes({ backBackgroundSizeTablet: value })
                        }
                        options={[
                          { value: "auto", label: __("Auto", "responsive-block-editor-addons") },
                          { value: "cover", label: __("Cover", "responsive-block-editor-addons") },
                          { value: "contain", label: __("Contain", "responsive-block-editor-addons") },
                        ]}
                        defaultValue={"cover"}
                        />
                      )}
                      {backImageSizeTab === "mobile" && (
                        <RbeaTabRadioControl
                          label={__("", "responsive-block-editor-addons")}
                          value={backBackgroundSizeMobile}
                          onChange={(value) =>
                            setAttributes({ backBackgroundSizeMobile: value })
                          }
                          options={[
                            { value: "auto", label: __("Auto", "responsive-block-editor-addons") },
                            { value: "cover", label: __("Cover", "responsive-block-editor-addons") },
                            { value: "contain", label: __("Contain", "responsive-block-editor-addons") },
                          ]}
                          defaultValue={"cover"}
                        />
                      )}
                    </Fragment>
                  )}
                </Fragment>
              )}
            </PanelBody>
          </InspectorTab>
          <InspectorTab key={"style"}>
            {frontTitleFontFamily && loadGoogleFont(frontTitleFontFamily)}
            {frontSubtitleFontFamily && loadGoogleFont(frontSubtitleFontFamily)}
            {backTitleFontFamily && loadGoogleFont(backTitleFontFamily)}
            {backSubtitleFontFamily && loadGoogleFont(backSubtitleFontFamily)}
            {backButtonFontFamily && loadGoogleFont(backButtonFontFamily)}
            {isFrontSelected && (
              <PanelBody
                title={__(
                  "Front Color",
                  "responsive-block-editor-addons"
                )}
                initialOpen={false}
              >
                 <RbeaColorControl
									label = {__("Background Color", "responsive-block-editor-addons")}
									colorValue={frontBackgroundColor}
									onChange={(colorValue) =>
										setAttributes({ frontBackgroundColor: colorValue })
									}
									resetColor={() => setAttributes({ frontBackgroundColor: "" })}
								/>
                <RbeaRangeControl
                  label={__("Opacity", "responsive-block-editor-addons")}
                  value={colorOpacity}
                  onChange={(value) =>
                    setAttributes({
                      colorOpacity: value !== undefined ? value : 100,
                    })
                  }
                  min={0}
                  max={100}
                  allowReset
                />
              </PanelBody>
            )}
            {
              isFrontSelected && (
                <Fragment>
                  {
                    showFrontTitle && (
                      <TypographyHelperControl
                        title={__("Front Title Typography", "responsive-block-editor-addons")}
                        attrNameTemplate="frontTitle%s"
                        values = {{family: frontTitleFontFamily, size: frontTitleFontSize, sizeMobile: frontTitleFontSizeMobile, sizeTablet: frontTitleFontSizeTablet, weight: frontTitleFontWeight, height: frontTitleLineHeight, color: frontTitleTypographyColor,}}
                        showLetterSpacing = { false }
                        showTextTransform = { false }
                        showColorControl={true}
                        setAttributes={ setAttributes }
                        {...this.props}
                      />
                    )
                  }
                  {
                    showFrontSubtitle && (
                      <TypographyHelperControl
                        title={__("Front Subtitle Typography", "responsive-block-editor-addons")}
                        attrNameTemplate="frontSubtitle%s"
                        values = {{family: frontSubtitleFontFamily, size: frontSubtitleFontSize, sizeMobile: frontSubtitleFontSizeMobile, sizeTablet: frontSubtitleFontSizeTablet, weight: frontSubtitleFontWeight, height: frontSubtitleLineHeight,}}
                        showLetterSpacing = { false }
                        showTextTransform = { false }
                        setAttributes={ setAttributes }
                        {...this.props}
                      />
                    )
                  }
                </Fragment>
              )
            }
            {isBackSelected && (
              <PanelBody
                title={__(
                  "Back Color Settings",
                  "responsive-block-editor-addons"
                )}
                initialOpen={false}
              >
                 <RbeaColorControl
									label = {__("Background Color", "responsive-block-editor-addons")}
									colorValue={backBackgroundColor}
									onChange={(colorValue) =>
										setAttributes({ backBackgroundColor: colorValue })
									}
									resetColor={() => setAttributes({ backBackgroundColor: "" })}
								/>
                <RbeaRangeControl
                  label={__("Opacity", "responsive-block-editor-addons")}
                  value={backColorOpacity}
                  onChange={(value) =>
                    setAttributes({
                      backColorOpacity: value !== undefined ? value : 100,
                    })
                  }
                  min={0}
                  max={100}
                  allowReset
                />
              </PanelBody>
            )}
            {
              isBackSelected && (
                <Fragment>
                  {
                    showBackTitle && (
                      <TypographyHelperControl
                        title={__("Back Title Typography", "responsive-block-editor-addons")}
                        attrNameTemplate="backTitle%s"
                        values = {{family: backTitleFontFamily, size: backTitleFontSize, sizeMobile: backTitleFontSizeMobile, sizeTablet: backTitleFontSizeTablet, weight: backTitleFontWeight, height: backTitleLineHeight, color: backTitleTypographyColor,}}
                        showLetterSpacing = { false }
                        showColorControl={true}
                        showTextTransform = { false }
                        setAttributes={ setAttributes }
                        {...this.props}
                      />
                    )
                  }
                  {
                    showBackSubtitle && (
                      <TypographyHelperControl
                        title={__("Back Subtitle Typography", "responsive-block-editor-addons")}
                        attrNameTemplate="backSubtitle%s"
                        values = {{family: backSubtitleFontFamily, size: backSubtitleFontSize, sizeMobile: backSubtitleFontSizeMobile, sizeTablet: backSubtitleFontSizeTablet, weight: backSubtitleFontWeight, height: backSubtitleLineHeight,}}
                        showLetterSpacing = { false }
                        showTextTransform = { false }
                        setAttributes={ setAttributes }
                        {...this.props}
                      />
                    )
                  }
                  {
                    showBackButton && (
                      <TypographyHelperControl
                        title={__("Back Button Typography", "responsive-block-editor-addons")}
                        attrNameTemplate="backButton%s"
                        values = {{family: backButtonFontFamily, size: backButtonFontSize, sizeMobile: backButtonFontSizeMobile, sizeTablet: backButtonFontSizeTablet, weight: backButtonFontWeight, height: backButtonLineHeight}}
                        showLetterSpacing = { false }
                        showTextTransform = { false }
                        setAttributes={ setAttributes }
                        {...this.props}
                      />
                    )
                  }
                </Fragment>
              )
            }
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
                  boxShadowBlur={{ value: boxShadowBlur, label: __("Blur", "responsive-block-editor-addons") }}
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
                <ResponsiveNewMarginControl
                  attrNameTemplate="block%s"
                  resetValues={blockMarginResetValues}
                  {...this.props}
                />
                <div className="responsive-block-editor-addons-spacing-inspect-tabs-control-container">
                  <TabPanel
                    className="responsive-block-editor-addons-inspect-tabs 
                    responsive-block-editor-addons-inspect-tabs-col-2  
                    responsive-block-editor-addons-color-inspect-tabs"
                    activeClass="active-tab"
                    initialTabName="front" // Set the default active tab here
                    tabs={[
                      {
                        name: "empty-1",
                        title: __("", "responsive-block-editor-addons"),
                        className: "responsive-block-editor-addons-empty-tab",
                      },
                      {
                        name: "front",
                        title: __("Front", "responsive-block-editor-addons"),
                        className: "responsive-block-editor-addons-normal-tab",
                      },
                      {
                        name: "empty-2",
                        title: __("", "responsive-block-editor-addons"),
                        className: "responsive-block-editor-addons-empty-tab",
                      },
                      {
                        name: "back",
                        title: __("Back", "responsive-block-editor-addons"),
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
                      let tabout;
                      if ("back" === tabName.name) {
                        tabout = (
                          <Fragment>
                            <div className="responsive-block-editor-addons-flipbox-inspector-tabs">
                              <ResponsiveNewPaddingControl
                                attrNameTemplate="back%s"
                                resetValues={backFlipPaddingResetValues}
                                {...this.props}
                              />
                            </div>
                          </Fragment>
                        );
                      } else if( "front" === tabName.name ) {
                        tabout = (
                          <Fragment>
                            <div className="responsive-block-editor-addons-flipbox-inspector-tabs">
                              <ResponsiveNewPaddingControl
                                attrNameTemplate="front%s"
                                resetValues={frontFlipPaddingResetValues}
                                {...this.props}
                              />
                            </div>
                          </Fragment>
                        );
                      } else {
                        tabout = emptyColorControl;
                      }
                      return <div>{tabout}</div>;
                    }}
                  </TabPanel>
                </div>
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
