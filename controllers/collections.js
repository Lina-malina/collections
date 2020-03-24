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
        name: req.body.name,
        description: req.body.description,
        authorId: req.payload._id,
        authorName: req.payload.name
    });
    collection.save(function() {
        res.status(200).json();
    });
};
module.exports.editCollection = function(req, res) {
    Collection.findOne({_id: req.params.id}, function(err, collection) {
        collection.name = req.body.name,
        collection.description = req.body.description,
        collection.authorId = req.payload._id
  
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