import React, {useRef, useContext} from 'react'

import './CartItem.scss'
import {Context} from '../Context'
import Remove from '../images/remove-big.svg'
import RemoverHover from '../images/remove-hover.svg'

function CartItem(props) {
    const imgRef = useRef(null)
    const {removeFromCart} = useContext(Context)

    function mouseEnter() {
        imgRef.current.src = RemoverHover
    }

    function mouseLeave() {
        imgRef.current.src = Remove
    }

    return(
        <div className="cart__item-box">
            <div className="cart__item">
                <div className="cart__item-img">
                    <img src={`https://${props.imageUrl}`}/>
                </div>
                <div className="cart__item-info">
                    <div>
                        <p className="cart__item-name">{props.name}</p>
                        <p className="cart__item-brand">{props.brandName}</p>
                    </div>
                    <div className="cart__item-price--color">
                        <h3 className="cart__item-price">{props.price}</h3>
                        <p className="cart__item-color">COLOUR: <span>{props.colour}</span></p>
                    </div>
                </div>
                <div onClick={() => removeFromCart(props.id)} onMouseEnter={mouseEnter} onMouseLeave={mouseLeave} className="cart__item-remove">
                    <img ref={imgRef} src={Remove}/>
                </div>
            </div>

        </div>
    )
}

export default CartItem