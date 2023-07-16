import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const checkListsApi = createApi({
  reducerPath: "checkListsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.REACT_APP_SERVER_URL_LOCAL}/`,
  }),
  endpoints: (builder) => ({
    getCheckLists: builder.query({
      query: (id) => {
        return {
          url: `checkLists?id=${id}`,
          method: "GET",
        };
      },
    }),
  }),
});

export const {
  useGetCheckListsQuery,
} = checkListsApi;
