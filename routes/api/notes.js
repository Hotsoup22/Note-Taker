const Router = require('express').Router();
const { readFromFile, readAndAppend } = require('../helpers/fsUtils');
// const uuid = require('../helpers/uuid');
const dbJson = require('../../db/db.json')






// '/api/notes'
Router.post('/', (req, res) => {
   // Log that a POST request was received
   console.info(`${req.method} request received to submit feedback02.`);

   // Destructuring assignment for the items in req.body
  //    const { Title , Text } = req.body;
  //  console.log(Title);
  //    // If all the required properties are present
      if (req.body ) {
        const newNote = req.body
  //      // Variable for the object we will save
  //      const newNote = {
  //        title: Title,
  //        text: Text
  //      };
   
       readAndAppend(newNote,'F:/Note-Taker/db/db.json');
   
       const response = {
         status: 'success',
         body: newNote,
       };
   
       res.json(response);
     } else {
       res.json('Error in posting feedback03.');
     }
});

Router.get('/', (req, res) => {
  console.info(`${req.method} request received for feedback`);

  readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
});
module.exports = Router;