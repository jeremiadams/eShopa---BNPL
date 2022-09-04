import React, {useContext} from 'react'

import {Context} from '../Context'
import ProductItem from '../components/ProductItem'
import './CategoryPage.scss'

function Cosmetics() {
    const {cosmetics} = useContext(Context)

    const cosmeticsItems = cosmetics.map(item => (
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
            pageName={'cosmetics'}
        />
    ))

    return(
        <section className="products__page cosmetics__products">
            {cosmeticsItems}
        </section>
    )
}

export default Cosmetics