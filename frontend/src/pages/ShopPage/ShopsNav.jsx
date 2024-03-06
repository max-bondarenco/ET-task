import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import axios from '../../../api/axios'
import Loader from '../../components/Loader'

const ShopsNav = () => {
    const [shops, setShops] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const fetchShops = async () => {
            try {
                setLoading(true)
                const res = await axios.get('/shops')
                setShops(res.data.data)
            } catch (error) {
                console.log(error)
            } finally {
                setLoading(false)
            }
        }

        fetchShops()
    }, [])

    if (loading) return <Loader />

    return (
        <div className="shop-nav">
            <h3>Shops:</h3>
            <nav>
                {shops.map((shop) => (
                    <NavLink to={`${shop._id}`} key={shop._id}>
                        <div>{shop.name}</div>
                    </NavLink>
                ))}
            </nav>
        </div>
    )
}

export default ShopsNav
