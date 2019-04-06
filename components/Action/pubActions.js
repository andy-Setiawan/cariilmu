import { GET_OPEN_CLASS, GET_CATEGORY } from "../Type/ActionType";
import axios from "axios";

const url = "http://cari-ilmu.herokuapp.com";

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

export const Get_Category = () => {
  return dispatch => {
    axios.get(`${url}/category`).then(response => {
      dispatch({
        type: GET_CATEGORY,
        payload: response.data.data
      });
    });
  };
};
