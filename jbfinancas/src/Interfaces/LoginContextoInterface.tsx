import React from 'react'

export interface LoginContextoInterface {
    logado: boolean,
    nome: string,
    updateLogin: (logado: boolean, nome: string) => void
}
