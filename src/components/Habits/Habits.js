import React, { useState, useEffect } from "react";
import ContainerHabits from "../Container/ContainerHabits";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

import axios from "axios";

import { useContext } from "react";
import UserContext from "../contexts/UserContext";

import { Container, ButtonAddition, Navbar, RegisterHabits, ButtonDay, ButtonWeek, RegisterHabitsBottom, ButtonToSave, ButtonToCancel } from "./styles";

export default function Habits() {

    const { token } = useContext(UserContext);
    //console.log(token); 

    const [mensagem, setMensagem] = useState([]);

    useEffect(() => {

        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }

        console.log(config);


        const promise = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits", config);

        promise
            .then(res => {
                console.log(res.data);
                const mensagem = res.data;
                setMensagem(mensagem);
                //mensagem = "Amor"; 
                //setMensagem(mensagem); 
                //if(res.data.length === 0) return console.log(mensagem); 

            })
            .catch(err => {
                console.log(err.message);
                //mensagem = "Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!";
                //setMensagem(mensagem); 
                //console.log(mensagem); 
            })

    }, [])

    console.log(mensagem);

    function AddHabit() {
        return (
            <>
                <RegisterHabits>
                    <input placeholder="nome do hábito" type="email"></input>
                    <ButtonWeek>
                        <ButtonDay>D</ButtonDay>
                        <ButtonDay>S</ButtonDay>
                        <ButtonDay>T</ButtonDay>
                        <ButtonDay>Q</ButtonDay>
                        <ButtonDay>Q</ButtonDay>
                        <ButtonDay>S</ButtonDay>
                        <ButtonDay>S</ButtonDay>
                    </ButtonWeek>

                    <RegisterHabitsBottom>
                        <ButtonToCancel onClick={MostrarCard}>Cancelar</ButtonToCancel>
                        <ButtonToSave>Salvar</ButtonToSave>
                    </RegisterHabitsBottom>

                </RegisterHabits>

            </>
        )
    }

    const [cardIsVisible, setCardIsVisible] = useState(false); 


    function MostrarCard () {
        setCardIsVisible(!cardIsVisible); 
    }

    return (
        <>
            <Header></Header>
            <ContainerHabits>

                <Container>
                    <Navbar>
                        <h2>Meus hábitos</h2>
                        <ButtonAddition onClick={MostrarCard}>+</ButtonAddition>
                    </Navbar>

                    {cardIsVisible ? <AddHabit setCardIsVisible={setCardIsVisible}/> : ""}


                    {
                        mensagem.length === 0 ? <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p> : <p></p>
                    }


                </Container>
                <Footer></Footer>

            </ContainerHabits>

        </>
    )
}