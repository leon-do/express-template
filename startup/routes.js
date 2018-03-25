const express = require('express')
const app = express()
const assets = require('../routes/assets')
const trades = require('../routes/trades')

module.exports = () => {
    app.use('/api/assets', assets)
    app.use('/api/trades', trades)
    app.listen(process.env.PORT || 8000)
}