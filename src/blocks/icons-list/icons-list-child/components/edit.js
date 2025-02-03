/**
 * Internal dependencies
 */
import classnames from "classnames";
import Inspector from "./inspector";
import IconList from "./iconlist";
import renderSVG from "../../../../renderIcon";
import EditorStyles from "./editor-styles";
import { createBlock, replaceBlocks } from '@wordpress/blocks';

/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { Component, Fragment } = wp.element;
const { RichText } = wp.blockEditor;

export default class Edit extends Component {
  constructor() {
    super(...arguments);
  }

  componentDidUpdate(prevProps, prevState) {
    var element = document.getElementById(
      "responsive-block-editor-addons-icon-list-child-style-" +
        this.props.clientId
    );

    if (null !== element && undefined !== element) {
      element.innerHTML = EditorStyles(this.props);
    }
  }
  componentDidMount() {
    // Assigning block_id in the attribute.
    this.props.setAttributes({ block_id: this.props.clientId });

    // Pushing Style tag for this block css.
    const $style = document.createElement("style");
    $style.setAttribute(
      "id",
      "responsive-block-editor-addons-icon-list-child-style-" +
        this.props.clientId
    );
    document.head.appendChild($style);
  }

  render() {
    // Setup the attributes
    const { attributes, setAttributes, onReplace, mergeBlocks } = this.props;

    const {
      label,
      hideLabel,
      icon,
      block_id,
      image,
      source_type,
      link,
      target,
      disableLink,
    } = attributes;


    let image_icon_html = "";

    if (source_type == "icon") {
      if (icon) {
        image_icon_html = (
          <span className="responsive-block-editor-addons-icon-list__source-icon">
            {renderSVG(icon)}
          </span>
        );
      }
    } else {
      if (image && image.url) {
        image_icon_html = (
          <img
            className="responsive-block-editor-addons-icon-list__source-image"
            src={image.url}
          />
        );
      }
    }

    let target_val = target ? "_blank" : "_self";
    let link_url = disableLink ? link : "/";

    return (
      <Fragment>
        <Inspector {...{ setAttributes, ...this.props }} />

        <IconList {...this.props}>
          {disableLink && (
            <a
              target={target_val}
              rel="noopener noreferrer"
              aria-label={label}
              href={link_url}
              class="responsive-block-editor-addons-icon-list-link"
            ></a>
          )}
          <div
            className={classnames(
              `responsive-block-editor-addons-icon-${block_id}`,
              " responsive-block-editor-addons-icon-list__content-wrap"
            )}
          >
            <span className="responsive-block-editor-addons-icon-list__source-wrap">
              {image_icon_html}
            </span>
            {!hideLabel && (
              <div className="responsive-block-editor-addons-icon-list__label-wrap">
                <RichText
                  tagName="div"
                  placeholder={__(
                    "Label Name",
                    "responsive-block-editor-addons"
                  )}
                  value={label}
                  onChange={(value) => setAttributes({ label: value })}
                  className="responsive-block-editor-addons-icon-list__label"
                  multiline={false}
                  allowedFormats={[
                    "core/bold",
                    "core/italic",
                    "core/strikethrough",
                  ]}
                  onSplit={ ( value ) => createBlock( 'responsive-block-editor-addons/icons-list-child', { ...attributes, label: value } )}
                  onMerge={ mergeBlocks }
                  onReplace={ onReplace }
                  onRemove={ () => onReplace( [] ) }
                />
              </div>
            )}
          </div>
        </IconList>
      </Fragment>
    );
  }
}
