import { GET_PAYMENT_STATUS } from "../Type/ActionType";

const initialState = {
  paymentStatus: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_PAYMENT_STATUS:
      return { ...state, paymentStatus: action.payload };
    default:
      return state;
  }
};
