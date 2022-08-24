import React, {useState, useEffect} from 'react'
import axios from 'axios'

const Context = React.createContext()

function ContextProvider (props) {

    useEffect(() => {
        const options = {
            methos: 'GET',
            url: 'http://localhost:8080/shoes'
        }

        axios.request(options).then((response) => {
            console.log(response.data)
        })
    }, [])

    return (
        <Context.Provider value={''}>
            {props.children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}