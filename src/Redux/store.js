import { legacy_createStore } from "redux";
import { TodoReducer } from "./reducer";

export const store = legacy_createStore(TodoReducer);
