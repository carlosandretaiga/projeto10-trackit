import React from "react";

import { Link } from "react-router-dom";
import {
    CircularProgressbar,
    CircularProgressbarWithChildren,
    buildStyles
  } from "react-circular-progressbar";
  import "react-circular-progressbar/dist/styles.css";

  // Radial separators
//import RadialSeparators from "./RadialSeparators";

import { useContext } from "react";
import UserContext from "../contexts/UserContext";

import { Container, FooterNav, Exemplo} from "./styles";





export default function Footer() {

  const { percentage } = useContext(UserContext);

 

    return (
        <>
        <Container>

            <FooterNav>
            <Link to={"/habits"}><span>Hábitos</span></Link>

            <Link to={"/today"} >
            <Exemplo>
            <CircularProgressbar
              value={percentage}
              strokeWidth="5"
              text={`Hoje`}
              maxValue={100}
              background
              backgroundPadding={6}
              styles={buildStyles({
                backgroundColor: "#3e98c7",
                textColor: "#fff",
                pathColor: "#fff",
                trailColor: "transparent"
                
              })}
            />
            </Exemplo>
            </Link>
               <Link to={"/historic"} > <span>Histórico</span></Link>
            </FooterNav>

        </Container>
        
        </>
    )
}
