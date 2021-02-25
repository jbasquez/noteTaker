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
//get routes
app.get('/', (req, res) => res.sendFile(path.join("./public/index.html")));

// Starts the server to begin listening

app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));
