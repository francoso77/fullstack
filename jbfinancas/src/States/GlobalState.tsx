import React, { useState } from "react";
import { GlobalStateInterface } from "../Interfaces/GlobalStateInterface";
import useLayoutState from "./LayoutState";
import useLoginState from "./LoginState";

export default function useGlobalState() {

    const { loginState, setLoginState } = useLoginState()
    const { layoutState, setLayoutState } = useLayoutState()

    const [globalState, setGlobalState] = useState<GlobalStateInterface>({
        loginState: loginState,
        setLoginState: setLoginState,
        layoutState: layoutState,
        setLayoutState: setLayoutState
    })

    return { globalState, setGlobalState }
}