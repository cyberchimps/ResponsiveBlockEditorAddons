/**
 * Internal dependencies
 */
import classnames from "classnames";
import renderSVG from "../../../renderIcon";

/**
 * WordPress dependencies
 */
const { Component } = wp.element;
const { InnerBlocks } = wp.blockEditor;

export default class Save extends Component {
  constructor() {
    super(...arguments);
  }

  render() {
    const {
      isPopupVariantSelected,
      popupToggleCloseBtn,
      popupTrigger,
      popupTriggerDelay,
      popupTriggerType,
      popupTextTrigger,
      popupIconTrigger,
      popupImageTrigger,
      popupButtonText,
      block_id,
      anchor,
    } = this.props.attributes;

    return [
      <div
        id={anchor}
        className={classnames(
          this.props.className,
          "responsive-block-editor-addons-block-popup",
          `block-${block_id}`
        )}
      >
        {isPopupVariantSelected &&
          <>
            <div className="responsive-block-editor-addons-popup-trigger-wrap">

              {popupTrigger && popupTrigger === 'click' && popupTriggerType === 'button' &&
                <button type="button" className="responsive-block-editor-addons-popup-button-trigger responsive-block-editor-addons-popup-modal-trigger" data-trigger-id={`trigger-${block_id}`}> {popupButtonText}
                </button>
              }

              {popupTrigger && popupTrigger === 'click' && popupTriggerType === 'text' &&
                <p className="responsive-block-editor-addons-popup-text-trigger responsive-popup-trigger-anchor responsive-block-editor-addons-popup-modal-trigger" data-trigger-id={`trigger-${block_id}`}>{popupTextTrigger}</p>
              }

              {popupTrigger && popupTrigger === 'click' && popupTriggerType === 'icon' &&
                <div className="responsive-block-editor-addons-popup-modal-trigger responsive-popup-trigger-anchor responsive-block-editor-addons-popup-icon-trigger" data-trigger-id={`trigger-${block_id}`}>
                  {renderSVG(popupIconTrigger)}
                </div>
              }

              {popupTrigger && popupTrigger === 'click' && popupTriggerType === 'image' && popupImageTrigger != undefined && <img className="responsive-block-editor-addons-popup-modal-trigger responsive-popup-trigger-anchor responsive-block-editor-addons-popup-image-trigger" data-trigger-id={`trigger-${block_id}`} src={popupImageTrigger} alt="popupImageTrigger" />}

            </div>

            <div className="responsive-block-editor-addons-popup-modal-wrap responsive-block-editor-popup-modal-hide" data-trigger-type={popupTrigger} data-trigger-delay={'load' === popupTrigger ? popupTriggerDelay : 'none'} data-popup-id={`popup-${block_id}`}>
              <div role="presentation" className="responsive-block-editor-addons-popup-modal-wrap-overlay"></div>
              <div className="responsive-block-editor-addons-popup-modal-content">
                {popupToggleCloseBtn &&
                  <div className="responsive-block-editor-addons-popup-modal-header">
                    <button type="button"><span className="dashicons dashicons-no"></span></button>
                  </div>}
                <div className="responsive-block-editor-addons-popup-modal-body">
                  <div className="responsive-block-editor-addons-popup-innerblock">
                    <InnerBlocks.Content />
                  </div>
                </div>
              </div>
            </div>
          </>}
      </div>,
    ];
  }
}
