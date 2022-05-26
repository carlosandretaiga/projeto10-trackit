import {createGlobalStyle} from 'styled-components'; 



export const GlobalStyle = createGlobalStyle`

    :root {
        --background: #f0f2f5; 
        --blue-light: #52B6FF ;// para botões de login e sign-up
        --blue-medium: #126BA5;
        --gray-ligth: #CFCFCF; //botões de dias da semana
        --gray-medium: #DBDBDB; //inicial do dia da semana não selecionado
        --white: #FFFFFF;
        --black: #000000; 
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    //font-size: 16px (Desktop) 
    html {
        @media (max-width: 1080px) {
            font-size: 93.75%; //15px
        }

        @media (max-width: 720px) {
            font-size: 87.5%; //14px
        }
    }

    //REM - medida, 1rem = font-size = 16px 

    body {
        width: 100vw;
        display: flex;
        justify-content: center;
        scrollbar-width: none;
        -ms-overflow-style: none;

        background: var(--background);
        -webkit-font-smoothing: antialiased; 

    }

    body::-webkit-scrollbar {
    display: none;
    }


    body, input, textarea, button {
        font-family: 'Lexend Deca', sans-serif;
        font-weight: 400;
    }

    h1, h2, h3, h4, h5, h6, strong {
        font-weight: 600;
    }


    button {
        cursor: pointer;
    }

    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }

`
