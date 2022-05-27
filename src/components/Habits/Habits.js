import React from "react";
import ContainerHabits from "../Container/ContainerHabits";
import Header from "../Header/Header"; 
import Footer from "../Footer/Footer";

import { Container, ButtonAddition, Navbar } from "./styles";

export default function Habits() {

    return (
        <>
        <Header></Header>
        <ContainerHabits>

            <Container>
            <Navbar>
            <h2>Meus hábitos</h2>
            <ButtonAddition>+</ButtonAddition>
            </Navbar>

            <p>
                Você não tem nenhum hábito cadastrado ainda. Adicione 
                um hábito para começar a trackear!
            </p>
            </Container>
            <Footer></Footer>
        
           
        </ContainerHabits>
       
         

         
       

        
        </>
    )
}