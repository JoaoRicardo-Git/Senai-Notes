import archive from "../../assets/imgs/img-all-notes/Archive.svg"
import claer from "../../assets/imgs/img-all-notes/Delete.svg"

function MenuBar() {

    return (

        <>

            <div className="menu-bar ">

                <div className="btn-bar">

                    <button  ><img src={archive} alt="archive-img" />Unarchive Note </button>
                    <button> <img src={claer} alt="delete-img" /> Delete Note </button>

                </div>

            </div>


        </>

    );
}

export default MenuBar;