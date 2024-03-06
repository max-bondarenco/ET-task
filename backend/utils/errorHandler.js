import AppError from './AppError.js'

export default (err, req, res, next) => {
    if (err.isAppError) return handleAppError(err, res)
    if (err.name === 'ValidationError') return handleDBError(err, res)

    handleUnknownError(err, res)
}

const handleAppError = (err, res) => {
    res.status(err.statusCode).json({
        success: false,
        status: err.status,
        message: err.message,
    })
}

const handleUnknownError = (err, res) => {
    console.log(err)
    res.status(500).json(err)
}

const handleDBError = (err, res) => {
    handleAppError(new AppError(400, err.message), res)
}
