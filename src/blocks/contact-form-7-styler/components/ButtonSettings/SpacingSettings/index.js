/**
 * Box-Shadow reusable component.
 *
 */
const { __ } = wp.i18n;

const { ColorPalette } = wp.blockEditor;

const { SelectControl, RangeControl, PanelBody, TabPanel, Dashicon } = wp.components;

import RbeaRangeControl from "../../../../../utils/components/rbea-range-control";
import ResponsiveNewPaddingControl from "../../../../../settings-components/ResponsiveNewSpacingSettings/ResponsiveNewPaddingControl";

// Extend component
const { Component, Fragment } = wp.element;

class ButtonSpacingControl extends Component {
  constructor() {
    super(...arguments);
  }

  render() {
      const {
          attributes: {
              ctaHpadding,
              ctaHpaddingTablet,
              ctaHpaddingMobile,
              ctaVpadding,
              ctaVpaddingTablet,
              ctaVpaddingMobile,
              vMargin,
              vMarginTablet,
              vMarginMobile,
              hMargin,
              hMarginTablet,
              hMarginMobile,
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
          },
          setAttributes,
      } = this.props;

      const ctaButtonPaddingResetValues = {
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

      // backward compatibility for icon container padding control

    if (!isCtaButtonPaddingMarginValueUpdated) {
      this.props.setAttributes(
        {
          ctaButtonTopPadding:          ctaVpadding !== undefined ? ctaVpadding : ctaButtonTopPadding,
          ctaButtonBottomPadding:       ctaVpadding !== undefined ? ctaVpadding : ctaButtonBottomPadding,
          ctaButtonLeftPadding:         ctaHpadding !== undefined ? ctaHpadding : ctaButtonLeftPadding,
          ctaButtonRightPadding:        ctaHpadding !== undefined ? ctaHpadding : ctaButtonRightPadding,
          ctaButtonTopPaddingTablet:    ctaVpaddingTablet !== undefined ? ctaVpaddingTablet : ctaButtonTopPaddingTablet,
          ctaButtonBottomPaddingTablet: ctaVpaddingTablet !== undefined ? ctaVpaddingTablet : ctaButtonBottomPaddingTablet,
          ctaButtonRightPaddingTablet:  ctaHpaddingTablet !== undefined ? ctaHpaddingTablet : ctaButtonRightPaddingTablet,
          ctaButtonLeftPaddingTablet:   ctaHpaddingTablet !== undefined ? ctaHpaddingTablet : ctaButtonLeftPaddingTablet,
          ctaButtonTopPaddingMobile:    ctaVpaddingMobile !== undefined ? ctaVpaddingMobile : ctaButtonTopPaddingMobile,
          ctaButtonBottomPaddingMobile: ctaVpaddingMobile !== undefined ? ctaVpaddingMobile : ctaButtonBottomPaddingMobile,
          ctaButtonLeftPaddingMobile:   ctaHpaddingMobile !== undefined ? ctaHpaddingMobile : ctaButtonLeftPaddingMobile,
          ctaButtonRightPaddingMobile:  ctaHpaddingMobile !== undefined ? ctaHpaddingMobile : ctaButtonRightPaddingMobile,
        }
      )
      this.props.setAttributes({isCtaButtonPaddingMarginValueUpdated: true});
    }
  

    var advancedControls;
      advancedControls = (
          <PanelBody
              title={__("Spacing Settings", "responsive-block-editor-addons")}
              initialOpen={false}
          >
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
              className: " responsive-tablet-tab  responsive-responsive-tabs",
            },
            {
              name: "mobile",
              title: <Dashicon icon="smartphone" />,
              className: " responsive-mobile-tab  responsive-responsive-tabs",
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
                      "Horizontal Padding",
                      "responsive-block-editor-addons"
                    )}
                    value={ctaHpaddingMobile}
                    onChange={(value) => {
                      setAttributes({ ctaHpaddingMobile: value });
                    }}
                    min={0}
                    max={1000}
                    allowReset
                  />
                </Fragment>
              );
            } else if ("tablet" === tab.name) {
              tabout = (
                <Fragment>
                  <RbeaRangeControl
                    label={__(
                      "Horizontal Padding",
                      "responsive-block-editor-addons"
                    )}
                    value={ctaHpaddingTablet}
                    onChange={(value) => {
                      setAttributes({ ctaHpaddingTablet: value });
                    }}
                    min={0}
                    max={1000}
                    allowReset
                  />
                </Fragment>
              );
            } else {
              tabout = (
                <Fragment>
                  <RbeaRangeControl
                    label={__(
                      "Horizontal Padding",
                      "responsive-block-editor-addons"
                    )}
                    value={ctaHpadding}
                    onChange={(value) => {
                      setAttributes({ ctaHpadding: value });
                    }}
                    min={0}
                    max={1000}
                    allowReset
                  />
                </Fragment>
              );
            }
            return <div>{tabout}</div>;
          }}
        </TabPanel> */}
        <ResponsiveNewPaddingControl
          attrNameTemplate="ctaButton%s"
          resetValues={ctaButtonPaddingResetValues}
          {...this.props}
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
                className: " responsive-tablet-tab  responsive-responsive-tabs",
              },
              {
                name: "mobile",
                title: <Dashicon icon="smartphone" />,
                className: " responsive-mobile-tab  responsive-responsive-tabs",
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
                        "Vertical Padding",
                        "responsive-block-editor-addons"
                      )}
                      value={ctaVpaddingMobile}
                      onChange={(value) => {
                        setAttributes({ ctaVpaddingMobile: value });
                      }}
                      min={0}
                      max={1000}
                      allowReset
                    />
                  </Fragment>
                );
              } else if ("tablet" === tab.name) {
                tabout = (
                  <Fragment>
                    <RbeaRangeControl
                      label={__(
                        "Vertical Padding",
                        "responsive-block-editor-addons"
                      )}
                      value={ctaVpaddingTablet}
                      onChange={(value) => {
                        setAttributes({ ctaVpaddingTablet: value });
                      }}
                      min={0}
                      max={1000}
                      allowReset
                    />
                  </Fragment>
                );
              } else {
                tabout = (
                  <Fragment>
                    <RbeaRangeControl
                      label={__(
                        "Vertical Padding",
                        "responsive-block-editor-addons"
                      )}
                      value={ctaVpadding}
                      onChange={(value) => {
                        setAttributes({ ctaVpadding: value });
                      }}
                      min={0}
                      max={1000}
                      allowReset
                    />
                  </Fragment>
                );
              }

              return <div>{tabout}</div>;
            }}
          </TabPanel>
          { this.props.showMarginControls == true && (
            <Fragment>
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
                        className: " responsive-tablet-tab  responsive-responsive-tabs",
                    },
                    {
                        name: "mobile",
                        title: <Dashicon icon="smartphone" />,
                        className: " responsive-mobile-tab  responsive-responsive-tabs",
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
                                "Vertical Margin",
                                "responsive-block-editor-addons"
                            )}
                            min={0}
                            max={200}
                            allowReset
                            value={vMarginMobile}
                            onChange={(value) =>
                                setAttributes({
                                vMarginMobile: value,
                                })
                            }
                            />
                        </Fragment>
                        );
                    } else if ("tablet" === tab.name) {
                        tabout = (
                        <Fragment>
                            <RbeaRangeControl
                            label={__(
                                "Vertical Margin",
                                "responsive-block-editor-addons"
                            )}
                            min={0}
                            max={200}
                            allowReset
                            value={vMarginTablet}
                            onChange={(value) =>
                                setAttributes({
                                vMarginTablet: value,
                                })
                            }
                            />
                        </Fragment>
                        );
                    } else {
                        tabout = (
                        <Fragment>
                            <RbeaRangeControl
                            label={__(
                                "Vertical Margin",
                                "responsive-block-editor-addons"
                            )}
                            min={0}
                            max={200}
                            allowReset
                            value={vMargin}
                            onChange={(value) =>
                                setAttributes({
                                vMargin: value,
                                })
                            }
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
                        className: " responsive-tablet-tab  responsive-responsive-tabs",
                    },
                    {
                        name: "mobile",
                        title: <Dashicon icon="smartphone" />,
                        className: " responsive-mobile-tab  responsive-responsive-tabs",
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
                                "Horizontal Margin",
                                "responsive-block-editor-addons"
                            )}
                            min={0}
                            max={200}
                            allowReset
                            value={hMarginMobile}
                            onChange={(value) =>
                                setAttributes({
                                hMarginMobile: value,
                                })
                            }
                            />
                        </Fragment>
                        );
                    } else if ("tablet" === tab.name) {
                        tabout = (
                        <Fragment>
                            <RbeaRangeControl
                            label={__(
                                "Horizontal Margin",
                                "responsive-block-editor-addons"
                            )}
                            min={0}
                            max={200}
                            allowReset
                            value={hMarginTablet}
                            onChange={(value) =>
                                setAttributes({
                                hMarginTablet: value,
                                })
                            }
                            />
                        </Fragment>
                        );
                    } else {
                        tabout = (
                        <Fragment>
                            <RbeaRangeControl
                            label={__(
                                "Horizontal Margin",
                                "responsive-block-editor-addons"
                            )}
                            min={0}
                            max={200}
                            allowReset
                            value={hMargin}
                            onChange={(value) =>
                                setAttributes({
                                hMargin: value,
                                })
                            }
                            />
                        </Fragment>
                        );
                    }
                    return <div>{tabout}</div>;
                    }}
                </TabPanel>
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

export default ButtonSpacingControl;
