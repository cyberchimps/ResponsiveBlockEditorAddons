import { __ } from '@wordpress/i18n';
const { RadioControl } = wp.components;
const { Fragment } = wp.element;
import separatorStyleIcon from './separator-style-icons';

const RbeaSeparatorStyleTabControl = ({ selected, onChange }) => {

    let handleOnReset = () => {
        onChange("none");
    }

    let options=[
        { value: "solid", label: __(separatorStyleIcon.solid, "responsive-block-editor-addons") },
        { value: "dotted", label: __(separatorStyleIcon.dotted, "responsive-block-editor-addons") },
        { value: "dashed", label: __(separatorStyleIcon.dashed, "responsive-block-editor-addons") },
        { value: "double", label: __(separatorStyleIcon.double, "responsive-block-editor-addons") },
        { value: "groove", label: __(separatorStyleIcon.groove, "responsive-block-editor-addons") },
        { value: "inset", label: __(separatorStyleIcon.inset, "responsive-block-editor-addons") },
        { value: "outset", label: __(separatorStyleIcon.outset, "responsive-block-editor-addons") },
        { value: "ridge", label: __(separatorStyleIcon.ridge, "responsive-block-editor-addons") },
    ];

    const fixedOptions = options.map((option) => {
        return {
        label: (
            <div className="rbea-separator-style-select-control-label-wrapper">
                <p class = "rbea-separator-style-select-control-label">{option.label}</p>
            </div>
        ),
        value: option.value,
        };
    });

  return (
    <Fragment>
        <div className = "rbea-separator-style-control">
        <div className="rbea-control__header">
            <div className="uag-responsive-label-wrap">
                <span className="uag-control-label"> {__("Style", "responsive-block-editor-addons")}</span>
            </div>
            <div className="rbea-control__actions">
                <div tabIndex="0">
                    <button type="button" className="components-button rbea-reset is-secondary is-small" disabled="" onClick={handleOnReset}>
                        <span className="dashicon dashicons dashicons-image-rotate"></span>
                    </button>
                </div>
            </div>
        </div>
        <RadioControl 
            className = "rbea-separator-style-selector"
            selected={selected}
            options = {fixedOptions}
            onChange={onChange}
        />
    </div>
   </Fragment>
  );
};

export default RbeaSeparatorStyleTabControl;
