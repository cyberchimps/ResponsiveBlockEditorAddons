/**
 * External dependencies
 */
import map from "lodash/map";
import RbeaTabRadioControl from "../rbea-tab-radio-control";
/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";
import { compose } from "@wordpress/compose";
import { Component } from "@wordpress/element";
import {
  ButtonGroup,
  Button,
  BaseControl,
  PanelRow,
} from "@wordpress/components";
import { withSelect } from "@wordpress/data";

class SizeControl extends Component {
  constructor() {
    super(...arguments);
    this.getSizes = this.getSizes.bind(this);
  }

  componentDidUpdate() {
    const { align, columns } = this.props.attributes;

    // Prevent small and medium column grid sizes without wide or full alignments.
    if (align === undefined) {
      if (columns === "med" || columns === "sml") {
        this.props.setAttributes({
          gridSize: "xlrg",
        });
      }
    }
  }

  getSizes() {
    const { type, wideControlsEnabled } = this.props;
    const { align } = this.props.attributes;

    const defaultSizes = [
      {
        shortName: "None",
        size: "none",
      },
      {
        shortName: "S",
        size: "sml",
      },
      {
        shortName: "M",
        size: "med",
      },
      {
        shortName: "L",
        size: "lrg",
      },
    ];

    let standardSizes = [
      {
        shortName:
          (wideControlsEnabled === true && "wide" === align) || "full" === align
            ? "L"
            : __("Large", "responsive-block-editor-addons"),
        size: "lrg",
      },
      {
        shortName:
          (wideControlsEnabled === true && "wide" === align) || "full" === align
            ? "XL"
            : __("Extra Large", "responsive-block-editor-addons"),
        size: "xlrg",
      },
    ];

    let wideSizes = [
      {
        shortName: "M",
        size: "med",
      },
    ];

    let fullSizes = [
      {
        shortName: "S",
        size: "sml",
      },
    ];

    // If this is a standard size settings, not a complex grid sizer.
    if ("smlx" === type) {
      standardSizes = [
        {
          shortName: "S",
          size: "sml",
        },
        {
          shortName: "M",
          size: "med",
        },
        {
          shortName: "L",
          size: "lrg",
        },
        {
          shortName: "XL",
          size: "xlrg",
        },
      ];

      return standardSizes;
    }

    // If this is a standard size settings, not a complex grid sizer.
    if ("reverse-grid" === type) {
      standardSizes = [
        {
          shortName:
            (wideControlsEnabled === true && "wide" === align) ||
            "full" === align
              ? "S"
              : __("Small", "responsive-block-editor-addons"),
          size: "small",
        },
        {
          shortName:
            (wideControlsEnabled === true && "wide" === align) ||
            "full" === align
              ? "M"
              : __("Medium", "responsive-block-editor-addons"),
          size: "medium",
        },
      ];

      wideSizes = [
        {
          shortName: "L",
          size: "large",
        },
      ];

      fullSizes = [
        {
          shortName: "XL",
          size: "huge",
        },
      ];

      if ("wide" === align) {
        return standardSizes.concat(wideSizes);
      } else if ("full" === align) {
        return standardSizes.concat(wideSizes).concat(fullSizes);
      }
      return standardSizes;
    }

    // If this is a standard size settings, not a complex grid sizer.
    if ("grid" !== type) {
      return defaultSizes;
    }

    if (wideControlsEnabled === true && "wide" === align) {
      return wideSizes.concat(standardSizes);
    } else if (wideControlsEnabled === true && "full" === align) {
      return fullSizes.concat(wideSizes).concat(standardSizes);
    }
    return standardSizes;
  }

  render() {
    const {
      onChange,
      value,
      resetValue = undefined,
      label,
      reset = true,
    } = this.props;

    return (
      <div className="rbea-size-control-container">
        {/* <div className="rbea-control__header"> */}
          {/* <div className="uag-responsive-label-wrap">
              <span className="uag-control-label">{__(`${label}`, 'responsive-block-editor-addons')}</span>
          </div>
          {/* {reset && (
              <div className="rbea-size-control-reset-icon-container">
                <div className="rbea-control__actions">
                  <div tabIndex="0">
                      <button type="button" className="components-button rbea-reset is-secondary is-small" disabled="" onClick={() => onChange(resetValue)}>
                          <span className="dashicon dashicons dashicons-image-rotate"></span>
                      </button>
                  </div>
                </div>
              </div>
            )} */}
        {/* </div> */}
        <div className="rbea-size-control-control-container">
          {/* <ButtonGroup aria-label={__("Select size", "responsive-block-editor-addons")}>
            {map(this.getSizes(), ({ size, shortName }) => (
              <Button
                key={size}
                isLarge
                isSecondary
                isPrimary={value === size}
                aria-pressed={value === size}
                onClick={() => onChange(size)}
              >
                {shortName}
              </Button>
            ))}
          </ButtonGroup> */}
          <RbeaTabRadioControl
            value={value} // Pass the selected value from props
            onChange={onChange} // Use the parent's onChange handler
            options={this.getSizes().map(({ size, shortName }) => ({
                value: size,
                label: shortName,
              }))
            }
            label={"Select size"}
            defaultValue={resetValue}
            allowReset={true}
          />
        </div>
      </div>
    );
  }
}

export default compose([
  withSelect((select) => ({
    wideControlsEnabled: select("core/editor").getEditorSettings().alignWide,
  })),
])(SizeControl);
