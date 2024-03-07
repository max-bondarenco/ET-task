import express from 'express'
import shopsRouter from './routes/shops.route.js'
import ordersRouter from './routes/orders.route.js'
import cors from 'cors'
import errorHandler from './utils/errorHandler.js'

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(
    cors({
        origin: ['http://localhost:5173', 'https://meddel.netlify.app'],
    })
)

app.use('/api/shops', shopsRouter)
app.use('/api/orders', ordersRouter)

app.use('*', (req, res, next) => {
    res.status(404).send('Page not found')
})

app.use(errorHandler)

export default app
