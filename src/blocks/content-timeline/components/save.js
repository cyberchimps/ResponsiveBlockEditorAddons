/**
 * Internal dependencies
 */
import classnames from "classnames";
import AlignClass from "./align-classes";
import DayAlignClass from "./day-align-classes";
import ContentTmClasses from "./classes";
import React from "react";
import renderSVG from "../../../renderIcon";
import moment from "moment";

/**
 * WordPress dependencies
 */
const { Component } = wp.element;
const { RichText } = wp.blockEditor;
const { Dashicon } = wp.components;
const { dateI18n } = wp.date;

export default class Save extends Component {
  constructor() {
    super(...arguments);
  }

  render() {
    const {
      block_id,
      timelineItems,
      timelinAlignment,
      displayPostDate,
      icon,
      t_date,
      timelineItem,
      dateFormat,
      headingTag,
      backgroundColor,
      opacity,
      stack,
    } = this.props.attributes;
    var data_copy = [...timelineItems];
    var content_align_class = AlignClass(this.props.attributes, 0); // Get classname for layout alignment
    var day_align_class = DayAlignClass(this.props.attributes, 0); //

    var display_inner_date = false;
    var isCenter = "";
    var stackedDate = "";
    var border_with_color = "13px solid" + backgroundColor;

    let imgopacity = opacity / 100;

    return [
      <div
        className={classnames(
          this.props.className,
          "responsive-timeline__outer-wrap",
          `wp-block-responsive-block-editor-addons-content-timeline-${block_id}`,
          "responsive-block-editor-addons-block-content-timeline",
          `block-${block_id}`
        )}
      >
        <div
          className={classnames(
            "responsive-timeline__content-wrap",
            ...ContentTmClasses(this.props.attributes)
          )}
        >
          <div className="responsive-timeline-wrapper">
            <div className="responsive-timeline__main">
              <div className="responsive-timeline__days">
                {timelineItems.map((post, index) => {
                  if (timelineItem <= index) {
                    return;
                  }

                  isCenter = dateI18n(dateFormat, moment( t_date[index].title, 'DD/MM/YYYY' ).format("YYYY-MM-DD"));
                  if (timelinAlignment == "center") {
                    display_inner_date = true;
                    content_align_class = AlignClass(
                      this.props.attributes,
                      index
                    ); // Get classname for layout alignment
                    day_align_class = DayAlignClass(
                      this.props.attributes,
                      index
                    );
                    if (stack != "none") {
                      stackedDate = isCenter;
                    }
                    isCenter = "";
                  }
                  const Tag = headingTag;
                  var icon_class =
                    "responsive-timeline__icon-new out-view-responsive-timeline__icon ";
                  var post_date = t_date[index].title;
                  if ("custom" !== dateFormat) {
                    post_date = dateI18n(dateFormat, moment( t_date[index].title, 'DD/MM/YYYY' ).format("YYYY-MM-DD"));
                    if (post_date === "Invalid date") {
                      post_date = t_date[index].title;
                    }
                  } else {
                    post_date = t_date[index].title;
                    isCenter = post_date;
                  }
                  return (
                    <article
                      className="responsive-timeline__field responsive-timeline__field-wrap"
                      key={index}
                    >
                      <div className={classnames(...content_align_class)}>
                        <div className="responsive-timeline__marker out-view-responsive-timeline__icon">
                          <span>
                            {" "}
                            <div className="responsive-block-editor-addons-ifb-icon-wrap">
                              <span className="responsive-block-editor-addons-ifb-icon">
                                {renderSVG(icon)}
                              </span>
                            </div>{" "}
                          </span>{" "}
                        </div>

                        <div className={classnames(...day_align_class)}>
                          <div className="responsive-events-new">
                            <div className="responsive-timeline__events-inner-new">
                              <div className="responsive-timeline__date-hide responsive-timeline__date-inner">
                                {displayPostDate && t_date[index].title && (
                                  <div
                                    className={
                                      "responsive-timeline__inner-date-new"
                                    }
                                  >
                                    <span
                                      className={`responsive-timeline__inner-date-new--${stack}`}
                                    >
                                      {stackedDate}
                                    </span>
                                    {isCenter}
                                  </div>
                                )}
                              </div>

                              <div className="responsive-timeline-content">
                                <div className="responsive-timeline__heading-text">
                                  <RichText.Content
                                    tagName={headingTag}
                                    value={post.time_heading}
                                    className="responsive-timeline__heading"
                                  />
                                </div>

                                <RichText.Content
                                  tagName="p"
                                  value={post.time_desc}
                                  className="responsive-timeline-desc-content"
                                />

                                <div className="responsive-timeline__arrow"></div>
                              </div>
                            </div>
                          </div>
                        </div>

                        {display_inner_date && (
                          <div className="responsive-timeline__date-new">
                            {displayPostDate && t_date[index].title && (
                              <div className={"responsive-timeline__date-new"}>
                                {post_date}
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    </article>
                  );
                })}
              </div>
              <div className="responsive-timeline__line">
                <div className="responsive-timeline__line__inner"></div>
              </div>
            </div>
          </div>
        </div>
      </div>,
    ];
  }
}
