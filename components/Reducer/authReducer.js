import { SIGN_IN, SIGN_OUT, SET_TOKEN, SET_ROLE } from "../Type/ActionType";

const initialState = {
  token: "",
  role: ""
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SIGN_IN:
      return {
        ...state,
        token: action.token,
        role: action.role
      };
    case SIGN_OUT:
      return { ...state, token: action.payload, role: action.payload };
    case SET_TOKEN:
      return { ...state, token: action.payload };
    case SET_ROLE:
      return { ...state, role: action.payload };
    default:
      return state;
  }
};
