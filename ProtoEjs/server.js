const mysql = require('mysql');
const express = require('express');
const path = require('path');

console.log(path);

let app = express();

// set view engine
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended:true }));
