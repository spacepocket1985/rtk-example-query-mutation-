import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const statisticsApi = createApi({
  reducerPath: "statisticsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.REACT_APP_SERVER_URL_LOCAL}/`,
  }),
  endpoints: (builder) => ({
    getStatistics: builder.query({
      query: () => {
        return {
          url: `boards/statistics`,
          method: "GET",
        };
      },
    }),
  }),
});

export const {
  useGetStatisticsQuery,
} = statisticsApi;
