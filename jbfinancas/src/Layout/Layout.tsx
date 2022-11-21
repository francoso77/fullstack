import React from 'react'
import { Outlet } from 'react-router-dom'
import { ContextoGlobal } from '../Contextos/ContextoGlobal'
import useGlobalState from '../States/GlobalState'
import Footer from './Footer'
import Header from './Header'
import './Layout.css'


export default function Layout() {

    const {globalState, setGlobalState} = useGlobalState()


    return (
        <>
            <ContextoGlobal.Provider value={{globalState: globalState, setGlobalState: setGlobalState}}>
                <Header />
                
                <Outlet />

                <Footer />

            </ContextoGlobal.Provider>
        </>
    )
}