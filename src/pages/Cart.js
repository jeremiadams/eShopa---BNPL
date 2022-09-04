import React, {useState, useContext} from 'react'
import {Link} from 'react-router-dom'
import Confetti from 'react-confetti'

import './Cart.scss'
import {Context} from '../Context'
import CartItem from '../components/CartItem'

function Cart() {
    const [ordered, setOrdered] = useState(false)
    const [orderSuccess, setOrderSuccess] = useState(false)
    const {cartItems, clearCart} = useContext(Context)

    const cartItemsElems = cartItems.map(item => (
        <CartItem
            key={item.id} 
            id={item.id}
            name={item.name}
            brandName={item.brandName}
            imageUrl={item.imageUrl}
            colour={item.colour}
            price={item.price.current.text}
        />
    ))

    let subTotal = 0
    for (let i = 0; i < cartItems.length; i++) {
        subTotal = subTotal + cartItems[i].price.current.value
    }

    function handleOrder() {
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

    return(
        <section className="cart">
            <div className="cart__items">
                {
                    cartItems.length > 0 ? cartItemsElems : 
                    <div>
                        <h3 className="cart__items-empty">Your Cart is Empty</h3>
                        <Link to="/"><button className="cart__items-empty-btn">Start Shopping</button></Link>
                    </div>
                }    
            </div>
            <div className="cart__checkout">
                <h3 className="cart__checkout-heading">Checkout</h3>
                <p className="cart__checkout-total">Sub Total: <span>$ {subTotal.toFixed(2)}</span></p>
                {cartItems.length > 0 && <button onClick={handleOrder} className="cart__checkout-btn">{ordered ? 'Ordering...' : 'Place Order'}</button>}
                {orderSuccess && <div className="cart__checkout-success">
                    <Confetti />
                    <p>Order Placed Successfully ✨</p>
                </div>}
            </div>
        </section>
    )
}

export default Cart