import { useState } from "react";
import AllNotes from "../../Componentes/All-notes";
import LeftPanel from "../../Componentes/Left-panel";
import MenuLateral from "../../Componentes/Settings-menu";
import TelaInfo from "../../Componentes/Tela-Info";

function TelaDeNotas() {

    const [notaSelecionada, setNotaSelecionada] = useState(null);
    

    return (

        <>

            <div className="conteiner-notas">


                <LeftPanel />

                <AllNotes enviarNota={note => setNotaSelecionada(note)}/>

                <TelaInfo recebeNota={notaSelecionada} />

                <MenuLateral/>

            </div>

        </>

    )
}

export default TelaDeNotas;