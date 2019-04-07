import { SIGN_IN } from "../Type/ActionType";

const initialState = {
  token: "",
  
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SIGN_IN:
      return { ...state, token: action.payload };
    default:
      return state;
  }
};
