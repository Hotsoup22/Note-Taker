const express = require('express');
const path = require('path');
const { clog } = require('./middleware/clog');
const api = require('./routes/api/index');
const dbJson = require('./db/db.json')
const PORT = process.env.port || 3001;


const app = express();
// Import custom middleware, "cLog"
app.use(clog);

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', api);

app.use(express.static('public'));

// GET Route for homepage
app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);

// GET Route for feedback page
app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/notes.html'))
);
 


app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);
