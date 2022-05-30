//import dayjs from 'dayjs';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import UserContext from './contexts/UserContext';

import { GlobalStyle } from '../styles/global';
import Habits from './Habits/Habits';
import SignInPage from './Sign/SignInPage';
import SignUpPage from './Sign/SignUpPage';
import { useState } from 'react';
import Today from './Today/Today';
import Historic from './Historic/Historic';

//UserContext.Provider value={{variavel1, setVariavel1, variavel2, setVariavel2}}

export default function App() {

    const [token, setToken] = useState(''); 

    const [profileImg, setProfileImg] = useState(''); 

    return (
        <BrowserRouter>
                 <UserContext.Provider value={
                     {token, setToken, 
                    profileImg, setProfileImg, 
                     }
                }>
            <Routes>
                <Route path='/' element={<SignInPage />}/>
                <Route path='/sign-up' element={<SignUpPage />}/>
                <Route path='/habits/' element={<Habits />}/>
                <Route path='/today' element={<Today />}/>
                <Route path='/historic' element={<Historic />}/>
           </Routes>
                </UserContext.Provider>
        <GlobalStyle />

        </BrowserRouter>
    )
}