import styled from 'styled-components'; 

export const Container = styled.div`
    margin-top: 80px;
    padding-bottom: 500px;

    h2 {
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 22.976px;
        line-height: 29px;
        /* identical to box height */
        color: #126BA5;
    }

    p {
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 17.976px;
        line-height: 22px;
        margin-top: 20px;
        width: 338px;
        padding-top: 30px;

        color: #666666;
    }

`

export const Navbar = styled.div`
    position: fixed;
    display: flex;
    align-items: center;

`

export const ButtonAddition = styled.div`

    display: flex;
    cursor: pointer;
    justify-content: center;
    align-items: center;
    margin-left:140px;
    width: 40px;
    height: 35px;
    color: var(--white); 
    background: #52B6FF;
    border-radius: 4.63636px;
    font-weight: 600;
    font-size: 26.976px;

    transition: filter 0.2s;

    &:hover {
        filter: brightness(0.9);
    }

`