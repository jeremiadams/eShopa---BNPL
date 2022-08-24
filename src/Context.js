import React, {useState, useEffect} from 'react'
import axios from 'axios'

const Context = React.createContext()

function ContextProvider (props) {

    return (
        <Context.Provider value={''}>
            {props.children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}