import React from "react";

import dayjs from "dayjs";
import "dayjs/locale/pt-br";


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
                        <h2>{dayjs().locale("pt-br").format("dddd, DD/MM")}</h2>
                        
                    </Navbar>

                   
                </Container>
                <Footer></Footer>

            </ContainerHabits>

        </>
    )
}