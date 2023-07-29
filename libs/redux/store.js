import { configureStore } from "@reduxjs/toolkit";
import { api } from "./api/api";
import builderReducer from "./feature/pcBuild/pcBuildSlice";
export const store = configureStore({
  reducer: {
    builder: builderReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});
