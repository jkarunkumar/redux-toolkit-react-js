import { createSlice } from "@reduxjs/toolkit";

// Slice
const initialState = {
  allData: "",
  selectData: "",
};

const slice = createSlice({
  name: "users",
  initialState: initialState,

  reducers: {
    getAllDataSuccess: (state, action) => {
      state.allData = action.payload;
    },
    getSelectDataSuccess: (state, action) => {
      state.selectData = action.payload;
    },
  },
});

export default slice.reducer;

// Actionsss

export const { getAllDataSuccess, getSelectDataSuccess } = slice.actions;

export const getAllData = (data) => async (dispatch) => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const getResponse = await response.json();
    dispatch(getAllDataSuccess(getResponse));
    return response;
  } catch (e) {
    return console.error(e.message);
  }
};

export const getSelectData = (data) => async (dispatch) => {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${data}`
    );

    const getResponse = await response.json();
    console.log(getResponse, "addData");
    dispatch(getSelectDataSuccess(getResponse));
    return response;
  } catch (e) {
    return console.error(e.message);
  }
};
