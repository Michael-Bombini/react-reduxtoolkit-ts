//Il thunk in programmazione indica un pezzo di codice che svolge un lavoro che può essere in ritardo

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Post } from "../../models/Post";
const POSTS_URL = "https://jsonplaceholder.typicode.com/posts";

interface PostState {
  posts: Post[];
  status: "idle" | "loading" | "succeded" | "failed";
  error: string | undefined;
}
const initialState: PostState = {
  posts: [],
  status: "idle",
  error: undefined,
};

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
  const response = await axios.get(POSTS_URL);
  return response.data;
});

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = "succeded";
        state.posts = action.payload;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default postsSlice.reducer;
