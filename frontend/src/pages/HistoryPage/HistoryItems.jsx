import { array } from 'prop-types'
import HistoryDrugCard from './HistoryDrugCard'

const HistoryItems = ({ history }) => {
    return (
        <div>
            {history.map((item) => (
                <div key={item._id}>
                    <div>
                        <p>{item.email}</p>
                        <p>{item.createdAt}</p>
                    </div>
                    {item.items.map((drug) => (
                        <div key={drug._id}>
                            <HistoryDrugCard drug={drug} />{' '}
                        </div>
                    ))}
                </div>
            ))}
        </div>
    )
}

HistoryItems.propTypes = {
    history: array,
}

export default HistoryItems
