import { GET_MENTOR_CLASS, GET_PROFILE } from "../Type/ActionType";
import axios from "axios";
const url = "http://cari-ilmu-test.herokuapp.com";

export const getProfileMentor = token => {
  return dispatch => {
    axios({
      method: "get",
      url: `${url}/mentor`,
      headers: {
        Authorization: token
      }
    })
      .then(response =>
        dispatch({ type: GET_PROFILE, payload: response.data.data })
      )
      .catch(err => console.log("no profile mentor"));
  };
};

export const getClassListMentor = tokens => {
  return dispatch => {
    axios({
      method: "get",
      url: `${url}/mentor/class`,
      headers: {
        Authorization: token
      }
    })
      .then(response =>
        dispatch({ type: GET_MENTOR_CLASS, payload: response.data.data })
      )
      .catch(err => console.log("no mentor class list"));
  };
};
