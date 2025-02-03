/**
 * External dependencies
 */
import classnames from "classnames";
import filter from "lodash/filter";
import Flickity from "react-flickity-component";
import EditorStyles from "./editor-styles";

/**
 * Internal dependencies
 */
import Inspector from "./inspector";
import GalleryImage from "../../../utils/components/block-gallery/gallery-image";
import GalleryPlaceholder from "../../../utils/components/block-gallery/gallery-placeholder";
import { GalleryClasses } from "../../../utils/components/block-gallery/shared";

/**
 * WordPress dependencies
 */
import { __, sprintf } from "@wordpress/i18n";
import { Component, Fragment } from "@wordpress/element";
import { compose } from "@wordpress/compose";
import { withNotices, ResizableBox } from "@wordpress/components";
import { RichText } from "@wordpress/block-editor";
import Style from "style-it";
import { hexToRgba } from "../../../utils/index.js";

class GalleryCarouselEdit extends Component {
  constructor() {
    super(...arguments);

    this.onSelectImage = this.onSelectImage.bind(this);
    this.onRemoveImage = this.onRemoveImage.bind(this);
    this.setImageAttributes = this.setImageAttributes.bind(this);
    this.onFocusCaption = this.onFocusCaption.bind(this);
    this.onItemClick = this.onItemClick.bind(this);

    this.state = {
      selectedImage: null,
      captionFocused: false,
    };
  }

  componentDidMount() {
    // This block does not support the following attributes.
    this.props.setAttributes({
      shadow: undefined,
    });

    // Assigning block_id in the attribute.
    this.props.setAttributes({ block_id: this.props.clientId });
    this.props.setAttributes({ classMigrate: true });

    // Pushing Style tag for this block css.
    const $style = document.createElement("style");
    $style.setAttribute(
      "id",
      "responsive-block-editor-addons-image-slider-style-" + this.props.clientId
    );
    document.head.appendChild($style);
  }

  componentDidUpdate(prevProps) {
    var element = document.getElementById(
      "responsive-block-editor-addons-image-slider-style-" + this.props.clientId
    );

    if (null !== element && undefined !== element) {
      element.innerHTML = EditorStyles(this.props);
    }
    // Deselect images when deselecting the block.
    if (!this.props.isSelected && prevProps.isSelected) {
      this.setState({
        selectedImage: null,
        captionSelected: false,
        captionFocused: false,
      });
    }

    if (
      !this.props.isSelected &&
      prevProps.isSelected &&
      this.state.captionFocused
    ) {
      this.setState({
        captionFocused: false,
      });
    }

    if (this.props.attributes.gutter <= 0) {
      this.props.setAttributes({
        radius: 0,
      });
    }

    if (
      this.props.attributes.gridSize === "xlrg" &&
      prevProps.attributes.align === undefined
    ) {
      this.props.setAttributes({
        gutter: 0,
        gutterMobile: 0,
        gutterTablet: 0,
      });
    }
  }

  onSelectImage(index) {
    return () => {
      if (this.state.selectedImage !== index) {
        this.setState({
          selectedImage: index,
          captionFocused: false,
        });
      }
    };
  }

  onRemoveImage(index) {
    return () => {
      const images = filter(
        this.props.attributes.images,
        (_img, i) => index !== i
      );
      this.setState({ selectedImage: null });
      this.props.setAttributes({
        images,
      });
    };
  }

  setImageAttributes(index, attributes) {
    const {
      attributes: { images },
      setAttributes,
    } = this.props;
    if (!images[index]) {
      return;
    }
    setAttributes({
      images: [
        ...images.slice(0, index),
        {
          ...images[index],
          ...attributes,
        },
        ...images.slice(index + 1),
      ],
    });
  }

  onFocusCaption() {
    if (!this.state.captionFocused) {
      this.setState({
        captionFocused: true,
      });
    }
  }

  onItemClick() {
    if (!this.props.isSelected) {
      this.props.onSelect();
    }

    if (this.state.captionFocused) {
      this.setState({
        captionFocused: false,
      });
    }
  }

  render() {
    const {
      attributes,
      className,
      isSelected,
      noticeUI,
      setAttributes,
    } = this.props;

    const {
      block_id,
      align,
      gridSize,
      gutter,
      gutterMobile,
      gutterTablet,
      height,
      images,
      pageDots,
      prevNextButtons,
      primaryCaption,
      alignCells,
      thumbnails,
      responsiveHeight,
      lightbox,
      blockBorderWidth,
      blockBorderColor,
      blockBorderStyle,
      blockBorderRadius,
      iconColor,
      iconBackgroundRadius,
      iconBackgroundColor,
      counterId,
      iconBackgroundOpacity,
      width,
      customWidth,
      isSmallImage,
    } = attributes;


    let imgopacity = iconBackgroundOpacity / 100;

    const hasImages = !!images.length;

    const innerClasses = classnames(
      "block-id-" + counterId,
      "is-cropped",
      ...GalleryClasses(attributes),
      {
        [`align${align}`]: align,
        "has-horizontal-gutter": gutter > 0,
        "has-no-dots": !pageDots,
        "has-no-arrows": !prevNextButtons,
        "is-selected": isSelected,
        "has-no-thumbnails": !thumbnails,
        "has-lightbox": lightbox,
        "scale-down": isSmallImage,
      }
    );

    const flickityClasses = classnames(
      "has-carousel",
      `has-carousel-${gridSize}`,
      {
        "has-aligned-cells": alignCells,
        [`has-margin-bottom-${gutter}`]: thumbnails && gutter > 0,
        [`has-margin-bottom-mobile-${gutterMobile}`]:
          thumbnails && gutterMobile > 0,
        [`has-margin-bottom-tablet-${gutterTablet}`]:
        thumbnails && gutterTablet > 0,
      }
    );

    const navClasses = classnames("carousel-nav", {
      [`has-margin-top-${gutter}`]: gutter > 0,
      [`has-margin-top-mobile-${gutterMobile}`]: gutterMobile > 0,
      [`has-margin-top-tablet-${gutterTablet}`]: gutterTablet > 0,
      [`has-negative-margin-left-${gutter}`]: gutter > 0,
      [`has-negative-margin-left-mobile-${gutterMobile}`]: gutterMobile > 0,
      [`has-negative-margin-left-tablet-${gutterTablet}`]: gutterTablet > 0,
      [`has-negative-margin-right-${gutter}`]: gutter > 0,
      [`has-negative-margin-right-mobile-${gutterMobile}`]: gutterMobile > 0,
      [`has-negative-margin-right-tablet-${gutterTablet}`]: gutterTablet > 0,
    });

    const flickityOptions = {
      draggable: false,
      pageDots: true,
      prevNextButtons: true,
      wrapAround: true,
      autoPlay: false,
      cellAlign: alignCells ? "left" : "center",
      arrowShape: {
        x0: 10,
        x1: 60,
        y1: 50,
        x2: 65,
        y2: 45,
        x3: 20,
      },
      responsiveHeight,
      thumbnails,
    };

    const navOptions = {
      asNavFor: ".has-carousel",
      draggable: false,
      pageDots: true,
      prevNextButtons: false,
      wrapAround: true,
      autoPlay: false,
      thumbnails: false,
      cellAlign: "left",
    };

    const navStyles = {
      marginLeft: gutter > 0 && !responsiveHeight ? gutter + "px" : undefined,
      marginRight: gutter > 0 && !responsiveHeight ? gutter + "px" : undefined,
      borderWidth: blockBorderWidth,
      borderStyle: blockBorderStyle,
      borderColor: blockBorderColor,
      borderRadius: blockBorderRadius,
    };

    const navFigureClasses = classnames(
      "responsive-block-editor-addons--figure",
      {
        [`has-margin-left-${gutter}`]: gutter > 0,
        [`has-margin-left-mobile-${gutterMobile}`]: gutterMobile > 0,
        [`has-margin-left-tablet-${gutterTablet}`]: gutterTablet > 0,
        [`has-margin-right-${gutter}`]: gutter > 0,
        [`has-margin-right-mobile-${gutterMobile}`]: gutterMobile > 0,
        [`has-margin-right-tablet-${gutterTablet}`]: gutterTablet > 0,
      }
    );

    const carouselGalleryPlaceholder = (
      <Fragment>
        {!hasImages ? noticeUI : null}
        <GalleryPlaceholder
          {...this.props}
          label={__("Carousel", "responsive-block-editor-addons")}
          //icon={ icon }
          gutter={gutter}
        />
      </Fragment>
    );

    if (!hasImages) {
      return carouselGalleryPlaceholder;
    }

    return (
      <Fragment>
        <style id={`responsive-block-editor-addons-image-slider-style-${this.props.clientId}-inner`}>{EditorStyles(this.props)}</style>
        {isSelected && <Inspector {...this.props} />}
        {noticeUI}
        <ResizableBox
          size={{
            height,
            width: "100%",
          }}
          className={classnames(
            {
              "is-selected": isSelected,
              "has-responsive-height": responsiveHeight,
            },
            "responsive-block-editor-addons-block-image-slider",
            `block-${block_id}`
          )}
          minHeight="0"
          enable={{
            bottom: true,
            bottomLeft: false,
            bottomRight: false,
            left: false,
            right: false,
            top: false,
            topLeft: false,
            topRight: false,
          }}
          onResizeStop={(_event, _direction, _elt, delta) => {
            setAttributes({
              height: parseInt(height + delta.height, 10),
            });
          }}
        >
          {" "}
          <div className={className}>
            <div className={innerClasses}>
              <Flickity
                className={flickityClasses}
                disableImagesLoaded={false}
                flickityRef={(c) => (this.flkty = c)}
                options={flickityOptions}
                reloadOnUpdate={true}
                updateOnEachImageLoad={true}
              >
                {images.map((img, index) => {
                  const ariaLabel = sprintf(
                    /* translators: %1$d is the order number of the image, %2$d is the total number of images */
                    __(
                      "image %1$d of %2$d in gallery",
                      "responsive-block-editor-addons"
                    ),
                    index + 1,
                    images.length
                  );

                  return (
                    <div
                      className="responsive-block-editor-addons-gallery--item"
                      key={img.id || img.url}
                      onClick={this.onItemClick}
                    >
                      <GalleryImage
                        url={img.url}
                        alt={img.alt}
                        id={img.id}
                        gutter={gutter}
                        gutterMobile={gutterMobile}
                        gutterTablet={gutterTablet}
                        marginRight={true}
                        marginLeft={true}
                        isSelected={
                          isSelected && this.state.selectedImage === index
                        }
                        onRemove={this.onRemoveImage(index)}
                        onSelect={this.onSelectImage(index)}
                        setAttributes={(attrs) =>
                          this.setImageAttributes(index, attrs)
                        }
                        caption={img.caption}
                        aria-label={ariaLabel}
                        supportsCaption={false}
                        supportsMoving={false}
                      />
                    </div>
                  );
                })}
              </Flickity>
            </div>
          </div>
        </ResizableBox>
        {thumbnails && (
          <div className={className}>
            <div className={innerClasses}>
              <Flickity
                className={navClasses}
                options={navOptions}
                disableImagesLoaded={false}
                reloadOnUpdate={true}
                flickityRef={(c) => (this.flkty = c)}
                updateOnEachImageLoad={true}
              >
                {images.map((image) => {
                  return (
                    <div
                      className="responsive-block-editor-addons--item-thumbnail"
                      key={image.id || image.url}
                    >
                      <figure className={navFigureClasses}>
                        <img
                          src={image.url}
                          alt={image.alt}
                          data-link={image.link}
                          data-id={image.id}
                          className={image.id ? `wp-image-${image.id}` : null}
                        />
                      </figure>
                    </div>
                  );
                })}
              </Flickity>
            </div>
          </div>
        )}
        {carouselGalleryPlaceholder}
        {(!RichText.isEmpty(primaryCaption) || isSelected) && (
          <RichText
            tagName="figcaption"
            placeholder={__(
              "Write gallery caption…",
              "responsive-block-editor-addons"
            )}
            value={primaryCaption[0] === undefined ? '' : primaryCaption[0]}
            className="responsive-block-editor-addons-gallery--caption responsive-block-editor-addons-gallery--primary-caption"
            unstableOnFocus={this.onFocusCaption}
            onChange={(value) => setAttributes({ primaryCaption: value })}
            isSelected={this.state.captionFocused}
            inlineToolbar
          />
        )}
      </Fragment>
    );
  }
}

export default compose([withNotices])(GalleryCarouselEdit);
