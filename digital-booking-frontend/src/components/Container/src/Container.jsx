/* eslint-disable no-unused-vars */
import PropTypes from "prop-types";
import classNames from "classnames";

const namespace = "container";

const Container = ({ 
  width,
  height,
  display,
  alightItems,
  justifyContent,
  margin,
  padding,
  children, 
  className 
}) => {
  const componentClassnames = classNames(namespace, className, {
    [`${namespace}--margin-${margin}`]: margin,
    [`${namespace}--padding-${padding}`]: padding,
    [`${namespace}--display-${display}`]: display,
    [`${namespace}--align-items-${alightItems}`]: padding,
    [`${namespace}--justify-content-${justifyContent}`]: justifyContent,
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
  display: PropTypes.string,
  alightItems: PropTypes.string,
  justifyContent: PropTypes.string,
  margin: PropTypes.string,
  padding: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node.isRequired
};

Container.defaultProps = {
  className: "",
};

export default Container;
