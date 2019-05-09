import axios from "axios";
import AsyncStorage from "@react-native-community/async-storage";
import { Actions } from "react-native-router-flux";
import { sendAlert, closeAlert } from "./pubActions";
import { getProfileStudent } from "./studentActions";
import { getProfileMentor } from "./studentActions";
import {
  SEND_ALERT,
  SIGN_IN,
  SIGN_OUT,
  SET_ROLE,
  SET_TOKEN
} from "../Type/ActionType";

const url = "http://cari-ilmu-test.herokuapp.com";

export const Sign_In_Student = (username, password) => {
  return dispatch => {
    dispatch(sendAlert("", true, true, false));
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
        dispatch(closeAlert()), Actions.pop();
      })
      .catch(() => {
        dispatch(sendAlert("SIGN IN FAILED", false, true, true));
      });
  };
};

export const Sign_Up_Student = (name, username, email, password) => {
  return dispatch => {
    dispatch(sendAlert("", true, true, false));
    axios
      .post(`${url}/student/sign-up`, {
        name: name,
        username: username,
        email: email,
        password: password
      })
      .then(() => {
        dispatch(sendAlert("SIGN UP SUCCESS", false, true, true));
      })
      .catch(() => {
        dispatch(sendAlert("SIGN UP FAILED", false, true, true));
      });
  };
};

export const Sign_In_Mentor = (username, password) => {
  return dispatch => {
    dispatch(sendAlert("", true, true, false));
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
        dispatch(closeAlert()), Actions.pop();
      })
      .catch(err => {
        dispatch(sendAlert("SIGN IN FAILED", false, true, true));
      });
  };
};

export const Sign_Up_Mentor = (name, username, email, password) => {
  return dispatch => {
    dispatch(sendAlert("", true, true, false));
    axios
      .post(`${url}/mentor/sign-up`, {
        name: name,
        username: username,
        email: email,
        password: password
      })
      .then(() => {
        dispatch(sendAlert("SIGN UP SUCCESS", false, true, true));
      })
      .catch(() => {
        dispatch(sendAlert("SIGN UP FAILED", false, true, true));
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

export const Sign_Up_Google = (name, username, email, password) => {
  return dispatch => {
    dispatch(sendAlert("", true, true, false));
    axios
      .post(`${url}/student/sign-up`, {
        name: name,
        username: username,
        email: email,
        password: password
      })
      .then(() => {
        dispatch(Sign_In_Google(email, password));
      })
      .catch(() => {
        dispatch(Sign_In_Google(email, password));
      });
  };
};

export const Sign_In_Google = (username, password) => {
  return dispatch => {
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
        dispatch(closeAlert()), Actions.pop();
      })
      .catch(() => {
        dispatch(sendAlert("SIGN IN FAILED", false, true, true));
      });
  };
};
