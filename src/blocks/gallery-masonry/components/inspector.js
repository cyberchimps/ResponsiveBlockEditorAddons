/**
 * Internal dependencies
 */
import ResponsiveTabsControl from "../../../utils/components/responsive-tabs-control";
import captionOptions from "../../../utils/components/block-gallery/options/caption-options";
import SizeControl from "../../../utils/components/size-control";
import GalleryLinkSettings from "../../../utils/components/block-gallery/gallery-link-settings";
import InspectorTab from "../../../components/InspectorTab";
import InspectorTabs from "../../../components/InspectorTabs";
import ResponsiveNewPaddingControl from "../../../settings-components/ResponsiveNewSpacingSettings/ResponsiveNewPaddingControl/index";
import ResponsiveNewMarginControl from "../../../settings-components/ResponsiveNewSpacingSettings/ResponsiveNewMarginControl/index";
import RbeaRangeControl from "../../../utils/components/rbea-range-control";
import RbeaTabRadioControl from "../../../utils/components/rbea-tab-radio-control";

/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";
import { Component, Fragment } from "@wordpress/element";
import { InspectorControls } from "@wordpress/block-editor";
import {
	PanelBody,
	RangeControl,
	ToggleControl,
	SelectControl,
	TabPanel,
	Dashicon,
} from "@wordpress/components";

/**
 * Inspector controls
 */
class Inspector extends Component {
	constructor() {
		super(...arguments);
		this.state = {
			columns: this.props.attributes.columnsize,
			customHeight: this.props.attributes.customHeight,
			customWidth: this.props.attributes.customWidth,
		  };  
		this.setRadiusTo = this.setRadiusTo.bind(this);
		this.setCaptionStyleTo = this.setCaptionStyleTo.bind(this);
		this.setNumberOfColumns = this.setNumberOfColumns.bind(this);
		this.setCustomHeight = this.setCustomHeight.bind(this);
		this.setCustomWidth = this.setCustomWidth.bind(this);
	}

	componentDidUpdate() {
		if (this.props.attributes.gutter <= 0) {
			this.props.setAttributes({
				radius: 0,
			});
		}
	}
	setNumberOfColumns(value) {
		this.setState({ columns: value });
		this.props.setAttributes({ columnsize: value });
	  }
	
	setRadiusTo(value) {
		this.props.setAttributes({ radius: value });
	}
	setCaptionStyleTo(value) {
		this.props.setAttributes({ captionStyle: value });
	}
	setCustomHeight(value) {
		console.log(value)
		this.props.setAttributes({ customHeight: value });
	  }
	  setCustomWidth(value) {
		this.props.setAttributes({ customWidth: value });
	  }

	getCaptionsHelp(checked) {
		return checked
			? __(
				"Showing captions for each media item.",
				"responsive-block-editor-addons"
			)
			: __("Toggle to show media captions.", "responsive-block-editor-addons");
	}

	getLightboxHelp(checked) {
		return checked
			? __("Image lightbox is enabled.", "responsive-block-editor-addons")
			: __(
				"Toggle to enable the image lightbox.",
				"responsive-block-editor-addons"
			);
	}

	render() {
		const { attributes, setAttributes } = this.props;

		const {
			captions,
			captionStyle,
			gutter,
			gutterMobile,
			gutterTablet,
			radius,
			lightbox,
			linkTo,
			columnsize,
			customHeight,
			customWidth,
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
		return (
			<InspectorControls>
				<InspectorTabs>
					<InspectorTab key={"content"}>
						<PanelBody
							title={__("Masonry settings", "responsive-block-editor-addons")}
						>
							<div className="rbea-gallery-masonry-slider-control-container">
							<ResponsiveTabsControl {...this.props} />
							</div>
							<div className="rbea-gallery-masonry-slider-control-container">
							<RbeaRangeControl
									label={__("Columns", "responsive-block-editor-addons")}
									aria-label={__(
										"Number of columns for masonary",
										"responsive-block-editor-addons"
									)}
									value={columnsize}
									onChange={this.setNumberOfColumns}
									min={1}
									max={10}
									step={1}
								/>
								</div>
							<div className="rbea-gallery-masonry-slider-control-container">
							<RbeaRangeControl
            				  label={__("Custom Height", "responsive-block-editor-addons")}
            				  value={customHeight}
            				  onChange={this.setCustomHeight}
            				  min={0}
            				  max={1000}
            				  step={1}
            				/>
							</div>
							
							<div className="rbea-gallery-masonry-slider-control-container">
            				<RbeaRangeControl
            				  label={__("Custom Width", "responsive-block-editor-addons")}
            				  value={customWidth}
            				  onChange={(value) => this.setCustomWidth(value)}
            				  min={0}
            				  max={1000}
            				  step={1}
            				/>	
							</div>
							{gutter > 0 && (
								<div className="rbea-gallery-masonry-slider-control-container">
								<RbeaRangeControl
									label={__("Rounded corners", "responsive-block-editor-addons")}
									aria-label={__(
										"Add rounded corners to the gallery items.",
										"responsive-block-editor-addons"
									)}
									value={radius}
									onChange={this.setRadiusTo}
									min={0}
									max={20}
									step={1}
								/>
								</div>
							)}

							<ToggleControl
								label={__("Lightbox", "responsive-block-editor-addons")}
								checked={!!lightbox}
								onChange={() => setAttributes({ lightbox: !lightbox, linkTo: 'none' })}
								help={this.getLightboxHelp}
							/>

							<ToggleControl
								label={__("Captions", "responsive-block-editor-addons")}
								checked={!!captions}
								onChange={() => setAttributes({ captions: !captions })}
								help={this.getCaptionsHelp}
							/>

							{captions && (
								<RbeaTabRadioControl
									label={__("Caption style", "responsive-block-editor-addons")}
									value={captionStyle}
									onChange={this.setCaptionStyleTo}
									options={captionOptions}
								/>
							)}
						</PanelBody>
						<GalleryLinkSettings {...this.props} />
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
					</InspectorTab>
				</InspectorTabs>
			</InspectorControls>
		);
	}
}

export default Inspector;
