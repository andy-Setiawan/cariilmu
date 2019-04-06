import { ADD_TASK, GET_OPEN_CLASS } from "../Type/ActionType";

const initialState = {
  openClass:[]
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return action.payload ;
    case GET_OPEN_CLASS:
      return {...state, openClass:action.payload} ;
    default:
      return state;
  }
};
