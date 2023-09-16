import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

//funziona come il createSlice
export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3500/todos" }),
  //definiamo i nostri endpoint
  //e utilizziamo il builder come per gli async thunk  .addCase per cachare i dati ottenuti
  endpoints: (builder) => ({
    getTodos: builder.query({
      query: () => "/todos",
    }),
  }),
});

export const { useGetTodosQuery } = apiSlice;
