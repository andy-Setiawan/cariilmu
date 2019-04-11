import { GET_PROFILE } from "../Type/ActionType";
import axios from "axios";
import AsyncStorage from "@react-native-community/async-storage";

const url = "http://cari-ilmu-test.herokuapp.com";
// const token = AsyncStorage.getItem("token").then(value => value)

export const getProfileMentor = (token) => {
  console.log('mentor token', token)
  return dispatch => {
    axios({
      method: "get",
      url: `${url}/mentor`,
      headers: {
        Authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1Y2EzMTBhNGYyNDU2YTAwMTcyNzI1MDMiLCJyb2xlIjoibWVudG9yIiwibmFtZSI6IkRlbGFydGEgVG9rIEFkaW4iLCJ1c2VybmFtZSI6ImF0cmFsZWQiLCJlbWFpbCI6ImR0b2thZGluQGdtYWlsLmNvbSIsInBhc3N3b3JkIjoiJDJiJDEwJDloUXh0WjRoOVVicXExZ3h0UVMyTy5mc0xZUmhpbzJSakRUYlBjZjdwaldQbmFMeFU5WnFHIiwiaWF0IjoxNTU0OTY5MDg4LCJleHAiOjE1NTYxNzg2ODh9.KLOu3wQCo3qiIwU7f-vu8DBFTSwUAD1Wwq-Ulpg3bm8"
      }
    }).then(response => dispatch({ type: GET_PROFILE, payload: response.data.data }))
    .catch(err => console.log("no profile mentor"));
  };
};

