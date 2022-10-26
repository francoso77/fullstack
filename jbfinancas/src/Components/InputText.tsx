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
    valida

}: {
    label: string,
    id: string,
    tipo: string,
    valor: string,
    placeholder: string,
    dados: any,
    campo: string,
    setState: React.Dispatch<React.SetStateAction<any>>,
    valida: string

}) {

    const [validaCEP, setValidaCEP] = useState<boolean>(false)

    const validaCampo: ClsValidaCampo = new ClsValidaCampo()

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
        } else if (valida === 'tel' && !validaCampo.eTEL(vr)) {
            setValidacao('Formato correto do tel é (xx) xxxxx-xxxx')
        } else if (valida === 'cep' && !validaCampo.eCEP(vr)) {
            console.log('dentro do else if cep: ')
            setValidacao('CEP Inválido!')
        } else {
            setValidacao("")
        }
    }

    return (
        <>
            <label className="labelInputText">{label}</label>
            <input className="InputText"
                type={tipo}
                id={id}
                value={valor}
                placeholder={placeholder}
                onBlur={validarNaoVazio}
                onChange={(evento) => { setState({ ...dados, [campo]: evento.target.value }) }}
            />
            <span className="spanValidacao">{validacao}</span>
        </>
    )
}
