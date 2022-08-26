import React, {useContext} from 'react'
import {useNavigate} from 'react-router-dom'

import {Context} from '../Context'
import ProductItem from '../components/ProductItem'
import './CategoryPage.scss'

function Jewelry() {
    const {jewelry} = useContext(Context)
    const history = useNavigate()
    console.log(history)

    const jewelryItems = jewelry.map(item => (
        <ProductItem 
            key={item?.id}
            id={item?.id}
            name={item?.name}
            imageUrl={item?.imageUrl}
            price={item.price}
            currentPrice={item?.price.current.value}
            previousPrice={item?.price.previous.value}
        />
    ))

    return(
        <section className="products__page jewelry__products">
            {jewelryItems}
        </section>
    )
}

export default Jewelry