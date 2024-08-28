import { Dispatch, SetStateAction } from "react";
import useDetailCharacter from "../../services/useDetailCharacter";
import "./index.css";
import { Spinner } from "../../../../components/Spinner";
import { typesUrls } from "../../types";

type CharactersDetailsProps = {
  idCharacter: string;
  comeBack: Dispatch<SetStateAction<string>>;
};

const TYPES_BADGE: { [key in typesUrls]: string } = {
  detail: "Detalhes",
  wiki: "Wiki",
  comiclink: "Comics",
};

const CharactersDetails = ({
  idCharacter,
  comeBack,
}: CharactersDetailsProps) => {
  const { characters, isLoading } = useDetailCharacter({
    characterId: idCharacter,
  });

  return (
    <>
      <div className="page-container">
        <div className="container-characters">
          <div className="container-comeback">
            <button
              className="arrow"
              onClick={() => comeBack("")}
            >{`<`}</button>
            <p className="title">Detalhes do personagem</p>
          </div>
          {isLoading ? (
            <Spinner />
          ) : (
            <div className="container-comics">
              {characters?.results.map((character) => (
                <div className="img-title">
                  <img
                    loading="lazy"
                    src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
                  />
                  <p>{character.name}</p>
                </div>
              ))}
              <div className="links">
                {characters?.results.map((character) =>
                  character.urls.map((item) => (
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <p>{TYPES_BADGE[item.type]}</p>
                    </a>
                  ))
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CharactersDetails;
