import React from 'react'
import './Header.css'
import {NavLink} from 'react-router-dom'

export default function Header(){
    return (
        <>
            <div className='topnav'>
                <NavLink to="/" end>Home</NavLink>
                <NavLink to="/cadastrocliente">Cliente</NavLink>
                <NavLink to="/cadastrofornecedor">Fornecedor</NavLink>
                <NavLink to="/cadastroconta">Conta</NavLink>
                <NavLink to="/login">Login</NavLink>
            </div>
        </>
    )
}