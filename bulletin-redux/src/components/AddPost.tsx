import { useState } from "react";
import { useAppDispatch } from "../store/store";
import { postAdded } from "../features/posts/postsSlice";
interface Post {
  id: string;
  title: string;
  content: string;
}

export default function AddPost() {
  const dispatch = useAppDispatch();
  const [form, setForm] = useState<Post>({
    id: "",
    title: "",
    content: "",
  });

  function submitHandler(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setForm({ ...form, id: Math.random().toString() });
    dispatch(postAdded(form));
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
      <button>Add Post</button>
    </form>
  );
}
