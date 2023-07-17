import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "",
};

export const textSlice = createSlice({
  name: "text",
  initialState,
  reducers: {
    enterText: (state, action) => {
      console.log(action);
      state.value = action.payload;
    },
  },
});

export const { enterText } = textSlice.actions;

export default textSlice.reducer;
