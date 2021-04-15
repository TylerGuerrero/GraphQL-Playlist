const mongoose = require('mongoose');

// shape of the document
const AuthorSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number, 
        required: true
    }
}); 

// an instance of a model is a document
module.exports = mongoose.model('Authors', AuthorSchema)