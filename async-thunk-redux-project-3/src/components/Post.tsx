import { Post } from "../models/Post";
import { useAppSelector } from "../store/store";

type Props = Omit<Post, "id">;

export default function Post({ title, body, userId }: Props) {
  const users = useAppSelector((state) => state.users.users);

  const user = users.find((user) => user.id === userId);
  console.log(user);

  return (
    <div className="post-card">
      <h1>{title}</h1>
      <p>{body}</p>
      <h3> {user?.name}</h3>
    </div>
  );
}
