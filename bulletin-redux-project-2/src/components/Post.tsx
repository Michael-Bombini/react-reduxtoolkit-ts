interface Props {
  title: string;
  content: string;
}

export default function Post({ title, content }: Props) {
  return (
    <div className="post">
      <div className="post-title">{title}</div>
      <div className="post-content">{content}</div>
    </div>
  );
}
