import styled from 'styled-components'; 

export const Container = styled.header`

    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 0.7rem;
    
    position: fixed;
    z-index: 2;
    width: 375px;
    height: 70px;
    top: 0px;
    background: var(--blue-medium);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);

    img {
        margin-right: 10px;
        width: 51px;
        object-fit: cover;
        height: 51px;
        border-radius: 100%;
    }


    h1 {
        font-family: 'Playball', cursive;
        color: var(--white); 
    }

`