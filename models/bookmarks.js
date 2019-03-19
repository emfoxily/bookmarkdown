const mongoose = require('mongoose')

const bookmarkSchema = new mongoose.Schema({
  website: {
    type: String,
    required: true,
    unique: true
  },
  url: {
    type: String,
    required: true,
    unique: true
  },
  tags: [String]
})

const Bookmarks = mongoose.model('Bookmarks', bookmarkSchema)

module.exports = Bookmarks