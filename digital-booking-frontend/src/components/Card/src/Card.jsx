import PropTypes from "prop-types";
import classNames from "classnames";

const namespace = "card";

const Card = ({
  shadow,
  marginSize,
  paddingSize,
  borderColor,
  borderRadius,
  className,
  clickeable,
  animated,
  onClick,
  children,
}) => {
  const componentClassnames = classNames(namespace, className, {
    [`${namespace}--shadow-${shadow}`]: shadow,
    [`${namespace}--margin-${marginSize}`]: paddingSize,
    [`${namespace}--padding-${paddingSize}`]: paddingSize,
    [`${namespace}--clickeable`]: clickeable,
    [`${namespace}--animated`]: animated,
    [`${namespace}--rounded-${borderRadius}`]: borderRadius,
    [`${namespace}--${borderColor}`]: borderColor,
  });

  const handleClick = () => {
    if (!clickeable) return;
    onClick();
  };

  return (
    <article className={componentClassnames} onClick={handleClick}>
      {children}
    </article>
  );
};

Card.propTypes = {
  shadow: PropTypes.oneOf(["none", "flat", "outline", "elevated"]),
  marginSize: PropTypes.oneOf(["0", "4", "8", "12", "16", "20", "24", "32"]),
  paddingSize: PropTypes.oneOf(["0", "4", "8", "12", "16", "20", "24", "32"]),
  borderRadius: PropTypes.oneOf(["0", "4", "6", "8", "12", "16", "24", "32"]),
  borderColor: PropTypes.oneOf([
    "default",
    "neutral",
    "success",
    "warning",
    "error",
  ]),
  className: PropTypes.string,
  clickeable: PropTypes.bool,
  animated: PropTypes.bool,
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
};

Card.defaultProps = {
  shadow: "outline",
  marginSize: "0",
  paddingSize: "default",
  borderColor: "default",
  borderRadius: "6",
  animated: false,
  clickeable: false,
  className: "",
};

export default Card;
