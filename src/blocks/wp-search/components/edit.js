/**
 * Internal dependencies
 */
 import classnames from "classnames";
 import Inspector from "./inspector";
 import { loadGoogleFont } from "../../../utils/font";
 import EditorStyles from "./editor-styles";
 import renderSVG from "../../../renderIcon";

 /**
  * WordPress dependencies
  */
 const { __ } = wp.i18n;
 const { Component, Fragment } = wp.element;
 const { RichText, AlignmentToolbar, BlockControls } = wp.blockEditor;
 export default class Edit extends Component {
   constructor() {
     super(...arguments);
     this.formPreventDefault = this.formPreventDefault.bind( this )
   }

   formPreventDefault( e ) {
    e.preventDefault();
}

   componentDidUpdate(prevProps, prevState) {
     var element = document.getElementById(
       "responsive-block-editor-addons-wp-search-style-" +
         this.props.clientId
     );
 
     if (null !== element && undefined !== element) {
       element.innerHTML = EditorStyles(this.props);
     }
   }
 
   componentDidMount() {
     // Assigning block_id in the attribute.
     this.props.setAttributes({ block_id: this.props.clientId });
 
     this.props.setAttributes({ classMigrate: true });
 
     // Pushing Style tag for this block css.
     const $style = document.createElement("style");
     $style.setAttribute(
       "id",
       "responsive-block-editor-addons-wp-search-style-" +
         this.props.clientId
     );
     document.head.appendChild($style);
   }
   render() {
     // Setup the attributes
     const {
       attributes: {
         block_id,
        //General
        layout,
        placeholder,
        //Button
        buttonType,
        buttonText,
        //Typography
        inputFontFamily,
       },
       setAttributes,
       mergeBlocks,
       insertBlocksAfter,
       onReplace,
     } = this.props;
     return [
      <style id={`responsive-block-editor-addons-wp-search-style-${this.props.clientId}-inner`}>{EditorStyles(this.props)}</style>,
       <BlockControls key="controls">
       </BlockControls>,
       // Show the block controls on focus
       <Inspector key="inspector" {...{ setAttributes, ...this.props }} />,
 
       // Show the block markup in the editor
       <div key={`block-${block_id}`}
         className={classnames(
          this.props.className,
           "responsive-block-editor-addons-block-wp-search",
           `block-${block_id}`
         )}
       >
          {inputFontFamily && loadGoogleFont(inputFontFamily)}
          {layout === "minimal" && (
            <form className="responsive-block-editor-addons-search-form" onSubmit={this.formPreventDefault} role="search" action={responsive_globals.home_url} method="get">
              <div className="responsive-block-editor-addons-search-form-container">
                <span className="responsive-block-editor-addons-search-icon-wrap">
                  {renderSVG('fa fa-search')}
                </span>
                <input
                  className="responsive-block-editor-addons-search-form__input" type="search" name="s" title="Search"
                  placeholder={placeholder}
                />
              </div>
            </form>
          )}
          {layout === "classic" && (
            <form className="responsive-block-editor-addons-search-form" onSubmit={this.formPreventDefault} role="search" action={responsive_globals.home_url} method="get">
              <div className="responsive-block-editor-addons-search-form-container">
                <input
                  className="responsive-block-editor-addons-search-form__input" type="search" name="s" title="Search"
                  placeholder={placeholder}
                />
                <button
                  className="responsive-block-editor-addons-search-submit"
                  type="submit"
                >
                  {"button" === buttonType && (
                    <span className="responsive-block-editor-addons-search-icon-wrap">
                      {renderSVG('fa fa-search')}
                    </span>
                  )}
                  {"text" === buttonType && (
                    <RichText
                      tagName="span"
                      placeholder={__("Search", "responsive-block-editor-addons")}
                      value={buttonText}
                      onChange={(value) => setAttributes({buttonText: value})}
                      className="responsive-block-editor-addons-search-button-text"
                      multiline={false}
                      allowedFormats={[ 'core/bold', 'core/italic', 'core/strikethrough' ]}
                    />
                  )}
                </button>
              </div>
            </form>
          )}
          
       </div>,
     ];
   }
 }
 