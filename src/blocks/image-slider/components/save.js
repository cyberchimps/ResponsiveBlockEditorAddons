/**
 * External dependencies
 */
import classnames from "classnames";

/**
 * Internal dependencies
 */
import { GalleryClasses } from "../../../utils/components/block-gallery/shared";

/**
 * WordPress dependencies
 */
import { Component, Fragment } from "@wordpress/element";
import { RichText } from "@wordpress/block-editor";

const save = ({ attributes, className }) => {
  const {
    block_id,
    autoPlay,
    autoPlaySpeed,
    draggable,
    freeScroll,
    gridSize,
    gutter,
    gutterMobile,
    gutterTablet,
    height,
    images,
    pageDots,
    pauseHover,
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
    counterId,
    iconBackgroundOpacity,
    align,
    isSmallImage,
  } = attributes;

  const classes = classnames(className, {
    "has-responsive-height": responsiveHeight,
    [`align${align}`]: align,
  });

  let imgopacity = iconBackgroundOpacity / 100;

  const innerClasses = classnames(
    `align${align}`,
    "block-id-" + counterId,
    "is-cropped",
    ...GalleryClasses(attributes),
    {
      "has-horizontal-gutter": gutter > 0,
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

  const flickityStyles = {
    height: height ? height + "px" : undefined,
  };

  const figureClasses = classnames(
    "responsive-block-editor-addons-gallery--figure",
    {
      [`has-margin-left-${gutter}`]: gutter > 0,
      [`has-margin-left-mobile-${gutterMobile}`]: gutterMobile > 0,
      [`has-margin-left-tablet-${gutterTablet}`]: gutterTablet > 0,
      [`has-margin-right-${gutter}`]: gutter > 0,
      [`has-margin-right-mobile-${gutterMobile}`]: gutterMobile > 0,
      [`has-margin-right-tablet-${gutterTablet}`]: gutterTablet > 0,
    }
  );

  const navStyles = {
    marginLeft: gutter > 0 && !responsiveHeight ? gutter + "px" : undefined,
    marginRight: gutter > 0 && !responsiveHeight ? gutter + "px" : undefined,
    borderWidth: blockBorderWidth,
    borderStyle: blockBorderStyle,
    borderColor: blockBorderColor,
    borderRadius: blockBorderRadius,
  };

  const flickityOptions = {
    autoPlay: autoPlay && autoPlaySpeed ? parseFloat(autoPlaySpeed) : false,
    draggable,
    pageDots,
    prevNextButtons,
    wrapAround: true,
    cellAlign: alignCells ? "left" : "center",
    pauseAutoPlayOnHover: pauseHover,
    freeScroll,
    arrowShape: {
      x0: 10,
      x1: 60,
      y1: 50,
      x2: 65,
      y2: 45,
      x3: 20,
    },
    thumbnails,
    responsiveHeight,
  };

  const captionClasses = classnames(
    "responsive-block-editor-addons-gallery--caption",
    "responsive-block-editor-addons-gallery--primary-caption",
    {}
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

  const navOptions = {
    asNavFor: ".has-carousel",
    autoPlay: false,
    contain: true,
    cellAlign: "left",
    pageDots: false,
    thumbnails: false,
    draggable,
    prevNextButtons: false,
    wrapAround: false,
  };

  // Return early if there are no images.
  if (images.length <= 0) {
    return;
  }

  return (
    <Fragment>
      <div
        className={
          classnames(
            className,
            classes,
            "responsive-block-editor-addons-block-image-slider",
            `block-${block_id}`
          )
        }
      >
        <div className={innerClasses}>
          <div
            className={flickityClasses}
            style={responsiveHeight ? undefined : flickityStyles}
            data-flickity={JSON.stringify(flickityOptions)}
          >
            {images.map((image) => {
              const img = (
                <img
                  src={image.url}
                  alt={image.alt}
                  data-id={image.id}
                  data-link={image.link}
                  className={image.id ? `wp-image-${image.id}` : null}
                />
              );

              return (
                <div
                  key={image.id || image.url}
                  className="responsive-block-editor-addons-gallery--item"
                >
                  <figure className={figureClasses}>{img}</figure>
                </div>
              );
            })}
          </div>
          {thumbnails ? (
            <div
              className={navClasses}
              data-flickity={JSON.stringify(navOptions)}
            >
              {images.map((image) => {
                const img = (
                  <img
                    src={image.url}
                    alt={image.alt}
                    data-id={image.id}
                    data-link={image.link}
                  />
                );
                return (
                  <div
                    key={image.id || image.url}
                    className="responsive-block-editor-addons--item-thumbnail"
                  >
                    <figure className={navFigureClasses}>{img}</figure>
                  </div>
                );
              })}
            </div>
          ) : null}
        </div>
        {!RichText.isEmpty(primaryCaption) && (
          <RichText.Content
            tagName="figcaption"
            className={captionClasses}
            value={primaryCaption}
          />
        )}
      </div>
    </Fragment>
  );
};

export default save;
