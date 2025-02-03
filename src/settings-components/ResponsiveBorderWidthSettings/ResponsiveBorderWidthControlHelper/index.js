
import { useState, useEffect } from 'react';
import classNames from 'classnames';
import {camelCase} from "lodash";

const { __ } = wp.i18n;

export default function ResponsiveContentWidthControlHelper (props) {

    let getAttrName = attrName => camelCase( sprintf( props.attrNameTemplate, attrName ) );

    const [device, setDevice] = useState(props.tabName);

    const [widthValues, setWidthValues] = useState({
        [`width${device}Top`]: props.attributes[getAttrName(`TopWidth${device}`)],
        [`width${device}Right`]: props.attributes[getAttrName(`RightWidth${device}`)],
        [`width${device}Bottom`]: props.attributes[getAttrName(`BottomWidth${device}`)],
        [`width${device}Left`]: props.attributes[getAttrName(`LeftWidth${device}`)],
    });
    
    const [isSpaceControlConnected, setSpaceControlConnected] = useState(props.attributes[getAttrName('IsWidthControlConnected')]);

    useEffect(() => {
        setDevice(props.tabName);
        setWidthValues({
            [`width${props.tabName}Top`]: props.attributes[getAttrName(`TopWidth${props.tabName}`)],
            [`width${props.tabName}Right`]: props.attributes[getAttrName(`RightWidth${props.tabName}`)],
            [`width${props.tabName}Bottom`]: props.attributes[getAttrName(`BottomWidth${props.tabName}`)],
            [`width${props.tabName}Left`]: props.attributes[getAttrName(`LeftWidth${props.tabName}`)],
        });
    }, [props.tabName, props.attributes]);

    function spaceControlConnectedHandler() {
        setSpaceControlConnected(!isSpaceControlConnected);
        props.setAttributes({ [getAttrName('IsWidthControlConnected')]: !isSpaceControlConnected });
        if (!isSpaceControlConnected) {
            let commonValue = widthValues[`width${device}Top`];
            if( commonValue === undefined || commonValue === '' ) {
                commonValue  = 0;
            }
            setWidthValues({
                [`width${device}Top`]: commonValue,
                [`width${device}Right`]: commonValue,
                [`width${device}Bottom`]: commonValue,
                [`width${device}Left`]: commonValue,
            });
            props.setAttributes({ [getAttrName(`TopWidth${device}`)]: commonValue });
            props.setAttributes({ [getAttrName(`RightWidth${device}`)]: commonValue });
            props.setAttributes({ [getAttrName(`BottomWidth${device}`)]: commonValue });
            props.setAttributes({ [getAttrName(`LeftWidth${device}`)]: commonValue });
        }
    }

    function handleWidthChange(side, event) {
        const newValue = parseInt(event.target.value, 10);

        if (isSpaceControlConnected) {
            setWidthValues({
                [`width${device}Top`]: newValue,
                [`width${device}Right`]: newValue,
                [`width${device}Bottom`]: newValue,
                [`width${device}Left`]: newValue,
            });

            props.setAttributes({ [getAttrName(`TopWidth${device}`)]: newValue });
            props.setAttributes({ [getAttrName(`RightWidth${device}`)]: newValue });
            props.setAttributes({ [getAttrName(`BottomWidth${device}`)]: newValue });
            props.setAttributes({ [getAttrName(`LeftWidth${device}`)]: newValue });
        } else {
            setWidthValues((prevValues) => ({
                ...prevValues,
                [`width${device}${side}`]: newValue,
            }));
            props.setAttributes({ [getAttrName(`${side}Width${device}`)]: newValue });
        }
    }

    function handleOnReset() {
        setWidthValues({
            [`width${device}Top`]: props.resetValues[`width${device}Top`],
            [`width${device}Right`]: props.resetValues[`width${device}Right`],
            [`width${device}Bottom`]: props.resetValues[`width${device}Bottom`],
            [`width${device}Left`]: props.resetValues[`width${device}Left`],
        });
        props.setAttributes( {[getAttrName(`TopWidth${device}`)]: props.resetValues[`width${device}Top`]});
        props.setAttributes( {[getAttrName(`RightWidth${device}`)]: props.resetValues[`width${device}Right`]});
        props.setAttributes( {[getAttrName(`BottomWidth${device}`)]: props.resetValues[`width${device}Bottom`]});
        props.setAttributes( {[getAttrName(`LeftWidth${device}`)]: props.resetValues[`width${device}Left`]});
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
                        <span className="uag-control-label">{__('Border Width', 'responsive-block-editor-addons')}</span>
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
                        value={props.attributes[getAttrName(`TopWidth${device}`)]}
                        onChange={(event) => handleWidthChange('Top', event)}
                    />
                    <input
                        className="rbea-spacing-control__number"
                        type="number"
                        min="-50"
                        value={props.attributes[getAttrName(`RightWidth${device}`)]}
                        onChange={(event) => handleWidthChange('Right', event)}
                    />
                    <input
                        className="rbea-spacing-control__number"
                        type="number"
                        min="-50"
                        value={props.attributes[getAttrName(`BottomWidth${device}`)]}
                        onChange={(event) => handleWidthChange('Bottom', event)}
                    />
                    <input
                        className="rbea-spacing-control__number"
                        type="number"
                        min="-50"
                        value={props.attributes[getAttrName(`LeftWidth${device}`)]}
                        onChange={(event) => handleWidthChange('Left', event)}
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