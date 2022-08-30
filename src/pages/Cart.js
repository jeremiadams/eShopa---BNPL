import React, {useContext} from 'react'

import './Cart.scss'
import {Context} from '../Context'
import CartItem from '../components/CartItem'

function Cart() {
    const {cartItems} = useContext(Context)

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

    return(
        <section className="cart">
            <div className="cart__items">
                {
                    cartItems.length > 0 ? cartItemsElems : <h3 className="cart__items-empty">Your Cart is Empty</h3>
                }    
            </div>
            <div className="cart__checkout">
                <h3 className="cart__checkout-heading">Checkout</h3>
                <p className="cart__checkout-total">Sub Total: <span>$ {subTotal.toFixed(2)}</span></p>
                {cartItems.length > 0 && <button className="cart__checkout-btn">Place Order</button>}
            </div>
        </section>
    )
}

export default Cart