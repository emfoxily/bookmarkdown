const express = require('express')
const mongoose = require('mongoose')
const app = express()

const Bookmarks = require('./models/bookmarks.js')
const seed = require('./models/seed.js')

app.use(express.json())
app.use(express.static('public'))

const bookmarkController = require('./controllers/bookmarks.js')

const uri = 'mongodb://emily:VBhQaVFYwHhecq4@ds117846.mlab.com:17846/heroku_2m3d047j' || 'mongodb://localhost:27017/bookmrkdown'

app.use('/bookmarks', bookmarkController)

mongoose.connect(uri, {
    useNewUrlParser: true 
})
mongoose.connection.once('open', () => {
    console.log('connected to mongoose!')
})

// Bookmarks.create( seed, (err, data) => {
//     if (err) console.log(err.message)
//     console.log('added bookmarks');
//   })

app.listen(3000, () => {
    console.log('listening...');
})