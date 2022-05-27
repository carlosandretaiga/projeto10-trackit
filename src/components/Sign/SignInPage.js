
import { Link, useNavigate } from "react-router-dom";

import React from "react";


import { useState } from "react";

import axios from "axios";

import ContainerInitial from "../Container/ContainerInitial";

import logoImg from "../../assets/images/logo.svg"; 
import { ContainerLogin } from "./styles";

export default function SignInPage() {

    const navigate = useNavigate(); 

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    function login() {

        const body = {
            email, 
            password, 
        }

        const promise = axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login', body); 

        promise
            .then(res => {
            console.log(res.data); 
            navigate("/habits")
        })
            .catch(err => {
                console.log(err); 
            })
    }


    return (

        <>

        <ContainerInitial>
            <ContainerLogin>

            <img src={logoImg} alt="logo-trackit" />

          
            <form>
                <input placeholder="e-mail" type="email" value={email} onChange={(e) => setEmail(e.target.value)}></input>

                <input placeholder="senha" type="password" value={password} onChange={(e) => setPassword(e.target.value)}></input>
            </form>

            <button onClick={login} type="submit">
                Entrar
            </button>

            
            <Link to="/sign-up"><span>Não tem uma conta? Cadastre-se</span></Link>

    
            </ContainerLogin>
        </ContainerInitial>
        
        </>
    )
}