import dotenv from 'dotenv'
import app from './app.js'
import mongoose from 'mongoose'

dotenv.config()

mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log('Connected to db'))
    .catch((error) => console.log(error))

app.listen(process.env.PORT, () => {
    console.log('Server started')
})
