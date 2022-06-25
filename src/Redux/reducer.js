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

const initialState = {
  todos: [],
  isLoading: false,
  isError: false,
};

export const TodoReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_TODO_LOADING:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case GET_TODO_SUCCESS:
      return {
        ...state,
        todos: payload,
        isLoading: false,
        isError: false,
      };
    case GET_TODO_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    case ADD_TODO_LOADING:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case ADD_TODO_SUCCESS:
      let newTodos = [...state.todos, payload];
      return {
        ...state,
        todos: newTodos,
        isLoading: false,
        isError: false,
      };
    case ADD_TODO_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    case TOGGLE_TODO_LOADING:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case TOGGLE_TODO_SUCCESS:
      let newToggleTodo = state.todos.map((item) =>
        item.id === payload.id ? payload : item
      );
      return {
        ...state,
        todos: newToggleTodo,
        isLoading: false,
        isError: false,
      };
    case TOGGLE_TODO_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
      case REMOVE_TODO_LOADING:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case REMOVE_TODO_SUCCESS:
      let deleteTodo = state.todos.filter((item)=> item.id !== payload)
      return {
        ...state,
        todos: deleteTodo,
        isLoading: false,
        isError: false,
      };
    case REMOVE_TODO_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    default:
      return state;
  }
};
