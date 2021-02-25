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
