import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { Link} from "react-router-dom";

import ContainerInitial from "../Container/ContainerInitial";
import logoImg from "../../assets/images/logo.svg"; 
import { ContainerLogin } from "./styles";

export default function SignUpPage() {

    const navigate = useNavigate(); 


    const [name, setName] = useState(''); 
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [photo, setPhoto] = useState('');

    function signUp() {

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
            console.log(res.data); 
            navigate("/")
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

                <input placeholder="nome" type="text" value={name} onChange={(e) => setName(e.target.value)}></input>

                <input placeholder="foto" type="text" value={photo} onChange={(e) => setPhoto(e.target.value)}></input>
            </form>

            <button onClick={signUp} type="submit">
                Cadastrar
            </button>

            <Link to="/"><span>Já tem uma conta? Faça login!</span></Link>

            </ContainerLogin>
        </ContainerInitial>
        </>
    )
}