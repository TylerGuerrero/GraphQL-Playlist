const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// shape of the document
const bookSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    genre: {
        type: String,
        required: true
    },
    authorId: {
        type: String,
        required: true
    }
})

// a instance of a model is a document
module.exports = mongoose.model('Book', bookSchema);