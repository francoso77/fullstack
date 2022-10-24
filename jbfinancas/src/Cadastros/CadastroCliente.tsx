import React, { ChangeEvent, useState } from 'react';
import InputText from '../Components/InputText';
import './Cadastros.css'


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
        <div className='CadastroCliente'>

            <h1>Cadastro Cliente</h1>
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
        </div>
    )
}