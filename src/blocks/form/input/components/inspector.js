/**
 * Inspector Controls
 */

// Setup the block
const { __ } = wp.i18n;
const { Component, Fragment } = wp.element;
import InspectorTab from "../../../../components/InspectorTab";
import InspectorTabs from "../../../../components/InspectorTabs";
import { debounce } from 'lodash';
import { SortableContainer, SortableElement, SortableHandle } from 'react-sortable-hoc';
import arrayMove from 'array-move';
import RbeaColorControl from "../../../../utils/components/rbea-color-control";
import RbeaTabRadioControl from "../../../../utils/components/rbea-tab-radio-control";

// Import block components
const { InspectorControls, PanelColorSettings, RichText } = wp.blockEditor

// Import Inspector components
const {
  PanelBody,
  TextControl,
  SelectControl,
  ToggleControl,
  Button,
} = wp.components;

import {
  __experimentalToggleGroupControl as ToggleGroupControl,
  __experimentalToggleGroupControlOption as ToggleGroupControlOption,
  __experimentalText as Text,
  CheckboxControl,
} from '@wordpress/components';

/**
 * Create an Inspector Controls wrapper Component
 */
export default class Inspector extends Component {
  constructor(props) {
    super(...arguments);
  }

  render() {
    // Setup the attributes
    const {
      attributes: {
        formInputFieldType,
        formInputFieldLabel,
        formInputHideLabel,
        formInputWidth,
        formInputPlaceholder,
        formInputHelpText,
        formInputRequired,
        formInputDefaultValue,
        formInputLabelColor,
        formInputInline,
        formCheckBoxOptions,
      },
      setAttributes,
    } = this.props;

    const parentBlocks = wp.data.select('core/block-editor').getBlockParents(this.props.clientId)

    const checkboxOptions = {
      checkboxValue: false,
      placeholder: __( 'Enter Option Label', 'responsive-block-editor-addons' ),
      label: '',
    }
    
    const debouncedSet = debounce( setAttributes, 800 );

    const DragHandle = SortableHandle(() => <div className="responsive-block-editor-addons-checkbox-sort-options__drag"><span className="responsive-block-editor-addons-checkbox-sort-options__dragspan"></span></div>);

    const SortableCheckboxOption = SortableElement(({current, position}) => {
      return (
        <div className="responsive-block-editor-addons-checkbox-sort-option">
          <CheckboxControl className="responsive-block-editor-addons-checkbox-sort-options__checkbox" checked={ current.checkboxValue } onChange={ (value) => {
            let duplicateOptions = [...formCheckBoxOptions];
            duplicateOptions[position].checkboxValue = !current.checkboxValue;
            setAttributes({ formCheckBoxOptions: duplicateOptions });
          }}/>
          <DragHandle />
          <RichText
            placeholder={current.placeholder}
            className="responsive-block-editor-addons-checkbox-sort-options__text"
            value={current.label}
            onChange={(value) => {
              const updatedOptions = [...formCheckBoxOptions];
              updatedOptions[position] = { ...updatedOptions[position], label: value };
              debouncedSet({ formCheckBoxOptions: updatedOptions });
            }}
            tagName="span"
          />

          <Button 
            className="responsive-block-editor-addons-checkbox-sort-options__button" 
            icon="no-alt"
            onClick={() => {
              let updatedOptions = [...formCheckBoxOptions];
              updatedOptions.splice(position, 1);
              setAttributes({ formCheckBoxOptions: updatedOptions });
            }}>
          </Button>
        </div>
      );
    });
    
    const SortableCheckboxList = SortableContainer(() => {
      return (
        <div className="responsive-block-editor-addons-checkbox-sort-options-container">
          {formCheckBoxOptions.map((current, index) => (
            <SortableCheckboxOption
              key={index}
              index={index}
              current={current}
              position={index}
            />
          ))}
        </div>
      );
    });

    const CheckBox = () => {
      return (
        <>
        <Text variant="title.small" as="h3">{__("Options", "responsive-block-editor-addons")}</Text>
        <SortableCheckboxList
          onSortEnd={({ oldIndex, newIndex }) => {
            let updatedOptions = [ ...formCheckBoxOptions ];
            updatedOptions = arrayMove(formCheckBoxOptions, oldIndex, newIndex);
            setAttributes({ formCheckBoxOptions: updatedOptions });
          }}
          axis="y"
          lockAxis="y"
          useDragHandle
        />
        <Button
          onClick={() => setAttributes({ formCheckBoxOptions: [...formCheckBoxOptions, checkboxOptions] })}
          className="responsive-block-editor-addons-checkbox__add-options"
          variant="secondary"
        >
          {__("Add Option", "responsive-block-editor-addons")}
        </Button>
        </>
      )
    }

    return (
      <InspectorControls key="inspector">
        <InspectorTabs>
          <InspectorTab key={"content"}>
            <PanelBody>

              <Button
                variant="secondary"
                style={{marginBottom: '16px'}}
                onClick={ () => wp.data.dispatch( 'core/block-editor' ).selectBlock( parentBlocks[0] ) }
              >
                { __( 'Back to the Form', 'responsive-block-editor-addons' ) }
              </Button>

              <SelectControl
                label={__("Field Type", "responsive-block-editor-addons")}
                value={formInputFieldType}
                options={[
                  { value: "text", label: __("Text", "responsive-block-editor-addons") },
                  { value: "textarea", label: __("Text Area", "responsive-block-editor-addons") },
                  { value: "email", label: __("Email", "responsive-block-editor-addons") },
                  { value: "url", label: __("URL", "responsive-block-editor-addons") },
                  { value: "date", label: __("Date", "responsive-block-editor-addons") },
                  { value: "number", label: __("Number", "responsive-block-editor-addons") },
                  { value: "checkbox", label: __("Checkbox", "responsive-block-editor-addons") },
                ]}
                onChange={(value) => setAttributes({ formInputFieldType: value })}
              />

              <TextControl
                label={__("Field Label","responsive-block-editor-addons")}
                type="text"
                value={formInputFieldLabel}
                onChange={(value) => setAttributes( { formInputFieldLabel: value } ) }
              />

              <ToggleControl
                label={__("Hide Label", "responsive-block-editor-addons")}
                checked={formInputHideLabel}
                onChange={(value) => setAttributes({ formInputHideLabel: !formInputHideLabel }) }
              />

              {formInputFieldType === 'checkbox' && CheckBox()}

              {formInputFieldType !== "checkbox" && (
                  <RbeaTabRadioControl
                    label={__("Width", "responsive-block-editor-addons")}
                    value={formInputWidth}
                    onChange={(value) =>
                      setAttributes({ formInputWidth: value })
                    }
                    options={[
                      { value: 100, label: __("100%", "responsive-block-editor-addons") },
                      { value: 75, label: __("75%", "responsive-block-editor-addons") },
                      { value: 66, label: __("66%", "responsive-block-editor-addons") },
                      { value: 50, label: __("50%", "responsive-block-editor-addons") },
                      { value: 33, label: __("33%", "responsive-block-editor-addons") },
                      { value: 25, label: __("25%", "responsive-block-editor-addons") },
                    ]}
                    allowReset={false}
                    defaultValue={100}
                  />
              )}

              {(formInputFieldType === 'text' || formInputFieldType === 'textarea' || formInputFieldType === 'email' || formInputFieldType === 'url' || formInputFieldType === 'number') &&
              <TextControl
                label={__("Placeholder", "responsive-block-editor-addons")}
                type="text"
                value={formInputPlaceholder}
                onChange={(value) => {
                  setAttributes({formInputPlaceholder: value})
                }}
              />}

              <TextControl
                label={__("Help Text", "responsive-block-editor-addons")}
                type="text"
                value={formInputHelpText}
                onChange={(value) => {
                  setAttributes({formInputHelpText: value})
                }}
              />

              {formInputFieldType === 'checkbox' && 
              <ToggleControl
                label="Inline List"
                checked={ formInputInline }
                onChange={ (value) =>  setAttributes({ formInputInline: !formInputInline })}
              />}

              <ToggleControl
                label="Required"
                help={__("If enabled, the input field must be filled out before submitting the form.", "responsive-block-editor-addons")}
                checked={ formInputRequired }
                onChange={ (value) =>  setAttributes({ formInputRequired: !formInputRequired })}
              />

              {(formInputFieldType === 'text' || formInputFieldType === 'textarea' || formInputFieldType === 'email' || formInputFieldType === 'url' || formInputFieldType === 'number') &&
              <TextControl
                label={__("Default Value", "responsive-block-editor-addons")}
                type="text"
                value={formInputDefaultValue}
                onChange={(value) => setAttributes({formInputDefaultValue: value})}
              />}

            </PanelBody>
          </InspectorTab>
          <InspectorTab key={"style"}>
          <PanelBody
            title={__("Color", "responsive-block-editor-addons")}
            initialOpen={false}
          >
             <RbeaColorControl
									label = {__("Label color", "responsive-block-editor-addons")}
									colorValue={formInputLabelColor}
									onChange={(colorValue) =>
										setAttributes({ formInputLabelColor: colorValue })
									}
									resetColor={() => setAttributes({ formInputLabelColor: "" })}
								/>
          </PanelBody>
          </InspectorTab>
          <InspectorTab key={"advance"}></InspectorTab>
        </InspectorTabs>
      </InspectorControls>
    );
  }
}
