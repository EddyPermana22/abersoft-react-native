import { LOGOUT, SET_TOKEN } from "../actionTypes/customerActionTypes";

export const setToken = (token) => {
  return {
    type: SET_TOKEN,
    token: token,
  };
};

export const logout = () => {
  return {
    type: LOGOUT,
  };
};
