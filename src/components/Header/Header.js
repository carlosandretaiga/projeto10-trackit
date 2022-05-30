
import { useContext } from "react";
import UserContext from "../contexts/UserContext";


//import profileImage from '../../assets/images/profile.png'; 

import { Container } from './styles';

export default function Header() {

    //const { token } = useContext(UserContext);
    const {profileImg} = useContext(UserContext); 

    return (
        <Container>

            <h1>TrackIt</h1>

            <img src={profileImg} alt="" />

        </Container>
    )
}