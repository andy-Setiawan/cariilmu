import axios from "axios";
import AsyncStorage from "@react-native-community/async-storage";
import { Actions } from "react-native-router-flux";
import { getProfileStudent } from "./studentActions";
import { getProfileMentor } from "./studentActions";
import { SEND_ALERT, SIGN_IN, SIGN_OUT, SET_ROLE } from "../Type/ActionType";

const url = "http://cari-ilmu-test.herokuapp.com";

export const Sign_In_Student = (username, password) => {
  return dispatch => {
    dispatch({
      type: SEND_ALERT,
      message: "",
      progress: true,
      visible: true,
      button: false
    });
    axios
      .post(`${url}/student/sign-in`, {
        email: username,
        password: password
      })
      .then(response => {
        AsyncStorage.setItem("token", response.data.data.token);
        AsyncStorage.setItem("role", response.data.data.role);
        dispatch({
          type: SIGN_IN,
          token: response.data.data.token,
          role: response.data.data.role
        });
        dispatch(getProfileStudent(response.data.data.token));
        dispatch({
          type: SEND_ALERT,
          message: "",
          progress: false,
          visible: false,
          button: false
        }),
          Actions.pop();
      })
      .catch(() =>
        dispatch({
          type: SEND_ALERT,
          message: "SIGN IN FAILED",
          progress: false,
          visible: true,
          button: true
        })
      );
  };
};

export const Sign_Up_Student = (name, username, email, password) => {
  return dispatch => {
    dispatch({
      type: SEND_ALERT,
      message: "",
      progress: true,
      visible: true,
      button: false
    });
    axios
      .post(`${url}/student/sign-up`, {
        name: name,
        username: username,
        email: email,
        password: password
      })

      .then(() => {
        dispatch({
          type: SEND_ALERT,
          message: "SIGN UP SUCCESS",
          progress: false,
          visible: true,
          button: true
        });
      })
      .catch(() => {
        dispatch({
          type: SEND_ALERT,
          message: "SIGN UP FAILED",
          progress: false,
          visible: true,
          button: true
        });
      });
  };
};

export const Sign_In_Mentor = (username, password) => {
  return dispatch => {
    dispatch({
      type: SEND_ALERT,
      message: "",
      progress: true,
      visible: true,
      button: false
    });
    axios
      .post(`${url}/mentor/sign-in`, {
        email: username,
        password: password
      })
      .then(response => {
        AsyncStorage.setItem("token", response.data.data.token);
        AsyncStorage.setItem("role", response.data.data.role);
        dispatch({
          type: SIGN_IN,
          token: response.data.data.token,
          role: response.data.data.role
        });
        dispatch(getProfileMentor(response.data.data.token));
        dispatch({
          type: SEND_ALERT,
          message: "",
          progress: false,
          visible: false,
          button: false
        }),
          Actions.pop();
      })
      .catch(err =>
        dispatch({
          type: SEND_ALERT,
          message: "SIGN IN FAILED",
          progress: false,
          visible: true,
          button: true
        })
      );
  };
};

export const Sign_Up_Mentor = (name, username, email, password) => {
  return dispatch => {
    dispatch({
      type: SEND_ALERT,
      message: "",
      progress: true,
      visible: true,
      button: false
    });
    axios
      .post(`${url}/mentor/sign-up`, {
        name: name,
        username: username,
        email: email,
        password: password
      })
      .then(() => {
        dispatch({
          type: SEND_ALERT,
          message: "SIGN UP SUCCESS",
          progress: false,
          visible: true,
          button: true
        });
      })
      .catch(() => {
        dispatch({
          type: SEND_ALERT,
          message: "SIGN UP FAILED",
          progress: false,
          visible: true,
          button: true
        });
      });
  };
};

export const Set_Token = token => {
  return { type: SET_TOKEN, payload: token };
};

export const Set_Role = role => {
  return { type: SET_ROLE, payload: role };
};

export const Sign_Out = () => {
  AsyncStorage.removeItem("token");
  AsyncStorage.removeItem("role");
  return { type: SIGN_OUT, payload: "" };
};

export const chooseRole = () => {
  return {
    type: SEND_ALERT,
    message: "CHOOSE YOU ROLE",
    progress: false,
    visible: true,
    button: true
  };
};
