/**
 * Internal dependencies
 */
import classnames from "classnames";
import icons from "./../../../utils/components/icons";
import renderSVG from "../../../renderIcon";
import Inspector from "./inspector";
import InfoBlock from "./infoblock";
import ResponsiveBlocksIcon from "../../../ResponsiveBlocksIcon.json";
import InfoBoxPositionClasses from "./classes";
import React from "react";
import Style from "style-it";
import generateCSSUnit from "../../../generateCSSUnit";

/**
 * WordPress dependencies
 */
const { Component, Fragment } = wp.element;
const { RichText } = wp.blockEditor;
const { Dashicon } = wp.components;

export default class Save extends Component {
  constructor() {
    super(...arguments);
  }

  render() {
    const {
      block_id,
      resinfoBlockTitle,
      resDescHeading,
      resprefixTitle,
      resheadingTag,
      icon,
      imgiconPosition,
      source_type,
      resseperatorPosition,
      resseperatorStyle,
      resctaType,
      resctaText,
      resctaLink,
      buttonTarget,
      resctaLinkColor,
      resctaFontSize,
      iconImage,
      resshowPrefix,
      resshowTitle,
      resshowDesc,
      counterId,
      backgroundImage,
      dimRatio,
      imageBoxShadowPosition,
      imageopacity,
      resBoxTarget,
      resBoxLink,
      imgURL
    } = this.props.attributes;
    var imageBoxShadowPositionCSS = imageBoxShadowPosition;

    if ("outset" === imageBoxShadowPosition) {
      imageBoxShadowPositionCSS = "";
    }
    const dimRatioToClass = (ratio) => {
      return 0 === ratio || 50 === ratio
        ? null
        : "has-background-dim-" + 10 * Math.round(ratio / 10);
    };

    let ctaBtnClass =
      "responsive-block-editor-addons-infobox-cta-link responsive-block-editor-addons-ifb-cta-button";

    let target = "_self";
    let rel = "noopener noreferrer";
    if (buttonTarget) {
      target = "_blank";
    }

    let boxRefLink = "_self";
    let boxRel= "noopener noreferrer";
    if(resBoxTarget) {
      boxRefLink = "_blank";
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
      <InfoBlock {...this.props}>
        <div
          className={classnames(
            "responsive-block-editor-addons-infobox__content-wrap",
            ...InfoBoxPositionClasses(this.props.attributes)
          )}
        >
          {resctaType === 'complete_box' && (
            	<a className = "responsive-block-editor-addons-infobox-cta-link-complete-box" href={resBoxLink} target={boxRefLink} aria-label={"Infoblock Link"} rel ={boxRel}></a>
          )}
          {(backgroundImage || imgURL !== 'empty') && (!!backgroundImage?.length || !!imgURL?.length) && (
            <div className="responsive-block-editor-addons-cta-image-wrap">
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
                  {resshowPrefix && (
                    <RichText.Content
                      tagName="span"
                      value={resprefixTitle}
                      className="responsive-block-editor-addons-ifb-title-prefix"
                    />
                  )}
                  {"none" !== resseperatorStyle &&
                    seperator_position == "after_prefix" &&
                    seperator_html}
                  {resshowTitle && (
                    <RichText.Content
                      tagName={resheadingTag}
                      value={resinfoBlockTitle}
                      className="responsive-block-editor-addons-ifb-title"
                    />
                  )}
                </div>
              )}

              {imgiconPosition == "below-title" && icon_image_html}

              {(imgiconPosition == "above-title" ||
                imgiconPosition == "below-title") && (
                <Fragment>
                  {"none" !== resseperatorStyle &&
                    seperator_position == "after_title" &&
                    show_seperator &&
                    seperator_html}
                  <div className="responsive-block-editor-addons-ifb-text-wrap">
                    {resshowDesc && (
                      <RichText.Content
                        tagName="p"
                        value={resDescHeading}
                        className="responsive-block-editor-addons-ifb-desc"
                      />
                    )}
                    {"none" !== resseperatorStyle &&
                      seperator_position == "after_desc" &&
                      seperator_html}
                    <div className="responsive-block-editor-addons-ifb-cta responsive-block-editor-addons-infobox-cta-link-style">
                      {resctaType === "text" && (
                        <a
                          href={resctaLink}
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
                            href={resctaLink}
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
                <Fragment>
                  <div className="responsive-block-editor-addons-ifb-left-title-image">
                    {icon_image_html}
                    <div className="responsive-block-editor-addons-ifb-title-wrap">
                      {resshowPrefix && (
                        <RichText.Content
                          tagName="span"
                          value={resprefixTitle}
                          className="responsive-block-editor-addons-ifb-title-prefix"
                        />
                      )}
                      {"none" !== resseperatorStyle &&
                        seperator_position == "after_prefix" &&
                        seperator_html}
                      {resshowTitle && (
                        <RichText.Content
                          tagName={resheadingTag}
                          value={resinfoBlockTitle}
                          className="responsive-block-editor-addons-ifb-title"
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
                      <RichText.Content
                        tagName="p"
                        value={resDescHeading}
                        className="responsive-block-editor-addons-ifb-desc"
                      />
                    )}
                    {"none" !== resseperatorStyle &&
                      seperator_position == "after_desc" &&
                      seperator_html}
                    <div className="responsive-block-editor-addons-ifb-cta responsive-block-editor-addons-infobox-cta-link-style">
                      {resctaType === "text" && (
                        <a
                          href={resctaLink}
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
                            href={resctaLink}
                            className={ctaBtnClass}
                            target={target}
                            rel={rel}
                          >
                            <span className="responsive-block-editor-addons-ifb-cta-content-wrapper">
                              <span
                                className="responsive-block-editor-addons-inline-editing "
                                style={{
                                  fontSize: resctaFontSize,
                                }}
                              >
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
                <Fragment>
                  <div className="responsive-block-editor-addons-ifb-right-title-image">
                    <div className="responsive-block-editor-addons-ifb-title-wrap">
                      {resshowPrefix && (
                        <RichText.Content
                          tagName="span"
                          value={resprefixTitle}
                          className="responsive-block-editor-addons-ifb-title-prefix"
                        />
                      )}
                      {"none" !== resseperatorStyle &&
                        seperator_position == "after_prefix" &&
                        seperator_html}
                      {resshowTitle && (
                        <RichText.Content
                          tagName={resheadingTag}
                          value={resinfoBlockTitle}
                          className="responsive-block-editor-addons-ifb-title"
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
                      <RichText.Content
                        tagName="p"
                        value={resDescHeading}
                        className="responsive-block-editor-addons-ifb-desc"
                      />
                    )}
                    {"none" !== resseperatorStyle &&
                      seperator_position == "after_desc" &&
                      seperator_html}
                    <div className="responsive-block-editor-addons-ifb-cta responsive-block-editor-addons-infobox-cta-link-style">
                      {resctaType === "text" && (
                        <a
                          href={resctaLink}
                          target={target}
                          className="responsive-block-editor-addons-infobox-cta-link"
                          rel={rel}
                        >
                          <span
                            className="responsive-block-editor-addons-inline-editing"
                            style={{
                              color: resctaLinkColor,
                              fontSize: resctaFontSize,
                            }}
                          >
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
                            href={resctaLink}
                            className={ctaBtnClass}
                            target={target}
                            rel={rel}
                          >
                            <span className="responsive-block-editor-addons-ifb-cta-content-wrapper">
                              <span
                                className="responsive-block-editor-addons-inline-editing "
                                style={{
                                  fontSize: resctaFontSize,
                                }}
                              >
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
                <Fragment>
                  <div className="responsive-block-editor-addons-ifb-title-wrap">
                    {resshowPrefix && (
                      <RichText.Content
                        tagName="span"
                        value={resprefixTitle}
                        className="responsive-block-editor-addons-ifb-title-prefix"
                      />
                    )}
                    {"none" !== resseperatorStyle &&
                      seperator_position == "after_prefix" &&
                      seperator_html}
                    {resshowTitle && (
                      <RichText.Content
                        tagName={resheadingTag}
                        value={resinfoBlockTitle}
                        className="responsive-block-editor-addons-ifb-title"
                      />
                    )}
                  </div>
                  {"none" !== resseperatorStyle &&
                    seperator_position == "after_title" &&
                    show_seperator &&
                    seperator_html}
                  <div className="responsive-block-editor-addons-ifb-text-wrap">
                    {resshowDesc && (
                      <RichText.Content
                        tagName="p"
                        value={resDescHeading}
                        className="responsive-block-editor-addons-ifb-desc"
                      />
                    )}
                    {"none" !== resseperatorStyle &&
                      seperator_position == "after_desc" &&
                      seperator_html}

                    <div className="responsive-block-editor-addons-ifb-cta responsive-block-editor-addons-infobox-cta-link-style">
                      {resctaType === "text" && (
                        <a
                          href={resctaLink}
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
                            href={resctaLink}
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
      </InfoBlock>,
    ];
  }
}
