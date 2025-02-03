/**
 * Inspector Controls
 */
import InspectorTab from "../../../components/InspectorTab";
import InspectorTabs from "../../../components/InspectorTabs";
import ResponsiveNewPaddingControl from "../../../settings-components/ResponsiveNewSpacingSettings/ResponsiveNewPaddingControl/index";
import ResponsiveNewMarginControl from "../../../settings-components/ResponsiveNewSpacingSettings/ResponsiveNewMarginControl/index";
import RbeaTabRadioControl from "../../../utils/components/rbea-tab-radio-control";
import stackOnIcons from "../../../utils/components/rbea-tab-radio-control/rbea-stack-on-icons";

// Setup the block
const { __ } = wp.i18n;
const { Component, Fragment } = wp.element;

// Import block components
const {
	InspectorControls,
	PanelColorSettings,
	AlignmentToolbar,
	BlockControls,
	InnerBlocks,
} = wp.blockEditor;

// Import Inspector components
const {
	PanelBody,
	RangeControl,
	SelectControl,
	BaseControl,
	TabPanel,
	Dashicon,
	ToggleControl,
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
				buttonAlignment,
				buttonAlignmentTablet,
				buttonAlignmentMobile,
				buttons,
				gap,
				stack,
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
						<PanelBody
							title={__("General", "responsive-block-editor-addons")}
							initialOpen={true}
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
												<BaseControl>
													<p>
														{__(
															"Alignment Mobile",
															"responsive-block-editor-addons"
														)}
													</p>
													<div className="responsive-block-editor-addons-alignment-mobile">
														<AlignmentToolbar
															value={buttonAlignmentMobile}
															onChange={(value) =>
																setAttributes({
																	buttonAlignmentMobile: value,
																})
															}
															controls={["left", "center", "right", "full"]}
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
															value={buttonAlignmentTablet}
															onChange={(value) =>
																setAttributes({
																	buttonAlignmentTablet: value,
																})
															}
															controls={["left", "center", "right", "full"]}
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
													<p>{__("Alignment", "responsive-block-editor-addons")}</p>
													<div className="responsive-block-editor-addons-alignment-tablet">
														<AlignmentToolbar
															value={buttonAlignment}
															onChange={(value) =>
																setAttributes({
																	buttonAlignment: value,
																})
															}
															controls={["left", "center", "right", "full"]}
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
							<hr className="responsive-block-editor-addons-editor__separator" />
							<RbeaTabRadioControl
								label={__("Stack on", "responsive-block-editor-addons")}
								value={stack}
								options={[
									{ value: "desktop", icon: stackOnIcons.desktop, label: __("Desktop", "responsive-block-editor-addons") },
									{ value: "tablet", icon: stackOnIcons.tablet, label: __("Tablet", "responsive-block-editor-addons") },
									{ value: "mobile", icon: stackOnIcons.mobile, label: __("Mobile", "responsive-block-editor-addons") },
								]}
								onChange={(value) => setAttributes({ stack: value })}
								help={__(
									"Note: Choose breakpoint on which the buttons will stack.", "responsive-block-editor-addons"
								)}
								allowReset={true}
								defaultValue={"none"}
								hasIcon={true}
								optionHasBorder={true}
							/>
						</PanelBody>
					</InspectorTab>
					<InspectorTab key={"style"}>
						<PanelBody
							title={__("Spacing", "responsive-block-editor-addons")}
							initialOpen={true}
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
            		</InspectorTab>
				</InspectorTabs>
			</InspectorControls>
		);
	}
}
