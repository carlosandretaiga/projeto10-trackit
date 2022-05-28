import React from "react";
import ContainerHabits from "../Container/ContainerHabits";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";


import { Container, Navbar } from "./styles";

export default function Historic() {



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
