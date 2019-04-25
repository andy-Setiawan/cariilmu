import { GET_PAYMENT_STATUS, GET_STUDENT_CLASS } from "../Type/ActionType";

const initialState = {
  paymentStatus: [],
  class:[]
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_PAYMENT_STATUS:
      return { ...state, paymentStatus: action.payload };
    case GET_STUDENT_CLASS:
    return { ...state, class: action.payload };
    default:
      return state;
  }
};
