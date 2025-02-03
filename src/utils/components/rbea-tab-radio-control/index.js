import { useState, Fragment } from '@wordpress/element';
import { Dashicon, RadioControl } from '@wordpress/components';

const RbeaTabRadioControl = ({ label, value, onChange, options, help = '', allowReset = false, hasIcon = false, hasDashIcons=false, optionHasBorder = false, defaultValue = ''}) => {
  // Store the currently selected option in state
  if(defaultValue==='')
  {
    defaultValue = options[0].value;
  }
  const [activeOption, setActiveOption] = useState(value);

  // Handle the option change
  const handleChange = (value) => {
    setActiveOption(value); // Update the active option
    onChange(value); // Trigger the onChange handler
  };

  const handleOnReset = () => {
    setActiveOption(defaultValue);
    onChange(defaultValue);
  };

  return (
    <Fragment>
      <div className={hasIcon ? "rbea-tab-radio-control-wrapper-with-icon" : "rbea-tab-radio-control-wrapper"}>
        {allowReset && (
          <div className='rbea-tab-radio-control-header-container'>
            <label>{label}</label>
            <div className='rbea-control__header-controls-container'>
              <div className="rbea-control__actions">
                  <div tabIndex="0">
                      <button type="button" className="components-button rbea-reset is-secondary is-small" disabled="" onClick={handleOnReset}>
                          <span className="dashicon dashicons dashicons-image-rotate"></span>
                      </button>
                  </div>
              </div>
            </div>
          </div>
        )}
        {!allowReset && (
          <label>{label}</label>
        )}
        <div className="rbea-tab-radio-options .components-flex">
          {options.map((option) => (
            <div
              key={option.value}
              className={`rbea-tab-radio-option ${
                activeOption === option.value ? 'is-active' : ''
              } ${option.class ? option.class : ""}`}
              onClick={
                () => handleChange(option.value)
              }
            >
              {/* 
                There are 3 types of labels.
                1. Text Label
                2. Icons - SVGs
                3. Dashicons - Wordpress Dashiconss
               */}
              {option.icon ? <div className={`${optionHasBorder ? 'rbea-tab-radio-option-border': 'rbea-tab-radio-option-icon'}`}>{activeOption !== option.value ? option.icon : option.selectedIcon ? option.selectedIcon : option.icon}</div> 
              : hasDashIcons 
              ? <Dashicon icon={option.dashicon}/> 
              : option.label}
            </div>
          ))}
        </div>
        {help !== '' ? <p className='rbea-tab-radio-options-help-text'>{help}</p> : '' }
      </div>
    </Fragment>
  );
};

export default RbeaTabRadioControl;
