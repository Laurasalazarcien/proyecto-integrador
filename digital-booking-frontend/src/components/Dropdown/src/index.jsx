import PropTypes from "prop-types";
import VariantDropdown from "./Dropdown";
import { DropdownProvider } from "./context/DropdownContext";
import { useEffect } from 'react';

const DropdownContainer = ({
  id,
  name,
  label,
  options,
  modifier,
  fullWidth,
  helperMessage,
  searchPlaceholder,
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

  useEffect(() => {
    console.log('Change selected: ', selectedOption);
  }, [selectedOption])
  

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
        searchPlaceholder={searchPlaceholder}
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
  searchPlaceholder: PropTypes.string,
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
