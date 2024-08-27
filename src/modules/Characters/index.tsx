import Columns from "../../components/Columns";
import { TextField } from "../../components/Input";
import "./index.css";

const Characters = () => {
  //  ON CHANGE AQUI FILTRANDO OS PERSONAGENS COM DEBOUNCE

  return (
    <div className="container-characters">
      <p className="title">Busca de personagens</p>
      <div
        style={{
          maxWidth: 295,
        }}
      >
        <TextField
          endAdornment={<img src="magnifier-icon.png" />}
          placeholder="Search"
          label="Nome do personagem"
          // OnChange
        />
      </div>

      <div>
        <Columns />
        {/* COLUNAS, PODE UTILIZAR GRD */}</div>

      <div>{/* CARD */}</div>
    </div>
  );
};

export default Characters;
