import React, {useRef} from 'react'

import './ProductItem.scss'
import LikeImage from '../images/love.svg'
import LikeFilledImage from '../images/love-filled.svg'

function ProductItem(props) {
    const imgRef = useRef(null)

    function mouseEnter() {
        imgRef.current.src = LikeFilledImage
    }

    function mouseLeave() {
        imgRef.current.src = LikeImage
    }

    return (
        <div className="product__item">
            <img className="product__item-img" src={`https://${props.imageUrl}`} alt={`Image of ${props.name}`}/>
            <div className="product__item-name-box"><p className="product__item-name">{props.name}</p></div>
            <div><h3 className="product__item-price">{props.price.current.text}</h3></div>
            <div onMouseEnter={mouseEnter} onMouseLeave={mouseLeave} className="product__item-like-box">
                <img style={{cursor: 'pointer'}} ref={imgRef} src={LikeImage} />
            </div>
        </div>
    )
}

export default ProductItem