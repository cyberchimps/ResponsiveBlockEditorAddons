/**
 * WordPress dependencies
 */
import InspectorTab from "../../../components/InspectorTab";
import InspectorTabs from "../../../components/InspectorTabs";
import BlockBorderHelperControl from "../../../settings-components/BlockBorderSettings";
import ImageBackgroundControl from "../../../settings-components/BlockBackgroundSettings/ImageBackgroundSettings";
import ResponsiveNewPaddingControl from "../../../settings-components/ResponsiveNewSpacingSettings/ResponsiveNewPaddingControl/index";
import ResponsiveNewMarginControl from "../../../settings-components/ResponsiveNewSpacingSettings/ResponsiveNewMarginControl/index";
import RbeaRangeControl from "../../../utils/components/rbea-range-control/index.js";
import RbeaColorControl from "../../../utils/components/rbea-color-control/index.js";
import RbeaTabRadioControl from "../../../utils/components/rbea-tab-radio-control/index.js";
import RbeaMediaUploadControl from "../../../utils/components/rbea-media-upload-control/index.js";
import RbeaBorderStyleTabControl from "../../../utils/components/rbea-border-style-tab-control/index.js";
import RbeaBorderRadiusControl from "../../../settings-components/RbeaBorderRadiusControl/index.js";
import RbeaBackgroundTypeControl from "../../../utils/components/rbea-background-type-control/index.js";

// Setup the block
const { __ } = wp.i18n;
const { select } = wp.data;
const { Component, Fragment } = wp.element;
const {
  InspectorControls,
  PanelColorSettings,
  RichText,
  AlignmentToolbar,
  BlockControls,
  MediaUpload,
  ColorPalette,
} = wp.blockEditor;

const {
  PanelBody,
  RangeControl,
  ToggleControl,
  SelectControl,
  TextControl,
  BaseControl,
  Icon,
  Button,
  TabPanel,
  Dashicon,
} = wp.components;

import {
  showOptions,
  getVideoProviderFromURL,
  urlIsVideo,
  ImageControl,
} from "../util/index.js";

import BoxShadowControl from "../../../utils/components/box-shadow";
import videoPlayButtonIcons from "./play-button-icons";

/**
 * Inspector controls
 */
export default class Inspector extends Component {
  constructor(props) {
    super(...arguments);
  }

  render() {
    const { attributes, isSelected, setAttributes } = this.props;

    const {
      borderRadius = "",
      shadow = "",
      videoLink = "",
      videoID = "",
      width = "",
      showBlockTitle = false,
      showBlockDescription = false,
      playButtonType,
      playButtonColor = "#ffffff",
      playButtonSize,
      vidwidth,
      vidwidthTablet,
      vidwidthMobile,
      vidheight,
      vidheightTablet,
      vidheightMobile,
      opacity,
      imgURL,
      imgID,
      backgroundImage,
      butopacity,
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
	  vidBackgroundColor,
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

    videoUploadType,
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

    // Change the image
    const onSelectImage = (img) => {
      setAttributes({
        imgID: img.id,
        imgURL: img.url,
        imgAlt: img.alt,
      });
    };

    // Clear the image
    const onRemoveImage = () => {
      setAttributes({
        imgID: null,
        imgURL: null,
        imgAlt: null,
      });
    };

    const urlIsVideo = (url) => url.match(/(mp4|webm|ogg)$/i);

    /**
     * From a URL, get the video ID and provider: YouTube or Vimeo.
     *
     * @param {string} url
     *
     * @return {Object} An object containing the video ID and provider name.
     */
    const getVideoProviderFromURL = (url) => {
      let id = "";

      // Check for YouTube.
      id = (url.match(/youtube\.com\/watch\?v=([^\&\?\/]+)/i) || [])[1];

      if (!id) {
        id = (url.match(/youtube\.com\/embed\/([^\&\?\/]+)/i) || [])[1];
      }
      if (!id) {
        id = (url.match(/youtube\.com\/v\/([^\&\?\/]+)/i) || [])[1];
      }
      if (!id) {
        id = (url.match(/youtu\.be\/([^\&\?\/]+)/i) || [])[1];
      }

      if (id) {
        return {
          type: "youtube",
          id,
        };
      }

      // Check for Vimeo.
      id = (url.match(/vimeo\.com\/(\w*\/)*(\d+)/i) || [])[2];
      if (!id) {
        id = (url.match(/^\d+$/i) || [])[0];
      }

      if (id) {
        return {
          type: "vimeo",
          id,
        };
      }

      return {
        type: "youtube",
        id: url,
      };
    };

    return (
      <Fragment>
        <InspectorControls>
          <InspectorTabs>
            <InspectorTab key={"content"}>
              <PanelBody
                title={__("Popup Options", "responsive-block-editor-addons")}
                initialOpen={true}
              >
                {<RbeaBackgroundTypeControl
                  label = {"Type"}
                  selectedValue={videoUploadType}
                  options={[
                    { label: "video", value: "video" },
                    { label: "link", value: "link" },
                  ]}
                  onChange={(value) => setAttributes({ videoUploadType: value })}
                />}
                {"video" == videoUploadType && (
                  <RbeaMediaUploadControl
                    label={__('Upload Video', 'responsive-block-editor-addons')}
                    value={{
                        url: videoLink || '',
                    }}
                    onChange={(media) => {
                      setAttributes({
                        videoLink: media.url,
                        videoID: media.url,
                      });
                    }}
                    mediaType={'video'}
                    help={__(
                      "Use .mp4 format for videos",
                      "responsive-block-editor-addons"
                    )}
                  />
                )}
                {"link" == videoUploadType && (
                  <TextControl
                    label={__("Video URL", "responsive-block-editor-addons")}
                    help={__(
                      "Paste a Youtube / Vimeo URL",
                      "responsive-block-editor-addons"
                    )}
                    placeholder={__("https://", "responsive-block-editor-addons")}
                    value={!urlIsVideo(videoLink) ? videoLink : ""}
                    onChange={(videoLink) =>
                      setAttributes({
                        videoLink,
                        videoID: getVideoProviderFromURL(videoLink).id,
                      })
                    }
                    min={1}
                    max={4}
                  />
                )}
              </PanelBody>
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
                        <Fragment>
                          <RbeaRangeControl
                            label={__(
                              "Width Mobile",
                              "responsive-block-editor-addons"
                            )}
                            value={vidwidthMobile}
                            onChange={(value) =>
                              setAttributes({ vidwidthMobile: value })
                            }
                            min={200}
                            max={2000}
                          />
                        </Fragment>
                      );
                    } else if ("tablet" === tab.name) {
                      tabout = (
                        <Fragment>
                          <RbeaRangeControl
                            label={__(
                              "Width Tablet",
                              "responsive-block-editor-addons"
                            )}
                            value={vidwidthTablet}
                            onChange={(value) =>
                              setAttributes({ vidwidthTablet: value })
                            }
                            min={200}
                            max={2000}
                          />
                        </Fragment>
                      );
                    } else {
                      tabout = (
                        <Fragment>
                          <RbeaRangeControl
                            label={__(
                              "Width",
                              "responsive-block-editor-addons"
                            )}
                            value={vidwidth}
                            onChange={(value) =>
                              setAttributes({ vidwidth: value })
                            }
                            min={200}
                            max={2000}
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
                              "Height Mobile",
                              "responsive-block-editor-addons"
                            )}
                            value={vidheightMobile}
                            onChange={(value) =>
                              setAttributes({ vidheightMobile: value })
                            }
                            min={300}
                            max={700}
                          />
                        </Fragment>
                      );
                    } else if ("tablet" === tab.name) {
                      tabout = (
                        <Fragment>
                          <RbeaRangeControl
                            label={__(
                              "Height Tablet",
                              "responsive-block-editor-addons"
                            )}
                            value={vidheightTablet}
                            onChange={(value) =>
                              setAttributes({ vidheightTablet: value })
                            }
                            min={300}
                            max={700}
                          />
                        </Fragment>
                      );
                    } else {
                      tabout = (
                        <Fragment>
                          <RbeaRangeControl
                            label={__(
                              "Height",
                              "responsive-block-editor-addons"
                            )}
                            value={vidheight}
                            onChange={(value) =>
                              setAttributes({ vidheight: value })
                            }
                            min={300}
                            max={700}
                          />
                        </Fragment>
                      );
                    }
                    return <div>{tabout}</div>;
                  }}
                </TabPanel>
              </PanelBody>
            </InspectorTab>
            <InspectorTab key={"style"}>
              <PanelBody
                title={__("Play Button", "responsive-block-editor-addons")}
                initialOpen={false}
              >
                <RbeaTabRadioControl
                  label={__("Style", "responsive-block-editor-addons")}
                  value={playButtonType}
                  onChange={(value) => setAttributes({ playButtonType: value })}
                  options={[
                    {
                      value: "normal",
                      label: __(
                        "Normal Play Button",
                        "responsive-block-editor-addons"
                      ),
                      icon: videoPlayButtonIcons.normal_play_button,
                      selectedIcon: videoPlayButtonIcons.normal_play_button_selected,
                    },
                    {
                      value: "circle",
                      label: __(
                        "Play Button with Circle",
                        "responsive-block-editor-addons"
                      ),
                      icon: videoPlayButtonIcons.play_button_with_circle,
                      selectedIcon: videoPlayButtonIcons.play_button_with_circle_selected,
                    },
                    {
                      value: "outline",
                      label: __(
                        "Outline Play Button",
                        "responsive-block-editor-addons"
                      ),
                      icon: videoPlayButtonIcons.outline_play_button,
                      selectedIcon: videoPlayButtonIcons.outline_play_button_selected,
                    },
                    {
                      value: "video",
                      label: __(
                        "Video Play Button",
                        "responsive-block-editor-addons"
                      ),
                      icon: videoPlayButtonIcons.video_play_button,
                      selectedIcon: videoPlayButtonIcons.video_play_button_selected,
                    },
                  ]}
                />
                <RbeaRangeControl
                  label={__("Size", "responsive-block-editor-addons")}
                  value={playButtonSize}
                  onChange={(value) =>
                    setAttributes({
                      playButtonSize: value !== undefined ? value : 30,
                    })
                  }
                  min={0}
                  max={500}
                  allowReset
                />
                <RbeaColorControl
                  label = {__("Color", "responsive-block-editor-addons")}
                  colorValue={playButtonColor}
                  onChange={(colorValue) => setAttributes({ playButtonColor: colorValue })}
                  resetColor={() => setAttributes({ playButtonColor: "" })}
                />
                <RbeaRangeControl
                  label={__("Opacity", "responsive-block-editor-addons")}
                  value={butopacity}
                  onChange={(value) =>
                    setAttributes({
                      butopacity: value !== undefined ? value : 100,
                    })
                  }
                  min={0}
                  max={100}
                  allowReset
                />
              </PanelBody>
              <PanelBody
                title={__("Border", "responsive-block-editor-addons")}
                initialOpen={false}
              >
                <RbeaBorderStyleTabControl
                  selected={blockBorderStyle}
                  onChange={(value) =>
                    setAttributes({ blockBorderStyle: value })
                  }
                />
                {"none" != blockBorderStyle && (
                  <RbeaRangeControl
                    label={__("Border Width", "responsive-block-editor-addons")}
                    value={blockBorderWidth}
                    onChange={(value) =>
                      setAttributes({ blockBorderWidth: value })
                    }
                    min={0}
                    max={50}
                  />
                )}
                <RbeaBorderRadiusControl
                  attrNameTemplate="block%s"
                  {...this.props}
                />
                {"none" != blockBorderStyle && (
                  <Fragment>
                    <RbeaColorControl
                      label = {__("Border Color", "responsive-block-editor-addons")}
                      colorValue={blockBorderColor}
                      onChange={(colorValue) => setAttributes({ blockBorderColor: colorValue })}
                      resetColor={() => setAttributes({ blockBorderColor: "" })}
                    />
                  </Fragment>
                )}
              </PanelBody>
              <PanelBody title={__("Box Shadow", "responsive-block-editor-addons")} initialOpen={false}>
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
                title={__(
                  "Background",
                  "responsive-block-editor-addons"
                )}
                initialOpen={false}
              >
                <ImageBackgroundControl
                  {...this.props}
                  showSomeImageOptions={false}
                  showMoreImageOptions={false}
                  showOverlayOptions={false}
                />
                <RbeaColorControl
                  label = {__("Background Overlay Color", "responsive-block-editor-addons")}
                  colorValue={vidBackgroundColor}
                  onChange={(colorValue) => setAttributes({ vidBackgroundColor: colorValue })}
                  resetColor={() => setAttributes({ vidBackgroundColor: "" })}
                />
                <RbeaRangeControl
                  label={__("Opacity", "responsive-block-editor-addons")}
                  value={opacity}
                  onChange={(value) =>
                  setAttributes({
                    opacity: value !== undefined ? value : 80,
                  })
                  }
                  min={0}
                  max={100}
                />
              </PanelBody>
              <PanelBody title={__("Spacing", "responsive-block-editor-addons")} initialOpen={false}>
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
      </Fragment>
    );
  }
}
