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

app.set('view engine', ejs)
//public is where it goes to get what we need ie css if anyone accesses base/path
app.use(express.static('public'))
//helping us handle urls
app.use(express.urlencoded({extended:true}))
//will allow us to read the data that has been parsed
app.use(express.json())
//cross-origin resource sharing 
app.use(cors())

app.get('/', async (req, res) => {
    try{
        res.render('index.ejs')
    }catch{
        res.status(500).send({message: error.message})
    }
})


//port 8004
app.listen(process.env.PORT || PORT, () => {
    console.log(`Server is running on port 8004`)
})
