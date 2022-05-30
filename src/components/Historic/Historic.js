import React from "react";
import ContainerHabits from "../Container/ContainerHabits";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import 'dayjs/locale/pt-br'



import { Container, Navbar } from "./styles";

export default function Historic() {

const dayjs = require('dayjs'); 
dayjs.locale('pt-br') // usar locale espanhol globalmente

dayjs().format(); 

let now = dayjs().toDate(); 

console.log(now); 

    return (
        <>
            <Header></Header>
            <ContainerHabits>

                <Container>
                    <Navbar>
                        <h2>Histórico</h2>
                    </Navbar>

                    <p>Em breve você poderá ver o histórico dos seus hábitos aqui?</p>

                   
                </Container>
                <Footer></Footer>

            </ContainerHabits>

        </>
    )
}
