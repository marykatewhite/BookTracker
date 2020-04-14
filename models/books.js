const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schema = new Schema({
  title: { 
    type: String,
    required: true
  },
  authors: {
      type: String,
      required: true
    },
  description: {
    type: String,
    required: true
  },
  imageURL: {
    type: String,
    required: true
  },
  link: {
    type: String,
    required: true
  }
});

const Book = mongoose.model("Book", schema);

module.exports = Book;