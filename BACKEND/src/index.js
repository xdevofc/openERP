const users = require('./data/db')
const express = require('express')
const cors = require('cors')


const app = express()
app.use(cors())
const port = 3000 

app.get('/', (req, res) =>{
    res.send("Hello world")
})

app.get('/api/users', (req,res) =>{
    res.send(users)
})

app.listen(port, () =>{
    console.log(`Example app listening on port ${port}`)
})