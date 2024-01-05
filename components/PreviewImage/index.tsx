import { ImageProps } from "../boxImage";
import Image from "next/image";
type PreviewImageProps = {
  imageDropped: ImageProps;
};

export const PreviewImage = ({ imageDropped }: PreviewImageProps) => {
  return (
    <Image
      className="bg-cover max-w-full max-h-full"
      layout="responsive"
      width={800}
      height={600}
      src={imageDropped.preview}
      alt={imageDropped.name}
    />
  );
};
