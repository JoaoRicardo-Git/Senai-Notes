import './telaInfo.css'
import "../../assets/styles/global.css"

import tag from "../../assets/imgs/Imgs Left-panel/Tag.svg"
import imgTema from "../../assets/imgs/imgs tela-info/ImgsTema.png"
import imgTime from "../../assets/imgs/imgs tela-info/Circle Clock.svg"

function TelaInfo() {

    return (

        <>

            <div className="telaInfo">

                <div className="telaInfo-up">

                    <img className='ImgTema' src={imgTema} alt="Imagem do Tema" />

                    <h1 className='titleTema'>React Performance Optimization</h1>

                    <div className='infos'>

                        <div className='info-up'>

                            <h7 className="tagInfo"> <img className="imgs-tags" src={tag} alt="Img Tag" /> Tags </h7>
                            <p>Dev, React</p>

                        </div>

                        <div className='info-low'>

                            <h7 className="tagInfo"> <img className="imgs-tags" src={imgTime} alt="Img Relogio" /> Last edited </h7>
                            <p>29 Oct 2024</p>

                        </div>

                    </div>

                </div>

                <div className="telaInfo-low">

                    <div className='telaInfo-center'>

                        <div className='infoText'>

                            <p>Key performance optimization techniques:</p>

                            <h7 className="subTitle">1. Code Splitting </h7>
                            <p>- Use React.lazy() for route-based splitting</p>
                            <p>- Implement dynamic imports for heavy components</p>

                            <h7 className="subTitle"> 2.	Memoization </h7>
                            <p>- useMemo for expensive calculations</p>
                            <p>- useCallback for function props</p>
                            <p>- React.memo for component optimization</p>

                            <h7 className="subTitle"> 3. Virtual List Implementation </h7>
                            <p>- Use react-window for long lists</p>
                            <p>- Implement infinite scrolling</p>

                            <p>TODO: Benchmark current application and identify bottlenecks</p>

                        </div>

                        <div className='bnts'>

                            <button className='bntSave'>Save Note</button>

                            <button className='bntCancel'>Cancel</button>

                        </div>

                    </div>

                </div>

            </div>

        </>

    );
}

export default TelaInfo;