import React, { createContext, useState } from 'react'
import { Outlet } from 'react-router-dom'
import { LoginContextoInterface } from '../Interfaces/LoginContextoInterface'


import Footer from './Footer'
import Header from './Header'

import './Layout.css'

export const loginContextoPadrao = {
    logado: false,
    nome: '',
    updateLogin: (logado: boolean, nome: string) => { }
}


export const LoginContexto = createContext<LoginContextoInterface>({ ...loginContextoPadrao })

export default function Layout() {

    const [login, setLogin] = useState({ logado: false, nome: '' })

    const updateLogin = (logado: boolean, nome: string) => {
        setLogin({ logado: logado, nome: nome })
    }


    return (
        <>
            <LoginContexto.Provider value={{ ...login, updateLogin: updateLogin }}>
                <Header />
                
                <Outlet />

                <Footer />

            </LoginContexto.Provider>
        </>
    )
}