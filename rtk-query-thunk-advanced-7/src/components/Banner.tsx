interface Props {
  thumbnail: string | null;
}

export default function Banner({ thumbnail }: Props) {
  return (
    <div className="container mx-auto">
      {thumbnail && (
        <img
          className="w-full object-contain"
          src={thumbnail}
          alt="Thumbnail"
        />
      )}
    </div>
  );
}
