import {
  ADD_TODO_FAILURE,
  ADD_TODO_LOADING,
  ADD_TODO_SUCCESS,
  GET_TODO_FAILURE,
  GET_TODO_LOADING,
  GET_TODO_SUCCESS,
  REMOVE_TODO_FAILURE,
  REMOVE_TODO_LOADING,
  REMOVE_TODO_SUCCESS,
  TOGGLE_TODO_FAILURE,
  TOGGLE_TODO_LOADING,
  TOGGLE_TODO_SUCCESS,
} from "./action.type";

export const getTodoRequest = () => {
  return { type: GET_TODO_LOADING };
};
export const getTodoSuccess = (payload) => {
  return { type: GET_TODO_SUCCESS, payload };
};

export const getTodoFailure = () => {
  return { type: GET_TODO_FAILURE };
};

export const addTodoRequest = () => {
  return { type: ADD_TODO_LOADING };
};
export const addTodoSuccess = (payload) => {
  return { type: ADD_TODO_SUCCESS, payload };
};

export const addTodoFailure = () => {
  return { type: ADD_TODO_FAILURE };
};

export const toggleTodoRequest = () => {
  return { type: TOGGLE_TODO_LOADING };
};
export const toggleTodoSuccess = (payload) => {
  return { type: TOGGLE_TODO_SUCCESS, payload };
};

export const toggleTodoFailure = () => {
  return { type: TOGGLE_TODO_FAILURE };
};



export const removeTodoRequest = () => {
  return { type: REMOVE_TODO_LOADING };
};
export const removeTodoSuccess = (payload) => {
  return { type: REMOVE_TODO_SUCCESS, payload };
};

export const removeTodoFailure = () => {
  return { type: REMOVE_TODO_FAILURE };
};
