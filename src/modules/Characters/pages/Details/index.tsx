import { Dispatch, SetStateAction } from "react";
import useDetailCharacter from "../../services/useDetailCharacter";
import "./index.css";
import { Spinner } from "../../../../components/Spinner";

type CharactersDetailsProps = {
  idCharacter: string;
  comeBack: Dispatch<SetStateAction<string>>;
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
            characters?.results.map((character) => (
              <div className="img-title">
                <img
                loading="lazy"
                  src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
                />
                <p>{character.name}</p>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default CharactersDetails;
