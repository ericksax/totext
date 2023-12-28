"use client";
import { useText } from "@/providers/textProvider";
import { Button } from "../ui/button";

export const BoxText = () => {
  const { text } = useText();
  return (
    <div className="flex flex-col w-[45%] gap-4">
      <section className="flex justify-center items-center p-4 h-96 rounded border-solid border border-gray-800">
        <article>
          <p>{text}</p>
        </article>
      </section>
      <Button variant={"outline"}>Copiar</Button>
    </div>
  );
};
