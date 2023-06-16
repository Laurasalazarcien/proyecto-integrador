/* eslint-disable no-unused-vars */
import { useState } from "react";
import AuthService from "../services/auth";

const useAuth = () => {
  const login = (userCredentials) => {
    return AuthService.loginWithEmailAndPassword(userCredentials);
  };

  return {
    login,
  };
};

export default useAuth;
