import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const headers = {
  Authorization: `Bearer ${process.env.REACT_APP_TOKEN}`,
};

export const toDoApi = createApi({
  reducerPath: "toDoApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_URL,
  }),
  tagTypes: ["Todos"],
  endpoints: (builder) => ({
    getToDos: builder.query({
      query: () => {
        return {
          url: `todos`,
          method: "GET",
          headers,
        };
      },
      providesTags: ["Todos"],
      transformErrorResponse: (response, meta, arg) => response.status,
    }),
    createToDo: builder.mutation({
      query: (body) => {
        return {
          url: `todos`,
          method: "POST",
          headers,
          body: body,
        };
      },
      invalidatesTags: ["Todos"],
    }),
    deleteToDo: builder.mutation({
      query: (id) => {
        return {
          url: `todos/${id}`,
          method: "DELETE",
          headers,
        };
      },
      invalidatesTags: ["Todos"],
      transformResponse: (response, meta, arg) => response.data,
      transformErrorResponse: (response, meta, arg) => response.status,
    }),
    toggleToDo: builder.mutation({
      query: (id) => {
        return {
          url: `todos/${id}/isCompleted`,
          method: "PATCH",
          headers,
        };
      },
      invalidatesTags: ["Todos"],
      transformResponse: (response, meta, arg) => response.data,
      transformErrorResponse: (response, meta, arg) => response.status,
    }),
    editToDo: builder.mutation({
      query: ({ id, newTitle }) => {
        return {
          url: `todos/${id}`,
          method: "PATCH",
          headers,
          body: {
            title: newTitle,
          },
        };
      },
      invalidatesTags: ["Todos"],
      transformResponse: (response, meta, arg) => response.data,
      transformErrorResponse: (response, meta, arg) => response.status,
    }),
  }),
});

export const {
  useGetToDosQuery,
  useCreateToDoMutation,
  useDeleteToDoMutation,
  useToggleToDoMutation,
  useEditToDoMutation,
} = toDoApi;
