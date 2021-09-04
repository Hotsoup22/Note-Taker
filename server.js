const express = require('express');
// const path = require('path');
const api= require( './routes/index' );
const notesRouter = require('./routes/notes');
// Open port on Heroku or default to 3001;
const port = process.env.PORT || 3001;


const app = express();


// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', notesRouter);
app.use( '/', api);

app.use(express.static('public'));



console.log("server.js is loading")



app.listen(port, () =>
  console.log(`App listening at http://localhost:${port} 🚀`)
);
