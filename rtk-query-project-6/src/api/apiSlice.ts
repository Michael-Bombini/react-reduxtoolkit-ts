import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Todo } from "../models/Todo";

//funziona come il createSlice
export const apiSlice = createApi({
  reducerPath: "api",
  tagTypes: ["Todos"],
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3500" }),
  //definiamo i nostri endpoint
  //e utilizziamo il builder come per gli async thunk  .addCase per cachare i dati ottenuti
  endpoints: (builder) => ({
    //i parametri dei tipi nel generic sono questi:
    //il primo cosa riceviamo come response
    //il secondo cosa gli passiamo come payload
    getTodos: builder.query<Todo[], void>({
      query: () => "/todos",
      transformResponse: (res: Todo[]) => res.sort((a, b) => b.id - a.id),
      //i tag ci servono per gestire la cache quando modifichiamo dei dati
      providesTags: ["Todos"],
    }),
    addTodos: builder.mutation<Todo, Omit<Todo, "id">>({
      query: (todo) => ({
        url: "/todos",
        method: "POST",
        body: todo,
      }),
      //invalidiamo i tag quando andiamo a mutare i dati in modo da non usare quelli in cache
      invalidatesTags: ["Todos"],
    }),
    updateTodo: builder.mutation<Todo, Omit<Todo, "userId" | "title">>({
      query: (todo) => ({
        url: `/todos/${todo.id}`,
        method: "PATCH",
        body: todo,
      }),
      //invalidiamo i tag quando andiamo a mutare i dati in modo da non usare quelli in cache
      invalidatesTags: ["Todos"],
    }),
    deleteTodo: builder.mutation<Todo, Pick<Todo, "id">>({
      query: (todo) => ({
        url: `/todos/${todo.id}`,
        method: "DELETE",
        body: todo,
      }),
      //invalidiamo i tag quando andiamo a mutare i dati in modo da non usare quelli in cache
      invalidatesTags: ["Todos"],
    }),
  }),
});

//RTK Query ci fornisce un hook che viene chiamato useNomeMetodoQuery per gestire i dati
//quindi avendo getTodos otteniamo useGetTodosQuery
//invece avendo una mutazione otteniamo useNomeMetodoMutation
//quindi avendo addTodos otteniamo useAddTodosMutation
//otteniamo da esso {data, isLoading, isSuccess, isError, error}
export const {
  useGetTodosQuery,
  useAddTodosMutation,
  useUpdateTodoMutation,
  useDeleteTodoMutation,
} = apiSlice;
