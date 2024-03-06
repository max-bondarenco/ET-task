import { useRef, useState } from 'react'
import axios from '../../../api/axios'
import Loader from '../../components/Loader'
import { func } from 'prop-types'

const HistoryForm = ({ setHistory }) => {
    const emailRef = useRef(null)
    const [loading, setLoading] = useState(false)

    const handleFormSubmit = async (e) => {
        e.preventDefault()

        try {
            setLoading(true)
            const res = await axios.get(`/orders/${emailRef.current.value}`)
            setHistory(res.data.data)
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    }

    if (loading) return <Loader />

    return (
        <div>
            <form onSubmit={handleFormSubmit}>
                <label htmlFor="name">Введіть електронну пошту</label>
                <input
                    required
                    ref={emailRef}
                    id="email"
                    type="email"
                    name="email"
                />
                <button type="submit">Отримати історію замовлень</button>
            </form>
        </div>
    )
}

HistoryForm.propTypes = {
    setHistory: func,
}

export default HistoryForm
