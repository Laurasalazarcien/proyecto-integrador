/* eslint-disable no-unused-vars */
import PropTypes from "prop-types";
import classNames from "classnames";

const namespace = "container";

const Container = ({ 
  width,
  height,
  margin,
  padding,
  children, 
  className 
}) => {
  const componentClassnames = classNames(namespace, className, {
    [`${namespace}--margin-${margin}`]: margin,
    [`${namespace}--padding-${padding}`]: padding,
  });
  
  return (
    <div className={componentClassnames}>
     { children }
    </div>
  );
};

Container.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  margin: PropTypes.string,
  padding: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node.isRequired
};

Container.defaultProps = {
  className: "",
};

export default Container;
