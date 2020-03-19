const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    isGeneric: Boolean,
    form: String,
    description: String,
    authorId: String,
    collectionId: String
});

mongoose.model('Item', itemSchema);