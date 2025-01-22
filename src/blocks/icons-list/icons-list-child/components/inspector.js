/**
 * Inspector Controls
 */

import FontIconPicker from "@fonticonpicker/react-fonticonpicker";
import renderSVG from "../../../../renderIcon";
import ResponsiveBlocksIcon from "../../../../ResponsiveBlocksIcon.json";
import InspectorTab from "../../../../components/InspectorTab";
import InspectorTabs from "../../../../components/InspectorTabs";
import RbeaColorControl from "../../../../utils/components/rbea-color-control";
import RbeaMediaUploadControl from "../../../../utils/components/rbea-media-upload-control";
import RbeaTabRadioControl from "../../../../utils/components/rbea-tab-radio-control";
import ResponsiveNewPaddingControl from "../../../../settings-components/ResponsiveNewSpacingSettings/ResponsiveNewPaddingControl/index";
import ResponsiveNewMarginControl from "../../../../settings-components/ResponsiveNewSpacingSettings/ResponsiveNewMarginControl/index";

// Setup the block
const { __ } = wp.i18n;
const { Component, Fragment } = wp.element;

// Import block components
const {
  InspectorControls,
  PanelColorSettings,
  AlignmentToolbar,
  BlockControls,
  InnerBlocks,
  ColorPalette,
  MediaUpload,
} = wp.blockEditor;

// Import Inspector components
const {
  PanelBody,
  RangeControl,
  SelectControl,
  BaseControl,
  TabPanel,
  ToggleControl,
  Button,
  ButtonGroup,
  Icon,
  TextControl,
} = wp.components;

let svg_icons = Object.keys(ResponsiveBlocksIcon);

/**
 * Create an Inspector Controls wrapper Component
 */
export default class Inspector extends Component {
  constructor(props) {
    super(...arguments);
    this.onSelectImage = this.onSelectImage.bind(this);
    this.onRemoveImage = this.onRemoveImage.bind(this);
  }

  /*
   * Event to set Image as null while removing.
   */
  onRemoveImage() {
    const { setAttributes } = this.props;
    setAttributes({ image: null });
  }

  /*
   * Event to set Image as while adding.
   */
  onSelectImage(media) {
    const { setAttributes } = this.props;

    if (!media || !media.url) {
      setAttributes({ image: null });
      return;
    }

    if (!media.type || "image" != media.type) {
      return;
    }

    setAttributes({ image: media });
  }

  render() {
    // Setup the attributes
    const {
      attributes: {
        label,
        image_icon,
        icon,
        image,
        icon_color,
        label_color,
        icon_hover_color,
        label_hover_color,
        icon_bg_color,
        icon_bg_hover_color,
        icon_border_color,
        icon_border_hover_color,
        link,
        target,
        disableLink,
        hideLabel,
        source_type,
      },
      setAttributes,
    } = this.props;

    const blockMarginResetValues = {
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
		const blockPaddingResetValues = {
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

    let image_name = __("Select Image", "responsive-block-editor-addons");
    if (image) {
      if (image.url == null || image.url == "") {
        image_name = __("Select Image", "responsive-block-editor-addons");
      } else {
        image_name = __("Replace Image", "responsive-block-editor-addons");
      }
    }

    const labelColorControls = () => {
      let labelColorControl = "";
      let labelColorControlHover = "";
      let emptyColorControl = "";

      labelColorControl = (
        <Fragment>
          <RbeaColorControl
            label = {__("Text Color", "responsive-block-editor-addons")}
            colorValue={label_color}
            onChange={(colorValue) =>
              setAttributes({ label_color: colorValue })
            }
            resetColor={() => setAttributes({ label_color: "" })}
          />
        </Fragment>
      );

      labelColorControlHover = (
        <Fragment>
          <RbeaColorControl
            label = {__("Text Hover Color", "responsive-block-editor-addons")}
            colorValue={label_hover_color}
            onChange={(colorValue) =>
              setAttributes({ label_hover_color: colorValue })
            }
            resetColor={() => setAttributes({ label_hover_color: "" })}
          />
        </Fragment>
      );

      emptyColorControl = (
        <div className="responsive-block-editor-addons-empty-color-control"></div>
      );

      return (
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
            color_tab = labelColorControl;
          } else if("hover" === tabName.name) {
            color_tab = labelColorControlHover;
          } else {
            color_tab = emptyColorControl;
          }
          return <div>{color_tab}</div>;
        }}
      </TabPanel>
      );
    };


    const iconColorControls = () => {
      let iconColorControl = "";
      let iconColorControlHover = "";
      let emptyColorControl = "";

      iconColorControl = (
        <Fragment>
          <RbeaColorControl
            label = {__("Icon Color", "responsive-block-editor-addons")}
            colorValue={icon_color}
            onChange={(colorValue) =>
              setAttributes({ icon_color: colorValue })
            }
            resetColor={() => setAttributes({ icon_color: "" })}
          />
          <RbeaColorControl
            label = {__("Icon Background Color", "responsive-block-editor-addons")}
            colorValue={icon_bg_color}
            onChange={(colorValue) =>
              setAttributes({ icon_bg_color: colorValue })
            }
            resetColor={() => setAttributes({ icon_bg_color: "" })}
          />
          <RbeaColorControl
            label = {__("Icon Border Color", "responsive-block-editor-addons")}
            colorValue={icon_border_color}
            onChange={(colorValue) =>
              setAttributes({ icon_border_color: colorValue })
            }
            resetColor={() => setAttributes({ icon_border_color: "" })}
          />
        </Fragment>
      );

      iconColorControlHover = (
        <Fragment>
          <RbeaColorControl
            label = {__("Icon Hover Color", "responsive-block-editor-addons")}
            colorValue={icon_hover_color}
            onChange={(colorValue) =>
              setAttributes({ icon_hover_color: colorValue })
            }
            resetColor={() => setAttributes({ icon_hover_color: "" })}
          />
          <RbeaColorControl
            label = {__("Icon Background Hover Color", "responsive-block-editor-addons")}
            colorValue={icon_bg_hover_color}
            onChange={(colorValue) =>
              setAttributes({ icon_bg_hover_color: colorValue })
            }
            resetColor={() => setAttributes({ icon_bg_hover_color: "" })}
          />
          <RbeaColorControl
            label = {__("Icon Border Hover Color", "responsive-block-editor-addons")}
            colorValue={icon_border_hover_color}
            onChange={(colorValue) =>
              setAttributes({ icon_border_hover_color: colorValue })
            }
            resetColor={() => setAttributes({ icon_border_hover_color: "" })}
          />
        </Fragment>
      );

      emptyColorControl = (
        <div className="responsive-block-editor-addons-empty-color-control"></div>
      );

      return (
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
              color_tab = iconColorControl;
            } else if("hover" === tabName.name) {
              color_tab = iconColorControlHover;
            } else {
              color_tab = emptyColorControl;
            }
            return <div>{color_tab}</div>;
          }}
        </TabPanel>
      );
    };

    return (
      <Fragment>
        <InspectorControls>
          <InspectorTabs>
            <InspectorTab key={"content"}>
              <PanelBody
                title={__("Icon Settings", "responsive-block-editor-addons")}
                initialOpen={true}
              >
                <RbeaTabRadioControl
                  label={__("Select Source", "responsive-block-editor-addons")}
                  value={source_type}
                  onChange={(value) => setAttributes({ source_type: value })}
                  options={[
                    {
                      value: "icon",
                      label: __("Icon", "responsive-block-editor-addons"),
                    },
                    {
                      value: "image",
                      label: __("Image", "responsive-block-editor-addons"),
                    },
                  ]}
                />
                {"image" == source_type && (
                  <Fragment>
                    <RbeaMediaUploadControl
                      label={__("Image", "responsive-block-editor-addons")}
                      value={{
                          url: image? image.url : '',
                      }}
                      onChange={(media) => {
                        this.props.setAttributes({ image: media });
                      }}
                      mediaType={'image'}
                    />
                  </Fragment>
                )}
                {"icon" == source_type && (
                  <Fragment>
                    <p className="components-base-control__label">
                      {__("Icon", "responsive-block-editor-addons")}
                    </p>
                    <FontIconPicker
                      icons={svg_icons}
                      renderFunc={renderSVG}
                      theme="default"
                      value={icon}
                      onChange={(value) => setAttributes({ icon: value })}
                      isMulti={false}
                      noSelectedPlaceholder={__(
                        "Select Icon",
                        "responsive-block-editor-addons"
                      )}
                    />
                    <hr className="responsive-block-editor-addons-editor__separator" />
                  </Fragment>
                )}
                <ToggleControl
                  label={__("Link", "responsive-block-editor-addons")}
                  checked={disableLink} // The "Disable Link" option has been changed to enabling the link. This functionality is inverted.
                  onChange={(value) =>
                    setAttributes({ disableLink: !disableLink })
                  }
                />
                {disableLink && (
                  <Fragment>
                    <p className="components-base-control__label">
                      {__("URL", "responsive-block-editor-addons")}
                    </p>
                    <TextControl
                      value={link}
                      onChange={(value) => setAttributes({ link: value })}
                      placeholder={__("Enter URL", "responsive-block-editor-addons")}
                    />
                    <ToggleControl
                      label={__("Open in New Tab", "responsive-block-editor-addons")}
                      checked={target}
                      onChange={(value) => setAttributes({ target: !target })}
                    />
                  </Fragment>
                )}
              </PanelBody>
            </InspectorTab>
            <InspectorTab key={"style"}>
            <PanelBody
                title={__("Icon", "responsive-block-editor-addons")}
                initialOpen={false}
              >
                {iconColorControls()}
              </PanelBody>
              <PanelBody
                title={__("Label", "responsive-block-editor-addons")}
                initialOpen={false}
              >
                {labelColorControls()}
              </PanelBody>
              <PanelBody
                title={__("Spacing", "responsive-block-editor-addons")}
                initialOpen={false}
              >
                <ResponsiveNewMarginControl
                  attrNameTemplate="block%s"
                  resetValues={blockMarginResetValues}
                  {...this.props}
                />
                <ResponsiveNewPaddingControl
                  attrNameTemplate="block%s"
                  resetValues={blockPaddingResetValues}
                  {...this.props}
                />
            </PanelBody>
            </InspectorTab>
            <InspectorTab key={"advance"}></InspectorTab>
          </InspectorTabs>
        </InspectorControls>
      </Fragment>
    );
  }
}
