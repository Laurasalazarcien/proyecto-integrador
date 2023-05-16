import actionTypes from "./types/actionTypes";

const dropdownReducer = (state = {}, action = {}) => {
  const { type, payload } = action;
  switch (type) {
    case actionTypes.SET_DROPDOWN_OPTIONS:
      return {
        ...state,
        options: [...payload],
      };
    case actionTypes.SET_DROPDOWN_VISIBILITY:
      return {
        ...state,
        isOpen: payload,
      };
    case actionTypes.SET_DROPDOWN_VALUE:
      return {
        ...state,
        dropdownValue: payload,
      };
    case actionTypes.SET_DROPDOWN_LOADING:
      return {
        ...state,
        isLoading: payload,
      };
    case actionTypes.SET_DROPDOWN_SEARCH:
      return {
        ...state,
        hasSearched: payload,
      };
    default:
      return state;
  }
};

export default dropdownReducer;
