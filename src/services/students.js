import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const studentsApi = createApi({
  reducerPath: "studentsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.REACT_APP_SERVER_URL_LOCAL}/`,
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
          url: `boards/updateBoards`,
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
    deleteStudent: builder.mutation({
      query: (id) => {
        return {
          url: `boards/delete?id=${id}`,
          method: "DELETE",
        };
      }
    }),
  }),
});

export const {
  useGetStudentsQuery,
  useUpdateStudentsMutation,
  useSearchStudentsMutation,
  useDeleteStudentMutation,
} = studentsApi;
