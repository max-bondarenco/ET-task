import { Outlet } from 'react-router'
import ShopsNav from '../pages/ShopPage/ShopsNav'

const ShopPageLayout = () => {
    return (
        <section className="shop">
            <ShopsNav />
            <Outlet />
        </section>
    )
}

export default ShopPageLayout
