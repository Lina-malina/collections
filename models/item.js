const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    isGeneric: Boolean,
    form: String,
    description: String,
    authorId: Number
})

mongoose.model('Item', itemSchema)