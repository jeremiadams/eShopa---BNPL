import React, {useContext, useRef} from 'react'
import {useParams} from 'react-router-dom'

import './ProductDetail.scss'
import {Context} from '../Context'
import LikeImage from '../images/love.svg'
import LikeFilledImage from '../images/love-filled.svg'

function JewelryProductDetail() {
    const {jewelry, addToCart, addedToCart, toggleLike} = useContext(Context)
    const {jewelryId} = useParams()

    const thisJewelry = jewelry.find(item => Number(item.productCode) === Number(jewelryId))

    // const imgRef = useRef(null)

    // function mouseEnter() {
    //     imgRef.current.src = LikeFilledImage
    // }

    // function mouseLeave() {
    //     imgRef.current.src = LikeImage
    // }

    const favIcon = thisJewelry.isFavorite ? 
                    <div onClick={() => toggleLike(thisJewelry.id, thisJewelry.pageName)}  className="product__detail-like-btn">
                        <img style={{cursor: 'pointer'}}  src={LikeFilledImage} />
                    </div> : 
                    <div onClick={() => toggleLike(thisJewelry.id, thisJewelry.pageName)}  className="product__detail-like-btn">
                        <img style={{cursor: 'pointer'}}  src={LikeImage} />
                    </div>

    return (
        <section className="product__detail">
            <div className="product__detail-img-box">
                <img className="product__detail-img" src={`https://${thisJewelry?.imageUrl}`}/>
            </div>
            <div className="product__detail-info">
                <p className="product__detail-name">{thisJewelry?.name}</p>
                <h3 className="product__detail-price">{thisJewelry?.price.current.text}</h3>
                <p className="product__detail-colour">COLOUR: <span>{thisJewelry?.colour}</span></p>
                <div className="product__detail-btns">
                    <button onClick={() => addToCart(thisJewelry.id)} className="product__detail-cart-btn">{addedToCart ? 'ADDED' : 'ADD TO CART'}</button>
                    {favIcon}
                </div>
            </div>
        </section>
    )
}

export default JewelryProductDetail