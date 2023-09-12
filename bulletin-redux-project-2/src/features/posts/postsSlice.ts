import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { sub } from "date-fns";

//interfaccia per tipizzare il payload
interface Post {
  id: string;
  title: string;
  content: string;
  userId?: string;
  date: string;
  reaction: {
    thumbsUp: number;
    heart: number;
  };
}

interface AddReaction {
  postId: string;
  reaction: "thumbsUp" | "heart";
}

//non accedo come nell'esercizio del counter questo perchè non ho un oggetto ma direttamente un array
const initialState: Post[] = [
  {
    id: "1",
    title: "Learning Redux",
    content: "Lorem ipsum dolor",
    userId: "1",
    date: sub(new Date(), { minutes: 10 }).toISOString(),
    reaction: {
      thumbsUp: 0,
      heart: 0,
    },
  },
  {
    id: "2",
    title: "Learning Node",
    content: "Sit amet ipsum is",
    date: sub(new Date(), { days: 7, minutes: 37 }).toISOString(),
    reaction: {
      thumbsUp: 0,
      heart: 0,
    },
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
    addReaction: (state, { payload }: PayloadAction<AddReaction>) => {
      const { postId, reaction } = payload;
      const selectedPost = state.find((post) => post.id === postId);
      if (selectedPost) {
        selectedPost.reaction[reaction]++; // Possiamo mutare sempre grazie ad immer js
      }
    },
    
  },
});

export const { postAdded, addReaction } = postsSlice.actions;
export default postsSlice.reducer;
