const express = require("express");
const router = express.Router();
const Book = require("../models/bookModel");
const BookInstance = require("../models/instanceModel");
const Author = require("../models/authorModel");

// API to fetch library record counts (instead of Pug rendering)
router.get("/api/library-stats", async (req, res) => {
    try {
        const book_count = await Book.countDocuments();
        const book_instance_count = await BookInstance.countDocuments();
        const book_instance_available_count = await BookInstance.countDocuments({ status: "Available" });
        const author_count = await Author.countDocuments();
        console.log({ book_count, book_instance_count, book_instance_available_count, author_count }); // Debugging log
        res.json({ book_count, book_instance_count, book_instance_available_count, author_count });
    } catch (error) {
        console.error("Database Error:", error);
        res.status(500).json({ message: "Error fetching library stats" });
    }
});
//comptage manuel
router.get("/test-db", async (req, res) => {
    try {
        const books = await Book.find();
        res.json(books);
    } catch (error) {
        res.status(500).json({ message: "Erreur MongoDB", error });
    }
});


// Default home route to serve React frontend
router.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../client/build", "index.html"));
});

module.exports = router;

