import {
  ADD_TASK,
  GET_OPEN_CLASS,
  GET_ALL_CLASS,
  GET_CATEGORY,
  GET_CLASS_LIST,
  GET_PROFILE
} from "../Type/ActionType";

const initialState = {
  openClass: [],
  allClass: [],
  category: [],
  classList: [],
  profile: [],
  image: require("../../assets/images/login_image.png")
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return action.payload;
    case GET_OPEN_CLASS:
      return { ...state, openClass: action.payload };
    case GET_ALL_CLASS:
      return { ...state, allClass: action.payload };
    case GET_CATEGORY:
      return { ...state, category: action.payload };
    case GET_CLASS_LIST:
      return { ...state, classList: action.payload };
    case GET_PROFILE:
      return { ...state, profile: action.payload };
    default:
      return state;
  }
};
