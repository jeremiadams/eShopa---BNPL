import React, {useContext} from 'react'
import {useParams} from 'react-router-dom'

import './ProductDetail.scss'
import {Context} from '../Context'
import LikeImage from '../images/love.svg'
import LikeFilledImage from '../images/love-filled.svg'

function ApparelProductDetail() {
    const {apparel, addToCart, addedToCart, toggleLike} = useContext(Context)
    const {apparelId} = useParams()

    const thisApparel = apparel.find(item => Number(item.productCode) === Number(apparelId))

    // const imgRef = useRef(null)

    // function mouseEnter() {
    //     imgRef.current.src = LikeFilledImage
    // }

    // function mouseLeave() {
    //     imgRef.current.src = LikeImage
    // }

    const favIcon = thisApparel.isFavorite ? 
                    <div onClick={() => toggleLike(thisApparel.id, thisApparel.pageName)}  className="product__detail-like-btn">
                        <img alt="" style={{cursor: 'pointer'}}  src={LikeFilledImage} />
                    </div> : 
                    <div onClick={() => toggleLike(thisApparel.id, thisApparel.pageName)}  className="product__detail-like-btn">
                        <img alt="" style={{cursor: 'pointer'}}  src={LikeImage} />
                    </div>

    return (
        <section className="product__detail">
            <div className="product__detail-img-box">
                <img alt={thisApparel?.name} className="product__detail-img" src={`https://${thisApparel?.imageUrl}`}/>
            </div>
            <div className="product__detail-info">
                <p className="product__detail-name">{thisApparel?.name}</p>
                <h3 className="product__detail-price">{thisApparel?.price.current.text}</h3>
                <p className="product__detail-colour">COLOUR: <span>{thisApparel?.colour}</span></p>
                <div className="product__detail-btns">
                    <button onClick={() => addToCart(thisApparel.id)} className="product__detail-cart-btn">{addedToCart ? 'ADDED' : 'ADD TO CART'}</button>
                    {favIcon}
                </div>
            </div>
        </section>
    )
}

export default ApparelProductDetail