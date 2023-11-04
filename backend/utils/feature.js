const errorHandler = (res, status = 501, message = "internal server error") => {
    return res.status(status).json(
        {
            message: message
        }
    )
}

module.exports = {
    errorHandler
}