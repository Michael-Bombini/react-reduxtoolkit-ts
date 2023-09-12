import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../store/store";
import { postAdded } from "../features/posts/postsSlice";
import { nanoid } from "@reduxjs/toolkit";
interface Post {
  title: string;
  content: string;
  userId?: string;
}

export default function AddPost() {
  const users = useAppSelector((state) => state.users);
  const dispatch = useAppDispatch();

  const [form, setForm] = useState<Post>({
    title: "",
    content: "",
    userId: "",
  });

  function submitHandler(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (form.title && form.content) {
      dispatch(
        postAdded({
          ...form,
          id: nanoid(),
          date: new Date().toISOString(),
          reaction: {
            thumbsUp: 0,
            heart: 0,
          },
        })
      );
    }
  }

  return (
    <form className="container" onSubmit={submitHandler}>
      <input
        type="text"
        onChange={(e) => setForm({ ...form, title: e.target.value })}
        placeholder="title"
      />
      <input
        type="text"
        onChange={(e) => setForm({ ...form, content: e.target.value })}
        placeholder="content"
      />
      <h1>{form.userId} </h1>

      <select
        name=""
        id=""
        onChange={(e) => setForm({ ...form, userId: e.target.value })}
      >
        {users.map((user) => (
          <option value={user.id} key={user.id}>
            {user.name}
          </option>
        ))}
      </select>
      <button>Add Post</button>
    </form>
  );
}
