import React, { useContext, useState } from 'react'
import './Login.css'
import { LoginInterface } from '../Interfaces/LoginInterface'
import { ContextoGlobal } from '../Contextos/ContextoGlobal'
import { GlobalStateInterface } from '../Interfaces/GlobalStateInterface'

export default function Login() {

    const [usuario, setUsuario] = useState<LoginInterface>({
        login: '',
        senha: '',
        token: ''
    })

    const setLoginState = (useContext(ContextoGlobal) as GlobalStateInterface).setLoginState

    const logar = () => {

        const URL_SERVIDOR: string = "http://localhost:3002"

        let urlPesquisa: string = URL_SERVIDOR.concat('/usuarios?usuario=')
        urlPesquisa = urlPesquisa.concat(usuario.login)
        urlPesquisa = urlPesquisa.concat('&senha=')
        urlPesquisa = urlPesquisa.concat(usuario.senha)

        console.log('usuario: ', usuario.login)
        console.log('senha: ', usuario.senha)

        fetch(urlPesquisa).then(rs => {
            return rs.json()
        }).then((dadosUsuarios: Array<LoginInterface>) => {
            if (dadosUsuarios.length > 0) {
                setLoginState({
                    logado: true,
                    nome: dadosUsuarios[0].login,
                    token: dadosUsuarios[0].token
                })
                console.log('Usuário encontrato... Login OK!!')
            } else {
                console.log('Usuário Não encontrato!!')
            }
        }).catch(erro => {
            console.log('Erro no Fetch....', erro)
        })

    }

    return (
        <>
            <h1>Login</h1>

            <input type="text" id="txtLogin" placeholder='Login' autoFocus
                onChange={(e) => setUsuario({ ...usuario, login: e.target.value })} />
            <input type="password" id="txtSenha" placeholder='Senha'
                onChange={(e) => setUsuario({ ...usuario, senha: e.target.value })} />
            <br />

            <input type="button" value="Login" id='btLogin'
                onClick={logar} />
            <input type="button" value="Logout" id='btLogout'
                onClick={() => setLoginState({ logado: false, nome: '', token: '' })} />
        </>
    )
}