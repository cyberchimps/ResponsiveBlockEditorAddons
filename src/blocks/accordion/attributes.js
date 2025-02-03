import { type } from "jquery";

const attributes = {
  block_id: {
    type: "string",
  },
  layout: {
    type: "string",
    default: "accordion",
  },
  inactiveOtherItems: {
    type: "boolean",
    default: true,
  },
  expandFirstItem: {
    type: "boolean",
    default: false,
  },
  enableSchemaSupport: {
    type: "boolean",
    default: false,
  },
  align: {
    type: "string",
    default: "left",
  },
  rowsGap: {
    type: "number",
    default: 10,
  },
  columnsGap: {
    type: "number",
    default: 10,
  },
  rowsGapMobile: {
    type: "number",
    default: 10,
  },
  columnsGapMobile: {
    type: "number",
    default: 10,
  },
  rowsGapTablet: {
    type: "number",
    default: 10,
  },
  z_index: {
    type: "number",
  },
  z_indexTablet: {
    type: "number",
  },
  z_indexMobile: {
    type: "number",
  },
  columnsGapTablet: {
    type: "number",
    default: 10,
  },
  boxPaddingTypeMobile: {
    type: "string",
    default: "px",
  },
  boxPaddingTypeTablet: {
    type: "string",
    default: "px",
  },
  boxPaddingTypeDesktop: {
    type: "string",
    default: "px",
  },
  vBoxPaddingMobile: {
    type: "number",
    default: 10,
  },
  hBoxPaddingMobile: {
    type: "number",
    default: 10,
  },
  vBoxPaddingTablet: {
    type: "number",
    default: 10,
  },
  hBoxPaddingTablet: {
    type: "number",
    default: 10,
  },
  vBoxPaddingDesktop: {
    type: "number",
    default: 10,
  },
  hBoxPaddingDesktop: {
    type: "number",
    default: 10,
  },
  titleTextColor: {
    type: "string",
    default: "#313131",
  },
  titleTextActiveColor: {
    type: "string",
    default: "#656565",
  },
  titlePaddingTypeDesktop: {
    type: "string",
    default: "px",
  },
  vtitlePaddingMobile: {
    type: "number",
    default: 10,
  },
  vtitlePaddingTablet: {
    type: "number",
    default: 10,
  },
  vtitlePaddingDesktop: {
    type: "number",
    default: 10,
  },
  htitlePaddingMobile: {
    type: "number",
    default: 10,
  },
  htitlePaddingTablet: {
    type: "number",
    default: 10,
  },
  htitlePaddingDesktop: {
    type: "number",
    default: 10,
  },
  contentTextColor: {
    type: "string",
    default: "#313131",
  },
  contentPaddingTypeDesktop: {
    type: "string",
    default: "px",
  },
  vcontentPaddingMobile: {
    type: "number",
    default: 10,
  },
  vcontentPaddingTablet: {
    type: "number",
    default: 10,
  },
  vcontentPaddingDesktop: {
    type: "number",
    default: 10,
  },
  hcontentPaddingMobile: {
    type: "number",
    default: 10,
  },
  hcontentPaddingTablet: {
    type: "number",
    default: 10,
  },
  hcontentPaddingDesktop: {
    type: "number",
    default: 10,
  },
  titleActiveTextColor: {
    type: "string",
  },
  titleActiveBackgroundColor: {
    type: "string",
  },
  iconColor: {
    type: "string",
  },
  iconActiveColor: {
    type: "string",
  },
  titleFontWeight: {
    type: "string",
  },
  titleFontSize: {
    type: "number",
  },
  titleLineHeight: {
    type: "number",
  },
  titleFontFamily: {
    type: "string",
  },
  contentFontFamily: {
    type: "string",
  },
  contentFontWeight: {
    type: "string",
  },
  contentFontSize: {
    type: "number",
  },
  contentLineHeight: {
    type: "number",
  },
  icon: {
    type: "string",
    default: "fas fa-plus",
  },
  iconActive: {
    type: "string",
    default: "fas fa-minus",
  },
  iconAlign: {
    type: "string",
    default: "row",
  },
  iconSize: {
    type: "number",
    default: 12,
  },
  iconSizeTablet: {
    type: "number",
    default: 12,
  },
  iconSizeMobile: {
    type: "number",
    default: 12,
  },
  iconSizeType: {
    type: "string",
    default: "px",
  },
  columns: {
    type: "number",
    default: 2,
  },
  schema: {
    type: "string",
    default: "",
  },
  enableToggle: {
    type: "boolean",
    default: true,
  },
  equalHeight: {
    type: "boolean",
    default: true,
  },
  titleLeftPaddingTablet: {
    type: "number",
    default: 10,
  },
  titleBottomPaddingTablet: {
    type: "number",
    default: 10,
  },
  titleLeftPaddingDesktop: {
    type: "number",
    default: 10,
  },
  titleBottomPaddingDesktop: {
    type: "number",
    default: 10,
  },
  titleLeftPaddingMobile: {
    type: "number",
    default: 10,
  },
  titleBottomPaddingMobile: {
    type: "number",
    default: 10,
  },
  headingTag: {
    type: "html",
    selector: "span,p,h1,h2,h3,h4,h5,h6",
    default: "span",
  },
  titleBackgroundColorOpacity: {
    type: "number",
    default: 100,
  },
  marginV: {
    type: "number",
  },
  marginH: {
    type: "number",
  },
  marginVMobile: {
    type: "number",
  },
  marginHMobile: {
    type: "number",
  },
  marginVTablet: {
    type: "number",
  },
  marginHTablet: {
    type: "number",
  },
  titleSecondaryBackgroundColor: {
    type: "string",
  },
  titleGradientDegree: {
    type: "number",
    default: 100,
  },
  titleBgGradient: {
    type: "boolean",
    default: false,
  },
  titleBackgroundColor: {
    type: "string",
    default: "#FFFFFF",
  },
  contentSecondaryBackgroundColor: {
    type: "string",
  },
  contentGradientDegree: {
    type: "number",
    default: 100,
  },
  contentBgGradient: {
    type: "boolean",
    default: false,
  },
  contentBackgroundColor: {
    type: "string",
    default: "#eeeeee",
  },
  contentBackgroundColorOpacity: {
    type: "number",
    default: 100,
  },
  titleFontSizeTablet: {
    type: "number",
  },
  titleFontSizeMobile: {
    type: "number",
  },
  contentFontSizeTablet: {
    type: "number",
  },
  contentFontSizeMobile: {
    type: "number",
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
  parentBlockBorderStyle: {
    type: "string",
    default: "solid",
  },
  parentBlockBorderTopWidth: {
    type: "number",
    default: 1,
  },
    parentBlockBorderTopWidthMobile: {
      type: "number",
      default: 1,
    },
    parentBlockBorderTopWidthTablet: {
      type: "number",
      default: 1,
    },
    parentBlockBorderBottomWidth: {
      type: "number",
      default: 1,
    },
    parentBlockBorderBottomWidthMobile: {
      type: "number",
      default: 1,
    },
    parentBlockBorderBottomWidthTablet: {
      type: "number",
      default: 1,
    },
    parentBlockBorderLeftWidth: {
      type: "number",
      default: 1,
    },
    parentBlockBorderLeftWidthMobile: {
      type: "number",
      default: 1,
    },
    parentBlockBorderLeftWidthTablet: {
      type: "number",
      default: 1,
    },
    parentBlockBorderRightWidth: {
      type: "number",
      default: 1,
    },
    parentBlockBorderRightWidthTablet: {
      type: "number",
      default: 1,
    },
    parentBlockBorderRightWidthMobile: {
      type: "number",
      default: 1,
    },
  parentBlockBorderTopRadius: {
    type: "number",
    default: 0,
  },
  parentBlockBorderTopRadiusMobile: {
    type: "number",
    default: 0,
  },
  parentBlockBorderTopRadiusTablet: {
    type: "number",
    default: 0,
  },
  parentBlockBorderRightRadius: {
    type: "number",
    default: 0,
  },
  parentBlockBorderRightRadiusMobile: {
    type: "number",
    default: 0,
  },
  parentBlockBorderRightRadiusTablet: {
    type: "number",
    default: 0,
  },
  parentBlockBorderLeftRadius: {
    type: "number",
    default: 0,
  },
  parentBlockBorderLeftRadiusMobile: {
    type: "number",
    default: 0,
  },
  parentBlockBorderLeftRadiusTablet: {
    type: "number",
    default: 0,
  },
  parentBlockBorderBottomRadius: {
    type: "number",
    default: 0,
  },
  parentBlockBorderBottomRadiusMobile: {
    type: "number",
    default: 0,
  },
  parentBlockBorderBottomRadiusTablet: {
    type: "number",
    default: 0,
  },
  parentBlockBorderBottomIsRadiusControlConnected: {
    type: "boolean",
    default: false,
  },
  parentBlockBorderBottomIsRadiusValueUpdated: {
  type: "boolean",
  default: false,
  },
  parentBlockBorderColor: {
    type: "string",
    default: 'black',
  },
  titleTopSpacing: {
    type: "number",
    default: 10,
  },
  titleTopSpacingMobile: {
    type: "number",
    default: 10,
  },
  titleTopSpacingTablet: {
    type: "number",
    default: 10,
  },
  titleBottomSpacing: {
    type: "number",
    default: 10,
  },
  titleBottomSpacingMobile: {
    type: "number",
    default: 10,
  },
  titleBottomSpacingTablet: {
    type: "number",
    default: 10,
  },
  titleLeftSpacing: {
    type: "number",
    default: 10,
  },
  titleLeftSpacingMobile: {
    type: "number",
    default: 10,
  },
  titleLeftSpacingTablet: {
    type: "number",
    default: 10,
  },
  titleRightSpacing: {
    type: "number",
    default: 10,
  },
  titleRightSpacingMobile: {
    type: "number",
    default: 10,
  },
  titleRightSpacingTablet: {
    type: "number",
    default: 10,
  },
  //Variables for content padding
contentTopSpacing: {
  type: "number",
  default: 10,
},
contentTopSpacingMobile: {
  type: "number",
  default: 10,
},
contentTopSpacingTablet: {
  type: "number",
  default: 10,
},
contentBottomSpacing: {
  type: "number",
  default: 10,
},
contentBottomSpacingMobile: {
  type: "number",
  default: 10,
},
contentBottomSpacingTablet: {
  type: "number",
  default: 10,
},
contentLeftSpacing: {
  type: "number",
  default: 10,
},
contentLeftSpacingMobile: {
  type: "number",
  default: 10,
},
contentLeftSpacingTablet: {
  type: "number",
  default: 10,
},
contentRightSpacing: {
  type: "number",
  default: 10,
},
contentRightSpacingMobile: {
  type: "number",
  default: 10,
},
contentRightSpacingTablet: {
  type: "number",
  default: 10,
},
blockIsPaddingControlConnected: {
  type: "boolean",
  default: false,
},
blockTopPadding: {
  type: "number",
  default: '',
},
blockTopPaddingMobile: {
  type: "number",
  default: '',
},
blockTopPaddingTablet: {
  type: "number",
  default: '',
},
blockBottomPadding: {
  type: "number",
  default: '',
},
blockBottomPaddingMobile: {
  type: "number",
  default: '',
},
blockBottomPaddingTablet: {
  type: "number",
  default: '',
},
blockLeftPadding: {
  type: "number",
  default: '',
},
blockLeftPaddingMobile: {
  type: "number",
  default: '',
},
blockLeftPaddingTablet: {
  type: "number",
  default: '',
},
blockRightPadding: {
  type: "number",
  default: '',
},
blockRightPaddingMobile: {
  type: "number",
  default: '',
},
blockRightPaddingTablet: {
  type: "number",
  default: '',
},
blockTopMargin: {
  type: "number",
  default: '',
},
blockBottomMargin: {
  type: "number",
  default: '',
},
blockLeftMargin: {
  type: "number",
  default: '',
},
blockRightMargin: {
  type: "number",
  default: '',
},
blockTopMarginTablet: {
  type: "number",
  default: '',
},
blockBottomMarginTablet: {
  type: "number",
  default: '',
},
blockLeftMarginTablet: {
  type: "number",
  default: '',
},
blockRightMarginTablet: {
  type: "number",
  default: '',
},
blockTopMarginMobile: {
  type: "number",
  default: '',
},
blockBottomMarginMobile: {
  type: "number",
  default: '',
},
blockLeftMarginMobile: {
  type: "number",
  default: '',
},
blockRightMarginMobile: {
  type: "number",
  default: '',
},
blockIsMarginControlConnected: {
  type: "boolean",
  default: false,
},
blockNewSpacingValuesUpdated: {
  type: "boolean",
  default: false,
},
blockIsTypographyColorValueUpdated : {
  type: "boolean",
  default: false,
},
contentTypographyColor : {
  type: "string",
  default: '#313131',
},
titleTypographyColor : {
  type: "string",
  default: '#313131',
},
separatorWidthType: {
  type: "string",
  default: "px",
},
  blockTitleLeftPadding: {
    type: "number",
    default: 10,
  },
  blockTitleLeftPaddingTablet: {
    type: "number",
    default: 10,
  },
  blockTitleLeftPaddingMobile: {
    type: "number",
    default: 10,
  },
  blockTitleTopPadding: {
    type: "number",
    default: 10,
  },
  blockTitleTopPaddingTablet: {
    type: "number",
    default: 10,
  },
  blockTitleTopPaddingMobile: {
    type: "number",
    default: 10,
  },
  blockTitleBottomPadding: {
    type: "number",
    default: 10,
  },
  blockTitleBottomPaddingTablet: {
    type: "number",
    default: 10,
  },
  blockTitleBottomPaddingMobile: {
    type: "number",
    default: 10,
  },
  blockTitleRightPadding: {
    type: "number",
    default: 10,
  },
  blockTitleRightPaddingTablet: {
    type: "number",
    default: 10,
  },
  blockTitleRightPaddingMobile: {
    type: "number",
    default: 10,
  },
  titleContentIsPaddingControlConnected: {
    type: "boolean",
    default: false,
  },
  contentLeftPadding: {
    type: "number",
    default: 10,
  },
  contentLeftPaddingTablet: {
    type: "number",
    default: 10,
  },
  contentLeftPaddingMobile: {
    type: "number",
    default: 10,
  },
  contentTopPadding: {
    type: "number",
    default: 10,
  },
  contentTopPaddingTablet: {
    type: "number",
    default: 10,
  },
  contentTopPaddingMobile: {
    type: "number",
    default: 10,
  },
  contentBottomPadding: {
    type: "number",
    default: 10,
  },
  contentBottomPaddingTablet: {
    type: "number",
    default: 10,
  },
  contentBottomPaddingMobile: {
    type: "number",
    default: 10,
  },
  contentRightPadding: {
    type: "number",
    default: 10,
  },
  contentRightPaddingTablet: {
    type: "number",
    default: 10,
  },
  contentRightPaddingMobile: {
    type: "number",
    default: 10,
  },
};

export default attributes;
