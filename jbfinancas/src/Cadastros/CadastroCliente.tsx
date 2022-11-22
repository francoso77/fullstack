import React, { useContext, useState } from 'react';
import InputButton from '../Components/InputButton';
import InputText from '../Components/InputText';
import { ContextoGlobal } from '../Contextos/ContextoGlobal';
import { GlobalStateInterface } from '../Interfaces/GlobalStateInterface';


interface rsClientesInterface {
    id: string,
    cliente: string,
    cpf: string
}

export default function CadastroCliente() {


    const [rsClientes, setRsClientes] = useState<rsClientesInterface>({
        id: '',
        cliente: '',
        cpf: ''
    })

    
    const isLogado = (useContext(ContextoGlobal) as GlobalStateInterface).loginState.logado

  
        return (

        <>

            <h1>Cadastro Cliente</h1>

            { isLogado && <div>
                <InputText
                    label='Id: '
                    tipo='text'
                    valor={rsClientes.id}
                    id='txtId'
                    placeholder='id'
                    dados={rsClientes}
                    campo='id'
                    setState={setRsClientes}
                    valida='txt'
                />
                <InputText
                    label='Cliente: '
                    tipo='text'
                    valor={rsClientes.cliente}
                    id='txtCliente'
                    placeholder=''
                    dados={rsClientes}
                    campo='cliente'
                    setState={setRsClientes}
                    valida='txt'
                />
                <InputText
                    label='CPF: '
                    tipo='text'
                    valor={rsClientes.cpf}
                    id='txtCPF'
                    placeholder=''
                    dados={rsClientes}
                    campo='cpf'
                    setState={setRsClientes}
                    valida='cep'

                />
                <br />

                <InputButton
                    id='btConfirmar'
                    tipo='Button'
                    valor='OK'

                />
            </div>}
        </>

    )
}