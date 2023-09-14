import { fetchPosts } from "../features/posts/postsSlice";
import { useAppDispatch, useAppSelector } from "../store/store";
import { useEffect } from "react";
import Post from "./Post";
import { fetchUsers } from "../features/users/usersSlice";

export default function PostList() {
  const dispatch = useAppDispatch();
  //faccio in modi diversi per usare entrambe le vie dei selector funzione scomposta e fornendo lo stato intero
  const posts = useAppSelector((state) => state.posts.posts);
  const statusPosts = useAppSelector((state) => state.posts.status);
  const statusUsers = useAppSelector((state) => state.users.status);
  const error = useAppSelector((state) => state.posts.error);

  useEffect(() => {
    if (statusPosts === "idle" && statusUsers === "idle") {
      dispatch(fetchPosts());
      dispatch(fetchUsers());
    }
  }, [status, dispatch]);

  if (error) {
    return <h1>C'è stato un ERRORE!!!</h1>;
  }
  if (status === "loading") {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      {posts.map((post) => (
        <Post
          key={post.id}
          title={post.title}
          body={post.body}
          userId={post.userId}
        />
      ))}
    </div>
  );
}
