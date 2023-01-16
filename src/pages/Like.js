import React, {useContext} from 'react'
import {Link} from 'react-router-dom'

import {Context} from '../Context'
import ProductItem from '../components/ProductItem'
import './CategoryPage.scss'
import './Like.scss'

function Like() {
    const {likedItems, executeScroll} = useContext(Context)
    // console.log(likedItems)

    const likedItemsElems = likedItems.map(item => (
        <ProductItem 
            key={item?.id}
            id={item?.id}
            name={item?.name}
            imageUrl={item?.imageUrl}
            price={item?.price}
            currentPrice={item?.price.current.value}
            previousPrice={item?.price.previous.value}
            productCode={item?.productCode}
            isFavorite={item.isFavorite}
            pageName={item.pageName}
        />
    ))

    return(
        <section className="products__page apparel__products"> 
            {
                likedItems.length > 0 ? likedItemsElems :
                <div className="liked__items-empty-box">
                    <h3 className="liked__items-empty">You have no Saved Items</h3>
                    <p className="liked__items-empty-span">Start saving as you shop by selecting the little heart. Easy.</p>
                    <Link to="/"><button onClick={executeScroll} className="liked__items-empty-btn">Start Shopping</button></Link>
                </div> 
            }
        </section>
    )
}

export default Like