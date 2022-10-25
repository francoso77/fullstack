import React from 'react'
import './InputButton.css'

export default function InputButton(
    {
        id,
        tipo,
        valor
        
    }:{
        id: string,
        tipo: string,
        valor: string
        
                
    }) {
    return (
        <>
            <input 
                id= {id}
                type={tipo} 
                value={valor}
                
                
                
            />
        </>
    )
}