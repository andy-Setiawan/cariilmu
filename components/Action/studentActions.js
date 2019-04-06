import { GET_PROFILE } from "../Type/ActionType";
import axios from "axios";

const url = "http://cari-ilmu-test.herokuapp.com";

export const getProfile = () => {
  return dispatch => {
    axios({
      method: "get",
      url: `${url}/student/profile`,
      headers: {
        Authorization:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVjYTg3OTk3M2RhZDMxMDAxN2ExOTViOSIsImVtYWlsIjoiYW5keVNldGlhd2FuQGNhcmlpbG11LmNvbSIsInVzZXJuYW1lIjoiYW5keXNldGlhd2FuIiwicm9sZSI6InN0dWRlbnQiLCJpYXQiOjE1NTQ1NDUwNjcsImV4cCI6MTU1NDYzMTQ2N30.nZSD3NM4p99Cv5owRHGAYcKu2lAhlZJ-UX7N5jwjSEk"
      }
    }).then(response => dispatch({ type: GET_PROFILE, payload: response.data.result }));
  };
};
