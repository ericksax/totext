"use client";
import { useText } from "@/providers/textProvider";
import { Button } from "../ui/button";
import { BarLoader } from "react-spinners"
import { useFetch } from "@/providers/FetchProvider";
import toast, { Toaster } from "react-hot-toast";
export const BoxText = () => {
  const { text } = useText();
  const { loading, error } = useFetch()

  const copytext = (text: string) => {
    navigator.clipboard.writeText(text)
    toast('Texto copiado',
  {
    icon: '👏',
    position: 'bottom-right',
    duration: 3000,
   

    style: {
      borderRadius: '8px',
      background: 'black',
      border: '1px solid #1F2937',
      color: '#fff',
      padding: '24px',
    },
  }
);
  }

  return (
    <div className="flex flex-col  w-full gap-4">
      <section className="flex justify-center items-center p-4 h-96 rounded border-solid border border-gray-800">
 
       { error ? (
          <p>
            Um erro aconteceu, tente mais tarde!
          </p>
        ) : !loading  ? (
          <article>
            <p>{text}</p>
          </article>
        ) : (
          <div className="flex flex-col items-center justify-center gap-2">
            <p>Extraindo...</p>
            <BarLoader color="#7C3AED" />
          </div>
        )
       }
      </section>
      <Button 
        className="disabled:hover:bg-black disabled🇦🇫 disebled:hover:text-white" 
        variant={"outline"} 
        disabled={!text} 
        onClick={() => copytext(text)}
        >
          Copiar
        </Button>
        <Toaster/>
    </div>
  );
};
