import {GET_MENTOR_CLASS} from "../Type/ActionType"

const initialState = {
    allClass:[],
}

export default (state = initialState, action) => {
    switch (action.type) {
      case GET_MENTOR_CLASS:
        return { ...state, allClass: action.payload };
      default:
        return state;
    }
  };