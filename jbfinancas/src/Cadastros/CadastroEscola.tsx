import React, { useContext, useState } from 'react';
import InputButton from '../Components/InputButton';
import InputText from '../Components/InputText';
import { ContextoGlobal } from '../Contextos/ContextoGlobal';
import { EscolasInterface } from '../Interfaces/EscolasInterface';
import { GlobalStateInterface } from '../Interfaces/GlobalStateInterface';

export default function CadastroEscola() {

    const [rsEscolas, setRsEscolas] = useState<EscolasInterface>({
        id: '',
        escola: '',
        cnpj: ''
    })


    const isLogado = (useContext(ContextoGlobal) as GlobalStateInterface).loginState.logado
    const isAutorizado = (useContext(ContextoGlobal) as GlobalStateInterface).loginState.autorizado
    
    return (
        <>

            <h1>Cadastro Escolas</h1>
            
            {isAutorizado && isLogado ? 
            
            <div className='escola'>
                <InputText
                    label='Id: '
                    tipo='text'
                    valor={rsEscolas.id}
                    id='txtId'
                    placeholder='id'
                    dados={rsEscolas}
                    campo='id'
                    setState={setRsEscolas}
                    valida='txt'
                />
                <InputText
                    label='Escola: '
                    tipo='text'
                    valor={rsEscolas.escola}
                    id='txtEscola'
                    placeholder=''
                    dados={rsEscolas}
                    campo='escola'
                    setState={setRsEscolas}
                    valida='txt'
                />
                <InputText
                    label='CNPJ: '
                    tipo='text'
                    valor={rsEscolas.cnpj}
                    id='txtCNPJ'
                    placeholder=''
                    dados={rsEscolas}
                    campo='cnpj'
                    setState={setRsEscolas}
                    valida='cnpj'

                />
                <br />

                <InputButton
                    id='btConfirmar'
                    tipo='Button'
                    valor='OK'

                />
            </div>:
            <>
            </>
            }
        </>

    )

}