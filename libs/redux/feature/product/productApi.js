import { api } from "../../api/api";

export const productApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getHomePageProducts: builder.query({
      query: () => "/api/home-products",
    }),
  }),
});

export const { useGetHomePageProductsQuery } = productApi;
