import { SET_TOKEN, LOGOUT } from "../actionTypes/userActionTypes";

const initialState = {
  token: null,
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case SET_TOKEN:
      return {
        ...state,
        token: action.token,
      };
    case LOGOUT:
      return initialState;
    default:
      return state;
  }
}
