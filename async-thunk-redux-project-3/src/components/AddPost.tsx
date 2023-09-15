import { useState } from "react";
import { useAppDispatch } from "../store/store";
import { addPost } from "../features/posts/postsSlice";
import { Post } from "../models/Post";

export default function AddPost() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const dispatch = useAppDispatch();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData: Post = {
      title,
      body: content,
      id: Math.floor(Math.random()),
      userId: Math.floor(Math.random() * 9) + 1,
    };
    dispatch(addPost(formData));
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="title"
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="content"
        onChange={(e) => setContent(e.target.value)}
      />
      <button>Add Post</button>
    </form>
  );
}
