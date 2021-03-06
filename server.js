// dependencies

const express = require('express');
const path = require('path');
const fs = require('fs');
let note =[];
//set up express

const app = express();
const PORT = 3009;

// data parsing

app.use(express.urlencoded({extended: true}));
app.use(express.json());

//sets up express app to work with static files
app.use(express.static('public'));


//routes
//get route note
app.get('/notes', (req, res) => res.sendFile(path.join(__dirname + "/public/notes.html")));

// api note route
app.get('/api/notes', (req, res) => res.json(note));

//get routes
app.get('/', (req, res) => res.sendFile(path.join(__dirname + "/public/index.html")));


//pp.post('/api/notes'
app.post('/api/notes', (req, res) => {

    const newNote = req.body;
 
    newNote.routeName = newNote.name;
    console.log(newNote);
  
    noteListItems.push(newNote);
    res.json(newNote);
  });
  
//app.delete('/api/not') CRUD

// Starts the server to begin listening

app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));