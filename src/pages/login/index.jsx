import "./login.css"    // Conecta o CSS desta página
import Logo from "../../assets/imgs/Imgs Left-panel/LogoWrapper.svg"   // Importa a imagem para o <img>
import { useState } from "react";   // IMPORTANDO O HOOK

function Login() {

    // Cria as variáveis para podermos utilizar na tela
    const [email, setEmail] = useState("")  // Inicia a variavel (no caso "" significa vazia)
    const [password, setPassword] = useState("")    // Inicia a variavel



    const onLoginClick = async () => {

        if (email != `joao@gmail.com` || password != `1127`) {
            alert(`credenciais incorretas`);
            return;
        }

        let response = await fetch("http://localhost:3000/users", {

            Headers: {
                "Content-Type": "application/json"
            },
            method: "POST",
            body: JSON.stringify({
                email: email,
                password: password
            })

        });

        if (response.ok == true) {

            let json = await response.json();

            // let token = json.accessToken;
            let token = "Meu token";
            let userId = json.id;

            //  LOCALSTORAGE:
            localStorage.setItem("meuToken", token)
            localStorage.setItem("meuId", userId)

            window.location.href = "/tela-de-notas"

        } else {

            if (response.status == 401) {

                alert("voce nao existe para nos")

            } else {

                alert("Algum erro aconteceu, por favor volte mais tarde")

            }
        }

    }

    return (

        <>

            <main className="conteiner">

                <div className="painel-central">

                    <img src={Logo} alt="logo-login" />

                    <div className="text">

                        <h1> Welcome to Note </h1>
                        <p>Please log in to continue</p>

                    </div>

                    <div className="inpt-login">

                        <p>Email Address</p>

                        <input className="input-itens" type="email" value={email} onChange={event => setEmail(event.target.value)} placeholder="email@exaple.com" />


                        <div className="itens">

                            <p className="pass">Password</p>

                            <a href="">Forgot</a>

                        </div>

                        <input className="input-itens" type="password" valuee={password} onChange={event => setPassword(event.target.value)} />

                    </div>

                    <button className="btn-login" onClick={() => onLoginClick()}>Login</button>

                    <div className="criar">
                        
                        <p>No account yet?</p>

                        <a href="">Sign Up</a>
                    </div>

                </div>
            </main>

        </>

    )
}

export default Login;