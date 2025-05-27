import './telaInfo.css'
import "../../assets/styles/global.css"

import tag from "../../assets/imgs/Imgs-Left-panel/Tag.svg"
import imgTema from "../../assets/imgs/imgs tela-info/ImgsTema.png"
import imgTime from "../../assets/imgs/imgs tela-info/Circle Clock.svg"
import { useEffect, useState } from 'react'

function TelaInfo({ recebeNota }) {

    const [title, setTitle] = useState("");
    const [tags, setTags] = useState("");
    const [description, setDescription] = useState("");
    const [selectedNote, setSelectedNote] = useState(null);

<<<<<<< HEAD
    const [image, setImage] = useState(null);
    const [imageURL, setImageURL] = useState(null);
=======
    // const[ image,setImage] =useState(null);
    // const[imageURL, setImageURL] =useState ( null);
>>>>>>> 36bd5bc293e68991d2d0802185ed3e94e03364f2

    useEffect(() => {

        if (recebeNota) {

            setTitle(recebeNota.title);
            setTags(recebeNota.tags?.join(", "));
            setDescription(recebeNota.description);

        }

    }, [recebeNota]);

    const onSaveNote = async () => {
        const response = await fetch(`http://localhost:3000/notes/${selectedNote.id}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            ...selectedNote,
            title,
            description,
            tags: tags.split(",").map(t => t.trim()),
            image: "assets/sample.png", // temporário
            date: new Date().toISOString()
          })
        });
    
        if (response.ok) {
          alert("Sucesso!");
        } else {
          alert("Erro!");
        }
      }
    
    const aoAdicionarImagem = (event) => {

        const arquivo = event.target.files[0];

        console.log ("arquivo", arquivo);

        setImage(arquivo);
        setImageURL(URL.createObjectURL(arquivo));

    }
    // const aoAdicionarImagen = (event) => {
    //     const arquivo = event.target.files[0];
    //     console.log ("arquivo", arquivo);
    //     setImage(arquivo);
    //     setImageURL(URL.createObjectURL(arquivo));
    // }

    return (

        <>

            <div className="telaInfo">

                <div className="telaInfo-up">

<<<<<<< HEAD
                    <div>
                        <label>

                            <img className='ImgTema' src={imageURL || imgTema} alt="Imagem do Tema" />
                            <input onChange={event => aoAdicionarImagem(event)} className='file_input' type="file" />

                        </label>
                    </div>
=======
                    {/* <label >

                    <img className='ImgTema' src={imageURL || imgTema} alt="Imagem do Tema" />

                        <input onChange={event => aoAdicionarImagen(event)} className='file-input' type="file" /> */}
                        {/* colocar display block se ja  estiver estilizado

                    </label> */}


>>>>>>> 36bd5bc293e68991d2d0802185ed3e94e03364f2

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