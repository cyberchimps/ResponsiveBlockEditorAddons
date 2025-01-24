/**
 * Inspector Controls
 */
import InspectorTab from "../../../components/InspectorTab";
import InspectorTabs from "../../../components/InspectorTabs";
import ResponsiveNewPaddingControl from "../../../settings-components/ResponsiveNewSpacingSettings/ResponsiveNewPaddingControl/index";
import ResponsiveNewMarginControl from "../../../settings-components/ResponsiveNewSpacingSettings/ResponsiveNewMarginControl/index";
import RbeaRangeControl from "../../../utils/components/rbea-range-control";
import RbeaBorderRadiusControl from "../../../settings-components/RbeaBorderRadiusControl";

// Setup the block
const { __ } = wp.i18n;
const { Component, Fragment } = wp.element;

// Import block components
const { InspectorControls, PanelColorSettings } = wp.blockEditor;

// Import Inspector components
const {
  PanelBody,
  ToggleControl,
  TextareaControl,
  RangeControl,
  TabPanel,
  Dashicon,
} = wp.components;

/**
 * Create an Inspector Controls wrapper Component
 */
export default class Inspector extends Component {
  constructor(props) {
    super(...arguments);
  }

  render() {
    // Setup the attributes
    const {
      attributes: {
        token,
        columns,
        columnsMobile,
        columnsTablet,
        instaPosts,
        numberOfItems,
        imagesGap,
        borderRadius,
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
        hasEqualImages,
        showCaptions,
        instaTopPadding,
        instaBottomPadding,
        instaRightPadding,
        instaLeftPadding,
        instaTopPaddingMobile,
        instaBottomPaddingMobile,
        instaRightPaddingMobile,
        instaLeftPaddingMobile,
        instaTopPaddingTablet,
        instaBottomPaddingTablet,
        instaRightPaddingTablet,
        instaLeftPaddingTablet,
        instaTopMargin,
        instaBottomMargin,
        instaRightMargin,
        instaLeftMargin,
        instaTopMarginMobile,
        instaBottomMarginMobile,
        instaRightMarginMobile,
        instaLeftMarginMobile,
        instaTopMarginTablet,
        instaBottomMarginTablet,
        instaRightMarginTablet,
        instaLeftMarginTablet,
        gridSize,
        hideWidget,
        hideWidgetTablet,
        hideWidgetMobile,
        z_index,
        z_indexMobile,
        z_indexTablet,
        instaIsMarginControlConnected,
        instaIsPaddingControlConnected,
      },
      setAttributes,
    } = this.props;

    const instaMarginResetValues = {
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

    const instaPaddingResetValues = {
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

    // backward compatibility for border radius control 
    if (!blockIsRadiusValueUpdated) {
      this.props.setAttributes(
        {
          blockTopRadius:          borderRadius !== undefined ? borderRadius : blockTopRadius,
          blockBottomRadius:       borderRadius !== undefined ? borderRadius : blockBottomRadius,
          blockLeftRadius:         borderRadius !== undefined ? borderRadius : blockLeftRadius,
          blockRightRadius:        borderRadius !== undefined ? borderRadius : blockRightRadius,
          blockTopRadiusTablet:    borderRadius !== undefined ? borderRadius : blockTopRadiusTablet,
          blockBottomRadiusTablet: borderRadius !== undefined ? borderRadius : blockBottomRadiusTablet,
          blockRightRadiusTablet:  borderRadius !== undefined ? borderRadius : blockRightRadiusTablet,
          blockLeftRadiusTablet:   borderRadius !== undefined ? borderRadius : blockLeftRadiusTablet,
          blockTopRadiusMobile:    borderRadius !== undefined ? borderRadius : blockTopRadiusMobile,
          blockBottomRadiusMobile: borderRadius !== undefined ? borderRadius : blockBottomRadiusMobile,
          blockLeftRadiusMobile:   borderRadius !== undefined ? borderRadius : blockLeftRadiusMobile,
          blockRightRadiusMobile:  borderRadius !== undefined ? borderRadius : blockRightRadiusMobile,
        }
      )
      this.props.setAttributes({blockIsRadiusValueUpdated: true});
    }

    return (
      <InspectorControls key="inspector">
        <InspectorTabs>
          <InspectorTab key={"content"}>
            <PanelBody title={__("API Key", "responsive-block-editor-addons")}>
              <TextareaControl
                label={__("Access Token", "responsive-block-editor-addons")}
                value={token}
                onChange={(value) => {
                  setAttributes({ token: value });
                }}
              />
              <p className="rbea-tab-radio-options-help-text">
                Note: This block requires you to obtain an Instagram Access
                Token to connect Instagram with WordPress. You will need to use
                your Instagram credentials to get access token.
              </p>
            </PanelBody>
            <PanelBody title={__("Settings", "responsive-block-editor-addons")} initialOpen={false}>
              <RbeaRangeControl
                label={__("Number Of Items", "responsive-block-editor-addons")}
                value={numberOfItems}
                onChange={(value) => {
                  setAttributes({ numberOfItems: value });
                }}
                min={1}
                max={20}
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
                          label={__("Columns Mobile", "responsive-block-editor-addons")}
                          value={columnsMobile}
                          onChange={(value) => {
                            setAttributes({ columnsMobile: value });
                          }}
                          min={1}
                          max={8}
                        />
                      </Fragment>
                    );
                  } else if ("tablet" === tab.name) {
                    tabout = (
                      <Fragment>
                        <RbeaRangeControl
                          label={__("Columns Tablet", "responsive-block-editor-addons")}
                          value={columnsTablet}
                          onChange={(value) => {
                            setAttributes({ columnsTablet: value });
                          }}
                          min={1}
                          max={8}
                        />
                      </Fragment>
                    );
                  } else {
                    tabout = (
                      <Fragment>
                        <RbeaRangeControl
                          label={__("Columns", "responsive-block-editor-addons")}
                          value={columns}
                          onChange={(value) => {
                            setAttributes({ columns: value });
                          }}
                          min={1}
                          max={8}
                        />
                      </Fragment>
                    );
                  }

                  return <div>{tabout}</div>;
                }}
              </TabPanel>

              <RbeaRangeControl
                label={__("Spacing", "responsive-block-editor-addons")}
                value={imagesGap}
                onChange={(value) => setAttributes({ imagesGap: value })}
                min={0}
                max={30}
              />

              <RbeaBorderRadiusControl
                attrNameTemplate="block%s"
                {...this.props}
              />
            </PanelBody>
          </InspectorTab>
          <InspectorTab key={"style"}>
            <PanelBody
              title={__("Spacing", "responsive-block-editor-addons")}
              initialOpen={true}
            >
              <ResponsiveNewPaddingControl
                attrNameTemplate="insta%s"
                resetValues={instaPaddingResetValues}
                {...this.props}
              />
              <ResponsiveNewMarginControl
                attrNameTemplate="insta%s"
                resetValues={instaMarginResetValues}
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
