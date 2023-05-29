/* eslint-disable no-unused-vars */
import PropTypes from "prop-types";
import classNames from "classnames";
import { Label, HelperMessage } from "../../Form";
import icons from "../../icons";
import { Text } from "../../Typography";

const namespace = "file-uploader";

const FileUploader = ({
  id,
  type,
  name,
  value,
  label,
  minValue,
  maxValue,
  stepValue,
  placeholder,
  modifier,
  helperMessage,
  onChange,
  onBlur,
  className,
}) => {
  const { Upload } = icons;
  const componentClassNames = classNames(
    namespace,
    `${namespace}--mumeric`,
    className,
    {
      [`${namespace}--${modifier}`]: modifier,
      [`${namespace}--${type}`]: type,
    }
  );

  return (
    <div className={componentClassNames}>
      {label && <Label id={id} label={label} />}
      <div className={`${namespace}__dropzone`}>
        <input
          id={id}
          type="file"
          accept=".png,.jpg,.pdf"
          className={`${namespace}__dropzone-input`}
        />
        <div className={`${namespace}__dropzone-button`}>
          <div className={`${namespace}__dropzone-container`}>
            <p className={`${namespace}__dropzone-text`}>
              <span className={`${namespace}__dropzone-icon`}>
                <Upload />
              </span>
              <span className={`${namespace}__dropzone-call-to-action`}>
                Seleccionar{" "}
              </span>
              <span className={`${namespace}__dropzone-description`}>
                o arrastrar el archivo aquí
              </span>
            </p>
            <p className={`${namespace}__dropzone-requirements`}>
              Hasta 10 archivos .jpg, .png, .pdf con peso máximo 100KB cada uno
            </p>
          </div>
        </div>
      </div>
      {helperMessage && (
        <HelperMessage modifier={modifier} message={helperMessage} />
      )}
    </div>
  );
};

FileUploader.propTypes = {
  id: PropTypes.string,
  type: PropTypes.oneOf(["full-width", "inline"]),
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  modifier: PropTypes.string,
  label: PropTypes.string,
  minValue: PropTypes.string,
  maxValue: PropTypes.string,
  stepValue: PropTypes.string,
  helperMessage: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
  className: PropTypes.string,
};

FileUploader.defaultProps = {
  type: "full-width",
  modifier: "",
  placeholder: "",
  helperMessage: "",
  minValue: "0",
  maxValue: "20",
  stepValue: "1",
  className: "",
};

export default FileUploader;
