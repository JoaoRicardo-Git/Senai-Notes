import "./allnotes.css"

import imgReact from "../../assets/imgs/img-all-notes/Rectangle.svg"
import lupa from "../../assets/imgs/img-all-notes/Search.svg"
import config from "../../assets/imgs/img-all-notes/Setting.svg"
import perfil from "../../assets/imgs/img-all-notes/Topbar item.svg"
import tags from "../../assets/imgs/img-all-notes/Tag.svg"

import { useEffect, useState } from "react"


function AllNotes({ enviarNota }) {

    const [atualizarLista, setAtualizarLista] = useState(0);

    const [noteSelecionado, setNoteSelecionado] = useState(null);

    const [notes, setNotes] = useState([]);

    useEffect(() => {
        getNotes();
    }, []);

    //     // Recarrega as notas sempre que a tag selecionada mudar
    //   useEffect(() => { 
    //     getNotes(); 
    //   }, [tagSelecionada]);

    //   // Recarrega as notas sempre que o filtro de arquivadas mudar
    //   useEffect(() => { 
    //     getNotes(); 
    //   }, [somenteArquivadas]);

    //   // Recarrega as notas sempre que a flag de atualização mudar
    //   useEffect(() => { 
    //     getNotes(); 
    //   }, [atualizarLista]);

    const clickNote = (note) =>{

        setNoteSelecionado(note);
        console.log(note);

        enviarNota(note);

    }
    const getNotes = async () => {

        let response = await fetch("http://localhost:3000/Notas", {

            headers: {
                Authorization: "Bearer " + localStorage.getItem("meuToken"),
            }

        });

        if (response.ok == true) {

            let json = await response.json();
            let userId = localStorage.getItem("meuId")
            // json = json.filter(chat => chat.userId == userId);

            setNotes(json)

        } else {

            alert("Token invalido, Faca Login novamente.")
            localStorage.clear();
            window.location.href = "/login"

        }

    }

    getNotes();

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

                <noteSelecionado
                noteSelecionado={noteSelecionado}
                aoFecharNota={() => {
                    setNoteSelecionado(null);
                    atualizarLista(setAtualizarLista + 1);
                }}/>

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
                    > + Create New Notes
                    </button>

                    <div className="notes_list">

                        {notes.map(note => (

                            <div className="react-itens" onClick={() => clickNote(note)}>

                                <div className="imge-react">

                                    <img className="img-react" src={imgReact} alt="img-react" />

                                </div>

                                <div className="text-react">

                                    <p>{note.title}</p>
                                    <div className="text-into">

                                        <p> <img src={tags} alt="tags" /> Dev</p>
                                        <p> <img src={tags} alt="tags" /> react</p>

                                    </div>
                                    <p>29 Oct 2024</p>



                                </div>

                            </div>

                        ))}
                    </div>

                </div>


            </div>

        </>

    );
}

export default AllNotes;