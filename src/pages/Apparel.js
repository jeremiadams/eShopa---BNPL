import React, {useContext} from 'react'

import {Context} from '../Context'
import ProductItem from '../components/ProductItem'
import './CategoryPage.scss'

function Apparel() {
    const {apparel} = useContext(Context)

    const apparelItems = apparel.map(item => (
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
            {apparelItems}
        </section>
    )
}

export default Apparel
