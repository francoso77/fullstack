import React, { useState } from 'react';
import InputButton from '../Components/InputButton';
import InputText from '../Components/InputText';
import { LoginContexto } from '../Layout/Layout';


interface rsFornecedorInterface {
    id: string,
    fornecedor: string,
    cnpj: string
}


export default function CadastroFornecedor() {

    const [rsFornecedor, setRsFornecedor] = useState<rsFornecedorInterface>({
        id: '',
        fornecedor: '',
        cnpj: ''
    })
    return (
        <LoginContexto.Consumer>{
            ({ logado }) =>

                <>


                    <h1>Cadastro Fornecedor</h1>

                    {logado && <div>
                        <InputText
                            label='Id: '
                            tipo='text'
                            valor={rsFornecedor.id}
                            id='txtId'
                            placeholder='id'
                            dados={rsFornecedor}
                            campo='id'
                            setState={setRsFornecedor}
                            valida='txt'
                        />
                        <InputText
                            label='Fornecedor: '
                            tipo='text'
                            valor={rsFornecedor.fornecedor}
                            id='txtFornecedor'
                            placeholder=''
                            dados={rsFornecedor}
                            campo='fornecedor'
                            setState={setRsFornecedor}
                            valida='txt'
                        />
                        <InputText
                            label='CNPJ: '
                            tipo='text'
                            valor={rsFornecedor.cnpj}
                            id='txtCNPJ'
                            placeholder=''
                            dados={rsFornecedor}
                            campo='cnpj'
                            setState={setRsFornecedor}
                            valida='email'

                        />
                        <br />

                        <InputButton
                            id='btConfirmar'
                            tipo='Button'
                            valor='OK'

                        />
                    </div>}
                </>
        }
        </LoginContexto.Consumer>
    )
}