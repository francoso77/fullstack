import React, { useState } from 'react'
import { LoginContexto } from '../Layout/Layout'
import './Login.css'

export default function Login() {
    
    const [usuario, setUsuario] = useState <string>('')
    
    const usuarioAlterado = (e: any) =>{
        setUsuario(e.target.value)
        
    }

    return (


        <LoginContexto.Consumer>{
            ({ nome, updateLogin, logado }) =>
                <>
                    <h1>Login</h1>

                    <input type="text" id="txtLogin" placeholder='Login' autoFocus 
                    onChange={usuarioAlterado}/>
                    <input type="password" id="txtSenha" placeholder='Senha' />
                    <br />

                    <input type="button" value="Login" id='btLogin' 
                    onClick={() => updateLogin(true, usuario)} />
                    <input type="button" value="Logout" id='btLogout'
                    onClick={() => updateLogin(false, '')} />
                </>


        }
        </LoginContexto.Consumer>
    )


}