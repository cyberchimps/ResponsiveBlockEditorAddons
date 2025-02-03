/**
 * Internal dependencies
 */
import classnames from "classnames";
import renderSVG from "../../../renderIcon";
import Inspector from "./inspector";
import InfoBlock from "./infoblock";
import ResponsiveBlocksIcon from "../../../ResponsiveBlocksIcon.json";
import InfoBoxPositionClasses from "./classes";
import React from "react";
import { loadGoogleFont } from "../../../utils/font";
import EditorStyles from "./editor-styles";

/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { Component, Fragment } = wp.element;
const {
  RichText,
  AlignmentToolbar,
  BlockControls,
  MediaUpload,
  InnerBlocks,
  MediaUploadCheck,
  figure,
  URLInput,
} = wp.blockEditor;
const { Button, Dashicon, Icon } = wp.components;

let svg_icons = Object.keys(ResponsiveBlocksIcon);

export default class Edit extends Component {
  constructor() {
    super(...arguments);
  }

  componentDidUpdate(prevProps, prevState) {
    var element = document.getElementById(
      "responsive-block-editor-addons-info-block-style-" + this.props.clientId
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
      "responsive-block-editor-addons-info-block-style-" + this.props.clientId
    );
    document.head.appendChild($style);
  }

  render() {
    // Setup the attributes
    const {
      attributes: {
        block_id,
        resinfoBlockTitle,
        resDescHeading,
        resheadingAlign,
        resprefixTitle,
        resheadingTag,
        resheadFontFamily,
        ressubHeadFontFamily,
        icon,
        imgiconPosition,
        source_type,
        resseperatorPosition,
        resseperatorStyle,
        resctaType,
        resctaText,
        resctaTarget,
        iconImage,
        resshowPrefix,
        resshowTitle,
        resshowDesc,
        backgroundImage,
        dimRatio,
        imageBoxShadowPosition,
        imageopacity,
        ctaTextFontFamily,
        imgURL
      },
      setAttributes,
    } = this.props;

    var imageBoxShadowPositionCSS = imageBoxShadowPosition;

    if ("outset" === imageBoxShadowPosition) {
      imageBoxShadowPositionCSS = "";
    }
    const onSelectBgImage = (img) => {
      setAttributes({
        imgID: img.id,
        backgroundImage: img.url,
        imgAlt: img.alt,
      });
    };

    const dimRatioToClass = (ratio) => {
      return 0 === ratio || 50 === ratio
        ? null
        : "has-background-dim-" + 10 * Math.round(ratio / 10);
    };

    let ctaBtnClass =
      "responsive-block-editor-addons-infobox-cta-link responsive-block-editor-addons-ifb-cta-button";

    let target = "_self";
    let rel = "noopener noreferrer";
    if (resctaTarget) {
      target = "_blank";
    }

    let url_chk = "";
    if (
      typeof iconImage !== "undefined" &&
      iconImage !== null &&
      iconImage !== ""
    ) {
      url_chk = iconImage.url;
    }

    let url = "";
    if (url_chk !== "") {
      let size = iconImage.sizes;
      let imageSize = imageSize;

      if (
        typeof size !== "undefined" &&
        typeof size[imageSize] !== "undefined"
      ) {
        url = size[imageSize].url;
      } else {
        url = url_chk;
      }
    } else {
      <div className="responsive-block-editor-addons-ifb-image-content"></div>;
    }

    let alt = "";
    if(iconImage && (iconImage.alt !== "" && typeof iconImage.alt !== "undefined")) {
      alt = iconImage.alt;
    }

    // Get icon/Image components.
    let is_image = "";
    if (source_type === "icon" && icon !== "") {
      is_image = (
        <div className="responsive-block-editor-addons-ifb-image-icon-content responsive-block-editor-addons-ifb-imgicon-wrap">
          <div className="responsive-block-editor-addons-ifb-icon-wrap">
            <span className="responsive-block-editor-addons-ifb-icon">
              {renderSVG(icon)}
            </span>
          </div>
        </div>
      );
    }
    if (source_type === "image") {
      is_image = (
        <div className="responsive-block-editor-addons-ifb-image-icon-content responsive-block-editor-addons-ifb-imgicon-wrap">
          <div className="responsive-block-editor-addons-ifb-image">
            <div className="responsive-block-editor-addons-ifb-image-content">
              <img className="" src={url} alt={alt} />
            </div>
          </div>
        </div>
      );
    }
    var icon_image_html = is_image;
    var seperator_position = resseperatorPosition;
    var seperator_html = (
      <div className="responsive-block-editor-addons-ifb-separator-parent">
        <div className="responsive-block-editor-addons-ifb-separator"></div>
      </div>
    );
    var show_seperator = true;

    if (
      resseperatorPosition == "after_icon" &&
      (imgiconPosition == "above-title" || imgiconPosition == "below-title")
    ) {
      show_seperator = false;
      icon_image_html = (
        <Fragment>
          {is_image}
          {"none" !== resseperatorStyle && seperator_html}
        </Fragment>
      );
    }

    if (
      resseperatorPosition == "after_icon" &&
      (imgiconPosition !== "above-title" || imgiconPosition !== "below-title")
    ) {
      seperator_position = "after_title";
    }

    if (
      imgiconPosition == "below-title" &&
      resseperatorPosition == "after_title"
    ) {
      show_seperator = false;
      icon_image_html = (
        <Fragment>
          {"none" !== resseperatorStyle && seperator_html}
          {is_image}
        </Fragment>
      );
    }
    let imgopacity = imageopacity / 100;
    return [
      <style id={`responsive-block-editor-addons-info-block-style-${this.props.clientId}-inner`}>{EditorStyles(this.props)}</style>,
      <Fragment key="above-below-title-fragment" >
        {(imgiconPosition == "above-title" ||
          imgiconPosition == "below-title") && (
          <BlockControls key="controls">
            <AlignmentToolbar
              value={resheadingAlign}
              onChange={(value) => setAttributes({ resheadingAlign: value })}
            />
          </BlockControls>
        )}
        <Inspector key="inspector" {...{ setAttributes, ...this.props }} />
        <InfoBlock key={`block-info-${block_id}`} {...this.props}>
          <div
          key={`block-${block_id}`}
            className={classnames(
              "responsive-block-editor-addons-infobox__content-wrap",
              ...InfoBoxPositionClasses(this.props.attributes)
            )}
          >
			      {ctaTextFontFamily && loadGoogleFont(ctaTextFontFamily)}
            {(backgroundImage || imgURL !== 'empty') && (!!backgroundImage?.length || !!imgURL?.length) && (
              <div key={`block-wrapper-${block_id}`} className="responsive-block-editor-addons-cta-image-wrap">
                <img
                  className={classnames(
                    "responsive-block-editor-addons-cta-image",
                    dimRatioToClass(dimRatio),
                    {
                      "has-background-dim": 0 !== dimRatio,
                    }
                  )}
                />
              </div>
            )}
            <div className="responsive-block-editor-addons-ifb-left-right-wrap">
              {imgiconPosition == "left" && icon_image_html}
              <div className="responsive-block-editor-addons-ifb-content">
                {imgiconPosition == "above-title" && icon_image_html}

                {(imgiconPosition == "above-title" ||
                  imgiconPosition == "below-title") && (
                  <div className="responsive-block-editor-addons-ifb-title-wrap">
                    {resheadFontFamily && loadGoogleFont(resheadFontFamily)}
                    {ressubHeadFontFamily &&
                      loadGoogleFont(ressubHeadFontFamily)}
                    {resshowPrefix && (
                      <RichText
                        tagName="div"
                        value={resprefixTitle}
                        placeholder={__(
                          "Write a Prefix",
                          "responsive-block-editor-addons"
                        )}
                        className="responsive-block-editor-addons-ifb-title-prefix"
                        multiline={false}
                        onChange={(value) => {
                          setAttributes({ resprefixTitle: value });
                        }}
                      />
                    )}
                    {"none" !== resseperatorStyle &&
                      seperator_position == "after_prefix" &&
                      seperator_html}
                    {resshowTitle && (
                      <RichText
                        tagName={resheadingTag}
                        placeholder={__(
                          "Write a Heading",
                          "responsive-block-editor-addons"
                        )}
                        value={resinfoBlockTitle}
                        className="responsive-block-editor-addons-ifb-title"
                        onChange={(value) =>
                          setAttributes({ resinfoBlockTitle: value })
                        }
                        multiline={false}
                      />
                    )}
                  </div>
                )}

                {imgiconPosition == "below-title" && icon_image_html}

                {(imgiconPosition == "above-title" ||
                  imgiconPosition == "below-title") && (
                  <Fragment key="above-below-title-inner-fragment" >
                    {"none" !== resseperatorStyle &&
                      seperator_position == "after_title" &&
                      show_seperator &&
                      seperator_html}
                    <div className="responsive-block-editor-addons-ifb-text-wrap">
                      {resshowDesc && (
                        <RichText
                          tagName="p"
                          value={resDescHeading}
                          placeholder={__(
                            "Write a Description",
                            "responsive-block-editor-addons"
                          )}
                          className="responsive-block-editor-addons-ifb-desc"
                          
                          onChange={(value) =>
                            setAttributes({ resDescHeading: value })
                          }
                        />
                      )}
                      {"none" !== resseperatorStyle &&
                        seperator_position == "after_desc" &&
                        seperator_html}
                      <div className="responsive-block-editor-addons-ifb-cta responsive-block-editor-addons-infobox-cta-link-style">
                        {resctaType === "text" && (
                          <a
                            target={target}
                            className="responsive-block-editor-addons-infobox-cta-link"
                            rel={rel}
                          >
                            <span className="responsive-block-editor-addons-inline-editing">
                              {resctaText}
                            </span>
                          </a>
                        )}

                        {resctaType === "button" && (
                          <div
                            className={classnames(
                              "responsive-block-editor-addons-ifb-button-wrapper"
                            )}
                          >
                            <a
                              className={ctaBtnClass}
                              target={target}
                              rel={rel}
                            >
                              <span className="responsive-block-editor-addons-ifb-cta-content-wrapper">
                                <span className="responsive-block-editor-addons-inline-editing ">
                                  {resctaText}
                                </span>
                              </span>
                            </a>
                          </div>
                        )}
                      </div>
                    </div>
                  </Fragment>
                )}

                {imgiconPosition === "left-title" && (
                  <Fragment key="left-title-fragment" >
                    <div className="responsive-block-editor-addons-ifb-left-title-image">
                      {icon_image_html}
                      <div className="responsive-block-editor-addons-ifb-title-wrap">
                        {resshowPrefix && (
                          <RichText
                            tagName="div"
                            value={resprefixTitle}
                            placeholder={__(
                              "Write a Prefix",
                              "responsive-block-editor-addons"
                            )}
                            className="responsive-block-editor-addons-ifb-title-prefix"
                            multiline={false}
                            onChange={(value) => {
                              setAttributes({ resprefixTitle: value });
                            }}
                          />
                        )}
                        {"none" !== resseperatorStyle &&
                          seperator_position == "after_prefix" &&
                          seperator_html}
                        {resshowTitle && (
                          <RichText
                            tagName={resheadingTag}
                            placeholder={__(
                              "Write a Heading",
                              "responsive-block-editor-addons"
                            )}
                            value={resinfoBlockTitle}
                            className="responsive-block-editor-addons-ifb-title"
                            onChange={(value) =>
                              setAttributes({ resinfoBlockTitle: value })
                            }
                            multiline={false}
                          />
                        )}
                      </div>
                    </div>
                    {"none" !== resseperatorStyle &&
                      seperator_position == "after_title" &&
                      show_seperator &&
                      seperator_html}
                    <div className="responsive-block-editor-addons-ifb-text-wrap">
                      {resshowDesc && (
                        <RichText
                          tagName="p"
                          value={resDescHeading}
                          placeholder={__(
                            "Write a Description",
                            "responsive-block-editor-addons"
                          )}
                          className="responsive-block-editor-addons-ifb-desc"
                          onChange={(value) =>
                            setAttributes({ resDescHeading: value })
                          }
                        />
                      )}
                      {"none" !== resseperatorStyle &&
                        seperator_position == "after_desc" &&
                        seperator_html}
                      <div className="responsive-block-editor-addons-ifb-cta responsive-block-editor-addons-infobox-cta-link-style">
                        {resctaType === "text" && (
                          <a
                            target={target}
                            className="responsive-block-editor-addons-infobox-cta-link"
                            rel={rel}
                          >
                            <span className="responsive-block-editor-addons-inline-editing">
                              {resctaText}
                            </span>
                          </a>
                        )}

                        {resctaType === "button" && (
                          <div
                            className={classnames(
                              "responsive-block-editor-addons-ifb-button-wrapper"
                            )}
                          >
                            <a
                              className={ctaBtnClass}
                              target={target}
                              rel={rel}
                            >
                              <span className="responsive-block-editor-addons-ifb-cta-content-wrapper">
                                <span className="responsive-block-editor-addons-inline-editing ">
                                  {resctaText}
                                </span>
                              </span>
                            </a>
                          </div>
                        )}
                      </div>
                    </div>
                  </Fragment>
                )}

                {imgiconPosition === "right-title" && (
                  <Fragment key="left-right-fragment" >
                    <div className="responsive-block-editor-addons-ifb-right-title-image">
                      <div className="responsive-block-editor-addons-ifb-title-wrap">
                        {resshowPrefix && (
                          <RichText
                            tagName="div"
                            value={resprefixTitle}
                            placeholder={__(
                              "Write a Prefix",
                              "responsive-block-editor-addons"
                            )}
                            className="responsive-block-editor-addons-ifb-title-prefix"
                            multiline={false}
                            onChange={(value) => {
                              setAttributes({ resprefixTitle: value });
                            }}
                          />
                        )}
                        {"none" !== resseperatorStyle &&
                          seperator_position == "after_prefix" &&
                          seperator_html}
                        {resshowTitle && (
                          <RichText
                            tagName={resheadingTag}
                            placeholder={__(
                              "Write a Heading",
                              "responsive-block-editor-addons"
                            )}
                            value={resinfoBlockTitle}
                            className="responsive-block-editor-addons-ifb-title"
                            onChange={(value) =>
                              setAttributes({ resinfoBlockTitle: value })
                            }
                            multiline={false}
                          />
                        )}
                      </div>
                      {icon_image_html}
                    </div>
                    {"none" !== resseperatorStyle &&
                      seperator_position == "after_title" &&
                      show_seperator &&
                      seperator_html}
                    <div className="responsive-block-editor-addons-ifb-text-wrap">
                      {resshowDesc && (
                        <RichText
                          tagName="p"
                          value={resDescHeading}
                          placeholder={__(
                            "Write a Description",
                            "responsive-block-editor-addons"
                          )}
                          className="responsive-block-editor-addons-ifb-desc"
                          onChange={(value) =>
                            setAttributes({ resDescHeading: value })
                          }
                        />
                      )}
                      {"none" !== resseperatorStyle &&
                        seperator_position == "after_desc" &&
                        seperator_html}
                      <div className="responsive-block-editor-addons-ifb-cta responsive-block-editor-addons-infobox-cta-link-style">
                        {resctaType === "text" && (
                          <a
                            target={target}
                            className="responsive-block-editor-addons-infobox-cta-link"
                            rel={rel}
                          >
                            <span className="responsive-block-editor-addons-inline-editing">
                              {resctaText}
                            </span>
                          </a>
                        )}

                        {resctaType === "button" && (
                          <div
                            className={classnames(
                              "responsive-block-editor-addons-ifb-button-wrapper"
                            )}
                          >
                            <a
                              className={ctaBtnClass}
                              target={target}
                              rel={rel}
                            >
                              <span className="responsive-block-editor-addons-ifb-cta-content-wrapper">
                                <span className="responsive-block-editor-addons-inline-editing ">
                                  {resctaText}
                                </span>
                              </span>
                            </a>
                          </div>
                        )}
                      </div>
                    </div>
                  </Fragment>
                )}

                {(imgiconPosition == "left" || imgiconPosition == "right") && (
                  <Fragment key="left-right-title-fragment" >
                    <div className="responsive-block-editor-addons-ifb-title-wrap">
                      {resshowPrefix && (
                        <RichText
                          tagName="div"
                          value={resprefixTitle}
                          placeholder={__(
                            "Write a Prefix",
                            "responsive-block-editor-addons"
                          )}
                          className="responsive-block-editor-addons-ifb-title-prefix"
                          multiline={false}
                          onChange={(value) => {
                            setAttributes({ resprefixTitle: value });
                          }}
                        />
                      )}
                      {"none" !== resseperatorStyle &&
                        seperator_position == "after_prefix" &&
                        seperator_html}
                      {resshowTitle && (
                        <RichText
                          tagName={resheadingTag}
                          placeholder={__(
                            "Write a Heading",
                            "responsive-block-editor-addons"
                          )}
                          value={resinfoBlockTitle}
                          className="responsive-block-editor-addons-ifb-title"
                          onChange={(value) =>
                            setAttributes({ resinfoBlockTitle: value })
                          }
                          multiline={false}
                        />
                      )}
                    </div>
                    {"none" !== resseperatorStyle &&
                      seperator_position == "after_title" &&
                      show_seperator &&
                      seperator_html}
                    <div className="responsive-block-editor-addons-ifb-text-wrap">
                      {resshowDesc && (
                        <RichText
                          tagName="p"
                          value={resDescHeading}
                          placeholder={__(
                            "Write a Description",
                            "responsive-block-editor-addons"
                          )}
                          className="responsive-block-editor-addons-ifb-desc"
                          onChange={(value) =>
                            setAttributes({ resDescHeading: value })
                          }
                        />
                      )}
                      {"none" !== resseperatorStyle &&
                        seperator_position == "after_desc" &&
                        seperator_html}
                      <div className="responsive-block-editor-addons-ifb-cta responsive-block-editor-addons-infobox-cta-link-style">
                        {resctaType === "text" && (
                          <a
                            target={target}
                            className="responsive-block-editor-addons-infobox-cta-link"
                            rel={rel}
                          >
                            <span className="responsive-block-editor-addons-inline-editing">
                              {resctaText}
                            </span>
                          </a>
                        )}

                        {resctaType === "button" && (
                          <div
                            className={classnames(
                              "responsive-block-editor-addons-ifb-button-wrapper"
                            )}
                          >
                            <a
                              className={ctaBtnClass}
                              target={target}
                              rel={rel}
                            >
                              <span className="responsive-block-editor-addons-ifb-cta-content-wrapper">
                                <span className="responsive-block-editor-addons-inline-editing ">
                                  {resctaText}
                                </span>
                              </span>
                            </a>
                          </div>
                        )}
                      </div>
                    </div>
                  </Fragment>
                )}
              </div>

              {imgiconPosition == "right" && icon_image_html}
            </div>
          </div>
        </InfoBlock>
      </Fragment>,
    ];
  }
}
