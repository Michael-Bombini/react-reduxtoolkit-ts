import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";

import postsReducers from "../features/posts/postsSlice";
import usersReducers from "../features/users/usersSlice";

export const store = configureStore({
  reducer: {
    posts: postsReducers,
    users: usersReducers,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
