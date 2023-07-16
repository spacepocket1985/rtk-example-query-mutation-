import { createSlice } from "@reduxjs/toolkit";
import { studentsApi } from '../services/students'
import { inactiveStudentFnc } from '../helpers/inactiveStudents'

import { createAsyncThunk, createEntityAdapter, createApi, fetchBaseQuery } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchUserById = createAsyncThunk(
  'students/fetchUserById',
  async (filter) => {
    console.log(filter);
    const response = await axios.get(`${process.env.REACT_APP_SERVER_URL_LOCAL}/boards/getBoardsFiltered?filter=${filter}`);
    return response.data;
  }
);

export const fetchInactiveBoards = createAsyncThunk(
  'students/fetchInactiveBoards',
  async (days) => {
    console.log(days);
    const response = await axios.get(`${process.env.REACT_APP_SERVER_URL_LOCAL}/boards/inactive/${days}`);
    return response.data;
  }
);


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
    inactiveStudents: (state, action) => {
      const s = { ...state };
      const newObj = {
        javaScript: [],
        frontEnd: [],
        backEnd: [],
        checkListJavaScript: [],
        fullStack: [],
        admin: [],
      };
      for (const key in s) {
        console.log(key);
        key !== "loadingStatus" && key !== "error" && key !== "searcherData" && s[key].forEach(item => {
          if (inactiveStudentFnc(item.dateLastActivity, action.payload)) {
            newObj[key].push({ ...item })
          }
        })
      }
      Object.assign(state, { ...state, searcherData: { ...newObj } })
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserById.pending, (state) => {
        state.loadingStatus = 'loading';
        state.error = null;
      })
      .addCase(fetchUserById.fulfilled, (state, action) => {
        state.loadingStatus = 'idle';
        state.error = null;
        Object.assign(state, action.payload, { searcherData: action.payload })
      })
      .addCase(fetchUserById.rejected, (state, action) => {
        state.loadingStatus = 'failed';
        state.error = action.error;
      })
  },
});

export const { searchStudents, inactiveStudents } = studentsSlice.actions;

export default studentsSlice.reducer;
