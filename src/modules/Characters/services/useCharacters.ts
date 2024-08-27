import { useEffect, useState } from "react";
import { Characters } from "../types";



type UseCharacters = {
  name: string;
  page: number;
};

const useCharacters = ({ name, page }: UseCharacters) => {
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [characters, setCharacters] = useState<Characters[]>();

  useEffect(() => {
    // const controller = new AbortController();

    const fetchCharacters = async () => {
      setIsLoading(true);
      try {
        const offSet = page * 10;
        const params = new URLSearchParams({
          offset: `${offSet}`,
          limit: "10",
          apikey: "b40079217171f226c7436df11c98e7e8",
        });

        if (name !== "") {
            params.append("name", name);
          }
        // const response = await fetch(
        //   `https://gateway.marvel.com:443/v1/public/characters?limit=10&offset=${offSet}&name=${name}&apikey=b40079217171f226c7436df11c98e7e8`
        // );
        // ?limit=10&offset=${offSet}&name=${name}&apikey=b40079217171f226c7436df11c98e7e8
        const response = await fetch(
          `https://gateway.marvel.com:443/v1/public/characters?${params}`
        );

        const charactersResponse = await response.json();

        setCharacters(charactersResponse.data.results);
      } catch (e) {
        console.log("error", e);
        // setError(e);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCharacters();
  }, [page, name]);

  return {
    isLoading,
    error,
    characters,
  };
};

export default useCharacters;
