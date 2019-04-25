import { GET_MENTOR_CLASS, GET_PROFILE, SEND_ALERT, MENTOR_WALLET, TRANSACTION_HISTORY } from "../Type/ActionType";
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

export const getClassListMentor = token => {
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

export const updateProfile = (token, bio) => {
  return dispatch => {
    axios({
      method: "put",
      url: `${url}/mentor/`,
      headers: {
        Authorization: token
      },
      data: { bio: bio }
    })
      .then(response => {
        dispatch({ type: GET_PROFILE, payload: response.data.data });
      })
      .catch(err => console.log("no update yet"));
  };
};

export const setProfileImage = (token, image) => {
  let bodyFormData = new FormData();
  bodyFormData.append("image", {
    uri: image.uri,
    type: image.type,
    name: image.fileName
  });
  return dispatch => {
    dispatch({
      type: SEND_ALERT,
      message: "",
      progress: true,
      visible: true,
      button: false
    });
    axios({
      method: "put",
      url: `${url}/mentor/`,
      headers: {
        Authorization: token
      },
      data: bodyFormData
    })
      .then(response => {
        dispatch({ type: GET_PROFILE, payload: response.data.data }),
          dispatch({
            type: SEND_ALERT,
            message: "",
            progress: false,
            visible: false,
            button: false
          });
      })
      .catch(err => err);
  };
};

export const getMentorWallet = token => {
  return dispatch => {
    axios({
      method: "get",
      url: `${url}/mentor/balance`,
      headers: {
        Authorization: token
      }
    })
      .then(response =>{
        dispatch({ type: MENTOR_WALLET, payload: response.data.data.summary }),
        dispatch({ type: TRANSACTION_HISTORY, payload: response.data.data.payment })
      }
      )
      .catch(err => err);
  };
};

