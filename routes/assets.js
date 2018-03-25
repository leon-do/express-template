const express = require('express')
const router = express.Router()
const Joi = require('joi')

// http://localhost:8000/api/assets/?name=bitcoin
router.get('/', (req, res) => {
    // validation
    const schema = {
        name: Joi.string().min(3)
    }
    const validation = Joi.validate(req.query, schema)
    if (validation.error) {
        return res.status(400).send(validation.error.details[0])
    }

    // db query

    // send
    res.send({
        type: 'assets',
        coin: req.query.name
    })
})


module.exports = router