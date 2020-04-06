const mongoose = require('mongoose');
const Item = mongoose.model('Item');

module.exports.getItems = function(req, res) {
    Item.find({collectionId: req.query.collectionId}, function(err, items) {
        res.status(200).json(items);
    })
};
module.exports.searchItems = function(req, res) {
    Item.find({ name: { $regex: req.query.value, $options: 'i' }}, function(err, items) {
        res.status(200).json(items);
    })
};
module.exports.getItemById = function(req, res) {
    Item.findOne({ _id: req.params.id }, function(err, items) {
        res.status(200).json(items);
    })
};
module.exports.addItem = function(req, res) {
    const item = new Item({
        payment: req.body.payment,
        isDrug: req.body.isDrug,
        isPsycho: req.body.isPsycho,
        form: req.body.form,
        name: req.body.name,
        dose: req.body.dose,
        amount: req.body.amount,
        prescription: req.body.prescription,
        collectionId: req.body.collectionId,
        collectionName: req.body.collectionName,
        authorId: req.body.authorId,
        authorName: req.body.authorName,
        comments: []
    });
    item.save(function() {
        res.status(200).json();
    });
};
module.exports.editItem = function(req, res) {
    Item.findOne({_id: req.params.id}, function(err, item) {
        item.payment = req.body.payment,
        item.isDrug = req.body.isDrug,
        item.isPsycho = req.body.isPsycho,
        item.form = req.body.form,
        item.name = req.body.name,
        item.dose = req.body.dose,
        item.amount = req.body.amount,
        item.prescription = req.body.prescription,
  
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
module.exports.addComment = function(req, res) {
    Item.findOne({_id: req.params.id}, function(err, item) {
        item.comments.push({ comment: req.body.comment, author: req.body.name });
        
        item.save(function() {
            res.status(200).json();
        });
    });
};