import "./LeftPanel.css"
import Logo from "../../assets/imgs/Logo Wrapper.svg"
import imgCasa from "../../assets/imgs/Home.svg"
import imgArquivo from "../../assets/imgs/Archive.svg"

function LeftPanel() {

    return (

        <>
        
        <nav className="left-Panel">

        <div className="sidebar">

            <div className="sidebar-up">

                <img className="Logo-allNotes" src={Logo} alt="Imagem Logo"/>

                <button className="bnt-prime"> <img src={imgCasa} alt="Img Home"/>All Notes</button>
                <button className="bnt"> <img src={imgArquivo} alt="Img Archive"/>Archived Notes</button>

            </div>

            <div className="sidebar-low">

                <p>Tags</p>

            </div>

        </div>

        </nav>

        </>

    );
}

export default LeftPanel;