import { FilePlus2 } from "lucide-react";
import { Button } from "../ui/button";
import { Dispatch, SetStateAction, useRef } from "react";
import { renderImg } from "@/utils";
import { ImageProps } from "../boxImage";

type ContentImageBoxProps = {
  setImageDropped: Dispatch<SetStateAction<ImageProps>>;
  imageDropped: ImageProps;
  setImageFile: Dispatch<SetStateAction<File>>;
};

export const ContentImageBox = ({
  setImageDropped,
  setImageFile,

  imageDropped,
}: ContentImageBoxProps) => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  function handlePutFile() {
    inputRef.current?.click();
  }

  function onHandleChange() {
    if (inputRef.current?.files) {
      renderImg(inputRef.current.files[0], setImageDropped, setImageFile);
    }
  }

  return (
    <>
      <FilePlus2 size={40} />
      <p className="text-center leading-relaxed">
        Arraste a imagem pra cá...
        <br />
        ou clique no botão para adicionar a foto
      </p>
      <Button type="button" onClick={handlePutFile} variant={"secondary"}>
        Adicionar arquivo
      </Button>
      <input
        ref={inputRef}
        type="file"
        className="hidden"
        onChange={onHandleChange}
      />
    </>
  );
};
