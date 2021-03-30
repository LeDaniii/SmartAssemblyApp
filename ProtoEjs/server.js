const mysql = require('mysql');
const express = require('express');
const path = require('path');

// console.log(path);

let app = express();

// set view engine
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));

// static files
app.use(express.static('public'));
app.use('/css', express.static(__dirname + 'public/css'));
app.use('/js', express.static(__dirname + 'public/js'));
app.use('/img', express.static(__dirname + 'public/img'));

//  ---------- Pages Start ----------
app.get('/', (req, res) => {
    res.render('pages/index');
});

app.get('/mainMenu', (req, res) => {
    res.render('pages/mainMenu');
});

app.get('/projectLogDirection', (req, res) => {
    res.render('pages/projectLogDirection');
});

app.get('/projectLogMyPlants', (req, res) => {
    res.render('pages/projectLogMyPlants');
});

app.get('/projectLogMachines', (req, res) => {
    res.render('pages/projectLogMachines');
});

//  ---------- Pages End ----------


app.listen('3000', () => {
    console.log('server started on port 3000')
});