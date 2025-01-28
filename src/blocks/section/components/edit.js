/**
 * Internal dependencies
 */
import classnames from "classnames";
import Inspector from "./inspector";
import EditorStyles from "./editor-styles";

/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { Component, Fragment } = wp.element;
const { InnerBlocks } = wp.blockEditor;

export default class Edit extends Component {
  constructor() {
    super(...arguments);
  }

  componentDidUpdate(prevProps, prevState) {
    var element = document.getElementById(
      "responsive-block-editor-addons-section-style-" + this.props.clientId
    );

    if (null !== element && undefined !== element) {
      element.innerHTML = EditorStyles(this.props);
    }
  }

  componentDidMount() {
    // Assigning block_id in the attribute.
    this.props.setAttributes({ block_id: this.props.clientId });
    this.props.setAttributes({ classMigrate: true });

    // Pushing Style tag for this block css.
    const $style = document.createElement("style");
    $style.setAttribute(
      "id",
      "responsive-block-editor-addons-section-style-" + this.props.clientId
    );
    document.head.appendChild($style);
  }

  render() {
    // Setup the attributes
    const {
      attributes: {
        block_id,
        sectionTag,
        backgroundType,
        overlayType,
        gradientOverlayType,
        backgroundVideo,
        opacity,
        boxShadowPosition,
      },
      setAttributes,
    } = this.props;

    const CustomTag = `${sectionTag}`;

    return [
      <style id={`responsive-block-editor-addons-section-style-${this.props.clientId}-inner`}>{EditorStyles(this.props)}</style>,
      <Inspector key="inspector" {...{ setAttributes, ...this.props }} />,
      <Fragment key="section-block-fragment">
        <div key={`block-${block_id}`}
          className={classnames(
            this.props.className,
            "responsive-block-editor-addons-block-section-outer-wrap",
            `block-${block_id}`,
            backgroundType ? `background-type-${backgroundType}` : ""
          )}
        >
          <CustomTag key={`overlay-type-${overlayType}`}
            className={classnames(
              "responsive-section-wrap",
              "responsive-block-editor-addons-block-section",
              `overlay-type-${overlayType}`,
              `${gradientOverlayType}`
            )}
          >
             {"video" == backgroundType && (
              <div key={`block-wrap-${block_id}`} className="responsive-block-editor-addons-section__video-wrap">
                {backgroundVideo && (
                <video autoplay loop muted playsinline>
                  <source src={backgroundVideo.url} type="video/mp4" />
                </video>
                )}
              </div>
            )}
            <div key={`block-inner-wrap-${block_id}`} className="responsive-section-inner-wrap">
              <InnerBlocks templateLock={false} />
            </div>
          </CustomTag>
        </div>
      </Fragment>,
    ];
  }
}
