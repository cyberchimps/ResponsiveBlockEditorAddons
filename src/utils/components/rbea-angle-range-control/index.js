import { __ } from '@wordpress/i18n';
import { RangeControl } from '@wordpress/components';
import { useState } from '@wordpress/element';
import { Icon, rotateLeft } from '@wordpress/icons';
import RbeaRangeControl from '../rbea-range-control';

const RbeaAngleRangeControl = ( props ) => {
    const { value, onChange, min = 0, max = 100, label = '', initialValue = 0 ,allowReset = true, resetFallbackValue = 0 } = props;

    const [currentValue, setCurrentValue] = useState(value !== undefined ? value : initialValue);

    const handleOnReset = () => {
        setCurrentValue(resetFallbackValue);
        onChange(resetFallbackValue);
    };


    return (
        <div className="rbea-angle-range-control">
             <div className="rbea-control__header">
                <div className="uag-responsive-label-wrap">
                    <span className="uag-control-label">{__(`${label}`, 'responsive-block-editor-addons')}</span>
                </div>
                {allowReset &&
                    <div className="rbea-control__actions">
                        <div tabIndex="0">
                            <button type="button" className="components-button rbea-reset is-secondary is-small" disabled="" onClick={handleOnReset}>
                                <span className="dashicon dashicons dashicons-image-rotate"></span>
                            </button>
                        </div>
                    </div>
                }
            </div>
            <div className="rbea-angle-range-control__inputs">
                <RangeControl
                    value={ currentValue }
                    onChange={( newValue ) => {
                        setCurrentValue(newValue);
                        onChange(newValue);
                    }}
                    min={min}
                    max={max}
                />
                <div className = "rbea-angle-icon-svg">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ transform: `rotate(-${currentValue}deg)` }}>
                    <line x1="31.0586" y1="15.8086" x2="15.9998" y2="15.8086" stroke="#666666" stroke-width="1.5"/>
                    <circle cx="16" cy="16" r="15.5" stroke="#DDDDDD"/>
                </svg>
                </div>
            </div>
        </div>
    );
};

export default RbeaAngleRangeControl;