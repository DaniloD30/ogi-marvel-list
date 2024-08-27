import { TextField } from "../../components/Input";
import "./index.css";

const Characters = () => {
  return (
    <div className="container-characters">
      <p className="title">Busca de personagens</p>

      <div style={{
        maxWidth: 295
      }}> 
        <TextField placeholder="Search" label="Nome do personagem"/>
      </div>

      <div>{/* COLUNAS, PODE UTILIZAR GRD */}</div>

      <div>{/* CARD */}</div>
    </div>
  );
};

export default Characters;
