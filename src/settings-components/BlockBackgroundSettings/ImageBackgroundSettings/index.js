/**
 * Box-Shadow reusable component.
 *
 */
const { __ } = wp.i18n;

const { ColorPalette, MediaUpload } = wp.blockEditor;

const { SelectControl, RangeControl, BaseControl, Button } = wp.components;

// Extend component
const { Component, Fragment } = wp.element;

import RbeaRangeControl from "../../../utils/components/rbea-range-control";
import RbeaAngleRangeControl from "../../../utils/components/rbea-angle-range-control";
import RbeaColorControl from "../../../utils/components/rbea-color-control";
import RbeaTabRadioControl from "../../../utils/components/rbea-tab-radio-control";
import RbeaMediaUploadControl from "../../../utils/components/rbea-media-upload-control";
import RbeaBackgroundTypeControl from "../../../utils/components/rbea-background-type-control";

class ImageBackgroundControl extends Component {
    constructor() {
        super(...arguments);
        this.onRemoveImage = this.onRemoveImage.bind(this);
        this.onSelectImage = this.onSelectImage.bind(this);
    }
    /*
       * Event to set Image as null while removing.
       */
    onRemoveImage() {
        const { setAttributes } = this.props;

        setAttributes({ backgroundImage: null });
    }

    /*
     * Event to set Image as while adding.
     */
    onSelectImage(media) {
        const { setAttributes } = this.props;
        const { backgroundImage } = this.props.attributes;

        if (!media || !media.url) {
            setAttributes({ backgroundImage: null });
            return;
        }

        if (!media.type || "image" != media.type) {
            return;
        }

        setAttributes({ backgroundImage: media.url });
    }

    render() {
        const {
            attributes: {
                backgroundImage,
                backgroundImagePosition,
                backgroundAttachment,
                backgroundImageRepeat,
                backgroundImageSize,
                overlayType,
                backgroundImageColor,
                gradientOverlayColor1,
                gradientOverlayLocation1,
                gradientOverlayColor2,
                gradientOverlayLocation2,
                gradientOverlayType,
                gradientOverlayAngle,
                gradientOverlayPosition,
            },
            setAttributes,
        } = this.props;

        var advancedControls;
        advancedControls = (
            <Fragment>
                <RbeaMediaUploadControl
                  label={__('Image', 'responsive-block-editor-addons')}
                  value={{
                      url: backgroundImage || '',
                  }}
                  onChange={(newValue) => {
                      setAttributes({
                          backgroundImage: newValue.url,
                      });
                  }}
                  mediaType={'image'}
                />


                { backgroundImage && (this.props.showSomeImageOptions == true || this.props.showMoreImageOptions == true) && (
                    <Fragment>
                        <SelectControl
                            label={__("Image Position", "responsive-block-editor-addons")}
                            value={backgroundImagePosition}
                            onChange={(value) =>
                                setAttributes({ backgroundImagePosition: value })
                            }
                            options={[
                                { value: "top-left", label: __("Top Left", "responsive-block-editor-addons") },
                                { value: "top center", label: __("Top Center", "responsive-block-editor-addons") },
                                { value: "top right", label: __("Top Right", "responsive-block-editor-addons") },
                                { value: "center left", label: __("Center Left", "responsive-block-editor-addons") },
                                { value: "center center", label: __("Center Center", "responsive-block-editor-addons") },
                                { value: "center right", label: __("Center Right", "responsive-block-editor-addons") },
                                { value: "bottom left", label: __("Bottom Left", "responsive-block-editor-addons") },
                                { value: "bottom center", label: __("Bottom Center", "responsive-block-editor-addons") },
                                { value: "bottom right", label: __("Bottom Right", "responsive-block-editor-addons") },
                            ]}
                        />
                        <SelectControl
                            label={__("Repeat", "responsive-block-editor-addons")}
                            value={backgroundImageRepeat}
                            onChange={(value) =>
                                setAttributes({ backgroundImageRepeat: value })
                            }
                            options={[
                                { value: "no-repeat", label: __("No Repeat", "responsive-block-editor-addons") },
                                { value: "repeat", label: __("Repeat", "responsive-block-editor-addons") },
                                { value: "repeat-x", label: __("Repeat-x", "responsive-block-editor-addons") },
                                { value: "repeat-y", label: __("Repeat-y", "responsive-block-editor-addons") },
                            ]}
                        />
                        <RbeaTabRadioControl
                            label={__("Size", "responsive-block-editor-addons")}
                            value={backgroundImageSize}
                            onChange={(value) =>
                                setAttributes({ backgroundImageSize: value })
                            }
                            options={[
                                { value: "auto", label: __("Auto", "responsive-block-editor-addons") },
                                { value: "cover", label: __("Cover", "responsive-block-editor-addons") },
                                { value: "contain", label: __("Contain", "responsive-block-editor-addons") },
                            ]}
                        />
                    </Fragment>
                )}
                { backgroundImage && this.props.showMoreImageOptions == true && (
                    <Fragment>
                        <RbeaTabRadioControl
                            label={__("Attachment", "responsive-block-editor-addons")}
                            value={backgroundAttachment}
                            onChange={(value) =>
                                setAttributes({ backgroundAttachment: value })
                            }
                            options={[
                                { value: "fixed", label: __("Fixed", "responsive-block-editor-addons") },
                                { value: "scroll", label: __("Scroll", "responsive-block-editor-addons") },
                            ]}
                        />
                        {this.props.showOverlayOptions && (
                            <Fragment>
                                <RbeaBackgroundTypeControl
                                    label={__("Image Overlay Type", "responsive-block-editor-addons")}
                                    value={overlayType}
                                    onChange={(value) => setAttributes({ overlayType: value })}
                                    options={[
                                        { value: "color", label: __("Color", "responsive-block-editor-addons") },
                                        { value: "gradient", label: __("Gradient", "responsive-block-editor-addons") },
                                    ]}
                                />
                                {overlayType == "color" && (
                                    <Fragment>
                                        <RbeaColorControl
                                            label = {__("Image Overlay Color", "responsive-block-editor-addons")}
                                            colorValue={backgroundImageColor}
                                            onChange={(colorValue) => setAttributes({ backgroundImageColor: colorValue })}
                                            resetColor={() => setAttributes({ backgroundImageColor: "" })}
                                        />
                                    </Fragment>
                                )}
                                {"gradient" == overlayType && (
                                    <Fragment>
                                        <RbeaColorControl
                                            label = {__("Color 1", "responsive-block-editor-addons")}
                                            colorValue={gradientOverlayColor1}
                                            onChange={(colorValue) => setAttributes({ gradientOverlayColor1: colorValue })}
                                            resetColor={() => setAttributes({ gradientOverlayColor1: "" })}
                                        />
                                        <RbeaColorControl
                                            label = {__("Color 2", "responsive-block-editor-addons")}
                                            colorValue={gradientOverlayColor2}
                                            onChange={(colorValue) => setAttributes({ gradientOverlayColor2: colorValue })}
                                            resetColor={() => setAttributes({ gradientOverlayColor2: "" })}
                                        />
                                        <RbeaTabRadioControl
                                            label={__("Type", "responsive-block-editor-addons")}
                                            value={gradientOverlayType}
                                            onChange={(value) =>
                                                setAttributes({ gradientOverlayType: value })
                                            }
                                            options={[
                                                { value: "linear", label: __("Linear", "responsive-block-editor-addons") },
                                                { value: "radial", label: __("Radial", "responsive-block-editor-addons") },
                                            ]}
                                        />
                                        <RbeaRangeControl
                                            label={__("Color Location 1", "responsive-block-editor-addons")}
                                            value={gradientOverlayLocation1}
                                            onChange={(value) =>
                                                setAttributes({ gradientOverlayLocation1: value })
                                            }
                                            min={0}
                                            max={100}
                                            allowReset
                                        />
                                        <RbeaRangeControl
                                            label={__("Color Location 2", "responsive-block-editor-addons")}
                                            value={gradientOverlayLocation2}
                                            onChange={(value) =>
                                                setAttributes({ gradientOverlayLocation2: value })
                                            }
                                            min={0}
                                            max={100}
                                            allowReset
                                        />
                                        {"linear" == gradientOverlayType && (
                                            <RbeaAngleRangeControl
                                                label={__("Angle", "responsive-block-editor-addons")}
                                                value={gradientOverlayAngle}
                                                onChange={(value) =>
                                                    setAttributes({ gradientOverlayAngle: value })
                                                }
                                                min={0}
                                                max={360}
                                                allowReset
                                            />
                                        )}
                                        {"radial" == gradientOverlayType && (
                                            <SelectControl
                                                label={__("Type", "responsive-block-editor-addons")}
                                                value={gradientOverlayPosition}
                                                onChange={(value) =>
                                                    setAttributes({ gradientOverlayPosition: value })
                                                }
                                                options={[
                                                    {
                                                        value: "center center",
                                                        label: __("Center Center", "responsive-block-editor-addons"),
                                                    },
                                                    { value: "center left", label: __("Center Left", "responsive-block-editor-addons") },
                                                    {
                                                        value: "center right",
                                                        label: __("Center Right", "responsive-block-editor-addons"),
                                                    },
                                                    { value: "top center", label: __("Top Center", "responsive-block-editor-addons") },
                                                    { value: "top left", label: __("Top Left", "responsive-block-editor-addons") },
                                                    { value: "top right", label: __("Top Right", "responsive-block-editor-addons") },
                                                    {
                                                        value: "bottom center",
                                                        label: __("Bottom Center", "responsive-block-editor-addons"),
                                                    },
                                                    { value: "bottom left", label: __("Bottom Left", "responsive-block-editor-addons") },
                                                    {
                                                        value: "bottom right",
                                                        label: __("Bottom Right", "responsive-block-editor-addons"),
                                                    },
                                                ]}
                                            />
                                        )}
                                    </Fragment>
                                )}
                            </Fragment>
                        )}
                    </Fragment>
                )}
            </Fragment>
        );


        return (
            <div className="responsive-block-editor-addons-image-background-settings">
                {advancedControls}
            </div>
        );
    }
}

export default ImageBackgroundControl;
