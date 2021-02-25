// dependencies

const express = require('express');
const path = require('path');
const fs = require('fs');

//set up express

const app = express();
const PORT = 8888;

// data parsing

app.use(express.urlencoded({extended: true}));
app.use(express.json());

//sets up express app to work with static files
app.use(express.static('public'));

//routes
//get route note
app.get('/notes', (req, res) => res.sendFile(path.join(__dirname + "/Develop/public/notes.html")));

//get routes
app.get('/', (req, res) => res.sendFile(path.join(__dirname + "/Develop/public/index.html")));

// app.get('/api/notes')
//app.get('/api/notes', (req, res) => res.json(notes));

// app.post('/api/notes'
//app.post('/api/notes', (req, res) => {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware
//     const newNote = req.body;
 
//     newNote.routeName = newNote.name.toLowerCase();
//     console.log(newNote);
  
//     noteListItems.push(newNote);
//     res.json(newNote);
//   });
  
//app.delete('/api/not') CRUD

// Starts the server to begin listening

app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));
