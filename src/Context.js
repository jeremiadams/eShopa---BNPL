import React, {useState, useEffect} from 'react'
import axios from 'axios'

const Context = React.createContext()

function ContextProvider (props) {
    const [loanPoints, setLoanPoints] = useState(
        JSON.parse(localStorage.getItem('loanPoints')) || 500
        )

    const [apparel, setApparel] = useState([])
    const [shoes, setShoes] = useState([])
    const [jewelry, setJewelry] = useState([])
    const [cosmetics, setCosmetics] = useState([])
    const [cartItems, setCartItems] = useState([])
    const [likedItems, setLikedItems] = useState([])
    // const [addedLike, setAddedLike] = useState(false)
    const [addedToCart, setAddedToCart] = useState(false)
    const [ordered, setOrdered] = useState(false)
    const [orderSuccess, setOrderSuccess] = useState(false)

    const [shopRef, setShopRef] = useState(null)

    useEffect(() => {
        const options = {
            methos: 'GET',
            url: '/.netlify/functions/getApparelData'
        }

        axios.request(options).then((response) => {
            setApparel(response.data.products.map(item => {
                return {
                    ...item, 
                    isFavorite: false,
                    pageName: 'apparel'
                }
            }) )
        })
    }, [])

    useEffect(() => {
        const options = {
            methos: 'GET',
            url: '/.netlify/functions/getShoesData'
        }

        axios.request(options).then((response) => {
            setShoes(response.data.products.map(item => {
                return {
                    ...item, 
                    isFavorite: false,
                    pageName: 'shoes'
                }
            }) )
        })
    }, [])

    useEffect(() => {
        const options = {
            methos: 'GET',
            url: '/.netlify/functions/getJewelryData'
        }

        axios.request(options).then((response) => {
            setJewelry(response.data.products.map(item => {
                return {
                    ...item, 
                    isFavorite: false,
                    pageName: 'jewelry'

                }
            }) )
        })
    }, [])

    useEffect(() => {
        const options = {
            methos: 'GET',
            url: '/.netlify/functions/getCosmeticsData'
        }

        axios.request(options).then((response) => {
            setCosmetics(response.data.products.map(item => {
                return {
                    ...item, 
                    isFavorite: false,
                    pageName: 'cosmetics'
                }
            }) )
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
            return null
        })
    }

    function removeFromCart(id) {
        const index = cartItems.findIndex(item => item.id === id)
        const updatedArr = [...cartItems]
        updatedArr.splice(index, 1)
        setCartItems(updatedArr)
    }

    function clearCart() {
        setCartItems([])
    }

    function toggleLike(id, pageName) {
        [...apparel, ...shoes, ...jewelry, ...cosmetics].map(item => {
            // setAddedLike(true)
            if (Number(item.id) === Number(id)) {
                // setLikedItems(prevLikedItems => [...prevLikedItems, item])
                const ind = likedItems.findIndex(item => Number(item.id) === Number(id))
                const updatedArr = [...likedItems]
                if (ind === -1) {
                    updatedArr.push({
                        ...item,
                        isFavorite: true
                    })
                    setLikedItems(updatedArr)
                } else if (ind >= 0) {
                    updatedArr.splice(ind, 1)
                    setLikedItems(updatedArr)
                }
            }
            return null
        })

        if (pageName === 'apparel') {
            const updatedArr = apparel.map(apparel => {
                if (apparel.id === id) {
                    // console.log(apparel.id)
                    // console.log(!apparel.isFavorite) 
                    return {...apparel, isFavorite: !apparel.isFavorite}
                }
                return apparel
            })

            setApparel(updatedArr)


        } else if (pageName === 'shoes') {
            const updatedArr = shoes.map(shoes => {
                if (shoes.id === id) {

                    return {...shoes, isFavorite: !shoes.isFavorite}
                }
                return shoes
            })

            setShoes(updatedArr)

        } else if (pageName === 'jewelry') {
            const updatedArr = jewelry.map(jewelry => {
                if (jewelry.id === id) {

                    return {...jewelry, isFavorite: !jewelry.isFavorite}
                }
                return jewelry
            })

            setJewelry(updatedArr)

        } else if (pageName === 'cosmetics') {
            const updatedArr = cosmetics.map(cosmetics => {
                if (cosmetics.id === id) {

                    return {...cosmetics, isFavorite: !cosmetics.isFavorite}
                }
                return cosmetics
            })

            setCosmetics(updatedArr)

        }




    }

    
    function handleCheckout(subTotal) {
        if (loanPoints > 0 && (loanPoints - subTotal) >= 0) {
            setLoanPoints(prevLoanPoints => prevLoanPoints - subTotal)
            setOrdered(true)
            setTimeout(() => {
                setOrdered(false)
                clearCart()
                setOrderSuccess(true)
                setTimeout(() => {
                    setOrderSuccess(false)
                }, 8500)
            }, 2000);
        } 
        
    }

    function requestLoanPoints() {
        setLoanPoints(prevLoanPoints => prevLoanPoints + 250)
    }

    useEffect(() => {
        localStorage.setItem('loanPoints', JSON.stringify(loanPoints))
    }, [loanPoints])


    function updateShopRef(ref) {
        setShopRef(ref)
    }

    function executeScroll() {
        shopRef.current.scrollIntoView()
    }

    return (
        <Context.Provider value={{apparel, shoes, jewelry, cosmetics, cartItems, addToCart, removeFromCart, clearCart, addedToCart, likedItems, toggleLike, loanPoints, ordered, orderSuccess, handleCheckout, requestLoanPoints, updateShopRef, shopRef, executeScroll}}>
            {props.children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}