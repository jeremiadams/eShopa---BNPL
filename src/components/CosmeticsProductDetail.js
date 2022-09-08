import React, {useContext, useRef} from 'react'
import {useParams} from 'react-router-dom'

import './ProductDetail.scss'
import {Context} from '../Context'
import LikeImage from '../images/love.svg'
import LikeFilledImage from '../images/love-filled.svg'

function CosmeticsProductDetail() {
    const {cosmetics, addToCart, addedToCart, toggleLike} = useContext(Context)
    const {cosmeticsId} = useParams()

    const thisCosmetics = cosmetics.find(item => Number(item.productCode) === Number(cosmeticsId))

    // const imgRef = useRef(null)

    // function mouseEnter() {
    //     imgRef.current.src = LikeFilledImage
    // }

    // function mouseLeave() {
    //     imgRef.current.src = LikeImage
    // }

    const favIcon = thisCosmetics.isFavorite ? 
                    <div onClick={() => toggleLike(thisCosmetics.id, thisCosmetics.pageName)}  className="product__detail-like-btn">
                        <img style={{cursor: 'pointer'}}  src={LikeFilledImage} />
                    </div> : 
                    <div onClick={() => toggleLike(thisCosmetics.id, thisCosmetics.pageName)}  className="product__detail-like-btn">
                        <img style={{cursor: 'pointer'}}  src={LikeImage} />
                    </div>

    return (
        <section className="product__detail">
            <div className="product__detail-img-box">
                <img className="product__detail-img" src={`https://${thisCosmetics?.imageUrl}`}/>
            </div>
            <div className="product__detail-info">
                <p className="product__detail-name">{thisCosmetics?.name}</p>
                <h3 className="product__detail-price">{thisCosmetics?.price.current.text}</h3>
                <p className="product__detail-colour">COLOUR: <span>{thisCosmetics?.colour}</span></p>
                <div className="product__detail-btns">
                    <button onClick={() => addToCart(thisCosmetics.id)} className="product__detail-cart-btn">{addedToCart ? 'ADDED' : 'ADD TO CART'}</button>
                    {favIcon}
                </div>
            </div>
        </section>
    )
}

export default CosmeticsProductDetail