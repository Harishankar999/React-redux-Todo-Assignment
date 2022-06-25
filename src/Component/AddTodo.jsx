import axios from "axios";
import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  addTodoFailure,
  addTodoRequest,
  addTodoSuccess,
} from "../Redux/action";

function AddTodo() {
  const dispatch = useDispatch();
  const [todo, setTodo] = useState("");

  const addTodo = (payload) => {
    dispatch(addTodoRequest());
    axios
      .post("/todo", payload)
      .then((res) => dispatch(addTodoSuccess(res.data)))
      .catch((err) => dispatch(addTodoFailure(err)));
  };

  const handleAdd = () => {
    if (todo) {
      const payload = { title: todo, status: false };
      addTodo(payload);
      setTodo("");
    }
  };

  return (
    <div>
      <h3>ADD TODO</h3>
      <input
        onChange={(e) => setTodo(e.target.value)}
        placeholder="Add Your Todo Here..."
        type="text"
        value={todo}
      />
      <button onClick={handleAdd}>ADD</button>
    </div>
  );
}

export default AddTodo;
