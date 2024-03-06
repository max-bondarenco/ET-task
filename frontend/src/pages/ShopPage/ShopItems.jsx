import { useCallback, useEffect, useState } from 'react'
import { useParams } from 'react-router'
import axios from '../../../api/axios'
import DrugCard from './DrugCard'
import { useSelector } from 'react-redux'
import Loader from '../../components/Loader'
import { object } from 'prop-types'

const ShopItems = ({ filters }) => {
    const { id } = useParams()
    const [drugs, setDrugs] = useState([])
    const favoriteIds = useSelector((state) => state.favorite.favoriteIds)
    const [loading, setLoading] = useState(false)

    const favoritesOnTop = useCallback(
        (data) => {
            return data.toSorted((drug1, drug2) => {
                const fav1 = favoriteIds.includes(drug1._id)
                const fav2 = favoriteIds.includes(drug2._id)
                if (fav1 ^ fav2) return fav1 ? -1 : 1
                return 0
            })
        },
        [favoriteIds]
    )

    const getQuery = useCallback((filters) => {
        let query = '?sort='
        Object.values(filters).forEach((value) => (query += `${value},`))
        return query.slice(0, query.length - 1)
    }, [])

    useEffect(() => {
        const fetchDrugs = async () => {
            try {
                setLoading(true)
                const query = getQuery(filters)
                const res = await axios.get(`/shops/${id}/drugs/${query}`)
                setDrugs(favoritesOnTop(res.data.data))
            } catch (error) {
                console.log(error)
            } finally {
                setLoading(false)
            }
        }

        fetchDrugs()
    }, [id, filters, getQuery, favoritesOnTop])

    if (loading) return <Loader />

    return (
        <div className="shop-list">
            {drugs.map((drug) => (
                <DrugCard key={drug._id} drug={drug} />
            ))}
        </div>
    )
}

ShopItems.propTypes = {
    filters: object,
}

export default ShopItems
