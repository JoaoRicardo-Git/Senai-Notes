import AllNotes from "../../Componentes/All-notes";
import Cabecalho from "../../Componentes/cabecalho";
import LeftPanel from "../../Componentes/Left-panel";
import MenuLateral from "../../Componentes/Settings-menu";
import TelaInfo from "../../Componentes/Tela-Info";

function TelaDeNotas() {

    return (

        <>

        <LeftPanel/>

        <AllNotes/>

        <Cabecalho/>

        <TelaInfo/>

        <MenuLateral/>

        </>

    )
}

export default TelaDeNotas;