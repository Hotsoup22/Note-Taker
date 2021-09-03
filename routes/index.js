const Router = require('express').Router();
const path = require('path');
// Import our modular routers for /tips and /feedback





// GET Route for homepage
Router.get('/', (req, res) =>{
    console.log('anything')
  res.sendFile(path.join(__dirname, '../public/index.html'))
});

Router.get('/notes', (req, res) =>{
    console.log('anything')
  res.sendFile(path.join(__dirname, '../public/notes.html'))
});

// 

module.exports = Router;

