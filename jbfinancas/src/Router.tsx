import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import CadastroCliente from './Cadastros/CadastroCliente'
import CadastroFornecedor from './Cadastros/CadastroFornecedor'
import CadastroConta from './Cadastros/CadastroConta'
import Erro404 from './Layout/Erro404'
import Layout from './Layout/Layout'
import Login from './Login/Login'
import ErroAplication from './Layout/ErroAplication'

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        errorElement: <ErroAplication />,
        children: [
            {
                path: "cadastrocliente",
                element: <CadastroCliente />,
                errorElement: <ErroAplication />
            },
            {
                path: "cadastrofornecedor",
                element: <CadastroFornecedor />,
                errorElement: <ErroAplication />
            },
            {
                path: "cadastroconta",
                element: <CadastroConta />,
                errorElement: <ErroAplication />
            },
            {
                path: "login",
                element: <Login />,
                errorElement: <ErroAplication />
            },
        ],
    },
    {
        path: "*",
        element: <Erro404 />,
        errorElement: <ErroAplication />
    }
])