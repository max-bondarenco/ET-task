import { array } from 'prop-types'
import HistoryDrugCard from './HistoryDrugCard'

const HistoryItems = ({ history }) => {
    return (
        <div className="history-wrapper">
            {history.map((item) => (
                <div className="history-items" key={item._id}>
                    <div className="history-item-info">
                        <p>Total price - {item.total} uah</p>
                        <p>
                            Order date -{' '}
                            {new Date(item.createdAt).toLocaleDateString()}
                        </p>
                    </div>
                    <div className="history-item-list">
                        {item.items.map((drug) => (
                            <HistoryDrugCard key={drug._id} drug={drug} />
                        ))}
                    </div>
                </div>
            ))}
        </div>
    )
}

HistoryItems.propTypes = {
    history: array,
}

export default HistoryItems
