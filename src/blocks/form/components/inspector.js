/**
 * Inspector Controls
 */

// Setup the block
const { __ } = wp.i18n;
const { Component } = wp.element;
import InspectorTab from "../../../components/InspectorTab";
import InspectorTabs from "../../../components/InspectorTabs";
import { __experimentalText as Text, FontSizePicker, __experimentalBoxControl as BoxControl, __experimentalToggleGroupControl as ToggleGroupControl, __experimentalToggleGroupControlOption as ToggleGroupControlOption, __experimentalToggleGroupControlOptionIcon as ToggleGroupControlOptionIcon } from '@wordpress/components';
import { SortableContainer, SortableElement, SortableHandle } from 'react-sortable-hoc';
import arrayMove from 'array-move';
import { createBlock } from '@wordpress/blocks';
import { tablet, mobile, desktop } from '@wordpress/icons';
import ResponsiveNewPaddingControl from "../../../settings-components/ResponsiveNewSpacingSettings/ResponsiveNewPaddingControl/index";
import ResponsiveNewMarginControl from "../../../settings-components/ResponsiveNewSpacingSettings/ResponsiveNewMarginControl/index";
import RbeaRangeControl from "../../../utils/components/rbea-range-control";
import RbeaColorControl from "../../../utils/components/rbea-color-control";
import RbeaBorderRadiusControl from "../../../settings-components/RbeaBorderRadiusControl";

// Import block components
const { InspectorControls, PanelColorSettings, AlignmentToolbar } = wp.blockEditor

// Import Inspector components
const {
  TextControl,
  TextareaControl,
  PanelBody,
  RangeControl,
  Button,
  TabPanel,
  Dashicon,
  ToggleControl,
} = wp.components;

/**
 * Create an Inspector Controls wrapper Component
 */
export default class Inspector extends Component {
  constructor(props) {
    super(...arguments);
    this.state = { isCloseClicked: false }
  }

  checkLabelEquality(prevFormInnerBlocks, currentFormInnerBlocks) {
    const { setAttributes } = this.props
    const { formInnerBlocks } = this.props.attributes
    for (let i = 0; i < prevFormInnerBlocks.length; i++) {
      const label1 = prevFormInnerBlocks[i]?.attributes.formInputFieldLabel;
      const label2 = currentFormInnerBlocks[i]?.attributes.formInputFieldLabel;
      if (label1 !== label2) {
          setAttributes({ formInnerBlocks:  currentFormInnerBlocks})
      }
    }
  }

  componentDidMount() {
    const { clientId, setAttributes } = this.props
    const { formInnerBlocks } = this.props.attributes
    if (formInnerBlocks.length !== 0) {
      let allFormInnerBlocks = wp.data.select('core/block-editor').getBlock(clientId)?.innerBlocks;
      let filteredInnerBlocks = allFormInnerBlocks?.filter((block) => block.name === 'responsive-block-editor-addons/form-input');
      setAttributes({ formInnerBlocks: filteredInnerBlocks });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { clientId, setAttributes } = this.props
    const { formInnerBlocks } = this.props.attributes
    if (formInnerBlocks.length === 0 ) {
      if ( ! this.state.isCloseClicked ) {
        setTimeout(() => {
            let allFormInnerBlocks = wp.data.select('core/block-editor').getBlock(clientId)?.innerBlocks;
            let filteredInnerBlocks = allFormInnerBlocks?.filter((block) => block.name === 'responsive-block-editor-addons/form-input');
            setAttributes({ formInnerBlocks: filteredInnerBlocks });
          },
          100
        );
      }
    } else {
      if (prevProps.attributes.formInnerBlocks.length !== 0) {
        let allFormInnerBlocks1 = wp.data.select('core/block-editor').getBlock(clientId)?.innerBlocks;
        let filteredInnerBlocks1 = allFormInnerBlocks1?.filter((block) => block.name === 'responsive-block-editor-addons/form-input');
        this.checkLabelEquality(prevProps.attributes.formInnerBlocks, filteredInnerBlocks1)
      }
    }
  }

  render() {

    // Setup the attributes
    const {
      attributes: {
        isFormVariantSelected,
        formInnerBlocks,
        formEmailTo,
        formEmailSubject,
        formSuccessMessage,
        formErrorMessage,
        formLabelSize,
        formInputSize,
        formLabelInputGap,
        formFieldInputGap,
        formInputPaddingToggle,
        inputFieldPadding,
        inputFieldPaddingTablet,
        inputFieldPaddingMobile,
        formButtonLabelColor,
        formButtonLabelBGColor,
        formButtonLabelHoverColor,
        formButtonLabelHoverBGColor,
        formButtonPadding,
        formButtonPaddingTablet,
        formButtonPaddingMobile,
        formButtonPaddingToggle,
        formButtonBorderRadius,
        formButtonTopRadius,
        formButtonRightRadius,
        formButtonBottomRadius,
        formButtonLeftRadius,
        formButtonTopRadiusTablet,
        formButtonRightRadiusTablet,
        formButtonBottomRadiusTablet,
        formButtonLeftRadiusTablet,
        formButtonTopRadiusMobile,
        formButtonRightRadiusMobile,
        formButtonBottomRadiusMobile,
        formButtonLeftRadiusMobile,
        formButtonIsRadiusControlConnected,
        formButtonIsRadiusValueUpdated,
        formButtonAlign,
        formButtonAlignTablet,
        formButtonAlignMobile,
        formLabelColor,
        formInputTextColor,
        formInputBGColor,
        formBorderColor,
        formHelperLabelColor,
        formRequiredLabelColor,
        formSuccessMessageColor,
        formErrorMessageColor,
        formBorderRadius,
        formTopRadius,
        formRightRadius,
        formBottomRadius,
        formLeftRadius,
        formTopRadiusTablet,
        formRightRadiusTablet,
        formBottomRadiusTablet,
        formLeftRadiusTablet,
        formTopRadiusMobile,
        formRightRadiusMobile,
        formBottomRadiusMobile,
        formLeftRadiusMobile,
        formIsRadiusControlConnected,
        formIsRadiusValueUpdated,
        formBorderWidth,
        formHelperTextSize,
        formSuccessErrorMessageSize,
        hideWidget,
        hideWidgetTablet,
        hideWidgetMobile,
        z_index,
        z_indexMobile,
        z_indexTablet,
        formTopPadding,
        formTopPaddingMobile,
        formTopPaddingTablet,
        formBottomPadding,
        formBottomPaddingMobile,
        formBottomPaddingTablet,
        formLeftPadding,
        formLeftPaddingMobile,
        formLeftPaddingTablet,
        formRightPadding,
        formRightPaddingMobile,
        formRightPaddingTablet,
        formTopMargin,
        formTopMarginMobile,
        formTopMarginTablet,
        formBottomMargin,
        formBottomMarginMobile,
        formBottomMarginTablet,
        formLeftMargin,
        formLeftMarginMobile,
        formLeftMarginTablet,
        formRightMargin,
        formRightMarginMobile,
        formRightMarginTablet,
        formIsPaddingControlConnected,
        formIsMarginControlConnected,

        formButtonTopPadding,
        formButtonBottomPadding,
        formButtonLeftPadding,
        formButtonRightPadding,
        formButtonTopPaddingTablet,
        formButtonBottomPaddingTablet,
        formButtonRightPaddingTablet,
        formButtonLeftPaddingTablet,
        formButtonTopPaddingMobile,
        formButtonBottomPaddingMobile,
        formButtonLeftPaddingMobile,
        formButtonRightPaddingMobile,

        inputFieldTopPadding,
        inputFieldBottomPadding,
        inputFieldLeftPadding,
        inputFieldRightPadding,
        inputFieldTopPaddingTablet,
        inputFieldBottomPaddingTablet,
        inputFieldRightPaddingTablet,
        inputFieldLeftPaddingTablet,
        inputFieldTopPaddingMobile,
        inputFieldBottomPaddingMobile,
        inputFieldLeftPaddingMobile,
        inputFieldRightPaddingMobile,
        isInputFieldPaddingMarginValueUpdated,
        isFormButtonPaddingMarginValueUpdated,
      },
      setAttributes,
      clientId
    } = this.props;

    const formPaddingResetValues = {
      paddingTop: 0,
      paddingRight: 0,
      paddingBottom: 0,
      paddingLeft: 0,
      paddingTabletTop: 0,
      paddingTabletRight: 0,
      paddingTabletBottom: 0,
      paddingTabletLeft: 0,
      paddingMobileTop: 0,
      paddingMobileRight: 0,
      paddingMobileBottom: 0,
      paddingMobileLeft: 0,
    }
    const formMarginResetValues = {
      marginTop: 0,
      marginRight: 0,
      marginBottom: 0,
      marginLeft: 0,
      marginTabletTop: 0,
      marginTabletRight: 0,
      marginTabletBottom: 0,
      marginTabletLeft: 0,
      marginMobileTop: 0,
      marginMobileRight: 0,
      marginMobileBottom: 0,
      marginMobileLeft: 0,
    }

    const inputFieldActions = {
      select: ( blockId ) => {
        if ( 0 < formInnerBlocks?.length ) {
          wp.data.dispatch( 'core/block-editor' ).selectBlock( blockId );
        }
      },
      move: ( blockId, position ) => {
        const blockClientId = formInnerBlocks.find( block => block.clientId === blockId )?.clientId;
        if ( blockClientId ) {
          wp.data.dispatch( 'core/block-editor' ).moveBlockToPosition( blockClientId, clientId, clientId, position );
        }
      },
      delete: ( blockId ) => {
        if ( 0 < formInnerBlocks?.length ) {
          wp.data.dispatch( 'core/block-editor' ).removeBlock( blockId, false );
          let filteredInnerBlocks = formInnerBlocks.filter((block) => block.clientId !== blockId )
          setAttributes({ formInnerBlocks: filteredInnerBlocks })
        }
      },
      add: ( blockName ) => {
        const itemBlock = createBlock( blockName );
        wp.data.dispatch('core/block-editor').insertBlocks(itemBlock, ( formInnerBlocks?.length ) || 0, clientId);
        setTimeout(() => {
          const allFormInnerBlocks = wp.data.select('core/block-editor').getBlock(clientId).innerBlocks;
          const filteredInnerBlocks = allFormInnerBlocks.filter((block) => block.name === 'responsive-block-editor-addons/form-input');
          setAttributes({ formInnerBlocks: filteredInnerBlocks });
        }, 100);
      }
    };

    const DragHandle = SortableHandle(() => <div className="responsive-block-editor-addons-checkbox-sort-options__drag"><span className="responsive-block-editor-addons-checkbox-sort-options__dragspan"></span></div>);

    const SortableInputField = SortableElement(({ item, actions }) => {
      return (
        <div className="responsive-block-editor-addons-checkbox-sort-option">
          <DragHandle />
          <div className="responsive-block-editor-addons-checkbox-sort-options__text">{item?.attributes?.formInputFieldLabel}</div>
          <Button
            icon="edit"
            label={__("Edit Field", "responsive-block-editor-addons")}
            showTooltip={true}
            className="responsive-block-editor-addons-checkbox-sort-options__button"
            onClick={() => actions?.select?.(item.clientId)}
          />
          <Button
            icon="no-alt"
            label={__("Remove Field", "responsive-block-editor-addons")}
            showTooltip={true}
            className="responsive-block-editor-addons-checkbox-sort-options__button"
            onClick={() => {actions?.delete?.(item.clientId); this.setState({ isCloseClicked: true })}}
          />
        </div>
      )
    })    

    const InputFieldList = SortableContainer( ({ items }) => {
      return (
        <div>
          { items.map( ( item, index ) => {
            return (
              <SortableInputField
                key={ item.clientId }
                index={ index }
                item={ item }
                actions={inputFieldActions}
              />
            );
          }) }
        </div>
      );
    });

    const defaultFontSizes = [
      {
        name: __( 'Small', 'otter-blocks' ),
        size: '14px',
        slug: 'small'
      },
      {
        name: __( 'Medium', 'otter-blocks' ),
        size: '16px',
        slug: 'medium'
      },
      {
        name: __( 'Large', 'otter-blocks' ),
        size: '18px',
        slug: 'large'
      },
      {
        name: __( 'XL', 'otter-blocks' ),
        size: '20px',
        slug: 'xl'
      }
    ];

    // backward compatibility for form border radius control
    if (!formIsRadiusValueUpdated) {
      this.props.setAttributes(
        {
          formTopRadius:          formBorderRadius !== undefined ? formBorderRadius : formTopRadius,
          formBottomRadius:       formBorderRadius !== undefined ? formBorderRadius : formBottomRadius,
          formLeftRadius:         formBorderRadius !== undefined ? formBorderRadius : formLeftRadius,
          formRightRadius:        formBorderRadius !== undefined ? formBorderRadius : formRightRadius,
          formTopRadiusTablet:    formBorderRadius !== undefined ? formBorderRadius : formTopRadiusTablet,
          formBottomRadiusTablet: formBorderRadius !== undefined ? formBorderRadius : formBottomRadiusTablet,
          formRightRadiusTablet:  formBorderRadius !== undefined ? formBorderRadius : formRightRadiusTablet,
          formLeftRadiusTablet:   formBorderRadius !== undefined ? formBorderRadius : formLeftRadiusTablet,
          formTopRadiusMobile:    formBorderRadius !== undefined ? formBorderRadius : formTopRadiusMobile,
          formBottomRadiusMobile: formBorderRadius !== undefined ? formBorderRadius : formBottomRadiusMobile,
          formLeftRadiusMobile:   formBorderRadius !== undefined ? formBorderRadius : formLeftRadiusMobile,
          formRightRadiusMobile:  formBorderRadius !== undefined ? formBorderRadius : formRightRadiusMobile,
        }
      )
      this.props.setAttributes({formIsRadiusValueUpdated: true});
    }

    // backward compatibility for form button border radius control

    if (!formButtonIsRadiusValueUpdated) {
      this.props.setAttributes(
        {
          formButtonTopRadius:          formButtonBorderRadius !== undefined ? formButtonBorderRadius : formButtonTopRadius,
          formButtonBottomRadius:       formButtonBorderRadius !== undefined ? formButtonBorderRadius : formButtonBottomRadius,
          formButtonLeftRadius:         formButtonBorderRadius !== undefined ? formButtonBorderRadius : formButtonLeftRadius,
          formButtonRightRadius:        formButtonBorderRadius !== undefined ? formButtonBorderRadius : formButtonRightRadius,
          formButtonTopRadiusTablet:    formButtonBorderRadius !== undefined ? formButtonBorderRadius : formButtonTopRadiusTablet,
          formButtonBottomRadiusTablet: formButtonBorderRadius !== undefined ? formButtonBorderRadius : formButtonBottomRadiusTablet,
          formButtonRightRadiusTablet:  formButtonBorderRadius !== undefined ? formButtonBorderRadius : formButtonRightRadiusTablet,
          formButtonLeftRadiusTablet:   formButtonBorderRadius !== undefined ? formButtonBorderRadius : formButtonLeftRadiusTablet,
          formButtonTopRadiusMobile:    formButtonBorderRadius !== undefined ? formButtonBorderRadius : formButtonTopRadiusMobile,
          formButtonBottomRadiusMobile: formButtonBorderRadius !== undefined ? formButtonBorderRadius : formButtonBottomRadiusMobile,
          formButtonLeftRadiusMobile:   formButtonBorderRadius !== undefined ? formButtonBorderRadius : formButtonLeftRadiusMobile,
          formButtonRightRadiusMobile:  formButtonBorderRadius !== undefined ? formButtonBorderRadius : formButtonRightRadiusMobile,
        }
      )
      this.props.setAttributes({formButtonIsRadiusValueUpdated: true});
    }

    const emptyColorControl = (
      <div className="responsive-block-editor-addons-empty-color-control"></div>
    );

    const formButtonPaddingResetValues = {
      paddingTop: 10,
      paddingRight: 20,
      paddingBottom: 10,
      paddingLeft: 20,
      paddingTabletTop: 8,
      paddingTabletBottom: 8,
      paddingTabletRight: 16,
      paddingTabletLeft: 16,
      paddingMobileTop: 6,
      paddingMobileBottom: 6,
      paddingMobileRight: 12,
      paddingMobileLeft: 12,
    }

    // backward compatibility for icon container padding control
    if (!isFormButtonPaddingMarginValueUpdated) {
      this.props.setAttributes(
        {
          formButtonTopPadding:          formButtonPadding.top !== undefined ? formButtonPadding.top : formButtonTopPadding,
          formButtonBottomPadding:       formButtonPadding.bottom !== undefined ? formButtonPadding.bottom : formButtonBottomPadding,
          formButtonLeftPadding:         formButtonPadding.left !== undefined ? formButtonPadding.left : formButtonLeftPadding,
          formButtonRightPadding:        formButtonPadding.right !== undefined ? formButtonPadding.right : formButtonRightPadding,
          formButtonTopPaddingTablet:    formButtonPaddingTablet.top !== undefined ? formButtonPaddingTablet.top : formButtonTopPaddingTablet,
          formButtonBottomPaddingTablet: formButtonPaddingTablet.bottom !== undefined ? formButtonPaddingTablet.bottom : formButtonBottomPaddingTablet,
          formButtonRightPaddingTablet:  formButtonPaddingTablet.right !== undefined ? formButtonPaddingTablet.right : formButtonRightPaddingTablet,
          formButtonLeftPaddingTablet:   formButtonPaddingTablet.left !== undefined ? formButtonPaddingTablet.left : formButtonLeftPaddingTablet,
          formButtonTopPaddingMobile:    formButtonPaddingMobile.top !== undefined ? formButtonPaddingMobile.top : formButtonTopPaddingMobile,
          formButtonBottomPaddingMobile: formButtonPaddingMobile.bottom !== undefined ? formButtonPaddingMobile.bottom : formButtonBottomPaddingMobile,
          formButtonLeftPaddingMobile:   formButtonPaddingMobile.left !== undefined ? formButtonPaddingMobile.left : formButtonLeftPaddingMobile,
          formButtonRightPaddingMobile:  formButtonPaddingMobile.right !== undefined ? formButtonPaddingMobile.right : formButtonRightPaddingMobile,
        }
      )
      this.props.setAttributes({isFormButtonPaddingMarginValueUpdated: true});
    }

    const inputFieldsPaddingResetValues = {
      paddingTop: 8,
      paddingRight: 8,
      paddingBottom: 8,
      paddingLeft: 8,
      paddingTabletTop: 6,
      paddingTabletBottom: 6,
      paddingTabletRight: 6,
      paddingTabletLeft: 6,
      paddingMobileTop: 4,
      paddingMobileBottom: 4,
      paddingMobileRight: 4,
      paddingMobileLeft: 4,
    }

    // backward compatibility for icon container padding control
    if (!isInputFieldPaddingMarginValueUpdated) {
      this.props.setAttributes(
        {
          inputFieldTopPadding:          inputFieldPadding.top !== undefined ? inputFieldPadding.top : inputFieldTopPadding,
          inputFieldBottomPadding:       inputFieldPadding.bottom !== undefined ? inputFieldPadding.bottom : inputFieldBottomPadding,
          inputFieldLeftPadding:         inputFieldPadding.left !== undefined ? inputFieldPadding.left : inputFieldLeftPadding,
          inputFieldRightPadding:        inputFieldPadding.right !== undefined ? inputFieldPadding.right : inputFieldRightPadding,
          inputFieldTopPaddingTablet:    inputFieldPaddingTablet.top !== undefined ? inputFieldPaddingTablet.top : inputFieldTopPaddingTablet,
          inputFieldBottomPaddingTablet: inputFieldPaddingTablet.bottom !== undefined ? inputFieldPaddingTablet.bottom : inputFieldBottomPaddingTablet,
          inputFieldRightPaddingTablet:  inputFieldPaddingTablet.right !== undefined ? inputFieldPaddingTablet.right : inputFieldRightPaddingTablet,
          inputFieldLeftPaddingTablet:   inputFieldPaddingTablet.left !== undefined ? inputFieldPaddingTablet.left : inputFieldLeftPaddingTablet,
          inputFieldTopPaddingMobile:    inputFieldPaddingMobile.top !== undefined ? inputFieldPaddingMobile.top : inputFieldTopPaddingMobile,
          inputFieldBottomPaddingMobile: inputFieldPaddingMobile.bottom !== undefined ? inputFieldPaddingMobile.bottom : inputFieldBottomPaddingMobile,
          inputFieldLeftPaddingMobile:   inputFieldPaddingMobile.left !== undefined ? inputFieldPaddingMobile.left : inputFieldLeftPaddingMobile,
          inputFieldRightPaddingMobile:  inputFieldPaddingMobile.right !== undefined ? inputFieldPaddingMobile.right : inputFieldRightPaddingMobile,
        }
      )
      this.props.setAttributes({isInputFieldPaddingMarginValueUpdated: true});
    }

    return (
      <InspectorControls key="inspector">
        <InspectorTabs>
          <InspectorTab key={"content"}>
          {isFormVariantSelected && <>
            <PanelBody
              title={__("General", "responsive-block-editor-addons")}
              initialOpen={true}
            >
              <Text variant="title.small" as="h3">{__( 'Input Fields', 'responsive-block-editor-addons' )}</Text>
              <Text variant="subtitle">{__( 'Press and hold to use drag and drop to sort the tabs', 'responsive-block-editor-addons' )}</Text>
              {formInnerBlocks.length !== 0 && (
                <>
                  <InputFieldList
										items={ formInnerBlocks }
										onSortEnd={({ oldIndex, newIndex }) => {
                      const movedClientId = formInnerBlocks?.[oldIndex]?.clientId;
                      if (movedClientId) {
                        const updatedBlocks = arrayMove(formInnerBlocks, oldIndex, newIndex);
                        setAttributes({ formInnerBlocks: updatedBlocks });
                        inputFieldActions.move(movedClientId, newIndex);
                      }
                    }}
										useDragHandle
										axis="y"
										lockAxis="y"
									/>
                </>
              )}

                <Button
									variant="secondary"
									className="responsive-block-editor-addons-checkbox__add-options"
									onClick={ () => inputFieldActions?.add?.( 'responsive-block-editor-addons/form-input' ) }
								>
									{ __( 'Add Input Field', 'responsive-block-editor-addons' ) }
								</Button>

            </PanelBody>
            <PanelBody
              title={__("Form Options", "responsive-block-editor-addons")}
              initialOpen={false}
            >

              <TextControl
                label={__("Email To", "responsive-block-editor-addons")}
                type="text"
                help={__("Default is site administrator.", "responsive-block-editor-addons")}
                placeholder={ __( "Default is to admin site", 'responsive-block-editor-addons' ) }
                value={formEmailTo}
                onChange={(value) => {
                  setAttributes({formEmailTo: value})
                }}
              />

              <hr className="responsive-block-editor-addons-editor__separator" />

              <TextControl
                label={__("Email Subject", "responsive-block-editor-addons")}
                type="text"
                help={__("Enter the title of the email.", "responsive-block-editor-addons")}
                placeholder={ __( "A new submission", 'responsive-block-editor-addons' ) }
                value={formEmailSubject}
                onChange={(value) => {
                  setAttributes({formEmailSubject: value})
                }}
              />

            </PanelBody>
            <PanelBody
              title={__("Submit Messages", "responsive-block-editor-addons")}
              initialOpen={false}
            >

              <TextareaControl
								label={ __( "Success Message", "responsive-block-editor-addons" ) }
								placeholder={ __( "Success", "responsive-block-editor-addons" ) }
								value={ formSuccessMessage }
								onChange={ (value) => setAttributes({ formSuccessMessage: value }) }
								help={ __( "Show this message after the form was successfully submitted.", "responsive-block-editor-addons" ) }
							/>

              <TextareaControl
								label={ __( "Error Message", "responsive-block-editor-addons" ) }
								placeholder={ __( "Error. Please try again", "responsive-block-editor-addons" ) }
								value={ formErrorMessage }
								onChange={ (value) => setAttributes({ formErrorMessage: value }) }
								help={ __( "This message will be displayed when there is a problem with the server.", "responsive-block-editor-addons" ) }
							/>

            </PanelBody>
            </>}
          </InspectorTab>
          <InspectorTab key={"style"}>
          {isFormVariantSelected && <>
          
            <PanelBody
              title={__("Labels", "responsive-block-editor-addons")}
              initialOpen={false}
            >
              
              <div className="responsive-block-editor-addons-form-controls-spacing">
                <FontSizePicker
                  fontSizes={defaultFontSizes}
                  value={ formLabelSize }
                  onChange={ ( value ) => {setAttributes({ formLabelSize: value })} }
                  units={[{ value: 'px', label: 'px', default: 16 }]}
                  __nextHasNoMarginBottom
                />
              </div>

              <RbeaRangeControl
                label={ __( "Spacing", "responsive-block-editor-addons" ) }
                value={formLabelInputGap}
                onChange={ value => setAttributes({ formLabelInputGap: value }) }
                allowReset
                step={ 0.1 }
                min={ 0 }
                max={ 50 }
                resetFallbackValue={10}
                initialPosition={ 10 }
              />

            </PanelBody>

            <PanelBody
              title={__("Input Fields", "responsive-block-editor-addons")}
              initialOpen={false}
            >

              <div className="responsive-block-editor-addons-form-controls-spacing">
                <FontSizePicker
                  fontSizes={defaultFontSizes}
                  value={ formInputSize }
                  onChange={ ( value ) => {setAttributes({ formInputSize: value })} }
                  units={[{ value: 'px', label: 'px', default: 16 }]}
                  __nextHasNoMarginBottom
                />
              </div>

              <RbeaRangeControl
                label={ __( "Field Spacing", "responsive-block-editor-addons" ) }
                value={formFieldInputGap}
                onChange={ value => setAttributes({ formFieldInputGap: value }) }
                allowReset
                step={ 0.1 }
                min={ 0 }
                max={ 50 }
                resetFallbackValue={16}
                initialPosition={ 16 }
              />

              <hr className="responsive-block-editor-addons-editor__separator" />

              <ResponsiveNewPaddingControl
                attrNameTemplate="inputField%s"
                resetValues={inputFieldsPaddingResetValues}
                {...this.props}
              />

            </PanelBody>

            <PanelBody
              title={__("Button", "responsive-block-editor-addons")}
              initialOpen={false}
            >
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
                  let color_tab;
                  if ("normal" === tabName.name) {
                    color_tab = (
                      <>
                        <RbeaColorControl
								        	label = {__("Normal Button Color", "responsive-block-editor-addons")}
								        	colorValue={formButtonLabelColor}
								        	onChange={(colorValue) =>
								        		setAttributes({ formButtonLabelColor: colorValue })
								        	}
								        	resetColor={() => setAttributes({ formButtonLabelColor: "" })}
								        />
                         <RbeaColorControl
								        	label = {__("Normal Button Background color", "responsive-block-editor-addons")}
								        	colorValue={formButtonLabelBGColor}
								        	onChange={(colorValue) =>
								        		setAttributes({ formButtonLabelBGColor: colorValue })
								        	}
								        	resetColor={() => setAttributes({ formButtonLabelBGColor: "" })}
								        />
                      </>
                    );
                  } else if("hover" === tabName.name) {
                    color_tab = (
                      <>
                        <RbeaColorControl
								        	label = {__("Hover Button Color", "responsive-block-editor-addons")}
								        	colorValue={formButtonLabelHoverColor}
								        	onChange={(colorValue) =>
								        		setAttributes({ formButtonLabelHoverColor: colorValue })
								        	}
								        	resetColor={() => setAttributes({ formButtonLabelHoverColor: "" })}
								        />
                         <RbeaColorControl
								        	label = {__("Hover Button Background color", "responsive-block-editor-addons")}
								        	colorValue={formButtonLabelHoverBGColor}
								        	onChange={(colorValue) =>
								        		setAttributes({ formButtonLabelHoverBGColor: colorValue })
								        	}
								        	resetColor={() => setAttributes({ formButtonLabelHoverBGColor: "" })}
								        />
                      </>
                    );
                  } else {
                    color_tab = emptyColorControl;
                  }
                  return <div>{color_tab}</div>;
                }}
              </TabPanel>

              <hr className="responsive-block-editor-addons-editor__separator" />

              <ResponsiveNewPaddingControl
                attrNameTemplate="formButton%s"
                resetValues={formButtonPaddingResetValues}
                {...this.props}
              />

              <hr className="responsive-block-editor-addons-editor__separator" />

              <div className="responsive-block-editor-addons-form-border-radius-control">
                <RbeaBorderRadiusControl
                  attrNameTemplate="formButton%s"
                  {...this.props}
                />
              </div>

              <hr className="responsive-block-editor-addons-editor__separator" />

              <TabPanel
                className=" responsive-size-type-field-tabs  responsive-size-type-field__common-tabs  responsive-inline-margin"
                activeClass="active-tab"
                tabs={[
                  {
                    name: "desktop",
                    title: <Dashicon icon="desktop" />,
                    className:
                      " responsive-desktop-tab  responsive-responsive-tabs",
                  },
                  {
                    name: "tablet",
                    title: <Dashicon icon="tablet" />,
                    className:
                      " responsive-tablet-tab  responsive-responsive-tabs",
                  },
                  {
                    name: "mobile",
                    title: <Dashicon icon="smartphone" />,
                    className:
                      " responsive-mobile-tab  responsive-responsive-tabs",
                  },
                ]}
              >
                {(tab) => {
                  let tabout;

                  if ("mobile" === tab.name) {
                    tabout = (
                      <>
                        <p>{__("Button Alignment (Mobile)", "responsive-block-editor-addons")}</p>
                        <div className="responsive-block-editor-addons-alignment">
                        <AlignmentToolbar
                          value={formButtonAlignMobile}
                          onChange={(value) =>
                            setAttributes({
                              formButtonAlignMobile: value,
                            })
                          }
                          controls={["left", "center", "right"]}
                          isCollapsed={false}
                        />
                        </div>
                      </>
                    );
                  } else if ("tablet" === tab.name) {
                    tabout = (
                      <>
                        <p>{__("Button Alignment (Tablet)", "responsive-block-editor-addons")}</p>
                        <div className="responsive-block-editor-addons-alignment">
                        <AlignmentToolbar
                          value={formButtonAlignTablet}
                          onChange={(value) =>
                            setAttributes({
                              formButtonAlignTablet: value,
                            })
                          }
                          controls={["left", "center", "right"]}
                          isCollapsed={false}
                        />
                        </div>
                      </>
                    );
                  } else {
                    tabout = (
                      <>
                        <p>
                          {__("Button Alignment", "responsive-block-editor-addons")}
                        </p>
                        <div className="responsive-block-editor-addons-alignment">
                        <AlignmentToolbar
                          value={formButtonAlign}
                          onChange={(value) =>
                            setAttributes({
                              formButtonAlign: value,
                            })
                          }
                          controls={["left", "center", "right"]}
                          isCollapsed={false}
                        />
                        </div>
                      </>
                    );
                  }

                  return <div>{tabout}</div>;
                }}
              </TabPanel>

            </PanelBody>

            <PanelBody
              title={__("Colors", "responsive-block-editor-addons")}
              initialOpen={false}
            >

              <PanelBody
                title={__("Colors", "responsive-block-editor-addons")}
                initialOpen={false}
              >
                 <RbeaColorControl
									label = {__("Label", "responsive-block-editor-addons")}
									colorValue={formLabelColor}
									onChange={(colorValue) =>
										setAttributes({ formLabelColor: colorValue })
									}
									resetColor={() => setAttributes({ formLabelColor: "" })}
								/>
                 <RbeaColorControl
									label = {__("Input Text", "responsive-block-editor-addons")}
									colorValue={formInputTextColor}
									onChange={(colorValue) =>
										setAttributes({ formInputTextColor: colorValue })
									}
									resetColor={() => setAttributes({ formInputTextColor: "" })}
								/>
                 <RbeaColorControl
									label = {__("Input Background", "responsive-block-editor-addons")}
									colorValue={formInputBGColor}
									onChange={(colorValue) =>
										setAttributes({ formInputBGColor: colorValue })
									}
									resetColor={() => setAttributes({ formInputBGColor: "" })}
								/>
                 <RbeaColorControl
									label = {__("Helper Label", "responsive-block-editor-addons")}
									colorValue={formHelperLabelColor}
									onChange={(colorValue) =>
										setAttributes({ formHelperLabelColor: colorValue })
									}
									resetColor={() => setAttributes({ formHelperLabelColor: "" })}
								/>
                 <RbeaColorControl
									label = {__("Required Label", "responsive-block-editor-addons")}
									colorValue={formRequiredLabelColor}
									onChange={(colorValue) =>
										setAttributes({ formRequiredLabelColor: colorValue })
									}
									resetColor={() => setAttributes({ formRequiredLabelColor: "" })}
								/>
                 <RbeaColorControl
									label = {__("Success Message", "responsive-block-editor-addons")}
									colorValue={formSuccessMessageColor}
									onChange={(colorValue) =>
										setAttributes({ formSuccessMessageColor: colorValue })
									}
									resetColor={() => setAttributes({ formSuccessMessageColor: "" })}
								/>
                 <RbeaColorControl
									label = {__("Error Message", "responsive-block-editor-addons")}
									colorValue={formErrorMessageColor}
									onChange={(colorValue) =>
										setAttributes({ formErrorMessageColor: colorValue })
									}
									resetColor={() => setAttributes({ formErrorMessageColor: "" })}
								/>
              </PanelBody>

            </PanelBody>

            <PanelBody
              title={__("Border", "responsive-block-editor-addons")}
              initialOpen={false}
            >
              <RbeaColorControl
								label = {__("Border", "responsive-block-editor-addons")}
								colorValue={formBorderColor}
								onChange={(colorValue) =>
									setAttributes({ formBorderColor: colorValue })
								}
								resetColor={() => setAttributes({ formBorderColor: "" })}
							/>
              <div className="responsive-block-editor-addons-form-border-radius-control">
                <RbeaBorderRadiusControl
                  attrNameTemplate="form%s"
                  {...this.props}
                />
              </div>

              <BoxControl
                label={__("Border Width", "responsive-block-editor-addons")}
                values={formBorderWidth}
                units={[{ value: 'px', label: 'px', default: 1 }]}
                onChange={ ( value ) => {setAttributes({ formBorderWidth: value })} }
                resetValues={{ top: '1px', right: '1px', bottom: '1px', left: '1px' }}
              />

            </PanelBody>

            <PanelBody
              title={__("Help and Submit Messages", "responsive-block-editor-addons")}
              initialOpen={false}
            >

              <Text variant="title.small" as="h3">{__( 'Helper Text', 'responsive-block-editor-addons' )}</Text>
              <div className="responsive-block-editor-addons-form-controls-spacing">
                <FontSizePicker
                  fontSizes={defaultFontSizes}
                  value={ formHelperTextSize }
                  onChange={ ( value ) => {setAttributes({ formHelperTextSize: value })} }
                  units={[{ value: 'px', label: 'px', default: 14 }]}
                  __nextHasNoMarginBottom
                />
              </div>

              <Text variant="title.small" as="h3">{__( 'Success/Error Message', 'responsive-block-editor-addons' )}</Text>
              <div className="responsive-block-editor-addons-form-controls-spacing">
                <FontSizePicker
                  fontSizes={defaultFontSizes}
                  value={ formSuccessErrorMessageSize }
                  onChange={ ( value ) => {setAttributes({ formSuccessErrorMessageSize: value })} }
                  units={[{ value: 'px', label: 'px', default: 16 }]}
                  __nextHasNoMarginBottom
                />
              </div>

            </PanelBody>
            <PanelBody
              title={__("Spacing", "responsive-block-editor-addons")}
              initialOpen={false}
            >
              <ResponsiveNewPaddingControl
                attrNameTemplate="form%s"
                resetValues={formPaddingResetValues}
                {...this.props}
              />
              <ResponsiveNewMarginControl
                attrNameTemplate="form%s"
                resetValues={formMarginResetValues}
                {...this.props}
              />
            </PanelBody>

          </>}
          </InspectorTab>
          <InspectorTab key={"advance"}>
            <PanelBody
              title={__("Responsive Conditions", "responsive-block-editor-addons")}
              initialOpen={false}
            >
              <ToggleControl
                label={__(
                  "Hide on Desktop",
                  "responsive-block-editor-addons"
                )}
                checked={hideWidget}
                onChange={(value) =>
                  setAttributes({ hideWidget: !hideWidget })
                }
              />
              <ToggleControl
                label={__(
                  "Hide on Tablet",
                  "responsive-block-editor-addons"
                )}
                checked={hideWidgetTablet}
                onChange={(value) =>
                  setAttributes({ hideWidgetTablet: !hideWidgetTablet })
                }
              />
              <ToggleControl
                label={__(
                  "Hide on Mobile",
                  "responsive-block-editor-addons"
                )}
                checked={hideWidgetMobile}
                onChange={(value) =>
                  setAttributes({ hideWidgetMobile: !hideWidgetMobile })
                }
              />
            </PanelBody>
          
          <PanelBody
              title={__("Z Index", "responsive-block-editor-addons")}
              initialOpen={false}
            >
              <TabPanel
                  className=" responsive-size-type-field-tabs  responsive-size-type-field__common-tabs  responsive-inline-margin"
                  activeClass="active-tab"
                  tabs={[
                    {
                      name: "desktop",
                      title: <Dashicon icon="desktop" />,
                      className:
                        " responsive-desktop-tab  responsive-responsive-tabs",
                    },
                    {
                      name: "tablet",
                      title: <Dashicon icon="tablet" />,
                      className:
                        " responsive-tablet-tab  responsive-responsive-tabs",
                    },
                    {
                      name: "mobile",
                      title: <Dashicon icon="smartphone" />,
                      className:
                        " responsive-mobile-tab  responsive-responsive-tabs",
                    },
                  ]}
                >
                  {(tab) => {
                    let tabout;

                    if ("mobile" === tab.name) {
                      tabout = (
                        <RbeaRangeControl
                        label={__("z-index (Mobile)", "responsive-block-editor-addons")}
                        min={-1}
                        max={99999}
                        allowReset={true}
                        resetFallbackValue={1}
                        value={z_indexMobile}
                        onChange={(value) =>
                          setAttributes({ z_indexMobile: value !== undefined ? value : 1 })
                        }
                      />
                      );
                    } else if ("tablet" === tab.name) {
                      tabout = (
                        <RbeaRangeControl
                        label={__("z-index (Tablet)", "responsive-block-editor-addons")}
                        min={-1}
                        max={99999}
                        allowReset={true}
                        resetFallbackValue={1}
                        value={z_indexTablet}
                        onChange={(value) =>
                          setAttributes({ z_indexTablet: value !== undefined ? value : 1 })
                        }
                      />
                      );
                    } else {
                      tabout = (
                        <RbeaRangeControl
                        label={__("z-index ", "responsive-block-editor-addons")}
                        min={-1}
                        max={99999}
                        allowReset={true}
                        resetFallbackValue={1}
                        value={z_index}
                        onChange={(value) =>
                          setAttributes({ z_index: value !== undefined ? value : 1 })
                        }
                      />
                      );
                    }

                    return <div>{tabout}</div>;
                  }}
                </TabPanel>
          </PanelBody>
          </InspectorTab>
        </InspectorTabs>
      </InspectorControls>
    );
  }
}
