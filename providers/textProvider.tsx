"use client";
import { createContext, useContext, useState } from "react";

interface TextContextProps {
  text: string;
  setText: (text: string) => void;
}

const textContext = createContext({} as TextContextProps);

interface TextProviderProps {
  children: React.ReactNode;
}

export const TextProvider = ({ children }: TextProviderProps) => {
  const [text, setText] = useState("");
  return (
    <textContext.Provider value={{ text, setText }}>
      {children}
    </textContext.Provider>
  );
};

export const useText = () => {
  const { text, setText } = useContext(textContext);
  return { text, setText };
};
