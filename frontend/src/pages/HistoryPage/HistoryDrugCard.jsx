import { object } from 'prop-types'

const HistoryDrugCard = ({ drug }) => {
    return (
        <div>
            <div>
                <img src={drug.image} />
            </div>
            <div>
                <p>{drug.price} uah</p>
                <p>{drug.name}</p>
                <p>{drug.count}</p>
            </div>
        </div>
    )
}

HistoryDrugCard.propTypes = {
    drug: object,
}

export default HistoryDrugCard
