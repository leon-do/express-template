const express = require('express')
const router = express.Router()
const Joi = require('joi')

// http://localhost:8000/api/trades/?exchange=gdax
router.get('/', (req, res) => {
    // validation
    const schema = {
        exchange: Joi.string().min(3)
    }
    const validation = Joi.validate(req.query, schema)
    if (validation.error) {
        return res.status(400).send(validation.error.details[0])
    }

    // db query


    // send
    res.send({
        type: 'trades',
        exchange: req.query.exchange
    })
})

module.exports = router