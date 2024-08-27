import { useEffect, useState } from "react";
import { Data } from "../types";

const useDetailCharacter = ({ characterId }: { characterId: string }) => {
  const [error, setError] = useState();

  const [isLoading, setIsLoading] = useState(false);

  const [characters, setCharacters] = useState<Data>();

  const BASE_API_URL = import.meta.env.VITE_MARVEL_BASE_API_URL;

  const KEY = import.meta.env.VITE_API_PUBLIC_KEY;

  useEffect(() => {
    const fetchCharacters = async () => {
      setIsLoading(true);

      try {
        const params = new URLSearchParams({
          apikey: KEY,
        });

        const response = await fetch(
          `${BASE_API_URL}public/characters/${characterId}?${params}`
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
  }, [BASE_API_URL, KEY, characterId]);

  return {
    isLoading,
    error,
    characters,
  };
};

export default useDetailCharacter;
