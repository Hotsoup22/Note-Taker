const Router = require('express').Router();
const { readFromFile, readAndAppend } = require('../helpers/fsUtils');
// const uuid = require('../helpers/uuid');


Router.get('/notes', (req, res) => {
  console.info(`${req.method} request received for feedback.`);

  readFromFile('/db/db.json').then((data) => res.json(JSON.parse(data)));
});

//POST Route for submitting feedback
// Router.post('/notes', (req, res) => {
//   // Log that a POST request was received
//   console.info(`${req.method} request received to submit feedback02.`);

// // Destructuring assignment for the items in req.body
//   const { Title , Text } = req.body;

//   // If all the required properties are present
//   if (Title && Text ) {
//     // Variable for the object we will save
//     const newNote = {
//       title: noteTitle.value,
//       text: noteText.value,
//     };

//     readAndAppend(newNote, '/db/db.json');

//     const response = {
//       status: 'success',
//       body: newNote,
//     };

//     res.json(response);
//   } else {
//     res.json('Error in posting feedback03.');
//   }
//  });

module.exports = Router;
