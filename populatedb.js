const mongoose = require('mongoose');
const Author = require('./models/authorModel'); // Import du modèle
const Book = require('./models/bookModel'); // Import du modèle
const Instance = require('./models/instanceModel'); // Import du modèle

// Connexion à MongoDB
mongoose.connect('mongodb://localhost:27017/localLibrary', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("✅ Base MongoDB connectée"))
    .catch(err => console.error("❌ Erreur MongoDB :", err));

// Liste des auteurs à ajouter
/* const authors = [
     { first_name: "John", family_name: "Duo", date_of_birth: new Date("1802-02-26") },
     { first_name: "Jane", family_name: "Austen", date_of_birth: new Date("1775-12-16") },
     { first_name: "George", family_name: "Orwell", date_of_birth: new Date("1903-06-25") },
     { first_name: "J.K.", family_name: "Rowling", date_of_birth: new Date("1965-07-31") }
 ];*/

/*const books = [
    { title: "The Silent Echo", author: new mongoose.Types.ObjectId("6830911546cef0a0bd189a77"), summary: "A gripping mystery novel where a detective must decode a series of cryptic messages to uncover the truth.", isbn: "978-0-525-43210-3" },
    { title: "Beyond the Horizon", author: new mongoose.Types.ObjectId("683092183c3485d1cbc7374b"), summary: "An inspirational journey of self-discovery and adventure across the vast landscapes of the world.", isbn: "978-0-525-44444-3" },
    { title: "Whispers in the Dark", author: new mongoose.Types.ObjectId("683092183c3485d1cbc7374e"), summary: "A psychological thriller about a woman haunted by whispers leading her to uncover a long-buried secret.", isbn: "978-0-14-312777-1" },
    { title: "Chronicles of the Forgotten Realm", author: new mongoose.Types.ObjectId("683092183c3485d1cbc7374e"), summary: "An epic fantasy where ancient magic and war decide the fate of a crumbling kingdom.", isbn: "978-0-14-312774-1" },
    { title: "Artificial Minds", author: new mongoose.Types.ObjectId("683092183c3485d1cbc7374d"), summary: "A sci-fi tale exploring the ethical dilemmas of artificial intelligence and human consciousness.", isbn: "978-0-11-312774-1" },
    { title: "The Last Symphony", author: new mongoose.Types.ObjectId("683092183c3485d1cbc7374c"), summary: "A musician discovers a mysterious score that can alter reality through sound.", isbn: "978-0-22-312774-1" },
    { title: "The Shadow of the Phoenix", author: new mongoose.Types.ObjectId("683092183c3485d1cbc7374c"), summary: "A deep-sea diver embarks on a terrifying adventure into the uncharted depths.", isbn: "978-0-76-312774-1" }
];*/
const instances=[
    {book:new mongoose.Types.ObjectId("68309fa6ce088781d30d5a55"), imprint:"AAABBBCCCDDD1", status:"Available"},
    {book:new mongoose.Types.ObjectId("68309fa6ce088781d30d5a56"), imprint:"AAABBBCCCDDD2", status:"Available"},
    {book:new mongoose.Types.ObjectId("68309fa6ce088781d30d5a55"), imprint:"AAABBBCCCDDD3", status:"Reserved"},
    {book:new mongoose.Types.ObjectId("68309fa6ce088781d30d5a55"), imprint:"AAABBBCCCDDD4"}
];

 
// Ajout de plusieurs documents
const seedDatabase = async () => {
    await Instance.insertMany(instances); // ✅ Ajout de plusieurs auteurs
    console.log("✅ Base de données remplie avec plusieurs livres !");
    mongoose.connection.close(); // Fermer la connexion
};

// Exécuter l'insertion
seedDatabase();

