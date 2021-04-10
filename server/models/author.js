const mongoose = require('mongoose');

const AuthorSchema = mongoose.Schema({
    name: {type: String},
    age: {type: Number}
}); 

module.exports = mongoose.model('Authors', AuthorSchema)