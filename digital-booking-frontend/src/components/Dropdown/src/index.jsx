import PropTypes from "prop-types";
import VariantDropdown from "./Dropdown";
import { DropdownProvider } from "./context/DropdownContext";

const DropdownContainer = ({
  id,
  name,
  label,
  options,
  modifier,
  fullWidth,
  helperMessage,
  selectedOption,
  onSelectOption,
  className,
}) => {
  const initialState = {
    dropdownOptions: options,
    dropdownValue: {
      actual: options.find((option) => option.value === selectedOption).value,
      label: options.find((option) => option.value === selectedOption).label,
    },
    isOpen: false,
    isLoading: false,
  };

  return (
    <DropdownProvider
      initialState={initialState}
      onSelectOption={onSelectOption}
    >
      <VariantDropdown
        id={id}
        name={name}
        label={label}
        modifier={modifier}
        fullWidth={fullWidth}
        helperMessage={helperMessage}
        className={className}
      />
    </DropdownProvider>
  );
};

DropdownContainer.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      value: PropTypes.string,
    })
  ),
  modifier: PropTypes.string,
  fullWidth: PropTypes.bool,
  helperMessage: PropTypes.string,
  selectedOption: PropTypes.shape({
    label: PropTypes.string,
    value: PropTypes.string,
  }),
  onSelectOption: PropTypes.func.isRequired,
  className: PropTypes.string,
};

DropdownContainer.defaultProps = {
  label: "",
  modifier: "",
  helperMessage: "",
  className: "",
};

export default DropdownContainer;
