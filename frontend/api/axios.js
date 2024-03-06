import axios from 'axios'

const baseURL = 'https://meddel-server.onrender.com/api'

export default axios.create({
    baseURL,
})
