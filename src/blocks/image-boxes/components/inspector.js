/**
 * Inspector Controls
 */

import times from "lodash/times";
import BoxShadowControl from "../../../utils/components/box-shadow";
import fontOptions from "../../../utils/googlefonts";
import { loadGoogleFont } from "../../../utils/font";
import InspectorTab from "../../../components/InspectorTab";
import InspectorTabs from "../../../components/InspectorTabs";
import TypographyHelperControl from "../../../settings-components/TypographySettings";
import ResponsiveSpacingControl from "../../../settings-components/ResponsiveSpacingSettings";
import ResponsiveNewMarginControl from "../../../settings-components/ResponsiveNewSpacingSettings/ResponsiveNewMarginControl/index";
import ResponsiveNewPaddingControl from "../../../settings-components/ResponsiveNewSpacingSettings/ResponsiveNewPaddingControl/index";
import RbeaRangeControl from "../../../utils/components/rbea-range-control";
import RbeaAngleRangeControl from "../../../utils/components/rbea-angle-range-control";
import RbeaColorControl from "../../../utils/components/rbea-color-control";
import RbeaTabRadioControl from "../../../utils/components/rbea-tab-radio-control";
import RbeaMediaUploadControl from "../../../utils/components/rbea-media-upload-control";
import RbeaBorderStyleTabControl from "../../../utils/components/rbea-border-style-tab-control";
import RbeaBorderRadiusControl from "../../../settings-components/RbeaBorderRadiusControl";

// Setup the block
const { __ } = wp.i18n;
const { Component, Fragment } = wp.element;
const { MediaUpload, InspectorControls, PanelColorSettings, ColorPalette } = wp.blockEditor;

// Import Inspector components
const {
  PanelBody,
  RangeControl,
  SelectControl,
  ToggleControl,
  TabPanel,
  Dashicon,
  BaseControl,
  Button,
} = wp.components;

/**
 * Create an Inspector Controls wrapper Component
 */
export default class Inspector extends Component {
  constructor(props) {
    super(...arguments);
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
        count,
        imageboxesBlock,
        itemBackgroundColor,
        itemHoverBackgroundColor,
        titleHeadingTag,
        contentAlign,
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
        blockBorderStyle,
        blockBorderWidth,
        hasArrow,
        opacity,
        boxShadowColor,
        boxShadowHOffset,
        boxShadowVOffset,
        boxShadowBlur,
        boxShadowSpread,
        boxShadowPosition,
        boxPaddingRight,
        boxPaddingLeft,
        boxPaddingTop,
        boxPaddingBottom,
        boxHeight,
        backgroundPosition,
        backgroundRepeat,
        backgroundSize,
        secondaryBackgroundColor,
        hoverSecondaryBackgroundColor,
        gradientDegree,
        bgGradient,
        hoverGradientDegree,
        hoverBgGradient,
        imageHoverEffect,
        hoverOpacity,
        titleFontFamily,
        titleFontSize,
        titleFontSizeMobile,
        titleFontSizeTablet,
        titleFontWeight,
        titleLineHeight,
        titleColor,
        descriptionFontFamily,
        descriptionFontSize,
        descriptionFontWeight,
        descriptionLineHeight,
        descriptionColor,
        imageSize,
        verticalAlignment,
        titleSpacing,
        titleSpacingMobile,
        titleSpacingTablet,
        descriptionSpacing,
        descriptionSpacingMobile,
        descriptionSpacingTablet,
        arrowColor,
        arrowSize,
        backgroundImageOne,
        backgroundImageTwo,
        backgroundImageThree,
        backgroundImageFour,
        gutter,
        showDescription,
        showTitle,
        descriptionFontSizeMobile,
        descriptionFontSizeTablet,
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
        blockIsMarginControlConnected,
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

    const gutterOptions = [
      {
        value: "no",
        label: __("None", "responsive-block-editor-addons"),
        shortName: __("None", "responsive-block-editor-addons"),
      },
      {
        value: "small",
        /* translators: abbreviation for small size */
        label: __("S", "responsive-block-editor-addons"),
        tooltip: __("Small", "responsive-block-editor-addons"),
      },
      {
        value: "medium",
        /* translators: abbreviation for medium size */
        label: __("M", "responsive-block-editor-addons"),
        tooltip: __("Medium", "responsive-block-editor-addons"),
      },
      {
        value: "large",
        /* translators: abbreviation for large size */
        label: __("L", "responsive-block-editor-addons"),
        tooltip: __("Large", "responsive-block-editor-addons"),
      },
      {
        value: "huge",
        /* translators: abbreviation for largest size */
        label: __("XL", "responsive-block-editor-addons"),
        tooltip: __("Huge", "responsive-block-editor-addons"),
      },
    ];

    const fontWeightOptions = [
      {
        value: "",
        label: __("Default", "responsive-block-editor-addons"),
      },
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

    // Update color value
    const onChangeBackgroundColor = (value) =>
      setAttributes({ itemBackgroundColor: value });
    const onChangeHoverBackgroundColor = (value) =>
      setAttributes({ itemHoverBackgroundColor: value });
    const onChangeSecondaryBackgroundColor = (value) =>
      setAttributes({ secondaryBackgroundColor: value });
    const onChangeHoverSecondaryBackgroundColor = (value) =>
      setAttributes({ hoverSecondaryBackgroundColor: value });
    const onChangeTitleHeadingTag = (value) =>
      setAttributes({ titleHeadingTag: value });
    const onChangeContentAlign = (value) =>
      setAttributes({ contentAlign: value });
    const onChangeImageHoverEffect = (value) =>
      setAttributes({ imageHoverEffect: value });
    const onChangeBackgroundPosition = (value) =>
      setAttributes({ backgroundPosition: value });
    const onChangeBackgroundRepeat = (value) =>
      setAttributes({ backgroundRepeat: value });
    const onChangeBackgroundSize = (value) =>
      setAttributes({ backgroundSize: value });
    const onChangeImageSize = (value) => setAttributes({ imageSize: value });
    const onChangeVerticalAlignment = (value) =>
      setAttributes({ verticalAlignment: value });
    const onChangeArrowColor = (value) => setAttributes({ arrowColor: value });

    // backward compatibility for Image Box border radius control
    if (!blockIsRadiusValueUpdated) {
      this.props.setAttributes
      (
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
                  "Number of Image Boxes Blocks",
                  "responsive-block-editor-addons"
                )}
                value={count}
                onChange={(newCount) => {
                  let cloneTest_block = [...imageboxesBlock];
                  if (cloneTest_block.length < newCount) {
                    const incAmount = Math.abs(
                      newCount - cloneTest_block.length
                    );

                    {
                      times(incAmount, (n) => {
                        cloneTest_block.push({
                          title: "Image Box Title " + newCount,
                          descriptions: "",
                        });
                      });
                    }
                    setAttributes({ imageboxesBlock: cloneTest_block });
                  } else {
                    const incAmount = Math.abs(
                      newCount - cloneTest_block.length
                    );
                    let data_new = cloneTest_block;
                    for (var i = 0; i < incAmount; i++) {
                      data_new.pop();
                    }
                    setAttributes({ imageboxesBlock: data_new });
                  }
                  setAttributes({ count: newCount });
                }}
                min={1}
                max={4}
                step={1}
              />
              <RbeaRangeControl
                label={__("Height", "responsive-block-editor-addons")}
                value={boxHeight}
                onChange={(newCount) => {
                  setAttributes({ boxHeight: newCount });
                }}
                min={100}
                max={700}
                step={1}
              />
              {count > 1 && (
                <RbeaTabRadioControl
                  label={__("Gutter", "responsive-block-editor-addons")}
                  value={gutter}
                  options={gutterOptions}
                  onChange={(newGutter) => setAttributes({ gutter: newGutter })}
                />
              )}
            </PanelBody>

            <PanelBody
              title={__("Content", "responsive-block-editor-addons")}
              initialOpen={false}
            >
              <ToggleControl
                label={__("Enable Title", "responsive-block-editor-addons")}
                checked={showTitle}
                onChange={(value) => setAttributes({ showTitle: !showTitle })}
              />
              <ToggleControl
                label={__(
                  "Enable Description",
                  "responsive-block-editor-addons"
                )}
                checked={showDescription}
                onChange={(value) =>
                  setAttributes({ showDescription: !showDescription })
                }
              />
            </PanelBody>

            <PanelBody
              title={__("Alignment", "responsive-block-editor-addons")}
              initialOpen={false}
            >
              <RbeaTabRadioControl
                label={__("Horizontal Alignment", "responsive-block-editor-addons")}
                value={contentAlign}
                onChange={onChangeContentAlign}
                options={[
                  { value: "left", label: __("Left", "responsive-block-editor-addons") },
                  { value: "center", label: __("Center", "responsive-block-editor-addons") },
                  { value: "right", label: __("Right", "responsive-block-editor-addons") },
                ]}
                defaultValue={"center"}
              />
              <RbeaTabRadioControl
                label={__("Vertical Alignment", "responsive-block-editor-addons")}
                value={verticalAlignment}
                onChange={onChangeVerticalAlignment}
                options={[
                  { value: "flex-start", label: __("Top", "responsive-block-editor-addons") },
                  { value: "center", label: __("Center", "responsive-block-editor-addons") },
                  { value: "flex-end", label: __("Bottom", "responsive-block-editor-addons") },
                ]}
                defaultValue={"center"}
              />
            </PanelBody>

            <PanelBody
              title={__("Background Image", "responsive-block-editor-addons")}
              initialOpen={false}
            >
              <Fragment>
              <RbeaMediaUploadControl
                label={__('Background Image 1', 'responsive-block-editor-addons')}
                value={{
                    url: backgroundImageOne || '',
                }}
                onChange={(newValue) => {
                    setAttributes({
                      backgroundImageOne: newValue.url,
                    });
                }}
                mediaType={'image'}
              />
                {count > 1 && (
                  <>
                  <RbeaMediaUploadControl
                    label={__('Background Image 2', 'responsive-block-editor-addons')}
                    value={{
                        url: backgroundImageTwo || '',
                    }}
                    onChange={(newValue) => {
                        setAttributes({
                          backgroundImageTwo: newValue.url,
                        });
                    }}
                    mediaType={'image'}
                  />
                  </>
                )}
                {(count === 3 || count === 4) && (
                  <>
                  <RbeaMediaUploadControl
                    label={__('Background Image 3', 'responsive-block-editor-addons')}
                    value={{
                        url: backgroundImageThree || '',
                    }}
                    onChange={(newValue) => {
                        setAttributes({
                          backgroundImageThree: newValue.url,
                        });
                    }}
                    mediaType={'image'}
                  />
                  </>
                )}
                {count === 4 && (
                  <>
                  <RbeaMediaUploadControl
                    label={__('Background Image 4', 'responsive-block-editor-addons')}
                    value={{
                        url: backgroundImageFour || '',
                    }}
                    onChange={(newValue) => {
                        setAttributes({
                          backgroundImageFour: newValue.url,
                        });
                    }}
                    mediaType={'image'}
                  />
                  </>
                )}
              </Fragment>
            </PanelBody>
            <PanelBody
              title={__("Image", "responsive-block-editor-addons")}
              initialOpen={false}
            >
              <RbeaTabRadioControl
                label={__("Image Size", "responsive-block-editor-addons")}
                value={imageSize}
                onChange={onChangeImageSize}
                options={[
                  { value: "full", label: __("Full Size", "responsive-block-editor-addons") },
                  { value: "thumbnail", label: __("Thumbnail", "responsive-block-editor-addons") },
                  { value: "medium", label: __("Medium", "responsive-block-editor-addons") },
                  { value: "large", label: __("Large", "responsive-block-editor-addons") },
                ]}
              />
              <SelectControl
                label={__("Background Position", "responsive-block-editor-addons")}
                value={backgroundPosition}
                onChange={onChangeBackgroundPosition}
                options={[
                  { value: "left top", label: __("Left Top", "responsive-block-editor-addons") },
                  { value: "left center", label: __("Left Center", "responsive-block-editor-addons") },
                  { value: "left bottom", label: __("Left Bottom", "responsive-block-editor-addons") },
                  { value: "right top", label: __("Right Top", "responsive-block-editor-addons") },
                  { value: "right center", label: __("Right Center", "responsive-block-editor-addons") },
                  { value: "right bottom", label: __("Right Bottom", "responsive-block-editor-addons") },
                  { value: "center top", label: __("Center Top", "responsive-block-editor-addons") },
                  { value: "center center", label: __("Center Center", "responsive-block-editor-addons") },
                  { value: "center bottom", label: __("Center Bottom", "responsive-block-editor-addons") },
                ]}
              />
              <SelectControl
                label={__("Background Repeat", "responsive-block-editor-addons")}
                value={backgroundRepeat}
                onChange={onChangeBackgroundRepeat}
                options={[
                  { value: "initial", label: __("Initial", "responsive-block-editor-addons") },
                  { value: "repeat", label: __("Repeat", "responsive-block-editor-addons") },
                  { value: "no-repeat", label: __("No-Repeat", "responsive-block-editor-addons") },
                  { value: "round", label: __("Round", "responsive-block-editor-addons") },
                  { value: "inherit", label: __("Inherit", "responsive-block-editor-addons") },
                  { value: "space", label: __("Space", "responsive-block-editor-addons") },
                  { value: "repeat-y", label: __("Repeat Y", "responsive-block-editor-addons") },
                  { value: "repeat-x", label: __("Repeat X", "responsive-block-editor-addons") },
                ]}
              />
              <SelectControl
                label={__("Background Size", "responsive-block-editor-addons")}
                value={backgroundSize}
                onChange={onChangeBackgroundSize}
                options={[
                  { value: "initial", label: __("Initial", "responsive-block-editor-addons") },
                  { value: "cover", label: __("Cover", "responsive-block-editor-addons") },
                  { value: "contain", label: __("Contain", "responsive-block-editor-addons") },
                  { value: "auto", label: __("Auto", "responsive-block-editor-addons") },
                  { value: "inherit", label: __("Inherit", "responsive-block-editor-addons") },
                ]}
              />
            </PanelBody>
          </InspectorTab>
          <InspectorTab key={"style"}>
            <PanelBody
              title={__("Overlay Color", "responsive-block-editor-addons")}
              initialOpen={false}
            >
               <RbeaColorControl
									label = {__("Background Color", "responsive-block-editor-addons")}
									colorValue={itemBackgroundColor}
									onChange={(colorValue) =>
										setAttributes({ itemBackgroundColor: colorValue })
									}
									resetColor={() => setAttributes({ itemBackgroundColor: "" })}
								/>
              <ToggleControl
                label="Gradient Background"
                checked={bgGradient}
                onChange={() =>
                  this.props.setAttributes({
                    bgGradient: !bgGradient,
                  })
                }
              />
              {bgGradient && (
                <PanelBody
                  title={__(
                    "Secondary Background Color",
                    "responsive-block-editor-addons"
                  )}
                  initialOpen={true}
                >
                   <RbeaColorControl
									label = {__("Secondary Background Color", "responsive-block-editor-addons")}
									colorValue={secondaryBackgroundColor}
									onChange={(colorValue) =>
										setAttributes({ secondaryBackgroundColor: colorValue })
									}
									resetColor={() => setAttributes({ secondaryBackgroundColor: "" })}
								/>
                </PanelBody>
              )}
              {bgGradient && (
                <RbeaAngleRangeControl
                  label={__(
                    "Gradient Degree",
                    "responsive-block-editor-addons"
                  )}
                  value={gradientDegree}
                  onChange={(value) =>
                    setAttributes({
                      gradientDegree: value !== undefined ? value : 100,
                    })
                  }
                  min={0}
                  max={360}
                />
              )}
              <RbeaRangeControl
                label={__(
                  "Background Color Opacity",
                  "responsive-block-editor-addons"
                )}
                value={opacity}
                onChange={(value) =>
                  setAttributes({ opacity: value !== undefined ? value : 70 })
                }
                min={0}
                max={100}
                allowReset
              />
            </PanelBody>
            <PanelBody
              title={__(
                "Hover Overlay Color",
                "responsive-block-editor-addons"
              )}
              initialOpen={false}
            >
               <RbeaColorControl
									label = {__("Hover Background Color", "responsive-block-editor-addons")}
									colorValue={itemHoverBackgroundColor}
									onChange={(colorValue) =>
										setAttributes({ itemHoverBackgroundColor: colorValue })
									}
									resetColor={() => setAttributes({ itemHoverBackgroundColor: "" })}
								/>
              <ToggleControl
                label={__("Gradient Background", "responsive-block-editor-addons")}
                checked={hoverBgGradient}
                onChange={() =>
                  this.props.setAttributes({
                    hoverBgGradient: !hoverBgGradient,
                  })
                }
              />
              {hoverBgGradient && (
                <PanelBody
                  title={__(
                    "Secondary Background Color",
                    "responsive-block-editor-addons"
                  )}
                  initialOpen={true}
                >
                   <RbeaColorControl
                    label = {__("Secondary Background Color", "responsive-block-editor-addons")}
                    colorValue={hoverSecondaryBackgroundColor}
                    onChange={(colorValue) =>
                      setAttributes({ hoverSecondaryBackgroundColor: colorValue })
                    }
                    resetColor={() => setAttributes({ hoverSecondaryBackgroundColor: "" })}
                  />
                </PanelBody>
              )}
              {hoverBgGradient && (
                <RbeaAngleRangeControl
                  label={__(
                    "Gradient Degree",
                    "responsive-block-editor-addons"
                  )}
                  value={hoverGradientDegree}
                  onChange={(value) =>
                    setAttributes({
                      hoverGradientDegree: value !== undefined ? value : 100,
                    })
                  }
                  min={0}
                  max={360}
                />
              )}
              <RbeaRangeControl
                label={__(
                  "Background Color Opacity",
                  "responsive-block-editor-addons"
                )}
                value={hoverOpacity}
                onChange={(value) =>
                  setAttributes({
                    hoverOpacity: value !== undefined ? value : 70,
                  })
                }
                min={0}
                max={100}
                allowReset
              />
            </PanelBody>
			<PanelBody
				title={__("Text Colors", "responsive-block-editor-addons")}
				initialOpen={false}
			>
                <RbeaColorControl
                    label = {__("Title Color", "responsive-block-editor-addons")}
                    colorValue={titleColor}
                    onChange={(colorValue) =>
                      setAttributes({
                        titleColor: colorValue ,
                      })
                    }
                    resetColor={() => setAttributes({ titleColor: "" })}
                />
                <RbeaColorControl
                    label = {__("Description Color", "responsive-block-editor-addons")}
                    colorValue={descriptionColor}
                    onChange={(colorValue) =>
                      setAttributes({
                        descriptionColor: colorValue ,
                      })
                    }
                    resetColor={() => setAttributes({ descriptionColor: "" })}
                  />
			</PanelBody>
            <PanelBody
              title={__("Typography", "responsive-block-editor-addons")}
              initialOpen={false}
            >
                <RbeaTabRadioControl
                  label={__("Title Heading Tag", "responsive-block-editor-addons")}
                  value={titleHeadingTag}
                  onChange={onChangeTitleHeadingTag}
                  options={[
                    { value: "h1", label: __("H1", "responsive-block-editor-addons") },
                    { value: "h2", label: __("H2", "responsive-block-editor-addons") },
                    { value: "h3", label: __("H3", "responsive-block-editor-addons") },
                    { value: "h4", label: __("H4", "responsive-block-editor-addons") },
                    { value: "h5", label: __("H5", "responsive-block-editor-addons") },
                    { value: "h6", label: __("H6", "responsive-block-editor-addons") },
                  ]}
                />
				<TypographyHelperControl
					title={__("Title Typography", "responsive-block-editor-addons")}
					attrNameTemplate="title%s"
					values={{
					family: titleFontFamily,
					size: titleFontSize,
					sizeMobile: titleFontSizeMobile,
					sizeTablet: titleFontSizeTablet,
					weight: titleFontWeight,
					height: titleLineHeight,
					}}
					showLetterSpacing={false}
					showTextTransform={false}
					setAttributes={setAttributes}
					{...this.props}
				/>
				<TypographyHelperControl
					title={__("Description Typography", "responsive-block-editor-addons")}
					attrNameTemplate="description%s"
					values={{
					family: descriptionFontFamily,
					size: descriptionFontSize,
					sizeMobile: descriptionFontSizeMobile,
					sizeTablet: descriptionFontSizeTablet,
					weight: descriptionFontWeight,
					height: descriptionLineHeight,
					}}
					showLetterSpacing={false}
					showTextTransform={false}
					setAttributes={setAttributes}
					{...this.props}
				/>
            </PanelBody>
            <PanelBody
              title={__("Padding", "responsive-block-editor-addons")}
              initialOpen={false}
            >
              <RbeaRangeControl
                label={__("Box Top Padding", "responsive-block-editor-addons")}
                value={boxPaddingTop}
                onChange={(newCount) => {
                  setAttributes({ boxPaddingTop: newCount });
                }}
                min={1}
                max={500}
                step={1}
              />
                <RbeaRangeControl
                    label={__(
                        "Box Bottom Padding",
                        "responsive-block-editor-addons"
                    )}
                    value={boxPaddingBottom}
                    onChange={(newCount) => {
                        setAttributes({ boxPaddingBottom: newCount });
                    }}
                    min={1}
                    max={500}
                    step={1}
                />
              <RbeaRangeControl
                label={__("Box Left Padding", "responsive-block-editor-addons")}
                value={boxPaddingLeft}
                onChange={(newCount) => {
                  setAttributes({ boxPaddingLeft: newCount });
                }}
                min={1}
                max={500}
                step={1}
              />
              <RbeaRangeControl
                label={__(
                  "Box Right Padding",
                  "responsive-block-editor-addons"
                )}
                value={boxPaddingRight}
                onChange={(newCount) => {
                  setAttributes({ boxPaddingRight: newCount });
                }}
                min={1}
                max={500}
                step={1}
              />

            </PanelBody>
            <PanelBody
              title={__("Hover Effect", "responsive-block-editor-addons")}
              initialOpen={false}
            >
              <RbeaTabRadioControl
                label={__("Hover Effect", "responsive-block-editor-addons")}
                value={imageHoverEffect}
                onChange={onChangeImageHoverEffect}
                options={[
                  { value: "", label: __("Default", "responsive-block-editor-addons") },
                  { value: "0.94", label: __("Zoom Out", "responsive-block-editor-addons") },
                  { value: "1.04", label: __("Zoom In", "responsive-block-editor-addons") },
                ]}
              />
            </PanelBody>
            <PanelBody
              title={__("Border", "responsive-block-editor-addons")}
              initialOpen={false}
            >
              <RbeaBorderStyleTabControl
                selected={blockBorderStyle}
                onChange={(value) => setAttributes({ blockBorderStyle: value })}
              />
              {"none" != blockBorderStyle && (
                <Fragment>
                  <RbeaRangeControl
                    label={__("Border Width", "responsive-block-editor-addons")}
                    value={blockBorderWidth}
                    onChange={(value) =>
                      setAttributes({
                        blockBorderWidth: value !== undefined ? value : 2,
                      })
                    }
                    min={0}
                    max={50}
                    allowReset
                  />
                  <Fragment>
                    <RbeaColorControl
                      label = {__("Border Color", "responsive-block-editor-addons")}
                      colorValue={blockBorderColor}
                      onChange={(colorValue) =>
                        setAttributes({
                          blockBorderColor:
                            colorValue !== undefined ? colorValue : "#000",
                        })
                      }
                      resetColor={() => setAttributes({ blockBorderColor: "" })}
                    />
                  </Fragment>
                </Fragment>
              )}
              
              <RbeaBorderRadiusControl
                attrNameTemplate="block%s"
                {...this.props}
              />
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
              title={__("Arrow", "responsive-block-editor-addons")}
              initialOpen={false}
            >
              <ToggleControl
                label={__("Arrow After Content", "responsive-block-editor-addons")}
                checked={hasArrow}
                onChange={() =>
                  this.props.setAttributes({
                    hasArrow: !hasArrow,
                  })
                }
              />
              <PanelBody
                title={__("Color", "responsive-block-editor-addons")}
                initialOpen={false}
              >
                 <RbeaColorControl
									label = {__("Color", "responsive-block-editor-addons")}
									colorValue={arrowColor}
									onChange={(colorValue) =>
										setAttributes({ arrowColor: colorValue })
									}
									resetColor={() => setAttributes({ arrowColor: "" })}
								/>
              </PanelBody>
              <RbeaRangeControl
                label={__("Arrow Size", "responsive-block-editor-addons")}
                value={arrowSize}
                onChange={(newCount) => {
                  setAttributes({ arrowSize: newCount });
                }}
                min={0}
                max={100}
                step={1}
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
                title={__("Title Spacing", "responsive-block-editor-addons")}
                attrNameTemplate="titleSpacing%s"
                values={{ desktop: titleSpacing, tablet: titleSpacingTablet, mobile: titleSpacingMobile }}
                setAttributes={setAttributes}
                {...this.props}
              />
              <ResponsiveSpacingControl
                title={__("Description Spacing", "responsive-block-editor-addons")}
                attrNameTemplate="descriptionSpacing%s"
                values={{ desktop: descriptionSpacing, tablet: descriptionSpacingTablet, mobile: descriptionSpacingMobile }}
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
