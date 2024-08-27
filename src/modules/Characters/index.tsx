import CardCharacter from "../../components/CardCharacter";
import Columns from "../../components/Columns";
import { TextField } from "../../components/Input";
import NotFound from "../../components/NotFound";
import Pagination from "../../components/Pagination";
import { Spinner } from "../../components/Spinner";
import "./index.css";
import useCharacters from "./services/useCharacters";

const Characters = () => {
  const {
    characters,
    page,
    nameCharacter,
    setPage,
    isLoading,
    setNameCharacter,
  } = useCharacters();

  //TODO: Modo responsivo
  //TODO: Error Handler
  //TODO: Ancora na página
  //TODO: Testes unitarios

  return (
    <>
      <div className="page-container">
        <div className="container-characters">
          <p className="title">Busca de personagens</p>
          <div
            style={{
              maxWidth: 295,
            }}
          >
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
                  gap: 6,
                }}
              >
                {characters?.results.map((character, index) => (
                  <CardCharacter
                    key={`${index}-${character.name}`}
                    name={character.name}
                    events={character.events}
                    series={character.series}
                    thumbnail={character.thumbnail}
                  />
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
    </>
  );
};

export default Characters;
