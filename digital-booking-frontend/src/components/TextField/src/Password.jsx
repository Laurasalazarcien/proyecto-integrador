/* eslint-disable no-unused-vars */
import PropTypes from "prop-types";
import classNames from "classnames";
import { Label, HelperMessage } from '../../Form';

const namespace = "textfield";

const TextField = ({
  id,
  name,
  value,
  label,
  placeholder,
  modifier,
  helperMessage,
  onChange,
  onBlur,
  className,
}) => {
  const componentClassNames = classNames(namespace, className, {
    [`${namespace}--${modifier}`]: modifier,
  });

  return (
    <div className={componentClassNames}>
      {label && (
        <label htmlFor={id} className={`${namespace}__label`}>
          {label}
        </label>
      )}
      <input
        type="text"
        name={name}
        value={value}
        className={`${namespace}__input`}
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur}
      />
      {helperMessage && (
        <span className={`${namespace}__helper-message`}>{helperMessage}</span>
      )}
    </div>
  );
};

TextField.propTypes = {
  id: PropTypes.string,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  modifier: PropTypes.string,
  label: PropTypes.string,
  helperMessage: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
  className: PropTypes.string,
};

TextField.defaultProps = {
  modifier: "",
  placeholder: "",
  helperMessage: "",
  className: "",
};

export default TextField;
