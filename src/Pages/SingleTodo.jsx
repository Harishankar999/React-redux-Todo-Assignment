import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  removeTodoFailure,
  removeTodoRequest,
  removeTodoSuccess,
  toggleTodoFailure,
  toggleTodoRequest,
  toggleTodoSuccess,
} from "../Redux/action";

function SingleTodo() {
  const navigate = useNavigate();
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const { id } = useParams();
  const [currentTodo, setCurrentTodo] = useState({});

  const removeTodo = (id) => {
    dispatch(removeTodoRequest());
    axios
      .delete(`/todo/${id}`)
      .then((res) => {
        dispatch(removeTodoSuccess(res.data));
        navigate("/");
      })
      .catch((err) => dispatch(removeTodoFailure(err)));
  };

  useEffect(() => {
    let currentTodo = todos.find((item) => item.id === Number(id));
    currentTodo && setCurrentTodo(currentTodo);
  }, [todos, id]);

  const toggleStatus = (id, newStatus) => {
    dispatch(toggleTodoRequest());
    axios
      .patch(`/todo/${id}`, { status: newStatus })
      .then((res) => dispatch(toggleTodoSuccess(res.data)))
      .catch((err) => dispatch(toggleTodoFailure(err)));
  };
  return (
    <div>
      <h3>
        {currentTodo?.title}
        {currentTodo?.status ? "True" : "False"}
      </h3>
      <button onClick={() => toggleStatus(currentTodo.id, !currentTodo.status)}>
        Toggle
      </button>
      <button onClick={() => removeTodo(currentTodo.id)}></button>
      <Link to={`/todo/${currentTodo.id}/edit`}>
        <button>Edit</button>
      </Link>
    </div>
  );
}

export default SingleTodo;
