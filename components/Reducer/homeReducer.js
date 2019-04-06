import { ADD_TASK, GET_OPEN_CLASS, GET_CATEGORY, GET_CLASS_LIST } from "../Type/ActionType";

const initialState = {
  openClass: [],
  category: [],
  classList:[],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return action.payload;
    case GET_OPEN_CLASS:
      return { ...state, openClass: action.payload };
    case GET_CATEGORY:
      return { ...state, category: action.payload };
    case GET_CLASS_LIST:
    return { ...state, classList: action.payload };
    default:
      return state;
  }
};
