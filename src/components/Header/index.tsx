import "./index.css";

const Header = () => {
  return (
    <header className="header">
      <img
        width="138px"
        height="30px"
        loading="lazy"
        className="img-initial"
        src="https://www.objective.com.br/wp-content/uploads/2020/11/logo.svg"
        alt="Objective"
      />
      <div className="user-name">
        <p className="textLabel">Nome do candidato</p>
        <p className="textUser">Teste de Front-end</p>
        <div className="square-initials">
          <span className="initials">CB</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
