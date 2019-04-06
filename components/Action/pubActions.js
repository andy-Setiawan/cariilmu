import { GET_OPEN_CLASS } from "../Type/ActionType";
import axios from "axios";

const url = "http://cari-ilmu-test.herokuapp.com";

export const Get_Open_Class = () => {
  return dispatch => {
    axios.get(`${url}/class/open`).then(response => {
      dispatch({
        type: GET_OPEN_CLASS,
        payload: response.data.data
      });
    });
  };
};
