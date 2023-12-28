"use client";
import { DragEvent, useState } from "react";
import { renderImg } from "@/utils";
import { ContentImageBox } from "../ContentImageBox";
import { PreviewImage } from "../PreviewImage";
import { Button } from "../ui/button";
import { Form } from "../form";
import { ImageOffIcon } from "lucide-react";
export type ImageProps = {
  name: string;
  size: number;
  preview: any;
};

export const BoxImage = () => {
  const [imageDropped, setImageDropped] = useState({} as ImageProps);
  const [imageFile, setImageFile] = useState({} as File);

  function handleDragOver(e: DragEvent<HTMLElement>) {
    e.preventDefault();
    document.querySelector("#fileBox")?.classList.add("!border-solid");
  }

  function handleDragLeave(e: DragEvent<HTMLElement>) {
    e.preventDefault();
    document.querySelector("#fileBox")?.classList.remove("!border-solid");
  }

  function handleDrop(event: DragEvent<HTMLElement>) {
    event.preventDefault();
    renderImg(event.dataTransfer.files[0], setImageDropped, setImageFile);
  }

  return (
    <Form imageFile={imageFile}>
      <section
        className="relative flex flex-col gap-4 justify-center items-center p-4 h-96 border-2 border-dashed border-gray-800 text-gray-700 overflow-hidden bg-cover"
        onDrop={(e) => handleDrop(e)}
        onDragOver={(e) => handleDragOver(e)}
        onDragLeave={(e) => handleDragLeave(e)}
        id="fileBox"
      >
        {imageDropped.name ? (
          <PreviewImage imageDropped={imageDropped} />
        ) : (
          <ContentImageBox
            setImageDropped={setImageDropped}
            setImageFile={setImageFile}
            imageDropped={imageDropped}
          />
        )}
        {imageDropped.name ? (
          <Button
            type="button"
            variant="default"
            className="flex items-center justify-center absolute bottom-2 right-2 p-2 hover:bg-gray-800"
            onClick={() => setImageDropped({} as ImageProps)}
          >
            <ImageOffIcon />
          </Button>
        ) : null}
      </section>
      <Button
        variant="default"
        type="submit"
        className=" mt-4 bg-violet-500 hover:bg-violet-600"
        disabled={imageDropped.preview ? false : true}
      >
        Extrair texto
      </Button>
    </Form>
  );
};
