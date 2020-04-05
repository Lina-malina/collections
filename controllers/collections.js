const mongoose = require('mongoose');
const Collection = mongoose.model('Collection');

module.exports.getCollections = function(req, res) {
    Collection.find(function(err, collections) {
        res.status(200).json(collections);
    })
};
module.exports.getUserCollections = function(req, res) {
    Collection.find({authorId: req.params.userId}, function(err, collections) {
        res.status(200).json(collections);
    })
};
module.exports.getCollectionById = function(req, res) {
    Collection.findOne({_id: req.params.id}, function(err, collection) {
        res.status(200).json(collection);
    })
};
module.exports.addCollection = function(req, res) {
    const collection = new Collection({
        fullName: req.body.fullName,
        isMale: req.body.isMale,
        dateOfBirth: req.body.dateOfBirth,
        address: req.body.address,
        number: req.body.number,
        doctorInCharge: req.body.doctorInCharge,
        authorId: req.body.authorId
    });

    collection.save(function() {
        res.status(200).json();
    });
};
module.exports.editCollection = function(req, res) {
    Collection.findOne({_id: req.params.id}, function(err, collection) {
        collection.fullName = req.body.fullName,
        collection.isMale = req.body.isMale,
        collection.dateOfBirth = req.body.dateOfBirth,
        collection.address = req.body.address,
        collection.number = req.body.number
  
        collection.save(function() {
            res.status(200).json();
        });
    });
};
module.exports.deleteCollection = function(req, res) {
    Collection.deleteOne({_id: req.params.id}, function() {
        res.status(200).json();
    });
};