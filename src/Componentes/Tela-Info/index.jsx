import './telaInfo.css'
import "../../assets/styles/global.css"

import tag from "../../assets/imgs/Imgs-Left-panel/Tag.svg"
import imgTema from "../../assets/imgs/imgs tela-info/ImgsTema.png"
import imgTime from "../../assets/imgs/imgs tela-info/Circle Clock.svg"
import { useEffect, useState } from 'react'

function TelaInfo({recebeNota}) {

    const [title, setTitle] = useState("");
    const [tags, setTags] = useState("");
    const [description, setDescription] = useState("");
    const [selectedNote, setSelectedNote] = useState(null);

    useEffect(() => {

        if (recebeNota) {

            setTitle(recebeNota.title);
            setTags(recebeNota.tags?.join(", "));
            setDescription(recebeNota.description);

        }

    }, [recebeNota]);

    const onSaveNote = async () => {

        const response = await fetch("http://localhost:3000/Notas" + selectedNote.id, {

            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({

                userId: "1",                          // ID fixo de usuário por enquanto
                title: selectedNote.title.JA,               // Título padrão
                description: selectedNote.description, // Descrição padrão
                tags: [],                             // Sem tags iniciais
                image: "assets/sample.png",           // Imagem padrão
                date: new Date().toISOString()

            })

        });

        if (response.ok) {

            alert("Anotacao criada com sucesso!");

        } else {

            alert("erro na criacao da nota, tente de novo.")

        }


    }

    return (

        <>

            <div className="telaInfo">

                <div className="telaInfo-up">

                    <img className='ImgTema' src={imgTema} alt="Imagem do Tema" />

                    <input
                        className="createTitle"
                        type="text"
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                        placeholder='Titulo'
                    />

                    <div className='infos'>

                        <div className='info-up'>

                            <p className="tagInfo"> <img className="imgs-tags" src={tag} alt="Img Tag" /> Tags </p>
                            <input
                                type="text"
                                value={tags}
                                placeholder="Coloque suas Tags..."
                                onChange={e => setTags(e.target.value)}
                            />


                        </div>

                        <div className='info-low'>

                            <p className="tagInfo"> <img className="imgs-tags" src={imgTime} alt="Img Relogio" /> Last edited </p>
                            <p>29 Oct 2024</p>

                        </div>

                    </div>

                </div>

                <div className="telaInfo-low">

                    <div className='telaInfo-center'>
                        <textarea
                            className='infoText'
                            placeholder="Coloque suas notas aqui..."
                            value={description}
                            onChange={e => setDescription(e.target.value)}
                        />

                        <div className='bnts'>

                            <button className='bntSave' onClick={onSaveNote}>Save Note</button>

                            <button className='bntCancel'>Cancel</button>

                        </div>

                    </div>

                </div>

            </div>

        </>

    );
}

export default TelaInfo;