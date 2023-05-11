/* eslint-disable react/prop-types */
import { createContext, useContext, useReducer } from "react";
import { appReducer } from "../reducer/appReducer";
import { actionTypes } from "../reducer/actionTypes";

export const initialState = {
  theme: "light",
  loading: false,
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

  const value = {
    ...appState,
    setAppTheme,
    setLoading,
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