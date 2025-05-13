import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/login";

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
      
      <Routes>

        <Route path="/" element = {<Login/>} ></Route>
        <Route path="/login" element = {<Login/>} ></Route>
        <Route path="*" element = {<h1>Erro 404</h1>} ></Route>
      
      </Routes>
      
      </BrowserRouter>
    </>
  )
}

export default App
