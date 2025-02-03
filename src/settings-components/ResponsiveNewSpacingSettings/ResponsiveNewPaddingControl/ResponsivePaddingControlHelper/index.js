
import { useState, useEffect } from 'react';
import classNames from 'classnames';
import {camelCase} from "lodash";

const { __ } = wp.i18n;

export default function ResponsiveNewPaddingControlHelper (props) {

    let getAttrName = attrName => camelCase( sprintf( props.attrNameTemplate, attrName ) );

    const [device, setDevice] = useState(props.tabName);

    const [paddingValues, setPaddingValues] = useState({
        [`padding${device}Top`]: props.attributes[getAttrName(`TopPadding${device}`)],
        [`padding${device}Right`]: props.attributes[getAttrName(`RightPadding${device}`)],
        [`padding${device}Bottom`]: props.attributes[getAttrName(`BottomPadding${device}`)],
        [`padding${device}Left`]: props.attributes[getAttrName(`LeftPadding${device}`)],
    });
    
    const [isSpaceControlConnected, setSpaceControlConnected] = useState(props.attributes[getAttrName('IsPaddingControlConnected')]);

    useEffect(() => {
        setDevice(props.tabName);
        setPaddingValues({
            [`padding${props.tabName}Top`]: props.attributes[getAttrName(`TopPadding${props.tabName}`)],
            [`padding${props.tabName}Right`]: props.attributes[getAttrName(`RightPadding${props.tabName}`)],
            [`padding${props.tabName}Bottom`]: props.attributes[getAttrName(`BottomPadding${props.tabName}`)],
            [`padding${props.tabName}Left`]: props.attributes[getAttrName(`LeftPadding${props.tabName}`)],
        });
    }, [props.tabName, props.attributes]);

    function spaceControlConnectedHandler() {
        setSpaceControlConnected(!isSpaceControlConnected);
        props.setAttributes({ [getAttrName('IsPaddingControlConnected')]: !isSpaceControlConnected });
        if (!isSpaceControlConnected) {
            let commonValue = paddingValues[`padding${device}Top`];
            if( commonValue === undefined || commonValue === '' ) {
                commonValue  = 0;
            }
            setPaddingValues({
                [`padding${device}Top`]: commonValue,
                [`padding${device}Right`]: commonValue,
                [`padding${device}Bottom`]: commonValue,
                [`padding${device}Left`]: commonValue,
            });
            props.setAttributes({ [getAttrName(`TopPadding${device}`)]: commonValue });
            props.setAttributes({ [getAttrName(`RightPadding${device}`)]: commonValue });
            props.setAttributes({ [getAttrName(`BottomPadding${device}`)]: commonValue });
            props.setAttributes({ [getAttrName(`LeftPadding${device}`)]: commonValue });
        }
    }

    function handlePaddingChange(side, event) {
        const newValue = parseInt(event.target.value, 10);

        if (isSpaceControlConnected) {
            setPaddingValues({
                [`padding${device}Top`]: newValue,
                [`padding${device}Right`]: newValue,
                [`padding${device}Bottom`]: newValue,
                [`padding${device}Left`]: newValue,
            });

            props.setAttributes({ [getAttrName(`TopPadding${device}`)]: newValue });
            props.setAttributes({ [getAttrName(`RightPadding${device}`)]: newValue });
            props.setAttributes({ [getAttrName(`BottomPadding${device}`)]: newValue });
            props.setAttributes({ [getAttrName(`LeftPadding${device}`)]: newValue });
        } else {
            setPaddingValues((prevValues) => ({
                ...prevValues,
                [`padding${device}${side}`]: newValue,
            }));
            props.setAttributes({ [getAttrName(`${side}Padding${device}`)]: newValue });
        }
    }

    function handleOnReset() {
        setPaddingValues({
            [`padding${device}Top`]: props.resetValues[`padding${device}Top`],
            [`padding${device}Right`]: props.resetValues[`padding${device}Right`],
            [`padding${device}Bottom`]: props.resetValues[`padding${device}Bottom`],
            [`padding${device}Left`]: props.resetValues[`padding${device}Left`],
        });
        props.setAttributes( {[getAttrName(`TopPadding${device}`)]: props.resetValues[`padding${device}Top`]});
        props.setAttributes( {[getAttrName(`RightPadding${device}`)]: props.resetValues[`padding${device}Right`]});
        props.setAttributes( {[getAttrName(`BottomPadding${device}`)]: props.resetValues[`padding${device}Bottom`]});
        props.setAttributes( {[getAttrName(`LeftPadding${device}`)]: props.resetValues[`padding${device}Left`]});
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
                        <span className="uag-control-label">{__('Padding', 'responsive-block-editor-addons')}</span>
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
                        value={props.attributes[getAttrName(`TopPadding${device}`)]}
                        onChange={(event) => handlePaddingChange('Top', event)}
                    />
                    <input
                        className="rbea-spacing-control__number"
                        type="number"
                        min="-50"
                        value={props.attributes[getAttrName(`RightPadding${device}`)]}
                        onChange={(event) => handlePaddingChange('Right', event)}
                    />
                    <input
                        className="rbea-spacing-control__number"
                        type="number"
                        min="-50"
                        value={props.attributes[getAttrName(`BottomPadding${device}`)]}
                        onChange={(event) => handlePaddingChange('Bottom', event)}
                    />
                    <input
                        className="rbea-spacing-control__number"
                        type="number"
                        min="-50"
                        value={props.attributes[getAttrName(`LeftPadding${device}`)]}
                        onChange={(event) => handlePaddingChange('Left', event)}
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