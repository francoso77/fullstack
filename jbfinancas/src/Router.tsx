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
            },
            {
                path: "cadastrofornecedor",
                element: <CadastroFornecedor />,
            },
            {
                path: "cadastroconta",
                element: <CadastroConta />,
            }
        ],
    },
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "*",
        element: <Erro404 />,
    }
])