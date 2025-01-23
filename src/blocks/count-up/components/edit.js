/**
 * Internal dependencies
 */
import classnames from "classnames";
import Inspector from "./inspector";
import times from "lodash/times";
import renderSVG from "../../../renderIcon";
import ResponsiveBlocksIcon from "../../../ResponsiveBlocksIcon.json";
import React from "react";
import EditorStyles from "./editor-styles";
import counterUp from "counterup2";
require("waypoints/lib/noframework.waypoints.js");

/**
 * WordPress dependencies
 */
const { __, sprintf } = wp.i18n;
const { Component } = wp.element;
const { RichText, InnerBlocks, BlockControls, AlignmentToolbar } = wp.blockEditor;
const { Button, Dashicon, Icon } = wp.components;
import memoize from "memize";
import map from "lodash/map";
import { loadGoogleFont } from "../../../utils/font";

const getCount = memoize((count) => {
  return times(count, (index) => [
    "responsive-block-editor-addons/count-up",
    {
      placeholder: sprintf(
        /* translators: %d: a digit 1-3 */
        __("Title %d", "responsive-block-editor-addons"),
        parseInt(index + 1)
      ),
    },
  ]);
});

let svg_icons = Object.keys(ResponsiveBlocksIcon);

export default class Edit extends Component {
  constructor() {
    super(...arguments);
  }

  componentDidUpdate(prevProps, prevState) {
    var element = document.getElementById(
      "responsive-block-editor-addons-count-up-style-" + this.props.clientId
    );

    if (null !== element && undefined !== element) {
      element.innerHTML = EditorStyles(this.props);
    }
  }

  componentDidMount() {
    // Assigning block_id in the attribute.
    this.props.setAttributes({ block_id: this.props.clientId });
    this.props.setAttributes({ classMigrate: true });

    const $style = document.createElement("style");
    $style.setAttribute("id", `responsive-block-editor-addons-count-up-style-${this.props.clientId}`);
    document.head.appendChild($style);

    // Using MutationObserver instead of setTimeout
    const observer = new MutationObserver(() => {
      this.handleAmountChange();
      observer.disconnect(); // Stop observing once changes are detected and handled
    });
  
    // Observe the editor for changes in child nodes
    observer.observe(document.body, {
        childList: true,
        subtree: true
    }); 
  }

  handleAmountChange() {
    const elems = document.querySelectorAll(`[id^="responsive-count-item__amount-${this.props.clientId}-"]`);

    // Initialize Intersection Observer for better performance
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const elem = entry.target;
                elem.classList.add("responsive-countup--hide");
                
                counterUp(elem); // Start the animation
                elem.classList.remove("responsive-countup--hide");
                observer.unobserve(elem); // Stop observing after animation triggers
            }
        });
    }, { threshold: 0.75 }); // Trigger when 75% of the element is visible

    // Observe all targeted elements
    elems.forEach(elem => observer.observe(elem));
  }

  render() {
    // Setup the attributes
    const {
      attributes: {
        block_id,
        countUp,
        count,
        contentAlign,
        dateFontFamily,
        headingFontFamily,
        contentFontFamily,
        resshowIcon,
        resshowTitle,
        resshowDesc,
        resshowNum,
        iconStyle,
      },
      setAttributes,
    } = this.props;
    var data_copy = [...countUp];

    const classes = classnames("responsive-count", {
      [`has-text-align-${contentAlign}`]: contentAlign,
    });

    const formattingControls = ["core/bold", "core/italic", "core/strikethrough"];

    return [
      <style id={`responsive-block-editor-addons-count-up-style-${this.props.clientId}-inner`}>{EditorStyles(this.props)}</style>,
      // Show the alignment toolbar on focus
      <BlockControls key="controls">
        <AlignmentToolbar
          value={contentAlign}
          onChange={(value) => setAttributes({ contentAlign: value })}
        />
      </BlockControls>,

      // Show the block controls on focus

      <Inspector key="inspector" {...{ setAttributes, ...this.props }} />,

      <div key={`block-${block_id}`} className={classes}>
        <div key={`block-main-${block_id}`}
          className={classnames(
            this.props.className, 
            "responsive-block-editor-addons-block-count-up",
            `block-${block_id}`,
            "responsive-count__inner"
          )}
        >
          {dateFontFamily && loadGoogleFont(dateFontFamily)}
          {headingFontFamily && loadGoogleFont(headingFontFamily)}
          {contentFontFamily && loadGoogleFont(contentFontFamily)}
          {countUp.map((test, index) => (
            <div key={`count-up-${index}`} className={classnames("responsive-count-item")}>
              {resshowIcon && (
                <div key={`count-up-item-${index}`}
                  className={classnames(
                    "responsive-block-editor-addons-count-up__source-wrap",
                    `res-countup-icon-design-${iconStyle}`
                  )}
                >
                  <div key={`count-up-source-${index}`}  className="responsive-block-editor-addons-count-up__source-icon">
                    {renderSVG(countUp[index]["icon"])}
                  </div>
                </div>
              )}
              {resshowTitle && (
                <RichText
                  key={`count-up-title-${index}`}
                  tagName="span"
                  className="responsive-count-item__title"
                  value={countUp[index]["title"]}
                  placeholder={countUp[index]["title"]}
                  onChange={(value) => {
                    var new_content = {
                      title: value,
                      amount: data_copy[index]["amount"],
                      features: data_copy[index]["features"],
                      icon: data_copy[index]["icon"],
                    };
                    data_copy[index] = new_content;
                    setAttributes({ countUp: data_copy });
                  }}
                  allowed={formattingControls}
                  
                />
              )}
              {resshowNum && (
                <div key={`count-up-price-${index}`} className="responsive-count-item__price-wrapper">
                  <RichText
                  key={`count-up-price-${index}`}
                    tagName="div"
                    id={`responsive-count-item__amount-${this.props.clientId}-${index}`}
                    className="responsive-count-item__amount"
                    data-duration="1000"
                    data-delay="16"
                    placeholder={countUp[index]["amount"]}
                    value={countUp[index]["amount"]}
                    onChange={(value) => {
                      var new_content = {
                        title: data_copy[index]["title"],
                        amount: value,
                        features: data_copy[index]["features"],
                        icon: data_copy[index]["icon"],
                      };
                      data_copy[index] = new_content;
                      setAttributes({ countUp: data_copy });
                    }}
                    allowedFormats={formattingControls}
                    
                  />
                </div>
              )}
              {resshowDesc && (
                <RichText
                  tagName="div"
                  key={`count-up-features-${index}`}
                  className="responsive-count-item__features"
                  value={countUp[index]["features"]}
                  placeholder={__(
                    "Description",
                    "responsive-block-editor-addons"
                  )}
                  onChange={(value) => {
                    var new_content = {
                      title: data_copy[index]["title"],
                      amount: data_copy[index]["amount"],
                      features: value,
                      icon: data_copy[index]["icon"],
                    };
                    data_copy[index] = new_content;
                    setAttributes({ countUp: data_copy });
                  }}
                  
                />
              )}
            </div>
          ))}
        </div>
      </div>,
    ];
  }
}
