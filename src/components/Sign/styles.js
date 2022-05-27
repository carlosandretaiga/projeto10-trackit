import styled from 'styled-components'; 

export const ContainerLogin = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: center;  
    align-items: center;

    width: 375px;
    height: 600px;


button[type="submit"] {
    margin: 0 auto; 
    cursor: pointer;
    border: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 1.5rem;
    margin-bottom: 1rem;

    font-style: normal;
    font-weight: 400;
    font-size: 20.976px;
    line-height: 26px;
    text-align: center;

    width: 303px;
    height: 45px;
    background-color: var(--blue-light);
    border-radius: 4.63636px;
    color: var(--white); 

    transition: filter 0.2s;

    &:hover {
        filter: brightness(0.9);
    }
   }


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

    & + input {
        margin-top: 1rem; 
    }
}


span {
    cursor: pointer;
    font-size: 13.976px;
    line-height: 17px;
    text-align: center;
    text-decoration-line: underline;
    color: var(--blue-light);
    }

`