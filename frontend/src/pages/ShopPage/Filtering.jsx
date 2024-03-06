import { func, object } from 'prop-types'

const Filtering = ({ filters, setFilters }) => {
    return (
        <div className="shop-items-filtering">
            <div className="shop-filter">
                <label htmlFor="price">Sort by price:</label>
                <select
                    onChange={(e) =>
                        setFilters((prev) => ({
                            ...prev,
                            [e.target.name]: e.target.value,
                        }))
                    }
                    id="price"
                    name="price"
                    defaultValue={filters.price}
                >
                    <option value="">Standart</option>
                    <option value="price">Cheap first</option>
                    <option value="-price">Expensive first</option>
                </select>
            </div>
            <div className="shop-filter">
                <label htmlFor="createdAt">Sort by date of creation:</label>
                <select
                    onChange={(e) =>
                        setFilters((prev) => ({
                            ...prev,
                            [e.target.name]: e.target.value,
                        }))
                    }
                    id="createdAt"
                    name="createdAt"
                    defaultValue={filters.createdAt}
                >
                    <option value="">Standart</option>
                    <option value="-createdAt">New first</option>
                    <option value="createdAt">Old first</option>
                </select>
            </div>
        </div>
    )
}

Filtering.propTypes = {
    setFilters: func,
    filters: object,
}

export default Filtering
