import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const studentsApi = createApi({
  reducerPath: "studentsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3005/",
  }),
  endpoints: (builder) => ({
    getStudents: builder.query({
      query: (filter = "") => {
        return {
          url: `boards/${filter}`,
          method: "GET",
        };
      },
      // transformResponse: (response, meta, arg) => response.map((item => ({ ...item, key: item.id })))
      // transformResponse: (response, meta, arg) => response.map((item => ({ ...item, key: item.id })))
    }),
    updateStudents: builder.mutation({
      query: () => {
        return {
          url: `setBoards`,
          method: "GET",
        };
      }
    }),
    searchStudents: builder.mutation({
      query: (name) => {
        return {
          url: `searchBoards?name=${name}`,
          method: "GET",
        };
      }
    }),
  }),
});

export const {
  useGetStudentsQuery,
  useUpdateStudentsMutation,
  useSearchStudentsMutation,
} = studentsApi;
