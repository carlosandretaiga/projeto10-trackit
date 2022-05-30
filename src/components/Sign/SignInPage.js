
import { Link, useNavigate } from "react-router-dom";
import React from "react";
import { useState } from "react";
import axios from "axios";

import { ThreeDots } from "react-loader-spinner";

import { useContext } from "react";
import UserContext from "../contexts/UserContext";

import ContainerInitial from "../Container/ContainerInitial";
import logoImg from "../../assets/images/logo.svg"; 
import { ContainerLogin } from "./styles";

export default function SignInPage() {

    const { setUserData } = useContext(UserContext); 

    const { setToken } = useContext(UserContext); 
    const { setProfileImg } = useContext(UserContext); 

    const navigate = useNavigate(); 

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [pageLoaded, setPageLoaded] = useState(true); 

    const [submit, setSubmit] = useState(false); 


    //adicionado
    function fillLoading() {
        return !pageLoaded ? (
            <ThreeDots color="#fff" height={40} width={40} />

        ) : (
            "Entrar"
        ); 
    }

    function disableLoading() {
        return !pageLoaded ? "disabled" : ""; 
    }


//----------------------

    function SubmitLogin(event) {

        event.preventDefault(); 
        setSubmit(true); 
        //setPageLoaded(false); 

        const body = {
            email: email, 
            password: password, 
        }; 

        const promise = axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login', body); 

        promise
            .then(res => {
            const data = res.data;
            const userLogin = {
                email: data.email,
                id: data.id,
                image: data.image,
                name: data.name,
                token: data.token,
                login: true, 
            }; 
            localStorage.setItem("userData", JSON.stringify(userLogin));
            //localStorage.setItem(log)
            setUserData(JSON.parse(localStorage.getItem("userData")));
            navigate("/today")
            setToken(res.data.token); 
            setProfileImg(res.data.image); 
            console.log(res.data.image);
        })
            .catch(res => {
                alert("Usuário e/ou senha inválido(s)!"); 
                setSubmit(false);
                //setPageLoaded(true); 
            }); 
    }

    return (

        <>
        <ContainerInitial>
            <ContainerLogin>
            <img src={logoImg} alt="logo-trackit" />

            <form onSubmit={SubmitLogin}
            >
                <input 
                placeholder="e-mail"
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={disableLoading()}
                autoComplete="on"
                ></input>

                <input 
                placeholder="senha"
                type="password"
                value={password} 
                onChange={(e) => setPassword(e.target.value)}
                required
                disabled={disableLoading()}
                autoComplete="on"
                ></input>
            
            <button type="submit">
                {fillLoading()}
            </button>
            </form>
            <Link to="/sign-up"><span>Não tem uma conta? Cadastre-se</span></Link>
            </ContainerLogin>
        </ContainerInitial>
        
        </>
    )
}