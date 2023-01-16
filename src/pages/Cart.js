import React, {useState, useContext, useEffect} from 'react'
import {Link} from 'react-router-dom'
import Confetti from 'react-confetti'

import './Cart.scss'
import {Context} from '../Context'
import CartItem from '../components/CartItem'

function Cart() {
    const [orderDenied, setOrderDenied] = useState(false)   
    const {cartItems, loanPoints, handleCheckout, requestLoanPoints, ordered, orderSuccess, executeScroll} = useContext(Context)

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

    useEffect(() => {
        if (subTotal > 0 && subTotal > loanPoints) {
            setOrderDenied(true)
        } else if (subTotal > 0 && loanPoints >= subTotal) {
            setOrderDenied(false)
        } else if (cartItems.length < 1 ) {
            setOrderDenied(false)
        }
    }, [cartItems, loanPoints])


    return(
        <section className="cart">
            <div className="cart__items">
                {
                    cartItems.length > 0 ? cartItemsElems : 
                    <div>
                        <h3 className="cart__items-empty">Your Cart is Empty</h3>
                        <Link to="/"><button onClick={executeScroll} className="cart__items-empty-btn">Start Shopping</button></Link>
                    </div>
                }    
            </div>
            <div className="cart__checkout">
                <h3 className="cart__checkout-heading">Checkout</h3>
                <p className="cart__checkout-total">Sub Total: <span>$ {subTotal.toFixed(2)}</span></p>
                {cartItems.length > 0 && <button onClick={() => handleCheckout(subTotal)} className="cart__checkout-btn">{ordered ? 'Ordering...' : 'Place Order'}</button>}
                {orderSuccess && <div className="cart__checkout-success">
                    <Confetti />
                    <p>Order Placed Successfully ✨</p>
                </div>}
                {orderDenied && <div className="cart__checkout-denied">
                    <p>Not Enough Loan Points</p>
                    <button onClick={() => requestLoanPoints()}>Request Loan Points</button>
                </div>}
                <div className="cart__loan">
                <h3 className="cart__loan-heading">Loan Points Available: <span>$ {loanPoints.toFixed(2)}</span></h3>
                <p className="cart__loan-description" >What are Loan Points? <span>Loan Points show the total price of items allowable to take on loan.</span></p>
                </div>
            </div>
        </section>
    )
}

export default Cart