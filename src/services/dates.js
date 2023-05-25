import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const datesApi = createApi({
  reducerPath: "datesApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3005/",
  }),
  endpoints: (builder) => ({
    getDates: builder.query({
      query: () => {
        return {
          url: `dates`,
          method: "GET",
        };
      },
    }),
  }),
});

export const {
  useGetDatesQuery,
} = datesApi;
