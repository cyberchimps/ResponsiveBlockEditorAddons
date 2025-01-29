/**
 * Box-Shadow reusable component.
 *
 */
const { __ } = wp.i18n;

const { ColorPalette } = wp.blockEditor;

const { SelectControl, RangeControl, PanelBody } = wp.components;

import RbeaRangeControl from "../../../utils/components/rbea-range-control";
import RbeaBorderStyleTabControl from "../../../utils/components/rbea-border-style-tab-control";
import RbeaBorderRadiusControl from "../../RbeaBorderRadiusControl";

// Extend component
const { Component, Fragment } = wp.element;

class ButtonBorderControl extends Component {
  constructor() {
    super(...arguments);
  }

  render() {
      const {
          attributes: {
              ctaBorderStyle,
              ctaBorderWidth,
              ctaBorderRadius,
              ctaBlockTopRadius,
              ctaBlockRightRadius,
              ctaBlockBottomRadius,
              ctaBlockLeftRadius,
              ctaBlockTopRadiusTablet,
              ctaBlockRightRadiusTablet,
              ctaBlockBottomRadiusTablet,
              ctaBlockLeftRadiusTablet,
              ctaBlockTopRadiusMobile,
              ctaBlockRightRadiusMobile,
              ctaBlockBottomRadiusMobile,
              ctaBlockLeftRadiusMobile,
              ctaBlockIsRadiusControlConnected,

              isCtaButtonBorderRadiusValueUpdated,
          },
          setAttributes,
      } = this.props;

    const ctaButtonBorderRadiusResetValues = {
      borderTop: 0,
      borderRight: 0,
      borderBottom: 0,
      borderLeft: 0,
      borderTabletTop: 0,
      borderTabletRight: 0,
      borderTabletBottom: 0,
      borderTabletLeft: 0,
      borderMobileTop: 0,
      borderMobileRight: 0,
      borderMobileBottom: 0,
      borderMobileLeft: 0,
    }

    // backward compatibility for icon container border radius control

    if (!isCtaButtonBorderRadiusValueUpdated) {
      this.props.setAttributes(
        {
          ctaBlockTopRadius:          ctaBorderRadius !== undefined ? ctaBorderRadius : ctaBlockTopRadius,
          ctaBlockBottomRadius:       ctaBorderRadius !== undefined ? ctaBorderRadius : ctaBlockBottomRadius,
          ctaBlockLeftRadius:         ctaBorderRadius !== undefined ? ctaBorderRadius : ctaBlockLeftRadius,
          ctaBlockRightRadius:        ctaBorderRadius !== undefined ? ctaBorderRadius : ctaBlockRightRadius,
          ctaBlockTopRadiusTablet:    ctaBorderRadius !== undefined ? ctaBorderRadius : ctaBlockTopRadiusTablet,
          ctaBlockBottomRadiusTablet: ctaBorderRadius !== undefined ? ctaBorderRadius : ctaBlockBottomRadiusTablet,
          ctaBlockRightRadiusTablet:  ctaBorderRadius !== undefined ? ctaBorderRadius : ctaBlockRightRadiusTablet,
          ctaBlockLeftRadiusTablet:   ctaBorderRadius !== undefined ? ctaBorderRadius : ctaBlockLeftRadiusTablet,
          ctaBlockTopRadiusMobile:    ctaBorderRadius !== undefined ? ctaBorderRadius : ctaBlockTopRadiusMobile,
          ctaBlockBottomRadiusMobile: ctaBorderRadius !== undefined ? ctaBorderRadius : ctaBlockBottomRadiusMobile,
          ctaBlockLeftRadiusMobile:   ctaBorderRadius !== undefined ? ctaBorderRadius : ctaBlockLeftRadiusMobile,
          ctaBlockRightRadiusMobile:  ctaBorderRadius !== undefined ? ctaBorderRadius : ctaBlockRightRadiusMobile,
        }
      )
      this.props.setAttributes({isCtaButtonBorderRadiusValueUpdated: true});
    }

    var advancedControls;
      advancedControls = (
          <PanelBody
              title={__("Border Settings", "responsive-block-editor-addons")}
              initialOpen={false}
          >
                <RbeaBorderStyleTabControl
                    selected={ctaBorderStyle}
                    onChange={(value) => setAttributes({ ctaBorderStyle: value })}
                />
              {"none" != ctaBorderStyle && (
                  <Fragment>
                      <RbeaRangeControl
                          label={__("Border Width", "responsive-block-editor-addons")}
                          value={ctaBorderWidth}
                          onChange={(value) =>
                              setAttributes({
                                  ctaBorderWidth: value !== undefined ? value : 2,
                              })
                          }
                          min={0}
                          max={50}
                          allowReset
                      />
                        <RbeaBorderRadiusControl
                            attrNameTemplate="ctaBlock%s"
                            label = 'Border Radius'
                            resetValues={ctaButtonBorderRadiusResetValues}
                            {...this.props}
                        />
                  </Fragment>
              )}
          </PanelBody>
      );

    return (
      <div className="responsive-block-editor-addons-block-border-settings">
        {advancedControls}
      </div>
    );
  }
}

export default ButtonBorderControl;
