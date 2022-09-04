import React, {useRef, useContext} from 'react'
import {Link} from 'react-router-dom'

import './ProductItem.scss'
import {Context} from '../Context'
import LikeImage from '../images/love.svg'
import LikeFilledImage from '../images/love-filled.svg'

function ProductItem(props) {
    const imgRef = useRef(null)
    const {toggleLike} = useContext(Context)

    // function mouseEnter() {
    //     if (imgRef.current.src === LikeFilledImage) {
    //         continue
    //     } else if (imgRef.current.src === LikeImage) {
    //         imgRef.current.src = LikeFilledImage
    //     }
    // }

    // function mouseLeave() {
    //     imgRef.current.src = LikeImage
    // }

    const favIcon = props.isFavorite ? 
                    <div onClick={() => toggleLike(props.id, props.pageName)}  className="product__item-like-box">
                        <img style={{cursor: 'pointer'}}  src={LikeFilledImage} />
                    </div> : 
                    <div onClick={() => toggleLike(props.id, props.pageName)}  className="product__item-like-box">
                        <img style={{cursor: 'pointer'}}  src={LikeImage} />
                    </div>

    return (
        <div className="product__item-box">

            <Link to={`/categories/${props.pageName}/${props.productCode}`}>
                <div className="product__item">
                    <img className="product__item-img" src={`https://${props.imageUrl}`} alt={`Image of ${props.name}`}/>
                    <div className="product__item-name-box"><p className="product__item-name">{props.name}</p></div>
                    <div><h3 className="product__item-price">{props.price.current.text}</h3></div>
                </div>
            </Link>
            {favIcon}
        </div>
    )
}

export default ProductItem