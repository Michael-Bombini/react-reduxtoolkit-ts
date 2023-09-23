import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
import cartReducer from "./slices/cartSlice";
import { apiSlice } from "../api/apliSlice";
import modalReducer from "./slices/modalSlice";

export const store = configureStore({
  reducer: {
    //per usare RTK Query e usare contemporaneamente lo store dobbiamo importare in questo modo i reducer
    [apiSlice.reducerPath]: apiSlice.reducer,
    cart: cartReducer,
    modal: modalReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware)
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;