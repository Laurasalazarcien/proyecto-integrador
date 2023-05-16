import PropTypes from "prop-types";
import { createContext, useReducer, useContext } from "react";
import dropdownReducer from "../reducer/variantDropdownReducer";
import actionTypes from "../reducer/types/actionTypes";

const DropdownContext = createContext();

const DropdownProvider = ({ children, initialState, onSelectOption }) => {
  const [variantDropdownState, dispatch] = useReducer(dropdownReducer, {
    ...initialState,
  });

  const setDropdownOptions = (options) => {
    dispatch({
      type: actionTypes.SET_DROPDOWN_OPTIONS,
      payload: options,
    });
  };

  const setDropdownVisibility = (isVisible) => {
    dispatch({
      type: actionTypes.SET_DROPDOWN_VISIBILITY,
      payload: isVisible,
    });
  };

  const setDropdownLoading = (loading) => {
    dispatch({
      type: actionTypes.SET_DROPDOWN_LOADING,
      payload: loading,
    });
  };

  const setDropdownSearch = (search) => {
    dispatch({
      type: actionTypes.SET_DROPDOWN_SEARCH,
      payload: search,
    });
  };

  const changeDropdownValue = ({ value, label }) => {
    dispatch({
      type: actionTypes.SET_DROPDOWN_VALUE,
      payload: {
        actual: value,
        label: label,
      },
    });
    setDropdownVisibility(false);
    onSelectOption(value);
  };

  const value = {
    ...variantDropdownState,
    variantDropdownState,
    setDropdownVisibility,
    changeDropdownValue,
    setDropdownOptions,
    setDropdownLoading,
    setDropdownSearch,
  };

  return (
    <DropdownContext.Provider value={value}>
      {children}
    </DropdownContext.Provider>
  );
};

const useDropdown = () => {
  const context = useContext(DropdownContext);
  if (!context) {
    throw new Error("Context Error");
  }
  return context;
};

DropdownProvider.propTypes = {
  initialState: PropTypes.shape({}).isRequired,
  onSelectOption: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export { useDropdown, DropdownProvider };
