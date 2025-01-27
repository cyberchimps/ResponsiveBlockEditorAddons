/**
 * BLOCK: Responsive Blocks Advance Columns
 */

// Import block dependencies and components
import Edit from "./components/edit";
import Save from "./components/save";

//Import Block icons
import ResponsiveBlockEditorAddonsIcons from "../../block-icons";

// Import CSS
import "./styles/style.scss";
import "./styles/styles.editor.scss";

// Internationalization
const { __ } = wp.i18n;

// Register block
const { registerBlockType } = wp.blocks;

// Register the block
registerBlockType("responsive-block-editor-addons/advance-columns", {
  title: __("Advanced Columns", "responsive-block-editor-addons"),
  description: __(
    "Create attractive rows by adding a number of customizable columns in a single row",
    "responsive-block-editor-addons"
  ),
  icon: ResponsiveBlockEditorAddonsIcons.advance_columns,
  category: "responsive_block_editor_addons",
  keywords: [
    __("calendar", "responsive-block-editor-addons"),
    __("date", "responsive-block-editor-addons"),
    __("responsive", "responsive-block-editor-addons"),
  ],
  supports: {
    align: ["wide", "full"],
  },
  attributes: {
    columns: {
      type: "number",
      default: 2,
    },
    columnGap: {
      type: "string",
      default: "default",
    },
    width: {
      type: "number",
      default: 900,
    },
    widthType: {
      type: "string",
      default: "px",
    },
    contentWidth: {
      type: "string",
      default: "theme",
    },
    stack: {
      type: "string",
      default: "mobile",
    },
    boxTopPadding: {
      type: "number",
      default: 10,
    },
    boxBottomPadding: {
      type: "number",
      default: 10,
    },
    boxLeftPadding: {
      type: "number",
      default: 10,
    },
    boxRightPadding: {
      type: "number",
      default: 10,
    },
    boxTopPaddingTablet: {
      type: "number",
      default: '',
    },
    boxBottomPaddingTablet: {
      type: "number",
      default: '',
    },
    boxLeftPaddingTablet: {
      type: "number",
      default: '',
    },
    boxRightPaddingTablet: {
      type: "number",
      default: '',
    },
    boxTopPaddingMobile: {
      type: "number",
      default: '',
    },
    boxBottomPaddingMobile: {
      type: "number",
      default: '',
    },
    boxLeftPaddingMobile: {
      type: "number",
      default: '',
    },
    boxRightPaddingMobile: {
      type: "number",
      default: '',
    },
    topMargin: {
      type: "number",
      default: '',
    },
    bottomMargin: {
      type: "number",
      default: '',
    },
    topMarginTablet: {
      type: "number",
    },
    bottomMarginTablet: {
      type: "number",
    },
    topMarginMobile: {
      type: "number",
    },
    bottomMarginMobile: {
      type: "number",
    },
    blockBorderStyle: {
      type: "string",
      default: "none",
    },
    blockBorderWidth: {
      type: "number",
      default: 1,
    },
    blockBorderRadius: {
      type: "number",
    },
    blockTopRadius: {
      type: "number",
      default: 0,
    },
    blockRightRadius: {
      type: "number",
      default: 0,
    },
    blockBottomRadius: {
      type: "number",
      default: 0,
    },
    blockLeftRadius: {
      type: "number",
      default: 0,
    },
    blockTopRadiusTablet: {
      type: "number",
      default: 0,
    },
    blockRightRadiusTablet: {
      type: "number",
      default: 0,
    },
    blockBottomRadiusTablet: {
      type: "number",
      default: 0,
    },
    blockLeftRadiusTablet: {
      type: "number",
      default: 0,
    },
    blockTopRadiusMobile: {
      type: "number",
      default: 0,
    },
    blockRightRadiusMobile: {
      type: "number",
      default: 0,
    },
    blockBottomRadiusMobile: {
      type: "number",
      default: 0,
    },
    blockLeftRadiusMobile: {
      type: "number",
      default: 0,
    },
    blockIsRadiusControlConnected: {
      type: "boolean",
      default: false,
    },
    blockIsRadiusValueUpdated: {
      type: "boolean",
      default: false,
    },
    blockBorderColor: {
      type: "string",
    },
    boxShadowColor: {
      type: "string",
    },
    boxShadowHOffset: {
      type: "number",
      default: 0,
    },
    boxShadowVOffset: {
      type: "number",
      default: 0,
    },
    boxShadowBlur: {
      type: "number",
      default: 0,
    },
    boxShadowSpread: {
      type: "number",
      default: 0,
    },
    boxShadowPosition: {
      type: "string",
      default: "outset",
    },
    opacity: {
      type: "number",
      default: 20,
    },
    colorLocation1: {
      type: "number",
      default: 0,
    },
    colorLocation2: {
      type: "number",
      default: 100,
    },
    gradientDirection: {
      type: "number",
      default: 90,
    },
    backgroundType: {
      type: "string",
    },
    backgroundColor: {
      type: "string",
    },
    backgroundColor1: {
      type: "string",
    },
    backgroundColor2: {
      type: "string",
      default: "#fff",
    },
    backgroundImage: {
      type: "string",
      default: '',
    },
    backgroundImagePosition: {
      type: "string",
      default: "center center",
    },
    backgroundImageSize: {
      type: "string",
      default: "cover",
    },
    backgroundImageRepeat: {
      type: "string",
      default: "no-repeat",
    },
    backgroundAttachment: {
      type: "string",
      default: "scroll",
    },
    backgroundImageColor: {
      type: "string",
    },
    overlayType: {
      type: "string",
      default: "color",
    },
    gradientOverlayColor1: {
      type: "string",
    },
    gradientOverlayColor2: {
      type: "string",
    },
    gradientOverlayType: {
      type: "string",
      default: "linear",
    },
    gradientOverlayLocation1: {
      type: "number",
      default: 0,
    },
    gradientOverlayLocation2: {
      type: "number",
      default: 100,
    },
    gradientOverlayAngle: {
      type: "number",
      default: 0,
    },
    gradientOverlayPosition: {
      type: "string",
      default: "center center",
    },
    blockAlign: {
      type: "string",
      default: "left",
    },
    verticalAlign: {
      type: "string",
      default: "flex-start",
    },
    block_id: {
      type: "string",
    },
    height: {
      type: "string",
      default: "",
    },
    customHeight: {
      type: "number",
      default: 50,
    },
    z_index: {
      type: "number",
      default: 1,
    },
    hideWidget: {
      type: "boolean",
      default: false,
    },
    hideWidgetTablet: {
      type: "boolean",
      default: false,
    },
    hideWidgetMobile: {
      type: "boolean",
      default: false,
    },
    z_indexTablet: {
      type: "number",
      default: 1,
    },
    z_indexMobile: {
      type: "number",
      default: 1,
    },
    boxIsPaddingControlConnected: {
      type: "boolean",
      default: false,
    },
    boxIsMarginControlConnected: {
      type: "boolean",
      default: false,
    },
    boxTopMargin: {
      type: "number",
      default: '',
    },
    boxBottomMargin: {
      type: "number",
      default: '',
    },
    boxLeftMargin: {
      type: "number",
      default: '',
    },
    boxRightMargin: {
      type: "number",
      default: '',
    },
    boxTopMarginTablet: {
      type: "number",
      default: '',
    },
    boxBottomMarginTablet: {
      type: "number",
      default: '',
    },
    boxLeftMarginTablet: {
      type: "number",
      default: '',
    },
    boxRightMarginTablet: {
      type: "number",
      default: '',
    },
    boxTopMarginMobile: {
      type: "number",
      default: '',
    },
    boxBottomMarginMobile: {
      type: "number",
      default: '',
    },
    boxLeftMarginMobile: {
      type: "number",
      default: '',
    },
    boxRightMarginMobile: {
      type: "number",
      default: '',
    },
    newMarginValuesUpdated: {
      type: "boolean",
      default: false,
    },
  imagePositionTab: {
    type: "string",
    default: "desktop",
  },
  imageSizeTab: {
    type: "string",
    default: "desktop",
  },
  backgroundSizeTablet: {
    type: "string",
    default: "cover",
  },
  backgroundSizeMobile: {
    type: "string",
    default: "cover",
  },
	backgroundPosition: {
	  type: "string",
	  default: "center center",
	}, // For compatibility with v1.3.2.
  backgroundPositionMobile: {
	  type: "string",
	  default: "center center",
	}, // For compatibility with v1.3.2.
  backgroundPositionTablet: {
	  type: "string",
	  default: "center center",
	}, // For compatibility with v1.3.2.
	backgroundRepeat: {
	  type: "string",
	  default: "no-repeat",
	}, // For compatibility with v1.3.2.
	backgroundSize: {
	  type: "string",
	  default: "cover",
	}, // For compatibility with v1.3.2.
  },
    example:{
        columns: 2,
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
