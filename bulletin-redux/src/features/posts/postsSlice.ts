import { PayloadAction, createSlice } from "@reduxjs/toolkit";

//interfaccia per tipizzare il payload
interface Post {
  id: string;
  title: string;
  content: string;
}

//non accedo come nell'esercizio del counter questo perchè non ho un oggetto ma direttamente un array
const initialState = [
  {
    id: "1",
    title: "Learning Redux",
    content: "Lorem ipsum dolor",
  },
  {
    id: "1",
    title: "Learning Node",
    content: "Sit amet ipsum is",
  },
];

const postsSlice = createSlice({
  name: "post",
  initialState: initialState,
  reducers: {
    //per tipizzare il payload possiamo destrutturarlo
    postAdded: (state, { payload }: PayloadAction<Post>) => {
      //in redux toolkit possiamo mutare lo stato tranquillamente
      //questo perchè redux usa immer,js in realtà non sta mutando lo stato
      //ovviamente possiamo mutare soltanto nel createSlice
      state.push(payload);
    },
  },
});

export const { postAdded } = postsSlice.actions;
export default postsSlice.reducer;
