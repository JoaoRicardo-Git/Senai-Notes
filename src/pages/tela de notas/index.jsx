import AllNotes from "../../Componentes/All-notes";
import Cabecalho from "../../Componentes/cabecalho";
import LeftPanel from "../../Componentes/Left-panel";
import MenuLateral from "../../Componentes/Settings-menu";
import TelaInfo from "../../Componentes/Tela-Info";

function TelaDeNotas() {

    return (

        <>

            <div className="conteiner-notas">

                <Cabecalho/>

                <LeftPanel />

                <AllNotes />

                <TelaInfo/>

                <MenuLateral/>

            </div>

        </>

    )
}

export default TelaDeNotas;