import {
  GET_PROFILE,
  GET_PAYMENT_STATUS,
  GET_STUDENT_CLASS
} from "../Type/ActionType";
import axios from "axios";
// import AsyncStorage from "@react-native-community/async-storage";

const url = "http://cari-ilmu-test.herokuapp.com";
// const token =
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVjYTMyM2U1MjA1ZTc2MWU2NTRhNTRkMSIsImVtYWlsIjoiamFuZS5kb2VAZ21haWwuY29tIiwidXNlcm5hbWUiOiJqYW5lLmRvZSIsInJvbGUiOiJzdHVkZW50IiwiaWF0IjoxNTU1MTE5ODkxLCJleHAiOjE1NTUyMDYyOTF9.AO4ijmbLVzyuej0IVk2qt1tc5ISYHoGHjcvKkcvk0V4";
// const token = AsyncStorage.getItem("token").then(value => value)

export const getProfileStudent = tokens => {
  return dispatch => {
    axios({
      method: "get",
      url: `${url}/student`,
      headers: {
        Authorization: tokens
      }
    })
      .then(response =>
        dispatch({ type: GET_PROFILE, payload: response.data.data })
      )
      .catch(err => console.log("no profile student"));
  };
};

export const getStudentClass = tokens => {
  return dispatch => {
    axios({
      method: "get",
      url: `${url}/student/class`,
      headers: {
        Authorization: tokens
      }
    })
      .then(response =>
        dispatch({ type: GET_STUDENT_CLASS, payload: response.data.data })
      )
      .catch(err => console.log("no student class"));
  };
};

export const getPaymentStatus = tokens => {
  return dispatch => {
    axios({
      method: "get",
      url: `${url}/student/payment`,
      headers: {
        Authorization: tokens
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

export const enrollclass = (tokens, classId) => {
  return dispatch => {
    axios({
      method: "put",
      url: `${url}/student/class/${classId}/enroll`,
      headers: {
        Authorization: tokens
      }
    })
      .then(response => {
        console.log("ENROLL SUCCESS", response.data);
      })
      .catch(err => console.log("no enroll yet"));
  };
};
