/* eslint-disable react/prop-types */
import { createContext, useContext, useReducer } from "react";
import { appReducer } from "../reducer/appReducer";
import { actionTypes } from "../reducer/actionTypes";

export const initialState = {
  theme: "light",
  loading: false,
  errors: null,
  data: []
};

export const AppContext = createContext();

export const ContextProvider = ({ children }) => {
  const [appState, dispatch] = useReducer(appReducer, initialState);

  const setAppTheme = (theme) => {
    dispatch({
      type: actionTypes.SET_APP_THEME,
      payload: theme,
    });
  };

  const setLoading = (loading) => {
    dispatch({
      type: actionTypes.SET_LOADING,
      payload: loading,
    });
  };

  const setErrors = (errors) => {
    dispatch({
      type: actionTypes.SET_ERRORS,
      payload: errors,
    });
  };

  const setData = (data) => {
    dispatch({
      type: actionTypes.SET_DATA,
      payload: data,
    });
  };

  const value = {
    ...appState,
    setAppTheme,
    setLoading,
    setErrors,
    setData
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("Context Error");
  }
  return context;
};