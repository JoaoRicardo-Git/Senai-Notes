import "./LeftPanel.css"
import Logo from "../../assets/imgs/Imgs Left-panel/LogoWrapper.svg"
import imgCasa from "../../assets/imgs/Imgs Left-panel/Home.svg"
import imgArquivo from "../../assets/imgs/Imgs Left-panel/Archive.svg"
import tag from "../../assets/imgs/Imgs Left-panel/Tag.svg"

function LeftPanel() {

    return (

        <>

            <nav className="left-Panel">

                <div className="sidebar-up">

                    <img className="Logo-allNotes" src={Logo} alt="Imagem Logo" />

                    <button className="bnt-prime"> <img src={imgCasa} alt="Img Home" />All Notes</button>
                    <button className="bnt"> <img src={imgArquivo} alt="Img Archive" />Archived Notes</button>

                </div>

                <div className="sidebar-low">

                    <p className="subTitle">Tags</p>

                    <button className="tag"> <img src={tag} alt="Img Tag" /> Cooking </button>

                </div>

            </nav>

        </>

    );
}

export default LeftPanel;