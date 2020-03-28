let mongoose = require('mongoose')

let emailSchema = new mongoose.Schema({
  email: String
}, {
  timestamps: true
})

module.exports = mongoose.model('Email', emailSchema)