import {
  ADD_TASK,
  GET_OPEN_CLASS,
  GET_ALL_CLASS,
  GET_CATEGORY,
  GET_CLASS_LIST,
  GET_PROFILE,
  GET_PUBLIC_MENTOR,
  SEND_ALERT,
  SPLASH
} from "../Type/ActionType";

const initialState = {
  openClass: [],
  allClass: [],
  category: [],
  classList: [],
  profile: [],
  mentor: [],
  alertMessage: "",
  progressStatus: false,
  alertStatus: false,
  buttonStatus: false,
  splashStatus: true,
  image: require("../../assets/images/login_image.png"),
  defaultClass : require("../../assets/images/default_class.png")
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
    case GET_PUBLIC_MENTOR:
      return { ...state, mentor: action.payload };
    case SPLASH:
      return { ...state, splashStatus: action.payload };
    case SEND_ALERT:
      return {
        ...state,
        alertMessage: action.message,
        progressStatus: action.progress,
        alertStatus: action.visible,
        buttonStatus: action.button
      };
    default:
      return state;
  }
};
