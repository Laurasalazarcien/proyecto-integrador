/* eslint-disable no-unused-vars */
import PropTypes from "prop-types";
import classNames from "classnames";
import { Label, HelperMessage } from "../../Form";

const namespace = "textfield";

const TextArea = ({
  id,
  type,
  name,
  label,
  value,
  rows,
  cols,
  placeholder,
  modifier,
  helperMessage,
  onChange,
  onBlur,
  className,
}) => {
  const componentClassNames = classNames(
    namespace,
    `${namespace}--textarea`,
    className,
    {
      [`${namespace}--${modifier}`]: modifier,
      [`${namespace}--${type}`]: type,
    }
  );

  return (
    <div className={componentClassNames}>
      {label && <Label id={id} label={label} />}
      <textarea
        id={id}
        name={name}
        cols={cols}
        rows={rows}
        placeholder={placeholder}
        className={`${namespace}__textarea`}
      />
      {helperMessage && (
        <HelperMessage modifier={modifier} message={helperMessage} />
      )}
    </div>
  );
};

TextArea.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  value: PropTypes.string.isRequired,
  rows: PropTypes.string,
  cols: PropTypes.string,
  placeholder: PropTypes.string,
  modifier: PropTypes.string,
  helperMessage: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
  className: PropTypes.string,
};

TextArea.defaultProps = {
  type: "full-width",
  label: "",
  placeholder: "",
  modifier: "",
  helperMessage: "",
  rows: "5",
  cols: "30",
  className: "",
};

export default TextArea;
