import CardCharacter from "../../components/CardCharacter";
import Columns from "../../components/Columns";
import { TextField } from "../../components/Input";
import Pagination from "../../components/Pagination";
import "./index.css";
import useCharacters from "./services/useCharacters";

const Characters = () => {
  const { characters, page, setPage, isLoading, setNameCharacter } =
    useCharacters();

  //TODO: Loading Spinner
  //TODO: Ancora na página
  //TODO: Testes unitarios
  //TODO: Lazy loading imagens
  
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
              <div> Loading ...</div>
            ) : (
              characters?.results && (
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 6,
                  }}
                >
                  {characters.results.map((character, index) => (
                    <CardCharacter
                      key={`${index}-${character.name}`}
                      name={character.name}
                      events={character.events}
                      series={character.series}
                      thumbnail={character.thumbnail}
                    />
                  ))}
                </div>
              )
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
