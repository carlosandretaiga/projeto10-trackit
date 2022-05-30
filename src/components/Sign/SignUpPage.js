import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { Link} from "react-router-dom";

import { ThreeDots } from "react-loader-spinner";

import ContainerInitial from "../Container/ContainerInitial";
import logoImg from "../../assets/images/logo.svg"; 
import { ContainerLogin } from "./styles";

export default function SignUpPage() {

    const navigate = useNavigate(); 


    const [name, setName] = useState(''); 
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [photo, setPhoto] = useState('');

    const [pageLoaded, setPageLoaded] = useState(true); 

        //adicionado
    function fillLoading() {
        return !pageLoaded ? (
            <ThreeDots color="#fff" height={40} width={40} />

        ) : (
            "Cadastrar"
        ); 
    }

    function disableLoading() {
        return !pageLoaded ? "disabled" : ""; 
    }


//----------------------






    function signUp(event) {

        event.preventDefault();
        setPageLoaded(false); 

        const body = {
            email: email,
            name: name, 
            image: photo, 
            password: password
        } 

        console.log(body); 

        const promise = axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up', body);

        promise
            .then(res => {
            navigate("/")
        })
            .catch(err => {
                alert("Cadastro inválido! Por favor verifique se o e-mail já está cadastrado ou algum campo está errado!"); 
                setPageLoaded(true); 
            })

    }


    return (

        <>
        <ContainerInitial>
            <ContainerLogin>
            <img src={logoImg} alt="logo-trackit" />

            <form 
                onSubmit={(event) => {
                    signUp(event); 
                }}
            >
                <input 
                placeholder="e-mail"
                type="email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)}
                disabled={disableLoading()}
                required
                autoComplete="on"
                ></input>

                <input 
                placeholder="senha" 
                type="password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)}
                disabled={disableLoading()}
                required
                autoComplete="on"
                ></input>

                <input 
                placeholder="nome" 
                type="text" 
                value={name} 
                onChange={(e) => setName(e.target.value)}
                disableLoading={disableLoading()}
                required
                autoComplete="on"
                ></input>

                <input 
                placeholder="foto" 
                type="text" value={photo} 
                onChange={(e) => setPhoto(e.target.value)}
                disableLoading={disableLoading()}
                required
                autoComplete="on"
                ></input>
            
                <button type="submit">
                    {fillLoading()}
                </button>
            </form>

            <Link to="/"><span>Já tem uma conta? Faça login!</span></Link>

            </ContainerLogin>
        </ContainerInitial>
        </>
    )
}