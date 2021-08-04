const express = require('express');

// Import our modular routers for /tips and /feedback
const homePageRouter = require('./homePage');
const notesRouter = require('./notes');

const app = express();

app.use('/homePage', homePageRouter);
app.use('/notes', notesRouter);

module.exports = app;
