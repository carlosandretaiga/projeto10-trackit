
import { useNavigate } from "react-router-dom";


import ContainerInitial from "../Container/ContainerInitial";

import logoImg from "../../assets/images/logo.svg"; 
import { ContainerLogin, Input, RegisterLogin, Button } from "./styles";

export default function Login() {

    const navigate = useNavigate(); 


    function SignUp () {
        navigate("/sign-up")
    }

    return (

        <>

        <ContainerInitial>
            <ContainerLogin>

            <img src={logoImg} alt="logo-trackit" />

            <RegisterLogin>
                <form>
                    <Input placeholder="e-mail" type="text"></Input>

                    <Input placeholder="senha" type="text"></Input>
                </form>

                <Button>
                        <p>Entrar</p>
                </Button>

                        <span onClick={SignUp}>Não tem uma conta? Cadastre-se</span>

            </RegisterLogin>

            </ContainerLogin>
        </ContainerInitial>
        
        </>
    )
}