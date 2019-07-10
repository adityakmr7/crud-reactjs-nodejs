const mongoose = require('mongoose');

const ArticleSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    title:{
        type: String,
        required: true,
    },
    body:{
        type: String,
        required: true
    }
}, {timestamp: true})

module.exports = mongoose.model('Article', ArticleSchema);