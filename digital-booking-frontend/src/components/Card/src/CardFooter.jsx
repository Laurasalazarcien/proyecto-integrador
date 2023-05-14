import PropTypes from "prop-types";
import classNames from "classnames";

const namespace = "card";

const CardFooter = ({ 
  borderFooter, 
  className, 
  children 
}) => {
  const componentClassnames = classNames(`${namespace}__footer`, className, {
    [`${namespace}__footer--border`]: borderFooter,
  });

  return <div className={componentClassnames}>{children}</div>;
};

CardFooter.propTypes = {
  borderFooter: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.node,
};

CardFooter.defaultProps = {
  className: "",
  borderFooter: true,

};

export default CardFooter;
