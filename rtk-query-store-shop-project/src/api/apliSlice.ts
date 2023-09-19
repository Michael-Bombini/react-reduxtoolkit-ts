import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ProductResponse } from "../models/Product";

export const apiSlice = createApi({
  reducerPath: "api",
  tagTypes: ["Products"],
  baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com" }),
  endpoints: (builder) => ({
    //i parametri dei tipi nel generic sono questi:
    //il primo cosa riceviamo come response
    //il secondo cosa gli passiamo come payload
    getProducts: builder.query<ProductResponse, void>({
      query: () => "/products",
      //i tag ci servono per gestire la cache quando modifichiamo dei dati
      providesTags: ["Products"],
    }),
  }),
});

//RTK Query ci crea degli hook per le nostre query/mutation
export const { useGetProductsQuery } = apiSlice;
