import React, { useContext, useState } from 'react';
import InputText from '../Components/InputText';
import { URL_SERVIDOR } from '../Config/Setup';
import { ContextoGlobal } from '../Contextos/ContextoGlobal';
import { EscolasInterface } from '../Interfaces/EscolasInterface';
import { GlobalStateInterface } from '../Interfaces/GlobalStateInterface';

export default function CadastroEscola() {

    const [rsEscolas, setRsEscolas] = useState<EscolasInterface>({
        id: '',
        escola: '',
        cnpj: '',
        email: ''
    })


    const isLogado = (useContext(ContextoGlobal) as GlobalStateInterface).loginState.logado
    const isAutorizado = (useContext(ContextoGlobal) as GlobalStateInterface).loginState.autorizado
    

    const btIncluir = () => {

        setTimeout(() => {
            
            fetch(URL_SERVIDOR.concat('/escola'), {
                body: JSON.stringify(rsEscolas),
                headers: {
                    'Content-Type': 'application/json',
                },
                method: 'POST'
            }).then (rs => {
                if (rs.status === 201) {
                    setRsEscolas ({escola: '', cnpj: '', email:'', id:''})
                }
            })


        }, 9000);
    }
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
                <InputText
                    label='E-mail: '
                    tipo='text'
                    valor={rsEscolas.email}
                    id='txtEMAIL'
                    placeholder=''
                    dados={rsEscolas}
                    campo='email'
                    setState={setRsEscolas}
                    valida='email'

                />
                <br />

                <input
                    id='btConfirmar'
                    type='Button'
                    value='Incluir'
                    onClick={btIncluir}

                />
            </div>:
            <>
            </>
            }
        </>

    )

}