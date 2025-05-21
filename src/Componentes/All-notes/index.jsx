import "./allnotes.css"

import imgReact from "../../assets/imgs/img-all-notes/Rectangle.svg"
import lupa from "../../assets/imgs/img-all-notes/Search.svg"
import config from "../../assets/imgs/img-all-notes/Setting.svg"
import perfil from "../../assets/imgs/img-all-notes/Topbar item.svg"

import { useEffect, useState } from "react"


function AllNotes() {

    useEffect(() => {
        getNotes();
    }, [])

    const getNotes = async () => {
        let response = await fetch(
            "http://localhost:3000/Notas",
            {
                headers: {
                    Authorization: "Bearer " + localStorage.getItem("meuToken"),
                }
            }
        )
    }

    const onCreateNote = async () => {
    

    
        const response = await fetch("http://localhost:3000/Notas", {
    
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              userId: "1",                          // ID fixo de usuário por enquanto
              title: "Nova anotação",               // Título padrão
              description: "Escreva aqui sua descrição", // Descrição padrão
              tags: [],                             // Sem tags iniciais
              image: "assets/sample.png",           // Imagem padrão
              date: new Date().toISOString()
    
            })
        });
    
        if (response.ok) {
    
            alert("Anotacao criada com sucesso!");
            await getNotes();
    
        } else {
    
            alert("erro na criacao da nota, tente de novo.")
        
        }
    
    
    }

    return (

        <>

            <div className="right-l">

                <div className="cabecalho">

                    <h1 className="title-all" > All Notes</h1>
                    <div className="inpt-itens">
                        <div className="inpt">

                            <img src={lupa} alt="lupa" />
                            <input type="text" placeholder="Search by title, content, or tags…" />


                        </div>
                        <img src={config} alt="config" />
                        <img src={perfil} alt="perfil" />
                    </div>


                </div>

                <div className="btn">

                    <button className="btn-create" onClick={onCreateNote}
                    > + Create New Notes </button>

                </div>

                <div className="react-itens">

                    <div className="imge-react">

                        <img className="img-react" src={imgReact} alt="img-react" />

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