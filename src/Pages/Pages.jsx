import React from "react";
import { Route, Routes } from "react-router-dom";
import Edit from "./Edit";
import Home from "./Home";
import SingleTodo from "./SingleTodo";

function Pages() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/todo/:id" element={<SingleTodo />} />
        <Route path="/todo/:id/edit" element={<Edit />} />
      </Routes>
    </div>
  );
}

export default Pages;
