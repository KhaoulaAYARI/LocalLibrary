const mongoose = require('mongoose');
const cors = require("cors");
const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const catalogRouter = require("./routes/catalog"); // Import catalog routes

const app = express();
app.use(cors());


// View engine setup (Pug)
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Define API routes
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use("/catalog", catalogRouter); // Catalog API routes

// Database connection (MongoDB)
mongoose.connect('mongodb://localhost:27017/localLibrary')
  .then(() => console.log('MongoDB connecté'))
  .catch(err => console.log(err));

// Serve **React Frontend** (Static Files)
app.use(express.static(path.join(__dirname, "client/build")));

// Catch-All Route for React (Handle Frontend Navigation)
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client/build", "index.html"));
});

// Catch 404 Errors
app.use(function(req, res, next) {
  next(createError(404));
});

// Error Handler
app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500);
  res.render('error');
});

// Run Express Server on Port 3000
app.listen(3000, () => {
  console.log('Serveur en ligne sur le port 3000');
});

module.exports = app;

