/**
 * External dependencies
 */

import isUndefined from "lodash/isUndefined";
import pickBy from "lodash/pickBy";
import moment from "moment";
import classnames from "classnames";
import Inspector from "./inspector";
import EditorStyles from "./editor-styles";
import { loadGoogleFont } from "../../../utils/font";
const { compose } = wp.compose;

const { Component, Fragment } = wp.element;
const { __ } = wp.i18n;

const { decodeEntities } = wp.htmlEntities;

const { withSelect } = wp.data;

const {
    Placeholder,
    Spinner,
    Toolbar,
    PanelBody,
    SelectControl,
} = wp.components;

const {
    BlockAlignmentToolbar,
    BlockControls,
    InspectorControls,
    RichText
} = wp.blockEditor;


class RBEATaxonomyList extends Component {

    constructor() {
        super(...arguments)
    }

    componentDidUpdate(prevProps, prevState) {
        var element = document.getElementById(
            "responsive-block-editor-addons-taxonomy-list-style-" + this.props.clientId
        );

        if (null !== element && undefined !== element) {
            element.innerHTML = EditorStyles(this.props);
        }
    }

    componentDidMount() {
        this.props.setAttributes({
            block_id: this.props.clientId
        });

        // Pushing Style tag for this block css.
        const $style = document.createElement("style");
        $style.setAttribute(
            "id",
            "responsive-block-editor-addons-taxonomy-list-style-" + this.props.clientId
        );
        document.head.appendChild($style);
    }

    render() {
        // Caching all Props.
        const {
            categoriesList,
            taxonomyList,
            termsList,
            className,
            attributes,
            setAttributes,
        } = this.props

        // Caching all attributes.
        const {
            alignment,
            bgColor,
            block_id,
            borderColor,
            borderRadius,
            borderStyle,
            borderWidth,
            categoryType,
            categories,
            columns,
            columnGap,
            columnsMobile,
            columnsTablet,
            contentPadding,
            contentPaddingMobile,
            contentPaddingTablet,
            countColor,
            layout,
            listBottomMargin,
            listStyle,
            listStyleColor,
            listStyleColorHover,
            listTextColor,
            listTextColorHover,
            noTaxDisplaytext,
            postType,
            rowGap,
            separatorColor,
            separatorStyle,
            separatorWidth,
            showEmptyTaxonomy,
            showPostCount,
            taxonomyType,
            titleBottomSpace,
            titleColor,
            titleTag,
            titleFontFamily,
            countFontFamily,
            listFontFamily,
            taxonomyAvailable,
        } = attributes

        if ("grid" == layout) {
            var Tag = titleTag ? titleTag : "H4";
        } else if ("list" == layout) {
            var Tag = titleTag ? titleTag : "div";
        }
        
        return (
            <Fragment>
                <style id={`responsive-block-editor-addons-taxonomy-list-style-${this.props.clientId}-inner`}>{EditorStyles(this.props)}</style>

                <Inspector key="taxonomy-list-inspector" {...{ setAttributes, ...this.props }} />
                <div key={`rbea-taxonomy-${block_id}`}
                    className={classnames(
                        this.props.className,
                        "responsive-block-editor-addons-block-taxonomy-list",
                        `block-${block_id}`
                    )}
                >
                    {titleFontFamily && loadGoogleFont(titleFontFamily)}
                    {countFontFamily && loadGoogleFont(countFontFamily)}
                    {listFontFamily && loadGoogleFont(listFontFamily)}
                    {"grid" === layout && (
                        <div className="responsive-block-editor-addons-block-grid">
                            {categoriesList.map((p, index) =>
                                <div key={`rbea-taxonomy-block-${index}`} className="responsive-block-editor-addons-block-box">
                                    <a className="responsive-block-editor-addons-block-link" href={p.link}>
                                        <Tag className="responsive-block-editor-addons-block-title" dangerouslySetInnerHTML={{ __html: p.name }}></Tag>
                                        {showPostCount && <div className="responsive-block-editor-addons-block-count">
                                            {p.count} {p.count > "1" ? `${p.singular_name}s` : p.singular_name}
                                        </div>}
                                    </a>
                                </div>
                            )}
                        </div>
                    )}
                    {"list" === layout && (
                        <div className="responsive-block-editor-addons-block-list">
                            <ul className="responsive-block-editor-addons-block-list-wrap">
                                {categoriesList.map((p, index) =>
                                    <li key={`rbea-taxonomy-${index}`} className="responsive-block-editor-addons-block-list-item">
                                        <Tag className="responsive-block-editor-addons-block-link-wrap">
                                            <a className="responsive-block-editor-addons-block-link" href={p.link}>
                                                <div className="responsive-block-editor-addons-block-link-name" dangerouslySetInnerHTML={{ __html: p.name }}></div>
                                            </a>
                                            {showPostCount && (
                                                <span className="responsive-block-editor-addons-block-list-count">{` (${p.count})`}</span>
                                            )}
                                        </Tag>
                                        {"none" !== separatorStyle && (
                                            <div className="responsive-block-editor-addons-block-separator-wrap">
                                                <div className="responsive-block-editor-addons-block-separator"></div>
                                            </div>
                                        )}
                                    </li>
                                )}
                            </ul>
                        </div>
                    )}
                    {
                        categoriesList.length === 0 ? setAttributes({taxonomyAvailable : false}) : setAttributes({taxonomyAvailable: true})
                    }
                    {categoriesList.length === 0 && (
                        <div className="reponsive-block-editor-addons-taxonomy-list-no-taxonomy-available">
                            {noTaxDisplaytext}
                        </div>
                    )}
                </div>
            </Fragment>
        )
    }
}

export default withSelect((select, props) => {

    const { categories, postsToShow, order, orderBy, postType, taxonomyType, showEmptyTaxonomy } = props.attributes
    const { getEntityRecords } = select("core")
    const { __experimentalGetPreviewDeviceType = null } = select('core/edit-post');

    let deviceType = __experimentalGetPreviewDeviceType ? __experimentalGetPreviewDeviceType() : null;


    let allTaxonomy = responsive_globals.taxonomy_list
    let currentTax = allTaxonomy[postType]

    var listToShowTaxonomy = (showEmptyTaxonomy) ? "with_empty_taxonomy" : "without_empty_taxonomy";

    let categoriesList = []
    if ("undefined" !== typeof currentTax) {
        if ("undefined" !== typeof currentTax[listToShowTaxonomy] && "undefined" != typeof currentTax[listToShowTaxonomy][taxonomyType]) {
            categoriesList = currentTax[listToShowTaxonomy][taxonomyType]
        }
    }
    let latestPostsQuery = {
        order: order,
        orderby: orderBy,
        per_page: postsToShow,
    }

    return {
        latestPosts: getEntityRecords('postType', postType, latestPostsQuery),
        categoriesList: categoriesList,
        taxonomyList: ("undefined" != typeof currentTax) ? currentTax["taxonomy"] : [],
        termsList: ("undefined" != typeof currentTax) ? currentTax["terms"] : [],
        deviceType: deviceType,

    }

})(RBEATaxonomyList)


