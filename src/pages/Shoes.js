import React, {useContext} from 'react'

import {Context} from '../Context'
import ProductItem from '../components/ProductItem'
import './CategoryPage.scss'

function Shoes() {
    const {shoes} = useContext(Context)

    const shoesItems = shoes.map(item => (
        <ProductItem 
            key={item?.id}
            id={item?.id}
            name={item?.name}
            imageUrl={item?.imageUrl}
            price={item?.price}
            currentPrice={item?.price.current.value}
            previousPrice={item?.price.previous.value}
            productCode={item?.productCode}
            pageName={'shoes'}
        />
    ))

    return(
        <section className="products__page shoes__products">
            {shoesItems}
        </section>
    )
}

export default Shoes