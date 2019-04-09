import { GET_PROFILE } from "../Type/ActionType";
import axios from "axios";

const url = "http://cari-ilmu-test.herokuapp.com";

export const getProfile = (token) => {
  return dispatch => {
    axios({
      method: "get",
      url: `${url}/student/profile`,
      headers: {
        Authorization: token
      }
    }).then(response => dispatch({ type: GET_PROFILE, payload: response.data.result }));
  };
};

