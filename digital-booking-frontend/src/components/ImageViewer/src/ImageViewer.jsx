/* eslint-disable no-unused-vars */
import PropTypes from "prop-types";
import { useState } from "react";
import classNames from "classnames";
import Image from "../../Image";
import Button from "../../Button";
import ImageViewerItem from "./ImageViewerItem";
import { useMobile } from "../../../hooks/useMobile";

const namespace = "image-viewer";

const ImageViewer = ({ images, imageSelected, className }) => {
  const isMobile = useMobile();
  const componentClassnames = classNames(namespace, className);
  const [currentImage, setCurrentImage] = useState(
    images.find((img) => img.id === imageSelected)
  );

  const handleImageClick = (imgId) => {
    setCurrentImage(images.find((img) => img.id === imgId));
  };

  return (
    <div className={componentClassnames}>
      <div className={`${namespace}__list`}>
        {images.map(({ id, url }) => (
          <ImageViewerItem
            id={id}
            key={id}
            source={url}
            paddingSize="0"
            containerWidth="80px"
            containerHeight="80px"
            imageWidth="100%"
            selected={id === currentImage.id}
            onClick={handleImageClick}
          />
        ))}
      </div>
      <div className={`${namespace}__current`}>
        {/* <Button className={`${namespace}__prev-button`}>Prev</Button> */}
        <Image
          source={currentImage.url}
          containerWidth="100%"
          containerHeight="100%"
          width="100%"
          maxHeight={isMobile ? "175px" : ""}
        />
        {/* <Button className={`${namespace}__next-button`}>Next</Button> */}
      </div>
    </div>
  );
};

ImageViewer.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      url: PropTypes.string,
    })
  ).isRequired,
  imageSelected: PropTypes.number,
  className: PropTypes.string,
};

ImageViewer.defaultProps = {
  className: "",
  imageSelected: 1,
};

export default ImageViewer;
