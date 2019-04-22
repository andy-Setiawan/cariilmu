import {
  GET_OPEN_CLASS,
  GET_ALL_CLASS,
  GET_CLASS_LIST,
  GET_PUBLIC_MENTOR,
  GET_CATEGORY,
  SEND_ALERT
} from "../Type/ActionType";
import axios from "axios";

const url = "http://cari-ilmu-test.herokuapp.com";

export const Get_HomeData = () => {
  return dispatch => {
    dispatch({
      type: SEND_ALERT,
      message: "",
      progress: true,
      visible: true,
      button: false
    });
    axios
      .get(`${url}/category`)
      .then(response => {
        dispatch({
          type: GET_CATEGORY,
          payload: response.data.data
        }),
          axios
            .get(`${url}/public/mentor`)
            .then(response => {
              dispatch({
                type: GET_PUBLIC_MENTOR,
                payload: response.data.data
              }),
                axios
                  .get(`${url}/class/open`)
                  .then(response => {
                    dispatch({
                      type: GET_OPEN_CLASS,
                      payload: response.data.data
                    }),
                      axios
                        .get(`${url}/class`)
                        .then(response => {
                          dispatch({
                            type: GET_ALL_CLASS,
                            payload: response.data.data
                          }),
                            dispatch({
                              type: SEND_ALERT,
                              message: "",
                              progress: false,
                              visible: false,
                              button: false
                            });
                        })
                        .catch(() => {
                          dispatch({
                            type: SEND_ALERT,
                            message: "FAILED TO GET DATA",
                            progress: false,
                            visible: true,
                            button: false
                          });
                        });
                  })
                  .catch(err => console.log("no open class"));
            })
            .catch(err => console.log("no public mentor"));
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

export const closeAlert = () => {
  return { type: SEND_ALERT, message: "", progress: false, visible: false };
};
