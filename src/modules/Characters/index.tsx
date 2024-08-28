import { useState } from "react";
import CardCharacter from "../../components/CardCharacter";
import Columns from "../../components/Columns";
import { TextField } from "../../components/Input";
import NotFound from "../../components/NotFound";
import Pagination from "../../components/Pagination";
import { Spinner } from "../../components/Spinner";
import "./index.css";
import useCharacters from "./services/useCharacters";
import CharactersDetails from "./pages/Details";

const Characters = () => {
  const {
    characters,
    page,
    nameCharacter,
    setPage,
    isLoading,
    setNameCharacter,
  } = useCharacters();

  const [idDetail, setDetail] = useState("");

  //TODO: Testes unitarios

  return (
    <>
      {idDetail !== "" ? (
        <CharactersDetails idCharacter={idDetail} comeBack={setDetail} />
      ) : (
        <div className="page-container">
          <div className="container-characters">
            <p className="title">Busca de personagens</p>
            <div className="text-field">
              <TextField
                endAdornment={<img src="magnifier-icon.svg" />}
                placeholder="Search"
                label="Nome do personagem"
                maxLength={255}
                onChange={(e) => setNameCharacter(e.target.value)}
              />
            </div>

            <div>
              <Columns />
              {isLoading ? (
                <Spinner />
              ) : characters?.results.length === 0 ? (
                <NotFound
                  titleError={`${nameCharacter} ainda não está na nossa base de dados :(`}
                />
              ) : (
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 10,
                  }}
                >
                  {characters?.results.map((character, index) => (
                    <button
                      className="button-card-detail"
                      onClick={() => setDetail(character.id)}
                    >
                      <CardCharacter
                        id={character.id}
                        key={`${index}-${character.name}`}
                        name={character.name}
                        events={character.events}
                        series={character.series}
                        thumbnail={character.thumbnail}
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
          {!isLoading && (
            <Pagination
              total={characters?.total ? characters.total : 0}
              page={page}
              setPage={setPage}
            />
          )}
        </div>
      )}
    </>
  );
};

export default Characters;
