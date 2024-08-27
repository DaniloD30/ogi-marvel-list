import Header from "./components/Header";
import Pagination from "./components/Pagination";
import Characters from "./modules/Characters";

function App() {
  //Criação component Text
  //Criação component Header

  return (
    <>
      <main className="container">
        {/* HEADER   */}
        <Header />
        {/* CORE   
            TOMAR CUIDADO COM A re-RENDERIZAÇÃO DESNECESSARIA DO HEADER e FOOTER
            INPUT TEXT
            CARDS
        */}
        <div
          style={{
            flex: "1",
          }}
        >
          <Characters />
        </div>
        {/* FOOTER   */}
        {/* PAGINATION   */}
        <Pagination />
      </main>
    </>
  );
}

export default App;
