const mongoose = require('mongoose');
const Note = mongoose.model('Note');

module.exports.getNotes = function(req, res) {
    console.log(req.payload)
    Note
    .find({author: req.payload._id})
    .exec(function(err, notes) {
        res.status(200).json(notes);
    });
};
module.exports.createNote = function(req, res) {
    const note = new Note({
        title: req.body.title,
        text: req.body.text,
        color: req.body.color,
        createdDate: new Date(),
        author: req.payload._id
    });

    note.save(function() {
        res.status(200).json();
    })
};
module.exports.deleteNote = function(req, res) {
    Note.deleteOne({_id: req.params.id}, function(err) {
        if (err) { return new Error; }
        res.status(200).json();
    })
}
module.exports.updNote = function(req, res) {
    Note.findOne({_id: req.params.id}, function(err, updNote) {
        if (err) { return new Error; }
        updNote.title = req.body.title;
        updNote.text = req.body.text;
        updNote.color = req.body.color;
  
        updNote.save(function() {
          res.status(200).json();
        })
    })
}



