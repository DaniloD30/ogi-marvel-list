import CardCharacter from "../../components/CardCharacter";
import Columns from "../../components/Columns";
import { TextField } from "../../components/Input";
import "./index.css";
import useCharacters from "./services/useCharacters";

const Characters = () => {
  //  ON CHANGE AQUI FILTRANDO OS PERSONAGENS COM DEBOUNCE

  // const [error, setError] = useState();
  // const [isLoading, setIsLoading] = useState(false);
  // const [posts, setPosts] = useState([]);
  // const [page, setPage] = useState(0);

  const { characters, isLoading } = useCharacters({
    name: "",
    page: 0,
  });

  console.log("charachters -->", characters);
  // useEffect(() => {
  //   const fetchPosts = async () => {
  //     setIsLoading(true);
  //     try {
  //       const response = await fetch(
  //         `https://gateway.marvel.com:443/v1/public/characters?limit=10&apikey=b40079217171f226c7436df11c98e7e8`
  //       );
  //       console.log(response);
  //     } catch (e: any) {
  //       if (e.name === "AbortError") {
  //         console.log("Aborted");
  //         return;
  //       }
  //       console.log('error', e);
  //       setError(e);
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   };

  //   fetchPosts();
  // }, [page]);

  // if (error) {
  //   return <div>Something went wrong! Please try again.</div>;
  // }

  return (
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
          // OnChange
        />
      </div>

      <div>
        {isLoading && <div> Loading ...</div>}
        <Columns />
        {characters && (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 6,
            }}
          >
            {characters.map((character, index) => (
              <CardCharacter
                key={`${index}-${character.name}`}
                name={character.name}
                events={character.events}
                series={character.series}
                thumbnail={character.thumbnail}
              />
            ))}

            {/* <CardCharacter />
            <CardCharacter />
            <CardCharacter /> */}
          </div>
        )}

        {/* COLUNAS, PODE UTILIZAR GRD */}
      </div>

      <div>{/* CARD */}</div>
    </div>
  );
};

export default Characters;
