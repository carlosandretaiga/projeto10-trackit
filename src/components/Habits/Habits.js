import React, { useState, useEffect, useContext } from "react";
import ContainerHabits from "../Container/ContainerHabits";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import deletImg from "../../assets/images/delete.svg"
import axios from "axios";
import UserContext from "../contexts/UserContext";
import { Container, ButtonAddition, ListsHabits, ButtonDelete, Navbar, RegisterHabits, ButtonDay, ButtonWeek, RegisterHabitsBottom, ButtonToSave, ButtonToCancel, ListHabit, ListHabitTop } from "./styles";

export default function Habits() {

    const { token } = useContext(UserContext);
    const [listHabits, setListHabits] = useState([]);
    const [idHabit, setIdHabit] = useState(); 

    useEffect(() => {

        const config = {
            headers: {
                Authorization: 'Bearer ' + `${token}`
                //Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MzI5MCwiaWF0IjoxNjUzODQwNTQ1fQ.p6Nuh_FgowRLiNEgMBFaaZKAe-ceeT8HzSOOHurEB04"
            }
        }; 
        
        const promise = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits", config);

        promise
            .then(res => {
                if(res.data.length !== 0) {
                    //const newListHabits = res.data; 
                    setListHabits([...res.data]); 
                }

            })
            .catch(err => {
                console.log(err.message);
            })

    }, [])

    
    const [nameHabit, setNameHabit] = useState(''); 
    const [dayNumber, setDayNumber] = useState([]); 
    const [days, setDays] = useState(["D", "S", "T", "Q", "Q", "S", "S"]); 

    
    function deleteHabit(index,nome) { 
        const idHabit = nome.id; 
        if (window.confirm("Por favor confirme a exclusão do hábito!")) {
           setIdHabit(idHabit); 
        }

        function resetHabits() {
            const config = {
                headers: {
                    Authorization: 'Bearer ' + `${token}`
                    //Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MzI5MCwiaWF0IjoxNjUzODQwNTQ1fQ.p6Nuh_FgowRLiNEgMBFaaZKAe-ceeT8HzSOOHurEB04"
                }
            }; 
            
            const promise = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits", config);
    
            promise
                .then(res => {
                    if(listHabits.length >= 2) {
                        
                        setListHabits([...res.data]); 
                    } else {
                        setListHabits([]);
                    }
                })
                .catch(err => {
                    console.log(err.message);
                })
        }

       const promise = axios.delete(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${idHabit}`, {
            headers: {
              Authorization: 'Bearer ' + `${token}`
            }
          });

          promise
            .then(res => {
                console.log(res.data); 
                resetHabits()
                console.log(listHabits); 
          
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


    function resetHabits() {
        const config = {
            headers: {
                Authorization: 'Bearer ' + `${token}`
            }
        }; 
        
        const promise = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits", config);

        promise
            .then(res => {
                if(listHabits.length >= 0) {
                    
                    setListHabits([...res.data]); 
                } else {
                    setListHabits([]);
                }

            })
            .catch(err => {
                console.log(err.message);
                
                //alert("Conexão não realizada") 
            })
 
    }

    function submitForm(event) {
        event.preventDefault(); 
        console.log("Foi"); 

        const data = {
            name: nameHabit,
	        days: dayNumber 
        }

        const promise = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits", data, {
            headers: {
              Authorization: 'Bearer ' + `${token}`
            }
          });
        promise.then( () => {
            resetHabits()
            formCreateHabit()
            clearInputs()
        }
            
            ); 
    }


    const [cardIsVisible, setCardIsVisible] = useState(false); 


    function formCreateHabit () {
        setCardIsVisible(!cardIsVisible); 
    }



     const [todayHabits, setTodayHabits] = useState([]);


    useEffect(() => {

        const config = {
            headers: {
                Authorization: 'Bearer ' + `${token}`
                //Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MzI5MCwiaWF0IjoxNjUzODQwNTQ1fQ.p6Nuh_FgowRLiNEgMBFaaZKAe-ceeT8HzSOOHurEB04"
            }
        }; 
        
        const promise = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today", config);

        promise
            .then(res => {
                console.log("Aqui 1", res.data)
                setTodayHabits([...res.data]); 
                  
            })
            .catch(err => {
                console.log(err.message);
                //alert("Conexão não realizada") 
            })

    }, [])

   

    return (
        <>
            <Header></Header>
            <ContainerHabits>

                <Container>
                    <Navbar>
                        <h2>Meus hábitos</h2>
                        <ButtonAddition onClick={formCreateHabit}>+</ButtonAddition>
                    </Navbar>

                    {cardIsVisible ? 
                    <RegisterHabits>

                    <form onSubmit={submitForm}>
                        <input 
                        placeholder="nome do hábito" 
                        type="text" onChange={(e) => setNameHabit(e.target.value)} 
                        value={nameHabit} 
                        required>
                        </input>

                        <ButtonWeek>
                            {days.map((day,index) => <ButtonDay onClick={() => selectDay(index, day)} key={index}>{day}</ButtonDay>)}
                        </ButtonWeek>

                        <RegisterHabitsBottom>
                            <ButtonToCancel onClick={formCreateHabit}>Cancelar</ButtonToCancel>
                            <ButtonToSave>Salvar</ButtonToSave>
                        </RegisterHabitsBottom>
                    </form>
                  
                    </RegisterHabits>
                     : ""}

                     {listHabits.map((nome, index) => 
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
                        listHabits.length === 0 ? <p> Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p> : <p></p>
                    }

                </Container>
                <Footer></Footer>

            </ContainerHabits>

        </>
    )
}