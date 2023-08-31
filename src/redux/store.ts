import { configureStore } from "@reduxjs/toolkit";
import { api } from "./api/apiSlice";
import filterReducer from "./features/filter/filterSlice";

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    filter: filterReducer,
  },

  middleware: (getDefauultMiddleware) =>
    getDefauultMiddleware().concat(api.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
