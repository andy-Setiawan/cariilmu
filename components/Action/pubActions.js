import {
  GET_OPEN_CLASS,
  GET_CATEGORY,
  GET_CLASS_LIST
} from "../Type/ActionType";
import axios from "axios";

const url = "http://cari-ilmu-test.herokuapp.com";

export const Get_Open_Class = () => {
  return dispatch => {
    axios
      .get(`${url}/class/open`)
      .then(response => {
        dispatch({
          type: GET_OPEN_CLASS,
          payload: response.data.data
        });
      })
      .catch(err => console.log("no open class"));
  };
};

export const Get_Category = () => {
  return dispatch => {
    axios
      .get(`${url}/category`)
      .then(response => {
        dispatch({
          type: GET_CATEGORY,
          payload: response.data.data
        });
      })
      .catch(err => console.log("no get category"));
  };
};

export const Get_Class_List = classId => {
  return dispatch => {
    axios
      .get(`${url}/category/${classId}/class`)
      .then(response => {
        dispatch({
          type: GET_CLASS_LIST,
          payload: response.data.data
        });
      })
      .catch(err => console.log("no class list"));
  };
};
