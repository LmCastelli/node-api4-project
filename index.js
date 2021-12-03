require('dotenv').config()
const express = require('express')

const server = express()

server.get('/api/users', (req, res) => {
    res.json([
        {id: 1, name: "Bill"},
        {id: 2, name: "Sally"},
        {id: 3, name: "George"},
    ])
})

server.post('/api/register', (req, res) => {
    
})

const PORT = process.env.PORT || 8000

server.listen(PORT, () => {
    console.log( `api4 listening on ${PORT}`)
})