import { useText } from "@/providers/textProvider";
import { FormEvent, ReactNode } from "react";

type FormProps = {
  imageFile: File;
  children: ReactNode;
};

export const Form = ({ imageFile, children }: FormProps) => {
  const { setText } = useText();
  async function handleSubmitImage(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const formData = new FormData();
    formData.append("file", imageFile);

    try {
      const response = await fetch("http://localhost:3333/image", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      setText(data);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <form
      className="flex flex-col w-[45%]"
      onSubmit={(e) => handleSubmitImage(e)}
    >
      {children}
    </form>
  );
};
