import profileImg from '../../assets/images/profile.png'; 

import { Container } from './styles';

export default function Header() {

    return (
        <Container>

            <h1>TrackIt</h1>

            <img src={profileImg} alt="" />

        </Container>
    )
}