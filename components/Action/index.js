import {ADD_TASK} from "../Type/ActionType"

export const addTask = payload => {
    return {
      type: ADD_TASK,
      payload
    }
  }