import React, { useState } from 'react';
import InputButton from '../Components/InputButton';
import InputText from '../Components/InputText';
import { LoginContexto } from '../Layout/Layout'

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

    return (
        <LoginContexto.Consumer>{({ nome, updateLogin, logado }) => 
            
            <div className='CadastroCliente'>
                <input type="button" value="Alterar Usuário" onClick={() => updateLogin(true, 'Frank')} />

                {logado && <h1>Cadastro Cliente</h1>}

                {logado && <InputText
                    label='Id: '
                    tipo='text'
                    valor={rsClientes.id}
                    id='txtId'
                    placeholder='id'
                    dados={rsClientes}
                    campo='id'
                    setState={setRsClientes}
                    valida='txt'
                />}
                {logado && <InputText
                    label='Cliente: '
                    tipo='text'
                    valor={rsClientes.cliente}
                    id='txtCliente'
                    placeholder=''
                    dados={rsClientes}
                    campo='cliente'
                    setState={setRsClientes}
                    valida='txt'
                />}
                {logado && <InputText
                    label='CPF: '
                    tipo='text'
                    valor={rsClientes.cpf}
                    id='txtCPF'
                    placeholder=''
                    dados={rsClientes}
                    campo='cpf'
                    setState={setRsClientes}
                    valida='tel'
                />}
                <br />

                {logado && <InputButton
                    id='btConfirmar'
                    tipo='Button'
                    valor='OK'

                />}

            </div>
        }
        </LoginContexto.Consumer>
    )
}