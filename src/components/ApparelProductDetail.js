import React, {useContext, useRef} from 'react'
import {useParams} from 'react-router-dom'

import './ProductDetail.scss'
import {Context} from '../Context'
import LikeImage from '../images/love.svg'
import LikeFilledImage from '../images/love-filled.svg'

function ApparelProductDetail() {
    const {apparel} = useContext(Context)
    const {apparelId} = useParams()

    const thisApparel = apparel.find(item => Number(item.productCode) === Number(apparelId))

    const imgRef = useRef(null)

    function mouseEnter() {
        imgRef.current.src = LikeFilledImage
    }

    function mouseLeave() {
        imgRef.current.src = LikeImage
    }

    return (
        <section className="product__detail">
            <div className="product__detail-img-box">
                <img className="product__detail-img" src={`https://${thisApparel?.imageUrl}`}/>
            </div>
            <div className="product__detail-info">
                <p className="product__detail-name">{thisApparel?.name}</p>
                <h3 className="product__detail-price">{thisApparel?.price.current.text}</h3>
                <p className="product__detail-colour">COLOUR: <span>{thisApparel?.colour}</span></p>
                <div className="product__detail-btns">
                    <button className="product__detail-cart-btn">ADD TO CART</button>
                    <div onMouseEnter={mouseEnter} onMouseLeave={mouseLeave} className="product__detail-like-btn">
                        <img style={{cursor: 'pointer'}} ref={imgRef} src={LikeImage} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ApparelProductDetail