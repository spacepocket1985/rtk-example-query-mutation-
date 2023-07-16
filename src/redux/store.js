import { configureStore } from "@reduxjs/toolkit";
import { studentsApi } from "../services/students";
import { datesApi } from "../services/dates";
import { statisticsApi } from "../services/pieChart";
import { checkListsApi } from "../services/checkLists";
import searchSlice from "./searchSlice";
import studentsSlice from "./studentsSlice";
import draverInfoSlice from "./draverInfoSlice";
export const store = configureStore({
  reducer: {
    studentsSlice: studentsSlice,
    searchText: searchSlice,
    draverInfoSlice: draverInfoSlice,
    [studentsApi.reducerPath]: studentsApi.reducer,
    [datesApi.reducerPath]: datesApi.reducer,
    [checkListsApi.reducerPath]: checkListsApi.reducer,
    [statisticsApi.reducerPath]: statisticsApi.reducer,
  }
});
