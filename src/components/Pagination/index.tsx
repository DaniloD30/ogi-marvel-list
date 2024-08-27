import "./index.css";

const Pagination = () => {
  /* 
  LÓGICA DA QTD DE PÁGINA
          TOTAL/10 = Num de paginas
          IF TOTAL%10 > 0, +1 Página
  
  LÓGICA DA PÁGINA ATIVA
          DEVE VIM DO ENDPOINT?
  
  CALLBACK PARA PASSAR A PÁGINA E ENVIAR PARA O ENDPOINT

  
  */
  return (
    <div className="pagination-container">
      {/* SE PAGINA !== 1 */}
      <div className="arrow">{`<<`}</div>
      {/* SE PAGINA > 1 */}
      <div className="arrow">{`<`}</div>
      {[...Array(5)].map((_, index) => (
        <div key={index + 1} className="number-page-inactive">
          <p>{index + 1}</p>
        </div>
      ))}
      {/* SE PAGINA !== TOTAL */}
      <div className="arrow">{`>`}</div>
      {/* SE PAGINA !== TOTAL */}
      <div className="arrow">{`>>`}</div>
    </div>
  );
};

export default Pagination;
