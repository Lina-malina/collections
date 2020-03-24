const mongoose = require('mongoose');

const collectionSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    },
    authorId: String,
    authorName: String
});

mongoose.model('Collection', collectionSchema);