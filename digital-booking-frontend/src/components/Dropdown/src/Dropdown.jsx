import PropTypes from "prop-types";
import classNames from "classnames";
import { Label, HelperMessage } from "../../Form";

const namespace = "dropdown";

const Dropdown = ({
  id,
  name,
  label,
  modifier,
  helperMessage,
  className,
  children,
}) => {
  const componentClassnames = classNames(namespace, className);

  return (
    <div className={componentClassnames}>
      {label && <Label id={id} label={label} />}
      <select 
        id={id} 
        name={name}
        className={`${namespace}__select`}
      >
        {children}
      </select>
      {helperMessage && (
        <HelperMessage modifier={modifier} message={helperMessage} />
      )}
    </div>
  );
};

Dropdown.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  modifier: PropTypes.string,
  label: PropTypes.string,
  helperMessage: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Dropdown.defaultProps = {
  label: "",
  modifier: "",
  helperMessage: "",
  className: "",
};

export default Dropdown;
