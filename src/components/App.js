//import dayjs from 'dayjs';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { GlobalStyle } from '../styles/global';
import Habits from './Habits/Habits';
import SignInPage from './Sign/SignInPage';
import SignUpPage from './Sign/SignUpPage';

//UserContext.Provider value={{variavel1, setVariavel1, variavel2, setVariavel2}}

export default function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<SignInPage />}/>
                <Route path='/sign-up' element={<SignUpPage />}/>
                <Route path='/habits' element={<Habits />}/>
           </Routes>
        <GlobalStyle />

        </BrowserRouter>
    )
}