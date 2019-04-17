import {
  GET_PROFILE,
  GET_PAYMENT_STATUS,
  GET_STUDENT_CLASS,
  SEND_ALERT
} from "../Type/ActionType";
import axios from "axios";

const url = "http://cari-ilmu-test.herokuapp.com";

export const getProfileStudent = token => {
  return dispatch => {
    axios({
      method: "get",
      url: `${url}/student`,
      headers: {
        Authorization: token
      }
    })
      .then(response =>
        dispatch({ type: GET_PROFILE, payload: response.data.data })
      )
      .catch(err => console.log("no profile student"));
  };
};

export const getStudentClass = token => {
  return dispatch => {
    axios({
      method: "get",
      url: `${url}/student/class`,
      headers: {
        Authorization: token
      }
    })
      .then(response =>
        dispatch({ type: GET_STUDENT_CLASS, payload: response.data.data })
      )
      .catch(err => console.log("no student class"));
  };
};

export const getPaymentStatus = token => {
  return dispatch => {
    axios({
      method: "get",
      url: `${url}/student/payment`,
      headers: {
        Authorization: token
      }
    })
      .then(response => {
        console.log(response.data);
        dispatch({
          type: GET_PAYMENT_STATUS,
          payload: response.data.data
        });
      })
      .catch(err => console.log("no payment detected"));
  };
};

export const enrollclass = (token, classId) => {
  return dispatch => {
    axios({
      method: "put",
      url: `${url}/student/class/${classId}/enroll`,
      headers: {
        Authorization: token
      }
    })
      .then(response => {
        console.log("ENROLL SUCCESS", response.data);
      })
      .catch(err => console.log("no enroll yet"));
  };
};

export const updateProfile = (token, bio) => {
  return dispatch => {
    axios({
      method: "put",
      url: `${url}/student/`,
      headers: {
        Authorization: token
      },
      data: {
        bio: bio
      }
    })
      .then(response => {
        dispatch({ type: GET_PROFILE, payload: response.data.data });
      })
      .catch(err => console.log("no update yet"));
  };
};

export const uploadImage = (token, paymentId, photo) => {
  console.log("token : ", token);
  console.log("classId : ", paymentId);

  var bodyFormData = new FormData();
  bodyFormData.append("photo", {
    uri: photo.uri,
    type: photo.type,
    name: photo.fileName
  });
  console.log("DATA : ", bodyFormData);
  return dispatch => {
    axios({
      method: "put",
      url: `${url}/student/payment/${paymentId}/confirm`,
      headers: {
        Authorization: token
      },
      data: bodyFormData
    })
      .then(() =>
        dispatch({
          type: SEND_ALERT,
          message: "UPLOAD SUCCESS",
          progress: false,
          visible: true
        })
      )
      .catch(err => console.log("GAGAL UPLOAD"));
  };
};

export const uploadFailed = () => {
  return { type: SEND_ALERT, 
    message: "UPLOAD FAILED",
    progress: false,
    visible: true };
};
