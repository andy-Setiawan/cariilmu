import { GET_MENTOR_CLASS, MENTOR_WALLET, TRANSACTION_HISTORY } from "../Type/ActionType";

const initialState = {
  allClass: [],
  wallet: [],
  history:[],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_MENTOR_CLASS:
      return { ...state, allClass: action.payload };
    case MENTOR_WALLET:
      return { ...state, wallet: action.payload };
    case TRANSACTION_HISTORY:
      return { ...state, history: action.payload };
    default:
      return state;
  }
};
