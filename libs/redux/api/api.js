// Need to use the React-specific entry point to import createApi
import {
  createApi,
  fetchBaseQuery,
} from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const api = createApi({
  reducerPath: "api",
  tagTypes: ["book", "singleBook"],
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.NEXT_FRONTEND_BASE_URL}/api`,
  }),
  endpoints: () => ({}),
});
