/**
 * Inspector Controls
 */

// Setup the block
const { __ } = wp.i18n;
const { Component, Fragment } = wp.element;
import fontOptions from "../../../utils/googlefonts";
import { loadGoogleFont } from "../../../utils/font";
import ResponsiveSpacingControl from "../../../settings-components/ResponsiveSpacingSettings";
import TypographyHelperControl from "../../../settings-components/TypographySettings";

import InspectorTab from "../../../components/InspectorTab"
import InspectorTabs from "../../../components/InspectorTabs"

// Import block components
const {
  InspectorControls,
  PanelColorSettings,
  ColorPalette,
  AlignmentToolbar,
} = wp.blockEditor;

// Import Inspector components
const {
  PanelBody,
  RangeControl,
  SelectControl,
  ButtonGroup,
  Button,
  ToggleControl,
  TabPanel,
  Dashicon,
  BaseControl,
  TextControl
} = wp.components;

/**
 * Create an Inspector Controls wrapper Component
 */
export default class Inspector extends Component {
  constructor(props) {
    super(...arguments);
  }

  render() {
    // Font Weight Options
    const fontWeightOptions = [
      {
        value: "100",
        label: __("100", "responsive-block-editor-addons"),
      },
      {
        value: "200",
        label: __("200", "responsive-block-editor-addons"),
      },
      {
        value: "300",
        label: __("300", "responsive-block-editor-addons"),
      },
      {
        value: "400",
        label: __("400", "responsive-block-editor-addons"),
      },
      {
        value: "500",
        label: __("500", "responsive-block-editor-addons"),
      },
      {
        value: "600",
        label: __("600", "responsive-block-editor-addons"),
      },
      {
        value: "700",
        label: __("700", "responsive-block-editor-addons"),
      },
      {
        value: "800",
        label: __("800", "responsive-block-editor-addons"),
      },
      {
        value: "900",
        label: __("900", "responsive-block-editor-addons"),
      },
    ];

    // Text Decoration Options
    const textDecorationOptions = [
      {
        value: "none",
        label: __("Default", "responsive-block-editor-addons"),
      },
      {
        value: "underline",
        label: __("Underline", "responsive-block-editor-addons"),
      },
      {
        value: "overline",
        label: __("Overline", "responsive-block-editor-addons"),
      },
      {
        value: "line-through",
        label: __("Line Through", "responsive-block-editor-addons"),
      },
    ];

    // Setup the attributes
    const {
      attributes: {
        anchor,
      },
      setAttributes,
    } = this.props;

    return (
      <InspectorControls key="inspector">
        <InspectorTabs hasStyle={false}>
          <InspectorTab key={'content'}>
            <PanelBody>
              <TextControl
                label={__("HTML Anchor", "responsive-block-editor-addons")}
                type="text"
                value={anchor}
                onChange={(value) => {
                  setAttributes({anchor: value})
                }}
              />
            </PanelBody>
          </InspectorTab>
          <InspectorTab key={'advance'}>
          </InspectorTab>
        </InspectorTabs>
      </InspectorControls>
    );
  }
}
