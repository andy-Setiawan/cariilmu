import { GET_PROFILE } from "../Type/ActionType";

const initialState = {
  profile: [],
  image:require("../../assets/images/login_image.png")
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_PROFILE:
      return { ...state, profile: action.payload };
    default:
      return state;
  }
};
