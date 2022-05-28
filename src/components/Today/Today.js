import React from "react";
import ContainerHabits from "../Container/ContainerHabits";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";



import { Container, Navbar } from "./styles";

export default function Today() {



    return (
        <>
            <Header></Header>
            <ContainerHabits>

                <Container>
                    <Navbar>
                        <h2>Segunda, 17/05</h2>
                        
                    </Navbar>

                   
                </Container>
                <Footer></Footer>

            </ContainerHabits>

        </>
    )
}