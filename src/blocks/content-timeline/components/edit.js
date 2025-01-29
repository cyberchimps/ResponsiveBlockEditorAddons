/**
 * Internal dependencies
 */
import classnames from "classnames";
import Inspector from "./inspector";
import AlignClass from "./align-classes";
import DayAlignClass from "./day-align-classes";
import ContentTmClasses from "./classes";
import React from "react";
import EditorStyles from "./editor-styles";
import moment from "moment";

/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { Component } = wp.element;
const { Dashicon } = wp.components;
const { RichText } = wp.blockEditor;
import renderSVG from "../../../renderIcon";
const { dateI18n, __experimentalGetSettings } = wp.date;
import * as JQuery from "jquery";
import { loadGoogleFont } from "../../../utils/font";
const $ = JQuery.default;

export default class Edit extends Component {
  constructor() {
    super(...arguments);
  }
  componentDidMount() {
    //Store client id.
    this.props.setAttributes({ block_id: this.props.clientId });
    this.props.setAttributes({ classMigrate: true });

    var id = this.props.clientId;
    window.addEventListener("load", this.timelineContent_back(id));
    window.addEventListener("resize", this.timelineContent_back(id));
    var time = this;
    $(".edit-post-layout__content").on( 'scroll', function (event) {
      time.timelineContent_back(id);
    });

    // Pushing Style tag for this block css.
    const $style = document.createElement("style");
    $style.setAttribute(
      "id",
      "responsive-block-editor-addons-content-timeline-style-" +
        this.props.clientId
    );
    document.head.appendChild($style);
  }

  componentDidUpdate(prevProps, prevState) {
    var id = this.props.clientId;
    var element = document.getElementById(
      "responsive-block-editor-addons-content-timeline-style-" +
        this.props.clientId
    );
    if (null !== element && undefined !== element) {
      element.innerHTML = EditorStyles(this.props);
    }
    window.addEventListener("load", this.timelineContent_back(id));
    window.addEventListener("resize", this.timelineContent_back(id));
    var time = this;
    $(".edit-post-layout__content").on( 'scroll', function (event) {
      time.timelineContent_back(id);
    });
  }
  /*  Js for timeline line and inner line filler*/
  timelineContent_back(id) {
    var timeline = $(".responsive-timeline").parents("#block-" + id);
    var tm_item = timeline.find(".responsive-timeline");
    var line_inner = timeline.find(".responsive-timeline__line__inner");
    var line_outer = timeline.find(".responsive-timeline__line");
    var $icon_class = timeline.find(".responsive-timeline__marker");
    if ($icon_class.length > 0) {
      var $card_last = timeline.find(".responsive-timeline__field:last-child");
      var timeline_start_icon = $icon_class.first().position();
      var timeline_end_icon = $icon_class.last().position();
      line_outer.css("top", timeline_start_icon.top);

      var timeline_card_height = $card_last.height();
      var last_item_top = $card_last.offset().top - tm_item.offset().top;
      var $last_item, parent_top;
      var $document = $(document);

      if (tm_item.hasClass("responsive-timeline__arrow-center")) {
        line_outer.css("bottom", timeline_end_icon.top);

        parent_top = last_item_top - timeline_start_icon.top;
        $last_item = parent_top + timeline_end_icon.top;
      } else if (tm_item.hasClass("responsive-timeline__arrow-top")) {
        var top_height = timeline_card_height - timeline_end_icon.top;
        line_outer.css("bottom", top_height);

        $last_item = last_item_top;
      } else if (tm_item.hasClass("responsive-timeline__arrow-bottom")) {
        var bottom_height = timeline_card_height - timeline_end_icon.top;
        line_outer.css("bottom", bottom_height);
        parent_top = last_item_top - timeline_start_icon.top;
        $last_item = parent_top + timeline_end_icon.top;
      }

      var num = 0;
      var elementEnd = $last_item + 20;

      var connectorHeight =
        3 * timeline.find(".responsive-timeline__marker:first").height();
      var viewportHeight =
        document.documentElement.clientHeight + connectorHeight;
      var viewportHeightHalf = viewportHeight / 2 + connectorHeight;

      var elementPos = tm_item.offset().top;

      var new_elementPos = elementPos + timeline_start_icon.top;

      var photoViewportOffsetTop = new_elementPos - $document.scrollTop();

      if (photoViewportOffsetTop < 0) {
        photoViewportOffsetTop = Math.abs(photoViewportOffsetTop);
      } else {
        photoViewportOffsetTop = -Math.abs(photoViewportOffsetTop);
      }

      if (elementPos < viewportHeightHalf) {
        if (
          viewportHeightHalf + Math.abs(photoViewportOffsetTop) <
          elementEnd
        ) {
          line_inner.height(viewportHeightHalf + photoViewportOffsetTop);
        } else {
          if (photoViewportOffsetTop + viewportHeightHalf >= elementEnd) {
            line_inner.height(elementEnd);
          }
        }
      } else {
        if (photoViewportOffsetTop + viewportHeightHalf < elementEnd) {
          if (0 > photoViewportOffsetTop) {
            line_inner.height(
              viewportHeightHalf - Math.abs(photoViewportOffsetTop)
            );
            ++num;
          } else {
            line_inner.height(viewportHeightHalf + photoViewportOffsetTop);
          }
        } else {
          if (photoViewportOffsetTop + viewportHeightHalf >= elementEnd) {
            line_inner.height(elementEnd);
          }
        }
      }

      //For changing icon background color and icon color.
      var timeline_icon_pos, timeline_card_pos;
      var elementPos, elementCardPos;
      var timeline_icon_top, timeline_card_top;
      var timeline_icon = timeline.find(".responsive-timeline__marker"),
        animate_border = timeline.find(".responsive-timeline__field-wrap");

      for (var i = 0; i < timeline_icon.length; i++) {
        timeline_icon_pos = $(timeline_icon[i]).offset().top;
        timeline_card_pos = $(animate_border[i]).offset().top;
        elementPos = timeline.offset().top;
        elementCardPos = timeline.offset().top;

        timeline_icon_top = timeline_icon_pos - $document.scrollTop();
        timeline_card_top = timeline_card_pos - $document.scrollTop();

        if (timeline_card_top < viewportHeightHalf) {
          animate_border[i].classList.remove("out-view");
          animate_border[i].classList.add("in-view");
        } else {
          // Remove classes if element is below than half of viewport.
          animate_border[i].classList.add("out-view");
          animate_border[i].classList.remove("in-view");
        }

        if (timeline_icon_top < viewportHeightHalf) {
          // Add classes if element is above than half of viewport.
          timeline_icon[i].classList.remove(
            "responsive-timeline__out-view-icon"
          );
          timeline_icon[i].classList.add("responsive-timeline__in-view-icon");
        } else {
          // Remove classes if element is below than half of viewport.
          timeline_icon[i].classList.add("responsive-timeline__out-view-icon");
          timeline_icon[i].classList.remove(
            "responsive-timeline__in-view-icon"
          );
        }
      }
    }
  }
  render() {
    // Setup the attributes
    const {
      attributes: {
        block_id,
        timelinAlignment,
        timelineItems,
        dateFormat,
        t_date,
        displayPostDate,
        dateFontFamily,
        headingFontFamily,
        contentFontFamily,
        headingTag,
        backgroundColor,
        opacity,
        icon,
        stack,
      },
      setAttributes,
      mergeBlocks,
      insertBlocksAfter,
    } = this.props;


    var data_copy = [...timelineItems];
    var content_align_class = AlignClass(this.props.attributes, 0); // Get classname for layout alignment
    var day_align_class = DayAlignClass(this.props.attributes, 0); // Get classname for day alignment.
    var display_inner_date = false;
    var isCenter = "";
    var stackedDate = "";
    var border_with_color = "13px solid" + backgroundColor;

    let imgopacity = opacity / 100;

    return [
      <style id={`responsive-block-editor-addons-content-timeline-style-${this.props.clientId}-inner`}>{EditorStyles(this.props)}</style>,
      // Show the block controls on focus
      <Inspector key="inspector" {...{ setAttributes, ...this.props }} />,
      <div key={`${block_id}`}
        className={classnames(
          `wp-block-responsive-content-timeline-${block_id}`,
          "responsive-timeline__outer-wrap",
          "responsive-block-editor-addons-block-content-timeline",
          `block-${block_id}`
        )}
      >
        <div
        key={`timeline-content-wrapper-${block_id}`}
          className={classnames(
            "responsive-timeline__content-wrap",
            ...ContentTmClasses(this.props.attributes)
          )}
        >
          <div key={`timeline-wrapper-${block_id}`} className="responsive-timeline-wrapper">
            <div key={`timeline-main-${block_id}`} className="responsive-timeline__main">
              <div key={`timeline-days-${block_id}`} className="responsive-timeline__days">
                {timelineItems.map((post, index) => {
                  isCenter = dateI18n(dateFormat, moment( t_date[index].title, 'MM/DD/YYYY' ).format("YYYY-MM-DD"));
                  if (timelinAlignment == "center") {
                    display_inner_date = true;
                    content_align_class = AlignClass(
                      this.props.attributes,
                      index
                    );
                    day_align_class = DayAlignClass(
                      this.props.attributes,
                      index
                    );
                    if (stack != "none") {
                      stackedDate = isCenter;
                    }
                    isCenter = "";
                  }

                  var post_date = t_date[index].title;
                  if ("custom" !== dateFormat) {
                    post_date = dateI18n(dateFormat, moment( t_date[index].title, 'MM/DD/YYYY' ).format("YYYY-MM-DD"));
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
                      key={`timeline-item-${index}`}
                    >
                      <div key={`Align-${block_id}`} className={content_align_class}>
                        <div className="responsive-timeline__marker responsive-timeline__out-view-icon">
                          <span>
                            {" "}
                            <div key={`icon-wrap-${block_id}`} className="responsive-block-editor-addons-ifb-icon-wrap">
                              <span className="responsive-block-editor-addons-ifb-icon">
                                {renderSVG(icon)}
                              </span>
                            </div>{" "}
                          </span>
                        </div>

                        <div key={`day-align-${block_id}`} className={day_align_class}>
                          <div key={`events-new-${block_id}`} className="responsive-timeline__events-new">
                            <div key={`inner-new-${block_id}`} className="responsive-timeline__events-inner-new">
                              {dateFontFamily && loadGoogleFont(dateFontFamily)}
                              {headingFontFamily &&
                                loadGoogleFont(headingFontFamily)}
                              {contentFontFamily &&
                                loadGoogleFont(contentFontFamily)}
                              <div key={`timeline-date-${block_id}`} className="responsive-timeline__date-hide responsive-timeline__date-inner">
                                {displayPostDate && t_date[index].title && (
                                  <div key={`post-date-${block_id}`}
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

                              <div key={`responsive-content-${block_id}`} className="responsive-content">
                                <div key={`heading-text-${block_id}`} className="responsive-timeline__heading-text">
                                  <RichText key={`heading-${block_id}`}
                                    tagName={headingTag}
                                    value={post.time_heading}
                                    placeholder={__(
                                      "Write a Heading",
                                      "responsive-block-editor-addons"
                                    )}
                                    className="responsive-timeline__heading"
                                    onChange={(value) => {
                                      var p = {
                                        time_heading: value,
                                        time_desc:
                                          data_copy[index]["time_desc"],
                                      };
                                      data_copy[index] = p;
                                      setAttributes({
                                        timelineItems: data_copy,
                                      });
                                    }}
                                    onMerge={mergeBlocks}
                                    onSplit={
                                      insertBlocksAfter
                                        ? (before, after, ...blocks) => {
                                            setAttributes({ content: before });
                                            insertBlocksAfter([
                                              ...blocks,
                                              createBlock("core/paragraph", {
                                                content: after,
                                              }),
                                            ]);
                                          }
                                        : undefined
                                    }
                                    onRemove={() => onReplace([])}
                                  />
                                </div>

                                <RichText key={`desc-${block_id}`}
                                  tagName="p"
                                  value={post.time_desc}
                                  placeholder={__(
                                    "Write a Description",
                                    "responsive-block-editor-addons"
                                  )}
                                  className="responsive-timeline-desc-content"
                                  onChange={(value) => {
                                    var p = {
                                      time_heading:
                                        data_copy[index]["time_heading"],
                                      time_desc: value,
                                    };
                                    data_copy[index] = p;
                                    setAttributes({ timelineItems: data_copy });
                                  }}
                                  onMerge={mergeBlocks}
                                  onSplit={this.splitBlock}
                                  onRemove={() => onReplace([])}
                                />

                                <div key={`timeline-arrow-${block_id}`} className="responsive-timeline__arrow">
                                  {" "}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        {display_inner_date && (
                          <div key={`timeline-date-new-${block_id}`} className="responsive-timeline__date-new">
                            {displayPostDate && t_date[index].title && (
                              <div key={`timeline-date-newer-${block_id}`} className={"responsive-timeline__date-new"}>
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
              <div key={`timeline-line-${block_id}`} className="responsive-timeline__line">
                <div key={`timeline-inner-${block_id}`} className="responsive-timeline__line__inner"></div>
              </div>
            </div>
          </div>
        </div>
      </div>,
    ];
  }
}
