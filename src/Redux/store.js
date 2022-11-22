import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";

import musicsfrom from "./datalist";
const reducer = combineReducers({
  dataAll: musicsfrom,
});

const store = configureStore({
  reducer,
});

export default store;
