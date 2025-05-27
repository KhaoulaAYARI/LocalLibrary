const mongoose = require("mongoose");
const Schema = mongoose.Schema; // ✅ Correction : 'Schema' avec majuscule

const instanceSchema = new Schema({
  book: { type: Schema.Types.ObjectId, ref: "Book", required: true }, // reference to the associated book
  imprint: { type: String, required: true },
  status: {
    type: String,
    required: true,
    enum: ["Available", "Maintenance", "Loaned", "Reserved"],
    default: "Maintenance",
  },
  due_back: { type: Date, default: Date.now },
});


const Instance = mongoose.model('Instance', instanceSchema); // ✅ Correction : Nom du modèle avec majuscule

module.exports = Instance;