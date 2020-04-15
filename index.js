const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.get('/', (req, res) => {
    return res.json({
        status: true,
        message: 'Hello Salwa:)',
        data: null 
    })
})

app.post('/', (req, res) => {
    if (req.body.message === undefined) {
        return res.json({
            status: false,
            message: 'Field message is required',
            data: null
        })
    }

    return res.json([
        status: true,
        message: req.body.message,
        data: null 
    ])
})

app.listen(1485, () => {
    console.log('App running on port 1485')
})