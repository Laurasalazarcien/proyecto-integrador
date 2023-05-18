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
  element,
  margin,
  padding,
  children, 
  className 
}) => {
  const componentClassNames = classNames(namespace, className, {
    [`${namespace}--margin-${margin}`]: margin,
    [`${namespace}--padding-${padding}`]: padding,
    [`${namespace}--display-${display}`]: display,
    [`${namespace}--align-items-${alightItems}`]: padding,
    [`${namespace}--justify-content-${justifyContent}`]: justifyContent,
  });

  const getContainerElement = (element) => {
    switch (element) {
      case "section":
        return <section className={componentClassNames}>{children}</section>;
      case "div":
        return <div className={componentClassNames}>{children}</div>;
      default:
        return <div className={componentClassNames}>{children}</div>;
    }
  };
  
  return getContainerElement(element);
};

Container.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  display: PropTypes.string,
  alightItems: PropTypes.string,
  justifyContent: PropTypes.string,
  margin: PropTypes.string,
  element: PropTypes.string,
  padding: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node.isRequired
};

Container.defaultProps = {
  className: "",
};

export default Container;
