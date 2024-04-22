import { Route, Routes } from "react-router-dom";
import { Inicio } from "../../componentes/contenedor/inicio";
import { CancionesAdmin } from "../../canciones/CancionesAdmin";
import { CancionesCear } from "../../canciones/CancionesCrear";
import { Cancioneslista } from "../../canciones/CancionesLista";
import { NoEncontrado } from "../../componentes/contenedor/NoEncontrado";

export const Ruteo = ()=> {
    return(
        <Routes>
            <Route path="/" element={<Inicio />}/>
            <Route path="/CanAdmin" element={<CancionesAdmin />}/>
            <Route path="/CanCrear" element={<CancionesCear />}/>
            <Route path="/Canlista" element={<Cancioneslista />}/>
            <Route path="*" element={<NoEncontrado/>} />

        </Routes>
    );
};