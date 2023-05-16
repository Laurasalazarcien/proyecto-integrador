import PropTypes from "prop-types";
import classNames from "classnames";

const namespace = "dropdown";

const Dropdown = ({ 
  value, 
  selected, 
  className, 
  children 
}) => {
  const componentClassnames = classNames(`${namespace}__item`, className, {
    [`${namespace}__item--selected`]: selected,
  });

  return (
    <option value={value} className={componentClassnames}>
      {children}
    </option>
  );
};

Dropdown.propTypes = {
  value: PropTypes.string.isRequired,
  selected: PropTypes.bool.isRequired,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Dropdown.defaultProps = {
  className: "",
};

export default Dropdown;
