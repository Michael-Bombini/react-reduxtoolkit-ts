import { formatDistanceToNow, parseISO } from "date-fns";
import { useAppDispatch, useAppSelector } from "../store/store";
import { addReaction } from "../features/posts/postsSlice";

interface Props {
  title: string;
  content: string;
  userId?: string;
  date: string;
  postId: string;
  reaction: {
    thumbsUp: number;
    heart: number;
  };
}

export default function Post({ title, content, userId, date, postId, reaction }: Props) {
  const dispatch = useAppDispatch();

  const users = useAppSelector((state) => state.users);
  const user = users.find((user) => user.id === userId);

  return (
    <div className="post">
      <div className="post-title">{title}</div>
      <div className="post-content">{content}</div>
      <h2>{user?.name ? user?.name : "Unknown Author"}</h2>
      <h3>{formatDistanceToNow(parseISO(date))} Ago </h3>
      <span
        onClick={() =>
          dispatch(addReaction({ postId: postId, reaction: "heart" }))
        }
      >
        &#9829;
      {reaction.heart}
      </span>
      <span
        onClick={() =>
          dispatch(addReaction({ postId: postId, reaction: "thumbsUp" }))
        }
      >
        &#128077;
      </span>
      {reaction.thumbsUp}
    </div>
  );
}
