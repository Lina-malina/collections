const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({
    title: String,
    text: {
        type: String,
        required: true,
    },
    color: String,
    createdDate: Date,
    author: String
});

mongoose.model('Note', noteSchema);