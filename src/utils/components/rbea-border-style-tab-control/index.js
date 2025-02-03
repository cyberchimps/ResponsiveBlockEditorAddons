import { __ } from '@wordpress/i18n';
const { RadioControl } = wp.components;
const { Fragment } = wp.element;

const RbeaBorderStyleTabControl = ({ selected, onChange }) => {

    let handleOnReset = () => {
        onChange("none");
    }

    let options=[
        { value: "solid", label: __("Solid", "responsive-block-editor-addons") },
        { value: "dotted", label: __("Dotted", "responsive-block-editor-addons") },
        { value: "dashed", label: __("Dashed", "responsive-block-editor-addons") },
        { value: "double", label: __("Double", "responsive-block-editor-addons") },
        { value: "groove", label: __("Groove", "responsive-block-editor-addons") },
        { value: "inset", label: __("Inset", "responsive-block-editor-addons") },
        { value: "outset", label: __("Outset", "responsive-block-editor-addons") },
        { value: "ridge", label: __("Ridge", "responsive-block-editor-addons") },
    ];

    const fixedOptions = options.map((option) => {
        return {
        label: (
            <div className="rbea-border-style-select-control-label-wrapper">
                <p class = "rbea-border-style-select-control-label">{option.label}</p>
            </div>
        ),
        value: option.value,
        };
    });

  return (
    <Fragment>
        <div className = "rbea-border-syle-control">
            <div className="rbea-control__header">
                <div className="uag-responsive-label-wrap">
                    <span className="uag-control-label"> {__("Border Style", "responsive-block-editor-addons")}</span>
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
                className = "rbea-border-style-selector"
                selected={selected}
                options = {fixedOptions}
                onChange={onChange}
            />
        </div>
   </Fragment>
  );
};

export default RbeaBorderStyleTabControl;
