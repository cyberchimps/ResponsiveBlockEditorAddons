/**
 * Inspector Controls
 */

// Setup the block
const { __ } = wp.i18n;
const { Component, Fragment } = wp.element;
import FontIconPicker from "@fonticonpicker/react-fonticonpicker";
import ResponsiveBlocksIcon from "../../../ResponsiveBlocksIcon.json";
import renderSVG from "../../../renderIcon";
import { loadGoogleFont } from "../../../utils/font";
import TypographyHelperControl from "../../../settings-components/TypographySettings";
import ResponsiveNewPaddingControl from "../../../settings-components/ResponsiveNewSpacingSettings/ResponsiveNewPaddingControl/index";
import ResponsiveNewMarginControl from "../../../settings-components/ResponsiveNewSpacingSettings/ResponsiveNewMarginControl/index";

import InspectorTab from "../../../components/InspectorTab";
import InspectorTabs from "../../../components/InspectorTabs";

import RbeaRangeControl from "../../../utils/components/rbea-range-control";
import RbeaColorControl from "../../../utils/components/rbea-color-control";
import RbeaTabRadioControl from "../../../utils/components/rbea-tab-radio-control";
// Import block components
const { InspectorControls, ColorPalette, AlignmentToolbar } = wp.blockEditor;

// Import Inspector components
const {
  PanelBody,
  RangeControl,
  SelectControl,
  ButtonGroup,
  Button,
  ToggleControl,
  TabPanel,
  Dashicon,
  BaseControl,
  TextControl,
} = wp.components;

let svg_icons = Object.keys(ResponsiveBlocksIcon);

/**
 * Create an Inspector Controls wrapper Component
 */
export default class Inspector extends Component {
  constructor(props) {
    super(...arguments);
    this.onChangeNumber = this.onChangeNumber.bind(this);
    this.onChangeMail = this.onChangeMail.bind(this);
  }

  onChangeNumber(number) {
    const validNumberRegex = RegExp(/[1-9]{1}\d{9}/);
    if (validNumberRegex.test(number)) {
      this.props.setAttributes({ isValidNumber: true });
    } else {
      this.props.setAttributes({ isValidNumber: false });
    }
    if (number.length > 10) {
      this.props.setAttributes({ isValidNumber: false });
    }
  }

  onChangeMail(mail) {
    const validMailRegex = RegExp(
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    );
    if (validMailRegex.test(mail)) {
      this.props.setAttributes({ isValidMail: true });
    } else {
      this.props.setAttributes({ isValidMail: false });
    }
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

    // Button size values
    const buttonSizeOptions = [
      {
        value: "responsive-block-editor-addons-call-mail-button-size-small",
        label: __("S", "responsive-block-editor-addons"),
      },
      {
        value: "responsive-block-editor-addons-call-mail-button-size-medium",
        label: __("M", "responsive-block-editor-addons"),
      },
      {
        value: "responsive-block-editor-addons-call-mail-button-size-large",
        label: __("L", "responsive-block-editor-addons"),
      },
      {
        value:
          "responsive-block-editor-addons-call-mail-button-size-extralarge",
        label: __("XL", "responsive-block-editor-addons"),
      },
    ];

    const blockPaddingResetValues = {
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
      marginTop: 10,
      marginRight: 0,
      marginBottom: 0,
      marginLeft: 0,
      marginTabletTop: 10,
      marginTabletRight: 0,
      marginTabletBottom: 0,
      marginTabletLeft: 0,
      marginMobileTop: 10,
      marginMobileRight: 0,
      marginMobileBottom: 0,
      marginMobileLeft: 0,
    }

    // Setup the attributes
    const {
      attributes: {
        phone,
        mail,
        showCallButton,
        showMailButton,
        buttonToShow,
        isValidNumber,
        isValidMail,
        //Button Size
        buttonSize,
        //Button Width
        buttonWidthType,
        buttonWidth,
        buttonWidthMobile,
        buttonWidthTablet,
        //Icon
        icon,
        iconPosition,
        iconSize,
        iconSizeMobile,
        iconSizeTablet,
        //Colors
        buttonColor,
        buttonTextColor,
        buttonColorHover,
        buttonTextColorHover,
        //Button Styles
        buttonRounded,
        buttonTransparent,
        buttonRadius,
        //Button Text Typography
        textFontFamily,
        textFontSize,
        textFontSizeMobile,
        textFontSizeTablet,
        textFontWeight,
        textLineHeight,
        //Spacing
        blockTopMargin,
        blockBottomMargin,
        blockLeftMargin,
        blockRightMargin,
        blockTopMarginMobile,
        blockBottomMarginMobile,
        blockLeftMarginMobile,
        blockRightMarginMobile,
        blockTopMarginTablet,
        blockBottomMarginTablet,
        blockLeftMarginTablet,
        blockRightMarginTablet,
        blockTopPadding,
        blockBottomPadding,
        blockLeftPadding,
        blockRightPadding,
        blockTopPaddingMobile,
        blockBottomPaddingMobile,
        blockLeftPaddingMobile,
        blockRightPaddingMobile,
        blockTopPaddingTablet,
        blockBottomPaddingTablet,
        blockLeftPaddingTablet,
        blockRightPaddingTablet,
        iconTextGap,
        iconTextGapMobile,
        iconTextGapTablet,
        hideWidget,
        hideWidgetTablet,
        hideWidgetMobile,
        //Z-Index
        z_index,
        z_indexTablet,
        z_indexMobile,
        blockIsPaddingControlConnected,
        blockIsMarginControlConnected,

        buttonStyleToggle,
        hasButtonStyleToggleUpdated,
      },
      setAttributes,
    } = this.props;

    // Border Color Component For Color&Hover Typography Control
		const typographyColorControl = buttonStyleToggle !== "transparent" &&  (
        <RbeaColorControl
				label={__("Button Text Color", "responsive-block-editor-addons")}
				colorValue={buttonTextColor}
				onChange={(colorValue) =>
					setAttributes({ buttonTextColor: colorValue })
				}
				resetColor={() => setAttributes({ buttonTextColor: "" })}
			/>
    );

		const typographyColorControlHover = buttonStyleToggle !== "transparent" &&  (
			<RbeaColorControl
				label={__("Button Text Color Hover", "responsive-block-editor-addons")}
				colorValue={buttonTextColorHover}
				onChange={(colorValue) =>
					setAttributes({ buttonTextColorHover: colorValue })
				}
				resetColor={() => setAttributes({ buttonTextColorHover: "" })}
			/>
		);

    const emptyColorControl = (
			<div className="responsive-block-editor-addons-empty-color-control"></div>
		);
    
    // backward compatibility for border radius control

    if (!hasButtonStyleToggleUpdated) {
      this.props.setAttributes(
        {
        buttonStyleToggle: buttonRounded ? "rounded" : buttonTransparent ? "transparent" : "",
        }
      )
      this.props.setAttributes({hasButtonStyleToggleUpdated: true});
    }

    return (
      <InspectorControls key="inspector">
        <InspectorTabs>
          <InspectorTab key={"content"}>
            <PanelBody
              title={__("Button Type", "responsive-block-editor-addons")}
              initialOpen={true}
            >
              <RbeaTabRadioControl
                label={__("Button Type", "responsive-block-editor-addons")}
                value={buttonToShow}
                options={[
                  {
                    value: "call",
                    label: __("Call Button", "responsive-block-editor-addons"),
                  },
                  {
                    value: "mail",
                    label: __("Mail Button", "responsive-block-editor-addons"),
                  },
                ]}
                onChange={(value) => setAttributes({ buttonToShow: value })}
                defaultValue={"mail"}
              />
              {"call" === buttonToShow && (
                <Fragment>
                  <TextControl
                    label={__(
                      "Enter your phone number",
                      "responsive-block-editor-addons"
                    )}
                    type="text"
                    value={phone}
                    onChange={(value) => {
                      this.onChangeNumber(value);
                      setAttributes({ phone: value });
                    }}
                  />
                  {!isValidNumber && (
                    <p style={{ color: "red" }}>
                      Please make sure your input is a valid phone number.
                    </p>
                  )}
                </Fragment>
              )}
              {"mail" === buttonToShow && (
                <Fragment>
                  <TextControl
                    label={__(
                      "Enter your mail address",
                      "responsive-block-editor-addons"
                    )}
                    type="text"
                    value={mail}
                    onChange={(value) => {
                      this.onChangeMail(value);
                      setAttributes({ mail: value });
                    }}
                  />
                  {!isValidMail && (
                    <p style={{ color: "red" }}>
                      Please enter a valid mail id.
                    </p>
                  )}
                </Fragment>
              )}
            </PanelBody>
            <PanelBody
              title={__("Button Size", "responsive-block-editor-addons")}
              initialOpen={true}
            >
              <RbeaTabRadioControl
                label={__(
                  "Button Size Type",
                  "responsive-block-editor-addons"
                )}
                value={buttonSize}
                options={buttonSizeOptions.map(({ value, label }) => ({
                  value,
                  label,
                }))}
                onChange={(value) => setAttributes({ buttonSize: value })}
                defaultValue={"medium"}
              />
            </PanelBody>
            <PanelBody
              title={__("Button Width", "responsive-block-editor-addons")}
              initialOpen={true}
            >
              <RbeaTabRadioControl
                label={__(
                  "Button Width Type",
                  "responsive-block-editor-addons"
                )}
                value={buttonWidthType}
                options={[
                  {
                    value: "fixed",
                    label: __("Fixed", "responsive-block-editor-addons"),
                  },
                  {
                    value: "flexible",
                    label: __("Flexible", "responsive-block-editor-addons"),
                  },
                  {
                    value: "full",
                    label: __("Full", "responsive-block-editor-addons"),
                  },
                ]}
                onChange={(value) => setAttributes({ buttonWidthType: value })}
                defaultValue={"fixed"}
              />
              {"flexible" === buttonWidthType && (
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
                              "Button Width Mobile",
                              "responsive-block-editor-addons"
                            )}
                            value={buttonWidthMobile}
                            onChange={(value) =>
                              setAttributes({ buttonWidthMobile: value })
                            }
                            min={0}
                            max={1000}
                          />
                        </Fragment>
                      );
                    } else if ("tablet" === tab.name) {
                      tabout = (
                        <Fragment>
                          <RbeaRangeControl
                            label={__(
                              "Button Width Tablet",
                              "responsive-block-editor-addons"
                            )}
                            value={buttonWidthTablet}
                            onChange={(value) =>
                              setAttributes({ buttonWidthTablet: value })
                            }
                            min={0}
                            max={1000}
                          />
                        </Fragment>
                      );
                    } else {
                      tabout = (
                        <Fragment>
                          <RbeaRangeControl
                            label={__(
                              "Button Width",
                              "responsive-block-editor-addons"
                            )}
                            value={buttonWidth}
                            onChange={(value) =>
                              setAttributes({ buttonWidth: value })
                            }
                            min={0}
                            max={1000}
                          />
                        </Fragment>
                      );
                    }

                    return <div>{tabout}</div>;
                  }}
                </TabPanel>
              )}
            </PanelBody>
          </InspectorTab>
          <InspectorTab key={"style"}>
            {textFontFamily && loadGoogleFont(textFontFamily)}
            <PanelBody
              title={__("Button Style", "responsive-block-editor-addons")}
              initialOpen={true}
            >
              <RbeaTabRadioControl
                label={__("Button Style", "responsive-block-editor-addons")}
                value={buttonStyleToggle}
                onChange={(value) =>
                  setAttributes({ buttonStyleToggle: value})
                }
                options={[
                  { value: "rounded", label: __("Rounded", "responsive-block-editor-addons") },
                  { value: "transparent", label: __("Transparent", "responsive-block-editor-addons") },
                ]}
              />
              {"rounded" === buttonStyleToggle && (
                <RbeaRangeControl
                  label={__("Button Radius", "responsive-block-editor-addons")}
                  value={buttonRadius}
                  onChange={(value) => setAttributes({ buttonRadius: value })}
                  min={0}
                  max={100}
                />
              )}
            </PanelBody>
            <PanelBody
              title={__("Button Icon", "responsive-block-editor-addons")}
              initialOpen={false}
            >
              <p className="components-base-control__label">
                {__("Selected Icon", "responsive-block-editor-addons")}
              </p>
              <FontIconPicker
                icons={svg_icons}
                renderFunc={renderSVG}
                theme="default"
                value={icon}
                onChange={(value) => setAttributes({ icon: value })}
                isMulti={false}
                noSelectedPlaceholder={__(
                  "Select Icon",
                  "responsive-block-editor-addons"
                )}
              />
              <RbeaTabRadioControl
                label={__("Icon Position", "responsive-block-editor-addons")}
                value={iconPosition}
                options={[
                  {
                    value: "left",
                    label: __("Left", "responsive-block-editor-addons"),
                  },
                  {
                    value: "right",
                    label: __("Right", "responsive-block-editor-addons"),
                  },
                ]}
                onChange={(value) => setAttributes({ iconPosition: value })}
                defaultValue={"left"}
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
                      <Fragment>
                        <RbeaRangeControl
                          label={__(
                            "Icon Size Mobile",
                            "responsive-block-editor-addons"
                          )}
                          value={iconSizeMobile}
                          onChange={(value) =>
                            setAttributes({ iconSizeMobile: value })
                          }
                          min={0}
                          max={1000}
                        />
                      </Fragment>
                    );
                  } else if ("tablet" === tab.name) {
                    tabout = (
                      <Fragment>
                        <RbeaRangeControl
                          label={__(
                            "Icon Size Tablet",
                            "responsive-block-editor-addons"
                          )}
                          value={iconSizeTablet}
                          onChange={(value) =>
                            setAttributes({ iconSizeTablet: value })
                          }
                          min={0}
                          max={1000}
                        />
                      </Fragment>
                    );
                  } else {
                    tabout = (
                      <Fragment>
                        <RbeaRangeControl
                          label={__(
                            "Icon Size",
                            "responsive-block-editor-addons"
                          )}
                          value={iconSize}
                          onChange={(value) =>
                            setAttributes({ iconSize: value })
                          }
                          min={0}
                          max={1000}
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
                            "Gap between icon and text",
                            "responsive-block-editor-addons"
                          )}
                          value={iconTextGapMobile}
                          onChange={(value) =>
                            setAttributes({ iconTextGapMobile: value })
                          }
                          min={0}
                          max={1000}
                        />
                      </Fragment>
                    );
                  } else if ("tablet" === tab.name) {
                    tabout = (
                      <Fragment>
                        <RbeaRangeControl
                          label={__(
                            "Gap between icon and text",
                            "responsive-block-editor-addons"
                          )}
                          value={iconTextGapTablet}
                          onChange={(value) =>
                            setAttributes({ iconTextGapTablet: value })
                          }
                          min={0}
                          max={1000}
                        />
                      </Fragment>
                    );
                  } else {
                    tabout = (
                      <Fragment>
                        <RbeaRangeControl
                          label={__(
                            "Gap between icon and text",
                            "responsive-block-editor-addons"
                          )}
                          value={iconTextGap}
                          onChange={(value) =>
                            setAttributes({ iconTextGap: value })
                          }
                          min={0}
                          max={1000}
                        />
                      </Fragment>
                    );
                  }
                  return <div>{tabout}</div>;
                }}
              </TabPanel>
            </PanelBody>
            <PanelBody
              title={__("Button Colors", "responsive-block-editor-addons")}
              initialOpen={false}
            >
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
							          		label = {__("Button Color", "responsive-block-editor-addons")}
							          		colorValue={buttonColor}
							          		onChange={(colorValue) =>
							          			setAttributes({ buttonColor: colorValue })
							          		}
							          		resetColor={() => setAttributes({ buttonColor: "" })}
							          />
                      );
                    } else if("hover" === tabName.name) {
                      color_tab = (
                        <RbeaColorControl
								        	label = {__("Button Color Hover", "responsive-block-editor-addons")}
								        	colorValue={buttonColorHover}
								        	onChange={(colorValue) =>
								        		setAttributes({ buttonColorHover: colorValue })
								        	}
								        	resetColor={() => setAttributes({ buttonColorHover: "" })}
								        />
                      );
                    } else {
                      color_tab = emptyColorControl;
                    }
                    return <div>{color_tab}</div>;
                  }}
                </TabPanel>
            </PanelBody>
            <TypographyHelperControl
              title={__(
                "Button Text Typography",
                "responsive-block-editor-addons"
              )}
              attrNameTemplate="text%s"
              values={{
                family: textFontFamily,
                size: textFontSize,
                sizeMobile: textFontSizeMobile,
                sizeTablet: textFontSizeTablet,
                weight: textFontWeight,
                height: textLineHeight,
                typographyColorControl: typographyColorControl,
								typographyColorControlHover: typographyColorControlHover,
								emptyColorControl: emptyColorControl,
              }}
              showLetterSpacing={false}
              showTextTransform={false}
              showColorWithHoverControlTab={true}
              setAttributes={setAttributes}
              {...this.props}
            />
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
