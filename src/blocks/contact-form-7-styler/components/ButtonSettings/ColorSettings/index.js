/**
 * Box-Shadow reusable component.
 *
 */
const { __ } = wp.i18n;

const { ColorPalette } = wp.blockEditor;

import RbeaRangeControl from "../../../../../utils/components/rbea-range-control";
import RbeaColorControl from "../../../../../utils/components/rbea-color-control";
import RbeaBackgroundTypeControl from "../../../../../utils/components/rbea-background-type-control";

const { SelectControl, RangeControl, PanelBody, TabPanel } = wp.components;

// Extend component
const { Component, Fragment } = wp.element;

class ButtonColorControl extends Component {
  constructor() {
    super(...arguments);
  }

  render() {
      const {
          attributes: {
              ctaHoverColor,
              ctaHoverBorderColor,
              buttonHbackgroundType,
              ctaHoverBackColor,
              buttonHbackgroundColor1,
              buttonHbackgroundColor2,
              buttonHcolorLocation1,
              buttonHcolorLocation2,
              buttonHgradientDirection,

              ctaColor,
              ctaBorderColor,
              buttonbackgroundType,
              ctaBackColor,
              buttonbackgroundColor1,
              buttonbackgroundColor2,
              buttoncolorLocation1,
              buttoncolorLocation2,
              buttongradientDirection,

              buttonopacity,
              buttonHopacity,

              ctaTextOpacity,
          },
          setAttributes,
      } = this.props;

      // Button Background Type Options
      const buttonbackgroundTypeOptions = [
          { value: "color", label: __("Color", "responsive-block-editor-addons") },
          {
              value: "gradient",
              label: __("Gradient", "responsive-block-editor-addons"),
          },
      ];
      //Button Background Type Options on Hover
      const buttonHoverbackgroundTypeOptions = [
        { value: "color", label: __("Color", "responsive-block-editor-addons") },
        {
            value: "gradient",
            label: __("Gradient", "responsive-block-editor-addons"),
        },
      ];
      const buttonHoverbackgroundTypeAllOptions = [
        { value: "color", label: __("Color", "responsive-block-editor-addons") },
        {
            value: "gradient",
            label: __("Gradient", "responsive-block-editor-addons"),
        }
      ];

     const emptyColorControl = (
        <div className="responsive-block-editor-addons-empty-color-control"></div>
      );

    var advancedControls;
      advancedControls = (
          <PanelBody
              title={__("Color Settings", "responsive-block-editor-addons")}
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
                        className: "responsive-block-editor-addons-empty-tab-middle",
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
                      let tabout;
                      if ("hover" === tabName.name) {
                          tabout = (
                              <Fragment>
                                  <Fragment>
                                      <RbeaColorControl
                                            label = {__("Text Color", "responsive-block-editor-addons")}
                                            colorValue={ctaHoverColor}
                                            onChange={(colorValue) =>
                                                this.props.setAttributes({ ctaHoverColor: colorValue })
                                            }
                                            resetColor={() => this.props.setAttributes({ ctaHoverColor: "" })}
                                        />
                                  </Fragment>
                                  <Fragment>
                                      <RbeaColorControl
                                            label = {__("Hover Border Color", "responsive-block-editor-addons")}
                                            colorValue={ctaHoverBorderColor}
                                            onChange={(colorValue) =>
                                                setAttributes({
                                                    ctaHoverBorderColor:
                                                        colorValue !== undefined ? colorValue : "",
                                                })
                                            }
                                            resetColor={() => setAttributes({ ctaHoverBorderColor: "" })}
                                        />
                                  </Fragment>
                                  <RbeaBackgroundTypeControl
                                      label={__(
                                          "Type",
                                          "responsive-block-editor-addons"
                                      )}
                                      value={buttonHbackgroundType}
                                      onChange={(value) =>
                                          setAttributes({ buttonHbackgroundType: value })
                                      }
                                      options= {this.props.showGradientHover? buttonHoverbackgroundTypeAllOptions : buttonHoverbackgroundTypeOptions}
                                  />
                                  {"color" == buttonHbackgroundType && (
                                      <Fragment>
                                            <RbeaColorControl
                                                label = {__("Hover Background Color", "responsive-block-editor-addons")}
                                                colorValue={ctaHoverBackColor}
                                                onChange={(colorValue) =>
                                                    this.props.setAttributes({ ctaHoverBackColor: colorValue })
                                                }
                                                resetColor={() => this.props.setAttributes({ ctaHoverBackColor: "" })}
                                            />
                                          { this.props.showBackColorOpacity == true && (
                                          <RbeaRangeControl
                                              label={__(
                                                  "Opacity",
                                                  "responsive-block-editor-addons"
                                              )}
                                              value={buttonHopacity}
                                              onChange={(value) =>
                                                  setAttributes({
                                                      buttonHopacity:
                                                          value !== undefined ? value : 20,
                                                  })
                                              }
                                              min={0}
                                              max={100}
                                              allowReset
                                          />
                                          )}
                                      </Fragment>
                                  )}
                                  {"gradient" == buttonHbackgroundType && (
                                      <Fragment>
                                            <RbeaColorControl
                                                label = {__("Color 1", "responsive-block-editor-addons")}
                                                colorValue={buttonHbackgroundColor1}
                                                onChange={(colorValue) =>
                                                    setAttributes({
                                                        buttonHbackgroundColor1: colorValue,
                                                    })
                                                }
                                                resetColor={() => setAttributes({ buttonHbackgroundColor1: "" })}
                                            />
                                            <RbeaColorControl
                                                label = {__("Color 2", "responsive-block-editor-addons")}
                                                colorValue={buttonHbackgroundColor2}
                                                onChange={(colorValue) =>
                                                    setAttributes({ buttonHbackgroundColor2: colorValue })
                                                }
                                                resetColor={() => setAttributes({ buttonHbackgroundColor2: "" })}
                                            />
                                          <RbeaRangeControl
                                              label={__(
                                                  "Color Location 1",
                                                  "responsive-block-editor-addons"
                                              )}
                                              value={buttonHcolorLocation1}
                                              min={0}
                                              max={100}
                                              onChange={(value) =>
                                                  setAttributes({ buttonHcolorLocation1: value })
                                              }
                                          />
                                          <RbeaRangeControl
                                              label={__(
                                                  "Color Location 2",
                                                  "responsive-block-editor-addons"
                                              )}
                                              value={buttonHcolorLocation2}
                                              min={0}
                                              max={100}
                                              onChange={(value) =>
                                                  setAttributes({ buttonHcolorLocation2: value })
                                              }
                                          />
                                          <RbeaRangeControl
                                              label={__(
                                                  "Angle",
                                                  "responsive-block-editor-addons"
                                              )}
                                              value={buttonHgradientDirection}
                                              min={0}
                                              max={360}
                                              onChange={(value) =>
                                                  setAttributes({ buttonHgradientDirection: value })
                                              }
                                          />
                                      </Fragment>
                                  )}
                              </Fragment>
                          );
                      } else if ("normal" === tabName.name) {
                          tabout = (
                              <Fragment>
                                    <RbeaColorControl
                                        label = {__("Text Color", "responsive-block-editor-addons")}
                                        colorValue={ctaColor}
                                        onChange={(value) =>
                                            this.props.setAttributes({
                                                ctaColor: value,
                                            })
                                        }
                                        resetColor={() => this.props.setAttributes({ ctaColor: "" })}
                                    />
                                  <Fragment>
                                       <RbeaColorControl
                                            label = {__("Border Color", "responsive-block-editor-addons")}
                                            colorValue={ctaBorderColor}
                                            onChange={(colorValue) =>
                                                setAttributes({
                                                    ctaBorderColor:
                                                        colorValue !== undefined ? colorValue : "#000",
                                                })
                                            }
                                            resetColor={() => setAttributes({ ctaBorderColor: "" })}
                                        />
                                  </Fragment>
                                  <RbeaBackgroundTypeControl
                                      label={__(
                                          "Type",
                                          "responsive-block-editor-addons"
                                      )}
                                      value={buttonbackgroundType}
                                      onChange={(value) =>
                                          setAttributes({ buttonbackgroundType: value })
                                      }
                                      options={buttonbackgroundTypeOptions}
                                  />
                                  {"color" == buttonbackgroundType && (
                                      <Fragment>
                                          <RbeaColorControl
                                                label = {__("Background Color", "responsive-block-editor-addons")}
                                                colorValue={ctaBackColor}
                                                onChange={(colorValue) =>
                                                    this.props.setAttributes({ ctaBackColor: colorValue })
                                                }
                                                resetColor={() =>  this.props.setAttributes({ ctaBackColor: "" })}
                                            />
                                          { this.props.showBackColorOpacity == true && (
                                              <RbeaRangeControl
                                                  label={__(
                                                      "Opacity",
                                                      "responsive-block-editor-addons"
                                                  )}
                                                  value={buttonopacity}
                                                  onChange={(value) =>
                                                      setAttributes({
                                                          buttonopacity: value !== undefined ? value : 20,
                                                      })
                                                  }
                                                  min={0}
                                                  max={100}
                                                  allowReset
                                              />
                                          )}
                                      </Fragment>
                                  )}
                                  {"gradient" == buttonbackgroundType && (
                                      <Fragment>
                                            <RbeaColorControl
                                                label = {__("Color 1", "responsive-block-editor-addons")}
                                                colorValue={buttonbackgroundColor1}
                                                onChange={(colorValue) =>
                                                    setAttributes({ buttonbackgroundColor1: colorValue })
                                                }
                                                resetColor={() => setAttributes({ buttonbackgroundColor1: "" })}
                                            />
                                            <RbeaColorControl
                                                label = {__("Color 2", "responsive-block-editor-addons")}
                                                colorValue={buttonbackgroundColor2}
                                                onChange={(colorValue) =>
                                                    setAttributes({ buttonbackgroundColor2: colorValue })
                                                }
                                                resetColor={() => setAttributes({ buttonbackgroundColor2: "" })}
                                            />
                                          <RbeaRangeControl
                                              label={__(
                                                  "Color Location 1",
                                                  "responsive-block-editor-addons"
                                              )}
                                              value={buttoncolorLocation1}
                                              min={0}
                                              max={100}
                                              onChange={(value) =>
                                                  setAttributes({ buttoncolorLocation1: value })
                                              }
                                          />
                                          <RbeaRangeControl
                                              label={__(
                                                  "Color Location 2",
                                                  "responsive-block-editor-addons"
                                              )}
                                              value={buttoncolorLocation2}
                                              min={0}
                                              max={100}
                                              onChange={(value) =>
                                                  setAttributes({ buttoncolorLocation2: value })
                                              }
                                          />
                                          <RbeaRangeControl
                                              label={__(
                                                  "Angle",
                                                  "responsive-block-editor-addons"
                                              )}
                                              value={buttongradientDirection}
                                              min={0}
                                              max={100}
                                              onChange={(value) =>
                                                  setAttributes({ buttongradientDirection: value })
                                              }
                                          />
                                      </Fragment>
                                  )}
                              </Fragment>
                          );
                      } else {
                        tabout = emptyColorControl;
                      }
                      return <div>{tabout}</div>;
                  }}
              </TabPanel>
              {this.props.showTextOpacity===true && (
              <Fragment>
                <RbeaRangeControl
                    label={__("Text Opacity", "responsive-block-editor-addons")}
                    value={ctaTextOpacity}
                    onChange={(value) => setAttributes({ ctaTextOpacity: value })}
                    min={0}
                    max={100}
                />
              </Fragment>
              )}
          </PanelBody>
      );

    return (
      <div className="responsive-block-editor-addons-block-spacing-settings">
        {advancedControls}
      </div>
    );
  }
}

export default ButtonColorControl;
