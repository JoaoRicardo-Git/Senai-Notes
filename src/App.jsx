import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/login";
import TelaDeNotas from "./pages/tela de notas";



function App() {

  const isAuthenticated = () => {

    let token = localStorage.getItem("meuToken");

    if (token == null) {

      return false;

    } else {

      return true;

    }

  }

  return (
    <>
      <BrowserRouter>
<<<<<<< HEAD
      
=======
>>>>>>> c7cc175e1673f099793a2f95a1dad9dfac47e72e

      <Routes>

        <Route path="/" element = {<Login/>} ></Route>
        <Route path="/login" element = {<Login/>} ></Route>
        <Route path="/tela-de-notas" element = {isAuthenticated() == true? <TelaDeNotas/> : <Login/>}></Route>
        <Route path="*" element = {<h1>Erro 404</h1>} ></Route>
      
      </Routes>
      
      </BrowserRouter>

    </>
  )
}

export default App
