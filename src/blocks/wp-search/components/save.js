/**
 * Internal dependencies
 */
 import classnames from "classnames";
 import Style from "style-it";
 import renderSVG from "../../../renderIcon";
 
 /**
  * WordPress dependencies
  */
 const { Component, Fragment } = wp.element;
 const { RichText } = wp.blockEditor;
 
 export default class Save extends Component {
   constructor() {
     super(...arguments);
   }
 
   render() {
     const {
       block_id,
       layout,
       placeholder,
       buttonType,
       buttonText,
     } = this.props.attributes;

     return [
       <div
         className={classnames(
          this.props.className,
           "responsive-block-editor-addons-block-wp-search",
           `block-${block_id}`
         )}
       >
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
                  <RichText.Content
                    tagName="span"
                    className="responsive-block-editor-addons-search-button-text"
                    value={buttonText}
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
 