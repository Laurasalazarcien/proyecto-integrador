import PropTypes from "prop-types";
import classNames from "classnames";

const namespace = "typography";

const Title = ({ 
  size, 
  color, 
  element, 
  weight, 
  alignment,
  transform,
  className, 
  children 
}) => {
  const componentClassNames = classNames(namespace, className, {
    [`${namespace}--size-${size}`]: size && size !== "default",
    [`${namespace}--weight-${weight}`]: weight && weight !== "default",
    [`${namespace}--color-${color}`]: color,
    [`${namespace}--alignment-${alignment}`]: alignment,
    [`${namespace}--transform-${transform}`]: transform && transform !== "none",
  });

  const getTitleElement = (element) => {
    switch (element) {
      case "h1":
        return <h1 className={componentClassNames}>{children}</h1>;
      case "h2":
        return <h2 className={componentClassNames}>{children}</h2>;
      case "h3":
        return <h3 className={componentClassNames}>{children}</h3>;
      case "h4":
        return <h4 className={componentClassNames}>{children}</h4>;
      case "h5":
        return <h5 className={componentClassNames}>{children}</h5>;
      case "h6":
        return <h6 className={componentClassNames}>{children}</h6>;
      default:
        return <h1 className={componentClassNames}>{children}</h1>;
    }
  };

  return getTitleElement(element);
};

Title.propTypes = {
  size: PropTypes.oneOf(["default", "xs", "s", "m", "l", "xl"]),
  color: PropTypes.oneOf([
    "primary",
    "secondary",
    "disabled",
    "inverted",
    "link",
    "negative",
    "caution",
    "positive",
  ]),
  element: PropTypes.oneOf(["h1", "h2", "h3", "h4", "h5", "h6"]),
  weight: PropTypes.oneOf(["default", "light", "regular", "semibold", "bold"]),
  alignment: PropTypes.objectOf(["center", "left", "right", "justify"]),
  transform: PropTypes.objectOf(["none", "uppercase", "lowercase", "capitalize"]),
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Title.defaultProps = {
  size: "default",
  element: "h1",
  color: "primary",
  weight: "default",
  alignment: "left",
  transform: "none",
  className: "",
};

export default Title;
