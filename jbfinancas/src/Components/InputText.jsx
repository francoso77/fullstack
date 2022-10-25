import React, { useState } from "react";
import ClsValidaCampo from "../Utils/ClsValidaCampos";
import './InputText.css'

export default function InputText({
    label,
    id,
    tipo,
    valor,
    placeholder,
    dados,
    campo,
    setState,
    valida,
}: {
    label: String,
    id: String,
    tipo: String,
    valor: String,
    placeholder: String,
    dados: any,
    campo: String,
    setState: React.Dispatch<React.SetStateAction<any>>,
    valida: String
}) {

    const validaCampo: ClsValidaCampo = new ClsValidaCampo()

    let CEP_ATIVO: Boolean = true

    const buscaCEP = (CEP: String) => {
        if (CEP) {
            validaCampo.verificaCEP(CEP).then(temCEP => {
                if (temCEP) {
                    CEP_ATIVO = true

                } else {
                    CEP_ATIVO = false
                }
            }).catch(ERR => {
                CEP_ATIVO = false
            })
        }
    }
    const [validacao, setValidacao] = useState('')

    const validarNaoVazio = (evento: any) => {

        let vr: any = evento.target.value


        if (valida === 'txt' && validaCampo.campoVazio(vr)) {
            setValidacao("Campo não pode ser vázio!")
        } else if (valida === 'cpf' && !validaCampo.eCPF(vr)) {
            setValidacao("CPF Inválido!")
        } else if (valida === 'cnpj' && !validaCampo.eCNPJ(vr)) {
            setValidacao("CNPJ Inválido!")
        } else if (valida === 'uf' && !validaCampo.eUF(vr)) {
            setValidacao("UF Inválido!")
        } else if (valida === 'sexo' && !validaCampo.eSEXO(vr)) {
            setValidacao('SEXO inválido!')
        } else if (valida === 'cep' && buscaCEP(vr)) {
            if (!CEP_ATIVO) {
                setValidacao('CEP inválido!')
            }

        } else if (valida === 'tel' && !validaCampo.eTEL(vr)) {
            setValidacao('Formato correto do tel é (xx) xxxxx-xxxx')
        } else {
            setValidacao("")
        }
    }

    return (
        <>
            <label>{label}</label>
            <input
                type={tipo}
                id={id}
                value={valor}
                placeholder={placeholder}
                dados={dados}
                campo={campo}
                onBlur={validarNaoVazio}
                onChange={(evento) => { setState({ ...dados, [campo]: evento.target.value }) }}
            />
            <span className={id}>{validacao}</span>
        </>
    )
}
