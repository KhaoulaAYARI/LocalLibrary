const Author =require("../models/authorModel");
const asyncHandler=require("express-async-handler");

// Display list of all Authors.
exports.author_list = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Author list");
});

// display detail page for a specific author
exports.author_detail= asyncHandler(async(req,res,next)=>{
    res.send("NOT IMPLEMENTED: Author detail ${req.params.id}"); 
});

// display author create form on GET
exports.author_create_get=asyncHandler(async(req,res,next)=>
{
res.send("NOT IMPLEMENTED: Author create get")    
});

//Handel Author create on POST
exports.author_create_post=asyncHandler(async(req,res,next)=>
{
res.send("NOT IMPLEMENTED: Author create post")    
});

// Display Author delete form on GET.
exports.author_delete_get = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Author delete GET");
});

// Handle Author delete on POST.
exports.author_delete_post = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Author delete POST");
});

// Display Author update form on GET.
exports.author_update_get = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Author update GET");
});

// Handle Author update on POST.
exports.author_update_post = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Author update POST");
});
