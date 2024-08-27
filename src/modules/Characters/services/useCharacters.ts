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

  useEffect(() => {
    console.log(abortControllerRef);
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
            apikey: "b40079217171f226c7436df11c98e7e8",
          });

          if (nameCharacter !== "") {
            params.append("name", nameCharacter);
          }

          const response = await fetch(
            `https://gateway.marvel.com:443/v1/public/characters?${params}`,
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
  }, [page, nameCharacter]);

  return {
    isLoading,
    error,
    characters,
    setNameCharacter,
    page,
    setPage,
  };
};

export default useCharacters;
