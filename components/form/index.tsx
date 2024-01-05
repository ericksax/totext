import { useFetch } from "@/providers/FetchProvider";
import { useText } from "@/providers/textProvider";
import { FormEvent, ReactNode } from "react";

type FormProps = {
  imageFile: File;
  children: ReactNode;
};

export const Form = ({ imageFile, children }: FormProps) => {
  const { setText } = useText();
  const { postData } = useFetch();
  async function handleSubmitImage(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const formData = new FormData();
    formData.append("file", imageFile);
    
    try {
      const data = await postData(formData)
      setText(data);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <form
      className="flex flex-col w-full"
      onSubmit={(e) => handleSubmitImage(e)}
    >
      {children}
    </form>
  );
};
