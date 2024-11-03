import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "../features/api/apiSlice";

export const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
    },
    //access the default rtk middleware at first. 
    //then add the apiSlice middleware.
    //why concat? because middle is a property that contains an array of middlewares. if we directly write apiSlice.middleware, it will replace the default middlewares and keep the apiSlice.middlewares only. So, we first bring the default middlewares and concat the apiSlice.middleware with the existing array of middlewares.
    middleware: (getDefaultMiddlewares) =>
        getDefaultMiddlewares().concat(apiSlice.middleware),
});
