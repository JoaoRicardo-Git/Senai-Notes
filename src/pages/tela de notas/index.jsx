import AllNotes from "../../Componentes/AllNotes";
import LeftPanel from "../../Componentes/Left-panel";

function TelaDeNotas() {

    return (

        <>
            <div className="conteiner-notas">
                <LeftPanel />

                <AllNotes />
            </div>

        </>

    )
}

export default TelaDeNotas;