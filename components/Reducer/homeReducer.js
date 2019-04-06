import { ADD_TASK, GET_OPEN_CLASS, GET_CATEGORY } from "../Type/ActionType";

const initialState = {
  openClass: [],
  category: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return action.payload;
    case GET_OPEN_CLASS:
      return { ...state, openClass: action.payload };
    case GET_CATEGORY:
      return { ...state, category: action.payload };
    default:
      return state;
  }
};
