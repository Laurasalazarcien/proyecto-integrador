import PropTypes from "prop-types";
import classNames from "classnames";
import Spinner from "../../Spinner";

const namespace = "button";

const Button = ({
  type,
  size,
  href,
  modifier,
  hierarchy,
  disabled,
  fullWidth,
  loading,
  onClick,
  className,
  children,
}) => {
  const componentClassNames = classNames(namespace, className, {
    [`${namespace}--${size}`]: size,
    [`${namespace}--${modifier}`]: modifier,
    [`${namespace}--${hierarchy}`]: hierarchy,
    [`${namespace}--disabled`]: disabled,
    [`${namespace}--fullWidth`]: fullWidth,
    [`${namespace}--link`]: href,
  });

  const handleClick = () => {
    if (disabled || type === "submit") return;
    onClick();
  };

  if (href) {
    return (
      <a className={componentClassNames} href={href}>
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      className={componentClassNames}
      disabled={disabled}
      onClick={handleClick}
    >
      <div className={`${namespace}__content`}>
        {loading ? <Spinner /> : children}
      </div>
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.string,
  size: PropTypes.oneOf(["small", "medium", "large"]),
  href: PropTypes.string,
  modifier: PropTypes.oneOf(["neutral", "success", "warning", "error"]),
  hierarchy: PropTypes.oneOf("loud", "quiet", "transparent"),
  className: PropTypes.string,
  disabled: PropTypes.bool,
  fullWidth: PropTypes.bool,
  loading: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

Button.defaultProps = {
  type: "button",
  size: "medium",
  href: "",
  modifier: "primary",
  hierarchy: "loud",
  className: "",
  disabled: false,
  fullWidth: false,
  loading: false,
  onClick: () => {},
};

export default Button;
