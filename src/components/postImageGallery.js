import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { setModalOpen, setModalClose } from "../features/imageGallerySlice";
const PostImageGallery = (props) => {
  const dispatch = useDispatch();
  const { pinned, images } = props;
  let imageFormated = false;

  const handleOpenGalleryModal = (index) => {
    // setScrollPosition(window.pageYOffset);
    if (pinned !== true) {
      const modalData = {
        scrollPosition: window.pageYOffset,
        galleryModalOpen: true,
        slideIndex: index,
        images: [],
      };
      images.map((item) => {
        modalData.images.push(item.img);
      });
      dispatch(setModalOpen(modalData));
    }
  };

  switch (images.length) {
    case 1:
      return (
        <section className="postImageGallery images1Gallery">
          {images.map((image, index) => {
            const { id, img, title } = image;
            return (
              <div key={index} onClick={() => handleOpenGalleryModal(index)}>
                <img src={img} alt={title} />
              </div>
            );
          })}
        </section>
      );
    case 2:
      return (
        <section className="postImageGallery images2Gallery">
          {images.map((image, index) => {
            const { id, img, title } = image;
            return (
              <div
                className="imageContainer"
                key={index}
                onClick={() => handleOpenGalleryModal(index)}
              >
                <img src={img} alt={title} />
              </div>
            );
          })}
        </section>
      );
    case 3:
      return (
        <section className="postImageGallery images3Gallery">
          {images.map((image, index) => {
            const { id, img, title } = image;
            if (!imageFormated) {
              imageFormated = true;
              return (
                <div
                  key={index}
                  className={`imageContainerHorizontal ${
                    !pinned && "pointerClickable"
                  }`}
                  onClick={() => handleOpenGalleryModal(index)}
                >
                  <img src={img} alt={title} />
                </div>
              );
            } else {
              return (
                <div
                  className="imageContainer"
                  key={index}
                  onClick={() => handleOpenGalleryModal(index)}
                >
                  <img src={img} alt={title} />
                </div>
              );
            }
          })}
        </section>
      );
    case 4:
      return (
        <section className="postImageGallery images4Gallery">
          {images.map((image, index) => {
            const { id, img, title } = image;
            return (
              <div
                className="imageContainer"
                key={index}
                onClick={() => handleOpenGalleryModal(index)}
              >
                <img src={img} alt={title} />
              </div>
            );
          })}
        </section>
      );
    default:
      return (
        <section className="postImageGallery imagesMultipleGallery">
          {images.map((image, index) => {
            const { id, img, title } = image;
            if (index < 4) {
              return (
                <div
                  className="imageContainer"
                  key={index}
                  onClick={() => handleOpenGalleryModal(index)}
                >
                  {index === 3 && (
                    <>
                      <div className="extraImagesCover" />
                      <p className="amountOfExtraImagesLabel">
                        +{images.length - 4}
                      </p>
                    </>
                  )}
                  <img src={img} alt={title} />
                </div>
              );
            }
          })}
        </section>
      );
  }
};

export default PostImageGallery;
