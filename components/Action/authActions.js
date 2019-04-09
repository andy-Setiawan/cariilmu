import axios from "axios";
import AsyncStorage from "@react-native-community/async-storage";
import { SIGN_IN, GET_PROFILE, SIGN_OUT } from "../Type/ActionType";

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
        axios({
          method: "get",
          url: `${url}/student/profile`,
          headers: {
            Authorization: response.data.data.token
          }
        }).then(res =>
          dispatch({ type: GET_PROFILE, payload: res.data.result })
        );
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

export const Sign_Out = () => {
  AsyncStorage.removeItem("token");
  return { type: SIGN_OUT, payload: "" };
};
