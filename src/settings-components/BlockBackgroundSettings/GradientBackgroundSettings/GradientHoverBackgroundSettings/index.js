/**
 * Box-Shadow reusable component.
 *
 */
 const { __ } = wp.i18n;

 const { ColorPalette } = wp.blockEditor;
 
 const { SelectControl, RangeControl } = wp.components;

import RbeaRangeControl from "../../../../utils/components/rbea-range-control";
import RbeaAngleRangeControl from "../../../../utils/components/rbea-angle-range-control";
import RbeaColorControl from "../../../../utils/components/rbea-color-control";
 
 // Extend component
 const { Component, Fragment } = wp.element;
 
 class GradientHoverBackgroundControl extends Component {
   constructor() {
     super(...arguments);
   }
 
   render() {
       const {
           attributes: {
               hoverbackgroundColor1,
               hoverbackgroundColor2,
               hovercolorLocation1,
               hovercolorLocation2,
               hovergradientDirection,
               opacity,
           },
           setAttributes,
       } = this.props;
 
     var advancedControls;
       advancedControls = (
           <Fragment>
       <RbeaColorControl
            label = {__("Color 1", "responsive-block-editor-addons")}
            colorValue={hoverbackgroundColor1}
            onChange={(colorValue) => setAttributes({ hoverbackgroundColor1: colorValue })}
            resetColor={() => setAttributes({ hoverbackgroundColor1: "" })}
        />
        <RbeaColorControl
            label = {__("Color 2", "responsive-block-editor-addons")}
            colorValue={hoverbackgroundColor2}
            onChange={(colorValue) => setAttributes({ hoverbackgroundColor2: colorValue })}
            resetColor={() => setAttributes({ hoverbackgroundColor2: "" })}
        />
       <RbeaRangeControl
       label={__("Color Location 1", "responsive-block-editor-addons")}
       value={hovercolorLocation1}
       min={0}
       max={100}
       onChange={(value) =>
       setAttributes({
           hovercolorLocation1: value !== undefined ? value : 0,
       })
   }
       />
       <RbeaRangeControl
       label={__("Color Location 2", "responsive-block-editor-addons")}
       value={hovercolorLocation2}
       min={0}
       max={100}
       onChange={(value) =>
       setAttributes({
           hovercolorLocation2: value !== undefined ? value : 100,
       })
   }
       />
       <RbeaAngleRangeControl
       label={__(
           "Angle",
           "responsive-block-editor-addons"
   )}
       value={hovergradientDirection}
       min={0}
       max={360}
       onChange={(value) =>
       setAttributes({
           hovergradientDirection: value !== undefined ? value : 90,
       })
   }
       />
       {((hoverbackgroundColor1 && hoverbackgroundColor1 != '') || (hoverbackgroundColor2 && hoverbackgroundColor2 != '')) && (
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
       );
 
 
     return (
       <div className="responsive-block-editor-addons-gradient-background-settings">
         {advancedControls}
       </div>
     );
   }
 }
 
 export default GradientHoverBackgroundControl;
 