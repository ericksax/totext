import { ImageProps } from "../boxImage";

type PreviewImageProps = {
  imageDropped: ImageProps;
};

export const PreviewImage = ({ imageDropped }: PreviewImageProps) => {
  return (
    <img
      className="bg-cover max-w-full max-h-full"
      src={imageDropped.preview}
      alt={imageDropped.name}
    />
  );
};
