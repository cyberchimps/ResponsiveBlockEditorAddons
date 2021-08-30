/**
 * BLOCK: Responsive Blocks Advanced Heading
 */

// Import block dependencies and components
import Edit from "./components/edit";
import Save from "./components/save";
import attributes from "./attributes";

//Import Block Icon
import ResponsiveBlockEditorAddonsIcons from "../../block-icons";

// Import CSS
import "./styles/style.scss";
import "./styles/styles.editor.scss";

// Internationalization
// const { __ } = wp.i18n;

// Register block
// const { registerBlockType } = wp.blocks;

import {__} from "@wordpress/i18n";
import { registerBlockType } from "@wordpress/blocks";

const name = "responsive-block-editor-addons/advanced-heading";
const settings = {
  title: __("Advanced Heading", "responsive-block-editor-addons"),
  description: __(
    "Add a combination of a heading and a sub-heading with a separator in between.",
    "responsive-block-editor-addons"
  ),
  icon: ResponsiveBlockEditorAddonsIcons.advanced_heading,
  keywords: [
    __("heading", "responsive-block-editor-addons"),
    __("advanced heading", "responsive-block-editor-addons"),
    __("responsive", "responsive-block-editor-addons"),
  ],

  attributes,

  supports: {
		anchor: true
	},

  /* Render the block in the editor. */
  edit: (props) => {
    return <Edit {...props} />;
  },

  /* Save the block markup. */
  save: (props) => {
    return <Save {...props} />;
  },
};

// Register the block
registerBlockType("responsive-block-editor-addons/advanced-heading", {
  title: __("Advanced Heading", "responsive-block-editor-addons"),
  description: __(
    "Add a combination of a heading and a sub-heading with a separator in between.",
    "responsive-block-editor-addons"
  ),
  icon: ResponsiveBlockEditorAddonsIcons.advanced_heading,
  category: "responsive_block_editor_addons",
  keywords: [
    __("heading", "responsive-block-editor-addons"),
    __("advanced heading", "responsive-block-editor-addons"),
    __("responsive", "responsive-block-editor-addons"),
  ],

  attributes: attributes,

  supports: {
		anchor: true
	},

  /* Render the block in the editor. */
  edit: (props) => {
    return <Edit {...props} />;
  },

  /* Save the block markup. */
  save: (props) => {
    return <Save {...props} />;
  },
});

export {settings, name};