import React, { useState, useEffect } from "react";
import ContainerHabits from "../Container/ContainerHabits";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

import deletImg from "../../assets/images/delete.svg"

import { useNavigate, useParams } from "react-router-dom";

import axios from "axios";



import { useContext } from "react";
import UserContext from "../contexts/UserContext";

import { Container, ButtonAddition, ListsHabits, ButtonDelete, Navbar, RegisterHabits, ButtonDay, ButtonWeek, RegisterHabitsBottom, ButtonToSave, ButtonToCancel, ListHabit, ListHabitTop } from "./styles";

//Comentários: o post tem quer ter a url, body, autorization.
// O body pode ser qualquer coisa

//Para marcar um hábito como concluido, tem que manda um body no post: 
//"url, {}, config"
//bota url, null, config


export default function Habits() {

    const { token } = useContext(UserContext);

    const navigate = useNavigate(); 

    const [reload, setReload] = useState(0);

    const [mensagem, setMensagem] = useState([]);
    const [idHabit, setIdHabit] = useState(); 

    useEffect(() => {

        const config = {
            headers: {
                Authorization: 'Bearer ' + `${token}`
                //Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MzI5MCwiaWF0IjoxNjUzODQwNTQ1fQ.p6Nuh_FgowRLiNEgMBFaaZKAe-ceeT8HzSOOHurEB04"
            }
        }
        
        const promise = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits", config);

        promise
            .then(res => {
                if(res.data.length !== 0) {
                    const newListHabits = res.data; 
                    setMensagem(newListHabits); 
                }

            })
            .catch(err => {
                console.log(err.message);
                
                //alert("Conexão não realizada") 
            })

    }, [reload])

    
 
    const [nameHabit, setNameHabit] = useState(''); 
    const [dayNumber, setDayNumber] = useState([]); 
    const [days, setDays] = useState(["D", "S", "T", "Q", "Q", "S", "S"]); 


    
    function deleteHabit(index,nome) {
        console.log("Chegou aqui")
        console.log(index); 
        console.log(nome.id); 
        const idHabit = nome.id; 
        setIdHabit(idHabit); 

       const promise = axios.delete(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${idHabit}`, {
            headers: {
              Authorization: 'Bearer ' + `${token}`
            }
          });

          promise
            .then(res => {
                console.log(res.data); 
            //setMensagem([...res.data]);
            setMensagem(mensagem)
            //navigate("/habits")

        })
            .catch(err => {
                console.log(err); 
            })
          

    }

    function selectDay(index,day) {
        
        setDayNumber([...dayNumber, index]); 
        console.log(dayNumber);    
    }

    function clearInputs() {
        setNameHabit(""); 
    }

    function submitForm(event) {
        event.preventDefault(); 
        console.log("Foi"); 

        const data = {
            name: nameHabit,
	        days: dayNumber 
        }

        axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits", data, {
            headers: {
              Authorization: 'Bearer ' + `${token}`
            }
          });
        //promise.then(setCardIsVisible); 
        //console.log(data); 

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

                    {cardIsVisible ? 
                    <RegisterHabits>

                    <form onSubmit={submitForm}>
                        <input placeholder="nome do hábito" type="text" onChange={(e) => setNameHabit(e.target.value)} value={nameHabit} required></input>
                        <ButtonWeek>
                            {days.map((day,index) => <ButtonDay onClick={() => selectDay(index, day)} key={index}>{day}</ButtonDay>)}
                        </ButtonWeek>

                        <RegisterHabitsBottom>
                            <ButtonToCancel onClick={MostrarCard}>Cancelar</ButtonToCancel>
                            <ButtonToSave>Salvar</ButtonToSave>
                        </RegisterHabitsBottom>
                    </form>
                  
                    </RegisterHabits>
                     : ""}

                     
                     {mensagem.map((nome, index) => 
                <ListsHabits>
                     <ListHabit key={index}>
                         <ListHabitTop>
                         {nome.name}
                         <ButtonDelete onClick={() => deleteHabit(index,nome)}><img src={deletImg} alt="delete"></img></ButtonDelete>
                         </ListHabitTop>

                         <ButtonWeek>
                            {days.map((day,index) => <ButtonDay key={index}>{day}</ButtonDay>)}
                        </ButtonWeek>

                     </ListHabit>
                </ListsHabits>
                     )}

                    {
                        mensagem.length === 0 ? <p> Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p> : <p></p>
                    }

                </Container>
                <Footer></Footer>

            </ContainerHabits>

        </>
    )
}