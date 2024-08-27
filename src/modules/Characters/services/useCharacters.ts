import { useEffect, useRef, useState } from "react";
import { Data } from "../types";

//TODO: PAGE, NAME, DEBOUNCE

const useCharacters = () => {
  const [error, setError] = useState();

  const [isLoading, setIsLoading] = useState(false);

  const [characters, setCharacters] = useState<Data>();

  const [nameCharacter, setNameCharacter] = useState<string>("");

  const abortControllerRef = useRef<AbortController | null>(null);

  const [page, setPage] = useState(0);

  const BASE_API_URL = import.meta.env.VITE_MARVEL_BASE_API_URL;

  const KEY = import.meta.env.VITE_API_PUBLIC_KEY;

  useEffect(() => {
    const debounceTimeout = setTimeout(() => {
      const fetchCharacters = async () => {
        abortControllerRef.current?.abort();

        abortControllerRef.current = new AbortController();

        setIsLoading(true);

        try {
          const offSet = page * 10;

          const params = new URLSearchParams({
            offset: `${offSet}`,
            limit: "10",
            apikey: KEY,
          });

          if (nameCharacter !== "") {
            params.append("name", nameCharacter);
          }

          const response = await fetch(
            `${BASE_API_URL}public/characters?${params}`,
            {
              signal: abortControllerRef.current?.signal,
            }
          );

          const charactersResponse = await response.json();

          setCharacters(charactersResponse.data);
        } catch (e) {
          console.log("error", e);

          // setError(e);
        } finally {
          setIsLoading(false);
        }
      };

      fetchCharacters();
    }, 300);

    return () => {
      clearTimeout(debounceTimeout);
    };
  }, [page, nameCharacter, BASE_API_URL, KEY]);

  return {
    isLoading,
    error,
    characters,
    setNameCharacter,
    nameCharacter,
    page,
    setPage,
  };
};

export default useCharacters;
