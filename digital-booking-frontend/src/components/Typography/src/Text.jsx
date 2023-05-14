import PropTypes from "prop-types";
import classNames from "classnames";

const namespace = "typography";

const Text = ({
  size,
  color,
  element,
  weight,
  alignment,
  transform,
  className,
  children,
}) => {
  const componentClassNames = classNames(namespace, className, {
    [`${namespace}--size-${size}`]: size,
    [`${namespace}--color-${color}`]: color,
    [`${namespace}--weight-${weight}`]: weight,
    [`${namespace}--alignment-${alignment}`]: alignment,
    [`${namespace}--transform-${transform}`]: transform && transform !== "none",
  });

  const getTextElement = (element) => {
    switch (element) {
      case "p":
        return <p className={componentClassNames}>{children}</p>;
      case "span":
        return <span className={componentClassNames}>{children}</span>;
      default:
        return <p className={componentClassNames}>{children}</p>;
    }
  };

  return getTextElement(element);
};

Text.propTypes = {
  size: PropTypes.oneOf(["xs", "s", "m", "l", "xl"]),
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
  element: PropTypes.oneOf(["p", "span"]),
  weight: PropTypes.oneOf(["light", "regular", "semibold", "bold"]),
  alignment: PropTypes.objectOf(["center", "left", "right", "justify"]),
  transform: PropTypes.objectOf(["none", "uppercase", "lowercase", "capitalize"]),
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Text.defaultProps = {
  size: "m",
  element: "p",
  color: "primary",
  weight: "regular",
  alignment: "left",
  transform: "none",
  className: "",
};

export default Text;
