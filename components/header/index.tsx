export const Header = () => {
  return (
    <header className="z-10 sticky flex top-0 border-solid border-b border-gray-800 w-full  h-[clamp(60px,10vw,80px)] bg-background text-2xl">
      <span className="flex items-center justify-center sm:justify-start w-full max-w-[78%] relative mx-auto text-gray-200">
        <p className="relative flex text-violet-500">to </p>
        <span className=" text-gray-200 font-bold font-serif px-1">text</span>
      </span>
    </header>
  );
};
