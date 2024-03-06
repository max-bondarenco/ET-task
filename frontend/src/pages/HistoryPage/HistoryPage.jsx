import { useState } from 'react'
import HistoryForm from './HistoryForm'
import HistoryItems from './HistoryItems'

const HistoryPage = () => {
    const [history, setHistory] = useState([])

    return (
        <section>
            <HistoryForm setHistory={setHistory} />
            <HistoryItems history={history} />
        </section>
    )
}

export default HistoryPage
