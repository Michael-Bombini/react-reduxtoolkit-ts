//Ci sarà un singolo store per app
import { configureStore } from "@reduxjs/toolkit";

//in breve siccome lo useSelector e lo use dispatch non sono tipizzati dobbiamo importarci qui gli hook default di redux
import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";

//importiamo i reducer dei nostri slice
import counterReducer from "../features/counter/counterSlice";

export const store = configureStore({
  reducer: {
    //inseriamo come proprietà i nostri reducer con il nome e il relativo reducer
    counter: counterReducer,
  },
  devTools: true,
});

//ci creiamo i nostri tipi per redux
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

//esportiamo i nuovi hook per dispatch e selector useremo questi invece dei classici hook
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
