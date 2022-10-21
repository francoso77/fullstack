import React, { ChangeEvent, useState } from 'react';
import './Cadastros.css'

interface rsClientesInterface{
    id: number,
    empresa: string,
    cnpj: string
}

export default function CadastroCliente(){
 
    const [tmp_txtEmpresa, Settmp_txtEmpresa] = useState<string>('')
    
    const txtEmpresaonChange = (e: ChangeEvent<HTMLInputElement>) =>{
        Settmp_txtEmpresa(e.target.value.toUpperCase())

    }   

    return(
        <div className='CadastroCliente'>

            <h1>Cadastro Cliente</h1>
            <label htmlFor="txtid">Id</label>
            <input type="text" name="" id="txtid" />
            <label htmlFor="txtEmpresa">Cliente</label>
            <input type="text" name="" id="txtEmpresa" onChange={txtEmpresaonChange}/>
            <span>{tmp_txtEmpresa}</span>
            <label htmlFor="txtCNPJ">CNPJ</label>
            <input type="text" name="" id="txtCNPJ" />

        </div>
    )
}