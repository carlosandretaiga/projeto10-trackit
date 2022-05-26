//import dayjs from 'dayjs';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { GlobalStyle } from '../styles/global';
import Login from './Login/Login';
import SignUp from './SignUp/SignUp';

export default function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Login />}/>
                <Route path='/sign-up' element={<SignUp />}/>
           </Routes>
        <GlobalStyle />

        </BrowserRouter>
    )
}