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
    authorName: String,
    collectionId: String,
    comments: [{ comment: String, author: String }]
}, { usePushEach: true }); // UsePushEach is workaround to support array fields in mongoose

mongoose.model('Item', itemSchema);