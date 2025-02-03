import { camelCase } from "lodash";
import { sprintf } from "@wordpress/i18n";
import RbeaRangeControl from "../../utils/components/rbea-range-control";
import RbeaBorderRadiusControl from "../RbeaBorderRadiusControl";
import RbeaColorControl from "../../utils/components/rbea-color-control";
import RbeaBorderStyleTabControl from "../../utils/components/rbea-border-style-tab-control";

/**
 * Box-Shadow reusable component.
 *
 */
const { __ } = wp.i18n;

const { ColorPalette } = wp.blockEditor;

const { SelectControl, RangeControl , RadioControl} = wp.components;

// Extend component
const { Component, Fragment } = wp.element;


const RbeaBlockBorderHelperControl = props => {
    const getAttrName = attrName => camelCase(sprintf(props.attrNameTemplate, attrName))

    var advancedControls;
    advancedControls = (
        <Fragment>
            <BlockBorderControl
                onChangeBorderStyle={value => props.setAttributes({ [getAttrName('BorderStyle')]: value })}
                onChangeBorderWidth={value => props.setAttributes({ [getAttrName('BorderWidth')]: value })}
                onChangeBorderRadius={value => props.setAttributes({ [getAttrName('BorderRadius')]: value })}
                onChangeBorderColor={value => props.setAttributes({ [getAttrName('BorderColor')]: value })}
                {...props}
            />

        </Fragment>
    );


    return (
        <div className="responsive-block-editor-addons-block-border-settings">
            {advancedControls}
        </div>
    );
}
class BlockBorderControl extends Component {
    constructor() {
        super(...arguments);
    }

    render() {
        var advancedControls;
 
        advancedControls = (
            <Fragment>
                {(
                    <RbeaBorderStyleTabControl
                        selected={this.props.values.style}
                        onChange={this.props.onChangeBorderStyle}
                    />
                )}
                {"none" != this.props.borderStyle && (
                    <Fragment>
                        <RbeaColorControl
                          label = {__("Color", "responsive-block-editor-addons")}
                          colorValue={this.props.values.color}
                          onChange={this.props.onChangeBorderColor}
                          resetColor={() => this.props.onChangeBorderColor("")}
                        />
                    </Fragment>
                )}
                {"none" != this.props.borderStyle && (
                    <RbeaRangeControl
                        label={__("Border Width", "responsive-block-editor-addons")}
                        value={this.props.values.width}
                        onChange={this.props.onChangeBorderWidth}
                        min={0}
                        max={50}
                    />
                )}
                {(
                    <>
                        <RbeaBorderRadiusControl
                        attrNameTemplate={this.props.attrNameTemplate}
                        label="Border Radius"
                        {...this.props}
                        />
                    </>
                    
                )}
            </Fragment>
        );


        return (
            <div className="responsive-block-editor-addons-block-border-settings">
                {advancedControls}
            </div>
        );
    }
}

export default RbeaBlockBorderHelperControl;
