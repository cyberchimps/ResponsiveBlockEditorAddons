/**
 * Box-Shadow reusable component.
 *
 */
import GradientHoverBackgroundControl from './GradientHoverBackgroundSettings';
import RbeaColorControl from '../../../utils/components/rbea-color-control';
import RbeaRangeControl from '../../../utils/components/rbea-range-control';
import RbeaAngleRangeControl from '../../../utils/components/rbea-angle-range-control';

const { __ } = wp.i18n;

const { ColorPalette } = wp.blockEditor;

const { SelectControl, RangeControl, TabPanel } = wp.components;

// Extend component
const { Component, Fragment } = wp.element;

class GradientBackgroundControl extends Component {
  constructor() {
    super(...arguments);
  }

  render() {
      const {
          attributes: {
              backgroundColor1,
              backgroundColor2,
              colorLocation1,
              colorLocation2,
              gradientDirection,
              opacity,
          },
          setAttributes,
      } = this.props;

    var gradientNormalOptions = (
    <Fragment>
        {this.props.showColorOne ===false? false: true && (
        <Fragment>
          
            <RbeaColorControl
                label = {__("Color 1", "responsive-block-editor-addons")}
                colorValue={backgroundColor1}
                onChange={(colorValue) =>
                    setAttributes({ backgroundColor1: colorValue })
                }
                resetColor={() => setAttributes({ backgroundColor1: "" })}
            />

        </Fragment> )}
            <RbeaColorControl
                label = {__("Color 2", "responsive-block-editor-addons")}
                colorValue={backgroundColor2}
                onChange={(colorValue) =>
                    setAttributes({ backgroundColor2: colorValue })
                }
                resetColor={() => setAttributes({ backgroundColor2: "" })}
            />
            <RbeaRangeControl
            label={__("Color Location 1", "responsive-block-editor-addons")}
            value={colorLocation1}
            min={0}
            max={100}
            onChange={(value) =>
            setAttributes({
                colorLocation1: value !== undefined ? value : 0,
            })
        }
            />
            <RbeaRangeControl
            label={__("Color Location 2", "responsive-block-editor-addons")}
            value={colorLocation2}
            min={0}
            max={100}
            onChange={(value) =>
            setAttributes({
                colorLocation2: value !== undefined ? value : 100,
            })
        }
            />
            <RbeaAngleRangeControl
            label={__(
                "Angle",
                "responsive-block-editor-addons"
        )}
            value={gradientDirection}
            min={0}
            max={360}
            onChange={(value) =>
            setAttributes({
                gradientDirection: value !== undefined ? value : 90,
            })
        }
        />
        {((backgroundColor1 && backgroundColor1 != '') || (backgroundColor2 && backgroundColor2 != '')) && (
          <RbeaRangeControl
          label={__("Opacity", "responsive-block-editor-addons")}
          value={opacity}
          onChange={(value) =>
            setAttributes({ opacity: value !== undefined ? value : 20 })
          }
          min={0}
          max={100}
        />
        )}
    </Fragment>
    )

    var advancedControls;
      advancedControls = (
          <Fragment>
              <TabPanel
              className="responsive-block-editor-addons-inspect-tabs 
              responsive-block-editor-addons-inspect-tabs-col-2  
              responsive-block-editor-addons-color-inspect-tabs"
                activeClass="active-tab"
                initialTabName="normal" // Set the default active tab here
                tabs={[
                    {
                        name: "empty-1",
                        title: __("", "responsive-block-editor-addons"),
                        className: "responsive-block-editor-addons-empty-tab",
                    },
                    {
                        name: "normal",
                        title: __("Normal", "responsive-block-editor-addons"),
                        className: "responsive-block-editor-addons-normal-tab",
                    },
                    {
                        name: "empty-2",
                        title: __("", "responsive-block-editor-addons"),
                        className: "responsive-block-editor-addons-empty-tab",
                    },
                    {
                        name: "hover",
                        title: __("Hover", "responsive-block-editor-addons"),
                        className: "responsive-block-editor-addons-hover-tab",
                    },
                    {
                        name: "empty-3",
                        title: __("", "responsive-block-editor-addons"),
                        className: "responsive-block-editor-addons-empty-tab",
                    },
                ]}
              >
                {(tabName) => {
                    let btn_color_tab;
                    if ("normal" === tabName.name) {
                    btn_color_tab =
                        gradientNormalOptions
                    } else if ("hover" === tabName.name) {
                    btn_color_tab = (
                        <Fragment>
                        <GradientHoverBackgroundControl
                            {...this.props}
                        />
                        </Fragment>
                    );
                    } else {
                      btn_color_tab = this.props.values.emptyColorControl;
                    }
                    return <div>{btn_color_tab}</div>;
                }}
                </TabPanel>
            </Fragment>
      );

    return (
      <div className="responsive-block-editor-addons-gradient-background-settings">
        { this.props.showHoverGradient ? advancedControls : gradientNormalOptions}
      </div>
    );
  }
}

export default GradientBackgroundControl;
