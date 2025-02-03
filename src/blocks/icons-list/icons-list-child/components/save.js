/**
 * Internal dependencies
 */
import IconList from "./iconlist";
import renderSVG from "../../../../renderIcon";
import ResponsiveBlocksIcon from "../../../../ResponsiveBlocksIcon.json";
import classnames from "classnames";

/**
 * WordPress dependencies
 */
const { Component } = wp.element;
const { RichText } = wp.blockEditor;

export default class Save extends Component {
  constructor() {
    super(...arguments);
  }

  render() {
    // Setup the attributes
    const {
      label,
      hideLabel,
      icon,
      link,
      target,
      disableLink,
      block_id,
      image,
      source_type,
    } = this.props.attributes;

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

    return [
      <IconList {...this.props}>
        {disableLink && (
          <a
            target={target_val}
            rel="noopener noreferrer"
            aria-label={label}
            href={link_url}
            class="wp-responsive-block-editor-addons-icon-list responsive-block-editor-addons-icon-list-link"
          ></a>
        )}
        <div
          className={classnames(
            `responsive-block-editor-addons-icon-${block_id}`,
            "responsive-block-editor-addons-icon-list__content-wrap"
          )}
        >
          <span className="responsive-block-editor-addons-icon-list__source-wrap">
            {image_icon_html}
          </span>
          {!hideLabel && (
            <div className="responsive-block-editor-addons-icon-list__label-wrap">
              <RichText.Content
                tagName="div"
                value={label}
                className="responsive-block-editor-addons-icon-list__label"
              />
            </div>
          )}
        </div>
      </IconList>,
    ];
  }
}
