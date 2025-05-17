import "./allnotes.css"
import imgReact from "../../assets/imgs/img-all-notes/Rectangle.svg"
function AllNotes() { 

    return (

        <>

            <div className="right-l">

                <div className="cabecalho">

                    <h1> All Notes</h1>
                    <div className="inpt">
                        <img src="./assets/imagens/Search.svg" alt="lupa"/>
                        <input type="text" placeholder="Search by title, content, or tags…"/>
                        <img src="./assets/imagens/Setting.svg" alt="config"/>
                        <img src="./assets/imagens/Topbar Item.svg" alt="perfil"/>

                    </div>


                </div>

                <div className="btn">

                    <button className="btn-create"> + Create New Notes </button>

                </div>

                <div className="react-itens">

                    <div className="img-react">

                        <img src={imgReact} alt="img-react"/>

                    </div>

                    <div className="text-react">

                        <p> React Performance Optimization</p>
                        <div className="text-into">

                            <p>Dev</p>
                            <p>react</p>
                            
                        </div>
                        <p>29 Oct 2024</p>

                    </div>
                </div>


            </div>




        </>

    );
}

export default AllNotes;