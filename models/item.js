const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
    payment: {
        type: String,
        required: true
    },
    isDrug: {
        type: Boolean,
        required: true
    },
    isPsycho: {
        type: Boolean,
        required: true
    },
    form: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    dose: String,
    amount: {
        type: String,
        required: true
    },
    prescription: {
        type: String,
        required: true
    },
    authorId: String,
    authorName: String,
    collectionId: String,
    collectionName: String,
    comments: [{ comment: String, author: String }]
}, { usePushEach: true }); // UsePushEach is workaround to support array fields in mongoose

mongoose.model('Item', itemSchema);