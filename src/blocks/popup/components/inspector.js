/**
 * Inspector Controls
 */
import ResponsiveSpacingControl from "../../../settings-components/ResponsiveSpacingSettings";
import BlockBorderHelperControl from "../../../settings-components/BlockBorderSettings";
import TypographyHelperControl from "../../../settings-components/TypographySettings";
import { __experimentalAlignmentMatrixControl as AlignmentMatrixControl } from '@wordpress/components';
import renderSVG from "../../../renderIcon";
import FontIconPicker from "@fonticonpicker/react-fonticonpicker";
import ResponsiveBlocksIcon from "../../../ResponsiveBlocksIcon.json";
import { __experimentalText as Text } from '@wordpress/components';
import presets from "./button-presets";
import ResponsiveNewPaddingControl from "../../../settings-components/ResponsiveNewSpacingSettings/ResponsiveNewPaddingControl/index";
import ResponsiveNewMarginControl from "../../../settings-components/ResponsiveNewSpacingSettings/ResponsiveNewMarginControl/index";
import RbeaRangeControl from "../../../utils/components/rbea-range-control";
import RbeaColorControl from "../../../utils/components/rbea-color-control";
import RbeaTabRadioControl from "../../../utils/components/rbea-tab-radio-control";
import RbeaBlockBorderHelperControl from "../../../settings-components/RbeaBlockBorderSettings";
import RbeaBorderRadiusControl from "../../../settings-components/RbeaBorderRadiusControl";
import RbeaMediaUploadControl from "../../../utils/components/rbea-media-upload-control";

// Setup the block
const { __ } = wp.i18n;
const { Component, Fragment } = wp.element;
import InspectorTab from "../../../components/InspectorTab";
import InspectorTabs from "../../../components/InspectorTabs";

// Import block components
const { InspectorControls, AlignmentToolbar, MediaUpload } = wp.blockEditor

// Import Inspector components
const {
  PanelBody,
  RangeControl,
  SelectControl,
  ToggleControl,
  TabPanel,
  Dashicon,
  ColorPalette,
  Button,
  ButtonGroup,
  GradientPicker,
  TextControl,
  BaseControl
} = wp.components;

const colors = [
  { name: 'black', color: '#000' },
  { name: 'red', color: '#f00' },
  { name: 'white', color: '#fff' },
  { name: 'blue', color: '#00f' },
  { name: 'yellow', color: '#ffff00' },
  { name: 'orange', color: '#ffa500' },
];

let svg_icons = Object.keys(ResponsiveBlocksIcon);

/**
 * Create an Inspector Controls wrapper Component
 */
export default class Inspector extends Component {
  constructor(props) {
    super(...arguments);
    this.onSelectImageTrigger = this.onSelectImageTrigger.bind(this);
  }

  onSelectImageTrigger(media) {
    const { setAttributes } = this.props;
    const { popupImageTrigger } = this.props.attributes;

    if (!media || !media.url) {
      setAttributes({ popupImageTrigger: null });
      return;
    }

    if (!media.type || "image" != media.type) {
      return;
    }

    setAttributes({ popupImageTrigger: media.url });
  }

  render() {
    // Setup the attributes
    const {
      attributes: {
        isPopupVariantSelected,
        popupContainerWidth,
        popupContainerWidthTablet,
        popupContainerWidthMobile,
        popupHeightType,
        popupHeightCustom,
        popupHeightCustomTablet,
        popupHeightCustomMobile,
        popupPaddingTop,
        popupPaddingTopTablet,
        popupPaddingTopMobile,
        popupPaddingBottom,
        popupPaddingBottomTablet,
        popupPaddingBottomMobile,
        popupPaddingLeft,
        popupPaddingLeftTablet,
        popupPaddingLeftMobile,
        popupPaddingRight,
        popupPaddingRightTablet,
        popupPaddingRightMobile,
        popupScreenType,
        popupScreenTypeMobile,
        popupScreenTypeTablet,
        popupTrigger,
        popupTriggerDelay,
        popupToggleCloseBtn,
        popupToggleCloseBtnPosition,
        popupBgColor,
        popupBgType,
        popupGradient,
        popupCloseBtnColor,
        popupOverlayColor,
        popupOverlayOpacity,
        popupBlockBorderRadius, 
        popupBlockTopRadius,
        popupBlockRightRadius,
        popupBlockBottomRadius,
        popupBlockLeftRadius,
        popupBlockTopRadiusTablet,
        popupBlockRightRadiusTablet,
        popupBlockBottomRadiusTablet,
        popupBlockLeftRadiusTablet,
        popupBlockTopRadiusMobile,
        popupBlockRightRadiusMobile,
        popupBlockBottomRadiusMobile,
        popupBlockLeftRadiusMobile,
        popupBlockIsRadiusControlConnected,
        popupBlockIsRadiusValueUpdated,
        popupBlockBorderStyle,
        popupBlockBorderWidth,
        popupBlockBorderColor,
        popupTriggerType,
        popupTriggerAlign,
        popupTriggerAlignTablet,
        popupTriggerAlignMobile,
        popupButtonPreset,
        popupIconTrigger,
        popupImageTrigger,
        popupTextTrigger,
        popupButtonHoverState,
        popupButtonColor,
        popupButtonBGColor,
        popupButtonHoverColor,
        popupButtonBGHoverColor,
        popupButtonBGState,
        popupButtonBGGradient,
        popupButtonBGHoverState,
        popupButtonHoverBGGradient,
        popupButtonTypographyFontFamily,
        popupButtonTypographyFontSize,
        popupButtonTypographyFontSizeMobile,
        popupButtonTypographyFontSizeTablet,
        popupButtonTypographyFontWeight,
        popupButtonTypographyLineHeight,
        popupButtonTypographyLetterSpacing,
        popupButtonBorderStyle,
        popupButtonBorderWidth,
        popupButtonBorderRadius,
        popupButtonTopRadius,
        popupButtonRightRadius,
        popupButtonBottomRadius,
        popupButtonLeftRadius,
        popupButtonTopRadiusTablet,
        popupButtonRightRadiusTablet,
        popupButtonBottomRadiusTablet,
        popupButtonLeftRadiusTablet,
        popupButtonTopRadiusMobile,
        popupButtonRightRadiusMobile,
        popupButtonBottomRadiusMobile,
        popupButtonLeftRadiusMobile,
        popupButtonIsRadiusControlConnected,
        popupButtonIsRadiusValueUpdated,
        popupButtonBorderColor,
        popupButtonBorderHoverColor,
        popupTextColor,
        popupTextTypographyFontFamily,
        popupTextTypographyFontSize,
        popupTextTypographyFontSizeMobile,
        popupTextTypographyFontSizeTablet,
        popupTextTypographyFontWeight,
        popupTextTypographyLineHeight,
        popupTextTypographyLetterSpacing,
        popupIconTriggerSize,
        popupIconTriggerColor,
        popupImageTriggerWidth,
        popupImageTriggerWidthTablet,
        popupImageTriggerWidthMobile,
        popupImageTriggerBorderRadius,
        popupImageTriggerTopRadius,
        popupImageTriggerRightRadius,
        popupImageTriggerBottomRadius,
        popupImageTriggerLeftRadius,
        popupImageTriggerTopRadiusTablet,
        popupImageTriggerRightRadiusTablet,
        popupImageTriggerBottomRadiusTablet,
        popupImageTriggerLeftRadiusTablet,
        popupImageTriggerTopRadiusMobile,
        popupImageTriggerRightRadiusMobile,
        popupImageTriggerBottomRadiusMobile,
        popupImageTriggerLeftRadiusMobile,
        popupImageTriggerIsRadiusControlConnected,
        popupImageTriggerIsRadiusValueUpdated,
        popupButtonText,
        popupButtonPaddingTop,
        popupButtonPaddingTopTablet,
        popupButtonPaddingTopMobile,
        popupButtonPaddingBottom,
        popupButtonPaddingBottomTablet,
        popupButtonPaddingBottomMobile,
        popupButtonPaddingLeft,
        popupButtonPaddingLeftTablet,
        popupButtonPaddingLeftMobile,
        popupButtonPaddingRight,
        popupButtonPaddingRightTablet,
        popupButtonPaddingRightMobile,
        hideWidget,
        hideWidgetTablet,
        hideWidgetMobile,
        buttonTopMargin,
        buttonBottomMargin,
        buttonLeftMargin,
        buttonRightMargin,
        buttonTopMarginTablet,
        buttonBottomMarginTablet,
        buttonLeftMarginTablet,
        buttonRightMarginTablet,
        buttonTopMarginMobile,
        buttonBottomMarginMobile,
        buttonLeftMarginMobile,
        buttonRightMarginMobile,
        buttonTopPadding,
        buttonTopPaddingMobile,
        buttonTopPaddingTablet,
        buttonBottomPadding,
        buttonBottomPaddingMobile,
        buttonBottomPaddingTablet,
        buttonLeftPadding,
        buttonLeftPaddingMobile,
        buttonLeftPaddingTablet,
        buttonRightPadding,
        buttonRightPaddingMobile,
        buttonRightPaddingTablet,
        buttonIsMarginControlConnected,
        buttonIsPaddingControlConnected,
        popupTopPadding,
        popupTopPaddingMobile,
        popupTopPaddingTablet,
        popupBottomPadding,
        popupBottomPaddingMobile,
        popupBottomPaddingTablet,
        popupLeftPadding,
        popupLeftPaddingMobile,
        popupLeftPaddingTablet,
        popupRightPadding,
        popupRightPaddingMobile,
        popupRightPaddingTablet,
        popupIsPaddingControlConnected,
        popupTextTypographyTypographyColor,
        blockIsTypographyColorValueUpdated,
      },
      setAttributes,
    } = this.props;

    const buttonMarginResetValues = {
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
		const buttonPaddingResetValues = {
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

    // backward compatibility for border radius control

  if (!popupButtonIsRadiusValueUpdated) {
    this.props.setAttributes(
      {
      popupButtonTopRadius:          popupButtonBorderRadius !== undefined ? popupButtonBorderRadius : popupButtonTopRadius,
      popupButtonBottomRadius:       popupButtonBorderRadius !== undefined ? popupButtonBorderRadius : popupButtonBottomRadius,
      popupButtonLeftRadius:         popupButtonBorderRadius !== undefined ? popupButtonBorderRadius : popupButtonLeftRadius,
      popupButtonRightRadius:        popupButtonBorderRadius !== undefined ? popupButtonBorderRadius : popupButtonRightRadius,
      popupButtonTopRadiusTablet:    popupButtonBorderRadius !== undefined ? popupButtonBorderRadius : popupButtonTopRadiusTablet,
      popupButtonBottomRadiusTablet: popupButtonBorderRadius !== undefined ? popupButtonBorderRadius : popupButtonBottomRadiusTablet,
      popupButtonRightRadiusTablet:  popupButtonBorderRadius !== undefined ? popupButtonBorderRadius : popupButtonRightRadiusTablet,
      popupButtonLeftRadiusTablet:   popupButtonBorderRadius !== undefined ? popupButtonBorderRadius : popupButtonLeftRadiusTablet,
      popupButtonTopRadiusMobile:    popupButtonBorderRadius !== undefined ? popupButtonBorderRadius : popupButtonTopRadiusMobile,
      popupButtonBottomRadiusMobile: popupButtonBorderRadius !== undefined ? popupButtonBorderRadius : popupButtonBottomRadiusMobile,
      popupButtonLeftRadiusMobile:   popupButtonBorderRadius !== undefined ? popupButtonBorderRadius : popupButtonLeftRadiusMobile,
      popupButtonRightRadiusMobile:  popupButtonBorderRadius !== undefined ? popupButtonBorderRadius : popupButtonRightRadiusMobile,
      }
    )
    this.props.setAttributes({popupButtonIsRadiusValueUpdated: true});
  }

  // backward compatibility for border radius control

  if (!popupBlockIsRadiusValueUpdated) {
    this.props.setAttributes(
      {
      popupBlockTopRadius:          popupBlockBorderRadius !== undefined ? popupBlockBorderRadius : popupBlockTopRadius,
      popupBlockBottomRadius:       popupBlockBorderRadius !== undefined ? popupBlockBorderRadius : popupBlockBottomRadius,
      popupBlockLeftRadius:         popupBlockBorderRadius !== undefined ? popupBlockBorderRadius : popupBlockLeftRadius,
      popupBlockRightRadius:        popupBlockBorderRadius !== undefined ? popupBlockBorderRadius : popupBlockRightRadius,
      popupBlockTopRadiusTablet:    popupBlockBorderRadius !== undefined ? popupBlockBorderRadius : popupBlockTopRadiusTablet,
      popupBlockBottomRadiusTablet: popupBlockBorderRadius !== undefined ? popupBlockBorderRadius : popupBlockBottomRadiusTablet,
      popupBlockRightRadiusTablet:  popupBlockBorderRadius !== undefined ? popupBlockBorderRadius : popupBlockRightRadiusTablet,
      popupBlockLeftRadiusTablet:   popupBlockBorderRadius !== undefined ? popupBlockBorderRadius : popupBlockLeftRadiusTablet,
      popupBlockTopRadiusMobile:    popupBlockBorderRadius !== undefined ? popupBlockBorderRadius : popupBlockTopRadiusMobile,
      popupBlockBottomRadiusMobile: popupBlockBorderRadius !== undefined ? popupBlockBorderRadius : popupBlockBottomRadiusMobile,
      popupBlockLeftRadiusMobile:   popupBlockBorderRadius !== undefined ? popupBlockBorderRadius : popupBlockLeftRadiusMobile,
      popupBlockRightRadiusMobile:  popupBlockBorderRadius !== undefined ? popupBlockBorderRadius : popupBlockRightRadiusMobile,
      }
    )
    this.props.setAttributes({popupBlockIsRadiusValueUpdated: true});
    }

    // backward compatibility for Popup Padding control
    if (!popupIsPaddingControlConnected) {
      this.props.setAttributes(
        {
          popupLeftPadding:          popupPaddingLeft !== undefined ? popupPaddingLeft : popupLeftPadding,
          popupLeftPaddingTablet:    popupPaddingLeftTablet !== undefined ? popupPaddingLeftTablet : popupLeftPaddingTablet,
          popupLeftPaddingMobile:    popupPaddingLeftMobile !== undefined ? popupPaddingLeftMobile : popupLeftPaddingMobile,
          popupTopPadding:          popupPaddingTop !== undefined ? popupPaddingTop : popupTopPadding,
          popupTopPaddingTablet:    popupPaddingTopTablet !== undefined ? popupPaddingTopTablet : popupTopPaddingTablet,
          popupTopPaddingMobile:    popupPaddingTopMobile !== undefined ? popupPaddingTopMobile : popupTopPaddingMobile,
          popupBottomPadding:          popupPaddingBottom !== undefined ? popupPaddingBottom : popupBottomPadding,
          popupBottomPaddingTablet:    popupPaddingBottomTablet !== undefined ? popupPaddingBottomTablet : popupBottomPaddingTablet,
          popupBottomPaddingMobile:    popupPaddingBottomMobile !== undefined ? popupPaddingBottomMobile : popupBottomPaddingMobile,
          popupRightPadding:          popupPaddingRight !== undefined ? popupPaddingRight : popupRightPadding,
          popupRightPaddingTablet:    popupPaddingRightTablet !== undefined ? popupPaddingRightTablet : popupRightPaddingTablet,
          popupRightPaddingMobile:    popupPaddingRightMobile !== undefined ? popupPaddingRightMobile : popupRightPaddingMobile,
        }
      )
      this.props.setAttributes({popupIsPaddingControlConnected: true});
    }

    // backward compatibility for ImageTrigger border radius control
    if (!popupImageTriggerIsRadiusValueUpdated) {
      this.props.setAttributes(
        {
          popupImageTriggerTopRadius:          popupImageTriggerBorderRadius !== undefined ? popupImageTriggerBorderRadius : popupImageTriggerTopRadius,
          popupImageTriggerBottomRadius:       popupImageTriggerBorderRadius !== undefined ? popupImageTriggerBorderRadius : popupImageTriggerBottomRadius,
          popupImageTriggerLeftRadius:         popupImageTriggerBorderRadius !== undefined ? popupImageTriggerBorderRadius : popupImageTriggerLeftRadius,
          popupImageTriggerRightRadius:        popupImageTriggerBorderRadius !== undefined ? popupImageTriggerBorderRadius : popupImageTriggerRightRadius,
          popupImageTriggerTopRadiusTablet:    popupImageTriggerBorderRadius !== undefined ? popupImageTriggerBorderRadius : popupImageTriggerTopRadiusTablet,
          popupImageTriggerBottomRadiusTablet: popupImageTriggerBorderRadius !== undefined ? popupImageTriggerBorderRadius : popupImageTriggerBottomRadiusTablet,
          popupImageTriggerRightRadiusTablet:  popupImageTriggerBorderRadius !== undefined ? popupImageTriggerBorderRadius : popupImageTriggerRightRadiusTablet,
          popupImageTriggerLeftRadiusTablet:   popupImageTriggerBorderRadius !== undefined ? popupImageTriggerBorderRadius : popupImageTriggerLeftRadiusTablet,
          popupImageTriggerTopRadiusMobile:    popupImageTriggerBorderRadius !== undefined ? popupImageTriggerBorderRadius : popupImageTriggerTopRadiusMobile,
          popupImageTriggerBottomRadiusMobile: popupImageTriggerBorderRadius !== undefined ? popupImageTriggerBorderRadius : popupImageTriggerBottomRadiusMobile,
          popupImageTriggerLeftRadiusMobile:   popupImageTriggerBorderRadius !== undefined ? popupImageTriggerBorderRadius : popupImageTriggerLeftRadiusMobile,
          popupImageTriggerRightRadiusMobile:  popupImageTriggerBorderRadius !== undefined ? popupImageTriggerBorderRadius : popupImageTriggerRightRadiusMobile,
        }
      )
      this.props.setAttributes({popupImageTriggerIsRadiusValueUpdated: true});
    }

    

    // Border Color Component For Color&Hover Typography Control
		const buttonTypographyColorControl = (
			<RbeaColorControl
        label = {__("Button Text Color", "responsive-block-editor-addons")}
        colorValue={popupButtonColor}
        onChange={(colorValue) => setAttributes({ popupButtonColor: colorValue })}
        resetColor={() => setAttributes({ popupButtonColor: "" })}
      />
		);

		const buttonTypographyColorControlHover = (
			<RbeaColorControl
        label = {__("Button Text Hover Color", "responsive-block-editor-addons")}
        colorValue={popupButtonHoverColor}
        onChange={(colorValue) => setAttributes({ popupButtonHoverColor: colorValue })}
        resetColor={() => setAttributes({ popupButtonHoverColor: "" })}
      />
		);

    const emptyColorControl = (
			<div className="responsive-block-editor-addons-empty-color-control"></div>
		);

    // backward compatibility for typography color control
    if (!blockIsTypographyColorValueUpdated) {
      this.props.setAttributes(
        {
          popupTextTypographyTypographyColor: popupTextColor !== undefined ? popupTextColor : popupTextTypographyTypographyColor,
        }
      )
      this.props.setAttributes({blockIsTypographyColorValueUpdated: true});
    }
    
    return (
      <InspectorControls key="inspector">
        {isPopupVariantSelected &&
          <InspectorTabs>
            <InspectorTab key={"content"}>
              <PanelBody
                title={__("Container", "responsive-block-editor-addons")}
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
                        <div className="rbea-pop-width-control-container">
                          <RbeaRangeControl
                            label={__("Popup Width (Mobile)", "responsive-block-editor-addons")}
                            value={popupContainerWidthMobile}
                            onChange={(value) =>
                              setAttributes({
                                popupContainerWidthMobile: value !== undefined ? value : 600,
                              })
                            }
                            min={0}
                            max={1500}
                            allowReset
                            initialPosition={600}
                          />
                        </div>
                      );
                    } else if ("tablet" === tab.name) {
                      tabout = (
                        <div className="rbea-pop-width-control-container">
                          <RbeaRangeControl
                            label={__("Popup Width (Tablet)", "responsive-block-editor-addons")}
                            value={popupContainerWidthTablet}
                            onChange={(value) =>
                              setAttributes({
                                popupContainerWidthTablet: value !== undefined ? value : 600,
                              })
                            }
                            min={0}
                            max={1500}
                            allowReset
                            initialPosition={600}
                          />
                        </div>
                      );
                    } else {
                      tabout = (
                          <div className="rbea-pop-width-control-container">
                            <RbeaRangeControl
                              label={__("Popup Width", "responsive-block-editor-addons")}
                              value={popupContainerWidth}
                              onChange={(value) =>
                                setAttributes({
                                  popupContainerWidth: value !== undefined ? value : 600,
                                })
                              }
                              min={0}
                              max={1500}
                              allowReset
                              initialPosition={600}
                            />
                        </div>
                      );
                    }

                    return <div>{tabout}</div>;
                  }}
                </TabPanel>

                <RbeaTabRadioControl
                  label={__("Popup Height", "responsive-block-editor-addons")}
                  value={popupHeightType}
                  onChange={(value) =>
                    this.props.setAttributes({
                      popupHeightType: value
                    })
                  }
                  options={[
                    { value: "auto", label: __("Auto", "responsive-block-editor-addons") },
                    { value: "custom", label: __("Custom", "responsive-block-editor-addons") },
                  ]}
                />

                {popupHeightType === 'custom' &&
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
                            label={__("Popup Height (Mobile)", "responsive-block-editor-addons")}
                            value={popupHeightCustomMobile}
                            onChange={(value) =>
                              setAttributes({
                                popupHeightCustomMobile: value !== undefined ? value : 500,
                              })
                            }
                            min={0}
                            max={1500}
                            allowReset
                            initialPosition={500}
                          />
                        );
                      } else if ("tablet" === tab.name) {
                        tabout = (
                          <RbeaRangeControl
                            label={__("Popup Height (Tablet)", "responsive-block-editor-addons")}
                            value={popupHeightCustomTablet}
                            onChange={(value) =>
                              setAttributes({
                                popupHeightCustomTablet: value !== undefined ? value : 500,
                              })
                            }
                            min={0}
                            max={1500}
                            allowReset
                            initialPosition={500}
                          />
                        );
                      } else {
                        tabout = (
                          <RbeaRangeControl
                            label={__("Popup Height", "responsive-block-editor-addons")}
                            value={popupHeightCustom}
                            onChange={(value) =>
                              setAttributes({
                                popupHeightCustom: value !== undefined ? value : 500,
                              })
                            }
                            min={0}
                            max={1500}
                            allowReset
                            initialPosition={500}
                          />
                        );
                      }

                      return <div>{tabout}</div>;
                    }}
                  </TabPanel>
                }

                <hr className="responsive-block-editor-addons-editor__separator" />
                
                <ResponsiveNewPaddingControl
                  attrNameTemplate="popup%s"
                  resetValues={buttonPaddingResetValues}
                  {...this.props}
                />

                <hr className="responsive-block-editor-addons-editor__separator" />
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
                        <div className="responsive-block-editor-addons-alignment-matrix-control-container">
                          <Text variant="title.small" as="h3">{__("Screen Type (Mobile)", "responsive-block-editor-addons")}</Text>
                          <div className="responsive-block-editor-addons-alignment-matrix-control">
                            <AlignmentMatrixControl
                              value={popupScreenTypeMobile}
                              onChange={(value) => this.props.setAttributes({
                                popupScreenTypeMobile: value
                              })}
                            />
                          </div>
                        </div>
                      );
                    } else if ("tablet" === tab.name) {
                      tabout = (
                        <div className="responsive-block-editor-addons-alignment-matrix-control-container">
                          <Text variant="title.small" as="h3">{__("Screen Type (Tablet)", "responsive-block-editor-addons")}</Text>
                          <div className="responsive-block-editor-addons-alignment-matrix-control">
                            <AlignmentMatrixControl
                              value={popupScreenTypeTablet}
                              onChange={(value) => this.props.setAttributes({
                                popupScreenTypeTablet: value
                              })}
                            />
                          </div>
                        </div>
                      );
                    } else {
                      tabout = (
                        <div className="responsive-block-editor-addons-alignment-matrix-control-container">
                          <h3 className="responsive-block-editor-addons-alignment-matrix-control-title">{__("Screen Type", "responsive-block-editor-addons")}</h3>
                          <div className="responsive-block-editor-addons-alignment-matrix-control">
                            <AlignmentMatrixControl
                              value={popupScreenType}
                              onChange={(value) => {
                                this.props.setAttributes({
                                  popupScreenType: value
                                })
                              }}
                            />
                          </div>
                        </div>
                      );
                    }

                    return <div>{tabout}</div>;
                  }}
                </TabPanel>
              </PanelBody>
              <PanelBody
                title={__("Trigger Settings", "responsive-block-editor-addons")}
                initialOpen={false}
              >
                <RbeaTabRadioControl
                  label={__("Open Trigger", "responsive-block-editor-addons")}
                  value={popupTrigger}
                  onChange={(value) => setAttributes({ popupTrigger: value })}
                  options={[
                    { value: "click", label: __("On Click", "responsive-block-editor-addons") },
                    { value: "load", label: __("On Load", "responsive-block-editor-addons") },
                  ]}
                />

                {popupTrigger === 'load' &&
                  <RbeaRangeControl
                    label={__("Trigger Delay (in seconds)", "responsive-block-editor-addons")}
                    value={popupTriggerDelay}
                    onChange={(value) =>
                      setAttributes({
                        popupTriggerDelay: value !== undefined ? value : 1,
                      })
                    }
                    min={0}
                    max={100}
                    allowReset
                    initialPosition={1}
                  />}

                {popupTrigger === 'click' && <>
                  <RbeaTabRadioControl
                    label={__("Popup Trigger Type", "responsive-block-editor-addons")}
                    value={popupTriggerType}
                    onChange={(value) => setAttributes({ popupTriggerType: value })}
                    options={[
                      { value: "button", label: __("Button", "responsive-block-editor-addons") },
                      { value: "text", label: __("Text", "responsive-block-editor-addons") },
                      { value: "icon", label: __("Icon", "responsive-block-editor-addons") },
                      { value: "image", label: __("Image", "responsive-block-editor-addons") },
                    ]}
                  />

                  {popupTriggerType === 'button' && <>
                    <TextControl
                      label={__("Button Text", "responsive-block-editor-addons")}
                      value={popupButtonText}
                      onChange={(value) => setAttributes({ popupButtonText: value })}
                    />

                    <div className="responsive-block-editor-addons-popup-div-flex">
                      <Text variant="title.small" as="h3">{__("Select Preset", "responsive-block-editor-addons")}</Text>
                      <Button style={popupButtonPreset === '' ? {cursor: 'auto'} : {cursor: 'pointer'}} onClick={() => setAttributes({ popupButtonPreset: '', popupButtonBGColor: '#10659C', popupButtonColor: '#fff', popupButtonBorderRadius: 0 })} size="small"><Dashicon icon="image-rotate" className={popupButtonPreset === '' ? 'image-rotate-reset' : ''} /></Button>
                    </div>
                    <div className="responsive-block-editor-addons-popup-button-preset-wrap">
                      <div className="responsive-block-editor-addons-popup-button-preset">
                        <button className={popupButtonPreset === 'preset1' ? 'selectedPresetBorder' : 'disabledPresetBorder'} onClick={() => setAttributes({ popupButtonPreset: 'preset1', popupButtonBGColor: '#007cba', popupButtonColor: '#fff', popupButtonBorderRadius: 0 })}>{presets.preset1}</button>
                      </div>
                      <div className="responsive-block-editor-addons-popup-button-preset">
                        <button className={popupButtonPreset === 'preset2' ? 'selectedPresetBorder' : 'disabledPresetBorder'} onClick={() => setAttributes({ popupButtonPreset: 'preset2', popupButtonBGColor: '#fff', popupButtonColor: '#007cba', popupButtonBorderRadius: 0 })}>{presets.preset2}</button>
                      </div>
                      <div className="responsive-block-editor-addons-popup-button-preset">
                        <button className={popupButtonPreset === 'preset3' ? 'selectedPresetBorder' : 'disabledPresetBorder'} onClick={() => setAttributes({ popupButtonPreset: 'preset3', popupButtonBGColor: '#007cba', popupButtonColor: '#fff', popupButtonBorderRadius: 4 })}>{presets.preset3}</button>
                      </div>
                      <div className="responsive-block-editor-addons-popup-button-preset">
                        <button className={popupButtonPreset === 'preset4' ? 'selectedPresetBorder' : 'disabledPresetBorder'} onClick={() => setAttributes({ popupButtonPreset: 'preset4', popupButtonBGColor: '#fff', popupButtonColor: '#007cba', popupButtonBorderRadius: 4  })}>{presets.preset4}</button>
                      </div>
                      <div className="responsive-block-editor-addons-popup-button-preset">
                        <button className={popupButtonPreset === 'preset5' ? 'selectedPresetBorder' : 'disabledPresetBorder'} onClick={() => setAttributes({ popupButtonPreset: 'preset5', popupButtonBGColor: '#007cba', popupButtonColor: '#fff', popupButtonBorderRadius: 30 })}>{presets.preset5}</button>
                      </div>
                      <div className="responsive-block-editor-addons-popup-button-preset">
                        <button className={popupButtonPreset === 'preset6' ? 'selectedPresetBorder' : 'disabledPresetBorder'} onClick={() => setAttributes({ popupButtonPreset: 'preset6', popupButtonBGColor: '#fff', popupButtonColor: '#007cba', popupButtonBorderRadius: 30 })}>{presets.preset6}</button>
                      </div>
                    </div>
                  </>
                  }

                  {popupTriggerType === 'icon' &&
                    <FontIconPicker
                      icons={svg_icons}
                      renderFunc={renderSVG}
                      theme="default"
                      value={popupIconTrigger}
                      onChange={(value) => setAttributes({ popupIconTrigger: value })}
                      isMulti={false}
                      noSelectedPlaceholder={__("Select Icon", "responsive-block-editor-addons")}
                    />}
                  
                  {popupTriggerType === 'image' && (
                    <RbeaMediaUploadControl
                      label={__('Image', 'responsive-block-editor-addons')}
                      value={{
                          url: popupImageTrigger || '',
                      }}
                      onChange={(newValue) => {
                          setAttributes({
                              popupImageTrigger: newValue.url,
                          });
                      }}
                      mediaType={'image'}
                    />
                  )}

                  {popupTriggerType === 'text' &&
                    <TextControl
                      label={__("Enter Text", "responsive-block-editor-addons")}
                      value={popupTextTrigger}
                      onChange={(value) => setAttributes({ popupTextTrigger: value })}
                    />}

                  {/* <TabPanel
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
                          <>
                            <p>{__("Alignment (Mobile)", "responsive-block-editor-addons")}</p>
                            <AlignmentToolbar
                              value={popupTriggerAlignMobile}
                              onChange={(value) =>
                                setAttributes({
                                  popupTriggerAlignMobile: value,
                                })
                              }
                              controls={["left", "center", "right"]}
                              isCollapsed={false}
                            />
                          </>
                        );
                      } else if ("tablet" === tab.name) {
                        tabout = (
                          <>
                            <p>{__("Alignment (Tablet)", "responsive-block-editor-addons")}</p>
                            <AlignmentToolbar
                              value={popupTriggerAlignTablet}
                              onChange={(value) =>
                                setAttributes({
                                  popupTriggerAlignTablet: value,
                                })
                              }
                              controls={["left", "center", "right"]}
                              isCollapsed={false}
                            />
                          </>
                        );
                      } else {
                        tabout = (
                          <>
                            <p>
                              {__("Alignment", "responsive-block-editor-addons")}
                            </p>
                            <AlignmentToolbar
                              value={popupTriggerAlign}
                              onChange={(value) =>
                                setAttributes({
                                  popupTriggerAlign: value,
                                })
                              }
                              controls={["left", "center", "right"]}
                              isCollapsed={false}
                            />
                          </>
                        );
                      }

                      return <div>{tabout}</div>;
                    }}
                  </TabPanel> */}
                </>
                }
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
                              value={popupTriggerAlignMobile}
                              onChange={(value) =>
                                setAttributes({
                                  popupTriggerAlignMobile: value,
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
                              value={popupTriggerAlignTablet}
                              onChange={(value) =>
                                setAttributes({
                                  popupTriggerAlignTablet: value,
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
                              value={popupTriggerAlign}
                              onChange={(value) =>
                                setAttributes({
                                  popupTriggerAlign: value,
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

              </PanelBody>
              <PanelBody
                title={__("Close Button", "responsive-block-editor-addons")}
                initialOpen={false}
              >
                <ToggleControl
                  label={__("Show Close Button", "responsive-block-editor-addons")}
                  checked={popupToggleCloseBtn}
                  onChange={() =>
                    this.props.setAttributes({
                      popupToggleCloseBtn: !popupToggleCloseBtn,
                    })
                  }
                />
                {popupToggleCloseBtn &&
                  <RbeaTabRadioControl
                    label={__("Close Button Position", "responsive-block-editor-addons")}
                    value={popupToggleCloseBtnPosition}
                    onChange={(value) => setAttributes({ popupToggleCloseBtnPosition: value })}
                    options={[
                      { value: "flex-end", label: __("Top Right", "responsive-block-editor-addons") },
                      { value: "flex-start", label: __("Top Left", "responsive-block-editor-addons") },
                    ]}
                  />}
              </PanelBody>
            </InspectorTab>
            <InspectorTab key={"style"}>
              {popupTrigger === 'click' &&
                <PanelBody
                  title={__("Trigger", "responsive-block-editor-addons")}
                  initialOpen={false}
                >
                  {popupTriggerType === 'button' && <>
                    <div className="responsive-block-editor-addons-popup-button-group-tab">
                      <ButtonGroup>
                        <Button onClick={() => setAttributes({ popupButtonHoverState: false })} variant={!popupButtonHoverState ? 'primary' : 'secondary'}>{__("Normal", "responsive-block-editor-addons")}</Button>
                        <Button onClick={() => setAttributes({ popupButtonHoverState: true })} variant={popupButtonHoverState ? 'primary' : 'secondary'}>{__("Hover", "responsive-block-editor-addons")}</Button>
                      </ButtonGroup>
                    </div>

                    {!popupButtonHoverState && <>
                      <RbeaColorControl
                        label = {__("Button Text Color", "responsive-block-editor-addons")}
                        colorValue={popupButtonColor}
                        onChange={(colorValue) => setAttributes({ popupButtonColor: colorValue })}
                        resetColor={() => setAttributes({ popupButtonColor: "" })}
                      />

                      <Text style={{ marginTop: '16px' }} variant="title.small" as="h3">{__("Button Background Type", "responsive-block-editor-addons")}</Text>
                      <div className="responsive-block-editor-addons-popup-button-group-tab">
                        <ButtonGroup>
                          <Button onClick={() => setAttributes({ popupButtonBGState: 'transparent' })} variant={popupButtonBGState === 'transparent' ? 'primary' : 'secondary'}>{__("Transparent", "responsive-block-editor-addons")}</Button>
                          <Button onClick={() => setAttributes({ popupButtonBGState: 'solid' })} variant={popupButtonBGState === 'solid' ? 'primary' : 'secondary'}>{__("Solid", "responsive-block-editor-addons")}</Button>
                          <Button onClick={() => setAttributes({ popupButtonBGState: 'gradient' })} variant={popupButtonBGState === 'gradient' ? 'primary' : 'secondary'}>{__("Gradient", "responsive-block-editor-addons")}</Button>
                        </ButtonGroup>
                      </div>

                      {popupButtonBGState === 'solid' && <>
                        <RbeaColorControl
                          label = {__("Button Background Color", "responsive-block-editor-addons")}
                          colorValue={popupButtonBGColor}
                          onChange={(colorValue) => setAttributes({ popupButtonBGColor: colorValue })}
                          resetColor={() => setAttributes({ popupButtonBGColor: "" })}
                        />
                         </>}

                      {popupButtonBGState === 'gradient' && <>
                        <Text style={{ marginTop: '16px' }} variant="title.small" as="h3">{__("Button Gradient", "responsive-block-editor-addons")}</Text>
                        <GradientPicker
                          __nextHasNoMargin
                          value={popupButtonBGGradient}
                          onChange={(value) => { setAttributes({ popupButtonBGGradient: value }) }}
                          gradients={[
                            {
                              name: 'JShine',
                              gradient:
                                'linear-gradient(135deg,#12c2e9 0%,#c471ed 50%,#f64f59 100%)',
                              slug: 'jshine',
                            },
                            {
                              name: 'Moonlit Asteroid',
                              gradient:
                                'linear-gradient(135deg,#0F2027 0%, #203A43 0%, #2c5364 100%)',
                              slug: 'moonlit-asteroid',
                            },
                            {
                              name: 'Rastafarie',
                              gradient:
                                'linear-gradient(135deg,#1E9600 0%, #FFF200 0%, #FF0000 100%)',
                              slug: 'rastafari',
                            },
                          ]}
                        /> </>
                      }
                    </>}

                    {popupButtonHoverState && <>
                      <RbeaColorControl
                        label = {__("Button Text Hover Color", "responsive-block-editor-addons")}
                        colorValue={popupButtonHoverColor}
                        onChange={(colorValue) => setAttributes({ popupButtonHoverColor: colorValue })}
                        resetColor={() => setAttributes({ popupButtonHoverColor: "" })}
                      />

                      <Text style={{ marginTop: '16px' }} variant="title.small" as="h3">{__("Button Hover Background Type", "responsive-block-editor-addons")}</Text>
                      <div className="responsive-block-editor-addons-popup-button-group-tab">
                        <ButtonGroup>
                          <Button onClick={() => setAttributes({ popupButtonBGHoverState: 'transparent' })} variant={popupButtonBGHoverState === 'transparent' ? 'primary' : 'secondary'}>{__("Transparent", "responsive-block-editor-addons")}</Button>
                          <Button onClick={() => setAttributes({ popupButtonBGHoverState: 'solid' })} variant={popupButtonBGHoverState === 'solid' ? 'primary' : 'secondary'}>{__("Solid", "responsive-block-editor-addons")}</Button>
                          <Button onClick={() => setAttributes({ popupButtonBGHoverState: 'gradient' })} variant={popupButtonBGHoverState === 'gradient' ? 'primary' : 'secondary'}>{__("Gradient", "responsive-block-editor-addons")}</Button>
                        </ButtonGroup>
                      </div>

                      {popupButtonBGHoverState === 'solid' && <>
                        <RbeaColorControl
                          label = {__("Button Background Hover Color", "responsive-block-editor-addons")}
                          colorValue={popupButtonBGHoverColor}
                          onChange={(colorValue) => setAttributes({ popupButtonBGHoverColor: colorValue })}
                          resetColor={() => setAttributes({ popupButtonBGHoverColor: "" })}
                        />
                        </>}

                      {popupButtonBGHoverState === 'gradient' && <>
                        <Text style={{ marginTop: '16px' }} variant="title.small" as="h3">{__("Button Gradient", "responsive-block-editor-addons")}</Text>
                        <GradientPicker
                          __nextHasNoMargin
                          value={popupButtonHoverBGGradient}
                          onChange={(value) => { setAttributes({ popupButtonHoverBGGradient: value }) }}
                          gradients={[
                            {
                              name: 'JShine',
                              gradient:
                                'linear-gradient(135deg,#12c2e9 0%,#c471ed 50%,#f64f59 100%)',
                              slug: 'jshine',
                            },
                            {
                              name: 'Moonlit Asteroid',
                              gradient:
                                'linear-gradient(135deg,#0F2027 0%, #203A43 0%, #2c5364 100%)',
                              slug: 'moonlit-asteroid',
                            },
                            {
                              name: 'Rastafarie',
                              gradient:
                                'linear-gradient(135deg,#1E9600 0%, #FFF200 0%, #FF0000 100%)',
                              slug: 'rastafari',
                            },
                          ]}
                        /> </>
                      }

                    </>}

                    <ResponsiveSpacingControl
                      title={__("Button Padding Top", "responsive-block-editor-addons")}
                      attrNameTemplate="popupButtonPaddingTop%s"
                      values={{
                        desktop: popupButtonPaddingTop,
                        tablet: popupButtonPaddingTopTablet,
                        mobile: popupButtonPaddingTopMobile,
                      }}
                      setAttributes={setAttributes}
                      {...this.props}
                    />

                    <ResponsiveSpacingControl
                      title={__("Button Padding Bottom", "responsive-block-editor-addons")}
                      attrNameTemplate="popupButtonPaddingBottom%s"
                      values={{
                        desktop: popupButtonPaddingBottom,
                        tablet: popupButtonPaddingBottomTablet,
                        mobile: popupButtonPaddingBottomMobile,
                      }}
                      setAttributes={setAttributes}
                      {...this.props}
                    />

                    <ResponsiveSpacingControl
                      title={__("Button Padding Left", "responsive-block-editor-addons")}
                      attrNameTemplate="popupButtonPaddingLeft%s"
                      values={{
                        desktop: popupButtonPaddingLeft,
                        tablet: popupButtonPaddingLeftTablet,
                        mobile: popupButtonPaddingLeftMobile,
                      }}
                      setAttributes={setAttributes}
                      {...this.props}
                    />

                    <ResponsiveSpacingControl
                      title={__("Button Padding Right", "responsive-block-editor-addons")}
                      attrNameTemplate="popupButtonPaddingRight%s"
                      values={{
                        desktop: popupButtonPaddingRight,
                        tablet: popupButtonPaddingRightTablet,
                        mobile: popupButtonPaddingRightMobile,
                      }}
                      setAttributes={setAttributes}
                      {...this.props}
                    />

                    <hr className="responsive-block-editor-addons-editor__separator" />
                    <RbeaBlockBorderHelperControl
                      attrNameTemplate="popupButton%s"
                      values={{
                        radius: popupButtonBorderRadius,
                        style: popupButtonBorderStyle,
                        width: popupButtonBorderWidth,
                        color: popupButtonBorderColor,
                      }}
                      setAttributes={setAttributes}
                      {...this.props}
                    />
                    <RbeaColorControl
                      label = {__("Border Hover Color", "responsive-block-editor-addons")}
                      colorValue={popupButtonBorderHoverColor}
                      onChange={(colorValue) => setAttributes({ popupButtonBorderHoverColor: colorValue })}
                      resetColor={() => setAttributes({ popupButtonBorderHoverColor: "" })}
                    />
                  </>}

                  {popupTriggerType === 'icon' && <>
                    <RbeaRangeControl
                      label={__("Icon Size", "responsive-block-editor-addons")}
                      value={popupIconTriggerSize}
                      onChange={(value) =>
                        setAttributes({
                          popupIconTriggerSize: value !== undefined ? value : 30,
                        })
                      }
                      min={0}
                      max={150}
                      allowReset
                      initialPosition={30}
                    />
                    <RbeaColorControl
                      label = {__("Icon Color", "responsive-block-editor-addons")}
                      colorValue={popupIconTriggerColor}
                      onChange={(colorValue) => setAttributes({ popupIconTriggerColor: colorValue })}
                      resetColor={() => setAttributes({ popupIconTriggerColor: "" })}
                    />
                  </>}

                  {popupTriggerType === 'image' && <>
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
                              label={__("Image Width (Mobile)", "responsive-block-editor-addons")}
                              value={popupImageTriggerWidthMobile}
                              onChange={(value) =>
                                setAttributes({
                                  popupImageTriggerWidthMobile: value !== undefined ? value : 350,
                                })
                              }
                              min={0}
                              max={500}
                              allowReset
                              initialPosition={350}
                            />
                          );
                        } else if ("tablet" === tab.name) {
                          tabout = (
                            <RbeaRangeControl
                              label={__("Image Width (Tablet)", "responsive-block-editor-addons")}
                              value={popupImageTriggerWidthTablet}
                              onChange={(value) =>
                                setAttributes({
                                  popupImageTriggerWidthTablet: value !== undefined ? value : 350,
                                })
                              }
                              min={0}
                              max={500}
                              allowReset
                              initialPosition={350}
                            />
                          );
                        } else {
                          tabout = (
                            <RbeaRangeControl
                              label={__("Image Width", "responsive-block-editor-addons")}
                              value={popupImageTriggerWidth}
                              onChange={(value) =>
                                setAttributes({
                                  popupImageTriggerWidth: value !== undefined ? value : 350,
                                })
                              }
                              min={0}
                              max={500}
                              allowReset
                              initialPosition={350}
                            />
                          );
                        }

                        return <div>{tabout}</div>;
                      }}
                    </TabPanel>

                    <RbeaBorderRadiusControl
                      attrNameTemplate="popupImageTrigger%s"
                      {...this.props}
                    />
                  </>}

                </PanelBody>}

                {popupTriggerType === 'button' && (
                  <TypographyHelperControl
                      title={__(
                        "Button Typography",
                        "responsive-block-editor-addons"
                      )}
                      attrNameTemplate="popupButtonTypography%s"
                      values={{
                        family: popupButtonTypographyFontFamily,
                        size: popupButtonTypographyFontSize,
                        sizeMobile: popupButtonTypographyFontSizeMobile,
                        sizeTablet: popupButtonTypographyFontSizeTablet,
                        weight: popupButtonTypographyFontWeight,
                        height: popupButtonTypographyLineHeight,
                        spacing: popupButtonTypographyLetterSpacing,
                        typographyColorControl: buttonTypographyColorControl,
										    typographyColorControlHover: buttonTypographyColorControlHover,
                        emptyColorControl: emptyColorControl,
                      }}
                      showLetterSpacing={true}
                      showTextTransform={false}
                      showColorWithHoverControlTab={true}
                      setAttributes={setAttributes}
                      {...this.props}
                    />
                  )}

                  {popupTriggerType === 'text' && (
                    <TypographyHelperControl
                    title={__(
                      "Text Typography",
                      "responsive-block-editor-addons"
                    )}
                    attrNameTemplate="popupTextTypography%s"
                    values={{
                      family: popupTextTypographyFontFamily,
                      size: popupTextTypographyFontSize,
                      sizeMobile: popupTextTypographyFontSizeMobile,
                      sizeTablet: popupTextTypographyFontSizeTablet,
                      weight: popupTextTypographyFontWeight,
                      height: popupTextTypographyLineHeight,
                      spacing: popupTextTypographyLetterSpacing,
                      color: popupTextTypographyTypographyColor,
                    }}
                    showLetterSpacing={true}
                    showTextTransform={false}
                    showColorControl={true}
                    setAttributes={setAttributes}
                    {...this.props}
                  />
                  )}
              <PanelBody
                title={__("Color & Background", "responsive-block-editor-addons")}
                initialOpen={false}
              >
                <TabPanel
                  className="responsive-block-editor-addons-inspect-tabs 
                  responsive-block-editor-addons-inspect-tabs-col-2  
                  responsive-block-editor-addons-color-inspect-tabs"
                  activeClass="active-tab"
                  initialTabName="color" // Set the default active tab here
                  tabs={[
                    {
                      name: "empty-1",
                      title: __("", "responsive-block-editor-addons"),
                      className: "responsive-block-editor-addons-empty-tab",
                    },
                    {
                      name: "color",
                      title: __("Color", "responsive-block-editor-addons"),
                      className: "responsive-block-editor-addons-normal-tab",
                    },
                    {
                      name: "empty-2",
                      title: __("", "responsive-block-editor-addons"),
                      className: "responsive-block-editor-addons-empty-tab-middle",
                    },
                    {
                      name: "gradient",
                      title: __("Gradient", "responsive-block-editor-addons"),
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
                    if ("color" === tabName.name) {
                      color_tab = (
                        <RbeaColorControl
                          label = {__("Container Background Color", "responsive-block-editor-addons")}
                          colorValue={popupBgColor}
                          onChange={(colorValue) => setAttributes({ popupBgColor: colorValue })}
                          resetColor={() => setAttributes({ popupBgColor: "" })}
                        />
                      );
                    } else if("gradient" === tabName.name) {
                      color_tab = (
                        <>
                          <h3>{__("Container Gradient", "responsive-block-editor-addons")}</h3>
                          <GradientPicker
                            __nextHasNoMargin
                            value={popupGradient}
                            onChange={(value) => { setAttributes({ popupGradient: value }) }}
                            gradients={[
                              {
                                name: 'JShine',
                                gradient:
                                  'linear-gradient(135deg,#12c2e9 0%,#c471ed 50%,#f64f59 100%)',
                                slug: 'jshine',
                              },
                              {
                                name: 'Moonlit Asteroid',
                                gradient:
                                  'linear-gradient(135deg,#0F2027 0%, #203A43 0%, #2c5364 100%)',
                                slug: 'moonlit-asteroid',
                              },
                              {
                                name: 'Rastafarie',
                                gradient:
                                  'linear-gradient(135deg,#1E9600 0%, #FFF200 0%, #FF0000 100%)',
                                slug: 'rastafari',
                              },
                            ]}
                          />
                        </>
                      );
                    } else {
                      color_tab = emptyColorControl;
                    }
                    return <div>{color_tab}</div>;
                  }}
                </TabPanel>
                {/* <Text variant="title.small" as="h3">{__("Container Background", "responsive-block-editor-addons")}</Text>
                <div className="responsive-block-editor-addons-popup-button-group-tab">
                  <ButtonGroup>
                    <Button onClick={() => setAttributes({ popupBgType: 'color' })} variant={popupBgType === 'color' ? 'primary' : 'secondary'}>{__("Color", "responsive-block-editor-addons")}</Button>
                    <Button onClick={() => setAttributes({ popupBgType: 'gradient' })} variant={popupBgType !== 'color' ? 'primary' : 'secondary'}>{__("Gradient", "responsive-block-editor-addons")}</Button>
                  </ButtonGroup>
                </div> */}
{/* 
                {popupBgType === 'color' && <>
                  
                  </>
                }

                {popupBgType !== 'color' && <>
                   </>
                } */}

                {popupToggleCloseBtn && <>
                  <RbeaColorControl
                    label = {__("Close Button Color", "responsive-block-editor-addons")}
                    colorValue={popupCloseBtnColor}
                    onChange={(colorValue) => setAttributes({ popupCloseBtnColor: colorValue })}
                    resetColor={() => setAttributes({ popupCloseBtnColor: "" })}
                  />
                  </>}
                <RbeaColorControl
                  label = {__("Overlay Color", "responsive-block-editor-addons")}
                  colorValue={popupOverlayColor}
                  onChange={(colorValue) => setAttributes({ popupOverlayColor: colorValue })}
                  resetColor={() => setAttributes({ popupOverlayColor: "" })}
                />

                <RbeaRangeControl
                  label={__("Overlay Opacity", "responsive-block-editor-addons")}
                  value={popupOverlayOpacity}
                  onChange={(value) =>
                    setAttributes({
                      popupOverlayOpacity: value !== undefined ? value : 30,
                    })
                  }
                  min={0}
                  max={100}
                  allowReset
                  initialPosition={30}
                />

              </PanelBody>
              <PanelBody
                title={__("Border", "responsive-block-editor-addons")}
                initialOpen={false}
              >
                <div className="responsive-block-editor-addons-popup-border-helper">
                  <RbeaBlockBorderHelperControl
                    attrNameTemplate="popupBlock%s"
                    values={{
                      radius: popupBlockBorderRadius,
                      style: popupBlockBorderStyle,
                      width: popupBlockBorderWidth,
                      color: popupBlockBorderColor,
                    }}
                    setAttributes={setAttributes}
                    {...this.props}
                  />
                </div>
              </PanelBody>
              {popupTrigger === 'click' &&
                <PanelBody title={__("Spacing", "responsive-block-editor-addons")} initialOpen={false}>
                  <ResponsiveNewPaddingControl
                    attrNameTemplate="button%s"
                    resetValues={buttonPaddingResetValues}
                    {...this.props}
                  />
                  <ResponsiveNewMarginControl
                    attrNameTemplate="button%s"
                    resetValues={buttonMarginResetValues}
                    {...this.props}
                  />
                </PanelBody>
              }
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
            </InspectorTab>
          </InspectorTabs>
        }
      </InspectorControls>
    );
  }
}
