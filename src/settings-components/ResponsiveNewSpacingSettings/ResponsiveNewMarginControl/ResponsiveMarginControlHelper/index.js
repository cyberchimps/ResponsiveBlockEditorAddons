
import { useState, useEffect } from 'react';
import classNames from 'classnames';
import {camelCase} from "lodash";

const { __ } = wp.i18n;

export default function ResponsiveNewMarginControlHelper (props) {

    let getAttrName = attrName => camelCase( sprintf( props.attrNameTemplate, attrName ) );

    const [device, setDevice] = useState(props.tabName);

    const [marginValues, setMarginValues] = useState({
        [`margin${device}Top`]: props.attributes[getAttrName(`TopMargin${device}`)],
        [`margin${device}Right`]: props.attributes[getAttrName(`RightMargin${device}`)],
        [`margin${device}Bottom`]: props.attributes[getAttrName(`BottomMargin${device}`)],
        [`margin${device}Left`]: props.attributes[getAttrName(`LeftMargin${device}`)],
    });
    
    const [isSpaceControlConnected, setSpaceControlConnected] = useState(props.attributes[getAttrName('IsMarginControlConnected')]);

    useEffect(() => {
        setDevice(props.tabName);
        setMarginValues({
            [`margin${props.tabName}Top`]: props.attributes[getAttrName(`TopMargin${props.tabName}`)],
            [`margin${props.tabName}Right`]: props.attributes[getAttrName(`RightMargin${props.tabName}`)],
            [`margin${props.tabName}Bottom`]: props.attributes[getAttrName(`BottomMargin${props.tabName}`)],
            [`margin${props.tabName}Left`]: props.attributes[getAttrName(`LeftMargin${props.tabName}`)],
        });
    }, [props.tabName, props.attributes]);

    function spaceControlConnectedHandler() {
        setSpaceControlConnected(!isSpaceControlConnected);
        props.setAttributes({ [getAttrName('IsMarginControlConnected')]: !isSpaceControlConnected });
        if (!isSpaceControlConnected) {
            let commonValue = marginValues[`margin${device}Top`];
            if( commonValue === undefined || commonValue === '' ) {
                commonValue  = 0;
            }
            setMarginValues({
                [`margin${device}Top`]: commonValue,
                [`margin${device}Right`]: commonValue,
                [`margin${device}Bottom`]: commonValue,
                [`margin${device}Left`]: commonValue,
            });
            props.setAttributes({ [getAttrName(`TopMargin${device}`)]: commonValue });
            props.setAttributes({ [getAttrName(`RightMargin${device}`)]: commonValue });
            props.setAttributes({ [getAttrName(`BottomMargin${device}`)]: commonValue });
            props.setAttributes({ [getAttrName(`LeftMargin${device}`)]: commonValue });
        }
    }

    function handleMarginChange(side, event) {
        const newValue = parseInt(event.target.value, 10);

        if (isSpaceControlConnected) {
            setMarginValues({
                [`margin${device}Top`]: newValue,
                [`margin${device}Right`]: newValue,
                [`margin${device}Bottom`]: newValue,
                [`margin${device}Left`]: newValue,
            });

            props.setAttributes({ [getAttrName(`TopMargin${device}`)]: newValue });
            props.setAttributes({ [getAttrName(`RightMargin${device}`)]: newValue });
            props.setAttributes({ [getAttrName(`BottomMargin${device}`)]: newValue });
            props.setAttributes({ [getAttrName(`LeftMargin${device}`)]: newValue });
        } else {
            setMarginValues((prevValues) => ({
                ...prevValues,
                [`margin${device}${side}`]: newValue,
            }));
            props.setAttributes({ [getAttrName(`${side}Margin${device}`)]: newValue });
        }
    }

    function handleOnReset() {
        setMarginValues({
            [`margin${device}Top`]: props.resetValues[`margin${device}Top`],
            [`margin${device}Right`]: props.resetValues[`margin${device}Right`],
            [`margin${device}Bottom`]: props.resetValues[`margin${device}Bottom`],
            [`margin${device}Left`]: props.resetValues[`margin${device}Left`],
        });
        props.setAttributes( {[getAttrName(`TopMargin${device}`)]: props.resetValues[`margin${device}Top`]});
        props.setAttributes( {[getAttrName(`RightMargin${device}`)]: props.resetValues[`margin${device}Right`]});
        props.setAttributes( {[getAttrName(`BottomMargin${device}`)]: props.resetValues[`margin${device}Bottom`]});
        props.setAttributes( {[getAttrName(`LeftMargin${device}`)]: props.resetValues[`margin${device}Left`]});
    }

    const spacingLinkSpanClasses = classNames(
        'rbea-spacing-control__link',
        {
            'rbea-spacing-control-disconnected': !isSpaceControlConnected,
            'rbea-spacing-control-connected': isSpaceControlConnected,
        },
        'dashicons',
        'dashicons-admin-links',
    );

    return (
        <div className="rbea-spacing-control">
            <div className="rbea-size-type-field-tabs">
                <div className="rbea-control__header">
                    <div className="uag-responsive-label-wrap">
                        <span className="uag-control-label">{__('Margin', 'responsive-block-editor-addons')}</span>
                    </div>
                    <div className="rbea-control__actions">
                        <div tabIndex="0">
                            <button type="button" className="components-button rbea-reset is-secondary is-small" disabled="" onClick={handleOnReset}>
                                <span className="dashicon dashicons dashicons-image-rotate"></span>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="rbea-spacing-control__inputs">
                    <input
                        className="rbea-spacing-control__number"
                        type="number"
                        min="-50"
                        value={marginValues[`margin${device}Top`]}
                        onChange={(event) => handleMarginChange('Top', event)}
                    />
                    <input
                        className="rbea-spacing-control__number"
                        type="number"
                        min="-50"
                        value={marginValues[`margin${device}Right`]}
                        onChange={(event) => handleMarginChange('Right', event)}
                    />
                    <input
                        className="rbea-spacing-control__number"
                        type="number"
                        min="-50"
                        value={marginValues[`margin${device}Bottom`]}
                        onChange={(event) => handleMarginChange('Bottom', event)}
                    />
                    <input
                        className="rbea-spacing-control__number"
                        type="number"
                        min="-50"
                        value={marginValues[`margin${device}Left`]}
                        onChange={(event) => handleMarginChange('Left', event)}
                    />
                    <span className={spacingLinkSpanClasses} onClick={spaceControlConnectedHandler}></span>
                </div>
                <div className="rbea-spacing-control__input-labels">
                    <span className="rbea-spacing-control__number-label">{__('Top', 'resposive-block-editor-addons')}</span>
                    <span className="rbea-spacing-control__number-label">{__('Right', 'resposive-block-editor-addons')}</span>
                    <span className="rbea-spacing-control__number-label">{__('Bottom', 'resposive-block-editor-addons')}</span>
                    <span className="rbea-spacing-control__number-label">{__('Left', 'resposive-block-editor-addons')}</span>
                    <span className="rbea-spacing-control__number-label rbea-spacing-control__link-label"></span>
                </div>
            </div>
        </div>
    );
}