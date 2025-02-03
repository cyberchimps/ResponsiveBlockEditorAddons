/**
 * Internal dependencies
 */
import classnames from "classnames";
import Inspector from "./inspector";
import EditorStyles from "./editor-styles";
import icons from "./icons";
import { loadGoogleFont } from "../../../utils/font";
import renderSVG from "../../../renderIcon";
import { BLOCKS_TEMPLATE_PRESET1, BLOCKS_TEMPLATE_PRESET2, BLOCKS_TEMPLATE_CUSTOM } from "./variations";
/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { Component } = wp.element;
const { BlockControls, InnerBlocks } = wp.blockEditor;

const presets = [
  {
    name: 'preset1',
    title: 'Style 1',
    desc: '(Icon, Heading, Text, CTA)',
    icon: icons.preset1
  },
  {
    name: 'preset2',
    title: 'Style 2',
    desc: '(Heading, Text, Image, CTA)',
    icon: icons.preset2
  },
  {
    name: 'custom',
    title: 'Custom',
    desc: '',
    icon: icons.custom
  },
]

export default class Edit extends Component {
  constructor() {
    super(...arguments);

    this.state = {
      isModalOpen: false,
    };

  }
  componentDidUpdate(prevProps, prevState) {
    var element = document.getElementById(
      "responsive-block-editor-addons-popup-style-" +
      this.props.clientId
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
      "responsive-block-editor-addons-popup-style-" +
      this.props.clientId
    );
    document.head.appendChild($style);
  }
  render() {
    // Setup the attributes
    const {
      attributes: {
        isPopupVariantSelected,
        popupVariant,
        popupToggleCloseBtn,
        popupTrigger,
        popupTriggerDelay,
        popupTriggerType,
        popupTextTrigger,
        popupIconTrigger,
        popupImageTrigger,
        popupButtonText,
        popupButtonTypographyFontFamily,
        popupTextTypographyFontFamily,
        block_id,
      },
      setAttributes,
    } = this.props;

    const VariantSelector = () => {
      return (
        <div className="rba-popup-selector">
          <div className="rba-popup-selector-head">
            {icons.logo}
            <p className="rba-popup-block-name">{__("Popup", "responsive-block-editor-addons")}</p>
          </div>
          <p className="rba-popup-block-text">{__("Select a Preset or create your own.", "responsive-block-editor-addons")}</p>
          <div className="rba-popup-preset-selection">
            {
              presets.map((current, index) => {
                return (
                  <div key={index} className="rba-popup-preset" onClick={() => setAttributes({ isPopupVariantSelected: true, popupVariant: current.name })}>{current.icon}
                    <p className="rba-popup-preset-title">{current.title}</p>
                    <p className="rba-popup-preset-desc">{current.desc}</p>
                  </div>
                )
              })
            }
          </div>
        </div>
      )
    }

    return [
      <style id={`responsive-block-editor-addons-popup-style-${this.props.clientId}-inner`}>{EditorStyles(this.props)}</style>,
      <BlockControls key="controls">
      </BlockControls>,
      // Show the block controls on focus
      <Inspector key={`inspector-${block_id}`} {...{ setAttributes, ...this.props }} />,

      // Show the block markup in the editor
      <div
        className={classnames(
          this.props.className,
          "responsive-block-editor-addons-block-popup",
          `block-${block_id}`
        )}
        key={`mainDiv-${block_id}`}
      >
        {!isPopupVariantSelected &&
          VariantSelector()
        }

        {isPopupVariantSelected &&
          <>
            <div className="responsive-block-editor-addons-popup-trigger-wrap">

              {popupButtonTypographyFontFamily && loadGoogleFont(popupButtonTypographyFontFamily)}
              {popupTriggerType === 'button' &&
                <button type="button" className="responsive-block-editor-addons-popup-button-trigger responsive-block-editor-addons-popup-modal-trigger" data-trigger-id={`trigger-${block_id}`} onClick={() => this.setState({ isModalOpen: true })}> {popupTrigger === 'click' ? popupButtonText : <><span className="dashicons dashicons-external"></span> <span>{__("Edit Popup", "responsive-block-editor-addons")}</span></>}
                </button>
              }

              {popupTextTypographyFontFamily && loadGoogleFont(popupTextTypographyFontFamily)}
              {popupTriggerType === 'text' &&
                <p onClick={() => this.setState({ isModalOpen: true })} className="responsive-block-editor-addons-popup-text-trigger responsive-popup-trigger-anchor responsive-block-editor-addons-popup-modal-trigger" data-trigger-id={`trigger-${block_id}`}>{popupTextTrigger}</p>
              }

              {popupTriggerType === 'icon' &&
                <p onClick={() => this.setState({ isModalOpen: true })} className="responsive-block-editor-addons-popup-modal-trigger responsive-popup-trigger-anchor responsive-block-editor-addons-popup-icon-trigger" data-trigger-id={`trigger-${block_id}`}>
                  {renderSVG(popupIconTrigger)}
                </p>
              }

              {popupTriggerType === 'image' && popupImageTrigger == undefined && <p>Please Select Image</p>}
              {popupTriggerType === 'image' && popupImageTrigger != undefined && <img onClick={() => this.setState({ isModalOpen: true })} className="responsive-block-editor-addons-popup-modal-trigger responsive-popup-trigger-anchor responsive-block-editor-addons-popup-image-trigger" src={popupImageTrigger} alt="popupImageTrigger" data-trigger-id={`trigger-${block_id}`}/>}

            </div>
            <div className={`responsive-block-editor-addons-popup-modal-wrap ${this.state.isModalOpen ? 'responsive-block-editor-popup-modal-show' : 'responsive-block-editor-popup-modal-hide'}`} data-trigger-type={popupTrigger} data-trigger-delay={'load' === popupTrigger ? popupTriggerDelay : 'none'} data-popup-id={`popup-${block_id}`}>
              <div role="presentation" className="responsive-block-editor-addons-popup-modal-wrap-overlay" onClick={() => this.setState({ isModalOpen: false })}></div>
              <div className="responsive-block-editor-addons-popup-modal-content">
                {popupToggleCloseBtn &&
                  <div className="responsive-block-editor-addons-popup-modal-header">
                    <button onClick={() => this.setState({ isModalOpen: false })} type="button"><span className="dashicons dashicons-no"></span></button>
                  </div>}
                <div className="responsive-block-editor-addons-popup-modal-body">
                  <div className="responsive-block-editor-addons-popup-innerblock">
                    <InnerBlocks
                      templateLock={false}
                      template={
                        popupVariant === 'preset1'
                          ? BLOCKS_TEMPLATE_PRESET1
                          : popupVariant === 'preset2'
                            ? BLOCKS_TEMPLATE_PRESET2
                            : BLOCKS_TEMPLATE_CUSTOM
                      }
                    />
                  </div>
                </div>
              </div>
            </div>
          </>
        }
      </div>,
    ];
  }
}
