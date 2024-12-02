/**
 * BLOCK: Pattern Importer Layout
 */

/**
 * Import dependencies.
 */
import {download} from "@wordpress/icons";

import Edit from "./components/edit";
import {Button} from "@wordpress/components";

import ResponsiveBlockEditorAddonsIcons from "../../block-icons";
import  {LayoutModal}  from "./layout/layout-modal";

/**
 * WordPress dependencies.
 */
const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;

/**
 * Register the block
 */
registerBlockType("responsive-block-editor-addons/rbea-templates", {
  title: __("Templates Library", "responsive-block-editor-addons"),
  description: __(
    "Add beautiful pre-designed sections and pages to your website",
    "responsive-block-editor-addons"
  ),
  icon: ResponsiveBlockEditorAddonsIcons.template_library,
  category: "responsive_block_editor_addons",
  keywords: [
    __("patterns", "responsive-block-editor-addons"),
    __("importer", "responsive-block-editor-addons"),
    __("layouts", "responsive-block-editor-addons"),
  ],

  /* Render the block in editor. */
  edit: (props) => {
    return (
        <Edit {...props} />
    );
  },

  /* Save the block markup. */
  save: () => {
    return null;
  },
});

/**
 * Add a Pattern Importer button to the toolbar.
 */
let patternButtonExist = false;
wp.data.subscribe(() => {
  appendImportButton();
});

/**
 * Build the pattern importer button.
 */
function appendImportButton() {
  if (patternButtonExist) {
    return;
  }
  const toolbar = document.querySelector(".edit-post-header__center");
  if (!toolbar) {
    return;
  }
  const buttonDiv = document.createElement("div");
  buttonDiv.classList.add("rbea-pattern-wrapper");
  let html = '<div class="rbea-import-pattern">';
  html += `<Button variant="primary"
  aria-expanded={isModalOpen}
  icon={download} id="patternButton" class="components-button is-primary has-text has-icon" aria-label="${__(
    "Import Pattern",
    "responsive-block-editor-addons"
  )}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" aria-hidden="true" focusable="false"><path d="M18 11.3l-1-1.1-4 4V3h-1.5v11.3L7 10.2l-1 1.1 6.2 5.8 5.8-5.8zm.5 3.7v3.5h-13V15H4v5h16v-5h-1.5z"></path></svg> ${__(
    "Template Library",
    "responsive-block-editor-addons"
  )}</Button>`;
  html += "</div>";
  buttonDiv.innerHTML = html;
  toolbar.appendChild(buttonDiv);

  const innerToolbar = document.querySelector(
    ".edit-post-header__center"
  );
  if (innerToolbar) {
    innerToolbar.style.justifyContent = "flex-start";
  }

  const templateButton = document.querySelector("#patternButton");
  templateButton.style.height = '33px';
  templateButton.style.margin = '2px';

  document
    .getElementById("patternButton")
    .addEventListener("click", rbeaRenderModalBlock);

  patternButtonExist = true;
}

/**
 * Render block (Modal) on click.
 */
function rbeaRenderModalBlock() {
  
  let {rootClientId,index} = wp.data.select( 'core/block-editor' ).getBlockInsertionPoint();
  const block = wp.blocks.createBlock(
    "responsive-block-editor-addons/rbea-templates"
  );
  wp.data.dispatch("core/block-editor").insertBlocks(block,index,rootClientId);
}
