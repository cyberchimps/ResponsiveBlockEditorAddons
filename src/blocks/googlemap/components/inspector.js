/**
 * Inspector Controls
 */
import InspectorTab from "../../../components/InspectorTab";
import InspectorTabs from "../../../components/InspectorTabs";
import ResponsiveNewPaddingControl from "../../../settings-components/ResponsiveNewSpacingSettings/ResponsiveNewPaddingControl/index";
import ResponsiveNewMarginControl from "../../../settings-components/ResponsiveNewSpacingSettings/ResponsiveNewMarginControl/index";

import RbeaRangeControl from "../../../utils/components/rbea-range-control";

// Setup the block
const { __ } = wp.i18n;
const { Component, Fragment } = wp.element;

// Import block components
const { InspectorControls } = wp.blockEditor;

// Import Inspector components
const {
	PanelBody,
	RangeControl,
	BaseControl,
    TabPanel,
    Dashicon,
    ToggleControl,
} = wp.components;
import { ENTER } from '@wordpress/keycodes';


/**
 * Create an Inspector Controls wrapper Component
 */
export default class Inspector extends Component {
	constructor(props) {
		super(...arguments);
		this.state = {
			address: props.attributes.address,
		};
        this.handleKeyDown = this.handleKeyDown.bind( this );

    }

    handleKeyDown( keyCode ) {
        if ( keyCode !== ENTER ) {
            return;
        }
	}

	render() {
		// Setup the attributes
		const {
			attributes: { 
            zoom,
            height,
            heightMobile,
            heightTablet,
            hideWidget,
            hideWidgetTablet,
            hideWidgetMobile,
            z_index,
            z_indexMobile,
            z_indexTablet,
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

		return (
			<InspectorControls key="inspector">
				<InspectorTabs>
					<InspectorTab key={"content"}>
						<PanelBody>
							<RbeaRangeControl
								label={__("Zoom", "responsive-block-editor-addons")}
								value={zoom}
								onChange={(value) =>
									this.props.setAttributes({
										zoom: value,
									})
								}
								min={10}
								max={17}
								step={1}
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
                    "Height in pixels",
                    "responsive-block-editor-addons"
            )}
                value={heightMobile}
                onChange={(value) =>
                setAttributes({
                    heightMobile: value,
                })
            }

                min={100}
                max={2000}
                step={10}
                />
                </Fragment>
            );
            } else if ("tablet" === tab.name) {
                tabout = (
                    <Fragment>
                    <RbeaRangeControl
                label={__(
                    "Height in pixels",
                    "responsive-block-editor-addons"
            )}
                value={heightTablet}
                onChange={(value) =>
                setAttributes({
                    heightTablet: value,
                })
            }

                min={100}
                max={2000}
                step={10}
                />
                </Fragment>
            );
            } else {
                tabout = (
                    <Fragment>
                    <RbeaRangeControl
                label={__("Height in pixels", "responsive-block-editor-addons")}
                min={100}
                max={2000}
                step={10}
                value={height}
                onChange={(value) =>
                setAttributes({
                    height: value,
                })
            }

                />
                </Fragment>
            );
            }

            return <div>{tabout}</div>;
        }}
    </TabPanel>
						</PanelBody>

					</InspectorTab>
                    <InspectorTab key={'style'}>
                        <PanelBody title={__("Spacing", "responsive-block-editor-addons")} initialOpen={true}>
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
