import PropTypes from "prop-types";
import classNames from "classnames";

const namespace = "card";

const Card = ({
  shadow,
  paddingSize,
  borderColor,
  className,
  clickeable,
  onClick,
  children,
}) => {
  const componentClassnames = classNames(namespace, className, {
    [`${namespace}--shadow-${shadow}`]: shadow,
    [`${namespace}--padding-${paddingSize}`]: paddingSize,
    [`${namespace}--clickeable`]: clickeable,
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
  paddingSize: PropTypes.oneOf(["0", "16", "24", "32"]),
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
  clickeable: false,
  className: "",
};

export default Card;
