import { GET_PROFILE } from "../Type/ActionType";
import axios from "axios";
import AsyncStorage from "@react-native-community/async-storage";

const url = "http://cari-ilmu-test.herokuapp.com";
// const token = AsyncStorage.getItem("token").then(value => value)

export const getProfileStudent = (token) => {
  return dispatch => {
    axios({
      method: "get",
      url: `${url}/student/profile`,
      headers: {
        Authorization: token
      }
    }).then(response => dispatch({ type: GET_PROFILE, payload: response.data.result }))
    .catch(err => console.log("no profile student"));
  };
};

