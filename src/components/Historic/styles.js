import styled from 'styled-components'; 

export const Container = styled.div`
    margin-top: 80px;
    padding-bottom: 500px;
    margin-left: 15px;

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
        margin-top: 40px;
        width: 338px;
      

        color: #666666;
    }

`
export const RegisterHabitsBottom = styled.div`
margin-top: 20px;
margin-right: 15px;
display: flex;
justify-content: end;
align-items: center;

`

export const ButtonToSave = styled.div`

display: flex;
justify-content: center;
align-items: center;

cursor: pointer;

font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 15.976px;
line-height: 20px;
/* identical to box height */

text-align: center;

color: #FFFFFF;
width: 84px;
height: 35px;

background: #52B6FF;
border-radius: 4.63636px;

`
export const ButtonToCancel = styled.div`

display: flex;
justify-content: center;
align-items: center;

cursor: pointer;

margin-right: 23px;

font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 15.976px;
line-height: 20px;
/* identical to box height */

text-align: center;

color: #52B6FF;
width: 84px;
height: 35px;

background: var(--white);
border-radius: 4.63636px;

`


export const RegisterHabits = styled.div`
    padding-top: 20px;
    padding-left: 15px;
    display: flex;
    flex-direction: column;
    margin-top: 60px;

    width: 340px;
    height: 180px;

    background: #FFFFFF;
    border-radius: 5px;

    input {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 5px; 
        width: 303px;
        height: 41px;
        font-weight: 400;
        font-size: 18px;
        line-height: 21px;
        padding: 0 1.5rem;
        background-color: #FFFFFF;
        border: 1px solid #D5D5D5;
        border-radius: 3px;
        
    &::placeholder {
        font-weight: 400;
        font-size: 19px;
        line-height: 21px;
        padding-left: 5px;
        display: flex;
        align-items: center;
        color: var(--gray-medium);
    }
}
`

export const ButtonWeek = styled.div`
    margin-top: 12px;
    margin-left: 0px;
    display: flex;
    justify-content: start;  
`

export const ButtonDay = styled.div`
    box-sizing: border-box;
    width: 30px;
    margin-right: 5px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    background: #FFFFFF;
    border: 1px solid #D5D5D5;
    border-radius: 5px;

    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 19.976px;
    line-height: 25px;
    /* identical to box height */


    color: #DBDBDB;
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