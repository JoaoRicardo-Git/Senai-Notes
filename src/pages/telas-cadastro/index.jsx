import "./cadastro.css"
import { useEffect, useState } from "react";
import logo from "../../assets/imgs/img-all-notes/Logo Wrapper.svg"

function TelaCadastro() {

    const [email, setEmail] = useState("");
    const [password, setpassword] = useState("");

    
    const onNovoUsuario = async () => {

      window.location. href = "/login"
    }
    

    const onCadastro = async () => {
        let response = await fetch("http://localhost:3000/users", {

            headers: {

                "content-Type": "application/json"


            },
            method: "POST",
            body: JSON.stringify({
                email: email,
                password: password
            })

        });

        console.log(response)
        if (response.ok == true) {
            alert("login realizado com sucesso");
            console.log(response)
            let json = await response.json()
            let token = json.accessToken;
            let userId = json.user.id;

            console.log("token:" + token);
            localStorage.setItem("meuToken", token);
            localStorage.setItem("meuId", userId)


           
            window.location.href = "/login";

        } else {

            if (response.status == 401) {
                alert("credeciais nao encontrada");
            } else {
                alert("erro inesperado")
            }
        }

    }

    useEffect(() => {

        // getCadastro();

    }, []);

    return (

        <>

            <header> </header>
            <main class="conteiner">

                <div class="painel-central">

                    <img class="logo" src={logo} alt="logo-cadastro" />

                    <div class="text">
                        <h1> Create Your Account </h1>
                        <p> Sign up to start organizing your notes and boost your productivity. </p>

                    </div>

                    <div class="inpt-t">
                        <p> Email Address </p>
                        <input value={email}
                            onChange={event => setEmail(event.target.value)} type="email" placeholder="email@exaple.com" />
                        <p> password </p>
                        <input value={password}
                            onChange={event => setpassword(event.target.value)} type="password" />

                        <div class="circle">

                            <img src="./assets/img cadastro/circle (1).png" alt=" circle" />
                            <p>At least 8 characters</p>

                        </div>


                    </div>

                    <button class="btn-login" onClick={() => onCadastro()}> Cadastrar </button>

                    <div class="txt-login">
                        <p> Already have an account? </p> <a onClick={() =>onNovoUsuario ()}> Login</a>
                    </div>


                </div>
            </main>

        </>

    )

}

export default TelaCadastro