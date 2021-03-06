import styled from 'styled-components'; 

export const Container = styled.div`

padding-top: 30px;
top: 0;
left: 0;
right: 0;
display: flex;
flex-direction: column;
//justify-content: center;
//align-items: center;
padding: 10px 0;
border-color: #e2e8f0; 
border: 1px solid #e2e8f0;

-webkit-box-align: center;

width: 375px;
height: 720px;
z-index: 1;
height: 100%;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
background-color: ${props => props.habilitado ? `#FFFFFF` : `#E5E5E5` };

transition: all .3s ease;

&::before, ::after {
    border-color: #e2e8f0; 
    border-width: 0;
    border-style: solid;
}
`