import axios from "axios";
import AsyncStorage from "@react-native-community/async-storage";
import { SIGN_IN, GET_PROFILE, SIGN_OUT } from "../Type/ActionType";

const url = "http://cari-ilmu-test.herokuapp.com";

export const Sign_In_Student = (username, password) => {
  return dispatch => {
    axios
      .post(`${url}/student/sign-in`, {
        username: username,
        password: password
      })
      .then(response => {
        AsyncStorage.setItem("token", response.data.data.token);
        AsyncStorage.setItem("role", response.data.data.role);
        dispatch({ type: SIGN_IN, payload: response.data.data.token });
        axios({
          method: "get",
          url: `${url}/student/profile`,
          headers: {
            Authorization: response.data.data.token
          }
        }).then(res =>
          dispatch({ type: GET_PROFILE, payload: res.data.data })
        ).catch(err => console.log("no student"));
      });
  };
};

export const Sign_Up_Student = (name, username, email, password) => {
  return dispatch => {
    axios
      .post(`${url}/student/sign-up`, {
        name: name,
        username: username,
        email: email,
        password: password
      })
      .then(response => {
        console.log(response);
      })
      .catch(err => console.log("no student"));
  };
};

export const Sign_In_Mentor = (username, password) => {
  return dispatch => {
    axios
      .post(`${url}/mentor/sign-in`, {
        username: username,
        password: password
      })
      .then(response => {
        AsyncStorage.setItem("token", response.data.data.token);
        dispatch({ type: SIGN_IN, payload: response.data.data.token });
        axios({
          method: "get",
          url: `${url}/mentor`,
          headers: {
            Authorization: response.data.data.token
          }
        }).then(res =>
          dispatch({ type: GET_PROFILE, payload: res.data.data })
        ).catch(err => console.log("no sign"));
      });
  };
};

export const Sign_Up_Mentor = (name, username, email, password) => {
  return dispatch => {
    axios
      .post(`${url}/mentor/sign-up`, {
        name: name,
        username: username,
        email: email,
        password: password
      })
      .then(response => {
        console.log(response);
      })
      .catch(err => console.log("no mentor"));
  };
};

export const Set_Token = token => {
  return { type: SIGN_IN, payload: token };
};

export const Sign_Out = () => {
  AsyncStorage.removeItem("token");
  return { type: SIGN_OUT, payload: "" };
};
