import { Wand2 } from "lucide-react";
import { BoxImage } from "@/components/boxImage";
import { BoxText } from "@/components/boxText";
import { Footer } from "@/components/footer";
import { SubmitProvider } from "@/hook/useButtonSubmitRef";

export default function Home() {
  return (
    <SubmitProvider>
      <main className="p-4 flex w-full flex-col">
        <header className="flex w-full items-center justify-center h-20 text-2xl">
          <h1>Extraia o texto de uma imagem </h1> <Wand2 className="ml-4" />
        </header>
        <div className="w-[1216px] flex justify-center mx-auto gap-4 flex-wrap">
          <BoxImage />
          <BoxText />
        </div>
        <Footer />
      </main>
    </SubmitProvider>
  );
}
