import React, {useState, useEffect} from 'react'
import axios from 'axios'

const Context = React.createContext()

function ContextProvider (props) {
    const [apparel, setApparel] = useState([])
    const [shoes, setShoes] = useState([])
    const [jewelry, setJewelry] = useState([])
    const [cosmetics, setCosmetics] = useState([])

    useEffect(() => {
        const options = {
            methos: 'GET',
            url: 'http://localhost:8080/apparel'
        }

        axios.request(options).then((response) => {
            setApparel(response.data.products)
        })
    }, [])

    useEffect(() => {
        const options = {
            methos: 'GET',
            url: 'http://localhost:8080/shoes'
        }

        axios.request(options).then((response) => {
            setShoes(response.data.products)
        })
    }, [])

    useEffect(() => {
        const options = {
            methos: 'GET',
            url: 'http://localhost:8080/jewelry'
        }

        axios.request(options).then((response) => {
            setJewelry(response.data.products)
        })
    }, [])

    useEffect(() => {
        const options = {
            methos: 'GET',
            url: 'http://localhost:8080/cosmetics'
        }

        axios.request(options).then((response) => {
            setCosmetics(response.data.products)
        })
    }, [])

    return (
        <Context.Provider value={{apparel, shoes, jewelry, cosmetics}}>
            {props.children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}