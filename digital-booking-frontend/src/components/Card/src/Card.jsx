import PropTypes from "prop-types";
import classNames from "classnames";

const namespace = "card";

const Card = ({
  shadow,
  paddingSize,
  borderColor,
  borderRadius,
  className,
  clickeable,
  onClick,
  children,
}) => {
  const componentClassnames = classNames(namespace, className, {
    [`${namespace}--shadow-${shadow}`]: shadow,
    [`${namespace}--padding-${paddingSize}`]: paddingSize,
    [`${namespace}--clickeable`]: clickeable,
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
  paddingSize: PropTypes.oneOf(["0", "12", "16", "24", "32"]),
  borderRadius: PropTypes.oneOf(["0", "6", "12", "16", "24", "32"]),
  borderColor: PropTypes.oneOf([
    "default",
    "neutral",
    "success",
    "warning",
    "error",
  ]),
  className: PropTypes.string,
  clickeable: PropTypes.bool,
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
};

Card.defaultProps = {
  shadow: "outline",
  paddingSize: "default",
  borderColor: "default",
  borderRadius: "6",
  clickeable: false,
  className: "",
};

export default Card;
