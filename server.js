const express = require('express')
const app = express()
const cors = require('cors')
const { ppid } = require('process')
const MongoClient = require('mongodb').MongoClient
require('dotenv').config()
// const PORT = 8004

let db,
    dbConnectionString = process.env.DB_STRING,
    dbName = 'test',
    collection 

MongoClient.connect(dbConnectionString)
    .then(client => {
        console.log('Connected to Database')
        db = client.db(dbName)
        collection = db.collection('todotasks')
    })

app.listen(process.env.PORT || PORT, () => {
    console.log(`Server is running on port 8004`)
})
