import React from "react";
import { useState, useEffect } from "react";

import dayjs from "dayjs";
import "dayjs/locale/pt-br";

import axios from "axios";

import { useContext } from "react";
import UserContext from "../contexts/UserContext";


import ContainerHabits from "../Container/ContainerHabits";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

//import {ReactComponent as CheckLogo } from "../../assets/images/checkbox.svg"; 

import styled from "styled-components"; 


import { Container, ContainerPercentage } from "./styles";

import TodayHabits from "./TodayHabits";

export default function Today() {

    const { userData } = useContext(UserContext);

    const { token } = useContext(UserContext);
    const {setPercentage} = useContext(UserContext); 

    const [refresh, setRefresh] = useState(""); 
    const [ todayHabits, setTodayHabits ] = useState([]);
    const [doneArr, setDoneArr] = useState([]); 

    const percentage = (doneArr.length*100)/todayHabits.length;

    useEffect(() => {
        const token = userData.token; 
        const config = {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        };

        const promise = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today", config);
        promise.then((res) => {
            setDoneArr(res.data.filter(habit => habit.done?true:false));
            setTodayHabits(res.data); 

        }); 
    },[refresh]); 

    useEffect(()=> {
        setPercentage(percentage); 
    },[percentage])

    function CheckUncheck(id, done) {
        id = id.toString();

        const config = {
            headers: {
                Authorization: `Bearer ${userData.token}`,
            },
        }; 

        const body = {};
        if (done) {
            const promise = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/check`, body, config);
            promise.then(() => {
                setRefresh(id); 
            }); 
            promise.catch((res) => alert(res));
        } else {
            const promise = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/uncheck`, body, config);
            promise.then(() => {
                setRefresh(id*2); 
            });
            promise.catch((res) => alert(res)); 
        }
    }



    

    return (
        <>
        <Header></Header>
        <ContainerHabits>
            <Container>     
            
            <h2>{dayjs().locale("pt-br").format("dddd, DD/MM")}</h2>

            {todayHabits.length === 0 ? <p>Você ainda não possui nehum hábito!</p>: ""}
           
            <ContainerPercentage color={doneArr.length > 0 ? "#8FC549" : "#bababa"}>
                {doneArr.length>0?`${parseInt(percentage)}% dos hábitos concluídos`: "Nenhum hábito concluído ainda"}
            </ContainerPercentage>

            {todayHabits.map((habit, index) =>(
                <TodayHabits
                habit={habit}
                CheckUncheck={CheckUncheck}
                key={index}
                 />
            ))}
            </Container>
            <Footer></Footer>
        </ContainerHabits>

        </>
    )
}
