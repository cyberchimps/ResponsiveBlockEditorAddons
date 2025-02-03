/**
 * Internal dependencies
 */
import icons from "./icons";
import RbeaRangeControl from "../rbea-range-control";

/**
 * WordPress dependencies
 */
import { __, sprintf } from "@wordpress/i18n";
import { Component, Fragment } from "@wordpress/element";
import { RangeControl, TabPanel, Dashicon } from "@wordpress/components";

class ResponsiveTabsControl extends Component {
  constructor() {
    super(...arguments);
    this.setGutterTo = this.setGutterTo.bind(this);
    this.setGutterMobileTo = this.setGutterMobileTo.bind(this);
    this.setGutterTabletTo = this.setGutterTabletTo.bind(this);
  }

  setGutterTo(value) {
    this.props.setAttributes({ gutter: value });
  }

  setGutterMobileTo(value) {
    this.props.setAttributes({ gutterMobile: value });
  }

  setGutterTabletTo(value) {
    this.props.setAttributes({ gutterTablet: value });
  }



  render() {
    const {
      attributes,
      label = __("Gutter", "responsive-block-editor-addons"),
      max = 50,
      min = 0,
      onChange = this.setGutterTo,
      onChangeMobile = this.setGutterMobileTo,
      onChangeTablet = this.setGutterTabletTo,
      step = 5,
    } = this.props;

    return (
      <Fragment>
        <TabPanel
          className=" responsive-size-type-field-tabs  responsive-size-type-field__common-tabs  responsive-inline-margin"
          activeClass="active-tab"
          initialTabName="desk"
          tabs={[
            {
              name: "desk",
              title: <Dashicon icon="desktop" />,
              className:
                " responsive-desktop-tab  responsive-responsive-tabs",
            },
            {
              name: "tablet",
              title: <Dashicon icon="tablet" />,
              className:
                " responsive-desktop-tab  responsive-responsive-tabs",
            },
            {
              name: "mobile",
              title: <Dashicon icon="smartphone" />,
              className:
                " responsive-desktop-tab  responsive-responsive-tabs",
            },
          ]}
        >
          {(tab) => {
            if ("mobile" === tab.name) {
              return (
                <RbeaRangeControl
                  label={sprintf(
                    /* translators: %s: values associated with CSS syntax, 'Width', 'Gutter', 'Height in pixels', 'Width' */
                    __("Mobile %s", "responsive-block-editor-addons"),
                    label
                  )}
                  value={attributes.gutterMobile}
                  onChange={(valueMobile) => onChangeMobile(valueMobile)}
                  min={min}
                  max={max}
                  step={step}
                />
              );
            } else if ("tablet" === tab.name) {
              return (
                <RbeaRangeControl
                  label={sprintf(
                    /* translators: %s: values associated with CSS syntax, 'Width', 'Gutter', 'Height in pixels', 'Width' */
                    __("Tablet %s", "responsive-block-editor-addons"),
                    label
                  )}
                  value={attributes.gutterTablet}
                  onChange={(valueTablet) => onChangeTablet(valueTablet)}
                  min={min}
                  max={max}
                  step={step}
                />
              );
            } else {
              return (
                <RbeaRangeControl
                  label={label}
                  value={attributes.gutter}
                  onChange={(value) => onChange(value)}
                  min={min}
                  max={max}
                  step={step}
                />
              );
            }
          }}
        </TabPanel>
      </Fragment>
    );
  }
}

export default ResponsiveTabsControl;
