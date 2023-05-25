import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "",
};

export const searchSlice = createSlice({
  name: "text",
  initialState,
  reducers: {
    enterText: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { enterText } = searchSlice.actions;

export default searchSlice.reducer;
