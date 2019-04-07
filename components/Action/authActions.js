import axios from "axios";
import AsyncStorage from "@react-native-community/async-storage";
import { SIGN_IN } from "../Type/ActionType";

const url = "http://cari-ilmu-test.herokuapp.com";

export const Sign_In = (username, password) => {
  return dispatch => {
    axios
      .post(`${url}/student/sign-in`, {
        username: username,
        password: password
      })
      .then(response => {
        AsyncStorage.setItem("token", response.data.data.token);
        dispatch({ type: SIGN_IN, payload: response.data.data.token });
      });
  };
};

export const Sign_Up = (name, username, email, password) => {
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
      });
  };
};

export const Set_Token = token => {
  return { type: SIGN_IN, payload: token };
};
