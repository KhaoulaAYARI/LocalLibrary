const mongoose = require("mongoose");
const Schema = mongoose.Schema; // ✅ Correction : 'Schema' avec majuscule

const BookSchema =new Schema({
  title: { type: String, required: true },
  author: { type: Schema.Types.ObjectId, ref: "Author", required: true },
  summary: { type: String, required: true },
  isbn: { type: String, required: true }
});

const Book = mongoose.model('Book', BookSchema); // ✅ Correction : Nom du modèle avec majuscule

module.exports = Book;