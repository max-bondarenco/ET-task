import { object } from 'prop-types'

const HistoryDrugCard = ({ drug }) => {
    return (
        <div className="list-item">
            <div className="list-item-image">
                <img src={drug.image || '/default.jpg'} />
            </div>
            <div className="list-item-info">
                <h3>
                    {drug.count} {drug.name}
                </h3>
                <p>{drug.price * drug.count} uah</p>
            </div>
        </div>
    )
}

HistoryDrugCard.propTypes = {
    drug: object,
}

export default HistoryDrugCard
