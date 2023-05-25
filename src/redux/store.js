import { configureStore } from "@reduxjs/toolkit";
import { studentsApi } from "../services/students";
import { datesApi } from "../services/dates";
import searchSlice from "./searchSlice";
import studentsSlice from "./studentsSlice";

export const store = configureStore({
  reducer: {
    studentsSlice: studentsSlice,
    searchText: searchSlice,
    [studentsApi.reducerPath]: studentsApi.reducer,
    [datesApi.reducerPath]: datesApi.reducer,
  }
});
