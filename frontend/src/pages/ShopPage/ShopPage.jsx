import { useState } from 'react'
import Filtering from './Filtering'
import ShopItems from './ShopItems'

const ShopPage = () => {
    const [filters, setFilters] = useState({})

    return (
        <div className="shop-items">
            <Filtering filters={filters} setFilters={setFilters} />
            <ShopItems filters={filters} />
        </div>
    )
}

export default ShopPage
