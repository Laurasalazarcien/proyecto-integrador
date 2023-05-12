import PropTypes from "prop-types";
import classNames from "classnames";

const namespace = "instrument-container";

const InstrumentContainer = ({ 
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

InstrumentContainer.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired
};

InstrumentContainer.defaultProps = {
  className: "",
};

export default InstrumentContainer;
