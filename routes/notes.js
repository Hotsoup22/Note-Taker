const Router = require('express').Router();
 const { v4: uuidv4 } = require('uuid');
// const { router } = require('.');

const { readFromFile, readAndAppend , readAndDelete} = require('../helpers/fsUtils');
console.log("notes.js is loading")

// /notes

// GET Route for retrieve information stored in db.json
Router.get('/notes', (req, res) =>
    readFromFile('db/db.json').then( (data) => res.json(JSON.parse(data)))
);

// POST Route for a new note
Router.post('/notes', (req, res) => {
    console.log(req.body);
  
    const { title, text } = req.body;
  
    if (req.body) {
      const newNote = {
       title,
        text,
         id: uuidv4()
      };
  
      readAndAppend(newNote, 'db/db.json');
      res.json(`newNote added successfully 🚀`);
    } else {
      res.error('Error in adding a newNote');
    }
  });

 Router.delete('/notes/:id', (req, res) => {

    const id = req.params.id
    console.log(id)

    readAndDelete(id, 'db/db.json');

    const response = {
        status: 'success',
        body: id,
    };

    res.json(response)
})



module.exports = Router;