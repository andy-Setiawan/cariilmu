import { SIGN_IN } from "../Type/ActionType";

const initialState = {
  data: [],
  token:"asd"
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SIGN_IN:
      return { ...state, data: action.payload };
    default:
      return state;
  }
};
