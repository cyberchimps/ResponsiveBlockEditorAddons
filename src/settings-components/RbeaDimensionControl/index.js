/* This is core component and wrappers will be build over it for different controls like Margin, Padding, Spacing */

import { useState, useEffect } from 'react';
import classNames from 'classnames';
import { camelCase } from "lodash";

const { __ } = wp.i18n;

export default function ResponsiveDimensionControl(props) {

    let getAttrName = attrName => camelCase(sprintf(props.attrNameTemplate, attrName));

    const [device, setDevice] = useState(props.tabName);

    const controlName = props.controlName;

    const controlNameCapitalCase = controlName.charAt(0).toUpperCase() + controlName.slice(1).toLowerCase();

    const [controlValues, setControlValues] = useState({
        [`${controlName}${device}Top`]: props.attributes[getAttrName(`Top${controlNameCapitalCase}${device}`)],
        [`${controlName}${device}Right`]: props.attributes[getAttrName(`Right${controlNameCapitalCase}${device}`)],
        [`${controlName}${device}Bottom`]: props.attributes[getAttrName(`Bottom${controlNameCapitalCase}${device}`)],
        [`${controlName}${device}Left`]: props.attributes[getAttrName(`Left${controlNameCapitalCase}${device}`)],
    });

    const [isSpaceControlConnected, setSpaceControlConnected] = useState(props.attributes[getAttrName(`Is${controlNameCapitalCase}ControlConnected`)]);

    useEffect(() => {
        setDevice(props.tabName);
        setControlValues({
            [`${controlName}${props.tabName}Top`]: props.attributes[getAttrName(`Top${controlNameCapitalCase}${props.tabName}`)],
            [`${controlName}${props.tabName}Right`]: props.attributes[getAttrName(`Right${controlNameCapitalCase}${props.tabName}`)],
            [`${controlName}${props.tabName}Bottom`]: props.attributes[getAttrName(`Bottom${controlNameCapitalCase}${props.tabName}`)],
            [`${controlName}${props.tabName}Left`]: props.attributes[getAttrName(`Left${controlNameCapitalCase}${props.tabName}`)],
        });
    }, [props.tabName, props.attributes]); // think on this later

    function spaceControlConnectedHandler() {
        setSpaceControlConnected(!isSpaceControlConnected);
        props.setAttributes({ [getAttrName(`Is${controlNameCapitalCase}ControlConnected`)]: !isSpaceControlConnected });
        if (!isSpaceControlConnected) {
            let commonValue = controlValues[`${controlName}${device}Top`];
            if (commonValue === undefined || commonValue === '') {
                commonValue = 0;
            }
            setControlValues({
                [`${controlName}${device}Top`]: commonValue,
                [`${controlName}${device}Right`]: commonValue,
                [`${controlName}${device}Bottom`]: commonValue,
                [`${controlName}${device}Left`]: commonValue,
            });
            props.setAttributes({ [getAttrName(`Top${controlNameCapitalCase}${device}`)]: commonValue });
            props.setAttributes({ [getAttrName(`Right${controlNameCapitalCase}${device}`)]: commonValue });
            props.setAttributes({ [getAttrName(`Bottom${controlNameCapitalCase}${device}`)]: commonValue });
            props.setAttributes({ [getAttrName(`Left${controlNameCapitalCase}${device}`)]: commonValue });
        }
    }

    function handleControlChange(side, event) {
        const newValue = parseInt(event.target.value, 10);

        if (isSpaceControlConnected) {
            setControlValues({
                [`${controlName}${device}Top`]: newValue,
                [`${controlName}${device}Right`]: newValue,
                [`${controlName}${device}Bottom`]: newValue,
                [`${controlName}${device}Left`]: newValue,
            });

            props.setAttributes({ [getAttrName(`Top${controlNameCapitalCase}${device}`)]: newValue });
            props.setAttributes({ [getAttrName(`Right${controlNameCapitalCase}${device}`)]: newValue });
            props.setAttributes({ [getAttrName(`Bottom${controlNameCapitalCase}${device}`)]: newValue });
            props.setAttributes({ [getAttrName(`Left${controlNameCapitalCase}${device}`)]: newValue });
        } else {
            setControlValues((prevValues) => ({
                ...prevValues,
                [`${controlName}${device}${side}`]: newValue,
            }));
            props.setAttributes({ [getAttrName(`${side}${controlNameCapitalCase}${device}`)]: newValue });
        }
    }

    function handleOnReset() {
        setControlValues({
            [`${controlName}${device}Top`]: props.resetValues?.[`${controlName}${device}Top`] ?? 0,
            [`${controlName}${device}Right`]: props.resetValues?.[`${controlName}${device}Right`] ?? 0,
            [`${controlName}${device}Bottom`]: props.resetValues?.[`${controlName}${device}Bottom`] ?? 0,
            [`${controlName}${device}Left`]: props.resetValues?.[`${controlName}${device}Left`] ?? 0,
        });
    
        props.setAttributes({ [getAttrName(`Top${controlNameCapitalCase}${device}`)]: props.resetValues?.[`${controlName}${device}Top`] ?? 0 });
        props.setAttributes({ [getAttrName(`Right${controlNameCapitalCase}${device}`)]: props.resetValues?.[`${controlName}${device}Right`] ?? 0 });
        props.setAttributes({ [getAttrName(`Bottom${controlNameCapitalCase}${device}`)]: props.resetValues?.[`${controlName}${device}Bottom`] ?? 0 });
        props.setAttributes({ [getAttrName(`Left${controlNameCapitalCase}${device}`)]: props.resetValues?.[`${controlName}${device}Left`] ?? 0 });
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

    let label = props.label ? props.label : controlNameCapitalCase;

    return (
        <div className="rbea-spacing-control">
            <div className="rbea-size-type-field-tabs">
                <div className="rbea-control__header">
                    <div className="uag-responsive-label-wrap">
                        <span className="uag-control-label">{__(`${label}`, 'responsive-block-editor-addons')}</span>
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
                        value={controlValues[`${controlName}${device}Top`]}
                        onChange={(event) => handleControlChange('Top', event)}
                    />
                    <input
                        className="rbea-spacing-control__number"
                        type="number"
                        min="-50"
                        value={controlValues[`${controlName}${device}Right`]}
                        onChange={(event) => handleControlChange('Right', event)}
                    />
                    <input
                        className="rbea-spacing-control__number"
                        type="number"
                        min="-50"
                        value={controlValues[`${controlName}${device}Bottom`]}
                        onChange={(event) => handleControlChange('Bottom', event)}
                    />
                    <input
                        className="rbea-spacing-control__number"
                        type="number"
                        min="-50"
                        value={controlValues[`${controlName}${device}Left`]}
                        onChange={(event) => handleControlChange('Left', event)}
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