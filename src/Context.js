import React, {useState, useEffect} from 'react'
import axios from 'axios'

const Context = React.createContext()

function ContextProvider (props) {
    const [apparel, setApparel] = useState([])
    const [shoes, setShoes] = useState([])
    const [jewelry, setJewelry] = useState([])
    const [cosmetics, setCosmetics] = useState([])
    const [cartItems, setCartItems] = useState([])
    const [addedToCart, setAddedToCart] = useState(false)

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

    function addToCart(id) {
        [...apparel, ...shoes, ...jewelry, ...cosmetics].map(item => {
            setAddedToCart(true)
            if (Number(item.id) === Number(id)) {
                setCartItems(prevCartItems => [...prevCartItems, item])
            }
            setTimeout(() => {
                setAddedToCart(false)
            }, 1500);
        })
    }

    function removeFromCart(id) {
        const index = cartItems.findIndex(item => item.id === id)
        const updatedArr = [...cartItems]
        updatedArr.splice(index, 1)
        setCartItems(updatedArr)
    }

    return (
        <Context.Provider value={{apparel, shoes, jewelry, cosmetics, cartItems, addToCart, removeFromCart, addedToCart}}>
            {props.children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}