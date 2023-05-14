import PropTypes from "prop-types";
import classNames from "classnames";

const namespace = "container";

const Container = ({ 
  children, 
  className 
}) => {
  const componentClassnames = classNames(namespace, className);
  
  return (
    <div className={componentClassnames}>
     { children }
    </div>
  );
};

Container.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired
};

Container.defaultProps = {
  className: "",
};

export default Container;
