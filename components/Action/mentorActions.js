import { GET_MENTOR_CLASS, GET_PROFILE } from "../Type/ActionType";
import axios from "axios";
import AsyncStorage from "@react-native-community/async-storage";

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YzljZWFkYTAyODJjODM2MTJmZGNiOGMiLCJyb2xlIjoibWVudG9yIiwibmFtZSI6IkpvaG4gRG9lIiwidXNlcm5hbWUiOiJqb2huLmRvZSIsImVtYWlsIjoiam9obi5kb2VAZ21haWwuY29tIiwicGFzc3dvcmQiOiIkMmIkMTAkZURxVk5Oejc2U1d4ZU91N1d4Z3RudVpQeHlCalkuSWtlZGM5bmJXY2VuYndjWURDU2N1Mi4iLCJpYXQiOjE1NTUwNDMzMDEsImV4cCI6MTU1NjI1MjkwMX0.0UcN9bmCzyZocfcTKaPsJ_VXwjm-FtCOPglDnSrNns4";
const url = "http://cari-ilmu-test.herokuapp.com";
// const token = AsyncStorage.getItem("token").then(value => value)

export const getProfileMentor = tokens => {
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
