/* eslint-disable no-unused-vars */
import PropTypes from "prop-types";
import classNames from "classnames";
import Spinner from "../../Spinner";

const namespace = "image";

const Image = ({
  containerWidth,
  containerHeight,
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
  className,
}) => {
  const componentClassNames = classNames(namespace, className, {
    [`${namespace}--rounded`]: rounded,
    [`${namespace}--alignment-${alignment}`]: alignment,
    [`${namespace}--padding-${paddingSize}`]: paddingSize,
  });

  return (
    <div
      style={{ width: containerWidth, height: containerHeight }}
      className={componentClassNames}
    >
      <img
        style={{
          minWidth,
          maxWidth,
          minHeight,
          maxHeight,
        }}
        src={source}
        alt={alternativeText}
      />
    </div>
  );
};

Image.propTypes = {
  containerWidth: PropTypes.string.isRequired,
  containerHeight: PropTypes.string.isRequired,
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
  className: PropTypes.string,
};

Image.defaultProps = {
  imageFigcaption: "",
  alignment: "center",
  paddingSize: "16",
  className: "",
  rounded: false,
};

export default Image;
