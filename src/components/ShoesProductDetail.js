import React, {useContext, useRef} from 'react'
import {useParams} from 'react-router-dom'

import './ProductDetail.scss'
import {Context} from '../Context'
import LikeImage from '../images/love.svg'
import LikeFilledImage from '../images/love-filled.svg'

function ShoesProductDetail() {
    const {shoes, addToCart, addedToCart, toggleLike} = useContext(Context)
    const {shoesId} = useParams()

    const thisShoes = shoes.find(item => Number(item.productCode) === Number(shoesId))

    // const imgRef = useRef(null)

    // function mouseEnter() {
    //     imgRef.current.src = LikeFilledImage
    // }

    // function mouseLeave() {
    //     imgRef.current.src = LikeImage
    // }

    const favIcon = thisShoes.isFavorite ? 
                    <div onClick={() => toggleLike(thisShoes.id, thisShoes.pageName)}  className="product__detail-like-btn">
                        <img style={{cursor: 'pointer'}}  src={LikeFilledImage} />
                    </div> : 
                    <div onClick={() => toggleLike(thisShoes.id, thisShoes.pageName)}  className="product__detail-like-btn">
                        <img style={{cursor: 'pointer'}}  src={LikeImage} />
                    </div>

    return (
        <section className="product__detail">
            <div className="product__detail-img-box">
                <img className="product__detail-img" src={`https://${thisShoes?.imageUrl}`}/>
            </div>
            <div className="product__detail-info">
                <p className="product__detail-name">{thisShoes?.name}</p>
                <h3 className="product__detail-price">{thisShoes?.price.current.text}</h3>
                <p className="product__detail-colour">COLOUR: <span>{thisShoes?.colour}</span></p>
                <div className="product__detail-btns">
                    <button onClick={() => addToCart(thisShoes.id)} className="product__detail-cart-btn">{addedToCart ? 'ADDED' : 'ADD TO CART'}</button>
                    {favIcon}
                </div>
            </div>
        </section>
    )
}

export default ShoesProductDetail