const express = require('express')
const bookmark = express.Router()
const Bookmarks = require('../models/bookmarks.js')

bookmark.post('/', (req, res) => {
  Bookmarks.create(req.body, (err, createdBookmark) => {
    res.json(createdBookmark)
  })
})

bookmark.get('/', (req, res) => {
  Bookmarks.find({}, (err, foundBookmarks) => {
    res.json(foundBookmarks)
  })
})

bookmark.delete('/:id', (req, res) => {
  Bookmarks.findByIdAndRemove(req.params.id, (err, deletedBookmark) => {
    res.json(deletedBookmark)
  })
})

bookmark.put('/:id', (req, res) => {
  Bookmarks.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedBookmark) => {
    res.json(updatedBookmark)
  })
})

module.exports = bookmark
