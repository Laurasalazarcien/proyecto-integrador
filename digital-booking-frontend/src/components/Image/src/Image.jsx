/* eslint-disable no-unused-vars */
import PropTypes from "prop-types";
import classNames from "classnames";
const namespace = "image";

const Image = ({
  containerWidth,
  containerHeight,
  width,
  height,
  minWidth,
  maxWidth,
  minHeight,
  maxHeight,
  source,
  paddingSize,
  alignment,
  alternativeText,
  figcaption,
  borderRadius,
  border,
  rounded,
  clickeable,
  className,
  onClick,
}) => {
  const componentClassNames = classNames(namespace, className, {
    [`${namespace}--rounded`]: rounded,
    [`${namespace}--clickeable`]: clickeable,
    [`${namespace}--alignment-${alignment}`]: alignment,
    [`${namespace}--padding-${paddingSize}`]: paddingSize,
  });


  const handleClick = () => {
    if (!clickeable) return;
   onClick();
  }
 
  return (
    <div
      style={{ 
        width: containerWidth, 
        height: containerHeight 
      }}
      className={componentClassNames}
    >
      <img
        style={{
          width,
          height,
          minWidth,
          maxWidth,
          minHeight,
          maxHeight,
        }}
        src={source}
        alt={alternativeText}
        onClick={handleClick}
      />
    </div>
  );
};

Image.propTypes = {
  containerWidth: PropTypes.string.isRequired,
  containerHeight: PropTypes.string.isRequired,
  width: PropTypes.string,
  height: PropTypes.string,
  minWidth: PropTypes.string,
  maxWidth: PropTypes.string,
  minHeight: PropTypes.string,
  maxHeight: PropTypes.string,
  source: PropTypes.string.isRequired,
  paddingSize: PropTypes.oneOf([ "16", "24", "32"]),
  alignment: PropTypes.objectOf(["left", "center", "right"]),
  alternativeText: PropTypes.string.isRequired,
  figcaption: PropTypes.string,
  borderRadius: PropTypes.string,
  border: PropTypes.string,
  rounded: PropTypes.bool,
  clickeable: PropTypes.bool,
  className: PropTypes.string,
  onClick: PropTypes.func
};

Image.defaultProps = {
  imageFigcaption: "",
  alignment: "center",
  paddingSize: "16",
  className: "",
  rounded: false,
  clickeable: false,
};

export default Image;
