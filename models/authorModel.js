const mongoose = require("mongoose");
const Schema = mongoose.Schema; // ✅ Correction : 'Schema' avec majuscule

const AuthorSchema = new Schema({
  first_name: { type: String, required: true, maxLength: 100 },
  family_name: { type: String, required: true, maxLength: 100 },
  date_of_birth: { type: Date },
  date_of_death: { type: Date },
});

const Author = mongoose.model('Author', AuthorSchema); // ✅ Correction : Nom du modèle avec majuscule

module.exports = Author; // ✅ Export du modèle
