import { createSlice } from "@reduxjs/toolkit";
import { studentsApi } from '../services/students'

import { createAsyncThunk, createEntityAdapter, createApi, fetchBaseQuery } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchUserById = createAsyncThunk(
  'students/fetchUserById',
  async (filter) => {
    const response = await axios.get(`http://localhost:3005/boards/${filter}`);
    return response.data;
  }
);

const usersAdapter = createEntityAdapter();


// const initialState = {
//   javaScript: [],
//   frontEnd: [],
//   backEnd: [],
//   checkListJavaScript: [],
//   fullStack: [],
// };

const initialState = {
  loadingStatus: 'idle',
  error: null,
  searcherData: {
    javaScript: [],
    frontEnd: [],
    backEnd: [],
    checkListJavaScript: [],
    fullStack: [],
  },
  javaScript: [],
  frontEnd: [],
  backEnd: [],
  checkListJavaScript: [],
  fullStack: [],
};

export const studentsSlice = createSlice({
  name: "studentsApi",
  initialState,
  reducers: {
    searchStudents: (state, action) => {
      const s = { ...state };
      const newObj = {
        javaScript: [],
        frontEnd: [],
        backEnd: [],
        checkListJavaScript: [],
        fullStack: [],
      };
      for (const key in s) {
        key !== "loadingStatus" && key !== "error" && key !== "searcherData" && s[key].forEach(item => {
          if (item.name.includes(action.payload)) {
            newObj[key].push({ ...item })
          }
        })
      }
      Object.assign(state, { ...state, searcherData: { ...newObj } })
    },
  },
  extraReducers: (builder) => {
    builder
      // Вызывается прямо перед выполнением запроса
      .addCase(fetchUserById.pending, (state) => {
        state.loadingStatus = 'loading';
        state.error = null;
      })
      // Вызывается в том случае если запрос успешно выполнился
      .addCase(fetchUserById.fulfilled, (state, action) => {
        state.loadingStatus = 'idle';
        state.error = null;
        Object.assign(state, action.payload, { searcherData: action.payload })
      })
      // Вызывается в случае ошибки
      .addCase(fetchUserById.rejected, (state, action) => {
        state.loadingStatus = 'failed';
        // https://redux-toolkit.js.org/api/createAsyncThunk#handling-thunk-errors
        state.error = action.error;
      });
  },
});

export const { searchStudents } = studentsSlice.actions;

export default studentsSlice.reducer;
