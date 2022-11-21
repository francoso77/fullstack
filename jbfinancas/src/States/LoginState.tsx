import React, { useState } from "react";
import { LoginStateInterface } from "../Interfaces/LoginStateInterface";

const loginStatePadrao = {
    nome:'',
    logado: false,
    token: ''
}

export default function useLoginState(){

    const [loginState, setLoginState] = useState<LoginStateInterface>({...loginStatePadrao})


    return { loginState, setLoginState}
}
