const mongoose = require('mongoose');

const collectionSchema = new mongoose.Schema({
    fullName: {
        type: String,
        require: true
    },
    isMale: {
        type: Boolean,
        require: true
    },
    dateOfBirth: {
        type: String,
        require: true
    },
    address: {
        type: String,
        require: true
    },
    number: {
        type: String,
        require: true
    },
    doctorInCharge: String,
    authorId: String
});

mongoose.model('Collection', collectionSchema);