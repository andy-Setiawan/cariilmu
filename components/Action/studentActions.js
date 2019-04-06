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
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVjYTMwMzRlODQyM2QzMjlkOThkNTY4NiIsImVtYWlsIjoiZGl0b2hhZml6QGdtYWlsLmNvbSIsInVzZXJuYW1lIjoiZGl0byBoYWZpeiIsInJvbGUiOiJzdHVkZW50IiwiaWF0IjoxNTU0NTI0OTQ2LCJleHAiOjE1NTQ2MTEzNDZ9.ITtmy4x7c0KrHxJ4nN9Z8VsOsskVRQNYvAwbmjl1g0Q"
      }
    }).then(response => dispatch({ type: GET_PROFILE, payload: response.data.result }));
  };
};
