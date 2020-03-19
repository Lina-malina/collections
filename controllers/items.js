const mongoose = require('mongoose');
const Item = mongoose.model('Item');

module.exports.getItems = function(req, res) {
    Item.find({collectionId: req.query.collectionId}, function(err, items) {
        res.status(200).json(items);
    })
};
module.exports.addItem = function(req, res) {
    const item = new Item({
        name: req.body.name,
        isGeneric: req.body.isGeneric,
        form: req.body.form,
        description: req.body.description,
        collectionId: req.body.collectionId,
        authorId: req.payload._id
    });
    item.save(function() {
        res.status(200).json();
    });
};
module.exports.editItem = function(req, res) {
    Item.findOne({_id: req.params.id}, function(err, item) {
        item.name = req.body.name,
        item.isGeneric = req.body.isGeneric,
        item.form = req.body.form,
        item.description = req.body.description,
        item.authorId = req.payload._id
  
        item.save(function() {
            res.status(200).json();
        });
    });
};
module.exports.deleteItem = function(req, res) {
    Item.deleteOne({_id: req.params.id}, function() {
        res.status(200).json();
    });
};