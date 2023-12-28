"use client";

import {
  ReactNode,
  useContext,
  createContext,
  MutableRefObject,
  useRef,
} from "react";

type SubmitContextProps = {
  submitRef: MutableRefObject<null | HTMLButtonElement>;
};

const submitContext = createContext<SubmitContextProps>(
  {} as SubmitContextProps
);

type SubmitContextProviderProps = {
  children: ReactNode;
};

export function SubmitProvider({ children }: SubmitContextProviderProps) {
  const submitRef = useRef(null);
  return (
    <submitContext.Provider value={{ submitRef }}>
      {children}
    </submitContext.Provider>
  );
}

export function useButtonSubmitRef() {
  const { submitRef } = useContext(submitContext);
  return {
    submitRef,
  };
}
