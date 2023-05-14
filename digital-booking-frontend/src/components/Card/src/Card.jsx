import PropTypes from "prop-types";
import classNames from "classnames";

const namespace = "card";

const Card = ({ 
  shadow, 
  paddingSize, 
  borderColor, 
  className, 
  children 
}) => {
  const componentClassnames = classNames(namespace, className, {
    [`${namespace}--shadow-${shadow}`]: shadow,
    [`${namespace}--padding-${paddingSize}`]: paddingSize,
    [`${namespace}--${borderColor}`]: borderColor,
  });

  return <article className={componentClassnames}>{children}</article>;
};

Card.propTypes = {
  shadow: PropTypes.oneOf(["none", "flat", "outline", "elevated"]),
  paddingSize: PropTypes.oneOf(["0", "16", "24", "32"]),
  borderColor: PropTypes.oneOf([
    "default",
    "neutral",
    "success",
    "warning",
    "error",
  ]),
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Card.defaultProps = {
  shadow: "outline",
  paddingSize: "default",
  borderColor: "default",
  className: "",
};

export default Card;
