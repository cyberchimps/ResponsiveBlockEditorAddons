/**
 * Import dependencies.
 */
import LayoutModal from "../layout/layout-modal";

/**
 * WordPress dependencies.
 */
const { __ } = wp.i18n;
const { Placeholder } = wp.components;
const { Component, Fragment } = wp.element;
const { BlockControls, BlockAlignmentToolbar } = wp.blockEditor;

export default class Edit extends Component {
  constructor(props) {
    super(...arguments);
  }

  render() {
    const { attributes, setAttributes, clientId } = this.props;

    return [
      <Fragment key={this.props.clientId}>
        <BlockControls key="controls">
          <BlockAlignmentToolbar
            value={attributes.align}
            onChange={(align) => setAttributes({ align })}
            controls={[]}
          />
        </BlockControls>
        <Placeholder
          key="placeholder"
          label={__(
            "Responsive Template Library",
            "responsive-block-editor-addons"
          )}
          instructions={__(
            "Use Pattern Importer to import pre-designed patterns and layouts.",
            "responsive-block-editor-addons"
          )}
          className={"rbea-pattern-placeholder"}
          icon="editor-table"
        >
        
            <LayoutModal clientId={clientId} />
        
        </Placeholder>
      </Fragment>,
    ];
  }
}
