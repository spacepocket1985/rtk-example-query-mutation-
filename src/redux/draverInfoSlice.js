import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  activeBoard: {}
};

export const draverInfoSlice = createSlice({
  name: "text",
  initialState,
  reducers: {
    addActivBoard: (state, action) => {
      console.log(action.payload);
      Object.assign(state.activeBoard, action.payload)
    },
  },
});

export const { addActivBoard } = draverInfoSlice.actions;

export default draverInfoSlice.reducer;
