const mongoose = require('mongoose');

const medicineSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    isGeneric: Boolean,
    type: String,
    description: String,
    authorId: Number
})

mongoose.model('Medicine', medicineSchema)