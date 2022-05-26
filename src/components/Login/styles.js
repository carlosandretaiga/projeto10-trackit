import styled from 'styled-components'; 

export const ContainerLogin = styled.div`

   display: flex;
   flex-direction: column;
   justify-content: center;  
   align-items: center;

    width: 375px;
    height: 600px;
`

export const Button = styled.div`
    margin: 0 auto; 
    margin-top: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;

    width: 303px;
    height: 45px;
    background-color: var(--blue-light);
    border-radius: 4.63636px;

    p {
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 20.976px;
        line-height: 26px;
        text-align: center;

        color: var(--white);
    }
`

export const RegisterLogin = styled.div`
    margin-top: 15px;
    width: 320px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const Input = styled.input`
    margin-top: 5px; 
    width: 303px;
    height: 41px;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    padding-left: 10px;
    background-color: #FFFFFF;
    border: 1px solid #D5D5D5;
    border-radius: 3px;
        
    &::placeholder {
        font-style: italic;
        font-weight: 400;
        font-size: 18px;
        line-height: 21px;
        padding-left: 10px;
        display: flex;
        align-items: center;
        color: #AFAFAF;
    }

`;