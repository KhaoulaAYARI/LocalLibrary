const express=require("express");

//Require controller modules
const book_controller=require("../controllers/bookController");
const author_controller=require("../controllers/authorController");
const instance_controller=require("../controllers/instanceController");

const router=express.Router();

///BOOK ROUTES///

//GET catalog home page
router.get("/", book_controller.index);
//GET request for creating a book
router.get("/book/create", book_controller.book_create_get);
//POST request for creating a book
router.post("/book/create", book_controller.book_create_post);
//GET request to delete a book
router.get("book/:id/delete", book_controller.book_delete_get);
//POST request to delete a book
router.post("/book/:id/delete", book_controller.book_delete_get);
//GET request to update a book
router.get("/book/:id/update",book_controller.book_update_get);
//POST request to update a book
router.post("/book/:id/update",book_controller.book_update_post);
//GET request for one book
router.get("/book/:id", book_controller.book_detail);
//GET request for list of all book 
router.get("/books", book_controller.book_list);

///AUTHOR ROUTES///

// GET request for creating Author
router.get("/author/create", author_controller.author_create_get);

// POST request for creating Author.
router.post("/author/create", author_controller.author_create_post);

// GET request to delete Author.
router.get("/author/:id/delete", author_controller.author_delete_get);

// POST request to delete Author.
router.post("/author/:id/delete", author_controller.author_delete_post);

// GET request to update Author.
router.get("/author/:id/update", author_controller.author_update_get);

// POST request to update Author.
router.post("/author/:id/update", author_controller.author_update_post);

// GET request for one Author.
router.get("/author/:id", author_controller.author_detail);

// GET request for list of all Authors.
router.get("/authors", author_controller.author_list);

/// BOOKINSTANCE ROUTES ///

// GET request for creating a BookInstance. NOTE This must come before route that displays BookInstance (uses id).
router.get(
  "/bookinstance/create",
  instance_controller.bookinstance_create_get,
);

// POST request for creating BookInstance.
router.post(
  "/bookinstance/create",
  instance_controller.bookinstance_create_post,
);

// GET request to delete BookInstance.
router.get(
  "/bookinstance/:id/delete",
  instance_controller.bookinstance_delete_get,
);

// POST request to delete BookInstance.
router.post(
  "/bookinstance/:id/delete",
  instance_controller.bookinstance_delete_post,
);

// GET request to update BookInstance.
router.get(
  "/bookinstance/:id/update",
  instance_controller.bookinstance_update_get,
);

// POST request to update BookInstance.
router.post(
  "/bookinstance/:id/update",
  instance_controller.bookinstance_update_post,
);

// GET request for one BookInstance.
router.get("/bookinstance/:id", instance_controller.bookinstance_detail);

// GET request for list of all BookInstance.
router.get("/bookinstances", instance_controller.bookinstance_list);

module.exports = router;