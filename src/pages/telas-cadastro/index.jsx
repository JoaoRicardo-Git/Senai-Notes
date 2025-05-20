import "./cadastro.css"

function TelaCadastro() {

    return (

        <>

            <header> </header>
            <main class="conteiner">

                <div class="painel-central">

                    <img class="logo" src="./assets/img cadastro/Logo.png" alt="logo-cadastro" />

                    <div class="text">
                        <h1> Create Your Account </h1>
                        <p> Sign up to start organizing your notes and boost your productivity. </p>

                    </div>

                    <div class="inpt">
                        <p> Email Address </p>
                        <input type="email" placeholder="email@exaple.com" />
                        <p> password </p>
                        <input type="password" />

                        <div class="circle">

                            <img src="./assets/img cadastro/circle (1).png" alt=" circle" />
                            <p>At least 8 characters</p>

                        </div>


                    </div>

                    <button class="btn-login" onclick="btn-login"> Cadastrar </button>

                    <div class="txt-login">
                        <p> Already have an account? </p> <a href=""> Login</a>
                    </div>


                </div>
            </main>

        </>

    )

}

export default TelaCadastro