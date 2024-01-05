"use client";
import { createContext, useContext, useState } from "react";

interface PostDataProps {
  postData: (formData: FormData) => Promise<any> ;
  loading: boolean;
  error: any;
}

const textContext = createContext({} as PostDataProps);

interface TextProviderProps {
  children: React.ReactNode;
}

export const FetchProvider = ({ children }: TextProviderProps) => {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<any>(null)
    const [ data, setData ] = useState<any>("");

    const postData = async (formData: FormData) => {
      setLoading(true)

      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_URL_API_ORC}/image`, {
          method: "POST",
          body: formData,
        });
  
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
  
        const result = await response.json();
        setData(result);
        return result; 
  
      } catch (err) {
        setError(err);
        throw err;
      } finally {
        setLoading(false);
      }
    };
  
    return (
        <textContext.Provider value={{ postData,  error, loading }}>
            {children}
        </textContext.Provider>
    );
};

export const useFetch = () => {
  const { error, loading, postData } = useContext(textContext);
  return { error, loading, postData };
};
