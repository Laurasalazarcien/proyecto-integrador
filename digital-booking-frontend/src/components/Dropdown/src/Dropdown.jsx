/* eslint-disable no-unused-vars */
import classNames from "classnames";
import PropTypes from "prop-types";
import DropdownTrigger from "./DropdownTrigger";
import DropdownContent from "./DropdownContent";
import { useDropdown } from "./context/DropdownContext";

const namespace = "dropdown";

const VariantsDropdown = ({
  id,
  name,
  label,
  modifier,
  fullWidth,
  helperMessage,
  className,
}) => {
  const componentClassnames = classNames(namespace, className, {
    [`${namespace}--full-width`]: fullWidth
  });
  const { isOpen, setDropdownVisibility, setDropdownSearch } = useDropdown();
  
  const handleCloseDropdown = () => {
    setDropdownVisibility(false);
    setDropdownSearch(false);
  };

  return (
    <div className={componentClassnames}>
      <DropdownTrigger
        id={id}
        label={label}
        modifier={modifier}
        fullWidth={fullWidth}
        helperMessage={helperMessage}
      />
      {isOpen && <DropdownContent />}
      {isOpen && (
        <div
          role="button"
          tabIndex="0"
          aria-hidden="true"
          className={`${namespace}__mask`}
          onClick={handleCloseDropdown}
        />
      )}
    </div>
  );
};

VariantsDropdown.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  label: PropTypes.string,
  modifier: PropTypes.string,
  fullWidth: PropTypes.bool,
  helperMessage: PropTypes.string,
  className: PropTypes.string,
};

VariantsDropdown.defaultProps = {
  fullWidth: false,
  className: "",
};

export default VariantsDropdown;
