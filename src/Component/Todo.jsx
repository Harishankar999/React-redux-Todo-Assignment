import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getTodoFailure,
  getTodoRequest,
  getTodoSuccess,
} from "../Redux/action";
import axios from "axios";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";
function Todo() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);
  const getTodos = () => {
    dispatch(getTodoRequest());
    axios
      .get("/todo")
      .then((res) => dispatch(getTodoSuccess(res.data)))
      .catch((err) => dispatch(getTodoFailure(err)));
  };

  useEffect(() => {
    if (todos?.length === 0) {
      getTodos();
    }
  }, []);
  // console.log(todos)
  return (
    <div>
      <h3>Todo</h3>
      <AddTodo />
      <TodoList todoList={todos} />
    </div>
  );
}

export default Todo;
