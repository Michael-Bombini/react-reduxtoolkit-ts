import { useAppSelector } from "../store/store";
import Post from "./Post";

export default function PostsList() {
  const posts = useAppSelector((state) => state.posts);
  return (
    <div className="container">
      <h1>Post List</h1>
      {posts.map((post) => {
        return (
          <Post
            key={post.id}
            title={post.title}
            content={post.content}
            userId={post.userId}
            date={post.date}
            postId={post.id}
            reaction={post.reaction}
          />
        );
      })}
    </div>
  );
}
