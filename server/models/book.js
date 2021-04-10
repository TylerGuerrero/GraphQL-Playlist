const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// shape of the document
const bookSchema = new Schema({
    name: {type: String},
    genre: {type: String},
    authorId: {type: String}
})

// a instance of a model is a document
module.exports = mongoose.model('Book', bookSchema);