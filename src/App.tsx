import "./App.css";

import { BrowserRouter } from "react-router-dom";
import { Ruteo } from "./utilidades/rutas/Ruteo";
import { Cabecera } from "./componentes/contenedor/Cabecera";
function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <Cabecera />

          <Ruteo />
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
